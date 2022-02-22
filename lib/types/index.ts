export interface IPemResponse {
  address: string;
  privateKey: string;
}

export enum TransactionType {
  Transfer,
  CreateMarketplace,
  ConfigMarketplace,
  Freeze,
  Unfreeze,
  Withdraw,
  Undelegate,
  Delegate,
  SetAccountName,
  Votes,
  Claim,
  Unjail,
  CancelMarketOrder,
  SellOrder,
  BuyOrder,
  CreateAsset,
  Proposal,
  CreateValidator,
  ConfigValidator,
}
