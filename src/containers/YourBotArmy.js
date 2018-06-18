import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    const wantedBots = this.props.wantedBots.map(bot => <BotCard key={bot.id} bot={bot} clickHandler={this.props.clickHandler} />)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {wantedBots}
          </div>
        </div>
      </div>
    )
  }
};

export default YourBotArmy;
