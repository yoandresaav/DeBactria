const Web3 = require('web3');
const HDWalletProvider = require('truffle-hdwallet-provider');
const factory = require("../kickstart-frontend/src/build/CampaignFactory.json");

const nmonic = 'winner visit banana describe nominee custom midnight erase weather green giraffe yellow';

var privateKeys = [
  "e6f3923573935fc2842f090de8e91ef62c33fe982f1ad4d0f65a819d9599e634",
  "fecdfd34e70ef4be1ab1d4302520de826205294bd6e6d3f9a9bd941dfe4e1ee4",
];


// Provider Ganache
const providerGanache = new HDWalletProvider(
  privateKeys,
  'http://localhost:7545',
);


const privateKeysBSC = [
  '8dcba2a5ceb090c59d712cf2952859feec4399f0e7ff32b68b4a7b7f37434014'
];
const providerBSC = new HDWalletProvider(
  privateKeysBSC,
  'https://apis.ankr.com/60a2b6d260f6408f8c893e43fe60861d/436c4191c3a955c822236c8f1a306d98/binance/full/test',
);

const web3 = new Web3(providerBSC); // Change provider this
let accounts;
async function deploy(){
    accounts = await web3.eth.getAccounts();
    console.log(accounts)
    const deployed = await new web3.eth.Contract(factory.abi).
        deploy({
            data: "0x"+factory.evm.bytecode.object
        }).
        send({
            from: accounts[0],
            gas: "1000000"
        })
    console.log(await deployed.options.address);
}

deploy();