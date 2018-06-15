import React from "react";
import BotCollection from './BotCollection'

class BotsPage extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      bots:[]
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


  render() {
    return (
      <div>
        <BotCollection botsDB={this.state.bots}/>
      </div>
    );
  }

}

export default BotsPage;
