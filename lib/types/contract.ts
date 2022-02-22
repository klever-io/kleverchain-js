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

export interface ICancelMarketOrder {
  orderId: string;
}

export interface ISellOrder {
  marketType: number;
  marketplaceId: string;
  assetId: string;
  currencyId: string;
  price: number;
  reservePrice: number;
  endTime: number;
}

export interface IBuyOrder {
  buyType: number;
  id: string;
  currencyId: string;
  amount: number;
}

export interface ICreateAsset {
  name: string;
  ticker: string;
  owner: string;
  precision: number;
  uris: string;
  initialSupply: number;
  circulatingSupply: number;
  maxSupply: number;
  type?: number;
  staking?: Staking;
  royalties?: Royalties;
  roles?: Roles[];
  properties?: Properties;
  attributes?: Attributes;
}

interface Staking {
  type: number;
  apr: number;
  minEpochsToClaim: number;
  minEpochsToUnstake: number;
  minEpochsToWithdraw: number;
}

interface Royalties {
  address?: string;
  transferPercentage?: RoyaltyInfo[];
  transferFixed?: number;
  marketPercentage?: number;
  marketFixed?: number;
}

interface RoyaltyInfo {
  amount?: number;
  percentage?: number;
}

interface Roles {
  address: string;
  hasRoleMint: boolean;
  hasRoleSetICOPrices: boolean;
}

interface Properties {
  canFreeze?: boolean;
  canWipe?: boolean;
  canPause?: boolean;
  canMint?: boolean;
  canBurn?: boolean;
  canChangeOwner?: boolean;
  canAddRoles?: boolean;
}

interface Attributes {
  isPaused?: boolean;
  isNFTMintStopped?: boolean;
}

export interface IProposal {
  parameter: number;
  epochsDuration: number;
  value: string;
  description: string;
}

export interface IConfigMarket {
  name: string;
  marketID: string;
  referralAddress?: string;
  referralPercentage: number;
}
