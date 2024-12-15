...
module.exports = (_, argv) => ({
    output: {
      publicPath: "http://localhost:8082/",
    },

    ...

    plugins: [
        new ModuleFederationPlugin({
          name: "users",
          filename: "remoteEntry.js",
          remotes: {},
          exposes: {
            './App': './src/components/App.js',
            './PopupWithForm': './src/PopupWithForm.js',
            './EditAvatarPopup': './src/components/EditAvatarPopup.js',
            './EditProfilePopup': './src/components/EditProfilePopup.js',
          },
    ...
...