cordova.define("summer-plugin-frame.XFrame", function(require, exports, module) {

        var exec = require('cordova/exec');

        var frame = {};

        frame.showToast = function(content, type) {
            //exec(successCallback, errorCallback, "Camera", "cleanup", []);
            exec(null, null, "FrameManager", "showToast", [content,type]);
        };

        frame.openFrame = function(frameParam,successCallback,errorCallback) {
            exec(successCallback, errorCallback, "FrameManager", "openFrame", [frameParam]);
        };

        frame.closeFrame = function(frameParam,successCallback,errorCallback) {
            exec(successCallback, errorCallback, "FrameManager", "closeFrame", [frameParam]);
        };

        frame.openWindow = function(successCallback,errorCallback,id,params,anim) {
            exec(successCallback, errorCallback, "FrameManager", "openWindow", [id,params,anim]);
        };
        frame.openWin = function(winParam, successCallback, errorCallback) {
            exec(successCallback, errorCallback, "FrameManager", "openWin", [winParam]);
        };
        frame.createWin = function(winParam, successCallback, errorCallback) {
            exec(successCallback, errorCallback, "FrameManager", "createWin", [winParam]);
        };
        frame.showWin = function(winParam, successCallback, errorCallback) {
            exec(successCallback, errorCallback, "FrameManager", "showWin", [winParam]);
        };
        frame.setFrameAttr = function(json, successCallback, errorCallback) {
            exec(successCallback, errorCallback, "FrameManager", "setFrameAttr", [json]);
        };
        frame.closeWindow = function(winParam, successCallback, errorCallback) {
            exec(successCallback, errorCallback, "FrameManager", "closeWindow", [winParam]);
        };

        frame.closeWin = function(winParam, successCallback, errorCallback) {
            exec(successCallback, errorCallback, "FrameManager", "closeWin", [winParam]);
        };
        frame.closeToWin = function(winParam, successCallback, errorCallback) {
            exec(successCallback, errorCallback, "FrameManager", "closeToWin", [winParam]);
        };

        //window级别的页面参数，通过openWin打开时的页面参数
        frame.winParam = function(successCallback, errorCallback) {
            exec(successCallback, errorCallback, "FrameManager", "winParam", []);
        };
        //Frame级别页面参数，通过openFrame打开时的页面参数
        frame.frameParam = function(successCallback, errorCallback) {
            exec(successCallback, errorCallback, "FrameManager", "frameParam", []);
        };

        frame.setRefreshHeaderInfo = function(json, successCallback, errorCallback) {
            exec(successCallback, errorCallback, "FrameManager", "setRefreshHeaderInfo", [json]);
        };
        frame.refreshHeaderLoadDone = function(json, successCallback, errorCallback) {
            json = json || {};
            exec(successCallback, errorCallback, "FrameManager", "refreshHeaderLoadDone", [json]);
        };

        frame.setRefreshFooterInfo = function(json, successCallback, errorCallback) {
            exec(successCallback, errorCallback, "FrameManager", "setRefreshFooterInfo", [json]);
        };
        frame.refreshFooterLoadDone = function(json, successCallback, errorCallback) {
            json = json || {};
            exec(successCallback, errorCallback, "FrameManager", "refreshFooterLoadDone", [json]);
        };

        frame.execScript = function(json,successCallback, errorCallback) {
            exec(successCallback, errorCallback, "FrameManager", "execScript", [json]);
        };

        //frameGroup机制
        frame.openFrameGroup = function(json,successCallback, errorCallback) {
            exec(successCallback, errorCallback, "FrameManager", "openFrameGroup", [json]);
        };
        frame.closeFrameGroup = function(json,successCallback, errorCallback) {
            exec(successCallback, errorCallback, "FrameManager", "closeFrameGroup", [json]);
        };
        frame.setFrameGroupAttr = function(json,successCallback, errorCallback) {
            exec(successCallback, errorCallback, "FrameManager", "setFrameGroupAttr", [json]);
        };
        frame.setFrameGroupIndex = function(json,successCallback, errorCallback) {
            exec(successCallback, errorCallback, "FrameManager", "setFrameGroupIndex", [json]);
        };
        
//        frame.closeFrame = function(id) {
//            exec(null, null, "FrameManager", "closeFrame", [id]);
//        };
        module.exports = frame;

    }
);
