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
import NavigationIcon from '@material-ui/icons/PlayCircleOutlineSharp';
import classNames from 'classnames';
import MiradorMenuButton from '../containers/MiradorMenuButton';
import ns from '../config/css-ns';

/**
 */
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export var ViewerNavigation = /*#__PURE__*/function (_Component) {
  _inherits(ViewerNavigation, _Component);
  var _super = _createSuper(ViewerNavigation);
  function ViewerNavigation() {
    _classCallCheck(this, ViewerNavigation);
    return _super.apply(this, arguments);
  }
  _createClass(ViewerNavigation, [{
    key: "render",
    value:
    /**
     * Renders things
     */
    function render() {
      var _this$props = this.props,
        hasNextCanvas = _this$props.hasNextCanvas,
        hasPreviousCanvas = _this$props.hasPreviousCanvas,
        setNextCanvas = _this$props.setNextCanvas,
        setPreviousCanvas = _this$props.setPreviousCanvas,
        t = _this$props.t,
        classes = _this$props.classes,
        viewingDirection = _this$props.viewingDirection;
      var htmlDir = 'ltr';
      var previousIconStyle = {};
      var nextIconStyle = {};
      switch (viewingDirection) {
        case 'top-to-bottom':
          previousIconStyle = {
            transform: 'rotate(270deg)'
          };
          nextIconStyle = {
            transform: 'rotate(90deg)'
          };
          break;
        case 'bottom-to-top':
          previousIconStyle = {
            transform: 'rotate(90deg)'
          };
          nextIconStyle = {
            transform: 'rotate(270deg)'
          };
          break;
        case 'right-to-left':
          htmlDir = 'rtl';
          previousIconStyle = {};
          nextIconStyle = {
            transform: 'rotate(180deg)'
          };
          break;
        default:
          previousIconStyle = {
            transform: 'rotate(180deg)'
          };
          nextIconStyle = {};
      }
      return /*#__PURE__*/_jsxs("div", {
        className: classNames(ns('osd-navigation'), classes.osdNavigation),
        dir: htmlDir,
        children: [/*#__PURE__*/_jsx(MiradorMenuButton, {
          "aria-label": t('previousCanvas'),
          className: ns('previous-canvas-button'),
          disabled: !hasPreviousCanvas,
          onClick: function onClick() {
            hasPreviousCanvas && setPreviousCanvas();
          },
          children: /*#__PURE__*/_jsx(NavigationIcon, {
            style: previousIconStyle,
            fontSize: "large"
          })
        }), /*#__PURE__*/_jsx(MiradorMenuButton, {
          "aria-label": t('nextCanvas'),
          className: ns('next-canvas-button'),
          disabled: !hasNextCanvas,
          onClick: function onClick() {
            hasNextCanvas && setNextCanvas();
          },
          children: /*#__PURE__*/_jsx(NavigationIcon, {
            style: nextIconStyle,
            fontSize: "large"
          })
        })]
      });
    }
  }]);
  return ViewerNavigation;
}(Component);
ViewerNavigation.defaultProps = {
  hasNextCanvas: false,
  hasPreviousCanvas: false,
  setNextCanvas: function setNextCanvas() {},
  setPreviousCanvas: function setPreviousCanvas() {},
  viewingDirection: ''
};