import KleverWeb from "@klever/kleverweb";
import {
  IContractRequest,
  ITransaction,
  ITxOptionsRequest,
} from "@klever/kleverweb/dist/types/dtos";
import core from "../core";
import {
  ErrEmptyAddress,
  ErrInvalidAddress,
  ErrLoadKleverWeb,
} from "../core/errors";
import { IAccountNonce, INodeAccount } from "../types";

class Account {
  constructor(
    address: string,
    nodeUrl?: string,
    apiUrl?: string,
    privateKey?: string
  ) {
    if (address.length === 0) {
      throw ErrEmptyAddress;
    }

    if (address.length !== 62) {
      throw ErrInvalidAddress;
    }

    if (!globalThis?.kleverWeb) {
      const kleverWeb = new KleverWeb(
        address,
        nodeUrl || "https://node.testnet.klever.finance",
        apiUrl || "https://api.testnet.klever.finance"
      );

      globalThis.kleverWeb = {
        ...globalThis?.kleverWeb,
        ...kleverWeb,
      };
    }

    globalThis.kleverWeb.setWalletAddress(address);
    privateKey && globalThis.kleverWeb.setPrivateKey(privateKey);

    core.setProvider({
      node: nodeUrl || "https://node.testnet.klever.finance",
      api: apiUrl || "https://api.testnet.klever.finance",
    });
  }

  getWalletAddress(): string {
    return globalThis.kleverWeb.getWalletAddress();
  }

  async getAccount() {
    if (!core.isKleverWebActive()) {
      throw ErrLoadKleverWeb;
    }

    if (globalThis.kleverWeb.getWalletAddress().length === 0) {
      throw ErrEmptyAddress;
    }

    const request = await fetch(
      `${
        globalThis.kleverWeb.provider.node
      }/address/${globalThis.kleverWeb.getWalletAddress()}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const response: INodeAccount = await request.json();
    if (response.error.length !== 0) {
      return 0;
    }

    return response.data.account;
  }

  async getNonce() {
    const request = await fetch(
      `${
        globalThis.kleverWeb.provider.node
      }/address/${globalThis.kleverWeb.getWalletAddress()}/nonce`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const response: IAccountNonce = await request.json();

    return response.data;
  }

  buildTransaction = core.buildTransaction;

  signTransaction = core.signTransaction;

  validateSignature = core.validateSignature;

  signMessage = core.signMessage;

  broadcastTransactions = core.broadcastTransactions;
}

export default Account;
