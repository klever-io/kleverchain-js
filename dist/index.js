"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAccount = exports.sendTransaction = exports.getAccountByPem = exports.Account = exports.initialize = void 0;
const account_1 = __importDefault(require("./account"));
exports.Account = account_1.default;
const core_1 = require("./core");
Object.defineProperty(exports, "getAccountByPem", { enumerable: true, get: function () { return core_1.getAccountByPem; } });
Object.defineProperty(exports, "createAccount", { enumerable: true, get: function () { return core_1.createAccount; } });
const transaction_1 = require("./transaction");
Object.defineProperty(exports, "sendTransaction", { enumerable: true, get: function () { return transaction_1.sendTransaction; } });
const initialize = () => __awaiter(void 0, void 0, void 0, function* () {
    const { instance } = yield WebAssembly.instantiateStreaming(fetch("SDK.wasm"), window.go.importObject);
    yield window.go.run(instance);
});
exports.initialize = initialize;
