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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ListSubheader from '@material-ui/core/ListSubheader';
import MenuItem from '@material-ui/core/MenuItem';
import ThumbnailsOffIcon from '@material-ui/icons/CropDinSharp';
import ThumbnailNavigationBottomIcon from './icons/ThumbnailNavigationBottomIcon';
import ThumbnailNavigationRightIcon from './icons/ThumbnailNavigationRightIcon';
/**
 *
 */
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export var WindowThumbnailSettings = /*#__PURE__*/function (_Component) {
  _inherits(WindowThumbnailSettings, _Component);
  var _super = _createSuper(WindowThumbnailSettings);
  /**
   * constructor -
   */
  function WindowThumbnailSettings(props) {
    var _this;
    _classCallCheck(this, WindowThumbnailSettings);
    _this = _super.call(this, props);
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * @private
   */
  _createClass(WindowThumbnailSettings, [{
    key: "handleChange",
    value: function handleChange(value) {
      var _this$props = this.props,
        windowId = _this$props.windowId,
        setWindowThumbnailPosition = _this$props.setWindowThumbnailPosition;
      setWindowThumbnailPosition(windowId, value);
    }

    /**
     * render
     *
     * @return {type}  description
     */
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props,
        classes = _this$props2.classes,
        handleClose = _this$props2.handleClose,
        t = _this$props2.t,
        thumbnailNavigationPosition = _this$props2.thumbnailNavigationPosition,
        direction = _this$props2.direction;
      return /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsx(ListSubheader, {
          role: "presentation",
          disableSticky: true,
          tabIndex: "-1",
          children: t('thumbnails')
        }), /*#__PURE__*/_jsx(MenuItem, {
          className: classes.MenuItem,
          onClick: function onClick() {
            _this2.handleChange('off');
            handleClose();
          },
          children: /*#__PURE__*/_jsx(FormControlLabel, {
            value: "off",
            classes: {
              label: thumbnailNavigationPosition === 'off' ? classes.selectedLabel : classes.label
            },
            control: /*#__PURE__*/_jsx(ThumbnailsOffIcon, {
              color: thumbnailNavigationPosition === 'off' ? 'secondary' : undefined,
              fontSize: "large"
            }),
            label: t('off'),
            labelPlacement: "bottom"
          })
        }), /*#__PURE__*/_jsx(MenuItem, {
          className: classes.MenuItem,
          onClick: function onClick() {
            _this2.handleChange('far-bottom');
            handleClose();
          },
          children: /*#__PURE__*/_jsx(FormControlLabel, {
            value: "far-bottom",
            classes: {
              label: thumbnailNavigationPosition === 'far-bottom' ? classes.selectedLabel : classes.label
            },
            control: /*#__PURE__*/_jsx(ThumbnailNavigationBottomIcon, {
              color: thumbnailNavigationPosition === 'far-bottom' ? 'secondary' : undefined,
              fontSize: "large"
            }),
            label: t('bottom'),
            labelPlacement: "bottom"
          })
        }), /*#__PURE__*/_jsx(MenuItem, {
          className: classes.MenuItem,
          onClick: function onClick() {
            _this2.handleChange('far-right');
            handleClose();
          },
          children: /*#__PURE__*/_jsx(FormControlLabel, {
            value: "far-right",
            classes: {
              label: thumbnailNavigationPosition === 'far-right' ? classes.selectedLabel : classes.label
            },
            control: /*#__PURE__*/_jsx(ThumbnailNavigationRightIcon, {
              color: thumbnailNavigationPosition === 'far-right' ? 'secondary' : undefined,
              style: direction === 'rtl' ? {
                transform: 'rotate(180deg)'
              } : {}
            }),
            label: t('right'),
            labelPlacement: "bottom"
          })
        })]
      });
    }
  }]);
  return WindowThumbnailSettings;
}(Component);
WindowThumbnailSettings.defaultProps = {
  handleClose: function handleClose() {},
  t: function t(key) {
    return key;
  }
};