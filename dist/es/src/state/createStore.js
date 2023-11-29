function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// Topics for understanding
// redux modules for nested stores
// state normalisation
// (normalizer library)

import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createRootReducer from './reducers/rootReducer';
import getRootSaga from './sagas';
import settings from '../config/settings';

/**
 * Configure Store
 */
function configureStore(pluginReducers) {
  var pluginSagas = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var miradorReducer = createRootReducer(pluginReducers);
  var rootReducer = settings.state.slice ? combineReducers(_defineProperty({}, settings.state.slice, miradorReducer)) : miradorReducer;

  // create the saga middleware
  var sagaMiddleware = createSagaMiddleware();
  var store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware, sagaMiddleware)));

  // then run the saga
  sagaMiddleware.run(getRootSaga(pluginSagas));
  return store;
}
export default configureStore;