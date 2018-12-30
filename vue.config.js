module.exports = {
  devServer: {
    disableHostCheck: true,
    proxy: {
      "^/auth": {
        target: "http://localhost:9080",
        secure: false,
        xfwd: false,
        changeOrigin: true
      }
    }
  }
};
