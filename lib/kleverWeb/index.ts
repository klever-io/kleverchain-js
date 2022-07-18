import core from "../core";
import Send from "../send";

class KleverWeb {
  private provider: any;
  private address: string;

  active = false;

  constructor(address: string, nodeUrl: string, apiUrl: string) {
    this.address = address;
    this.provider = {
      api: apiUrl,
      node: nodeUrl,
    };
  }

  createAccount = core.createAccount;
  setWalletAddress = "not implemented";
  getWalletAddress = "not implemented";

  broadcast = "not implemented";
  sendTx = Send;
  signTx = "not implemented";

  signMessage = "not implemented";
  verifySignature = "not implemented";
}

export default KleverWeb;
