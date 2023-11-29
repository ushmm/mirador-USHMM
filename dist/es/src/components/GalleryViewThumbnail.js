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
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import AnnotationIcon from '@material-ui/icons/CommentSharp';
import SearchIcon from '@material-ui/icons/SearchSharp';
import classNames from 'classnames';
import { InView } from 'react-intersection-observer';
import MiradorCanvas from '../lib/MiradorCanvas';
import IIIFThumbnail from '../containers/IIIFThumbnail';

/**
 * Represents a WindowViewer in the mirador workspace. Responsible for mounting
 * OSD and Navigation
 */
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export var GalleryViewThumbnail = /*#__PURE__*/function (_Component) {
  _inherits(GalleryViewThumbnail, _Component);
  var _super = _createSuper(GalleryViewThumbnail);
  /** */
  function GalleryViewThumbnail(props) {
    var _this;
    _classCallCheck(this, GalleryViewThumbnail);
    _this = _super.call(this, props);
    _this.myRef = /*#__PURE__*/createRef();
    _this.state = {
      requestedAnnotations: false
    };
    _this.handleSelect = _this.handleSelect.bind(_assertThisInitialized(_this));
    _this.handleKey = _this.handleKey.bind(_assertThisInitialized(_this));
    _this.handleIntersection = _this.handleIntersection.bind(_assertThisInitialized(_this));
    return _this;
  }

  // eslint-disable-next-line require-jsdoc
  _createClass(GalleryViewThumbnail, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var selected = this.props.selected;
      if (selected) {
        var _this$myRef$current;
        (_this$myRef$current = this.myRef.current) === null || _this$myRef$current === void 0 ? void 0 : _this$myRef$current.scrollIntoView(true);
      }
    }

    /** @private */
  }, {
    key: "handleSelect",
    value: function handleSelect() {
      var _this$props = this.props,
        canvas = _this$props.canvas,
        selected = _this$props.selected,
        setCanvas = _this$props.setCanvas,
        focusOnCanvas = _this$props.focusOnCanvas;
      if (selected) {
        focusOnCanvas();
      } else {
        setCanvas(canvas.id);
      }
    }

    /** @private */
  }, {
    key: "handleKey",
    value: function handleKey(event) {
      var _this$props2 = this.props,
        canvas = _this$props2.canvas,
        setCanvas = _this$props2.setCanvas,
        focusOnCanvas = _this$props2.focusOnCanvas;
      this.keys = {
        enter: 'Enter',
        space: ' '
      };
      this.chars = {
        enter: 13,
        space: 32
      };
      var enterOrSpace = event.key === this.keys.enter || event.which === this.chars.enter || event.key === this.keys.space || event.which === this.chars.space;
      if (enterOrSpace) {
        focusOnCanvas();
      } else {
        setCanvas(canvas.id);
      }
    }

    /** */
  }, {
    key: "handleIntersection",
    value: function handleIntersection(_inView, _ref) {
      var isIntersecting = _ref.isIntersecting;
      var _this$props3 = this.props,
        annotationsCount = _this$props3.annotationsCount,
        requestCanvasAnnotations = _this$props3.requestCanvasAnnotations;
      var requestedAnnotations = this.state.requestedAnnotations;
      if (!isIntersecting || annotationsCount === undefined || annotationsCount > 0 || requestedAnnotations) return;
      this.setState({
        requestedAnnotations: true
      });
      requestCanvasAnnotations();
    }

    /**
     * Renders things
     */
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
        annotationsCount = _this$props4.annotationsCount,
        searchAnnotationsCount = _this$props4.searchAnnotationsCount,
        canvas = _this$props4.canvas,
        classes = _this$props4.classes,
        config = _this$props4.config,
        selected = _this$props4.selected;
      var miradorCanvas = new MiradorCanvas(canvas);
      return /*#__PURE__*/_jsx(InView, {
        onChange: this.handleIntersection,
        children: /*#__PURE__*/_jsx("div", {
          className: classNames(classes.galleryViewItem, selected ? classes.selected : '', searchAnnotationsCount > 0 ? classes.hasAnnotations : ''),
          onClick: this.handleSelect,
          onKeyUp: this.handleKey,
          ref: this.myRef,
          role: "button",
          tabIndex: 0,
          children: /*#__PURE__*/_jsx(IIIFThumbnail, {
            resource: canvas,
            labelled: true,
            variant: "outside",
            maxWidth: config.width,
            maxHeight: config.height,
            style: {
              margin: '0 auto',
              maxWidth: "".concat(Math.ceil(config.height * miradorCanvas.aspectRatio), "px")
            },
            children: /*#__PURE__*/_jsxs("div", {
              className: classes.chips,
              children: [searchAnnotationsCount > 0 && /*#__PURE__*/_jsx(Chip, {
                avatar: /*#__PURE__*/_jsx(Avatar, {
                  className: classes.avatar,
                  classes: {
                    circle: classes.avatarIcon
                  },
                  children: /*#__PURE__*/_jsx(SearchIcon, {
                    fontSize: "small"
                  })
                }),
                label: searchAnnotationsCount,
                className: classNames(classes.searchChip),
                size: "small"
              }), (annotationsCount || 0) > 0 && /*#__PURE__*/_jsx(Chip, {
                avatar: /*#__PURE__*/_jsx(Avatar, {
                  className: classes.avatar,
                  classes: {
                    circle: classes.avatarIcon
                  },
                  children: /*#__PURE__*/_jsx(AnnotationIcon, {
                    className: classes.annotationIcon,
                    fontSize: "large"
                  })
                }),
                label: annotationsCount,
                className: classNames(classes.annotationsChip),
                size: "small"
              })]
            })
          })
        }, canvas.index)
      });
    }
  }]);
  return GalleryViewThumbnail;
}(Component);
GalleryViewThumbnail.defaultProps = {
  annotationsCount: undefined,
  config: {
    height: 100,
    width: null
  },
  requestCanvasAnnotations: function requestCanvasAnnotations() {},
  searchAnnotationsCount: 0,
  selected: false
};