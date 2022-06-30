const path = require("path");
const https = require("https");
const fs = require("fs");

(() => {
  const folder = "kleverSDK";
  const loader = "kleverSDKLoader.js";
  const fileName = "KleverSDK";
  const fileExtension = "wasm";
  const bin = fileName + "." + fileExtension;
  const version = "2.0";
  const url = `https://kleverchain-wasm.s3.eu-central-1.amazonaws.com/${
    fileName + version
  }.${fileExtension}`;

  var rootFolder = __dirname.split("/node_modules").shift();

  if (fs.existsSync(path.join(rootFolder, "public"))) {
    rootFolder = path.join(rootFolder, "public", folder);
  } else if (fs.existsSync(path.join(rootFolder, "static"))) {
    rootFolder = path.join(rootFolder, "static", folder);
  } else if (fs.existsSync(path.join(rootFolder, "src", "assets"))) {
    rootFolder = path.join(rootFolder, "src", "assets", folder);
  } else {
    rootFolder = path.join(rootFolder, folder);
  }

  try {
    fs.mkdirSync(rootFolder, { recursive: true });
  } catch (e) {
    if (e.code != "EEXIST") throw e;
  }

  const file = fs.createWriteStream(path.join(rootFolder, bin), {});
  https
    .get(url, function (response) {
      response.pipe(file);
      file.on("finish", function () {
        file.close();

        fs.copyFile(
          path.join(__dirname, loader),
          path.join(rootFolder, loader),
          (err) => {
            if (err) throw err;
          }
        );
      });
    })
    .on("error", function (err) {
      fs.unlink(path.join(rootFolder, bin));
    });
})();
