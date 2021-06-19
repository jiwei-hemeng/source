const {
  createProxyMiddleware
} = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://192.168.188.101:3006",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};