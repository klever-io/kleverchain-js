export interface ITransfer {
  receiver: string;
  amount: number;
  asset?: string;
}

export interface ICreateMarket {
  name: string;
  referralAddress?: string;
  referralPercentage: number;
}

export interface IFreeze {
  amount: number;
  asset?: string;
}

export interface IUnfreeze {
  bucketID: string;
  asset?: string;
}

export interface IWithdraw {
  assetId: string;
}

export interface IUndelegate {
  bucketID: string;
}

export interface IDelegate {
  bucketID: string;
}

export interface ISetAccountName {
  name: string;
}

export interface IVotes {
  amount: number;
  proposalID: number;
}

export interface IClaim {
  claimType: number;
  id: string;
}
