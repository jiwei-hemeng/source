const {
  createProxyMiddleware
} = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      // target: "http://localhost:3006",
      target: "http://xsmovetest.xiangshangkj.com/",
      // target: "http://192.168.1.119:7066",
      // target: "http://192.168.1.106:7066",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};