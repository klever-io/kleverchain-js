interface Window {
  go: any;
  parsePemFileData(pemData: string): Promise<IPemResponse>;
  createAccount(): Promise<IPemResponse>;

  sendTransfer(payload: string): Promise<ITransactionResponse>;
  createMarketplace(payload: string): Promise<ITransactionResponse>;
  sendFreeze(payload: string): Promise<ITransactionResponse>;
  sendUnfreeze(payload: string): Promise<ITransactionResponse>;
  sendWithdraw(payload: string): Promise<ITransactionResponse>;
  sendUndelegate(payload: string): Promise<ITransactionResponse>;
  sendDelegate(payload: string): Promise<ITransactionResponse>;
  setAccountName(payload: string): Promise<ITransactionResponse>;
  sendVotes(payload: string): Promise<ITransactionResponse>;
  sendClaim(payload: string): Promise<ITransactionResponse>;
  sendUnjail(payload: string): Promise<ITransactionResponse>;
  sendCancelMarketOrder(payload: string): Promise<ITransactionResponse>;
  sendSellOrder(payload: string): Promise<ITransactionResponse>;
  sendBuyOrder(payload: string): Promise<ITransactionResponse>;
  sendCreateAsset(payload: string): Promise<ITransactionResponse>;
  sendProposal(payload: string): Promise<ITransactionResponse>;
  sendConfigMarketplace(payload: string): Promise<ITransactionResponse>;
  sendCreateValidator(payload: string): Promise<ITransactionResponse>;
}
