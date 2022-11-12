## [![npm version](https://badge.fury.io/js/@klever%2Fsdk.svg)](https://badge.fury.io/js/@klever%2Fsdk)

# Kleverchain SDK library

The SDK module provides a quick and easy way to make contract calls to the blockchain directly.

For a more detailed and organized documentation, please visit the official [Kleverchain SDK Documentation](https://klever.gitbook.io/kleverchain-sdk/) website.

### Installation

```bash
$ npm install @klever/sdk
```

or

```bash
$ yarn add @klever/sdk
```

<br/>
<br/>
<br/>

# Setup

## Web App

> Since v3 it is ready to use since installation!

<br/>
<hr/>

## NodeJS

> NodeJS is supported since v3.2.1

> NodeJS must be above version 18.0.0

<br/>
<br/>
<br/>

# Basic usage

## Web App

There are two ways to make a contract call: you can call only one method passing the contract data or you can create an instance of an account.

Both ways are very similar (as of v3), but with the account one you have additional methods for get the account info.

With a simple call:

```ts
import { web, ITransfer, TransactionType } from "@klever/sdk";

const payload: ITransfer = {
  amount: 100 * 10 ** 6,
  receiver: "receiverAddress",
  kda: "KLV",
};

const unsignedTx = await web.buildTransaction([
  {
    payload,
    type: TransactionType.Transfer,
  },
]);

const signedTx = await web.signTransaction(unsignedTx);

const response = await web.broadcastTransactions([signedTx]);
```

<hr/>

## NodeJS

If you are using NodeJS, before calling any methods, you must call
utils.setProviders(providers)

You must also use the localSignTransaction and localSignMessage methods when signing.

Ex:

```ts
import { Account, TransactionType } from "@klever/sdk";

const payload = {
  amount,
  receiver,
  kda,
};

const privateKey = "yourPrivateKey";

const account = new Account(privateKey);

const unsignedTx = await account.buildTransaction([
  {
    payload,
    type: TransactionType.Transfer,
  },
]);

const signedTx = await account.localSignTransaction(unsignedTx);

const broadcastRes = await account.broadcastTransactions([signedTx]);

console.log(broadcastRes);
```

## Changing Network

The default network is the Kleverchain Mainnet, but if you want to use the Kleverchain Testnet or a local version of the Kleverchain, you can change the kleverWeb provider object by setting it before calling the initialize function.

In web app:

```ts
import { web, IProvider } from '@klever/sdk';
...
  const provider:IProvider = {
      api: 'https://api.testnet.klever.finance',
      node: 'https://node.testnet.klever.finance'
  };

  window.kleverWeb.provider = provider;
  web.initialize();
...
```

In NodeJS:

```ts
import { utils, IProvider } from "@klever/sdk";
...
  const provider: IProvider = {
    api: "https://api.testnet.klever.finance",
    node: "https://node.testnet.klever.finance",
  };

  utils.setProviders(provider);
...
```

## Generating and importing accounts

Using the SDK you can generate and import accounts using the following methods from the `utils` object:

- generateKeyPair
- getAddressFromPrivateKey

Generating a key pair:

```ts
import { utils } from '@klever/sdk';
...

  const { privateKey, address } = await utils.generateKeyPair();

...
```

Importing an account:

```ts
import { utils } from '@klever/sdk';
...
  const privateKey; // your private key
  const address = await utils.getAddressFromPrivateKey(privateKey);

...
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
- `Unjail`
- `SetAccountName`
- `UpdateAccountPermission`

## Usage Inside a Context

If you want a global instance of your account to use throughout your app, you can create a custom hook to help you with that.
Using React as an example, you can create a MyCustomHook.tsx file and create your provider as follows:

```ts
import { useState, createContext, useContext } from "react";
import { Account, utils } from "@klever/sdk";

interface ISdkContext {
  isLoaded(): Promise<boolean>;
  getAccount(): Account | null;
  setAccount(account: Account): void;
}

const SdkContext = createContext({} as ISdkContext);

const SdkProvider: React.FC = ({ children }) => {
  const [acc, setAcc] = useState<Account | null>(null);

  const values: ISdkContext = {
    isLoaded: () => utils.isKleverWebLoaded(),
    getAccount: () => acc,
    setAccount: (account) => setAcc(account),
  };
  return <SdkContext.Provider value={values}>{children}</SdkContext.Provider>;
};

const useSdk = () => useContext(SdkContext);

export { SdkContext, SdkProvider, useSdk };
```

And wrap your entire App.tsx in it:

```ts
import { SdkProvider } from './MyCustomHook';

...
  <SdkProvider>
    ...
      <App /> // or <Router /> or <Component />
    ...
  </SdkProvider>
...
```

With that, you can use it on any child component you want, without the need to instantiate an account every time:

```ts
import { useSdk } from './MyCustomHook';
...
const sdk = useSdk();
const account = sdk.getAccount();
...
await account.buildTransaction([
      {
        payload,
        type: TransactionType.Transfer,
      },
]);
...
```

> The same pattern of global provider can be achieved in any framework you want, not only React.
