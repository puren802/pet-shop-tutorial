module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "192.168.0.58",
      port: 8545,
      network_id: "42", // Match any network id
      gas: 0
    },
    develop: {
      port: 8545
    }
  }
};
