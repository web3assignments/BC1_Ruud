pragma solidity ^0.5.16;

contract Factory {
    address[] public deployedCampaigns;

    function createCampaign(uint min_contrib) public returns (address) {
        address newCampaign = address(new KickstartCampaign(min_contrib, msg.sender));
        deployedCampaigns.push(newCampaign);
        return address(newCampaign);
    }

    function getDeployedCampaigns() public view returns (address[] memory) {
        return deployedCampaigns;
    }

}


contract KickstartCampaign {
    struct Request {
        string description;
        uint value;
        address payable recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }

    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public contributersCount;

    modifier restricted() {
        require(msg.sender == manager, "");
        _;
    }

    constructor(uint minimum, address creator) public {
        manager = creator;
        minimumContribution = minimum;
    }

    function contribute() public payable {
        require(msg.value > minimumContribution, "");

        approvers[msg.sender] = true;
        contributersCount++;
    }

    function createRequest(string memory description, uint value, address payable recipient) public restricted {
        Request memory newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0
        });
        requests.push(newRequest);
    }



    function approveRequest(uint index)  public {
        Request storage request = requests[index];

        require(approvers[msg.sender], "");
        require(!request.approvals[msg.sender], "");

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];

        require(!requests[index].complete, "");
        require(request.approvalCount > (contributersCount/2), "");

        request.recipient.transfer(request.value);
        requests[index].complete = true;

    }

}