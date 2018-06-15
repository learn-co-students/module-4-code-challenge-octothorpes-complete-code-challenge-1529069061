import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      bots: this.props.botsDB
    }

  }

  render(){

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
      		{ this.props.botsDB.map(  (botData) => {
              return <BotCard stats={botData} select={this.props.select}/>
          })}



    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
