var _marked = /*#__PURE__*/_regeneratorRuntime().mark(authSaga);
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
import { all, call, put, select, takeEvery, delay } from 'redux-saga/effects';
import { Utils } from 'manifesto.js';
import flatten from 'lodash/flatten';
import ActionTypes from '../actions/action-types';
import MiradorCanvas from '../../lib/MiradorCanvas';
import { addAuthenticationRequest, resolveAuthenticationRequest, requestAccessToken, resetAuthenticationState } from '../actions';
import { selectInfoResponses, getVisibleCanvases, getWindows, getConfig, getAuth, getAccessTokens } from '../selectors';
import { fetchInfoResponse } from './iiif';

/** */
export function refetchInfoResponsesOnLogout(_ref) {
  var tokenServiceId = _ref.tokenServiceId;
  return /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return delay(2000);
        case 2:
          _context.next = 4;
          return call(refetchInfoResponses, {
            serviceId: tokenServiceId
          });
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })();
}

/**
 * Figure out what info responses could have used the access token service and:
 *   - refetch, if they are currently visible
 *   - throw them out (and lazy re-fetch) otherwise
 */
export function refetchInfoResponses(_ref2) {
  var serviceId = _ref2.serviceId;
  return /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var windows, canvases, visibleImageApiIds, infoResponses, haveThisTokenService, obsoleteInfoResponses;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return select(getWindows);
        case 2:
          windows = _context2.sent;
          _context2.next = 5;
          return all(Object.keys(windows).map(function (windowId) {
            return select(getVisibleCanvases, {
              windowId: windowId
            });
          }));
        case 5:
          canvases = _context2.sent;
          visibleImageApiIds = flatten(flatten(canvases).map(function (canvas) {
            var miradorCanvas = new MiradorCanvas(canvas);
            return miradorCanvas.imageServiceIds;
          }));
          _context2.next = 9;
          return select(selectInfoResponses);
        case 9:
          infoResponses = _context2.sent;
          /** */
          haveThisTokenService = function haveThisTokenService(infoResponse) {
            var services = Utils.getServices(infoResponse);
            return services.some(function (e) {
              var infoTokenService = Utils.getService(e, 'http://iiif.io/api/auth/1/token') || Utils.getService(e, 'http://iiif.io/api/auth/0/token');
              return infoTokenService && infoTokenService.id === serviceId;
            });
          };
          obsoleteInfoResponses = Object.values(infoResponses).filter(function (i) {
            return i.json && haveThisTokenService(i.json);
          });
          _context2.next = 14;
          return all(obsoleteInfoResponses.map(function (_ref3) {
            var infoId = _ref3.id;
            if (visibleImageApiIds.includes(infoId)) {
              return call(fetchInfoResponse, {
                infoId: infoId
              });
            }
            return put({
              infoId: infoId,
              type: ActionTypes.REMOVE_INFO_RESPONSE
            });
          }));
        case 14:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })();
}

/** try to start any non-interactive auth flows */
export function doAuthWorkflow(_ref4) {
  var infoJson = _ref4.infoJson,
    windowId = _ref4.windowId;
  return /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var auths, _yield$select, _yield$select$auth, _yield$select$auth2, _yield$select$auth2$s, serviceProfiles, nonInteractiveAuthFlowProfiles, authService, profileConfig, tokenService;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return select(getAuth);
        case 2:
          auths = _context3.sent;
          _context3.next = 5;
          return select(getConfig);
        case 5:
          _yield$select = _context3.sent;
          _yield$select$auth = _yield$select.auth;
          _yield$select$auth2 = _yield$select$auth === void 0 ? {} : _yield$select$auth;
          _yield$select$auth2$s = _yield$select$auth2.serviceProfiles;
          serviceProfiles = _yield$select$auth2$s === void 0 ? [] : _yield$select$auth2$s;
          nonInteractiveAuthFlowProfiles = serviceProfiles.filter(function (p) {
            return p.external || p.kiosk;
          }); // try to get an untried, non-interactive auth service
          authService = Utils.getServices(infoJson).filter(function (s) {
            return !auths[s.id];
          }).find(function (e) {
            return nonInteractiveAuthFlowProfiles.some(function (p) {
              return p.profile === e.getProfile();
            });
          });
          if (authService) {
            _context3.next = 14;
            break;
          }
          return _context3.abrupt("return");
        case 14:
          profileConfig = nonInteractiveAuthFlowProfiles.find(function (p) {
            return p.profile === authService.getProfile();
          });
          if (!profileConfig.kiosk) {
            _context3.next = 20;
            break;
          }
          _context3.next = 18;
          return put(addAuthenticationRequest(windowId, authService.id, authService.getProfile()));
        case 18:
          _context3.next = 28;
          break;
        case 20:
          if (!profileConfig.external) {
            _context3.next = 28;
            break;
          }
          tokenService = Utils.getService(authService, 'http://iiif.io/api/auth/1/token') || Utils.getService(authService, 'http://iiif.io/api/auth/0/token');
          if (tokenService) {
            _context3.next = 24;
            break;
          }
          return _context3.abrupt("return");
        case 24:
          _context3.next = 26;
          return put(resolveAuthenticationRequest(authService.id, tokenService.id));
        case 26:
          _context3.next = 28;
          return put(requestAccessToken(tokenService.id, authService.id));
        case 28:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  })();
}

/** */
export function rerequestOnAccessTokenFailure(_ref5) {
  var infoJson = _ref5.infoJson,
    windowId = _ref5.windowId,
    tokenServiceId = _ref5.tokenServiceId;
  return /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var authService, accessTokenServices, service;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          if (tokenServiceId) {
            _context4.next = 2;
            break;
          }
          return _context4.abrupt("return");
        case 2:
          // make sure we have an auth service to try
          authService = Utils.getServices(infoJson).find(function (service) {
            var tokenService = Utils.getService(service, 'http://iiif.io/api/auth/1/token') || Utils.getService(service, 'http://iiif.io/api/auth/0/token');
            return tokenService && tokenService.id === tokenServiceId;
          });
          if (authService) {
            _context4.next = 5;
            break;
          }
          return _context4.abrupt("return");
        case 5:
          _context4.next = 7;
          return select(getAccessTokens);
        case 7:
          accessTokenServices = _context4.sent;
          service = accessTokenServices[tokenServiceId];
          if (service && service.success) {
            _context4.next = 11;
            break;
          }
          return _context4.abrupt("return");
        case 11:
          _context4.next = 13;
          return put(requestAccessToken(tokenServiceId, authService.id));
        case 13:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  })();
}

/** */
export function invalidateInvalidAuth(_ref6) {
  var serviceId = _ref6.serviceId;
  return /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var accessTokenServices, authServices, accessTokenService, authService;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return select(getAccessTokens);
        case 2:
          accessTokenServices = _context5.sent;
          _context5.next = 5;
          return select(getAuth);
        case 5:
          authServices = _context5.sent;
          accessTokenService = accessTokenServices[serviceId];
          if (accessTokenService) {
            _context5.next = 9;
            break;
          }
          return _context5.abrupt("return");
        case 9:
          authService = authServices[accessTokenService.authId];
          if (authService) {
            _context5.next = 12;
            break;
          }
          return _context5.abrupt("return");
        case 12:
          if (!accessTokenService.success) {
            _context5.next = 17;
            break;
          }
          _context5.next = 15;
          return put(resetAuthenticationState({
            authServiceId: authService.id,
            tokenServiceId: accessTokenService.id
          }));
        case 15:
          _context5.next = 19;
          break;
        case 17:
          _context5.next = 19;
          return put(resolveAuthenticationRequest(authService.id, accessTokenService.id, {
            ok: false
          }));
        case 19:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  })();
}

/** */
export default function authSaga() {
  return _regeneratorRuntime().wrap(function authSaga$(_context6) {
    while (1) switch (_context6.prev = _context6.next) {
      case 0:
        _context6.next = 2;
        return all([takeEvery(ActionTypes.RECEIVE_DEGRADED_INFO_RESPONSE, rerequestOnAccessTokenFailure), takeEvery(ActionTypes.RECEIVE_ACCESS_TOKEN_FAILURE, invalidateInvalidAuth), takeEvery(ActionTypes.RECEIVE_DEGRADED_INFO_RESPONSE, doAuthWorkflow), takeEvery(ActionTypes.RECEIVE_ACCESS_TOKEN, refetchInfoResponses), takeEvery(ActionTypes.RESET_AUTHENTICATION_STATE, refetchInfoResponsesOnLogout)]);
      case 2:
      case "end":
        return _context6.stop();
    }
  }, _marked);
}