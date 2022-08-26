const Erc20 = artifacts.require("./Erc20.sol");

module.exports = function (deployer) {
  deployer.deploy(Erc20);
};
