import NotifService, {CIV_SELECTED} from "./notifService";
let instance = null;

var notifService = new NotifService();

export default class CivService {
    constructor() {
        if (!instance) {
        }
        return instance;
    }


    civSelected(value) {
        notifService.updateNotif(CIV_SELECTED, value);
        return value;
    }


}

