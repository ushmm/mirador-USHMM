function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { Component } from 'react';
import clsx from 'clsx';
import { v4 as uuid } from 'uuid';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import DragHandleIcon from '@material-ui/icons/DragHandleSharp';
import MoveToTopIcon from '@material-ui/icons/VerticalAlignTopSharp';
import VisibilityIcon from '@material-ui/icons/VisibilitySharp';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOffSharp';
import OpacityIcon from '@material-ui/icons/OpacitySharp';
import Typography from '@material-ui/core/Typography';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import MiradorMenuButton from '../containers/MiradorMenuButton';
import IIIFThumbnail from '../containers/IIIFThumbnail';

/** */
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
import { Fragment as _Fragment } from "react/jsx-runtime";
var reorder = function reorder(list, startIndex, endIndex) {
  var result = Array.from(list);
  var _result$splice = result.splice(startIndex, 1),
    _result$splice2 = _slicedToArray(_result$splice, 1),
    removed = _result$splice2[0];
  result.splice(endIndex, 0, removed);
  return result;
};

/** */
export var CanvasLayers = /*#__PURE__*/function (_Component) {
  _inherits(CanvasLayers, _Component);
  var _super = _createSuper(CanvasLayers);
  /** */
  function CanvasLayers(props) {
    var _this;
    _classCallCheck(this, CanvasLayers);
    _this = _super.call(this, props);
    _this.droppableId = uuid();
    _this.onDragEnd = _this.onDragEnd.bind(_assertThisInitialized(_this));
    _this.handleOpacityChange = _this.handleOpacityChange.bind(_assertThisInitialized(_this));
    _this.setLayerVisibility = _this.setLayerVisibility.bind(_assertThisInitialized(_this));
    _this.moveToTop = _this.moveToTop.bind(_assertThisInitialized(_this));
    return _this;
  }

  /** */
  _createClass(CanvasLayers, [{
    key: "handleOpacityChange",
    value: function handleOpacityChange(layerId, value) {
      var _this$props = this.props,
        canvasId = _this$props.canvasId,
        updateLayers = _this$props.updateLayers,
        windowId = _this$props.windowId;
      var payload = _defineProperty({}, layerId, {
        opacity: value / 100.0
      });
      updateLayers(windowId, canvasId, payload);
    }

    /** */
  }, {
    key: "onDragEnd",
    value: function onDragEnd(result) {
      var _this$props2 = this.props,
        canvasId = _this$props2.canvasId,
        layers = _this$props2.layers,
        updateLayers = _this$props2.updateLayers,
        windowId = _this$props2.windowId;
      if (!result.destination) return;
      if (result.destination.droppableId !== this.droppableId) return;
      if (result.source.droppableId !== this.droppableId) return;
      var sortedLayers = reorder(layers.map(function (l) {
        return l.id;
      }), result.source.index, result.destination.index);
      var payload = layers.reduce(function (acc, layer) {
        acc[layer.id] = {
          index: sortedLayers.indexOf(layer.id)
        };
        return acc;
      }, {});
      updateLayers(windowId, canvasId, payload);
    }

    /** */
  }, {
    key: "setLayerVisibility",
    value: function setLayerVisibility(layerId, value) {
      var _this$props3 = this.props,
        canvasId = _this$props3.canvasId,
        updateLayers = _this$props3.updateLayers,
        windowId = _this$props3.windowId;
      var payload = _defineProperty({}, layerId, {
        visibility: value
      });
      updateLayers(windowId, canvasId, payload);
    }

    /** */
  }, {
    key: "moveToTop",
    value: function moveToTop(layerId) {
      var _this$props4 = this.props,
        canvasId = _this$props4.canvasId,
        layers = _this$props4.layers,
        updateLayers = _this$props4.updateLayers,
        windowId = _this$props4.windowId;
      var sortedLayers = reorder(layers.map(function (l) {
        return l.id;
      }), layers.findIndex(function (l) {
        return l.id === layerId;
      }), 0);
      var payload = layers.reduce(function (acc, layer) {
        acc[layer.id] = {
          index: sortedLayers.indexOf(layer.id)
        };
        return acc;
      }, {});
      updateLayers(windowId, canvasId, payload);
    }

    /** @private */
  }, {
    key: "renderLayer",
    value: function renderLayer(resource, index) {
      var _this2 = this;
      var _this$props5 = this.props,
        classes = _this$props5.classes,
        layerMetadata = _this$props5.layerMetadata,
        t = _this$props5.t;
      var _height$width = {
          height: undefined,
          width: 50
        },
        width = _height$width.width,
        height = _height$width.height;
      var layer = _objectSpread({
        opacity: 1,
        visibility: true
      }, (layerMetadata || {})[resource.id]);
      return /*#__PURE__*/_jsxs("div", {
        style: {
          flex: 1
        },
        children: [/*#__PURE__*/_jsxs("div", {
          style: {
            alignItems: 'flex-start',
            display: 'flex'
          },
          children: [/*#__PURE__*/_jsx(IIIFThumbnail, {
            maxHeight: height,
            maxWidth: width,
            resource: resource,
            classes: {
              image: classes.image,
              root: classes.thumbnail
            }
          }), /*#__PURE__*/_jsxs(Typography, {
            className: classes.label,
            component: "div",
            variant: "body1",
            children: [CanvasLayers.getUseableLabel(resource, index), /*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx(MiradorMenuButton, {
                "aria-label": t(layer.visibility ? 'layer_hide' : 'layer_show'),
                edge: "start",
                size: "small",
                onClick: function onClick() {
                  _this2.setLayerVisibility(resource.id, !layer.visibility);
                },
                children: layer.visibility ? /*#__PURE__*/_jsx(VisibilityIcon, {
                  fontSize: "large"
                }) : /*#__PURE__*/_jsx(VisibilityOffIcon, {
                  fontSize: "large"
                })
              }), layer.index !== 0 && /*#__PURE__*/_jsx(MiradorMenuButton, {
                "aria-label": t('layer_moveToTop'),
                size: "small",
                onClick: function onClick() {
                  _this2.moveToTop(resource.id);
                },
                children: /*#__PURE__*/_jsx(MoveToTopIcon, {
                  fontSize: "large"
                })
              })]
            })]
          })]
        }), /*#__PURE__*/_jsxs("div", {
          style: {
            alignItems: 'center',
            display: 'flex'
          },
          children: [/*#__PURE__*/_jsx(Tooltip, {
            title: t('layer_opacity'),
            children: /*#__PURE__*/_jsx(OpacityIcon, {
              className: classes.opacityIcon,
              color: layer.visibility ? 'inherit' : 'disabled',
              fontSize: "medium"
            })
          }), /*#__PURE__*/_jsx(Input, {
            classes: {
              input: classes.opacityInput
            },
            disabled: !layer.visibility,
            value: Math.round(layer.opacity * 100),
            type: "number",
            min: 0,
            max: 100,
            onChange: function onChange(e) {
              return _this2.handleOpacityChange(resource.id, e.target.value);
            },
            endAdornment: /*#__PURE__*/_jsx(InputAdornment, {
              disableTypography: true,
              position: "end",
              children: /*#__PURE__*/_jsx(Typography, {
                variant: "caption",
                children: "%"
              })
            }),
            inputProps: {
              'aria-label': t('layer_opacity')
            }
          }), /*#__PURE__*/_jsx(Slider, {
            className: classes.slider,
            disabled: !layer.visibility,
            value: layer.opacity * 100,
            onChange: function onChange(e, value) {
              return _this2.handleOpacityChange(resource.id, value);
            }
          })]
        })]
      });
    }

    /** @private */
  }, {
    key: "renderDraggableLayer",
    value: function renderDraggableLayer(resource, index) {
      var _this3 = this;
      var _this$props6 = this.props,
        classes = _this$props6.classes,
        t = _this$props6.t;
      return /*#__PURE__*/_jsx(Draggable, {
        draggableId: resource.id,
        index: index,
        children: function children(provided, snapshot) {
          return /*#__PURE__*/_createElement(ListItem, _objectSpread(_objectSpread({
            ref: provided.innerRef
          }, provided.draggableProps), {}, {
            component: "li",
            className: clsx(classes.listItem, _defineProperty({}, classes.dragging, snapshot.isDragging)),
            disableGutters: true,
            key: resource.id
          }), /*#__PURE__*/_jsx("div", _objectSpread(_objectSpread({}, provided.dragHandleProps), {}, {
            className: classes.dragHandle,
            children: /*#__PURE__*/_jsx(Tooltip, {
              title: t('layer_move'),
              children: /*#__PURE__*/_jsx(DragHandleIcon, {
                fontSize: "large"
              })
            })
          })), _this3.renderLayer(resource, index));
        }
      }, resource.id);
    }

    /** */
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;
      var _this$props7 = this.props,
        classes = _this$props7.classes,
        index = _this$props7.index,
        label = _this$props7.label,
        layers = _this$props7.layers,
        t = _this$props7.t,
        totalSize = _this$props7.totalSize;
      return /*#__PURE__*/_jsxs(_Fragment, {
        children: [totalSize > 1 && /*#__PURE__*/_jsx(Typography, {
          className: classes.sectionHeading,
          variant: "overline",
          children: t('annotationCanvasLabel', {
            context: "".concat(index + 1, "/").concat(totalSize),
            label: label
          })
        }), /*#__PURE__*/_jsx(DragDropContext, {
          onDragEnd: this.onDragEnd,
          children: /*#__PURE__*/_jsx(Droppable, {
            droppableId: this.droppableId,
            children: function children(provided, snapshot) {
              return /*#__PURE__*/_jsxs(List, _objectSpread(_objectSpread({
                className: classes.list
              }, provided.droppableProps), {}, {
                ref: provided.innerRef,
                children: [layers && layers.map(function (r, i) {
                  return _this4.renderDraggableLayer(r, i);
                }), provided.placeholder]
              }));
            }
          })
        })]
      });
    }
  }], [{
    key: "getUseableLabel",
    value: /** */
    function getUseableLabel(resource, index) {
      return resource && resource.getLabel && resource.getLabel().length > 0 ? resource.getLabel().getValue() : String(index + 1);
    }
  }]);
  return CanvasLayers;
}(Component);
CanvasLayers.defaultProps = {
  classes: {},
  layerMetadata: undefined
};