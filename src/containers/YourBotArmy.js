import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  
  renderBots = () => {
		const allBots = this.props.myBotArmy.map((bot, index) => {
			return <BotCard bot={bot} key={index} onClickHandler={this.props.onClickHandler} />;
		});
		return allBots;
	};

  render(){
    const renderBots = this.renderBots();
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {renderBots}
          </div>
        </div>
      </div>
    );
  };
  
};

export default YourBotArmy;
