import React, { Component } from "react";
import CivInfo from "./civInfo";
import "./civ.css";
import NotifService, {CIV_SELECTED, CIV_TYPED} from "./Service/notifService";
import CivService from "./Service/civService";
import CivTypedService from "./Service/civTypedService";

var notifService = new NotifService();
var civService = new CivService();
var civTypedService = new CivTypedService();

export const CIVS = ["Aztecs",
            "Berbers", "Britons", "Bulgarians", "Burmese", "Byzantines",
            "Celts", "Chinese", "Cumans", "Ethiopians", "Franks",
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
        this.civTyped = this.civTyped.bind(this);
    }

    componentDidMount() {
        notifService.addObserver(CIV_SELECTED, this, this.reset);
        notifService.addObserver(CIV_TYPED, this, this.civTyped)

    }

    componentWillUnmount() {
        notifService.removeObserver(this, CIV_SELECTED);
        notifService.removeObserver(this, CIV_TYPED);
    }

    civTyped(value) {
        this.setState({civ: value});
        this.props.update(CURRENT_CIV);
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