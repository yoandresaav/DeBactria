import Web3 from 'web3';

const getWeb3 = () => {
  
  return new Promise( async (resolve, reject) => {
    // window.addEventListener('load', function(){
      let web;
      if (window.ethereum && window.ethereum.isMetaMask){
        web = new Web3(window.ethereum);
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