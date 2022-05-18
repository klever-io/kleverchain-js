const path = require("path");
const https = require("https");
const fs = require("fs");

(() => {
  const bin = "KleverSDK.wasm";
  const url = `https://kleverchain-wasm.s3.eu-central-1.amazonaws.com/${bin}`;
  const dest = path.join(__dirname, "..", "..", "..", "..", "public");

  try {
    fs.mkdirSync(dest, { recursive: true });
  } catch (e) {
    if (e.code != "EEXIST") throw e;
  }

  const file = fs.createWriteStream(path.join(dest, bin), {});
  https
    .get(url, function (response) {
      response.pipe(file);
      file.on("finish", function () {
        file.close();
      });
    })
    .on("error", function (err) {
      fs.unlink(path.join(dest, bin));
    });
})();
