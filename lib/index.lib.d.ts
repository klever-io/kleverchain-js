declare module globalThis {
  var Go: any;
  var kleverWeb: kleverWeb;
}

interface kleverWeb {
  provider: any;

  createAccount(): Promise<IPemResponse>;
  getAccount(address: string): Promise<IAccount>;

  parsePemFileData(pemData: string): Promise<IPemResponse>;
  setApiUrl(url: string): Promise<void>;
  setNodeUrl(url: string): Promise<void>;

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
