const LFIswapFactory = artifacts.require("LFIswapFactory");

module.exports = function(deployer) {
    deployer.deploy(LFIswapFactory);
};