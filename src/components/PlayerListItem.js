import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import styles from "./PlayerListItem.css";
import { Dropdown } from "semantic-ui-react";

const options = [
  { key: 1, text: "Point guard", value: 1 },
  { key: 2, text: "Shooting guard", value: 2 },
  { key: 3, text: "Small forward", value: 3 },
  { key: 4, text: "Power forward", value: 4 },
  { key: 5, text: "Center", value: 5 }
];

class PlayerListItem extends Component {
  render() {
    return (
      <li className={styles.playerListItem}>
        <div className={styles.playerInfos}>
          <div>
            <span>{this.props.name}</span>
          </div>
          <div>
            <small>
              {this.props.team} · {this.props.position}
            </small>
          </div>
        </div>
        <div>
          <Dropdown placeholder="position" search selection options={options} />
        </div>
        <div className={styles.playerActions}>
          <button
            className={`btn btn-default ${styles.btnAction}`}
            onClick={() => this.props.starPlayer(this.props.id)}
          >
            <i
              className={classnames("fa", {
                "fa-star": this.props.starred,
                "fa-star-o": !this.props.starred
              })}
            />
          </button>
          <button
            className={`btn btn-default ${styles.btnAction}`}
            onClick={() => this.props.deletePlayer(this.props.id)}
          >
            <i className="fa fa-trash" />
          </button>
        </div>
      </li>
    );
  }
}

PlayerListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  starred: PropTypes.bool,
  starPlayer: PropTypes.func.isRequired
};

export default PlayerListItem;
