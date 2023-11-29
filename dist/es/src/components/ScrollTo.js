var _excluded = ["children", "containerRef", "offsetTop", "scrollTo"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
import { createRef, Component } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
/**
 * ScrollTo ~
*/
export var ScrollTo = /*#__PURE__*/function (_Component) {
  _inherits(ScrollTo, _Component);
  var _super = _createSuper(ScrollTo);
  /** */
  function ScrollTo(props) {
    var _this;
    _classCallCheck(this, ScrollTo);
    _this = _super.call(this, props);
    _this.scrollToRef = /*#__PURE__*/createRef();
    return _this;
  }

  /** */
  _createClass(ScrollTo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var scrollTo = this.props.scrollTo;
      if (!scrollTo) return;
      this.scrollToElement();
    }

    /**
     * If the scrollTo prop is true (and has been updated) scroll to the selected element
    */
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var scrollTo = this.props.scrollTo;
      if (scrollTo && prevProps.scrollTo !== scrollTo) {
        this.scrollToElement();
      }
    }

    /**
     * Return the getBoundingClientRect() of the containerRef prop
    */
  }, {
    key: "containerBoundingRect",
    value: function containerBoundingRect() {
      var containerRef = this.props.containerRef;
      if (!containerRef || !containerRef.current || !containerRef.current.domEl) return {};
      return containerRef.current.domEl.getBoundingClientRect();
    }

    /**
     * Return the getBoundingClientRect() of the scrollTo ref prop
    */
  }, {
    key: "scrollToBoundingRect",
    value: function scrollToBoundingRect() {
      if (!this.elementToScrollTo()) return {};
      return this.elementToScrollTo().getBoundingClientRect();
    }

    /**
     * Return the current scrollToRef
    */
  }, {
    key: "elementToScrollTo",
    value: function elementToScrollTo() {
      if (!this.scrollToRef || !this.scrollToRef.current) return null;
      return this.scrollToRef.current;
    }

    /**
     * The container provided in the containersRef dome structure in which scrolling
     * should happen.
    */
  }, {
    key: "scrollableContainer",
    value: function scrollableContainer() {
      var containerRef = this.props.containerRef;
      if (!containerRef || !containerRef.current || !containerRef.current.domEl) return null;
      return containerRef.current.domEl.getElementsByClassName('mirador-scrollto-scrollable')[0];
    }

    /**
     * Determine if the scrollTo element is visible within the given containerRef prop.
     * Currently only supports vertical elements but could be extended to support horizontal
    */
  }, {
    key: "elementIsVisible",
    value: function elementIsVisible() {
      var offsetTop = this.props.offsetTop;
      if (this.scrollToBoundingRect().top < this.containerBoundingRect().top + offsetTop) {
        return false;
      }
      if (this.scrollToBoundingRect().bottom > this.containerBoundingRect().bottom) {
        return false;
      }
      return true;
    }

    /**
     * Scroll to the element if it is set to be scolled and is not visible
    */
  }, {
    key: "scrollToElement",
    value: function scrollToElement() {
      var _this$props = this.props,
        offsetTop = _this$props.offsetTop,
        scrollTo = _this$props.scrollTo;
      if (!scrollTo) return;
      if (!this.elementToScrollTo()) return;
      if (this.elementIsVisible()) return;
      if (!this.scrollableContainer()) return;
      var scrollBy = this.elementToScrollTo().offsetTop - this.containerBoundingRect().height / 2 + offsetTop;
      this.scrollableContainer().scrollTo(0, scrollBy);
    }

    /**
     * Returns the rendered component
    */
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        children = _this$props2.children,
        containerRef = _this$props2.containerRef,
        offsetTop = _this$props2.offsetTop,
        scrollTo = _this$props2.scrollTo,
        otherProps = _objectWithoutProperties(_this$props2, _excluded);
      if (!scrollTo) return children;
      return /*#__PURE__*/_jsx("div", _objectSpread(_objectSpread({
        ref: this.scrollToRef
      }, otherProps), {}, {
        children: children
      }));
    }
  }]);
  return ScrollTo;
}(Component);
ScrollTo.defaultProps = {
  offsetTop: 0
};