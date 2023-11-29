function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import flatten from 'lodash/flatten';
import flattenDeep from 'lodash/flattenDeep';
import { Canvas, AnnotationPage, Annotation } from 'manifesto.js';
/**
 * MiradorCanvas - adds additional, testable logic around Manifesto's Canvas
 * https://iiif-commons.github.io/manifesto/classes/_canvas_.manifesto.canvas.html
 */
var MiradorCanvas = /*#__PURE__*/function () {
  /**
   * @param {MiradorCanvas} canvas
   */
  function MiradorCanvas(canvas) {
    _classCallCheck(this, MiradorCanvas);
    this.canvas = canvas;
  }

  /** */
  _createClass(MiradorCanvas, [{
    key: "id",
    get: function get() {
      return this.canvas.id;
    }

    /** */
  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.canvas.getWidth();
    }

    /** */
  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.canvas.getHeight();
    }

    /**
     */
  }, {
    key: "aspectRatio",
    get: function get() {
      return this.canvas.getWidth() / this.canvas.getHeight();
    }

    /**
     * Fetches AnnotationList URIs from canvas's otherContent property
     *
     * Supported otherContent types:
     * - Objects having @type property of "sc:AnnotationList" and URI in @id
     * - Strings being the URIs
     */
  }, {
    key: "annotationListUris",
    get: function get() {
      return flatten(new Array(this.canvas.__jsonld.otherContent) // eslint-disable-line no-underscore-dangle
      ).filter(function (otherContent) {
        return otherContent && (typeof otherContent === 'string' || otherContent['@type'] === 'sc:AnnotationList');
      }).map(function (otherContent) {
        return typeof otherContent === 'string' ? otherContent : otherContent['@id'];
      });
    }

    /** */
  }, {
    key: "canvasAnnotationPages",
    get: function get() {
      return flatten(new Array(this.canvas.__jsonld.annotations) // eslint-disable-line no-underscore-dangle
      ).filter(function (annotations) {
        return annotations && annotations.type === 'AnnotationPage';
      });
    }

    /**
     * Will negotiate a v2 or v3 type of resource
     */
  }, {
    key: "imageResource",
    get: function get() {
      return this.imageResources[0];
    }

    /** */
  }, {
    key: "imageResources",
    get: function get() {
      var _this = this;
      var resources = flattenDeep([this.canvas.getImages().map(function (i) {
        return i.getResource();
      }), this.canvas.getContent().map(function (i) {
        return i.getBody();
      })]);
      return flatten(resources.map(function (resource) {
        switch (resource.getProperty('type')) {
          case 'oa:Choice':
            return new Canvas({
              images: flatten([resource.getProperty('default'), resource.getProperty('item')]).map(function (r) {
                return {
                  resource: r
                };
              })
            }, _this.canvas.options).getImages().map(function (i) {
              return i.getResource();
            });
          default:
            return resource;
        }
      }));
    }

    /** */
  }, {
    key: "videoResources",
    get: function get() {
      var resources = flattenDeep([this.canvas.getContent().map(function (i) {
        return i.getBody();
      })]);
      return flatten(resources.filter(function (resource) {
        return resource.getProperty('type') === 'Video';
      }));
    }

    /** */
  }, {
    key: "audioResources",
    get: function get() {
      var resources = flattenDeep([this.canvas.getContent().map(function (i) {
        return i.getBody();
      })]);
      return flatten(resources.filter(function (resource) {
        return resource.getProperty('type') === 'Sound';
      }));
    }

    /** */
  }, {
    key: "v2VttContent",
    get: function get() {
      var resources = flattenDeep([this.canvas.getContent().map(function (i) {
        return i.getBody();
      })]);
      return flatten(resources.filter(function (resource) {
        return resource.getProperty('format') === 'text/vtt';
      }));
    }

    /** IIIF v3 captions are stored as 'supplementing' Annotations rather than in the resource content itself */
  }, {
    key: "v3VttContent",
    get: function get() {
      var _this2 = this;
      var resources = flattenDeep(this.canvasAnnotationPages.map(function (annoPage) {
        var manifestoAnnoPage = new AnnotationPage(annoPage, _this2.canvas.options);
        return manifestoAnnoPage.getItems().map(function (item) {
          var manifestoAnnotation = new Annotation(item, _this2.canvas.options);
          return manifestoAnnotation.getBody();
        });
      }));
      return flatten(resources.filter(function (resource) {
        return resource.getProperty('format') === 'text/vtt';
      }));
    }

    /** */
  }, {
    key: "resourceAnnotations",
    get: function get() {
      return flattenDeep([this.canvas.getImages(), this.canvas.getContent()]);
    }

    /**
     * Returns a given resource Annotation, based on a contained resource or body
     * id
     */
  }, {
    key: "resourceAnnotation",
    value: function resourceAnnotation(id) {
      return this.resourceAnnotations.find(function (anno) {
        return anno.getResource().id === id || flatten(new Array(anno.getBody())).some(function (body) {
          return body.id === id;
        });
      });
    }

    /**
     * Returns the fragment placement values if a resourceAnnotation is placed on
     * a canvas somewhere besides the full extent
     */
  }, {
    key: "onFragment",
    value: function onFragment(id) {
      var resourceAnnotation = this.resourceAnnotation(id);
      if (!resourceAnnotation) return undefined;
      // IIIF v2
      var on = resourceAnnotation.getProperty('on');
      // IIIF v3
      var target = resourceAnnotation.getProperty('target');
      var fragmentMatch = (on || target).match(/xywh=(.*)$/);
      if (!fragmentMatch) return undefined;
      return fragmentMatch[1].split(',').map(function (str) {
        return parseInt(str, 10);
      });
    }

    /** */
  }, {
    key: "iiifImageResources",
    get: function get() {
      return this.imageResources.filter(function (r) {
        return r && r.getServices()[0] && r.getServices()[0].id;
      });
    }

    /** */
  }, {
    key: "imageServiceIds",
    get: function get() {
      return this.iiifImageResources.map(function (r) {
        return r.getServices()[0].id;
      });
    }

    /**
     * Get the canvas service
     */
  }, {
    key: "service",
    get: function get() {
      return this.canvas.__jsonld.service; // eslint-disable-line no-underscore-dangle
    }

    /**
     * Get the canvas label
     */
  }, {
    key: "getLabel",
    value: function getLabel() {
      return this.canvas.getLabel().length > 0 ? this.canvas.getLabel().getValue() : String(this.canvas.index + 1);
    }
  }]);
  return MiradorCanvas;
}();
export { MiradorCanvas as default };