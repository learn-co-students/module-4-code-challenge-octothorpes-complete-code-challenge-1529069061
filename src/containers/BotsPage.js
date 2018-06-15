import React from "react";
import BotCollection from "./BotCollection.js";
import YourBotArmy from "./YourBotArmy.js";

class BotsPage extends React.Component {
  constructor() {
    super();

    this.state = {
      bots: [],
      recruitedBots: []
    }
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(response => response.json())
    .then(data => {
      this.setState({
        bots: data
      }, () => {console.log(this.state)});
    });
  }

  addBotToArmy = (botId) => {
    let bot = null;
    let isRecruitedAlready = false;

    this.state.recruitedBots.forEach((botObj) => {
      if(botObj.id === Number(botId)) {
        isRecruitedAlready = true;
      }
    });

    if(isRecruitedAlready === false) {
      bot = this.state.bots.find((botObj) => {
        return botObj.id === Number(botId);
      });

      bot["enlisted"] = true;

      this.setState({
        recruitedBots: this.state.recruitedBots.concat([bot])
      }, () => console.log("setting the state after a bot has been enlisted", this.state));
    }
  }

  removeBotFromArmy = () => {

  }

  render() {
    return (
      <div>
        <YourBotArmy recruitedBots={this.state.recruitedBots} removeBotFromArmy={this.removeBotFromArmy}/>
        <BotCollection addBotToArmy={this.addBotToArmy} botsCollection={this.state.bots}/>
      </div>
    );
  }

}

export default BotsPage;
