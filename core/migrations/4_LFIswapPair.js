const LFIswapPair = artifacts.require("LFIswapPair");

module.exports = function(deployer) {
    deployer.deploy(LFIswapPair);
};