import React from "react";

import BotCollection from './BotCollection';

class BotsPage extends React.Component {
  state = {
    botsCollection: []
  }

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

  render() {
    return (
      <div>
        <BotCollection bots={this.state.botsCollection} />
        {/* put your components here */}
      </div>
    );
  }

}

export default BotsPage;
