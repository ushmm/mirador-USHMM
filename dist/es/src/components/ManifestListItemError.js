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
import ErrorIcon from '@material-ui/icons/ErrorOutlineSharp';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

/**
 * ManifestListItemError renders a component displaying a
 * message to the user about a problem loading a manifest
*/
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export var ManifestListItemError = /*#__PURE__*/function (_Component) {
  _inherits(ManifestListItemError, _Component);
  var _super = _createSuper(ManifestListItemError);
  function ManifestListItemError() {
    _classCallCheck(this, ManifestListItemError);
    return _super.apply(this, arguments);
  }
  _createClass(ManifestListItemError, [{
    key: "render",
    value:
    /**
     * Returns the rendered component
    */
    function render() {
      var _this$props = this.props,
        classes = _this$props.classes,
        manifestId = _this$props.manifestId,
        onDismissClick = _this$props.onDismissClick,
        onTryAgainClick = _this$props.onTryAgainClick,
        t = _this$props.t;
      return /*#__PURE__*/_jsxs(Grid, {
        container: true,
        children: [/*#__PURE__*/_jsx(Grid, {
          container: true,
          children: /*#__PURE__*/_jsxs(Grid, {
            container: true,
            item: true,
            xs: 12,
            sm: 6,
            children: [/*#__PURE__*/_jsx(Grid, {
              item: true,
              xs: 4,
              sm: 3,
              children: /*#__PURE__*/_jsx(Grid, {
                container: true,
                justifyContent: "center",
                children: /*#__PURE__*/_jsx(ErrorIcon, {
                  className: classes.errorIcon,
                  fontSize: "large"
                })
              })
            }), /*#__PURE__*/_jsxs(Grid, {
              item: true,
              xs: 8,
              sm: 9,
              children: [/*#__PURE__*/_jsx(Typography, {
                children: t('manifestError')
              }), /*#__PURE__*/_jsx(Typography, {
                className: classes.manifestIdText,
                children: manifestId
              })]
            })]
          })
        }), /*#__PURE__*/_jsx(Grid, {
          container: true,
          children: /*#__PURE__*/_jsx(Grid, {
            container: true,
            item: true,
            xs: 12,
            sm: 6,
            justifyContent: "flex-end",
            children: /*#__PURE__*/_jsxs(Grid, {
              item: true,
              children: [/*#__PURE__*/_jsx(Button, {
                onClick: function onClick() {
                  onDismissClick(manifestId);
                },
                children: t('dismiss')
              }), /*#__PURE__*/_jsx(Button, {
                onClick: function onClick() {
                  onTryAgainClick(manifestId);
                },
                children: t('tryAgain')
              })]
            })
          })
        })]
      });
    }
  }]);
  return ManifestListItemError;
}(Component);