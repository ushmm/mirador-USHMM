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
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import LockIcon from '@material-ui/icons/LockSharp';
import SanitizedHtml from '../containers/SanitizedHtml';
import { PluginHook } from './PluginHook';

/** */
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export var WindowAuthenticationBar = /*#__PURE__*/function (_Component) {
  _inherits(WindowAuthenticationBar, _Component);
  var _super = _createSuper(WindowAuthenticationBar);
  /** */
  function WindowAuthenticationBar(props) {
    var _this;
    _classCallCheck(this, WindowAuthenticationBar);
    _this = _super.call(this, props);
    _this.state = {
      open: false
    };
    _this.setOpen = _this.setOpen.bind(_assertThisInitialized(_this));
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  /** */
  _createClass(WindowAuthenticationBar, [{
    key: "onSubmit",
    value: function onSubmit() {
      var onConfirm = this.props.onConfirm;
      this.setOpen(false);
      onConfirm();
    }

    /** Toggle the full description */
  }, {
    key: "setOpen",
    value: function setOpen(open) {
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          open: open
        });
      });
    }

    /** */
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        classes = _this$props.classes,
        confirmButton = _this$props.confirmButton,
        continueLabel = _this$props.continueLabel,
        header = _this$props.header,
        description = _this$props.description,
        icon = _this$props.icon,
        label = _this$props.label,
        t = _this$props.t,
        ruleSet = _this$props.ruleSet,
        hasLogoutService = _this$props.hasLogoutService,
        status = _this$props.status,
        ConfirmProps = _this$props.ConfirmProps;
      if (status === 'ok' && !hasLogoutService) return null;
      var open = this.state.open;
      var button = /*#__PURE__*/_jsx(Button, _objectSpread(_objectSpread({
        onClick: this.onSubmit,
        className: classes.buttonInvert,
        color: "secondary"
      }, ConfirmProps), {}, {
        children: confirmButton || t('login')
      }));
      if (!description && !header) {
        return /*#__PURE__*/_jsx(Paper, {
          square: true,
          elevation: 4,
          color: "secondary",
          classes: {
            root: classes.paper
          },
          children: /*#__PURE__*/_jsxs("div", {
            className: classes.topBar,
            children: [icon || /*#__PURE__*/_jsx(LockIcon, {
              className: classes.icon,
              fontSize: "large"
            }), /*#__PURE__*/_jsx(Typography, {
              className: classes.label,
              component: "h3",
              variant: "body1",
              color: "inherit",
              children: ruleSet ? /*#__PURE__*/_jsx(SanitizedHtml, {
                htmlString: label,
                ruleSet: ruleSet
              }) : label
            }), /*#__PURE__*/_jsx(PluginHook, _objectSpread({}, this.props)), button]
          })
        });
      }
      return /*#__PURE__*/_jsxs(Paper, {
        square: true,
        elevation: 4,
        color: "secondary",
        classes: {
          root: classes.paper
        },
        children: [/*#__PURE__*/_jsxs(Button, {
          fullWidth: true,
          className: classes.topBar,
          onClick: function onClick() {
            return _this2.setOpen(true);
          },
          component: "div",
          color: "inherit",
          children: [icon || /*#__PURE__*/_jsx(LockIcon, {
            className: classes.icon,
            fontSize: "large"
          }), /*#__PURE__*/_jsx(Typography, {
            className: classes.label,
            component: "h3",
            variant: "body1",
            color: "inherit",
            children: ruleSet ? /*#__PURE__*/_jsx(SanitizedHtml, {
              htmlString: label,
              ruleSet: ruleSet
            }) : label
          }), /*#__PURE__*/_jsx(PluginHook, _objectSpread({}, this.props)), /*#__PURE__*/_jsx("span", {
            className: classes.fauxButton,
            children: !open && /*#__PURE__*/_jsx(Typography, {
              variant: "button",
              color: "inherit",
              children: continueLabel || t('continue')
            })
          })]
        }), /*#__PURE__*/_jsxs(Collapse, {
          "in": open,
          onClose: function onClose() {
            return _this2.setOpen(false);
          },
          children: [/*#__PURE__*/_jsxs(Typography, {
            variant: "body1",
            color: "inherit",
            className: classes.expanded,
            children: [ruleSet ? /*#__PURE__*/_jsx(SanitizedHtml, {
              htmlString: header,
              ruleSet: ruleSet
            }) : header, header && description ? ': ' : '', ruleSet ? /*#__PURE__*/_jsx(SanitizedHtml, {
              htmlString: description,
              ruleSet: ruleSet
            }) : description]
          }), /*#__PURE__*/_jsxs(DialogActions, {
            children: [/*#__PURE__*/_jsx(Button, {
              onClick: function onClick() {
                return _this2.setOpen(false);
              },
              color: "inherit",
              children: t('cancel')
            }), button]
          })]
        })]
      });
    }
  }]);
  return WindowAuthenticationBar;
}(Component);
WindowAuthenticationBar.defaultProps = {
  confirmButton: undefined,
  ConfirmProps: {},
  continueLabel: undefined,
  description: undefined,
  hasLogoutService: true,
  header: undefined,
  icon: undefined,
  ruleSet: 'iiif',
  status: undefined,
  t: function t(k) {
    return k;
  }
};