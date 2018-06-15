import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    console.log("inside botcollection.js", this.props)
    const botCards = this.props.botsCollection.map((botObj) => {
      return <BotCard addBotToArmy={this.props.addBotToArmy} bot={botObj} />
    });

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {botCards}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
