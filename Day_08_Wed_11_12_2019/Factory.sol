pragma solidity ^0.5.16;

import './KickstartCampaign.sol';

contract Factory {
  KickstartCampaign[] public deployedCampaigns;
  function createCampaign(uint minimum) public {

    KickstartCampaign newCampaign = new KickstartCampaign(minimum, msg.sender);
    deployedCampaigns.push(newCampaign);
  }
}

