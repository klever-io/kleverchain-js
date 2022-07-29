export interface IAccount {
  data: {
    account: {
      address: string;
      nonce: number;
      rootHash: string;
      balance: number;
      allowance: number;
      timestamp: number;
    };
  };
  error: string;
  code: string;
}

export interface INodeAccount {
  data: {
    account: {
      Address: string;
      RootHash: string;
      Balance: number;
      Nonce: number;
      Allowance: number;
    };
  };
  error: string;
  code: string;
}
export interface IAccountNonce {
  data: {
    firstPendingNonce: number;
    nonce: number;
    txPending: number;
  };
  error: string;
  code: string;
}
