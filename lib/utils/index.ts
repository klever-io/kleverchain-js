import { IProvider, ITransaction } from "..";

import * as ed from "@noble/ed25519";

import { IBroadcastResponse } from "@klever/kleverweb/dist/types/dtos";
import { bech32 } from "bech32";
import { IDecodedTransaction } from "../types/dtos";

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
  return (globalThis.kleverProviders = providers);
};

const broadcastTransactions = async (
  txs: ITransaction[]
): Promise<IBroadcastResponse> => {
  const res = await fetch(`${getProviders().node}/transaction/broadcast`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ txs: [...txs] }),
  });

  return await res.json();
};

const decodeTransaction = async (
  tx: ITransaction
): Promise<IDecodedTransaction> => {
  const req = await fetch(
    `https://node.mainnet.klever.finance/transaction/decode`, //needs to be mainnet, it is broken on other networks as of now
    {
      method: "POST",
      body: JSON.stringify(tx),
    }
  );

  const res = await req.json();
  if (res?.error) throw res?.error;

  return res.data;
};

const utils = {
  getAddressFromPrivateKey,
  generateKeyPair,
  getProviders,
  setProviders,
  broadcastTransactions,
  decodeTransaction,
};

export default utils;
