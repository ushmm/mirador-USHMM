function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import omit from 'lodash/omit';
import ActionTypes from '../actions/action-types';

/**
 * manifestsReducer
 */
export var manifestsReducer = function manifestsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case ActionTypes.REQUEST_MANIFEST:
      return _objectSpread(_defineProperty({}, action.manifestId, _objectSpread(_objectSpread(_objectSpread({}, state[action.manifestId]), action.properties), {}, {
        id: action.manifestId
      })), omit(state, action.manifestId));
    case ActionTypes.RECEIVE_MANIFEST:
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, action.manifestId, _objectSpread(_objectSpread({}, state[action.manifestId]), {}, {
        error: null,
        // Explicitly set the error to null in case this is a re-fetch
        id: action.manifestId,
        isFetching: false,
        json: action.manifestJson
      })));
    case ActionTypes.RECEIVE_MANIFEST_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, action.manifestId, _objectSpread(_objectSpread({}, state[action.manifestId]), {}, {
        error: action.error,
        id: action.manifestId,
        isFetching: false
      })));
    case ActionTypes.REMOVE_MANIFEST:
      return Object.keys(state).reduce(function (object, key) {
        if (key !== action.manifestId) {
          object[key] = state[key]; // eslint-disable-line no-param-reassign
        }

        return object;
      }, {});
    case ActionTypes.IMPORT_MIRADOR_STATE:
      return action.state.manifests || {};
    default:
      return state;
  }
};