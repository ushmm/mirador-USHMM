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
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import WorkspaceAddButton from '../containers/WorkspaceAddButton';
import WorkspaceControlPanelButtons from '../containers/WorkspaceControlPanelButtons';
import Branding from '../containers/Branding';
import ns from '../config/css-ns';

/**
 * Provides the panel responsible for controlling the entire workspace
 */
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export var WorkspaceControlPanel = /*#__PURE__*/function (_Component) {
  _inherits(WorkspaceControlPanel, _Component);
  var _super = _createSuper(WorkspaceControlPanel);
  function WorkspaceControlPanel() {
    _classCallCheck(this, WorkspaceControlPanel);
    return _super.apply(this, arguments);
  }
  _createClass(WorkspaceControlPanel, [{
    key: "render",
    value:
    /**
     * render
     * @return {String} - HTML markup for the component
     */
    function render() {
      var _this$props = this.props,
        classes = _this$props.classes,
        t = _this$props.t,
        variant = _this$props.variant;
      return /*#__PURE__*/_jsxs(AppBar, {
        className: classNames(classes.root, ns('workspace-control-panel'), variant === 'wide' ? classes.wide : null),
        color: "default",
        position: "absolute",
        component: "nav",
        "aria-label": t('workspaceNavigation'),
        children: [/*#__PURE__*/_jsxs(Toolbar, {
          disableGutters: true,
          className: classes.toolbar,
          children: [/*#__PURE__*/_jsx(WorkspaceAddButton, {}), /*#__PURE__*/_jsx("div", {
            className: classes.workspaceButtons,
            children: /*#__PURE__*/_jsx(WorkspaceControlPanelButtons, {})
          })]
        }), /*#__PURE__*/_jsx(Branding, {
          className: classes.branding,
          t: t,
          variant: variant
        })]
      });
    }
  }]);
  return WorkspaceControlPanel;
}(Component);
WorkspaceControlPanel.defaultProps = {
  classes: {},
  variant: 'default'
};