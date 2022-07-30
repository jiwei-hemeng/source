const {
  override,
  fixBabelImports,
  addWebpackAlias,
  addWebpackExternals,
  setWebpackPublicPath,
} = require("customize-cra");
const {
  resolve
} = require("path");
const rewirePostcss = require("react-app-rewire-postcss");
process.env.GENERATE_SOURCEMAP = "false";
const px2rem = require("postcss-px2rem");
// 生产环境下cdn引入资源
let externalsOption = {};
if (process.env.NODE_ENV === "production") {
  externalsOption = {
    react: "React",
    "react-dom": "ReactDOM",
    "react-router-dom": "ReactRouterDOM",
    axios: "axios",
  };
}
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd-mobile",
    style: "css",
  }),
  process.env.NODE_ENV === "production" && setWebpackPublicPath("/source"),
  addWebpackAlias({
    "@": resolve("src"),
  }),
  addWebpackExternals(externalsOption),
  (config, env) => {
    // 重写postcss
    rewirePostcss(config, {
      plugins: () => [
        require("postcss-flexbugs-fixes"),
        require("postcss-preset-env")({
          autoprefixer: {
            flexbox: "no-2009",
          },
          stage: 3,
        }),
        //关键:设置px2rem
        px2rem({
          remUnit: 37.5,
          exclude: /node-modules/,
        }),
      ],
    });
    // 生产环境去掉 sourcemap
    if (process.env.NODE_ENV === "production") {
      config.devtool = false;
    }
    return config;
  }
);