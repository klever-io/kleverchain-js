import {
  IContractRequest,
  ITxOptionsRequest,
  ITransaction,
  IBroadcastResponse,
} from "@klever/kleverweb/dist/types/dtos";
import { IAccountInfo } from "./dtos";

export interface IAccount {
  // address: string; // private attributes and methods
  // balance: number;
  // nonce: number;
  // init(): Promise<void>;

  ready: Promise<void>;

  getBalance(): number;
  getNonce(): number;
  getAddress(): string;
  Sync(): Promise<void>;
  getInfo(): Promise<IAccountInfo>;
  buildTransaction(
    contracts: IContractRequest[],
    txData?: string[],
    options?: ITxOptionsRequest
  ): Promise<ITransaction>;
  signMessage(message: string): Promise<string>;
  signTransaction(tx: ITransaction): Promise<ITransaction>;
  quickSend(
    contracts: IContractRequest[],
    txData?: string[],
    options?: ITxOptionsRequest
  ): Promise<IBroadcastResponse>;
  broadcastTransactions(txs: ITransaction[]): Promise<IBroadcastResponse>;
}
