import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./PlayerList.css";
import PlayerListItem from "./PlayerListItem";
import { Pagination, Button } from "semantic-ui-react";

class PlayerList extends Component {
  state = {
    activePage: 1
  };
  handlePaginationChange = (e, { activePage }) => this.setState({ activePage });

  render() {
    const cellPages = Math.ceil(this.props.players.length / 5);

    // generate the new defined 5 entries into new array
    var playersDisplay = [];
    var startIndex = (this.state.activePage - 1) * 5;
    for (var i = 0; i < 5; i++) {
      if (this.props.players[startIndex + i]) {
        playersDisplay.push(this.props.players[startIndex + i]);
      }
    }

    return (
      <div>
        <ul className={styles.playerList}>
          {playersDisplay.map((player, index) => {
            return (
              <PlayerListItem
                key={index + startIndex}
                id={index + startIndex}
                name={player.name}
                team={player.team}
                position={player.position}
                starred={player.starred}
                {...this.props.actions}
              />
            );
          })}
          <Pagination
            boundaryRange={0}
            activePage={this.state.activePage}
            ellipsisItem={null}
            firstItem={null}
            lastItem={null}
            siblingRange={5}
            totalPages={cellPages}
            onPageChange={this.handlePaginationChange}
          />
        </ul>
      </div>
    );
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default PlayerList;
