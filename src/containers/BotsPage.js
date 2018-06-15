import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    yourBots: [],
  }

  componentDidMount() {
    fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`).then(r => r.json())
    .then(bots => this.setState({ bots}))
  }

  addBot = (id) => {
    let yourBot = this.state.bots.find(bot => bot.id === id);
    const added = true;
    yourBot = {...yourBot, added};
    //console.log(yourBot);
    const alreadyOwn = this.state.yourBots.find(bot => bot.id === yourBot.id);

    if (!alreadyOwn) {
      this.setState({
        yourBots: [...this.state.yourBots, yourBot]
      })
    }
  }

  removeBot = (id) => {
    let yourBot = this.state.yourBots.find(bot => bot.id === id);

    const yourBots = [
      ...this.state.yourBots.slice(0, this.state.yourBots.indexOf(yourBot)),
      ...this.state.yourBots.slice(this.state.yourBots.indexOf(yourBot)+1)
    ]

    this.setState({
      yourBots
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy yourBots={this.state.yourBots} removeBot={this.removeBot}/>
        <BotCollection botCollection={this.state.bots} addBot={this.addBot} />
      </div>
    );
  }

}

export default BotsPage;
