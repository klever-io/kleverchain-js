import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";

import packageJson from "./package.json";

const config = [
  {
    input: "lib/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
  {
    input: "./build.js",
    output: [
      {
        file: "dist/build.js",
        format: "cjs",
      },
    ],
    plugins: [terser()],
  },
  {
    input: "./kleverSDKLoader.js",
    output: [
      {
        file: "dist/kleverSDKLoader.js",
        format: "cjs",
      },
    ],
    plugins: [terser()],
  },
];

export default config;
