const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/api", //path prameter
        createProxyMiddleware({
            target: "http://10.30.0.38:8081/api", //Target api url
            changeOrigin: true,
        })
    );

    app.use(
        "/ws", //path prameter
        createProxyMiddleware({
            target: "ws://10.30.0.38:8081/ws", //Target api url
            ws: true,
            changeOrigin: true,
        })
    );

    app.use(
        "/socket.io", //path prameter
        createProxyMiddleware({
            target: "http://10.30.0.38:8081/socket.io", //Target api url
            ws: true,
            changeOrigin: true,
        })
    );

};