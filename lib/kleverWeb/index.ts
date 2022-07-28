import { IProvider } from "../types";
import {
  IBroadcastResponse,
  IContractRequest,
  ITransaction,
  ITxOptionsRequest,
  ITxRequest,
} from "../types/dtos";

export class KleverWeb {
  private provider: IProvider;
  private address: string;

  active = false;

  constructor(address: string, nodeUrl: string, apiUrl: string) {
    if (address && address.length != 62) {
      throw "invalid address length";
    }

    this.address = address;
    this.active = address ? true : false;
    this.provider = {
      node: nodeUrl,
      api: apiUrl,
    };
  }

  setWalletAddress = (address: string) => {
    if (address.length != 62) {
      throw "invalid address length";
    }
    this.address = address;
    this.active = true;
  };

  getWalletAddress = (): string => {
    return this.address;
  };

  getNonce = async (): Promise<number> => {
    const res = await fetch(
      `${this.provider.node}/address/${this.address}/nonce`
    );

    const { data } = await res.json();

    return data?.nonce || 0;
  };

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

    const nonce = options?.nonce ? options.nonce : await this.getNonce();
    const permID = options?.permID || 0;

    const txBody: ITxRequest = {
      type: fistContractType,
      nonce,
      sender: this.address,
      data: txData || [],
      permID,
      contracts: payloads,
    };

    const req = await fetch(`${this.provider.node}/transaction/send`, {
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

  broadcastTransactions = async (
    txs: ITransaction[]
  ): Promise<IBroadcastResponse> => {
    const res = await fetch(`${this.provider.node}/transaction/broadcast`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ txs: [...txs] }),
    });

    return await res.json();
  };

  signTransaction = globalThis?.kleverWeb?.signTransaction as (
    tx: ITransaction
  ) => Promise<ITransaction>;

  signMessage = globalThis?.kleverWeb?.signMessage as (
    msg: string
  ) => Promise<string>;

  validateSignature = globalThis?.kleverWeb?.validateSignature as (
    msg: string,
    signature: string,
    pubKey: string
  ) => Promise<boolean>;
}

export default KleverWeb;
