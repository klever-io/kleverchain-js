import {
  IBroadcastResponse,
  IContractRequest,
  ITransaction,
  ITxOptionsRequest,
  ITxRequest,
} from "@klever/kleverweb/dist/types/dtos";
import utils from "../utils";
import {
  IAccountInfo,
  IAccountResponse,
  INodeAccountResponse,
} from "../types/dtos";

import * as ed from "@noble/ed25519";

import * as fs from "node:fs/promises";

class Account {
  private privateKey!: string;
  private address!: string;
  private balance!: number;
  private nonce!: number;
  ready: Promise<void>;

  constructor(privateKey?: string) {
    if (privateKey) {
      this.privateKey = privateKey;
      this.ready = this.init(privateKey);
    } else {
      this.ready = this.init();
    }
  }

  private async init(privateKey?: string) {
    try {
      if (privateKey) {
        this.address = await utils.getAddressFromPrivateKey(this.privateKey);
      } else {
        const keyPair = await utils.generateKeyPair();
        this.privateKey = keyPair.privateKey;
        this.address = keyPair.address;
      }
      await this.Sync();
    } catch (e) {
      this.address = "";
      this.balance = 0;
      this.nonce = 0;

      console.log(e);
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
      `${utils.getProviders().node}/address/${this.address}`,
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
        `${utils.getProviders().node}/address/${this.address}`,
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

    const req = await fetch(`${utils.getProviders().node}/transaction/send`, {
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

  signTransaction = async (
    tx: ITransaction,
    autoSync = true
  ): Promise<ITransaction> => {
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

    if (autoSync) {
      await this.Sync();
    }

    return signedTx;
  };

  quickSend = async (
    contracts: IContractRequest[],
    txData?: string[],
    options?: ITxOptionsRequest
  ): Promise<IBroadcastResponse> => {
    const tx = await this.buildTransaction(contracts, txData, options);

    const signedTx = await this.signTransaction(tx);

    return utils.broadcastTransactions([signedTx]);
  };

  downloadAsPem = async (path?: string) => {
    path = path || `./${this.address.slice(-5)}.pem`;

    const publicKey = await ed.getPublicKey(this.privateKey);

    const pemString = Buffer.from(
      Buffer.from(this.privateKey).toString() +
        Buffer.from(publicKey).toString("hex")
    ).toString("base64");

    const pemFormattedString =
      pemString.slice(0, 64) +
      "\n" +
      pemString.slice(64, 128) +
      "\n" +
      pemString.slice(128);

    const pem = `-----BEGIN PRIVATE KEY for ${this.address}-----
${pemFormattedString}
-----END PRIVATE KEY for ${this.address}-----`;

    fs.writeFile(`${path}`, pem);
  };

  broadcastTransactions = utils.broadcastTransactions;
}

export default Account;
