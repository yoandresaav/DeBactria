import initWeb3 from "./web3";
import {abi} from "../build/CampaignFactory.json";


const CONTRACT_ID = process.env.REACT_APP_CONTRACT_ID || '0xd1a7B687D1961d0e8d94bdB7cC8Fd2D961E47f72'
// '0xa7ec5b43172aF80f2Fe4D92F584e0d23320a2CD8'

export default async function factory(){
    const web3 = await initWeb3();
    let factory = await new web3.eth.Contract(
            abi,
            CONTRACT_ID,
        );
    return factory;
}