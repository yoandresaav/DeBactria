import React, { Component } from 'react';
import Header from "../containers/Header";


class AboutUs extends Component {
  render(){
    return(
      <div className="panel-about-us">
        <Header></Header>
        <div className="container-text">
          <p>Originating from cryptocurrencies, blockchain technologies offer access to an innite range of applications benefitting to sharing economies. The aim of DeBactria is to offer a solution that addresses the inefficiencies of the crowdfunding market and addresses them by combining smart contracts with smart property (via projects) in a trustless decentralized application build on Binance Smart Chain.</p> 
          <p>The potential of blockchain-based services provided by crowdfunding intermediaries in order to analyze their implementation on blockchains and to deploy our dApp. </p>
          <p>In DeBactria we point out the potential of crowdfunding decentralized applications to lower market inefficiencies by bypassing third parties and easing trades on secondary markets. This project outlines the perspectives of BEP20 Smart Contract through the description of a pilot, namely the process of implementing a blockchain-based application within the crowdfunding economy.</p>
        </div>
      </div>
    );
  }
}

export default AboutUs;