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
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Card, CardContent, MenuList, MenuItem, Typography } from '@material-ui/core';
import WorkspaceTypeElasticIcon from './icons/WorkspaceTypeElasticIcon';
import WorkspaceTypeMosaicIcon from './icons/WorkspaceTypeMosaicIcon';
import ScrollIndicatedDialogContent from '../containers/ScrollIndicatedDialogContent';

/**
 */
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export var WorkspaceSelectionDialog = /*#__PURE__*/function (_Component) {
  _inherits(WorkspaceSelectionDialog, _Component);
  var _super = _createSuper(WorkspaceSelectionDialog);
  /**
   * constructor
   */
  function WorkspaceSelectionDialog(props) {
    var _this;
    _classCallCheck(this, WorkspaceSelectionDialog);
    _this = _super.call(this, props);
    _this.handleWorkspaceTypeChange = _this.handleWorkspaceTypeChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * Propagate workspace type selection into the global state
   */
  _createClass(WorkspaceSelectionDialog, [{
    key: "handleWorkspaceTypeChange",
    value: function handleWorkspaceTypeChange(workspaceType) {
      var _this$props = this.props,
        handleClose = _this$props.handleClose,
        updateWorkspace = _this$props.updateWorkspace;
      updateWorkspace({
        type: workspaceType
      });
      handleClose();
    }

    /**
     * render
     * @return
     */
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props,
        classes = _this$props2.classes,
        container = _this$props2.container,
        handleClose = _this$props2.handleClose,
        open = _this$props2.open,
        children = _this$props2.children,
        t = _this$props2.t,
        workspaceType = _this$props2.workspaceType;
      return /*#__PURE__*/_jsxs(Dialog, {
        "aria-labelledby": "workspace-selection-dialog-title",
        container: container,
        id: "workspace-selection-dialog",
        onClose: handleClose,
        open: open,
        children: [/*#__PURE__*/_jsx(DialogTitle, {
          id: "workspace-selection-dialog-title",
          disableTypography: true,
          children: /*#__PURE__*/_jsx(Typography, {
            variant: "h2",
            children: t('workspaceSelectionTitle')
          })
        }), /*#__PURE__*/_jsxs(ScrollIndicatedDialogContent, {
          children: [children, /*#__PURE__*/_jsxs(MenuList, {
            classes: {
              root: classes.list
            },
            selected: workspaceType,
            autoFocusItem: true,
            children: [/*#__PURE__*/_jsx(MenuItem, {
              className: classes.menuItem,
              onClick: function onClick() {
                return _this2.handleWorkspaceTypeChange('elastic');
              },
              selected: workspaceType === 'elastic',
              value: "elastic",
              children: /*#__PURE__*/_jsxs(Card, {
                className: classes.card,
                children: [/*#__PURE__*/_jsx(WorkspaceTypeElasticIcon, {
                  className: classes.svgIcon,
                  viewBox: "0 0 120 90"
                }), /*#__PURE__*/_jsx("div", {
                  className: classes.details,
                  children: /*#__PURE__*/_jsxs(CardContent, {
                    classes: {
                      root: classes.root
                    },
                    className: classes.content,
                    children: [/*#__PURE__*/_jsx(Typography, {
                      className: classes.headline,
                      component: "p",
                      variant: "h3",
                      children: t('elastic')
                    }), /*#__PURE__*/_jsx(Typography, {
                      variant: "body1",
                      children: t('elasticDescription')
                    })]
                  })
                })]
              })
            }), /*#__PURE__*/_jsx(MenuItem, {
              className: classes.menuItem,
              onClick: function onClick() {
                return _this2.handleWorkspaceTypeChange('mosaic');
              },
              selected: workspaceType === 'mosaic',
              value: "mosaic",
              children: /*#__PURE__*/_jsxs(Card, {
                className: classes.card,
                children: [/*#__PURE__*/_jsx(WorkspaceTypeMosaicIcon, {
                  className: classes.svgIcon,
                  viewBox: "0 0 120 90"
                }), /*#__PURE__*/_jsx("div", {
                  className: classes.details,
                  children: /*#__PURE__*/_jsxs(CardContent, {
                    className: classes.content,
                    classes: {
                      root: classes.root
                    },
                    children: [/*#__PURE__*/_jsx(Typography, {
                      className: classes.headline,
                      component: "p",
                      variant: "h3",
                      children: t('mosaic')
                    }), /*#__PURE__*/_jsx(Typography, {
                      variant: "body1",
                      children: t('mosaicDescription')
                    })]
                  })
                })]
              })
            })]
          })]
        })]
      });
    }
  }]);
  return WorkspaceSelectionDialog;
}(Component);
WorkspaceSelectionDialog.defaultProps = {
  children: null,
  container: null,
  open: false,
  t: function t(key) {
    return key;
  }
};