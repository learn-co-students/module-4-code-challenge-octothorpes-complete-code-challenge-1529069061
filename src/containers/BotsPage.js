import React from "react";

import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

class BotsPage extends React.Component {
  state = {
    botsCollection: [],
    myBotArmy: []
  };

  componentWillMount() {
    this.fetchBots();
  };

  fetchBots = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots').then(response => response.json()).then(res => {
      this.setState({
        botsCollection: res
      });
    });
  };

  addBotToMyArmy = (e) => {
    const botObj = this.state.botsCollection.find(bot => {
      return bot.id === parseInt(e.currentTarget.id);
    });
    if (!this.state.myBotArmy.includes(botObj)){
      this.setState({
        myBotArmy: [...this.state.myBotArmy, botObj]
      });
    }else{
      alert(`${botObj.name} is already in your Army!`);
    }
  };

  removeBotFromMyArmy = (e) => {
    const botObj = this.state.botsCollection.find(bot => {
      return bot.id === parseInt(e.currentTarget.id);
    });
    const botIndex = this.state.myBotArmy.indexOf(botObj);
    const myBotArmy = [...this.state.myBotArmy];
    myBotArmy.splice(botIndex, 1);
    this.setState({
      myBotArmy
    });
  }

  render() {
    return (
      <div>
        <YourBotArmy myBotArmy={this.state.myBotArmy} onClickHandler={this.removeBotFromMyArmy} />
        <BotCollection bots={this.state.botsCollection} onClickHandler={this.addBotToMyArmy} />
        {/* put your components here */}
      </div>
    );
  }

}

export default BotsPage;
