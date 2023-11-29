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
import ImportIcon from '@material-ui/icons/Input';
import SaveAltIcon from '@material-ui/icons/SaveAltSharp';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import WorkspaceExport from '../containers/WorkspaceExport';
import WorkspaceImport from '../containers/WorkspaceImport';
import { PluginHook } from './PluginHook';

/**
 * WorkspaceOptionsMenu ~ the menu for workspace options such as import/export
*/
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
export var WorkspaceOptionsMenu = /*#__PURE__*/function (_Component) {
  _inherits(WorkspaceOptionsMenu, _Component);
  var _super = _createSuper(WorkspaceOptionsMenu);
  /**
   * constructor -
   */
  function WorkspaceOptionsMenu(props) {
    var _this;
    _classCallCheck(this, WorkspaceOptionsMenu);
    _this = _super.call(this, props);
    _this.state = {
      exportWorkspace: {},
      importWorkspace: {}
    };
    _this.handleMenuItemClick = _this.handleMenuItemClick.bind(_assertThisInitialized(_this));
    _this.handleMenuItemClose = _this.handleMenuItemClose.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * @private
   */
  _createClass(WorkspaceOptionsMenu, [{
    key: "handleMenuItemClick",
    value: function handleMenuItemClick(item) {
      var obj = {};
      obj[item] = {};
      obj[item].open = true;
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
        _this2.setState(obj);
      };
    }

    /**
     * Returns the rendered component
    */
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$props = this.props,
        anchorEl = _this$props.anchorEl,
        container = _this$props.container,
        handleClose = _this$props.handleClose,
        t = _this$props.t,
        open = _this$props.open;
      var _this$state = this.state,
        exportWorkspace = _this$state.exportWorkspace,
        importWorkspace = _this$state.importWorkspace;
      return /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsxs(Menu, {
          id: "workspace-options-menu",
          container: container === null || container === void 0 ? void 0 : container.current,
          anchorEl: anchorEl,
          anchorOrigin: {
            horizontal: 'right',
            vertical: 'top'
          },
          transformOrigin: {
            horizontal: 'left',
            vertical: 'top'
          },
          open: open,
          onClose: handleClose,
          children: [/*#__PURE__*/_jsxs(MenuItem, {
            "aria-haspopup": "true",
            onClick: function onClick() {
              _this3.handleMenuItemClick('exportWorkspace');
              handleClose();
            },
            "aria-owns": exportWorkspace.open ? 'workspace-export' : undefined,
            children: [/*#__PURE__*/_jsx(ListItemIcon, {
              children: /*#__PURE__*/_jsx(SaveAltIcon, {
                fontSize: "large"
              })
            }), /*#__PURE__*/_jsx(Typography, {
              variant: "body1",
              children: t('downloadExportWorkspace')
            })]
          }), /*#__PURE__*/_jsxs(MenuItem, {
            "aria-haspopup": "true",
            id: "workspace-menu-import",
            onClick: function onClick() {
              _this3.handleMenuItemClick('importWorkspace');
              handleClose();
            },
            "aria-owns": exportWorkspace.open ? 'workspace-import' : undefined,
            children: [/*#__PURE__*/_jsx(ListItemIcon, {
              children: /*#__PURE__*/_jsx(ImportIcon, {
                fontSize: "large"
              })
            }), /*#__PURE__*/_jsx(Typography, {
              variant: "body1",
              children: t('importWorkspace')
            })]
          }), /*#__PURE__*/_jsx(PluginHook, _objectSpread({}, this.props))]
        }), Boolean(exportWorkspace.open) && /*#__PURE__*/_jsx(WorkspaceExport, {
          open: Boolean(exportWorkspace.open),
          container: container === null || container === void 0 ? void 0 : container.current,
          handleClose: this.handleMenuItemClose('exportWorkspace')
        }), Boolean(importWorkspace.open) && /*#__PURE__*/_jsx(WorkspaceImport, {
          open: Boolean(importWorkspace.open),
          container: container === null || container === void 0 ? void 0 : container.current,
          handleClose: this.handleMenuItemClose('importWorkspace')
        })]
      });
    }
  }]);
  return WorkspaceOptionsMenu;
}(Component);
WorkspaceOptionsMenu.defaultProps = {
  anchorEl: null,
  container: null,
  open: false
};