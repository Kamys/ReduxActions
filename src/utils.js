"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_act_1 = require("redux-act");
var redux_1 = require("redux");
function helperCreateAction(actionName) {
    var type = {
        REQUEST: actionName + "_REQUEST",
        SUCCESS: actionName + "_SUCCESS",
        FAILURE: actionName + "_FAILURE",
    };
    return {
        REQUEST: redux_act_1.createAction(type.REQUEST, function (payload) { return payload; }),
        SUCCESS: redux_act_1.createAction(type.SUCCESS, function (payload) { return payload; }),
        FAILURE: redux_act_1.createAction(type.FAILURE, function (payload) { return payload; }),
    };
}
function createAsyncAction(actionName) {
    return helperCreateAction(actionName);
}
exports.createAsyncAction = createAsyncAction;
// TODO: bad name
exports.createActionCreator = function (reducer) { return function (actionType) {
    return createAsyncAction(reducer + "__" + actionType);
}; };
/**
 * Use for map dispatch actions from Module.
 */
function bindModuleAction(moduleActions, dispatch) {
    return Object.entries(moduleActions).reduce(function (result, _a) {
        var key = _a[0], value = _a[1];
        result[key] = redux_1.bindActionCreators(value, dispatch);
        return result;
    }, {});
}
exports.bindModuleAction = bindModuleAction;
