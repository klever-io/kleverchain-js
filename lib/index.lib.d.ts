interface Window {
  go: any;
  parsePemFileData(pemData: string): Promise<IPemResponse>;
  sendTransfer(payload: string): Promise<ITransactionResponse>;
  createMarketplace(payload: string): Promise<ITransactionResponse>;
}
