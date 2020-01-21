const Web3 = require('web3');
const web3 = new Web3();

async function f() {
    const privateKey = web3.utils.keccak256('Test');
    const address = web3.eth.accounts.privateKeyToAccount(privateKey);
    const toSign = "this is a test";
    const signedData = await web3.eth.accounts.sign(toSign, privateKey);
    console.log(`Signing "${toSign}" by account ${address.address}`);
    console.log(`Giving signature ${signedData.signature}`);
    const signer = web3.eth.accounts.recover(toSign, signedData.signature);
    console.log(`Knowing the signed text: "${toSign}"`);
    console.log(`We can get the signer: ${signer}`);

}
f();