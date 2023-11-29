var _excluded = ["placeholder", "style", "thumbnail", "resource", "maxHeight", "maxWidth", "thumbnailsConfig"];
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { Component, useMemo, useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';
import getThumbnail from '../lib/ThumbnailFactory';

/**
 * A lazy-loaded image that uses IntersectionObserver to determine when to
 * try to load the image (or even calculate that the image url/height/width are)
 */
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var LazyLoadedImage = function LazyLoadedImage(_ref) {
  var placeholder = _ref.placeholder,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    thumbnail = _ref.thumbnail,
    resource = _ref.resource,
    maxHeight = _ref.maxHeight,
    maxWidth = _ref.maxWidth,
    thumbnailsConfig = _ref.thumbnailsConfig,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useInView = useInView(),
    ref = _useInView.ref,
    inView = _useInView.inView;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    loaded = _useState2[0],
    setLoaded = _useState2[1];

  /**
   * Handles the intersection (visibility) of a given thumbnail, by requesting
   * the image and then updating the state.
   */
  useEffect(function () {
    if (loaded || !inView) return;
    setLoaded(true);
  }, [inView, loaded]);
  var image = useMemo(function () {
    if (thumbnail) return thumbnail;
    var i = getThumbnail(resource, _objectSpread(_objectSpread({}, thumbnailsConfig), {}, {
      maxHeight: maxHeight,
      maxWidth: maxWidth
    }));
    if (i && i.url) return i;
    return undefined;
  }, [resource, thumbnail, maxWidth, maxHeight, thumbnailsConfig]);
  var imageStyles = useMemo(function () {
    var styleProps = {
      height: 'auto',
      width: 'auto'
    };
    if (!image) return _objectSpread(_objectSpread({}, style), {}, {
      height: maxHeight || 'auto',
      width: maxWidth || 'auto'
    });
    var thumbHeight = image.height,
      thumbWidth = image.width;
    if (thumbHeight && thumbWidth) {
      if (maxHeight && thumbHeight > maxHeight || maxWidth && thumbWidth > maxWidth) {
        var aspectRatio = thumbWidth / thumbHeight;
        if (maxHeight && maxWidth) {
          if (maxWidth / maxHeight < aspectRatio) {
            styleProps.height = Math.round(maxWidth / aspectRatio);
            styleProps.width = maxWidth;
          } else {
            styleProps.height = maxHeight;
            styleProps.width = Math.round(maxHeight * aspectRatio);
          }
        } else if (maxHeight) {
          styleProps.height = maxHeight;
          styleProps.maxWidth = Math.round(maxHeight * aspectRatio);
        } else if (maxWidth) {
          styleProps.width = maxWidth;
          styleProps.maxHeight = Math.round(maxWidth / aspectRatio);
        }
      } else {
        styleProps.width = thumbWidth;
        styleProps.height = thumbHeight;
      }
    } else if (thumbHeight && !thumbWidth) {
      styleProps.height = maxHeight;
    } else if (!thumbHeight && thumbWidth) {
      styleProps.width = maxWidth;
    } else {
      // The thumbnail wasn't retrieved via an Image API service,
      // and its dimensions are not specified in the JSON-LD
      // (note that this may result in a blurry image)
      styleProps.width = maxWidth;
      styleProps.height = maxHeight;
    }
    return _objectSpread(_objectSpread({}, styleProps), style);
  }, [image, maxWidth, maxHeight, style]);
  var _ref2 = loaded && (thumbnail || image) || {},
    _ref2$url = _ref2.url,
    src = _ref2$url === void 0 ? placeholder : _ref2$url;
  return /*#__PURE__*/_jsx("img", _objectSpread({
    ref: ref,
    alt: "",
    role: "presentation",
    src: src,
    style: imageStyles
  }, props));
};
LazyLoadedImage.defaultProps = {
  style: {},
  thumbnail: null,
  thumbnailsConfig: {}
};

/**
 * Uses InteractionObserver to "lazy" load canvas thumbnails that are in view.
 */
export var IIIFThumbnail = /*#__PURE__*/function (_Component) {
  _inherits(IIIFThumbnail, _Component);
  var _super = _createSuper(IIIFThumbnail);
  function IIIFThumbnail() {
    _classCallCheck(this, IIIFThumbnail);
    return _super.apply(this, arguments);
  }
  _createClass(IIIFThumbnail, [{
    key: "label",
    value: /** */
    function label() {
      var _this$props = this.props,
        label = _this$props.label,
        resource = _this$props.resource;
      return label || IIIFThumbnail.getUseableLabel(resource);
    }

    /**
     */
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        children = _this$props2.children,
        classes = _this$props2.classes,
        imagePlaceholder = _this$props2.imagePlaceholder,
        labelled = _this$props2.labelled,
        maxHeight = _this$props2.maxHeight,
        maxWidth = _this$props2.maxWidth,
        resource = _this$props2.resource,
        style = _this$props2.style,
        thumbnail = _this$props2.thumbnail,
        thumbnailsConfig = _this$props2.thumbnailsConfig,
        variant = _this$props2.variant;
      return /*#__PURE__*/_jsxs("div", {
        className: classNames(classes.root, _defineProperty({}, classes["".concat(variant, "Root")], variant)),
        children: [/*#__PURE__*/_jsx(LazyLoadedImage, {
          placeholder: imagePlaceholder,
          thumbnail: thumbnail,
          resource: resource,
          maxHeight: maxHeight,
          maxWidth: maxWidth,
          thumbnailsConfig: thumbnailsConfig,
          style: style,
          className: classes.image
        }), labelled && /*#__PURE__*/_jsx("div", {
          className: classNames(classes.label, _defineProperty({}, classes["".concat(variant, "Label")], variant)),
          children: /*#__PURE__*/_jsx(Typography, {
            variant: "caption",
            classes: {
              root: classNames(classes.caption, _defineProperty({}, classes["".concat(variant, "Caption")], variant))
            },
            children: this.label()
          })
        }), children]
      });
    }
  }], [{
    key: "getUseableLabel",
    value: /** */
    function getUseableLabel(resource, index) {
      return resource && resource.getLabel && resource.getLabel().length > 0 ? resource.getLabel().getValue() : String(index + 1);
    }
  }]);
  return IIIFThumbnail;
}(Component);
IIIFThumbnail.defaultProps = {
  children: null,
  classes: {},
  // Transparent "gray"
  imagePlaceholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMMDQmtBwADgwF/Op8FmAAAAABJRU5ErkJggg==',
  label: undefined,
  labelled: false,
  maxHeight: null,
  maxWidth: null,
  style: {},
  thumbnail: null,
  thumbnailsConfig: {},
  variant: null
};