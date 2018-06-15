import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

	renderBots = () => {
		const allBots = this.props.bots.map((bot, index) => {
			return <BotCard bot={bot} key={index} onClickHandler={this.props.onClickHandler} />
		});
		return allBots;
	}

  render(){
		const renderBots = this.renderBots();
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {renderBots}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
