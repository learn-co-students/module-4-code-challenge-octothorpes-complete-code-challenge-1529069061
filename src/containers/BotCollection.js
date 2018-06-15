import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
    //console.log(this.props)
    //if (this.props) {
      const bots = this.props.botCollection.map(
        bot => <BotCard key={bot.id} bot={bot} addBot={this.props.addBot} />)

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {bots}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
