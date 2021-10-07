import React, {Component} from "react";
import UnitService from "../Service/unitService";
import NotifService, { UNIT_HOVERED } from "../Service/notifService";
import Tooltip from "rc-tooltip";
import 'rc-tooltip/assets/bootstrap.css';

import DATA from "../data";
const NA = "NA";
const DIS = "disable-";
const UNITS = "units";
const TECHS = "techs";

var notifService = new NotifService();
var untiService = new UnitService();

class Tree extends Component {
    constructor(props) {
        super(props);
        this.state = {unit: "", unitType: "", unitInfo: "", unitStats: {}, unitTechs: ""}
        this.generateUnit = this.generateUnit.bind(this);
        this.handleUnitHover = this.handleUnitHover.bind(this);
    }

    componentDidMount() {
        notifService.addObserver(UNIT_HOVERED, this, this.reset)
    }

    componentWillUnmount() {
        notifService.removeObserver(this, UNIT_HOVERED);
    }

    reset() {
    }

    generateUnit(i) {
        
        if (this.props.units !== undefined) {
            return this.props.units[i].map(u => {
                let classTag = this.determineUnitClassName(this.props.fu, u);
                let uImg = u.toLowerCase().replace(/\s/g, '_').replace(' ', '_');

                // modify string to differentiate tower and wall upgrades at University & build in Defense tree
                if (uImg.includes("_upgrade")) {
                    uImg = uImg.replace("_upgrade", '');
                }

                // modify string to remove DIS tag before finding icon (disabled units/techs)
                if (uImg.startsWith(DIS)) {
                    uImg = uImg.replace(DIS, '');
                    return this.unitDisableIcon(classTag, u, uImg); 
                } else {
                    return this.unitRegularIcon(classTag, u, uImg); 
                }

                
                
            }) 
        }
        
    }

    /* generates regular unit icon path */
    unitRegularIcon(classTag, u, uImg) {
        let img;

        if (u === NA) {
            img = <>
                <img 
                    className={classTag} 
                    name={u} 
                    src={require("../Units/" + uImg + ".png")}
                    alt="IMG" 
                    onMouseEnter={this.handleUnitHover}>
                </img>
                
                </>
        } else {        
            img = <>
                <Tooltip
                    
                    overlayClassName="u-tooltip" 
                    align={{
                    offset: ["0 px", "-15 px"],
                }}  
                    mouseLeaveDelay="0.0" 
                    destroyTooltipOnHide={true} 
                    placement="top" 
                    overlay={this.tooltipContent()}>

                    <img 
                        className={classTag} 
                        name={u} 
                        src={require("../Units/" + uImg + ".png")}
                        alt="IMG" 
                        onMouseEnter={this.handleUnitHover}>
                    </img>
                </Tooltip>
            </>;
        }

        
        return (img);
    }

     /* generates DISABLED red cross + regular unit icon path */
    unitDisableIcon(classTag, u, uImg) {
        let img = <>
            <img className="x-overlay" src={require("../Units/x.png")} alt="IMG"></img>
            <Tooltip overlayClassName="u-tooltip" align={{
                offset: ["0 px", "-15 px"],
            }} mouseLeaveDelay="0.0" destroyTooltipOnHide={true} placement="top" overlay={this.tooltipContent()}>
                <img className={classTag} name={u} src={require("../Units/" + uImg + ".png")} alt="IMG" onMouseEnter={this.handleUnitHover}>

                </img>

            </Tooltip>

        </>;
        return (img);
    }

    tooltipContent() {
        try {
            let content = <div></div>;
            if (this.state.unitType === UNITS) {
                content = <>    <h6>{this.state.unit}</h6>
                                <span className="stats">
                                {"HP ----- " + this.state.unitStats.HP + "    "}<br></br>
                                {"Attack -- " + this.state.unitStats.Attack}<br></br>
                                {"Armor --  " + this.state.unitStats.Armor}<br></br>
                                {"Range --  " + this.state.unitStats.Range}<br></br>
                                {"Cost ---- " + JSON.stringify(this.state.unitStats.Cost)}<br></br></span>
                                <p>{this.state.unitInfo.replace(/<br>/g, '').replace(/<b>/g, '').replace(/<i>/g, '')
                                .replace(/<\/b>/g, '').replace(/<\/i>/g, '')}</p>
                            </>
            } else if (this.state.unitType === TECHS) {
                content = <>    <h6>{this.state.unit}</h6>
                                <span className="stats">
                                {"Cost ---- " + JSON.stringify(this.state.unitStats.Cost)}<br></br></span>
                                <p>{this.state.unitInfo}</p>
                            </>
            }
            return (content)
        } catch (e) {
            console.log("TOOLTIP ERROR");
        }


        
    }

    /* determine & return className of img icon based on regular, fully upgraded, or NA */
    determineUnitClassName(fu, u) {
        let classTag;
        if (fu !== undefined && this.props.fu.includes(u)) {
            classTag = "unit unit-fu"; 
        } else if (u !== NA) {
            classTag = "unit"; 
        } else {
            classTag = "unit unit-na";
        }
        return classTag;
    }

    handleUnitHover(event) {
        let obj = {name: event.target.name, x: event.clientX, y: event.clientY}
        let name = event.target.name;
        let unit_id = undefined;
        let type = UNITS;
        if (name !== undefined && name !== NA) {
            unit_id = DATA.name_key.units[name];
         
            if (unit_id === undefined) {
                if (name === "Unique Tech 1") {
                    name = this.props.UT[0];
                } else if (name === "Unique Tech 2") {
                    name = this.props.UT[1];
                } else if (name === "Spies or Treason") {
                    name = "Spies/Treason";
                } else if (name.includes("Upgrade"))  {
                    name = name.replace(" Upgrade", "");
                } else {
                    
                }
                type = TECHS;
                unit_id = DATA.name_key.techs[name];
  
            }

            if (unit_id === undefined) {
                unit_id = DATA.name_key.units[name];
                type = UNITS;
            }

            let unit_info = DATA.key_value[unit_id];
            let unit_stats = this.extractStats(name, type);
            this.setState({unit : name, unitType: type, unitInfo : unit_info, unitStats : unit_stats});

        } else {
            console.log("NA Hovered!");
            type = NA;
            this.setState({unit : null, unitType: null, unitInfo : null, unitStats : null});
        }
        
        untiService.unitHovered(obj);
    }

    extractStats(name, type) {
        var unit_name, unit_stats;
        console.log(name);
        try {
            if (type === UNITS) {
                unit_name = DATA.meta.units[name];
                if (unit_name !== undefined) {
                    
                    unit_stats = {
                        HP: unit_name.HP,
                        Attack: unit_name.Attack,
                        Armor: unit_name.MeleeArmor + "/" + unit_name.PierceArmor,
                        Range: unit_name.Range,
                        Cost: unit_name.Cost
                    }
                } else {
                    if (name === "Bombard Tower Build") {
                        unit_name = DATA.meta.buildings["Bombard Tower"];
                    } else {
                        unit_name = DATA.meta.buildings[name];
                    }
                    
                    unit_stats = {
                        HP: unit_name.HP,
                        Attack: unit_name.Attack,
                        Armor: unit_name.MeleeArmor + "/" + unit_name.PierceArmor,
                        Range: unit_name.Range,
                        Garrison: unit_name.GarrisonCapacity,
                        Cost: unit_name.Cost
                    }
                }

            } else if (type === TECHS) {
                if (name === "Unique Tech 1") {
                    unit_name = DATA.meta.techs[(this.props.UT[0])];
                } else if (name === "Unique Tech 2") {
                    unit_name = DATA.meta.techs[(this.props.UT[1])];
                } else if (name === "Spies or Treason") {
                    unit_name = DATA.meta.techs[("Spies/Treason")];
                } else {
                    unit_name = DATA.meta.techs[name];               
                }
                unit_stats = {
                    Cost: unit_name.Cost
                }
            } else {
                unit_stats = null;
                console.log("Neither tech or unit stats");
            }
            console.log(unit_stats);
            return unit_stats;
        } catch (e) {
            console.log(e);
        }
        
    }

    render() {
        return(
         
            <div className="tree">
            <div ><img src={require("../Techs/dark_age.png")} alt="IMG" className="age"></img>
                {this.generateUnit(0)}
                
            </div>
            <div><img src={require("../Techs/feudal_age.png")} alt="IMG" className="age"></img>
                {this.generateUnit(1)}

            </div>
            <div><img src={require("../Techs/castle_age.png")} alt="IMG" className="age"></img>
                {this.generateUnit(2)}

            </div>
            <div><img src={require("../Techs/imperial_age.png")} alt="IMG" className="age"></img>
                {this.generateUnit(3)}
            </div>
            <div><img src={require("../Techs/imperial_age.png")} alt="IMG" className="age age-empty"></img>
                {this.generateUnit(4)}

            </div>
            
            
            </div>
            
        )
    }
}

export default Tree;