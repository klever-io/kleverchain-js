declare module globalThis {
  var Go: any;
  function getAccount(address: string): Promise<IAccount>;
  function parsePemFileData(pemData: string): Promise<IPemResponse>;
  function createAccount(): Promise<IPemResponse>;

  interface IContractProps {
    previousTX?: string;
    metadata?: string;
  }

  function sendTransfer(
    payload: string,
    props: string
  ): Promise<ITransactionResponse>;
  function sendCreateMarketplace(
    payload: string,
    props: string
  ): Promise<ITransactionResponse>;
  function sendFreeze(
    payload: string,
    props: string
  ): Promise<ITransactionResponse>;
  function sendUnfreeze(
    payload: string,
    props: string
  ): Promise<ITransactionResponse>;
  function sendWithdraw(
    payload: string,
    props: string
  ): Promise<ITransactionResponse>;
  function sendUndelegate(
    payload: string,
    props: string
  ): Promise<ITransactionResponse>;
  function sendDelegate(
    payload: string,
    props: string
  ): Promise<ITransactionResponse>;
  function setAccountName(
    payload: string,
    props: string
  ): Promise<ITransactionResponse>;
  function sendVotes(
    payload: string,
    props: string
  ): Promise<ITransactionResponse>;
  function sendClaim(
    payload: string,
    props: string
  ): Promise<ITransactionResponse>;
  function sendUnjail(
    payload: string,
    props: string
  ): Promise<ITransactionResponse>;
  function sendCancelMarketOrder(
    payload: string,
    props: string
  ): Promise<ITransactionResponse>;
  function sendSellOrder(
    payload: string,
    props: string
  ): Promise<ITransactionResponse>;
  function sendBuyOrder(
    payload: string,
    props: string
  ): Promise<ITransactionResponse>;
  function sendCreateAsset(
    payload: string,
    props: string
  ): Promise<ITransactionResponse>;
  function sendProposal(
    payload: string,
    props: string
  ): Promise<ITransactionResponse>;
  function sendConfigMarketplace(
    payload: string,
    props: string
  ): Promise<ITransactionResponse>;
  function sendCreateValidator(
    payload: string,
    props: string
  ): Promise<ITransactionResponse>;
  function sendConfigValidator(
    payload: string,
    props: string
  ): Promise<ITransactionResponse>;
  function sendConfigITO(
    payload: string,
    props: string
  ): Promise<ITransactionResponse>;
  function sendAssetTrigger(
    payload: string,
    props: string
  ): Promise<ITransactionResponse>;
  function sendUpdateAccountPermission(
    payload: string,
    props: string
  ): Promise<ITransactionResponse>;
  function sendSetITOPrices(
    payload: string,
    props: string
  ): Promise<ITransactionResponse>;
  function broadcast(payload: string): Promise<IBroadcastResponse>;
}
