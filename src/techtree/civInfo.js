import React, {Component} from "react";
import "./civ.css";
import DATA from "./data";

class CivInfo extends Component {

    generateInfo() {
        let info;
        let civID = DATA.civs[this.props.civ];
        info = DATA.key_value[civID];
        return info;
    }
    
    render() {
        return(
            <article className="box info btn-dark">
                <p>{this.props.civ}</p>
                <article className="info-text">{this.generateInfo()}</article>
                              
            </article>
        )
    }
}

export default CivInfo;