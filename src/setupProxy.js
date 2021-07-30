const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      // target: "http://xsmovetest.xiangshangkj.com:8066/",
      target: "http://move.laotielian.com:8066/",
      // target: "http://192.168.1.119:7066",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
