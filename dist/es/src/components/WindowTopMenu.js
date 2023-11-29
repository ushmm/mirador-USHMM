function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { Component } from 'react';
import Menu from '@material-ui/core//Menu';
import ListSubheader from '@material-ui/core/ListSubheader';
import WindowThumbnailSettings from '../containers/WindowThumbnailSettings';
import WindowViewSettings from '../containers/WindowViewSettings';
import { PluginHook } from './PluginHook';

/** Renders plugins */
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
function PluginHookWithHeader(props) {
  var PluginComponents = props.PluginComponents,
    t = props.t; // eslint-disable-line react/prop-types
  return PluginComponents ? /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(ListSubheader, {
      role: "presentation",
      disableSticky: true,
      tabIndex: "-1",
      children: t('windowPluginButtons')
    }), /*#__PURE__*/_jsx(PluginHook, _objectSpread({}, props))]
  }) : null;
}

/**
 */
export var WindowTopMenu = /*#__PURE__*/function (_Component) {
  _inherits(WindowTopMenu, _Component);
  var _super = _createSuper(WindowTopMenu);
  function WindowTopMenu() {
    _classCallCheck(this, WindowTopMenu);
    return _super.apply(this, arguments);
  }
  _createClass(WindowTopMenu, [{
    key: "render",
    value:
    /**
     * render
     * @return
     */
    function render() {
      var _this$props = this.props,
        container = _this$props.container,
        handleClose = _this$props.handleClose,
        showThumbnailNavigationSettings = _this$props.showThumbnailNavigationSettings,
        toggleDraggingEnabled = _this$props.toggleDraggingEnabled,
        windowId = _this$props.windowId,
        anchorEl = _this$props.anchorEl,
        open = _this$props.open;
      return /*#__PURE__*/_jsxs(Menu, {
        container: container === null || container === void 0 ? void 0 : container.current,
        anchorOrigin: {
          horizontal: 'right',
          vertical: 'bottom'
        },
        transformOrigin: {
          horizontal: 'right',
          vertical: 'top'
        },
        onClose: handleClose,
        TransitionProps: {
          onEntering: toggleDraggingEnabled,
          onExit: toggleDraggingEnabled
        },
        orientation: "horizontal",
        getContentAnchorEl: null,
        anchorEl: anchorEl,
        open: open,
        children: [/*#__PURE__*/_jsx(WindowViewSettings, {
          windowId: windowId,
          handleClose: handleClose
        }), showThumbnailNavigationSettings && /*#__PURE__*/_jsx(WindowThumbnailSettings, {
          windowId: windowId,
          handleClose: handleClose
        }), /*#__PURE__*/_jsx(PluginHookWithHeader, _objectSpread({}, this.props))]
      });
    }
  }]);
  return WindowTopMenu;
}(Component);
WindowTopMenu.defaultProps = {
  anchorEl: null,
  container: null,
  open: false,
  showThumbnailNavigationSettings: true
};