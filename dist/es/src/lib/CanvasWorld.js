function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import normalizeUrl from 'normalize-url';
import MiradorCanvas from './MiradorCanvas';

/**
 * CanvasWorld
 */
var CanvasWorld = /*#__PURE__*/function () {
  /**
   * @param {Array} canvases - Array of Manifesto:Canvas objects to create a
   * world from.
   */
  function CanvasWorld(canvases, layers) {
    var viewingDirection = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'left-to-right';
    _classCallCheck(this, CanvasWorld);
    this.canvases = canvases.map(function (c) {
      return new MiradorCanvas(c);
    });
    this.layers = layers;
    this.viewingDirection = viewingDirection;
    this._canvasDimensions = null; // eslint-disable-line no-underscore-dangle
  }

  /** */
  _createClass(CanvasWorld, [{
    key: "canvasIds",
    get: function get() {
      return this.canvases.map(function (canvas) {
        return canvas.id;
      });
    }

    /** */
  }, {
    key: "canvasDimensions",
    get: function get() {
      if (this._canvasDimensions) {
        // eslint-disable-line no-underscore-dangle
        return this._canvasDimensions; // eslint-disable-line no-underscore-dangle
      }

      var _this$canvasDirection = _slicedToArray(this.canvasDirection, 2),
        dirX = _this$canvasDirection[0],
        dirY = _this$canvasDirection[1];
      var scale = dirY === 0 ? Math.min.apply(Math, _toConsumableArray(this.canvases.map(function (c) {
        return c.getHeight();
      }))) : Math.min.apply(Math, _toConsumableArray(this.canvases.map(function (c) {
        return c.getWidth();
      })));
      var incX = 0;
      var incY = 0;
      var canvasDims = this.canvases.reduce(function (acc, canvas) {
        var canvasHeight = 0;
        var canvasWidth = 0;
        if (!isNaN(canvas.aspectRatio)) {
          if (dirY === 0) {
            // constant height
            canvasHeight = scale;
            canvasWidth = Math.floor(scale * canvas.aspectRatio);
          } else {
            // constant width
            canvasWidth = scale;
            canvasHeight = Math.floor(scale * (1 / canvas.aspectRatio));
          }
        }
        acc.push({
          canvas: canvas,
          height: canvasHeight,
          width: canvasWidth,
          x: incX,
          y: incY
        });
        incX += dirX * canvasWidth;
        incY += dirY * canvasHeight;
        return acc;
      }, []);
      var worldHeight = dirY === 0 ? scale : Math.abs(incY);
      var worldWidth = dirX === 0 ? scale : Math.abs(incX);
      this._canvasDimensions = canvasDims // eslint-disable-line no-underscore-dangle
      .reduce(function (acc, dims) {
        acc.push(_objectSpread(_objectSpread({}, dims), {}, {
          x: dirX === -1 ? dims.x + worldWidth - dims.width : dims.x,
          y: dirY === -1 ? dims.y + worldHeight - dims.height : dims.y
        }));
        return acc;
      }, []);
      return this._canvasDimensions; // eslint-disable-line no-underscore-dangle
    }

    /**
     * contentResourceToWorldCoordinates - calculates the contentResource coordinates
     * respective to the world.
     */
  }, {
    key: "contentResourceToWorldCoordinates",
    value: function contentResourceToWorldCoordinates(contentResource) {
      var miradorCanvasIndex = this.canvases.findIndex(function (c) {
        return c.imageResources.find(function (r) {
          return r.id === contentResource.id;
        });
      });
      var canvas = this.canvases[miradorCanvasIndex];
      if (!canvas) return [];
      var _this$canvasToWorldCo = this.canvasToWorldCoordinates(canvas.id),
        _this$canvasToWorldCo2 = _slicedToArray(_this$canvasToWorldCo, 4),
        x = _this$canvasToWorldCo2[0],
        y = _this$canvasToWorldCo2[1],
        w = _this$canvasToWorldCo2[2],
        h = _this$canvasToWorldCo2[3];
      var fragmentOffset = canvas.onFragment(contentResource.id);
      if (fragmentOffset) {
        return [x + fragmentOffset[0], y + fragmentOffset[1], fragmentOffset[2], fragmentOffset[3]];
      }
      return [x, y, w, h];
    }

    /** */
  }, {
    key: "canvasToWorldCoordinates",
    value: function canvasToWorldCoordinates(canvasId) {
      var canvasDimensions = this.canvasDimensions.find(function (c) {
        return c.canvas.id === canvasId;
      });
      return [canvasDimensions.x, canvasDimensions.y, canvasDimensions.width, canvasDimensions.height];
    }

    /** */
  }, {
    key: "canvasDirection",
    get: function get() {
      switch (this.viewingDirection) {
        case 'left-to-right':
          return [1, 0];
        case 'right-to-left':
          return [-1, 0];
        case 'top-to-bottom':
          return [0, 1];
        case 'bottom-to-top':
          return [0, -1];
        default:
          return [1, 0];
      }
    }

    /** Get the IIIF content resource for an image */
  }, {
    key: "contentResource",
    value: function contentResource(infoResponseId) {
      var miradorCanvas = this.canvases.find(function (c) {
        return c.imageServiceIds.some(function (id) {
          return id && infoResponseId && normalizeUrl(id, {
            stripAuthentication: false
          }) === normalizeUrl(infoResponseId, {
            stripAuthentication: false
          });
        });
      });
      if (!miradorCanvas) return undefined;
      return miradorCanvas.imageResources.find(function (r) {
        return normalizeUrl(r.getServices()[0].id, {
          stripAuthentication: false
        }) === normalizeUrl(infoResponseId, {
          stripAuthentication: false
        });
      });
    }

    /** @private */
  }, {
    key: "getLayerMetadata",
    value: function getLayerMetadata(contentResource) {
      if (!this.layers) return undefined;
      var miradorCanvas = this.canvases.find(function (c) {
        return c.imageResources.find(function (r) {
          return r.id === contentResource.id;
        });
      });
      if (!miradorCanvas) return undefined;
      var resourceIndex = miradorCanvas.imageResources.findIndex(function (r) {
        return r.id === contentResource.id;
      });
      var layer = this.layers[miradorCanvas.canvas.id];
      var imageResourceLayer = layer && layer[contentResource.id];
      return _objectSpread({
        index: resourceIndex,
        opacity: 1,
        total: miradorCanvas.imageResources.length,
        visibility: true
      }, imageResourceLayer);
    }

    /** */
  }, {
    key: "layerOpacityOfImageResource",
    value: function layerOpacityOfImageResource(contentResource) {
      var layer = this.getLayerMetadata(contentResource);
      if (!layer) return 1;
      if (!layer.visibility) return 0;
      return layer.opacity;
    }

    /** */
  }, {
    key: "layerIndexOfImageResource",
    value: function layerIndexOfImageResource(contentResource) {
      var layer = this.getLayerMetadata(contentResource);
      if (!layer) return undefined;
      return layer.total - layer.index - 1;
    }

    /**
     * offsetByCanvas - calculates the offset for a given canvas target. Currently
     * assumes a horrizontal only layout.
     */
  }, {
    key: "offsetByCanvas",
    value: function offsetByCanvas(canvasTarget) {
      var coordinates = this.canvasToWorldCoordinates(canvasTarget);
      return {
        x: coordinates[0],
        y: coordinates[1]
      };
    }

    /**
     * worldBounds - calculates the "World" bounds. World in this case is canvases
     * lined up horizontally starting from left to right.
     */
  }, {
    key: "worldBounds",
    value: function worldBounds() {
      var worldWidth = Math.max.apply(Math, [0].concat(_toConsumableArray(this.canvasDimensions.map(function (c) {
        return c.x + c.width;
      }))));
      var worldHeight = Math.max.apply(Math, [0].concat(_toConsumableArray(this.canvasDimensions.map(function (c) {
        return c.y + c.height;
      }))));
      return [0, 0, worldWidth, worldHeight];
    }

    /** */
  }, {
    key: "canvasAtPoint",
    value: function canvasAtPoint(point) {
      var canvasDimensions = this.canvasDimensions.find(function (c) {
        return c.x <= point.x && point.x <= c.x + c.width && c.y <= point.y && point.y <= c.y + c.height;
      });
      return canvasDimensions && canvasDimensions.canvas;
    }
  }]);
  return CanvasWorld;
}();
export { CanvasWorld as default };