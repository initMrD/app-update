import {__decorate, __extends} from "tslib";
import {Injectable} from '@angular/core';
import {IonicNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet} from '@ionic-native/core';

var AppUpdateByStore = /** @class */ (function (_super) {
    __extends(AppUpdateByStore, _super);

    function AppUpdateByStore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }

    AppUpdateByStore.prototype.checkUpdate = function (url, success, error) {
        return cordova(this, "checkUpdate", {"sync": true}, arguments);
    };
    AppUpdateByStore.pluginName = "AppUpdateByStore";
    AppUpdateByStore.plugin = "cordova-plugin-app-update-by-app-store";
    AppUpdateByStore.pluginRef = "AppUpdateByStore";
    AppUpdateByStore.install = "cordova plugin add https://github.com/initMrD/cordova-plugin-app-update-by-app-store.git";
    AppUpdateByStore.repo = "cordova plugin add https://github.com/initMrD/cordova-plugin-app-update-by-app-store";
    AppUpdateByStore.platforms = ["Android", "iOS"];
    AppUpdateByStore = __decorate([
        Injectable()
    ], AppUpdateByStore);
    return AppUpdateByStore;
}(IonicNativePlugin));
export {AppUpdateByStore};
