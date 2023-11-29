function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { v4 as uuid } from 'uuid';
import ActionTypes from './action-types';

/**
 * importConfig - action creator
 *
 * @param  {Object} config
 * @memberof ActionCreators
 */
export function importConfig(config) {
  return {
    config: config,
    type: ActionTypes.IMPORT_CONFIG
  };
}

/**
 * setConfig - action creator
 *
 * @param  {Object} config
 * @memberof ActionCreators
 */
export function setConfig(config) {
  return {
    config: config,
    type: ActionTypes.SET_CONFIG
  };
}

/**
 * updateConfig - action creator
 *
 * @param  {Object} config
 * @memberof ActionCreators
 */
export function updateConfig(config) {
  return {
    config: config,
    type: ActionTypes.UPDATE_CONFIG
  };
}

/**
 * importMiradorState - action creator
 *
 * @param  {Object} config
 * @memberof ActionCreators
 */
export function importMiradorState(state) {
  var newState = _objectSpread(_objectSpread({}, state), {}, {
    workspace: _objectSpread(_objectSpread({}, state.workspace), {}, {
      id: uuid()
    })
  });
  return {
    state: newState,
    type: ActionTypes.IMPORT_MIRADOR_STATE
  };
}