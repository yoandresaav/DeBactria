import React,{Component} from 'react';
import Header from "../containers/Header";
import "../Home.css";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            "loading": true
        }
    }

    render(){
      console.log('props: ',this.props.account)
        return <div className="home">
            <Header></Header>
            <h2>Open Campaigns</h2>
            <div className="main-body">
                <div className="main-body-left">
                    {this.props.campaigns}
                </div>
                {/* <div className="loader-container" style={this.state.loading?{display: "flex"}:{display:" none"}}>
                    <div className="loader"></div>
                </div> */}
                
                {(this.props.account !== 0 && this.props.account !== undefined) ?
                  <Link to="/campaigns/new">
                      <div className="main-body-right">
                          <div className="plus-border">+</div>
                          <p>Create Campaign</p>
                      </div>
                  </Link>
                  :
                  <p style={{width: 250}}>
                    Conecta tu wallet para agregar una nueva campaña
                  </p>
                }
            </div>
        </div>
    }
}

function mapStateToProps(state){
    let campaigns =  state.deployedCampaigns.campaigns.map((value,index)=>{
        return  (
          <div className="list" id={index} key={index} style={{marginBottom: "16px"}}>
              {value}
              <div>
                <Link to={`/campaigns/${value}`}>
                  <p id={index} style={{margin:"0",marginTop:"8px",whiteSpace:'nowrap', display:'inline-block'}}>
                    View Campaign</p></Link>
                
                <Link to={`/campaigns/${value}/requests`}>
                  <p style={{margin:"0",marginTop:"8px",whiteSpace:'nowrap',display:'inline-block',marginLeft:'20px'}}>
                    View Requests</p></Link>

              </div>
          </div>
        );
    });
    let newState = {
        campaigns: campaigns,
        account: state.loadAccounts.account,
    }
    return newState;
}

export default connect(mapStateToProps,null)(Home);