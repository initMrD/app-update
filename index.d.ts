import {IonicNativePlugin} from '@ionic-native/core';

/**
 * @name AppUpdateByStore
 * @description
 * This plugin does something
 */
export declare class AppUpdateByStore extends IonicNativePlugin {

    /**
     * 检查更新
     * @param url
     * @param success
     * @param error
     */
    checkUpdate(url: string, success: Function, error: Function): void;

    /**
     * 检查版本号
     * @param url
     * @param success
     * @param error
     */
    getUpdateVersion(url: string, success: Function, error: Function): void;

    /**
     * 获取远端版本号
     * @param url
     */
    getRemoteVersion(url: string): Promise<any>;
}

