import React, {Component} from "react";
import NotifService, {UNIT_HOVERED} from "../Service/notifService";
import ReactTooltip from 'react-tooltip';

var notifService = new NotifService();

export default class UnitInfo extends Component {
    constructor() {
        super();
        this.state = {unit : null, x: "0 px", y: "0 px"}
        this.showInfo = this.showInfo.bind(this);
    }


    componentDidMount() {
        notifService.addObserver(UNIT_HOVERED, this, this.showInfo);
    }

    componentWillUnmount() {
        notifService.removeObserver(this, UNIT_HOVERED);
    }

    showInfo(unit) {
        this.setState({unit: unit.name, x: unit.x + " px", y: unit.y +" px"});
        
    }

    render() {
        return(
            <div className="" style={{top: this.state.x}, {left: this.state.y}}> 
                <p>{this.state.unit}</p>

                {/* <a data-tip="React-tooltip"> ◕‿‿◕ </a>
                <ReactTooltip place="top" type="dark" effect="float"/> */}
            </div>
        )
    }


    
}