import { Account, IProvider, ITransaction } from "..";

import * as ed from "@noble/ed25519";

import { IBroadcastResponse } from "@klever/kleverweb/dist/types/dtos";
import { bech32 } from "bech32";
import { IDecodedTransaction } from "../types/dtos";

const decodeAddress = async (address: string): Promise<Uint8Array> => {
  const decoded = bech32.decode(address);
  return Uint8Array.from(bech32.fromWords(decoded.words));
};

const encodeAddress = (address: Uint8Array): string => {
  const encoded = bech32.encode("klv", bech32.toWords(address));
  return encoded
};

const toHex = (data: Uint8Array): string => {
  return Buffer.from(data).toString("hex");
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

const getProviders = (): IProvider => {
  return (
    globalThis.kleverProviders || {
      node: "https://node.mainnet.klever.finance",
      api: "https://api.mainnet.klever.finance",
    }
  );
};

const setProviders = (providers: IProvider) => {
  globalThis.kleverProviders = providers;
  return;
};

const broadcastTransactions = async (
  txs: ITransaction[] | string[]
): Promise<IBroadcastResponse> => {
  const res = await fetch(`${getProviders().node}/transaction/broadcast`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ txs }),
  });

  return await res.json();
};

const decodeTransaction = async (
  tx: ITransaction
): Promise<IDecodedTransaction> => {
  const req = await fetch(`${getProviders().node}/transaction/decode`, {
    method: "POST",
    body: JSON.stringify(tx),
  });

  const res = await req.json();
  if (res?.error) throw res?.error;

  return res.data;
};

const transactionsProcessed = async (
  txs: Promise<IBroadcastResponse>[],
  tries = 10
): Promise<IDecodedTransaction[]> => {
  const res = await Promise.all(txs);

  const hashes: string[] = [];
  res.forEach((tx) => {
    hashes.push(...tx.data.txsHashes);
  });

  const processedRequest: Promise<IDecodedTransaction>[] = hashes.map(
    async (hash) => {
      const array = Array.from({ length: tries }, (_, i) => i);
      let error = "";

      for (const i of array) {
        const fetchPromise = fetch(`${getProviders().api}/transaction/${hash}`);

        const result = await fetchPromise;
        const data = await result.json();

        if (data && !data.error) {
          return data.data;
        } else if (data.error) {
          error = data;
        }

        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
      throw error;
    }
  );

  return await Promise.all(processedRequest);
};

const accountsReady = async (accounts: Account[]): Promise<void> => {
  const promises: Promise<void>[] = [];

  accounts.forEach((account) => {
    promises.push(account.ready);
  });

  await Promise.all(promises);
};

const validateSignature = async (
  message: string,
  signature: string,
  address: string
): Promise<boolean> => {
  const publicKey = await decodeAddress(address);

  const response = await ed.verify(signature, message, publicKey);

  return response;
};

const utils = {
  getAddressFromPrivateKey,
  generateKeyPair,
  getProviders,
  setProviders,
  broadcastTransactions,
  decodeTransaction,
  transactionsProcessed,
  accountsReady,
  decodeAddress,
  encodeAddress,
  toHex,
  validateSignature,
};

export default utils;
