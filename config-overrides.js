const { override, fixBabelImports, addWebpackAlias } = require("customize-cra");
const { resolve } = require("path");
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd-mobile",
    style: "css",
  }),
  addWebpackAlias({
    "@": resolve("src"),
  })
);
