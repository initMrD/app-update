import {IonicNativePlugin} from '@ionic-native/core';

/**
 * @name AppUpdateByStore
 * @description
 * This plugin does something
 */
export declare class AppUpdateByStore extends IonicNativePlugin {
    /**
     * 初始化
     */
    checkUpdate(url: string, success: Function, error: Function): void;

}
