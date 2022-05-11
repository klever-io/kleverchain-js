export interface ITransactionResponse {
  txHashes: string[];
  txCount: number;
}

export interface IPemResponse {
  address: string;
  privateKey: string;
}
