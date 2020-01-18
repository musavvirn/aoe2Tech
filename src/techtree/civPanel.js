import React, { Component } from "react";
import CivInfo from "./civInfo";
import "./civ.css";
import NotifService, {CIV_SELECTED} from "./Service/notifService";
import CivService from "./Service/civService";

var notifService = new NotifService();
var civService = new CivService();

const CIVS = ["Aztecs", 
            "Berbers", "Britons", "Bulgarians", "Burmese", "Byzantines",
            "Celts", "Chinese", "Cumans", "Ehtiopians", "Franks",
            "Goths", "Huns", "Incas", "Indians", "Italians",
            "Japanese", "Khmer", "Koreans", "Lithuanians", "Magyars",
            "Malays", "Malians", "Mayans", "Mongols", "Persians",
            "Portuguese", "Saracens", "Slavs", "Spanish", "Tatars",
            "Teutons", "Turks", "Vietnamese", "Vikings"];

export var CURRENT_CIV = "Aztecs";

class CivPanel extends Component {
    constructor() {
        super();
        this.state = {civ : "Aztecs"}
        this.generateCivMenu = this.generateCivMenu.bind(this);
        this.handleCivSelect = this.handleCivSelect.bind(this);
    }

    componentDidMount() {
        notifService.addObserver(CIV_SELECTED, this, this.reset)
    }

    componentWillUnmount() {
        notifService.removeObserver(this, CIV_SELECTED);
    }

    reset() {
        // this.setState({civ : "Aztecs"});
    }

    generateCivMenu() {
        let i = 0;
        let x;
        return CIVS.map(civ => {
            x = <option className="option" key={civ} value={civ}> {civ} </option>
            i++;
            return (x);   
        });
    }

    handleCivSelect(event) {
        this.setState({civ : event.target.value});
        // CURRENT_CIV = event.target.value;
        this.props.update(CURRENT_CIV);
        civService.civSelected(event.target.value);
    }

    

    render() {
        return(
            <section>
            
            <div className="box civPanel" value={this.state.civ} onChange={this.handleSelect}>
                
                <div>
                    <select onChange={this.handleCivSelect} className="btn btn-dark civMenu">
                        {this.generateCivMenu()}
                    </select>
                    <br></br>
                    <CivInfo civ={this.state.civ}/>
                </div>
            </div>
            </section>
            
        )
    }
}

export default CivPanel;