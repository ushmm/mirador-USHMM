function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import ActionTypes from './action-types';
import { getNextCanvasGrouping, getPreviousCanvasGrouping, getCanvasGrouping } from '../selectors';

/**
 * setCanvas - action creator
 *
 * @param  {String} windowId
 * @param  {String} canvasId
 * @memberof ActionCreators
 */
export function setCanvas(windowId, canvasId) {
  var newGroup = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  return function (dispatch, getState) {
    var state = getState();
    var visibleCanvases = newGroup;
    if (!visibleCanvases) {
      var group = getCanvasGrouping(state, {
        canvasId: canvasId,
        windowId: windowId
      });
      visibleCanvases = (group || []).map(function (c) {
        return c.id;
      });
    }
    dispatch(_objectSpread(_objectSpread({}, options), {}, {
      canvasId: canvasId,
      type: ActionTypes.SET_CANVAS,
      visibleCanvases: visibleCanvases,
      windowId: windowId
    }));
  };
}

/** Set the window's canvas to the next canvas grouping */
export function setNextCanvas(windowId) {
  return function (dispatch, getState) {
    var state = getState();
    var newGroup = getNextCanvasGrouping(state, {
      windowId: windowId
    });
    var ids = (newGroup || []).map(function (c) {
      return c.id;
    });
    newGroup && dispatch(setCanvas(windowId, ids[0], ids));
  };
}

/** Set the window's canvas to the previous canvas grouping */
export function setPreviousCanvas(windowId) {
  return function (dispatch, getState) {
    var state = getState();
    var newGroup = getPreviousCanvasGrouping(state, {
      windowId: windowId
    });
    var ids = (newGroup || []).map(function (c) {
      return c.id;
    });
    newGroup && dispatch(setCanvas(windowId, ids[0], ids));
  };
}

/**
 *
 * @param windowId
 * @param payload
 * @returns {{payload: *, type: string, windowId: *}}
 */
export function updateViewport(windowId, payload) {
  return {
    payload: payload,
    type: ActionTypes.UPDATE_VIEWPORT,
    windowId: windowId
  };
}