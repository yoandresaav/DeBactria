import Web3 from 'web3';

const NET_ID_BSC_TESTNET = 97;

const getWeb3 = () => {
  
  return new Promise( async (resolve, reject) => {
    // window.addEventListener('load', function(){
      let web;
      if (window.ethereum && window.ethereum.isMetaMask){
        web = new Web3(window.ethereum);

        const netId = await web.eth.net.getId();
        console.log('Net id ', netId)
        if (netId !== NET_ID_BSC_TESTNET){
          // Is connect to binance testnet
          alert('Change your wallet to BSC Testnet')
          reject(null);
          return;
        }

        try {
            // Request account access if needed
            await window.ethereum.enable();
            // Acccounts now exposed
            resolve(web);
        } catch (error) {
            // User denied account access...
            alert('User has denied account access to Wallet')
        }
      } else if (window.web3) {
        web = new Web3(Web3.givenProvider || "ws://localhost:7545");
        resolve(web);
      } else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
        reject()
      }

    // });
  });
}

export default getWeb3;