const NA = "NA";

var RANGE = [[NA], ["Archer", "Skirmisher"], ["Crossbowman", "Elite Skirmisher", "Cavalry Archer", NA, NA, "Thumb Ring"], ["Arbalester", NA, "Heavy Cavalry Archer", "Hand Cannoneer", NA, "Parthian Tactics"], [NA]];
var BARRACKS = [["Militia"], ["Man-at-arms", "Spearman", NA, NA, "Supplies"], ["Long Swordsman", "Pikeman", NA, NA, "Squires", "Arson",], ["Two-handed Swordsman", "Halberdier", NA, NA], ["Champion", NA, NA, NA]];
var STABLE = [[NA], ["Scout Cavalry", NA, NA, NA, NA, "Bloodlines"], ["Light Cavalry", "Knight", "Camel Rider", NA, NA, "Husbandry"], ["Hussar", "Cavalier", "Heavy Camel Rider", NA, NA], [NA, "Paladin", NA]];
var SIEGE = [[NA], [NA], ["Battering Ram", "Mangonel", "Scorpion",NA, NA, NA, NA], ["Capped Ram", "Onager", "Heavy Scorpion",NA, NA, NA, NA], ["Siege Ram", "Siege Onager", NA, "Bombard Cannon"]];
var CASTLE = [[NA], [NA], ["Longbowman", NA, "Petard", NA, "Unique Tech 1", NA, NA], ["Elite Longbowman", "Trebuchet", NA, NA, "Unique Tech 2", NA, NA], [NA,NA, "Hoardings", "Sappers", "Conscription", "Spies Treason"]];
var DEFENSE = [["Outpost", NA, "House"], [NA, "Watch Tower", NA, "Palisade Wall", "Stone Wall", "Palisade Gate", "Gate"], [NA, "Guard Tower", NA, NA, "Fortified Wall"], [NA, "Keep", "Bombard Tower Build"], [NA]];
var MONASTERY = [[NA], [NA], ["Monk", "Redemption", "Fervor", "Sanctity", "Atonement","Herbal Medicine", "Heresy"], [NA, "Block Printing", "Illumination", "Faith", "Theocracy"], [NA]];
var BLACSKMITH = [[NA], ["Forging", "Scale Mail Armor", "Scale Barding Armor", "Fletching", "Padded Archer Armor", NA, NA], ["Iron Casting", "Chain Mail Armor", "Chain Barding Armor", "Bodkin Arrow", "Leather Archer Armor", NA, NA], ["Blast Furnace", "Plate Mail Armor", "Plate Barding Armor", "Bracer", "Ring Archer Armor", NA, NA], [NA]];
var UNIVERSITY = [[NA], [NA], ["Masonry", "Fortified Wall", "Ballistics", "Guard Tower", "Heated Shot", "Treadmill Crane", "Murder Holes"], ["Architecture", "Chemistry", "Siege Engineers", "Keep", "Arrowslits", NA, NA], [NA, "Bombard Tower"]];
var ECONOMY = [[NA], ["Trade Cart", NA, "Coinage", "Double-bit Axe", "Horse Collar", "Gold Mining", "Stone Mining"], [NA, "Caravan", "Banking", "Bow Saw", "Heavy Plow", "Gold Shaft Mining", "Stone Shaft Mining"], [NA, "Guilds", NA, "Two-man Saw", "Crop Rotation", NA, NA], [NA]];
var DOCK = [[NA, NA, NA, "Fishing Ship", "Transport Ship"], ["Galley", "Demolition Raft", "Fire Galley", NA, NA, "Trade Cog"], ["War Galley", "Demolition Ship", "Fire Ship", NA, "Gillnets", "Careening"], ["Galleon", "Heavy Demo Ship", "Fast Fire Ship", "Cannon Galleon", "Dry Dock", "Shipwright"], [NA, NA, NA, "Elite Cannon Galleon"]];
var TOWNCENTRE = [["Villager", "Loom", NA, NA, "Feudal Age"], [NA, NA, "Wheelbarrow", "Town Watch", "Castle Age"], [NA, NA, "Hand Cart", "Town Patrol", "Imperial Age"], [NA], [NA]];


export {TOWNCENTRE, RANGE, BARRACKS, STABLE, SIEGE, CASTLE, BLACSKMITH, MONASTERY, UNIVERSITY, ECONOMY, DOCK, DEFENSE};


// export {university};
// export {economy};