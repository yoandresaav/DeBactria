import React,{Component} from "react";
import Header from "../containers/Header";
import factory from "../services/campaignfactory";
import {connect} from "react-redux";
import {deployedCampaigns} from "../store/actions/deployedCampaigns";
import {loadAccounts} from "../store/actions/loadAccounts";
import CampaignIcon from "../images/campaing-icono.PNG";
import "../Home.css";

class NewCampaign extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: "",
            errorMessage: "",
            errorVisible: false,
            handlingTransaction: false
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
      
        console.log('El store tiene: ', this.store)
    }

    handleInputChange(e){
        if(isFinite(e.target.value)){
            this.setState({
                value: e.target.value
            });
        }
    }

    async handleFormSubmit(e){
        e.preventDefault();
        const minContribution = this.state.value;
        if(minContribution.length>0){
            const factoryInstance = await factory();
            this.setState({
                handlingTransaction: true
            });
            const thash = await factoryInstance.methods.createCampaign(minContribution).send({
                from: this.props.account,
            });
            await this.props.dispatch(deployedCampaigns());
            this.props.history.push("/");
            // }
            // catch(e){
            //     this.setState({
            //         errorMessage: e.message,
            //         errorVisible: true
            //     });
            //     setTimeout( () => {
            //         this.setState({
            //             errorMessage: "",
            //             errorVisible: false
            //         });
            //     },3000);
            // }
            // finally{
            this.setState({
                handlingTransaction: false
            });
            // }
        } else{
            this.setState({
                errorMessage: "Minimum Contribution field cannot be empty",
                errorVisible: true
            });
            setTimeout( () => {
                this.setState({
                    errorMessage: "",
                    errorVisible: false
                });
            },3000);
        }
    }

    render(){
        return <div className="new-campaign-page">
            <Header></Header>
            <h2>Create a Campaign</h2>
            <h3>Minimum Contribution</h3>
            <div className="panel-show-form-image">
              <form onSubmit={this.handleFormSubmit} style={{width: '50%'}}>
                  <div className="input-box">
                      <input type="text" value={this.state.value} onChange={this.handleInputChange} placeholder="Minimum Contribution(in Wei)"></input>
                      <div style={{width: '60px'}}>wei</div>
                  </div>
                  <div className="error-message" style={this.state.errorVisible?{display: "block"}:{display: "none"}} >{this.state.errorMessage}</div>
                  <div className="button" onClick={this.handleFormSubmit}>
                      <p style={this.state.handlingTransaction?{display: "none"}:{display: "block"}}>Create!</p>
                      <div className="loader" style={this.state.handlingTransaction?{display: "block"}:{display: "none"}}></div>
                  </div>
              </form>
              <div className="icono-campaign" style={{textAlign: 'right'}}>
                <img src={CampaignIcon} />
              </div>
            </div>
        </div>
    }
}

function mapStateToProps(state){
    const statusAccount = {
      account: state.loadAccounts.account,
    }
    return statusAccount;
}

export default connect(mapStateToProps,null)(NewCampaign);