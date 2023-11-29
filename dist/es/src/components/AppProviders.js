function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider, StylesProvider, createTheme, jssPreset, createGenerateClassName } from '@material-ui/core/styles';
import { DndContext, DndProvider } from 'react-dnd';
import { MultiBackend } from 'react-dnd-multi-backend';
import { HTML5toTouch } from 'rdndmb-html5-to-touch';
import { create } from 'jss';
import rtl from 'jss-rtl';
import createI18nInstance from '../i18n';
import FullScreenContext from '../contexts/FullScreenContext';

/**
 * Allow applications to opt-out of (or provide their own) drag and drop context
 */
import { jsx as _jsx } from "react/jsx-runtime";
var MaybeDndProvider = function MaybeDndProvider(props) {
  var dndManager = props.dndManager,
    children = props.children;
  if (dndManager === false) {
    return children;
  }
  if (dndManager === undefined) {
    return /*#__PURE__*/_jsx(DndProvider, {
      backend: MultiBackend,
      options: HTML5toTouch,
      children: children
    });
  }
  return /*#__PURE__*/_jsx(DndContext.Provider, {
    value: dndManager,
    children: children
  });
};
/**
 * Shim to inject the full screen handle into a context
 */
var FullScreenShim = function FullScreenShim(_ref) {
  var children = _ref.children;
  var handle = useFullScreenHandle();
  return /*#__PURE__*/_jsx(FullScreen, {
    handle: handle,
    children: /*#__PURE__*/_jsx(FullScreenContext.Provider, {
      value: handle,
      children: children
    })
  });
};
/**
 * This component adds viewer-specific providers.
 * @prop {Object} manifests
 */
export var AppProviders = /*#__PURE__*/function (_Component) {
  _inherits(AppProviders, _Component);
  var _super = _createSuper(AppProviders);
  /** */
  function AppProviders(props) {
    var _this;
    _classCallCheck(this, AppProviders);
    _this = _super.call(this, props);
    _this.i18n = createI18nInstance();
    // Set i18n language
    _this.i18n.changeLanguage(props.language);
    return _this;
  }

  /**
   * Update the i18n language if it is changed
   */
  _createClass(AppProviders, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var language = this.props.language;
      if (prevProps.language !== language) {
        this.i18n.changeLanguage(language);
      }
    }

    /** */
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        children = _this$props.children,
        createGenerateClassNameOptions = _this$props.createGenerateClassNameOptions,
        theme = _this$props.theme,
        translations = _this$props.translations,
        dndManager = _this$props.dndManager;
      var generateClassName = createGenerateClassName(createGenerateClassNameOptions);
      Object.keys(translations).forEach(function (lng) {
        _this2.i18n.addResourceBundle(lng, 'translation', translations[lng], true, true);
      });
      return /*#__PURE__*/_jsx(FullScreenShim, {
        children: /*#__PURE__*/_jsx(I18nextProvider, {
          i18n: this.i18n,
          children: /*#__PURE__*/_jsx(ThemeProvider, {
            theme: createTheme(theme),
            children: /*#__PURE__*/_jsx(StylesProvider, {
              jss: create({
                plugins: [].concat(_toConsumableArray(jssPreset().plugins), [rtl()])
              }),
              generateClassName: generateClassName,
              children: /*#__PURE__*/_jsx(MaybeDndProvider, {
                dndManager: dndManager,
                children: children
              })
            })
          })
        })
      });
    }
  }]);
  return AppProviders;
}(Component);
AppProviders.defaultProps = {
  children: null,
  createGenerateClassNameOptions: {},
  dndManager: undefined
};