import { TransactionType } from ".";
import { IPayload } from "./contract";

interface Contract {
  Type: number;
  Parameter: IContractParameter;
}
export interface IContractParameter {
  type_url: string;
  value: string;
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
  data: {
    txsHashes: string[];
  };
  error: string;
  code: string;
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
export interface ITxRequest {
  type: TransactionType;
  sender: string;
  nonce: number;
  contracts: IPayload[];
  data?: string[];
  permID?: number;
}
