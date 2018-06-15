import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      bots: [],
      yourBots: [],
      atIndex: true,
      selectedBot: null
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

  selectBot = (newBotData) => {
    this.setState({
      atIndex: false,
      selectedBot: newBotData
    })
  }

  recruit = (newBotData) => {
    this.setState({
      yourBots: [...this.state.yourBots, newBotData]
    })
  }

  backToIndex = () => {
    this.setState({
      atIndex:true
    })
  }


  render(){

    let remainingBots = this.state.bots.filter( (bot) => {
      return !this.state.yourBots.includes(bot)
    })

    return (
      <div>
        <YourBotArmy botsDB={this.state.yourBots} />
        {
          (this.state.atIndex) ?
          <BotCollection botsDB={remainingBots} select={this.selectBot} />
            :
          <BotSpecs bot={this.state.selectedBot} backToIndex={this.backToIndex} recruit={this.recruit}/>
        }


      </div>
    );
  }

}

export default BotsPage;
