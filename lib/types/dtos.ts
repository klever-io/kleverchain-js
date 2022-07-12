interface Contract {
  Type: number;
  Parameter: any;
}

export interface ITransactionResponse {
  RawData: {
    Version: number;
    ChainID: number;
    Nonce: number;
    Sender: string;
    Contract: Contract[];
    KAppFee: number;
    BandwidthFee: number;
  };
  Signature: string[];
}

export interface IBroadcastResponse {
  txHashes: string[];
  txCount: number;
}

export interface ISignatureResponse {
  signature: string;
}
export interface IVerifyResponse {
  valid: boolean;
}
export interface IPemResponse {
  address: string;
  privateKey: string;
}
