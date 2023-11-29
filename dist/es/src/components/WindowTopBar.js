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
import MenuIcon from '@material-ui/icons/MenuSharp';
import CloseIcon from '@material-ui/icons/CloseSharp';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import classNames from 'classnames';
import WindowTopMenuButton from '../containers/WindowTopMenuButton';
import WindowTopBarPluginArea from '../containers/WindowTopBarPluginArea';
import WindowTopBarPluginMenu from '../containers/WindowTopBarPluginMenu';
import WindowTopBarTitle from '../containers/WindowTopBarTitle';
import MiradorMenuButton from '../containers/MiradorMenuButton';
import FullScreenButton from '../containers/FullScreenButton';
import WindowMaxIcon from './icons/WindowMaxIcon';
import WindowMinIcon from './icons/WindowMinIcon';
import WindowDownloadIcon from './icons/WindowDownloadIcon';
import ns from '../config/css-ns';

/**
 * WindowTopBar
 */
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export var WindowTopBar = /*#__PURE__*/function (_Component) {
  _inherits(WindowTopBar, _Component);
  var _super = _createSuper(WindowTopBar);
  function WindowTopBar() {
    _classCallCheck(this, WindowTopBar);
    return _super.apply(this, arguments);
  }
  _createClass(WindowTopBar, [{
    key: "render",
    value:
    /**
     * render
     * @return
     */
    function render() {
      var _this$props = this.props,
        removeWindow = _this$props.removeWindow,
        windowId = _this$props.windowId,
        classes = _this$props.classes,
        toggleWindowSideBar = _this$props.toggleWindowSideBar,
        t = _this$props.t,
        windowDraggable = _this$props.windowDraggable,
        maximizeWindow = _this$props.maximizeWindow,
        maximized = _this$props.maximized,
        minimizeWindow = _this$props.minimizeWindow,
        focused = _this$props.focused,
        allowClose = _this$props.allowClose,
        allowMaximize = _this$props.allowMaximize,
        focusWindow = _this$props.focusWindow,
        allowFullscreen = _this$props.allowFullscreen,
        allowTopMenuButton = _this$props.allowTopMenuButton,
        allowWindowSideBar = _this$props.allowWindowSideBar;
      return /*#__PURE__*/_jsx(AppBar, {
        position: "relative",
        color: "default",
        children: /*#__PURE__*/_jsx("nav", {
          "aria-label": t('windowNavigation'),
          children: /*#__PURE__*/_jsxs(Toolbar, {
            disableGutters: true,
            onMouseDown: focusWindow,
            className: classNames(classes.windowTopBarStyle, windowDraggable ? classes.windowTopBarStyleDraggable : null, focused ? classes.focused : null, ns('window-top-bar')),
            variant: "dense",
            children: [allowWindowSideBar && /*#__PURE__*/_jsx(MiradorMenuButton, {
              "aria-label": t('toggleWindowSideBar'),
              onClick: toggleWindowSideBar,
              className: ns('window-menu-btn'),
              children: /*#__PURE__*/_jsx(MenuIcon, {
                fontSize: "large"
              })
            }), /*#__PURE__*/_jsx(WindowTopBarTitle, {
              windowId: windowId
            }), allowTopMenuButton && /*#__PURE__*/_jsx(WindowTopMenuButton, {
              windowId: windowId,
              className: ns('window-menu-btn')
            }), /*#__PURE__*/_jsx(WindowTopBarPluginArea, {
              windowId: windowId
            }), /*#__PURE__*/_jsx(WindowTopBarPluginMenu, {
              windowId: windowId
            }), allowMaximize && /*#__PURE__*/_jsx(MiradorMenuButton, {
              "aria-label": maximized ? t('minimizeWindow') : t('maximizeWindow'),
              className: classNames(ns('window-maximize'), ns('window-menu-btn')),
              onClick: maximized ? minimizeWindow : maximizeWindow,
              children: maximized ? /*#__PURE__*/_jsx(WindowMinIcon, {
                fontSize: "large"
              }) : /*#__PURE__*/_jsx(WindowMaxIcon, {
                fontSize: "large"
              })
            }), /*#__PURE__*/_jsx(MiradorMenuButton, {
              "aria-label": "Download image",
              className: classNames(ns('window-download'), ns('window-menu-btn')),
              onClick: function onClick() {
                if (window.PubSub) {
                  window.PubSub.publish('MiradorDownload', windowId);
                }
              },
              children: /*#__PURE__*/_jsx(WindowDownloadIcon, {
                fontSize: "large"
              })
            }), allowFullscreen && /*#__PURE__*/_jsx(FullScreenButton, {
              className: ns('window-menu-btn')
            }), allowClose && /*#__PURE__*/_jsx(MiradorMenuButton, {
              "aria-label": t('closeWindow'),
              className: classNames(ns('window-close'), ns('window-menu-btn')),
              onClick: removeWindow,
              children: /*#__PURE__*/_jsx(CloseIcon, {
                fontSize: "large"
              })
            })]
          })
        })
      });
    }
  }]);
  return WindowTopBar;
}(Component);
WindowTopBar.defaultProps = {
  allowClose: true,
  allowFullscreen: false,
  allowMaximize: true,
  allowTopMenuButton: true,
  allowWindowSideBar: true,
  focused: false,
  focusWindow: function focusWindow() {},
  maximized: false,
  maximizeWindow: function maximizeWindow() {},
  minimizeWindow: function minimizeWindow() {},
  t: function t(key) {
    return key;
  },
  windowDraggable: true
};