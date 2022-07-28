import {
  IBroadcastResponse,
  IRawData,
  ISignatureResponse,
  ITransaction,
} from "./types/dtos";

declare global {
  var Go: any;
  var kleverWeb: kleverWeb;
}

interface kleverWeb {
  provider: any;
  active: boolean;

  createAccount(): Promise<IPemResponse>;
  getAccount(address: string): Promise<IAccount>;

  parsePemFileData(pemData: string): Promise<IPemResponse>;
  setApiUrl(url: string): Promise<void>;
  setNodeUrl(url: string): Promise<void>;

  broadcastTransactions(payload: ITransaction[]): Promise<IBroadcastResponse>;
  signTransaction(payload: ITransaction): Promise<ISignatureResponse>;

  setWalletAddress(payload: string): Promise<void>;
  setPrivateKey(payload: string): Promise<void>;

  signMessage(payload: string): Promise<string>;
  validateSignature(payload: string): Promise<IVerifyResponse>;
  buildTransaction(
    contracts: IContractRequest[],
    txData?: string[],
    options?: ITxOptionsRequest
  ): Promise<ITransaction>;
}
