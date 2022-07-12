declare module globalThis {
  var Go: any;
  var kleverchainUrls: any;
  var kleverWeb: kleverWeb;
}

interface kleverWeb {
  getAccount(address: string): Promise<IAccount>;
  parsePemFileData(pemData: string): Promise<IPemResponse>;
  createAccount(): Promise<IPemResponse>;

  sendTransaction(
    type: string | number,
    payload: string,
    props: string
  ): Promise<ITransactionResponse>;
  broadcast(payload: string): Promise<IBroadcastResponse>;
  signTx(payload: string): Promise<ITransactionResponse>;
}
