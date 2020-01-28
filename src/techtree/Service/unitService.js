import NotifService, {UNIT_HOVERED} from "./notifService";
let instance = null;

var notifService = new NotifService();

export default class UnitService {
    constructor() {
        if (!instance) {
        }
        return instance;
    }


    unitHovered(value) {
        notifService.updateNotif(UNIT_HOVERED, value);
        return value;
    }


}

