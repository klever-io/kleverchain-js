export interface IPemResponse {
  address: string;
  privateKey: string;
}

export enum TransactionType {
  Transfer = 0,
  CreateMarketplace = 20,
}
