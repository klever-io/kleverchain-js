import {
  IBroadcastResponse,
  IContractRequest,
  ITransaction,
  ITxOptionsRequest,
  ITxRequest,
} from "@klever/kleverweb/dist/types/dtos";
import core from "../core";
import {
  IAccountInfo,
  IAccountResponse,
  INodeAccountResponse,
} from "../types/dtos";

import * as ed from "@noble/ed25519";
import { IAccount } from "../types";

class Account implements IAccount {
  private privateKey: string;
  private address!: string;
  private balance!: number;
  private nonce!: number;
  ready: Promise<void>;

  constructor(privateKey: string) {
    this.privateKey = privateKey;
    this.ready = this.init();
  }

  private async init() {
    try {
      this.address = await core.getAddressFromPrivateKey(this.privateKey);
      this.Sync();
    } catch (e) {
      this.address = "";
      this.balance = 0;
      this.nonce = 0;
      throw e;
    }
  }

  getBalance(): number {
    return this.balance;
  }

  getNonce(): number {
    return this.nonce;
  }
  getAddress(): string {
    return this.address;
  }

  async Sync() {
    const addressReq = await fetch(
      `${core.getProviders().node}/address/${this.address}`,
      {
        method: "GET",
      }
    );

    const addressRes: INodeAccountResponse = await addressReq.json();

    this.balance = addressRes.data.account.Balance;
    this.nonce = addressRes.data.account.Nonce ?? 0;
  }

  async getInfo(): Promise<IAccountInfo> {
    try {
      const addressReq = await fetch(
        `${core.getProviders().node}/address/${this.address}`,
        {
          method: "GET",
        }
      );

      const addressRes: IAccountResponse = await addressReq.json();
      return addressRes.data.account;
    } catch (e) {
      throw e;
    }
  }

  buildTransaction = async (
    contracts: IContractRequest[],
    txData?: string[],
    options?: ITxOptionsRequest
  ): Promise<ITransaction> => {
    if (contracts?.length === 0) {
      throw "empty contracts";
    }

    const fistContractType = contracts[0]?.type;
    const payloads = contracts.map((contract) => {
      if (contract.type != fistContractType) {
        throw "Multiple contracts of different types are not supported yet";
      }

      return contract.payload;
    });

    const nonce = options?.nonce ? options.nonce : this.nonce;
    const permID = options?.permID || 0;

    const txBody: ITxRequest = {
      type: fistContractType,
      nonce,
      sender: this.address,
      data: txData || [],
      permID,
      contracts: payloads,
    };

    const req = await fetch(`${core.getProviders().node}/transaction/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(txBody),
    });

    const res = await req.json();
    if (res?.error) throw res?.error;

    if (!res?.data && !res?.data?.result) {
      throw "failed to generate transaction";
    }

    return res.data.result as ITransaction;
  };

  signMessage = async (message: string): Promise<string> => {
    const signature = await ed.sign(message, this.privateKey);

    const parsedSignature = Buffer.from(signature).toString("base64");

    return parsedSignature;
  };

  signTransaction = async (tx: ITransaction): Promise<ITransaction> => {
    let hash;

    try {
      const req = await fetch(
        `https://node.mainnet.klever.finance/transaction/decode`, //needs to be mainnet, it is broken on other networks as of now
        {
          method: "POST",
          body: JSON.stringify(tx),
        }
      );

      const res = await req.json();
      hash = res.data.tx.hash;
    } catch (e) {
      console.log(e);
    }
    const signature = await this.signMessage(hash);

    const signedTx = {
      ...tx,
      Signature: [signature],
    };

    return signedTx;
  };

  quickSend = async (
    contracts: IContractRequest[],
    txData?: string[],
    options?: ITxOptionsRequest
  ): Promise<IBroadcastResponse> => {
    const tx = await this.buildTransaction(contracts, txData, options);

    const signedTx = await this.signTransaction(tx);

    return core.broadcastTransactions([signedTx]);
  };

  broadcastTransactions = core.broadcastTransactions;
}

export default Account;
