const Web3 = require('web3');
const HDWalletProvider = require('truffle-hdwallet-provider');
const provider = new HDWalletProvider(
  'question lava deny maze hurt body obtain tail capable receive element rug',
  'https://rinkeby.infura.io/v3/56d2c50e219f40d78a0b05fedee1bfa4'
);
const web3 = new Web3(provider);
//const contract="0xA6f02Ea758E82c96b011949f471E5fA0AAE3202F"// rinkeby  wss://rinkeby.infura.io/ws
const contract="0xbf5a1e9b5787fd4661292f98db29f1ddefbf27eb" // localhost ws://localhost:8545
ABILogTypes=[
    {"indexed": false,"internalType": "string","name": "message","type": "string"},
    {"indexed": false,"internalType": "uint256","name": "add","type": "uint256"},
    {"indexed": false,"internalType": "uint256","name": "balance","type": "uint256"}
]
async function processevent(object) {
    //console.log(object);
    var decoded=web3.eth.abi.decodeParameters(ABILogTypes, object.data);    
    console.log(`message=${decoded[0]} add=${decoded[1]} balance=${decoded[2]}`);
}
var subscription= web3.eth.subscribe('logs', {fromBlock: '0x0',address: contract} )
    .on("data", processevent )
    .on("changed", console.log)
    .on("error",console.log);