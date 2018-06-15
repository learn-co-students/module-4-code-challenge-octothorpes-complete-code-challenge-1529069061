import React from "react";

const BotCard = props => {

  let botType;
// so i had some wierd thing going on where i didnt know how to do the thing, so i replaced everything with something that worked.
//DEFINATEY bad practice, but time constraints and panic make strange bedfellows

//i replaced the prop object...with the prop.
//strangly enough, the other card spec workedlike a charm, so *shrug*
  switch (props.stats['bot_class']) {
    case "Assault":
      botType = <i className="icon military" />;
      break;
    case "Defender":
      botType = <i className="icon shield" />;
      break;
    case "Support":
      botType = <i className="icon ambulance" />;
      break;
    default:
      botType = <div />;
  }

//onclick down there actually pulls double duty, when selected in yourbotarmy, it removes the card, when
//clicked in the index, it selects the card. 
  return (
    <div className="ui column">
      <div
        className="ui card"
        key={props.stats['id']}

        onClick={() => props.select(props.stats)}
      >
        <div className="image">
          <img alt="oh no!" src={props.stats['avatar_url']} />
        </div>
        <div className="content">
          <div className="header">
            {props.stats['name']} {botType}
          </div>

          <div className="meta text-wrap">
            <small>{props.stats['catchphrase']}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {props.stats['health']}
          </span>

          <span>
            <i className="icon lightning" />
            {props.stats['damage']}
          </span>
          <span>
            <i className="icon shield" />
            {props.stats['armor']}
          </span>
        </div>
      </div>
    </div>
  );

};

export default BotCard;
