import React,{Component} from "react";
import {Link} from "react-router-dom";
import ConnectLink from '../components/ConnectLink';
import {connect} from "react-redux";
import "../Home.css";
import logo from '../images/DeBactria-v2.PNG' 

class Header extends Component{
  render(){
        return <div className="header">
            <div className="logo-nav">
                <Link to="/">
                  <img width={200} src={logo} />
                </Link>
            </div>
            {(this.props.account !== 0 && this.props.account !== undefined) &&
              <div className="right-nav">
                  <Link to="/campaigns/new">Create Campaign</Link>
              </div>}
              <div className="right-nav">
                  <Link to="/opens">Explore</Link>
              </div>
              <div className="right-nav">
                  <Link to="/about/us">About us</Link>
              </div>
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