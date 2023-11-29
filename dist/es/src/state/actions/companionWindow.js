function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { v4 as uuid } from 'uuid';
import ActionTypes from './action-types';
import { getCompanionWindowIdsForPosition, getManuallyExpandedNodeIds, getVisibleNodeIds } from '../selectors';
var defaultProps = {
  content: null,
  position: null
};

/** */
export function addCompanionWindow(windowId, payload) {
  var defaults = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps;
  var id = "cw-".concat(uuid());
  return {
    id: id,
    payload: _objectSpread(_objectSpread(_objectSpread({}, defaults), payload), {}, {
      id: id,
      windowId: windowId
    }),
    type: ActionTypes.ADD_COMPANION_WINDOW,
    windowId: windowId
  };
}

/** */
export function addOrUpdateCompanionWindow(windowId, payload) {
  var defaults = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps;
  return function (dispatch, getState) {
    var state = getState();
    var position = payload.position;
    var updatableWindowId = position === 'left' && getCompanionWindowIdsForPosition(state, {
      position: position,
      windowId: windowId
    })[0];
    if (updatableWindowId) {
      dispatch(updateCompanionWindow(windowId, updatableWindowId, payload));
    } else {
      dispatch(addCompanionWindow(windowId, payload, defaults));
    }
  };
}

/** */
export function updateCompanionWindow(windowId, id, payload) {
  return {
    id: id,
    payload: payload,
    type: ActionTypes.UPDATE_COMPANION_WINDOW,
    windowId: windowId
  };
}

/** */
export function removeCompanionWindow(windowId, id) {
  return {
    id: id,
    type: ActionTypes.REMOVE_COMPANION_WINDOW,
    windowId: windowId
  };
}

/** */
export function toggleNode(windowId, id, nodeId) {
  return function (dispatch, getState) {
    var state = getState();
    var collapsedNodeIds = getManuallyExpandedNodeIds(state, {
      companionWindowId: id
    }, false);
    var expandedNodeIds = getManuallyExpandedNodeIds(state, {
      companionWindowId: id
    }, true);
    var visibleNodeIds = getVisibleNodeIds(state, {
      id: id,
      windowId: windowId
    });
    var expand = collapsedNodeIds.indexOf(nodeId) !== -1 || expandedNodeIds.indexOf(nodeId) === -1 && visibleNodeIds.indexOf(nodeId) === -1;
    return dispatch({
      id: id,
      payload: _defineProperty({}, nodeId, {
        expanded: expand
      }),
      type: ActionTypes.TOGGLE_TOC_NODE,
      windowId: windowId
    });
  };
}

/** Update the expanded nodes state */
export function expandNodes(windowId, id, nodeIds) {
  return function (dispatch, getState) {
    var state = getState();
    var expandedNodeIds = getManuallyExpandedNodeIds(state, {
      companionWindowId: id
    }, true);
    var payload = {};
    expandedNodeIds.forEach(function (nodeId) {
      payload[nodeId] = {
        expanded: false
      };
    });
    nodeIds.forEach(function (nodeId) {
      payload[nodeId] = {
        expanded: true
      };
    });
    return dispatch({
      id: id,
      payload: payload,
      type: ActionTypes.TOGGLE_TOC_NODE,
      windowId: windowId
    });
  };
}