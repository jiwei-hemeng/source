const {
  override,
  fixBabelImports,
  addWebpackAlias,
  addWebpackExternals,
} = require("customize-cra");
const { resolve } = require("path");
// 生产环境下cdn引入资源
let externalsOption = {};
if (process.env.NODE_ENV === "production") {
  externalsOption = {
    react: "React",
    "react-dom": "ReactDOM",
    "react-router-dom": "ReactRouter",
    axios: "axios",
  };
}
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
