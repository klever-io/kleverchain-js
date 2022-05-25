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

After instalation, the KleverSDK folder will automatically appears inside your public, assets or static folder.

To load the KleverSDK WASM file into your DOM you just need to import the loader script in your `index.html` or `app.html`:


You can achieve this placing one of the script tags below:

```tsx
//If you're using React:
<script src="%PUBLIC_URL%/kleverSDK/kleverSDKLoader.js"></script>
```

```tsx
//If you're using Vue or Svelte:
<script src="/kleverSDK/kleverSDKLoader.js"></script>
```

```tsx
//If you're using Sveltekit:
<script src="%sveltekit.assets%/kleverSDK/kleverSDKLoader.js"></script>
```

```tsx
//If you're using Angular:
<script src="assets/kleverSDK/kleverSDKLoader.js"></script>
```

```tsx
//If you're using NextJS:
import Script from "next/script";

<Script
  src="/kleverSDK/kleverSDKLoader.js"
  strategy="beforeInteractive"
/>
```
>And so on, you can use any framework you'd like...

To make a contract call, there are _two ways_, you can call only one method passing the user data plus the contract data or you can create an instance of an account.

> Sender address and private key is require in all transactions

With a simple call:

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

With an account instance:

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
- `Freeze`
- `Unfreeze`
- `Delegate`
- `Undelegate`
- `Claim`
- `Withdraw`
- `CreateAsset`
- `AssetTrigger`
- `ConfigITO`
- `CreateMarketplace`
- `ConfigMarketplace`
- `Sell`
- `Buy`
- `CancelMarketOrder`
- `Proposal`
- `Vote`
- `CreateValidator`
- `ConfigValidator`
- `SetAccountName`
