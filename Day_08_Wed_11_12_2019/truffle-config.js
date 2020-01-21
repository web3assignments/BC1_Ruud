const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(
          "question lava deny maze hurt body obtain tail capable receive element rug",
          "https://rinkeby.infura.io/v3/0c3e13b1bd8d4d91a5663b0d79c8c8ef"
        );
      },
      from: "0xBf5a1e9B5787fD4661292f98DB29f1ddeFbf27EB",
      gasLimit: 0x989680,
      gas: 10000000,
      network_id: 4
    },
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*",
      gas: 2500000
    }
  },
  compilers: {
    solc: {
      version: "0.5.16"
    }
  }
};
