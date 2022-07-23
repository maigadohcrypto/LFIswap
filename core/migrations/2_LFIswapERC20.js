const LFIswapERC20 = artifacts.require("LFIswapERC20");

module.exports = function(deployer) {
    deployer.deploy(LFIswapERC20);
};