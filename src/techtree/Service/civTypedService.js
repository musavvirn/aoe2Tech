import NotifService, {CIV_SELECTED, CIV_TYPED} from "./notifService";
let instance = null;

var notifService = new NotifService();

export default class CivTypedService {
    constructor() {
        if (!instance) {
        }
        return instance;
    }


    civSelected(value) {
        notifService.updateNotif(CIV_TYPED, value);
        return value;
    }


}

