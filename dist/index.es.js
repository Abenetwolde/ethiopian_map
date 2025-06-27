import Ye, { useState as dr, useCallback as $e } from "react";
var z = { exports: {} }, L = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function vr() {
  if (Ae) return L;
  Ae = 1;
  var F = Ye, E = Symbol.for("react.element"), W = Symbol.for("react.fragment"), R = Object.prototype.hasOwnProperty, D = F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, $ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function C(_, c, T) {
    var v, m = {}, g = null, P = null;
    T !== void 0 && (g = "" + T), c.key !== void 0 && (g = "" + c.key), c.ref !== void 0 && (P = c.ref);
    for (v in c) R.call(c, v) && !$.hasOwnProperty(v) && (m[v] = c[v]);
    if (_ && _.defaultProps) for (v in c = _.defaultProps, c) m[v] === void 0 && (m[v] = c[v]);
    return { $$typeof: E, type: _, key: g, ref: P, props: m, _owner: D.current };
  }
  return L.Fragment = W, L.jsx = C, L.jsxs = C, L;
}
var V = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function pr() {
  return Ie || (Ie = 1, process.env.NODE_ENV !== "production" && function() {
    var F = Ye, E = Symbol.for("react.element"), W = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), D = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), _ = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), Y = Symbol.iterator, x = "@@iterator";
    function X(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Y && e[Y] || e[x];
      return typeof r == "function" ? r : null;
    }
    var w = F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function d(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        H("error", e, t);
      }
    }
    function H(e, r, t) {
      {
        var a = w.ReactDebugCurrentFrame, o = a.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var s = t.map(function(i) {
          return String(i);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Z = !1, Q = !1, U = !1, ee = !1, J = !1, O;
    O = Symbol.for("react.module.reference");
    function u(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === R || e === $ || J || e === D || e === T || e === v || ee || e === P || Z || Q || U || typeof e == "object" && e !== null && (e.$$typeof === g || e.$$typeof === m || e.$$typeof === C || e.$$typeof === _ || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === O || e.getModuleId !== void 0));
    }
    function re(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function fe(e) {
      return e.displayName || "Context";
    }
    function j(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case R:
          return "Fragment";
        case W:
          return "Portal";
        case $:
          return "Profiler";
        case D:
          return "StrictMode";
        case T:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var r = e;
            return fe(r) + ".Consumer";
          case C:
            var t = e;
            return fe(t._context) + ".Provider";
          case c:
            return re(e, e.render, "ForwardRef");
          case m:
            var a = e.displayName || null;
            return a !== null ? a : j(e.type) || "Memo";
          case g: {
            var o = e, s = o._payload, i = o._init;
            try {
              return j(i(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, M = 0, ce, de, ve, pe, he, be, ye;
    function me() {
    }
    me.__reactDisabledLog = !0;
    function Me() {
      {
        if (M === 0) {
          ce = console.log, de = console.info, ve = console.warn, pe = console.error, he = console.group, be = console.groupCollapsed, ye = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: me,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        M++;
      }
    }
    function Ne() {
      {
        if (M--, M === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: ce
            }),
            info: S({}, e, {
              value: de
            }),
            warn: S({}, e, {
              value: ve
            }),
            error: S({}, e, {
              value: pe
            }),
            group: S({}, e, {
              value: he
            }),
            groupCollapsed: S({}, e, {
              value: be
            }),
            groupEnd: S({}, e, {
              value: ye
            })
          });
        }
        M < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var te = w.ReactCurrentDispatcher, ae;
    function q(e, r, t) {
      {
        if (ae === void 0)
          try {
            throw Error();
          } catch (o) {
            var a = o.stack.trim().match(/\n( *(at )?)/);
            ae = a && a[1] || "";
          }
        return `
` + ae + e;
      }
    }
    var ne = !1, B;
    {
      var Le = typeof WeakMap == "function" ? WeakMap : Map;
      B = new Le();
    }
    function Ee(e, r) {
      if (!e || ne)
        return "";
      {
        var t = B.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      ne = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = te.current, te.current = null, Me();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (h) {
              a = h;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (h) {
              a = h;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (h) {
            a = h;
          }
          e();
        }
      } catch (h) {
        if (h && a && typeof h.stack == "string") {
          for (var n = h.stack.split(`
`), p = a.stack.split(`
`), l = n.length - 1, f = p.length - 1; l >= 1 && f >= 0 && n[l] !== p[f]; )
            f--;
          for (; l >= 1 && f >= 0; l--, f--)
            if (n[l] !== p[f]) {
              if (l !== 1 || f !== 1)
                do
                  if (l--, f--, f < 0 || n[l] !== p[f]) {
                    var b = `
` + n[l].replace(" at new ", " at ");
                    return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, b), b;
                  }
                while (l >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        ne = !1, te.current = s, Ne(), Error.prepareStackTrace = o;
      }
      var I = e ? e.displayName || e.name : "", k = I ? q(I) : "";
      return typeof e == "function" && B.set(e, k), k;
    }
    function Ve(e, r, t) {
      return Ee(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function K(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ee(e, Ue(e));
      if (typeof e == "string")
        return q(e);
      switch (e) {
        case T:
          return q("Suspense");
        case v:
          return q("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Ve(e.render);
          case m:
            return K(e.type, r, t);
          case g: {
            var a = e, o = a._payload, s = a._init;
            try {
              return K(s(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var N = Object.prototype.hasOwnProperty, _e = {}, ge = w.ReactDebugCurrentFrame;
    function G(e) {
      if (e) {
        var r = e._owner, t = K(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    function Je(e, r, t, a, o) {
      {
        var s = Function.call.bind(N);
        for (var i in e)
          if (s(e, i)) {
            var n = void 0;
            try {
              if (typeof e[i] != "function") {
                var p = Error((a || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              n = e[i](r, i, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (l) {
              n = l;
            }
            n && !(n instanceof Error) && (G(o), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, i, typeof n), G(null)), n instanceof Error && !(n.message in _e) && (_e[n.message] = !0, G(o), d("Failed %s type: %s", t, n.message), G(null));
          }
      }
    }
    var qe = Array.isArray;
    function ie(e) {
      return qe(e);
    }
    function Be(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ke(e) {
      try {
        return Re(e), !1;
      } catch {
        return !0;
      }
    }
    function Re(e) {
      return "" + e;
    }
    function Te(e) {
      if (Ke(e))
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Be(e)), Re(e);
    }
    var xe = w.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, we, Oe;
    function ze(e) {
      if (N.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if (N.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function He(e, r) {
      typeof e.ref == "string" && xe.current;
    }
    function Ze(e, r) {
      {
        var t = function() {
          we || (we = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          Oe || (Oe = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, a, o, s, i) {
      var n = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: E,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return n._store = {}, Object.defineProperty(n._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(n, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(n, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.freeze && (Object.freeze(n.props), Object.freeze(n)), n;
    };
    function rr(e, r, t, a, o) {
      {
        var s, i = {}, n = null, p = null;
        t !== void 0 && (Te(t), n = "" + t), Xe(r) && (Te(r.key), n = "" + r.key), ze(r) && (p = r.ref, He(r, o));
        for (s in r)
          N.call(r, s) && !Ge.hasOwnProperty(s) && (i[s] = r[s]);
        if (e && e.defaultProps) {
          var l = e.defaultProps;
          for (s in l)
            i[s] === void 0 && (i[s] = l[s]);
        }
        if (n || p) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          n && Ze(i, f), p && Qe(i, f);
        }
        return er(e, n, p, o, a, xe.current, i);
      }
    }
    var oe = w.ReactCurrentOwner, je = w.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var r = e._owner, t = K(e.type, e._source, r ? r.type : null);
        je.setExtraStackFrame(t);
      } else
        je.setExtraStackFrame(null);
    }
    var se;
    se = !1;
    function ue(e) {
      return typeof e == "object" && e !== null && e.$$typeof === E;
    }
    function Ce() {
      {
        if (oe.current) {
          var e = j(oe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      return "";
    }
    var Pe = {};
    function ar(e) {
      {
        var r = Ce();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Se(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ar(r);
        if (Pe[t])
          return;
        Pe[t] = !0;
        var a = "";
        e && e._owner && e._owner !== oe.current && (a = " It was passed a child from " + j(e._owner.type) + "."), A(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), A(null);
      }
    }
    function ke(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ie(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            ue(a) && Se(a, r);
          }
        else if (ue(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = X(e);
          if (typeof o == "function" && o !== e.entries)
            for (var s = o.call(e), i; !(i = s.next()).done; )
              ue(i.value) && Se(i.value, r);
        }
      }
    }
    function nr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === m))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = j(r);
          Je(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !se) {
          se = !0;
          var o = j(r);
          d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            A(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    var Fe = {};
    function De(e, r, t, a, o, s) {
      {
        var i = u(e);
        if (!i) {
          var n = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (n += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = tr();
          p ? n += p : n += Ce();
          var l;
          e === null ? l = "null" : ie(e) ? l = "array" : e !== void 0 && e.$$typeof === E ? (l = "<" + (j(e.type) || "Unknown") + " />", n = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, n);
        }
        var f = rr(e, r, t, o, s);
        if (f == null)
          return f;
        if (i) {
          var b = r.children;
          if (b !== void 0)
            if (a)
              if (ie(b)) {
                for (var I = 0; I < b.length; I++)
                  ke(b[I], e);
                Object.freeze && Object.freeze(b);
              } else
                d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ke(b, e);
        }
        if (N.call(r, "key")) {
          var k = j(e), h = Object.keys(r).filter(function(cr) {
            return cr !== "key";
          }), le = h.length > 0 ? "{key: someKey, " + h.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Fe[k + le]) {
            var fr = h.length > 0 ? "{" + h.join(": ..., ") + ": ...}" : "{}";
            d(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, le, k, fr, k), Fe[k + le] = !0;
          }
        }
        return e === R ? ir(f) : nr(f), f;
      }
    }
    function or(e, r, t) {
      return De(e, r, t, !0);
    }
    function sr(e, r, t) {
      return De(e, r, t, !1);
    }
    var ur = sr, lr = or;
    V.Fragment = R, V.jsx = ur, V.jsxs = lr;
  }()), V;
}
var We;
function hr() {
  return We || (We = 1, process.env.NODE_ENV === "production" ? z.exports = vr() : z.exports = pr()), z.exports;
}
var y = hr();
const br = [
  {
    id: "tigray",
    name: "Tigray",
    points: "202.882 11.743 200.309 11.296 193.93 11.403 188.826 9.383 185.105 12.36 182.766 7.894 180.427 7.15 177.875 7.15 175.643 9.383 164.913 12.18 163.203 12.572 161.396 12.679 155.867 6.937 148.106 2.578 146.085 0.771 143.853 4.386 139.964 13.087 138.537 14.805 131.626 11.297 123.333 12.785 120.037 15.124 119.186 17.038 116.499 17.038 113.551 15.656 110.716 16.365 106.003 16.612 102.494 24.268 102.281 27.457 103.238 30.221 101.407 33.683 104.553 36.007 104.856 36.585 107.835 36.958 108.378 37.683 111.006 37.683 116.034 42.368 119.653 42.996 122.548 41.225 126.09 41.111 126.834 42.506 134.547 43.054 139.46 39.283 139.689 36.883 141.289 35.054 143.231 37.797 146.888 38.94 157.058 39.397 161.058 37.226 163.801 39.625 167.343 39.397 168.714 40.54 169.4 46.368 175.257 46.584 178.084 48.481 177.883 53.167 184.027 53.453 185.627 62.023 182.676 63.393 184.255 67.81 184.141 72.308 185.741 73.45 192.712 72.879 194.54 74.199 196.826 73.222 200.482 73.222 200.593 66.388 203.111 62.48 203.453 59.395 199.568 56.995 199.682 47.625 198.197 46.482 198.882 44.196 199.225 38.14 201.625 37.111 201.511 34.369 200.939 33.798 200.597 22.827 196.94 19.97 198.654 16.885 197.168 15.171 201.396 13.8 202.882 11.743",
    // Truncated for brevity
    region: "tigray"
  },
  {
    id: "addis_ababa",
    name: "Addis Ababa",
    points: "167.369 162.955 164.591 165.733 163.425 172.995 171.734 177.838 176.659 178.83 178.862 173.999 180.069 166.726 176.894 162.757 167.369 162.955",
    region: "addis_ababa"
  }
  // Add other regions similarly
], mr = ({
  selectedRegion: F,
  setSelectedRegion: E,
  regions: W = br,
  defaultFillColor: R = "#00C4B4",
  activeFillColor: D = "#40E0D0",
  hoverFillColor: $ = "#40E0D0",
  strokeColor: C = "#808080",
  activeStrokeColor: _ = "#FFFFFF",
  strokeWidth: c = 1,
  activeStrokeWidth: T = 2,
  hoverOpacity: v = 0.9,
  className: m = "flex flex-col lg:flex-row gap-4 p-4",
  svgClassName: g = "w-full h-auto",
  onRegionHover: P,
  onRegionClick: Y,
  tooltipContent: x,
  width: X = "100%",
  height: w = "auto",
  viewBox: d = "0 0 441.853 328.295",
  enableZoom: H = !1,
  zoomLevel: Z = 1,
  customStyles: Q = ""
}) => {
  const [U, ee] = dr(null), J = $e((u) => {
    E((re) => re === u ? null : u), Y?.(u);
  }, [E, Y]), O = $e((u) => {
    ee(u), P?.(u);
  }, [P]);
  return /* @__PURE__ */ y.jsxs("div", { className: m, children: [
    /* @__PURE__ */ y.jsxs("div", { className: "w-full h-full relative", children: [
      /* @__PURE__ */ y.jsxs(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: d,
          className: g,
          width: X,
          height: w,
          style: { transform: H ? `scale(${Z})` : "none" },
          children: [
            /* @__PURE__ */ y.jsx("style", { children: `
              .state {
                fill: ${R};
                stroke: ${C};
                stroke-width: ${c};
                transition: fill 0.3s, stroke 0.3s, opacity 0.3s;
              }
              .state.active {
                fill: ${D};
                stroke: ${_};
                stroke-width: ${T};
              }
              .state:hover {
                cursor: pointer;
                fill: ${$};
                opacity: ${v};
              }
              ${Q}
            ` }),
            W.map((u) => /* @__PURE__ */ y.jsx("g", { className: "state", id: `${u.id}l`, children: u.path ? /* @__PURE__ */ y.jsx(
              "path",
              {
                d: u.path,
                className: `state ${F === u.id ? "active" : ""}`,
                onClick: () => J(u.id),
                onMouseEnter: () => O(u.id),
                onMouseLeave: () => O(null),
                children: x && /* @__PURE__ */ y.jsx("title", { children: x(u.id) })
              }
            ) : /* @__PURE__ */ y.jsx(
              "polygon",
              {
                id: u.id,
                points: u.points,
                className: `state ${F === u.id ? "active" : ""}`,
                onClick: () => J(u.id),
                onMouseEnter: () => O(u.id),
                onMouseLeave: () => O(null),
                children: x && /* @__PURE__ */ y.jsx("title", { children: x(u.id) })
              }
            ) }, u.id))
          ]
        }
      ),
      x && U && /* @__PURE__ */ y.jsx("div", { className: "absolute top-0 left-0 bg-white p-2 rounded shadow", children: x(U) })
    ] }),
    /* @__PURE__ */ y.jsx("div", { className: "mt-4", children: /* @__PURE__ */ y.jsx(
      "button",
      {
        className: "w-fit bg-primary font-bold text-sm text-primary-dark-2 py-1 px-3 rounded-full cursor-pointer",
        onClick: () => {
          E(null), O(null);
        },
        children: "All"
      }
    ) })
  ] });
};
export {
  mr as MapComponent,
  br as demoData
};
