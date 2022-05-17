import React, { createContext, useContext, useEffect, useState } from "react";
import { Account } from "..";
import core from "../core";

import { ErrFetchBuffer, ErrFetchFile } from "../core/errors";
import { ISdkContext } from "../types";

const SdkContext = createContext({} as ISdkContext);

const SdkProvider: React.FC = ({ children }) => {
  const [loaded, setLoaded] = useState(false);
  const [acc, setAcc] = useState<Account | null>(null);

  const initialize = async () => {
    const file = await fetch("KleverSDK.wasm");
    if (!file) {
      throw ErrFetchFile;
    }

    const buffer = await file.arrayBuffer();
    if (!buffer) {
      throw ErrFetchBuffer;
    }

    const mod = await WebAssembly.compile(buffer);
    const instance = await WebAssembly.instantiate(mod, window.go.importObject);

    window.go.run(instance);

    setLoaded(true);
    core.handleLoad();
  };

  useEffect(() => {
    initialize();
  }, []);

  const values: ISdkContext = {
    isLoaded: () => loaded,
    getAccount: () => acc,
    setAccount: (account) => setAcc(account),
  };
  return <SdkContext.Provider value={values}>{children}</SdkContext.Provider>;
};

const useSdk = () => useContext(SdkContext);

export { SdkContext, SdkProvider, useSdk };
