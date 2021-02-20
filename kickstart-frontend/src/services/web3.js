import Web3 from 'web3';

let web3;

export default async function initWeb3(){
    if(window.web3){
      web3 = new Web3(window.web3.currentProvider);
    } else{
        const provider = new Web3.providers.HttpProvider(
            "https://apis.ankr.com/60a2b6d260f6408f8c893e43fe60861d/436c4191c3a955c822236c8f1a306d98/binance/full/test"
        );
        web3 = new Web3(provider);
    }
    return web3;
}