declare module globalThis {
  var Go: any;
  var kleverchainUrls: any;
  var kleverWeb: kleverWeb;
}

interface kleverWeb {
  createAccount(): Promise<IPemResponse>;
  getAccount(address: string): Promise<IAccount>;

  parsePemFileData(pemData: string): Promise<IPemResponse>;

  broadcast(payload: string): Promise<IBroadcastResponse>;
  signTx(payload: string): Promise<ISignatureResponse>;

  signMessage(payload: string): Promise<ISignatureResponse>;
  verifySignature(payload: string): Promise<IVerifyResponse>;
  sendTransaction(
    type: string | number,
    payload: string,
    props: string
  ): Promise<ITransactionResponse>;
}
