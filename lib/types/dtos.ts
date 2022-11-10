export interface IAccountInfo {
  address: string;
  nonce: number;
  rootHash: string;
  balance: number;
  allowance: number;
  timestamp: number;
}

export interface IAccountResponse {
  data: {
    account: IAccountInfo;
  };
  error: string;
  code: string;
}

export interface INodeAccountResponse {
  data: {
    account: {
      Address: string;
      RootHash: string;
      Balance: number;
      Nonce?: number;
      Allowance?: number;
    };
  };
  error: string;
  code: string;
}
export interface IAccountNonceResponse {
  data: {
    firstPendingNonce: number;
    nonce: number;
    txPending: number;
  };
  error: string;
  code: string;
}
