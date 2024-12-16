...
module.exports = (_, argv) => ({
    output: {
      publicPath: "http://localhost:8081/",
    },

    ...

    plugins: [
        new ModuleFederationPlugin({
          name: "auth",
          filename: "remoteEntry.js",
          remotes: {},
          exposes: {
            './App': './src/components/App.js',
            './InfoTooltip': './src/components/InfoTooltip.js',
            './Login': './src/components/Login.js',
            './Register': './src/components/Register.js',
          },
    ...
...