function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
import { Component } from 'react';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import BackIcon from '@material-ui/icons/ArrowBackSharp';
import { announce } from '@react-aria/live-announcer';
import SearchHit from '../containers/SearchHit';
import { ScrollTo } from './ScrollTo';

/** */
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
export var SearchResults = /*#__PURE__*/function (_Component) {
  _inherits(SearchResults, _Component);
  var _super = _createSuper(SearchResults);
  /** */
  function SearchResults(props) {
    var _this;
    _classCallCheck(this, SearchResults);
    _this = _super.call(this, props);
    _this.state = {
      focused: false
    };
    _this.toggleFocus = _this.toggleFocus.bind(_assertThisInitialized(_this));
    return _this;
  }

  /** */
  _createClass(SearchResults, [{
    key: "toggleFocus",
    value: function toggleFocus() {
      var focused = this.state.focused;
      this.setState({
        focused: !focused
      });
    }

    /**
     * Return SearchHits for every hit in the response
     * Return SearchHits for every annotation in the response if there are no hits
     */
  }, {
    key: "renderSearchHitsAndAnnotations",
    value: function renderSearchHitsAndAnnotations() {
      var _this2 = this;
      var _this$props = this.props,
        companionWindowId = _this$props.companionWindowId,
        containerRef = _this$props.containerRef,
        searchAnnotations = _this$props.searchAnnotations,
        searchHits = _this$props.searchHits,
        windowId = _this$props.windowId;
      var focused = this.state.focused;
      if (searchHits.length === 0 && searchAnnotations.length > 0) {
        return searchAnnotations.map(function (anno, index) {
          return /*#__PURE__*/_jsx(SearchHit, {
            announcer: announce,
            annotationId: anno.id,
            companionWindowId: companionWindowId,
            containerRef: containerRef,
            focused: focused,
            index: index,
            total: searchAnnotations.length,
            windowId: windowId,
            showDetails: _this2.toggleFocus
          }, anno.id);
        });
      }
      return searchHits.map(function (hit, index) {
        return /*#__PURE__*/_jsx(SearchHit, {
          announcer: announce,
          containerRef: containerRef,
          companionWindowId: companionWindowId,
          focused: focused,
          hit: hit,
          index: index,
          total: searchHits.length,
          windowId: windowId,
          showDetails: _this2.toggleFocus
        }, hit.annotations[0]);
      });
    }

    /** */
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        classes = _this$props2.classes,
        companionWindowId = _this$props2.companionWindowId,
        containerRef = _this$props2.containerRef,
        isFetching = _this$props2.isFetching,
        fetchSearch = _this$props2.fetchSearch,
        nextSearch = _this$props2.nextSearch,
        query = _this$props2.query,
        searchAnnotations = _this$props2.searchAnnotations,
        searchHits = _this$props2.searchHits,
        searchNumTotal = _this$props2.searchNumTotal,
        t = _this$props2.t,
        windowId = _this$props2.windowId;
      var focused = this.state.focused;
      var noResultsState = query && !isFetching && searchHits.length === 0 && searchAnnotations.length === 0;
      return /*#__PURE__*/_jsxs(_Fragment, {
        children: [focused && /*#__PURE__*/_jsx(ScrollTo, {
          containerRef: containerRef,
          offsetTop: 96,
          scrollTo: true,
          children: /*#__PURE__*/_jsxs(Button, {
            onClick: this.toggleFocus,
            className: classes.navigation,
            size: "small",
            children: [/*#__PURE__*/_jsx(BackIcon, {
              fontSize: "large"
            }), t('backToResults')]
          })
        }), noResultsState && /*#__PURE__*/_jsx(Typography, {
          className: classes.noResults,
          children: t('searchNoResults')
        }), /*#__PURE__*/_jsx(List, {
          disablePadding: true,
          children: this.renderSearchHitsAndAnnotations()
        }), nextSearch && /*#__PURE__*/_jsxs(Button, {
          className: classes.moreButton,
          color: "secondary",
          onClick: function onClick() {
            return fetchSearch(windowId, companionWindowId, nextSearch, query);
          },
          children: [t('moreResults'), /*#__PURE__*/_jsx("br", {}), "(".concat(t('searchResultsRemaining', {
            numLeft: searchNumTotal - searchHits.length
          }), ")")]
        })]
      });
    }
  }]);
  return SearchResults;
}(Component);
SearchResults.defaultProps = {
  classes: {},
  containerRef: undefined,
  isFetching: false,
  nextSearch: undefined,
  query: undefined,
  searchAnnotations: [],
  searchHits: [],
  searchNumTotal: undefined,
  t: function t(k) {
    return k;
  }
};