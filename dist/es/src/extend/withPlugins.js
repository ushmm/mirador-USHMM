function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { forwardRef, useContext } from 'react';
import curry from 'lodash/curry';
import isEmpty from 'lodash/isEmpty';
import PluginContext from './PluginContext';

/** withPlugins should be the innermost HOC */
import { jsx as _jsx } from "react/jsx-runtime";
function _withPlugins(targetName, TargetComponent) {
  // eslint-disable-line no-underscore-dangle
  /** */
  function PluginHoc(props, ref) {
    var pluginMap = useContext(PluginContext);
    var passDownProps = _objectSpread(_objectSpread({}, props), ref ? {
      ref: ref
    } : {});
    var plugins = (pluginMap || {})[targetName];
    if (isEmpty(plugins) || isEmpty(plugins.wrap) && isEmpty(plugins.add)) {
      return /*#__PURE__*/_jsx(TargetComponent, _objectSpread({}, passDownProps));
    }
    var PluginComponents = (plugins.add || []).map(function (plugin) {
      return plugin.component;
    });
    var targetComponent = /*#__PURE__*/_jsx(TargetComponent, _objectSpread(_objectSpread({}, passDownProps), {}, {
      PluginComponents: PluginComponents
    }));
    if (isEmpty(plugins.wrap)) return targetComponent;

    /** */
    var pluginWrapper = function pluginWrapper(children, plugin) {
      var WrapPluginComponent = plugin.component;
      return /*#__PURE__*/_jsx(WrapPluginComponent, _objectSpread(_objectSpread({
        targetProps: passDownProps
      }, passDownProps), {}, {
        PluginComponents: PluginComponents,
        TargetComponent: TargetComponent,
        children: children
      }));
    };
    return plugins.wrap.slice().reverse().reduce(pluginWrapper, /*#__PURE__*/_jsx(TargetComponent, _objectSpread({}, passDownProps)));
  }
  var whatever = /*#__PURE__*/forwardRef(PluginHoc);
  whatever.displayName = "WithPlugins(".concat(targetName, ")");
  return whatever;
}

/** withPlugins('MyComponent')(MyComponent) */
export var withPlugins = curry(_withPlugins);