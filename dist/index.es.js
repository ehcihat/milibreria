var oi = Object.defineProperty;
var ii = (e, t, r) => t in e ? oi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var St = (e, t, r) => ii(e, typeof t != "symbol" ? t + "" : t, r);
import * as L from "react";
import tt, { forwardRef as ai, useContext as si, Children as ci, isValidElement as qt, cloneElement as Gt } from "react";
function ui(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Nr = { exports: {} }, Ct = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vn;
function li() {
  if (vn) return Ct;
  vn = 1;
  var e = tt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(c, l, f) {
    var d, p = {}, m = null, x = null;
    f !== void 0 && (m = "" + f), l.key !== void 0 && (m = "" + l.key), l.ref !== void 0 && (x = l.ref);
    for (d in l) n.call(l, d) && !i.hasOwnProperty(d) && (p[d] = l[d]);
    if (c && c.defaultProps) for (d in l = c.defaultProps, l) p[d] === void 0 && (p[d] = l[d]);
    return { $$typeof: t, type: c, key: m, ref: x, props: p, _owner: o.current };
  }
  return Ct.Fragment = r, Ct.jsx = a, Ct.jsxs = a, Ct;
}
var Et = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sn;
function fi() {
  return Sn || (Sn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = tt, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), S = Symbol.iterator, g = "@@iterator";
    function h(u) {
      if (u === null || typeof u != "object")
        return null;
      var E = S && u[S] || u[g];
      return typeof E == "function" ? E : null;
    }
    var T = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function k(u) {
      {
        for (var E = arguments.length, P = new Array(E > 1 ? E - 1 : 0), B = 1; B < E; B++)
          P[B - 1] = arguments[B];
        R("error", u, P);
      }
    }
    function R(u, E, P) {
      {
        var B = T.ReactDebugCurrentFrame, te = B.getStackAddendum();
        te !== "" && (E += "%s", P = P.concat([te]));
        var ue = P.map(function(Q) {
          return String(Q);
        });
        ue.unshift("Warning: " + E), Function.prototype.apply.call(console[u], console, ue);
      }
    }
    var C = !1, y = !1, I = !1, A = !1, ae = !1, G;
    G = Symbol.for("react.module.reference");
    function s(u) {
      return !!(typeof u == "string" || typeof u == "function" || u === n || u === i || ae || u === o || u === f || u === d || A || u === x || C || y || I || typeof u == "object" && u !== null && (u.$$typeof === m || u.$$typeof === p || u.$$typeof === a || u.$$typeof === c || u.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      u.$$typeof === G || u.getModuleId !== void 0));
    }
    function $(u, E, P) {
      var B = u.displayName;
      if (B)
        return B;
      var te = E.displayName || E.name || "";
      return te !== "" ? P + "(" + te + ")" : P;
    }
    function M(u) {
      return u.displayName || "Context";
    }
    function j(u) {
      if (u == null)
        return null;
      if (typeof u.tag == "number" && k("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof u == "function")
        return u.displayName || u.name || null;
      if (typeof u == "string")
        return u;
      switch (u) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case f:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case c:
            var E = u;
            return M(E) + ".Consumer";
          case a:
            var P = u;
            return M(P._context) + ".Provider";
          case l:
            return $(u, u.render, "ForwardRef");
          case p:
            var B = u.displayName || null;
            return B !== null ? B : j(u.type) || "Memo";
          case m: {
            var te = u, ue = te._payload, Q = te._init;
            try {
              return j(Q(ue));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, se = 0, ce, me, xe, Ce, w, O, F;
    function W() {
    }
    W.__reactDisabledLog = !0;
    function D() {
      {
        if (se === 0) {
          ce = console.log, me = console.info, xe = console.warn, Ce = console.error, w = console.group, O = console.groupCollapsed, F = console.groupEnd;
          var u = {
            configurable: !0,
            enumerable: !0,
            value: W,
            writable: !0
          };
          Object.defineProperties(console, {
            info: u,
            log: u,
            warn: u,
            error: u,
            group: u,
            groupCollapsed: u,
            groupEnd: u
          });
        }
        se++;
      }
    }
    function K() {
      {
        if (se--, se === 0) {
          var u = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: X({}, u, {
              value: ce
            }),
            info: X({}, u, {
              value: me
            }),
            warn: X({}, u, {
              value: xe
            }),
            error: X({}, u, {
              value: Ce
            }),
            group: X({}, u, {
              value: w
            }),
            groupCollapsed: X({}, u, {
              value: O
            }),
            groupEnd: X({}, u, {
              value: F
            })
          });
        }
        se < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var V = T.ReactCurrentDispatcher, z;
    function Y(u, E, P) {
      {
        if (z === void 0)
          try {
            throw Error();
          } catch (te) {
            var B = te.stack.trim().match(/\n( *(at )?)/);
            z = B && B[1] || "";
          }
        return `
` + z + u;
      }
    }
    var H = !1, q;
    {
      var be = typeof WeakMap == "function" ? WeakMap : Map;
      q = new be();
    }
    function _(u, E) {
      if (!u || H)
        return "";
      {
        var P = q.get(u);
        if (P !== void 0)
          return P;
      }
      var B;
      H = !0;
      var te = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ue;
      ue = V.current, V.current = null, D();
      try {
        if (E) {
          var Q = function() {
            throw Error();
          };
          if (Object.defineProperty(Q.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Q, []);
            } catch (_e) {
              B = _e;
            }
            Reflect.construct(u, [], Q);
          } else {
            try {
              Q.call();
            } catch (_e) {
              B = _e;
            }
            u.call(Q.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_e) {
            B = _e;
          }
          u();
        }
      } catch (_e) {
        if (_e && B && typeof _e.stack == "string") {
          for (var J = _e.stack.split(`
`), Oe = B.stack.split(`
`), ge = J.length - 1, ve = Oe.length - 1; ge >= 1 && ve >= 0 && J[ge] !== Oe[ve]; )
            ve--;
          for (; ge >= 1 && ve >= 0; ge--, ve--)
            if (J[ge] !== Oe[ve]) {
              if (ge !== 1 || ve !== 1)
                do
                  if (ge--, ve--, ve < 0 || J[ge] !== Oe[ve]) {
                    var Ne = `
` + J[ge].replace(" at new ", " at ");
                    return u.displayName && Ne.includes("<anonymous>") && (Ne = Ne.replace("<anonymous>", u.displayName)), typeof u == "function" && q.set(u, Ne), Ne;
                  }
                while (ge >= 1 && ve >= 0);
              break;
            }
        }
      } finally {
        H = !1, V.current = ue, K(), Error.prepareStackTrace = te;
      }
      var it = u ? u.displayName || u.name : "", et = it ? Y(it) : "";
      return typeof u == "function" && q.set(u, et), et;
    }
    function we(u, E, P) {
      return _(u, !1);
    }
    function N(u) {
      var E = u.prototype;
      return !!(E && E.isReactComponent);
    }
    function Re(u, E, P) {
      if (u == null)
        return "";
      if (typeof u == "function")
        return _(u, N(u));
      if (typeof u == "string")
        return Y(u);
      switch (u) {
        case f:
          return Y("Suspense");
        case d:
          return Y("SuspenseList");
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case l:
            return we(u.render);
          case p:
            return Re(u.type, E, P);
          case m: {
            var B = u, te = B._payload, ue = B._init;
            try {
              return Re(ue(te), E, P);
            } catch {
            }
          }
        }
      return "";
    }
    var Me = Object.prototype.hasOwnProperty, Qe = {}, Ze = T.ReactDebugCurrentFrame;
    function Le(u) {
      if (u) {
        var E = u._owner, P = Re(u.type, u._source, E ? E.type : null);
        Ze.setExtraStackFrame(P);
      } else
        Ze.setExtraStackFrame(null);
    }
    function br(u, E, P, B, te) {
      {
        var ue = Function.call.bind(Me);
        for (var Q in u)
          if (ue(u, Q)) {
            var J = void 0;
            try {
              if (typeof u[Q] != "function") {
                var Oe = Error((B || "React class") + ": " + P + " type `" + Q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[Q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Oe.name = "Invariant Violation", Oe;
              }
              J = u[Q](E, Q, B, P, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ge) {
              J = ge;
            }
            J && !(J instanceof Error) && (Le(te), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", B || "React class", P, Q, typeof J), Le(null)), J instanceof Error && !(J.message in Qe) && (Qe[J.message] = !0, Le(te), k("Failed %s type: %s", P, J.message), Le(null));
          }
      }
    }
    var jt = Array.isArray;
    function bt(u) {
      return jt(u);
    }
    function U(u) {
      {
        var E = typeof Symbol == "function" && Symbol.toStringTag, P = E && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return P;
      }
    }
    function Dt(u) {
      try {
        return Bt(u), !1;
      } catch {
        return !0;
      }
    }
    function Bt(u) {
      return "" + u;
    }
    function vt(u) {
      if (Dt(u))
        return k("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", U(u)), Bt(u);
    }
    var nt = T.ReactCurrentOwner, Vo = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ln, fn, vr;
    vr = {};
    function Lo(u) {
      if (Me.call(u, "ref")) {
        var E = Object.getOwnPropertyDescriptor(u, "ref").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return u.ref !== void 0;
    }
    function zo(u) {
      if (Me.call(u, "key")) {
        var E = Object.getOwnPropertyDescriptor(u, "key").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return u.key !== void 0;
    }
    function Wo(u, E) {
      if (typeof u.ref == "string" && nt.current && E && nt.current.stateNode !== E) {
        var P = j(nt.current.type);
        vr[P] || (k('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', j(nt.current.type), u.ref), vr[P] = !0);
      }
    }
    function Uo(u, E) {
      {
        var P = function() {
          ln || (ln = !0, k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        P.isReactWarning = !0, Object.defineProperty(u, "key", {
          get: P,
          configurable: !0
        });
      }
    }
    function Yo(u, E) {
      {
        var P = function() {
          fn || (fn = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        P.isReactWarning = !0, Object.defineProperty(u, "ref", {
          get: P,
          configurable: !0
        });
      }
    }
    var qo = function(u, E, P, B, te, ue, Q) {
      var J = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: u,
        key: E,
        ref: P,
        props: Q,
        // Record the component responsible for creating this element.
        _owner: ue
      };
      return J._store = {}, Object.defineProperty(J._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(J, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: B
      }), Object.defineProperty(J, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: te
      }), Object.freeze && (Object.freeze(J.props), Object.freeze(J)), J;
    };
    function Go(u, E, P, B, te) {
      {
        var ue, Q = {}, J = null, Oe = null;
        P !== void 0 && (vt(P), J = "" + P), zo(E) && (vt(E.key), J = "" + E.key), Lo(E) && (Oe = E.ref, Wo(E, te));
        for (ue in E)
          Me.call(E, ue) && !Vo.hasOwnProperty(ue) && (Q[ue] = E[ue]);
        if (u && u.defaultProps) {
          var ge = u.defaultProps;
          for (ue in ge)
            Q[ue] === void 0 && (Q[ue] = ge[ue]);
        }
        if (J || Oe) {
          var ve = typeof u == "function" ? u.displayName || u.name || "Unknown" : u;
          J && Uo(Q, ve), Oe && Yo(Q, ve);
        }
        return qo(u, J, Oe, te, B, nt.current, Q);
      }
    }
    var Sr = T.ReactCurrentOwner, dn = T.ReactDebugCurrentFrame;
    function ot(u) {
      if (u) {
        var E = u._owner, P = Re(u.type, u._source, E ? E.type : null);
        dn.setExtraStackFrame(P);
      } else
        dn.setExtraStackFrame(null);
    }
    var Cr;
    Cr = !1;
    function Er(u) {
      return typeof u == "object" && u !== null && u.$$typeof === t;
    }
    function pn() {
      {
        if (Sr.current) {
          var u = j(Sr.current.type);
          if (u)
            return `

Check the render method of \`` + u + "`.";
        }
        return "";
      }
    }
    function Ko(u) {
      return "";
    }
    var hn = {};
    function Ho(u) {
      {
        var E = pn();
        if (!E) {
          var P = typeof u == "string" ? u : u.displayName || u.name;
          P && (E = `

Check the top-level render call using <` + P + ">.");
        }
        return E;
      }
    }
    function mn(u, E) {
      {
        if (!u._store || u._store.validated || u.key != null)
          return;
        u._store.validated = !0;
        var P = Ho(E);
        if (hn[P])
          return;
        hn[P] = !0;
        var B = "";
        u && u._owner && u._owner !== Sr.current && (B = " It was passed a child from " + j(u._owner.type) + "."), ot(u), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', P, B), ot(null);
      }
    }
    function gn(u, E) {
      {
        if (typeof u != "object")
          return;
        if (bt(u))
          for (var P = 0; P < u.length; P++) {
            var B = u[P];
            Er(B) && mn(B, E);
          }
        else if (Er(u))
          u._store && (u._store.validated = !0);
        else if (u) {
          var te = h(u);
          if (typeof te == "function" && te !== u.entries)
            for (var ue = te.call(u), Q; !(Q = ue.next()).done; )
              Er(Q.value) && mn(Q.value, E);
        }
      }
    }
    function Xo(u) {
      {
        var E = u.type;
        if (E == null || typeof E == "string")
          return;
        var P;
        if (typeof E == "function")
          P = E.propTypes;
        else if (typeof E == "object" && (E.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        E.$$typeof === p))
          P = E.propTypes;
        else
          return;
        if (P) {
          var B = j(E);
          br(P, u.props, "prop", B, u);
        } else if (E.PropTypes !== void 0 && !Cr) {
          Cr = !0;
          var te = j(E);
          k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", te || "Unknown");
        }
        typeof E.getDefaultProps == "function" && !E.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Jo(u) {
      {
        for (var E = Object.keys(u.props), P = 0; P < E.length; P++) {
          var B = E[P];
          if (B !== "children" && B !== "key") {
            ot(u), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", B), ot(null);
            break;
          }
        }
        u.ref !== null && (ot(u), k("Invalid attribute `ref` supplied to `React.Fragment`."), ot(null));
      }
    }
    var yn = {};
    function bn(u, E, P, B, te, ue) {
      {
        var Q = s(u);
        if (!Q) {
          var J = "";
          (u === void 0 || typeof u == "object" && u !== null && Object.keys(u).length === 0) && (J += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Oe = Ko();
          Oe ? J += Oe : J += pn();
          var ge;
          u === null ? ge = "null" : bt(u) ? ge = "array" : u !== void 0 && u.$$typeof === t ? (ge = "<" + (j(u.type) || "Unknown") + " />", J = " Did you accidentally export a JSX literal instead of a component?") : ge = typeof u, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ge, J);
        }
        var ve = Go(u, E, P, te, ue);
        if (ve == null)
          return ve;
        if (Q) {
          var Ne = E.children;
          if (Ne !== void 0)
            if (B)
              if (bt(Ne)) {
                for (var it = 0; it < Ne.length; it++)
                  gn(Ne[it], u);
                Object.freeze && Object.freeze(Ne);
              } else
                k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              gn(Ne, u);
        }
        if (Me.call(E, "key")) {
          var et = j(u), _e = Object.keys(E).filter(function(ni) {
            return ni !== "key";
          }), xr = _e.length > 0 ? "{key: someKey, " + _e.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!yn[et + xr]) {
            var ri = _e.length > 0 ? "{" + _e.join(": ..., ") + ": ...}" : "{}";
            k(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, xr, et, ri, et), yn[et + xr] = !0;
          }
        }
        return u === n ? Jo(ve) : Xo(ve), ve;
      }
    }
    function Qo(u, E, P) {
      return bn(u, E, P, !0);
    }
    function Zo(u, E, P) {
      return bn(u, E, P, !1);
    }
    var ei = Zo, ti = Qo;
    Et.Fragment = n, Et.jsx = ei, Et.jsxs = ti;
  }()), Et;
}
process.env.NODE_ENV === "production" ? Nr.exports = li() : Nr.exports = fi();
var Ve = Nr.exports, jr = { exports: {} }, Ft = { exports: {} }, re = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cn;
function di() {
  if (Cn) return re;
  Cn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, k = e ? Symbol.for("react.scope") : 60119;
  function R(y) {
    if (typeof y == "object" && y !== null) {
      var I = y.$$typeof;
      switch (I) {
        case t:
          switch (y = y.type, y) {
            case l:
            case f:
            case n:
            case i:
            case o:
            case p:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case c:
                case d:
                case S:
                case x:
                case a:
                  return y;
                default:
                  return I;
              }
          }
        case r:
          return I;
      }
    }
  }
  function C(y) {
    return R(y) === f;
  }
  return re.AsyncMode = l, re.ConcurrentMode = f, re.ContextConsumer = c, re.ContextProvider = a, re.Element = t, re.ForwardRef = d, re.Fragment = n, re.Lazy = S, re.Memo = x, re.Portal = r, re.Profiler = i, re.StrictMode = o, re.Suspense = p, re.isAsyncMode = function(y) {
    return C(y) || R(y) === l;
  }, re.isConcurrentMode = C, re.isContextConsumer = function(y) {
    return R(y) === c;
  }, re.isContextProvider = function(y) {
    return R(y) === a;
  }, re.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, re.isForwardRef = function(y) {
    return R(y) === d;
  }, re.isFragment = function(y) {
    return R(y) === n;
  }, re.isLazy = function(y) {
    return R(y) === S;
  }, re.isMemo = function(y) {
    return R(y) === x;
  }, re.isPortal = function(y) {
    return R(y) === r;
  }, re.isProfiler = function(y) {
    return R(y) === i;
  }, re.isStrictMode = function(y) {
    return R(y) === o;
  }, re.isSuspense = function(y) {
    return R(y) === p;
  }, re.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === n || y === f || y === i || y === o || y === p || y === m || typeof y == "object" && y !== null && (y.$$typeof === S || y.$$typeof === x || y.$$typeof === a || y.$$typeof === c || y.$$typeof === d || y.$$typeof === h || y.$$typeof === T || y.$$typeof === k || y.$$typeof === g);
  }, re.typeOf = R, re;
}
var ne = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var En;
function pi() {
  return En || (En = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, k = e ? Symbol.for("react.scope") : 60119;
    function R(_) {
      return typeof _ == "string" || typeof _ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      _ === n || _ === f || _ === i || _ === o || _ === p || _ === m || typeof _ == "object" && _ !== null && (_.$$typeof === S || _.$$typeof === x || _.$$typeof === a || _.$$typeof === c || _.$$typeof === d || _.$$typeof === h || _.$$typeof === T || _.$$typeof === k || _.$$typeof === g);
    }
    function C(_) {
      if (typeof _ == "object" && _ !== null) {
        var we = _.$$typeof;
        switch (we) {
          case t:
            var N = _.type;
            switch (N) {
              case l:
              case f:
              case n:
              case i:
              case o:
              case p:
                return N;
              default:
                var Re = N && N.$$typeof;
                switch (Re) {
                  case c:
                  case d:
                  case S:
                  case x:
                  case a:
                    return Re;
                  default:
                    return we;
                }
            }
          case r:
            return we;
        }
      }
    }
    var y = l, I = f, A = c, ae = a, G = t, s = d, $ = n, M = S, j = x, X = r, se = i, ce = o, me = p, xe = !1;
    function Ce(_) {
      return xe || (xe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), w(_) || C(_) === l;
    }
    function w(_) {
      return C(_) === f;
    }
    function O(_) {
      return C(_) === c;
    }
    function F(_) {
      return C(_) === a;
    }
    function W(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === t;
    }
    function D(_) {
      return C(_) === d;
    }
    function K(_) {
      return C(_) === n;
    }
    function V(_) {
      return C(_) === S;
    }
    function z(_) {
      return C(_) === x;
    }
    function Y(_) {
      return C(_) === r;
    }
    function H(_) {
      return C(_) === i;
    }
    function q(_) {
      return C(_) === o;
    }
    function be(_) {
      return C(_) === p;
    }
    ne.AsyncMode = y, ne.ConcurrentMode = I, ne.ContextConsumer = A, ne.ContextProvider = ae, ne.Element = G, ne.ForwardRef = s, ne.Fragment = $, ne.Lazy = M, ne.Memo = j, ne.Portal = X, ne.Profiler = se, ne.StrictMode = ce, ne.Suspense = me, ne.isAsyncMode = Ce, ne.isConcurrentMode = w, ne.isContextConsumer = O, ne.isContextProvider = F, ne.isElement = W, ne.isForwardRef = D, ne.isFragment = K, ne.isLazy = V, ne.isMemo = z, ne.isPortal = Y, ne.isProfiler = H, ne.isStrictMode = q, ne.isSuspense = be, ne.isValidElementType = R, ne.typeOf = C;
  }()), ne;
}
var xn;
function qr() {
  return xn || (xn = 1, process.env.NODE_ENV === "production" ? Ft.exports = di() : Ft.exports = pi()), Ft.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var wr, wn;
function hi() {
  if (wn) return wr;
  wn = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, c = 0; c < 10; c++)
        a["_" + String.fromCharCode(c)] = c;
      var l = Object.getOwnPropertyNames(a).map(function(d) {
        return a[d];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        f[d] = d;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return wr = o() ? Object.assign : function(i, a) {
    for (var c, l = n(i), f, d = 1; d < arguments.length; d++) {
      c = Object(arguments[d]);
      for (var p in c)
        t.call(c, p) && (l[p] = c[p]);
      if (e) {
        f = e(c);
        for (var m = 0; m < f.length; m++)
          r.call(c, f[m]) && (l[f[m]] = c[f[m]]);
      }
    }
    return l;
  }, wr;
}
var Tr, Tn;
function Gr() {
  if (Tn) return Tr;
  Tn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Tr = e, Tr;
}
var Rr, Rn;
function io() {
  return Rn || (Rn = 1, Rr = Function.call.bind(Object.prototype.hasOwnProperty)), Rr;
}
var Or, On;
function mi() {
  if (On) return Or;
  On = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Gr(), r = {}, n = io();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, c, l, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in i)
        if (n(i, d)) {
          var p;
          try {
            if (typeof i[d] != "function") {
              var m = Error(
                (l || "React class") + ": " + c + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            p = i[d](a, d, l, c, null, t);
          } catch (S) {
            p = S;
          }
          if (p && !(p instanceof Error) && e(
            (l || "React class") + ": type specification of " + c + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in r)) {
            r[p.message] = !0;
            var x = f ? f() : "";
            e(
              "Failed " + c + " type: " + p.message + (x ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Or = o, Or;
}
var _r, _n;
function gi() {
  if (_n) return _r;
  _n = 1;
  var e = qr(), t = hi(), r = Gr(), n = io(), o = mi(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(c) {
    var l = "Warning: " + c;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return _r = function(c, l) {
    var f = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function p(w) {
      var O = w && (f && w[f] || w[d]);
      if (typeof O == "function")
        return O;
    }
    var m = "<<anonymous>>", x = {
      array: T("array"),
      bigint: T("bigint"),
      bool: T("boolean"),
      func: T("function"),
      number: T("number"),
      object: T("object"),
      string: T("string"),
      symbol: T("symbol"),
      any: k(),
      arrayOf: R,
      element: C(),
      elementType: y(),
      instanceOf: I,
      node: s(),
      objectOf: ae,
      oneOf: A,
      oneOfType: G,
      shape: M,
      exact: j
    };
    function S(w, O) {
      return w === O ? w !== 0 || 1 / w === 1 / O : w !== w && O !== O;
    }
    function g(w, O) {
      this.message = w, this.data = O && typeof O == "object" ? O : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function h(w) {
      if (process.env.NODE_ENV !== "production")
        var O = {}, F = 0;
      function W(K, V, z, Y, H, q, be) {
        if (Y = Y || m, q = q || z, be !== r) {
          if (l) {
            var _ = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw _.name = "Invariant Violation", _;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var we = Y + ":" + z;
            !O[we] && // Avoid spamming the console because they are often not actionable except for lib authors
            F < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + q + "` prop on `" + Y + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), O[we] = !0, F++);
          }
        }
        return V[z] == null ? K ? V[z] === null ? new g("The " + H + " `" + q + "` is marked as required " + ("in `" + Y + "`, but its value is `null`.")) : new g("The " + H + " `" + q + "` is marked as required in " + ("`" + Y + "`, but its value is `undefined`.")) : null : w(V, z, Y, H, q);
      }
      var D = W.bind(null, !1);
      return D.isRequired = W.bind(null, !0), D;
    }
    function T(w) {
      function O(F, W, D, K, V, z) {
        var Y = F[W], H = ce(Y);
        if (H !== w) {
          var q = me(Y);
          return new g(
            "Invalid " + K + " `" + V + "` of type " + ("`" + q + "` supplied to `" + D + "`, expected ") + ("`" + w + "`."),
            { expectedType: w }
          );
        }
        return null;
      }
      return h(O);
    }
    function k() {
      return h(a);
    }
    function R(w) {
      function O(F, W, D, K, V) {
        if (typeof w != "function")
          return new g("Property `" + V + "` of component `" + D + "` has invalid PropType notation inside arrayOf.");
        var z = F[W];
        if (!Array.isArray(z)) {
          var Y = ce(z);
          return new g("Invalid " + K + " `" + V + "` of type " + ("`" + Y + "` supplied to `" + D + "`, expected an array."));
        }
        for (var H = 0; H < z.length; H++) {
          var q = w(z, H, D, K, V + "[" + H + "]", r);
          if (q instanceof Error)
            return q;
        }
        return null;
      }
      return h(O);
    }
    function C() {
      function w(O, F, W, D, K) {
        var V = O[F];
        if (!c(V)) {
          var z = ce(V);
          return new g("Invalid " + D + " `" + K + "` of type " + ("`" + z + "` supplied to `" + W + "`, expected a single ReactElement."));
        }
        return null;
      }
      return h(w);
    }
    function y() {
      function w(O, F, W, D, K) {
        var V = O[F];
        if (!e.isValidElementType(V)) {
          var z = ce(V);
          return new g("Invalid " + D + " `" + K + "` of type " + ("`" + z + "` supplied to `" + W + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return h(w);
    }
    function I(w) {
      function O(F, W, D, K, V) {
        if (!(F[W] instanceof w)) {
          var z = w.name || m, Y = Ce(F[W]);
          return new g("Invalid " + K + " `" + V + "` of type " + ("`" + Y + "` supplied to `" + D + "`, expected ") + ("instance of `" + z + "`."));
        }
        return null;
      }
      return h(O);
    }
    function A(w) {
      if (!Array.isArray(w))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function O(F, W, D, K, V) {
        for (var z = F[W], Y = 0; Y < w.length; Y++)
          if (S(z, w[Y]))
            return null;
        var H = JSON.stringify(w, function(be, _) {
          var we = me(_);
          return we === "symbol" ? String(_) : _;
        });
        return new g("Invalid " + K + " `" + V + "` of value `" + String(z) + "` " + ("supplied to `" + D + "`, expected one of " + H + "."));
      }
      return h(O);
    }
    function ae(w) {
      function O(F, W, D, K, V) {
        if (typeof w != "function")
          return new g("Property `" + V + "` of component `" + D + "` has invalid PropType notation inside objectOf.");
        var z = F[W], Y = ce(z);
        if (Y !== "object")
          return new g("Invalid " + K + " `" + V + "` of type " + ("`" + Y + "` supplied to `" + D + "`, expected an object."));
        for (var H in z)
          if (n(z, H)) {
            var q = w(z, H, D, K, V + "." + H, r);
            if (q instanceof Error)
              return q;
          }
        return null;
      }
      return h(O);
    }
    function G(w) {
      if (!Array.isArray(w))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var O = 0; O < w.length; O++) {
        var F = w[O];
        if (typeof F != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + xe(F) + " at index " + O + "."
          ), a;
      }
      function W(D, K, V, z, Y) {
        for (var H = [], q = 0; q < w.length; q++) {
          var be = w[q], _ = be(D, K, V, z, Y, r);
          if (_ == null)
            return null;
          _.data && n(_.data, "expectedType") && H.push(_.data.expectedType);
        }
        var we = H.length > 0 ? ", expected one of type [" + H.join(", ") + "]" : "";
        return new g("Invalid " + z + " `" + Y + "` supplied to " + ("`" + V + "`" + we + "."));
      }
      return h(W);
    }
    function s() {
      function w(O, F, W, D, K) {
        return X(O[F]) ? null : new g("Invalid " + D + " `" + K + "` supplied to " + ("`" + W + "`, expected a ReactNode."));
      }
      return h(w);
    }
    function $(w, O, F, W, D) {
      return new g(
        (w || "React class") + ": " + O + " type `" + F + "." + W + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + D + "`."
      );
    }
    function M(w) {
      function O(F, W, D, K, V) {
        var z = F[W], Y = ce(z);
        if (Y !== "object")
          return new g("Invalid " + K + " `" + V + "` of type `" + Y + "` " + ("supplied to `" + D + "`, expected `object`."));
        for (var H in w) {
          var q = w[H];
          if (typeof q != "function")
            return $(D, K, V, H, me(q));
          var be = q(z, H, D, K, V + "." + H, r);
          if (be)
            return be;
        }
        return null;
      }
      return h(O);
    }
    function j(w) {
      function O(F, W, D, K, V) {
        var z = F[W], Y = ce(z);
        if (Y !== "object")
          return new g("Invalid " + K + " `" + V + "` of type `" + Y + "` " + ("supplied to `" + D + "`, expected `object`."));
        var H = t({}, F[W], w);
        for (var q in H) {
          var be = w[q];
          if (n(w, q) && typeof be != "function")
            return $(D, K, V, q, me(be));
          if (!be)
            return new g(
              "Invalid " + K + " `" + V + "` key `" + q + "` supplied to `" + D + "`.\nBad object: " + JSON.stringify(F[W], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(w), null, "  ")
            );
          var _ = be(z, q, D, K, V + "." + q, r);
          if (_)
            return _;
        }
        return null;
      }
      return h(O);
    }
    function X(w) {
      switch (typeof w) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !w;
        case "object":
          if (Array.isArray(w))
            return w.every(X);
          if (w === null || c(w))
            return !0;
          var O = p(w);
          if (O) {
            var F = O.call(w), W;
            if (O !== w.entries) {
              for (; !(W = F.next()).done; )
                if (!X(W.value))
                  return !1;
            } else
              for (; !(W = F.next()).done; ) {
                var D = W.value;
                if (D && !X(D[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function se(w, O) {
      return w === "symbol" ? !0 : O ? O["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && O instanceof Symbol : !1;
    }
    function ce(w) {
      var O = typeof w;
      return Array.isArray(w) ? "array" : w instanceof RegExp ? "object" : se(O, w) ? "symbol" : O;
    }
    function me(w) {
      if (typeof w > "u" || w === null)
        return "" + w;
      var O = ce(w);
      if (O === "object") {
        if (w instanceof Date)
          return "date";
        if (w instanceof RegExp)
          return "regexp";
      }
      return O;
    }
    function xe(w) {
      var O = me(w);
      switch (O) {
        case "array":
        case "object":
          return "an " + O;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + O;
        default:
          return O;
      }
    }
    function Ce(w) {
      return !w.constructor || !w.constructor.name ? m : w.constructor.name;
    }
    return x.checkPropTypes = o, x.resetWarningCache = o.resetWarningCache, x.PropTypes = x, x;
  }, _r;
}
var $r, $n;
function yi() {
  if ($n) return $r;
  $n = 1;
  var e = Gr();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, $r = function() {
    function n(a, c, l, f, d, p) {
      if (p !== e) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, $r;
}
if (process.env.NODE_ENV !== "production") {
  var bi = qr(), vi = !0;
  jr.exports = gi()(bi.isElement, vi);
} else
  jr.exports = yi()();
var Si = jr.exports;
const v = /* @__PURE__ */ ui(Si);
function ao(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = ao(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function je() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = ao(e)) && (n && (n += " "), n += t);
  return n;
}
function Qt(e, t) {
  const r = {
    ...t
  };
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      const o = n;
      if (o === "components" || o === "slots")
        r[o] = {
          ...e[o],
          ...r[o]
        };
      else if (o === "componentsProps" || o === "slotProps") {
        const i = e[o], a = t[o];
        if (!a)
          r[o] = i || {};
        else if (!i)
          r[o] = a;
        else {
          r[o] = {
            ...a
          };
          for (const c in i)
            if (Object.prototype.hasOwnProperty.call(i, c)) {
              const l = c;
              r[o][l] = Qt(i[l], a[l]);
            }
        }
      } else r[o] === void 0 && (r[o] = e[o]);
    }
  return r;
}
function so(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let a = "", c = !0;
    for (let l = 0; l < i.length; l += 1) {
      const f = i[l];
      f && (a += (c === !0 ? "" : " ") + t(f), c = !1, r && r[f] && (a += " " + r[f]));
    }
    n[o] = a;
  }
  return n;
}
function He(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let r = 1; r < arguments.length; r += 1)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
function Ci(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function Kr(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), Ci(e, t, r);
}
function Ei(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Xe(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Xe(Ei(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : He(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : He(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const xi = (e) => {
  const t = Xe(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, Tt = (e, t) => {
  try {
    return xi(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function nr(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function co(e) {
  e = Xe(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), a = (f, d = (f + r / 30) % 12) => o - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let c = "rgb";
  const l = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (c += "a", l.push(t[3])), nr({
    type: c,
    values: l
  });
}
function Dr(e) {
  e = Xe(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Xe(co(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Pn(e, t) {
  const r = Dr(e), n = Dr(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function dt(e, t) {
  return e = Xe(e), t = Kr(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, nr(e);
}
function Vt(e, t, r) {
  try {
    return dt(e, t);
  } catch {
    return e;
  }
}
function Hr(e, t) {
  if (e = Xe(e), t = Kr(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return nr(e);
}
function le(e, t, r) {
  try {
    return Hr(e, t);
  } catch {
    return e;
  }
}
function Xr(e, t) {
  if (e = Xe(e), t = Kr(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return nr(e);
}
function fe(e, t, r) {
  try {
    return Xr(e, t);
  } catch {
    return e;
  }
}
function wi(e, t = 0.15) {
  return Dr(e) > 0.5 ? Hr(e, t) : Xr(e, t);
}
function Lt(e, t, r) {
  try {
    return wi(e, t);
  } catch {
    return e;
  }
}
function Ti(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const uo = (e) => Ti(e) && e !== "classes";
function $e(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : He(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ge(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function lo(e) {
  if (!Ge(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = lo(e[r]);
  }), t;
}
function Ae(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return Ge(e) && Ge(t) && Object.keys(t).forEach((o) => {
    Ge(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Ge(e[o]) ? n[o] = Ae(e[o], t[o], r) : r.clone ? n[o] = Ge(t[o]) ? lo(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
function Ot(e, t) {
  return t ? Ae(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Je = process.env.NODE_ENV !== "production" ? v.oneOfType([v.number, v.string, v.object, v.array]) : {};
function Ri(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, o) => {
    var a, c;
    const i = /min-width:\s*([0-9.]+)/;
    return +(((a = n.match(i)) == null ? void 0 : a[1]) || 0) - +(((c = o.match(i)) == null ? void 0 : c[1]) || 0);
  });
  return r.length ? r.reduce((n, o) => {
    const i = t[o];
    return delete n[o], n[o] = i, n;
  }, {
    ...t
  }) : t;
}
function Oi(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function _i(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : He(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function $i(e) {
  const t = (i, a) => i.replace("@media", a ? `@container ${a}` : "@container");
  function r(i, a) {
    i.up = (...c) => t(e.breakpoints.up(...c), a), i.down = (...c) => t(e.breakpoints.down(...c), a), i.between = (...c) => t(e.breakpoints.between(...c), a), i.only = (...c) => t(e.breakpoints.only(...c), a), i.not = (...c) => {
      const l = t(e.breakpoints.not(...c), a);
      return l.includes("not all and") ? l.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : l;
    };
  }
  const n = {}, o = (i) => (r(n, i), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const or = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, kn = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${or[e]}px)`
}, Pi = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : or[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function Ke(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || kn;
    return t.reduce((a, c, l) => (a[i.up(i.keys[l])] = r(t[l]), a), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || kn;
    return Object.keys(t).reduce((a, c) => {
      if (Oi(i.keys, c)) {
        const l = _i(n.containerQueries ? n : Pi, c);
        l && (a[l] = r(t[c], c));
      } else if (Object.keys(i.values || or).includes(c)) {
        const l = i.up(c);
        a[l] = r(t[c], c);
      } else {
        const l = c;
        a[l] = t[l];
      }
      return a;
    }, {});
  }
  return r(t);
}
function ki(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function Ai(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function ir(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function Zt(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = ir(e, r) || n, t && (o = t(o, n, e)), o;
}
function ye(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const c = a[t], l = a.theme, f = ir(l, n) || {};
    return Ke(a, c, (p) => {
      let m = Zt(f, o, p);
      return p === m && typeof p == "string" && (m = Zt(f, o, `${t}${p === "default" ? "" : $e(p)}`, p)), r === !1 ? m : {
        [r]: m
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Je
  } : {}, i.filterProps = [t], i;
}
function Ii(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const Mi = {
  m: "margin",
  p: "padding"
}, Ni = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, An = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, ji = Ii((e) => {
  if (e.length > 2)
    if (An[e])
      e = An[e];
    else
      return [e];
  const [t, r] = e.split(""), n = Mi[t], o = Ni[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), ar = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], sr = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Di = [...ar, ...sr];
function At(e, t, r, n) {
  const o = ir(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), typeof o == "string" ? `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const a = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > o.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${a} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const c = o[a];
    return i >= 0 ? c : typeof c == "number" ? -c : `-${c}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Jr(e) {
  return At(e, "spacing", 8, "spacing");
}
function It(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Bi(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = It(t, r), n), {});
}
function Fi(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = ji(r), i = Bi(o, n), a = e[r];
  return Ke(e, a, i);
}
function fo(e, t) {
  const r = Jr(e.theme);
  return Object.keys(e).map((n) => Fi(e, t, n, r)).reduce(Ot, {});
}
function pe(e) {
  return fo(e, ar);
}
pe.propTypes = process.env.NODE_ENV !== "production" ? ar.reduce((e, t) => (e[t] = Je, e), {}) : {};
pe.filterProps = ar;
function he(e) {
  return fo(e, sr);
}
he.propTypes = process.env.NODE_ENV !== "production" ? sr.reduce((e, t) => (e[t] = Je, e), {}) : {};
he.filterProps = sr;
process.env.NODE_ENV !== "production" && Di.reduce((e, t) => (e[t] = Je, e), {});
function cr(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? Ot(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function Be(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Fe(e, t) {
  return ye({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Vi = Fe("border", Be), Li = Fe("borderTop", Be), zi = Fe("borderRight", Be), Wi = Fe("borderBottom", Be), Ui = Fe("borderLeft", Be), Yi = Fe("borderColor"), qi = Fe("borderTopColor"), Gi = Fe("borderRightColor"), Ki = Fe("borderBottomColor"), Hi = Fe("borderLeftColor"), Xi = Fe("outline", Be), Ji = Fe("outlineColor"), ur = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = At(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: It(t, n)
    });
    return Ke(e, e.borderRadius, r);
  }
  return null;
};
ur.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Je
} : {};
ur.filterProps = ["borderRadius"];
cr(Vi, Li, zi, Wi, Ui, Yi, qi, Gi, Ki, Hi, ur, Xi, Ji);
const lr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = At(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: It(t, n)
    });
    return Ke(e, e.gap, r);
  }
  return null;
};
lr.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Je
} : {};
lr.filterProps = ["gap"];
const fr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = At(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: It(t, n)
    });
    return Ke(e, e.columnGap, r);
  }
  return null;
};
fr.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Je
} : {};
fr.filterProps = ["columnGap"];
const dr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = At(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: It(t, n)
    });
    return Ke(e, e.rowGap, r);
  }
  return null;
};
dr.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Je
} : {};
dr.filterProps = ["rowGap"];
const Qi = ye({
  prop: "gridColumn"
}), Zi = ye({
  prop: "gridRow"
}), ea = ye({
  prop: "gridAutoFlow"
}), ta = ye({
  prop: "gridAutoColumns"
}), ra = ye({
  prop: "gridAutoRows"
}), na = ye({
  prop: "gridTemplateColumns"
}), oa = ye({
  prop: "gridTemplateRows"
}), ia = ye({
  prop: "gridTemplateAreas"
}), aa = ye({
  prop: "gridArea"
});
cr(lr, fr, dr, Qi, Zi, ea, ta, ra, na, oa, ia, aa);
function pt(e, t) {
  return t === "grey" ? t : e;
}
const sa = ye({
  prop: "color",
  themeKey: "palette",
  transform: pt
}), ca = ye({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: pt
}), ua = ye({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: pt
});
cr(sa, ca, ua);
function ke(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const la = ye({
  prop: "width",
  transform: ke
}), Qr = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, i, a, c, l;
      const n = ((a = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : a[r]) || or[r];
      return n ? ((l = (c = e.theme) == null ? void 0 : c.breakpoints) == null ? void 0 : l.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: ke(r)
      };
    };
    return Ke(e, e.maxWidth, t);
  }
  return null;
};
Qr.filterProps = ["maxWidth"];
const fa = ye({
  prop: "minWidth",
  transform: ke
}), da = ye({
  prop: "height",
  transform: ke
}), pa = ye({
  prop: "maxHeight",
  transform: ke
}), ha = ye({
  prop: "minHeight",
  transform: ke
});
ye({
  prop: "size",
  cssProperty: "width",
  transform: ke
});
ye({
  prop: "size",
  cssProperty: "height",
  transform: ke
});
const ma = ye({
  prop: "boxSizing"
});
cr(la, Qr, fa, da, pa, ha, ma);
const pr = {
  // borders
  border: {
    themeKey: "borders",
    transform: Be
  },
  borderTop: {
    themeKey: "borders",
    transform: Be
  },
  borderRight: {
    themeKey: "borders",
    transform: Be
  },
  borderBottom: {
    themeKey: "borders",
    transform: Be
  },
  borderLeft: {
    themeKey: "borders",
    transform: Be
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Be
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: ur
  },
  // palette
  color: {
    themeKey: "palette",
    transform: pt
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: pt
  },
  backgroundColor: {
    themeKey: "palette",
    transform: pt
  },
  // spacing
  p: {
    style: he
  },
  pt: {
    style: he
  },
  pr: {
    style: he
  },
  pb: {
    style: he
  },
  pl: {
    style: he
  },
  px: {
    style: he
  },
  py: {
    style: he
  },
  padding: {
    style: he
  },
  paddingTop: {
    style: he
  },
  paddingRight: {
    style: he
  },
  paddingBottom: {
    style: he
  },
  paddingLeft: {
    style: he
  },
  paddingX: {
    style: he
  },
  paddingY: {
    style: he
  },
  paddingInline: {
    style: he
  },
  paddingInlineStart: {
    style: he
  },
  paddingInlineEnd: {
    style: he
  },
  paddingBlock: {
    style: he
  },
  paddingBlockStart: {
    style: he
  },
  paddingBlockEnd: {
    style: he
  },
  m: {
    style: pe
  },
  mt: {
    style: pe
  },
  mr: {
    style: pe
  },
  mb: {
    style: pe
  },
  ml: {
    style: pe
  },
  mx: {
    style: pe
  },
  my: {
    style: pe
  },
  margin: {
    style: pe
  },
  marginTop: {
    style: pe
  },
  marginRight: {
    style: pe
  },
  marginBottom: {
    style: pe
  },
  marginLeft: {
    style: pe
  },
  marginX: {
    style: pe
  },
  marginY: {
    style: pe
  },
  marginInline: {
    style: pe
  },
  marginInlineStart: {
    style: pe
  },
  marginInlineEnd: {
    style: pe
  },
  marginBlock: {
    style: pe
  },
  marginBlockStart: {
    style: pe
  },
  marginBlockEnd: {
    style: pe
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: lr
  },
  rowGap: {
    style: dr
  },
  columnGap: {
    style: fr
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: ke
  },
  maxWidth: {
    style: Qr
  },
  minWidth: {
    transform: ke
  },
  height: {
    transform: ke
  },
  maxHeight: {
    transform: ke
  },
  minHeight: {
    transform: ke
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function ga(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function ya(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ba() {
  function e(r, n, o, i) {
    const a = {
      [r]: n,
      theme: o
    }, c = i[r];
    if (!c)
      return {
        [r]: n
      };
    const {
      cssProperty: l = r,
      themeKey: f,
      transform: d,
      style: p
    } = c;
    if (n == null)
      return null;
    if (f === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const m = ir(o, f) || {};
    return p ? p(a) : Ke(a, n, (S) => {
      let g = Zt(m, d, S);
      return S === g && typeof S == "string" && (g = Zt(m, d, `${r}${S === "default" ? "" : $e(S)}`, S)), l === !1 ? g : {
        [l]: g
      };
    });
  }
  function t(r) {
    const {
      sx: n,
      theme: o = {}
    } = r || {};
    if (!n)
      return null;
    const i = o.unstable_sxConfig ?? pr;
    function a(c) {
      let l = c;
      if (typeof c == "function")
        l = c(o);
      else if (typeof c != "object")
        return c;
      if (!l)
        return null;
      const f = ki(o.breakpoints), d = Object.keys(f);
      let p = f;
      return Object.keys(l).forEach((m) => {
        const x = ya(l[m], o);
        if (x != null)
          if (typeof x == "object")
            if (i[m])
              p = Ot(p, e(m, x, o, i));
            else {
              const S = Ke({
                theme: o
              }, x, (g) => ({
                [m]: g
              }));
              ga(S, x) ? p[m] = t({
                sx: x,
                theme: o
              }) : p = Ot(p, S);
            }
          else
            p = Ot(p, e(m, x, o, i));
      }), Ri(o, Ai(d, p));
    }
    return Array.isArray(n) ? n.map(a) : a(n);
  }
  return t;
}
const Mt = ba();
Mt.filterProps = ["sx"];
function er() {
  return er = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, er.apply(null, arguments);
}
function po(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var va = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Sa = /* @__PURE__ */ po(
  function(e) {
    return va.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ca = !1;
function Ea(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function xa(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var wa = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !Ca : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(xa(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Ea(o);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      var o;
      return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), Te = "-ms-", tr = "-moz-", Z = "-webkit-", ho = "comm", Zr = "rule", en = "decl", Ta = "@import", mo = "@keyframes", Ra = "@layer", Oa = Math.abs, hr = String.fromCharCode, _a = Object.assign;
function $a(e, t) {
  return Ee(e, 0) ^ 45 ? (((t << 2 ^ Ee(e, 0)) << 2 ^ Ee(e, 1)) << 2 ^ Ee(e, 2)) << 2 ^ Ee(e, 3) : 0;
}
function go(e) {
  return e.trim();
}
function Pa(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ee(e, t, r) {
  return e.replace(t, r);
}
function Br(e, t) {
  return e.indexOf(t);
}
function Ee(e, t) {
  return e.charCodeAt(t) | 0;
}
function _t(e, t, r) {
  return e.slice(t, r);
}
function We(e) {
  return e.length;
}
function tn(e) {
  return e.length;
}
function zt(e, t) {
  return t.push(e), e;
}
function ka(e, t) {
  return e.map(t).join("");
}
var mr = 1, mt = 1, yo = 0, Pe = 0, Se = 0, gt = "";
function gr(e, t, r, n, o, i, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: mr, column: mt, length: a, return: "" };
}
function xt(e, t) {
  return _a(gr("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Aa() {
  return Se;
}
function Ia() {
  return Se = Pe > 0 ? Ee(gt, --Pe) : 0, mt--, Se === 10 && (mt = 1, mr--), Se;
}
function Ie() {
  return Se = Pe < yo ? Ee(gt, Pe++) : 0, mt++, Se === 10 && (mt = 1, mr++), Se;
}
function Ye() {
  return Ee(gt, Pe);
}
function Kt() {
  return Pe;
}
function Nt(e, t) {
  return _t(gt, e, t);
}
function $t(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function bo(e) {
  return mr = mt = 1, yo = We(gt = e), Pe = 0, [];
}
function vo(e) {
  return gt = "", e;
}
function Ht(e) {
  return go(Nt(Pe - 1, Fr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ma(e) {
  for (; (Se = Ye()) && Se < 33; )
    Ie();
  return $t(e) > 2 || $t(Se) > 3 ? "" : " ";
}
function Na(e, t) {
  for (; --t && Ie() && !(Se < 48 || Se > 102 || Se > 57 && Se < 65 || Se > 70 && Se < 97); )
    ;
  return Nt(e, Kt() + (t < 6 && Ye() == 32 && Ie() == 32));
}
function Fr(e) {
  for (; Ie(); )
    switch (Se) {
      case e:
        return Pe;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Fr(Se);
        break;
      case 40:
        e === 41 && Fr(e);
        break;
      case 92:
        Ie();
        break;
    }
  return Pe;
}
function ja(e, t) {
  for (; Ie() && e + Se !== 57; )
    if (e + Se === 84 && Ye() === 47)
      break;
  return "/*" + Nt(t, Pe - 1) + "*" + hr(e === 47 ? e : Ie());
}
function Da(e) {
  for (; !$t(Ye()); )
    Ie();
  return Nt(e, Pe);
}
function Ba(e) {
  return vo(Xt("", null, null, null, [""], e = bo(e), 0, [0], e));
}
function Xt(e, t, r, n, o, i, a, c, l) {
  for (var f = 0, d = 0, p = a, m = 0, x = 0, S = 0, g = 1, h = 1, T = 1, k = 0, R = "", C = o, y = i, I = n, A = R; h; )
    switch (S = k, k = Ie()) {
      case 40:
        if (S != 108 && Ee(A, p - 1) == 58) {
          Br(A += ee(Ht(k), "&", "&\f"), "&\f") != -1 && (T = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        A += Ht(k);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        A += Ma(S);
        break;
      case 92:
        A += Na(Kt() - 1, 7);
        continue;
      case 47:
        switch (Ye()) {
          case 42:
          case 47:
            zt(Fa(ja(Ie(), Kt()), t, r), l);
            break;
          default:
            A += "/";
        }
        break;
      case 123 * g:
        c[f++] = We(A) * T;
      case 125 * g:
      case 59:
      case 0:
        switch (k) {
          case 0:
          case 125:
            h = 0;
          case 59 + d:
            T == -1 && (A = ee(A, /\f/g, "")), x > 0 && We(A) - p && zt(x > 32 ? Mn(A + ";", n, r, p - 1) : Mn(ee(A, " ", "") + ";", n, r, p - 2), l);
            break;
          case 59:
            A += ";";
          default:
            if (zt(I = In(A, t, r, f, d, o, c, R, C = [], y = [], p), i), k === 123)
              if (d === 0)
                Xt(A, t, I, I, C, i, p, c, y);
              else
                switch (m === 99 && Ee(A, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Xt(e, I, I, n && zt(In(e, I, I, 0, 0, o, c, R, o, C = [], p), y), o, y, p, c, n ? C : y);
                    break;
                  default:
                    Xt(A, I, I, I, [""], y, 0, c, y);
                }
        }
        f = d = x = 0, g = T = 1, R = A = "", p = a;
        break;
      case 58:
        p = 1 + We(A), x = S;
      default:
        if (g < 1) {
          if (k == 123)
            --g;
          else if (k == 125 && g++ == 0 && Ia() == 125)
            continue;
        }
        switch (A += hr(k), k * g) {
          case 38:
            T = d > 0 ? 1 : (A += "\f", -1);
            break;
          case 44:
            c[f++] = (We(A) - 1) * T, T = 1;
            break;
          case 64:
            Ye() === 45 && (A += Ht(Ie())), m = Ye(), d = p = We(R = A += Da(Kt())), k++;
            break;
          case 45:
            S === 45 && We(A) == 2 && (g = 0);
        }
    }
  return i;
}
function In(e, t, r, n, o, i, a, c, l, f, d) {
  for (var p = o - 1, m = o === 0 ? i : [""], x = tn(m), S = 0, g = 0, h = 0; S < n; ++S)
    for (var T = 0, k = _t(e, p + 1, p = Oa(g = a[S])), R = e; T < x; ++T)
      (R = go(g > 0 ? m[T] + " " + k : ee(k, /&\f/g, m[T]))) && (l[h++] = R);
  return gr(e, t, r, o === 0 ? Zr : c, l, f, d);
}
function Fa(e, t, r) {
  return gr(e, t, r, ho, hr(Aa()), _t(e, 2, -2), 0);
}
function Mn(e, t, r, n) {
  return gr(e, t, r, en, _t(e, 0, n), _t(e, n + 1, -1), n);
}
function ht(e, t) {
  for (var r = "", n = tn(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function Va(e, t, r, n) {
  switch (e.type) {
    case Ra:
      if (e.children.length) break;
    case Ta:
    case en:
      return e.return = e.return || e.value;
    case ho:
      return "";
    case mo:
      return e.return = e.value + "{" + ht(e.children, n) + "}";
    case Zr:
      e.value = e.props.join(",");
  }
  return We(r = ht(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function La(e) {
  var t = tn(e);
  return function(r, n, o, i) {
    for (var a = "", c = 0; c < t; c++)
      a += e[c](r, n, o, i) || "";
    return a;
  };
}
function za(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Wa = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = Ye(), o === 38 && i === 12 && (r[n] = 1), !$t(i); )
    Ie();
  return Nt(t, Pe);
}, Ua = function(t, r) {
  var n = -1, o = 44;
  do
    switch ($t(o)) {
      case 0:
        o === 38 && Ye() === 12 && (r[n] = 1), t[n] += Wa(Pe - 1, r, n);
        break;
      case 2:
        t[n] += Ht(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = Ye() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += hr(o);
    }
  while (o = Ie());
  return t;
}, Ya = function(t, r) {
  return vo(Ua(bo(t), r));
}, Nn = /* @__PURE__ */ new WeakMap(), qa = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Nn.get(n)) && !o) {
      Nn.set(t, !0);
      for (var i = [], a = Ya(r, i), c = n.props, l = 0, f = 0; l < a.length; l++)
        for (var d = 0; d < c.length; d++, f++)
          t.props[f] = i[l] ? a[l].replace(/&\f/g, c[d]) : c[d] + " " + a[l];
    }
  }
}, Ga = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function So(e, t) {
  switch ($a(e, t)) {
    case 5103:
      return Z + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Z + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Z + e + tr + e + Te + e + e;
    case 6828:
    case 4268:
      return Z + e + Te + e + e;
    case 6165:
      return Z + e + Te + "flex-" + e + e;
    case 5187:
      return Z + e + ee(e, /(\w+).+(:[^]+)/, Z + "box-$1$2" + Te + "flex-$1$2") + e;
    case 5443:
      return Z + e + Te + "flex-item-" + ee(e, /flex-|-self/, "") + e;
    case 4675:
      return Z + e + Te + "flex-line-pack" + ee(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Z + e + Te + ee(e, "shrink", "negative") + e;
    case 5292:
      return Z + e + Te + ee(e, "basis", "preferred-size") + e;
    case 6060:
      return Z + "box-" + ee(e, "-grow", "") + Z + e + Te + ee(e, "grow", "positive") + e;
    case 4554:
      return Z + ee(e, /([^-])(transform)/g, "$1" + Z + "$2") + e;
    case 6187:
      return ee(ee(ee(e, /(zoom-|grab)/, Z + "$1"), /(image-set)/, Z + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ee(e, /(image-set\([^]*)/, Z + "$1$`$1");
    case 4968:
      return ee(ee(e, /(.+:)(flex-)?(.*)/, Z + "box-pack:$3" + Te + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Z + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ee(e, /(.+)-inline(.+)/, Z + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (We(e) - 1 - t > 6) switch (Ee(e, t + 1)) {
        case 109:
          if (Ee(e, t + 4) !== 45) break;
        case 102:
          return ee(e, /(.+:)(.+)-([^]+)/, "$1" + Z + "$2-$3$1" + tr + (Ee(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Br(e, "stretch") ? So(ee(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (Ee(e, t + 1) !== 115) break;
    case 6444:
      switch (Ee(e, We(e) - 3 - (~Br(e, "!important") && 10))) {
        case 107:
          return ee(e, ":", ":" + Z) + e;
        case 101:
          return ee(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Z + (Ee(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Z + "$2$3$1" + Te + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Ee(e, t + 11)) {
        case 114:
          return Z + e + Te + ee(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Z + e + Te + ee(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Z + e + Te + ee(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Z + e + Te + e + e;
  }
  return e;
}
var Ka = function(t, r, n, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case en:
      t.return = So(t.value, t.length);
      break;
    case mo:
      return ht([xt(t, {
        value: ee(t.value, "@", "@" + Z)
      })], o);
    case Zr:
      if (t.length) return ka(t.props, function(i) {
        switch (Pa(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return ht([xt(t, {
              props: [ee(i, /:(read-\w+)/, ":" + tr + "$1")]
            })], o);
          case "::placeholder":
            return ht([xt(t, {
              props: [ee(i, /:(plac\w+)/, ":" + Z + "input-$1")]
            }), xt(t, {
              props: [ee(i, /:(plac\w+)/, ":" + tr + "$1")]
            }), xt(t, {
              props: [ee(i, /:(plac\w+)/, Te + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, Ha = [Ka], Xa = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(g) {
      var h = g.getAttribute("data-emotion");
      h.indexOf(" ") !== -1 && (document.head.appendChild(g), g.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Ha, i = {}, a, c = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(g) {
      for (var h = g.getAttribute("data-emotion").split(" "), T = 1; T < h.length; T++)
        i[h[T]] = !0;
      c.push(g);
    }
  );
  var l, f = [qa, Ga];
  {
    var d, p = [Va, za(function(g) {
      d.insert(g);
    })], m = La(f.concat(o, p)), x = function(h) {
      return ht(Ba(h), m);
    };
    l = function(h, T, k, R) {
      d = k, x(h ? h + "{" + T.styles + "}" : T.styles), R && (S.inserted[T.name] = !0);
    };
  }
  var S = {
    key: r,
    sheet: new wa({
      key: r,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: l
  };
  return S.sheet.hydrate(c), S;
}, Co = qr(), Ja = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Qa = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Eo = {};
Eo[Co.ForwardRef] = Ja;
Eo[Co.Memo] = Qa;
var Za = !0;
function es(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var xo = function(t, r, n) {
  var o = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Za === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, ts = function(t, r, n) {
  xo(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function rs(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var ns = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, os = !1, is = /[A-Z]|^ms/g, as = /_EMO_([^_]+?)_([^]*?)_EMO_/g, wo = function(t) {
  return t.charCodeAt(1) === 45;
}, jn = function(t) {
  return t != null && typeof t != "boolean";
}, Pr = /* @__PURE__ */ po(function(e) {
  return wo(e) ? e : e.replace(is, "-$&").toLowerCase();
}), Dn = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(as, function(n, o, i) {
          return Ue = {
            name: o,
            styles: i,
            next: Ue
          }, o;
        });
  }
  return ns[t] !== 1 && !wo(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
}, ss = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Pt(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return Ue = {
          name: o.name,
          styles: o.styles,
          next: Ue
        }, o.name;
      var i = r;
      if (i.styles !== void 0) {
        var a = i.next;
        if (a !== void 0)
          for (; a !== void 0; )
            Ue = {
              name: a.name,
              styles: a.styles,
              next: Ue
            }, a = a.next;
        var c = i.styles + ";";
        return c;
      }
      return cs(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var l = Ue, f = r(e);
        return Ue = l, Pt(e, t, f);
      }
      break;
    }
  }
  var d = r;
  if (t == null)
    return d;
  var p = t[d];
  return p !== void 0 ? p : d;
}
function cs(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Pt(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object") {
        var c = a;
        t != null && t[c] !== void 0 ? n += i + "{" + t[c] + "}" : jn(c) && (n += Pr(i) + ":" + Dn(i, c) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && os)
          throw new Error(ss);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var l = 0; l < a.length; l++)
            jn(a[l]) && (n += Pr(i) + ":" + Dn(i, a[l]) + ";");
        else {
          var f = Pt(e, t, a);
          switch (i) {
            case "animation":
            case "animationName": {
              n += Pr(i) + ":" + f + ";";
              break;
            }
            default:
              n += i + "{" + f + "}";
          }
        }
      }
    }
  return n;
}
var Bn = /label:\s*([^\s;{]+)\s*(;|$)/g, Ue;
function To(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Ue = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += Pt(r, t, i);
  else {
    var a = i;
    o += a[0];
  }
  for (var c = 1; c < e.length; c++)
    if (o += Pt(r, t, e[c]), n) {
      var l = i;
      o += l[c];
    }
  Bn.lastIndex = 0;
  for (var f = "", d; (d = Bn.exec(o)) !== null; )
    f += "-" + d[1];
  var p = rs(o) + f;
  return {
    name: p,
    styles: o,
    next: Ue
  };
}
var us = function(t) {
  return t();
}, ls = L.useInsertionEffect ? L.useInsertionEffect : !1, fs = ls || us, Ro = /* @__PURE__ */ L.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Xa({
    key: "css"
  }) : null
);
Ro.Provider;
var ds = function(t) {
  return /* @__PURE__ */ ai(function(r, n) {
    var o = si(Ro);
    return t(r, o, n);
  });
}, ps = /* @__PURE__ */ L.createContext({});
function hs() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return To(t);
}
var rn = function() {
  var t = hs.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, ms = Sa, gs = function(t) {
  return t !== "theme";
}, Fn = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? ms : gs;
}, Vn = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, ys = !1, bs = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return xo(r, n, o), fs(function() {
    return ts(r, n, o);
  }), null;
}, vs = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, a;
  r !== void 0 && (i = r.label, a = r.target);
  var c = Vn(t, r, n), l = c || Fn(o), f = !l("as");
  return function() {
    var d = arguments, p = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && p.push("label:" + i + ";"), d[0] == null || d[0].raw === void 0)
      p.push.apply(p, d);
    else {
      p.push(d[0][0]);
      for (var m = d.length, x = 1; x < m; x++)
        p.push(d[x], d[0][x]);
    }
    var S = ds(function(g, h, T) {
      var k = f && g.as || o, R = "", C = [], y = g;
      if (g.theme == null) {
        y = {};
        for (var I in g)
          y[I] = g[I];
        y.theme = L.useContext(ps);
      }
      typeof g.className == "string" ? R = es(h.registered, C, g.className) : g.className != null && (R = g.className + " ");
      var A = To(p.concat(C), h.registered, y);
      R += h.key + "-" + A.name, a !== void 0 && (R += " " + a);
      var ae = f && c === void 0 ? Fn(k) : l, G = {};
      for (var s in g)
        f && s === "as" || ae(s) && (G[s] = g[s]);
      return G.className = R, T && (G.ref = T), /* @__PURE__ */ L.createElement(L.Fragment, null, /* @__PURE__ */ L.createElement(bs, {
        cache: h,
        serialized: A,
        isStringTag: typeof k == "string"
      }), /* @__PURE__ */ L.createElement(k, G));
    });
    return S.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", S.defaultProps = t.defaultProps, S.__emotion_real = S, S.__emotion_base = o, S.__emotion_styles = p, S.__emotion_forwardProp = c, Object.defineProperty(S, "toString", {
      value: function() {
        return a === void 0 && ys ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), S.withComponent = function(g, h) {
      return e(g, er({}, r, h, {
        shouldForwardProp: Vn(S, h, !0)
      })).apply(void 0, p);
    }, S;
  };
}, Ss = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Vr = vs.bind();
Ss.forEach(function(e) {
  Vr[e] = Vr(e);
});
/**
 * @mui/styled-engine v6.1.2
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Cs(e, t) {
  const r = Vr(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
const Es = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, xs = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function ws(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5,
    ...o
  } = e, i = xs(t), a = Object.keys(i);
  function c(m) {
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${r})`;
  }
  function l(m) {
    return `@media (max-width:${(typeof t[m] == "number" ? t[m] : m) - n / 100}${r})`;
  }
  function f(m, x) {
    const S = a.indexOf(x);
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${r}) and (max-width:${(S !== -1 && typeof t[a[S]] == "number" ? t[a[S]] : x) - n / 100}${r})`;
  }
  function d(m) {
    return a.indexOf(m) + 1 < a.length ? f(m, a[a.indexOf(m) + 1]) : c(m);
  }
  function p(m) {
    const x = a.indexOf(m);
    return x === 0 ? c(a[1]) : x === a.length - 1 ? l(a[x]) : f(m, a[a.indexOf(m) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: i,
    up: c,
    down: l,
    between: f,
    only: d,
    not: p,
    unit: r,
    ...o
  };
}
const Ts = {
  borderRadius: 4
};
function Oo(e = 8, t = Jr({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const a = t(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return r.mui = !0, r;
}
function Rs(e, t) {
  var n;
  const r = this;
  if (r.vars) {
    if (!((n = r.colorSchemes) != null && n[e]) || typeof r.getColorSchemeSelector != "function")
      return {};
    let o = r.getColorSchemeSelector(e);
    return o === "&" ? t : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: t
    });
  }
  return r.palette.mode === e ? t : {};
}
function _o(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...a
  } = e, c = ws(r), l = Oo(o);
  let f = Ae({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: l,
    shape: {
      ...Ts,
      ...i
    }
  }, a);
  return f = $i(f), f.applyStyles = Rs, f = t.reduce((d, p) => Ae(d, p), f), f.unstable_sxConfig = {
    ...pr,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, f.unstable_sx = function(p) {
    return Mt({
      sx: p,
      theme: this
    });
  }, f;
}
const Ln = (e) => e, Os = () => {
  let e = Ln;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Ln;
    }
  };
}, _s = Os(), $s = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function yr(e, t, r = "Mui") {
  const n = $s[t];
  return n ? `${r}-${n}` : `${_s.generate(e)}-${t}`;
}
function nn(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = yr(e, o, r);
  }), n;
}
var Lr = { exports: {} }, oe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zn;
function Ps() {
  if (zn) return oe;
  zn = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), S;
  S = Symbol.for("react.module.reference");
  function g(h) {
    if (typeof h == "object" && h !== null) {
      var T = h.$$typeof;
      switch (T) {
        case e:
          switch (h = h.type, h) {
            case r:
            case o:
            case n:
            case f:
            case d:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case c:
                case a:
                case l:
                case m:
                case p:
                case i:
                  return h;
                default:
                  return T;
              }
          }
        case t:
          return T;
      }
    }
  }
  return oe.ContextConsumer = a, oe.ContextProvider = i, oe.Element = e, oe.ForwardRef = l, oe.Fragment = r, oe.Lazy = m, oe.Memo = p, oe.Portal = t, oe.Profiler = o, oe.StrictMode = n, oe.Suspense = f, oe.SuspenseList = d, oe.isAsyncMode = function() {
    return !1;
  }, oe.isConcurrentMode = function() {
    return !1;
  }, oe.isContextConsumer = function(h) {
    return g(h) === a;
  }, oe.isContextProvider = function(h) {
    return g(h) === i;
  }, oe.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, oe.isForwardRef = function(h) {
    return g(h) === l;
  }, oe.isFragment = function(h) {
    return g(h) === r;
  }, oe.isLazy = function(h) {
    return g(h) === m;
  }, oe.isMemo = function(h) {
    return g(h) === p;
  }, oe.isPortal = function(h) {
    return g(h) === t;
  }, oe.isProfiler = function(h) {
    return g(h) === o;
  }, oe.isStrictMode = function(h) {
    return g(h) === n;
  }, oe.isSuspense = function(h) {
    return g(h) === f;
  }, oe.isSuspenseList = function(h) {
    return g(h) === d;
  }, oe.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === o || h === n || h === f || h === d || h === x || typeof h == "object" && h !== null && (h.$$typeof === m || h.$$typeof === p || h.$$typeof === i || h.$$typeof === a || h.$$typeof === l || h.$$typeof === S || h.getModuleId !== void 0);
  }, oe.typeOf = g, oe;
}
var ie = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wn;
function ks() {
  return Wn || (Wn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), S = !1, g = !1, h = !1, T = !1, k = !1, R;
    R = Symbol.for("react.module.reference");
    function C(N) {
      return !!(typeof N == "string" || typeof N == "function" || N === r || N === o || k || N === n || N === f || N === d || T || N === x || S || g || h || typeof N == "object" && N !== null && (N.$$typeof === m || N.$$typeof === p || N.$$typeof === i || N.$$typeof === a || N.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      N.$$typeof === R || N.getModuleId !== void 0));
    }
    function y(N) {
      if (typeof N == "object" && N !== null) {
        var Re = N.$$typeof;
        switch (Re) {
          case e:
            var Me = N.type;
            switch (Me) {
              case r:
              case o:
              case n:
              case f:
              case d:
                return Me;
              default:
                var Qe = Me && Me.$$typeof;
                switch (Qe) {
                  case c:
                  case a:
                  case l:
                  case m:
                  case p:
                  case i:
                    return Qe;
                  default:
                    return Re;
                }
            }
          case t:
            return Re;
        }
      }
    }
    var I = a, A = i, ae = e, G = l, s = r, $ = m, M = p, j = t, X = o, se = n, ce = f, me = d, xe = !1, Ce = !1;
    function w(N) {
      return xe || (xe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function O(N) {
      return Ce || (Ce = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function F(N) {
      return y(N) === a;
    }
    function W(N) {
      return y(N) === i;
    }
    function D(N) {
      return typeof N == "object" && N !== null && N.$$typeof === e;
    }
    function K(N) {
      return y(N) === l;
    }
    function V(N) {
      return y(N) === r;
    }
    function z(N) {
      return y(N) === m;
    }
    function Y(N) {
      return y(N) === p;
    }
    function H(N) {
      return y(N) === t;
    }
    function q(N) {
      return y(N) === o;
    }
    function be(N) {
      return y(N) === n;
    }
    function _(N) {
      return y(N) === f;
    }
    function we(N) {
      return y(N) === d;
    }
    ie.ContextConsumer = I, ie.ContextProvider = A, ie.Element = ae, ie.ForwardRef = G, ie.Fragment = s, ie.Lazy = $, ie.Memo = M, ie.Portal = j, ie.Profiler = X, ie.StrictMode = se, ie.Suspense = ce, ie.SuspenseList = me, ie.isAsyncMode = w, ie.isConcurrentMode = O, ie.isContextConsumer = F, ie.isContextProvider = W, ie.isElement = D, ie.isForwardRef = K, ie.isFragment = V, ie.isLazy = z, ie.isMemo = Y, ie.isPortal = H, ie.isProfiler = q, ie.isStrictMode = be, ie.isSuspense = _, ie.isSuspenseList = we, ie.isValidElementType = C, ie.typeOf = y;
  }()), ie;
}
process.env.NODE_ENV === "production" ? Lr.exports = Ps() : Lr.exports = ks();
var Un = Lr.exports;
function $o(e, t = "") {
  return e.displayName || e.name || t;
}
function Yn(e, t, r) {
  const n = $o(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function As(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return $o(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Un.ForwardRef:
          return Yn(e, e.render, "ForwardRef");
        case Un.Memo:
          return Yn(e, e.type, "memo");
        default:
          return;
      }
  }
}
const Is = _o();
function kr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function zr(e, t, r) {
  return js(t) ? r : t[e] || t;
}
const Wt = Symbol("mui.processed_props");
function Ut(e, t, r) {
  if (Wt in e)
    return e[Wt];
  const n = {
    ...e,
    theme: zr(t, e.theme, r)
  };
  return e[Wt] = n, n[Wt] = n, n;
}
function Ms(e) {
  return e ? (t, r) => r[e] : null;
}
function Jt(e, t) {
  var n;
  const r = typeof e == "function" ? e(t) : e;
  if (Array.isArray(r))
    return r.flatMap((o) => Jt(o, t));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    const {
      variants: o,
      ...i
    } = r;
    let a = i, c;
    e: for (let l = 0; l < o.length; l += 1) {
      const f = o[l];
      if (typeof f.props == "function") {
        if (c ?? (c = {
          ...t,
          ...t.ownerState,
          ownerState: t.ownerState
        }), !f.props(c))
          continue;
      } else
        for (const d in f.props)
          if (t[d] !== f.props[d] && ((n = t.ownerState) == null ? void 0 : n[d]) !== f.props[d])
            continue e;
      Array.isArray(a) || (a = [a]), typeof f.style == "function" ? (c ?? (c = {
        ...t,
        ...t.ownerState,
        ownerState: t.ownerState
      }), a.push(f.style(c))) : a.push(f.style);
    }
    return a;
  }
  return r;
}
function Ns(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = Is,
    rootShouldForwardProp: n = kr,
    slotShouldForwardProp: o = kr
  } = e, i = (c) => Mt(Ut(c, t, r));
  return i.__mui_systemSx = !0, (c, l = {}) => {
    Es(c, (I) => I.filter((A) => !(A != null && A.__mui_systemSx)));
    const {
      name: f,
      slot: d,
      skipVariantsResolver: p,
      skipSx: m,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: x = Ms(qn(d)),
      ...S
    } = l, g = p !== void 0 ? p : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      d && d !== "Root" && d !== "root" || !1
    ), h = m || !1;
    let T;
    process.env.NODE_ENV !== "production" && f && (T = `${f}-${qn(d || "Root")}`);
    let k = kr;
    d === "Root" || d === "root" ? k = n : d ? k = o : Ds(c) && (k = void 0);
    const R = Cs(c, {
      shouldForwardProp: k,
      label: T,
      ...S
    }), C = (I) => typeof I == "function" && I.__emotion_real !== I || Ge(I) ? (A) => Jt(I, Ut(A, t, r)) : I, y = (I, ...A) => {
      let ae = C(I);
      const G = A ? A.map(C) : [];
      f && x && G.push((M) => {
        const j = zr(t, M.theme, r);
        if (!j.components || !j.components[f] || !j.components[f].styleOverrides)
          return null;
        const X = j.components[f].styleOverrides, se = {}, ce = Ut(M, t, r);
        for (const me in X)
          se[me] = Jt(X[me], ce);
        return x(M, se);
      }), f && !g && G.push((M) => {
        var se, ce;
        const j = zr(t, M.theme, r), X = (ce = (se = j == null ? void 0 : j.components) == null ? void 0 : se[f]) == null ? void 0 : ce.variants;
        return X ? Jt({
          variants: X
        }, Ut(M, t, r)) : null;
      }), h || G.push(i);
      const s = G.length - A.length;
      if (Array.isArray(I) && s > 0) {
        const M = new Array(s).fill("");
        ae = [...I, ...M], ae.raw = [...I.raw, ...M];
      }
      const $ = R(ae, ...G);
      if (process.env.NODE_ENV !== "production") {
        let M;
        f && (M = `${f}${$e(d || "")}`), M === void 0 && (M = `Styled(${As(c)})`), $.displayName = M;
      }
      return c.muiName && ($.muiName = c.muiName), $;
    };
    return R.withConfig && (y.withConfig = R.withConfig), y;
  };
}
function js(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Ds(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function qn(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const Bs = typeof window < "u" ? L.useLayoutEffect : L.useEffect;
function Fs(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function Vs(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Ls(e, t, r, n, o) {
  const i = e[t], a = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  return typeof i == "function" && !Vs(i) && (c = "Did you accidentally provide a plain function component instead?"), c !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const zs = Fs(v.elementType, Ls), Ws = v.oneOfType([v.func, v.object]);
function Us(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Yt(e) {
  const t = L.useRef(e);
  return Bs(() => {
    t.current = e;
  }), L.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function Gn(...e) {
  return L.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      Us(r, t);
    });
  }, e);
}
const Kn = {};
function Po(e, t) {
  const r = L.useRef(Kn);
  return r.current === Kn && (r.current = e(t)), r;
}
const Ys = [];
function qs(e) {
  L.useEffect(e, Ys);
}
class on {
  constructor() {
    St(this, "currentId", null);
    St(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    St(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new on();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, r();
    }, t);
  }
}
function Gs() {
  const e = Po(on.create).current;
  return qs(e.disposeEffect), e;
}
function Hn(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
const Ks = /* @__PURE__ */ L.createContext(void 0);
process.env.NODE_ENV !== "production" && (v.node, v.object);
function Hs(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? Qt(o.defaultProps, n) : !o.styleOverrides && !o.variants ? Qt(o, n) : n;
}
function Xs({
  props: e,
  name: t
}) {
  const r = L.useContext(Ks);
  return Hs({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
function Js(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const Xn = (e, t, r, n = []) => {
  let o = e;
  t.forEach((i, a) => {
    a === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = r : o && typeof o == "object" && (o[i] = r) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, Qs = (e, t, r) => {
  function n(o, i = [], a = []) {
    Object.entries(o).forEach(([c, l]) => {
      (!r || r && !r([...i, c])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? n(l, [...i, c], Array.isArray(l) ? [...a, c] : a) : t([...i, c], l, a));
    });
  }
  n(e);
}, Zs = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Ar(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, i = {}, a = {};
  return Qs(
    e,
    (c, l, f) => {
      if ((typeof l == "string" || typeof l == "number") && (!n || !n(c, l))) {
        const d = `--${r ? `${r}-` : ""}${c.join("-")}`, p = Zs(c, l);
        Object.assign(o, {
          [d]: p
        }), Xn(i, c, `var(${d})`, f), Xn(a, c, `var(${d}, ${p})`, f);
      }
    },
    (c) => c[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: a
  };
}
function ec(e, t = {}) {
  const {
    getSelector: r = h,
    disableCssColorScheme: n,
    colorSchemeSelector: o
  } = t, {
    colorSchemes: i = {},
    components: a,
    defaultColorScheme: c = "light",
    ...l
  } = e, {
    vars: f,
    css: d,
    varsWithDefaults: p
  } = Ar(l, t);
  let m = p;
  const x = {}, {
    [c]: S,
    ...g
  } = i;
  if (Object.entries(g || {}).forEach(([R, C]) => {
    const {
      vars: y,
      css: I,
      varsWithDefaults: A
    } = Ar(C, t);
    m = Ae(m, A), x[R] = {
      css: I,
      vars: y
    };
  }), S) {
    const {
      css: R,
      vars: C,
      varsWithDefaults: y
    } = Ar(S, t);
    m = Ae(m, y), x[c] = {
      css: R,
      vars: C
    };
  }
  function h(R, C) {
    var I, A;
    let y = o;
    if (o === "class" && (y = ".%s"), o === "data" && (y = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (y = `[${o}="%s"]`), R) {
      if (y === "media")
        return e.defaultColorScheme === R ? ":root" : {
          [`@media (prefers-color-scheme: ${((A = (I = i[R]) == null ? void 0 : I.palette) == null ? void 0 : A.mode) || R})`]: {
            ":root": C
          }
        };
      if (y)
        return e.defaultColorScheme === R ? `:root, ${y.replace("%s", String(R))}` : y.replace("%s", String(R));
    }
    return ":root";
  }
  return {
    vars: m,
    generateThemeVars: () => {
      let R = {
        ...f
      };
      return Object.entries(x).forEach(([, {
        vars: C
      }]) => {
        R = Ae(R, C);
      }), R;
    },
    generateStyleSheets: () => {
      var ae, G;
      const R = [], C = e.defaultColorScheme || "light";
      function y(s, $) {
        Object.keys($).length && R.push(typeof s == "string" ? {
          [s]: {
            ...$
          }
        } : s);
      }
      y(r(void 0, {
        ...d
      }), d);
      const {
        [C]: I,
        ...A
      } = x;
      if (I) {
        const {
          css: s
        } = I, $ = (G = (ae = i[C]) == null ? void 0 : ae.palette) == null ? void 0 : G.mode, M = !n && $ ? {
          colorScheme: $,
          ...s
        } : {
          ...s
        };
        y(r(C, {
          ...M
        }), M);
      }
      return Object.entries(A).forEach(([s, {
        css: $
      }]) => {
        var X, se;
        const M = (se = (X = i[s]) == null ? void 0 : X.palette) == null ? void 0 : se.mode, j = !n && M ? {
          colorScheme: M,
          ...$
        } : {
          ...$
        };
        y(r(s, {
          ...j
        }), j);
      }), R;
    }
  };
}
function tc(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const kt = {
  black: "#000",
  white: "#fff"
}, rc = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, at = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, st = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, wt = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, ct = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, ut = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, lt = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, Jn = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: kt.white,
    default: kt.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, Ir = {
  text: {
    primary: kt.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: kt.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function Qn(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Xr(e.main, o) : t === "dark" && (e.dark = Hr(e.main, i)));
}
function nc(e = "light") {
  return e === "dark" ? {
    main: ct[200],
    light: ct[50],
    dark: ct[400]
  } : {
    main: ct[700],
    light: ct[400],
    dark: ct[800]
  };
}
function oc(e = "light") {
  return e === "dark" ? {
    main: at[200],
    light: at[50],
    dark: at[400]
  } : {
    main: at[500],
    light: at[300],
    dark: at[700]
  };
}
function ic(e = "light") {
  return e === "dark" ? {
    main: st[500],
    light: st[300],
    dark: st[700]
  } : {
    main: st[700],
    light: st[400],
    dark: st[800]
  };
}
function ac(e = "light") {
  return e === "dark" ? {
    main: ut[400],
    light: ut[300],
    dark: ut[700]
  } : {
    main: ut[700],
    light: ut[500],
    dark: ut[900]
  };
}
function sc(e = "light") {
  return e === "dark" ? {
    main: lt[400],
    light: lt[300],
    dark: lt[700]
  } : {
    main: lt[800],
    light: lt[500],
    dark: lt[900]
  };
}
function cc(e = "light") {
  return e === "dark" ? {
    main: wt[400],
    light: wt[300],
    dark: wt[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: wt[500],
    dark: wt[900]
  };
}
function an(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    ...o
  } = e, i = e.primary || nc(t), a = e.secondary || oc(t), c = e.error || ic(t), l = e.info || ac(t), f = e.success || sc(t), d = e.warning || cc(t);
  function p(g) {
    const h = Pn(g, Ir.text.primary) >= r ? Ir.text.primary : Jn.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const T = Pn(g, h);
      T < 3 && console.error([`MUI: The contrast ratio of ${T}:1 for ${h} on ${g}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return h;
  }
  const m = ({
    color: g,
    name: h,
    mainShade: T = 500,
    lightShade: k = 300,
    darkShade: R = 700
  }) => {
    if (g = {
      ...g
    }, !g.main && g[T] && (g.main = g[T]), !g.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${h ? ` (${h})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${T}\` property.` : He(11, h ? ` (${h})` : "", T));
    if (typeof g.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${h ? ` (${h})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(g.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : He(12, h ? ` (${h})` : "", JSON.stringify(g.main)));
    return Qn(g, "light", k, n), Qn(g, "dark", R, n), g.contrastText || (g.contrastText = p(g.main)), g;
  }, x = {
    dark: Ir,
    light: Jn
  };
  return process.env.NODE_ENV !== "production" && (x[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Ae({
    // A collection of common colors.
    common: {
      ...kt
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: m({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: m({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: m({
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: m({
      color: d,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: m({
      color: l,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: m({
      color: f,
      name: "success"
    }),
    // The grey colors.
    grey: rc,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: m,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...x[t]
  }, o);
}
function uc(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function lc(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function fc(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Zn = {
  textTransform: "uppercase"
}, eo = '"Roboto", "Helvetica", "Arial", sans-serif';
function dc(e, t) {
  const {
    fontFamily: r = eo,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: d,
    ...p
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof l != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const m = n / 14, x = d || ((h) => `${h / l * m}rem`), S = (h, T, k, R, C) => ({
    fontFamily: r,
    fontWeight: h,
    fontSize: x(T),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: k,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === eo ? {
      letterSpacing: `${fc(R / T)}em`
    } : {},
    ...C,
    ...f
  }), g = {
    h1: S(o, 96, 1.167, -1.5),
    h2: S(o, 60, 1.2, -0.5),
    h3: S(i, 48, 1.167, 0),
    h4: S(i, 34, 1.235, 0.25),
    h5: S(i, 24, 1.334, 0),
    h6: S(a, 20, 1.6, 0.15),
    subtitle1: S(i, 16, 1.75, 0.15),
    subtitle2: S(a, 14, 1.57, 0.1),
    body1: S(i, 16, 1.5, 0.15),
    body2: S(i, 14, 1.43, 0.15),
    button: S(a, 14, 1.75, 0.4, Zn),
    caption: S(i, 12, 1.66, 0.4),
    overline: S(i, 12, 2.66, 1, Zn),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Ae({
    htmlFontSize: l,
    pxToRem: x,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: a,
    fontWeightBold: c,
    ...g
  }, p, {
    clone: !1
    // No need to clone deep
  });
}
const pc = 0.2, hc = 0.14, mc = 0.12;
function de(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${pc})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${hc})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${mc})`].join(",");
}
const gc = ["none", de(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), de(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), de(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), de(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), de(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), de(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), de(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), de(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), de(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), de(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), de(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), de(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), de(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), de(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), de(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), de(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), de(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), de(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), de(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), de(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), de(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), de(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), de(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), de(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], yc = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, bc = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function to(e) {
  return `${Math.round(e)}ms`;
}
function vc(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Sc(e) {
  const t = {
    ...yc,
    ...e.easing
  }, r = {
    ...bc,
    ...e.duration
  };
  return {
    getAutoHeightDuration: vc,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = r.standard,
        easing: c = t.easeInOut,
        delay: l = 0,
        ...f
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const d = (m) => typeof m == "string", p = (m) => !Number.isNaN(parseFloat(m));
        !d(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !p(a) && !d(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), d(c) || console.error('MUI: Argument "easing" must be a string.'), !p(l) && !d(l) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(f).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(f).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((d) => `${d} ${typeof a == "string" ? a : to(a)} ${c} ${typeof l == "string" ? l : to(l)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const Cc = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Wr(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: a = {},
    typography: c = {},
    shape: l,
    ...f
  } = e;
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : He(20));
  const d = an(i), p = _o(e);
  let m = Ae(p, {
    mixins: lc(p.breakpoints, n),
    palette: d,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: gc.slice(),
    typography: dc(d, c),
    transitions: Sc(a),
    zIndex: {
      ...Cc
    }
  });
  if (m = Ae(m, f), m = t.reduce((x, S) => Ae(x, S), m), process.env.NODE_ENV !== "production") {
    const x = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], S = (g, h) => {
      let T;
      for (T in g) {
        const k = g[T];
        if (x.includes(T) && Object.keys(k).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const R = yr("", T);
            console.error([`MUI: The \`${h}\` component increases the CSS specificity of the \`${T}\` internal state.`, "You can not override it like this: ", JSON.stringify(g, null, 2), "", `Instead, you need to use the '&.${R}' syntax:`, JSON.stringify({
              root: {
                [`&.${R}`]: k
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          g[T] = {};
        }
      }
    };
    Object.keys(m.components).forEach((g) => {
      const h = m.components[g].styleOverrides;
      h && g.startsWith("Mui") && S(h, g);
    });
  }
  return m.unstable_sxConfig = {
    ...pr,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, m.unstable_sx = function(S) {
    return Mt({
      sx: S,
      theme: this
    });
  }, m;
}
function Ec(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const xc = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = Ec(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function ko(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Ao(e) {
  return e === "dark" ? xc : [];
}
function wc(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    ...o
  } = e, i = an(t);
  return {
    palette: i,
    opacity: {
      ...ko(i.mode),
      ...r
    },
    overlays: n || Ao(i.mode),
    ...o
  };
}
function Tc(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Rc = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Oc = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return Rc(e.cssVarPrefix).forEach((c) => {
        a[c] = r[c], delete r[c];
      }), i === "media" ? {
        [n]: r,
        "@media (prefers-color-scheme: dark)": {
          [n]: a
        }
      } : i ? {
        [i.replace("%s", t)]: a,
        [`${n}, ${i.replace("%s", t)}`]: r
      } : {
        [n]: {
          ...r,
          ...a
        }
      };
    }
    if (i && i !== "media")
      return `${n}, ${i.replace("%s", String(t))}`;
  } else if (t) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [n]: r
        }
      };
    if (i)
      return i.replace("%s", String(t));
  }
  return n;
};
function _c(e) {
  return Ge(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function $c(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [a, c] = o[i];
      !_c(c) || a.startsWith("unstable_") ? delete n[a] : Ge(c) && (n[a] = {
        ...c
      }, r(n[a]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Pc(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function b(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function Rt(e) {
  return !e || !e.startsWith("hsl") ? e : co(e);
}
function qe(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Tt(Rt(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function kc(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const ze = (e) => {
  try {
    return e();
  } catch {
  }
}, Ac = (e = "mui") => Js(e);
function Mr(e, t, r, n) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = n === "dark" ? "dark" : "light";
  if (!r) {
    e[n] = wc({
      ...t,
      palette: {
        mode: o,
        ...t == null ? void 0 : t.palette
      }
    });
    return;
  }
  const {
    palette: i,
    ...a
  } = Wr({
    ...r,
    palette: {
      mode: o,
      ...t == null ? void 0 : t.palette
    }
  });
  return e[n] = {
    ...t,
    palette: i,
    opacity: {
      ...ko(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || Ao(o)
  }, a;
}
function Ic(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: a = Tc,
    colorSchemeSelector: c = r.light && r.dark ? "media" : void 0,
    rootSelector: l = ":root",
    ...f
  } = e, d = Object.keys(r)[0], p = n || (r.light && d !== "light" ? "light" : d), m = Ac(i), {
    [p]: x,
    light: S,
    dark: g,
    ...h
  } = r, T = {
    ...h
  };
  let k = x;
  if ((p === "dark" && !("dark" in r) || p === "light" && !("light" in r)) && (k = !0), !k)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${p}\` option is either missing or invalid.` : He(21, p));
  const R = Mr(T, k, f, p);
  S && !T.light && Mr(T, S, void 0, "light"), g && !T.dark && Mr(T, g, void 0, "dark");
  let C = {
    defaultColorScheme: p,
    ...R,
    cssVarPrefix: i,
    colorSchemeSelector: c,
    rootSelector: l,
    getCssVar: m,
    colorSchemes: T,
    font: {
      ...uc(R.typography),
      ...R.font
    },
    spacing: kc(f.spacing)
  };
  Object.keys(C.colorSchemes).forEach((G) => {
    const s = C.colorSchemes[G].palette, $ = (M) => {
      const j = M.split("-"), X = j[1], se = j[2];
      return m(M, s[X][se]);
    };
    if (s.mode === "light" && (b(s.common, "background", "#fff"), b(s.common, "onBackground", "#000")), s.mode === "dark" && (b(s.common, "background", "#000"), b(s.common, "onBackground", "#fff")), Pc(s, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), s.mode === "light") {
      b(s.Alert, "errorColor", le(s.error.light, 0.6)), b(s.Alert, "infoColor", le(s.info.light, 0.6)), b(s.Alert, "successColor", le(s.success.light, 0.6)), b(s.Alert, "warningColor", le(s.warning.light, 0.6)), b(s.Alert, "errorFilledBg", $("palette-error-main")), b(s.Alert, "infoFilledBg", $("palette-info-main")), b(s.Alert, "successFilledBg", $("palette-success-main")), b(s.Alert, "warningFilledBg", $("palette-warning-main")), b(s.Alert, "errorFilledColor", ze(() => s.getContrastText(s.error.main))), b(s.Alert, "infoFilledColor", ze(() => s.getContrastText(s.info.main))), b(s.Alert, "successFilledColor", ze(() => s.getContrastText(s.success.main))), b(s.Alert, "warningFilledColor", ze(() => s.getContrastText(s.warning.main))), b(s.Alert, "errorStandardBg", fe(s.error.light, 0.9)), b(s.Alert, "infoStandardBg", fe(s.info.light, 0.9)), b(s.Alert, "successStandardBg", fe(s.success.light, 0.9)), b(s.Alert, "warningStandardBg", fe(s.warning.light, 0.9)), b(s.Alert, "errorIconColor", $("palette-error-main")), b(s.Alert, "infoIconColor", $("palette-info-main")), b(s.Alert, "successIconColor", $("palette-success-main")), b(s.Alert, "warningIconColor", $("palette-warning-main")), b(s.AppBar, "defaultBg", $("palette-grey-100")), b(s.Avatar, "defaultBg", $("palette-grey-400")), b(s.Button, "inheritContainedBg", $("palette-grey-300")), b(s.Button, "inheritContainedHoverBg", $("palette-grey-A100")), b(s.Chip, "defaultBorder", $("palette-grey-400")), b(s.Chip, "defaultAvatarColor", $("palette-grey-700")), b(s.Chip, "defaultIconColor", $("palette-grey-700")), b(s.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), b(s.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), b(s.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), b(s.LinearProgress, "primaryBg", fe(s.primary.main, 0.62)), b(s.LinearProgress, "secondaryBg", fe(s.secondary.main, 0.62)), b(s.LinearProgress, "errorBg", fe(s.error.main, 0.62)), b(s.LinearProgress, "infoBg", fe(s.info.main, 0.62)), b(s.LinearProgress, "successBg", fe(s.success.main, 0.62)), b(s.LinearProgress, "warningBg", fe(s.warning.main, 0.62)), b(s.Skeleton, "bg", `rgba(${$("palette-text-primaryChannel")} / 0.11)`), b(s.Slider, "primaryTrack", fe(s.primary.main, 0.62)), b(s.Slider, "secondaryTrack", fe(s.secondary.main, 0.62)), b(s.Slider, "errorTrack", fe(s.error.main, 0.62)), b(s.Slider, "infoTrack", fe(s.info.main, 0.62)), b(s.Slider, "successTrack", fe(s.success.main, 0.62)), b(s.Slider, "warningTrack", fe(s.warning.main, 0.62));
      const M = Lt(s.background.default, 0.8);
      b(s.SnackbarContent, "bg", M), b(s.SnackbarContent, "color", ze(() => s.getContrastText(M))), b(s.SpeedDialAction, "fabHoverBg", Lt(s.background.paper, 0.15)), b(s.StepConnector, "border", $("palette-grey-400")), b(s.StepContent, "border", $("palette-grey-400")), b(s.Switch, "defaultColor", $("palette-common-white")), b(s.Switch, "defaultDisabledColor", $("palette-grey-100")), b(s.Switch, "primaryDisabledColor", fe(s.primary.main, 0.62)), b(s.Switch, "secondaryDisabledColor", fe(s.secondary.main, 0.62)), b(s.Switch, "errorDisabledColor", fe(s.error.main, 0.62)), b(s.Switch, "infoDisabledColor", fe(s.info.main, 0.62)), b(s.Switch, "successDisabledColor", fe(s.success.main, 0.62)), b(s.Switch, "warningDisabledColor", fe(s.warning.main, 0.62)), b(s.TableCell, "border", fe(Vt(s.divider, 1), 0.88)), b(s.Tooltip, "bg", Vt(s.grey[700], 0.92));
    }
    if (s.mode === "dark") {
      b(s.Alert, "errorColor", fe(s.error.light, 0.6)), b(s.Alert, "infoColor", fe(s.info.light, 0.6)), b(s.Alert, "successColor", fe(s.success.light, 0.6)), b(s.Alert, "warningColor", fe(s.warning.light, 0.6)), b(s.Alert, "errorFilledBg", $("palette-error-dark")), b(s.Alert, "infoFilledBg", $("palette-info-dark")), b(s.Alert, "successFilledBg", $("palette-success-dark")), b(s.Alert, "warningFilledBg", $("palette-warning-dark")), b(s.Alert, "errorFilledColor", ze(() => s.getContrastText(s.error.dark))), b(s.Alert, "infoFilledColor", ze(() => s.getContrastText(s.info.dark))), b(s.Alert, "successFilledColor", ze(() => s.getContrastText(s.success.dark))), b(s.Alert, "warningFilledColor", ze(() => s.getContrastText(s.warning.dark))), b(s.Alert, "errorStandardBg", le(s.error.light, 0.9)), b(s.Alert, "infoStandardBg", le(s.info.light, 0.9)), b(s.Alert, "successStandardBg", le(s.success.light, 0.9)), b(s.Alert, "warningStandardBg", le(s.warning.light, 0.9)), b(s.Alert, "errorIconColor", $("palette-error-main")), b(s.Alert, "infoIconColor", $("palette-info-main")), b(s.Alert, "successIconColor", $("palette-success-main")), b(s.Alert, "warningIconColor", $("palette-warning-main")), b(s.AppBar, "defaultBg", $("palette-grey-900")), b(s.AppBar, "darkBg", $("palette-background-paper")), b(s.AppBar, "darkColor", $("palette-text-primary")), b(s.Avatar, "defaultBg", $("palette-grey-600")), b(s.Button, "inheritContainedBg", $("palette-grey-800")), b(s.Button, "inheritContainedHoverBg", $("palette-grey-700")), b(s.Chip, "defaultBorder", $("palette-grey-700")), b(s.Chip, "defaultAvatarColor", $("palette-grey-300")), b(s.Chip, "defaultIconColor", $("palette-grey-300")), b(s.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), b(s.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), b(s.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), b(s.LinearProgress, "primaryBg", le(s.primary.main, 0.5)), b(s.LinearProgress, "secondaryBg", le(s.secondary.main, 0.5)), b(s.LinearProgress, "errorBg", le(s.error.main, 0.5)), b(s.LinearProgress, "infoBg", le(s.info.main, 0.5)), b(s.LinearProgress, "successBg", le(s.success.main, 0.5)), b(s.LinearProgress, "warningBg", le(s.warning.main, 0.5)), b(s.Skeleton, "bg", `rgba(${$("palette-text-primaryChannel")} / 0.13)`), b(s.Slider, "primaryTrack", le(s.primary.main, 0.5)), b(s.Slider, "secondaryTrack", le(s.secondary.main, 0.5)), b(s.Slider, "errorTrack", le(s.error.main, 0.5)), b(s.Slider, "infoTrack", le(s.info.main, 0.5)), b(s.Slider, "successTrack", le(s.success.main, 0.5)), b(s.Slider, "warningTrack", le(s.warning.main, 0.5));
      const M = Lt(s.background.default, 0.98);
      b(s.SnackbarContent, "bg", M), b(s.SnackbarContent, "color", ze(() => s.getContrastText(M))), b(s.SpeedDialAction, "fabHoverBg", Lt(s.background.paper, 0.15)), b(s.StepConnector, "border", $("palette-grey-600")), b(s.StepContent, "border", $("palette-grey-600")), b(s.Switch, "defaultColor", $("palette-grey-300")), b(s.Switch, "defaultDisabledColor", $("palette-grey-600")), b(s.Switch, "primaryDisabledColor", le(s.primary.main, 0.55)), b(s.Switch, "secondaryDisabledColor", le(s.secondary.main, 0.55)), b(s.Switch, "errorDisabledColor", le(s.error.main, 0.55)), b(s.Switch, "infoDisabledColor", le(s.info.main, 0.55)), b(s.Switch, "successDisabledColor", le(s.success.main, 0.55)), b(s.Switch, "warningDisabledColor", le(s.warning.main, 0.55)), b(s.TableCell, "border", le(Vt(s.divider, 1), 0.68)), b(s.Tooltip, "bg", Vt(s.grey[700], 0.92));
    }
    qe(s.background, "default"), qe(s.background, "paper"), qe(s.common, "background"), qe(s.common, "onBackground"), qe(s, "divider"), Object.keys(s).forEach((M) => {
      const j = s[M];
      j && typeof j == "object" && (j.main && b(s[M], "mainChannel", Tt(Rt(j.main))), j.light && b(s[M], "lightChannel", Tt(Rt(j.light))), j.dark && b(s[M], "darkChannel", Tt(Rt(j.dark))), j.contrastText && b(s[M], "contrastTextChannel", Tt(Rt(j.contrastText))), M === "text" && (qe(s[M], "primary"), qe(s[M], "secondary")), M === "action" && (j.active && qe(s[M], "active"), j.selected && qe(s[M], "selected")));
    });
  }), C = t.reduce((G, s) => Ae(G, s), C);
  const y = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: a,
    getSelector: Oc(C)
  }, {
    vars: I,
    generateThemeVars: A,
    generateStyleSheets: ae
  } = ec(C, y);
  return C.vars = I, Object.entries(C.colorSchemes[C.defaultColorScheme]).forEach(([G, s]) => {
    C[G] = s;
  }), C.generateThemeVars = A, C.generateStyleSheets = ae, C.generateSpacing = function() {
    return Oo(f.spacing, Jr(this));
  }, C.getColorSchemeSelector = tc(c), C.spacing = C.generateSpacing(), C.shouldSkipGeneratingVar = a, C.unstable_sxConfig = {
    ...pr,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, C.unstable_sx = function(s) {
    return Mt({
      sx: s,
      theme: this
    });
  }, C.toRuntimeSource = $c, C;
}
function ro(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: an({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Mc(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = r == null ? void 0 : r.mode,
    ...a
  } = e, c = i || "light", l = o == null ? void 0 : o[c], f = {
    ...o,
    ...r ? {
      [c]: {
        ...typeof l != "boolean" && l,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return Wr(e, ...t);
    let d = r;
    "palette" in e || f[c] && (f[c] !== !0 ? d = f[c].palette : c === "dark" && (d = {
      mode: "dark"
    }));
    const p = Wr({
      ...e,
      palette: d
    }, ...t);
    return p.defaultColorScheme = c, p.colorSchemes = f, p.palette.mode === "light" && (p.colorSchemes.light = {
      ...f.light !== !0 && f.light,
      palette: p.palette
    }, ro(p, "dark", f.dark)), p.palette.mode === "dark" && (p.colorSchemes.dark = {
      ...f.dark !== !0 && f.dark,
      palette: p.palette
    }, ro(p, "light", f.light)), p;
  }
  return !r && !("light" in f) && c === "light" && (f.light = !0), Ic({
    ...a,
    colorSchemes: f,
    defaultColorScheme: c,
    ...typeof n != "boolean" && n
  }, ...t);
}
const Nc = Mc(), jc = "$$material", yt = Ns({
  themeId: jc,
  defaultTheme: Nc,
  rootShouldForwardProp: uo
}), no = {
  theme: void 0
};
function Dc(e) {
  let t, r;
  return (n) => {
    let o = t;
    return (o === void 0 || n.theme !== r) && (no.theme = n.theme, o = e(no), t = o, r = n.theme), o;
  };
}
process.env.NODE_ENV !== "production" && (v.node, v.object.isRequired);
function sn(e) {
  return Xs(e);
}
class rr {
  constructor() {
    St(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
    });
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new rr();
  }
  static use() {
    const t = Po(rr.create).current, [r, n] = L.useState(!1);
    return t.shouldMount = r, t.setShouldMount = n, L.useEffect(t.mountEffect, [r]), t;
  }
  mount() {
    return this.mounted || (this.mounted = Fc(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.start(...t);
    });
  }
  stop(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.stop(...t);
    });
  }
  pulsate(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.pulsate(...t);
    });
  }
}
function Bc() {
  return rr.use();
}
function Fc() {
  let e, t;
  const r = new Promise((n, o) => {
    e = n, t = o;
  });
  return r.resolve = e, r.reject = t, r;
}
function Vc(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
function Ur(e, t) {
  return Ur = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Ur(e, t);
}
function Lc(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ur(e, t);
}
const oo = tt.createContext(null);
function zc(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function cn(e, t) {
  var r = function(i) {
    return t && qt(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && ci.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function Wc(e, t) {
  e = e || {}, t = t || {};
  function r(d) {
    return d in t ? t[d] : e[d];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (n[i] = o, o = []) : o.push(i);
  var a, c = {};
  for (var l in t) {
    if (n[l])
      for (a = 0; a < n[l].length; a++) {
        var f = n[l][a];
        c[n[l][a]] = r(f);
      }
    c[l] = r(l);
  }
  for (a = 0; a < o.length; a++)
    c[o[a]] = r(o[a]);
  return c;
}
function rt(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function Uc(e, t) {
  return cn(e.children, function(r) {
    return Gt(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: rt(r, "appear", e),
      enter: rt(r, "enter", e),
      exit: rt(r, "exit", e)
    });
  });
}
function Yc(e, t, r) {
  var n = cn(e.children), o = Wc(t, n);
  return Object.keys(o).forEach(function(i) {
    var a = o[i];
    if (qt(a)) {
      var c = i in t, l = i in n, f = t[i], d = qt(f) && !f.props.in;
      l && (!c || d) ? o[i] = Gt(a, {
        onExited: r.bind(null, a),
        in: !0,
        exit: rt(a, "exit", e),
        enter: rt(a, "enter", e)
      }) : !l && c && !d ? o[i] = Gt(a, {
        in: !1
      }) : l && c && qt(f) && (o[i] = Gt(a, {
        onExited: r.bind(null, a),
        in: f.props.in,
        exit: rt(a, "exit", e),
        enter: rt(a, "enter", e)
      }));
    }
  }), o;
}
var qc = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Gc = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, un = /* @__PURE__ */ function(e) {
  Lc(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var a = i.handleExited.bind(zc(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
      firstRender: !0
    }, i;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, r.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, i) {
    var a = i.children, c = i.handleExited, l = i.firstRender;
    return {
      children: l ? Uc(o, c) : Yc(o, a, c),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var a = cn(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(c) {
      var l = er({}, c.children);
      return delete l[o.key], {
        children: l
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, a = o.childFactory, c = Vc(o, ["component", "childFactory"]), l = this.state.contextValue, f = qc(this.state.children).map(a);
    return delete c.appear, delete c.enter, delete c.exit, i === null ? /* @__PURE__ */ tt.createElement(oo.Provider, {
      value: l
    }, f) : /* @__PURE__ */ tt.createElement(oo.Provider, {
      value: l
    }, /* @__PURE__ */ tt.createElement(i, c, f));
  }, t;
}(tt.Component);
un.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: v.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: v.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: v.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: v.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: v.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: v.func
} : {};
un.defaultProps = Gc;
function Io(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: a,
    in: c,
    onExited: l,
    timeout: f
  } = e, [d, p] = L.useState(!1), m = je(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), x = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + o
  }, S = je(r.child, d && r.childLeaving, n && r.childPulsate);
  return !c && !d && p(!0), L.useEffect(() => {
    if (!c && l != null) {
      const g = setTimeout(l, f);
      return () => {
        clearTimeout(g);
      };
    }
  }, [l, c, f]), /* @__PURE__ */ Ve.jsx("span", {
    className: m,
    style: x,
    children: /* @__PURE__ */ Ve.jsx("span", {
      className: S
    })
  });
}
process.env.NODE_ENV !== "production" && (Io.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: v.object.isRequired,
  className: v.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: v.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: v.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: v.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: v.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: v.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: v.number,
  /**
   * exit delay
   */
  timeout: v.number.isRequired
});
const De = nn("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Yr = 550, Kc = 80, Hc = rn`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Xc = rn`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Jc = rn`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, Qc = yt("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), Zc = yt(Io, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${De.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Hc};
    animation-duration: ${Yr}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${De.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${De.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${De.childLeaving} {
    opacity: 0;
    animation-name: ${Xc};
    animation-duration: ${Yr}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${De.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Jc};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Mo = /* @__PURE__ */ L.forwardRef(function(t, r) {
  const n = sn({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: a,
    ...c
  } = n, [l, f] = L.useState([]), d = L.useRef(0), p = L.useRef(null);
  L.useEffect(() => {
    p.current && (p.current(), p.current = null);
  }, [l]);
  const m = L.useRef(!1), x = Gs(), S = L.useRef(null), g = L.useRef(null), h = L.useCallback((C) => {
    const {
      pulsate: y,
      rippleX: I,
      rippleY: A,
      rippleSize: ae,
      cb: G
    } = C;
    f((s) => [...s, /* @__PURE__ */ Ve.jsx(Zc, {
      classes: {
        ripple: je(i.ripple, De.ripple),
        rippleVisible: je(i.rippleVisible, De.rippleVisible),
        ripplePulsate: je(i.ripplePulsate, De.ripplePulsate),
        child: je(i.child, De.child),
        childLeaving: je(i.childLeaving, De.childLeaving),
        childPulsate: je(i.childPulsate, De.childPulsate)
      },
      timeout: Yr,
      pulsate: y,
      rippleX: I,
      rippleY: A,
      rippleSize: ae
    }, d.current)]), d.current += 1, p.current = G;
  }, [i]), T = L.useCallback((C = {}, y = {}, I = () => {
  }) => {
    const {
      pulsate: A = !1,
      center: ae = o || y.pulsate,
      fakeElement: G = !1
      // For test purposes
    } = y;
    if ((C == null ? void 0 : C.type) === "mousedown" && m.current) {
      m.current = !1;
      return;
    }
    (C == null ? void 0 : C.type) === "touchstart" && (m.current = !0);
    const s = G ? null : g.current, $ = s ? s.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let M, j, X;
    if (ae || C === void 0 || C.clientX === 0 && C.clientY === 0 || !C.clientX && !C.touches)
      M = Math.round($.width / 2), j = Math.round($.height / 2);
    else {
      const {
        clientX: se,
        clientY: ce
      } = C.touches && C.touches.length > 0 ? C.touches[0] : C;
      M = Math.round(se - $.left), j = Math.round(ce - $.top);
    }
    if (ae)
      X = Math.sqrt((2 * $.width ** 2 + $.height ** 2) / 3), X % 2 === 0 && (X += 1);
    else {
      const se = Math.max(Math.abs((s ? s.clientWidth : 0) - M), M) * 2 + 2, ce = Math.max(Math.abs((s ? s.clientHeight : 0) - j), j) * 2 + 2;
      X = Math.sqrt(se ** 2 + ce ** 2);
    }
    C != null && C.touches ? S.current === null && (S.current = () => {
      h({
        pulsate: A,
        rippleX: M,
        rippleY: j,
        rippleSize: X,
        cb: I
      });
    }, x.start(Kc, () => {
      S.current && (S.current(), S.current = null);
    })) : h({
      pulsate: A,
      rippleX: M,
      rippleY: j,
      rippleSize: X,
      cb: I
    });
  }, [o, h, x]), k = L.useCallback(() => {
    T({}, {
      pulsate: !0
    });
  }, [T]), R = L.useCallback((C, y) => {
    if (x.clear(), (C == null ? void 0 : C.type) === "touchend" && S.current) {
      S.current(), S.current = null, x.start(0, () => {
        R(C, y);
      });
      return;
    }
    S.current = null, f((I) => I.length > 0 ? I.slice(1) : I), p.current = y;
  }, [x]);
  return L.useImperativeHandle(r, () => ({
    pulsate: k,
    start: T,
    stop: R
  }), [k, T, R]), /* @__PURE__ */ Ve.jsx(Qc, {
    className: je(De.root, i.root, a),
    ref: g,
    ...c,
    children: /* @__PURE__ */ Ve.jsx(un, {
      component: null,
      exit: !0,
      children: l
    })
  });
});
process.env.NODE_ENV !== "production" && (Mo.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: v.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: v.object,
  /**
   * @ignore
   */
  className: v.string
});
function eu(e) {
  return yr("MuiButtonBase", e);
}
const tu = nn("MuiButtonBase", ["root", "disabled", "focusVisible"]), ru = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, a = so({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, eu, o);
  return r && n && (a.root += ` ${n}`), a;
}, nu = yt("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${tu.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), No = /* @__PURE__ */ L.forwardRef(function(t, r) {
  const n = sn({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: a,
    className: c,
    component: l = "button",
    disabled: f = !1,
    disableRipple: d = !1,
    disableTouchRipple: p = !1,
    focusRipple: m = !1,
    focusVisibleClassName: x,
    LinkComponent: S = "a",
    onBlur: g,
    onClick: h,
    onContextMenu: T,
    onDragLeave: k,
    onFocus: R,
    onFocusVisible: C,
    onKeyDown: y,
    onKeyUp: I,
    onMouseDown: A,
    onMouseLeave: ae,
    onMouseUp: G,
    onTouchEnd: s,
    onTouchMove: $,
    onTouchStart: M,
    tabIndex: j = 0,
    TouchRippleProps: X,
    touchRippleRef: se,
    type: ce,
    ...me
  } = n, xe = L.useRef(null), Ce = Bc(), w = Gn(Ce.ref, se), [O, F] = L.useState(!1);
  f && O && F(!1), L.useImperativeHandle(o, () => ({
    focusVisible: () => {
      F(!0), xe.current.focus();
    }
  }), []);
  const W = Ce.shouldMount && !d && !f;
  L.useEffect(() => {
    O && m && !d && Ce.pulsate();
  }, [d, m, O, Ce]);
  function D(U, Dt, Bt = p) {
    return Yt((vt) => (Dt && Dt(vt), Bt || Ce[U](vt), !0));
  }
  const K = D("start", A), V = D("stop", T), z = D("stop", k), Y = D("stop", G), H = D("stop", (U) => {
    O && U.preventDefault(), ae && ae(U);
  }), q = D("start", M), be = D("stop", s), _ = D("stop", $), we = D("stop", (U) => {
    Hn(U.target) || F(!1), g && g(U);
  }, !1), N = Yt((U) => {
    xe.current || (xe.current = U.currentTarget), Hn(U.target) && (F(!0), C && C(U)), R && R(U);
  }), Re = () => {
    const U = xe.current;
    return l && l !== "button" && !(U.tagName === "A" && U.href);
  }, Me = Yt((U) => {
    m && !U.repeat && O && U.key === " " && Ce.stop(U, () => {
      Ce.start(U);
    }), U.target === U.currentTarget && Re() && U.key === " " && U.preventDefault(), y && y(U), U.target === U.currentTarget && Re() && U.key === "Enter" && !f && (U.preventDefault(), h && h(U));
  }), Qe = Yt((U) => {
    m && U.key === " " && O && !U.defaultPrevented && Ce.stop(U, () => {
      Ce.pulsate(U);
    }), I && I(U), h && U.target === U.currentTarget && Re() && U.key === " " && !U.defaultPrevented && h(U);
  });
  let Ze = l;
  Ze === "button" && (me.href || me.to) && (Ze = S);
  const Le = {};
  Ze === "button" ? (Le.type = ce === void 0 ? "button" : ce, Le.disabled = f) : (!me.href && !me.to && (Le.role = "button"), f && (Le["aria-disabled"] = f));
  const br = Gn(r, xe), jt = {
    ...n,
    centerRipple: i,
    component: l,
    disabled: f,
    disableRipple: d,
    disableTouchRipple: p,
    focusRipple: m,
    tabIndex: j,
    focusVisible: O
  }, bt = ru(jt);
  return /* @__PURE__ */ Ve.jsxs(nu, {
    as: Ze,
    className: je(bt.root, c),
    ownerState: jt,
    onBlur: we,
    onClick: h,
    onContextMenu: V,
    onFocus: N,
    onKeyDown: Me,
    onKeyUp: Qe,
    onMouseDown: K,
    onMouseLeave: H,
    onMouseUp: Y,
    onDragLeave: z,
    onTouchEnd: be,
    onTouchMove: _,
    onTouchStart: q,
    ref: br,
    tabIndex: f ? -1 : j,
    type: ce,
    ...Le,
    ...me,
    children: [a, W ? /* @__PURE__ */ Ve.jsx(Mo, {
      ref: w,
      center: i,
      ...X
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (No.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Ws,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: v.bool,
  /**
   * The content of the component.
   */
  children: v.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: v.object,
  /**
   * @ignore
   */
  className: v.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: zs,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: v.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: v.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: v.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: v.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: v.string,
  /**
   * @ignore
   */
  href: v.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: v.elementType,
  /**
   * @ignore
   */
  onBlur: v.func,
  /**
   * @ignore
   */
  onClick: v.func,
  /**
   * @ignore
   */
  onContextMenu: v.func,
  /**
   * @ignore
   */
  onDragLeave: v.func,
  /**
   * @ignore
   */
  onFocus: v.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: v.func,
  /**
   * @ignore
   */
  onKeyDown: v.func,
  /**
   * @ignore
   */
  onKeyUp: v.func,
  /**
   * @ignore
   */
  onMouseDown: v.func,
  /**
   * @ignore
   */
  onMouseLeave: v.func,
  /**
   * @ignore
   */
  onMouseUp: v.func,
  /**
   * @ignore
   */
  onTouchEnd: v.func,
  /**
   * @ignore
   */
  onTouchMove: v.func,
  /**
   * @ignore
   */
  onTouchStart: v.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: v.oneOfType([v.arrayOf(v.oneOfType([v.func, v.object, v.bool])), v.func, v.object]),
  /**
   * @default 0
   */
  tabIndex: v.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: v.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: v.oneOfType([v.func, v.shape({
    current: v.shape({
      pulsate: v.func.isRequired,
      start: v.func.isRequired,
      stop: v.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: v.oneOfType([v.oneOf(["button", "reset", "submit"]), v.string])
});
function ou(e) {
  return typeof e.main == "string";
}
function iu(e, t = []) {
  if (!ou(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function au(e = []) {
  return ([, t]) => t && iu(t, e);
}
function su(e) {
  return yr("MuiButton", e);
}
const ft = nn("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), jo = /* @__PURE__ */ L.createContext({});
process.env.NODE_ENV !== "production" && (jo.displayName = "ButtonGroupContext");
const Do = /* @__PURE__ */ L.createContext(void 0);
process.env.NODE_ENV !== "production" && (Do.displayName = "ButtonGroupButtonContext");
const cu = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: n,
    size: o,
    variant: i,
    classes: a
  } = e, c = {
    root: ["root", i, `${i}${$e(t)}`, `size${$e(o)}`, `${i}Size${$e(o)}`, `color${$e(t)}`, r && "disableElevation", n && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${$e(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${$e(o)}`]
  }, l = so(c, su, a);
  return {
    ...a,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...l
  };
}, Bo = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}], uu = yt(No, {
  shouldForwardProp: (e) => uo(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${$e(r.color)}`], t[`size${$e(r.size)}`], t[`${r.variant}Size${$e(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth];
  }
})(Dc(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], r = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${ft.disabled}`]: {
      color: (e.vars || e).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: "var(--variant-containedColor)",
        backgroundColor: "var(--variant-containedBg)",
        boxShadow: (e.vars || e).shadows[2],
        "&:hover": {
          boxShadow: (e.vars || e).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (e.vars || e).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[8]
        },
        [`&.${ft.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${ft.disabled}`]: {
          color: (e.vars || e).palette.action.disabled,
          boxShadow: (e.vars || e).shadows[0],
          backgroundColor: (e.vars || e).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: "var(--variant-outlinedBorder, currentColor)",
        backgroundColor: "var(--variant-outlinedBg)",
        color: "var(--variant-outlinedColor)",
        [`&.${ft.disabled}`]: {
          border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: "var(--variant-textColor)",
        backgroundColor: "var(--variant-textBg)"
      }
    }, ...Object.entries(e.palette).filter(au()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[n].main,
        "--variant-outlinedColor": (e.vars || e).palette[n].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.5)` : dt(e.palette[n].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[n].contrastText,
        "--variant-containedBg": (e.vars || e).palette[n].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[n].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : dt(e.palette[n].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[n].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : dt(e.palette[n].main, e.palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit",
        borderColor: "currentColor",
        "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : t,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : r,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : dt(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : dt(e.palette.text.primary, e.palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: !0
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${ft.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${ft.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: !0
      },
      style: {
        width: "100%"
      }
    }]
  };
})), lu = yt("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, t[`iconSize${$e(r.size)}`]];
  }
})({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, ...Bo]
}), fu = yt("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, t[`iconSize${$e(r.size)}`]];
  }
})({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, ...Bo]
}), Fo = /* @__PURE__ */ L.forwardRef(function(t, r) {
  const n = L.useContext(jo), o = L.useContext(Do), i = Qt(n, t), a = sn({
    props: i,
    name: "MuiButton"
  }), {
    children: c,
    color: l = "primary",
    component: f = "button",
    className: d,
    disabled: p = !1,
    disableElevation: m = !1,
    disableFocusRipple: x = !1,
    endIcon: S,
    focusVisibleClassName: g,
    fullWidth: h = !1,
    size: T = "medium",
    startIcon: k,
    type: R,
    variant: C = "text",
    ...y
  } = a, I = {
    ...a,
    color: l,
    component: f,
    disabled: p,
    disableElevation: m,
    disableFocusRipple: x,
    fullWidth: h,
    size: T,
    type: R,
    variant: C
  }, A = cu(I), ae = k && /* @__PURE__ */ Ve.jsx(lu, {
    className: A.startIcon,
    ownerState: I,
    children: k
  }), G = S && /* @__PURE__ */ Ve.jsx(fu, {
    className: A.endIcon,
    ownerState: I,
    children: S
  }), s = o || "";
  return /* @__PURE__ */ Ve.jsxs(uu, {
    ownerState: I,
    className: je(n.className, A.root, d, s),
    component: f,
    disabled: p,
    focusRipple: !x,
    focusVisibleClassName: je(A.focusVisible, g),
    ref: r,
    type: R,
    ...y,
    classes: A,
    children: [ae, c, G]
  });
});
process.env.NODE_ENV !== "production" && (Fo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: v.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: v.object,
  /**
   * @ignore
   */
  className: v.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: v.oneOfType([v.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), v.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: v.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: v.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: v.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: v.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: v.bool,
  /**
   * Element placed after the children.
   */
  endIcon: v.node,
  /**
   * @ignore
   */
  focusVisibleClassName: v.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: v.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: v.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: v.oneOfType([v.oneOf(["small", "medium", "large"]), v.string]),
  /**
   * Element placed before the children.
   */
  startIcon: v.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: v.oneOfType([v.arrayOf(v.oneOfType([v.func, v.object, v.bool])), v.func, v.object]),
  /**
   * @ignore
   */
  type: v.oneOfType([v.oneOf(["button", "reset", "submit"]), v.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: v.oneOfType([v.oneOf(["contained", "outlined", "text"]), v.string])
});
function hu(e) {
  const { bgcolor: t, text: r, txtcolor: n, disabled: o, onClick: i, size: a } = e;
  return (
    //Uso el Button de la librería MUI y lo personalizo con las props que pasan a mi componente.
    /* @__PURE__ */ Ve.jsx(
      Fo,
      {
        type: "button",
        onClick: i,
        disabled: o,
        size: a,
        sx: { backgroundColor: t, color: n },
        children: r
      }
    )
  );
}
export {
  hu as CustomButton
};
//# sourceMappingURL=index.es.js.map
