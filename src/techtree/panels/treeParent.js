import React, {Component} from "react";
import TreePanel from "./treePanel";
// import {TOWNCENTRE, RANGE, BARRACKS, STABLE, SIEGE, CASTLE, BLACSKMITH, MONASTERY, UNIVERSITY, ECONOMY, DOCK, DEFENSE} from "./UNIT_NAMES";
import NotifService, {CIV_SELECTED} from "../Service/notifService";
import "./panel.css";


const NA = "NA";
const DIS = "disable-";
var notifService = new NotifService();

export default class TreeParent extends Component {
    fullUpg = [];
    uniqueTech = [];
    xRange = [];
    xBarracks = [];
    xStable = [];
    xSiege = [];
    xCastle = [];
    xDefense = [];
    xMonastery = [];
    xBlacksmith = [];
    xUniversity = [];
    xEconomy = [];
    xDock = [];
    xTownCentre = [];
    
    constructor(props) {
        super(props);
        this.updateTree = this.updateTree.bind(this);
        this.resetTree = this.resetTree.bind(this);
        this.updateTree("Aztecs");  
    }

    componentDidMount() {
        notifService.addObserver(CIV_SELECTED, this, this.updateTree);
    }

    componentWillUnmount() {
        notifService.removeObserver(this, CIV_SELECTED);
    }

    /* value = civ selected */
    updateTree(value) {
        this.resetTree();
        switch (value) {
            case "Aztecs":
                this.fullUpg = ["Champion", "Elite Eagle Warrior", "Siege Ram", "Siege Onager"];
                this.setUnique(["Jaguar Warrior", "Atlatl", "Garland Wars"]);    
                this.enable(["Eagle Scout", "Eagle Warrior", "Elite Eagle Warrior"]);  
                this.disable(this.xRange, ["Cavalry Archer", "Hand Cannoneer", "Thumb Ring", "Parthian Tactics", "Heavy Cavalry Archer"]);
                this.disable(this.xBarracks, ["Halberdier"]);
                this.disable(this.xStable, ["Scout Cavalry", "Bloodlines","Light Cavalry", "Knight", "Camel Rider","Hussar", "Cavalier", "Heavy Camel Rider", "Paladin", "Husbandry"]);
                this.disable(this.xSiege, ["Bombard Cannon", "Heavy Scorpion"]);
                this.disable(this.xCastle, ["Hoardings"]);
                this.disable(this.xDefense, ["Bombard Tower", "Keep"])
                this.disable(this.xBlacksmith, ["Ring Archer Armor", "Scale Barding Armor", "Plate Barding Armor", "Chain Barding Armor"]);
                this.disable(this.xUniversity, ["Masonry", "Architecture", "Keep", "Bombard Tower"]);
                this.disable(this.xMonastery, []);
                this.disable(this.xEconomy, ["Two-man Saw", "Guilds"]);
                this.disable(this.xDock, ["Cannon Galleon", "Elite Cannon Galleon", "Galleon", "Heavy Demolition Ship"]);
            break;
    
            case "Berbers":
                this.fullUpg = ["Elite Skirmisher", "Hand Cannoneer", "Elite Genitour", "Hussar", "Heavy Camel Rider", "Champion", "Bombard Cannon", "Heavy Scorpion", "Trebuchet"]
                this.setUnique(["Camel Archer", "Kasbah", "Maghrabi Camels"]); 
                this.enable(["Genitour", "Elite Genitour"]);  
                this.disable(this.xRange, ["Arbalester", "Parthian Tactics"]);
                this.disable(this.xBarracks, ["Halberdier"]);
                this.disable(this.xStable, ["Paladin"]);
                this.disable(this.xSiege, ["Siege Ram", "Siege Onager"]);
                this.disable(this.xCastle, ["Sappers"]);
                this.disable(this.xDefense, ["Bombard Tower", "Keep"])
                this.disable(this.xBlacksmith, []);
                this.disable(this.xUniversity, ["Architecture", "Keep", "Bombard Tower"]);
                this.disable(this.xMonastery, ["Sanctity", "Block Printing"]);
                this.disable(this.xEconomy, ["Two-man Saw"]);
                this.disable(this.xDock, ["Shipwright"]);
            break;
            
            case "Britons":
                this.fullUpg = ["Champion", "Halberdier", "Trebuchet", "Heavy Scorpion"];
                this.setUnique(["Longbowman", "Yeomen", "Warwolf"]); 
                this.disable(this.xRange, ["Heavy Cavalry Archer", "Hand Cannoneer", "Thumb Ring", "Parthian Tactics"]);
                this.disable(this.xBarracks, []);
                this.disable(this.xStable, ["Hussar", "Bloodlines", "Paladin", "Camel Rider", "Heavy Camel Rider"]);
                this.disable(this.xSiege, ["Siege Ram", "Siege Onager", "Bombard Cannon"]);
                this.disable(this.xCastle, []);
                this.disable(this.xDefense, ["Bombard Tower"])
                this.disable(this.xBlacksmith, []);
                this.disable(this.xUniversity, ["Treadmill Crane", "Bombard Tower"]);
                this.disable(this.xMonastery, ["Redemption", "Atonement", "Heresy"]);
                this.disable(this.xEconomy, ["Stone Shaft Mining", "Crop Rotation"]);
                this.disable(this.xDock, ["Elite Cannon Galleon"]);
            break;
    
            
            
            case "Bulgarians":
                this.fullUpg = ["Halberdier", "Hussar", "Paladin", "Siege Ram", "Siege Onager", "Heavy Scorpion", "Trebuchet"];
                this.setUnique(["Konnik", "Stirrups", "Bagains"]); 
                this.enable(["Krepost"]);  
                this.disable(this.xRange, ["Crossbowman", "Arbalester", "Hand Cannoneer"]);
                this.disable(this.xBarracks, ["Champion"]);
                this.disable(this.xStable, ["Camel Rider", "Heavy Camel Rider"]);
                this.disable(this.xSiege, ["Bombard Cannon"]);
                this.disable(this.xCastle, ["Hoardings", "Sappers"]);
                this.disable(this.xDefense, ["Fortified Wall", "Bombard Tower Build"]);
                this.disable(this.xBlacksmith, ["Ring Archer Armor"]);
                this.disable(this.xUniversity, ["Bombard Tower", "Fortified Wall", "Arrowslits"]);
                this.disable(this.xMonastery, ["Atonement", "Block Printing"]);
                this.disable(this.xEconomy, ["Two-man Saw", "Guilds"]);
                this.disable(this.xDock, ["Fast Fire Ship", "Heavy Demolition Ship", "Elite Cannon Galleon", "Dry Dock", "Shipwright"]);
            break;

            case "Burmese":
                this.fullUpg = ["Halberdier", "Champion", "Hussar", "Heavy Scorpion", "Trebuchet"];
                this.setUnique(["Arambai", "Howdah", "Manipur Cavalry"]); 
                this.disable(this.xRange, ["Arbalester", "Hand Cannoneer", "Thumb Ring"]);
                this.disable(this.xBarracks, []);
                this.disable(this.xStable, ["Camel Rider", "Heavy Camel Rider", "Paladin"]);
                this.disable(this.xSiege, ["Siege Onager", "Siege Ram"]);
                this.disable(this.xCastle, ["Hoardings", "Sappers"]);
                this.disable(this.xDefense, ["Bombard Tower Build"]);
                this.disable(this.xBlacksmith, ["Leather Archer Armor", "Ring Archer Armor"]);
                this.disable(this.xUniversity, ["Bombard Tower", "Arrowslits"]);
                this.disable(this.xMonastery, ["Heresy"]);
                this.disable(this.xEconomy, ["Stone Shaft Mining"]);
                this.disable(this.xDock, ["Fast Fire Ship", "Heavy Demolition Ship", "Shipwright"]);
            break;

            case "Byzantines":
                this.fullUpg = ["Arbalest", "Elite Skirmisher", "Hand Cannoneer"];
                this.setUnique(["Cataphract", "Greek Fire", "Logistica"]); 
                this.disable(this.xRange, ["Parthian Tactics"]);
                this.disable(this.xBarracks, []);
                this.disable(this.xStable, ["Blodlines"]);
                this.disable(this.xSiege, ["Siege Onager", "Heavy Scorpion"]);
                this.disable(this.xCastle, ["Sappers"]);
                this.disable(this.xDefense, []);
                this.disable(this.xBlacksmith, []);
                this.disable(this.xUniversity, ["Masonry", "Architecture", "Trademill Crane", "Heated Shot", "Siege Engineers"]);
                this.disable(this.xMonastery, ["Herbal Medicine"]);
                this.disable(this.xEconomy, []);
                this.disable(this.xDock, []);
            break;

            case "Celts":
                this.fullUpg = ["Champion", "Halberdier", "Siege Ram", "Siege Onager", "Heavy Scorpion", "Trebuchet"];
                this.setUnique(["Woad Raider", "Stronghold", "Furor Celtica"]); 
                this.disable(this.xRange, ["Arbalest", "Hand Canononeer", "Thumb Ring", "Parthian Tactics"]);
                this.disable(this.xBarracks, []);
                this.disable(this.xStable, ["Blodlines", "Camel Rider", "Heavy Camel Rider"]);
                this.disable(this.xSiege, ["Bombard Cannon"]);
                this.disable(this.xCastle, []);
                this.disable(this.xDefense, ["Bombard Tower Build"]);
                this.disable(this.xBlacksmith, ["Ring Archer Armor", "Bracer", "Plate Barding Armor"]);
                this.disable(this.xUniversity, ["Architecture", "Bombard Tower"]);
                this.disable(this.xMonastery, ["Redemption", "Atonement", "Block Printing", "Illumination", "Theocracy"]);
                this.disable(this.xEconomy, ["Two-Man Saw", "Crop Rotation"]);
                this.disable(this.xDock, ["Fast Fire Ship", "Elite Cannon Galleon"]);
            break;



            case "Turks":
                this.fullUpg = ["Heavy Cavalry Archer", "Hand Cannoneer", "Hussar", "Heavy Camel Rider", "Champion"];
                this.setUnique(["Janissary", "Sipahi", "Artillery"]); 
                this.disable(this.xRange, ["Arbalester", "Elite Skirmisher"]);
                this.disable(this.xBarracks, ["Pikeman", "Halberdier"]);
                this.disable(this.xStable, ["Paladin"]);
                this.disable(this.xSiege, ["Onager", "Siege Onager"]);
                this.disable(this.xCastle, []);
                this.disable(this.xDefense, []);
                this.disable(this.xBlacksmith, []);
                this.disable(this.xUniversity, ["Siege Engineers"]);
                this.disable(this.xMonastery, ["Herbal Medicine", "Illumination", "Block Printing"]);
                this.disable(this.xEconomy, ["Stone Shaft Mining", "Crop Rotation"]);
                this.disable(this.xDock, ["Fast Fire Ship"]);
            break;

            default:  
        }
    }

    setUnique(units) {
        if (units.length !==0) {
            this.xCastle[2][0] = units[0];
            this.xCastle[3][0] = "Elite " +units[0];
            this.uniqueTech.push(units[1], units[2]);
            
        }  
    }

    enable(units) {
        if(units.length !==0) {
            units.map(unit => {
                switch (unit) {
                    case "Imperial Skirmisher":
                        this.xRange[3][4] = unit;
                    break;
                    case "Slinger":
                        this.xRange[2][4] = unit;
                    break;
                    case "Genitour":
                        this.xRange[2][4] = unit;
                    break;
                    case "Elite Genitour":
                        this.xRange[3][4] = unit;
                    break;
                    case "Eagle Scout":
                        this.xBarracks[1][2] = unit;
                    break;
                    case "Eagle Warrior":
                        this.xBarracks[2][2] = unit;
                    break;
                    case "Elite Eagle Warrior":
                        this.xBarracks[3][2] = unit;
                    break;
                    case "Condottiero":
                        this.xRange[3][3] = unit;
                    break;
                    case "Steppe Lancer":
                        this.xStable[2][3] = unit;
                    break;
                    case "Elite Steppe Lancer":
                        this.xRange[3][3] = unit;
                    break;
                    case "Battle Elephant":
                        this.xRange[2][4] = unit;
                    break;
                    case "Elite Battle Elephant":
                        this.xRange[3][4] = unit;
                    break;
                    case "Missionary":
                        this.xMonastery[3][1] = unit;
                    break;
                    case "Caravel":
                        this.xDock[2][4] = unit;
                        this.xDock[3][4] = "Elite " +unit;
                    break;
                    case "Longboat":
                        this.xDock[2][4] = unit;
                        this.xDock[3][4] = "Elite " +unit;
                    break;
                    case "Turtle Ship":
                        this.xDock[2][4] = unit;
                        this.xDock[3][4] = "Elite " +unit;
                    break;
                    case "Krepost":
                        this.xDefense[2][0] = unit;
                    break;
                    default:
                }
                return null;
            })
        }
    }

    disable(build, units) {
        if (units.length !== 0) {
            let newTree = Array.from(build);
                let disableLength = units.length;
                for (let i=0; disableLength>0 && i<=4; i++) {
                    newTree[i].forEach(unit => {  
                        units.forEach(x => {
                            if (unit === x) {
                                let k = newTree[i].indexOf(unit);
                                // this.attachNATag(newTree, i, k);
                                this.attachDisableTag(newTree, i, k);
                                disableLength--;
                            } 
                        });
                    });
                } 
        }         
    }

    /* disabled unit Strings are replaced with NA */
    attachNATag(newTree, i, k) {
        newTree[i][k] = NA;
    }
    /* disabled untis are prefixed DISABLE instead of NA */
    attachDisableTag(newTree, i, k) {
        newTree[i][k] = DIS + newTree[i][k];
    }

    resetTree() {
        this.fullUpg = [];
        this.uniqueTech = [];
        const RANGE = [[NA], ["Archer", "Skirmisher"], ["Crossbowman", "Elite Skirmisher", "Cavalry Archer", NA, NA, "Thumb Ring"], ["Arbalester", NA, "Heavy Cavalry Archer", "Hand Cannoneer", NA, "Parthian Tactics"], [NA]];
        const BARRACKS = [["Militia"], ["Man-at-Arms", "Spearman", NA, NA, "Supplies"], ["Long Swordsman", "Pikeman", NA, NA, "Squires", "Arson",], ["Two-Handed Swordsman", "Halberdier", NA, NA], ["Champion", NA, NA, NA]];
        const STABLE = [[NA], ["Scout Cavalry", NA, NA, NA, NA, "Bloodlines"], ["Light Cavalry", "Knight", "Camel Rider", NA, NA, "Husbandry"], ["Hussar", "Cavalier", "Heavy Camel Rider", NA, NA], [NA, "Paladin", NA]];
        const SIEGE = [[NA], [NA], ["Battering Ram", "Mangonel", "Scorpion",NA, NA, NA, NA], ["Capped Ram", "Onager", "Heavy Scorpion",NA, NA, NA, NA], ["Siege Ram", "Siege Onager", NA, "Bombard Cannon"]];
        const CASTLE = [[NA], [NA], ["Jaguar Warrior", NA, "Petard", NA, "Unique Tech 1", NA, NA], ["Elite Longbowman", "Trebuchet", NA, NA, "Unique Tech 2", NA, NA], [NA,NA, "Hoardings", "Sappers", "Conscription", "Spies or Treason"]];
        const DEFENSE = [["Outpost", NA, "House"], [NA, "Watch Tower", NA, "Palisade Wall", "Stone Wall", "Palisade Gate", "Gate"], [NA, "Guard Tower", NA, NA, "Fortified Wall"], [NA, "Keep", "Bombard Tower Build"], [NA]];
        const MONASTERY = [[NA], [NA], ["Monk", "Redemption", "Fervor", "Sanctity", "Atonement","Herbal Medicine", "Heresy"], [NA, "Block Printing", "Illumination", "Faith", "Theocracy"], [NA]];
        const BLACSKMITH = [[NA], ["Forging", "Scale Mail Armor", "Scale Barding Armor", "Fletching", "Padded Archer Armor", NA, NA], ["Iron Casting", "Chain Mail Armor", "Chain Barding Armor", "Bodkin Arrow", "Leather Archer Armor", NA, NA], ["Blast Furnace", "Plate Mail Armor", "Plate Barding Armor", "Bracer", "Ring Archer Armor", NA, NA], [NA]];
        const UNIVERSITY = [[NA], [NA], ["Masonry", "Fortified Wall", "Ballistics", "Guard Tower", "Heated Shot", "Treadmill Crane", "Murder Holes"], ["Architecture", "Chemistry", "Siege Engineers", "Keep", "Arrowslits", NA, NA], [NA, "Bombard Tower"]];
        const ECONOMY = [[NA], ["Trade Cart", NA, "Coinage", "Double-Bit Axe", "Horse Collar", "Gold Mining", "Stone Mining"], [NA, "Caravan", "Banking", "Bow Saw", "Heavy Plow", "Gold Shaft Mining", "Stone Shaft Mining"], [NA, "Guilds", NA, "Two-man Saw", "Crop Rotation", NA, NA], [NA]];
        const DOCK = [[NA, NA, NA, "Fishing Ship", "Transport Ship"], ["Galley", "Demolition Raft", "Fire Galley", NA, NA, "Trade Cog"], ["War Galley", "Demolition Ship", "Fire Ship", NA, "Gillnets", "Careening"], ["Galleon", "Heavy Demo Ship", "Fast Fire Ship", NA, "Cannon Galleon", "Dry Dock", "Shipwright"], [NA, NA, NA, NA, "Elite Cannon Galleon"]];
        const TOWNCENTRE = [["Villager", "Loom", NA, NA, "Feudal Age"], [NA, NA, "Wheelbarrow", "Town Watch", "Castle Age"], [NA, NA, "Hand Cart", "Town Patrol", "Imperial Age"], [NA], [NA]];

        this.xRange = [...RANGE];
        this.xBarracks = [...BARRACKS];
        this.xStable = [...STABLE]
        this.xSiege = [...SIEGE];
        this.xCastle = [...CASTLE];
        this.xDefense = [...DEFENSE];
        this.xMonastery = [...MONASTERY];
        this.xBlacksmith = [...BLACSKMITH];
        this.xUniversity = [...UNIVERSITY];
        this.xEconomy = [...ECONOMY];
        this.xDock = [...DOCK];
        this.xTownCentre = [...TOWNCENTRE];
    }

    render() {
        
        return(
            <>
            <main>
                
                <div></div>
                <table>
                    <tbody>
                        <tr>
                        <TreePanel key="066" build="Archery Range" fu={this.fullUpg} tree={this.xRange}/>
                        <TreePanel key="0626" build="Barracks" fu={this.fullUpg} tree={this.xBarracks}/>
                        <TreePanel key="055" build="Stable" fu={this.fullUpg} tree={this.xStable}/>
                        
                        </tr>
                        <tr>
                        <TreePanel key="0213" build="Siege Workshop" tree={this.xSiege}/>
                        <TreePanel key="022" build="Castle" tree={this.xCastle} UT={this.uniqueTech}/>
                        <TreePanel key="033" build="Defense" tree={this.xDefense}/>
                        </tr>
                        <tr>
                        <TreePanel key="023" build="Blacksmith" tree={this.xBlacksmith}/>
                        <TreePanel key="012" build="University" tree={this.xUniversity}/>
                        <TreePanel key="032" build="Monastery" tree={this.xMonastery}/>
                        </tr>
                        <tr>
                        <TreePanel key="02" build="Town Center" tree={this.xTownCentre}/>
                        <TreePanel key="03" build="Economic Buildings" tree={this.xEconomy}/>
                        <TreePanel key="04" build="Dock" tree={this.xDock}/>
                        </tr>
                    </tbody>
                </table>
            </main>
            </>
                    
            
        )
        
    }
}