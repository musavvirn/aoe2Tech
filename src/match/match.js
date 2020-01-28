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


class Match {
        matchID = "XXXXXX";
        matchType = 0;
        matchStatus = false;
        team1 = [];
        team2 = [];
    //type is 1-4: 1v1, 2v2, 3v3, 4v4
    
    constructor(type) {
        this.matchType = type;
    }

    getMatchID() {
        return this.matchID;
    }

    getMatchType() {
        return this.matchType;
    }

    setTeams(p) {
        if (!this.matchStatus && this.matchType == 1) {
            let player = p;
            let eloMin = player.elo - 50;
            let eloMax = player.elo + 50;
            let isMatched = false;
            let opponent = null;

            for (let i=0; !isMatched && i<players.length; i++) {
                if (players[i].id !== player.id) {
                    if (players[i].elo >= eloMin && players[i].elo <= eloMax) {
                        opponent = players[i];
                        isMatched = true;
                        this.matchStatus = true;
                    }
                } 
            }

            (isMatched) ? console.log("Match foudn!") : console.log("No matches :S");
            this.team1.push(player);
            this.team2.push(opponent);
        }
    }
}

export default Match;
    