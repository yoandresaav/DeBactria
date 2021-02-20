import React, { Component } from 'react';
import {connect} from "react-redux";
import {loadAccounts} from "../store/actions/loadAccounts";

class ConnectLink extends Component{

  render(){
    return (
      <>
        {(this.props.account === 0 || this.props.account === undefined) ?
          <a className="link-connect" onClick={()=>{this.props.dispatch(loadAccounts())}}>
            Connect to a Wallet 
          </a>
          :
          <a className="link-connect">
            {`${this.props.account.slice(0, 6)}...${this.props.account.slice(-6)}`}
          </a>
        }
      </>
    )
    
  }
}

function mapStateToProps(state){
  const statusAccount = {
    account: state.loadAccounts.account,
  }
  return statusAccount;
}

export default connect(mapStateToProps, null)(ConnectLink);