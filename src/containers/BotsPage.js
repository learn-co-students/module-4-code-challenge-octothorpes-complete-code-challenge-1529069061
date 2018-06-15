import React from "react";
import BotCollection from './BotCollection.js';
import YourBotArmy from './YourBotArmy.js'
class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(){
    super()
    this.state = {
      bots: []
    }
  }

  clickHandler = (e) => {
    e.stopPropagation()
    console.log(e.target)
  }
//I can't figure out how how to get
//the bot object from the click event
// the <div className="ui card" can't be clicked directly.

  fetcher = () => fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
  .then(res => res.json())
  .then(json => this.setState({bots: json}))


  componentDidMount(){
    this.fetcher()
  }
  render() {
    return (
      <div>
        <YourBotArmy />
        <BotCollection bots={this.state.bots} clickHandler={this.clickHandler} />
      </div>
    );
  }

}

export default BotsPage;
