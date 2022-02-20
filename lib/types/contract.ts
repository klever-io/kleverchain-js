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
  bucketId: string;
  asset?: string;
}
