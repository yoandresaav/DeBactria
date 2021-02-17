import initWeb3 from "../services/web3";
import {abi} from "../build/CampaignFactory.json";

// TODO: Cambiar direccion, ponerlo en ENV
//const CONTRACT_ID = '0xAc0e2348402918a5D7C90A75D53b460cd755c381'; // Ganache
const CONTRACT_ID = '0xa7ec5b43172aF80f2Fe4D92F584e0d23320a2CD8';

export default async function factory(){
    const web3 = await initWeb3();
    let factory = await new web3.eth.Contract(
            abi,
            CONTRACT_ID,
        );
    return factory;
}