#!/bin/bash

PROJECT_NAME="kapps-demo"

yarn build
mkdir -p ../${PROJECT_NAME}/node_modules/@klever/sdk/dist
\cp package.json README.md ../${PROJECT_NAME}/node_modules/@klever/sdk
\cp -r dist/* ../${PROJECT_NAME}/node_modules/@klever/sdk/dist