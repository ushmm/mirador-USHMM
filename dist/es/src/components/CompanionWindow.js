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
import { Children, cloneElement, Component } from 'react';
import CloseIcon from '@material-ui/icons/CloseSharp';
import OpenInNewIcon from '@material-ui/icons/OpenInNewSharp';
import MoveIcon from '@material-ui/icons/DragIndicatorSharp';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Rnd } from 'react-rnd';
import MiradorMenuButton from '../containers/MiradorMenuButton';
import ns from '../config/css-ns';

/**
 * CompanionWindow
 */
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export var CompanionWindow = /*#__PURE__*/function (_Component) {
  _inherits(CompanionWindow, _Component);
  var _super = _createSuper(CompanionWindow);
  function CompanionWindow() {
    _classCallCheck(this, CompanionWindow);
    return _super.apply(this, arguments);
  }
  _createClass(CompanionWindow, [{
    key: "openInNewStyle",
    value: /** */
    function openInNewStyle() {
      var direction = this.props.direction;
      if (direction === 'rtl') return {
        transform: 'scale(-1, 1)'
      };
      return {};
    }

    /** */
  }, {
    key: "resizeHandles",
    value: function resizeHandles() {
      var _this$props = this.props,
        direction = _this$props.direction,
        position = _this$props.position;
      var positions = {
        ltr: {
          "default": 'left',
          opposite: 'right'
        },
        rtl: {
          "default": 'right',
          opposite: 'left'
        }
      };
      var base = {
        bottom: false,
        bottomLeft: false,
        bottomRight: false,
        left: false,
        right: false,
        top: false,
        topLeft: false,
        topRight: false
      };
      if (position === 'right' || position === 'far-right') {
        return _objectSpread(_objectSpread({}, base), {}, _defineProperty({}, positions[direction]["default"], true));
      }
      if (position === 'left') {
        return _objectSpread(_objectSpread({}, base), {}, _defineProperty({}, positions[direction].opposite, true));
      }
      if (position === 'bottom' || position === 'far-bottom') {
        return _objectSpread(_objectSpread({}, base), {}, {
          top: true
        });
      }
      return base;
    }

    /**
     * render
     * @return
     */
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        ariaLabel = _this$props2.ariaLabel,
        classes = _this$props2.classes,
        paperClassName = _this$props2.paperClassName,
        onCloseClick = _this$props2.onCloseClick,
        updateCompanionWindow = _this$props2.updateCompanionWindow,
        isDisplayed = _this$props2.isDisplayed,
        position = _this$props2.position,
        t = _this$props2.t,
        title = _this$props2.title,
        children = _this$props2.children,
        titleControls = _this$props2.titleControls,
        size = _this$props2.size,
        defaultSidebarPanelWidth = _this$props2.defaultSidebarPanelWidth,
        defaultSidebarPanelHeight = _this$props2.defaultSidebarPanelHeight;
      var isBottom = position === 'bottom' || position === 'far-bottom';
      var childrenWithAdditionalProps = Children.map(children, function (child) {
        if (!child) return null;
        return /*#__PURE__*/cloneElement(child, {
          parentactions: {
            closeCompanionWindow: onCloseClick
          }
        });
      });
      return /*#__PURE__*/_jsx(Paper, {
        className: [classes.root, position === 'bottom' ? classes.horizontal : classes.vertical, classes["companionWindow-".concat(position)], ns("companion-window-".concat(position)), paperClassName].join(' '),
        style: {
          display: isDisplayed ? null : 'none',
          order: position === 'left' ? -1 : null
        },
        square: true,
        component: "aside",
        "aria-label": ariaLabel || title,
        children: /*#__PURE__*/_jsxs(Rnd, {
          className: [classes.rnd],
          style: {
            display: 'flex',
            position: 'relative'
          },
          "default": {
            height: isBottom ? defaultSidebarPanelHeight : '100%',
            width: isBottom ? 'auto' : defaultSidebarPanelWidth
          },
          disableDragging: true,
          enableResizing: this.resizeHandles(),
          minHeight: 50,
          minWidth: position === 'left' ? 235 : 100,
          children: [/*#__PURE__*/_jsxs(Toolbar, {
            className: [classes.toolbar, classes.companionWindowHeader, size.width < 370 ? classes.small : null, ns('companion-window-header')].join(' '),
            disableGutters: true,
            children: [/*#__PURE__*/_jsx(Typography, {
              variant: "h3",
              className: classes.windowSideBarTitle,
              children: title
            }), position === 'left' ? updateCompanionWindow && /*#__PURE__*/_jsx(MiradorMenuButton, {
              "aria-label": t('openInCompanionWindow'),
              onClick: function onClick() {
                updateCompanionWindow({
                  position: 'right'
                });
              },
              children: /*#__PURE__*/_jsx(OpenInNewIcon, {
                style: this.openInNewStyle(),
                fontSize: "large"
              })
            }) : /*#__PURE__*/_jsxs(_Fragment, {
              children: [updateCompanionWindow && /*#__PURE__*/_jsx(MiradorMenuButton, {
                "aria-label": position === 'bottom' ? t('moveCompanionWindowToRight') : t('moveCompanionWindowToBottom'),
                className: classes.positionButton,
                onClick: function onClick() {
                  updateCompanionWindow({
                    position: position === 'bottom' ? 'right' : 'bottom'
                  });
                },
                children: /*#__PURE__*/_jsx(MoveIcon, {
                  fontSize: "large"
                })
              }), /*#__PURE__*/_jsx(MiradorMenuButton, {
                "aria-label": t('closeCompanionWindow'),
                className: classes.closeButton,
                onClick: onCloseClick,
                children: /*#__PURE__*/_jsx(CloseIcon, {
                  fontSize: "large"
                })
              })]
            }), titleControls && /*#__PURE__*/_jsx("div", {
              className: [classes.titleControls, isBottom ? classes.companionWindowTitleControlsBottom : classes.companionWindowTitleControls, ns('companion-window-title-controls')].join(' '),
              children: titleControls
            })]
          }), /*#__PURE__*/_jsx(Paper, {
            className: [classes.content, ns('scrollto-scrollable')].join(' '),
            elevation: 0,
            children: childrenWithAdditionalProps
          })]
        })
      });
    }
  }]);
  return CompanionWindow;
}(Component);
CompanionWindow.defaultProps = {
  ariaLabel: undefined,
  children: undefined,
  defaultSidebarPanelHeight: 201,
  defaultSidebarPanelWidth: 235,
  isDisplayed: false,
  onCloseClick: function onCloseClick() {},
  paperClassName: '',
  position: null,
  size: {},
  t: function t(key) {
    return key;
  },
  title: null,
  titleControls: null,
  updateCompanionWindow: undefined
};