function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import omit from 'lodash/omit';
import flatten from 'lodash/flatten';
import ActionTypes from '../actions/action-types';

/**
 * searchReducer
 */
export var searchesReducer = function searchesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var searchStruct = (state[action.windowId] || {})[action.companionWindowId] || {};
  switch (action.type) {
    case ActionTypes.REQUEST_SEARCH:
      if (searchStruct.query !== action.query) {
        // new query
        return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, action.windowId, _objectSpread(_objectSpread({}, state[action.windowId]), {}, _defineProperty({}, action.companionWindowId, _objectSpread(_objectSpread({}, searchStruct), {}, {
          data: _defineProperty({}, action.searchId, {
            isFetching: true
          }),
          query: action.query,
          selectedContentSearchAnnotation: []
        })))));
      }

      // paginating through a query
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, action.windowId, _objectSpread(_objectSpread({}, state[action.windowId]), {}, _defineProperty({}, action.companionWindowId, _objectSpread(_objectSpread({}, searchStruct), {}, {
        data: _objectSpread(_objectSpread({}, searchStruct.data), {}, _defineProperty({}, action.searchId, {
          isFetching: true
        }))
      })))));
    case ActionTypes.RECEIVE_SEARCH:
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, action.windowId, _objectSpread(_objectSpread({}, state[action.windowId]), {}, _defineProperty({}, action.companionWindowId, _objectSpread(_objectSpread({}, searchStruct), {}, {
        data: _objectSpread(_objectSpread({}, searchStruct.data), {}, _defineProperty({}, action.searchId, {
          isFetching: false,
          json: action.searchJson
        }))
      })))));
    case ActionTypes.RECEIVE_SEARCH_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, action.windowId, _objectSpread(_objectSpread({}, state[action.windowId]), {}, _defineProperty({}, action.companionWindowId, _objectSpread(_objectSpread({}, searchStruct), {}, {
        data: _objectSpread(_objectSpread({}, searchStruct.data), {}, _defineProperty({}, action.searchId, {
          error: action.error,
          isFetching: false
        }))
      })))));
    case ActionTypes.REMOVE_SEARCH:
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, action.windowId, Object.keys(state[action.windowId]).reduce(function (object, key) {
        if (key !== action.companionWindowId) {
          object[key] = state[action.windowId][key]; // eslint-disable-line no-param-reassign
        }

        return object;
      }, {})));
    case ActionTypes.SET_CONTENT_SEARCH_CURRENT_ANNOTATIONS:
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, action.windowId, _objectSpread(_objectSpread({}, state[action.windowId]), {}, _defineProperty({}, action.companionWindowId, _objectSpread(_objectSpread({}, searchStruct), {}, {
        selectedContentSearchAnnotationIds: action.annotationIds
      })))));
    case ActionTypes.SELECT_ANNOTATION:
      if (!state[action.windowId]) return state;
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, action.windowId, Object.keys(state[action.windowId]).reduce(function (object, key) {
        var search = state[action.windowId][key];
        var searchHasAnnotation = search.data && Object.values(search.data).filter(function (resp) {
          return resp.json && resp.json.resources;
        }).some(function (resp) {
          return flatten([resp.json.resources]).some(function (r) {
            return r['@id'] === action.annotationId;
          });
        });
        if (searchHasAnnotation) {
          object[key] = _objectSpread(_objectSpread({}, search), {}, {
            selectedContentSearchAnnotationIds: [action.annotationId]
          });
        } else {
          object[key] = search; // eslint-disable-line no-param-reassign
        }

        return object;
      }, {})));
    case ActionTypes.IMPORT_MIRADOR_STATE:
      return {};
    case ActionTypes.REMOVE_WINDOW:
      return omit(state, action.windowId);
    case ActionTypes.REMOVE_COMPANION_WINDOW:
      if (!state[action.windowId]) return state;
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, action.windowId, _objectSpread({}, omit(state[action.windowId], action.id))));
    default:
      return state;
  }
};