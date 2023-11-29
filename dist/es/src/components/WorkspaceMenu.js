var _excluded = ["container", "handleClose", "showThemePicker", "isWorkspaceAddVisible", "t", "showZoomControls", "toggleZoomControls"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import LanguageSettings from '../containers/LanguageSettings';
import { NestedMenu } from './NestedMenu';
import WorkspaceSelectionDialog from '../containers/WorkspaceSelectionDialog';
import ChangeThemeDialog from '../containers/ChangeThemeDialog';
import { PluginHook } from './PluginHook';

/**
 */
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
export var WorkspaceMenu = /*#__PURE__*/function (_Component) {
  _inherits(WorkspaceMenu, _Component);
  var _super = _createSuper(WorkspaceMenu);
  /**
   * constructor -
   */
  function WorkspaceMenu(props) {
    var _this;
    _classCallCheck(this, WorkspaceMenu);
    _this = _super.call(this, props);
    _this.state = {
      changeTheme: {},
      toggleZoom: {},
      workspaceSelection: {}
    };
    _this.handleMenuItemClick = _this.handleMenuItemClick.bind(_assertThisInitialized(_this));
    _this.handleMenuItemClose = _this.handleMenuItemClose.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * @private
   */
  _createClass(WorkspaceMenu, [{
    key: "handleMenuItemClick",
    value: function handleMenuItemClick(item, event) {
      var obj = {};
      obj[item] = {};
      obj[item].open = true;
      obj[item].anchorEl = event.currentTarget;
      this.setState(obj);
    }

    /**
     * @private
     */
  }, {
    key: "handleMenuItemClose",
    value: function handleMenuItemClose(item) {
      var _this2 = this;
      return function (event) {
        var obj = {};
        obj[item] = {};
        obj[item].open = false;
        obj[item].anchorEl = null;
        _this2.setState(obj);
      };
    }

    /**
     * @private
     */
  }, {
    key: "handleZoomToggleClick",
    value: function handleZoomToggleClick() {
      var _this$props = this.props,
        toggleZoomControls = _this$props.toggleZoomControls,
        showZoomControls = _this$props.showZoomControls;
      toggleZoomControls(!showZoomControls);
    }

    /**
     * render
     * @return
     */
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$props2 = this.props,
        container = _this$props2.container,
        handleClose = _this$props2.handleClose,
        showThemePicker = _this$props2.showThemePicker,
        isWorkspaceAddVisible = _this$props2.isWorkspaceAddVisible,
        t = _this$props2.t,
        showZoomControls = _this$props2.showZoomControls,
        toggleZoomControls = _this$props2.toggleZoomControls,
        menuProps = _objectWithoutProperties(_this$props2, _excluded);
      var _this$state = this.state,
        changeTheme = _this$state.changeTheme,
        toggleZoom = _this$state.toggleZoom,
        workspaceSelection = _this$state.workspaceSelection;
      return /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsxs(Menu, _objectSpread(_objectSpread({
          container: container === null || container === void 0 ? void 0 : container.current,
          anchorOrigin: {
            horizontal: 'right',
            vertical: 'top'
          },
          transformOrigin: {
            horizontal: 'left',
            vertical: 'top'
          },
          onClose: handleClose
        }, menuProps), {}, {
          children: [/*#__PURE__*/_jsx(MenuItem, {
            "aria-haspopup": "true",
            disabled: isWorkspaceAddVisible,
            onClick: function onClick(e) {
              _this3.handleZoomToggleClick(e);
              handleClose(e);
            },
            "aria-owns": toggleZoom.anchorEl ? 'toggle-zoom-menu' : undefined,
            children: /*#__PURE__*/_jsx(Typography, {
              variant: "body1",
              children: showZoomControls ? t('hideZoomControls') : t('showZoomControls')
            })
          }), /*#__PURE__*/_jsx(MenuItem, {
            "aria-haspopup": "true",
            onClick: function onClick(e) {
              _this3.handleMenuItemClick('workspaceSelection', e);
              handleClose(e);
            },
            "aria-owns": workspaceSelection.anchorEl ? 'workspace-selection' : undefined,
            children: /*#__PURE__*/_jsx(Typography, {
              variant: "body1",
              children: t('selectWorkspaceMenu')
            })
          }), /*#__PURE__*/_jsx(NestedMenu, {
            label: t('language'),
            children: /*#__PURE__*/_jsx(LanguageSettings, {
              afterSelect: handleClose
            })
          }), showThemePicker && /*#__PURE__*/_jsx(MenuItem, {
            "aria-haspopup": "true",
            onClick: function onClick(e) {
              _this3.handleMenuItemClick('changeTheme', e);
              handleClose(e);
            },
            "aria-owns": changeTheme.anchorEl ? 'change-theme' : undefined,
            children: /*#__PURE__*/_jsx(Typography, {
              variant: "body1",
              children: t('changeTheme')
            })
          }), /*#__PURE__*/_jsx(PluginHook, _objectSpread({}, this.props))]
        })), Boolean(changeTheme.open) && /*#__PURE__*/_jsx(ChangeThemeDialog, {
          container: container === null || container === void 0 ? void 0 : container.current,
          handleClose: this.handleMenuItemClose('changeTheme'),
          open: Boolean(changeTheme.open)
        }), Boolean(workspaceSelection.open) && /*#__PURE__*/_jsx(WorkspaceSelectionDialog, {
          open: Boolean(workspaceSelection.open),
          container: container === null || container === void 0 ? void 0 : container.current,
          handleClose: this.handleMenuItemClose('workspaceSelection')
        })]
      });
    }
  }]);
  return WorkspaceMenu;
}(Component);
WorkspaceMenu.defaultProps = {
  container: null,
  isWorkspaceAddVisible: false,
  showThemePicker: false,
  showZoomControls: false,
  t: function t(key) {
    return key;
  },
  toggleZoomControls: function toggleZoomControls() {}
};