const ErrFetchFile = new Error("cannot fetch wasm file");
const ErrFetchBuffer = new Error("cannot get buffer from file");
const ErrLoadSdk = new Error("sdk is not loaded yet");
const ErrEmptyAddress = new Error("account address is empty");

export { ErrFetchFile, ErrFetchBuffer, ErrLoadSdk, ErrEmptyAddress };
