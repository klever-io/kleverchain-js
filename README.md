## [![npm version](https://badge.fury.io/js/@klever%2Fsdk.svg)](https://badge.fury.io/js/@klever%2Fsdk)

# Kleverchain SDK library

The SDK module provides a quick and easy way to make contract calls to the blockchain directly.

### Installation

```bash
$ npm install @klever/sdk
```

or

```bash
$ yarn add @klever/sdk
```

## Basic usage

After instalation the KleverSDK folder will automatically appears inside your public, assets or static folder.
To initialize the WASM file into your DOM only a import of the loader script is needed on your `index.html`:

```html
if you're using React:
<script src="%PUBLIC_URL%/kleverSDK/kleverSDKLoader.js"></script>
if you're using Vue or Svelte:
<script src="/kleverSDK/kleverSDKLoader.js"></script>
if you're using Sveltekit:
<script src="%sveltekit.assets%/kleverSDK/kleverSDKLoader.js"></script>
if you're using Angular
<script src="assets/kleverSDK/kleverSDKLoader.js"></script>
and so on ...
```

To make a contract call, there are _two ways_, you can call only one method passing the user data plus the contract data or you can create an instance of an account.

> Sender address and private key is require in all transactions

With simple call:

```ts
import { TransactionType } from "@klever/sdk/types";
import { sendTransaction } from "@klever/sdk";

const transactionType = TransactionType.Transfer;
const transactionPayload = {
  sender: "address",
  privateKey: "privateKey",
  receiver: "receiver",
  amount: 100,
};

sendTransaction(transactionType, transactionPayload);
```

With account instance:

```ts
import { Account } from "@klever/sdk";

const account = new Account("address", "privateKey");
const transactionPayload = {
  receiver: "receiver",
  amount: 100,
};

account.sendTransfer(transactionPayload);
```

## Transactions

All available transactions:

- `Transfer`
- `CreateMarket`
- `Freeze`
- `Unfreeze`
- `Withdraw`
- `Delegate`
- `Undelegate`
- `Set account name`
- `Votes`
- `Claim`
- `Cancel market order`
- `Sell order`
- `Buy order`
- `Create Asset`
- `Proposal`
- `Config market`
- `Create validator`
- `Config validator`
- `Config ITO`
- `Asset Trigger`
