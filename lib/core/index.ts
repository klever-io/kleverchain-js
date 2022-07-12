import Account from "../account";
import { IURLs } from "../types";
import {
  IBroadcastResponse,
  IPemResponse,
  ISignatureResponse,
} from "../types/dtos";
import { ErrLoadSdk } from "./errors";

const isSDKLoaded = async () => {
  if (!!globalThis.kleverWeb.getAccount) return true;

  for (let i = 0; i < 100; i++) {
    const isLoaded = await new Promise((resolve) =>
      setTimeout(() => resolve(!!globalThis.kleverWeb.getAccount), 50)
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

const broadcastTransactions = async (
  transactions: string
): Promise<IBroadcastResponse> => {
  if (!(await isSDKLoaded())) {
    throw ErrLoadSdk;
  }

  const response = await globalThis.kleverWeb.broadcast(transactions);

  return response;
};

const setURLs = (url: IURLs) => {
  globalThis.kleverchainUrls = url;
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

const verifySignature = async (
  message: string,
  signature: string,
  publicKey: string
): Promise<ISignatureResponse> => {
  if (!(await isSDKLoaded())) {
    throw ErrLoadSdk;
  }

  const payload = JSON.stringify({
    message,
    signature,
    publicKey,
  });

  const response = await globalThis.kleverWeb.verifySignature(payload);

  return response;
};

const core = {
  getAccountByPem,
  createAccount,
  isSDKLoaded,
  broadcastTransactions,
  setURLs,
  signMessage,
  verifySignature,
};

export default core;
