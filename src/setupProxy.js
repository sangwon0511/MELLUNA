const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/api", //path prameter
        createProxyMiddleware({
            target: "https://melumelu.shop/api", //Target api url
            changeOrigin: true,
        })
    );

    app.use(
        "/socket.io", //path prameter
        createProxyMiddleware({
            target: "https://melumelu.shop/socket.io", //Target api url
            ws: true,
            changeOrigin: true,
        })
    );

};