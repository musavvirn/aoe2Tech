import React from 'react';
import './App.css';
import CivPanel from "./techtree/civPanel";
import TreeParent from "./techtree/panels/treeParent";
import UnitInfo from "./techtree/panels/unitInfo";
// import {range, townCentre, defense, barracks, stable, castle, siege, monastery, blacksmith, university, economy, dock} from "./techtree/panels/UNIT_NAMES";

class App extends React.Component {
  constructor() {
    super()
    this.state = {CURRENT_CIV: "Aztecs"}
    this.update = this.update.bind(this);
  }
  
  update(civ) {
    this.setState({CURRENT_CIV: civ})
  }
  render() {
    return (
      <div className="App">
        <header>
        <h4> AGE OF EMPIRES 2 TECHNOLOGY TREE </h4>
        </header>
        <div>
          <CivPanel update={this.update} />
          
          <TreeParent />
          <UnitInfo />

          
        </div>
      </div>
    );
  }
}

export default App;
