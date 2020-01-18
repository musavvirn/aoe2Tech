export const CIV_SELECTED = "civ selected";
export const UNIT_HOVERED = "unit hovered";
var observers = {};
var instance = null;

export default class NotifService {
    
    constructor() {
        if (!instance) {
            instance = this;
        }
        return instance;
    }


    updateNotif(notifName, data) {
        var obs = observers[notifName];
        var obj;
        for (var i=0; i<obs.length; i++) {
            obj = obs[i];
            obj.callBack(data);
        }
    }

    addObserver(notifName, observer, callBack) {
        var obs = observers[notifName];

        if(!obs) {
            observers[notifName] = [];
        }
        var obj = {observer: observer, callBack: callBack};
        observers[notifName].push(obj);
    }

    removeObserver(observer, notifName) {
        var obs = observers[notifName];

        if(obs) {
            for (var i=0; i<obs.length; i++) {
                if (observer === obs[i].observer) {
                    obs.splice(i, 1);
                    observers[notifName] = obs;
                    break;
                }
            }  
        }
    }
}