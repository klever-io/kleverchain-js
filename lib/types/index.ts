export interface IPemResponse {
  address: string;
  privateKey: string;
}

export enum TransactionType {
  Transfer,
  CreateMarketplace,
  Freeze,
  Unfreeze,
  Withdraw,
  Undelegate,
  Delegate,
  SetAccountName,
  Votes,
}
