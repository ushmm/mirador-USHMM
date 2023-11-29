function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import { withPlugins } from '../extend/withPlugins';
import { SearchResults } from '../components/SearchResults';
import * as actions from '../state/actions';
import { getNextSearchId, getSearchQuery, getSearchIsFetching, getSearchNumTotal, getSortedSearchHitsForCompanionWindow, getSortedSearchAnnotationsForCompanionWindow } from '../state/selectors';

/**
 * mapStateToProps - used to hook up connect to state
 * @memberof SearchResult
 * @private
 */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var companionWindowId = _ref.companionWindowId,
    windowId = _ref.windowId;
  return {
    isFetching: getSearchIsFetching(state, {
      companionWindowId: companionWindowId,
      windowId: windowId
    }),
    nextSearch: getNextSearchId(state, {
      companionWindowId: companionWindowId,
      windowId: windowId
    }),
    query: getSearchQuery(state, {
      companionWindowId: companionWindowId,
      windowId: windowId
    }),
    searchAnnotations: getSortedSearchAnnotationsForCompanionWindow(state, {
      companionWindowId: companionWindowId,
      windowId: windowId
    }),
    searchHits: getSortedSearchHitsForCompanionWindow(state, {
      companionWindowId: companionWindowId,
      windowId: windowId
    }),
    searchNumTotal: getSearchNumTotal(state, {
      companionWindowId: companionWindowId,
      windowId: windowId
    })
  };
};
var mapDispatchToProps = {
  fetchSearch: actions.fetchSearch
};

/** */
var styles = function styles(theme) {
  return {
    moreButton: {
      width: '100%'
    },
    navigation: {
      textTransform: 'none'
    },
    noResults: _objectSpread(_objectSpread({}, theme.typography.h6), {}, {
      padding: theme.spacing(2)
    }),
    toggleFocus: _objectSpread({}, theme.typography.subtitle1)
  };
};
var enhance = compose(connect(mapStateToProps, mapDispatchToProps), withStyles(styles), withTranslation(), withPlugins('SearchResults'));
export default enhance(SearchResults);