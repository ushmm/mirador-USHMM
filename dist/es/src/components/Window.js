function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
import cn from 'classnames';
import Paper from '@material-ui/core/Paper';
import { MosaicWindowContext } from 'react-mosaic-component/lib/contextTypes';
import ns from '../config/css-ns';
import WindowTopBar from '../containers/WindowTopBar';
import PrimaryWindow from '../containers/PrimaryWindow';
import CompanionArea from '../containers/CompanionArea';
import MinimalWindow from '../containers/MinimalWindow';
import ErrorContent from '../containers/ErrorContent';
import IIIFAuthentication from '../containers/IIIFAuthentication';
import { PluginHook } from './PluginHook';

/**
 * Represents a Window in the mirador workspace
 * @param {object} window
 */
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export var Window = /*#__PURE__*/function (_Component) {
  _inherits(Window, _Component);
  var _super = _createSuper(Window);
  /** */
  function Window(props) {
    var _this;
    _classCallCheck(this, Window);
    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  /** */
  _createClass(Window, [{
    key: "wrappedTopBar",
    value:
    /**
     * wrappedTopBar - will conditionally wrap a WindowTopBar for needed
     * additional functionality based on workspace type
     */
    function wrappedTopBar() {
      var _this$props = this.props,
        windowId = _this$props.windowId,
        workspaceType = _this$props.workspaceType,
        windowDraggable = _this$props.windowDraggable;
      var topBar = /*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx(WindowTopBar, {
          windowId: windowId,
          windowDraggable: windowDraggable
        }), /*#__PURE__*/_jsx(IIIFAuthentication, {
          windowId: windowId
        })]
      });
      if (workspaceType === 'mosaic' && windowDraggable) {
        var mosaicWindowActions = this.context.mosaicWindowActions;
        return mosaicWindowActions.connectDragSource(topBar);
      }
      return topBar;
    }

    /**
     * Renders things
     */
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        focusWindow = _this$props2.focusWindow,
        label = _this$props2.label,
        isFetching = _this$props2.isFetching,
        maximized = _this$props2.maximized,
        sideBarOpen = _this$props2.sideBarOpen,
        view = _this$props2.view,
        windowId = _this$props2.windowId,
        classes = _this$props2.classes,
        t = _this$props2.t,
        manifestError = _this$props2.manifestError;
      var _this$state = this.state,
        error = _this$state.error,
        hasError = _this$state.hasError;
      if (hasError) {
        return /*#__PURE__*/_jsx(MinimalWindow, {
          windowId: windowId,
          children: /*#__PURE__*/_jsx(ErrorContent, {
            error: error,
            windowId: windowId
          })
        });
      }
      return /*#__PURE__*/_jsxs(Paper, {
        onFocus: focusWindow,
        component: "section",
        elevation: 1,
        id: windowId,
        className: cn(classes.window, ns('window'), maximized ? classes.maximized : null),
        "aria-label": t('window', {
          label: label
        }),
        children: [this.wrappedTopBar(), manifestError && /*#__PURE__*/_jsx(ErrorContent, {
          error: {
            stack: manifestError
          },
          windowId: windowId
        }), /*#__PURE__*/_jsxs("div", {
          className: classes.middle,
          children: [/*#__PURE__*/_jsxs("div", {
            className: classes.middleLeft,
            children: [/*#__PURE__*/_jsx("div", {
              className: classes.primaryWindow,
              children: /*#__PURE__*/_jsx(PrimaryWindow, {
                view: view,
                windowId: windowId,
                isFetching: isFetching,
                sideBarOpen: sideBarOpen
              })
            }), /*#__PURE__*/_jsx("div", {
              className: classes.companionAreaBottom,
              children: /*#__PURE__*/_jsx(CompanionArea, {
                windowId: windowId,
                position: "bottom"
              })
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: classes.companionAreaRight,
            children: [/*#__PURE__*/_jsx(CompanionArea, {
              windowId: windowId,
              position: "right"
            }), /*#__PURE__*/_jsx(CompanionArea, {
              windowId: windowId,
              position: "far-right"
            })]
          })]
        }), /*#__PURE__*/_jsx(CompanionArea, {
          windowId: windowId,
          position: "far-bottom"
        }), /*#__PURE__*/_jsx(PluginHook, _objectSpread({}, this.props))]
      });
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return {
        error: error,
        hasError: true
      };
    }
  }]);
  return Window;
}(Component);
Window.contextType = MosaicWindowContext;
Window.defaultProps = {
  classes: {},
  focusWindow: function focusWindow() {},
  isFetching: false,
  label: null,
  manifestError: null,
  maximized: false,
  sideBarOpen: false,
  view: undefined,
  windowDraggable: null,
  workspaceType: null
};