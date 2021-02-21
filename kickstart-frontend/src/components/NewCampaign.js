import React,{Component} from "react";
import Header from "../containers/Header";
import factory from "../services/campaignfactory";
import {connect} from "react-redux";
import {deployedCampaigns} from "../store/actions/deployedCampaigns";
import {loadAccounts} from "../store/actions/loadAccounts";
import CampaignIcon from "../images/up-rocket.png";
import "../Home.css";

class NewCampaign extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: "",
            title: "",
            errorMessage: "",
            errorVisible: false,
            handlingTransaction: false
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleTextareaChange = this.handleTextareaChange.bind(this);
      
        console.log('El store tiene: ', this.store)
    }

    handleInputChange(e){
        if(isFinite(e.target.value)){
            this.setState({
                value: e.target.value
            });
        }
    }

    handleTextareaChange(e){
      this.setState({title: e.target.value});
    }

    async handleFormSubmit(e){
        e.preventDefault();
        const minContribution = this.state.value;
        const title = this.state.title;

        if(minContribution.length>0 && title.length>5){
            const factoryInstance = await factory();
            this.setState({
                handlingTransaction: true
            });
            const thash = await factoryInstance.methods.createCampaign(minContribution, title).send({
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
          if (title.length<5){
            this.setState({
                errorMessage: "Title field cannot be empty or less 5 caracter",
                errorVisible: true
            });
          } else {
            this.setState({
              errorMessage: "Minimum Contribution field cannot be empty",
              errorVisible: true
          });
          }
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
            <div className="panel-show-form-image">
              <form onSubmit={this.handleFormSubmit} style={{width: '50%'}}>
                  <h3>Title</h3>
                  <div className="input-box">
                      <textarea type="text" value={this.state.title} onChange={this.handleTextareaChange} placeholder="Add title"></textarea>
                  </div>
                  <h3>Minimum Contribution</h3>
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
                <img width={300} src={CampaignIcon} />
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