const {
  override,
  fixBabelImports,
  addWebpackAlias,
  addWebpackExternals,
} = require("customize-cra");
const { resolve } = require("path");
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd-mobile",
    style: "css",
  }),
  addWebpackAlias({
    "@": resolve("src"),
  }),
  addWebpackExternals({
    react: "React",
    "react-dom": "ReactDOM",
  })
);
