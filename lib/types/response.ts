export interface ITransactionResponse {
  txHashes: string[];
  txCount: number;
}

interface IBucket {
  id: string;
  stakeAt: number;
  stakedEpoch: number;
  unstakedEpoch: number;
  balance: number;
  delegation: string;
}

export interface IAsset {
  address: string;
  assetId: string;
  balance: number;
  frozenBalance: number;
  lastClaim: {
    timestamp: number;
    epoch: number;
  };
  buckets: IBucket[];
}

export interface IAccountResponse {
  data: {
    account: {
      address: string;
      nonce: number;
      rootHash: string;
      balance: number;
      allowance: number;
      timestamp: number;
      assets: {
        [asset: string]: IAsset;
      };
    };
  };
  error: string;
  code: string;
}
