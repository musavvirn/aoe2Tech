import React, {Component} from "react";
import NotifService, {UNIT_HOVERED, CIV_SELECTED} from "../Service/notifService";
import ReactTooltip from 'react-tooltip';

var notifService = new NotifService();

export default class UnitInfo extends Component {
    constructor() {
        super();
        this.state = {unit : null, civ: null, x: "0 px", y: "0 px"}
        this.showInfo = this.showInfo.bind(this);
        this.showCivInfo = this.showCivInfo.bind(this);

    }


    componentDidMount() {
        notifService.addObserver(UNIT_HOVERED, this, this.showInfo);
        notifService.addObserver(CIV_SELECTED, this, this.showCivInfo);

    }

    componentWillUnmount() {
        notifService.removeObserver(this, UNIT_HOVERED);
        notifService.removeObserver(this, CIV_SELECTED);

    }

    showInfo(unit) {
        this.setState({unit: unit.name, x: unit.x + " px", y: unit.y +" px"});
        
    }

    showCivInfo(civ) {
        this.setState({civ: civ});

    }

    render() {
        return(
            <div className="" style={{top: this.state.x}, {left: this.state.y}}> 
                <p>{this.state.unit} + "for: " + {this.state.civ}</p>

                {/* <a data-tip="React-tooltip"> ◕‿‿◕ </a>
                <ReactTooltip place="top" type="dark" effect="float"/> */}
            </div>
        )
    }


    
}