import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      bots: [],
      yourBots: []
    }
  }

  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then( res => res.json() )
      .then( res => {
        this.setState({
          bots: res
        })
      })
  }

  recruitBot = (newBotData) => {
    console.log("hi")
    console.log(newBotData)
    this.setState({
      yourBots: [...this.state.yourBots, newBotData]
    },console.log(this.state))
  }


  render() {
    return (
      <div>
        <YourBotArmy botsDB={this.state.yourBots}/>
        <BotCollection botsDB={this.state.bots} recruit={this.recruitBot}/>
      </div>
    );
  }

}

export default BotsPage;
