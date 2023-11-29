function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import SvgIcon from '@material-ui/core/SvgIcon';

/**
 * GalleryViewIcon ~
 */
import { jsx as _jsx } from "react/jsx-runtime";
export default function GalleryViewIcon(props) {
  return /*#__PURE__*/_jsx(SvgIcon, _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/_jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      children: /*#__PURE__*/_jsx("path", {
        d: "M19.974,2H2V19.974H19.974V2ZM7.392,18.177H3.8V14.582H7.392Zm0-5.392H3.8V9.19H7.392Zm0-5.392H3.8V3.8H7.392Zm5.392,10.785H9.19V14.582h3.595Zm0-5.392H9.19V9.19h3.595Zm0-5.392H9.19V3.8h3.595Zm5.392,10.785H14.582V14.582h3.595Zm0-5.392H14.582V9.19h3.595Zm0-5.392H14.582V3.8h3.595Z",
        transform: "translate(1 1)"
      })
    })
  }));
}