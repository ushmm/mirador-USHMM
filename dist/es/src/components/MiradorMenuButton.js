var _excluded = ["badge", "children", "container", "dispatch", "BadgeProps", "TooltipProps"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

/**
 * MiradorMenuButton ~ Wrap the given icon prop in an IconButton and a Tooltip.
 * This shares the passed in aria-label w/ the Tooltip (as title) and the IconButton
 * All props besides icon are spread to the IconButton component
*/
import { jsx as _jsx } from "react/jsx-runtime";
export function MiradorMenuButton(props) {
  var ariaLabel = props['aria-label'];
  var badge = props.badge,
    children = props.children,
    container = props.container,
    dispatch = props.dispatch,
    BadgeProps = props.BadgeProps,
    TooltipProps = props.TooltipProps,
    iconButtonProps = _objectWithoutProperties(props, _excluded);
  var button = /*#__PURE__*/_jsx(IconButton, _objectSpread(_objectSpread({}, iconButtonProps), {}, {
    children: badge ? /*#__PURE__*/_jsx(Badge, _objectSpread(_objectSpread({
      overlap: "rectangular"
    }, BadgeProps), {}, {
      children: children
    })) : children
  }));
  if (iconButtonProps.disabled) return button;
  return /*#__PURE__*/_jsx(Tooltip, _objectSpread(_objectSpread({
    PopperProps: {
      container: container === null || container === void 0 ? void 0 : container.current
    },
    title: ariaLabel
  }, TooltipProps), {}, {
    children: button
  }));
}
MiradorMenuButton.defaultProps = {
  badge: false,
  BadgeProps: {},
  container: null,
  dispatch: function dispatch() {},
  TooltipProps: {}
};