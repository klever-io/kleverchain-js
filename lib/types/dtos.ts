import { TransactionType } from ".";
import { IPayload } from "./contract";

interface Contract {
  Type: number;
  Parameter: any;
}

export interface IRawData {
  Version: number;
  ChainID: number;
  Nonce: number;
  Sender: string;
  Contract: Contract[];
  KAppFee: number;
  BandwidthFee: number;
}

export interface ITransaction {
  RawData: IRawData;
  Signature?: string[];
}

export interface IBroadcastResponse {
  txHash: string;
  txCount: number;
}

export interface ISignatureResponse extends ITransaction {
  Signature: string[];
}
export interface IVerifyResponse {
  valid: boolean;
}
export interface IPemResponse {
  address: string;
  privateKey: string;
}

export interface IContractRequest {
  type: TransactionType;
  payload: IPayload;
}

export interface ITxOptionsRequest {
  nonce?: number;
  permID?: number;
}
