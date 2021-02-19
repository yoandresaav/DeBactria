import React,{Component} from "react";
import {Link} from "react-router-dom";
import ConnectLink from '../components/ConnectLink';
import {connect} from "react-redux";
import "../Home.css";

class Header extends Component{
  render(){
      console.log('Propsssss', this.props.account)
        return <div className="header">
            <div className="left-nav">
                <Link to="/">DeBactria</Link>
            </div>
            {(this.props.account !== 0 && this.props.account !== undefined) &&
              <div className="right-nav">
                  <Link to="/campaigns/new">Create Campaign</Link>
              </div>}
            <div className="last-div">
              <ConnectLink />
            </div>
        </div>
    }
}

function mapStateToProps(state) {
  const statusAccount = {
    account: state.loadAccounts.account,
  }
  return statusAccount;
}

export default connect(mapStateToProps, null)(Header);