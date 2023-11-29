var _excluded = ["manifest", "canvasNavigation", "variant"];
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpwardSharp';
import CompanionWindow from '../containers/CompanionWindow';
import IIIFThumbnail from '../containers/IIIFThumbnail';

/** */
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
function Item(_ref) {
  var manifest = _ref.manifest,
    canvasNavigation = _ref.canvasNavigation,
    variant = _ref.variant,
    otherProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsxs(MenuItem, _objectSpread(_objectSpread({
    alignItems: "flex-start",
    button: true,
    component: "li"
  }, otherProps), {}, {
    children: [variant === 'thumbnail' && /*#__PURE__*/_jsx(ListItemIcon, {
      children: /*#__PURE__*/_jsx(IIIFThumbnail, {
        resource: manifest,
        maxHeight: canvasNavigation.height,
        maxWidth: canvasNavigation.width
      })
    }), /*#__PURE__*/_jsx(ListItemText, {
      children: WindowSideBarCollectionPanel.getUseableLabel(manifest)
    })]
  }));
}
/** */
export var WindowSideBarCollectionPanel = /*#__PURE__*/function (_Component) {
  _inherits(WindowSideBarCollectionPanel, _Component);
  var _super = _createSuper(WindowSideBarCollectionPanel);
  function WindowSideBarCollectionPanel() {
    _classCallCheck(this, WindowSideBarCollectionPanel);
    return _super.apply(this, arguments);
  }
  _createClass(WindowSideBarCollectionPanel, [{
    key: "isMultipart",
    value: /** */
    function isMultipart() {
      var collection = this.props.collection;
      if (!collection) return false;
      var behaviors = collection.getProperty('behavior');
      if (Array.isArray(behaviors)) return behaviors.includes('multi-part');
      return behaviors === 'multi-part';
    }

    /** */
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        canvasNavigation = _this$props.canvasNavigation,
        classes = _this$props.classes,
        collectionPath = _this$props.collectionPath,
        collection = _this$props.collection,
        id = _this$props.id,
        isFetching = _this$props.isFetching,
        manifestId = _this$props.manifestId,
        parentCollection = _this$props.parentCollection,
        updateCompanionWindow = _this$props.updateCompanionWindow,
        updateWindow = _this$props.updateWindow,
        t = _this$props.t,
        variant = _this$props.variant,
        windowId = _this$props.windowId;
      return /*#__PURE__*/_jsx(CompanionWindow, {
        title: t(this.isMultipart() ? 'multipartCollection' : 'collection'),
        windowId: windowId,
        id: id,
        titleControls: /*#__PURE__*/_jsxs(_Fragment, {
          children: [parentCollection && /*#__PURE__*/_jsx(List, {
            children: /*#__PURE__*/_jsxs(ListItem, {
              button: true,
              onClick: function onClick() {
                return updateCompanionWindow({
                  collectionPath: collectionPath.slice(0, -1)
                });
              },
              children: [/*#__PURE__*/_jsx(ListItemIcon, {
                children: /*#__PURE__*/_jsx(ArrowUpwardIcon, {
                  fontSize: "large"
                })
              }), /*#__PURE__*/_jsx(ListItemText, {
                primaryTypographyProps: {
                  variant: 'body1'
                },
                children: WindowSideBarCollectionPanel.getUseableLabel(parentCollection)
              })]
            })
          }), /*#__PURE__*/_jsxs(Typography, {
            variant: "h6",
            children: [collection && WindowSideBarCollectionPanel.getUseableLabel(collection), isFetching && /*#__PURE__*/_jsx(Skeleton, {
              className: classes.placeholder,
              variant: "text"
            })]
          })]
        }),
        children: /*#__PURE__*/_jsxs(MenuList, {
          children: [isFetching && /*#__PURE__*/_jsx(MenuItem, {
            children: /*#__PURE__*/_jsxs(ListItemText, {
              children: [/*#__PURE__*/_jsx(Skeleton, {
                className: classes.placeholder,
                variant: "text"
              }), /*#__PURE__*/_jsx(Skeleton, {
                className: classes.placeholder,
                variant: "text"
              }), /*#__PURE__*/_jsx(Skeleton, {
                className: classes.placeholder,
                variant: "text"
              })]
            })
          }), collection && collection.getCollections().map(function (manifest) {
            /** select the new manifest and go back to the normal index */
            var onClick = function onClick() {
              // close collection
              updateCompanionWindow({
                collectionPath: [].concat(_toConsumableArray(collectionPath), [manifest.id])
              });
            };
            return /*#__PURE__*/_jsx(Item, {
              onClick: onClick,
              canvasNavigation: canvasNavigation,
              manifest: manifest,
              variant: variant,
              className: classes.menuItem,
              selected: manifestId === manifest.id
            }, manifest.id);
          }), collection && collection.getManifests().map(function (manifest) {
            /** select the new manifest and go back to the normal index */
            var onClick = function onClick() {
              // select new manifest
              updateWindow({
                canvasId: null,
                collectionPath: collectionPath,
                manifestId: manifest.id
              });
              // close collection
              updateCompanionWindow({
                multipart: false
              });
            };
            return /*#__PURE__*/_jsx(Item, {
              onClick: onClick,
              canvasNavigation: canvasNavigation,
              manifest: manifest,
              variant: variant,
              className: classes.menuItem,
              selected: manifestId === manifest.id
            }, manifest.id);
          })]
        })
      });
    }
  }], [{
    key: "getUseableLabel",
    value: /** */
    function getUseableLabel(resource, index) {
      return resource && resource.getLabel && resource.getLabel().length > 0 ? resource.getLabel().getValue() : resource.id;
    }
  }]);
  return WindowSideBarCollectionPanel;
}(Component);
WindowSideBarCollectionPanel.defaultProps = {
  collection: null,
  collectionPath: [],
  isFetching: false,
  parentCollection: null,
  t: function t(k) {
    return k;
  },
  variant: null
};