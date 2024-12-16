...
module.exports = (_, argv) => ({
    output: {
      publicPath: "http://localhost:8080/",
    },
  
    ...

    plugins: [
        new ModuleFederationPlugin({
          name: "host",
          filename: "remoteEntry.js",
          remotes: {
            'auth': 'auth@http://localhost:8081/remoteEntry.js',
            'users': 'users@http://localhost:8082/remoteEntry.js',
            'cards': 'cards@http://localhost:8083/remoteEntry.js',
          },
          exposes: {},
    ...
...