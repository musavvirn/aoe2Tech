var list = [
            {"name": "Ghazna", "elo": 1568, "id": 1000, "active": true},
            {"name": "Inc", "elo": 2020, "id": 1001, "active": true},
            {"name": "Nano", "elo": 1492, "id": 1002, "active": true},
            {"name": "Andorin", "elo": 2042, "id": 1003, "active": false},
            {"name": "Trirem", "elo": 1346, "id": 1004, "active": true},
            {"name": "Pete", "elo": 1723, "id": 1005, "active": false},
            {"name": "T90", "elo": 1309, "id": 1006, "active": true},
            {"name": "Erks", "elo": 2011, "id": 1007, "active": true},
            {"name": "Jaguar", "elo": 1424, "id": 1008, "active": false},
            {"name": "Rub", "elo": 1564, "id": 1009, "active": false},
            {"name": "Jupee", "elo": 1922, "id": 1010, "active": true}];


class MemberList {
    // constructor() {
    //     this.state = {members : list, count : 0};
    // }

    getMemberList() {
        return list;
    }

    getTotalCount() {
        let count = this.getMemberList().length;
        return count;
    }
}


export default MemberList;