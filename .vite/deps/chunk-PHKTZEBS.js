import {
  __toESM,
  require_react
} from "./chunk-WJ7KPZKQ.js";

// node_modules/@refinedev/devtools-shared/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var c = ((t) => (t.RELOAD = "devtools:reload", t.DEVTOOLS_INIT = "devtools:init", t.DEVTOOLS_ALREADY_CONNECTED = "devtools:already-connected", t.ACTIVITY = "devtools:send-activity", t.DEVTOOLS_ACTIVITY_UPDATE = "devtools:activity-update", t.DEVTOOLS_CONNECTED_APP = "devtools:connected-app", t.DEVTOOLS_DISCONNECTED_APP = "devtools:disconnected-app", t.DEVTOOLS_HIGHLIGHT_IN_MONITOR = "devtools:highlight-in-monitor", t.DEVTOOLS_HIGHLIGHT_IN_MONITOR_ACTION = "devtools:highlight-in-monitor-action", t.DEVTOOLS_LOGIN_SUCCESS = "devtools:login-success", t.DEVTOOLS_DISPLAY_LOGIN_FAILURE = "devtools:display-login-failure", t.DEVTOOLS_LOGIN_FAILURE = "devtools:login-failure", t.DEVTOOLS_RELOAD_AFTER_LOGIN = "devtools:reload-after-login", t.DEVTOOLS_INVALIDATE_QUERY = "devtools:invalidate-query", t.DEVTOOLS_INVALIDATE_QUERY_ACTION = "devtools:invalidate-query-action", t))(c || {});
var T = { useCan: "access-control", useLog: "audit-log", useLogList: "audit-log", useCreate: "data", useCreateMany: "data", useCustom: "data", useCustomMutation: "data", useDelete: "data", useDeleteMany: "data", useInfiniteList: "data", useList: "data", useMany: "data", useOne: "data", useUpdate: "data", useUpdateMany: "data", useForgotPassword: "auth", useGetIdentity: "auth", useIsAuthenticated: "auth", useLogin: "auth", useLogout: "auth", useOnError: "auth", usePermissions: "auth", useRegister: "auth", useUpdatePassword: "auth" };
var L = Object.entries(T).reduce((e, [o, s]) => (e[s] || (e[s] = []), e[s].push(o), e), {});
async function d(e, o, s) {
  if (e.readyState !== e.OPEN) {
    await new Promise((n) => {
      let r = () => {
        e.send(JSON.stringify({ event: o, payload: s })), n(), e.removeEventListener("open", r);
      };
      e.addEventListener("open", r);
    });
    return;
  }
  e.send(JSON.stringify({ event: o, payload: s }));
}
var p = import_react.default.createContext({ __devtools: false, httpUrl: "http://localhost:5001", wsUrl: "ws://localhost:5001", ws: null });
var D = ({ __devtools: e, url: o = ["http://localhost:5001", "ws://localhost:5001"], children: s }) => {
  let n = Array.isArray(o) ? o[0] : o, r = Array.isArray(o) ? o[1] : o.replace(/http(s)?:\/\//, "ws$1://"), [i, y] = import_react.default.useState({ __devtools: e ?? false, httpUrl: n, wsUrl: r, ws: null }), [O, v] = import_react.default.useState(null);
  import_react.default.useEffect(() => {
    let l = null, a = new WebSocket(i.wsUrl);
    return a.addEventListener("open", () => {
      i.__devtools || (l = setTimeout(() => {
        d(a, "devtools:init", { url: window.location.origin });
      }, 300));
    }), v(a), () => {
      l && clearTimeout(l), a.readyState === WebSocket.CONNECTING ? a.addEventListener("open", () => {
        a.close(1e3, window.location.origin);
      }) : a.close(1e3, window.location.origin);
    };
  }, []);
  let E = import_react.default.useMemo(() => ({ ...i, ws: O }), [i, O]);
  return import_react.default.createElement(p.Provider, { value: E }, s);
};
function _(e, o, s) {
  let n = (r) => {
    let { event: i, payload: y } = JSON.parse(r.data);
    o === i && s(y);
  };
  return e.addEventListener("message", n), () => {
    e.removeEventListener("message", n);
  };
}

// node_modules/lodash-es/isObject.js
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_default = isObject;

// node_modules/lodash-es/_freeGlobal.js
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal_default = freeGlobal;

// node_modules/lodash-es/_root.js
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal_default || freeSelf || Function("return this")();
var root_default = root;

// node_modules/lodash-es/now.js
var now = function() {
  return root_default.Date.now();
};
var now_default = now;

// node_modules/lodash-es/_trimmedEndIndex.js
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {
  }
  return index;
}
var trimmedEndIndex_default = trimmedEndIndex;

// node_modules/lodash-es/_baseTrim.js
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex_default(string) + 1).replace(reTrimStart, "") : string;
}
var baseTrim_default = baseTrim;

// node_modules/lodash-es/_Symbol.js
var Symbol = root_default.Symbol;
var Symbol_default = Symbol;

// node_modules/lodash-es/_getRawTag.js
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var nativeObjectToString = objectProto.toString;
var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
  try {
    value[symToStringTag] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
var getRawTag_default = getRawTag;

// node_modules/lodash-es/_objectToString.js
var objectProto2 = Object.prototype;
var nativeObjectToString2 = objectProto2.toString;
function objectToString(value) {
  return nativeObjectToString2.call(value);
}
var objectToString_default = objectToString;

// node_modules/lodash-es/_baseGetTag.js
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag_default(value) : objectToString_default(value);
}
var baseGetTag_default = baseGetTag;

// node_modules/lodash-es/isObjectLike.js
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_default = isObjectLike;

// node_modules/lodash-es/isSymbol.js
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike_default(value) && baseGetTag_default(value) == symbolTag;
}
var isSymbol_default = isSymbol;

// node_modules/lodash-es/toNumber.js
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol_default(value)) {
    return NAN;
  }
  if (isObject_default(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject_default(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim_default(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var toNumber_default = toNumber;

// node_modules/lodash-es/debounce.js
var FUNC_ERROR_TEXT = "Expected a function";
var nativeMax = Math.max;
var nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber_default(wait) || 0;
  if (isObject_default(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber_default(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now_default();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now_default());
  }
  function debounced() {
    var time = now_default(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
var debounce_default = debounce;

export {
  c,
  T,
  d,
  p,
  D,
  _,
  freeGlobal_default,
  root_default,
  Symbol_default,
  baseGetTag_default,
  isObject_default,
  isObjectLike_default,
  isSymbol_default,
  toNumber_default,
  debounce_default
};
//# sourceMappingURL=chunk-PHKTZEBS.js.map
