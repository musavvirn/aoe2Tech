import React, {Component} from "react";
import Match from "./match";


var players = [
    {"name": "Ghazna", "elo": 2000, "id": 1000, "active": true, "type": 1},
    {"name": "Inc", "elo": 2020, "id": 1001, "active": true, "type": 1},
    {"name": "Nano", "elo": 1492, "id": 1002, "active": true, "type": 1},
    {"name": "Andorin", "elo": 2042, "id": 1003, "active": false, "type": 1},
    {"name": "Trirem", "elo": 1346, "id": 1004, "active": true, "type": 2},
    {"name": "Pete", "elo": 1723, "id": 1005, "active": false, "type": 1},
    {"name": "T90", "elo": 1309, "id": 1006, "active": true, "type": 2},
    {"name": "Erks", "elo": 2011, "id": 1007, "active": true, "type": 1},
    {"name": "Jaguar", "elo": 1299, "id": 1008, "active": false, "type": 1},
    {"name": "Rub", "elo": 1599, "id": 1009, "active": false, "type": 2},
    {"name": "Jupee", "elo": 1922, "id": 1010, "active": true, "type": 1}];


class MatchPanel extends Component {

    constructor() {
        super();
        this.state = {team1 : [], team2 : []};
        this.getMatch = this.getMatch.bind(this);
        this.setMatchDisplay = this.setMatchDisplay.bind(this);
    }

    getMatch() {
        let m = new Match(1);
        m.setTeams(players[4]);
        this.setState({team1 : m.team1, team2 : m.team2})
    }

    setMatchDisplay() {
        let t1, t2;
        let matchVS;

        if (this.state.team1.length < 1 || this.state.team2[0] == null) {
            t1 = "";
            t2 = "";
        } else {
            t1 = "[" + this.state.team1[0].elo + "] " + this.state.team1[0].name;
            t2 = "[" + this.state.team2[0].elo + "] " + this.state.team2[0].name;
        }

        matchVS = <div><br></br>
                    <a onClick={this.getMatch} className="btn btn-dark member-btn"> {t1} </a>
                    VS
                    <a onClick={this.getMatch} className="btn btn-dark member-btn"> {t2} </a>
                </div>

        return (matchVS);

    }

    render() {
        return(
            <div>
                <button onClick={this.getMatch} className="btn btn-dark member-btn"> Find Match </button>
                {this.setMatchDisplay()}
            </div>
        )
    }
}

export default MatchPanel;