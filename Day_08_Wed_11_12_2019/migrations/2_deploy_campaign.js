const KickstartCampaign = artifacts.require("KickstartCampaign");

module.exports = function(deployer) {
  deployer.deploy(
    KickstartCampaign,
    0,
    "0xBf5a1e9B5787fD4661292f98DB29f1ddeFbf27EB"
  );
};
