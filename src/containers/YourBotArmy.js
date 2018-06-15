import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    const bots = this.props.yourBots.map(bot =>
      <BotCard key={bot.id} bot={bot} removeBot={this.props.removeBot} /> )

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {bots}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
