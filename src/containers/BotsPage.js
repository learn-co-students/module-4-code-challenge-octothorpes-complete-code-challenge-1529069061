import React from "react";
import BotCollection from './BotCollection.js';
import YourBotArmy from './YourBotArmy.js'
class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(){
    super()
    this.state = {
      bots: [],
      botArmy: []
    }
  }

  componentDidMount(){
    this.fetcher()
  }

  fetcher = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(res => res.json())
      .then(json => this.setState({
        bots: json
      }))
  }

  addBotHandler = (botId) => {
    // e.stopPropagation()
    console.log("botArmy is", this.state.botArmy)
    console.log("---");
    let s_bot = this.state.bots.find(bot => bot.id === botId)

    if (this.state.botArmy.includes(s_bot)) {
      alert("this bot already in armuh")
    } else {
      this.setState({
        botArmy: [...this.state.botArmy, s_bot]
      }, () => console.log("botArmy is now", this.state.botArmy))
    }
  }
  //I can't figure out how how to get
  //the bot object from the click event
  // the <div className="ui card" can't be clicked directly.

  removeBotHandler = botId => {
    let foundBot = this.state.botArmy.find(bot => bot.id === botId)
    let newBotArmy = this.state.botArmy.filter(bot => bot.id !== foundBot.id)

    this.setState({
      botArmy: newBotArmy
    })
  }


  render() {
    return (
      <div>
        <YourBotArmy wantedBots={this.state.botArmy} clickHandler={this.removeBotHandler} />
        <BotCollection bots={this.state.bots} clickHandler={this.addBotHandler} />
      </div>
    )
  }

}

export default BotsPage;
