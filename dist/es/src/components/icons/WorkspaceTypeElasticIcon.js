function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import SvgIcon from '@material-ui/core/SvgIcon';

/**
 * ElasticWorkspaceIcon ~
*/
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default function ElasticWorkspaceIcon(props) {
  return /*#__PURE__*/_jsx(SvgIcon, _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/_jsxs("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "120",
      height: "90",
      viewBox: "0 0 300 225",
      children: [/*#__PURE__*/_jsxs("defs", {
        children: [/*#__PURE__*/_jsxs("linearGradient", {
          id: "linear-gradient",
          x1: "0.5",
          y1: "1",
          x2: "0.5",
          gradientUnits: "objectBoundingBox",
          children: [/*#__PURE__*/_jsx("stop", {
            offset: "0"
          }), /*#__PURE__*/_jsx("stop", {
            offset: "0.14",
            stopOpacity: "0.631"
          }), /*#__PURE__*/_jsx("stop", {
            offset: "1",
            stopOpacity: "0"
          })]
        }), /*#__PURE__*/_jsxs("linearGradient", {
          id: "linear-gradient-2",
          x1: "0.5",
          y1: "1",
          x2: "0.5",
          gradientUnits: "objectBoundingBox",
          children: [/*#__PURE__*/_jsx("stop", {
            offset: "0",
            stopColor: "#fff",
            stopOpacity: "0"
          }), /*#__PURE__*/_jsx("stop", {
            offset: "0.23",
            stopColor: "#fff",
            stopOpacity: "0.012"
          }), /*#__PURE__*/_jsx("stop", {
            offset: "0.36",
            stopColor: "#fff",
            stopOpacity: "0.039"
          }), /*#__PURE__*/_jsx("stop", {
            offset: "0.47",
            stopColor: "#fff",
            stopOpacity: "0.102"
          }), /*#__PURE__*/_jsx("stop", {
            offset: "0.57",
            stopColor: "#fff",
            stopOpacity: "0.18"
          }), /*#__PURE__*/_jsx("stop", {
            offset: "0.67",
            stopColor: "#fff",
            stopOpacity: "0.278"
          }), /*#__PURE__*/_jsx("stop", {
            offset: "0.75",
            stopColor: "#fff",
            stopOpacity: "0.412"
          }), /*#__PURE__*/_jsx("stop", {
            offset: "0.83",
            stopColor: "#fff",
            stopOpacity: "0.561"
          }), /*#__PURE__*/_jsx("stop", {
            offset: "0.91",
            stopColor: "#fff",
            stopOpacity: "0.741"
          }), /*#__PURE__*/_jsx("stop", {
            offset: "0.98",
            stopColor: "#fff",
            stopOpacity: "0.929"
          }), /*#__PURE__*/_jsx("stop", {
            offset: "1",
            stopColor: "#fff"
          })]
        }), /*#__PURE__*/_jsx("clipPath", {
          id: "clip-elastic_icon",
          children: /*#__PURE__*/_jsx("rect", {
            width: "300",
            height: "225"
          })
        })]
      }), /*#__PURE__*/_jsxs("g", {
        id: "elastic_icon",
        "data-name": "elastic icon",
        clipPath: "url(#clip-elastic_icon)",
        children: [/*#__PURE__*/_jsx("rect", {
          width: "300",
          height: "225",
          fill: "#fff"
        }), /*#__PURE__*/_jsxs("g", {
          id: "Rectangle_278",
          "data-name": "Rectangle 278",
          transform: "translate(232 159)",
          fill: "#88c6c3",
          stroke: "#707070",
          strokeWidth: "1",
          opacity: "0.747",
          children: [/*#__PURE__*/_jsx("rect", {
            width: "54",
            height: "54",
            stroke: "none"
          }), /*#__PURE__*/_jsx("rect", {
            x: "0.5",
            y: "0.5",
            width: "53",
            height: "53",
            fill: "none"
          })]
        }), /*#__PURE__*/_jsxs("g", {
          id: "Rectangle_8",
          "data-name": "Rectangle 8",
          transform: "translate(7 148)",
          fill: "#88c6c3",
          stroke: "#707070",
          strokeWidth: "1",
          opacity: "0.747",
          children: [/*#__PURE__*/_jsx("rect", {
            width: "70",
            height: "70",
            stroke: "none"
          }), /*#__PURE__*/_jsx("rect", {
            x: "0.5",
            y: "0.5",
            width: "69",
            height: "69",
            fill: "none"
          })]
        }), /*#__PURE__*/_jsxs("g", {
          id: "Rectangle_258",
          "data-name": "Rectangle 258",
          transform: "translate(224 6)",
          fill: "#88c6c3",
          stroke: "#707070",
          strokeWidth: "1",
          opacity: "0.747",
          children: [/*#__PURE__*/_jsx("rect", {
            width: "70",
            height: "100",
            stroke: "none"
          }), /*#__PURE__*/_jsx("rect", {
            x: "0.5",
            y: "0.5",
            width: "69",
            height: "99",
            fill: "none"
          })]
        }), /*#__PURE__*/_jsxs("g", {
          id: "Rectangle_259",
          "data-name": "Rectangle 259",
          transform: "translate(71 64)",
          fill: "#88c6c3",
          stroke: "#707070",
          strokeWidth: "1",
          opacity: "0.747",
          children: [/*#__PURE__*/_jsx("rect", {
            width: "115",
            height: "75",
            stroke: "none"
          }), /*#__PURE__*/_jsx("rect", {
            x: "0.5",
            y: "0.5",
            width: "114",
            height: "74",
            fill: "none"
          })]
        }), /*#__PURE__*/_jsxs("g", {
          id: "Rectangle_260",
          "data-name": "Rectangle 260",
          transform: "translate(99 87)",
          fill: "#88c6c3",
          stroke: "#707070",
          strokeWidth: "1",
          opacity: "0.747",
          children: [/*#__PURE__*/_jsx("rect", {
            width: "115",
            height: "75",
            stroke: "none"
          }), /*#__PURE__*/_jsx("rect", {
            x: "0.5",
            y: "0.5",
            width: "114",
            height: "74",
            fill: "none"
          })]
        }), /*#__PURE__*/_jsxs("g", {
          id: "Group_689",
          "data-name": "Group 689",
          children: [/*#__PURE__*/_jsxs("g", {
            id: "Group_687",
            "data-name": "Group 687",
            transform: "translate(0 3)",
            children: [/*#__PURE__*/_jsx("path", {
              id: "checkbox",
              d: "M258.766,37.316v146.5H39.053V37.316Zm40.07-39.254h-300v225h300Z",
              transform: "translate(1.164 -1.063)",
              fill: "#010101",
              fillRule: "evenodd",
              opacity: "0.246"
            }), /*#__PURE__*/_jsxs("g", {
              id: "Path_821",
              "data-name": "Path 821",
              transform: "translate(40 36)",
              fill: "none",
              children: [/*#__PURE__*/_jsx("path", {
                d: "M0,0H220V147H0Z",
                stroke: "none"
              }), /*#__PURE__*/_jsx("path", {
                d: "M 2 2 L 2 145 L 218 145 L 218 2 L 172.9869689941406 2 L 2 2 M 0 0 L 172.9869689941406 0 L 220 0 L 220 147 L 0 147 L 0 0 Z",
                stroke: "none",
                fill: "#01579b"
              })]
            })]
          }), /*#__PURE__*/_jsxs("g", {
            id: "Rectangle_257",
            "data-name": "Rectangle 257",
            transform: "translate(40 39)",
            fill: "#fff",
            stroke: "#01579b",
            strokeWidth: "2",
            children: [/*#__PURE__*/_jsx("rect", {
              width: "20",
              height: "147",
              stroke: "none"
            }), /*#__PURE__*/_jsx("rect", {
              x: "1",
              y: "1",
              width: "18",
              height: "145",
              fill: "none"
            })]
          }), /*#__PURE__*/_jsxs("g", {
            id: "Group_688",
            "data-name": "Group 688",
            transform: "translate(-27.5 -126)",
            children: [/*#__PURE__*/_jsx("circle", {
              id: "teal_circle",
              "data-name": "teal circle",
              cx: "7.5",
              cy: "7.5",
              r: "7.5",
              transform: "translate(70 171)",
              fill: "#009688"
            }), /*#__PURE__*/_jsxs("g", {
              id: "Group_333",
              "data-name": "Group 333",
              transform: "translate(70 171)",
              opacity: "0.12",
              children: [/*#__PURE__*/_jsx("path", {
                id: "gradient_border_2",
                "data-name": "gradient border 2",
                d: "M3408,959.089A4.911,4.911,0,1,1,3403.09,964a4.911,4.911,0,0,1,4.911-4.911m0-.089a5,5,0,1,0,5,5,5,5,0,0,0-5-5Z",
                transform: "translate(-3403 -959)",
                fill: "url(#linear-gradient)"
              }), /*#__PURE__*/_jsx("path", {
                id: "gradient_border_1",
                "data-name": "gradient border 1",
                d: "M3408,959.089A4.911,4.911,0,1,1,3403.09,964a4.911,4.911,0,0,1,4.911-4.911m0-.089a5,5,0,1,0,5,5,5,5,0,0,0-5-5Z",
                transform: "translate(-3403 -959)",
                fill: "url(#linear-gradient-2)"
              })]
            })]
          })]
        })]
      })]
    })
  }));
}