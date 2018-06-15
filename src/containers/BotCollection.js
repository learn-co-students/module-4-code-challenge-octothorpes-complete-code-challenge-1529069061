import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  constructor(props){
    super(props)

    this.state={
      bots: props.bots
    }
  }


  showBots = () => {
    return this.props.bots.map( bot =>{
    return  <BotCard key={bot.id} bot={bot} clickHandler={this.props.clickHandler} />
    })
  }

  componentDidMount(){
    this.showBots()
  }


  render(){
    console.log("collection", this.props)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.showBots()}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
