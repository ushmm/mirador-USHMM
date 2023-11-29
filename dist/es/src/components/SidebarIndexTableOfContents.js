var _excluded = ["children", "nodeId"];
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
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import clsx from 'clsx';
import { ScrollTo } from './ScrollTo';

/** */
import { jsx as _jsx } from "react/jsx-runtime";
function getStartCanvasId(node) {
  var jsonld = node.data.__jsonld; // eslint-disable-line no-underscore-dangle
  if (jsonld.startCanvas && typeof jsonld.startCanvas === 'string') {
    return jsonld.startCanvas;
  }
  if (jsonld.start) {
    if (jsonld.start.type === 'Canvas' && typeof jsonld.start.id === 'string') {
      return jsonld.start.id;
    }
    if (jsonld.start.type === 'SpecificResource' && typeof jsonld.start.source === 'string') {
      return jsonld.start.source;
    }
  }
  return node.data.getCanvasIds()[0];
}

/** Traverse through the manifesto tree to find a node with a given id */
function deepFind(treeNode, id) {
  if (treeNode.id === id) {
    return treeNode;
  }
  var result = null;
  if (treeNode.nodes) {
    for (var i = 0; result == null && i < treeNode.nodes.length; i += 1) {
      result = deepFind(treeNode.nodes[i], id);
    }
  }
  return result;
}

/** Wrap <ScrollTo> to remove the nodeId prop required for MUI's TreeView */
var ScrollToForTreeItem = function ScrollToForTreeItem(_ref) {
  var children = _ref.children,
    nodeId = _ref.nodeId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsx(ScrollTo, _objectSpread(_objectSpread({}, props), {}, {
    children: children
  }));
};
/** */
export var SidebarIndexTableOfContents = /*#__PURE__*/function (_Component) {
  _inherits(SidebarIndexTableOfContents, _Component);
  var _super = _createSuper(SidebarIndexTableOfContents);
  /** */
  function SidebarIndexTableOfContents(props) {
    var _this;
    _classCallCheck(this, SidebarIndexTableOfContents);
    _this = _super.call(this, props);
    _this.handleNodeSelect = _this.handleNodeSelect.bind(_assertThisInitialized(_this));
    _this.handleNodeToggle = _this.handleNodeToggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  /** */
  _createClass(SidebarIndexTableOfContents, [{
    key: "handleKeyPressed",
    value: function handleKeyPressed(event, nodeId) {
      var toggleNode = this.props.toggleNode;
      if (event.key === 'Enter') {
        this.selectTreeItem(nodeId);
      }
      if (event.key === ' ' || event.key === 'Spacebar') {
        toggleNode(nodeId);
      }
    }

    /** */
  }, {
    key: "handleNodeSelect",
    value: function handleNodeSelect(_event, nodeId) {
      this.selectTreeItem(nodeId);
    }

    /** */
  }, {
    key: "handleNodeToggle",
    value: function handleNodeToggle(_event, nodeIds) {
      var expandNodes = this.props.expandNodes;
      expandNodes(nodeIds);
    }

    /** */
  }, {
    key: "selectTreeItem",
    value: function selectTreeItem(nodeId) {
      var _this$props = this.props,
        setCanvas = _this$props.setCanvas,
        treeStructure = _this$props.treeStructure,
        windowId = _this$props.windowId;
      var node = deepFind(treeStructure, nodeId);

      // Do not select if there are no canvases listed or it has children
      if (!node.data.getCanvasIds() || node.data.getCanvasIds().length === 0 || node.nodes.length > 0) {
        return;
      }
      var target = getStartCanvasId(node);
      var canvasId = target.indexOf('#') === -1 ? target : target.substr(0, target.indexOf('#'));
      setCanvas(windowId, canvasId);
    }

    /** */
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props,
        classes = _this$props2.classes,
        treeStructure = _this$props2.treeStructure,
        visibleNodeIds = _this$props2.visibleNodeIds,
        expandedNodeIds = _this$props2.expandedNodeIds,
        containerRef = _this$props2.containerRef,
        nodeIdToScrollTo = _this$props2.nodeIdToScrollTo;
      if (!treeStructure) {
        return null;
      }

      /** Render the tree structure recursively */
      var renderTree = function renderTree(node) {
        return /*#__PURE__*/_jsx(ScrollToForTreeItem, {
          containerRef: containerRef,
          nodeId: node.id,
          offsetTop: 96 // offset for the height of the form above
          ,
          scrollTo: nodeIdToScrollTo === node.id,
          children: /*#__PURE__*/_jsx(TreeItem, {
            nodeId: node.id,
            classes: {
              content: classes.content,
              group: classes.group,
              label: classes.label,
              root: classes.treeItemRoot,
              selected: classes.selected
            },
            onKeyDown: function onKeyDown(e) {
              return _this2.handleKeyPressed(e, node.id);
            },
            label: /*#__PURE__*/_jsx("div", {
              className: clsx(_defineProperty({}, classes.visibleNode, visibleNodeIds.indexOf(node.id) !== -1)),
              children: node.label
            }),
            children: Array.isArray(node.nodes) ? node.nodes.map(function (n) {
              return renderTree(n);
            }) : null
          })
        }, node.id);
      };
      return /*#__PURE__*/_jsx(TreeView, {
        className: classes.root,
        defaultCollapseIcon: /*#__PURE__*/_jsx(ExpandMoreIcon, {
          color: "action",
          fontSize: "large"
        }),
        defaultExpandIcon: /*#__PURE__*/_jsx(ChevronRightIcon, {
          color: "action",
          fontSize: "large"
        }),
        defaultEndIcon: null,
        onNodeSelect: this.handleNodeSelect,
        onNodeToggle: this.handleNodeToggle,
        expanded: expandedNodeIds,
        children: Array.isArray(treeStructure.nodes) ? treeStructure.nodes.map(function (n) {
          return renderTree(n);
        }) : null
      });
    }
  }]);
  return SidebarIndexTableOfContents;
}(Component);