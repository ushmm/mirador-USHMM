var _marked = /*#__PURE__*/_regeneratorRuntime().mark(getAccessTokenService),
  _marked2 = /*#__PURE__*/_regeneratorRuntime().mark(fetchManifests),
  _marked3 = /*#__PURE__*/_regeneratorRuntime().mark(iiifSaga);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
import { all, call, put, select, takeEvery } from 'redux-saga/effects';
import { Utils } from 'manifesto.js';
import normalizeUrl from 'normalize-url';
import ActionTypes from '../actions/action-types';
import { receiveManifest, receiveManifestFailure, receiveInfoResponse, receiveInfoResponseFailure, receiveDegradedInfoResponse, receiveSearch, receiveSearchFailure, receiveAnnotation, receiveAnnotationFailure } from '../actions';
import { getManifests, getRequestsConfig, getAccessTokens, selectInfoResponse } from '../selectors';

/** */
function fetchWrapper(url, options, _ref) {
  var success = _ref.success,
    degraded = _ref.degraded,
    failure = _ref.failure;
  return fetch(url, options).then(function (response) {
    return response.json().then(function (json) {
      if (response.status === 401) return (degraded || success)({
        json: json,
        response: response
      });
      if (response.ok) return success({
        json: json,
        response: response
      });
      return failure({
        error: response.statusText,
        json: json,
        response: response
      });
    })["catch"](function (error) {
      return failure({
        error: error,
        response: response
      });
    });
  })["catch"](function (error) {
    return failure({
      error: error
    });
  });
}

/** */
function fetchIiifResource(url, options, _ref2) {
  var success = _ref2.success,
    degraded = _ref2.degraded,
    failure = _ref2.failure;
  return /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var _yield$select, _yield$select$preproc, preprocessors, _yield$select$postpro, postprocessors, reqOptions, action;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return select(getRequestsConfig);
        case 2:
          _yield$select = _context.sent;
          _yield$select$preproc = _yield$select.preprocessors;
          preprocessors = _yield$select$preproc === void 0 ? [] : _yield$select$preproc;
          _yield$select$postpro = _yield$select.postprocessors;
          postprocessors = _yield$select$postpro === void 0 ? [] : _yield$select$postpro;
          _context.prev = 7;
          reqOptions = preprocessors.reduce(function (acc, f) {
            return f(url, acc) || acc;
          }, options);
          _context.next = 11;
          return call(fetchWrapper, url, reqOptions, {
            degraded: degraded,
            failure: failure,
            success: success
          });
        case 11:
          action = _context.sent;
          action = postprocessors.reduce(function (acc, f) {
            return f(url, acc) || acc;
          }, action);
          return _context.abrupt("return", action);
        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](7);
          return _context.abrupt("return", failure({
            error: _context.t0
          }));
        case 19:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[7, 16]]);
  })();
}

/** */
function fetchIiifResourceWithAuth(url, iiifResource, options, _ref3) {
  var degraded = _ref3.degraded,
    failure = _ref3.failure,
    success = _ref3.success;
  return /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var urlOptions, tokenServiceId, tokenService, _yield$call, error, json, response, id, authoritativeTokenService;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          urlOptions = _objectSpread({}, options);
          if (!iiifResource) {
            _context2.next = 7;
            break;
          }
          _context2.next = 4;
          return call(getAccessTokenService, iiifResource);
        case 4:
          tokenService = _context2.sent;
          tokenServiceId = tokenService && tokenService.id;
          if (tokenService && tokenService.json) {
            urlOptions.headers = _objectSpread({
              Authorization: "Bearer ".concat(tokenService.json.accessToken)
            }, options.headers);
          }
        case 7:
          _context2.next = 9;
          return call(fetchIiifResource, url, urlOptions, {
            failure: function failure(arg) {
              return arg;
            },
            success: function success(arg) {
              return arg;
            }
          });
        case 9:
          _yield$call = _context2.sent;
          error = _yield$call.error;
          json = _yield$call.json;
          response = _yield$call.response;
          if (!error) {
            _context2.next = 17;
            break;
          }
          _context2.next = 16;
          return put(failure({
            error: error,
            json: json,
            response: response,
            tokenServiceId: tokenServiceId
          }));
        case 16:
          return _context2.abrupt("return");
        case 17:
          id = json['@id'] || json.id;
          if (!response.ok) {
            _context2.next = 25;
            break;
          }
          if (!(normalizeUrl(id, {
            stripAuthentication: false
          }) === normalizeUrl(url.replace(/info\.json$/, ''), {
            stripAuthentication: false
          }))) {
            _context2.next = 23;
            break;
          }
          _context2.next = 22;
          return put(success({
            json: json,
            response: response,
            tokenServiceId: tokenServiceId
          }));
        case 22:
          return _context2.abrupt("return");
        case 23:
          _context2.next = 29;
          break;
        case 25:
          if (!(response.status !== 401)) {
            _context2.next = 29;
            break;
          }
          _context2.next = 28;
          return put(failure({
            error: error,
            json: json,
            response: response,
            tokenServiceId: tokenServiceId
          }));
        case 28:
          return _context2.abrupt("return");
        case 29:
          _context2.next = 31;
          return call(getAccessTokenService, json);
        case 31:
          authoritativeTokenService = _context2.sent;
          if (!(authoritativeTokenService && authoritativeTokenService.id !== tokenServiceId)) {
            _context2.next = 36;
            break;
          }
          _context2.next = 35;
          return call(fetchIiifResourceWithAuth, url, json, options, {
            degraded: degraded,
            failure: failure,
            success: success
          });
        case 35:
          return _context2.abrupt("return");
        case 36:
          _context2.next = 38;
          return put((degraded || success)({
            json: json,
            response: response,
            tokenServiceId: tokenServiceId
          }));
        case 38:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })();
}

/** */
export function fetchManifest(_ref4) {
  var manifestId = _ref4.manifestId;
  return /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var callbacks, dispatch;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          callbacks = {
            failure: function failure(_ref5) {
              var error = _ref5.error,
                json = _ref5.json,
                response = _ref5.response;
              return receiveManifestFailure(manifestId, typeof error === 'object' ? String(error) : error);
            },
            success: function success(_ref6) {
              var json = _ref6.json,
                response = _ref6.response;
              return receiveManifest(manifestId, json);
            }
          };
          _context3.next = 3;
          return call(fetchIiifResource, manifestId, {}, callbacks);
        case 3:
          dispatch = _context3.sent;
          _context3.next = 6;
          return put(dispatch);
        case 6:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  })();
}

/** @private */
function getAccessTokenService(resource) {
  var manifestoCompatibleResource, services, accessTokens, i, authService, accessTokenService, token;
  return _regeneratorRuntime().wrap(function getAccessTokenService$(_context4) {
    while (1) switch (_context4.prev = _context4.next) {
      case 0:
        manifestoCompatibleResource = resource && resource.__jsonld ? resource : _objectSpread(_objectSpread({}, resource), {}, {
          options: {}
        });
        services = Utils.getServices(manifestoCompatibleResource).filter(function (s) {
          return s.getProfile().match(/http:\/\/iiif.io\/api\/auth\//);
        });
        if (!(services.length === 0)) {
          _context4.next = 4;
          break;
        }
        return _context4.abrupt("return", undefined);
      case 4:
        _context4.next = 6;
        return select(getAccessTokens);
      case 6:
        accessTokens = _context4.sent;
        if (accessTokens) {
          _context4.next = 9;
          break;
        }
        return _context4.abrupt("return", undefined);
      case 9:
        i = 0;
      case 10:
        if (!(i < services.length)) {
          _context4.next = 19;
          break;
        }
        authService = services[i];
        accessTokenService = Utils.getService(authService, 'http://iiif.io/api/auth/1/token') || Utils.getService(authService, 'http://iiif.io/api/auth/0/token');
        token = accessTokenService && accessTokens[accessTokenService.id];
        if (!(token && token.json)) {
          _context4.next = 16;
          break;
        }
        return _context4.abrupt("return", token);
      case 16:
        i += 1;
        _context4.next = 10;
        break;
      case 19:
        return _context4.abrupt("return", undefined);
      case 20:
      case "end":
        return _context4.stop();
    }
  }, _marked);
}

/** @private */
export function fetchInfoResponse(_ref7) {
  var imageResource = _ref7.imageResource,
    infoId = _ref7.infoId,
    windowId = _ref7.windowId;
  return /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var iiifResource, callbacks;
    return _regeneratorRuntime().wrap(function _callee4$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          iiifResource = imageResource;
          if (iiifResource) {
            _context5.next = 5;
            break;
          }
          _context5.next = 4;
          return select(selectInfoResponse, {
            infoId: infoId
          });
        case 4:
          iiifResource = _context5.sent;
        case 5:
          callbacks = {
            degraded: function degraded(_ref8) {
              var json = _ref8.json,
                response = _ref8.response,
                tokenServiceId = _ref8.tokenServiceId;
              return receiveDegradedInfoResponse(infoId, json, response.ok, tokenServiceId, windowId);
            },
            failure: function failure(_ref9) {
              var error = _ref9.error,
                json = _ref9.json,
                response = _ref9.response,
                tokenServiceId = _ref9.tokenServiceId;
              return receiveInfoResponseFailure(infoId, error, tokenServiceId);
            },
            success: function success(_ref10) {
              var json = _ref10.json,
                response = _ref10.response,
                tokenServiceId = _ref10.tokenServiceId;
              return receiveInfoResponse(infoId, json, response.ok, tokenServiceId);
            }
          };
          _context5.next = 8;
          return call(fetchIiifResourceWithAuth, "".concat(infoId.replace(/\/$/, ''), "/info.json"), iiifResource, {}, callbacks);
        case 8:
        case "end":
          return _context5.stop();
      }
    }, _callee4);
  })();
}

/** @private */
export function fetchSearchResponse(_ref11) {
  var windowId = _ref11.windowId,
    companionWindowId = _ref11.companionWindowId,
    query = _ref11.query,
    searchId = _ref11.searchId;
  return /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var callbacks, dispatch;
    return _regeneratorRuntime().wrap(function _callee5$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          callbacks = {
            failure: function failure(_ref12) {
              var error = _ref12.error,
                json = _ref12.json,
                response = _ref12.response;
              return receiveSearchFailure(windowId, companionWindowId, searchId, error);
            },
            success: function success(_ref13) {
              var json = _ref13.json,
                response = _ref13.response;
              return receiveSearch(windowId, companionWindowId, searchId, json);
            }
          };
          _context6.next = 3;
          return call(fetchIiifResource, searchId, {}, callbacks);
        case 3:
          dispatch = _context6.sent;
          _context6.next = 6;
          return put(dispatch);
        case 6:
        case "end":
          return _context6.stop();
      }
    }, _callee5);
  })();
}

/** @private */
export function fetchAnnotation(_ref14) {
  var targetId = _ref14.targetId,
    annotationId = _ref14.annotationId;
  return /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var callbacks, dispatch;
    return _regeneratorRuntime().wrap(function _callee6$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          callbacks = {
            failure: function failure(_ref15) {
              var error = _ref15.error,
                json = _ref15.json,
                response = _ref15.response;
              return receiveAnnotationFailure(targetId, annotationId, error);
            },
            success: function success(_ref16) {
              var json = _ref16.json,
                response = _ref16.response;
              return receiveAnnotation(targetId, annotationId, json);
            }
          };
          _context7.next = 3;
          return call(fetchIiifResource, annotationId, {}, callbacks);
        case 3:
          dispatch = _context7.sent;
          _context7.next = 6;
          return put(dispatch);
        case 6:
        case "end":
          return _context7.stop();
      }
    }, _callee6);
  })();
}

/** */
export function fetchResourceManifest(_ref17) {
  var manifestId = _ref17.manifestId,
    manifestJson = _ref17.manifestJson;
  return /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
    var manifests;
    return _regeneratorRuntime().wrap(function _callee7$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          if (!manifestJson) {
            _context8.next = 4;
            break;
          }
          _context8.next = 3;
          return put(receiveManifest(manifestId, manifestJson));
        case 3:
          return _context8.abrupt("return");
        case 4:
          if (manifestId) {
            _context8.next = 6;
            break;
          }
          return _context8.abrupt("return");
        case 6:
          _context8.next = 8;
          return select(getManifests) || {};
        case 8:
          manifests = _context8.sent;
          if (manifests[manifestId]) {
            _context8.next = 11;
            break;
          }
          return _context8.delegateYield(fetchManifest({
            manifestId: manifestId
          }), "t0", 11);
        case 11:
        case "end":
          return _context8.stop();
      }
    }, _callee7);
  })();
}

/** */
export function fetchManifests() {
  var manifests,
    i,
    manifestId,
    _args9 = arguments;
  return _regeneratorRuntime().wrap(function fetchManifests$(_context9) {
    while (1) switch (_context9.prev = _context9.next) {
      case 0:
        _context9.next = 2;
        return select(getManifests);
      case 2:
        manifests = _context9.sent;
        i = 0;
      case 4:
        if (!(i < _args9.length)) {
          _context9.next = 12;
          break;
        }
        manifestId = i < 0 || _args9.length <= i ? undefined : _args9[i];
        if (manifests[manifestId]) {
          _context9.next = 9;
          break;
        }
        _context9.next = 9;
        return call(fetchManifest, {
          manifestId: manifestId
        });
      case 9:
        i += 1;
        _context9.next = 4;
        break;
      case 12:
      case "end":
        return _context9.stop();
    }
  }, _marked2);
}

/** */
export default function iiifSaga() {
  return _regeneratorRuntime().wrap(function iiifSaga$(_context10) {
    while (1) switch (_context10.prev = _context10.next) {
      case 0:
        _context10.next = 2;
        return all([takeEvery(ActionTypes.REQUEST_MANIFEST, fetchManifest), takeEvery(ActionTypes.REQUEST_INFO_RESPONSE, fetchInfoResponse), takeEvery(ActionTypes.REQUEST_SEARCH, fetchSearchResponse), takeEvery(ActionTypes.REQUEST_ANNOTATION, fetchAnnotation), takeEvery(ActionTypes.ADD_RESOURCE, fetchResourceManifest)]);
      case 2:
      case "end":
        return _context10.stop();
    }
  }, _marked3);
}