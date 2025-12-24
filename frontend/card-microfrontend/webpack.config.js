...
module.exports = (_, argv) => ({
    output: {
      publicPath: "http://localhost:8082/",
    },

    ...

    plugins: [
        new ModuleFederationPlugin({
          name: "cards",
          filename: "remoteEntry.js",
          remotes: {},
          exposes: {
            './App': './src/components/App.js',
            './AddPlacePopup': './src/components/AddPlacePopup.js',
            './Card': './src/components/Card.js',
            './ImagePopup': './src/components/ImagePopup.js',
          },
    ...
...