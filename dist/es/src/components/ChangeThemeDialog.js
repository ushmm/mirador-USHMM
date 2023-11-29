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
import { Dialog, DialogTitle, ListItemIcon, ListItemText, MenuList, MenuItem, Typography, DialogContent } from '@material-ui/core';
import PaletteIcon from '@material-ui/icons/PaletteSharp';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
/**
 * a simple dialog providing the possibility to switch the theme
 */
export var ChangeThemeDialog = /*#__PURE__*/function (_Component) {
  _inherits(ChangeThemeDialog, _Component);
  var _super = _createSuper(ChangeThemeDialog);
  /**
  */
  function ChangeThemeDialog(props) {
    var _this;
    _classCallCheck(this, ChangeThemeDialog);
    _this = _super.call(this, props);
    _this.handleThemeChange = _this.handleThemeChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * Propagate theme palette type selection into the global state
   */
  _createClass(ChangeThemeDialog, [{
    key: "handleThemeChange",
    value: function handleThemeChange(theme) {
      var _this$props = this.props,
        setSelectedTheme = _this$props.setSelectedTheme,
        handleClose = _this$props.handleClose;
      setSelectedTheme(theme);
      handleClose();
    }

    /** */
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props,
        classes = _this$props2.classes,
        handleClose = _this$props2.handleClose,
        open = _this$props2.open,
        selectedTheme = _this$props2.selectedTheme,
        t = _this$props2.t,
        themeIds = _this$props2.themeIds;
      return /*#__PURE__*/_jsxs(Dialog, {
        onClose: handleClose,
        open: open,
        children: [/*#__PURE__*/_jsx(DialogTitle, {
          disableTypography: true,
          children: /*#__PURE__*/_jsx(Typography, {
            variant: "h2",
            children: t('changeTheme')
          })
        }), /*#__PURE__*/_jsx(DialogContent, {
          className: classes.dialogContent,
          children: /*#__PURE__*/_jsx(MenuList, {
            autoFocusItem: true,
            children: themeIds.map(function (value) {
              return /*#__PURE__*/_jsxs(MenuItem, {
                className: classes.listitem,
                onClick: function onClick() {
                  _this2.handleThemeChange(value);
                },
                selected: value === selectedTheme,
                value: value,
                children: [/*#__PURE__*/_jsx(ListItemIcon, {
                  children: /*#__PURE__*/_jsx(PaletteIcon, {
                    className: classes[value],
                    fontSize: "large"
                  })
                }), /*#__PURE__*/_jsx(ListItemText, {
                  children: t(value)
                })]
              }, value);
            })
          })
        })]
      });
    }
  }]);
  return ChangeThemeDialog;
}(Component);
ChangeThemeDialog.defaultProps = {
  open: false,
  themeIds: []
};