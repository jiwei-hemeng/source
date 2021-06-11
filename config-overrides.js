const {
  override,
  fixBabelImports,
  addWebpackAlias,
  addWebpackExternals,
} = require("customize-cra");
// 生产环境下按需加载
let externalsOption = {};
if (process.env.NODE_ENV === "production") {
  externalsOption = {
    react: "React",
    "react-dom": "ReactDOM",
    "react-router-dom": "ReactRouter",
    axios: "axios",
  };
}
const { resolve } = require("path");
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd-mobile",
    style: "css",
  }),
  addWebpackAlias({
    "@": resolve("src"),
  }),
  addWebpackExternals(externalsOption)
);
