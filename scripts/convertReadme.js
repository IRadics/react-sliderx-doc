var fs = require("fs");

const sourceFiles = fs.readdirSync("./docs/");

console.log("Converting docs...");

function convertReadme(file) {
  var data = fs.readFileSync(`./docs/${file}`, "utf-8");

  var headerRegex = data.match(/title:(.*)$/m);
  var header = headerRegex ? headerRegex[1] : "";

  data = data.replace(/<!--ExcludeStart-->[.\S\s]*<!--ExcludeEnd-->/gi, "");

  data = data.replace(/\[(.*?)\]\(.*?\)/gm, "$1");

  data = data.replace(/\/\/[\s]*highlight-next-line[\s]*/g, "");

  data = data.replace(
    /^(?<!\n)---[\s\S]*?---[\s]*/gi,
    `${header ? `## ${header}\n` : ""}`
  );

  if (!fs.existsSync("./readmeTemp")) {
    fs.mkdirSync("./readmeTemp");
  }

  fs.writeFileSync(`./readmeTemp/${file.split(".")[0]}.md`, data, "utf-8");

  console.log(`Created ${file} for readme`);
}

sourceFiles.forEach((file) => {
  if (file.endsWith(".md") || file.endsWith(".mdx")) convertReadme(file);
});
