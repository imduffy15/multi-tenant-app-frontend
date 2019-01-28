module.exports = {
  devServer: {
    disableHostCheck: true,
    proxy: {
      "^/auth": {
        target: "http://account.ianduffy.localdev:9080",
        secure: false,
        xfwd: false,
        changeOrigin: true
      }
    }
  }
};
