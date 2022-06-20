declare module globalThis {
  var Go: any;
  function getAccount(address: string): Promise<IAccount>;
  function parsePemFileData(pemData: string): Promise<IPemResponse>;
  function createAccount(): Promise<IPemResponse>;

  function sendTransfer(payload: string): Promise<ITransactionResponse>;
  function sendCreateMarketplace(
    payload: string
  ): Promise<ITransactionResponse>;
  function sendFreeze(payload: string): Promise<ITransactionResponse>;
  function sendUnfreeze(payload: string): Promise<ITransactionResponse>;
  function sendWithdraw(payload: string): Promise<ITransactionResponse>;
  function sendUndelegate(payload: string): Promise<ITransactionResponse>;
  function sendDelegate(payload: string): Promise<ITransactionResponse>;
  function setAccountName(payload: string): Promise<ITransactionResponse>;
  function sendVotes(payload: string): Promise<ITransactionResponse>;
  function sendClaim(payload: string): Promise<ITransactionResponse>;
  function sendUnjail(payload: string): Promise<ITransactionResponse>;
  function sendCancelMarketOrder(
    payload: string
  ): Promise<ITransactionResponse>;
  function sendSellOrder(payload: string): Promise<ITransactionResponse>;
  function sendBuyOrder(payload: string): Promise<ITransactionResponse>;
  function sendCreateAsset(payload: string): Promise<ITransactionResponse>;
  function sendProposal(payload: string): Promise<ITransactionResponse>;
  function sendConfigMarketplace(
    payload: string
  ): Promise<ITransactionResponse>;
  function sendCreateValidator(payload: string): Promise<ITransactionResponse>;
  function sendConfigValidator(payload: string): Promise<ITransactionResponse>;
  function sendConfigITO(payload: string): Promise<ITransactionResponse>;
  function sendAssetTrigger(payload: string): Promise<ITransactionResponse>;
  function sendUpdateAccountPermission(
    payload: string
  ): Promise<ITransactionResponse>;
  function sendSetITOPrices(payload: string): Promise<ITransactionResponse>;
}
