import initWeb3 from "../services/web3";
import {abi} from "../build/CampaignFactory.json";

const CONTRACT_ID = process.env.REACT_APP_CONTRACT_ID || '0xD40C53118D853FE51D8DF59422cf45d874a8EcF2'

export default async function factory(){
    const web3 = await initWeb3();
    let factory = await new web3.eth.Contract(
            abi,
            CONTRACT_ID,
        );
    return factory;
}