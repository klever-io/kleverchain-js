import KleverWeb from "@klever/kleverweb";
import {
  IBroadcastResponse,
  IContractRequest,
  ITxOptionsRequest,
} from "@klever/kleverweb/dist/types/dtos";
import { IProvider, ITransaction } from "..";
import { ErrLoadKleverWeb } from "./errors";

import * as ed from "@noble/ed25519";

import { bech32 } from "bech32";

const isKleverWebLoaded = () => {
  return !!globalThis?.kleverWeb;
};

const isKleverWebActive = () => {
  return !!globalThis?.kleverWeb?.address;
};

const initialize = async () => {
  await globalThis?.kleverWeb?.initialize();
};

const getWalletAddress = (): string => {
  return globalThis?.kleverWeb?.getWalletAddress();
};

const getProvider = (): IProvider => {
  return globalThis?.kleverWeb?.getProvider();
};

const setProvider = (pvd: IProvider) => {
  return globalThis?.kleverWeb?.setProvider(pvd);
};

const broadcastTransactions = async (
  transactions: ITransaction[]
): Promise<IBroadcastResponse> => {
  if (!isKleverWebActive()) {
    throw ErrLoadKleverWeb;
  }

  const response = await globalThis.kleverWeb.broadcastTransactions(
    transactions
  );

  return response;
};

const signMessage = async (
  message: string,
  privateKey: string
): Promise<string> => {
  if (!isKleverWebActive()) {
    throw ErrLoadKleverWeb;
  }

  const payload = JSON.stringify({
    message,
    privateKey,
  });

  const response = await globalThis?.kleverWeb?.signMessage(payload);

  return response;
};

const signTransaction = async (tx: ITransaction): Promise<ITransaction> => {
  if (!isKleverWebActive()) {
    throw ErrLoadKleverWeb;
  }

  const response = await globalThis?.kleverWeb?.signTransaction(tx);

  return response;
};

const validateSignature = async (
  message: string,
  signature: string,
  publicKey: string
): Promise<boolean> => {
  if (!isKleverWebActive()) {
    throw ErrLoadKleverWeb;
  }

  let response;
  if (typeof window !== "undefined") {
    const payload = JSON.stringify({
      message,
      signature,
      publicKey,
    });

    response = await globalThis?.kleverWeb?.validateSignature(payload);
  } else if (typeof global !== "undefined") {
    response = await ed.verify(signature, message, publicKey);
  } else {
    throw new Error("neither global nor window is defined");
  }

  return response;
};

const buildTransaction = async (
  contracts: IContractRequest[],
  txData?: string[],
  options?: ITxOptionsRequest
): Promise<ITransaction> => {
  return globalThis?.kleverWeb?.buildTransaction(contracts, txData, options);
};

const localSignMessage = async (
  message: string,
  privateKey: string
): Promise<string> => {
  const signature = await ed.sign(message, privateKey);

  const parsedSignature = Buffer.from(signature).toString("base64");

  return parsedSignature;
};

const localSignTransaction = async (
  tx: ITransaction,
  privateKey: string
): Promise<ITransaction> => {
  if (!isKleverWebActive()) {
    throw ErrLoadKleverWeb;
  }

  let hash;

  try {
    const req = await fetch(
      `https://node.mainnet.klever.finance/transaction/decode`,
      {
        method: "POST",
        body: JSON.stringify(tx),
      }
    );

    const res = await req.json();
    hash = res.data.tx.hash;
  } catch (e) {
    console.log(e);
  }
  const signature = await localSignMessage(hash, privateKey);

  const signedTx = {
    ...tx,
    Signature: [signature],
  };

  return signedTx;
};

const nodeSetup = (address: string, providers?: IProvider) => {
  if (!address) {
    throw new Error("address is required");
  }

  const kleverWeb = new KleverWeb(
    address,
    providers || {
      node: "https://node.mainnet.klever.finance",
      api: "https://api.mainnet.klever.finance",
    }
  );
  globalThis.kleverWeb = {
    ...globalThis.kleverWeb,
    ...kleverWeb,
  };
};

const getAddressFromPrivateKey = async (
  privateKey: string
): Promise<string> => {
  const publicKey = await ed.getPublicKey(privateKey);
  const address = bech32.encode("klv", bech32.toWords(publicKey));

  return address;
};

const generateKeyPair = async (): Promise<{
  privateKey: string;
  address: string;
}> => {
  const privateKey = Buffer.from(ed.utils.randomPrivateKey()).toString("hex");
  const publicKey = await ed.getPublicKey(privateKey);

  const address = bech32.encode("klv", bech32.toWords(publicKey));

  return {
    privateKey,
    address,
  };
};

const core = {
  isKleverWebLoaded,
  isKleverWebActive,
  broadcastTransactions,
  signMessage,
  signTransaction,
  validateSignature,
  buildTransaction,
  initialize,
  getWalletAddress,
  getProvider,
  setProvider,
  localSignTransaction,
  localSignMessage,
  nodeSetup,
  getAddressFromPrivateKey,
  generateKeyPair,
};

export default core;
