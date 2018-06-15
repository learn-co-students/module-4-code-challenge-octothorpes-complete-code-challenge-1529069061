import React from "react";

import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import BotSpecs from '../components/BotSpecs';

class BotsPage extends React.Component {
  state = {
    botsCollection: [],
    myBotArmy: [],
    singlePage: false,
    singleBot: {}
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

  getBotObject = (id) => {
    return this.state.botsCollection.find(bot => {
      return bot.id === parseInt(id, 10);
    });
  };

  addBotToMyArmy = (e) => {
    const botObj = this.getBotObject(e.currentTarget.id);
    if (!this.state.myBotArmy.includes(botObj)){
      this.setState({
        myBotArmy: [...this.state.myBotArmy, botObj]
      });
    };
  };

  removeBotFromMyArmy = (e) => {
    const botObj = this.getBotObject(e.currentTarget.id);
    const botIndex = this.state.myBotArmy.indexOf(botObj);
    const myBotArmy = [...this.state.myBotArmy];
    myBotArmy.splice(botIndex, 1);
    this.setState({
      myBotArmy
    });
  };

  viewBot = (e) => {
    const botObj = this.getBotObject(e.currentTarget.id);
    this.setState({
      singlePage: true,
      singleBot: botObj
    });
  };

  backToBotList = () => {
    this.setState({
      singlePage: false,
      singleBot: {}
    });
  };

  render() {
    return (
      <div>
        <YourBotArmy myBotArmy={this.state.myBotArmy} onClickHandler={this.removeBotFromMyArmy} />
        {this.state.singlePage ? <BotSpecs bot={this.state.singleBot} back={this.backToBotList} onClickHandler={this.addBotToMyArmy} /> : <BotCollection bots={this.state.botsCollection} onClickHandler={this.viewBot} /> }
      </div>
    );
  };

};

export default BotsPage;
