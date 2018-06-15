import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    console.log("inside botarmy", this.props.recruitedBots)
    const botArmy = this.props.recruitedBots.map((botObj) => {
      return <BotCard bot={botObj}/>
    });

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {botArmy}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
