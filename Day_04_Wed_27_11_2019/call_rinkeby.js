const Web3 = require('web3');
const web3 = new Web3('https://rinkeby.infura.io' );
const TestPayABI=[{
    "constant": true,
    "inputs": [],
    "name": "ContractBalance",
    "outputs": [{"internalType": "uint256","name": "","type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
    }];
async function f() {      
    const TestPayaddress="0xCf430C3a10c906023A14E307b8cB2dbE89d91541"
    const ContractTestPay   = new web3.eth.Contract(TestPayABI, TestPayaddress );
    var result = await ContractTestPay.methods.ContractBalance().call();
    console.log(`ContractBalance shows ${Web3.utils.fromWei(result)} ether`);
    var x=Web3.utils.fromWei(await web3.eth.getBalance(TestPayaddress),'ether');
    console.log(`TestPayaddress ${TestPayaddress} has ${x} ether`);
}
f();