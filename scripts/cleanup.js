var fs = require("fs");

console.log("Cleaning up temporary files...");

fs.rmSync("./readmeTemp", { recursive: true, force: true });

console.log("Cleanup finished");
