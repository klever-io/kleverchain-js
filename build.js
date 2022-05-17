#!/usr/bin/env node

const https = require("https");
const fs = require("fs");

((url, dest, cb) => {
  console.log(__dirname);
  const file = fs.createWriteStream(dest);
  https
    .get(url, function (response) {
      response.pipe(file);
      file.on("finish", function () {
        file.close(cb);
      });
    })
    .on("error", function (err) {
      fs.unlink(dest);
      if (cb) cb(err.message);
    });
})(
  "https://kleverchain-wasm.s3.eu-central-1.amazonaws.com/KleverSDK.wasm",
  "../../public",
  () => {}
);
