import Account from "../account";
import { IURLs } from "../types";
import {
  IBroadcastResponse,
  IPemResponse,
  ISignatureResponse,
  ITransaction,
  IRawData,
  IVerifyResponse,
} from "../types/dtos";
import { ErrLoadSdk } from "./errors";

const isSDKLoaded = async () => {
  if (!!globalThis?.kleverWeb?.getAccount) return true;
  if (!!globalThis?.kleverWeb?.active) return true;

  for (let i = 0; i < 100; i++) {
    const isLoaded = await new Promise((resolve) =>
      setTimeout(() => resolve(!!globalThis?.kleverWeb?.getAccount), 50)
    );

    if (isLoaded) return true;
  }

  return false;
};

const getAccountByPem = async (pemData: string): Promise<Account> => {
  if (!(await isSDKLoaded())) {
    throw ErrLoadSdk;
  }

  const { address, privateKey } = await globalThis.kleverWeb.parsePemFileData(
    pemData
  );

  return new Account(address, privateKey);
};

const createAccount = async (): Promise<IPemResponse> => {
  if (!(await isSDKLoaded())) {
    throw ErrLoadSdk;
  }

  const account = await globalThis.kleverWeb.createAccount();

  return account;
};

const broadcastTransaction = async (
  transaction: ITransaction
): Promise<IBroadcastResponse> => {
  if (!(await isSDKLoaded())) {
    throw ErrLoadSdk;
  }

  const response = await globalThis.kleverWeb.broadcastTransaction(transaction);

  return response;
};

const setURLs = async (url: IURLs) => {
  globalThis.kleverWeb = {
    ...globalThis.kleverWeb,
    provider: url,
  };
  if (!(await isSDKLoaded())) {
    return;
  }
  if (url.api) {
    await globalThis.kleverWeb.setApiUrl(url.api);
  }
  if (url.node) {
    await globalThis.kleverWeb.setNodeUrl(url.node);
  }
};

const signMessage = async (
  message: string,
  privateKey: string
): Promise<ISignatureResponse> => {
  if (!(await isSDKLoaded())) {
    throw ErrLoadSdk;
  }

  const payload = JSON.stringify({
    message,
    privateKey,
  });

  const response = await globalThis.kleverWeb.signMessage(payload);

  return response;
};

const signTransaction = async (
  tx: ITransaction
): Promise<ISignatureResponse> => {
  if (!(await isSDKLoaded())) {
    throw ErrLoadSdk;
  }

  const response = await globalThis.kleverWeb.signTransaction(tx);

  return response;
};

const verifySignature = async (
  message: string,
  signature: string,
  publicKey: string
): Promise<IVerifyResponse> => {
  if (!(await isSDKLoaded())) {
    throw ErrLoadSdk;
  }

  const payload = JSON.stringify({
    message,
    signature,
    publicKey,
  });

  const response = await globalThis.kleverWeb.validateSignature(payload);

  return response;
};

const core = {
  getAccountByPem,
  createAccount,
  isSDKLoaded,
  broadcastTransaction,
  setURLs,
  signMessage,
  signTransaction,
  verifySignature,
};

export default core;
