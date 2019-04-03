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
      const newData = data.map((botObj) => {
        var o = Object.assign({}, botObj);
        o.enlisted = false;
        return o;
      });

      this.setState({
        bots: newData
      }, () => console.log("current state", this.state.bots));
    });
  }

  handleClick = (botId) => {
    const bot = this.state.recruitedBots.find((botObj) => {
      return botObj.id === Number(botId);
    });

    if(!bot) {
      const bot1 = this.state.bots.find((botObj) => {
        return botObj.id === Number(botId);
      });

      if(bot1) {
        this.setState({
          recruitedBots: this.state.recruitedBots.concat([bot1])
        }, () => console.log("setting the state after a bot has been enlisted", this.state));
      }
    } else {
      const bots = this.state.recruitedBots.filter((botObj) => {
        return botObj.id !== Number(botId);
      });

      this.setState({
        recruitedBots: bots
      }, () => console.log("setting the state after a bot has been delisted", this.state));
    }
  }

  render() {
    return (
      <div>
        <YourBotArmy recruitedBots={this.state.recruitedBots} handleClick={this.handleClick}/>
        <BotCollection handleClick={this.handleClick} botsCollection={this.state.bots}/>
      </div>
    );
  }

}

export default BotsPage;
