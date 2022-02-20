interface Window {
  go: any;
  parsePemFileData(pemData: string): Promise<IPemResponse>;
  createAccount(): Promise<IPemResponse>;

  sendTransfer(payload: string): Promise<ITransactionResponse>;
  createMarketplace(payload: string): Promise<ITransactionResponse>;
  sendFreeze(payload: string): Promise<ITransactionResponse>;
  sendUnfreeze(payload: string): Promise<ITransactionResponse>;
  sendWithdraw(payload: string): Promise<ITransactionResponse>;
}
