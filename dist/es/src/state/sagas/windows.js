function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
var _marked = /*#__PURE__*/_regeneratorRuntime().mark(fetchWindowManifest),
  _marked2 = /*#__PURE__*/_regeneratorRuntime().mark(setCanvasOnNewSequence),
  _marked3 = /*#__PURE__*/_regeneratorRuntime().mark(fetchCollectionManifests),
  _marked4 = /*#__PURE__*/_regeneratorRuntime().mark(setWindowStartingCanvas),
  _marked5 = /*#__PURE__*/_regeneratorRuntime().mark(setWindowDefaultSearchQuery),
  _marked6 = /*#__PURE__*/_regeneratorRuntime().mark(determineAndShowCollectionDialog),
  _marked7 = /*#__PURE__*/_regeneratorRuntime().mark(windowsSaga);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
import { all, call, put, select, takeEvery } from 'redux-saga/effects';
import ActionTypes from '../actions/action-types';
import MiradorManifest from '../../lib/MiradorManifest';
import MiradorCanvas from '../../lib/MiradorCanvas';
import { setContentSearchCurrentAnnotation, selectAnnotation, setWorkspaceViewportPosition, updateWindow, setCanvas, fetchSearch, receiveManifest, fetchInfoResponse, showCollectionDialog } from '../actions';
import { getSearchForWindow, getSearchAnnotationsForCompanionWindow, getCanvasGrouping, getWindow, getManifestoInstance, getCompanionWindowIdsForPosition, getManifestSearchService, getCanvasForAnnotation, getSelectedContentSearchAnnotationIds, getSortedSearchAnnotationsForCompanionWindow, getVisibleCanvasIds, getWorkspace, getElasticLayout, getCanvases, selectInfoResponses, getWindowConfig } from '../selectors';
import { fetchManifests } from './iiif';

/** */
export function fetchWindowManifest(action) {
  var _ref, collectionPath, id, manifestId;
  return _regeneratorRuntime().wrap(function fetchWindowManifest$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _ref = action.payload || action.window, collectionPath = _ref.collectionPath, id = _ref.id, manifestId = _ref.manifestId;
        if (manifestId) {
          _context.next = 3;
          break;
        }
        return _context.abrupt("return");
      case 3:
        if (!action.manifest) {
          _context.next = 8;
          break;
        }
        _context.next = 6;
        return put(receiveManifest(manifestId, action.manifest));
      case 6:
        _context.next = 10;
        break;
      case 8:
        _context.next = 10;
        return call.apply(void 0, [fetchManifests, manifestId].concat(_toConsumableArray(collectionPath || [])));
      case 10:
        _context.next = 12;
        return call(setWindowStartingCanvas, action);
      case 12:
        _context.next = 14;
        return call(setWindowDefaultSearchQuery, action);
      case 14:
        if (collectionPath) {
          _context.next = 17;
          break;
        }
        _context.next = 17;
        return call(setCollectionPath, {
          manifestId: manifestId,
          windowId: action.id || action.window.id
        });
      case 17:
        _context.next = 19;
        return call(determineAndShowCollectionDialog, manifestId, id);
      case 19:
      case "end":
        return _context.stop();
    }
  }, _marked);
}

/** */
export function setCanvasOnNewSequence(action) {
  var windowId, canvases, thunk;
  return _regeneratorRuntime().wrap(function setCanvasOnNewSequence$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        windowId = action.id;
        if (!(!action || !action.payload || !action.payload.sequenceId)) {
          _context2.next = 3;
          break;
        }
        return _context2.abrupt("return");
      case 3:
        _context2.next = 5;
        return select(getCanvases, {
          windowId: windowId
        });
      case 5:
        canvases = _context2.sent;
        if (!(!canvases || !canvases[0] || !canvases[0].id)) {
          _context2.next = 8;
          break;
        }
        return _context2.abrupt("return");
      case 8:
        _context2.next = 10;
        return call(setCanvas, windowId, canvases[0].id);
      case 10:
        thunk = _context2.sent;
        _context2.next = 13;
        return put(thunk);
      case 13:
      case "end":
        return _context2.stop();
    }
  }, _marked2);
}

/** */
export function setCollectionPath(_ref2) {
  var manifestId = _ref2.manifestId,
    windowId = _ref2.windowId;
  return /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var manifestoInstance, partOfs, partOf;
    return _regeneratorRuntime().wrap(function _callee$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return select(getManifestoInstance, {
            manifestId: manifestId
          });
        case 2:
          manifestoInstance = _context3.sent;
          if (!manifestoInstance) {
            _context3.next = 9;
            break;
          }
          partOfs = manifestoInstance.getProperty('partOf');
          partOf = Array.isArray(partOfs) ? partOfs[0] : partOfs;
          if (!(partOf && partOf.id)) {
            _context3.next = 9;
            break;
          }
          _context3.next = 9;
          return put(updateWindow(windowId, {
            collectionPath: [partOf.id]
          }));
        case 9:
        case "end":
          return _context3.stop();
      }
    }, _callee);
  })();
}

/** */
export function fetchCollectionManifests(action) {
  var collectionPath;
  return _regeneratorRuntime().wrap(function fetchCollectionManifests$(_context4) {
    while (1) switch (_context4.prev = _context4.next) {
      case 0:
        collectionPath = action.payload.collectionPath;
        if (collectionPath) {
          _context4.next = 3;
          break;
        }
        return _context4.abrupt("return");
      case 3:
        _context4.next = 5;
        return call.apply(void 0, [fetchManifests].concat(_toConsumableArray(collectionPath)));
      case 5:
      case "end":
        return _context4.stop();
    }
  }, _marked3);
}

/** @private */
export function setWindowStartingCanvas(action) {
  var _ref3, canvasId, canvasIndex, manifestId, windowId, thunk, manifestoInstance, miradorManifest, startCanvas, _thunk;
  return _regeneratorRuntime().wrap(function setWindowStartingCanvas$(_context5) {
    while (1) switch (_context5.prev = _context5.next) {
      case 0:
        _ref3 = action.payload || action.window, canvasId = _ref3.canvasId, canvasIndex = _ref3.canvasIndex, manifestId = _ref3.manifestId;
        windowId = action.id || action.window.id;
        if (!canvasId) {
          _context5.next = 10;
          break;
        }
        _context5.next = 5;
        return call(setCanvas, windowId, canvasId, null, {
          preserveViewport: !!action.payload
        });
      case 5:
        thunk = _context5.sent;
        _context5.next = 8;
        return put(thunk);
      case 8:
        _context5.next = 22;
        break;
      case 10:
        _context5.next = 12;
        return select(getManifestoInstance, {
          manifestId: manifestId
        });
      case 12:
        manifestoInstance = _context5.sent;
        if (!manifestoInstance) {
          _context5.next = 22;
          break;
        }
        // set the startCanvas
        miradorManifest = new MiradorManifest(manifestoInstance);
        startCanvas = miradorManifest.startCanvas || miradorManifest.canvasAt(canvasIndex || 0) || miradorManifest.canvasAt(0);
        if (!startCanvas) {
          _context5.next = 22;
          break;
        }
        _context5.next = 19;
        return call(setCanvas, windowId, startCanvas.id);
      case 19:
        _thunk = _context5.sent;
        _context5.next = 22;
        return put(_thunk);
      case 22:
      case "end":
        return _context5.stop();
    }
  }, _marked4);
}

/** @private */
export function setWindowDefaultSearchQuery(action) {
  var _action$window, windowId, defaultSearchQuery, searchService, companionWindowIds, companionWindowId, searchId;
  return _regeneratorRuntime().wrap(function setWindowDefaultSearchQuery$(_context6) {
    while (1) switch (_context6.prev = _context6.next) {
      case 0:
        if (!(!action.window || !action.window.defaultSearchQuery)) {
          _context6.next = 2;
          break;
        }
        return _context6.abrupt("return");
      case 2:
        _action$window = action.window, windowId = _action$window.id, defaultSearchQuery = _action$window.defaultSearchQuery;
        _context6.next = 5;
        return select(getManifestSearchService, {
          windowId: windowId
        });
      case 5:
        searchService = _context6.sent;
        _context6.next = 8;
        return select(getCompanionWindowIdsForPosition, {
          position: 'left',
          windowId: windowId
        });
      case 8:
        companionWindowIds = _context6.sent;
        companionWindowId = companionWindowIds[0];
        if (!(searchService && companionWindowId)) {
          _context6.next = 14;
          break;
        }
        searchId = searchService && "".concat(searchService.id, "?q=").concat(defaultSearchQuery);
        _context6.next = 14;
        return put(fetchSearch(windowId, companionWindowId, searchId, defaultSearchQuery));
      case 14:
      case "end":
        return _context6.stop();
    }
  }, _marked5);
}

/** @private */
export function getAnnotationsBySearch(state, _ref4) {
  var canvasIds = _ref4.canvasIds,
    companionWindowIds = _ref4.companionWindowIds,
    windowId = _ref4.windowId;
  var annotationBySearch = companionWindowIds.reduce(function (accumulator, companionWindowId) {
    var annotations = getSearchAnnotationsForCompanionWindow(state, {
      companionWindowId: companionWindowId,
      windowId: windowId
    });
    var resourceAnnotations = annotations.resources;
    var hitAnnotation = resourceAnnotations.find(function (r) {
      return canvasIds.includes(r.targetId);
    });
    if (hitAnnotation) accumulator[companionWindowId] = [hitAnnotation.id];
    return accumulator;
  }, {});
  return annotationBySearch;
}

/** @private */
export function setCurrentAnnotationsOnCurrentCanvas(_ref5) {
  var annotationId = _ref5.annotationId,
    windowId = _ref5.windowId,
    visibleCanvases = _ref5.visibleCanvases;
  return /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var searches, companionWindowIds, annotationBySearch;
    return _regeneratorRuntime().wrap(function _callee2$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return select(getSearchForWindow, {
            windowId: windowId
          });
        case 2:
          searches = _context7.sent;
          companionWindowIds = Object.keys(searches || {});
          if (!(companionWindowIds.length === 0)) {
            _context7.next = 6;
            break;
          }
          return _context7.abrupt("return");
        case 6:
          _context7.next = 8;
          return select(getAnnotationsBySearch, {
            canvasIds: visibleCanvases,
            companionWindowIds: companionWindowIds,
            windowId: windowId
          });
        case 8:
          annotationBySearch = _context7.sent;
          _context7.next = 11;
          return all(Object.keys(annotationBySearch).map(function (companionWindowId) {
            return put(setContentSearchCurrentAnnotation(windowId, companionWindowId, annotationBySearch[companionWindowId]));
          }));
        case 11:
          if (!(Object.values(annotationBySearch).length > 0)) {
            _context7.next = 14;
            break;
          }
          _context7.next = 14;
          return put(selectAnnotation(windowId, Object.values(annotationBySearch)[0][0]));
        case 14:
        case "end":
          return _context7.stop();
      }
    }, _callee2);
  })();
}

/** @private */
export function panToFocusedWindow(_ref6) {
  var pan = _ref6.pan,
    windowId = _ref6.windowId;
  return /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var elasticLayout, _ref7, x, y, width, height, _yield$select, _yield$select$viewpor, viewWidth, viewHeight;
    return _regeneratorRuntime().wrap(function _callee3$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          if (pan) {
            _context8.next = 2;
            break;
          }
          return _context8.abrupt("return");
        case 2:
          _context8.next = 4;
          return select(getElasticLayout);
        case 4:
          elasticLayout = _context8.sent;
          _ref7 = elasticLayout[windowId] || {}, x = _ref7.x, y = _ref7.y, width = _ref7.width, height = _ref7.height;
          _context8.next = 8;
          return select(getWorkspace);
        case 8:
          _yield$select = _context8.sent;
          _yield$select$viewpor = _yield$select.viewportPosition;
          viewWidth = _yield$select$viewpor.width;
          viewHeight = _yield$select$viewpor.height;
          _context8.next = 14;
          return put(setWorkspaceViewportPosition({
            x: x + width / 2 - viewWidth / 2,
            y: y + height / 2 - viewHeight / 2
          }));
        case 14:
        case "end":
          return _context8.stop();
      }
    }, _callee3);
  })();
}

/** @private */
export function updateVisibleCanvases(_ref8) {
  var windowId = _ref8.windowId;
  return /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var _yield$select2, canvasId, visibleCanvases;
    return _regeneratorRuntime().wrap(function _callee4$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return select(getWindow, {
            windowId: windowId
          });
        case 2:
          _yield$select2 = _context9.sent;
          canvasId = _yield$select2.canvasId;
          _context9.next = 6;
          return select(getCanvasGrouping, {
            canvasId: canvasId,
            windowId: windowId
          });
        case 6:
          visibleCanvases = _context9.sent;
          _context9.next = 9;
          return put(updateWindow(windowId, {
            visibleCanvases: (visibleCanvases || []).map(function (c) {
              return c.id;
            })
          }));
        case 9:
        case "end":
          return _context9.stop();
      }
    }, _callee4);
  })();
}

/** @private */
export function setCanvasOfFirstSearchResult(_ref9) {
  var companionWindowId = _ref9.companionWindowId,
    windowId = _ref9.windowId;
  return /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var _yield$select3, switchCanvasOnSearch, selectedIds, annotations;
    return _regeneratorRuntime().wrap(function _callee5$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return select(getWindowConfig, {
            windowId: windowId
          });
        case 2:
          _yield$select3 = _context10.sent;
          switchCanvasOnSearch = _yield$select3.switchCanvasOnSearch;
          if (switchCanvasOnSearch) {
            _context10.next = 6;
            break;
          }
          return _context10.abrupt("return");
        case 6:
          _context10.next = 8;
          return select(getSelectedContentSearchAnnotationIds, {
            companionWindowId: companionWindowId,
            windowId: windowId
          });
        case 8:
          selectedIds = _context10.sent;
          if (!(selectedIds.length !== 0)) {
            _context10.next = 11;
            break;
          }
          return _context10.abrupt("return");
        case 11:
          _context10.next = 13;
          return select(getSortedSearchAnnotationsForCompanionWindow, {
            companionWindowId: companionWindowId,
            windowId: windowId
          });
        case 13:
          annotations = _context10.sent;
          if (!(!annotations || annotations.length === 0)) {
            _context10.next = 16;
            break;
          }
          return _context10.abrupt("return");
        case 16:
          _context10.next = 18;
          return put(selectAnnotation(windowId, annotations[0].id));
        case 18:
        case "end":
          return _context10.stop();
      }
    }, _callee5);
  })();
}

/** @private */
export function setCanvasforSelectedAnnotation(_ref10) {
  var annotationId = _ref10.annotationId,
    windowId = _ref10.windowId;
  return /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var canvasIds, canvas, thunk;
    return _regeneratorRuntime().wrap(function _callee6$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return select(getVisibleCanvasIds, {
            windowId: windowId
          });
        case 2:
          canvasIds = _context11.sent;
          _context11.next = 5;
          return select(getCanvasForAnnotation, {
            annotationId: annotationId,
            windowId: windowId
          });
        case 5:
          canvas = _context11.sent;
          if (!(!canvas || canvasIds.includes(canvas.id))) {
            _context11.next = 8;
            break;
          }
          return _context11.abrupt("return");
        case 8:
          _context11.next = 10;
          return call(setCanvas, windowId, canvas.id);
        case 10:
          thunk = _context11.sent;
          _context11.next = 13;
          return put(thunk);
        case 13:
        case "end":
          return _context11.stop();
      }
    }, _callee6);
  })();
}

/** Fetch info responses for the visible canvases */
export function fetchInfoResponses(_ref11) {
  var visibleCanvasIds = _ref11.visibleCanvases,
    windowId = _ref11.windowId;
  return /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
    var canvases, infoResponses, visibleCanvases;
    return _regeneratorRuntime().wrap(function _callee7$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return select(getCanvases, {
            windowId: windowId
          });
        case 2:
          canvases = _context12.sent;
          _context12.next = 5;
          return select(selectInfoResponses);
        case 5:
          infoResponses = _context12.sent;
          visibleCanvases = (canvases || []).filter(function (c) {
            return visibleCanvasIds.includes(c.id);
          });
          _context12.next = 9;
          return all(visibleCanvases.map(function (canvas) {
            var miradorCanvas = new MiradorCanvas(canvas);
            return all(miradorCanvas.iiifImageResources.map(function (imageResource) {
              return !infoResponses[imageResource.getServices()[0].id] && put(fetchInfoResponse({
                imageResource: imageResource,
                windowId: windowId
              }));
            }).filter(Boolean));
          }));
        case 9:
        case "end":
          return _context12.stop();
      }
    }, _callee7);
  })();
}

/** */
export function determineAndShowCollectionDialog(manifestId, windowId) {
  var manifestoInstance;
  return _regeneratorRuntime().wrap(function determineAndShowCollectionDialog$(_context13) {
    while (1) switch (_context13.prev = _context13.next) {
      case 0:
        _context13.next = 2;
        return select(getManifestoInstance, {
          manifestId: manifestId
        });
      case 2:
        manifestoInstance = _context13.sent;
        if (!(manifestoInstance && manifestoInstance.isCollection())) {
          _context13.next = 6;
          break;
        }
        _context13.next = 6;
        return put(showCollectionDialog(manifestId, [], windowId));
      case 6:
      case "end":
        return _context13.stop();
    }
  }, _marked6);
}

/** */
export default function windowsSaga() {
  return _regeneratorRuntime().wrap(function windowsSaga$(_context14) {
    while (1) switch (_context14.prev = _context14.next) {
      case 0:
        _context14.next = 2;
        return all([takeEvery(ActionTypes.ADD_WINDOW, fetchWindowManifest), takeEvery(ActionTypes.UPDATE_WINDOW, fetchWindowManifest), takeEvery(ActionTypes.UPDATE_WINDOW, setCanvasOnNewSequence), takeEvery(ActionTypes.SET_CANVAS, setCurrentAnnotationsOnCurrentCanvas), takeEvery(ActionTypes.SET_CANVAS, fetchInfoResponses), takeEvery(ActionTypes.UPDATE_COMPANION_WINDOW, fetchCollectionManifests), takeEvery(ActionTypes.SET_WINDOW_VIEW_TYPE, updateVisibleCanvases), takeEvery(ActionTypes.RECEIVE_SEARCH, setCanvasOfFirstSearchResult), takeEvery(ActionTypes.SELECT_ANNOTATION, setCanvasforSelectedAnnotation), takeEvery(ActionTypes.FOCUS_WINDOW, panToFocusedWindow)]);
      case 2:
      case "end":
        return _context14.stop();
    }
  }, _marked7);
}