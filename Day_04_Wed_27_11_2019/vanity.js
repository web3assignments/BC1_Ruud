Web3 = require('web3');
web3 = new Web3();
var i=0;
var find='XXXXX';
var find_length_plus2=find.length+2;
var prefix;
do {
    newAddress=web3.eth.accounts.create();
    prefix=newAddress.address.slice(2,find_length_plus2).toLowerCase();
    if (++i % 1000 ==0) console.log(i);
} while (prefix != find)
console.log(`address=${newAddress.address}`);
console.log(`privatekey=${newAddress.privateKey}`);