import React, {Component} from "react";
import "./civ.css";
import DATA from "./data";

class CivInfo extends Component {

    generateInfo() {
        let dot = '•';
        let infoFormatted;
  
        let info;
        let civID = DATA.civs[this.props.civ];
        info = DATA.key_value[civID];
        info = info.replace(/<br>/g, "\n").replace(/<b>/g, "\n").replace(/<\/b>/g, "\n");
        info = info.replace("Unique Unit", dot + " Unique Unit");
        info = info.split(dot).map((item, key) => {
            return <span key={key}>{dot + ' ' + item}<br/></span>
        });

       

        
        return info;
    }
    
    render() {
        return(
            <article className="box info btn-dark">
                <p className="civ-title">{this.props.civ}</p>
                <article className="info-text">{this.generateInfo()}</article>
                              
            </article>
        )
    }
}

export default CivInfo;