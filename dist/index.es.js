var LN = Object.defineProperty;
var zN = (i, s, c) => s in i ? LN(i, s, { enumerable: !0, configurable: !0, writable: !0, value: c }) : i[s] = c;
var Jv = (i, s, c) => zN(i, typeof s != "symbol" ? s + "" : s, c);
import * as ve from "react";
import vi, { forwardRef as UN, useContext as PN, Children as $N, isValidElement as Bg, cloneElement as Hg, useState as jN } from "react";
function HR(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var sE = { exports: {} }, eh = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pw;
function FN() {
  if (Pw) return eh;
  Pw = 1;
  var i = vi, s = Symbol.for("react.element"), c = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, h = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, S = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(C, x, k) {
    var _, M = {}, A = null, $ = null;
    k !== void 0 && (A = "" + k), x.key !== void 0 && (A = "" + x.key), x.ref !== void 0 && ($ = x.ref);
    for (_ in x) p.call(x, _) && !S.hasOwnProperty(_) && (M[_] = x[_]);
    if (C && C.defaultProps) for (_ in x = C.defaultProps, x) M[_] === void 0 && (M[_] = x[_]);
    return { $$typeof: s, type: C, key: A, ref: $, props: M, _owner: h.current };
  }
  return eh.Fragment = c, eh.jsx = y, eh.jsxs = y, eh;
}
var th = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $w;
function BN() {
  return $w || ($w = 1, process.env.NODE_ENV !== "production" && function() {
    var i = vi, s = Symbol.for("react.element"), c = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), C = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), B = Symbol.iterator, L = "@@iterator";
    function P(z) {
      if (z === null || typeof z != "object")
        return null;
      var me = B && z[B] || z[L];
      return typeof me == "function" ? me : null;
    }
    var ee = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function le(z) {
      {
        for (var me = arguments.length, _e = new Array(me > 1 ? me - 1 : 0), rt = 1; rt < me; rt++)
          _e[rt - 1] = arguments[rt];
        q("error", z, _e);
      }
    }
    function q(z, me, _e) {
      {
        var rt = ee.ReactDebugCurrentFrame, _t = rt.getStackAddendum();
        _t !== "" && (me += "%s", _e = _e.concat([_t]));
        var zt = _e.map(function(ft) {
          return String(ft);
        });
        zt.unshift("Warning: " + me), Function.prototype.apply.call(console[z], console, zt);
      }
    }
    var Y = !1, U = !1, re = !1, te = !1, Ae = !1, Oe;
    Oe = Symbol.for("react.module.reference");
    function O(z) {
      return !!(typeof z == "string" || typeof z == "function" || z === p || z === S || Ae || z === h || z === k || z === _ || te || z === $ || Y || U || re || typeof z == "object" && z !== null && (z.$$typeof === A || z.$$typeof === M || z.$$typeof === y || z.$$typeof === C || z.$$typeof === x || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      z.$$typeof === Oe || z.getModuleId !== void 0));
    }
    function ne(z, me, _e) {
      var rt = z.displayName;
      if (rt)
        return rt;
      var _t = me.displayName || me.name || "";
      return _t !== "" ? _e + "(" + _t + ")" : _e;
    }
    function be(z) {
      return z.displayName || "Context";
    }
    function ue(z) {
      if (z == null)
        return null;
      if (typeof z.tag == "number" && le("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof z == "function")
        return z.displayName || z.name || null;
      if (typeof z == "string")
        return z;
      switch (z) {
        case p:
          return "Fragment";
        case c:
          return "Portal";
        case S:
          return "Profiler";
        case h:
          return "StrictMode";
        case k:
          return "Suspense";
        case _:
          return "SuspenseList";
      }
      if (typeof z == "object")
        switch (z.$$typeof) {
          case C:
            var me = z;
            return be(me) + ".Consumer";
          case y:
            var _e = z;
            return be(_e._context) + ".Provider";
          case x:
            return ne(z, z.render, "ForwardRef");
          case M:
            var rt = z.displayName || null;
            return rt !== null ? rt : ue(z.type) || "Memo";
          case A: {
            var _t = z, zt = _t._payload, ft = _t._init;
            try {
              return ue(ft(zt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var xe = Object.assign, Le = 0, we, Fe, se, Ee, I, fe, Re;
    function Ie() {
    }
    Ie.__reactDisabledLog = !0;
    function De() {
      {
        if (Le === 0) {
          we = console.log, Fe = console.info, se = console.warn, Ee = console.error, I = console.group, fe = console.groupCollapsed, Re = console.groupEnd;
          var z = {
            configurable: !0,
            enumerable: !0,
            value: Ie,
            writable: !0
          };
          Object.defineProperties(console, {
            info: z,
            log: z,
            warn: z,
            error: z,
            group: z,
            groupCollapsed: z,
            groupEnd: z
          });
        }
        Le++;
      }
    }
    function Ze() {
      {
        if (Le--, Le === 0) {
          var z = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: xe({}, z, {
              value: we
            }),
            info: xe({}, z, {
              value: Fe
            }),
            warn: xe({}, z, {
              value: se
            }),
            error: xe({}, z, {
              value: Ee
            }),
            group: xe({}, z, {
              value: I
            }),
            groupCollapsed: xe({}, z, {
              value: fe
            }),
            groupEnd: xe({}, z, {
              value: Re
            })
          });
        }
        Le < 0 && le("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Pe = ee.ReactCurrentDispatcher, Qe;
    function Ve(z, me, _e) {
      {
        if (Qe === void 0)
          try {
            throw Error();
          } catch (_t) {
            var rt = _t.stack.trim().match(/\n( *(at )?)/);
            Qe = rt && rt[1] || "";
          }
        return `
` + Qe + z;
      }
    }
    var it = !1, st;
    {
      var Ct = typeof WeakMap == "function" ? WeakMap : Map;
      st = new Ct();
    }
    function ye(z, me) {
      if (!z || it)
        return "";
      {
        var _e = st.get(z);
        if (_e !== void 0)
          return _e;
      }
      var rt;
      it = !0;
      var _t = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var zt;
      zt = Pe.current, Pe.current = null, De();
      try {
        if (me) {
          var ft = function() {
            throw Error();
          };
          if (Object.defineProperty(ft.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ft, []);
            } catch (_r) {
              rt = _r;
            }
            Reflect.construct(z, [], ft);
          } else {
            try {
              ft.call();
            } catch (_r) {
              rt = _r;
            }
            z.call(ft.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_r) {
            rt = _r;
          }
          z();
        }
      } catch (_r) {
        if (_r && rt && typeof _r.stack == "string") {
          for (var xt = _r.stack.split(`
`), ur = rt.stack.split(`
`), cn = xt.length - 1, xn = ur.length - 1; cn >= 1 && xn >= 0 && xt[cn] !== ur[xn]; )
            xn--;
          for (; cn >= 1 && xn >= 0; cn--, xn--)
            if (xt[cn] !== ur[xn]) {
              if (cn !== 1 || xn !== 1)
                do
                  if (cn--, xn--, xn < 0 || xt[cn] !== ur[xn]) {
                    var Kr = `
` + xt[cn].replace(" at new ", " at ");
                    return z.displayName && Kr.includes("<anonymous>") && (Kr = Kr.replace("<anonymous>", z.displayName)), typeof z == "function" && st.set(z, Kr), Kr;
                  }
                while (cn >= 1 && xn >= 0);
              break;
            }
        }
      } finally {
        it = !1, Pe.current = zt, Ze(), Error.prepareStackTrace = _t;
      }
      var bo = z ? z.displayName || z.name : "", Bt = bo ? Ve(bo) : "";
      return typeof z == "function" && st.set(z, Bt), Bt;
    }
    function Tt(z, me, _e) {
      return ye(z, !1);
    }
    function ke(z) {
      var me = z.prototype;
      return !!(me && me.isReactComponent);
    }
    function Mt(z, me, _e) {
      if (z == null)
        return "";
      if (typeof z == "function")
        return ye(z, ke(z));
      if (typeof z == "string")
        return Ve(z);
      switch (z) {
        case k:
          return Ve("Suspense");
        case _:
          return Ve("SuspenseList");
      }
      if (typeof z == "object")
        switch (z.$$typeof) {
          case x:
            return Tt(z.render);
          case M:
            return Mt(z.type, me, _e);
          case A: {
            var rt = z, _t = rt._payload, zt = rt._init;
            try {
              return Mt(zt(_t), me, _e);
            } catch {
            }
          }
        }
      return "";
    }
    var Ft = Object.prototype.hasOwnProperty, It = {}, yn = ee.ReactDebugCurrentFrame;
    function Tn(z) {
      if (z) {
        var me = z._owner, _e = Mt(z.type, z._source, me ? me.type : null);
        yn.setExtraStackFrame(_e);
      } else
        yn.setExtraStackFrame(null);
    }
    function kn(z, me, _e, rt, _t) {
      {
        var zt = Function.call.bind(Ft);
        for (var ft in z)
          if (zt(z, ft)) {
            var xt = void 0;
            try {
              if (typeof z[ft] != "function") {
                var ur = Error((rt || "React class") + ": " + _e + " type `" + ft + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof z[ft] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ur.name = "Invariant Violation", ur;
              }
              xt = z[ft](me, ft, rt, _e, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (cn) {
              xt = cn;
            }
            xt && !(xt instanceof Error) && (Tn(_t), le("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", rt || "React class", _e, ft, typeof xt), Tn(null)), xt instanceof Error && !(xt.message in It) && (It[xt.message] = !0, Tn(_t), le("Failed %s type: %s", _e, xt.message), Tn(null));
          }
      }
    }
    var Ln = Array.isArray;
    function qn(z) {
      return Ln(z);
    }
    function Xe(z) {
      {
        var me = typeof Symbol == "function" && Symbol.toStringTag, _e = me && z[Symbol.toStringTag] || z.constructor.name || "Object";
        return _e;
      }
    }
    function Xn(z) {
      try {
        return Fn(z), !1;
      } catch {
        return !0;
      }
    }
    function Fn(z) {
      return "" + z;
    }
    function Kn(z) {
      if (Xn(z))
        return le("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xe(z)), Fn(z);
    }
    var Kt = ee.ReactCurrentOwner, lr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Xr, Pr, Ce;
    Ce = {};
    function Ke(z) {
      if (Ft.call(z, "ref")) {
        var me = Object.getOwnPropertyDescriptor(z, "ref").get;
        if (me && me.isReactWarning)
          return !1;
      }
      return z.ref !== void 0;
    }
    function Et(z) {
      if (Ft.call(z, "key")) {
        var me = Object.getOwnPropertyDescriptor(z, "key").get;
        if (me && me.isReactWarning)
          return !1;
      }
      return z.key !== void 0;
    }
    function Nt(z, me) {
      if (typeof z.ref == "string" && Kt.current && me && Kt.current.stateNode !== me) {
        var _e = ue(Kt.current.type);
        Ce[_e] || (le('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ue(Kt.current.type), z.ref), Ce[_e] = !0);
      }
    }
    function ln(z, me) {
      {
        var _e = function() {
          Xr || (Xr = !0, le("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", me));
        };
        _e.isReactWarning = !0, Object.defineProperty(z, "key", {
          get: _e,
          configurable: !0
        });
      }
    }
    function zn(z, me) {
      {
        var _e = function() {
          Pr || (Pr = !0, le("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", me));
        };
        _e.isReactWarning = !0, Object.defineProperty(z, "ref", {
          get: _e,
          configurable: !0
        });
      }
    }
    var gn = function(z, me, _e, rt, _t, zt, ft) {
      var xt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: z,
        key: me,
        ref: _e,
        props: ft,
        // Record the component responsible for creating this element.
        _owner: zt
      };
      return xt._store = {}, Object.defineProperty(xt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(xt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: rt
      }), Object.defineProperty(xt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _t
      }), Object.freeze && (Object.freeze(xt.props), Object.freeze(xt)), xt;
    };
    function gr(z, me, _e, rt, _t) {
      {
        var zt, ft = {}, xt = null, ur = null;
        _e !== void 0 && (Kn(_e), xt = "" + _e), Et(me) && (Kn(me.key), xt = "" + me.key), Ke(me) && (ur = me.ref, Nt(me, _t));
        for (zt in me)
          Ft.call(me, zt) && !lr.hasOwnProperty(zt) && (ft[zt] = me[zt]);
        if (z && z.defaultProps) {
          var cn = z.defaultProps;
          for (zt in cn)
            ft[zt] === void 0 && (ft[zt] = cn[zt]);
        }
        if (xt || ur) {
          var xn = typeof z == "function" ? z.displayName || z.name || "Unknown" : z;
          xt && ln(ft, xn), ur && zn(ft, xn);
        }
        return gn(z, xt, ur, _t, rt, Kt.current, ft);
      }
    }
    var Yt = ee.ReactCurrentOwner, $r = ee.ReactDebugCurrentFrame;
    function Wt(z) {
      if (z) {
        var me = z._owner, _e = Mt(z.type, z._source, me ? me.type : null);
        $r.setExtraStackFrame(_e);
      } else
        $r.setExtraStackFrame(null);
    }
    var Zt;
    Zt = !1;
    function yo(z) {
      return typeof z == "object" && z !== null && z.$$typeof === s;
    }
    function gi() {
      {
        if (Yt.current) {
          var z = ue(Yt.current.type);
          if (z)
            return `

Check the render method of \`` + z + "`.";
        }
        return "";
      }
    }
    function Hi(z) {
      return "";
    }
    var go = {};
    function mt(z) {
      {
        var me = gi();
        if (!me) {
          var _e = typeof z == "string" ? z : z.displayName || z.name;
          _e && (me = `

Check the top-level render call using <` + _e + ">.");
        }
        return me;
      }
    }
    function Zn(z, me) {
      {
        if (!z._store || z._store.validated || z.key != null)
          return;
        z._store.validated = !0;
        var _e = mt(me);
        if (go[_e])
          return;
        go[_e] = !0;
        var rt = "";
        z && z._owner && z._owner !== Yt.current && (rt = " It was passed a child from " + ue(z._owner.type) + "."), Wt(z), le('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', _e, rt), Wt(null);
      }
    }
    function Ql(z, me) {
      {
        if (typeof z != "object")
          return;
        if (qn(z))
          for (var _e = 0; _e < z.length; _e++) {
            var rt = z[_e];
            yo(rt) && Zn(rt, me);
          }
        else if (yo(z))
          z._store && (z._store.validated = !0);
        else if (z) {
          var _t = P(z);
          if (typeof _t == "function" && _t !== z.entries)
            for (var zt = _t.call(z), ft; !(ft = zt.next()).done; )
              yo(ft.value) && Zn(ft.value, me);
        }
      }
    }
    function nl(z) {
      {
        var me = z.type;
        if (me == null || typeof me == "string")
          return;
        var _e;
        if (typeof me == "function")
          _e = me.propTypes;
        else if (typeof me == "object" && (me.$$typeof === x || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        me.$$typeof === M))
          _e = me.propTypes;
        else
          return;
        if (_e) {
          var rt = ue(me);
          kn(_e, z.props, "prop", rt, z);
        } else if (me.PropTypes !== void 0 && !Zt) {
          Zt = !0;
          var _t = ue(me);
          le("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _t || "Unknown");
        }
        typeof me.getDefaultProps == "function" && !me.getDefaultProps.isReactClassApproved && le("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ql(z) {
      {
        for (var me = Object.keys(z.props), _e = 0; _e < me.length; _e++) {
          var rt = me[_e];
          if (rt !== "children" && rt !== "key") {
            Wt(z), le("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", rt), Wt(null);
            break;
          }
        }
        z.ref !== null && (Wt(z), le("Invalid attribute `ref` supplied to `React.Fragment`."), Wt(null));
      }
    }
    var Si = {};
    function Vi(z, me, _e, rt, _t, zt) {
      {
        var ft = O(z);
        if (!ft) {
          var xt = "";
          (z === void 0 || typeof z == "object" && z !== null && Object.keys(z).length === 0) && (xt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ur = Hi();
          ur ? xt += ur : xt += gi();
          var cn;
          z === null ? cn = "null" : qn(z) ? cn = "array" : z !== void 0 && z.$$typeof === s ? (cn = "<" + (ue(z.type) || "Unknown") + " />", xt = " Did you accidentally export a JSX literal instead of a component?") : cn = typeof z, le("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", cn, xt);
        }
        var xn = gr(z, me, _e, _t, zt);
        if (xn == null)
          return xn;
        if (ft) {
          var Kr = me.children;
          if (Kr !== void 0)
            if (rt)
              if (qn(Kr)) {
                for (var bo = 0; bo < Kr.length; bo++)
                  Ql(Kr[bo], z);
                Object.freeze && Object.freeze(Kr);
              } else
                le("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ql(Kr, z);
        }
        if (Ft.call(me, "key")) {
          var Bt = ue(z), _r = Object.keys(me).filter(function(bi) {
            return bi !== "key";
          }), ma = _r.length > 0 ? "{key: someKey, " + _r.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Si[Bt + ma]) {
            var wt = _r.length > 0 ? "{" + _r.join(": ..., ") + ": ...}" : "{}";
            le(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ma, Bt, wt, Bt), Si[Bt + ma] = !0;
          }
        }
        return z === p ? ql(xn) : nl(xn), xn;
      }
    }
    function ha(z, me, _e) {
      return Vi(z, me, _e, !0);
    }
    function ni(z, me, _e) {
      return Vi(z, me, _e, !1);
    }
    var So = ni, rl = ha;
    th.Fragment = p, th.jsx = So, th.jsxs = rl;
  }()), th;
}
process.env.NODE_ENV === "production" ? sE.exports = FN() : sE.exports = BN();
var Dt = sE.exports, cE = { exports: {} }, Ng = { exports: {} }, nn = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jw;
function HN() {
  if (jw) return nn;
  jw = 1;
  var i = typeof Symbol == "function" && Symbol.for, s = i ? Symbol.for("react.element") : 60103, c = i ? Symbol.for("react.portal") : 60106, p = i ? Symbol.for("react.fragment") : 60107, h = i ? Symbol.for("react.strict_mode") : 60108, S = i ? Symbol.for("react.profiler") : 60114, y = i ? Symbol.for("react.provider") : 60109, C = i ? Symbol.for("react.context") : 60110, x = i ? Symbol.for("react.async_mode") : 60111, k = i ? Symbol.for("react.concurrent_mode") : 60111, _ = i ? Symbol.for("react.forward_ref") : 60112, M = i ? Symbol.for("react.suspense") : 60113, A = i ? Symbol.for("react.suspense_list") : 60120, $ = i ? Symbol.for("react.memo") : 60115, B = i ? Symbol.for("react.lazy") : 60116, L = i ? Symbol.for("react.block") : 60121, P = i ? Symbol.for("react.fundamental") : 60117, ee = i ? Symbol.for("react.responder") : 60118, le = i ? Symbol.for("react.scope") : 60119;
  function q(U) {
    if (typeof U == "object" && U !== null) {
      var re = U.$$typeof;
      switch (re) {
        case s:
          switch (U = U.type, U) {
            case x:
            case k:
            case p:
            case S:
            case h:
            case M:
              return U;
            default:
              switch (U = U && U.$$typeof, U) {
                case C:
                case _:
                case B:
                case $:
                case y:
                  return U;
                default:
                  return re;
              }
          }
        case c:
          return re;
      }
    }
  }
  function Y(U) {
    return q(U) === k;
  }
  return nn.AsyncMode = x, nn.ConcurrentMode = k, nn.ContextConsumer = C, nn.ContextProvider = y, nn.Element = s, nn.ForwardRef = _, nn.Fragment = p, nn.Lazy = B, nn.Memo = $, nn.Portal = c, nn.Profiler = S, nn.StrictMode = h, nn.Suspense = M, nn.isAsyncMode = function(U) {
    return Y(U) || q(U) === x;
  }, nn.isConcurrentMode = Y, nn.isContextConsumer = function(U) {
    return q(U) === C;
  }, nn.isContextProvider = function(U) {
    return q(U) === y;
  }, nn.isElement = function(U) {
    return typeof U == "object" && U !== null && U.$$typeof === s;
  }, nn.isForwardRef = function(U) {
    return q(U) === _;
  }, nn.isFragment = function(U) {
    return q(U) === p;
  }, nn.isLazy = function(U) {
    return q(U) === B;
  }, nn.isMemo = function(U) {
    return q(U) === $;
  }, nn.isPortal = function(U) {
    return q(U) === c;
  }, nn.isProfiler = function(U) {
    return q(U) === S;
  }, nn.isStrictMode = function(U) {
    return q(U) === h;
  }, nn.isSuspense = function(U) {
    return q(U) === M;
  }, nn.isValidElementType = function(U) {
    return typeof U == "string" || typeof U == "function" || U === p || U === k || U === S || U === h || U === M || U === A || typeof U == "object" && U !== null && (U.$$typeof === B || U.$$typeof === $ || U.$$typeof === y || U.$$typeof === C || U.$$typeof === _ || U.$$typeof === P || U.$$typeof === ee || U.$$typeof === le || U.$$typeof === L);
  }, nn.typeOf = q, nn;
}
var rn = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fw;
function VN() {
  return Fw || (Fw = 1, process.env.NODE_ENV !== "production" && function() {
    var i = typeof Symbol == "function" && Symbol.for, s = i ? Symbol.for("react.element") : 60103, c = i ? Symbol.for("react.portal") : 60106, p = i ? Symbol.for("react.fragment") : 60107, h = i ? Symbol.for("react.strict_mode") : 60108, S = i ? Symbol.for("react.profiler") : 60114, y = i ? Symbol.for("react.provider") : 60109, C = i ? Symbol.for("react.context") : 60110, x = i ? Symbol.for("react.async_mode") : 60111, k = i ? Symbol.for("react.concurrent_mode") : 60111, _ = i ? Symbol.for("react.forward_ref") : 60112, M = i ? Symbol.for("react.suspense") : 60113, A = i ? Symbol.for("react.suspense_list") : 60120, $ = i ? Symbol.for("react.memo") : 60115, B = i ? Symbol.for("react.lazy") : 60116, L = i ? Symbol.for("react.block") : 60121, P = i ? Symbol.for("react.fundamental") : 60117, ee = i ? Symbol.for("react.responder") : 60118, le = i ? Symbol.for("react.scope") : 60119;
    function q(ye) {
      return typeof ye == "string" || typeof ye == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      ye === p || ye === k || ye === S || ye === h || ye === M || ye === A || typeof ye == "object" && ye !== null && (ye.$$typeof === B || ye.$$typeof === $ || ye.$$typeof === y || ye.$$typeof === C || ye.$$typeof === _ || ye.$$typeof === P || ye.$$typeof === ee || ye.$$typeof === le || ye.$$typeof === L);
    }
    function Y(ye) {
      if (typeof ye == "object" && ye !== null) {
        var Tt = ye.$$typeof;
        switch (Tt) {
          case s:
            var ke = ye.type;
            switch (ke) {
              case x:
              case k:
              case p:
              case S:
              case h:
              case M:
                return ke;
              default:
                var Mt = ke && ke.$$typeof;
                switch (Mt) {
                  case C:
                  case _:
                  case B:
                  case $:
                  case y:
                    return Mt;
                  default:
                    return Tt;
                }
            }
          case c:
            return Tt;
        }
      }
    }
    var U = x, re = k, te = C, Ae = y, Oe = s, O = _, ne = p, be = B, ue = $, xe = c, Le = S, we = h, Fe = M, se = !1;
    function Ee(ye) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), I(ye) || Y(ye) === x;
    }
    function I(ye) {
      return Y(ye) === k;
    }
    function fe(ye) {
      return Y(ye) === C;
    }
    function Re(ye) {
      return Y(ye) === y;
    }
    function Ie(ye) {
      return typeof ye == "object" && ye !== null && ye.$$typeof === s;
    }
    function De(ye) {
      return Y(ye) === _;
    }
    function Ze(ye) {
      return Y(ye) === p;
    }
    function Pe(ye) {
      return Y(ye) === B;
    }
    function Qe(ye) {
      return Y(ye) === $;
    }
    function Ve(ye) {
      return Y(ye) === c;
    }
    function it(ye) {
      return Y(ye) === S;
    }
    function st(ye) {
      return Y(ye) === h;
    }
    function Ct(ye) {
      return Y(ye) === M;
    }
    rn.AsyncMode = U, rn.ConcurrentMode = re, rn.ContextConsumer = te, rn.ContextProvider = Ae, rn.Element = Oe, rn.ForwardRef = O, rn.Fragment = ne, rn.Lazy = be, rn.Memo = ue, rn.Portal = xe, rn.Profiler = Le, rn.StrictMode = we, rn.Suspense = Fe, rn.isAsyncMode = Ee, rn.isConcurrentMode = I, rn.isContextConsumer = fe, rn.isContextProvider = Re, rn.isElement = Ie, rn.isForwardRef = De, rn.isFragment = Ze, rn.isLazy = Pe, rn.isMemo = Qe, rn.isPortal = Ve, rn.isProfiler = it, rn.isStrictMode = st, rn.isSuspense = Ct, rn.isValidElementType = q, rn.typeOf = Y;
  }()), rn;
}
var Bw;
function RE() {
  return Bw || (Bw = 1, process.env.NODE_ENV === "production" ? Ng.exports = HN() : Ng.exports = VN()), Ng.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var X1, Hw;
function IN() {
  if (Hw) return X1;
  Hw = 1;
  var i = Object.getOwnPropertySymbols, s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
  function p(S) {
    if (S == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(S);
  }
  function h() {
    try {
      if (!Object.assign)
        return !1;
      var S = new String("abc");
      if (S[5] = "de", Object.getOwnPropertyNames(S)[0] === "5")
        return !1;
      for (var y = {}, C = 0; C < 10; C++)
        y["_" + String.fromCharCode(C)] = C;
      var x = Object.getOwnPropertyNames(y).map(function(_) {
        return y[_];
      });
      if (x.join("") !== "0123456789")
        return !1;
      var k = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(_) {
        k[_] = _;
      }), Object.keys(Object.assign({}, k)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return X1 = h() ? Object.assign : function(S, y) {
    for (var C, x = p(S), k, _ = 1; _ < arguments.length; _++) {
      C = Object(arguments[_]);
      for (var M in C)
        s.call(C, M) && (x[M] = C[M]);
      if (i) {
        k = i(C);
        for (var A = 0; A < k.length; A++)
          c.call(C, k[A]) && (x[k[A]] = C[k[A]]);
      }
    }
    return x;
  }, X1;
}
var K1, Vw;
function OE() {
  if (Vw) return K1;
  Vw = 1;
  var i = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return K1 = i, K1;
}
var Z1, Iw;
function VR() {
  return Iw || (Iw = 1, Z1 = Function.call.bind(Object.prototype.hasOwnProperty)), Z1;
}
var J1, Yw;
function YN() {
  if (Yw) return J1;
  Yw = 1;
  var i = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var s = OE(), c = {}, p = VR();
    i = function(S) {
      var y = "Warning: " + S;
      typeof console < "u" && console.error(y);
      try {
        throw new Error(y);
      } catch {
      }
    };
  }
  function h(S, y, C, x, k) {
    if (process.env.NODE_ENV !== "production") {
      for (var _ in S)
        if (p(S, _)) {
          var M;
          try {
            if (typeof S[_] != "function") {
              var A = Error(
                (x || "React class") + ": " + C + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw A.name = "Invariant Violation", A;
            }
            M = S[_](y, _, x, C, null, s);
          } catch (B) {
            M = B;
          }
          if (M && !(M instanceof Error) && i(
            (x || "React class") + ": type specification of " + C + " `" + _ + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof M + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), M instanceof Error && !(M.message in c)) {
            c[M.message] = !0;
            var $ = k ? k() : "";
            i(
              "Failed " + C + " type: " + M.message + ($ ?? "")
            );
          }
        }
    }
  }
  return h.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (c = {});
  }, J1 = h, J1;
}
var eE, Ww;
function WN() {
  if (Ww) return eE;
  Ww = 1;
  var i = RE(), s = IN(), c = OE(), p = VR(), h = YN(), S = function() {
  };
  process.env.NODE_ENV !== "production" && (S = function(C) {
    var x = "Warning: " + C;
    typeof console < "u" && console.error(x);
    try {
      throw new Error(x);
    } catch {
    }
  });
  function y() {
    return null;
  }
  return eE = function(C, x) {
    var k = typeof Symbol == "function" && Symbol.iterator, _ = "@@iterator";
    function M(I) {
      var fe = I && (k && I[k] || I[_]);
      if (typeof fe == "function")
        return fe;
    }
    var A = "<<anonymous>>", $ = {
      array: ee("array"),
      bigint: ee("bigint"),
      bool: ee("boolean"),
      func: ee("function"),
      number: ee("number"),
      object: ee("object"),
      string: ee("string"),
      symbol: ee("symbol"),
      any: le(),
      arrayOf: q,
      element: Y(),
      elementType: U(),
      instanceOf: re,
      node: O(),
      objectOf: Ae,
      oneOf: te,
      oneOfType: Oe,
      shape: be,
      exact: ue
    };
    function B(I, fe) {
      return I === fe ? I !== 0 || 1 / I === 1 / fe : I !== I && fe !== fe;
    }
    function L(I, fe) {
      this.message = I, this.data = fe && typeof fe == "object" ? fe : {}, this.stack = "";
    }
    L.prototype = Error.prototype;
    function P(I) {
      if (process.env.NODE_ENV !== "production")
        var fe = {}, Re = 0;
      function Ie(Ze, Pe, Qe, Ve, it, st, Ct) {
        if (Ve = Ve || A, st = st || Qe, Ct !== c) {
          if (x) {
            var ye = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw ye.name = "Invariant Violation", ye;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Tt = Ve + ":" + Qe;
            !fe[Tt] && // Avoid spamming the console because they are often not actionable except for lib authors
            Re < 3 && (S(
              "You are manually calling a React.PropTypes validation function for the `" + st + "` prop on `" + Ve + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), fe[Tt] = !0, Re++);
          }
        }
        return Pe[Qe] == null ? Ze ? Pe[Qe] === null ? new L("The " + it + " `" + st + "` is marked as required " + ("in `" + Ve + "`, but its value is `null`.")) : new L("The " + it + " `" + st + "` is marked as required in " + ("`" + Ve + "`, but its value is `undefined`.")) : null : I(Pe, Qe, Ve, it, st);
      }
      var De = Ie.bind(null, !1);
      return De.isRequired = Ie.bind(null, !0), De;
    }
    function ee(I) {
      function fe(Re, Ie, De, Ze, Pe, Qe) {
        var Ve = Re[Ie], it = we(Ve);
        if (it !== I) {
          var st = Fe(Ve);
          return new L(
            "Invalid " + Ze + " `" + Pe + "` of type " + ("`" + st + "` supplied to `" + De + "`, expected ") + ("`" + I + "`."),
            { expectedType: I }
          );
        }
        return null;
      }
      return P(fe);
    }
    function le() {
      return P(y);
    }
    function q(I) {
      function fe(Re, Ie, De, Ze, Pe) {
        if (typeof I != "function")
          return new L("Property `" + Pe + "` of component `" + De + "` has invalid PropType notation inside arrayOf.");
        var Qe = Re[Ie];
        if (!Array.isArray(Qe)) {
          var Ve = we(Qe);
          return new L("Invalid " + Ze + " `" + Pe + "` of type " + ("`" + Ve + "` supplied to `" + De + "`, expected an array."));
        }
        for (var it = 0; it < Qe.length; it++) {
          var st = I(Qe, it, De, Ze, Pe + "[" + it + "]", c);
          if (st instanceof Error)
            return st;
        }
        return null;
      }
      return P(fe);
    }
    function Y() {
      function I(fe, Re, Ie, De, Ze) {
        var Pe = fe[Re];
        if (!C(Pe)) {
          var Qe = we(Pe);
          return new L("Invalid " + De + " `" + Ze + "` of type " + ("`" + Qe + "` supplied to `" + Ie + "`, expected a single ReactElement."));
        }
        return null;
      }
      return P(I);
    }
    function U() {
      function I(fe, Re, Ie, De, Ze) {
        var Pe = fe[Re];
        if (!i.isValidElementType(Pe)) {
          var Qe = we(Pe);
          return new L("Invalid " + De + " `" + Ze + "` of type " + ("`" + Qe + "` supplied to `" + Ie + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return P(I);
    }
    function re(I) {
      function fe(Re, Ie, De, Ze, Pe) {
        if (!(Re[Ie] instanceof I)) {
          var Qe = I.name || A, Ve = Ee(Re[Ie]);
          return new L("Invalid " + Ze + " `" + Pe + "` of type " + ("`" + Ve + "` supplied to `" + De + "`, expected ") + ("instance of `" + Qe + "`."));
        }
        return null;
      }
      return P(fe);
    }
    function te(I) {
      if (!Array.isArray(I))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? S(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : S("Invalid argument supplied to oneOf, expected an array.")), y;
      function fe(Re, Ie, De, Ze, Pe) {
        for (var Qe = Re[Ie], Ve = 0; Ve < I.length; Ve++)
          if (B(Qe, I[Ve]))
            return null;
        var it = JSON.stringify(I, function(Ct, ye) {
          var Tt = Fe(ye);
          return Tt === "symbol" ? String(ye) : ye;
        });
        return new L("Invalid " + Ze + " `" + Pe + "` of value `" + String(Qe) + "` " + ("supplied to `" + De + "`, expected one of " + it + "."));
      }
      return P(fe);
    }
    function Ae(I) {
      function fe(Re, Ie, De, Ze, Pe) {
        if (typeof I != "function")
          return new L("Property `" + Pe + "` of component `" + De + "` has invalid PropType notation inside objectOf.");
        var Qe = Re[Ie], Ve = we(Qe);
        if (Ve !== "object")
          return new L("Invalid " + Ze + " `" + Pe + "` of type " + ("`" + Ve + "` supplied to `" + De + "`, expected an object."));
        for (var it in Qe)
          if (p(Qe, it)) {
            var st = I(Qe, it, De, Ze, Pe + "." + it, c);
            if (st instanceof Error)
              return st;
          }
        return null;
      }
      return P(fe);
    }
    function Oe(I) {
      if (!Array.isArray(I))
        return process.env.NODE_ENV !== "production" && S("Invalid argument supplied to oneOfType, expected an instance of array."), y;
      for (var fe = 0; fe < I.length; fe++) {
        var Re = I[fe];
        if (typeof Re != "function")
          return S(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + se(Re) + " at index " + fe + "."
          ), y;
      }
      function Ie(De, Ze, Pe, Qe, Ve) {
        for (var it = [], st = 0; st < I.length; st++) {
          var Ct = I[st], ye = Ct(De, Ze, Pe, Qe, Ve, c);
          if (ye == null)
            return null;
          ye.data && p(ye.data, "expectedType") && it.push(ye.data.expectedType);
        }
        var Tt = it.length > 0 ? ", expected one of type [" + it.join(", ") + "]" : "";
        return new L("Invalid " + Qe + " `" + Ve + "` supplied to " + ("`" + Pe + "`" + Tt + "."));
      }
      return P(Ie);
    }
    function O() {
      function I(fe, Re, Ie, De, Ze) {
        return xe(fe[Re]) ? null : new L("Invalid " + De + " `" + Ze + "` supplied to " + ("`" + Ie + "`, expected a ReactNode."));
      }
      return P(I);
    }
    function ne(I, fe, Re, Ie, De) {
      return new L(
        (I || "React class") + ": " + fe + " type `" + Re + "." + Ie + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + De + "`."
      );
    }
    function be(I) {
      function fe(Re, Ie, De, Ze, Pe) {
        var Qe = Re[Ie], Ve = we(Qe);
        if (Ve !== "object")
          return new L("Invalid " + Ze + " `" + Pe + "` of type `" + Ve + "` " + ("supplied to `" + De + "`, expected `object`."));
        for (var it in I) {
          var st = I[it];
          if (typeof st != "function")
            return ne(De, Ze, Pe, it, Fe(st));
          var Ct = st(Qe, it, De, Ze, Pe + "." + it, c);
          if (Ct)
            return Ct;
        }
        return null;
      }
      return P(fe);
    }
    function ue(I) {
      function fe(Re, Ie, De, Ze, Pe) {
        var Qe = Re[Ie], Ve = we(Qe);
        if (Ve !== "object")
          return new L("Invalid " + Ze + " `" + Pe + "` of type `" + Ve + "` " + ("supplied to `" + De + "`, expected `object`."));
        var it = s({}, Re[Ie], I);
        for (var st in it) {
          var Ct = I[st];
          if (p(I, st) && typeof Ct != "function")
            return ne(De, Ze, Pe, st, Fe(Ct));
          if (!Ct)
            return new L(
              "Invalid " + Ze + " `" + Pe + "` key `" + st + "` supplied to `" + De + "`.\nBad object: " + JSON.stringify(Re[Ie], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(I), null, "  ")
            );
          var ye = Ct(Qe, st, De, Ze, Pe + "." + st, c);
          if (ye)
            return ye;
        }
        return null;
      }
      return P(fe);
    }
    function xe(I) {
      switch (typeof I) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !I;
        case "object":
          if (Array.isArray(I))
            return I.every(xe);
          if (I === null || C(I))
            return !0;
          var fe = M(I);
          if (fe) {
            var Re = fe.call(I), Ie;
            if (fe !== I.entries) {
              for (; !(Ie = Re.next()).done; )
                if (!xe(Ie.value))
                  return !1;
            } else
              for (; !(Ie = Re.next()).done; ) {
                var De = Ie.value;
                if (De && !xe(De[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Le(I, fe) {
      return I === "symbol" ? !0 : fe ? fe["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && fe instanceof Symbol : !1;
    }
    function we(I) {
      var fe = typeof I;
      return Array.isArray(I) ? "array" : I instanceof RegExp ? "object" : Le(fe, I) ? "symbol" : fe;
    }
    function Fe(I) {
      if (typeof I > "u" || I === null)
        return "" + I;
      var fe = we(I);
      if (fe === "object") {
        if (I instanceof Date)
          return "date";
        if (I instanceof RegExp)
          return "regexp";
      }
      return fe;
    }
    function se(I) {
      var fe = Fe(I);
      switch (fe) {
        case "array":
        case "object":
          return "an " + fe;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + fe;
        default:
          return fe;
      }
    }
    function Ee(I) {
      return !I.constructor || !I.constructor.name ? A : I.constructor.name;
    }
    return $.checkPropTypes = h, $.resetWarningCache = h.resetWarningCache, $.PropTypes = $, $;
  }, eE;
}
var tE, Gw;
function GN() {
  if (Gw) return tE;
  Gw = 1;
  var i = OE();
  function s() {
  }
  function c() {
  }
  return c.resetWarningCache = s, tE = function() {
    function p(y, C, x, k, _, M) {
      if (M !== i) {
        var A = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw A.name = "Invariant Violation", A;
      }
    }
    p.isRequired = p;
    function h() {
      return p;
    }
    var S = {
      array: p,
      bigint: p,
      bool: p,
      func: p,
      number: p,
      object: p,
      string: p,
      symbol: p,
      any: p,
      arrayOf: h,
      element: p,
      elementType: p,
      instanceOf: h,
      node: p,
      objectOf: h,
      oneOf: h,
      oneOfType: h,
      shape: h,
      exact: h,
      checkPropTypes: c,
      resetWarningCache: s
    };
    return S.PropTypes = S, S;
  }, tE;
}
if (process.env.NODE_ENV !== "production") {
  var QN = RE(), qN = !0;
  cE.exports = WN()(QN.isElement, qN);
} else
  cE.exports = GN()();
var XN = cE.exports;
const w = /* @__PURE__ */ HR(XN);
function IR(i) {
  var s, c, p = "";
  if (typeof i == "string" || typeof i == "number") p += i;
  else if (typeof i == "object") if (Array.isArray(i)) {
    var h = i.length;
    for (s = 0; s < h; s++) i[s] && (c = IR(i[s])) && (p && (p += " "), p += c);
  } else for (c in i) i[c] && (p && (p += " "), p += c);
  return p;
}
function mr() {
  for (var i, s, c = 0, p = "", h = arguments.length; c < h; c++) (i = arguments[c]) && (s = IR(i)) && (p && (p += " "), p += s);
  return p;
}
function Qg(i, s) {
  const c = {
    ...s
  };
  for (const p in i)
    if (Object.prototype.hasOwnProperty.call(i, p)) {
      const h = p;
      if (h === "components" || h === "slots")
        c[h] = {
          ...i[h],
          ...c[h]
        };
      else if (h === "componentsProps" || h === "slotProps") {
        const S = i[h], y = s[h];
        if (!y)
          c[h] = S || {};
        else if (!S)
          c[h] = y;
        else {
          c[h] = {
            ...y
          };
          for (const C in S)
            if (Object.prototype.hasOwnProperty.call(S, C)) {
              const x = C;
              c[h][x] = Qg(S[x], y[x]);
            }
        }
      } else c[h] === void 0 && (c[h] = i[h]);
    }
  return c;
}
function Fd(i, s, c = void 0) {
  const p = {};
  for (const h in i) {
    const S = i[h];
    let y = "", C = !0;
    for (let x = 0; x < S.length; x += 1) {
      const k = S[x];
      k && (y += (C === !0 ? "" : " ") + s(k), C = !1, c && c[k] && (y += " " + c[k]));
    }
    p[h] = y;
  }
  return p;
}
function ts(i, ...s) {
  const c = new URL(`https://mui.com/production-error/?code=${i}`);
  return s.forEach((p) => c.searchParams.append("args[]", p)), `Minified MUI error #${i}; visit ${c} for the full message.`;
}
function KN(i, s = Number.MIN_SAFE_INTEGER, c = Number.MAX_SAFE_INTEGER) {
  return Math.max(s, Math.min(i, c));
}
function kE(i, s = 0, c = 1) {
  return process.env.NODE_ENV !== "production" && (i < s || i > c) && console.error(`MUI: The value provided ${i} is out of range [${s}, ${c}].`), KN(i, s, c);
}
function ZN(i) {
  i = i.slice(1);
  const s = new RegExp(`.{1,${i.length >= 6 ? 2 : 1}}`, "g");
  let c = i.match(s);
  return c && c[0].length === 1 && (c = c.map((p) => p + p)), c ? `rgb${c.length === 4 ? "a" : ""}(${c.map((p, h) => h < 3 ? parseInt(p, 16) : Math.round(parseInt(p, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function ns(i) {
  if (i.type)
    return i;
  if (i.charAt(0) === "#")
    return ns(ZN(i));
  const s = i.indexOf("("), c = i.substring(0, s);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(c))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${i}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : ts(9, i));
  let p = i.substring(s + 1, i.length - 1), h;
  if (c === "color") {
    if (p = p.split(" "), h = p.shift(), p.length === 4 && p[3].charAt(0) === "/" && (p[3] = p[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(h))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${h}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : ts(10, h));
  } else
    p = p.split(",");
  return p = p.map((S) => parseFloat(S)), {
    type: c,
    values: p,
    colorSpace: h
  };
}
const JN = (i) => {
  const s = ns(i);
  return s.values.slice(0, 3).map((c, p) => s.type.includes("hsl") && p !== 0 ? `${c}%` : c).join(" ");
}, oh = (i, s) => {
  try {
    return JN(i);
  } catch {
    return s && process.env.NODE_ENV !== "production" && console.warn(s), i;
  }
};
function a0(i) {
  const {
    type: s,
    colorSpace: c
  } = i;
  let {
    values: p
  } = i;
  return s.includes("rgb") ? p = p.map((h, S) => S < 3 ? parseInt(h, 10) : h) : s.includes("hsl") && (p[1] = `${p[1]}%`, p[2] = `${p[2]}%`), s.includes("color") ? p = `${c} ${p.join(" ")}` : p = `${p.join(", ")}`, `${s}(${p})`;
}
function YR(i) {
  i = ns(i);
  const {
    values: s
  } = i, c = s[0], p = s[1] / 100, h = s[2] / 100, S = p * Math.min(h, 1 - h), y = (k, _ = (k + c / 30) % 12) => h - S * Math.max(Math.min(_ - 3, 9 - _, 1), -1);
  let C = "rgb";
  const x = [Math.round(y(0) * 255), Math.round(y(8) * 255), Math.round(y(4) * 255)];
  return i.type === "hsla" && (C += "a", x.push(s[3])), a0({
    type: C,
    values: x
  });
}
function fE(i) {
  i = ns(i);
  let s = i.type === "hsl" || i.type === "hsla" ? ns(YR(i)).values : i.values;
  return s = s.map((c) => (i.type !== "color" && (c /= 255), c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4)), Number((0.2126 * s[0] + 0.7152 * s[1] + 0.0722 * s[2]).toFixed(3));
}
function Qw(i, s) {
  const c = fE(i), p = fE(s);
  return (Math.max(c, p) + 0.05) / (Math.min(c, p) + 0.05);
}
function Zo(i, s) {
  return i = ns(i), s = kE(s), (i.type === "rgb" || i.type === "hsl") && (i.type += "a"), i.type === "color" ? i.values[3] = `/${s}` : i.values[3] = s, a0(i);
}
function Ag(i, s, c) {
  try {
    return Zo(i, s);
  } catch {
    return i;
  }
}
function DE(i, s) {
  if (i = ns(i), s = kE(s), i.type.includes("hsl"))
    i.values[2] *= 1 - s;
  else if (i.type.includes("rgb") || i.type.includes("color"))
    for (let c = 0; c < 3; c += 1)
      i.values[c] *= 1 - s;
  return a0(i);
}
function hn(i, s, c) {
  try {
    return DE(i, s);
  } catch {
    return i;
  }
}
function _E(i, s) {
  if (i = ns(i), s = kE(s), i.type.includes("hsl"))
    i.values[2] += (100 - i.values[2]) * s;
  else if (i.type.includes("rgb"))
    for (let c = 0; c < 3; c += 1)
      i.values[c] += (255 - i.values[c]) * s;
  else if (i.type.includes("color"))
    for (let c = 0; c < 3; c += 1)
      i.values[c] += (1 - i.values[c]) * s;
  return a0(i);
}
function mn(i, s, c) {
  try {
    return _E(i, s);
  } catch {
    return i;
  }
}
function eA(i, s = 0.15) {
  return fE(i) > 0.5 ? DE(i, s) : _E(i, s);
}
function Lg(i, s, c) {
  try {
    return eA(i, s);
  } catch {
    return i;
  }
}
function tA(i) {
  return i !== "ownerState" && i !== "theme" && i !== "sx" && i !== "as";
}
const WR = (i) => tA(i) && i !== "classes";
function Cn(i) {
  if (typeof i != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : ts(7));
  return i.charAt(0).toUpperCase() + i.slice(1);
}
function Il(i) {
  if (typeof i != "object" || i === null)
    return !1;
  const s = Object.getPrototypeOf(i);
  return (s === null || s === Object.prototype || Object.getPrototypeOf(s) === null) && !(Symbol.toStringTag in i) && !(Symbol.iterator in i);
}
function GR(i) {
  if (!Il(i))
    return i;
  const s = {};
  return Object.keys(i).forEach((c) => {
    s[c] = GR(i[c]);
  }), s;
}
function hi(i, s, c = {
  clone: !0
}) {
  const p = c.clone ? {
    ...i
  } : i;
  return Il(i) && Il(s) && Object.keys(s).forEach((h) => {
    Il(s[h]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(i, h) && Il(i[h]) ? p[h] = hi(i[h], s[h], c) : c.clone ? p[h] = Il(s[h]) ? GR(s[h]) : s[h] : p[h] = s[h];
  }), p;
}
function ch(i, s) {
  return s ? hi(i, s, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : i;
}
const as = process.env.NODE_ENV !== "production" ? w.oneOfType([w.number, w.string, w.object, w.array]) : {};
function nA(i, s) {
  if (!i.containerQueries)
    return s;
  const c = Object.keys(s).filter((p) => p.startsWith("@container")).sort((p, h) => {
    var y, C;
    const S = /min-width:\s*([0-9.]+)/;
    return +(((y = p.match(S)) == null ? void 0 : y[1]) || 0) - +(((C = h.match(S)) == null ? void 0 : C[1]) || 0);
  });
  return c.length ? c.reduce((p, h) => {
    const S = s[h];
    return delete p[h], p[h] = S, p;
  }, {
    ...s
  }) : s;
}
function rA(i, s) {
  return s === "@" || s.startsWith("@") && (i.some((c) => s.startsWith(`@${c}`)) || !!s.match(/^@\d/));
}
function aA(i, s) {
  const c = s.match(/^@([^/]+)?\/?(.+)?$/);
  if (!c) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${s})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : ts(18, `(${s})`));
    return null;
  }
  const [, p, h] = c, S = Number.isNaN(+p) ? p || 0 : +p;
  return i.containerQueries(h).up(S);
}
function iA(i) {
  const s = (S, y) => S.replace("@media", y ? `@container ${y}` : "@container");
  function c(S, y) {
    S.up = (...C) => s(i.breakpoints.up(...C), y), S.down = (...C) => s(i.breakpoints.down(...C), y), S.between = (...C) => s(i.breakpoints.between(...C), y), S.only = (...C) => s(i.breakpoints.only(...C), y), S.not = (...C) => {
      const x = s(i.breakpoints.not(...C), y);
      return x.includes("not all and") ? x.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : x;
    };
  }
  const p = {}, h = (S) => (c(p, S), p);
  return c(h), {
    ...i,
    containerQueries: h
  };
}
const i0 = {
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
}, qw = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (i) => `@media (min-width:${i0[i]}px)`
}, oA = {
  containerQueries: (i) => ({
    up: (s) => {
      let c = typeof s == "number" ? s : i0[s] || s;
      return typeof c == "number" && (c = `${c}px`), i ? `@container ${i} (min-width:${c})` : `@container (min-width:${c})`;
    }
  })
};
function Yl(i, s, c) {
  const p = i.theme || {};
  if (Array.isArray(s)) {
    const S = p.breakpoints || qw;
    return s.reduce((y, C, x) => (y[S.up(S.keys[x])] = c(s[x]), y), {});
  }
  if (typeof s == "object") {
    const S = p.breakpoints || qw;
    return Object.keys(s).reduce((y, C) => {
      if (rA(S.keys, C)) {
        const x = aA(p.containerQueries ? p : oA, C);
        x && (y[x] = c(s[C], C));
      } else if (Object.keys(S.values || i0).includes(C)) {
        const x = S.up(C);
        y[x] = c(s[C], C);
      } else {
        const x = C;
        y[x] = s[x];
      }
      return y;
    }, {});
  }
  return c(s);
}
function lA(i = {}) {
  var c;
  return ((c = i.keys) == null ? void 0 : c.reduce((p, h) => {
    const S = i.up(h);
    return p[S] = {}, p;
  }, {})) || {};
}
function uA(i, s) {
  return i.reduce((c, p) => {
    const h = c[p];
    return (!h || Object.keys(h).length === 0) && delete c[p], c;
  }, s);
}
function o0(i, s, c = !0) {
  if (!s || typeof s != "string")
    return null;
  if (i && i.vars && c) {
    const p = `vars.${s}`.split(".").reduce((h, S) => h && h[S] ? h[S] : null, i);
    if (p != null)
      return p;
  }
  return s.split(".").reduce((p, h) => p && p[h] != null ? p[h] : null, i);
}
function qg(i, s, c, p = c) {
  let h;
  return typeof i == "function" ? h = i(c) : Array.isArray(i) ? h = i[c] || p : h = o0(i, c) || p, s && (h = s(h, p, i)), h;
}
function or(i) {
  const {
    prop: s,
    cssProperty: c = i.prop,
    themeKey: p,
    transform: h
  } = i, S = (y) => {
    if (y[s] == null)
      return null;
    const C = y[s], x = y.theme, k = o0(x, p) || {};
    return Yl(y, C, (M) => {
      let A = qg(k, h, M);
      return M === A && typeof M == "string" && (A = qg(k, h, `${s}${M === "default" ? "" : Cn(M)}`, M)), c === !1 ? A : {
        [c]: A
      };
    });
  };
  return S.propTypes = process.env.NODE_ENV !== "production" ? {
    [s]: as
  } : {}, S.filterProps = [s], S;
}
function sA(i) {
  const s = {};
  return (c) => (s[c] === void 0 && (s[c] = i(c)), s[c]);
}
const cA = {
  m: "margin",
  p: "padding"
}, fA = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Xw = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, dA = sA((i) => {
  if (i.length > 2)
    if (Xw[i])
      i = Xw[i];
    else
      return [i];
  const [s, c] = i.split(""), p = cA[s], h = fA[c] || "";
  return Array.isArray(h) ? h.map((S) => p + S) : [p + h];
}), l0 = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], u0 = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], pA = [...l0, ...u0];
function Th(i, s, c, p) {
  const h = o0(i, s, !0) ?? c;
  return typeof h == "number" || typeof h == "string" ? (S) => typeof S == "string" ? S : (process.env.NODE_ENV !== "production" && typeof S != "number" && console.error(`MUI: Expected ${p} argument to be a number or a string, got ${S}.`), typeof h == "string" ? `calc(${S} * ${h})` : h * S) : Array.isArray(h) ? (S) => {
    if (typeof S == "string")
      return S;
    const y = Math.abs(S);
    process.env.NODE_ENV !== "production" && (Number.isInteger(y) ? y > h.length - 1 && console.error([`MUI: The value provided (${y}) overflows.`, `The supported values are: ${JSON.stringify(h)}.`, `${y} > ${h.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${s}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${s}\` as a number.`].join(`
`)));
    const C = h[y];
    return S >= 0 ? C : typeof C == "number" ? -C : `-${C}`;
  } : typeof h == "function" ? h : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${s}\` value (${h}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function ME(i) {
  return Th(i, "spacing", 8, "spacing");
}
function xh(i, s) {
  return typeof s == "string" || s == null ? s : i(s);
}
function vA(i, s) {
  return (c) => i.reduce((p, h) => (p[h] = xh(s, c), p), {});
}
function hA(i, s, c, p) {
  if (!s.includes(c))
    return null;
  const h = dA(c), S = vA(h, p), y = i[c];
  return Yl(i, y, S);
}
function QR(i, s) {
  const c = ME(i.theme);
  return Object.keys(i).map((p) => hA(i, s, p, c)).reduce(ch, {});
}
function Wn(i) {
  return QR(i, l0);
}
Wn.propTypes = process.env.NODE_ENV !== "production" ? l0.reduce((i, s) => (i[s] = as, i), {}) : {};
Wn.filterProps = l0;
function Gn(i) {
  return QR(i, u0);
}
Gn.propTypes = process.env.NODE_ENV !== "production" ? u0.reduce((i, s) => (i[s] = as, i), {}) : {};
Gn.filterProps = u0;
process.env.NODE_ENV !== "production" && pA.reduce((i, s) => (i[s] = as, i), {});
function s0(...i) {
  const s = i.reduce((p, h) => (h.filterProps.forEach((S) => {
    p[S] = h;
  }), p), {}), c = (p) => Object.keys(p).reduce((h, S) => s[S] ? ch(h, s[S](p)) : h, {});
  return c.propTypes = process.env.NODE_ENV !== "production" ? i.reduce((p, h) => Object.assign(p, h.propTypes), {}) : {}, c.filterProps = i.reduce((p, h) => p.concat(h.filterProps), []), c;
}
function Ui(i) {
  return typeof i != "number" ? i : `${i}px solid`;
}
function Fi(i, s) {
  return or({
    prop: i,
    themeKey: "borders",
    transform: s
  });
}
const mA = Fi("border", Ui), yA = Fi("borderTop", Ui), gA = Fi("borderRight", Ui), SA = Fi("borderBottom", Ui), bA = Fi("borderLeft", Ui), EA = Fi("borderColor"), CA = Fi("borderTopColor"), TA = Fi("borderRightColor"), xA = Fi("borderBottomColor"), wA = Fi("borderLeftColor"), RA = Fi("outline", Ui), OA = Fi("outlineColor"), c0 = (i) => {
  if (i.borderRadius !== void 0 && i.borderRadius !== null) {
    const s = Th(i.theme, "shape.borderRadius", 4, "borderRadius"), c = (p) => ({
      borderRadius: xh(s, p)
    });
    return Yl(i, i.borderRadius, c);
  }
  return null;
};
c0.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: as
} : {};
c0.filterProps = ["borderRadius"];
s0(mA, yA, gA, SA, bA, EA, CA, TA, xA, wA, c0, RA, OA);
const f0 = (i) => {
  if (i.gap !== void 0 && i.gap !== null) {
    const s = Th(i.theme, "spacing", 8, "gap"), c = (p) => ({
      gap: xh(s, p)
    });
    return Yl(i, i.gap, c);
  }
  return null;
};
f0.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: as
} : {};
f0.filterProps = ["gap"];
const d0 = (i) => {
  if (i.columnGap !== void 0 && i.columnGap !== null) {
    const s = Th(i.theme, "spacing", 8, "columnGap"), c = (p) => ({
      columnGap: xh(s, p)
    });
    return Yl(i, i.columnGap, c);
  }
  return null;
};
d0.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: as
} : {};
d0.filterProps = ["columnGap"];
const p0 = (i) => {
  if (i.rowGap !== void 0 && i.rowGap !== null) {
    const s = Th(i.theme, "spacing", 8, "rowGap"), c = (p) => ({
      rowGap: xh(s, p)
    });
    return Yl(i, i.rowGap, c);
  }
  return null;
};
p0.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: as
} : {};
p0.filterProps = ["rowGap"];
const kA = or({
  prop: "gridColumn"
}), DA = or({
  prop: "gridRow"
}), _A = or({
  prop: "gridAutoFlow"
}), MA = or({
  prop: "gridAutoColumns"
}), NA = or({
  prop: "gridAutoRows"
}), AA = or({
  prop: "gridTemplateColumns"
}), LA = or({
  prop: "gridTemplateRows"
}), zA = or({
  prop: "gridTemplateAreas"
}), UA = or({
  prop: "gridArea"
});
s0(f0, d0, p0, kA, DA, _A, MA, NA, AA, LA, zA, UA);
function Nd(i, s) {
  return s === "grey" ? s : i;
}
const PA = or({
  prop: "color",
  themeKey: "palette",
  transform: Nd
}), $A = or({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Nd
}), jA = or({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Nd
});
s0(PA, $A, jA);
function pi(i) {
  return i <= 1 && i !== 0 ? `${i * 100}%` : i;
}
const FA = or({
  prop: "width",
  transform: pi
}), NE = (i) => {
  if (i.maxWidth !== void 0 && i.maxWidth !== null) {
    const s = (c) => {
      var h, S, y, C, x;
      const p = ((y = (S = (h = i.theme) == null ? void 0 : h.breakpoints) == null ? void 0 : S.values) == null ? void 0 : y[c]) || i0[c];
      return p ? ((x = (C = i.theme) == null ? void 0 : C.breakpoints) == null ? void 0 : x.unit) !== "px" ? {
        maxWidth: `${p}${i.theme.breakpoints.unit}`
      } : {
        maxWidth: p
      } : {
        maxWidth: pi(c)
      };
    };
    return Yl(i, i.maxWidth, s);
  }
  return null;
};
NE.filterProps = ["maxWidth"];
const BA = or({
  prop: "minWidth",
  transform: pi
}), HA = or({
  prop: "height",
  transform: pi
}), VA = or({
  prop: "maxHeight",
  transform: pi
}), IA = or({
  prop: "minHeight",
  transform: pi
});
or({
  prop: "size",
  cssProperty: "width",
  transform: pi
});
or({
  prop: "size",
  cssProperty: "height",
  transform: pi
});
const YA = or({
  prop: "boxSizing"
});
s0(FA, NE, BA, HA, VA, IA, YA);
const v0 = {
  // borders
  border: {
    themeKey: "borders",
    transform: Ui
  },
  borderTop: {
    themeKey: "borders",
    transform: Ui
  },
  borderRight: {
    themeKey: "borders",
    transform: Ui
  },
  borderBottom: {
    themeKey: "borders",
    transform: Ui
  },
  borderLeft: {
    themeKey: "borders",
    transform: Ui
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
    transform: Ui
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: c0
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Nd
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Nd
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Nd
  },
  // spacing
  p: {
    style: Gn
  },
  pt: {
    style: Gn
  },
  pr: {
    style: Gn
  },
  pb: {
    style: Gn
  },
  pl: {
    style: Gn
  },
  px: {
    style: Gn
  },
  py: {
    style: Gn
  },
  padding: {
    style: Gn
  },
  paddingTop: {
    style: Gn
  },
  paddingRight: {
    style: Gn
  },
  paddingBottom: {
    style: Gn
  },
  paddingLeft: {
    style: Gn
  },
  paddingX: {
    style: Gn
  },
  paddingY: {
    style: Gn
  },
  paddingInline: {
    style: Gn
  },
  paddingInlineStart: {
    style: Gn
  },
  paddingInlineEnd: {
    style: Gn
  },
  paddingBlock: {
    style: Gn
  },
  paddingBlockStart: {
    style: Gn
  },
  paddingBlockEnd: {
    style: Gn
  },
  m: {
    style: Wn
  },
  mt: {
    style: Wn
  },
  mr: {
    style: Wn
  },
  mb: {
    style: Wn
  },
  ml: {
    style: Wn
  },
  mx: {
    style: Wn
  },
  my: {
    style: Wn
  },
  margin: {
    style: Wn
  },
  marginTop: {
    style: Wn
  },
  marginRight: {
    style: Wn
  },
  marginBottom: {
    style: Wn
  },
  marginLeft: {
    style: Wn
  },
  marginX: {
    style: Wn
  },
  marginY: {
    style: Wn
  },
  marginInline: {
    style: Wn
  },
  marginInlineStart: {
    style: Wn
  },
  marginInlineEnd: {
    style: Wn
  },
  marginBlock: {
    style: Wn
  },
  marginBlockStart: {
    style: Wn
  },
  marginBlockEnd: {
    style: Wn
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (i) => ({
      "@media print": {
        display: i
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
    style: f0
  },
  rowGap: {
    style: p0
  },
  columnGap: {
    style: d0
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
    transform: pi
  },
  maxWidth: {
    style: NE
  },
  minWidth: {
    transform: pi
  },
  height: {
    transform: pi
  },
  maxHeight: {
    transform: pi
  },
  minHeight: {
    transform: pi
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
function WA(...i) {
  const s = i.reduce((p, h) => p.concat(Object.keys(h)), []), c = new Set(s);
  return i.every((p) => c.size === Object.keys(p).length);
}
function GA(i, s) {
  return typeof i == "function" ? i(s) : i;
}
function QA() {
  function i(c, p, h, S) {
    const y = {
      [c]: p,
      theme: h
    }, C = S[c];
    if (!C)
      return {
        [c]: p
      };
    const {
      cssProperty: x = c,
      themeKey: k,
      transform: _,
      style: M
    } = C;
    if (p == null)
      return null;
    if (k === "typography" && p === "inherit")
      return {
        [c]: p
      };
    const A = o0(h, k) || {};
    return M ? M(y) : Yl(y, p, (B) => {
      let L = qg(A, _, B);
      return B === L && typeof B == "string" && (L = qg(A, _, `${c}${B === "default" ? "" : Cn(B)}`, B)), x === !1 ? L : {
        [x]: L
      };
    });
  }
  function s(c) {
    const {
      sx: p,
      theme: h = {}
    } = c || {};
    if (!p)
      return null;
    const S = h.unstable_sxConfig ?? v0;
    function y(C) {
      let x = C;
      if (typeof C == "function")
        x = C(h);
      else if (typeof C != "object")
        return C;
      if (!x)
        return null;
      const k = lA(h.breakpoints), _ = Object.keys(k);
      let M = k;
      return Object.keys(x).forEach((A) => {
        const $ = GA(x[A], h);
        if ($ != null)
          if (typeof $ == "object")
            if (S[A])
              M = ch(M, i(A, $, h, S));
            else {
              const B = Yl({
                theme: h
              }, $, (L) => ({
                [A]: L
              }));
              WA(B, $) ? M[A] = s({
                sx: $,
                theme: h
              }) : M = ch(M, B);
            }
          else
            M = ch(M, i(A, $, h, S));
      }), nA(h, uA(_, M));
    }
    return Array.isArray(p) ? p.map(y) : y(p);
  }
  return s;
}
const Ld = QA();
Ld.filterProps = ["sx"];
function Xg() {
  return Xg = Object.assign ? Object.assign.bind() : function(i) {
    for (var s = 1; s < arguments.length; s++) {
      var c = arguments[s];
      for (var p in c) ({}).hasOwnProperty.call(c, p) && (i[p] = c[p]);
    }
    return i;
  }, Xg.apply(null, arguments);
}
function qR(i) {
  var s = /* @__PURE__ */ Object.create(null);
  return function(c) {
    return s[c] === void 0 && (s[c] = i(c)), s[c];
  };
}
var qA = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, XA = /* @__PURE__ */ qR(
  function(i) {
    return qA.test(i) || i.charCodeAt(0) === 111 && i.charCodeAt(1) === 110 && i.charCodeAt(2) < 91;
  }
  /* Z+1 */
), KA = !1;
function ZA(i) {
  if (i.sheet)
    return i.sheet;
  for (var s = 0; s < document.styleSheets.length; s++)
    if (document.styleSheets[s].ownerNode === i)
      return document.styleSheets[s];
}
function JA(i) {
  var s = document.createElement("style");
  return s.setAttribute("data-emotion", i.key), i.nonce !== void 0 && s.setAttribute("nonce", i.nonce), s.appendChild(document.createTextNode("")), s.setAttribute("data-s", ""), s;
}
var eL = /* @__PURE__ */ function() {
  function i(c) {
    var p = this;
    this._insertTag = function(h) {
      var S;
      p.tags.length === 0 ? p.insertionPoint ? S = p.insertionPoint.nextSibling : p.prepend ? S = p.container.firstChild : S = p.before : S = p.tags[p.tags.length - 1].nextSibling, p.container.insertBefore(h, S), p.tags.push(h);
    }, this.isSpeedy = c.speedy === void 0 ? !KA : c.speedy, this.tags = [], this.ctr = 0, this.nonce = c.nonce, this.key = c.key, this.container = c.container, this.prepend = c.prepend, this.insertionPoint = c.insertionPoint, this.before = null;
  }
  var s = i.prototype;
  return s.hydrate = function(p) {
    p.forEach(this._insertTag);
  }, s.insert = function(p) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(JA(this));
    var h = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var S = ZA(h);
      try {
        S.insertRule(p, S.cssRules.length);
      } catch {
      }
    } else
      h.appendChild(document.createTextNode(p));
    this.ctr++;
  }, s.flush = function() {
    this.tags.forEach(function(p) {
      var h;
      return (h = p.parentNode) == null ? void 0 : h.removeChild(p);
    }), this.tags = [], this.ctr = 0;
  }, i;
}(), va = "-ms-", Kg = "-moz-", qt = "-webkit-", XR = "comm", AE = "rule", LE = "decl", tL = "@import", KR = "@keyframes", nL = "@layer", rL = Math.abs, h0 = String.fromCharCode, aL = Object.assign;
function iL(i, s) {
  return qr(i, 0) ^ 45 ? (((s << 2 ^ qr(i, 0)) << 2 ^ qr(i, 1)) << 2 ^ qr(i, 2)) << 2 ^ qr(i, 3) : 0;
}
function ZR(i) {
  return i.trim();
}
function oL(i, s) {
  return (i = s.exec(i)) ? i[0] : i;
}
function Xt(i, s, c) {
  return i.replace(s, c);
}
function dE(i, s) {
  return i.indexOf(s);
}
function qr(i, s) {
  return i.charCodeAt(s) | 0;
}
function ph(i, s, c) {
  return i.slice(s, c);
}
function Xo(i) {
  return i.length;
}
function zE(i) {
  return i.length;
}
function zg(i, s) {
  return s.push(i), i;
}
function lL(i, s) {
  return i.map(s).join("");
}
var m0 = 1, zd = 1, JR = 0, ti = 0, yr = 0, Bd = "";
function y0(i, s, c, p, h, S, y) {
  return { value: i, root: s, parent: c, type: p, props: h, children: S, line: m0, column: zd, length: y, return: "" };
}
function nh(i, s) {
  return aL(y0("", null, null, "", null, null, 0), i, { length: -i.length }, s);
}
function uL() {
  return yr;
}
function sL() {
  return yr = ti > 0 ? qr(Bd, --ti) : 0, zd--, yr === 10 && (zd = 1, m0--), yr;
}
function mi() {
  return yr = ti < JR ? qr(Bd, ti++) : 0, zd++, yr === 10 && (zd = 1, m0++), yr;
}
function Jo() {
  return qr(Bd, ti);
}
function Vg() {
  return ti;
}
function wh(i, s) {
  return ph(Bd, i, s);
}
function vh(i) {
  switch (i) {
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
function eO(i) {
  return m0 = zd = 1, JR = Xo(Bd = i), ti = 0, [];
}
function tO(i) {
  return Bd = "", i;
}
function Ig(i) {
  return ZR(wh(ti - 1, pE(i === 91 ? i + 2 : i === 40 ? i + 1 : i)));
}
function cL(i) {
  for (; (yr = Jo()) && yr < 33; )
    mi();
  return vh(i) > 2 || vh(yr) > 3 ? "" : " ";
}
function fL(i, s) {
  for (; --s && mi() && !(yr < 48 || yr > 102 || yr > 57 && yr < 65 || yr > 70 && yr < 97); )
    ;
  return wh(i, Vg() + (s < 6 && Jo() == 32 && mi() == 32));
}
function pE(i) {
  for (; mi(); )
    switch (yr) {
      case i:
        return ti;
      case 34:
      case 39:
        i !== 34 && i !== 39 && pE(yr);
        break;
      case 40:
        i === 41 && pE(i);
        break;
      case 92:
        mi();
        break;
    }
  return ti;
}
function dL(i, s) {
  for (; mi() && i + yr !== 57; )
    if (i + yr === 84 && Jo() === 47)
      break;
  return "/*" + wh(s, ti - 1) + "*" + h0(i === 47 ? i : mi());
}
function pL(i) {
  for (; !vh(Jo()); )
    mi();
  return wh(i, ti);
}
function vL(i) {
  return tO(Yg("", null, null, null, [""], i = eO(i), 0, [0], i));
}
function Yg(i, s, c, p, h, S, y, C, x) {
  for (var k = 0, _ = 0, M = y, A = 0, $ = 0, B = 0, L = 1, P = 1, ee = 1, le = 0, q = "", Y = h, U = S, re = p, te = q; P; )
    switch (B = le, le = mi()) {
      case 40:
        if (B != 108 && qr(te, M - 1) == 58) {
          dE(te += Xt(Ig(le), "&", "&\f"), "&\f") != -1 && (ee = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        te += Ig(le);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        te += cL(B);
        break;
      case 92:
        te += fL(Vg() - 1, 7);
        continue;
      case 47:
        switch (Jo()) {
          case 42:
          case 47:
            zg(hL(dL(mi(), Vg()), s, c), x);
            break;
          default:
            te += "/";
        }
        break;
      case 123 * L:
        C[k++] = Xo(te) * ee;
      case 125 * L:
      case 59:
      case 0:
        switch (le) {
          case 0:
          case 125:
            P = 0;
          case 59 + _:
            ee == -1 && (te = Xt(te, /\f/g, "")), $ > 0 && Xo(te) - M && zg($ > 32 ? Zw(te + ";", p, c, M - 1) : Zw(Xt(te, " ", "") + ";", p, c, M - 2), x);
            break;
          case 59:
            te += ";";
          default:
            if (zg(re = Kw(te, s, c, k, _, h, C, q, Y = [], U = [], M), S), le === 123)
              if (_ === 0)
                Yg(te, s, re, re, Y, S, M, C, U);
              else
                switch (A === 99 && qr(te, 3) === 110 ? 100 : A) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Yg(i, re, re, p && zg(Kw(i, re, re, 0, 0, h, C, q, h, Y = [], M), U), h, U, M, C, p ? Y : U);
                    break;
                  default:
                    Yg(te, re, re, re, [""], U, 0, C, U);
                }
        }
        k = _ = $ = 0, L = ee = 1, q = te = "", M = y;
        break;
      case 58:
        M = 1 + Xo(te), $ = B;
      default:
        if (L < 1) {
          if (le == 123)
            --L;
          else if (le == 125 && L++ == 0 && sL() == 125)
            continue;
        }
        switch (te += h0(le), le * L) {
          case 38:
            ee = _ > 0 ? 1 : (te += "\f", -1);
            break;
          case 44:
            C[k++] = (Xo(te) - 1) * ee, ee = 1;
            break;
          case 64:
            Jo() === 45 && (te += Ig(mi())), A = Jo(), _ = M = Xo(q = te += pL(Vg())), le++;
            break;
          case 45:
            B === 45 && Xo(te) == 2 && (L = 0);
        }
    }
  return S;
}
function Kw(i, s, c, p, h, S, y, C, x, k, _) {
  for (var M = h - 1, A = h === 0 ? S : [""], $ = zE(A), B = 0, L = 0, P = 0; B < p; ++B)
    for (var ee = 0, le = ph(i, M + 1, M = rL(L = y[B])), q = i; ee < $; ++ee)
      (q = ZR(L > 0 ? A[ee] + " " + le : Xt(le, /&\f/g, A[ee]))) && (x[P++] = q);
  return y0(i, s, c, h === 0 ? AE : C, x, k, _);
}
function hL(i, s, c) {
  return y0(i, s, c, XR, h0(uL()), ph(i, 2, -2), 0);
}
function Zw(i, s, c, p) {
  return y0(i, s, c, LE, ph(i, 0, p), ph(i, p + 1, -1), p);
}
function Ad(i, s) {
  for (var c = "", p = zE(i), h = 0; h < p; h++)
    c += s(i[h], h, i, s) || "";
  return c;
}
function mL(i, s, c, p) {
  switch (i.type) {
    case nL:
      if (i.children.length) break;
    case tL:
    case LE:
      return i.return = i.return || i.value;
    case XR:
      return "";
    case KR:
      return i.return = i.value + "{" + Ad(i.children, p) + "}";
    case AE:
      i.value = i.props.join(",");
  }
  return Xo(c = Ad(i.children, p)) ? i.return = i.value + "{" + c + "}" : "";
}
function yL(i) {
  var s = zE(i);
  return function(c, p, h, S) {
    for (var y = "", C = 0; C < s; C++)
      y += i[C](c, p, h, S) || "";
    return y;
  };
}
function gL(i) {
  return function(s) {
    s.root || (s = s.return) && i(s);
  };
}
var SL = function(s, c, p) {
  for (var h = 0, S = 0; h = S, S = Jo(), h === 38 && S === 12 && (c[p] = 1), !vh(S); )
    mi();
  return wh(s, ti);
}, bL = function(s, c) {
  var p = -1, h = 44;
  do
    switch (vh(h)) {
      case 0:
        h === 38 && Jo() === 12 && (c[p] = 1), s[p] += SL(ti - 1, c, p);
        break;
      case 2:
        s[p] += Ig(h);
        break;
      case 4:
        if (h === 44) {
          s[++p] = Jo() === 58 ? "&\f" : "", c[p] = s[p].length;
          break;
        }
      default:
        s[p] += h0(h);
    }
  while (h = mi());
  return s;
}, EL = function(s, c) {
  return tO(bL(eO(s), c));
}, Jw = /* @__PURE__ */ new WeakMap(), CL = function(s) {
  if (!(s.type !== "rule" || !s.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  s.length < 1)) {
    for (var c = s.value, p = s.parent, h = s.column === p.column && s.line === p.line; p.type !== "rule"; )
      if (p = p.parent, !p) return;
    if (!(s.props.length === 1 && c.charCodeAt(0) !== 58 && !Jw.get(p)) && !h) {
      Jw.set(s, !0);
      for (var S = [], y = EL(c, S), C = p.props, x = 0, k = 0; x < y.length; x++)
        for (var _ = 0; _ < C.length; _++, k++)
          s.props[k] = S[x] ? y[x].replace(/&\f/g, C[_]) : C[_] + " " + y[x];
    }
  }
}, TL = function(s) {
  if (s.type === "decl") {
    var c = s.value;
    // charcode for l
    c.charCodeAt(0) === 108 && // charcode for b
    c.charCodeAt(2) === 98 && (s.return = "", s.value = "");
  }
};
function nO(i, s) {
  switch (iL(i, s)) {
    case 5103:
      return qt + "print-" + i + i;
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
      return qt + i + i;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return qt + i + Kg + i + va + i + i;
    case 6828:
    case 4268:
      return qt + i + va + i + i;
    case 6165:
      return qt + i + va + "flex-" + i + i;
    case 5187:
      return qt + i + Xt(i, /(\w+).+(:[^]+)/, qt + "box-$1$2" + va + "flex-$1$2") + i;
    case 5443:
      return qt + i + va + "flex-item-" + Xt(i, /flex-|-self/, "") + i;
    case 4675:
      return qt + i + va + "flex-line-pack" + Xt(i, /align-content|flex-|-self/, "") + i;
    case 5548:
      return qt + i + va + Xt(i, "shrink", "negative") + i;
    case 5292:
      return qt + i + va + Xt(i, "basis", "preferred-size") + i;
    case 6060:
      return qt + "box-" + Xt(i, "-grow", "") + qt + i + va + Xt(i, "grow", "positive") + i;
    case 4554:
      return qt + Xt(i, /([^-])(transform)/g, "$1" + qt + "$2") + i;
    case 6187:
      return Xt(Xt(Xt(i, /(zoom-|grab)/, qt + "$1"), /(image-set)/, qt + "$1"), i, "") + i;
    case 5495:
    case 3959:
      return Xt(i, /(image-set\([^]*)/, qt + "$1$`$1");
    case 4968:
      return Xt(Xt(i, /(.+:)(flex-)?(.*)/, qt + "box-pack:$3" + va + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + qt + i + i;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Xt(i, /(.+)-inline(.+)/, qt + "$1$2") + i;
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
      if (Xo(i) - 1 - s > 6) switch (qr(i, s + 1)) {
        case 109:
          if (qr(i, s + 4) !== 45) break;
        case 102:
          return Xt(i, /(.+:)(.+)-([^]+)/, "$1" + qt + "$2-$3$1" + Kg + (qr(i, s + 3) == 108 ? "$3" : "$2-$3")) + i;
        case 115:
          return ~dE(i, "stretch") ? nO(Xt(i, "stretch", "fill-available"), s) + i : i;
      }
      break;
    case 4949:
      if (qr(i, s + 1) !== 115) break;
    case 6444:
      switch (qr(i, Xo(i) - 3 - (~dE(i, "!important") && 10))) {
        case 107:
          return Xt(i, ":", ":" + qt) + i;
        case 101:
          return Xt(i, /(.+:)([^;!]+)(;|!.+)?/, "$1" + qt + (qr(i, 14) === 45 ? "inline-" : "") + "box$3$1" + qt + "$2$3$1" + va + "$2box$3") + i;
      }
      break;
    case 5936:
      switch (qr(i, s + 11)) {
        case 114:
          return qt + i + va + Xt(i, /[svh]\w+-[tblr]{2}/, "tb") + i;
        case 108:
          return qt + i + va + Xt(i, /[svh]\w+-[tblr]{2}/, "tb-rl") + i;
        case 45:
          return qt + i + va + Xt(i, /[svh]\w+-[tblr]{2}/, "lr") + i;
      }
      return qt + i + va + i + i;
  }
  return i;
}
var xL = function(s, c, p, h) {
  if (s.length > -1 && !s.return) switch (s.type) {
    case LE:
      s.return = nO(s.value, s.length);
      break;
    case KR:
      return Ad([nh(s, {
        value: Xt(s.value, "@", "@" + qt)
      })], h);
    case AE:
      if (s.length) return lL(s.props, function(S) {
        switch (oL(S, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Ad([nh(s, {
              props: [Xt(S, /:(read-\w+)/, ":" + Kg + "$1")]
            })], h);
          case "::placeholder":
            return Ad([nh(s, {
              props: [Xt(S, /:(plac\w+)/, ":" + qt + "input-$1")]
            }), nh(s, {
              props: [Xt(S, /:(plac\w+)/, ":" + Kg + "$1")]
            }), nh(s, {
              props: [Xt(S, /:(plac\w+)/, va + "input-$1")]
            })], h);
        }
        return "";
      });
  }
}, wL = [xL], RL = function(s) {
  var c = s.key;
  if (c === "css") {
    var p = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(p, function(L) {
      var P = L.getAttribute("data-emotion");
      P.indexOf(" ") !== -1 && (document.head.appendChild(L), L.setAttribute("data-s", ""));
    });
  }
  var h = s.stylisPlugins || wL, S = {}, y, C = [];
  y = s.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + c + ' "]'),
    function(L) {
      for (var P = L.getAttribute("data-emotion").split(" "), ee = 1; ee < P.length; ee++)
        S[P[ee]] = !0;
      C.push(L);
    }
  );
  var x, k = [CL, TL];
  {
    var _, M = [mL, gL(function(L) {
      _.insert(L);
    })], A = yL(k.concat(h, M)), $ = function(P) {
      return Ad(vL(P), A);
    };
    x = function(P, ee, le, q) {
      _ = le, $(P ? P + "{" + ee.styles + "}" : ee.styles), q && (B.inserted[ee.name] = !0);
    };
  }
  var B = {
    key: c,
    sheet: new eL({
      key: c,
      container: y,
      nonce: s.nonce,
      speedy: s.speedy,
      prepend: s.prepend,
      insertionPoint: s.insertionPoint
    }),
    nonce: s.nonce,
    inserted: S,
    registered: {},
    insert: x
  };
  return B.sheet.hydrate(C), B;
}, rO = RE(), OL = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, kL = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, aO = {};
aO[rO.ForwardRef] = OL;
aO[rO.Memo] = kL;
var DL = !0;
function _L(i, s, c) {
  var p = "";
  return c.split(" ").forEach(function(h) {
    i[h] !== void 0 ? s.push(i[h] + ";") : h && (p += h + " ");
  }), p;
}
var iO = function(s, c, p) {
  var h = s.key + "-" + c.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (p === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  DL === !1) && s.registered[h] === void 0 && (s.registered[h] = c.styles);
}, ML = function(s, c, p) {
  iO(s, c, p);
  var h = s.key + "-" + c.name;
  if (s.inserted[c.name] === void 0) {
    var S = c;
    do
      s.insert(c === S ? "." + h : "", S, s.sheet, !0), S = S.next;
    while (S !== void 0);
  }
};
function NL(i) {
  for (var s = 0, c, p = 0, h = i.length; h >= 4; ++p, h -= 4)
    c = i.charCodeAt(p) & 255 | (i.charCodeAt(++p) & 255) << 8 | (i.charCodeAt(++p) & 255) << 16 | (i.charCodeAt(++p) & 255) << 24, c = /* Math.imul(k, m): */
    (c & 65535) * 1540483477 + ((c >>> 16) * 59797 << 16), c ^= /* k >>> r: */
    c >>> 24, s = /* Math.imul(k, m): */
    (c & 65535) * 1540483477 + ((c >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (s & 65535) * 1540483477 + ((s >>> 16) * 59797 << 16);
  switch (h) {
    case 3:
      s ^= (i.charCodeAt(p + 2) & 255) << 16;
    case 2:
      s ^= (i.charCodeAt(p + 1) & 255) << 8;
    case 1:
      s ^= i.charCodeAt(p) & 255, s = /* Math.imul(h, m): */
      (s & 65535) * 1540483477 + ((s >>> 16) * 59797 << 16);
  }
  return s ^= s >>> 13, s = /* Math.imul(h, m): */
  (s & 65535) * 1540483477 + ((s >>> 16) * 59797 << 16), ((s ^ s >>> 15) >>> 0).toString(36);
}
var AL = {
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
}, LL = !1, zL = /[A-Z]|^ms/g, UL = /_EMO_([^_]+?)_([^]*?)_EMO_/g, oO = function(s) {
  return s.charCodeAt(1) === 45;
}, eR = function(s) {
  return s != null && typeof s != "boolean";
}, nE = /* @__PURE__ */ qR(function(i) {
  return oO(i) ? i : i.replace(zL, "-$&").toLowerCase();
}), tR = function(s, c) {
  switch (s) {
    case "animation":
    case "animationName":
      if (typeof c == "string")
        return c.replace(UL, function(p, h, S) {
          return Ko = {
            name: h,
            styles: S,
            next: Ko
          }, h;
        });
  }
  return AL[s] !== 1 && !oO(s) && typeof c == "number" && c !== 0 ? c + "px" : c;
}, PL = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function hh(i, s, c) {
  if (c == null)
    return "";
  var p = c;
  if (p.__emotion_styles !== void 0)
    return p;
  switch (typeof c) {
    case "boolean":
      return "";
    case "object": {
      var h = c;
      if (h.anim === 1)
        return Ko = {
          name: h.name,
          styles: h.styles,
          next: Ko
        }, h.name;
      var S = c;
      if (S.styles !== void 0) {
        var y = S.next;
        if (y !== void 0)
          for (; y !== void 0; )
            Ko = {
              name: y.name,
              styles: y.styles,
              next: Ko
            }, y = y.next;
        var C = S.styles + ";";
        return C;
      }
      return $L(i, s, c);
    }
    case "function": {
      if (i !== void 0) {
        var x = Ko, k = c(i);
        return Ko = x, hh(i, s, k);
      }
      break;
    }
  }
  var _ = c;
  if (s == null)
    return _;
  var M = s[_];
  return M !== void 0 ? M : _;
}
function $L(i, s, c) {
  var p = "";
  if (Array.isArray(c))
    for (var h = 0; h < c.length; h++)
      p += hh(i, s, c[h]) + ";";
  else
    for (var S in c) {
      var y = c[S];
      if (typeof y != "object") {
        var C = y;
        s != null && s[C] !== void 0 ? p += S + "{" + s[C] + "}" : eR(C) && (p += nE(S) + ":" + tR(S, C) + ";");
      } else {
        if (S === "NO_COMPONENT_SELECTOR" && LL)
          throw new Error(PL);
        if (Array.isArray(y) && typeof y[0] == "string" && (s == null || s[y[0]] === void 0))
          for (var x = 0; x < y.length; x++)
            eR(y[x]) && (p += nE(S) + ":" + tR(S, y[x]) + ";");
        else {
          var k = hh(i, s, y);
          switch (S) {
            case "animation":
            case "animationName": {
              p += nE(S) + ":" + k + ";";
              break;
            }
            default:
              p += S + "{" + k + "}";
          }
        }
      }
    }
  return p;
}
var nR = /label:\s*([^\s;{]+)\s*(;|$)/g, Ko;
function UE(i, s, c) {
  if (i.length === 1 && typeof i[0] == "object" && i[0] !== null && i[0].styles !== void 0)
    return i[0];
  var p = !0, h = "";
  Ko = void 0;
  var S = i[0];
  if (S == null || S.raw === void 0)
    p = !1, h += hh(c, s, S);
  else {
    var y = S;
    h += y[0];
  }
  for (var C = 1; C < i.length; C++)
    if (h += hh(c, s, i[C]), p) {
      var x = S;
      h += x[C];
    }
  nR.lastIndex = 0;
  for (var k = "", _; (_ = nR.exec(h)) !== null; )
    k += "-" + _[1];
  var M = NL(h) + k;
  return {
    name: M,
    styles: h,
    next: Ko
  };
}
var jL = function(s) {
  return s();
}, FL = ve.useInsertionEffect ? ve.useInsertionEffect : !1, BL = FL || jL, lO = /* @__PURE__ */ ve.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ RL({
    key: "css"
  }) : null
);
lO.Provider;
var HL = function(s) {
  return /* @__PURE__ */ UN(function(c, p) {
    var h = PN(lO);
    return s(c, h, p);
  });
}, uO = /* @__PURE__ */ ve.createContext({});
function VL() {
  for (var i = arguments.length, s = new Array(i), c = 0; c < i; c++)
    s[c] = arguments[c];
  return UE(s);
}
var PE = function() {
  var s = VL.apply(void 0, arguments), c = "animation-" + s.name;
  return {
    name: c,
    styles: "@keyframes " + c + "{" + s.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, IL = XA, YL = function(s) {
  return s !== "theme";
}, rR = function(s) {
  return typeof s == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  s.charCodeAt(0) > 96 ? IL : YL;
}, aR = function(s, c, p) {
  var h;
  if (c) {
    var S = c.shouldForwardProp;
    h = s.__emotion_forwardProp && S ? function(y) {
      return s.__emotion_forwardProp(y) && S(y);
    } : S;
  }
  return typeof h != "function" && p && (h = s.__emotion_forwardProp), h;
}, WL = !1, GL = function(s) {
  var c = s.cache, p = s.serialized, h = s.isStringTag;
  return iO(c, p, h), BL(function() {
    return ML(c, p, h);
  }), null;
}, QL = function i(s, c) {
  var p = s.__emotion_real === s, h = p && s.__emotion_base || s, S, y;
  c !== void 0 && (S = c.label, y = c.target);
  var C = aR(s, c, p), x = C || rR(h), k = !x("as");
  return function() {
    var _ = arguments, M = p && s.__emotion_styles !== void 0 ? s.__emotion_styles.slice(0) : [];
    if (S !== void 0 && M.push("label:" + S + ";"), _[0] == null || _[0].raw === void 0)
      M.push.apply(M, _);
    else {
      M.push(_[0][0]);
      for (var A = _.length, $ = 1; $ < A; $++)
        M.push(_[$], _[0][$]);
    }
    var B = HL(function(L, P, ee) {
      var le = k && L.as || h, q = "", Y = [], U = L;
      if (L.theme == null) {
        U = {};
        for (var re in L)
          U[re] = L[re];
        U.theme = ve.useContext(uO);
      }
      typeof L.className == "string" ? q = _L(P.registered, Y, L.className) : L.className != null && (q = L.className + " ");
      var te = UE(M.concat(Y), P.registered, U);
      q += P.key + "-" + te.name, y !== void 0 && (q += " " + y);
      var Ae = k && C === void 0 ? rR(le) : x, Oe = {};
      for (var O in L)
        k && O === "as" || Ae(O) && (Oe[O] = L[O]);
      return Oe.className = q, ee && (Oe.ref = ee), /* @__PURE__ */ ve.createElement(ve.Fragment, null, /* @__PURE__ */ ve.createElement(GL, {
        cache: P,
        serialized: te,
        isStringTag: typeof le == "string"
      }), /* @__PURE__ */ ve.createElement(le, Oe));
    });
    return B.displayName = S !== void 0 ? S : "Styled(" + (typeof h == "string" ? h : h.displayName || h.name || "Component") + ")", B.defaultProps = s.defaultProps, B.__emotion_real = B, B.__emotion_base = h, B.__emotion_styles = M, B.__emotion_forwardProp = C, Object.defineProperty(B, "toString", {
      value: function() {
        return y === void 0 && WL ? "NO_COMPONENT_SELECTOR" : "." + y;
      }
    }), B.withComponent = function(L, P) {
      return i(L, Xg({}, c, P, {
        shouldForwardProp: aR(B, P, !0)
      })).apply(void 0, M);
    }, B;
  };
}, qL = [
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
], vE = QL.bind();
qL.forEach(function(i) {
  vE[i] = vE(i);
});
/**
 * @mui/styled-engine v6.1.5
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function XL(i, s) {
  const c = vE(i, s);
  return process.env.NODE_ENV !== "production" ? (...p) => {
    const h = typeof i == "string" ? `"${i}"` : "component";
    return p.length === 0 ? console.error([`MUI: Seems like you called \`styled(${h})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : p.some((S) => S === void 0) && console.error(`MUI: the styled(${h})(...args) API requires all its args to be defined.`), c(...p);
  } : c;
}
function KL(i, s) {
  Array.isArray(i.__emotion_styles) && (i.__emotion_styles = s(i.__emotion_styles));
}
const iR = [];
function oR(i) {
  return iR[0] = i, UE(iR);
}
const ZL = (i) => {
  const s = Object.keys(i).map((c) => ({
    key: c,
    val: i[c]
  })) || [];
  return s.sort((c, p) => c.val - p.val), s.reduce((c, p) => ({
    ...c,
    [p.key]: p.val
  }), {});
};
function JL(i) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: s = {
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
    unit: c = "px",
    step: p = 5,
    ...h
  } = i, S = ZL(s), y = Object.keys(S);
  function C(A) {
    return `@media (min-width:${typeof s[A] == "number" ? s[A] : A}${c})`;
  }
  function x(A) {
    return `@media (max-width:${(typeof s[A] == "number" ? s[A] : A) - p / 100}${c})`;
  }
  function k(A, $) {
    const B = y.indexOf($);
    return `@media (min-width:${typeof s[A] == "number" ? s[A] : A}${c}) and (max-width:${(B !== -1 && typeof s[y[B]] == "number" ? s[y[B]] : $) - p / 100}${c})`;
  }
  function _(A) {
    return y.indexOf(A) + 1 < y.length ? k(A, y[y.indexOf(A) + 1]) : C(A);
  }
  function M(A) {
    const $ = y.indexOf(A);
    return $ === 0 ? C(y[1]) : $ === y.length - 1 ? x(y[$]) : k(A, y[y.indexOf(A) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: y,
    values: S,
    up: C,
    down: x,
    between: k,
    only: _,
    not: M,
    unit: c,
    ...h
  };
}
const ez = {
  borderRadius: 4
};
function sO(i = 8, s = ME({
  spacing: i
})) {
  if (i.mui)
    return i;
  const c = (...p) => (process.env.NODE_ENV !== "production" && (p.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${p.length}`)), (p.length === 0 ? [1] : p).map((S) => {
    const y = s(S);
    return typeof y == "number" ? `${y}px` : y;
  }).join(" "));
  return c.mui = !0, c;
}
function tz(i, s) {
  var p;
  const c = this;
  if (c.vars) {
    if (!((p = c.colorSchemes) != null && p[i]) || typeof c.getColorSchemeSelector != "function")
      return {};
    let h = c.getColorSchemeSelector(i);
    return h === "&" ? s : ((h.includes("data-") || h.includes(".")) && (h = `*:where(${h.replace(/\s*&$/, "")}) &`), {
      [h]: s
    });
  }
  return c.palette.mode === i ? s : {};
}
function $E(i = {}, ...s) {
  const {
    breakpoints: c = {},
    palette: p = {},
    spacing: h,
    shape: S = {},
    ...y
  } = i, C = JL(c), x = sO(h);
  let k = hi({
    breakpoints: C,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...p
    },
    spacing: x,
    shape: {
      ...ez,
      ...S
    }
  }, y);
  return k = iA(k), k.applyStyles = tz, k = s.reduce((_, M) => hi(_, M), k), k.unstable_sxConfig = {
    ...v0,
    ...y == null ? void 0 : y.unstable_sxConfig
  }, k.unstable_sx = function(M) {
    return Ld({
      sx: M,
      theme: this
    });
  }, k;
}
function nz(i) {
  return Object.keys(i).length === 0;
}
function rz(i = null) {
  const s = ve.useContext(uO);
  return !s || nz(s) ? i : s;
}
const az = $E();
function iz(i = az) {
  return rz(i);
}
const lR = (i) => i, oz = () => {
  let i = lR;
  return {
    configure(s) {
      i = s;
    },
    generate(s) {
      return i(s);
    },
    reset() {
      i = lR;
    }
  };
}, lz = oz(), uz = {
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
function is(i, s, c = "Mui") {
  const p = uz[s];
  return p ? `${c}-${p}` : `${lz.generate(i)}-${s}`;
}
function Tc(i, s, c = "Mui") {
  const p = {};
  return s.forEach((h) => {
    p[h] = is(i, h, c);
  }), p;
}
var hE = { exports: {} }, an = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uR;
function sz() {
  if (uR) return an;
  uR = 1;
  var i = Symbol.for("react.element"), s = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), y = Symbol.for("react.context"), C = Symbol.for("react.server_context"), x = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), B;
  B = Symbol.for("react.module.reference");
  function L(P) {
    if (typeof P == "object" && P !== null) {
      var ee = P.$$typeof;
      switch (ee) {
        case i:
          switch (P = P.type, P) {
            case c:
            case h:
            case p:
            case k:
            case _:
              return P;
            default:
              switch (P = P && P.$$typeof, P) {
                case C:
                case y:
                case x:
                case A:
                case M:
                case S:
                  return P;
                default:
                  return ee;
              }
          }
        case s:
          return ee;
      }
    }
  }
  return an.ContextConsumer = y, an.ContextProvider = S, an.Element = i, an.ForwardRef = x, an.Fragment = c, an.Lazy = A, an.Memo = M, an.Portal = s, an.Profiler = h, an.StrictMode = p, an.Suspense = k, an.SuspenseList = _, an.isAsyncMode = function() {
    return !1;
  }, an.isConcurrentMode = function() {
    return !1;
  }, an.isContextConsumer = function(P) {
    return L(P) === y;
  }, an.isContextProvider = function(P) {
    return L(P) === S;
  }, an.isElement = function(P) {
    return typeof P == "object" && P !== null && P.$$typeof === i;
  }, an.isForwardRef = function(P) {
    return L(P) === x;
  }, an.isFragment = function(P) {
    return L(P) === c;
  }, an.isLazy = function(P) {
    return L(P) === A;
  }, an.isMemo = function(P) {
    return L(P) === M;
  }, an.isPortal = function(P) {
    return L(P) === s;
  }, an.isProfiler = function(P) {
    return L(P) === h;
  }, an.isStrictMode = function(P) {
    return L(P) === p;
  }, an.isSuspense = function(P) {
    return L(P) === k;
  }, an.isSuspenseList = function(P) {
    return L(P) === _;
  }, an.isValidElementType = function(P) {
    return typeof P == "string" || typeof P == "function" || P === c || P === h || P === p || P === k || P === _ || P === $ || typeof P == "object" && P !== null && (P.$$typeof === A || P.$$typeof === M || P.$$typeof === S || P.$$typeof === y || P.$$typeof === x || P.$$typeof === B || P.getModuleId !== void 0);
  }, an.typeOf = L, an;
}
var on = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sR;
function cz() {
  return sR || (sR = 1, process.env.NODE_ENV !== "production" && function() {
    var i = Symbol.for("react.element"), s = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), y = Symbol.for("react.context"), C = Symbol.for("react.server_context"), x = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), B = !1, L = !1, P = !1, ee = !1, le = !1, q;
    q = Symbol.for("react.module.reference");
    function Y(ke) {
      return !!(typeof ke == "string" || typeof ke == "function" || ke === c || ke === h || le || ke === p || ke === k || ke === _ || ee || ke === $ || B || L || P || typeof ke == "object" && ke !== null && (ke.$$typeof === A || ke.$$typeof === M || ke.$$typeof === S || ke.$$typeof === y || ke.$$typeof === x || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      ke.$$typeof === q || ke.getModuleId !== void 0));
    }
    function U(ke) {
      if (typeof ke == "object" && ke !== null) {
        var Mt = ke.$$typeof;
        switch (Mt) {
          case i:
            var Ft = ke.type;
            switch (Ft) {
              case c:
              case h:
              case p:
              case k:
              case _:
                return Ft;
              default:
                var It = Ft && Ft.$$typeof;
                switch (It) {
                  case C:
                  case y:
                  case x:
                  case A:
                  case M:
                  case S:
                    return It;
                  default:
                    return Mt;
                }
            }
          case s:
            return Mt;
        }
      }
    }
    var re = y, te = S, Ae = i, Oe = x, O = c, ne = A, be = M, ue = s, xe = h, Le = p, we = k, Fe = _, se = !1, Ee = !1;
    function I(ke) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function fe(ke) {
      return Ee || (Ee = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Re(ke) {
      return U(ke) === y;
    }
    function Ie(ke) {
      return U(ke) === S;
    }
    function De(ke) {
      return typeof ke == "object" && ke !== null && ke.$$typeof === i;
    }
    function Ze(ke) {
      return U(ke) === x;
    }
    function Pe(ke) {
      return U(ke) === c;
    }
    function Qe(ke) {
      return U(ke) === A;
    }
    function Ve(ke) {
      return U(ke) === M;
    }
    function it(ke) {
      return U(ke) === s;
    }
    function st(ke) {
      return U(ke) === h;
    }
    function Ct(ke) {
      return U(ke) === p;
    }
    function ye(ke) {
      return U(ke) === k;
    }
    function Tt(ke) {
      return U(ke) === _;
    }
    on.ContextConsumer = re, on.ContextProvider = te, on.Element = Ae, on.ForwardRef = Oe, on.Fragment = O, on.Lazy = ne, on.Memo = be, on.Portal = ue, on.Profiler = xe, on.StrictMode = Le, on.Suspense = we, on.SuspenseList = Fe, on.isAsyncMode = I, on.isConcurrentMode = fe, on.isContextConsumer = Re, on.isContextProvider = Ie, on.isElement = De, on.isForwardRef = Ze, on.isFragment = Pe, on.isLazy = Qe, on.isMemo = Ve, on.isPortal = it, on.isProfiler = st, on.isStrictMode = Ct, on.isSuspense = ye, on.isSuspenseList = Tt, on.isValidElementType = Y, on.typeOf = U;
  }()), on;
}
process.env.NODE_ENV === "production" ? hE.exports = sz() : hE.exports = cz();
var cR = hE.exports;
function cO(i, s = "") {
  return i.displayName || i.name || s;
}
function fR(i, s, c) {
  const p = cO(s);
  return i.displayName || (p !== "" ? `${c}(${p})` : c);
}
function fz(i) {
  if (i != null) {
    if (typeof i == "string")
      return i;
    if (typeof i == "function")
      return cO(i, "Component");
    if (typeof i == "object")
      switch (i.$$typeof) {
        case cR.ForwardRef:
          return fR(i, i.render, "ForwardRef");
        case cR.Memo:
          return fR(i, i.type, "memo");
        default:
          return;
      }
  }
}
function fO(i) {
  const {
    variants: s,
    ...c
  } = i, p = {
    variants: s,
    style: oR(c),
    isProcessed: !0
  };
  return p.style === c || s && s.forEach((h) => {
    typeof h.style != "function" && (h.style = oR(h.style));
  }), p;
}
const dz = $E();
function rE(i) {
  return i !== "ownerState" && i !== "theme" && i !== "sx" && i !== "as";
}
function pz(i) {
  return i ? (s, c) => c[i] : null;
}
function vz(i, s, c) {
  i.theme = gz(i.theme) ? c : i.theme[s] || i.theme;
}
function Wg(i, s) {
  const c = typeof s == "function" ? s(i) : s;
  if (Array.isArray(c))
    return c.flatMap((p) => Wg(i, p));
  if (Array.isArray(c == null ? void 0 : c.variants)) {
    let p;
    if (c.isProcessed)
      p = c.style;
    else {
      const {
        variants: h,
        ...S
      } = c;
      p = S;
    }
    return dO(i, c.variants, [p]);
  }
  return c != null && c.isProcessed ? c.style : c;
}
function dO(i, s, c = []) {
  var h;
  let p;
  e: for (let S = 0; S < s.length; S += 1) {
    const y = s[S];
    if (typeof y.props == "function") {
      if (p ?? (p = {
        ...i,
        ...i.ownerState,
        ownerState: i.ownerState
      }), !y.props(p))
        continue;
    } else
      for (const C in y.props)
        if (i[C] !== y.props[C] && ((h = i.ownerState) == null ? void 0 : h[C]) !== y.props[C])
          continue e;
    typeof y.style == "function" ? (p ?? (p = {
      ...i,
      ...i.ownerState,
      ownerState: i.ownerState
    }), c.push(y.style(p))) : c.push(y.style);
  }
  return c;
}
function hz(i = {}) {
  const {
    themeId: s,
    defaultTheme: c = dz,
    rootShouldForwardProp: p = rE,
    slotShouldForwardProp: h = rE
  } = i;
  function S(C) {
    vz(C, s, c);
  }
  return (C, x = {}) => {
    KL(C, (U) => U.filter((re) => re !== Ld));
    const {
      name: k,
      slot: _,
      skipVariantsResolver: M,
      skipSx: A,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: $ = pz(pO(_)),
      ...B
    } = x, L = M !== void 0 ? M : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      _ && _ !== "Root" && _ !== "root" || !1
    ), P = A || !1;
    let ee = rE;
    _ === "Root" || _ === "root" ? ee = p : _ ? ee = h : Sz(C) && (ee = void 0);
    const le = XL(C, {
      shouldForwardProp: ee,
      label: yz(k, _),
      ...B
    }), q = (U) => {
      if (typeof U == "function" && U.__emotion_real !== U)
        return function(te) {
          return Wg(te, U);
        };
      if (Il(U)) {
        const re = fO(U);
        return re.variants ? function(Ae) {
          return Wg(Ae, re);
        } : re.style;
      }
      return U;
    }, Y = (...U) => {
      const re = [], te = U.map(q), Ae = [];
      if (re.push(S), k && $ && Ae.push(function(be) {
        var we, Fe;
        const xe = (Fe = (we = be.theme.components) == null ? void 0 : we[k]) == null ? void 0 : Fe.styleOverrides;
        if (!xe)
          return null;
        const Le = {};
        for (const se in xe)
          Le[se] = Wg(be, xe[se]);
        return $(be, Le);
      }), k && !L && Ae.push(function(be) {
        var Le, we;
        const ue = be.theme, xe = (we = (Le = ue == null ? void 0 : ue.components) == null ? void 0 : Le[k]) == null ? void 0 : we.variants;
        return xe ? dO(be, xe) : null;
      }), P || Ae.push(Ld), Array.isArray(te[0])) {
        const ne = te.shift(), be = new Array(re.length).fill(""), ue = new Array(Ae.length).fill("");
        let xe;
        xe = [...be, ...ne, ...ue], xe.raw = [...be, ...ne.raw, ...ue], re.unshift(xe);
      }
      const Oe = [...re, ...te, ...Ae], O = le(...Oe);
      return C.muiName && (O.muiName = C.muiName), process.env.NODE_ENV !== "production" && (O.displayName = mz(k, _, C)), O;
    };
    return le.withConfig && (Y.withConfig = le.withConfig), Y;
  };
}
function mz(i, s, c) {
  return i ? `${i}${Cn(s || "")}` : `Styled(${fz(c)})`;
}
function yz(i, s) {
  let c;
  return process.env.NODE_ENV !== "production" && i && (c = `${i}-${pO(s || "Root")}`), c;
}
function gz(i) {
  for (const s in i)
    return !1;
  return !0;
}
function Sz(i) {
  return typeof i == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  i.charCodeAt(0) > 96;
}
function pO(i) {
  return i && i.charAt(0).toLowerCase() + i.slice(1);
}
const mh = typeof window < "u" ? ve.useLayoutEffect : ve.useEffect;
function Rh(i, s) {
  return process.env.NODE_ENV === "production" ? () => null : function(...p) {
    return i(...p) || s(...p);
  };
}
function bz(i) {
  const {
    prototype: s = {}
  } = i;
  return !!s.isReactComponent;
}
function vO(i, s, c, p, h) {
  const S = i[s], y = h || s;
  if (S == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let C;
  const x = S.type;
  return typeof x == "function" && !bz(x) && (C = "Did you accidentally use a plain function component for an element instead?"), C !== void 0 ? new Error(`Invalid ${p} \`${y}\` supplied to \`${c}\`. Expected an element that can hold a ref. ${C} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const jE = Rh(w.element, vO);
jE.isRequired = Rh(w.element.isRequired, vO);
function Ez(i) {
  const {
    prototype: s = {}
  } = i;
  return !!s.isReactComponent;
}
function Cz(i, s, c, p, h) {
  const S = i[s], y = h || s;
  if (S == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let C;
  return typeof S == "function" && !Ez(S) && (C = "Did you accidentally provide a plain function component instead?"), C !== void 0 ? new Error(`Invalid ${p} \`${y}\` supplied to \`${c}\`. Expected an element type that can hold a ref. ${C} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Tz = Rh(w.elementType, Cz), xz = "exact-prop: ​";
function wz(i) {
  return process.env.NODE_ENV === "production" ? i : {
    ...i,
    [xz]: (s) => {
      const c = Object.keys(s).filter((p) => !i.hasOwnProperty(p));
      return c.length > 0 ? new Error(`The following props are not supported: ${c.map((p) => `\`${p}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
function yh(i, s, c, p, h) {
  if (process.env.NODE_ENV === "production")
    return null;
  const S = i[s], y = h || s;
  return S == null ? null : S && S.nodeType !== 1 ? new Error(`Invalid ${p} \`${y}\` supplied to \`${c}\`. Expected an HTMLElement.`) : null;
}
const FE = w.oneOfType([w.func, w.object]);
function dR(i) {
  return i && i.ownerDocument || document;
}
function mE(i, s) {
  typeof i == "function" ? i(s) : i && (i.current = s);
}
let pR = 0;
function Rz(i) {
  const [s, c] = ve.useState(i), p = i || s;
  return ve.useEffect(() => {
    s == null && (pR += 1, c(`mui-${pR}`));
  }, [s]), p;
}
const Oz = {
  ...ve
}, vR = Oz.useId;
function kz(i) {
  if (vR !== void 0) {
    const s = vR();
    return i ?? s;
  }
  return Rz(i);
}
function Dz({
  controlled: i,
  default: s,
  name: c,
  state: p = "value"
}) {
  const {
    current: h
  } = ve.useRef(i !== void 0), [S, y] = ve.useState(s), C = h ? i : S;
  if (process.env.NODE_ENV !== "production") {
    ve.useEffect(() => {
      h !== (i !== void 0) && console.error([`MUI: A component is changing the ${h ? "" : "un"}controlled ${p} state of ${c} to be ${h ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${c} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [p, c, i]);
    const {
      current: k
    } = ve.useRef(s);
    ve.useEffect(() => {
      !h && !Object.is(k, s) && console.error([`MUI: A component is changing the default ${p} state of an uncontrolled ${c} after being initialized. To suppress this warning opt to use a controlled ${c}.`].join(`
`));
    }, [JSON.stringify(s)]);
  }
  const x = ve.useCallback((k) => {
    h || y(k);
  }, []);
  return [C, x];
}
function _d(i) {
  const s = ve.useRef(i);
  return mh(() => {
    s.current = i;
  }), ve.useRef((...c) => (
    // @ts-expect-error hide `this`
    (0, s.current)(...c)
  )).current;
}
function rs(...i) {
  return ve.useMemo(() => i.every((s) => s == null) ? null : (s) => {
    i.forEach((c) => {
      mE(c, s);
    });
  }, i);
}
const hR = {};
function hO(i, s) {
  const c = ve.useRef(hR);
  return c.current === hR && (c.current = i(s)), c;
}
const _z = [];
function Mz(i) {
  ve.useEffect(i, _z);
}
class g0 {
  constructor() {
    Jv(this, "currentId", null);
    Jv(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Jv(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new g0();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(s, c) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, c();
    }, s);
  }
}
function Md() {
  const i = hO(g0.create).current;
  return Mz(i.disposeEffect), i;
}
function Zg(i) {
  try {
    return i.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
function Nz(i) {
  return typeof i == "string";
}
function lh(i, s, c) {
  return i === void 0 || Nz(i) ? s : {
    ...s,
    ownerState: {
      ...s.ownerState,
      ...c
    }
  };
}
function Az(i, s = []) {
  if (i === void 0)
    return {};
  const c = {};
  return Object.keys(i).filter((p) => p.match(/^on[A-Z]/) && typeof i[p] == "function" && !s.includes(p)).forEach((p) => {
    c[p] = i[p];
  }), c;
}
function mR(i) {
  if (i === void 0)
    return {};
  const s = {};
  return Object.keys(i).filter((c) => !(c.match(/^on[A-Z]/) && typeof i[c] == "function")).forEach((c) => {
    s[c] = i[c];
  }), s;
}
function Lz(i) {
  const {
    getSlotProps: s,
    additionalProps: c,
    externalSlotProps: p,
    externalForwardedProps: h,
    className: S
  } = i;
  if (!s) {
    const $ = mr(c == null ? void 0 : c.className, S, h == null ? void 0 : h.className, p == null ? void 0 : p.className), B = {
      ...c == null ? void 0 : c.style,
      ...h == null ? void 0 : h.style,
      ...p == null ? void 0 : p.style
    }, L = {
      ...c,
      ...h,
      ...p
    };
    return $.length > 0 && (L.className = $), Object.keys(B).length > 0 && (L.style = B), {
      props: L,
      internalRef: void 0
    };
  }
  const y = Az({
    ...h,
    ...p
  }), C = mR(p), x = mR(h), k = s(y), _ = mr(k == null ? void 0 : k.className, c == null ? void 0 : c.className, S, h == null ? void 0 : h.className, p == null ? void 0 : p.className), M = {
    ...k == null ? void 0 : k.style,
    ...c == null ? void 0 : c.style,
    ...h == null ? void 0 : h.style,
    ...p == null ? void 0 : p.style
  }, A = {
    ...k,
    ...c,
    ...x,
    ...C
  };
  return _.length > 0 && (A.className = _), Object.keys(M).length > 0 && (A.style = M), {
    props: A,
    internalRef: k.ref
  };
}
function zz(i, s, c) {
  return typeof i == "function" ? i(s, c) : i;
}
function Uz(i) {
  var M;
  const {
    elementType: s,
    externalSlotProps: c,
    ownerState: p,
    skipResolvingSlotProps: h = !1,
    ...S
  } = i, y = h ? {} : zz(c, p), {
    props: C,
    internalRef: x
  } = Lz({
    ...S,
    externalSlotProps: y
  }), k = rs(x, y == null ? void 0 : y.ref, (M = i.additionalProps) == null ? void 0 : M.ref);
  return lh(s, {
    ...C,
    ref: k
  }, p);
}
function BE(i) {
  var s;
  return parseInt(ve.version, 10) >= 19 ? ((s = i == null ? void 0 : i.props) == null ? void 0 : s.ref) || null : (i == null ? void 0 : i.ref) || null;
}
const Pz = /* @__PURE__ */ ve.createContext();
process.env.NODE_ENV !== "production" && (w.node, w.bool);
const mO = () => ve.useContext(Pz) ?? !1, $z = /* @__PURE__ */ ve.createContext(void 0);
process.env.NODE_ENV !== "production" && (w.node, w.object);
function jz(i) {
  const {
    theme: s,
    name: c,
    props: p
  } = i;
  if (!s || !s.components || !s.components[c])
    return p;
  const h = s.components[c];
  return h.defaultProps ? Qg(h.defaultProps, p) : !h.styleOverrides && !h.variants ? Qg(h, p) : p;
}
function Fz({
  props: i,
  name: s
}) {
  const c = ve.useContext($z);
  return jz({
    props: i,
    name: s,
    theme: {
      components: c
    }
  });
}
const yR = {
  theme: void 0
};
function Bz(i) {
  let s, c;
  return function(h) {
    let S = s;
    return (S === void 0 || h.theme !== c) && (yR.theme = h.theme, S = fO(i(yR)), s = S, c = h.theme), S;
  };
}
function Hz(i = "") {
  function s(...p) {
    if (!p.length)
      return "";
    const h = p[0];
    return typeof h == "string" && !h.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${i ? `${i}-` : ""}${h}${s(...p.slice(1))})` : `, ${h}`;
  }
  return (p, ...h) => `var(--${i ? `${i}-` : ""}${p}${s(...h)})`;
}
const gR = (i, s, c, p = []) => {
  let h = i;
  s.forEach((S, y) => {
    y === s.length - 1 ? Array.isArray(h) ? h[Number(S)] = c : h && typeof h == "object" && (h[S] = c) : h && typeof h == "object" && (h[S] || (h[S] = p.includes(S) ? [] : {}), h = h[S]);
  });
}, Vz = (i, s, c) => {
  function p(h, S = [], y = []) {
    Object.entries(h).forEach(([C, x]) => {
      (!c || c && !c([...S, C])) && x != null && (typeof x == "object" && Object.keys(x).length > 0 ? p(x, [...S, C], Array.isArray(x) ? [...y, C] : y) : s([...S, C], x, y));
    });
  }
  p(i);
}, Iz = (i, s) => typeof s == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((p) => i.includes(p)) || i[i.length - 1].toLowerCase().includes("opacity") ? s : `${s}px` : s;
function aE(i, s) {
  const {
    prefix: c,
    shouldSkipGeneratingVar: p
  } = s || {}, h = {}, S = {}, y = {};
  return Vz(
    i,
    (C, x, k) => {
      if ((typeof x == "string" || typeof x == "number") && (!p || !p(C, x))) {
        const _ = `--${c ? `${c}-` : ""}${C.join("-")}`, M = Iz(C, x);
        Object.assign(h, {
          [_]: M
        }), gR(S, C, `var(${_})`, k), gR(y, C, `var(${_}, ${M})`, k);
      }
    },
    (C) => C[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: h,
    vars: S,
    varsWithDefaults: y
  };
}
function Yz(i, s = {}) {
  const {
    getSelector: c = P,
    disableCssColorScheme: p,
    colorSchemeSelector: h
  } = s, {
    colorSchemes: S = {},
    components: y,
    defaultColorScheme: C = "light",
    ...x
  } = i, {
    vars: k,
    css: _,
    varsWithDefaults: M
  } = aE(x, s);
  let A = M;
  const $ = {}, {
    [C]: B,
    ...L
  } = S;
  if (Object.entries(L || {}).forEach(([q, Y]) => {
    const {
      vars: U,
      css: re,
      varsWithDefaults: te
    } = aE(Y, s);
    A = hi(A, te), $[q] = {
      css: re,
      vars: U
    };
  }), B) {
    const {
      css: q,
      vars: Y,
      varsWithDefaults: U
    } = aE(B, s);
    A = hi(A, U), $[C] = {
      css: q,
      vars: Y
    };
  }
  function P(q, Y) {
    var re, te;
    let U = h;
    if (h === "class" && (U = ".%s"), h === "data" && (U = "[data-%s]"), h != null && h.startsWith("data-") && !h.includes("%s") && (U = `[${h}="%s"]`), q) {
      if (U === "media")
        return i.defaultColorScheme === q ? ":root" : {
          [`@media (prefers-color-scheme: ${((te = (re = S[q]) == null ? void 0 : re.palette) == null ? void 0 : te.mode) || q})`]: {
            ":root": Y
          }
        };
      if (U)
        return i.defaultColorScheme === q ? `:root, ${U.replace("%s", String(q))}` : U.replace("%s", String(q));
    }
    return ":root";
  }
  return {
    vars: A,
    generateThemeVars: () => {
      let q = {
        ...k
      };
      return Object.entries($).forEach(([, {
        vars: Y
      }]) => {
        q = hi(q, Y);
      }), q;
    },
    generateStyleSheets: () => {
      var Ae, Oe;
      const q = [], Y = i.defaultColorScheme || "light";
      function U(O, ne) {
        Object.keys(ne).length && q.push(typeof O == "string" ? {
          [O]: {
            ...ne
          }
        } : O);
      }
      U(c(void 0, {
        ..._
      }), _);
      const {
        [Y]: re,
        ...te
      } = $;
      if (re) {
        const {
          css: O
        } = re, ne = (Oe = (Ae = S[Y]) == null ? void 0 : Ae.palette) == null ? void 0 : Oe.mode, be = !p && ne ? {
          colorScheme: ne,
          ...O
        } : {
          ...O
        };
        U(c(Y, {
          ...be
        }), be);
      }
      return Object.entries(te).forEach(([O, {
        css: ne
      }]) => {
        var xe, Le;
        const be = (Le = (xe = S[O]) == null ? void 0 : xe.palette) == null ? void 0 : Le.mode, ue = !p && be ? {
          colorScheme: be,
          ...ne
        } : {
          ...ne
        };
        U(c(O, {
          ...ue
        }), ue);
      }), q;
    }
  };
}
function Wz(i) {
  return function(c) {
    return i === "media" ? (process.env.NODE_ENV !== "production" && c !== "light" && c !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${c}'.`), `@media (prefers-color-scheme: ${c})`) : i ? i.startsWith("data-") && !i.includes("%s") ? `[${i}="${c}"] &` : i === "class" ? `.${c} &` : i === "data" ? `[data-${c}] &` : `${i.replace("%s", c)} &` : "&";
  };
}
const gh = {
  black: "#000",
  white: "#fff"
}, Gz = {
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
}, Cd = {
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
}, Td = {
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
}, rh = {
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
}, xd = {
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
}, wd = {
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
}, Rd = {
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
};
function yO() {
  return {
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
      paper: gh.white,
      default: gh.white
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
  };
}
const Qz = yO();
function gO() {
  return {
    text: {
      primary: gh.white,
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
      active: gh.white,
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
}
const SR = gO();
function bR(i, s, c, p) {
  const h = p.light || p, S = p.dark || p * 1.5;
  i[s] || (i.hasOwnProperty(c) ? i[s] = i[c] : s === "light" ? i.light = _E(i.main, h) : s === "dark" && (i.dark = DE(i.main, S)));
}
function qz(i = "light") {
  return i === "dark" ? {
    main: xd[200],
    light: xd[50],
    dark: xd[400]
  } : {
    main: xd[700],
    light: xd[400],
    dark: xd[800]
  };
}
function Xz(i = "light") {
  return i === "dark" ? {
    main: Cd[200],
    light: Cd[50],
    dark: Cd[400]
  } : {
    main: Cd[500],
    light: Cd[300],
    dark: Cd[700]
  };
}
function Kz(i = "light") {
  return i === "dark" ? {
    main: Td[500],
    light: Td[300],
    dark: Td[700]
  } : {
    main: Td[700],
    light: Td[400],
    dark: Td[800]
  };
}
function Zz(i = "light") {
  return i === "dark" ? {
    main: wd[400],
    light: wd[300],
    dark: wd[700]
  } : {
    main: wd[700],
    light: wd[500],
    dark: wd[900]
  };
}
function Jz(i = "light") {
  return i === "dark" ? {
    main: Rd[400],
    light: Rd[300],
    dark: Rd[700]
  } : {
    main: Rd[800],
    light: Rd[500],
    dark: Rd[900]
  };
}
function e3(i = "light") {
  return i === "dark" ? {
    main: rh[400],
    light: rh[300],
    dark: rh[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: rh[500],
    dark: rh[900]
  };
}
function HE(i) {
  const {
    mode: s = "light",
    contrastThreshold: c = 3,
    tonalOffset: p = 0.2,
    ...h
  } = i, S = i.primary || qz(s), y = i.secondary || Xz(s), C = i.error || Kz(s), x = i.info || Zz(s), k = i.success || Jz(s), _ = i.warning || e3(s);
  function M(L) {
    const P = Qw(L, SR.text.primary) >= c ? SR.text.primary : Qz.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const ee = Qw(L, P);
      ee < 3 && console.error([`MUI: The contrast ratio of ${ee}:1 for ${P} on ${L}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return P;
  }
  const A = ({
    color: L,
    name: P,
    mainShade: ee = 500,
    lightShade: le = 300,
    darkShade: q = 700
  }) => {
    if (L = {
      ...L
    }, !L.main && L[ee] && (L.main = L[ee]), !L.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${P ? ` (${P})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${ee}\` property.` : ts(11, P ? ` (${P})` : "", ee));
    if (typeof L.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${P ? ` (${P})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(L.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : ts(12, P ? ` (${P})` : "", JSON.stringify(L.main)));
    return bR(L, "light", le, p), bR(L, "dark", q, p), L.contrastText || (L.contrastText = M(L.main)), L;
  };
  let $;
  return s === "light" ? $ = yO() : s === "dark" && ($ = gO()), process.env.NODE_ENV !== "production" && ($ || console.error(`MUI: The palette mode \`${s}\` is not supported.`)), hi({
    // A collection of common colors.
    common: {
      ...gh
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: s,
    // The colors used to represent primary interface elements for a user.
    primary: A({
      color: S,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: A({
      color: y,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: A({
      color: C,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: A({
      color: _,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: A({
      color: x,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: A({
      color: k,
      name: "success"
    }),
    // The grey colors.
    grey: Gz,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: c,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: M,
    // Generate a rich color object.
    augmentColor: A,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: p,
    // The light and dark mode object.
    ...$
  }, h);
}
function t3(i) {
  const s = {};
  return Object.entries(i).forEach((p) => {
    const [h, S] = p;
    typeof S == "object" && (s[h] = `${S.fontStyle ? `${S.fontStyle} ` : ""}${S.fontVariant ? `${S.fontVariant} ` : ""}${S.fontWeight ? `${S.fontWeight} ` : ""}${S.fontStretch ? `${S.fontStretch} ` : ""}${S.fontSize || ""}${S.lineHeight ? `/${S.lineHeight} ` : ""}${S.fontFamily || ""}`);
  }), s;
}
function n3(i, s) {
  return {
    toolbar: {
      minHeight: 56,
      [i.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [i.up("sm")]: {
        minHeight: 64
      }
    },
    ...s
  };
}
function r3(i) {
  return Math.round(i * 1e5) / 1e5;
}
const ER = {
  textTransform: "uppercase"
}, CR = '"Roboto", "Helvetica", "Arial", sans-serif';
function a3(i, s) {
  const {
    fontFamily: c = CR,
    // The default font size of the Material Specification.
    fontSize: p = 14,
    // px
    fontWeightLight: h = 300,
    fontWeightRegular: S = 400,
    fontWeightMedium: y = 500,
    fontWeightBold: C = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: x = 16,
    // Apply the CSS properties to all the variants.
    allVariants: k,
    pxToRem: _,
    ...M
  } = typeof s == "function" ? s(i) : s;
  process.env.NODE_ENV !== "production" && (typeof p != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof x != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const A = p / 14, $ = _ || ((P) => `${P / x * A}rem`), B = (P, ee, le, q, Y) => ({
    fontFamily: c,
    fontWeight: P,
    fontSize: $(ee),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: le,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...c === CR ? {
      letterSpacing: `${r3(q / ee)}em`
    } : {},
    ...Y,
    ...k
  }), L = {
    h1: B(h, 96, 1.167, -1.5),
    h2: B(h, 60, 1.2, -0.5),
    h3: B(S, 48, 1.167, 0),
    h4: B(S, 34, 1.235, 0.25),
    h5: B(S, 24, 1.334, 0),
    h6: B(y, 20, 1.6, 0.15),
    subtitle1: B(S, 16, 1.75, 0.15),
    subtitle2: B(y, 14, 1.57, 0.1),
    body1: B(S, 16, 1.5, 0.15),
    body2: B(S, 14, 1.43, 0.15),
    button: B(y, 14, 1.75, 0.4, ER),
    caption: B(S, 12, 1.66, 0.4),
    overline: B(S, 12, 2.66, 1, ER),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return hi({
    htmlFontSize: x,
    pxToRem: $,
    fontFamily: c,
    fontSize: p,
    fontWeightLight: h,
    fontWeightRegular: S,
    fontWeightMedium: y,
    fontWeightBold: C,
    ...L
  }, M, {
    clone: !1
    // No need to clone deep
  });
}
const i3 = 0.2, o3 = 0.14, l3 = 0.12;
function An(...i) {
  return [`${i[0]}px ${i[1]}px ${i[2]}px ${i[3]}px rgba(0,0,0,${i3})`, `${i[4]}px ${i[5]}px ${i[6]}px ${i[7]}px rgba(0,0,0,${o3})`, `${i[8]}px ${i[9]}px ${i[10]}px ${i[11]}px rgba(0,0,0,${l3})`].join(",");
}
const u3 = ["none", An(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), An(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), An(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), An(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), An(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), An(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), An(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), An(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), An(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), An(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), An(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), An(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), An(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), An(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), An(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), An(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), An(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), An(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), An(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), An(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), An(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), An(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), An(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), An(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], s3 = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, c3 = {
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
function TR(i) {
  return `${Math.round(i)}ms`;
}
function f3(i) {
  if (!i)
    return 0;
  const s = i / 36;
  return Math.min(Math.round((4 + 15 * s ** 0.25 + s / 5) * 10), 3e3);
}
function d3(i) {
  const s = {
    ...s3,
    ...i.easing
  }, c = {
    ...c3,
    ...i.duration
  };
  return {
    getAutoHeightDuration: f3,
    create: (h = ["all"], S = {}) => {
      const {
        duration: y = c.standard,
        easing: C = s.easeInOut,
        delay: x = 0,
        ...k
      } = S;
      if (process.env.NODE_ENV !== "production") {
        const _ = (A) => typeof A == "string", M = (A) => !Number.isNaN(parseFloat(A));
        !_(h) && !Array.isArray(h) && console.error('MUI: Argument "props" must be a string or Array.'), !M(y) && !_(y) && console.error(`MUI: Argument "duration" must be a number or a string but found ${y}.`), _(C) || console.error('MUI: Argument "easing" must be a string.'), !M(x) && !_(x) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof S != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(k).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(k).join(",")}].`);
      }
      return (Array.isArray(h) ? h : [h]).map((_) => `${_} ${typeof y == "string" ? y : TR(y)} ${C} ${typeof x == "string" ? x : TR(x)}`).join(",");
    },
    ...i,
    easing: s,
    duration: c
  };
}
const p3 = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function v3(i) {
  return Il(i) || typeof i > "u" || typeof i == "string" || typeof i == "boolean" || typeof i == "number" || Array.isArray(i);
}
function SO(i = {}) {
  const s = {
    ...i
  };
  function c(p) {
    const h = Object.entries(p);
    for (let S = 0; S < h.length; S++) {
      const [y, C] = h[S];
      !v3(C) || y.startsWith("unstable_") ? delete p[y] : Il(C) && (p[y] = {
        ...C
      }, c(p[y]));
    }
  }
  return c(s), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(s, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function yE(i = {}, ...s) {
  const {
    breakpoints: c,
    mixins: p = {},
    spacing: h,
    palette: S = {},
    transitions: y = {},
    typography: C = {},
    shape: x,
    ...k
  } = i;
  if (i.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : ts(20));
  const _ = HE(S), M = $E(i);
  let A = hi(M, {
    mixins: n3(M.breakpoints, p),
    palette: _,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: u3.slice(),
    typography: a3(_, C),
    transitions: d3(y),
    zIndex: {
      ...p3
    }
  });
  if (A = hi(A, k), A = s.reduce(($, B) => hi($, B), A), process.env.NODE_ENV !== "production") {
    const $ = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], B = (L, P) => {
      let ee;
      for (ee in L) {
        const le = L[ee];
        if ($.includes(ee) && Object.keys(le).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const q = is("", ee);
            console.error([`MUI: The \`${P}\` component increases the CSS specificity of the \`${ee}\` internal state.`, "You can not override it like this: ", JSON.stringify(L, null, 2), "", `Instead, you need to use the '&.${q}' syntax:`, JSON.stringify({
              root: {
                [`&.${q}`]: le
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          L[ee] = {};
        }
      }
    };
    Object.keys(A.components).forEach((L) => {
      const P = A.components[L].styleOverrides;
      P && L.startsWith("Mui") && B(P, L);
    });
  }
  return A.unstable_sxConfig = {
    ...v0,
    ...k == null ? void 0 : k.unstable_sxConfig
  }, A.unstable_sx = function(B) {
    return Ld({
      sx: B,
      theme: this
    });
  }, A.toRuntimeSource = SO, A;
}
function h3(i) {
  let s;
  return i < 1 ? s = 5.11916 * i ** 2 : s = 4.5 * Math.log(i + 1) + 2, Math.round(s * 10) / 1e3;
}
const m3 = [...Array(25)].map((i, s) => {
  if (s === 0)
    return "none";
  const c = h3(s);
  return `linear-gradient(rgba(255 255 255 / ${c}), rgba(255 255 255 / ${c}))`;
});
function bO(i) {
  return {
    inputPlaceholder: i === "dark" ? 0.5 : 0.42,
    inputUnderline: i === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: i === "dark" ? 0.2 : 0.12,
    switchTrack: i === "dark" ? 0.3 : 0.38
  };
}
function EO(i) {
  return i === "dark" ? m3 : [];
}
function y3(i) {
  const {
    palette: s = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: c,
    overlays: p,
    ...h
  } = i, S = HE(s);
  return {
    palette: S,
    opacity: {
      ...bO(S.mode),
      ...c
    },
    overlays: p || EO(S.mode),
    ...h
  };
}
function g3(i) {
  var s;
  return !!i[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!i[0].match(/sxConfig$/) || // ends with sxConfig
  i[0] === "palette" && !!((s = i[1]) != null && s.match(/(mode|contrastThreshold|tonalOffset)/));
}
const S3 = (i) => [...[...Array(25)].map((s, c) => `--${i ? `${i}-` : ""}overlays-${c}`), `--${i ? `${i}-` : ""}palette-AppBar-darkBg`, `--${i ? `${i}-` : ""}palette-AppBar-darkColor`], b3 = (i) => (s, c) => {
  const p = i.rootSelector || ":root", h = i.colorSchemeSelector;
  let S = h;
  if (h === "class" && (S = ".%s"), h === "data" && (S = "[data-%s]"), h != null && h.startsWith("data-") && !h.includes("%s") && (S = `[${h}="%s"]`), i.defaultColorScheme === s) {
    if (s === "dark") {
      const y = {};
      return S3(i.cssVarPrefix).forEach((C) => {
        y[C] = c[C], delete c[C];
      }), S === "media" ? {
        [p]: c,
        "@media (prefers-color-scheme: dark)": {
          [p]: y
        }
      } : S ? {
        [S.replace("%s", s)]: y,
        [`${p}, ${S.replace("%s", s)}`]: c
      } : {
        [p]: {
          ...c,
          ...y
        }
      };
    }
    if (S && S !== "media")
      return `${p}, ${S.replace("%s", String(s))}`;
  } else if (s) {
    if (S === "media")
      return {
        [`@media (prefers-color-scheme: ${String(s)})`]: {
          [p]: c
        }
      };
    if (S)
      return S.replace("%s", String(s));
  }
  return p;
};
function E3(i, s) {
  s.forEach((c) => {
    i[c] || (i[c] = {});
  });
}
function oe(i, s, c) {
  !i[s] && c && (i[s] = c);
}
function uh(i) {
  return !i || !i.startsWith("hsl") ? i : YR(i);
}
function Vl(i, s) {
  `${s}Channel` in i || (i[`${s}Channel`] = oh(uh(i[s]), `MUI: Can't create \`palette.${s}Channel\` because \`palette.${s}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${s}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function C3(i) {
  return typeof i == "number" ? `${i}px` : typeof i == "string" || typeof i == "function" || Array.isArray(i) ? i : "8px";
}
const qo = (i) => {
  try {
    return i();
  } catch {
  }
}, T3 = (i = "mui") => Hz(i);
function iE(i, s, c, p) {
  if (!s)
    return;
  s = s === !0 ? {} : s;
  const h = p === "dark" ? "dark" : "light";
  if (!c) {
    i[p] = y3({
      ...s,
      palette: {
        mode: h,
        ...s == null ? void 0 : s.palette
      }
    });
    return;
  }
  const {
    palette: S,
    ...y
  } = yE({
    ...c,
    palette: {
      mode: h,
      ...s == null ? void 0 : s.palette
    }
  });
  return i[p] = {
    ...s,
    palette: S,
    opacity: {
      ...bO(h),
      ...s == null ? void 0 : s.opacity
    },
    overlays: (s == null ? void 0 : s.overlays) || EO(h)
  }, y;
}
function x3(i = {}, ...s) {
  const {
    colorSchemes: c = {
      light: !0
    },
    defaultColorScheme: p,
    disableCssColorScheme: h = !1,
    cssVarPrefix: S = "mui",
    shouldSkipGeneratingVar: y = g3,
    colorSchemeSelector: C = c.light && c.dark ? "media" : void 0,
    rootSelector: x = ":root",
    ...k
  } = i, _ = Object.keys(c)[0], M = p || (c.light && _ !== "light" ? "light" : _), A = T3(S), {
    [M]: $,
    light: B,
    dark: L,
    ...P
  } = c, ee = {
    ...P
  };
  let le = $;
  if ((M === "dark" && !("dark" in c) || M === "light" && !("light" in c)) && (le = !0), !le)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${M}\` option is either missing or invalid.` : ts(21, M));
  const q = iE(ee, le, k, M);
  B && !ee.light && iE(ee, B, void 0, "light"), L && !ee.dark && iE(ee, L, void 0, "dark");
  let Y = {
    defaultColorScheme: M,
    ...q,
    cssVarPrefix: S,
    colorSchemeSelector: C,
    rootSelector: x,
    getCssVar: A,
    colorSchemes: ee,
    font: {
      ...t3(q.typography),
      ...q.font
    },
    spacing: C3(k.spacing)
  };
  Object.keys(Y.colorSchemes).forEach((Oe) => {
    const O = Y.colorSchemes[Oe].palette, ne = (be) => {
      const ue = be.split("-"), xe = ue[1], Le = ue[2];
      return A(be, O[xe][Le]);
    };
    if (O.mode === "light" && (oe(O.common, "background", "#fff"), oe(O.common, "onBackground", "#000")), O.mode === "dark" && (oe(O.common, "background", "#000"), oe(O.common, "onBackground", "#fff")), E3(O, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), O.mode === "light") {
      oe(O.Alert, "errorColor", hn(O.error.light, 0.6)), oe(O.Alert, "infoColor", hn(O.info.light, 0.6)), oe(O.Alert, "successColor", hn(O.success.light, 0.6)), oe(O.Alert, "warningColor", hn(O.warning.light, 0.6)), oe(O.Alert, "errorFilledBg", ne("palette-error-main")), oe(O.Alert, "infoFilledBg", ne("palette-info-main")), oe(O.Alert, "successFilledBg", ne("palette-success-main")), oe(O.Alert, "warningFilledBg", ne("palette-warning-main")), oe(O.Alert, "errorFilledColor", qo(() => O.getContrastText(O.error.main))), oe(O.Alert, "infoFilledColor", qo(() => O.getContrastText(O.info.main))), oe(O.Alert, "successFilledColor", qo(() => O.getContrastText(O.success.main))), oe(O.Alert, "warningFilledColor", qo(() => O.getContrastText(O.warning.main))), oe(O.Alert, "errorStandardBg", mn(O.error.light, 0.9)), oe(O.Alert, "infoStandardBg", mn(O.info.light, 0.9)), oe(O.Alert, "successStandardBg", mn(O.success.light, 0.9)), oe(O.Alert, "warningStandardBg", mn(O.warning.light, 0.9)), oe(O.Alert, "errorIconColor", ne("palette-error-main")), oe(O.Alert, "infoIconColor", ne("palette-info-main")), oe(O.Alert, "successIconColor", ne("palette-success-main")), oe(O.Alert, "warningIconColor", ne("palette-warning-main")), oe(O.AppBar, "defaultBg", ne("palette-grey-100")), oe(O.Avatar, "defaultBg", ne("palette-grey-400")), oe(O.Button, "inheritContainedBg", ne("palette-grey-300")), oe(O.Button, "inheritContainedHoverBg", ne("palette-grey-A100")), oe(O.Chip, "defaultBorder", ne("palette-grey-400")), oe(O.Chip, "defaultAvatarColor", ne("palette-grey-700")), oe(O.Chip, "defaultIconColor", ne("palette-grey-700")), oe(O.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), oe(O.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), oe(O.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), oe(O.LinearProgress, "primaryBg", mn(O.primary.main, 0.62)), oe(O.LinearProgress, "secondaryBg", mn(O.secondary.main, 0.62)), oe(O.LinearProgress, "errorBg", mn(O.error.main, 0.62)), oe(O.LinearProgress, "infoBg", mn(O.info.main, 0.62)), oe(O.LinearProgress, "successBg", mn(O.success.main, 0.62)), oe(O.LinearProgress, "warningBg", mn(O.warning.main, 0.62)), oe(O.Skeleton, "bg", `rgba(${ne("palette-text-primaryChannel")} / 0.11)`), oe(O.Slider, "primaryTrack", mn(O.primary.main, 0.62)), oe(O.Slider, "secondaryTrack", mn(O.secondary.main, 0.62)), oe(O.Slider, "errorTrack", mn(O.error.main, 0.62)), oe(O.Slider, "infoTrack", mn(O.info.main, 0.62)), oe(O.Slider, "successTrack", mn(O.success.main, 0.62)), oe(O.Slider, "warningTrack", mn(O.warning.main, 0.62));
      const be = Lg(O.background.default, 0.8);
      oe(O.SnackbarContent, "bg", be), oe(O.SnackbarContent, "color", qo(() => O.getContrastText(be))), oe(O.SpeedDialAction, "fabHoverBg", Lg(O.background.paper, 0.15)), oe(O.StepConnector, "border", ne("palette-grey-400")), oe(O.StepContent, "border", ne("palette-grey-400")), oe(O.Switch, "defaultColor", ne("palette-common-white")), oe(O.Switch, "defaultDisabledColor", ne("palette-grey-100")), oe(O.Switch, "primaryDisabledColor", mn(O.primary.main, 0.62)), oe(O.Switch, "secondaryDisabledColor", mn(O.secondary.main, 0.62)), oe(O.Switch, "errorDisabledColor", mn(O.error.main, 0.62)), oe(O.Switch, "infoDisabledColor", mn(O.info.main, 0.62)), oe(O.Switch, "successDisabledColor", mn(O.success.main, 0.62)), oe(O.Switch, "warningDisabledColor", mn(O.warning.main, 0.62)), oe(O.TableCell, "border", mn(Ag(O.divider, 1), 0.88)), oe(O.Tooltip, "bg", Ag(O.grey[700], 0.92));
    }
    if (O.mode === "dark") {
      oe(O.Alert, "errorColor", mn(O.error.light, 0.6)), oe(O.Alert, "infoColor", mn(O.info.light, 0.6)), oe(O.Alert, "successColor", mn(O.success.light, 0.6)), oe(O.Alert, "warningColor", mn(O.warning.light, 0.6)), oe(O.Alert, "errorFilledBg", ne("palette-error-dark")), oe(O.Alert, "infoFilledBg", ne("palette-info-dark")), oe(O.Alert, "successFilledBg", ne("palette-success-dark")), oe(O.Alert, "warningFilledBg", ne("palette-warning-dark")), oe(O.Alert, "errorFilledColor", qo(() => O.getContrastText(O.error.dark))), oe(O.Alert, "infoFilledColor", qo(() => O.getContrastText(O.info.dark))), oe(O.Alert, "successFilledColor", qo(() => O.getContrastText(O.success.dark))), oe(O.Alert, "warningFilledColor", qo(() => O.getContrastText(O.warning.dark))), oe(O.Alert, "errorStandardBg", hn(O.error.light, 0.9)), oe(O.Alert, "infoStandardBg", hn(O.info.light, 0.9)), oe(O.Alert, "successStandardBg", hn(O.success.light, 0.9)), oe(O.Alert, "warningStandardBg", hn(O.warning.light, 0.9)), oe(O.Alert, "errorIconColor", ne("palette-error-main")), oe(O.Alert, "infoIconColor", ne("palette-info-main")), oe(O.Alert, "successIconColor", ne("palette-success-main")), oe(O.Alert, "warningIconColor", ne("palette-warning-main")), oe(O.AppBar, "defaultBg", ne("palette-grey-900")), oe(O.AppBar, "darkBg", ne("palette-background-paper")), oe(O.AppBar, "darkColor", ne("palette-text-primary")), oe(O.Avatar, "defaultBg", ne("palette-grey-600")), oe(O.Button, "inheritContainedBg", ne("palette-grey-800")), oe(O.Button, "inheritContainedHoverBg", ne("palette-grey-700")), oe(O.Chip, "defaultBorder", ne("palette-grey-700")), oe(O.Chip, "defaultAvatarColor", ne("palette-grey-300")), oe(O.Chip, "defaultIconColor", ne("palette-grey-300")), oe(O.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), oe(O.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), oe(O.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), oe(O.LinearProgress, "primaryBg", hn(O.primary.main, 0.5)), oe(O.LinearProgress, "secondaryBg", hn(O.secondary.main, 0.5)), oe(O.LinearProgress, "errorBg", hn(O.error.main, 0.5)), oe(O.LinearProgress, "infoBg", hn(O.info.main, 0.5)), oe(O.LinearProgress, "successBg", hn(O.success.main, 0.5)), oe(O.LinearProgress, "warningBg", hn(O.warning.main, 0.5)), oe(O.Skeleton, "bg", `rgba(${ne("palette-text-primaryChannel")} / 0.13)`), oe(O.Slider, "primaryTrack", hn(O.primary.main, 0.5)), oe(O.Slider, "secondaryTrack", hn(O.secondary.main, 0.5)), oe(O.Slider, "errorTrack", hn(O.error.main, 0.5)), oe(O.Slider, "infoTrack", hn(O.info.main, 0.5)), oe(O.Slider, "successTrack", hn(O.success.main, 0.5)), oe(O.Slider, "warningTrack", hn(O.warning.main, 0.5));
      const be = Lg(O.background.default, 0.98);
      oe(O.SnackbarContent, "bg", be), oe(O.SnackbarContent, "color", qo(() => O.getContrastText(be))), oe(O.SpeedDialAction, "fabHoverBg", Lg(O.background.paper, 0.15)), oe(O.StepConnector, "border", ne("palette-grey-600")), oe(O.StepContent, "border", ne("palette-grey-600")), oe(O.Switch, "defaultColor", ne("palette-grey-300")), oe(O.Switch, "defaultDisabledColor", ne("palette-grey-600")), oe(O.Switch, "primaryDisabledColor", hn(O.primary.main, 0.55)), oe(O.Switch, "secondaryDisabledColor", hn(O.secondary.main, 0.55)), oe(O.Switch, "errorDisabledColor", hn(O.error.main, 0.55)), oe(O.Switch, "infoDisabledColor", hn(O.info.main, 0.55)), oe(O.Switch, "successDisabledColor", hn(O.success.main, 0.55)), oe(O.Switch, "warningDisabledColor", hn(O.warning.main, 0.55)), oe(O.TableCell, "border", hn(Ag(O.divider, 1), 0.68)), oe(O.Tooltip, "bg", Ag(O.grey[700], 0.92));
    }
    Vl(O.background, "default"), Vl(O.background, "paper"), Vl(O.common, "background"), Vl(O.common, "onBackground"), Vl(O, "divider"), Object.keys(O).forEach((be) => {
      const ue = O[be];
      ue && typeof ue == "object" && (ue.main && oe(O[be], "mainChannel", oh(uh(ue.main))), ue.light && oe(O[be], "lightChannel", oh(uh(ue.light))), ue.dark && oe(O[be], "darkChannel", oh(uh(ue.dark))), ue.contrastText && oe(O[be], "contrastTextChannel", oh(uh(ue.contrastText))), be === "text" && (Vl(O[be], "primary"), Vl(O[be], "secondary")), be === "action" && (ue.active && Vl(O[be], "active"), ue.selected && Vl(O[be], "selected")));
    });
  }), Y = s.reduce((Oe, O) => hi(Oe, O), Y);
  const U = {
    prefix: S,
    disableCssColorScheme: h,
    shouldSkipGeneratingVar: y,
    getSelector: b3(Y)
  }, {
    vars: re,
    generateThemeVars: te,
    generateStyleSheets: Ae
  } = Yz(Y, U);
  return Y.vars = re, Object.entries(Y.colorSchemes[Y.defaultColorScheme]).forEach(([Oe, O]) => {
    Y[Oe] = O;
  }), Y.generateThemeVars = te, Y.generateStyleSheets = Ae, Y.generateSpacing = function() {
    return sO(k.spacing, ME(this));
  }, Y.getColorSchemeSelector = Wz(C), Y.spacing = Y.generateSpacing(), Y.shouldSkipGeneratingVar = y, Y.unstable_sxConfig = {
    ...v0,
    ...k == null ? void 0 : k.unstable_sxConfig
  }, Y.unstable_sx = function(O) {
    return Ld({
      sx: O,
      theme: this
    });
  }, Y.toRuntimeSource = SO, Y;
}
function xR(i, s, c) {
  i.colorSchemes && c && (i.colorSchemes[s] = {
    ...c !== !0 && c,
    palette: HE({
      ...c === !0 ? {} : c.palette,
      mode: s
    })
    // cast type to skip module augmentation test
  });
}
function w3(i = {}, ...s) {
  const {
    palette: c,
    cssVariables: p = !1,
    colorSchemes: h = c ? void 0 : {
      light: !0
    },
    defaultColorScheme: S = c == null ? void 0 : c.mode,
    ...y
  } = i, C = S || "light", x = h == null ? void 0 : h[C], k = {
    ...h,
    ...c ? {
      [C]: {
        ...typeof x != "boolean" && x,
        palette: c
      }
    } : void 0
  };
  if (p === !1) {
    if (!("colorSchemes" in i))
      return yE(i, ...s);
    let _ = c;
    "palette" in i || k[C] && (k[C] !== !0 ? _ = k[C].palette : C === "dark" && (_ = {
      mode: "dark"
    }));
    const M = yE({
      ...i,
      palette: _
    }, ...s);
    return M.defaultColorScheme = C, M.colorSchemes = k, M.palette.mode === "light" && (M.colorSchemes.light = {
      ...k.light !== !0 && k.light,
      palette: M.palette
    }, xR(M, "dark", k.dark)), M.palette.mode === "dark" && (M.colorSchemes.dark = {
      ...k.dark !== !0 && k.dark,
      palette: M.palette
    }, xR(M, "light", k.light)), M;
  }
  return !c && !("light" in k) && C === "light" && (k.light = !0), x3({
    ...y,
    colorSchemes: k,
    defaultColorScheme: C,
    ...typeof p != "boolean" && p
  }, ...s);
}
const CO = w3(), TO = "$$material";
function xO() {
  const i = iz(CO);
  return process.env.NODE_ENV !== "production" && ve.useDebugValue(i), i[TO] || i;
}
const Bi = hz({
  themeId: TO,
  defaultTheme: CO,
  rootShouldForwardProp: WR
}), Ec = Bz;
process.env.NODE_ENV !== "production" && (w.node, w.object.isRequired);
function xc(i) {
  return Fz(i);
}
class Jg {
  constructor() {
    Jv(this, "mountEffect", () => {
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
    return new Jg();
  }
  static use() {
    const s = hO(Jg.create).current, [c, p] = ve.useState(!1);
    return s.shouldMount = c, s.setShouldMount = p, ve.useEffect(s.mountEffect, [c]), s;
  }
  mount() {
    return this.mounted || (this.mounted = O3(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...s) {
    this.mount().then(() => {
      var c;
      return (c = this.ref.current) == null ? void 0 : c.start(...s);
    });
  }
  stop(...s) {
    this.mount().then(() => {
      var c;
      return (c = this.ref.current) == null ? void 0 : c.stop(...s);
    });
  }
  pulsate(...s) {
    this.mount().then(() => {
      var c;
      return (c = this.ref.current) == null ? void 0 : c.pulsate(...s);
    });
  }
}
function R3() {
  return Jg.use();
}
function O3() {
  let i, s;
  const c = new Promise((p, h) => {
    i = p, s = h;
  });
  return c.resolve = i, c.reject = s, c;
}
function wO(i, s) {
  if (i == null) return {};
  var c = {};
  for (var p in i) if ({}.hasOwnProperty.call(i, p)) {
    if (s.includes(p)) continue;
    c[p] = i[p];
  }
  return c;
}
function gE(i, s) {
  return gE = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(c, p) {
    return c.__proto__ = p, c;
  }, gE(i, s);
}
function RO(i, s) {
  i.prototype = Object.create(s.prototype), i.prototype.constructor = i, gE(i, s);
}
var SE = { exports: {} }, Ka = {}, Ug = { exports: {} }, oE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wR;
function k3() {
  return wR || (wR = 1, function(i) {
    function s(se, Ee) {
      var I = se.length;
      se.push(Ee);
      e: for (; 0 < I; ) {
        var fe = I - 1 >>> 1, Re = se[fe];
        if (0 < h(Re, Ee)) se[fe] = Ee, se[I] = Re, I = fe;
        else break e;
      }
    }
    function c(se) {
      return se.length === 0 ? null : se[0];
    }
    function p(se) {
      if (se.length === 0) return null;
      var Ee = se[0], I = se.pop();
      if (I !== Ee) {
        se[0] = I;
        e: for (var fe = 0, Re = se.length, Ie = Re >>> 1; fe < Ie; ) {
          var De = 2 * (fe + 1) - 1, Ze = se[De], Pe = De + 1, Qe = se[Pe];
          if (0 > h(Ze, I)) Pe < Re && 0 > h(Qe, Ze) ? (se[fe] = Qe, se[Pe] = I, fe = Pe) : (se[fe] = Ze, se[De] = I, fe = De);
          else if (Pe < Re && 0 > h(Qe, I)) se[fe] = Qe, se[Pe] = I, fe = Pe;
          else break e;
        }
      }
      return Ee;
    }
    function h(se, Ee) {
      var I = se.sortIndex - Ee.sortIndex;
      return I !== 0 ? I : se.id - Ee.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var S = performance;
      i.unstable_now = function() {
        return S.now();
      };
    } else {
      var y = Date, C = y.now();
      i.unstable_now = function() {
        return y.now() - C;
      };
    }
    var x = [], k = [], _ = 1, M = null, A = 3, $ = !1, B = !1, L = !1, P = typeof setTimeout == "function" ? setTimeout : null, ee = typeof clearTimeout == "function" ? clearTimeout : null, le = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function q(se) {
      for (var Ee = c(k); Ee !== null; ) {
        if (Ee.callback === null) p(k);
        else if (Ee.startTime <= se) p(k), Ee.sortIndex = Ee.expirationTime, s(x, Ee);
        else break;
        Ee = c(k);
      }
    }
    function Y(se) {
      if (L = !1, q(se), !B) if (c(x) !== null) B = !0, we(U);
      else {
        var Ee = c(k);
        Ee !== null && Fe(Y, Ee.startTime - se);
      }
    }
    function U(se, Ee) {
      B = !1, L && (L = !1, ee(Ae), Ae = -1), $ = !0;
      var I = A;
      try {
        for (q(Ee), M = c(x); M !== null && (!(M.expirationTime > Ee) || se && !ne()); ) {
          var fe = M.callback;
          if (typeof fe == "function") {
            M.callback = null, A = M.priorityLevel;
            var Re = fe(M.expirationTime <= Ee);
            Ee = i.unstable_now(), typeof Re == "function" ? M.callback = Re : M === c(x) && p(x), q(Ee);
          } else p(x);
          M = c(x);
        }
        if (M !== null) var Ie = !0;
        else {
          var De = c(k);
          De !== null && Fe(Y, De.startTime - Ee), Ie = !1;
        }
        return Ie;
      } finally {
        M = null, A = I, $ = !1;
      }
    }
    var re = !1, te = null, Ae = -1, Oe = 5, O = -1;
    function ne() {
      return !(i.unstable_now() - O < Oe);
    }
    function be() {
      if (te !== null) {
        var se = i.unstable_now();
        O = se;
        var Ee = !0;
        try {
          Ee = te(!0, se);
        } finally {
          Ee ? ue() : (re = !1, te = null);
        }
      } else re = !1;
    }
    var ue;
    if (typeof le == "function") ue = function() {
      le(be);
    };
    else if (typeof MessageChannel < "u") {
      var xe = new MessageChannel(), Le = xe.port2;
      xe.port1.onmessage = be, ue = function() {
        Le.postMessage(null);
      };
    } else ue = function() {
      P(be, 0);
    };
    function we(se) {
      te = se, re || (re = !0, ue());
    }
    function Fe(se, Ee) {
      Ae = P(function() {
        se(i.unstable_now());
      }, Ee);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(se) {
      se.callback = null;
    }, i.unstable_continueExecution = function() {
      B || $ || (B = !0, we(U));
    }, i.unstable_forceFrameRate = function(se) {
      0 > se || 125 < se ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Oe = 0 < se ? Math.floor(1e3 / se) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return A;
    }, i.unstable_getFirstCallbackNode = function() {
      return c(x);
    }, i.unstable_next = function(se) {
      switch (A) {
        case 1:
        case 2:
        case 3:
          var Ee = 3;
          break;
        default:
          Ee = A;
      }
      var I = A;
      A = Ee;
      try {
        return se();
      } finally {
        A = I;
      }
    }, i.unstable_pauseExecution = function() {
    }, i.unstable_requestPaint = function() {
    }, i.unstable_runWithPriority = function(se, Ee) {
      switch (se) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          se = 3;
      }
      var I = A;
      A = se;
      try {
        return Ee();
      } finally {
        A = I;
      }
    }, i.unstable_scheduleCallback = function(se, Ee, I) {
      var fe = i.unstable_now();
      switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? fe + I : fe) : I = fe, se) {
        case 1:
          var Re = -1;
          break;
        case 2:
          Re = 250;
          break;
        case 5:
          Re = 1073741823;
          break;
        case 4:
          Re = 1e4;
          break;
        default:
          Re = 5e3;
      }
      return Re = I + Re, se = { id: _++, callback: Ee, priorityLevel: se, startTime: I, expirationTime: Re, sortIndex: -1 }, I > fe ? (se.sortIndex = I, s(k, se), c(x) === null && se === c(k) && (L ? (ee(Ae), Ae = -1) : L = !0, Fe(Y, I - fe))) : (se.sortIndex = Re, s(x, se), B || $ || (B = !0, we(U))), se;
    }, i.unstable_shouldYield = ne, i.unstable_wrapCallback = function(se) {
      var Ee = A;
      return function() {
        var I = A;
        A = Ee;
        try {
          return se.apply(this, arguments);
        } finally {
          A = I;
        }
      };
    };
  }(oE)), oE;
}
var lE = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var RR;
function D3() {
  return RR || (RR = 1, function(i) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var s = !1, c = !1, p = 5;
      function h(Ce, Ke) {
        var Et = Ce.length;
        Ce.push(Ke), C(Ce, Ke, Et);
      }
      function S(Ce) {
        return Ce.length === 0 ? null : Ce[0];
      }
      function y(Ce) {
        if (Ce.length === 0)
          return null;
        var Ke = Ce[0], Et = Ce.pop();
        return Et !== Ke && (Ce[0] = Et, x(Ce, Et, 0)), Ke;
      }
      function C(Ce, Ke, Et) {
        for (var Nt = Et; Nt > 0; ) {
          var ln = Nt - 1 >>> 1, zn = Ce[ln];
          if (k(zn, Ke) > 0)
            Ce[ln] = Ke, Ce[Nt] = zn, Nt = ln;
          else
            return;
        }
      }
      function x(Ce, Ke, Et) {
        for (var Nt = Et, ln = Ce.length, zn = ln >>> 1; Nt < zn; ) {
          var gn = (Nt + 1) * 2 - 1, gr = Ce[gn], Yt = gn + 1, $r = Ce[Yt];
          if (k(gr, Ke) < 0)
            Yt < ln && k($r, gr) < 0 ? (Ce[Nt] = $r, Ce[Yt] = Ke, Nt = Yt) : (Ce[Nt] = gr, Ce[gn] = Ke, Nt = gn);
          else if (Yt < ln && k($r, Ke) < 0)
            Ce[Nt] = $r, Ce[Yt] = Ke, Nt = Yt;
          else
            return;
        }
      }
      function k(Ce, Ke) {
        var Et = Ce.sortIndex - Ke.sortIndex;
        return Et !== 0 ? Et : Ce.id - Ke.id;
      }
      var _ = 1, M = 2, A = 3, $ = 4, B = 5;
      function L(Ce, Ke) {
      }
      var P = typeof performance == "object" && typeof performance.now == "function";
      if (P) {
        var ee = performance;
        i.unstable_now = function() {
          return ee.now();
        };
      } else {
        var le = Date, q = le.now();
        i.unstable_now = function() {
          return le.now() - q;
        };
      }
      var Y = 1073741823, U = -1, re = 250, te = 5e3, Ae = 1e4, Oe = Y, O = [], ne = [], be = 1, ue = null, xe = A, Le = !1, we = !1, Fe = !1, se = typeof setTimeout == "function" ? setTimeout : null, Ee = typeof clearTimeout == "function" ? clearTimeout : null, I = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function fe(Ce) {
        for (var Ke = S(ne); Ke !== null; ) {
          if (Ke.callback === null)
            y(ne);
          else if (Ke.startTime <= Ce)
            y(ne), Ke.sortIndex = Ke.expirationTime, h(O, Ke);
          else
            return;
          Ke = S(ne);
        }
      }
      function Re(Ce) {
        if (Fe = !1, fe(Ce), !we)
          if (S(O) !== null)
            we = !0, Kn(Ie);
          else {
            var Ke = S(ne);
            Ke !== null && Kt(Re, Ke.startTime - Ce);
          }
      }
      function Ie(Ce, Ke) {
        we = !1, Fe && (Fe = !1, lr()), Le = !0;
        var Et = xe;
        try {
          var Nt;
          if (!c) return De(Ce, Ke);
        } finally {
          ue = null, xe = Et, Le = !1;
        }
      }
      function De(Ce, Ke) {
        var Et = Ke;
        for (fe(Et), ue = S(O); ue !== null && !s && !(ue.expirationTime > Et && (!Ce || Tn())); ) {
          var Nt = ue.callback;
          if (typeof Nt == "function") {
            ue.callback = null, xe = ue.priorityLevel;
            var ln = ue.expirationTime <= Et, zn = Nt(ln);
            Et = i.unstable_now(), typeof zn == "function" ? ue.callback = zn : ue === S(O) && y(O), fe(Et);
          } else
            y(O);
          ue = S(O);
        }
        if (ue !== null)
          return !0;
        var gn = S(ne);
        return gn !== null && Kt(Re, gn.startTime - Et), !1;
      }
      function Ze(Ce, Ke) {
        switch (Ce) {
          case _:
          case M:
          case A:
          case $:
          case B:
            break;
          default:
            Ce = A;
        }
        var Et = xe;
        xe = Ce;
        try {
          return Ke();
        } finally {
          xe = Et;
        }
      }
      function Pe(Ce) {
        var Ke;
        switch (xe) {
          case _:
          case M:
          case A:
            Ke = A;
            break;
          default:
            Ke = xe;
            break;
        }
        var Et = xe;
        xe = Ke;
        try {
          return Ce();
        } finally {
          xe = Et;
        }
      }
      function Qe(Ce) {
        var Ke = xe;
        return function() {
          var Et = xe;
          xe = Ke;
          try {
            return Ce.apply(this, arguments);
          } finally {
            xe = Et;
          }
        };
      }
      function Ve(Ce, Ke, Et) {
        var Nt = i.unstable_now(), ln;
        if (typeof Et == "object" && Et !== null) {
          var zn = Et.delay;
          typeof zn == "number" && zn > 0 ? ln = Nt + zn : ln = Nt;
        } else
          ln = Nt;
        var gn;
        switch (Ce) {
          case _:
            gn = U;
            break;
          case M:
            gn = re;
            break;
          case B:
            gn = Oe;
            break;
          case $:
            gn = Ae;
            break;
          case A:
          default:
            gn = te;
            break;
        }
        var gr = ln + gn, Yt = {
          id: be++,
          callback: Ke,
          priorityLevel: Ce,
          startTime: ln,
          expirationTime: gr,
          sortIndex: -1
        };
        return ln > Nt ? (Yt.sortIndex = ln, h(ne, Yt), S(O) === null && Yt === S(ne) && (Fe ? lr() : Fe = !0, Kt(Re, ln - Nt))) : (Yt.sortIndex = gr, h(O, Yt), !we && !Le && (we = !0, Kn(Ie))), Yt;
      }
      function it() {
      }
      function st() {
        !we && !Le && (we = !0, Kn(Ie));
      }
      function Ct() {
        return S(O);
      }
      function ye(Ce) {
        Ce.callback = null;
      }
      function Tt() {
        return xe;
      }
      var ke = !1, Mt = null, Ft = -1, It = p, yn = -1;
      function Tn() {
        var Ce = i.unstable_now() - yn;
        return !(Ce < It);
      }
      function kn() {
      }
      function Ln(Ce) {
        if (Ce < 0 || Ce > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Ce > 0 ? It = Math.floor(1e3 / Ce) : It = p;
      }
      var qn = function() {
        if (Mt !== null) {
          var Ce = i.unstable_now();
          yn = Ce;
          var Ke = !0, Et = !0;
          try {
            Et = Mt(Ke, Ce);
          } finally {
            Et ? Xe() : (ke = !1, Mt = null);
          }
        } else
          ke = !1;
      }, Xe;
      if (typeof I == "function")
        Xe = function() {
          I(qn);
        };
      else if (typeof MessageChannel < "u") {
        var Xn = new MessageChannel(), Fn = Xn.port2;
        Xn.port1.onmessage = qn, Xe = function() {
          Fn.postMessage(null);
        };
      } else
        Xe = function() {
          se(qn, 0);
        };
      function Kn(Ce) {
        Mt = Ce, ke || (ke = !0, Xe());
      }
      function Kt(Ce, Ke) {
        Ft = se(function() {
          Ce(i.unstable_now());
        }, Ke);
      }
      function lr() {
        Ee(Ft), Ft = -1;
      }
      var Xr = kn, Pr = null;
      i.unstable_IdlePriority = B, i.unstable_ImmediatePriority = _, i.unstable_LowPriority = $, i.unstable_NormalPriority = A, i.unstable_Profiling = Pr, i.unstable_UserBlockingPriority = M, i.unstable_cancelCallback = ye, i.unstable_continueExecution = st, i.unstable_forceFrameRate = Ln, i.unstable_getCurrentPriorityLevel = Tt, i.unstable_getFirstCallbackNode = Ct, i.unstable_next = Pe, i.unstable_pauseExecution = it, i.unstable_requestPaint = Xr, i.unstable_runWithPriority = Ze, i.unstable_scheduleCallback = Ve, i.unstable_shouldYield = Tn, i.unstable_wrapCallback = Qe, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(lE)), lE;
}
var OR;
function OO() {
  return OR || (OR = 1, process.env.NODE_ENV === "production" ? Ug.exports = k3() : Ug.exports = D3()), Ug.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kR;
function _3() {
  if (kR) return Ka;
  kR = 1;
  var i = vi, s = OO();
  function c(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var p = /* @__PURE__ */ new Set(), h = {};
  function S(n, r) {
    y(n, r), y(n + "Capture", r);
  }
  function y(n, r) {
    for (h[n] = r, n = 0; n < r.length; n++) p.add(r[n]);
  }
  var C = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), x = Object.prototype.hasOwnProperty, k = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, _ = {}, M = {};
  function A(n) {
    return x.call(M, n) ? !0 : x.call(_, n) ? !1 : k.test(n) ? M[n] = !0 : (_[n] = !0, !1);
  }
  function $(n, r, l, f) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return f ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function B(n, r, l, f) {
    if (r === null || typeof r > "u" || $(n, r, l, f)) return !0;
    if (f) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function L(n, r, l, f, v, g, T) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = f, this.attributeNamespace = v, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = g, this.removeEmptyString = T;
  }
  var P = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    P[n] = new L(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    P[r] = new L(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    P[n] = new L(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    P[n] = new L(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    P[n] = new L(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    P[n] = new L(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    P[n] = new L(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    P[n] = new L(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    P[n] = new L(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var ee = /[\-:]([a-z])/g;
  function le(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      ee,
      le
    );
    P[r] = new L(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(ee, le);
    P[r] = new L(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(ee, le);
    P[r] = new L(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    P[n] = new L(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), P.xlinkHref = new L("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    P[n] = new L(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function q(n, r, l, f) {
    var v = P.hasOwnProperty(r) ? P[r] : null;
    (v !== null ? v.type !== 0 : f || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (B(r, l, v, f) && (l = null), f || v === null ? A(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : v.mustUseProperty ? n[v.propertyName] = l === null ? v.type === 3 ? !1 : "" : l : (r = v.attributeName, f = v.attributeNamespace, l === null ? n.removeAttribute(r) : (v = v.type, l = v === 3 || v === 4 && l === !0 ? "" : "" + l, f ? n.setAttributeNS(f, r, l) : n.setAttribute(r, l))));
  }
  var Y = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, U = Symbol.for("react.element"), re = Symbol.for("react.portal"), te = Symbol.for("react.fragment"), Ae = Symbol.for("react.strict_mode"), Oe = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), ne = Symbol.for("react.context"), be = Symbol.for("react.forward_ref"), ue = Symbol.for("react.suspense"), xe = Symbol.for("react.suspense_list"), Le = Symbol.for("react.memo"), we = Symbol.for("react.lazy"), Fe = Symbol.for("react.offscreen"), se = Symbol.iterator;
  function Ee(n) {
    return n === null || typeof n != "object" ? null : (n = se && n[se] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var I = Object.assign, fe;
  function Re(n) {
    if (fe === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      fe = r && r[1] || "";
    }
    return `
` + fe + n;
  }
  var Ie = !1;
  function De(n, r) {
    if (!n || Ie) return "";
    Ie = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (Z) {
          var f = Z;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (Z) {
          f = Z;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (Z) {
          f = Z;
        }
        n();
      }
    } catch (Z) {
      if (Z && f && typeof Z.stack == "string") {
        for (var v = Z.stack.split(`
`), g = f.stack.split(`
`), T = v.length - 1, N = g.length - 1; 1 <= T && 0 <= N && v[T] !== g[N]; ) N--;
        for (; 1 <= T && 0 <= N; T--, N--) if (v[T] !== g[N]) {
          if (T !== 1 || N !== 1)
            do
              if (T--, N--, 0 > N || v[T] !== g[N]) {
                var j = `
` + v[T].replace(" at new ", " at ");
                return n.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", n.displayName)), j;
              }
            while (1 <= T && 0 <= N);
          break;
        }
      }
    } finally {
      Ie = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? Re(n) : "";
  }
  function Ze(n) {
    switch (n.tag) {
      case 5:
        return Re(n.type);
      case 16:
        return Re("Lazy");
      case 13:
        return Re("Suspense");
      case 19:
        return Re("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = De(n.type, !1), n;
      case 11:
        return n = De(n.type.render, !1), n;
      case 1:
        return n = De(n.type, !0), n;
      default:
        return "";
    }
  }
  function Pe(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case te:
        return "Fragment";
      case re:
        return "Portal";
      case Oe:
        return "Profiler";
      case Ae:
        return "StrictMode";
      case ue:
        return "Suspense";
      case xe:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case ne:
        return (n.displayName || "Context") + ".Consumer";
      case O:
        return (n._context.displayName || "Context") + ".Provider";
      case be:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Le:
        return r = n.displayName || null, r !== null ? r : Pe(n.type) || "Memo";
      case we:
        r = n._payload, n = n._init;
        try {
          return Pe(n(r));
        } catch {
        }
    }
    return null;
  }
  function Qe(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Pe(r);
      case 8:
        return r === Ae ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function Ve(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function it(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function st(n) {
    var r = it(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), f = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var v = l.get, g = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return v.call(this);
      }, set: function(T) {
        f = "" + T, g.call(this, T);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return f;
      }, setValue: function(T) {
        f = "" + T;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Ct(n) {
    n._valueTracker || (n._valueTracker = st(n));
  }
  function ye(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), f = "";
    return n && (f = it(n) ? n.checked ? "true" : "false" : n.value), n = f, n !== l ? (r.setValue(n), !0) : !1;
  }
  function Tt(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function ke(n, r) {
    var l = r.checked;
    return I({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Mt(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, f = r.checked != null ? r.checked : r.defaultChecked;
    l = Ve(r.value != null ? r.value : l), n._wrapperState = { initialChecked: f, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Ft(n, r) {
    r = r.checked, r != null && q(n, "checked", r, !1);
  }
  function It(n, r) {
    Ft(n, r);
    var l = Ve(r.value), f = r.type;
    if (l != null) f === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (f === "submit" || f === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Tn(n, r.type, l) : r.hasOwnProperty("defaultValue") && Tn(n, r.type, Ve(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function yn(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var f = r.type;
      if (!(f !== "submit" && f !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Tn(n, r, l) {
    (r !== "number" || Tt(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var kn = Array.isArray;
  function Ln(n, r, l, f) {
    if (n = n.options, r) {
      r = {};
      for (var v = 0; v < l.length; v++) r["$" + l[v]] = !0;
      for (l = 0; l < n.length; l++) v = r.hasOwnProperty("$" + n[l].value), n[l].selected !== v && (n[l].selected = v), v && f && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + Ve(l), r = null, v = 0; v < n.length; v++) {
        if (n[v].value === l) {
          n[v].selected = !0, f && (n[v].defaultSelected = !0);
          return;
        }
        r !== null || n[v].disabled || (r = n[v]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function qn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(c(91));
    return I({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Xe(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(c(92));
        if (kn(l)) {
          if (1 < l.length) throw Error(c(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: Ve(l) };
  }
  function Xn(n, r) {
    var l = Ve(r.value), f = Ve(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), f != null && (n.defaultValue = "" + f);
  }
  function Fn(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Kn(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Kt(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Kn(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var lr, Xr = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, f, v) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, f, v);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (lr = lr || document.createElement("div"), lr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = lr.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function Pr(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Ce = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Ke = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ce).forEach(function(n) {
    Ke.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Ce[r] = Ce[n];
    });
  });
  function Et(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || Ce.hasOwnProperty(n) && Ce[n] ? ("" + r).trim() : r + "px";
  }
  function Nt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var f = l.indexOf("--") === 0, v = Et(l, r[l], f);
      l === "float" && (l = "cssFloat"), f ? n.setProperty(l, v) : n[l] = v;
    }
  }
  var ln = I({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function zn(n, r) {
    if (r) {
      if (ln[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(c(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(c(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(c(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(c(62));
    }
  }
  function gn(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var gr = null;
  function Yt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var $r = null, Wt = null, Zt = null;
  function yo(n) {
    if (n = ks(n)) {
      if (typeof $r != "function") throw Error(c(280));
      var r = n.stateNode;
      r && (r = ot(r), $r(n.stateNode, n.type, r));
    }
  }
  function gi(n) {
    Wt ? Zt ? Zt.push(n) : Zt = [n] : Wt = n;
  }
  function Hi() {
    if (Wt) {
      var n = Wt, r = Zt;
      if (Zt = Wt = null, yo(n), r) for (n = 0; n < r.length; n++) yo(r[n]);
    }
  }
  function go(n, r) {
    return n(r);
  }
  function mt() {
  }
  var Zn = !1;
  function Ql(n, r, l) {
    if (Zn) return n(r, l);
    Zn = !0;
    try {
      return go(n, r, l);
    } finally {
      Zn = !1, (Wt !== null || Zt !== null) && (mt(), Hi());
    }
  }
  function nl(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var f = ot(l);
    if (f === null) return null;
    l = f[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (f = !f.disabled) || (n = n.type, f = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !f;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(c(231, r, typeof l));
    return l;
  }
  var ql = !1;
  if (C) try {
    var Si = {};
    Object.defineProperty(Si, "passive", { get: function() {
      ql = !0;
    } }), window.addEventListener("test", Si, Si), window.removeEventListener("test", Si, Si);
  } catch {
    ql = !1;
  }
  function Vi(n, r, l, f, v, g, T, N, j) {
    var Z = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, Z);
    } catch (he) {
      this.onError(he);
    }
  }
  var ha = !1, ni = null, So = !1, rl = null, z = { onError: function(n) {
    ha = !0, ni = n;
  } };
  function me(n, r, l, f, v, g, T, N, j) {
    ha = !1, ni = null, Vi.apply(z, arguments);
  }
  function _e(n, r, l, f, v, g, T, N, j) {
    if (me.apply(this, arguments), ha) {
      if (ha) {
        var Z = ni;
        ha = !1, ni = null;
      } else throw Error(c(198));
      So || (So = !0, rl = Z);
    }
  }
  function rt(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function _t(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function zt(n) {
    if (rt(n) !== n) throw Error(c(188));
  }
  function ft(n) {
    var r = n.alternate;
    if (!r) {
      if (r = rt(n), r === null) throw Error(c(188));
      return r !== n ? null : n;
    }
    for (var l = n, f = r; ; ) {
      var v = l.return;
      if (v === null) break;
      var g = v.alternate;
      if (g === null) {
        if (f = v.return, f !== null) {
          l = f;
          continue;
        }
        break;
      }
      if (v.child === g.child) {
        for (g = v.child; g; ) {
          if (g === l) return zt(v), n;
          if (g === f) return zt(v), r;
          g = g.sibling;
        }
        throw Error(c(188));
      }
      if (l.return !== f.return) l = v, f = g;
      else {
        for (var T = !1, N = v.child; N; ) {
          if (N === l) {
            T = !0, l = v, f = g;
            break;
          }
          if (N === f) {
            T = !0, f = v, l = g;
            break;
          }
          N = N.sibling;
        }
        if (!T) {
          for (N = g.child; N; ) {
            if (N === l) {
              T = !0, l = g, f = v;
              break;
            }
            if (N === f) {
              T = !0, f = g, l = v;
              break;
            }
            N = N.sibling;
          }
          if (!T) throw Error(c(189));
        }
      }
      if (l.alternate !== f) throw Error(c(190));
    }
    if (l.tag !== 3) throw Error(c(188));
    return l.stateNode.current === l ? n : r;
  }
  function xt(n) {
    return n = ft(n), n !== null ? ur(n) : null;
  }
  function ur(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = ur(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var cn = s.unstable_scheduleCallback, xn = s.unstable_cancelCallback, Kr = s.unstable_shouldYield, bo = s.unstable_requestPaint, Bt = s.unstable_now, _r = s.unstable_getCurrentPriorityLevel, ma = s.unstable_ImmediatePriority, wt = s.unstable_UserBlockingPriority, bi = s.unstable_NormalPriority, Dh = s.unstable_LowPriority, Hd = s.unstable_IdlePriority, ls = null, ri = null;
  function _h(n) {
    if (ri && typeof ri.onCommitFiberRoot == "function") try {
      ri.onCommitFiberRoot(ls, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Da = Math.clz32 ? Math.clz32 : C0, Mh = Math.log, Nh = Math.LN2;
  function C0(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Mh(n) / Nh | 0) | 0;
  }
  var wc = 64, Xl = 4194304;
  function al(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function ai(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var f = 0, v = n.suspendedLanes, g = n.pingedLanes, T = l & 268435455;
    if (T !== 0) {
      var N = T & ~v;
      N !== 0 ? f = al(N) : (g &= T, g !== 0 && (f = al(g)));
    } else T = l & ~v, T !== 0 ? f = al(T) : g !== 0 && (f = al(g));
    if (f === 0) return 0;
    if (r !== 0 && r !== f && !(r & v) && (v = f & -f, g = r & -r, v >= g || v === 16 && (g & 4194240) !== 0)) return r;
    if (f & 4 && (f |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= f; 0 < r; ) l = 31 - Da(r), v = 1 << l, f |= n[l], r &= ~v;
    return f;
  }
  function Vd(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Rc(n, r) {
    for (var l = n.suspendedLanes, f = n.pingedLanes, v = n.expirationTimes, g = n.pendingLanes; 0 < g; ) {
      var T = 31 - Da(g), N = 1 << T, j = v[T];
      j === -1 ? (!(N & l) || N & f) && (v[T] = Vd(N, r)) : j <= r && (n.expiredLanes |= N), g &= ~N;
    }
  }
  function Id(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Oc() {
    var n = wc;
    return wc <<= 1, !(wc & 4194240) && (wc = 64), n;
  }
  function Yd(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function il(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Da(r), n[r] = l;
  }
  function T0(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var f = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var v = 31 - Da(l), g = 1 << v;
      r[v] = 0, f[v] = -1, n[v] = -1, l &= ~g;
    }
  }
  function us(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var f = 31 - Da(l), v = 1 << f;
      v & r | n[f] & r && (n[f] |= r), l &= ~v;
    }
  }
  var Gt = 0;
  function Wd(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Ah, kc, Qt, Lh, Gd, gt = !1, ss = [], Bn = null, _a = null, Ma = null, cs = /* @__PURE__ */ new Map(), Jn = /* @__PURE__ */ new Map(), Jt = [], x0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ii(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Bn = null;
        break;
      case "dragenter":
      case "dragleave":
        _a = null;
        break;
      case "mouseover":
      case "mouseout":
        Ma = null;
        break;
      case "pointerover":
      case "pointerout":
        cs.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Jn.delete(r.pointerId);
    }
  }
  function Mr(n, r, l, f, v, g) {
    return n === null || n.nativeEvent !== g ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: f, nativeEvent: g, targetContainers: [v] }, r !== null && (r = ks(r), r !== null && kc(r)), n) : (n.eventSystemFlags |= f, r = n.targetContainers, v !== null && r.indexOf(v) === -1 && r.push(v), n);
  }
  function Eo(n, r, l, f, v) {
    switch (r) {
      case "focusin":
        return Bn = Mr(Bn, n, r, l, f, v), !0;
      case "dragenter":
        return _a = Mr(_a, n, r, l, f, v), !0;
      case "mouseover":
        return Ma = Mr(Ma, n, r, l, f, v), !0;
      case "pointerover":
        var g = v.pointerId;
        return cs.set(g, Mr(cs.get(g) || null, n, r, l, f, v)), !0;
      case "gotpointercapture":
        return g = v.pointerId, Jn.set(g, Mr(Jn.get(g) || null, n, r, l, f, v)), !0;
    }
    return !1;
  }
  function zh(n) {
    var r = Aa(n.target);
    if (r !== null) {
      var l = rt(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = _t(l), r !== null) {
            n.blockedOn = r, Gd(n.priority, function() {
              Qt(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Kl(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = Mc(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var f = new l.constructor(l.type, l);
        gr = f, l.target.dispatchEvent(f), gr = null;
      } else return r = ks(l), r !== null && kc(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Qd(n, r, l) {
    Kl(n) && l.delete(r);
  }
  function Uh() {
    gt = !1, Bn !== null && Kl(Bn) && (Bn = null), _a !== null && Kl(_a) && (_a = null), Ma !== null && Kl(Ma) && (Ma = null), cs.forEach(Qd), Jn.forEach(Qd);
  }
  function fs(n, r) {
    n.blockedOn === r && (n.blockedOn = null, gt || (gt = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, Uh)));
  }
  function ds(n) {
    function r(v) {
      return fs(v, n);
    }
    if (0 < ss.length) {
      fs(ss[0], n);
      for (var l = 1; l < ss.length; l++) {
        var f = ss[l];
        f.blockedOn === n && (f.blockedOn = null);
      }
    }
    for (Bn !== null && fs(Bn, n), _a !== null && fs(_a, n), Ma !== null && fs(Ma, n), cs.forEach(r), Jn.forEach(r), l = 0; l < Jt.length; l++) f = Jt[l], f.blockedOn === n && (f.blockedOn = null);
    for (; 0 < Jt.length && (l = Jt[0], l.blockedOn === null); ) zh(l), l.blockedOn === null && Jt.shift();
  }
  var Zl = Y.ReactCurrentBatchConfig, ol = !0;
  function Ph(n, r, l, f) {
    var v = Gt, g = Zl.transition;
    Zl.transition = null;
    try {
      Gt = 1, _c(n, r, l, f);
    } finally {
      Gt = v, Zl.transition = g;
    }
  }
  function Dc(n, r, l, f) {
    var v = Gt, g = Zl.transition;
    Zl.transition = null;
    try {
      Gt = 4, _c(n, r, l, f);
    } finally {
      Gt = v, Zl.transition = g;
    }
  }
  function _c(n, r, l, f) {
    if (ol) {
      var v = Mc(n, r, l, f);
      if (v === null) Vc(n, r, f, ps, l), ii(n, f);
      else if (Eo(v, n, r, l, f)) f.stopPropagation();
      else if (ii(n, f), r & 4 && -1 < x0.indexOf(n)) {
        for (; v !== null; ) {
          var g = ks(v);
          if (g !== null && Ah(g), g = Mc(n, r, l, f), g === null && Vc(n, r, f, ps, l), g === v) break;
          v = g;
        }
        v !== null && f.stopPropagation();
      } else Vc(n, r, f, null, l);
    }
  }
  var ps = null;
  function Mc(n, r, l, f) {
    if (ps = null, n = Yt(f), n = Aa(n), n !== null) if (r = rt(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = _t(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return ps = n, null;
  }
  function qd(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (_r()) {
          case ma:
            return 1;
          case wt:
            return 4;
          case bi:
          case Dh:
            return 16;
          case Hd:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ii = null, vs = null, hs = null;
  function Xd() {
    if (hs) return hs;
    var n, r = vs, l = r.length, f, v = "value" in Ii ? Ii.value : Ii.textContent, g = v.length;
    for (n = 0; n < l && r[n] === v[n]; n++) ;
    var T = l - n;
    for (f = 1; f <= T && r[l - f] === v[g - f]; f++) ;
    return hs = v.slice(n, 1 < f ? 1 - f : void 0);
  }
  function Jl(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function ms() {
    return !0;
  }
  function $h() {
    return !1;
  }
  function ya(n) {
    function r(l, f, v, g, T) {
      this._reactName = l, this._targetInst = v, this.type = f, this.nativeEvent = g, this.target = T, this.currentTarget = null;
      for (var N in n) n.hasOwnProperty(N) && (l = n[N], this[N] = l ? l(g) : g[N]);
      return this.isDefaultPrevented = (g.defaultPrevented != null ? g.defaultPrevented : g.returnValue === !1) ? ms : $h, this.isPropagationStopped = $h, this;
    }
    return I(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = ms);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = ms);
    }, persist: function() {
    }, isPersistent: ms }), r;
  }
  var Co = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Nc = ya(Co), eu = I({}, Co, { view: 0, detail: 0 }), jh = ya(eu), Ac, Kd, ys, sr = I({}, eu, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: tp, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== ys && (ys && n.type === "mousemove" ? (Ac = n.screenX - ys.screenX, Kd = n.screenY - ys.screenY) : Kd = Ac = 0, ys = n), Ac);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Kd;
  } }), Lc = ya(sr), Fh = I({}, sr, { dataTransfer: 0 }), Bh = ya(Fh), w0 = I({}, eu, { relatedTarget: 0 }), To = ya(w0), Zd = I({}, Co, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hh = ya(Zd), R0 = I({}, Co, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), O0 = ya(R0), k0 = I({}, Co, { data: 0 }), Jd = ya(k0), ep = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Vh = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Ih = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Yh(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Ih[n]) ? !!r[n] : !1;
  }
  function tp() {
    return Yh;
  }
  var Yi = I({}, eu, { key: function(n) {
    if (n.key) {
      var r = ep[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = Jl(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Vh[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: tp, charCode: function(n) {
    return n.type === "keypress" ? Jl(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Jl(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), D0 = ya(Yi), np = I({}, sr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), zc = ya(np), rp = I({}, eu, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: tp }), _0 = ya(rp), Uc = I({}, Co, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Wh = ya(Uc), Zr = I({}, sr, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Wi = ya(Zr), Hn = [9, 13, 27, 32], oi = C && "CompositionEvent" in window, ll = null;
  C && "documentMode" in document && (ll = document.documentMode);
  var Pc = C && "TextEvent" in window && !ll, Gh = C && (!oi || ll && 8 < ll && 11 >= ll), tu = " ", Qh = !1;
  function qh(n, r) {
    switch (n) {
      case "keyup":
        return Hn.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function $c(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var nu = !1;
  function M0(n, r) {
    switch (n) {
      case "compositionend":
        return $c(r);
      case "keypress":
        return r.which !== 32 ? null : (Qh = !0, tu);
      case "textInput":
        return n = r.data, n === tu && Qh ? null : n;
      default:
        return null;
    }
  }
  function N0(n, r) {
    if (nu) return n === "compositionend" || !oi && qh(n, r) ? (n = Xd(), hs = vs = Ii = null, nu = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Gh && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Xh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Kh(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Xh[n.type] : r === "textarea";
  }
  function Zh(n, r, l, f) {
    gi(f), r = ws(r, "onChange"), 0 < r.length && (l = new Nc("onChange", "change", null, l, f), n.push({ event: l, listeners: r }));
  }
  var gs = null, ru = null;
  function au(n) {
    Hc(n, 0);
  }
  function iu(n) {
    var r = lu(n);
    if (ye(r)) return n;
  }
  function Jh(n, r) {
    if (n === "change") return r;
  }
  var ap = !1;
  if (C) {
    var ip;
    if (C) {
      var op = "oninput" in document;
      if (!op) {
        var em = document.createElement("div");
        em.setAttribute("oninput", "return;"), op = typeof em.oninput == "function";
      }
      ip = op;
    } else ip = !1;
    ap = ip && (!document.documentMode || 9 < document.documentMode);
  }
  function tm() {
    gs && (gs.detachEvent("onpropertychange", nm), ru = gs = null);
  }
  function nm(n) {
    if (n.propertyName === "value" && iu(ru)) {
      var r = [];
      Zh(r, ru, n, Yt(n)), Ql(au, r);
    }
  }
  function A0(n, r, l) {
    n === "focusin" ? (tm(), gs = r, ru = l, gs.attachEvent("onpropertychange", nm)) : n === "focusout" && tm();
  }
  function L0(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return iu(ru);
  }
  function z0(n, r) {
    if (n === "click") return iu(r);
  }
  function rm(n, r) {
    if (n === "input" || n === "change") return iu(r);
  }
  function U0(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Na = typeof Object.is == "function" ? Object.is : U0;
  function Ss(n, r) {
    if (Na(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), f = Object.keys(r);
    if (l.length !== f.length) return !1;
    for (f = 0; f < l.length; f++) {
      var v = l[f];
      if (!x.call(r, v) || !Na(n[v], r[v])) return !1;
    }
    return !0;
  }
  function am(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function im(n, r) {
    var l = am(n);
    n = 0;
    for (var f; l; ) {
      if (l.nodeType === 3) {
        if (f = n + l.textContent.length, n <= r && f >= r) return { node: l, offset: r - n };
        n = f;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = am(l);
    }
  }
  function om(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? om(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function jc() {
    for (var n = window, r = Tt(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = Tt(n.document);
    }
    return r;
  }
  function Gi(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Fc(n) {
    var r = jc(), l = n.focusedElem, f = n.selectionRange;
    if (r !== l && l && l.ownerDocument && om(l.ownerDocument.documentElement, l)) {
      if (f !== null && Gi(l)) {
        if (r = f.start, n = f.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var v = l.textContent.length, g = Math.min(f.start, v);
          f = f.end === void 0 ? g : Math.min(f.end, v), !n.extend && g > f && (v = f, f = g, g = v), v = im(l, g);
          var T = im(
            l,
            f
          );
          v && T && (n.rangeCount !== 1 || n.anchorNode !== v.node || n.anchorOffset !== v.offset || n.focusNode !== T.node || n.focusOffset !== T.offset) && (r = r.createRange(), r.setStart(v.node, v.offset), n.removeAllRanges(), g > f ? (n.addRange(r), n.extend(T.node, T.offset)) : (r.setEnd(T.node, T.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var lm = C && "documentMode" in document && 11 >= document.documentMode, li = null, lp = null, bs = null, up = !1;
  function um(n, r, l) {
    var f = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    up || li == null || li !== Tt(f) || (f = li, "selectionStart" in f && Gi(f) ? f = { start: f.selectionStart, end: f.selectionEnd } : (f = (f.ownerDocument && f.ownerDocument.defaultView || window).getSelection(), f = { anchorNode: f.anchorNode, anchorOffset: f.anchorOffset, focusNode: f.focusNode, focusOffset: f.focusOffset }), bs && Ss(bs, f) || (bs = f, f = ws(lp, "onSelect"), 0 < f.length && (r = new Nc("onSelect", "select", null, r, l), n.push({ event: r, listeners: f }), r.target = li)));
  }
  function Bc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var ul = { animationend: Bc("Animation", "AnimationEnd"), animationiteration: Bc("Animation", "AnimationIteration"), animationstart: Bc("Animation", "AnimationStart"), transitionend: Bc("Transition", "TransitionEnd") }, sp = {}, cp = {};
  C && (cp = document.createElement("div").style, "AnimationEvent" in window || (delete ul.animationend.animation, delete ul.animationiteration.animation, delete ul.animationstart.animation), "TransitionEvent" in window || delete ul.transitionend.transition);
  function cr(n) {
    if (sp[n]) return sp[n];
    if (!ul[n]) return n;
    var r = ul[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in cp) return sp[n] = r[l];
    return n;
  }
  var fp = cr("animationend"), sm = cr("animationiteration"), cm = cr("animationstart"), fm = cr("transitionend"), dm = /* @__PURE__ */ new Map(), pm = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Qi(n, r) {
    dm.set(n, r), S(r, [n]);
  }
  for (var Es = 0; Es < pm.length; Es++) {
    var sl = pm[Es], P0 = sl.toLowerCase(), Cs = sl[0].toUpperCase() + sl.slice(1);
    Qi(P0, "on" + Cs);
  }
  Qi(fp, "onAnimationEnd"), Qi(sm, "onAnimationIteration"), Qi(cm, "onAnimationStart"), Qi("dblclick", "onDoubleClick"), Qi("focusin", "onFocus"), Qi("focusout", "onBlur"), Qi(fm, "onTransitionEnd"), y("onMouseEnter", ["mouseout", "mouseover"]), y("onMouseLeave", ["mouseout", "mouseover"]), y("onPointerEnter", ["pointerout", "pointerover"]), y("onPointerLeave", ["pointerout", "pointerover"]), S("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), S("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), S("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), S("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), S("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), S("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ts = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), $0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ts));
  function vm(n, r, l) {
    var f = n.type || "unknown-event";
    n.currentTarget = l, _e(f, r, void 0, n), n.currentTarget = null;
  }
  function Hc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var f = n[l], v = f.event;
      f = f.listeners;
      e: {
        var g = void 0;
        if (r) for (var T = f.length - 1; 0 <= T; T--) {
          var N = f[T], j = N.instance, Z = N.currentTarget;
          if (N = N.listener, j !== g && v.isPropagationStopped()) break e;
          vm(v, N, Z), g = j;
        }
        else for (T = 0; T < f.length; T++) {
          if (N = f[T], j = N.instance, Z = N.currentTarget, N = N.listener, j !== g && v.isPropagationStopped()) break e;
          vm(v, N, Z), g = j;
        }
      }
    }
    if (So) throw n = rl, So = !1, rl = null, n;
  }
  function un(n, r) {
    var l = r[gp];
    l === void 0 && (l = r[gp] = /* @__PURE__ */ new Set());
    var f = n + "__bubble";
    l.has(f) || (hm(r, n, 2, !1), l.add(f));
  }
  function xo(n, r, l) {
    var f = 0;
    r && (f |= 4), hm(l, n, f, r);
  }
  var qi = "_reactListening" + Math.random().toString(36).slice(2);
  function ou(n) {
    if (!n[qi]) {
      n[qi] = !0, p.forEach(function(l) {
        l !== "selectionchange" && ($0.has(l) || xo(l, !1, n), xo(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[qi] || (r[qi] = !0, xo("selectionchange", !1, r));
    }
  }
  function hm(n, r, l, f) {
    switch (qd(r)) {
      case 1:
        var v = Ph;
        break;
      case 4:
        v = Dc;
        break;
      default:
        v = _c;
    }
    l = v.bind(null, r, l, n), v = void 0, !ql || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (v = !0), f ? v !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: v }) : n.addEventListener(r, l, !0) : v !== void 0 ? n.addEventListener(r, l, { passive: v }) : n.addEventListener(r, l, !1);
  }
  function Vc(n, r, l, f, v) {
    var g = f;
    if (!(r & 1) && !(r & 2) && f !== null) e: for (; ; ) {
      if (f === null) return;
      var T = f.tag;
      if (T === 3 || T === 4) {
        var N = f.stateNode.containerInfo;
        if (N === v || N.nodeType === 8 && N.parentNode === v) break;
        if (T === 4) for (T = f.return; T !== null; ) {
          var j = T.tag;
          if ((j === 3 || j === 4) && (j = T.stateNode.containerInfo, j === v || j.nodeType === 8 && j.parentNode === v)) return;
          T = T.return;
        }
        for (; N !== null; ) {
          if (T = Aa(N), T === null) return;
          if (j = T.tag, j === 5 || j === 6) {
            f = g = T;
            continue e;
          }
          N = N.parentNode;
        }
      }
      f = f.return;
    }
    Ql(function() {
      var Z = g, he = Yt(l), ge = [];
      e: {
        var pe = dm.get(n);
        if (pe !== void 0) {
          var $e = Nc, Ye = n;
          switch (n) {
            case "keypress":
              if (Jl(l) === 0) break e;
            case "keydown":
            case "keyup":
              $e = D0;
              break;
            case "focusin":
              Ye = "focus", $e = To;
              break;
            case "focusout":
              Ye = "blur", $e = To;
              break;
            case "beforeblur":
            case "afterblur":
              $e = To;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              $e = Lc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              $e = Bh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              $e = _0;
              break;
            case fp:
            case sm:
            case cm:
              $e = Hh;
              break;
            case fm:
              $e = Wh;
              break;
            case "scroll":
              $e = jh;
              break;
            case "wheel":
              $e = Wi;
              break;
            case "copy":
            case "cut":
            case "paste":
              $e = O0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              $e = zc;
          }
          var qe = (r & 4) !== 0, $n = !qe && n === "scroll", W = qe ? pe !== null ? pe + "Capture" : null : pe;
          qe = [];
          for (var H = Z, X; H !== null; ) {
            X = H;
            var Te = X.stateNode;
            if (X.tag === 5 && Te !== null && (X = Te, W !== null && (Te = nl(H, W), Te != null && qe.push(xs(H, Te, X)))), $n) break;
            H = H.return;
          }
          0 < qe.length && (pe = new $e(pe, Ye, null, l, he), ge.push({ event: pe, listeners: qe }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (pe = n === "mouseover" || n === "pointerover", $e = n === "mouseout" || n === "pointerout", pe && l !== gr && (Ye = l.relatedTarget || l.fromElement) && (Aa(Ye) || Ye[Xi])) break e;
          if (($e || pe) && (pe = he.window === he ? he : (pe = he.ownerDocument) ? pe.defaultView || pe.parentWindow : window, $e ? (Ye = l.relatedTarget || l.toElement, $e = Z, Ye = Ye ? Aa(Ye) : null, Ye !== null && ($n = rt(Ye), Ye !== $n || Ye.tag !== 5 && Ye.tag !== 6) && (Ye = null)) : ($e = null, Ye = Z), $e !== Ye)) {
            if (qe = Lc, Te = "onMouseLeave", W = "onMouseEnter", H = "mouse", (n === "pointerout" || n === "pointerover") && (qe = zc, Te = "onPointerLeave", W = "onPointerEnter", H = "pointer"), $n = $e == null ? pe : lu($e), X = Ye == null ? pe : lu(Ye), pe = new qe(Te, H + "leave", $e, l, he), pe.target = $n, pe.relatedTarget = X, Te = null, Aa(he) === Z && (qe = new qe(W, H + "enter", Ye, l, he), qe.target = X, qe.relatedTarget = $n, Te = qe), $n = Te, $e && Ye) t: {
              for (qe = $e, W = Ye, H = 0, X = qe; X; X = cl(X)) H++;
              for (X = 0, Te = W; Te; Te = cl(Te)) X++;
              for (; 0 < H - X; ) qe = cl(qe), H--;
              for (; 0 < X - H; ) W = cl(W), X--;
              for (; H--; ) {
                if (qe === W || W !== null && qe === W.alternate) break t;
                qe = cl(qe), W = cl(W);
              }
              qe = null;
            }
            else qe = null;
            $e !== null && dp(ge, pe, $e, qe, !1), Ye !== null && $n !== null && dp(ge, $n, Ye, qe, !0);
          }
        }
        e: {
          if (pe = Z ? lu(Z) : window, $e = pe.nodeName && pe.nodeName.toLowerCase(), $e === "select" || $e === "input" && pe.type === "file") var et = Jh;
          else if (Kh(pe)) if (ap) et = rm;
          else {
            et = L0;
            var ut = A0;
          }
          else ($e = pe.nodeName) && $e.toLowerCase() === "input" && (pe.type === "checkbox" || pe.type === "radio") && (et = z0);
          if (et && (et = et(n, Z))) {
            Zh(ge, et, l, he);
            break e;
          }
          ut && ut(n, pe, Z), n === "focusout" && (ut = pe._wrapperState) && ut.controlled && pe.type === "number" && Tn(pe, "number", pe.value);
        }
        switch (ut = Z ? lu(Z) : window, n) {
          case "focusin":
            (Kh(ut) || ut.contentEditable === "true") && (li = ut, lp = Z, bs = null);
            break;
          case "focusout":
            bs = lp = li = null;
            break;
          case "mousedown":
            up = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            up = !1, um(ge, l, he);
            break;
          case "selectionchange":
            if (lm) break;
          case "keydown":
          case "keyup":
            um(ge, l, he);
        }
        var We;
        if (oi) e: {
          switch (n) {
            case "compositionstart":
              var ct = "onCompositionStart";
              break e;
            case "compositionend":
              ct = "onCompositionEnd";
              break e;
            case "compositionupdate":
              ct = "onCompositionUpdate";
              break e;
          }
          ct = void 0;
        }
        else nu ? qh(n, l) && (ct = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (ct = "onCompositionStart");
        ct && (Gh && l.locale !== "ko" && (nu || ct !== "onCompositionStart" ? ct === "onCompositionEnd" && nu && (We = Xd()) : (Ii = he, vs = "value" in Ii ? Ii.value : Ii.textContent, nu = !0)), ut = ws(Z, ct), 0 < ut.length && (ct = new Jd(ct, n, null, l, he), ge.push({ event: ct, listeners: ut }), We ? ct.data = We : (We = $c(l), We !== null && (ct.data = We)))), (We = Pc ? M0(n, l) : N0(n, l)) && (Z = ws(Z, "onBeforeInput"), 0 < Z.length && (he = new Jd("onBeforeInput", "beforeinput", null, l, he), ge.push({ event: he, listeners: Z }), he.data = We));
      }
      Hc(ge, r);
    });
  }
  function xs(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function ws(n, r) {
    for (var l = r + "Capture", f = []; n !== null; ) {
      var v = n, g = v.stateNode;
      v.tag === 5 && g !== null && (v = g, g = nl(n, l), g != null && f.unshift(xs(n, g, v)), g = nl(n, r), g != null && f.push(xs(n, g, v))), n = n.return;
    }
    return f;
  }
  function cl(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function dp(n, r, l, f, v) {
    for (var g = r._reactName, T = []; l !== null && l !== f; ) {
      var N = l, j = N.alternate, Z = N.stateNode;
      if (j !== null && j === f) break;
      N.tag === 5 && Z !== null && (N = Z, v ? (j = nl(l, g), j != null && T.unshift(xs(l, j, N))) : v || (j = nl(l, g), j != null && T.push(xs(l, j, N)))), l = l.return;
    }
    T.length !== 0 && n.push({ event: r, listeners: T });
  }
  var pp = /\r\n?/g, j0 = /\u0000|\uFFFD/g;
  function vp(n) {
    return (typeof n == "string" ? n : "" + n).replace(pp, `
`).replace(j0, "");
  }
  function Ic(n, r, l) {
    if (r = vp(r), vp(n) !== r && l) throw Error(c(425));
  }
  function Yc() {
  }
  var hp = null, fl = null;
  function Rs(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var dl = typeof setTimeout == "function" ? setTimeout : void 0, mm = typeof clearTimeout == "function" ? clearTimeout : void 0, mp = typeof Promise == "function" ? Promise : void 0, yp = typeof queueMicrotask == "function" ? queueMicrotask : typeof mp < "u" ? function(n) {
    return mp.resolve(null).then(n).catch(F0);
  } : dl;
  function F0(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function wo(n, r) {
    var l = r, f = 0;
    do {
      var v = l.nextSibling;
      if (n.removeChild(l), v && v.nodeType === 8) if (l = v.data, l === "/$") {
        if (f === 0) {
          n.removeChild(v), ds(r);
          return;
        }
        f--;
      } else l !== "$" && l !== "$?" && l !== "$!" || f++;
      l = v;
    } while (l);
    ds(r);
  }
  function ui(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Os(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Ro = Math.random().toString(36).slice(2), Ei = "__reactFiber$" + Ro, pl = "__reactProps$" + Ro, Xi = "__reactContainer$" + Ro, gp = "__reactEvents$" + Ro, B0 = "__reactListeners$" + Ro, Sp = "__reactHandles$" + Ro;
  function Aa(n) {
    var r = n[Ei];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Xi] || l[Ei]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Os(n); n !== null; ) {
          if (l = n[Ei]) return l;
          n = Os(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function ks(n) {
    return n = n[Ei] || n[Xi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function lu(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(c(33));
  }
  function ot(n) {
    return n[pl] || null;
  }
  var Oo = [], fn = -1;
  function bt(n) {
    return { current: n };
  }
  function jt(n) {
    0 > fn || (n.current = Oo[fn], Oo[fn] = null, fn--);
  }
  function Ht(n, r) {
    fn++, Oo[fn] = n.current, n.current = r;
  }
  var Ci = {}, pt = bt(Ci), Dn = bt(!1), Jr = Ci;
  function La(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Ci;
    var f = n.stateNode;
    if (f && f.__reactInternalMemoizedUnmaskedChildContext === r) return f.__reactInternalMemoizedMaskedChildContext;
    var v = {}, g;
    for (g in l) v[g] = r[g];
    return f && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = v), v;
  }
  function Sn(n) {
    return n = n.childContextTypes, n != null;
  }
  function za() {
    jt(Dn), jt(pt);
  }
  function ko(n, r, l) {
    if (pt.current !== Ci) throw Error(c(168));
    Ht(pt, r), Ht(Dn, l);
  }
  function Ds(n, r, l) {
    var f = n.stateNode;
    if (r = r.childContextTypes, typeof f.getChildContext != "function") return l;
    f = f.getChildContext();
    for (var v in f) if (!(v in r)) throw Error(c(108, Qe(n) || "Unknown", v));
    return I({}, l, f);
  }
  function Wc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Ci, Jr = pt.current, Ht(pt, n), Ht(Dn, Dn.current), !0;
  }
  function ym(n, r, l) {
    var f = n.stateNode;
    if (!f) throw Error(c(169));
    l ? (n = Ds(n, r, Jr), f.__reactInternalMemoizedMergedChildContext = n, jt(Dn), jt(pt), Ht(pt, n)) : jt(Dn), Ht(Dn, l);
  }
  var ga = null, fr = !1, _s = !1;
  function bp(n) {
    ga === null ? ga = [n] : ga.push(n);
  }
  function Ep(n) {
    fr = !0, bp(n);
  }
  function ea() {
    if (!_s && ga !== null) {
      _s = !0;
      var n = 0, r = Gt;
      try {
        var l = ga;
        for (Gt = 1; n < l.length; n++) {
          var f = l[n];
          do
            f = f(!0);
          while (f !== null);
        }
        ga = null, fr = !1;
      } catch (v) {
        throw ga !== null && (ga = ga.slice(n + 1)), cn(ma, ea), v;
      } finally {
        Gt = r, _s = !1;
      }
    }
    return null;
  }
  var Do = [], ta = 0, vl = null, uu = 0, na = [], Nr = 0, Ua = null, Sr = 1, Ki = "";
  function Sa(n, r) {
    Do[ta++] = uu, Do[ta++] = vl, vl = n, uu = r;
  }
  function Cp(n, r, l) {
    na[Nr++] = Sr, na[Nr++] = Ki, na[Nr++] = Ua, Ua = n;
    var f = Sr;
    n = Ki;
    var v = 32 - Da(f) - 1;
    f &= ~(1 << v), l += 1;
    var g = 32 - Da(r) + v;
    if (30 < g) {
      var T = v - v % 5;
      g = (f & (1 << T) - 1).toString(32), f >>= T, v -= T, Sr = 1 << 32 - Da(r) + v | l << v | f, Ki = g + n;
    } else Sr = 1 << g | l << v | f, Ki = n;
  }
  function Gc(n) {
    n.return !== null && (Sa(n, 1), Cp(n, 1, 0));
  }
  function Tp(n) {
    for (; n === vl; ) vl = Do[--ta], Do[ta] = null, uu = Do[--ta], Do[ta] = null;
    for (; n === Ua; ) Ua = na[--Nr], na[Nr] = null, Ki = na[--Nr], na[Nr] = null, Sr = na[--Nr], na[Nr] = null;
  }
  var ba = null, ra = null, dn = !1, Pa = null;
  function xp(n, r) {
    var l = Ya(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function gm(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, ba = n, ra = ui(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, ba = n, ra = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = Ua !== null ? { id: Sr, overflow: Ki } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Ya(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, ba = n, ra = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Qc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function qc(n) {
    if (dn) {
      var r = ra;
      if (r) {
        var l = r;
        if (!gm(n, r)) {
          if (Qc(n)) throw Error(c(418));
          r = ui(l.nextSibling);
          var f = ba;
          r && gm(n, r) ? xp(f, l) : (n.flags = n.flags & -4097 | 2, dn = !1, ba = n);
        }
      } else {
        if (Qc(n)) throw Error(c(418));
        n.flags = n.flags & -4097 | 2, dn = !1, ba = n;
      }
    }
  }
  function Sm(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    ba = n;
  }
  function Xc(n) {
    if (n !== ba) return !1;
    if (!dn) return Sm(n), dn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Rs(n.type, n.memoizedProps)), r && (r = ra)) {
      if (Qc(n)) throw bm(), Error(c(418));
      for (; r; ) xp(n, r), r = ui(r.nextSibling);
    }
    if (Sm(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(c(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                ra = ui(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ra = null;
      }
    } else ra = ba ? ui(n.stateNode.nextSibling) : null;
    return !0;
  }
  function bm() {
    for (var n = ra; n; ) n = ui(n.nextSibling);
  }
  function wn() {
    ra = ba = null, dn = !1;
  }
  function wp(n) {
    Pa === null ? Pa = [n] : Pa.push(n);
  }
  var Kc = Y.ReactCurrentBatchConfig;
  function hl(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(c(309));
          var f = l.stateNode;
        }
        if (!f) throw Error(c(147, n));
        var v = f, g = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === g ? r.ref : (r = function(T) {
          var N = v.refs;
          T === null ? delete N[g] : N[g] = T;
        }, r._stringRef = g, r);
      }
      if (typeof n != "string") throw Error(c(284));
      if (!l._owner) throw Error(c(290, n));
    }
    return n;
  }
  function Ti(n, r) {
    throw n = Object.prototype.toString.call(r), Error(c(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Em(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Zc(n) {
    function r(W, H) {
      if (n) {
        var X = W.deletions;
        X === null ? (W.deletions = [H], W.flags |= 16) : X.push(H);
      }
    }
    function l(W, H) {
      if (!n) return null;
      for (; H !== null; ) r(W, H), H = H.sibling;
      return null;
    }
    function f(W, H) {
      for (W = /* @__PURE__ */ new Map(); H !== null; ) H.key !== null ? W.set(H.key, H) : W.set(H.index, H), H = H.sibling;
      return W;
    }
    function v(W, H) {
      return W = Po(W, H), W.index = 0, W.sibling = null, W;
    }
    function g(W, H, X) {
      return W.index = X, n ? (X = W.alternate, X !== null ? (X = X.index, X < H ? (W.flags |= 2, H) : X) : (W.flags |= 2, H)) : (W.flags |= 1048576, H);
    }
    function T(W) {
      return n && W.alternate === null && (W.flags |= 2), W;
    }
    function N(W, H, X, Te) {
      return H === null || H.tag !== 6 ? (H = Ff(X, W.mode, Te), H.return = W, H) : (H = v(H, X), H.return = W, H);
    }
    function j(W, H, X, Te) {
      var et = X.type;
      return et === te ? he(W, H, X.props.children, Te, X.key) : H !== null && (H.elementType === et || typeof et == "object" && et !== null && et.$$typeof === we && Em(et) === H.type) ? (Te = v(H, X.props), Te.ref = hl(W, H, X), Te.return = W, Te) : (Te = $f(X.type, X.key, X.props, null, W.mode, Te), Te.ref = hl(W, H, X), Te.return = W, Te);
    }
    function Z(W, H, X, Te) {
      return H === null || H.tag !== 4 || H.stateNode.containerInfo !== X.containerInfo || H.stateNode.implementation !== X.implementation ? (H = Qs(X, W.mode, Te), H.return = W, H) : (H = v(H, X.children || []), H.return = W, H);
    }
    function he(W, H, X, Te, et) {
      return H === null || H.tag !== 7 ? (H = _l(X, W.mode, Te, et), H.return = W, H) : (H = v(H, X), H.return = W, H);
    }
    function ge(W, H, X) {
      if (typeof H == "string" && H !== "" || typeof H == "number") return H = Ff("" + H, W.mode, X), H.return = W, H;
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case U:
            return X = $f(H.type, H.key, H.props, null, W.mode, X), X.ref = hl(W, null, H), X.return = W, X;
          case re:
            return H = Qs(H, W.mode, X), H.return = W, H;
          case we:
            var Te = H._init;
            return ge(W, Te(H._payload), X);
        }
        if (kn(H) || Ee(H)) return H = _l(H, W.mode, X, null), H.return = W, H;
        Ti(W, H);
      }
      return null;
    }
    function pe(W, H, X, Te) {
      var et = H !== null ? H.key : null;
      if (typeof X == "string" && X !== "" || typeof X == "number") return et !== null ? null : N(W, H, "" + X, Te);
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case U:
            return X.key === et ? j(W, H, X, Te) : null;
          case re:
            return X.key === et ? Z(W, H, X, Te) : null;
          case we:
            return et = X._init, pe(
              W,
              H,
              et(X._payload),
              Te
            );
        }
        if (kn(X) || Ee(X)) return et !== null ? null : he(W, H, X, Te, null);
        Ti(W, X);
      }
      return null;
    }
    function $e(W, H, X, Te, et) {
      if (typeof Te == "string" && Te !== "" || typeof Te == "number") return W = W.get(X) || null, N(H, W, "" + Te, et);
      if (typeof Te == "object" && Te !== null) {
        switch (Te.$$typeof) {
          case U:
            return W = W.get(Te.key === null ? X : Te.key) || null, j(H, W, Te, et);
          case re:
            return W = W.get(Te.key === null ? X : Te.key) || null, Z(H, W, Te, et);
          case we:
            var ut = Te._init;
            return $e(W, H, X, ut(Te._payload), et);
        }
        if (kn(Te) || Ee(Te)) return W = W.get(X) || null, he(H, W, Te, et, null);
        Ti(H, Te);
      }
      return null;
    }
    function Ye(W, H, X, Te) {
      for (var et = null, ut = null, We = H, ct = H = 0, ar = null; We !== null && ct < X.length; ct++) {
        We.index > ct ? (ar = We, We = null) : ar = We.sibling;
        var Ut = pe(W, We, X[ct], Te);
        if (Ut === null) {
          We === null && (We = ar);
          break;
        }
        n && We && Ut.alternate === null && r(W, We), H = g(Ut, H, ct), ut === null ? et = Ut : ut.sibling = Ut, ut = Ut, We = ar;
      }
      if (ct === X.length) return l(W, We), dn && Sa(W, ct), et;
      if (We === null) {
        for (; ct < X.length; ct++) We = ge(W, X[ct], Te), We !== null && (H = g(We, H, ct), ut === null ? et = We : ut.sibling = We, ut = We);
        return dn && Sa(W, ct), et;
      }
      for (We = f(W, We); ct < X.length; ct++) ar = $e(We, W, ct, X[ct], Te), ar !== null && (n && ar.alternate !== null && We.delete(ar.key === null ? ct : ar.key), H = g(ar, H, ct), ut === null ? et = ar : ut.sibling = ar, ut = ar);
      return n && We.forEach(function(ao) {
        return r(W, ao);
      }), dn && Sa(W, ct), et;
    }
    function qe(W, H, X, Te) {
      var et = Ee(X);
      if (typeof et != "function") throw Error(c(150));
      if (X = et.call(X), X == null) throw Error(c(151));
      for (var ut = et = null, We = H, ct = H = 0, ar = null, Ut = X.next(); We !== null && !Ut.done; ct++, Ut = X.next()) {
        We.index > ct ? (ar = We, We = null) : ar = We.sibling;
        var ao = pe(W, We, Ut.value, Te);
        if (ao === null) {
          We === null && (We = ar);
          break;
        }
        n && We && ao.alternate === null && r(W, We), H = g(ao, H, ct), ut === null ? et = ao : ut.sibling = ao, ut = ao, We = ar;
      }
      if (Ut.done) return l(
        W,
        We
      ), dn && Sa(W, ct), et;
      if (We === null) {
        for (; !Ut.done; ct++, Ut = X.next()) Ut = ge(W, Ut.value, Te), Ut !== null && (H = g(Ut, H, ct), ut === null ? et = Ut : ut.sibling = Ut, ut = Ut);
        return dn && Sa(W, ct), et;
      }
      for (We = f(W, We); !Ut.done; ct++, Ut = X.next()) Ut = $e(We, W, ct, Ut.value, Te), Ut !== null && (n && Ut.alternate !== null && We.delete(Ut.key === null ? ct : Ut.key), H = g(Ut, H, ct), ut === null ? et = Ut : ut.sibling = Ut, ut = Ut);
      return n && We.forEach(function(iS) {
        return r(W, iS);
      }), dn && Sa(W, ct), et;
    }
    function $n(W, H, X, Te) {
      if (typeof X == "object" && X !== null && X.type === te && X.key === null && (X = X.props.children), typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case U:
            e: {
              for (var et = X.key, ut = H; ut !== null; ) {
                if (ut.key === et) {
                  if (et = X.type, et === te) {
                    if (ut.tag === 7) {
                      l(W, ut.sibling), H = v(ut, X.props.children), H.return = W, W = H;
                      break e;
                    }
                  } else if (ut.elementType === et || typeof et == "object" && et !== null && et.$$typeof === we && Em(et) === ut.type) {
                    l(W, ut.sibling), H = v(ut, X.props), H.ref = hl(W, ut, X), H.return = W, W = H;
                    break e;
                  }
                  l(W, ut);
                  break;
                } else r(W, ut);
                ut = ut.sibling;
              }
              X.type === te ? (H = _l(X.props.children, W.mode, Te, X.key), H.return = W, W = H) : (Te = $f(X.type, X.key, X.props, null, W.mode, Te), Te.ref = hl(W, H, X), Te.return = W, W = Te);
            }
            return T(W);
          case re:
            e: {
              for (ut = X.key; H !== null; ) {
                if (H.key === ut) if (H.tag === 4 && H.stateNode.containerInfo === X.containerInfo && H.stateNode.implementation === X.implementation) {
                  l(W, H.sibling), H = v(H, X.children || []), H.return = W, W = H;
                  break e;
                } else {
                  l(W, H);
                  break;
                }
                else r(W, H);
                H = H.sibling;
              }
              H = Qs(X, W.mode, Te), H.return = W, W = H;
            }
            return T(W);
          case we:
            return ut = X._init, $n(W, H, ut(X._payload), Te);
        }
        if (kn(X)) return Ye(W, H, X, Te);
        if (Ee(X)) return qe(W, H, X, Te);
        Ti(W, X);
      }
      return typeof X == "string" && X !== "" || typeof X == "number" ? (X = "" + X, H !== null && H.tag === 6 ? (l(W, H.sibling), H = v(H, X), H.return = W, W = H) : (l(W, H), H = Ff(X, W.mode, Te), H.return = W, W = H), T(W)) : l(W, H);
    }
    return $n;
  }
  var su = Zc(!0), Cm = Zc(!1), Zi = bt(null), er = null, Me = null, $a = null;
  function Ea() {
    $a = Me = er = null;
  }
  function Rp(n) {
    var r = Zi.current;
    jt(Zi), n._currentValue = r;
  }
  function Op(n, r, l) {
    for (; n !== null; ) {
      var f = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, f !== null && (f.childLanes |= r)) : f !== null && (f.childLanes & r) !== r && (f.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function cu(n, r) {
    er = n, $a = Me = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (oa = !0), n.firstContext = null);
  }
  function ja(n) {
    var r = n._currentValue;
    if ($a !== n) if (n = { context: n, memoizedValue: r, next: null }, Me === null) {
      if (er === null) throw Error(c(308));
      Me = n, er.dependencies = { lanes: 0, firstContext: n };
    } else Me = Me.next = n;
    return r;
  }
  var ml = null;
  function Vn(n) {
    ml === null ? ml = [n] : ml.push(n);
  }
  function Tm(n, r, l, f) {
    var v = r.interleaved;
    return v === null ? (l.next = l, Vn(r)) : (l.next = v.next, v.next = l), r.interleaved = l, Ji(n, f);
  }
  function Ji(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var _o = !1;
  function Jc(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function fu(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function aa(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Mo(n, r, l) {
    var f = n.updateQueue;
    if (f === null) return null;
    if (f = f.shared, Ot & 2) {
      var v = f.pending;
      return v === null ? r.next = r : (r.next = v.next, v.next = r), f.pending = r, Ji(n, l);
    }
    return v = f.interleaved, v === null ? (r.next = r, Vn(f)) : (r.next = v.next, v.next = r), f.interleaved = r, Ji(n, l);
  }
  function ef(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var f = r.lanes;
      f &= n.pendingLanes, l |= f, r.lanes = l, us(n, l);
    }
  }
  function xm(n, r) {
    var l = n.updateQueue, f = n.alternate;
    if (f !== null && (f = f.updateQueue, l === f)) {
      var v = null, g = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var T = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          g === null ? v = g = T : g = g.next = T, l = l.next;
        } while (l !== null);
        g === null ? v = g = r : g = g.next = r;
      } else v = g = r;
      l = { baseState: f.baseState, firstBaseUpdate: v, lastBaseUpdate: g, shared: f.shared, effects: f.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function tf(n, r, l, f) {
    var v = n.updateQueue;
    _o = !1;
    var g = v.firstBaseUpdate, T = v.lastBaseUpdate, N = v.shared.pending;
    if (N !== null) {
      v.shared.pending = null;
      var j = N, Z = j.next;
      j.next = null, T === null ? g = Z : T.next = Z, T = j;
      var he = n.alternate;
      he !== null && (he = he.updateQueue, N = he.lastBaseUpdate, N !== T && (N === null ? he.firstBaseUpdate = Z : N.next = Z, he.lastBaseUpdate = j));
    }
    if (g !== null) {
      var ge = v.baseState;
      T = 0, he = Z = j = null, N = g;
      do {
        var pe = N.lane, $e = N.eventTime;
        if ((f & pe) === pe) {
          he !== null && (he = he.next = {
            eventTime: $e,
            lane: 0,
            tag: N.tag,
            payload: N.payload,
            callback: N.callback,
            next: null
          });
          e: {
            var Ye = n, qe = N;
            switch (pe = r, $e = l, qe.tag) {
              case 1:
                if (Ye = qe.payload, typeof Ye == "function") {
                  ge = Ye.call($e, ge, pe);
                  break e;
                }
                ge = Ye;
                break e;
              case 3:
                Ye.flags = Ye.flags & -65537 | 128;
              case 0:
                if (Ye = qe.payload, pe = typeof Ye == "function" ? Ye.call($e, ge, pe) : Ye, pe == null) break e;
                ge = I({}, ge, pe);
                break e;
              case 2:
                _o = !0;
            }
          }
          N.callback !== null && N.lane !== 0 && (n.flags |= 64, pe = v.effects, pe === null ? v.effects = [N] : pe.push(N));
        } else $e = { eventTime: $e, lane: pe, tag: N.tag, payload: N.payload, callback: N.callback, next: null }, he === null ? (Z = he = $e, j = ge) : he = he.next = $e, T |= pe;
        if (N = N.next, N === null) {
          if (N = v.shared.pending, N === null) break;
          pe = N, N = pe.next, pe.next = null, v.lastBaseUpdate = pe, v.shared.pending = null;
        }
      } while (!0);
      if (he === null && (j = ge), v.baseState = j, v.firstBaseUpdate = Z, v.lastBaseUpdate = he, r = v.shared.interleaved, r !== null) {
        v = r;
        do
          T |= v.lane, v = v.next;
        while (v !== r);
      } else g === null && (v.shared.lanes = 0);
      Rl |= T, n.lanes = T, n.memoizedState = ge;
    }
  }
  function wm(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var f = n[r], v = f.callback;
      if (v !== null) {
        if (f.callback = null, f = l, typeof v != "function") throw Error(c(191, v));
        v.call(f);
      }
    }
  }
  var Ms = {}, si = bt(Ms), du = bt(Ms), Ns = bt(Ms);
  function yl(n) {
    if (n === Ms) throw Error(c(174));
    return n;
  }
  function kp(n, r) {
    switch (Ht(Ns, r), Ht(du, n), Ht(si, Ms), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Kt(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Kt(r, n);
    }
    jt(si), Ht(si, r);
  }
  function pu() {
    jt(si), jt(du), jt(Ns);
  }
  function Rm(n) {
    yl(Ns.current);
    var r = yl(si.current), l = Kt(r, n.type);
    r !== l && (Ht(du, n), Ht(si, l));
  }
  function Dp(n) {
    du.current === n && (jt(si), jt(du));
  }
  var bn = bt(0);
  function nf(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var rf = [];
  function _p() {
    for (var n = 0; n < rf.length; n++) rf[n]._workInProgressVersionPrimary = null;
    rf.length = 0;
  }
  var af = Y.ReactCurrentDispatcher, As = Y.ReactCurrentBatchConfig, Je = 0, tt = null, vt = null, Rt = null, Ca = !1, vu = !1, Ls = 0, H0 = 0;
  function Ar() {
    throw Error(c(321));
  }
  function zs(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!Na(n[l], r[l])) return !1;
    return !0;
  }
  function de(n, r, l, f, v, g) {
    if (Je = g, tt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, af.current = n === null || n.memoizedState === null ? V0 : sn, n = l(f, v), vu) {
      g = 0;
      do {
        if (vu = !1, Ls = 0, 25 <= g) throw Error(c(301));
        g += 1, Rt = vt = null, r.updateQueue = null, af.current = bf, n = l(f, v);
      } while (vu);
    }
    if (af.current = Lr, r = vt !== null && vt.next !== null, Je = 0, Rt = vt = tt = null, Ca = !1, r) throw Error(c(300));
    return n;
  }
  function In() {
    var n = Ls !== 0;
    return Ls = 0, n;
  }
  function at() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Rt === null ? tt.memoizedState = Rt = n : Rt = Rt.next = n, Rt;
  }
  function br() {
    if (vt === null) {
      var n = tt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = vt.next;
    var r = Rt === null ? tt.memoizedState : Rt.next;
    if (r !== null) Rt = r, vt = n;
    else {
      if (n === null) throw Error(c(310));
      vt = n, n = { memoizedState: vt.memoizedState, baseState: vt.baseState, baseQueue: vt.baseQueue, queue: vt.queue, next: null }, Rt === null ? tt.memoizedState = Rt = n : Rt = Rt.next = n;
    }
    return Rt;
  }
  function Ta(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function eo(n) {
    var r = br(), l = r.queue;
    if (l === null) throw Error(c(311));
    l.lastRenderedReducer = n;
    var f = vt, v = f.baseQueue, g = l.pending;
    if (g !== null) {
      if (v !== null) {
        var T = v.next;
        v.next = g.next, g.next = T;
      }
      f.baseQueue = v = g, l.pending = null;
    }
    if (v !== null) {
      g = v.next, f = f.baseState;
      var N = T = null, j = null, Z = g;
      do {
        var he = Z.lane;
        if ((Je & he) === he) j !== null && (j = j.next = { lane: 0, action: Z.action, hasEagerState: Z.hasEagerState, eagerState: Z.eagerState, next: null }), f = Z.hasEagerState ? Z.eagerState : n(f, Z.action);
        else {
          var ge = {
            lane: he,
            action: Z.action,
            hasEagerState: Z.hasEagerState,
            eagerState: Z.eagerState,
            next: null
          };
          j === null ? (N = j = ge, T = f) : j = j.next = ge, tt.lanes |= he, Rl |= he;
        }
        Z = Z.next;
      } while (Z !== null && Z !== g);
      j === null ? T = f : j.next = N, Na(f, r.memoizedState) || (oa = !0), r.memoizedState = f, r.baseState = T, r.baseQueue = j, l.lastRenderedState = f;
    }
    if (n = l.interleaved, n !== null) {
      v = n;
      do
        g = v.lane, tt.lanes |= g, Rl |= g, v = v.next;
      while (v !== n);
    } else v === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Fa(n) {
    var r = br(), l = r.queue;
    if (l === null) throw Error(c(311));
    l.lastRenderedReducer = n;
    var f = l.dispatch, v = l.pending, g = r.memoizedState;
    if (v !== null) {
      l.pending = null;
      var T = v = v.next;
      do
        g = n(g, T.action), T = T.next;
      while (T !== v);
      Na(g, r.memoizedState) || (oa = !0), r.memoizedState = g, r.baseQueue === null && (r.baseState = g), l.lastRenderedState = g;
    }
    return [g, f];
  }
  function hu() {
  }
  function gl(n, r) {
    var l = tt, f = br(), v = r(), g = !Na(f.memoizedState, v);
    if (g && (f.memoizedState = v, oa = !0), f = f.queue, Us(lf.bind(null, l, f, n), [n]), f.getSnapshot !== r || g || Rt !== null && Rt.memoizedState.tag & 1) {
      if (l.flags |= 2048, Sl(9, of.bind(null, l, f, v, r), void 0, null), Mn === null) throw Error(c(349));
      Je & 30 || mu(l, r, v);
    }
    return v;
  }
  function mu(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = tt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, tt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function of(n, r, l, f) {
    r.value = l, r.getSnapshot = f, uf(r) && sf(n);
  }
  function lf(n, r, l) {
    return l(function() {
      uf(r) && sf(n);
    });
  }
  function uf(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !Na(n, l);
    } catch {
      return !0;
    }
  }
  function sf(n) {
    var r = Ji(n, 1);
    r !== null && Rn(r, n, 1, -1);
  }
  function cf(n) {
    var r = at();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ta, lastRenderedState: n }, r.queue = n, n = n.dispatch = Ps.bind(null, tt, n), [r.memoizedState, n];
  }
  function Sl(n, r, l, f) {
    return n = { tag: n, create: r, destroy: l, deps: f, next: null }, r = tt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, tt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (f = l.next, l.next = n, n.next = f, r.lastEffect = n)), n;
  }
  function ff() {
    return br().memoizedState;
  }
  function yu(n, r, l, f) {
    var v = at();
    tt.flags |= n, v.memoizedState = Sl(1 | r, l, void 0, f === void 0 ? null : f);
  }
  function gu(n, r, l, f) {
    var v = br();
    f = f === void 0 ? null : f;
    var g = void 0;
    if (vt !== null) {
      var T = vt.memoizedState;
      if (g = T.destroy, f !== null && zs(f, T.deps)) {
        v.memoizedState = Sl(r, l, g, f);
        return;
      }
    }
    tt.flags |= n, v.memoizedState = Sl(1 | r, l, g, f);
  }
  function df(n, r) {
    return yu(8390656, 8, n, r);
  }
  function Us(n, r) {
    return gu(2048, 8, n, r);
  }
  function pf(n, r) {
    return gu(4, 2, n, r);
  }
  function vf(n, r) {
    return gu(4, 4, n, r);
  }
  function hf(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function mf(n, r, l) {
    return l = l != null ? l.concat([n]) : null, gu(4, 4, hf.bind(null, r, n), l);
  }
  function Su() {
  }
  function bl(n, r) {
    var l = br();
    r = r === void 0 ? null : r;
    var f = l.memoizedState;
    return f !== null && r !== null && zs(r, f[1]) ? f[0] : (l.memoizedState = [n, r], n);
  }
  function yf(n, r) {
    var l = br();
    r = r === void 0 ? null : r;
    var f = l.memoizedState;
    return f !== null && r !== null && zs(r, f[1]) ? f[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function gf(n, r, l) {
    return Je & 21 ? (Na(l, r) || (l = Oc(), tt.lanes |= l, Rl |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, oa = !0), n.memoizedState = l);
  }
  function Mp(n, r) {
    var l = Gt;
    Gt = l !== 0 && 4 > l ? l : 4, n(!0);
    var f = As.transition;
    As.transition = {};
    try {
      n(!1), r();
    } finally {
      Gt = l, As.transition = f;
    }
  }
  function Sf() {
    return br().memoizedState;
  }
  function Om(n, r, l) {
    var f = ro(n);
    if (l = { lane: f, action: l, hasEagerState: !1, eagerState: null, next: null }, Np(n)) bu(r, l);
    else if (l = Tm(n, r, l, f), l !== null) {
      var v = vr();
      Rn(l, n, f, v), No(l, r, f);
    }
  }
  function Ps(n, r, l) {
    var f = ro(n), v = { lane: f, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Np(n)) bu(r, v);
    else {
      var g = n.alternate;
      if (n.lanes === 0 && (g === null || g.lanes === 0) && (g = r.lastRenderedReducer, g !== null)) try {
        var T = r.lastRenderedState, N = g(T, l);
        if (v.hasEagerState = !0, v.eagerState = N, Na(N, T)) {
          var j = r.interleaved;
          j === null ? (v.next = v, Vn(r)) : (v.next = j.next, j.next = v), r.interleaved = v;
          return;
        }
      } catch {
      } finally {
      }
      l = Tm(n, r, v, f), l !== null && (v = vr(), Rn(l, n, f, v), No(l, r, f));
    }
  }
  function Np(n) {
    var r = n.alternate;
    return n === tt || r !== null && r === tt;
  }
  function bu(n, r) {
    vu = Ca = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function No(n, r, l) {
    if (l & 4194240) {
      var f = r.lanes;
      f &= n.pendingLanes, l |= f, r.lanes = l, us(n, l);
    }
  }
  var Lr = { readContext: ja, useCallback: Ar, useContext: Ar, useEffect: Ar, useImperativeHandle: Ar, useInsertionEffect: Ar, useLayoutEffect: Ar, useMemo: Ar, useReducer: Ar, useRef: Ar, useState: Ar, useDebugValue: Ar, useDeferredValue: Ar, useTransition: Ar, useMutableSource: Ar, useSyncExternalStore: Ar, useId: Ar, unstable_isNewReconciler: !1 }, V0 = { readContext: ja, useCallback: function(n, r) {
    return at().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: ja, useEffect: df, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, yu(
      4194308,
      4,
      hf.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return yu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return yu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = at();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var f = at();
    return r = l !== void 0 ? l(r) : r, f.memoizedState = f.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, f.queue = n, n = n.dispatch = Om.bind(null, tt, n), [f.memoizedState, n];
  }, useRef: function(n) {
    var r = at();
    return n = { current: n }, r.memoizedState = n;
  }, useState: cf, useDebugValue: Su, useDeferredValue: function(n) {
    return at().memoizedState = n;
  }, useTransition: function() {
    var n = cf(!1), r = n[0];
    return n = Mp.bind(null, n[1]), at().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var f = tt, v = at();
    if (dn) {
      if (l === void 0) throw Error(c(407));
      l = l();
    } else {
      if (l = r(), Mn === null) throw Error(c(349));
      Je & 30 || mu(f, r, l);
    }
    v.memoizedState = l;
    var g = { value: l, getSnapshot: r };
    return v.queue = g, df(lf.bind(
      null,
      f,
      g,
      n
    ), [n]), f.flags |= 2048, Sl(9, of.bind(null, f, g, l, r), void 0, null), l;
  }, useId: function() {
    var n = at(), r = Mn.identifierPrefix;
    if (dn) {
      var l = Ki, f = Sr;
      l = (f & ~(1 << 32 - Da(f) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Ls++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = H0++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, sn = {
    readContext: ja,
    useCallback: bl,
    useContext: ja,
    useEffect: Us,
    useImperativeHandle: mf,
    useInsertionEffect: pf,
    useLayoutEffect: vf,
    useMemo: yf,
    useReducer: eo,
    useRef: ff,
    useState: function() {
      return eo(Ta);
    },
    useDebugValue: Su,
    useDeferredValue: function(n) {
      var r = br();
      return gf(r, vt.memoizedState, n);
    },
    useTransition: function() {
      var n = eo(Ta)[0], r = br().memoizedState;
      return [n, r];
    },
    useMutableSource: hu,
    useSyncExternalStore: gl,
    useId: Sf,
    unstable_isNewReconciler: !1
  }, bf = { readContext: ja, useCallback: bl, useContext: ja, useEffect: Us, useImperativeHandle: mf, useInsertionEffect: pf, useLayoutEffect: vf, useMemo: yf, useReducer: Fa, useRef: ff, useState: function() {
    return Fa(Ta);
  }, useDebugValue: Su, useDeferredValue: function(n) {
    var r = br();
    return vt === null ? r.memoizedState = n : gf(r, vt.memoizedState, n);
  }, useTransition: function() {
    var n = Fa(Ta)[0], r = br().memoizedState;
    return [n, r];
  }, useMutableSource: hu, useSyncExternalStore: gl, useId: Sf, unstable_isNewReconciler: !1 };
  function ia(n, r) {
    if (n && n.defaultProps) {
      r = I({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function El(n, r, l, f) {
    r = n.memoizedState, l = l(f, r), l = l == null ? r : I({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Cl = { isMounted: function(n) {
    return (n = n._reactInternals) ? rt(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var f = vr(), v = ro(n), g = aa(f, v);
    g.payload = r, l != null && (g.callback = l), r = Mo(n, g, v), r !== null && (Rn(r, n, v, f), ef(r, n, v));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var f = vr(), v = ro(n), g = aa(f, v);
    g.tag = 1, g.payload = r, l != null && (g.callback = l), r = Mo(n, g, v), r !== null && (Rn(r, n, v, f), ef(r, n, v));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = vr(), f = ro(n), v = aa(l, f);
    v.tag = 2, r != null && (v.callback = r), r = Mo(n, v, f), r !== null && (Rn(r, n, f, l), ef(r, n, f));
  } };
  function km(n, r, l, f, v, g, T) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(f, g, T) : r.prototype && r.prototype.isPureReactComponent ? !Ss(l, f) || !Ss(v, g) : !0;
  }
  function Dm(n, r, l) {
    var f = !1, v = Ci, g = r.contextType;
    return typeof g == "object" && g !== null ? g = ja(g) : (v = Sn(r) ? Jr : pt.current, f = r.contextTypes, g = (f = f != null) ? La(n, v) : Ci), r = new r(l, g), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Cl, n.stateNode = r, r._reactInternals = n, f && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = v, n.__reactInternalMemoizedMaskedChildContext = g), r;
  }
  function _m(n, r, l, f) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, f), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, f), r.state !== n && Cl.enqueueReplaceState(r, r.state, null);
  }
  function Ap(n, r, l, f) {
    var v = n.stateNode;
    v.props = l, v.state = n.memoizedState, v.refs = {}, Jc(n);
    var g = r.contextType;
    typeof g == "object" && g !== null ? v.context = ja(g) : (g = Sn(r) ? Jr : pt.current, v.context = La(n, g)), v.state = n.memoizedState, g = r.getDerivedStateFromProps, typeof g == "function" && (El(n, r, g, l), v.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof v.getSnapshotBeforeUpdate == "function" || typeof v.UNSAFE_componentWillMount != "function" && typeof v.componentWillMount != "function" || (r = v.state, typeof v.componentWillMount == "function" && v.componentWillMount(), typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount(), r !== v.state && Cl.enqueueReplaceState(v, v.state, null), tf(n, l, v, f), v.state = n.memoizedState), typeof v.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Ao(n, r) {
    try {
      var l = "", f = r;
      do
        l += Ze(f), f = f.return;
      while (f);
      var v = l;
    } catch (g) {
      v = `
Error generating stack: ` + g.message + `
` + g.stack;
    }
    return { value: n, source: r, stack: v, digest: null };
  }
  function Lp(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function $s(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Mm = typeof WeakMap == "function" ? WeakMap : Map;
  function Nm(n, r, l) {
    l = aa(-1, l), l.tag = 3, l.payload = { element: null };
    var f = r.value;
    return l.callback = function() {
      Nf || (Nf = !0, Vp = f), $s(n, r);
    }, l;
  }
  function Am(n, r, l) {
    l = aa(-1, l), l.tag = 3;
    var f = n.type.getDerivedStateFromError;
    if (typeof f == "function") {
      var v = r.value;
      l.payload = function() {
        return f(v);
      }, l.callback = function() {
        $s(n, r);
      };
    }
    var g = n.stateNode;
    return g !== null && typeof g.componentDidCatch == "function" && (l.callback = function() {
      $s(n, r), typeof f != "function" && (Va === null ? Va = /* @__PURE__ */ new Set([this]) : Va.add(this));
      var T = r.stack;
      this.componentDidCatch(r.value, { componentStack: T !== null ? T : "" });
    }), l;
  }
  function js(n, r, l) {
    var f = n.pingCache;
    if (f === null) {
      f = n.pingCache = new Mm();
      var v = /* @__PURE__ */ new Set();
      f.set(r, v);
    } else v = f.get(r), v === void 0 && (v = /* @__PURE__ */ new Set(), f.set(r, v));
    v.has(l) || (v.add(l), n = J0.bind(null, n, r, l), r.then(n, n));
  }
  function Lm(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function zp(n, r, l, f, v) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = v, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = aa(-1, 1), r.tag = 2, Mo(l, r, 1))), l.lanes |= 1), n);
  }
  var zm = Y.ReactCurrentOwner, oa = !1;
  function Un(n, r, l, f) {
    r.child = n === null ? Cm(r, null, l, f) : su(r, n.child, l, f);
  }
  function Eu(n, r, l, f, v) {
    l = l.render;
    var g = r.ref;
    return cu(r, v), f = de(n, r, l, f, g, v), l = In(), n !== null && !oa ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~v, Pn(n, r, v)) : (dn && l && Gc(r), r.flags |= 1, Un(n, r, f, v), r.child);
  }
  function Lo(n, r, l, f, v) {
    if (n === null) {
      var g = l.type;
      return typeof g == "function" && !Qp(g) && g.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = g, Ef(n, r, g, f, v)) : (n = $f(l.type, null, f, r, r.mode, v), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (g = n.child, !(n.lanes & v)) {
      var T = g.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Ss, l(T, f) && n.ref === r.ref) return Pn(n, r, v);
    }
    return r.flags |= 1, n = Po(g, f), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Ef(n, r, l, f, v) {
    if (n !== null) {
      var g = n.memoizedProps;
      if (Ss(g, f) && n.ref === r.ref) if (oa = !1, r.pendingProps = f = g, (n.lanes & v) !== 0) n.flags & 131072 && (oa = !0);
      else return r.lanes = n.lanes, Pn(n, r, v);
    }
    return St(n, r, l, f, v);
  }
  function la(n, r, l) {
    var f = r.pendingProps, v = f.children, g = n !== null ? n.memoizedState : null;
    if (f.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ht(Mu, ua), ua |= l;
    else {
      if (!(l & 1073741824)) return n = g !== null ? g.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Ht(Mu, ua), ua |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, f = g !== null ? g.baseLanes : l, Ht(Mu, ua), ua |= f;
    }
    else g !== null ? (f = g.baseLanes | l, r.memoizedState = null) : f = l, Ht(Mu, ua), ua |= f;
    return Un(n, r, v, l), r.child;
  }
  function Tl(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function St(n, r, l, f, v) {
    var g = Sn(l) ? Jr : pt.current;
    return g = La(r, g), cu(r, v), l = de(n, r, l, f, g, v), f = In(), n !== null && !oa ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~v, Pn(n, r, v)) : (dn && f && Gc(r), r.flags |= 1, Un(n, r, l, v), r.child);
  }
  function Fs(n, r, l, f, v) {
    if (Sn(l)) {
      var g = !0;
      Wc(r);
    } else g = !1;
    if (cu(r, v), r.stateNode === null) Hs(n, r), Dm(r, l, f), Ap(r, l, f, v), f = !0;
    else if (n === null) {
      var T = r.stateNode, N = r.memoizedProps;
      T.props = N;
      var j = T.context, Z = l.contextType;
      typeof Z == "object" && Z !== null ? Z = ja(Z) : (Z = Sn(l) ? Jr : pt.current, Z = La(r, Z));
      var he = l.getDerivedStateFromProps, ge = typeof he == "function" || typeof T.getSnapshotBeforeUpdate == "function";
      ge || typeof T.UNSAFE_componentWillReceiveProps != "function" && typeof T.componentWillReceiveProps != "function" || (N !== f || j !== Z) && _m(r, T, f, Z), _o = !1;
      var pe = r.memoizedState;
      T.state = pe, tf(r, f, T, v), j = r.memoizedState, N !== f || pe !== j || Dn.current || _o ? (typeof he == "function" && (El(r, l, he, f), j = r.memoizedState), (N = _o || km(r, l, N, f, pe, j, Z)) ? (ge || typeof T.UNSAFE_componentWillMount != "function" && typeof T.componentWillMount != "function" || (typeof T.componentWillMount == "function" && T.componentWillMount(), typeof T.UNSAFE_componentWillMount == "function" && T.UNSAFE_componentWillMount()), typeof T.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof T.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = f, r.memoizedState = j), T.props = f, T.state = j, T.context = Z, f = N) : (typeof T.componentDidMount == "function" && (r.flags |= 4194308), f = !1);
    } else {
      T = r.stateNode, fu(n, r), N = r.memoizedProps, Z = r.type === r.elementType ? N : ia(r.type, N), T.props = Z, ge = r.pendingProps, pe = T.context, j = l.contextType, typeof j == "object" && j !== null ? j = ja(j) : (j = Sn(l) ? Jr : pt.current, j = La(r, j));
      var $e = l.getDerivedStateFromProps;
      (he = typeof $e == "function" || typeof T.getSnapshotBeforeUpdate == "function") || typeof T.UNSAFE_componentWillReceiveProps != "function" && typeof T.componentWillReceiveProps != "function" || (N !== ge || pe !== j) && _m(r, T, f, j), _o = !1, pe = r.memoizedState, T.state = pe, tf(r, f, T, v);
      var Ye = r.memoizedState;
      N !== ge || pe !== Ye || Dn.current || _o ? (typeof $e == "function" && (El(r, l, $e, f), Ye = r.memoizedState), (Z = _o || km(r, l, Z, f, pe, Ye, j) || !1) ? (he || typeof T.UNSAFE_componentWillUpdate != "function" && typeof T.componentWillUpdate != "function" || (typeof T.componentWillUpdate == "function" && T.componentWillUpdate(f, Ye, j), typeof T.UNSAFE_componentWillUpdate == "function" && T.UNSAFE_componentWillUpdate(f, Ye, j)), typeof T.componentDidUpdate == "function" && (r.flags |= 4), typeof T.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof T.componentDidUpdate != "function" || N === n.memoizedProps && pe === n.memoizedState || (r.flags |= 4), typeof T.getSnapshotBeforeUpdate != "function" || N === n.memoizedProps && pe === n.memoizedState || (r.flags |= 1024), r.memoizedProps = f, r.memoizedState = Ye), T.props = f, T.state = Ye, T.context = j, f = Z) : (typeof T.componentDidUpdate != "function" || N === n.memoizedProps && pe === n.memoizedState || (r.flags |= 4), typeof T.getSnapshotBeforeUpdate != "function" || N === n.memoizedProps && pe === n.memoizedState || (r.flags |= 1024), f = !1);
    }
    return Cf(n, r, l, f, g, v);
  }
  function Cf(n, r, l, f, v, g) {
    Tl(n, r);
    var T = (r.flags & 128) !== 0;
    if (!f && !T) return v && ym(r, l, !1), Pn(n, r, g);
    f = r.stateNode, zm.current = r;
    var N = T && typeof l.getDerivedStateFromError != "function" ? null : f.render();
    return r.flags |= 1, n !== null && T ? (r.child = su(r, n.child, null, g), r.child = su(r, null, N, g)) : Un(n, r, N, g), r.memoizedState = f.state, v && ym(r, l, !0), r.child;
  }
  function I0(n) {
    var r = n.stateNode;
    r.pendingContext ? ko(n, r.pendingContext, r.pendingContext !== r.context) : r.context && ko(n, r.context, !1), kp(n, r.containerInfo);
  }
  function Um(n, r, l, f, v) {
    return wn(), wp(v), r.flags |= 256, Un(n, r, l, f), r.child;
  }
  var Bs = { dehydrated: null, treeContext: null, retryLane: 0 };
  function xl(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Pm(n, r, l) {
    var f = r.pendingProps, v = bn.current, g = !1, T = (r.flags & 128) !== 0, N;
    if ((N = T) || (N = n !== null && n.memoizedState === null ? !1 : (v & 2) !== 0), N ? (g = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (v |= 1), Ht(bn, v & 1), n === null)
      return qc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (T = f.children, n = f.fallback, g ? (f = r.mode, g = r.child, T = { mode: "hidden", children: T }, !(f & 1) && g !== null ? (g.childLanes = 0, g.pendingProps = T) : g = jf(T, f, 0, null), n = _l(n, f, l, null), g.return = r, n.return = r, g.sibling = n, r.child = g, r.child.memoizedState = xl(l), r.memoizedState = Bs, n) : Tf(r, T));
    if (v = n.memoizedState, v !== null && (N = v.dehydrated, N !== null)) return Up(n, r, T, f, N, v, l);
    if (g) {
      g = f.fallback, T = r.mode, v = n.child, N = v.sibling;
      var j = { mode: "hidden", children: f.children };
      return !(T & 1) && r.child !== v ? (f = r.child, f.childLanes = 0, f.pendingProps = j, r.deletions = null) : (f = Po(v, j), f.subtreeFlags = v.subtreeFlags & 14680064), N !== null ? g = Po(N, g) : (g = _l(g, T, l, null), g.flags |= 2), g.return = r, f.return = r, f.sibling = g, r.child = f, f = g, g = r.child, T = n.child.memoizedState, T = T === null ? xl(l) : { baseLanes: T.baseLanes | l, cachePool: null, transitions: T.transitions }, g.memoizedState = T, g.childLanes = n.childLanes & ~l, r.memoizedState = Bs, f;
    }
    return g = n.child, n = g.sibling, f = Po(g, { mode: "visible", children: f.children }), !(r.mode & 1) && (f.lanes = l), f.return = r, f.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = f, r.memoizedState = null, f;
  }
  function Tf(n, r) {
    return r = jf({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function xf(n, r, l, f) {
    return f !== null && wp(f), su(r, n.child, null, l), n = Tf(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Up(n, r, l, f, v, g, T) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, f = Lp(Error(c(422))), xf(n, r, T, f)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (g = f.fallback, v = r.mode, f = jf({ mode: "visible", children: f.children }, v, 0, null), g = _l(g, v, T, null), g.flags |= 2, f.return = r, g.return = r, f.sibling = g, r.child = f, r.mode & 1 && su(r, n.child, null, T), r.child.memoizedState = xl(T), r.memoizedState = Bs, g);
    if (!(r.mode & 1)) return xf(n, r, T, null);
    if (v.data === "$!") {
      if (f = v.nextSibling && v.nextSibling.dataset, f) var N = f.dgst;
      return f = N, g = Error(c(419)), f = Lp(g, f, void 0), xf(n, r, T, f);
    }
    if (N = (T & n.childLanes) !== 0, oa || N) {
      if (f = Mn, f !== null) {
        switch (T & -T) {
          case 4:
            v = 2;
            break;
          case 16:
            v = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            v = 32;
            break;
          case 536870912:
            v = 268435456;
            break;
          default:
            v = 0;
        }
        v = v & (f.suspendedLanes | T) ? 0 : v, v !== 0 && v !== g.retryLane && (g.retryLane = v, Ji(n, v), Rn(f, n, v, -1));
      }
      return Gs(), f = Lp(Error(c(421))), xf(n, r, T, f);
    }
    return v.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Gp.bind(null, n), v._reactRetry = r, null) : (n = g.treeContext, ra = ui(v.nextSibling), ba = r, dn = !0, Pa = null, n !== null && (na[Nr++] = Sr, na[Nr++] = Ki, na[Nr++] = Ua, Sr = n.id, Ki = n.overflow, Ua = r), r = Tf(r, f.children), r.flags |= 4096, r);
  }
  function $m(n, r, l) {
    n.lanes |= r;
    var f = n.alternate;
    f !== null && (f.lanes |= r), Op(n.return, r, l);
  }
  function wf(n, r, l, f, v) {
    var g = n.memoizedState;
    g === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: f, tail: l, tailMode: v } : (g.isBackwards = r, g.rendering = null, g.renderingStartTime = 0, g.last = f, g.tail = l, g.tailMode = v);
  }
  function Pp(n, r, l) {
    var f = r.pendingProps, v = f.revealOrder, g = f.tail;
    if (Un(n, r, f.children, l), f = bn.current, f & 2) f = f & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && $m(n, l, r);
        else if (n.tag === 19) $m(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      f &= 1;
    }
    if (Ht(bn, f), !(r.mode & 1)) r.memoizedState = null;
    else switch (v) {
      case "forwards":
        for (l = r.child, v = null; l !== null; ) n = l.alternate, n !== null && nf(n) === null && (v = l), l = l.sibling;
        l = v, l === null ? (v = r.child, r.child = null) : (v = l.sibling, l.sibling = null), wf(r, !1, v, l, g);
        break;
      case "backwards":
        for (l = null, v = r.child, r.child = null; v !== null; ) {
          if (n = v.alternate, n !== null && nf(n) === null) {
            r.child = v;
            break;
          }
          n = v.sibling, v.sibling = l, l = v, v = n;
        }
        wf(r, !0, l, null, g);
        break;
      case "together":
        wf(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Hs(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Pn(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Rl |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(c(153));
    if (r.child !== null) {
      for (n = r.child, l = Po(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Po(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function to(n, r, l) {
    switch (r.tag) {
      case 3:
        I0(r), wn();
        break;
      case 5:
        Rm(r);
        break;
      case 1:
        Sn(r.type) && Wc(r);
        break;
      case 4:
        kp(r, r.stateNode.containerInfo);
        break;
      case 10:
        var f = r.type._context, v = r.memoizedProps.value;
        Ht(Zi, f._currentValue), f._currentValue = v;
        break;
      case 13:
        if (f = r.memoizedState, f !== null)
          return f.dehydrated !== null ? (Ht(bn, bn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Pm(n, r, l) : (Ht(bn, bn.current & 1), n = Pn(n, r, l), n !== null ? n.sibling : null);
        Ht(bn, bn.current & 1);
        break;
      case 19:
        if (f = (l & r.childLanes) !== 0, n.flags & 128) {
          if (f) return Pp(n, r, l);
          r.flags |= 128;
        }
        if (v = r.memoizedState, v !== null && (v.rendering = null, v.tail = null, v.lastEffect = null), Ht(bn, bn.current), f) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, la(n, r, l);
    }
    return Pn(n, r, l);
  }
  var xi, Cu, Tu, Ba;
  xi = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, Cu = function() {
  }, Tu = function(n, r, l, f) {
    var v = n.memoizedProps;
    if (v !== f) {
      n = r.stateNode, yl(si.current);
      var g = null;
      switch (l) {
        case "input":
          v = ke(n, v), f = ke(n, f), g = [];
          break;
        case "select":
          v = I({}, v, { value: void 0 }), f = I({}, f, { value: void 0 }), g = [];
          break;
        case "textarea":
          v = qn(n, v), f = qn(n, f), g = [];
          break;
        default:
          typeof v.onClick != "function" && typeof f.onClick == "function" && (n.onclick = Yc);
      }
      zn(l, f);
      var T;
      l = null;
      for (Z in v) if (!f.hasOwnProperty(Z) && v.hasOwnProperty(Z) && v[Z] != null) if (Z === "style") {
        var N = v[Z];
        for (T in N) N.hasOwnProperty(T) && (l || (l = {}), l[T] = "");
      } else Z !== "dangerouslySetInnerHTML" && Z !== "children" && Z !== "suppressContentEditableWarning" && Z !== "suppressHydrationWarning" && Z !== "autoFocus" && (h.hasOwnProperty(Z) ? g || (g = []) : (g = g || []).push(Z, null));
      for (Z in f) {
        var j = f[Z];
        if (N = v != null ? v[Z] : void 0, f.hasOwnProperty(Z) && j !== N && (j != null || N != null)) if (Z === "style") if (N) {
          for (T in N) !N.hasOwnProperty(T) || j && j.hasOwnProperty(T) || (l || (l = {}), l[T] = "");
          for (T in j) j.hasOwnProperty(T) && N[T] !== j[T] && (l || (l = {}), l[T] = j[T]);
        } else l || (g || (g = []), g.push(
          Z,
          l
        )), l = j;
        else Z === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, N = N ? N.__html : void 0, j != null && N !== j && (g = g || []).push(Z, j)) : Z === "children" ? typeof j != "string" && typeof j != "number" || (g = g || []).push(Z, "" + j) : Z !== "suppressContentEditableWarning" && Z !== "suppressHydrationWarning" && (h.hasOwnProperty(Z) ? (j != null && Z === "onScroll" && un("scroll", n), g || N === j || (g = [])) : (g = g || []).push(Z, j));
      }
      l && (g = g || []).push("style", l);
      var Z = g;
      (r.updateQueue = Z) && (r.flags |= 4);
    }
  }, Ba = function(n, r, l, f) {
    l !== f && (r.flags |= 4);
  };
  function _n(n, r) {
    if (!dn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var f = null; l !== null; ) l.alternate !== null && (f = l), l = l.sibling;
        f === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : f.sibling = null;
    }
  }
  function zr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, f = 0;
    if (r) for (var v = n.child; v !== null; ) l |= v.lanes | v.childLanes, f |= v.subtreeFlags & 14680064, f |= v.flags & 14680064, v.return = n, v = v.sibling;
    else for (v = n.child; v !== null; ) l |= v.lanes | v.childLanes, f |= v.subtreeFlags, f |= v.flags, v.return = n, v = v.sibling;
    return n.subtreeFlags |= f, n.childLanes = l, r;
  }
  function Y0(n, r, l) {
    var f = r.pendingProps;
    switch (Tp(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return zr(r), null;
      case 1:
        return Sn(r.type) && za(), zr(r), null;
      case 3:
        return f = r.stateNode, pu(), jt(Dn), jt(pt), _p(), f.pendingContext && (f.context = f.pendingContext, f.pendingContext = null), (n === null || n.child === null) && (Xc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Pa !== null && (Ip(Pa), Pa = null))), Cu(n, r), zr(r), null;
      case 5:
        Dp(r);
        var v = yl(Ns.current);
        if (l = r.type, n !== null && r.stateNode != null) Tu(n, r, l, f, v), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!f) {
            if (r.stateNode === null) throw Error(c(166));
            return zr(r), null;
          }
          if (n = yl(si.current), Xc(r)) {
            f = r.stateNode, l = r.type;
            var g = r.memoizedProps;
            switch (f[Ei] = r, f[pl] = g, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                un("cancel", f), un("close", f);
                break;
              case "iframe":
              case "object":
              case "embed":
                un("load", f);
                break;
              case "video":
              case "audio":
                for (v = 0; v < Ts.length; v++) un(Ts[v], f);
                break;
              case "source":
                un("error", f);
                break;
              case "img":
              case "image":
              case "link":
                un(
                  "error",
                  f
                ), un("load", f);
                break;
              case "details":
                un("toggle", f);
                break;
              case "input":
                Mt(f, g), un("invalid", f);
                break;
              case "select":
                f._wrapperState = { wasMultiple: !!g.multiple }, un("invalid", f);
                break;
              case "textarea":
                Xe(f, g), un("invalid", f);
            }
            zn(l, g), v = null;
            for (var T in g) if (g.hasOwnProperty(T)) {
              var N = g[T];
              T === "children" ? typeof N == "string" ? f.textContent !== N && (g.suppressHydrationWarning !== !0 && Ic(f.textContent, N, n), v = ["children", N]) : typeof N == "number" && f.textContent !== "" + N && (g.suppressHydrationWarning !== !0 && Ic(
                f.textContent,
                N,
                n
              ), v = ["children", "" + N]) : h.hasOwnProperty(T) && N != null && T === "onScroll" && un("scroll", f);
            }
            switch (l) {
              case "input":
                Ct(f), yn(f, g, !0);
                break;
              case "textarea":
                Ct(f), Fn(f);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof g.onClick == "function" && (f.onclick = Yc);
            }
            f = v, r.updateQueue = f, f !== null && (r.flags |= 4);
          } else {
            T = v.nodeType === 9 ? v : v.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Kn(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = T.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof f.is == "string" ? n = T.createElement(l, { is: f.is }) : (n = T.createElement(l), l === "select" && (T = n, f.multiple ? T.multiple = !0 : f.size && (T.size = f.size))) : n = T.createElementNS(n, l), n[Ei] = r, n[pl] = f, xi(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (T = gn(l, f), l) {
                case "dialog":
                  un("cancel", n), un("close", n), v = f;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  un("load", n), v = f;
                  break;
                case "video":
                case "audio":
                  for (v = 0; v < Ts.length; v++) un(Ts[v], n);
                  v = f;
                  break;
                case "source":
                  un("error", n), v = f;
                  break;
                case "img":
                case "image":
                case "link":
                  un(
                    "error",
                    n
                  ), un("load", n), v = f;
                  break;
                case "details":
                  un("toggle", n), v = f;
                  break;
                case "input":
                  Mt(n, f), v = ke(n, f), un("invalid", n);
                  break;
                case "option":
                  v = f;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!f.multiple }, v = I({}, f, { value: void 0 }), un("invalid", n);
                  break;
                case "textarea":
                  Xe(n, f), v = qn(n, f), un("invalid", n);
                  break;
                default:
                  v = f;
              }
              zn(l, v), N = v;
              for (g in N) if (N.hasOwnProperty(g)) {
                var j = N[g];
                g === "style" ? Nt(n, j) : g === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, j != null && Xr(n, j)) : g === "children" ? typeof j == "string" ? (l !== "textarea" || j !== "") && Pr(n, j) : typeof j == "number" && Pr(n, "" + j) : g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && g !== "autoFocus" && (h.hasOwnProperty(g) ? j != null && g === "onScroll" && un("scroll", n) : j != null && q(n, g, j, T));
              }
              switch (l) {
                case "input":
                  Ct(n), yn(n, f, !1);
                  break;
                case "textarea":
                  Ct(n), Fn(n);
                  break;
                case "option":
                  f.value != null && n.setAttribute("value", "" + Ve(f.value));
                  break;
                case "select":
                  n.multiple = !!f.multiple, g = f.value, g != null ? Ln(n, !!f.multiple, g, !1) : f.defaultValue != null && Ln(
                    n,
                    !!f.multiple,
                    f.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof v.onClick == "function" && (n.onclick = Yc);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  f = !!f.autoFocus;
                  break e;
                case "img":
                  f = !0;
                  break e;
                default:
                  f = !1;
              }
            }
            f && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return zr(r), null;
      case 6:
        if (n && r.stateNode != null) Ba(n, r, n.memoizedProps, f);
        else {
          if (typeof f != "string" && r.stateNode === null) throw Error(c(166));
          if (l = yl(Ns.current), yl(si.current), Xc(r)) {
            if (f = r.stateNode, l = r.memoizedProps, f[Ei] = r, (g = f.nodeValue !== l) && (n = ba, n !== null)) switch (n.tag) {
              case 3:
                Ic(f.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Ic(f.nodeValue, l, (n.mode & 1) !== 0);
            }
            g && (r.flags |= 4);
          } else f = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(f), f[Ei] = r, r.stateNode = f;
        }
        return zr(r), null;
      case 13:
        if (jt(bn), f = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (dn && ra !== null && r.mode & 1 && !(r.flags & 128)) bm(), wn(), r.flags |= 98560, g = !1;
          else if (g = Xc(r), f !== null && f.dehydrated !== null) {
            if (n === null) {
              if (!g) throw Error(c(318));
              if (g = r.memoizedState, g = g !== null ? g.dehydrated : null, !g) throw Error(c(317));
              g[Ei] = r;
            } else wn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            zr(r), g = !1;
          } else Pa !== null && (Ip(Pa), Pa = null), g = !0;
          if (!g) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (f = f !== null, f !== (n !== null && n.memoizedState !== null) && f && (r.child.flags |= 8192, r.mode & 1 && (n === null || bn.current & 1 ? nr === 0 && (nr = 3) : Gs())), r.updateQueue !== null && (r.flags |= 4), zr(r), null);
      case 4:
        return pu(), Cu(n, r), n === null && ou(r.stateNode.containerInfo), zr(r), null;
      case 10:
        return Rp(r.type._context), zr(r), null;
      case 17:
        return Sn(r.type) && za(), zr(r), null;
      case 19:
        if (jt(bn), g = r.memoizedState, g === null) return zr(r), null;
        if (f = (r.flags & 128) !== 0, T = g.rendering, T === null) if (f) _n(g, !1);
        else {
          if (nr !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (T = nf(n), T !== null) {
              for (r.flags |= 128, _n(g, !1), f = T.updateQueue, f !== null && (r.updateQueue = f, r.flags |= 4), r.subtreeFlags = 0, f = l, l = r.child; l !== null; ) g = l, n = f, g.flags &= 14680066, T = g.alternate, T === null ? (g.childLanes = 0, g.lanes = n, g.child = null, g.subtreeFlags = 0, g.memoizedProps = null, g.memoizedState = null, g.updateQueue = null, g.dependencies = null, g.stateNode = null) : (g.childLanes = T.childLanes, g.lanes = T.lanes, g.child = T.child, g.subtreeFlags = 0, g.deletions = null, g.memoizedProps = T.memoizedProps, g.memoizedState = T.memoizedState, g.updateQueue = T.updateQueue, g.type = T.type, n = T.dependencies, g.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return Ht(bn, bn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          g.tail !== null && Bt() > Au && (r.flags |= 128, f = !0, _n(g, !1), r.lanes = 4194304);
        }
        else {
          if (!f) if (n = nf(T), n !== null) {
            if (r.flags |= 128, f = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), _n(g, !0), g.tail === null && g.tailMode === "hidden" && !T.alternate && !dn) return zr(r), null;
          } else 2 * Bt() - g.renderingStartTime > Au && l !== 1073741824 && (r.flags |= 128, f = !0, _n(g, !1), r.lanes = 4194304);
          g.isBackwards ? (T.sibling = r.child, r.child = T) : (l = g.last, l !== null ? l.sibling = T : r.child = T, g.last = T);
        }
        return g.tail !== null ? (r = g.tail, g.rendering = r, g.tail = r.sibling, g.renderingStartTime = Bt(), r.sibling = null, l = bn.current, Ht(bn, f ? l & 1 | 2 : l & 1), r) : (zr(r), null);
      case 22:
      case 23:
        return Uf(), f = r.memoizedState !== null, n !== null && n.memoizedState !== null !== f && (r.flags |= 8192), f && r.mode & 1 ? ua & 1073741824 && (zr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : zr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(c(156, r.tag));
  }
  function W0(n, r) {
    switch (Tp(r), r.tag) {
      case 1:
        return Sn(r.type) && za(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return pu(), jt(Dn), jt(pt), _p(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Dp(r), null;
      case 13:
        if (jt(bn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(c(340));
          wn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return jt(bn), null;
      case 4:
        return pu(), null;
      case 10:
        return Rp(r.type._context), null;
      case 22:
      case 23:
        return Uf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var xu = !1, Er = !1, Rf = typeof WeakSet == "function" ? WeakSet : Set, He = null;
  function wu(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (f) {
      Nn(n, r, f);
    }
    else l.current = null;
  }
  function $p(n, r, l) {
    try {
      l();
    } catch (f) {
      Nn(n, r, f);
    }
  }
  var Of = !1;
  function G0(n, r) {
    if (hp = ol, n = jc(), Gi(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var f = l.getSelection && l.getSelection();
        if (f && f.rangeCount !== 0) {
          l = f.anchorNode;
          var v = f.anchorOffset, g = f.focusNode;
          f = f.focusOffset;
          try {
            l.nodeType, g.nodeType;
          } catch {
            l = null;
            break e;
          }
          var T = 0, N = -1, j = -1, Z = 0, he = 0, ge = n, pe = null;
          t: for (; ; ) {
            for (var $e; ge !== l || v !== 0 && ge.nodeType !== 3 || (N = T + v), ge !== g || f !== 0 && ge.nodeType !== 3 || (j = T + f), ge.nodeType === 3 && (T += ge.nodeValue.length), ($e = ge.firstChild) !== null; )
              pe = ge, ge = $e;
            for (; ; ) {
              if (ge === n) break t;
              if (pe === l && ++Z === v && (N = T), pe === g && ++he === f && (j = T), ($e = ge.nextSibling) !== null) break;
              ge = pe, pe = ge.parentNode;
            }
            ge = $e;
          }
          l = N === -1 || j === -1 ? null : { start: N, end: j };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (fl = { focusedElem: n, selectionRange: l }, ol = !1, He = r; He !== null; ) if (r = He, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, He = n;
    else for (; He !== null; ) {
      r = He;
      try {
        var Ye = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Ye !== null) {
              var qe = Ye.memoizedProps, $n = Ye.memoizedState, W = r.stateNode, H = W.getSnapshotBeforeUpdate(r.elementType === r.type ? qe : ia(r.type, qe), $n);
              W.__reactInternalSnapshotBeforeUpdate = H;
            }
            break;
          case 3:
            var X = r.stateNode.containerInfo;
            X.nodeType === 1 ? X.textContent = "" : X.nodeType === 9 && X.documentElement && X.removeChild(X.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(c(163));
        }
      } catch (Te) {
        Nn(r, r.return, Te);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, He = n;
        break;
      }
      He = r.return;
    }
    return Ye = Of, Of = !1, Ye;
  }
  function Ru(n, r, l) {
    var f = r.updateQueue;
    if (f = f !== null ? f.lastEffect : null, f !== null) {
      var v = f = f.next;
      do {
        if ((v.tag & n) === n) {
          var g = v.destroy;
          v.destroy = void 0, g !== void 0 && $p(r, l, g);
        }
        v = v.next;
      } while (v !== f);
    }
  }
  function kf(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var f = l.create;
          l.destroy = f();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Df(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function jm(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, jm(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ei], delete r[pl], delete r[gp], delete r[B0], delete r[Sp])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function jp(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Fm(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || jp(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Vs(n, r, l) {
    var f = n.tag;
    if (f === 5 || f === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Yc));
    else if (f !== 4 && (n = n.child, n !== null)) for (Vs(n, r, l), n = n.sibling; n !== null; ) Vs(n, r, l), n = n.sibling;
  }
  function Ou(n, r, l) {
    var f = n.tag;
    if (f === 5 || f === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (f !== 4 && (n = n.child, n !== null)) for (Ou(n, r, l), n = n.sibling; n !== null; ) Ou(n, r, l), n = n.sibling;
  }
  var En = null, dr = !1;
  function jr(n, r, l) {
    for (l = l.child; l !== null; ) ku(n, r, l), l = l.sibling;
  }
  function ku(n, r, l) {
    if (ri && typeof ri.onCommitFiberUnmount == "function") try {
      ri.onCommitFiberUnmount(ls, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        Er || wu(l, r);
      case 6:
        var f = En, v = dr;
        En = null, jr(n, r, l), En = f, dr = v, En !== null && (dr ? (n = En, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : En.removeChild(l.stateNode));
        break;
      case 18:
        En !== null && (dr ? (n = En, l = l.stateNode, n.nodeType === 8 ? wo(n.parentNode, l) : n.nodeType === 1 && wo(n, l), ds(n)) : wo(En, l.stateNode));
        break;
      case 4:
        f = En, v = dr, En = l.stateNode.containerInfo, dr = !0, jr(n, r, l), En = f, dr = v;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Er && (f = l.updateQueue, f !== null && (f = f.lastEffect, f !== null))) {
          v = f = f.next;
          do {
            var g = v, T = g.destroy;
            g = g.tag, T !== void 0 && (g & 2 || g & 4) && $p(l, r, T), v = v.next;
          } while (v !== f);
        }
        jr(n, r, l);
        break;
      case 1:
        if (!Er && (wu(l, r), f = l.stateNode, typeof f.componentWillUnmount == "function")) try {
          f.props = l.memoizedProps, f.state = l.memoizedState, f.componentWillUnmount();
        } catch (N) {
          Nn(l, r, N);
        }
        jr(n, r, l);
        break;
      case 21:
        jr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (Er = (f = Er) || l.memoizedState !== null, jr(n, r, l), Er = f) : jr(n, r, l);
        break;
      default:
        jr(n, r, l);
    }
  }
  function Du(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Rf()), r.forEach(function(f) {
        var v = eS.bind(null, n, f);
        l.has(f) || (l.add(f), f.then(v, v));
      });
    }
  }
  function pr(n, r) {
    var l = r.deletions;
    if (l !== null) for (var f = 0; f < l.length; f++) {
      var v = l[f];
      try {
        var g = n, T = r, N = T;
        e: for (; N !== null; ) {
          switch (N.tag) {
            case 5:
              En = N.stateNode, dr = !1;
              break e;
            case 3:
              En = N.stateNode.containerInfo, dr = !0;
              break e;
            case 4:
              En = N.stateNode.containerInfo, dr = !0;
              break e;
          }
          N = N.return;
        }
        if (En === null) throw Error(c(160));
        ku(g, T, v), En = null, dr = !1;
        var j = v.alternate;
        j !== null && (j.return = null), v.return = null;
      } catch (Z) {
        Nn(v, r, Z);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Bm(r, n), r = r.sibling;
  }
  function Bm(n, r) {
    var l = n.alternate, f = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (pr(r, n), wi(n), f & 4) {
          try {
            Ru(3, n, n.return), kf(3, n);
          } catch (qe) {
            Nn(n, n.return, qe);
          }
          try {
            Ru(5, n, n.return);
          } catch (qe) {
            Nn(n, n.return, qe);
          }
        }
        break;
      case 1:
        pr(r, n), wi(n), f & 512 && l !== null && wu(l, l.return);
        break;
      case 5:
        if (pr(r, n), wi(n), f & 512 && l !== null && wu(l, l.return), n.flags & 32) {
          var v = n.stateNode;
          try {
            Pr(v, "");
          } catch (qe) {
            Nn(n, n.return, qe);
          }
        }
        if (f & 4 && (v = n.stateNode, v != null)) {
          var g = n.memoizedProps, T = l !== null ? l.memoizedProps : g, N = n.type, j = n.updateQueue;
          if (n.updateQueue = null, j !== null) try {
            N === "input" && g.type === "radio" && g.name != null && Ft(v, g), gn(N, T);
            var Z = gn(N, g);
            for (T = 0; T < j.length; T += 2) {
              var he = j[T], ge = j[T + 1];
              he === "style" ? Nt(v, ge) : he === "dangerouslySetInnerHTML" ? Xr(v, ge) : he === "children" ? Pr(v, ge) : q(v, he, ge, Z);
            }
            switch (N) {
              case "input":
                It(v, g);
                break;
              case "textarea":
                Xn(v, g);
                break;
              case "select":
                var pe = v._wrapperState.wasMultiple;
                v._wrapperState.wasMultiple = !!g.multiple;
                var $e = g.value;
                $e != null ? Ln(v, !!g.multiple, $e, !1) : pe !== !!g.multiple && (g.defaultValue != null ? Ln(
                  v,
                  !!g.multiple,
                  g.defaultValue,
                  !0
                ) : Ln(v, !!g.multiple, g.multiple ? [] : "", !1));
            }
            v[pl] = g;
          } catch (qe) {
            Nn(n, n.return, qe);
          }
        }
        break;
      case 6:
        if (pr(r, n), wi(n), f & 4) {
          if (n.stateNode === null) throw Error(c(162));
          v = n.stateNode, g = n.memoizedProps;
          try {
            v.nodeValue = g;
          } catch (qe) {
            Nn(n, n.return, qe);
          }
        }
        break;
      case 3:
        if (pr(r, n), wi(n), f & 4 && l !== null && l.memoizedState.isDehydrated) try {
          ds(r.containerInfo);
        } catch (qe) {
          Nn(n, n.return, qe);
        }
        break;
      case 4:
        pr(r, n), wi(n);
        break;
      case 13:
        pr(r, n), wi(n), v = n.child, v.flags & 8192 && (g = v.memoizedState !== null, v.stateNode.isHidden = g, !g || v.alternate !== null && v.alternate.memoizedState !== null || (Mf = Bt())), f & 4 && Du(n);
        break;
      case 22:
        if (he = l !== null && l.memoizedState !== null, n.mode & 1 ? (Er = (Z = Er) || he, pr(r, n), Er = Z) : pr(r, n), wi(n), f & 8192) {
          if (Z = n.memoizedState !== null, (n.stateNode.isHidden = Z) && !he && n.mode & 1) for (He = n, he = n.child; he !== null; ) {
            for (ge = He = he; He !== null; ) {
              switch (pe = He, $e = pe.child, pe.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ru(4, pe, pe.return);
                  break;
                case 1:
                  wu(pe, pe.return);
                  var Ye = pe.stateNode;
                  if (typeof Ye.componentWillUnmount == "function") {
                    f = pe, l = pe.return;
                    try {
                      r = f, Ye.props = r.memoizedProps, Ye.state = r.memoizedState, Ye.componentWillUnmount();
                    } catch (qe) {
                      Nn(f, l, qe);
                    }
                  }
                  break;
                case 5:
                  wu(pe, pe.return);
                  break;
                case 22:
                  if (pe.memoizedState !== null) {
                    Hm(ge);
                    continue;
                  }
              }
              $e !== null ? ($e.return = pe, He = $e) : Hm(ge);
            }
            he = he.sibling;
          }
          e: for (he = null, ge = n; ; ) {
            if (ge.tag === 5) {
              if (he === null) {
                he = ge;
                try {
                  v = ge.stateNode, Z ? (g = v.style, typeof g.setProperty == "function" ? g.setProperty("display", "none", "important") : g.display = "none") : (N = ge.stateNode, j = ge.memoizedProps.style, T = j != null && j.hasOwnProperty("display") ? j.display : null, N.style.display = Et("display", T));
                } catch (qe) {
                  Nn(n, n.return, qe);
                }
              }
            } else if (ge.tag === 6) {
              if (he === null) try {
                ge.stateNode.nodeValue = Z ? "" : ge.memoizedProps;
              } catch (qe) {
                Nn(n, n.return, qe);
              }
            } else if ((ge.tag !== 22 && ge.tag !== 23 || ge.memoizedState === null || ge === n) && ge.child !== null) {
              ge.child.return = ge, ge = ge.child;
              continue;
            }
            if (ge === n) break e;
            for (; ge.sibling === null; ) {
              if (ge.return === null || ge.return === n) break e;
              he === ge && (he = null), ge = ge.return;
            }
            he === ge && (he = null), ge.sibling.return = ge.return, ge = ge.sibling;
          }
        }
        break;
      case 19:
        pr(r, n), wi(n), f & 4 && Du(n);
        break;
      case 21:
        break;
      default:
        pr(
          r,
          n
        ), wi(n);
    }
  }
  function wi(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (jp(l)) {
              var f = l;
              break e;
            }
            l = l.return;
          }
          throw Error(c(160));
        }
        switch (f.tag) {
          case 5:
            var v = f.stateNode;
            f.flags & 32 && (Pr(v, ""), f.flags &= -33);
            var g = Fm(n);
            Ou(n, g, v);
            break;
          case 3:
          case 4:
            var T = f.stateNode.containerInfo, N = Fm(n);
            Vs(n, N, T);
            break;
          default:
            throw Error(c(161));
        }
      } catch (j) {
        Nn(n, n.return, j);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Q0(n, r, l) {
    He = n, Fp(n);
  }
  function Fp(n, r, l) {
    for (var f = (n.mode & 1) !== 0; He !== null; ) {
      var v = He, g = v.child;
      if (v.tag === 22 && f) {
        var T = v.memoizedState !== null || xu;
        if (!T) {
          var N = v.alternate, j = N !== null && N.memoizedState !== null || Er;
          N = xu;
          var Z = Er;
          if (xu = T, (Er = j) && !Z) for (He = v; He !== null; ) T = He, j = T.child, T.tag === 22 && T.memoizedState !== null ? Bp(v) : j !== null ? (j.return = T, He = j) : Bp(v);
          for (; g !== null; ) He = g, Fp(g), g = g.sibling;
          He = v, xu = N, Er = Z;
        }
        _u(n);
      } else v.subtreeFlags & 8772 && g !== null ? (g.return = v, He = g) : _u(n);
    }
  }
  function _u(n) {
    for (; He !== null; ) {
      var r = He;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Er || kf(5, r);
              break;
            case 1:
              var f = r.stateNode;
              if (r.flags & 4 && !Er) if (l === null) f.componentDidMount();
              else {
                var v = r.elementType === r.type ? l.memoizedProps : ia(r.type, l.memoizedProps);
                f.componentDidUpdate(v, l.memoizedState, f.__reactInternalSnapshotBeforeUpdate);
              }
              var g = r.updateQueue;
              g !== null && wm(r, g, f);
              break;
            case 3:
              var T = r.updateQueue;
              if (T !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                wm(r, T, l);
              }
              break;
            case 5:
              var N = r.stateNode;
              if (l === null && r.flags & 4) {
                l = N;
                var j = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    j.autoFocus && l.focus();
                    break;
                  case "img":
                    j.src && (l.src = j.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var Z = r.alternate;
                if (Z !== null) {
                  var he = Z.memoizedState;
                  if (he !== null) {
                    var ge = he.dehydrated;
                    ge !== null && ds(ge);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(c(163));
          }
          Er || r.flags & 512 && Df(r);
        } catch (pe) {
          Nn(r, r.return, pe);
        }
      }
      if (r === n) {
        He = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, He = l;
        break;
      }
      He = r.return;
    }
  }
  function Hm(n) {
    for (; He !== null; ) {
      var r = He;
      if (r === n) {
        He = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, He = l;
        break;
      }
      He = r.return;
    }
  }
  function Bp(n) {
    for (; He !== null; ) {
      var r = He;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              kf(4, r);
            } catch (j) {
              Nn(r, l, j);
            }
            break;
          case 1:
            var f = r.stateNode;
            if (typeof f.componentDidMount == "function") {
              var v = r.return;
              try {
                f.componentDidMount();
              } catch (j) {
                Nn(r, v, j);
              }
            }
            var g = r.return;
            try {
              Df(r);
            } catch (j) {
              Nn(r, g, j);
            }
            break;
          case 5:
            var T = r.return;
            try {
              Df(r);
            } catch (j) {
              Nn(r, T, j);
            }
        }
      } catch (j) {
        Nn(r, r.return, j);
      }
      if (r === n) {
        He = null;
        break;
      }
      var N = r.sibling;
      if (N !== null) {
        N.return = r.return, He = N;
        break;
      }
      He = r.return;
    }
  }
  var q0 = Math.ceil, wl = Y.ReactCurrentDispatcher, _f = Y.ReactCurrentOwner, Ha = Y.ReactCurrentBatchConfig, Ot = 0, Mn = null, pn = null, tr = 0, ua = 0, Mu = bt(0), nr = 0, Is = null, Rl = 0, Nu = 0, Hp = 0, zo = null, Ur = null, Mf = 0, Au = 1 / 0, no = null, Nf = !1, Vp = null, Va = null, Lu = !1, Ia = null, Af = 0, Ys = 0, Lf = null, Ws = -1, Ol = 0;
  function vr() {
    return Ot & 6 ? Bt() : Ws !== -1 ? Ws : Ws = Bt();
  }
  function ro(n) {
    return n.mode & 1 ? Ot & 2 && tr !== 0 ? tr & -tr : Kc.transition !== null ? (Ol === 0 && (Ol = Oc()), Ol) : (n = Gt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : qd(n.type)), n) : 1;
  }
  function Rn(n, r, l, f) {
    if (50 < Ys) throw Ys = 0, Lf = null, Error(c(185));
    il(n, l, f), (!(Ot & 2) || n !== Mn) && (n === Mn && (!(Ot & 2) && (Nu |= l), nr === 4 && Ri(n, tr)), rr(n, f), l === 1 && Ot === 0 && !(r.mode & 1) && (Au = Bt() + 500, fr && ea()));
  }
  function rr(n, r) {
    var l = n.callbackNode;
    Rc(n, r);
    var f = ai(n, n === Mn ? tr : 0);
    if (f === 0) l !== null && xn(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = f & -f, n.callbackPriority !== r) {
      if (l != null && xn(l), r === 1) n.tag === 0 ? Ep(zu.bind(null, n)) : bp(zu.bind(null, n)), yp(function() {
        !(Ot & 6) && ea();
      }), l = null;
      else {
        switch (Wd(f)) {
          case 1:
            l = ma;
            break;
          case 4:
            l = wt;
            break;
          case 16:
            l = bi;
            break;
          case 536870912:
            l = Hd;
            break;
          default:
            l = bi;
        }
        l = Xm(l, zf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function zf(n, r) {
    if (Ws = -1, Ol = 0, Ot & 6) throw Error(c(327));
    var l = n.callbackNode;
    if (Uu() && n.callbackNode !== l) return null;
    var f = ai(n, n === Mn ? tr : 0);
    if (f === 0) return null;
    if (f & 30 || f & n.expiredLanes || r) r = Pf(n, f);
    else {
      r = f;
      var v = Ot;
      Ot |= 2;
      var g = Im();
      (Mn !== n || tr !== r) && (no = null, Au = Bt() + 500, Dl(n, r));
      do
        try {
          K0();
          break;
        } catch (N) {
          Vm(n, N);
        }
      while (!0);
      Ea(), wl.current = g, Ot = v, pn !== null ? r = 0 : (Mn = null, tr = 0, r = nr);
    }
    if (r !== 0) {
      if (r === 2 && (v = Id(n), v !== 0 && (f = v, r = kl(n, v))), r === 1) throw l = Is, Dl(n, 0), Ri(n, f), rr(n, Bt()), l;
      if (r === 6) Ri(n, f);
      else {
        if (v = n.current.alternate, !(f & 30) && !Yp(v) && (r = Pf(n, f), r === 2 && (g = Id(n), g !== 0 && (f = g, r = kl(n, g))), r === 1)) throw l = Is, Dl(n, 0), Ri(n, f), rr(n, Bt()), l;
        switch (n.finishedWork = v, n.finishedLanes = f, r) {
          case 0:
          case 1:
            throw Error(c(345));
          case 2:
            Uo(n, Ur, no);
            break;
          case 3:
            if (Ri(n, f), (f & 130023424) === f && (r = Mf + 500 - Bt(), 10 < r)) {
              if (ai(n, 0) !== 0) break;
              if (v = n.suspendedLanes, (v & f) !== f) {
                vr(), n.pingedLanes |= n.suspendedLanes & v;
                break;
              }
              n.timeoutHandle = dl(Uo.bind(null, n, Ur, no), r);
              break;
            }
            Uo(n, Ur, no);
            break;
          case 4:
            if (Ri(n, f), (f & 4194240) === f) break;
            for (r = n.eventTimes, v = -1; 0 < f; ) {
              var T = 31 - Da(f);
              g = 1 << T, T = r[T], T > v && (v = T), f &= ~g;
            }
            if (f = v, f = Bt() - f, f = (120 > f ? 120 : 480 > f ? 480 : 1080 > f ? 1080 : 1920 > f ? 1920 : 3e3 > f ? 3e3 : 4320 > f ? 4320 : 1960 * q0(f / 1960)) - f, 10 < f) {
              n.timeoutHandle = dl(Uo.bind(null, n, Ur, no), f);
              break;
            }
            Uo(n, Ur, no);
            break;
          case 5:
            Uo(n, Ur, no);
            break;
          default:
            throw Error(c(329));
        }
      }
    }
    return rr(n, Bt()), n.callbackNode === l ? zf.bind(null, n) : null;
  }
  function kl(n, r) {
    var l = zo;
    return n.current.memoizedState.isDehydrated && (Dl(n, r).flags |= 256), n = Pf(n, r), n !== 2 && (r = Ur, Ur = l, r !== null && Ip(r)), n;
  }
  function Ip(n) {
    Ur === null ? Ur = n : Ur.push.apply(Ur, n);
  }
  function Yp(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var f = 0; f < l.length; f++) {
          var v = l[f], g = v.getSnapshot;
          v = v.value;
          try {
            if (!Na(g(), v)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Ri(n, r) {
    for (r &= ~Hp, r &= ~Nu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Da(r), f = 1 << l;
      n[l] = -1, r &= ~f;
    }
  }
  function zu(n) {
    if (Ot & 6) throw Error(c(327));
    Uu();
    var r = ai(n, 0);
    if (!(r & 1)) return rr(n, Bt()), null;
    var l = Pf(n, r);
    if (n.tag !== 0 && l === 2) {
      var f = Id(n);
      f !== 0 && (r = f, l = kl(n, f));
    }
    if (l === 1) throw l = Is, Dl(n, 0), Ri(n, r), rr(n, Bt()), l;
    if (l === 6) throw Error(c(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Uo(n, Ur, no), rr(n, Bt()), null;
  }
  function Wp(n, r) {
    var l = Ot;
    Ot |= 1;
    try {
      return n(r);
    } finally {
      Ot = l, Ot === 0 && (Au = Bt() + 500, fr && ea());
    }
  }
  function Oi(n) {
    Ia !== null && Ia.tag === 0 && !(Ot & 6) && Uu();
    var r = Ot;
    Ot |= 1;
    var l = Ha.transition, f = Gt;
    try {
      if (Ha.transition = null, Gt = 1, n) return n();
    } finally {
      Gt = f, Ha.transition = l, Ot = r, !(Ot & 6) && ea();
    }
  }
  function Uf() {
    ua = Mu.current, jt(Mu);
  }
  function Dl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, mm(l)), pn !== null) for (l = pn.return; l !== null; ) {
      var f = l;
      switch (Tp(f), f.tag) {
        case 1:
          f = f.type.childContextTypes, f != null && za();
          break;
        case 3:
          pu(), jt(Dn), jt(pt), _p();
          break;
        case 5:
          Dp(f);
          break;
        case 4:
          pu();
          break;
        case 13:
          jt(bn);
          break;
        case 19:
          jt(bn);
          break;
        case 10:
          Rp(f.type._context);
          break;
        case 22:
        case 23:
          Uf();
      }
      l = l.return;
    }
    if (Mn = n, pn = n = Po(n.current, null), tr = ua = r, nr = 0, Is = null, Hp = Nu = Rl = 0, Ur = zo = null, ml !== null) {
      for (r = 0; r < ml.length; r++) if (l = ml[r], f = l.interleaved, f !== null) {
        l.interleaved = null;
        var v = f.next, g = l.pending;
        if (g !== null) {
          var T = g.next;
          g.next = v, f.next = T;
        }
        l.pending = f;
      }
      ml = null;
    }
    return n;
  }
  function Vm(n, r) {
    do {
      var l = pn;
      try {
        if (Ea(), af.current = Lr, Ca) {
          for (var f = tt.memoizedState; f !== null; ) {
            var v = f.queue;
            v !== null && (v.pending = null), f = f.next;
          }
          Ca = !1;
        }
        if (Je = 0, Rt = vt = tt = null, vu = !1, Ls = 0, _f.current = null, l === null || l.return === null) {
          nr = 1, Is = r, pn = null;
          break;
        }
        e: {
          var g = n, T = l.return, N = l, j = r;
          if (r = tr, N.flags |= 32768, j !== null && typeof j == "object" && typeof j.then == "function") {
            var Z = j, he = N, ge = he.tag;
            if (!(he.mode & 1) && (ge === 0 || ge === 11 || ge === 15)) {
              var pe = he.alternate;
              pe ? (he.updateQueue = pe.updateQueue, he.memoizedState = pe.memoizedState, he.lanes = pe.lanes) : (he.updateQueue = null, he.memoizedState = null);
            }
            var $e = Lm(T);
            if ($e !== null) {
              $e.flags &= -257, zp($e, T, N, g, r), $e.mode & 1 && js(g, Z, r), r = $e, j = Z;
              var Ye = r.updateQueue;
              if (Ye === null) {
                var qe = /* @__PURE__ */ new Set();
                qe.add(j), r.updateQueue = qe;
              } else Ye.add(j);
              break e;
            } else {
              if (!(r & 1)) {
                js(g, Z, r), Gs();
                break e;
              }
              j = Error(c(426));
            }
          } else if (dn && N.mode & 1) {
            var $n = Lm(T);
            if ($n !== null) {
              !($n.flags & 65536) && ($n.flags |= 256), zp($n, T, N, g, r), wp(Ao(j, N));
              break e;
            }
          }
          g = j = Ao(j, N), nr !== 4 && (nr = 2), zo === null ? zo = [g] : zo.push(g), g = T;
          do {
            switch (g.tag) {
              case 3:
                g.flags |= 65536, r &= -r, g.lanes |= r;
                var W = Nm(g, j, r);
                xm(g, W);
                break e;
              case 1:
                N = j;
                var H = g.type, X = g.stateNode;
                if (!(g.flags & 128) && (typeof H.getDerivedStateFromError == "function" || X !== null && typeof X.componentDidCatch == "function" && (Va === null || !Va.has(X)))) {
                  g.flags |= 65536, r &= -r, g.lanes |= r;
                  var Te = Am(g, N, r);
                  xm(g, Te);
                  break e;
                }
            }
            g = g.return;
          } while (g !== null);
        }
        Wm(l);
      } catch (et) {
        r = et, pn === l && l !== null && (pn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Im() {
    var n = wl.current;
    return wl.current = Lr, n === null ? Lr : n;
  }
  function Gs() {
    (nr === 0 || nr === 3 || nr === 2) && (nr = 4), Mn === null || !(Rl & 268435455) && !(Nu & 268435455) || Ri(Mn, tr);
  }
  function Pf(n, r) {
    var l = Ot;
    Ot |= 2;
    var f = Im();
    (Mn !== n || tr !== r) && (no = null, Dl(n, r));
    do
      try {
        X0();
        break;
      } catch (v) {
        Vm(n, v);
      }
    while (!0);
    if (Ea(), Ot = l, wl.current = f, pn !== null) throw Error(c(261));
    return Mn = null, tr = 0, nr;
  }
  function X0() {
    for (; pn !== null; ) Ym(pn);
  }
  function K0() {
    for (; pn !== null && !Kr(); ) Ym(pn);
  }
  function Ym(n) {
    var r = qm(n.alternate, n, ua);
    n.memoizedProps = n.pendingProps, r === null ? Wm(n) : pn = r, _f.current = null;
  }
  function Wm(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = W0(l, r), l !== null) {
          l.flags &= 32767, pn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          nr = 6, pn = null;
          return;
        }
      } else if (l = Y0(l, r, ua), l !== null) {
        pn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        pn = r;
        return;
      }
      pn = r = n;
    } while (r !== null);
    nr === 0 && (nr = 5);
  }
  function Uo(n, r, l) {
    var f = Gt, v = Ha.transition;
    try {
      Ha.transition = null, Gt = 1, Z0(n, r, l, f);
    } finally {
      Ha.transition = v, Gt = f;
    }
    return null;
  }
  function Z0(n, r, l, f) {
    do
      Uu();
    while (Ia !== null);
    if (Ot & 6) throw Error(c(327));
    l = n.finishedWork;
    var v = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(c(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var g = l.lanes | l.childLanes;
    if (T0(n, g), n === Mn && (pn = Mn = null, tr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Lu || (Lu = !0, Xm(bi, function() {
      return Uu(), null;
    })), g = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || g) {
      g = Ha.transition, Ha.transition = null;
      var T = Gt;
      Gt = 1;
      var N = Ot;
      Ot |= 4, _f.current = null, G0(n, l), Bm(l, n), Fc(fl), ol = !!hp, fl = hp = null, n.current = l, Q0(l), bo(), Ot = N, Gt = T, Ha.transition = g;
    } else n.current = l;
    if (Lu && (Lu = !1, Ia = n, Af = v), g = n.pendingLanes, g === 0 && (Va = null), _h(l.stateNode), rr(n, Bt()), r !== null) for (f = n.onRecoverableError, l = 0; l < r.length; l++) v = r[l], f(v.value, { componentStack: v.stack, digest: v.digest });
    if (Nf) throw Nf = !1, n = Vp, Vp = null, n;
    return Af & 1 && n.tag !== 0 && Uu(), g = n.pendingLanes, g & 1 ? n === Lf ? Ys++ : (Ys = 0, Lf = n) : Ys = 0, ea(), null;
  }
  function Uu() {
    if (Ia !== null) {
      var n = Wd(Af), r = Ha.transition, l = Gt;
      try {
        if (Ha.transition = null, Gt = 16 > n ? 16 : n, Ia === null) var f = !1;
        else {
          if (n = Ia, Ia = null, Af = 0, Ot & 6) throw Error(c(331));
          var v = Ot;
          for (Ot |= 4, He = n.current; He !== null; ) {
            var g = He, T = g.child;
            if (He.flags & 16) {
              var N = g.deletions;
              if (N !== null) {
                for (var j = 0; j < N.length; j++) {
                  var Z = N[j];
                  for (He = Z; He !== null; ) {
                    var he = He;
                    switch (he.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ru(8, he, g);
                    }
                    var ge = he.child;
                    if (ge !== null) ge.return = he, He = ge;
                    else for (; He !== null; ) {
                      he = He;
                      var pe = he.sibling, $e = he.return;
                      if (jm(he), he === Z) {
                        He = null;
                        break;
                      }
                      if (pe !== null) {
                        pe.return = $e, He = pe;
                        break;
                      }
                      He = $e;
                    }
                  }
                }
                var Ye = g.alternate;
                if (Ye !== null) {
                  var qe = Ye.child;
                  if (qe !== null) {
                    Ye.child = null;
                    do {
                      var $n = qe.sibling;
                      qe.sibling = null, qe = $n;
                    } while (qe !== null);
                  }
                }
                He = g;
              }
            }
            if (g.subtreeFlags & 2064 && T !== null) T.return = g, He = T;
            else e: for (; He !== null; ) {
              if (g = He, g.flags & 2048) switch (g.tag) {
                case 0:
                case 11:
                case 15:
                  Ru(9, g, g.return);
              }
              var W = g.sibling;
              if (W !== null) {
                W.return = g.return, He = W;
                break e;
              }
              He = g.return;
            }
          }
          var H = n.current;
          for (He = H; He !== null; ) {
            T = He;
            var X = T.child;
            if (T.subtreeFlags & 2064 && X !== null) X.return = T, He = X;
            else e: for (T = H; He !== null; ) {
              if (N = He, N.flags & 2048) try {
                switch (N.tag) {
                  case 0:
                  case 11:
                  case 15:
                    kf(9, N);
                }
              } catch (et) {
                Nn(N, N.return, et);
              }
              if (N === T) {
                He = null;
                break e;
              }
              var Te = N.sibling;
              if (Te !== null) {
                Te.return = N.return, He = Te;
                break e;
              }
              He = N.return;
            }
          }
          if (Ot = v, ea(), ri && typeof ri.onPostCommitFiberRoot == "function") try {
            ri.onPostCommitFiberRoot(ls, n);
          } catch {
          }
          f = !0;
        }
        return f;
      } finally {
        Gt = l, Ha.transition = r;
      }
    }
    return !1;
  }
  function Gm(n, r, l) {
    r = Ao(l, r), r = Nm(n, r, 1), n = Mo(n, r, 1), r = vr(), n !== null && (il(n, 1, r), rr(n, r));
  }
  function Nn(n, r, l) {
    if (n.tag === 3) Gm(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        Gm(r, n, l);
        break;
      } else if (r.tag === 1) {
        var f = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof f.componentDidCatch == "function" && (Va === null || !Va.has(f))) {
          n = Ao(l, n), n = Am(r, n, 1), r = Mo(r, n, 1), n = vr(), r !== null && (il(r, 1, n), rr(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function J0(n, r, l) {
    var f = n.pingCache;
    f !== null && f.delete(r), r = vr(), n.pingedLanes |= n.suspendedLanes & l, Mn === n && (tr & l) === l && (nr === 4 || nr === 3 && (tr & 130023424) === tr && 500 > Bt() - Mf ? Dl(n, 0) : Hp |= l), rr(n, r);
  }
  function Qm(n, r) {
    r === 0 && (n.mode & 1 ? (r = Xl, Xl <<= 1, !(Xl & 130023424) && (Xl = 4194304)) : r = 1);
    var l = vr();
    n = Ji(n, r), n !== null && (il(n, r, l), rr(n, l));
  }
  function Gp(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), Qm(n, l);
  }
  function eS(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var f = n.stateNode, v = n.memoizedState;
        v !== null && (l = v.retryLane);
        break;
      case 19:
        f = n.stateNode;
        break;
      default:
        throw Error(c(314));
    }
    f !== null && f.delete(r), Qm(n, l);
  }
  var qm;
  qm = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Dn.current) oa = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return oa = !1, to(n, r, l);
      oa = !!(n.flags & 131072);
    }
    else oa = !1, dn && r.flags & 1048576 && Cp(r, uu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var f = r.type;
        Hs(n, r), n = r.pendingProps;
        var v = La(r, pt.current);
        cu(r, l), v = de(null, r, f, n, v, l);
        var g = In();
        return r.flags |= 1, typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Sn(f) ? (g = !0, Wc(r)) : g = !1, r.memoizedState = v.state !== null && v.state !== void 0 ? v.state : null, Jc(r), v.updater = Cl, r.stateNode = v, v._reactInternals = r, Ap(r, f, n, l), r = Cf(null, r, f, !0, g, l)) : (r.tag = 0, dn && g && Gc(r), Un(null, r, v, l), r = r.child), r;
      case 16:
        f = r.elementType;
        e: {
          switch (Hs(n, r), n = r.pendingProps, v = f._init, f = v(f._payload), r.type = f, v = r.tag = tS(f), n = ia(f, n), v) {
            case 0:
              r = St(null, r, f, n, l);
              break e;
            case 1:
              r = Fs(null, r, f, n, l);
              break e;
            case 11:
              r = Eu(null, r, f, n, l);
              break e;
            case 14:
              r = Lo(null, r, f, ia(f.type, n), l);
              break e;
          }
          throw Error(c(
            306,
            f,
            ""
          ));
        }
        return r;
      case 0:
        return f = r.type, v = r.pendingProps, v = r.elementType === f ? v : ia(f, v), St(n, r, f, v, l);
      case 1:
        return f = r.type, v = r.pendingProps, v = r.elementType === f ? v : ia(f, v), Fs(n, r, f, v, l);
      case 3:
        e: {
          if (I0(r), n === null) throw Error(c(387));
          f = r.pendingProps, g = r.memoizedState, v = g.element, fu(n, r), tf(r, f, null, l);
          var T = r.memoizedState;
          if (f = T.element, g.isDehydrated) if (g = { element: f, isDehydrated: !1, cache: T.cache, pendingSuspenseBoundaries: T.pendingSuspenseBoundaries, transitions: T.transitions }, r.updateQueue.baseState = g, r.memoizedState = g, r.flags & 256) {
            v = Ao(Error(c(423)), r), r = Um(n, r, f, l, v);
            break e;
          } else if (f !== v) {
            v = Ao(Error(c(424)), r), r = Um(n, r, f, l, v);
            break e;
          } else for (ra = ui(r.stateNode.containerInfo.firstChild), ba = r, dn = !0, Pa = null, l = Cm(r, null, f, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (wn(), f === v) {
              r = Pn(n, r, l);
              break e;
            }
            Un(n, r, f, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Rm(r), n === null && qc(r), f = r.type, v = r.pendingProps, g = n !== null ? n.memoizedProps : null, T = v.children, Rs(f, v) ? T = null : g !== null && Rs(f, g) && (r.flags |= 32), Tl(n, r), Un(n, r, T, l), r.child;
      case 6:
        return n === null && qc(r), null;
      case 13:
        return Pm(n, r, l);
      case 4:
        return kp(r, r.stateNode.containerInfo), f = r.pendingProps, n === null ? r.child = su(r, null, f, l) : Un(n, r, f, l), r.child;
      case 11:
        return f = r.type, v = r.pendingProps, v = r.elementType === f ? v : ia(f, v), Eu(n, r, f, v, l);
      case 7:
        return Un(n, r, r.pendingProps, l), r.child;
      case 8:
        return Un(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Un(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (f = r.type._context, v = r.pendingProps, g = r.memoizedProps, T = v.value, Ht(Zi, f._currentValue), f._currentValue = T, g !== null) if (Na(g.value, T)) {
            if (g.children === v.children && !Dn.current) {
              r = Pn(n, r, l);
              break e;
            }
          } else for (g = r.child, g !== null && (g.return = r); g !== null; ) {
            var N = g.dependencies;
            if (N !== null) {
              T = g.child;
              for (var j = N.firstContext; j !== null; ) {
                if (j.context === f) {
                  if (g.tag === 1) {
                    j = aa(-1, l & -l), j.tag = 2;
                    var Z = g.updateQueue;
                    if (Z !== null) {
                      Z = Z.shared;
                      var he = Z.pending;
                      he === null ? j.next = j : (j.next = he.next, he.next = j), Z.pending = j;
                    }
                  }
                  g.lanes |= l, j = g.alternate, j !== null && (j.lanes |= l), Op(
                    g.return,
                    l,
                    r
                  ), N.lanes |= l;
                  break;
                }
                j = j.next;
              }
            } else if (g.tag === 10) T = g.type === r.type ? null : g.child;
            else if (g.tag === 18) {
              if (T = g.return, T === null) throw Error(c(341));
              T.lanes |= l, N = T.alternate, N !== null && (N.lanes |= l), Op(T, l, r), T = g.sibling;
            } else T = g.child;
            if (T !== null) T.return = g;
            else for (T = g; T !== null; ) {
              if (T === r) {
                T = null;
                break;
              }
              if (g = T.sibling, g !== null) {
                g.return = T.return, T = g;
                break;
              }
              T = T.return;
            }
            g = T;
          }
          Un(n, r, v.children, l), r = r.child;
        }
        return r;
      case 9:
        return v = r.type, f = r.pendingProps.children, cu(r, l), v = ja(v), f = f(v), r.flags |= 1, Un(n, r, f, l), r.child;
      case 14:
        return f = r.type, v = ia(f, r.pendingProps), v = ia(f.type, v), Lo(n, r, f, v, l);
      case 15:
        return Ef(n, r, r.type, r.pendingProps, l);
      case 17:
        return f = r.type, v = r.pendingProps, v = r.elementType === f ? v : ia(f, v), Hs(n, r), r.tag = 1, Sn(f) ? (n = !0, Wc(r)) : n = !1, cu(r, l), Dm(r, f, v), Ap(r, f, v, l), Cf(null, r, f, !0, n, l);
      case 19:
        return Pp(n, r, l);
      case 22:
        return la(n, r, l);
    }
    throw Error(c(156, r.tag));
  };
  function Xm(n, r) {
    return cn(n, r);
  }
  function Km(n, r, l, f) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = f, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ya(n, r, l, f) {
    return new Km(n, r, l, f);
  }
  function Qp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function tS(n) {
    if (typeof n == "function") return Qp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === be) return 11;
      if (n === Le) return 14;
    }
    return 2;
  }
  function Po(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ya(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function $f(n, r, l, f, v, g) {
    var T = 2;
    if (f = n, typeof n == "function") Qp(n) && (T = 1);
    else if (typeof n == "string") T = 5;
    else e: switch (n) {
      case te:
        return _l(l.children, v, g, r);
      case Ae:
        T = 8, v |= 8;
        break;
      case Oe:
        return n = Ya(12, l, r, v | 2), n.elementType = Oe, n.lanes = g, n;
      case ue:
        return n = Ya(13, l, r, v), n.elementType = ue, n.lanes = g, n;
      case xe:
        return n = Ya(19, l, r, v), n.elementType = xe, n.lanes = g, n;
      case Fe:
        return jf(l, v, g, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case O:
            T = 10;
            break e;
          case ne:
            T = 9;
            break e;
          case be:
            T = 11;
            break e;
          case Le:
            T = 14;
            break e;
          case we:
            T = 16, f = null;
            break e;
        }
        throw Error(c(130, n == null ? n : typeof n, ""));
    }
    return r = Ya(T, l, r, v), r.elementType = n, r.type = f, r.lanes = g, r;
  }
  function _l(n, r, l, f) {
    return n = Ya(7, n, f, r), n.lanes = l, n;
  }
  function jf(n, r, l, f) {
    return n = Ya(22, n, f, r), n.elementType = Fe, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Ff(n, r, l) {
    return n = Ya(6, n, null, r), n.lanes = l, n;
  }
  function Qs(n, r, l) {
    return r = Ya(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function qs(n, r, l, f, v) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Yd(0), this.expirationTimes = Yd(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Yd(0), this.identifierPrefix = f, this.onRecoverableError = v, this.mutableSourceEagerHydrationData = null;
  }
  function qp(n, r, l, f, v, g, T, N, j) {
    return n = new qs(n, r, l, N, j), r === 1 ? (r = 1, g === !0 && (r |= 8)) : r = 0, g = Ya(3, null, null, r), n.current = g, g.stateNode = n, g.memoizedState = { element: f, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Jc(g), n;
  }
  function Zm(n, r, l) {
    var f = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: re, key: f == null ? null : "" + f, children: n, containerInfo: r, implementation: l };
  }
  function Xp(n) {
    if (!n) return Ci;
    n = n._reactInternals;
    e: {
      if (rt(n) !== n || n.tag !== 1) throw Error(c(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Sn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(c(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Sn(l)) return Ds(n, l, r);
    }
    return r;
  }
  function Kp(n, r, l, f, v, g, T, N, j) {
    return n = qp(l, f, !0, n, v, g, T, N, j), n.context = Xp(null), l = n.current, f = vr(), v = ro(l), g = aa(f, v), g.callback = r ?? null, Mo(l, g, v), n.current.lanes = v, il(n, v, f), rr(n, f), n;
  }
  function Bf(n, r, l, f) {
    var v = r.current, g = vr(), T = ro(v);
    return l = Xp(l), r.context === null ? r.context = l : r.pendingContext = l, r = aa(g, T), r.payload = { element: n }, f = f === void 0 ? null : f, f !== null && (r.callback = f), n = Mo(v, r, T), n !== null && (Rn(n, v, T, g), ef(n, v, T)), T;
  }
  function Xs(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Jm(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Zp(n, r) {
    Jm(n, r), (n = n.alternate) && Jm(n, r);
  }
  function nS() {
    return null;
  }
  var Jp = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Hf(n) {
    this._internalRoot = n;
  }
  Ks.prototype.render = Hf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(c(409));
    Bf(n, r, null, null);
  }, Ks.prototype.unmount = Hf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Oi(function() {
        Bf(null, n, null, null);
      }), r[Xi] = null;
    }
  };
  function Ks(n) {
    this._internalRoot = n;
  }
  Ks.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Lh();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Jt.length && r !== 0 && r < Jt[l].priority; l++) ;
      Jt.splice(l, 0, n), l === 0 && zh(n);
    }
  };
  function $o(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Vf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function ey() {
  }
  function rS(n, r, l, f, v) {
    if (v) {
      if (typeof f == "function") {
        var g = f;
        f = function() {
          var Z = Xs(T);
          g.call(Z);
        };
      }
      var T = Kp(r, f, n, 0, null, !1, !1, "", ey);
      return n._reactRootContainer = T, n[Xi] = T.current, ou(n.nodeType === 8 ? n.parentNode : n), Oi(), T;
    }
    for (; v = n.lastChild; ) n.removeChild(v);
    if (typeof f == "function") {
      var N = f;
      f = function() {
        var Z = Xs(j);
        N.call(Z);
      };
    }
    var j = qp(n, 0, !1, null, null, !1, !1, "", ey);
    return n._reactRootContainer = j, n[Xi] = j.current, ou(n.nodeType === 8 ? n.parentNode : n), Oi(function() {
      Bf(r, j, l, f);
    }), j;
  }
  function If(n, r, l, f, v) {
    var g = l._reactRootContainer;
    if (g) {
      var T = g;
      if (typeof v == "function") {
        var N = v;
        v = function() {
          var j = Xs(T);
          N.call(j);
        };
      }
      Bf(r, T, n, v);
    } else T = rS(l, r, n, v, f);
    return Xs(T);
  }
  Ah = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = al(r.pendingLanes);
          l !== 0 && (us(r, l | 1), rr(r, Bt()), !(Ot & 6) && (Au = Bt() + 500, ea()));
        }
        break;
      case 13:
        Oi(function() {
          var f = Ji(n, 1);
          if (f !== null) {
            var v = vr();
            Rn(f, n, 1, v);
          }
        }), Zp(n, 1);
    }
  }, kc = function(n) {
    if (n.tag === 13) {
      var r = Ji(n, 134217728);
      if (r !== null) {
        var l = vr();
        Rn(r, n, 134217728, l);
      }
      Zp(n, 134217728);
    }
  }, Qt = function(n) {
    if (n.tag === 13) {
      var r = ro(n), l = Ji(n, r);
      if (l !== null) {
        var f = vr();
        Rn(l, n, r, f);
      }
      Zp(n, r);
    }
  }, Lh = function() {
    return Gt;
  }, Gd = function(n, r) {
    var l = Gt;
    try {
      return Gt = n, r();
    } finally {
      Gt = l;
    }
  }, $r = function(n, r, l) {
    switch (r) {
      case "input":
        if (It(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var f = l[r];
            if (f !== n && f.form === n.form) {
              var v = ot(f);
              if (!v) throw Error(c(90));
              ye(f), It(f, v);
            }
          }
        }
        break;
      case "textarea":
        Xn(n, l);
        break;
      case "select":
        r = l.value, r != null && Ln(n, !!l.multiple, r, !1);
    }
  }, go = Wp, mt = Oi;
  var aS = { usingClientEntryPoint: !1, Events: [ks, lu, ot, gi, Hi, Wp] }, Zs = { findFiberByHostInstance: Aa, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, ty = { bundleType: Zs.bundleType, version: Zs.version, rendererPackageName: Zs.rendererPackageName, rendererConfig: Zs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Y.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = xt(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Zs.findFiberByHostInstance || nS, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Yf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Yf.isDisabled && Yf.supportsFiber) try {
      ls = Yf.inject(ty), ri = Yf;
    } catch {
    }
  }
  return Ka.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = aS, Ka.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!$o(r)) throw Error(c(200));
    return Zm(n, r, null, l);
  }, Ka.createRoot = function(n, r) {
    if (!$o(n)) throw Error(c(299));
    var l = !1, f = "", v = Jp;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (f = r.identifierPrefix), r.onRecoverableError !== void 0 && (v = r.onRecoverableError)), r = qp(n, 1, !1, null, null, l, !1, f, v), n[Xi] = r.current, ou(n.nodeType === 8 ? n.parentNode : n), new Hf(r);
  }, Ka.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(c(188)) : (n = Object.keys(n).join(","), Error(c(268, n)));
    return n = xt(r), n = n === null ? null : n.stateNode, n;
  }, Ka.flushSync = function(n) {
    return Oi(n);
  }, Ka.hydrate = function(n, r, l) {
    if (!Vf(r)) throw Error(c(200));
    return If(null, n, r, !0, l);
  }, Ka.hydrateRoot = function(n, r, l) {
    if (!$o(n)) throw Error(c(405));
    var f = l != null && l.hydratedSources || null, v = !1, g = "", T = Jp;
    if (l != null && (l.unstable_strictMode === !0 && (v = !0), l.identifierPrefix !== void 0 && (g = l.identifierPrefix), l.onRecoverableError !== void 0 && (T = l.onRecoverableError)), r = Kp(r, null, n, 1, l ?? null, v, !1, g, T), n[Xi] = r.current, ou(n), f) for (n = 0; n < f.length; n++) l = f[n], v = l._getVersion, v = v(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, v] : r.mutableSourceEagerHydrationData.push(
      l,
      v
    );
    return new Ks(r);
  }, Ka.render = function(n, r, l) {
    if (!Vf(r)) throw Error(c(200));
    return If(null, n, r, !1, l);
  }, Ka.unmountComponentAtNode = function(n) {
    if (!Vf(n)) throw Error(c(40));
    return n._reactRootContainer ? (Oi(function() {
      If(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Xi] = null;
      });
    }), !0) : !1;
  }, Ka.unstable_batchedUpdates = Wp, Ka.unstable_renderSubtreeIntoContainer = function(n, r, l, f) {
    if (!Vf(l)) throw Error(c(200));
    if (n == null || n._reactInternals === void 0) throw Error(c(38));
    return If(n, r, l, !1, f);
  }, Ka.version = "18.3.1-next-f1338f8080-20240426", Ka;
}
var Za = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var DR;
function M3() {
  return DR || (DR = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var i = vi, s = OO(), c = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, p = !1;
    function h(e) {
      p = e;
    }
    function S(e) {
      if (!p) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          a[o - 1] = arguments[o];
        C("warn", e, a);
      }
    }
    function y(e) {
      if (!p) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          a[o - 1] = arguments[o];
        C("error", e, a);
      }
    }
    function C(e, t, a) {
      {
        var o = c.ReactDebugCurrentFrame, u = o.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var d = a.map(function(m) {
          return String(m);
        });
        d.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var x = 0, k = 1, _ = 2, M = 3, A = 4, $ = 5, B = 6, L = 7, P = 8, ee = 9, le = 10, q = 11, Y = 12, U = 13, re = 14, te = 15, Ae = 16, Oe = 17, O = 18, ne = 19, be = 21, ue = 22, xe = 23, Le = 24, we = 25, Fe = !0, se = !1, Ee = !1, I = !1, fe = !1, Re = !0, Ie = !1, De = !0, Ze = !0, Pe = !0, Qe = !0, Ve = /* @__PURE__ */ new Set(), it = {}, st = {};
    function Ct(e, t) {
      ye(e, t), ye(e + "Capture", t);
    }
    function ye(e, t) {
      it[e] && y("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), it[e] = t;
      {
        var a = e.toLowerCase();
        st[a] = e, e === "onDoubleClick" && (st.ondblclick = e);
      }
      for (var o = 0; o < t.length; o++)
        Ve.add(t[o]);
    }
    var Tt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ke = Object.prototype.hasOwnProperty;
    function Mt(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Ft(e) {
      try {
        return It(e), !1;
      } catch {
        return !0;
      }
    }
    function It(e) {
      return "" + e;
    }
    function yn(e, t) {
      if (Ft(e))
        return y("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Mt(e)), It(e);
    }
    function Tn(e) {
      if (Ft(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Mt(e)), It(e);
    }
    function kn(e, t) {
      if (Ft(e))
        return y("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Mt(e)), It(e);
    }
    function Ln(e, t) {
      if (Ft(e))
        return y("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Mt(e)), It(e);
    }
    function qn(e) {
      if (Ft(e))
        return y("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Mt(e)), It(e);
    }
    function Xe(e) {
      if (Ft(e))
        return y("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Mt(e)), It(e);
    }
    var Xn = 0, Fn = 1, Kn = 2, Kt = 3, lr = 4, Xr = 5, Pr = 6, Ce = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ke = Ce + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Et = new RegExp("^[" + Ce + "][" + Ke + "]*$"), Nt = {}, ln = {};
    function zn(e) {
      return ke.call(ln, e) ? !0 : ke.call(Nt, e) ? !1 : Et.test(e) ? (ln[e] = !0, !0) : (Nt[e] = !0, y("Invalid attribute name: `%s`", e), !1);
    }
    function gn(e, t, a) {
      return t !== null ? t.type === Xn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function gr(e, t, a, o) {
      if (a !== null && a.type === Xn)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (o)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Yt(e, t, a, o) {
      if (t === null || typeof t > "u" || gr(e, t, a, o))
        return !0;
      if (o)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Kt:
            return !t;
          case lr:
            return t === !1;
          case Xr:
            return isNaN(t);
          case Pr:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function $r(e) {
      return Zt.hasOwnProperty(e) ? Zt[e] : null;
    }
    function Wt(e, t, a, o, u, d, m) {
      this.acceptsBooleans = t === Kn || t === Kt || t === lr, this.attributeName = o, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = d, this.removeEmptyString = m;
    }
    var Zt = {}, yo = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    yo.forEach(function(e) {
      Zt[e] = new Wt(
        e,
        Xn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Zt[t] = new Wt(
        t,
        Fn,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Zt[e] = new Wt(
        e,
        Kn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Zt[e] = new Wt(
        e,
        Kn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Zt[e] = new Wt(
        e,
        Kt,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Zt[e] = new Wt(
        e,
        Kt,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Zt[e] = new Wt(
        e,
        lr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Zt[e] = new Wt(
        e,
        Pr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Zt[e] = new Wt(
        e,
        Xr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var gi = /[\-\:]([a-z])/g, Hi = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(gi, Hi);
      Zt[t] = new Wt(
        t,
        Fn,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(gi, Hi);
      Zt[t] = new Wt(
        t,
        Fn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(gi, Hi);
      Zt[t] = new Wt(
        t,
        Fn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Zt[e] = new Wt(
        e,
        Fn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var go = "xlinkHref";
    Zt[go] = new Wt(
      "xlinkHref",
      Fn,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Zt[e] = new Wt(
        e,
        Fn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var mt = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Zn = !1;
    function Ql(e) {
      !Zn && mt.test(e) && (Zn = !0, y("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function nl(e, t, a, o) {
      if (o.mustUseProperty) {
        var u = o.propertyName;
        return e[u];
      } else {
        yn(a, t), o.sanitizeURL && Ql("" + a);
        var d = o.attributeName, m = null;
        if (o.type === lr) {
          if (e.hasAttribute(d)) {
            var b = e.getAttribute(d);
            return b === "" ? !0 : Yt(t, a, o, !1) ? b : b === "" + a ? a : b;
          }
        } else if (e.hasAttribute(d)) {
          if (Yt(t, a, o, !1))
            return e.getAttribute(d);
          if (o.type === Kt)
            return a;
          m = e.getAttribute(d);
        }
        return Yt(t, a, o, !1) ? m === null ? a : m : m === "" + a ? a : m;
      }
    }
    function ql(e, t, a, o) {
      {
        if (!zn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return yn(a, t), u === "" + a ? a : u;
      }
    }
    function Si(e, t, a, o) {
      var u = $r(t);
      if (!gn(t, u, o)) {
        if (Yt(t, a, u, o) && (a = null), o || u === null) {
          if (zn(t)) {
            var d = t;
            a === null ? e.removeAttribute(d) : (yn(a, t), e.setAttribute(d, "" + a));
          }
          return;
        }
        var m = u.mustUseProperty;
        if (m) {
          var b = u.propertyName;
          if (a === null) {
            var E = u.type;
            e[b] = E === Kt ? !1 : "";
          } else
            e[b] = a;
          return;
        }
        var R = u.attributeName, D = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(R);
        else {
          var V = u.type, F;
          V === Kt || V === lr && a === !0 ? F = "" : (yn(a, R), F = "" + a, u.sanitizeURL && Ql(F.toString())), D ? e.setAttributeNS(D, R, F) : e.setAttribute(R, F);
        }
      }
    }
    var Vi = Symbol.for("react.element"), ha = Symbol.for("react.portal"), ni = Symbol.for("react.fragment"), So = Symbol.for("react.strict_mode"), rl = Symbol.for("react.profiler"), z = Symbol.for("react.provider"), me = Symbol.for("react.context"), _e = Symbol.for("react.forward_ref"), rt = Symbol.for("react.suspense"), _t = Symbol.for("react.suspense_list"), zt = Symbol.for("react.memo"), ft = Symbol.for("react.lazy"), xt = Symbol.for("react.scope"), ur = Symbol.for("react.debug_trace_mode"), cn = Symbol.for("react.offscreen"), xn = Symbol.for("react.legacy_hidden"), Kr = Symbol.for("react.cache"), bo = Symbol.for("react.tracing_marker"), Bt = Symbol.iterator, _r = "@@iterator";
    function ma(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Bt && e[Bt] || e[_r];
      return typeof t == "function" ? t : null;
    }
    var wt = Object.assign, bi = 0, Dh, Hd, ls, ri, _h, Da, Mh;
    function Nh() {
    }
    Nh.__reactDisabledLog = !0;
    function C0() {
      {
        if (bi === 0) {
          Dh = console.log, Hd = console.info, ls = console.warn, ri = console.error, _h = console.group, Da = console.groupCollapsed, Mh = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Nh,
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
        bi++;
      }
    }
    function wc() {
      {
        if (bi--, bi === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: wt({}, e, {
              value: Dh
            }),
            info: wt({}, e, {
              value: Hd
            }),
            warn: wt({}, e, {
              value: ls
            }),
            error: wt({}, e, {
              value: ri
            }),
            group: wt({}, e, {
              value: _h
            }),
            groupCollapsed: wt({}, e, {
              value: Da
            }),
            groupEnd: wt({}, e, {
              value: Mh
            })
          });
        }
        bi < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Xl = c.ReactCurrentDispatcher, al;
    function ai(e, t, a) {
      {
        if (al === void 0)
          try {
            throw Error();
          } catch (u) {
            var o = u.stack.trim().match(/\n( *(at )?)/);
            al = o && o[1] || "";
          }
        return `
` + al + e;
      }
    }
    var Vd = !1, Rc;
    {
      var Id = typeof WeakMap == "function" ? WeakMap : Map;
      Rc = new Id();
    }
    function Oc(e, t) {
      if (!e || Vd)
        return "";
      {
        var a = Rc.get(e);
        if (a !== void 0)
          return a;
      }
      var o;
      Vd = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = Xl.current, Xl.current = null, C0();
      try {
        if (t) {
          var m = function() {
            throw Error();
          };
          if (Object.defineProperty(m.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(m, []);
            } catch (J) {
              o = J;
            }
            Reflect.construct(e, [], m);
          } else {
            try {
              m.call();
            } catch (J) {
              o = J;
            }
            e.call(m.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (J) {
            o = J;
          }
          e();
        }
      } catch (J) {
        if (J && o && typeof J.stack == "string") {
          for (var b = J.stack.split(`
`), E = o.stack.split(`
`), R = b.length - 1, D = E.length - 1; R >= 1 && D >= 0 && b[R] !== E[D]; )
            D--;
          for (; R >= 1 && D >= 0; R--, D--)
            if (b[R] !== E[D]) {
              if (R !== 1 || D !== 1)
                do
                  if (R--, D--, D < 0 || b[R] !== E[D]) {
                    var V = `
` + b[R].replace(" at new ", " at ");
                    return e.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", e.displayName)), typeof e == "function" && Rc.set(e, V), V;
                  }
                while (R >= 1 && D >= 0);
              break;
            }
        }
      } finally {
        Vd = !1, Xl.current = d, wc(), Error.prepareStackTrace = u;
      }
      var F = e ? e.displayName || e.name : "", K = F ? ai(F) : "";
      return typeof e == "function" && Rc.set(e, K), K;
    }
    function Yd(e, t, a) {
      return Oc(e, !0);
    }
    function il(e, t, a) {
      return Oc(e, !1);
    }
    function T0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function us(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Oc(e, T0(e));
      if (typeof e == "string")
        return ai(e);
      switch (e) {
        case rt:
          return ai("Suspense");
        case _t:
          return ai("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _e:
            return il(e.render);
          case zt:
            return us(e.type, t, a);
          case ft: {
            var o = e, u = o._payload, d = o._init;
            try {
              return us(d(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Gt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case $:
          return ai(e.type);
        case Ae:
          return ai("Lazy");
        case U:
          return ai("Suspense");
        case ne:
          return ai("SuspenseList");
        case x:
        case _:
        case te:
          return il(e.type);
        case q:
          return il(e.type.render);
        case k:
          return Yd(e.type);
        default:
          return "";
      }
    }
    function Wd(e) {
      try {
        var t = "", a = e;
        do
          t += Gt(a), a = a.return;
        while (a);
        return t;
      } catch (o) {
        return `
Error generating stack: ` + o.message + `
` + o.stack;
      }
    }
    function Ah(e, t, a) {
      var o = e.displayName;
      if (o)
        return o;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function kc(e) {
      return e.displayName || "Context";
    }
    function Qt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case ni:
          return "Fragment";
        case ha:
          return "Portal";
        case rl:
          return "Profiler";
        case So:
          return "StrictMode";
        case rt:
          return "Suspense";
        case _t:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case me:
            var t = e;
            return kc(t) + ".Consumer";
          case z:
            var a = e;
            return kc(a._context) + ".Provider";
          case _e:
            return Ah(e, e.render, "ForwardRef");
          case zt:
            var o = e.displayName || null;
            return o !== null ? o : Qt(e.type) || "Memo";
          case ft: {
            var u = e, d = u._payload, m = u._init;
            try {
              return Qt(m(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Lh(e, t, a) {
      var o = t.displayName || t.name || "";
      return e.displayName || (o !== "" ? a + "(" + o + ")" : a);
    }
    function Gd(e) {
      return e.displayName || "Context";
    }
    function gt(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Le:
          return "Cache";
        case ee:
          var o = a;
          return Gd(o) + ".Consumer";
        case le:
          var u = a;
          return Gd(u._context) + ".Provider";
        case O:
          return "DehydratedFragment";
        case q:
          return Lh(a, a.render, "ForwardRef");
        case L:
          return "Fragment";
        case $:
          return a;
        case A:
          return "Portal";
        case M:
          return "Root";
        case B:
          return "Text";
        case Ae:
          return Qt(a);
        case P:
          return a === So ? "StrictMode" : "Mode";
        case ue:
          return "Offscreen";
        case Y:
          return "Profiler";
        case be:
          return "Scope";
        case U:
          return "Suspense";
        case ne:
          return "SuspenseList";
        case we:
          return "TracingMarker";
        case k:
        case x:
        case Oe:
        case _:
        case re:
        case te:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var ss = c.ReactDebugCurrentFrame, Bn = null, _a = !1;
    function Ma() {
      {
        if (Bn === null)
          return null;
        var e = Bn._debugOwner;
        if (e !== null && typeof e < "u")
          return gt(e);
      }
      return null;
    }
    function cs() {
      return Bn === null ? "" : Wd(Bn);
    }
    function Jn() {
      ss.getCurrentStack = null, Bn = null, _a = !1;
    }
    function Jt(e) {
      ss.getCurrentStack = e === null ? null : cs, Bn = e, _a = !1;
    }
    function x0() {
      return Bn;
    }
    function ii(e) {
      _a = e;
    }
    function Mr(e) {
      return "" + e;
    }
    function Eo(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Xe(e), e;
        default:
          return "";
      }
    }
    var zh = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Kl(e, t) {
      zh[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || y("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || y("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Qd(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Uh(e) {
      return e._valueTracker;
    }
    function fs(e) {
      e._valueTracker = null;
    }
    function ds(e) {
      var t = "";
      return e && (Qd(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Zl(e) {
      var t = Qd(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Xe(e[t]);
      var o = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, d = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(b) {
            Xe(b), o = "" + b, d.call(this, b);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var m = {
          getValue: function() {
            return o;
          },
          setValue: function(b) {
            Xe(b), o = "" + b;
          },
          stopTracking: function() {
            fs(e), delete e[t];
          }
        };
        return m;
      }
    }
    function ol(e) {
      Uh(e) || (e._valueTracker = Zl(e));
    }
    function Ph(e) {
      if (!e)
        return !1;
      var t = Uh(e);
      if (!t)
        return !0;
      var a = t.getValue(), o = ds(e);
      return o !== a ? (t.setValue(o), !0) : !1;
    }
    function Dc(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var _c = !1, ps = !1, Mc = !1, qd = !1;
    function Ii(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function vs(e, t) {
      var a = e, o = t.checked, u = wt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: o ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function hs(e, t) {
      Kl("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !ps && (y("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ma() || "A component", t.type), ps = !0), t.value !== void 0 && t.defaultValue !== void 0 && !_c && (y("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ma() || "A component", t.type), _c = !0);
      var a = e, o = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Eo(t.value != null ? t.value : o),
        controlled: Ii(t)
      };
    }
    function Xd(e, t) {
      var a = e, o = t.checked;
      o != null && Si(a, "checked", o, !1);
    }
    function Jl(e, t) {
      var a = e;
      {
        var o = Ii(t);
        !a._wrapperState.controlled && o && !qd && (y("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), qd = !0), a._wrapperState.controlled && !o && !Mc && (y("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Mc = !0);
      }
      Xd(e, t);
      var u = Eo(t.value), d = t.type;
      if (u != null)
        d === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Mr(u)) : a.value !== Mr(u) && (a.value = Mr(u));
      else if (d === "submit" || d === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Co(a, t.type, u) : t.hasOwnProperty("defaultValue") && Co(a, t.type, Eo(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function ms(e, t, a) {
      var o = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, d = u === "submit" || u === "reset";
        if (d && (t.value === void 0 || t.value === null))
          return;
        var m = Mr(o._wrapperState.initialValue);
        a || m !== o.value && (o.value = m), o.defaultValue = m;
      }
      var b = o.name;
      b !== "" && (o.name = ""), o.defaultChecked = !o.defaultChecked, o.defaultChecked = !!o._wrapperState.initialChecked, b !== "" && (o.name = b);
    }
    function $h(e, t) {
      var a = e;
      Jl(a, t), ya(a, t);
    }
    function ya(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var o = e; o.parentNode; )
          o = o.parentNode;
        yn(a, "name");
        for (var u = o.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), d = 0; d < u.length; d++) {
          var m = u[d];
          if (!(m === e || m.form !== e.form)) {
            var b = gy(m);
            if (!b)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Ph(m), Jl(m, b);
          }
        }
      }
    }
    function Co(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Dc(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Mr(e._wrapperState.initialValue) : e.defaultValue !== Mr(a) && (e.defaultValue = Mr(a)));
    }
    var Nc = !1, eu = !1, jh = !1;
    function Ac(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? i.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || eu || (eu = !0, y("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (jh || (jh = !0, y("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Nc && (y("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Nc = !0);
    }
    function Kd(e, t) {
      t.value != null && e.setAttribute("value", Mr(Eo(t.value)));
    }
    var ys = Array.isArray;
    function sr(e) {
      return ys(e);
    }
    var Lc;
    Lc = !1;
    function Fh() {
      var e = Ma();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Bh = ["value", "defaultValue"];
    function w0(e) {
      {
        Kl("select", e);
        for (var t = 0; t < Bh.length; t++) {
          var a = Bh[t];
          if (e[a] != null) {
            var o = sr(e[a]);
            e.multiple && !o ? y("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Fh()) : !e.multiple && o && y("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Fh());
          }
        }
      }
    }
    function To(e, t, a, o) {
      var u = e.options;
      if (t) {
        for (var d = a, m = {}, b = 0; b < d.length; b++)
          m["$" + d[b]] = !0;
        for (var E = 0; E < u.length; E++) {
          var R = m.hasOwnProperty("$" + u[E].value);
          u[E].selected !== R && (u[E].selected = R), R && o && (u[E].defaultSelected = !0);
        }
      } else {
        for (var D = Mr(Eo(a)), V = null, F = 0; F < u.length; F++) {
          if (u[F].value === D) {
            u[F].selected = !0, o && (u[F].defaultSelected = !0);
            return;
          }
          V === null && !u[F].disabled && (V = u[F]);
        }
        V !== null && (V.selected = !0);
      }
    }
    function Zd(e, t) {
      return wt({}, t, {
        value: void 0
      });
    }
    function Hh(e, t) {
      var a = e;
      w0(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Lc && (y("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Lc = !0);
    }
    function R0(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var o = t.value;
      o != null ? To(a, !!t.multiple, o, !1) : t.defaultValue != null && To(a, !!t.multiple, t.defaultValue, !0);
    }
    function O0(e, t) {
      var a = e, o = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? To(a, !!t.multiple, u, !1) : o !== !!t.multiple && (t.defaultValue != null ? To(a, !!t.multiple, t.defaultValue, !0) : To(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function k0(e, t) {
      var a = e, o = t.value;
      o != null && To(a, !!t.multiple, o, !1);
    }
    var Jd = !1;
    function ep(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var o = wt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Mr(a._wrapperState.initialValue)
      });
      return o;
    }
    function Vh(e, t) {
      var a = e;
      Kl("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Jd && (y("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ma() || "A component"), Jd = !0);
      var o = t.value;
      if (o == null) {
        var u = t.children, d = t.defaultValue;
        if (u != null) {
          y("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (d != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (sr(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            d = u;
          }
        }
        d == null && (d = ""), o = d;
      }
      a._wrapperState = {
        initialValue: Eo(o)
      };
    }
    function Ih(e, t) {
      var a = e, o = Eo(t.value), u = Eo(t.defaultValue);
      if (o != null) {
        var d = Mr(o);
        d !== a.value && (a.value = d), t.defaultValue == null && a.defaultValue !== d && (a.defaultValue = d);
      }
      u != null && (a.defaultValue = Mr(u));
    }
    function Yh(e, t) {
      var a = e, o = a.textContent;
      o === a._wrapperState.initialValue && o !== "" && o !== null && (a.value = o);
    }
    function tp(e, t) {
      Ih(e, t);
    }
    var Yi = "http://www.w3.org/1999/xhtml", D0 = "http://www.w3.org/1998/Math/MathML", np = "http://www.w3.org/2000/svg";
    function zc(e) {
      switch (e) {
        case "svg":
          return np;
        case "math":
          return D0;
        default:
          return Yi;
      }
    }
    function rp(e, t) {
      return e == null || e === Yi ? zc(t) : e === np && t === "foreignObject" ? Yi : e;
    }
    var _0 = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, o, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, o, u);
        });
      } : e;
    }, Uc, Wh = _0(function(e, t) {
      if (e.namespaceURI === np && !("innerHTML" in e)) {
        Uc = Uc || document.createElement("div"), Uc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Uc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Zr = 1, Wi = 3, Hn = 8, oi = 9, ll = 11, Pc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Wi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Gh = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, tu = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Qh(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var qh = ["Webkit", "ms", "Moz", "O"];
    Object.keys(tu).forEach(function(e) {
      qh.forEach(function(t) {
        tu[Qh(t, e)] = tu[e];
      });
    });
    function $c(e, t, a) {
      var o = t == null || typeof t == "boolean" || t === "";
      return o ? "" : !a && typeof t == "number" && t !== 0 && !(tu.hasOwnProperty(e) && tu[e]) ? t + "px" : (Ln(t, e), ("" + t).trim());
    }
    var nu = /([A-Z])/g, M0 = /^ms-/;
    function N0(e) {
      return e.replace(nu, "-$1").toLowerCase().replace(M0, "-ms-");
    }
    var Xh = function() {
    };
    {
      var Kh = /^(?:webkit|moz|o)[A-Z]/, Zh = /^-ms-/, gs = /-(.)/g, ru = /;\s*$/, au = {}, iu = {}, Jh = !1, ap = !1, ip = function(e) {
        return e.replace(gs, function(t, a) {
          return a.toUpperCase();
        });
      }, op = function(e) {
        au.hasOwnProperty(e) && au[e] || (au[e] = !0, y(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          ip(e.replace(Zh, "ms-"))
        ));
      }, em = function(e) {
        au.hasOwnProperty(e) && au[e] || (au[e] = !0, y("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, tm = function(e, t) {
        iu.hasOwnProperty(t) && iu[t] || (iu[t] = !0, y(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(ru, "")));
      }, nm = function(e, t) {
        Jh || (Jh = !0, y("`NaN` is an invalid value for the `%s` css style property.", e));
      }, A0 = function(e, t) {
        ap || (ap = !0, y("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Xh = function(e, t) {
        e.indexOf("-") > -1 ? op(e) : Kh.test(e) ? em(e) : ru.test(t) && tm(e, t), typeof t == "number" && (isNaN(t) ? nm(e, t) : isFinite(t) || A0(e, t));
      };
    }
    var L0 = Xh;
    function z0(e) {
      {
        var t = "", a = "";
        for (var o in e)
          if (e.hasOwnProperty(o)) {
            var u = e[o];
            if (u != null) {
              var d = o.indexOf("--") === 0;
              t += a + (d ? o : N0(o)) + ":", t += $c(o, u, d), a = ";";
            }
          }
        return t || null;
      }
    }
    function rm(e, t) {
      var a = e.style;
      for (var o in t)
        if (t.hasOwnProperty(o)) {
          var u = o.indexOf("--") === 0;
          u || L0(o, t[o]);
          var d = $c(o, t[o], u);
          o === "float" && (o = "cssFloat"), u ? a.setProperty(o, d) : a[o] = d;
        }
    }
    function U0(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Na(e) {
      var t = {};
      for (var a in e)
        for (var o = Gh[a] || [a], u = 0; u < o.length; u++)
          t[o[u]] = a;
      return t;
    }
    function Ss(e, t) {
      {
        if (!t)
          return;
        var a = Na(e), o = Na(t), u = {};
        for (var d in a) {
          var m = a[d], b = o[d];
          if (b && m !== b) {
            var E = m + "," + b;
            if (u[E])
              continue;
            u[E] = !0, y("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", U0(e[m]) ? "Removing" : "Updating", m, b);
          }
        }
      }
    }
    var am = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, im = wt({
      menuitem: !0
    }, am), om = "__html";
    function jc(e, t) {
      if (t) {
        if (im[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(om in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && y("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Gi(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Fc = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, lm = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, li = {}, lp = new RegExp("^(aria)-[" + Ke + "]*$"), bs = new RegExp("^(aria)[A-Z][" + Ke + "]*$");
    function up(e, t) {
      {
        if (ke.call(li, t) && li[t])
          return !0;
        if (bs.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), o = lm.hasOwnProperty(a) ? a : null;
          if (o == null)
            return y("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), li[t] = !0, !0;
          if (t !== o)
            return y("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, o), li[t] = !0, !0;
        }
        if (lp.test(t)) {
          var u = t.toLowerCase(), d = lm.hasOwnProperty(u) ? u : null;
          if (d == null)
            return li[t] = !0, !1;
          if (t !== d)
            return y("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, d), li[t] = !0, !0;
        }
      }
      return !0;
    }
    function um(e, t) {
      {
        var a = [];
        for (var o in t) {
          var u = up(e, o);
          u || a.push(o);
        }
        var d = a.map(function(m) {
          return "`" + m + "`";
        }).join(", ");
        a.length === 1 ? y("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e) : a.length > 1 && y("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e);
      }
    }
    function Bc(e, t) {
      Gi(e, t) || um(e, t);
    }
    var ul = !1;
    function sp(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !ul && (ul = !0, e === "select" && t.multiple ? y("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : y("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var cp = function() {
    };
    {
      var cr = {}, fp = /^on./, sm = /^on[^A-Z]/, cm = new RegExp("^(aria)-[" + Ke + "]*$"), fm = new RegExp("^(aria)[A-Z][" + Ke + "]*$");
      cp = function(e, t, a, o) {
        if (ke.call(cr, t) && cr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return y("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), cr[t] = !0, !0;
        if (o != null) {
          var d = o.registrationNameDependencies, m = o.possibleRegistrationNames;
          if (d.hasOwnProperty(t))
            return !0;
          var b = m.hasOwnProperty(u) ? m[u] : null;
          if (b != null)
            return y("Invalid event handler property `%s`. Did you mean `%s`?", t, b), cr[t] = !0, !0;
          if (fp.test(t))
            return y("Unknown event handler property `%s`. It will be ignored.", t), cr[t] = !0, !0;
        } else if (fp.test(t))
          return sm.test(t) && y("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), cr[t] = !0, !0;
        if (cm.test(t) || fm.test(t))
          return !0;
        if (u === "innerhtml")
          return y("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), cr[t] = !0, !0;
        if (u === "aria")
          return y("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), cr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return y("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), cr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return y("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), cr[t] = !0, !0;
        var E = $r(t), R = E !== null && E.type === Xn;
        if (Fc.hasOwnProperty(u)) {
          var D = Fc[u];
          if (D !== t)
            return y("Invalid DOM property `%s`. Did you mean `%s`?", t, D), cr[t] = !0, !0;
        } else if (!R && t !== u)
          return y("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), cr[t] = !0, !0;
        return typeof a == "boolean" && gr(t, a, E, !1) ? (a ? y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), cr[t] = !0, !0) : R ? !0 : gr(t, a, E, !1) ? (cr[t] = !0, !1) : ((a === "false" || a === "true") && E !== null && E.type === Kt && (y("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), cr[t] = !0), !0);
      };
    }
    var dm = function(e, t, a) {
      {
        var o = [];
        for (var u in t) {
          var d = cp(e, u, t[u], a);
          d || o.push(u);
        }
        var m = o.map(function(b) {
          return "`" + b + "`";
        }).join(", ");
        o.length === 1 ? y("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", m, e) : o.length > 1 && y("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", m, e);
      }
    };
    function pm(e, t, a) {
      Gi(e, t) || dm(e, t, a);
    }
    var Qi = 1, Es = 2, sl = 4, P0 = Qi | Es | sl, Cs = null;
    function Ts(e) {
      Cs !== null && y("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Cs = e;
    }
    function $0() {
      Cs === null && y("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Cs = null;
    }
    function vm(e) {
      return e === Cs;
    }
    function Hc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Wi ? t.parentNode : t;
    }
    var un = null, xo = null, qi = null;
    function ou(e) {
      var t = ju(e);
      if (t) {
        if (typeof un != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var o = gy(a);
          un(t.stateNode, t.type, o);
        }
      }
    }
    function hm(e) {
      un = e;
    }
    function Vc(e) {
      xo ? qi ? qi.push(e) : qi = [e] : xo = e;
    }
    function xs() {
      return xo !== null || qi !== null;
    }
    function ws() {
      if (xo) {
        var e = xo, t = qi;
        if (xo = null, qi = null, ou(e), t)
          for (var a = 0; a < t.length; a++)
            ou(t[a]);
      }
    }
    var cl = function(e, t) {
      return e(t);
    }, dp = function() {
    }, pp = !1;
    function j0() {
      var e = xs();
      e && (dp(), ws());
    }
    function vp(e, t, a) {
      if (pp)
        return e(t, a);
      pp = !0;
      try {
        return cl(e, t, a);
      } finally {
        pp = !1, j0();
      }
    }
    function Ic(e, t, a) {
      cl = e, dp = a;
    }
    function Yc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function hp(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && Yc(t));
        default:
          return !1;
      }
    }
    function fl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var o = gy(a);
      if (o === null)
        return null;
      var u = o[t];
      if (hp(t, e.type, o))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var Rs = !1;
    if (Tt)
      try {
        var dl = {};
        Object.defineProperty(dl, "passive", {
          get: function() {
            Rs = !0;
          }
        }), window.addEventListener("test", dl, dl), window.removeEventListener("test", dl, dl);
      } catch {
        Rs = !1;
      }
    function mm(e, t, a, o, u, d, m, b, E) {
      var R = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, R);
      } catch (D) {
        this.onError(D);
      }
    }
    var mp = mm;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var yp = document.createElement("react");
      mp = function(t, a, o, u, d, m, b, E, R) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var D = document.createEvent("Event"), V = !1, F = !0, K = window.event, J = Object.getOwnPropertyDescriptor(window, "event");
        function ae() {
          yp.removeEventListener(ie, lt, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = K);
        }
        var ze = Array.prototype.slice.call(arguments, 3);
        function lt() {
          V = !0, ae(), a.apply(o, ze), F = !1;
        }
        var nt, Lt = !1, kt = !1;
        function G(Q) {
          if (nt = Q.error, Lt = !0, nt === null && Q.colno === 0 && Q.lineno === 0 && (kt = !0), Q.defaultPrevented && nt != null && typeof nt == "object")
            try {
              nt._suppressLogging = !0;
            } catch {
            }
        }
        var ie = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", G), yp.addEventListener(ie, lt, !1), D.initEvent(ie, !1, !1), yp.dispatchEvent(D), J && Object.defineProperty(window, "event", J), V && F && (Lt ? kt && (nt = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : nt = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(nt)), window.removeEventListener("error", G), !V)
          return ae(), mm.apply(this, arguments);
      };
    }
    var F0 = mp, wo = !1, ui = null, Os = !1, Ro = null, Ei = {
      onError: function(e) {
        wo = !0, ui = e;
      }
    };
    function pl(e, t, a, o, u, d, m, b, E) {
      wo = !1, ui = null, F0.apply(Ei, arguments);
    }
    function Xi(e, t, a, o, u, d, m, b, E) {
      if (pl.apply(this, arguments), wo) {
        var R = Sp();
        Os || (Os = !0, Ro = R);
      }
    }
    function gp() {
      if (Os) {
        var e = Ro;
        throw Os = !1, Ro = null, e;
      }
    }
    function B0() {
      return wo;
    }
    function Sp() {
      if (wo) {
        var e = ui;
        return wo = !1, ui = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Aa(e) {
      return e._reactInternals;
    }
    function ks(e) {
      return e._reactInternals !== void 0;
    }
    function lu(e, t) {
      e._reactInternals = t;
    }
    var ot = (
      /*                      */
      0
    ), Oo = (
      /*                */
      1
    ), fn = (
      /*                    */
      2
    ), bt = (
      /*                       */
      4
    ), jt = (
      /*                */
      16
    ), Ht = (
      /*                 */
      32
    ), Ci = (
      /*                     */
      64
    ), pt = (
      /*                   */
      128
    ), Dn = (
      /*            */
      256
    ), Jr = (
      /*                          */
      512
    ), La = (
      /*                     */
      1024
    ), Sn = (
      /*                      */
      2048
    ), za = (
      /*                    */
      4096
    ), ko = (
      /*                   */
      8192
    ), Ds = (
      /*             */
      16384
    ), Wc = Sn | bt | Ci | Jr | La | Ds, ym = (
      /*               */
      32767
    ), ga = (
      /*                   */
      32768
    ), fr = (
      /*                */
      65536
    ), _s = (
      /* */
      131072
    ), bp = (
      /*                       */
      1048576
    ), Ep = (
      /*                    */
      2097152
    ), ea = (
      /*                 */
      4194304
    ), Do = (
      /*                */
      8388608
    ), ta = (
      /*               */
      16777216
    ), vl = (
      /*              */
      33554432
    ), uu = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      bt | La | 0
    ), na = fn | bt | jt | Ht | Jr | za | ko, Nr = bt | Ci | Jr | ko, Ua = Sn | jt, Sr = ea | Do | Ep, Ki = c.ReactCurrentOwner;
    function Sa(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var o = t;
        do
          t = o, (t.flags & (fn | za)) !== ot && (a = t.return), o = t.return;
        while (o);
      }
      return t.tag === M ? a : null;
    }
    function Cp(e) {
      if (e.tag === U) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Gc(e) {
      return e.tag === M ? e.stateNode.containerInfo : null;
    }
    function Tp(e) {
      return Sa(e) === e;
    }
    function ba(e) {
      {
        var t = Ki.current;
        if (t !== null && t.tag === k) {
          var a = t, o = a.stateNode;
          o._warnedAboutRefsInRender || y("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", gt(a) || "A component"), o._warnedAboutRefsInRender = !0;
        }
      }
      var u = Aa(e);
      return u ? Sa(u) === u : !1;
    }
    function ra(e) {
      if (Sa(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function dn(e) {
      var t = e.alternate;
      if (!t) {
        var a = Sa(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var o = e, u = t; ; ) {
        var d = o.return;
        if (d === null)
          break;
        var m = d.alternate;
        if (m === null) {
          var b = d.return;
          if (b !== null) {
            o = u = b;
            continue;
          }
          break;
        }
        if (d.child === m.child) {
          for (var E = d.child; E; ) {
            if (E === o)
              return ra(d), e;
            if (E === u)
              return ra(d), t;
            E = E.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (o.return !== u.return)
          o = d, u = m;
        else {
          for (var R = !1, D = d.child; D; ) {
            if (D === o) {
              R = !0, o = d, u = m;
              break;
            }
            if (D === u) {
              R = !0, u = d, o = m;
              break;
            }
            D = D.sibling;
          }
          if (!R) {
            for (D = m.child; D; ) {
              if (D === o) {
                R = !0, o = m, u = d;
                break;
              }
              if (D === u) {
                R = !0, u = m, o = d;
                break;
              }
              D = D.sibling;
            }
            if (!R)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (o.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (o.tag !== M)
        throw new Error("Unable to find node on an unmounted component.");
      return o.stateNode.current === o ? e : t;
    }
    function Pa(e) {
      var t = dn(e);
      return t !== null ? xp(t) : null;
    }
    function xp(e) {
      if (e.tag === $ || e.tag === B)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = xp(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function gm(e) {
      var t = dn(e);
      return t !== null ? Qc(t) : null;
    }
    function Qc(e) {
      if (e.tag === $ || e.tag === B)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== A) {
          var a = Qc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var qc = s.unstable_scheduleCallback, Sm = s.unstable_cancelCallback, Xc = s.unstable_shouldYield, bm = s.unstable_requestPaint, wn = s.unstable_now, wp = s.unstable_getCurrentPriorityLevel, Kc = s.unstable_ImmediatePriority, hl = s.unstable_UserBlockingPriority, Ti = s.unstable_NormalPriority, Em = s.unstable_LowPriority, Zc = s.unstable_IdlePriority, su = s.unstable_yieldValue, Cm = s.unstable_setDisableYieldValue, Zi = null, er = null, Me = null, $a = !1, Ea = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Rp(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return y("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Ze && (e = wt({}, e, {
          getLaneLabelMap: Ji,
          injectProfilingHooks: Tm
        })), Zi = t.inject(e), er = t;
      } catch (a) {
        y("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Op(e, t) {
      if (er && typeof er.onScheduleFiberRoot == "function")
        try {
          er.onScheduleFiberRoot(Zi, e, t);
        } catch (a) {
          $a || ($a = !0, y("React instrumentation encountered an error: %s", a));
        }
    }
    function cu(e, t) {
      if (er && typeof er.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & pt) === pt;
          if (Pe) {
            var o;
            switch (t) {
              case Pn:
                o = Kc;
                break;
              case to:
                o = hl;
                break;
              case xi:
                o = Ti;
                break;
              case Cu:
                o = Zc;
                break;
              default:
                o = Ti;
                break;
            }
            er.onCommitFiberRoot(Zi, e, o, a);
          }
        } catch (u) {
          $a || ($a = !0, y("React instrumentation encountered an error: %s", u));
        }
    }
    function ja(e) {
      if (er && typeof er.onPostCommitFiberRoot == "function")
        try {
          er.onPostCommitFiberRoot(Zi, e);
        } catch (t) {
          $a || ($a = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function ml(e) {
      if (er && typeof er.onCommitFiberUnmount == "function")
        try {
          er.onCommitFiberUnmount(Zi, e);
        } catch (t) {
          $a || ($a = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Vn(e) {
      if (typeof su == "function" && (Cm(e), h(e)), er && typeof er.setStrictMode == "function")
        try {
          er.setStrictMode(Zi, e);
        } catch (t) {
          $a || ($a = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Tm(e) {
      Me = e;
    }
    function Ji() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < zs; a++) {
          var o = V0(t);
          e.set(t, o), t *= 2;
        }
        return e;
      }
    }
    function _o(e) {
      Me !== null && typeof Me.markCommitStarted == "function" && Me.markCommitStarted(e);
    }
    function Jc() {
      Me !== null && typeof Me.markCommitStopped == "function" && Me.markCommitStopped();
    }
    function fu(e) {
      Me !== null && typeof Me.markComponentRenderStarted == "function" && Me.markComponentRenderStarted(e);
    }
    function aa() {
      Me !== null && typeof Me.markComponentRenderStopped == "function" && Me.markComponentRenderStopped();
    }
    function Mo(e) {
      Me !== null && typeof Me.markComponentPassiveEffectMountStarted == "function" && Me.markComponentPassiveEffectMountStarted(e);
    }
    function ef() {
      Me !== null && typeof Me.markComponentPassiveEffectMountStopped == "function" && Me.markComponentPassiveEffectMountStopped();
    }
    function xm(e) {
      Me !== null && typeof Me.markComponentPassiveEffectUnmountStarted == "function" && Me.markComponentPassiveEffectUnmountStarted(e);
    }
    function tf() {
      Me !== null && typeof Me.markComponentPassiveEffectUnmountStopped == "function" && Me.markComponentPassiveEffectUnmountStopped();
    }
    function wm(e) {
      Me !== null && typeof Me.markComponentLayoutEffectMountStarted == "function" && Me.markComponentLayoutEffectMountStarted(e);
    }
    function Ms() {
      Me !== null && typeof Me.markComponentLayoutEffectMountStopped == "function" && Me.markComponentLayoutEffectMountStopped();
    }
    function si(e) {
      Me !== null && typeof Me.markComponentLayoutEffectUnmountStarted == "function" && Me.markComponentLayoutEffectUnmountStarted(e);
    }
    function du() {
      Me !== null && typeof Me.markComponentLayoutEffectUnmountStopped == "function" && Me.markComponentLayoutEffectUnmountStopped();
    }
    function Ns(e, t, a) {
      Me !== null && typeof Me.markComponentErrored == "function" && Me.markComponentErrored(e, t, a);
    }
    function yl(e, t, a) {
      Me !== null && typeof Me.markComponentSuspended == "function" && Me.markComponentSuspended(e, t, a);
    }
    function kp(e) {
      Me !== null && typeof Me.markLayoutEffectsStarted == "function" && Me.markLayoutEffectsStarted(e);
    }
    function pu() {
      Me !== null && typeof Me.markLayoutEffectsStopped == "function" && Me.markLayoutEffectsStopped();
    }
    function Rm(e) {
      Me !== null && typeof Me.markPassiveEffectsStarted == "function" && Me.markPassiveEffectsStarted(e);
    }
    function Dp() {
      Me !== null && typeof Me.markPassiveEffectsStopped == "function" && Me.markPassiveEffectsStopped();
    }
    function bn(e) {
      Me !== null && typeof Me.markRenderStarted == "function" && Me.markRenderStarted(e);
    }
    function nf() {
      Me !== null && typeof Me.markRenderYielded == "function" && Me.markRenderYielded();
    }
    function rf() {
      Me !== null && typeof Me.markRenderStopped == "function" && Me.markRenderStopped();
    }
    function _p(e) {
      Me !== null && typeof Me.markRenderScheduled == "function" && Me.markRenderScheduled(e);
    }
    function af(e, t) {
      Me !== null && typeof Me.markForceUpdateScheduled == "function" && Me.markForceUpdateScheduled(e, t);
    }
    function As(e, t) {
      Me !== null && typeof Me.markStateUpdateScheduled == "function" && Me.markStateUpdateScheduled(e, t);
    }
    var Je = (
      /*                         */
      0
    ), tt = (
      /*                 */
      1
    ), vt = (
      /*                    */
      2
    ), Rt = (
      /*               */
      8
    ), Ca = (
      /*              */
      16
    ), vu = Math.clz32 ? Math.clz32 : Ar, Ls = Math.log, H0 = Math.LN2;
    function Ar(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Ls(t) / H0 | 0) | 0;
    }
    var zs = 31, de = (
      /*                        */
      0
    ), In = (
      /*                          */
      0
    ), at = (
      /*                        */
      1
    ), br = (
      /*    */
      2
    ), Ta = (
      /*             */
      4
    ), eo = (
      /*            */
      8
    ), Fa = (
      /*                     */
      16
    ), hu = (
      /*                */
      32
    ), gl = (
      /*                       */
      4194240
    ), mu = (
      /*                        */
      64
    ), of = (
      /*                        */
      128
    ), lf = (
      /*                        */
      256
    ), uf = (
      /*                        */
      512
    ), sf = (
      /*                        */
      1024
    ), cf = (
      /*                        */
      2048
    ), Sl = (
      /*                        */
      4096
    ), ff = (
      /*                        */
      8192
    ), yu = (
      /*                        */
      16384
    ), gu = (
      /*                       */
      32768
    ), df = (
      /*                       */
      65536
    ), Us = (
      /*                       */
      131072
    ), pf = (
      /*                       */
      262144
    ), vf = (
      /*                       */
      524288
    ), hf = (
      /*                       */
      1048576
    ), mf = (
      /*                       */
      2097152
    ), Su = (
      /*                            */
      130023424
    ), bl = (
      /*                             */
      4194304
    ), yf = (
      /*                             */
      8388608
    ), gf = (
      /*                             */
      16777216
    ), Mp = (
      /*                             */
      33554432
    ), Sf = (
      /*                             */
      67108864
    ), Om = bl, Ps = (
      /*          */
      134217728
    ), Np = (
      /*                          */
      268435455
    ), bu = (
      /*               */
      268435456
    ), No = (
      /*                        */
      536870912
    ), Lr = (
      /*                   */
      1073741824
    );
    function V0(e) {
      {
        if (e & at)
          return "Sync";
        if (e & br)
          return "InputContinuousHydration";
        if (e & Ta)
          return "InputContinuous";
        if (e & eo)
          return "DefaultHydration";
        if (e & Fa)
          return "Default";
        if (e & hu)
          return "TransitionHydration";
        if (e & gl)
          return "Transition";
        if (e & Su)
          return "Retry";
        if (e & Ps)
          return "SelectiveHydration";
        if (e & bu)
          return "IdleHydration";
        if (e & No)
          return "Idle";
        if (e & Lr)
          return "Offscreen";
      }
    }
    var sn = -1, bf = mu, ia = bl;
    function El(e) {
      switch (Un(e)) {
        case at:
          return at;
        case br:
          return br;
        case Ta:
          return Ta;
        case eo:
          return eo;
        case Fa:
          return Fa;
        case hu:
          return hu;
        case mu:
        case of:
        case lf:
        case uf:
        case sf:
        case cf:
        case Sl:
        case ff:
        case yu:
        case gu:
        case df:
        case Us:
        case pf:
        case vf:
        case hf:
        case mf:
          return e & gl;
        case bl:
        case yf:
        case gf:
        case Mp:
        case Sf:
          return e & Su;
        case Ps:
          return Ps;
        case bu:
          return bu;
        case No:
          return No;
        case Lr:
          return Lr;
        default:
          return y("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Cl(e, t) {
      var a = e.pendingLanes;
      if (a === de)
        return de;
      var o = de, u = e.suspendedLanes, d = e.pingedLanes, m = a & Np;
      if (m !== de) {
        var b = m & ~u;
        if (b !== de)
          o = El(b);
        else {
          var E = m & d;
          E !== de && (o = El(E));
        }
      } else {
        var R = a & ~u;
        R !== de ? o = El(R) : d !== de && (o = El(d));
      }
      if (o === de)
        return de;
      if (t !== de && t !== o && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === de) {
        var D = Un(o), V = Un(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          D >= V || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          D === Fa && (V & gl) !== de
        )
          return t;
      }
      (o & Ta) !== de && (o |= a & Fa);
      var F = e.entangledLanes;
      if (F !== de)
        for (var K = e.entanglements, J = o & F; J > 0; ) {
          var ae = Lo(J), ze = 1 << ae;
          o |= K[ae], J &= ~ze;
        }
      return o;
    }
    function km(e, t) {
      for (var a = e.eventTimes, o = sn; t > 0; ) {
        var u = Lo(t), d = 1 << u, m = a[u];
        m > o && (o = m), t &= ~d;
      }
      return o;
    }
    function Dm(e, t) {
      switch (e) {
        case at:
        case br:
        case Ta:
          return t + 250;
        case eo:
        case Fa:
        case hu:
        case mu:
        case of:
        case lf:
        case uf:
        case sf:
        case cf:
        case Sl:
        case ff:
        case yu:
        case gu:
        case df:
        case Us:
        case pf:
        case vf:
        case hf:
        case mf:
          return t + 5e3;
        case bl:
        case yf:
        case gf:
        case Mp:
        case Sf:
          return sn;
        case Ps:
        case bu:
        case No:
        case Lr:
          return sn;
        default:
          return y("Should have found matching lanes. This is a bug in React."), sn;
      }
    }
    function _m(e, t) {
      for (var a = e.pendingLanes, o = e.suspendedLanes, u = e.pingedLanes, d = e.expirationTimes, m = a; m > 0; ) {
        var b = Lo(m), E = 1 << b, R = d[b];
        R === sn ? ((E & o) === de || (E & u) !== de) && (d[b] = Dm(E, t)) : R <= t && (e.expiredLanes |= E), m &= ~E;
      }
    }
    function Ap(e) {
      return El(e.pendingLanes);
    }
    function Ao(e) {
      var t = e.pendingLanes & ~Lr;
      return t !== de ? t : t & Lr ? Lr : de;
    }
    function Lp(e) {
      return (e & at) !== de;
    }
    function $s(e) {
      return (e & Np) !== de;
    }
    function Mm(e) {
      return (e & Su) === e;
    }
    function Nm(e) {
      var t = at | Ta | Fa;
      return (e & t) === de;
    }
    function Am(e) {
      return (e & gl) === e;
    }
    function js(e, t) {
      var a = br | Ta | eo | Fa;
      return (t & a) !== de;
    }
    function Lm(e, t) {
      return (t & e.expiredLanes) !== de;
    }
    function zp(e) {
      return (e & gl) !== de;
    }
    function zm() {
      var e = bf;
      return bf <<= 1, (bf & gl) === de && (bf = mu), e;
    }
    function oa() {
      var e = ia;
      return ia <<= 1, (ia & Su) === de && (ia = bl), e;
    }
    function Un(e) {
      return e & -e;
    }
    function Eu(e) {
      return Un(e);
    }
    function Lo(e) {
      return 31 - vu(e);
    }
    function Ef(e) {
      return Lo(e);
    }
    function la(e, t) {
      return (e & t) !== de;
    }
    function Tl(e, t) {
      return (e & t) === t;
    }
    function St(e, t) {
      return e | t;
    }
    function Fs(e, t) {
      return e & ~t;
    }
    function Cf(e, t) {
      return e & t;
    }
    function I0(e) {
      return e;
    }
    function Um(e, t) {
      return e !== In && e < t ? e : t;
    }
    function Bs(e) {
      for (var t = [], a = 0; a < zs; a++)
        t.push(e);
      return t;
    }
    function xl(e, t, a) {
      e.pendingLanes |= t, t !== No && (e.suspendedLanes = de, e.pingedLanes = de);
      var o = e.eventTimes, u = Ef(t);
      o[u] = a;
    }
    function Pm(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, o = t; o > 0; ) {
        var u = Lo(o), d = 1 << u;
        a[u] = sn, o &= ~d;
      }
    }
    function Tf(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function xf(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = de, e.pingedLanes = de, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var o = e.entanglements, u = e.eventTimes, d = e.expirationTimes, m = a; m > 0; ) {
        var b = Lo(m), E = 1 << b;
        o[b] = de, u[b] = sn, d[b] = sn, m &= ~E;
      }
    }
    function Up(e, t) {
      for (var a = e.entangledLanes |= t, o = e.entanglements, u = a; u; ) {
        var d = Lo(u), m = 1 << d;
        // Is this one of the newly entangled lanes?
        m & t | // Is this lane transitively entangled with the newly entangled lanes?
        o[d] & t && (o[d] |= t), u &= ~m;
      }
    }
    function $m(e, t) {
      var a = Un(t), o;
      switch (a) {
        case Ta:
          o = br;
          break;
        case Fa:
          o = eo;
          break;
        case mu:
        case of:
        case lf:
        case uf:
        case sf:
        case cf:
        case Sl:
        case ff:
        case yu:
        case gu:
        case df:
        case Us:
        case pf:
        case vf:
        case hf:
        case mf:
        case bl:
        case yf:
        case gf:
        case Mp:
        case Sf:
          o = hu;
          break;
        case No:
          o = bu;
          break;
        default:
          o = In;
          break;
      }
      return (o & (e.suspendedLanes | t)) !== In ? In : o;
    }
    function wf(e, t, a) {
      if (Ea)
        for (var o = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Ef(a), d = 1 << u, m = o[u];
          m.add(t), a &= ~d;
        }
    }
    function Pp(e, t) {
      if (Ea)
        for (var a = e.pendingUpdatersLaneMap, o = e.memoizedUpdaters; t > 0; ) {
          var u = Ef(t), d = 1 << u, m = a[u];
          m.size > 0 && (m.forEach(function(b) {
            var E = b.alternate;
            (E === null || !o.has(E)) && o.add(b);
          }), m.clear()), t &= ~d;
        }
    }
    function Hs(e, t) {
      return null;
    }
    var Pn = at, to = Ta, xi = Fa, Cu = No, Tu = In;
    function Ba() {
      return Tu;
    }
    function _n(e) {
      Tu = e;
    }
    function zr(e, t) {
      var a = Tu;
      try {
        return Tu = e, t();
      } finally {
        Tu = a;
      }
    }
    function Y0(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function W0(e, t) {
      return e > t ? e : t;
    }
    function xu(e, t) {
      return e !== 0 && e < t;
    }
    function Er(e) {
      var t = Un(e);
      return xu(Pn, t) ? xu(to, t) ? $s(t) ? xi : Cu : to : Pn;
    }
    function Rf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var He;
    function wu(e) {
      He = e;
    }
    function $p(e) {
      He(e);
    }
    var Of;
    function G0(e) {
      Of = e;
    }
    var Ru;
    function kf(e) {
      Ru = e;
    }
    var Df;
    function jm(e) {
      Df = e;
    }
    var jp;
    function Fm(e) {
      jp = e;
    }
    var Vs = !1, Ou = [], En = null, dr = null, jr = null, ku = /* @__PURE__ */ new Map(), Du = /* @__PURE__ */ new Map(), pr = [], Bm = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function wi(e) {
      return Bm.indexOf(e) > -1;
    }
    function Q0(e, t, a, o, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [o]
      };
    }
    function Fp(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          En = null;
          break;
        case "dragenter":
        case "dragleave":
          dr = null;
          break;
        case "mouseover":
        case "mouseout":
          jr = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          ku.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var o = t.pointerId;
          Du.delete(o);
          break;
        }
      }
    }
    function _u(e, t, a, o, u, d) {
      if (e === null || e.nativeEvent !== d) {
        var m = Q0(t, a, o, u, d);
        if (t !== null) {
          var b = ju(t);
          b !== null && Of(b);
        }
        return m;
      }
      e.eventSystemFlags |= o;
      var E = e.targetContainers;
      return u !== null && E.indexOf(u) === -1 && E.push(u), e;
    }
    function Hm(e, t, a, o, u) {
      switch (t) {
        case "focusin": {
          var d = u;
          return En = _u(En, e, t, a, o, d), !0;
        }
        case "dragenter": {
          var m = u;
          return dr = _u(dr, e, t, a, o, m), !0;
        }
        case "mouseover": {
          var b = u;
          return jr = _u(jr, e, t, a, o, b), !0;
        }
        case "pointerover": {
          var E = u, R = E.pointerId;
          return ku.set(R, _u(ku.get(R) || null, e, t, a, o, E)), !0;
        }
        case "gotpointercapture": {
          var D = u, V = D.pointerId;
          return Du.set(V, _u(Du.get(V) || null, e, t, a, o, D)), !0;
        }
      }
      return !1;
    }
    function Bp(e) {
      var t = tc(e.target);
      if (t !== null) {
        var a = Sa(t);
        if (a !== null) {
          var o = a.tag;
          if (o === U) {
            var u = Cp(a);
            if (u !== null) {
              e.blockedOn = u, jp(e.priority, function() {
                Ru(a);
              });
              return;
            }
          } else if (o === M) {
            var d = a.stateNode;
            if (Rf(d)) {
              e.blockedOn = Gc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function q0(e) {
      for (var t = Df(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, o = 0; o < pr.length && xu(t, pr[o].priority); o++)
        ;
      pr.splice(o, 0, a), o === 0 && Bp(a);
    }
    function wl(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], o = Ur(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (o === null) {
          var u = e.nativeEvent, d = new u.constructor(u.type, u);
          Ts(d), u.target.dispatchEvent(d), $0();
        } else {
          var m = ju(o);
          return m !== null && Of(m), e.blockedOn = o, !1;
        }
        t.shift();
      }
      return !0;
    }
    function _f(e, t, a) {
      wl(e) && a.delete(t);
    }
    function Ha() {
      Vs = !1, En !== null && wl(En) && (En = null), dr !== null && wl(dr) && (dr = null), jr !== null && wl(jr) && (jr = null), ku.forEach(_f), Du.forEach(_f);
    }
    function Ot(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Vs || (Vs = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, Ha)));
    }
    function Mn(e) {
      if (Ou.length > 0) {
        Ot(Ou[0], e);
        for (var t = 1; t < Ou.length; t++) {
          var a = Ou[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      En !== null && Ot(En, e), dr !== null && Ot(dr, e), jr !== null && Ot(jr, e);
      var o = function(b) {
        return Ot(b, e);
      };
      ku.forEach(o), Du.forEach(o);
      for (var u = 0; u < pr.length; u++) {
        var d = pr[u];
        d.blockedOn === e && (d.blockedOn = null);
      }
      for (; pr.length > 0; ) {
        var m = pr[0];
        if (m.blockedOn !== null)
          break;
        Bp(m), m.blockedOn === null && pr.shift();
      }
    }
    var pn = c.ReactCurrentBatchConfig, tr = !0;
    function ua(e) {
      tr = !!e;
    }
    function Mu() {
      return tr;
    }
    function nr(e, t, a) {
      var o = Mf(t), u;
      switch (o) {
        case Pn:
          u = Is;
          break;
        case to:
          u = Rl;
          break;
        case xi:
        default:
          u = Nu;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function Is(e, t, a, o) {
      var u = Ba(), d = pn.transition;
      pn.transition = null;
      try {
        _n(Pn), Nu(e, t, a, o);
      } finally {
        _n(u), pn.transition = d;
      }
    }
    function Rl(e, t, a, o) {
      var u = Ba(), d = pn.transition;
      pn.transition = null;
      try {
        _n(to), Nu(e, t, a, o);
      } finally {
        _n(u), pn.transition = d;
      }
    }
    function Nu(e, t, a, o) {
      tr && Hp(e, t, a, o);
    }
    function Hp(e, t, a, o) {
      var u = Ur(e, t, a, o);
      if (u === null) {
        dS(e, t, o, zo, a), Fp(e, o);
        return;
      }
      if (Hm(u, e, t, a, o)) {
        o.stopPropagation();
        return;
      }
      if (Fp(e, o), t & sl && wi(e)) {
        for (; u !== null; ) {
          var d = ju(u);
          d !== null && $p(d);
          var m = Ur(e, t, a, o);
          if (m === null && dS(e, t, o, zo, a), m === u)
            break;
          u = m;
        }
        u !== null && o.stopPropagation();
        return;
      }
      dS(e, t, o, null, a);
    }
    var zo = null;
    function Ur(e, t, a, o) {
      zo = null;
      var u = Hc(o), d = tc(u);
      if (d !== null) {
        var m = Sa(d);
        if (m === null)
          d = null;
        else {
          var b = m.tag;
          if (b === U) {
            var E = Cp(m);
            if (E !== null)
              return E;
            d = null;
          } else if (b === M) {
            var R = m.stateNode;
            if (Rf(R))
              return Gc(m);
            d = null;
          } else m !== d && (d = null);
        }
      }
      return zo = d, null;
    }
    function Mf(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Pn;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return to;
        case "message": {
          var t = wp();
          switch (t) {
            case Kc:
              return Pn;
            case hl:
              return to;
            case Ti:
            case Em:
              return xi;
            case Zc:
              return Cu;
            default:
              return xi;
          }
        }
        default:
          return xi;
      }
    }
    function Au(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function no(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Nf(e, t, a, o) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: o
      }), a;
    }
    function Vp(e, t, a, o) {
      return e.addEventListener(t, a, {
        passive: o
      }), a;
    }
    var Va = null, Lu = null, Ia = null;
    function Af(e) {
      return Va = e, Lu = Ws(), !0;
    }
    function Ys() {
      Va = null, Lu = null, Ia = null;
    }
    function Lf() {
      if (Ia)
        return Ia;
      var e, t = Lu, a = t.length, o, u = Ws(), d = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var m = a - e;
      for (o = 1; o <= m && t[a - o] === u[d - o]; o++)
        ;
      var b = o > 1 ? 1 - o : void 0;
      return Ia = u.slice(e, b), Ia;
    }
    function Ws() {
      return "value" in Va ? Va.value : Va.textContent;
    }
    function Ol(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function vr() {
      return !0;
    }
    function ro() {
      return !1;
    }
    function Rn(e) {
      function t(a, o, u, d, m) {
        this._reactName = a, this._targetInst = u, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
        for (var b in e)
          if (e.hasOwnProperty(b)) {
            var E = e[b];
            E ? this[b] = E(d) : this[b] = d[b];
          }
        var R = d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1;
        return R ? this.isDefaultPrevented = vr : this.isDefaultPrevented = ro, this.isPropagationStopped = ro, this;
      }
      return wt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = vr);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = vr);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: vr
      }), t;
    }
    var rr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, zf = Rn(rr), kl = wt({}, rr, {
      view: 0,
      detail: 0
    }), Ip = Rn(kl), Yp, Ri, zu;
    function Wp(e) {
      e !== zu && (zu && e.type === "mousemove" ? (Yp = e.screenX - zu.screenX, Ri = e.screenY - zu.screenY) : (Yp = 0, Ri = 0), zu = e);
    }
    var Oi = wt({}, kl, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Gp,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Wp(e), Yp);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Ri;
      }
    }), Uf = Rn(Oi), Dl = wt({}, Oi, {
      dataTransfer: 0
    }), Vm = Rn(Dl), Im = wt({}, kl, {
      relatedTarget: 0
    }), Gs = Rn(Im), Pf = wt({}, rr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), X0 = Rn(Pf), K0 = wt({}, rr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Ym = Rn(K0), Wm = wt({}, rr, {
      data: 0
    }), Uo = Rn(Wm), Z0 = Uo, Uu = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Gm = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function Nn(e) {
      if (e.key) {
        var t = Uu[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Ol(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Gm[e.keyCode] || "Unidentified" : "";
    }
    var J0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Qm(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var o = J0[e];
      return o ? !!a[o] : !1;
    }
    function Gp(e) {
      return Qm;
    }
    var eS = wt({}, kl, {
      key: Nn,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Gp,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Ol(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Ol(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), qm = Rn(eS), Xm = wt({}, Oi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Km = Rn(Xm), Ya = wt({}, kl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Gp
    }), Qp = Rn(Ya), tS = wt({}, rr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Po = Rn(tS), $f = wt({}, Oi, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), _l = Rn($f), jf = [9, 13, 27, 32], Ff = 229, Qs = Tt && "CompositionEvent" in window, qs = null;
    Tt && "documentMode" in document && (qs = document.documentMode);
    var qp = Tt && "TextEvent" in window && !qs, Zm = Tt && (!Qs || qs && qs > 8 && qs <= 11), Xp = 32, Kp = String.fromCharCode(Xp);
    function Bf() {
      Ct("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ct("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Ct("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Ct("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Xs = !1;
    function Jm(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Zp(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function nS(e, t) {
      return e === "keydown" && t.keyCode === Ff;
    }
    function Jp(e, t) {
      switch (e) {
        case "keyup":
          return jf.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Ff;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Hf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Ks(e) {
      return e.locale === "ko";
    }
    var $o = !1;
    function Vf(e, t, a, o, u) {
      var d, m;
      if (Qs ? d = Zp(t) : $o ? Jp(t, o) && (d = "onCompositionEnd") : nS(t, o) && (d = "onCompositionStart"), !d)
        return null;
      Zm && !Ks(o) && (!$o && d === "onCompositionStart" ? $o = Af(u) : d === "onCompositionEnd" && $o && (m = Lf()));
      var b = iy(a, d);
      if (b.length > 0) {
        var E = new Uo(d, t, null, o, u);
        if (e.push({
          event: E,
          listeners: b
        }), m)
          E.data = m;
        else {
          var R = Hf(o);
          R !== null && (E.data = R);
        }
      }
    }
    function ey(e, t) {
      switch (e) {
        case "compositionend":
          return Hf(t);
        case "keypress":
          var a = t.which;
          return a !== Xp ? null : (Xs = !0, Kp);
        case "textInput":
          var o = t.data;
          return o === Kp && Xs ? null : o;
        default:
          return null;
      }
    }
    function rS(e, t) {
      if ($o) {
        if (e === "compositionend" || !Qs && Jp(e, t)) {
          var a = Lf();
          return Ys(), $o = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Jm(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Zm && !Ks(t) ? null : t.data;
        default:
          return null;
      }
    }
    function If(e, t, a, o, u) {
      var d;
      if (qp ? d = ey(t, o) : d = rS(t, o), !d)
        return null;
      var m = iy(a, "onBeforeInput");
      if (m.length > 0) {
        var b = new Z0("onBeforeInput", "beforeinput", null, o, u);
        e.push({
          event: b,
          listeners: m
        }), b.data = d;
      }
    }
    function aS(e, t, a, o, u, d, m) {
      Vf(e, t, a, o, u), If(e, t, a, o, u);
    }
    var Zs = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function ty(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Zs[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Yf(e) {
      if (!Tt)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var o = document.createElement("div");
        o.setAttribute(t, "return;"), a = typeof o[t] == "function";
      }
      return a;
    }
    function n() {
      Ct("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function r(e, t, a, o) {
      Vc(o);
      var u = iy(t, "onChange");
      if (u.length > 0) {
        var d = new zf("onChange", "change", null, a, o);
        e.push({
          event: d,
          listeners: u
        });
      }
    }
    var l = null, f = null;
    function v(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function g(e) {
      var t = [];
      r(t, f, e, Hc(e)), vp(T, t);
    }
    function T(e) {
      vC(e, 0);
    }
    function N(e) {
      var t = Kf(e);
      if (Ph(t))
        return e;
    }
    function j(e, t) {
      if (e === "change")
        return t;
    }
    var Z = !1;
    Tt && (Z = Yf("input") && (!document.documentMode || document.documentMode > 9));
    function he(e, t) {
      l = e, f = t, l.attachEvent("onpropertychange", pe);
    }
    function ge() {
      l && (l.detachEvent("onpropertychange", pe), l = null, f = null);
    }
    function pe(e) {
      e.propertyName === "value" && N(f) && g(e);
    }
    function $e(e, t, a) {
      e === "focusin" ? (ge(), he(t, a)) : e === "focusout" && ge();
    }
    function Ye(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return N(f);
    }
    function qe(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function $n(e, t) {
      if (e === "click")
        return N(t);
    }
    function W(e, t) {
      if (e === "input" || e === "change")
        return N(t);
    }
    function H(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Co(e, "number", e.value);
    }
    function X(e, t, a, o, u, d, m) {
      var b = a ? Kf(a) : window, E, R;
      if (v(b) ? E = j : ty(b) ? Z ? E = W : (E = Ye, R = $e) : qe(b) && (E = $n), E) {
        var D = E(t, a);
        if (D) {
          r(e, D, o, u);
          return;
        }
      }
      R && R(t, b, a), t === "focusout" && H(b);
    }
    function Te() {
      ye("onMouseEnter", ["mouseout", "mouseover"]), ye("onMouseLeave", ["mouseout", "mouseover"]), ye("onPointerEnter", ["pointerout", "pointerover"]), ye("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function et(e, t, a, o, u, d, m) {
      var b = t === "mouseover" || t === "pointerover", E = t === "mouseout" || t === "pointerout";
      if (b && !vm(o)) {
        var R = o.relatedTarget || o.fromElement;
        if (R && (tc(R) || pv(R)))
          return;
      }
      if (!(!E && !b)) {
        var D;
        if (u.window === u)
          D = u;
        else {
          var V = u.ownerDocument;
          V ? D = V.defaultView || V.parentWindow : D = window;
        }
        var F, K;
        if (E) {
          var J = o.relatedTarget || o.toElement;
          if (F = a, K = J ? tc(J) : null, K !== null) {
            var ae = Sa(K);
            (K !== ae || K.tag !== $ && K.tag !== B) && (K = null);
          }
        } else
          F = null, K = a;
        if (F !== K) {
          var ze = Uf, lt = "onMouseLeave", nt = "onMouseEnter", Lt = "mouse";
          (t === "pointerout" || t === "pointerover") && (ze = Km, lt = "onPointerLeave", nt = "onPointerEnter", Lt = "pointer");
          var kt = F == null ? D : Kf(F), G = K == null ? D : Kf(K), ie = new ze(lt, Lt + "leave", F, o, u);
          ie.target = kt, ie.relatedTarget = G;
          var Q = null, Se = tc(u);
          if (Se === a) {
            var Be = new ze(nt, Lt + "enter", K, o, u);
            Be.target = G, Be.relatedTarget = kt, Q = Be;
          }
          dk(e, ie, Q, F, K);
        }
      }
    }
    function ut(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var We = typeof Object.is == "function" ? Object.is : ut;
    function ct(e, t) {
      if (We(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), o = Object.keys(t);
      if (a.length !== o.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var d = a[u];
        if (!ke.call(t, d) || !We(e[d], t[d]))
          return !1;
      }
      return !0;
    }
    function ar(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Ut(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function ao(e, t) {
      for (var a = ar(e), o = 0, u = 0; a; ) {
        if (a.nodeType === Wi) {
          if (u = o + a.textContent.length, o <= t && u >= t)
            return {
              node: a,
              offset: t - o
            };
          o = u;
        }
        a = ar(Ut(a));
      }
    }
    function iS(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, o = a.getSelection && a.getSelection();
      if (!o || o.rangeCount === 0)
        return null;
      var u = o.anchorNode, d = o.anchorOffset, m = o.focusNode, b = o.focusOffset;
      try {
        u.nodeType, m.nodeType;
      } catch {
        return null;
      }
      return WO(e, u, d, m, b);
    }
    function WO(e, t, a, o, u) {
      var d = 0, m = -1, b = -1, E = 0, R = 0, D = e, V = null;
      e: for (; ; ) {
        for (var F = null; D === t && (a === 0 || D.nodeType === Wi) && (m = d + a), D === o && (u === 0 || D.nodeType === Wi) && (b = d + u), D.nodeType === Wi && (d += D.nodeValue.length), (F = D.firstChild) !== null; )
          V = D, D = F;
        for (; ; ) {
          if (D === e)
            break e;
          if (V === t && ++E === a && (m = d), V === o && ++R === u && (b = d), (F = D.nextSibling) !== null)
            break;
          D = V, V = D.parentNode;
        }
        D = F;
      }
      return m === -1 || b === -1 ? null : {
        start: m,
        end: b
      };
    }
    function GO(e, t) {
      var a = e.ownerDocument || document, o = a && a.defaultView || window;
      if (o.getSelection) {
        var u = o.getSelection(), d = e.textContent.length, m = Math.min(t.start, d), b = t.end === void 0 ? m : Math.min(t.end, d);
        if (!u.extend && m > b) {
          var E = b;
          b = m, m = E;
        }
        var R = ao(e, m), D = ao(e, b);
        if (R && D) {
          if (u.rangeCount === 1 && u.anchorNode === R.node && u.anchorOffset === R.offset && u.focusNode === D.node && u.focusOffset === D.offset)
            return;
          var V = a.createRange();
          V.setStart(R.node, R.offset), u.removeAllRanges(), m > b ? (u.addRange(V), u.extend(D.node, D.offset)) : (V.setEnd(D.node, D.offset), u.addRange(V));
        }
      }
    }
    function nC(e) {
      return e && e.nodeType === Wi;
    }
    function rC(e, t) {
      return !e || !t ? !1 : e === t ? !0 : nC(e) ? !1 : nC(t) ? rC(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function QO(e) {
      return e && e.ownerDocument && rC(e.ownerDocument.documentElement, e);
    }
    function qO(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function aC() {
      for (var e = window, t = Dc(); t instanceof e.HTMLIFrameElement; ) {
        if (qO(t))
          e = t.contentWindow;
        else
          return t;
        t = Dc(e.document);
      }
      return t;
    }
    function oS(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function XO() {
      var e = aC();
      return {
        focusedElem: e,
        selectionRange: oS(e) ? ZO(e) : null
      };
    }
    function KO(e) {
      var t = aC(), a = e.focusedElem, o = e.selectionRange;
      if (t !== a && QO(a)) {
        o !== null && oS(a) && JO(a, o);
        for (var u = [], d = a; d = d.parentNode; )
          d.nodeType === Zr && u.push({
            element: d,
            left: d.scrollLeft,
            top: d.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var m = 0; m < u.length; m++) {
          var b = u[m];
          b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
        }
      }
    }
    function ZO(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = iS(e), t || {
        start: 0,
        end: 0
      };
    }
    function JO(e, t) {
      var a = t.start, o = t.end;
      o === void 0 && (o = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(o, e.value.length)) : GO(e, t);
    }
    var ek = Tt && "documentMode" in document && document.documentMode <= 11;
    function tk() {
      Ct("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Wf = null, lS = null, ev = null, uS = !1;
    function nk(e) {
      if ("selectionStart" in e && oS(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function rk(e) {
      return e.window === e ? e.document : e.nodeType === oi ? e : e.ownerDocument;
    }
    function iC(e, t, a) {
      var o = rk(a);
      if (!(uS || Wf == null || Wf !== Dc(o))) {
        var u = nk(Wf);
        if (!ev || !ct(ev, u)) {
          ev = u;
          var d = iy(lS, "onSelect");
          if (d.length > 0) {
            var m = new zf("onSelect", "select", null, t, a);
            e.push({
              event: m,
              listeners: d
            }), m.target = Wf;
          }
        }
      }
    }
    function ak(e, t, a, o, u, d, m) {
      var b = a ? Kf(a) : window;
      switch (t) {
        case "focusin":
          (ty(b) || b.contentEditable === "true") && (Wf = b, lS = a, ev = null);
          break;
        case "focusout":
          Wf = null, lS = null, ev = null;
          break;
        case "mousedown":
          uS = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          uS = !1, iC(e, o, u);
          break;
        case "selectionchange":
          if (ek)
            break;
        case "keydown":
        case "keyup":
          iC(e, o, u);
      }
    }
    function ny(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Gf = {
      animationend: ny("Animation", "AnimationEnd"),
      animationiteration: ny("Animation", "AnimationIteration"),
      animationstart: ny("Animation", "AnimationStart"),
      transitionend: ny("Transition", "TransitionEnd")
    }, sS = {}, oC = {};
    Tt && (oC = document.createElement("div").style, "AnimationEvent" in window || (delete Gf.animationend.animation, delete Gf.animationiteration.animation, delete Gf.animationstart.animation), "TransitionEvent" in window || delete Gf.transitionend.transition);
    function ry(e) {
      if (sS[e])
        return sS[e];
      if (!Gf[e])
        return e;
      var t = Gf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in oC)
          return sS[e] = t[a];
      return e;
    }
    var lC = ry("animationend"), uC = ry("animationiteration"), sC = ry("animationstart"), cC = ry("transitionend"), fC = /* @__PURE__ */ new Map(), dC = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Pu(e, t) {
      fC.set(e, t), Ct(t, [e]);
    }
    function ik() {
      for (var e = 0; e < dC.length; e++) {
        var t = dC[e], a = t.toLowerCase(), o = t[0].toUpperCase() + t.slice(1);
        Pu(a, "on" + o);
      }
      Pu(lC, "onAnimationEnd"), Pu(uC, "onAnimationIteration"), Pu(sC, "onAnimationStart"), Pu("dblclick", "onDoubleClick"), Pu("focusin", "onFocus"), Pu("focusout", "onBlur"), Pu(cC, "onTransitionEnd");
    }
    function ok(e, t, a, o, u, d, m) {
      var b = fC.get(t);
      if (b !== void 0) {
        var E = zf, R = t;
        switch (t) {
          case "keypress":
            if (Ol(o) === 0)
              return;
          case "keydown":
          case "keyup":
            E = qm;
            break;
          case "focusin":
            R = "focus", E = Gs;
            break;
          case "focusout":
            R = "blur", E = Gs;
            break;
          case "beforeblur":
          case "afterblur":
            E = Gs;
            break;
          case "click":
            if (o.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            E = Uf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            E = Vm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            E = Qp;
            break;
          case lC:
          case uC:
          case sC:
            E = X0;
            break;
          case cC:
            E = Po;
            break;
          case "scroll":
            E = Ip;
            break;
          case "wheel":
            E = _l;
            break;
          case "copy":
          case "cut":
          case "paste":
            E = Ym;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            E = Km;
            break;
        }
        var D = (d & sl) !== 0;
        {
          var V = !D && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", F = ck(a, b, o.type, D, V);
          if (F.length > 0) {
            var K = new E(b, R, null, o, u);
            e.push({
              event: K,
              listeners: F
            });
          }
        }
      }
    }
    ik(), Te(), n(), tk(), Bf();
    function lk(e, t, a, o, u, d, m) {
      ok(e, t, a, o, u, d);
      var b = (d & P0) === 0;
      b && (et(e, t, a, o, u), X(e, t, a, o, u), ak(e, t, a, o, u), aS(e, t, a, o, u));
    }
    var tv = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], cS = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(tv));
    function pC(e, t, a) {
      var o = e.type || "unknown-event";
      e.currentTarget = a, Xi(o, t, void 0, e), e.currentTarget = null;
    }
    function uk(e, t, a) {
      var o;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var d = t[u], m = d.instance, b = d.currentTarget, E = d.listener;
          if (m !== o && e.isPropagationStopped())
            return;
          pC(e, E, b), o = m;
        }
      else
        for (var R = 0; R < t.length; R++) {
          var D = t[R], V = D.instance, F = D.currentTarget, K = D.listener;
          if (V !== o && e.isPropagationStopped())
            return;
          pC(e, K, F), o = V;
        }
    }
    function vC(e, t) {
      for (var a = (t & sl) !== 0, o = 0; o < e.length; o++) {
        var u = e[o], d = u.event, m = u.listeners;
        uk(d, m, a);
      }
      gp();
    }
    function sk(e, t, a, o, u) {
      var d = Hc(a), m = [];
      lk(m, e, o, a, d, t), vC(m, t);
    }
    function On(e, t) {
      cS.has(e) || y('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, o = jD(t), u = pk(e);
      o.has(u) || (hC(t, e, Es, a), o.add(u));
    }
    function fS(e, t, a) {
      cS.has(e) && !t && y('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var o = 0;
      t && (o |= sl), hC(a, e, o, t);
    }
    var ay = "_reactListening" + Math.random().toString(36).slice(2);
    function nv(e) {
      if (!e[ay]) {
        e[ay] = !0, Ve.forEach(function(a) {
          a !== "selectionchange" && (cS.has(a) || fS(a, !1, e), fS(a, !0, e));
        });
        var t = e.nodeType === oi ? e : e.ownerDocument;
        t !== null && (t[ay] || (t[ay] = !0, fS("selectionchange", !1, t)));
      }
    }
    function hC(e, t, a, o, u) {
      var d = nr(e, t, a), m = void 0;
      Rs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (m = !0), e = e, o ? m !== void 0 ? Nf(e, t, d, m) : no(e, t, d) : m !== void 0 ? Vp(e, t, d, m) : Au(e, t, d);
    }
    function mC(e, t) {
      return e === t || e.nodeType === Hn && e.parentNode === t;
    }
    function dS(e, t, a, o, u) {
      var d = o;
      if (!(t & Qi) && !(t & Es)) {
        var m = u;
        if (o !== null) {
          var b = o;
          e: for (; ; ) {
            if (b === null)
              return;
            var E = b.tag;
            if (E === M || E === A) {
              var R = b.stateNode.containerInfo;
              if (mC(R, m))
                break;
              if (E === A)
                for (var D = b.return; D !== null; ) {
                  var V = D.tag;
                  if (V === M || V === A) {
                    var F = D.stateNode.containerInfo;
                    if (mC(F, m))
                      return;
                  }
                  D = D.return;
                }
              for (; R !== null; ) {
                var K = tc(R);
                if (K === null)
                  return;
                var J = K.tag;
                if (J === $ || J === B) {
                  b = d = K;
                  continue e;
                }
                R = R.parentNode;
              }
            }
            b = b.return;
          }
        }
      }
      vp(function() {
        return sk(e, t, a, d);
      });
    }
    function rv(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function ck(e, t, a, o, u, d) {
      for (var m = t !== null ? t + "Capture" : null, b = o ? m : t, E = [], R = e, D = null; R !== null; ) {
        var V = R, F = V.stateNode, K = V.tag;
        if (K === $ && F !== null && (D = F, b !== null)) {
          var J = fl(R, b);
          J != null && E.push(rv(R, J, D));
        }
        if (u)
          break;
        R = R.return;
      }
      return E;
    }
    function iy(e, t) {
      for (var a = t + "Capture", o = [], u = e; u !== null; ) {
        var d = u, m = d.stateNode, b = d.tag;
        if (b === $ && m !== null) {
          var E = m, R = fl(u, a);
          R != null && o.unshift(rv(u, R, E));
          var D = fl(u, t);
          D != null && o.push(rv(u, D, E));
        }
        u = u.return;
      }
      return o;
    }
    function Qf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== $);
      return e || null;
    }
    function fk(e, t) {
      for (var a = e, o = t, u = 0, d = a; d; d = Qf(d))
        u++;
      for (var m = 0, b = o; b; b = Qf(b))
        m++;
      for (; u - m > 0; )
        a = Qf(a), u--;
      for (; m - u > 0; )
        o = Qf(o), m--;
      for (var E = u; E--; ) {
        if (a === o || o !== null && a === o.alternate)
          return a;
        a = Qf(a), o = Qf(o);
      }
      return null;
    }
    function yC(e, t, a, o, u) {
      for (var d = t._reactName, m = [], b = a; b !== null && b !== o; ) {
        var E = b, R = E.alternate, D = E.stateNode, V = E.tag;
        if (R !== null && R === o)
          break;
        if (V === $ && D !== null) {
          var F = D;
          if (u) {
            var K = fl(b, d);
            K != null && m.unshift(rv(b, K, F));
          } else if (!u) {
            var J = fl(b, d);
            J != null && m.push(rv(b, J, F));
          }
        }
        b = b.return;
      }
      m.length !== 0 && e.push({
        event: t,
        listeners: m
      });
    }
    function dk(e, t, a, o, u) {
      var d = o && u ? fk(o, u) : null;
      o !== null && yC(e, t, o, d, !1), u !== null && a !== null && yC(e, a, u, d, !0);
    }
    function pk(e, t) {
      return e + "__bubble";
    }
    var Wa = !1, av = "dangerouslySetInnerHTML", oy = "suppressContentEditableWarning", $u = "suppressHydrationWarning", gC = "autoFocus", Js = "children", ec = "style", ly = "__html", pS, uy, iv, SC, sy, bC, EC;
    pS = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, uy = function(e, t) {
      Bc(e, t), sp(e, t), pm(e, t, {
        registrationNameDependencies: it,
        possibleRegistrationNames: st
      });
    }, bC = Tt && !document.documentMode, iv = function(e, t, a) {
      if (!Wa) {
        var o = cy(a), u = cy(t);
        u !== o && (Wa = !0, y("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(o)));
      }
    }, SC = function(e) {
      if (!Wa) {
        Wa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), y("Extra attributes from the server: %s", t);
      }
    }, sy = function(e, t) {
      t === !1 ? y("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : y("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, EC = function(e, t) {
      var a = e.namespaceURI === Yi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var vk = /\r\n?/g, hk = /\u0000|\uFFFD/g;
    function cy(e) {
      qn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(vk, `
`).replace(hk, "");
    }
    function fy(e, t, a, o) {
      var u = cy(t), d = cy(e);
      if (d !== u && (o && (Wa || (Wa = !0, y('Text content did not match. Server: "%s" Client: "%s"', d, u))), a && Fe))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function CC(e) {
      return e.nodeType === oi ? e : e.ownerDocument;
    }
    function mk() {
    }
    function dy(e) {
      e.onclick = mk;
    }
    function yk(e, t, a, o, u) {
      for (var d in o)
        if (o.hasOwnProperty(d)) {
          var m = o[d];
          if (d === ec)
            m && Object.freeze(m), rm(t, m);
          else if (d === av) {
            var b = m ? m[ly] : void 0;
            b != null && Wh(t, b);
          } else if (d === Js)
            if (typeof m == "string") {
              var E = e !== "textarea" || m !== "";
              E && Pc(t, m);
            } else typeof m == "number" && Pc(t, "" + m);
          else d === oy || d === $u || d === gC || (it.hasOwnProperty(d) ? m != null && (typeof m != "function" && sy(d, m), d === "onScroll" && On("scroll", t)) : m != null && Si(t, d, m, u));
        }
    }
    function gk(e, t, a, o) {
      for (var u = 0; u < t.length; u += 2) {
        var d = t[u], m = t[u + 1];
        d === ec ? rm(e, m) : d === av ? Wh(e, m) : d === Js ? Pc(e, m) : Si(e, d, m, o);
      }
    }
    function Sk(e, t, a, o) {
      var u, d = CC(a), m, b = o;
      if (b === Yi && (b = zc(e)), b === Yi) {
        if (u = Gi(e, t), !u && e !== e.toLowerCase() && y("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var E = d.createElement("div");
          E.innerHTML = "<script><\/script>";
          var R = E.firstChild;
          m = E.removeChild(R);
        } else if (typeof t.is == "string")
          m = d.createElement(e, {
            is: t.is
          });
        else if (m = d.createElement(e), e === "select") {
          var D = m;
          t.multiple ? D.multiple = !0 : t.size && (D.size = t.size);
        }
      } else
        m = d.createElementNS(b, e);
      return b === Yi && !u && Object.prototype.toString.call(m) === "[object HTMLUnknownElement]" && !ke.call(pS, e) && (pS[e] = !0, y("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), m;
    }
    function bk(e, t) {
      return CC(t).createTextNode(e);
    }
    function Ek(e, t, a, o) {
      var u = Gi(t, a);
      uy(t, a);
      var d;
      switch (t) {
        case "dialog":
          On("cancel", e), On("close", e), d = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          On("load", e), d = a;
          break;
        case "video":
        case "audio":
          for (var m = 0; m < tv.length; m++)
            On(tv[m], e);
          d = a;
          break;
        case "source":
          On("error", e), d = a;
          break;
        case "img":
        case "image":
        case "link":
          On("error", e), On("load", e), d = a;
          break;
        case "details":
          On("toggle", e), d = a;
          break;
        case "input":
          hs(e, a), d = vs(e, a), On("invalid", e);
          break;
        case "option":
          Ac(e, a), d = a;
          break;
        case "select":
          Hh(e, a), d = Zd(e, a), On("invalid", e);
          break;
        case "textarea":
          Vh(e, a), d = ep(e, a), On("invalid", e);
          break;
        default:
          d = a;
      }
      switch (jc(t, d), yk(t, e, o, d, u), t) {
        case "input":
          ol(e), ms(e, a, !1);
          break;
        case "textarea":
          ol(e), Yh(e);
          break;
        case "option":
          Kd(e, a);
          break;
        case "select":
          R0(e, a);
          break;
        default:
          typeof d.onClick == "function" && dy(e);
          break;
      }
    }
    function Ck(e, t, a, o, u) {
      uy(t, o);
      var d = null, m, b;
      switch (t) {
        case "input":
          m = vs(e, a), b = vs(e, o), d = [];
          break;
        case "select":
          m = Zd(e, a), b = Zd(e, o), d = [];
          break;
        case "textarea":
          m = ep(e, a), b = ep(e, o), d = [];
          break;
        default:
          m = a, b = o, typeof m.onClick != "function" && typeof b.onClick == "function" && dy(e);
          break;
      }
      jc(t, b);
      var E, R, D = null;
      for (E in m)
        if (!(b.hasOwnProperty(E) || !m.hasOwnProperty(E) || m[E] == null))
          if (E === ec) {
            var V = m[E];
            for (R in V)
              V.hasOwnProperty(R) && (D || (D = {}), D[R] = "");
          } else E === av || E === Js || E === oy || E === $u || E === gC || (it.hasOwnProperty(E) ? d || (d = []) : (d = d || []).push(E, null));
      for (E in b) {
        var F = b[E], K = m != null ? m[E] : void 0;
        if (!(!b.hasOwnProperty(E) || F === K || F == null && K == null))
          if (E === ec)
            if (F && Object.freeze(F), K) {
              for (R in K)
                K.hasOwnProperty(R) && (!F || !F.hasOwnProperty(R)) && (D || (D = {}), D[R] = "");
              for (R in F)
                F.hasOwnProperty(R) && K[R] !== F[R] && (D || (D = {}), D[R] = F[R]);
            } else
              D || (d || (d = []), d.push(E, D)), D = F;
          else if (E === av) {
            var J = F ? F[ly] : void 0, ae = K ? K[ly] : void 0;
            J != null && ae !== J && (d = d || []).push(E, J);
          } else E === Js ? (typeof F == "string" || typeof F == "number") && (d = d || []).push(E, "" + F) : E === oy || E === $u || (it.hasOwnProperty(E) ? (F != null && (typeof F != "function" && sy(E, F), E === "onScroll" && On("scroll", e)), !d && K !== F && (d = [])) : (d = d || []).push(E, F));
      }
      return D && (Ss(D, b[ec]), (d = d || []).push(ec, D)), d;
    }
    function Tk(e, t, a, o, u) {
      a === "input" && u.type === "radio" && u.name != null && Xd(e, u);
      var d = Gi(a, o), m = Gi(a, u);
      switch (gk(e, t, d, m), a) {
        case "input":
          Jl(e, u);
          break;
        case "textarea":
          Ih(e, u);
          break;
        case "select":
          O0(e, u);
          break;
      }
    }
    function xk(e) {
      {
        var t = e.toLowerCase();
        return Fc.hasOwnProperty(t) && Fc[t] || null;
      }
    }
    function wk(e, t, a, o, u, d, m) {
      var b, E;
      switch (b = Gi(t, a), uy(t, a), t) {
        case "dialog":
          On("cancel", e), On("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          On("load", e);
          break;
        case "video":
        case "audio":
          for (var R = 0; R < tv.length; R++)
            On(tv[R], e);
          break;
        case "source":
          On("error", e);
          break;
        case "img":
        case "image":
        case "link":
          On("error", e), On("load", e);
          break;
        case "details":
          On("toggle", e);
          break;
        case "input":
          hs(e, a), On("invalid", e);
          break;
        case "option":
          Ac(e, a);
          break;
        case "select":
          Hh(e, a), On("invalid", e);
          break;
        case "textarea":
          Vh(e, a), On("invalid", e);
          break;
      }
      jc(t, a);
      {
        E = /* @__PURE__ */ new Set();
        for (var D = e.attributes, V = 0; V < D.length; V++) {
          var F = D[V].name.toLowerCase();
          switch (F) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              E.add(D[V].name);
          }
        }
      }
      var K = null;
      for (var J in a)
        if (a.hasOwnProperty(J)) {
          var ae = a[J];
          if (J === Js)
            typeof ae == "string" ? e.textContent !== ae && (a[$u] !== !0 && fy(e.textContent, ae, d, m), K = [Js, ae]) : typeof ae == "number" && e.textContent !== "" + ae && (a[$u] !== !0 && fy(e.textContent, ae, d, m), K = [Js, "" + ae]);
          else if (it.hasOwnProperty(J))
            ae != null && (typeof ae != "function" && sy(J, ae), J === "onScroll" && On("scroll", e));
          else if (m && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof b == "boolean") {
            var ze = void 0, lt = b && Ie ? null : $r(J);
            if (a[$u] !== !0) {
              if (!(J === oy || J === $u || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              J === "value" || J === "checked" || J === "selected")) {
                if (J === av) {
                  var nt = e.innerHTML, Lt = ae ? ae[ly] : void 0;
                  if (Lt != null) {
                    var kt = EC(e, Lt);
                    kt !== nt && iv(J, nt, kt);
                  }
                } else if (J === ec) {
                  if (E.delete(J), bC) {
                    var G = z0(ae);
                    ze = e.getAttribute("style"), G !== ze && iv(J, ze, G);
                  }
                } else if (b && !Ie)
                  E.delete(J.toLowerCase()), ze = ql(e, J, ae), ae !== ze && iv(J, ze, ae);
                else if (!gn(J, lt, b) && !Yt(J, ae, lt, b)) {
                  var ie = !1;
                  if (lt !== null)
                    E.delete(lt.attributeName), ze = nl(e, J, ae, lt);
                  else {
                    var Q = o;
                    if (Q === Yi && (Q = zc(t)), Q === Yi)
                      E.delete(J.toLowerCase());
                    else {
                      var Se = xk(J);
                      Se !== null && Se !== J && (ie = !0, E.delete(Se)), E.delete(J);
                    }
                    ze = ql(e, J, ae);
                  }
                  var Be = Ie;
                  !Be && ae !== ze && !ie && iv(J, ze, ae);
                }
              }
            }
          }
        }
      switch (m && // $FlowFixMe - Should be inferred as not undefined.
      E.size > 0 && a[$u] !== !0 && SC(E), t) {
        case "input":
          ol(e), ms(e, a, !0);
          break;
        case "textarea":
          ol(e), Yh(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && dy(e);
          break;
      }
      return K;
    }
    function Rk(e, t, a) {
      var o = e.nodeValue !== t;
      return o;
    }
    function vS(e, t) {
      {
        if (Wa)
          return;
        Wa = !0, y("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function hS(e, t) {
      {
        if (Wa)
          return;
        Wa = !0, y('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function mS(e, t, a) {
      {
        if (Wa)
          return;
        Wa = !0, y("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function yS(e, t) {
      {
        if (t === "" || Wa)
          return;
        Wa = !0, y('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function Ok(e, t, a) {
      switch (t) {
        case "input":
          $h(e, a);
          return;
        case "textarea":
          tp(e, a);
          return;
        case "select":
          k0(e, a);
          return;
      }
    }
    var ov = function() {
    }, lv = function() {
    };
    {
      var kk = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], TC = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], Dk = TC.concat(["button"]), _k = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], xC = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      lv = function(e, t) {
        var a = wt({}, e || xC), o = {
          tag: t
        };
        return TC.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), Dk.indexOf(t) !== -1 && (a.pTagInButtonScope = null), kk.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = o, t === "form" && (a.formTag = o), t === "a" && (a.aTagInScope = o), t === "button" && (a.buttonTagInScope = o), t === "nobr" && (a.nobrTagInScope = o), t === "p" && (a.pTagInButtonScope = o), t === "li" && (a.listItemTagAutoclosing = o), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = o), a;
      };
      var Mk = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return _k.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, Nk = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, wC = {};
      ov = function(e, t, a) {
        a = a || xC;
        var o = a.current, u = o && o.tag;
        t != null && (e != null && y("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var d = Mk(e, u) ? null : o, m = d ? null : Nk(e, a), b = d || m;
        if (b) {
          var E = b.tag, R = !!d + "|" + e + "|" + E;
          if (!wC[R]) {
            wC[R] = !0;
            var D = e, V = "";
            if (e === "#text" ? /\S/.test(t) ? D = "Text nodes" : (D = "Whitespace text nodes", V = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : D = "<" + e + ">", d) {
              var F = "";
              E === "table" && e === "tr" && (F += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), y("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", D, E, V, F);
            } else
              y("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", D, E);
          }
        }
      };
    }
    var py = "suppressHydrationWarning", vy = "$", hy = "/$", uv = "$?", sv = "$!", Ak = "style", gS = null, SS = null;
    function Lk(e) {
      var t, a, o = e.nodeType;
      switch (o) {
        case oi:
        case ll: {
          t = o === oi ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : rp(null, "");
          break;
        }
        default: {
          var d = o === Hn ? e.parentNode : e, m = d.namespaceURI || null;
          t = d.tagName, a = rp(m, t);
          break;
        }
      }
      {
        var b = t.toLowerCase(), E = lv(null, b);
        return {
          namespace: a,
          ancestorInfo: E
        };
      }
    }
    function zk(e, t, a) {
      {
        var o = e, u = rp(o.namespace, t), d = lv(o.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: d
        };
      }
    }
    function z5(e) {
      return e;
    }
    function Uk(e) {
      gS = Mu(), SS = XO();
      var t = null;
      return ua(!1), t;
    }
    function Pk(e) {
      KO(SS), ua(gS), gS = null, SS = null;
    }
    function $k(e, t, a, o, u) {
      var d;
      {
        var m = o;
        if (ov(e, null, m.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var b = "" + t.children, E = lv(m.ancestorInfo, e);
          ov(null, b, E);
        }
        d = m.namespace;
      }
      var R = Sk(e, t, a, d);
      return dv(u, R), OS(R, t), R;
    }
    function jk(e, t) {
      e.appendChild(t);
    }
    function Fk(e, t, a, o, u) {
      switch (Ek(e, t, a, o), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function Bk(e, t, a, o, u, d) {
      {
        var m = d;
        if (typeof o.children != typeof a.children && (typeof o.children == "string" || typeof o.children == "number")) {
          var b = "" + o.children, E = lv(m.ancestorInfo, t);
          ov(null, b, E);
        }
      }
      return Ck(e, t, a, o);
    }
    function bS(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Hk(e, t, a, o) {
      {
        var u = a;
        ov(null, e, u.ancestorInfo);
      }
      var d = bk(e, t);
      return dv(o, d), d;
    }
    function Vk() {
      var e = window.event;
      return e === void 0 ? xi : Mf(e.type);
    }
    var ES = typeof setTimeout == "function" ? setTimeout : void 0, Ik = typeof clearTimeout == "function" ? clearTimeout : void 0, CS = -1, RC = typeof Promise == "function" ? Promise : void 0, Yk = typeof queueMicrotask == "function" ? queueMicrotask : typeof RC < "u" ? function(e) {
      return RC.resolve(null).then(e).catch(Wk);
    } : ES;
    function Wk(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Gk(e, t, a, o) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function Qk(e, t, a, o, u, d) {
      Tk(e, t, a, o, u), OS(e, u);
    }
    function OC(e) {
      Pc(e, "");
    }
    function qk(e, t, a) {
      e.nodeValue = a;
    }
    function Xk(e, t) {
      e.appendChild(t);
    }
    function Kk(e, t) {
      var a;
      e.nodeType === Hn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var o = e._reactRootContainer;
      o == null && a.onclick === null && dy(a);
    }
    function Zk(e, t, a) {
      e.insertBefore(t, a);
    }
    function Jk(e, t, a) {
      e.nodeType === Hn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function eD(e, t) {
      e.removeChild(t);
    }
    function tD(e, t) {
      e.nodeType === Hn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function TS(e, t) {
      var a = t, o = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Hn) {
          var d = u.data;
          if (d === hy)
            if (o === 0) {
              e.removeChild(u), Mn(t);
              return;
            } else
              o--;
          else (d === vy || d === uv || d === sv) && o++;
        }
        a = u;
      } while (a);
      Mn(t);
    }
    function nD(e, t) {
      e.nodeType === Hn ? TS(e.parentNode, t) : e.nodeType === Zr && TS(e, t), Mn(e);
    }
    function rD(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function aD(e) {
      e.nodeValue = "";
    }
    function iD(e, t) {
      e = e;
      var a = t[Ak], o = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = $c("display", o);
    }
    function oD(e, t) {
      e.nodeValue = t;
    }
    function lD(e) {
      e.nodeType === Zr ? e.textContent = "" : e.nodeType === oi && e.documentElement && e.removeChild(e.documentElement);
    }
    function uD(e, t, a) {
      return e.nodeType !== Zr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function sD(e, t) {
      return t === "" || e.nodeType !== Wi ? null : e;
    }
    function cD(e) {
      return e.nodeType !== Hn ? null : e;
    }
    function kC(e) {
      return e.data === uv;
    }
    function xS(e) {
      return e.data === sv;
    }
    function fD(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, o, u;
      return t && (a = t.dgst, o = t.msg, u = t.stck), {
        message: o,
        digest: a,
        stack: u
      };
    }
    function dD(e, t) {
      e._reactRetry = t;
    }
    function my(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Zr || t === Wi)
          break;
        if (t === Hn) {
          var a = e.data;
          if (a === vy || a === sv || a === uv)
            break;
          if (a === hy)
            return null;
        }
      }
      return e;
    }
    function cv(e) {
      return my(e.nextSibling);
    }
    function pD(e) {
      return my(e.firstChild);
    }
    function vD(e) {
      return my(e.firstChild);
    }
    function hD(e) {
      return my(e.nextSibling);
    }
    function mD(e, t, a, o, u, d, m) {
      dv(d, e), OS(e, a);
      var b;
      {
        var E = u;
        b = E.namespace;
      }
      var R = (d.mode & tt) !== Je;
      return wk(e, t, a, b, o, R, m);
    }
    function yD(e, t, a, o) {
      return dv(a, e), a.mode & tt, Rk(e, t);
    }
    function gD(e, t) {
      dv(t, e);
    }
    function SD(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Hn) {
          var o = t.data;
          if (o === hy) {
            if (a === 0)
              return cv(t);
            a--;
          } else (o === vy || o === sv || o === uv) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function DC(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Hn) {
          var o = t.data;
          if (o === vy || o === sv || o === uv) {
            if (a === 0)
              return t;
            a--;
          } else o === hy && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function bD(e) {
      Mn(e);
    }
    function ED(e) {
      Mn(e);
    }
    function CD(e) {
      return e !== "head" && e !== "body";
    }
    function TD(e, t, a, o) {
      var u = !0;
      fy(t.nodeValue, a, o, u);
    }
    function xD(e, t, a, o, u, d) {
      if (t[py] !== !0) {
        var m = !0;
        fy(o.nodeValue, u, d, m);
      }
    }
    function wD(e, t) {
      t.nodeType === Zr ? vS(e, t) : t.nodeType === Hn || hS(e, t);
    }
    function RD(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Zr ? vS(a, t) : t.nodeType === Hn || hS(a, t));
      }
    }
    function OD(e, t, a, o, u) {
      (u || t[py] !== !0) && (o.nodeType === Zr ? vS(a, o) : o.nodeType === Hn || hS(a, o));
    }
    function kD(e, t, a) {
      mS(e, t);
    }
    function DD(e, t) {
      yS(e, t);
    }
    function _D(e, t, a) {
      {
        var o = e.parentNode;
        o !== null && mS(o, t);
      }
    }
    function MD(e, t) {
      {
        var a = e.parentNode;
        a !== null && yS(a, t);
      }
    }
    function ND(e, t, a, o, u, d) {
      (d || t[py] !== !0) && mS(a, o);
    }
    function AD(e, t, a, o, u) {
      (u || t[py] !== !0) && yS(a, o);
    }
    function LD(e) {
      y("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function zD(e) {
      nv(e);
    }
    var qf = Math.random().toString(36).slice(2), Xf = "__reactFiber$" + qf, wS = "__reactProps$" + qf, fv = "__reactContainer$" + qf, RS = "__reactEvents$" + qf, UD = "__reactListeners$" + qf, PD = "__reactHandles$" + qf;
    function $D(e) {
      delete e[Xf], delete e[wS], delete e[RS], delete e[UD], delete e[PD];
    }
    function dv(e, t) {
      t[Xf] = e;
    }
    function yy(e, t) {
      t[fv] = e;
    }
    function _C(e) {
      e[fv] = null;
    }
    function pv(e) {
      return !!e[fv];
    }
    function tc(e) {
      var t = e[Xf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[fv] || a[Xf], t) {
          var o = t.alternate;
          if (t.child !== null || o !== null && o.child !== null)
            for (var u = DC(e); u !== null; ) {
              var d = u[Xf];
              if (d)
                return d;
              u = DC(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function ju(e) {
      var t = e[Xf] || e[fv];
      return t && (t.tag === $ || t.tag === B || t.tag === U || t.tag === M) ? t : null;
    }
    function Kf(e) {
      if (e.tag === $ || e.tag === B)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function gy(e) {
      return e[wS] || null;
    }
    function OS(e, t) {
      e[wS] = t;
    }
    function jD(e) {
      var t = e[RS];
      return t === void 0 && (t = e[RS] = /* @__PURE__ */ new Set()), t;
    }
    var MC = {}, NC = c.ReactDebugCurrentFrame;
    function Sy(e) {
      if (e) {
        var t = e._owner, a = us(e.type, e._source, t ? t.type : null);
        NC.setExtraStackFrame(a);
      } else
        NC.setExtraStackFrame(null);
    }
    function io(e, t, a, o, u) {
      {
        var d = Function.call.bind(ke);
        for (var m in e)
          if (d(e, m)) {
            var b = void 0;
            try {
              if (typeof e[m] != "function") {
                var E = Error((o || "React class") + ": " + a + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              b = e[m](t, m, o, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (R) {
              b = R;
            }
            b && !(b instanceof Error) && (Sy(u), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, m, typeof b), Sy(null)), b instanceof Error && !(b.message in MC) && (MC[b.message] = !0, Sy(u), y("Failed %s type: %s", a, b.message), Sy(null));
          }
      }
    }
    var kS = [], by;
    by = [];
    var Ml = -1;
    function Fu(e) {
      return {
        current: e
      };
    }
    function sa(e, t) {
      if (Ml < 0) {
        y("Unexpected pop.");
        return;
      }
      t !== by[Ml] && y("Unexpected Fiber popped."), e.current = kS[Ml], kS[Ml] = null, by[Ml] = null, Ml--;
    }
    function ca(e, t, a) {
      Ml++, kS[Ml] = e.current, by[Ml] = a, e.current = t;
    }
    var DS;
    DS = {};
    var ci = {};
    Object.freeze(ci);
    var Nl = Fu(ci), jo = Fu(!1), _S = ci;
    function Zf(e, t, a) {
      return a && Fo(t) ? _S : Nl.current;
    }
    function AC(e, t, a) {
      {
        var o = e.stateNode;
        o.__reactInternalMemoizedUnmaskedChildContext = t, o.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Jf(e, t) {
      {
        var a = e.type, o = a.contextTypes;
        if (!o)
          return ci;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var d = {};
        for (var m in o)
          d[m] = t[m];
        {
          var b = gt(e) || "Unknown";
          io(o, d, "context", b);
        }
        return u && AC(e, t, d), d;
      }
    }
    function Ey() {
      return jo.current;
    }
    function Fo(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Cy(e) {
      sa(jo, e), sa(Nl, e);
    }
    function MS(e) {
      sa(jo, e), sa(Nl, e);
    }
    function LC(e, t, a) {
      {
        if (Nl.current !== ci)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ca(Nl, t, e), ca(jo, a, e);
      }
    }
    function zC(e, t, a) {
      {
        var o = e.stateNode, u = t.childContextTypes;
        if (typeof o.getChildContext != "function") {
          {
            var d = gt(e) || "Unknown";
            DS[d] || (DS[d] = !0, y("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", d, d));
          }
          return a;
        }
        var m = o.getChildContext();
        for (var b in m)
          if (!(b in u))
            throw new Error((gt(e) || "Unknown") + '.getChildContext(): key "' + b + '" is not defined in childContextTypes.');
        {
          var E = gt(e) || "Unknown";
          io(u, m, "child context", E);
        }
        return wt({}, a, m);
      }
    }
    function Ty(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ci;
        return _S = Nl.current, ca(Nl, a, e), ca(jo, jo.current, e), !0;
      }
    }
    function UC(e, t, a) {
      {
        var o = e.stateNode;
        if (!o)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = zC(e, t, _S);
          o.__reactInternalMemoizedMergedChildContext = u, sa(jo, e), sa(Nl, e), ca(Nl, u, e), ca(jo, a, e);
        } else
          sa(jo, e), ca(jo, a, e);
      }
    }
    function FD(e) {
      {
        if (!Tp(e) || e.tag !== k)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case M:
              return t.stateNode.context;
            case k: {
              var a = t.type;
              if (Fo(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Bu = 0, xy = 1, Al = null, NS = !1, AS = !1;
    function PC(e) {
      Al === null ? Al = [e] : Al.push(e);
    }
    function BD(e) {
      NS = !0, PC(e);
    }
    function $C() {
      NS && Hu();
    }
    function Hu() {
      if (!AS && Al !== null) {
        AS = !0;
        var e = 0, t = Ba();
        try {
          var a = !0, o = Al;
          for (_n(Pn); e < o.length; e++) {
            var u = o[e];
            do
              u = u(a);
            while (u !== null);
          }
          Al = null, NS = !1;
        } catch (d) {
          throw Al !== null && (Al = Al.slice(e + 1)), qc(Kc, Hu), d;
        } finally {
          _n(t), AS = !1;
        }
      }
      return null;
    }
    var ed = [], td = 0, wy = null, Ry = 0, ki = [], Di = 0, nc = null, Ll = 1, zl = "";
    function HD(e) {
      return ac(), (e.flags & bp) !== ot;
    }
    function VD(e) {
      return ac(), Ry;
    }
    function ID() {
      var e = zl, t = Ll, a = t & ~YD(t);
      return a.toString(32) + e;
    }
    function rc(e, t) {
      ac(), ed[td++] = Ry, ed[td++] = wy, wy = e, Ry = t;
    }
    function jC(e, t, a) {
      ac(), ki[Di++] = Ll, ki[Di++] = zl, ki[Di++] = nc, nc = e;
      var o = Ll, u = zl, d = Oy(o) - 1, m = o & ~(1 << d), b = a + 1, E = Oy(t) + d;
      if (E > 30) {
        var R = d - d % 5, D = (1 << R) - 1, V = (m & D).toString(32), F = m >> R, K = d - R, J = Oy(t) + K, ae = b << K, ze = ae | F, lt = V + u;
        Ll = 1 << J | ze, zl = lt;
      } else {
        var nt = b << d, Lt = nt | m, kt = u;
        Ll = 1 << E | Lt, zl = kt;
      }
    }
    function LS(e) {
      ac();
      var t = e.return;
      if (t !== null) {
        var a = 1, o = 0;
        rc(e, a), jC(e, a, o);
      }
    }
    function Oy(e) {
      return 32 - vu(e);
    }
    function YD(e) {
      return 1 << Oy(e) - 1;
    }
    function zS(e) {
      for (; e === wy; )
        wy = ed[--td], ed[td] = null, Ry = ed[--td], ed[td] = null;
      for (; e === nc; )
        nc = ki[--Di], ki[Di] = null, zl = ki[--Di], ki[Di] = null, Ll = ki[--Di], ki[Di] = null;
    }
    function WD() {
      return ac(), nc !== null ? {
        id: Ll,
        overflow: zl
      } : null;
    }
    function GD(e, t) {
      ac(), ki[Di++] = Ll, ki[Di++] = zl, ki[Di++] = nc, Ll = t.id, zl = t.overflow, nc = e;
    }
    function ac() {
      Br() || y("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Fr = null, _i = null, oo = !1, ic = !1, Vu = null;
    function QD() {
      oo && y("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function FC() {
      ic = !0;
    }
    function qD() {
      return ic;
    }
    function XD(e) {
      var t = e.stateNode.containerInfo;
      return _i = vD(t), Fr = e, oo = !0, Vu = null, ic = !1, !0;
    }
    function KD(e, t, a) {
      return _i = hD(t), Fr = e, oo = !0, Vu = null, ic = !1, a !== null && GD(e, a), !0;
    }
    function BC(e, t) {
      switch (e.tag) {
        case M: {
          wD(e.stateNode.containerInfo, t);
          break;
        }
        case $: {
          var a = (e.mode & tt) !== Je;
          OD(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case U: {
          var o = e.memoizedState;
          o.dehydrated !== null && RD(o.dehydrated, t);
          break;
        }
      }
    }
    function HC(e, t) {
      BC(e, t);
      var a = tN();
      a.stateNode = t, a.return = e;
      var o = e.deletions;
      o === null ? (e.deletions = [a], e.flags |= jt) : o.push(a);
    }
    function US(e, t) {
      {
        if (ic)
          return;
        switch (e.tag) {
          case M: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case $:
                var o = t.type;
                t.pendingProps, kD(a, o);
                break;
              case B:
                var u = t.pendingProps;
                DD(a, u);
                break;
            }
            break;
          }
          case $: {
            var d = e.type, m = e.memoizedProps, b = e.stateNode;
            switch (t.tag) {
              case $: {
                var E = t.type, R = t.pendingProps, D = (e.mode & tt) !== Je;
                ND(
                  d,
                  m,
                  b,
                  E,
                  R,
                  // TODO: Delete this argument when we remove the legacy root API.
                  D
                );
                break;
              }
              case B: {
                var V = t.pendingProps, F = (e.mode & tt) !== Je;
                AD(
                  d,
                  m,
                  b,
                  V,
                  // TODO: Delete this argument when we remove the legacy root API.
                  F
                );
                break;
              }
            }
            break;
          }
          case U: {
            var K = e.memoizedState, J = K.dehydrated;
            if (J !== null) switch (t.tag) {
              case $:
                var ae = t.type;
                t.pendingProps, _D(J, ae);
                break;
              case B:
                var ze = t.pendingProps;
                MD(J, ze);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function VC(e, t) {
      t.flags = t.flags & ~za | fn, US(e, t);
    }
    function IC(e, t) {
      switch (e.tag) {
        case $: {
          var a = e.type;
          e.pendingProps;
          var o = uD(t, a);
          return o !== null ? (e.stateNode = o, Fr = e, _i = pD(o), !0) : !1;
        }
        case B: {
          var u = e.pendingProps, d = sD(t, u);
          return d !== null ? (e.stateNode = d, Fr = e, _i = null, !0) : !1;
        }
        case U: {
          var m = cD(t);
          if (m !== null) {
            var b = {
              dehydrated: m,
              treeContext: WD(),
              retryLane: Lr
            };
            e.memoizedState = b;
            var E = nN(m);
            return E.return = e, e.child = E, Fr = e, _i = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function PS(e) {
      return (e.mode & tt) !== Je && (e.flags & pt) === ot;
    }
    function $S(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function jS(e) {
      if (oo) {
        var t = _i;
        if (!t) {
          PS(e) && (US(Fr, e), $S()), VC(Fr, e), oo = !1, Fr = e;
          return;
        }
        var a = t;
        if (!IC(e, t)) {
          PS(e) && (US(Fr, e), $S()), t = cv(a);
          var o = Fr;
          if (!t || !IC(e, t)) {
            VC(Fr, e), oo = !1, Fr = e;
            return;
          }
          HC(o, a);
        }
      }
    }
    function ZD(e, t, a) {
      var o = e.stateNode, u = !ic, d = mD(o, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = d, d !== null;
    }
    function JD(e) {
      var t = e.stateNode, a = e.memoizedProps, o = yD(t, a, e);
      if (o) {
        var u = Fr;
        if (u !== null)
          switch (u.tag) {
            case M: {
              var d = u.stateNode.containerInfo, m = (u.mode & tt) !== Je;
              TD(
                d,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                m
              );
              break;
            }
            case $: {
              var b = u.type, E = u.memoizedProps, R = u.stateNode, D = (u.mode & tt) !== Je;
              xD(
                b,
                E,
                R,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                D
              );
              break;
            }
          }
      }
      return o;
    }
    function e_(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      gD(a, e);
    }
    function t_(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return SD(a);
    }
    function YC(e) {
      for (var t = e.return; t !== null && t.tag !== $ && t.tag !== M && t.tag !== U; )
        t = t.return;
      Fr = t;
    }
    function ky(e) {
      if (e !== Fr)
        return !1;
      if (!oo)
        return YC(e), oo = !0, !1;
      if (e.tag !== M && (e.tag !== $ || CD(e.type) && !bS(e.type, e.memoizedProps))) {
        var t = _i;
        if (t)
          if (PS(e))
            WC(e), $S();
          else
            for (; t; )
              HC(e, t), t = cv(t);
      }
      return YC(e), e.tag === U ? _i = t_(e) : _i = Fr ? cv(e.stateNode) : null, !0;
    }
    function n_() {
      return oo && _i !== null;
    }
    function WC(e) {
      for (var t = _i; t; )
        BC(e, t), t = cv(t);
    }
    function nd() {
      Fr = null, _i = null, oo = !1, ic = !1;
    }
    function GC() {
      Vu !== null && (Fx(Vu), Vu = null);
    }
    function Br() {
      return oo;
    }
    function FS(e) {
      Vu === null ? Vu = [e] : Vu.push(e);
    }
    var r_ = c.ReactCurrentBatchConfig, a_ = null;
    function i_() {
      return r_.transition;
    }
    var lo = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var o_ = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Rt && (t = a), a = a.return;
        return t;
      }, oc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, vv = [], hv = [], mv = [], yv = [], gv = [], Sv = [], lc = /* @__PURE__ */ new Set();
      lo.recordUnsafeLifecycleWarnings = function(e, t) {
        lc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && vv.push(e), e.mode & Rt && typeof t.UNSAFE_componentWillMount == "function" && hv.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && mv.push(e), e.mode & Rt && typeof t.UNSAFE_componentWillReceiveProps == "function" && yv.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && gv.push(e), e.mode & Rt && typeof t.UNSAFE_componentWillUpdate == "function" && Sv.push(e));
      }, lo.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        vv.length > 0 && (vv.forEach(function(F) {
          e.add(gt(F) || "Component"), lc.add(F.type);
        }), vv = []);
        var t = /* @__PURE__ */ new Set();
        hv.length > 0 && (hv.forEach(function(F) {
          t.add(gt(F) || "Component"), lc.add(F.type);
        }), hv = []);
        var a = /* @__PURE__ */ new Set();
        mv.length > 0 && (mv.forEach(function(F) {
          a.add(gt(F) || "Component"), lc.add(F.type);
        }), mv = []);
        var o = /* @__PURE__ */ new Set();
        yv.length > 0 && (yv.forEach(function(F) {
          o.add(gt(F) || "Component"), lc.add(F.type);
        }), yv = []);
        var u = /* @__PURE__ */ new Set();
        gv.length > 0 && (gv.forEach(function(F) {
          u.add(gt(F) || "Component"), lc.add(F.type);
        }), gv = []);
        var d = /* @__PURE__ */ new Set();
        if (Sv.length > 0 && (Sv.forEach(function(F) {
          d.add(gt(F) || "Component"), lc.add(F.type);
        }), Sv = []), t.size > 0) {
          var m = oc(t);
          y(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, m);
        }
        if (o.size > 0) {
          var b = oc(o);
          y(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, b);
        }
        if (d.size > 0) {
          var E = oc(d);
          y(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, E);
        }
        if (e.size > 0) {
          var R = oc(e);
          S(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
        }
        if (a.size > 0) {
          var D = oc(a);
          S(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, D);
        }
        if (u.size > 0) {
          var V = oc(u);
          S(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, V);
        }
      };
      var Dy = /* @__PURE__ */ new Map(), QC = /* @__PURE__ */ new Set();
      lo.recordLegacyContextWarning = function(e, t) {
        var a = o_(e);
        if (a === null) {
          y("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!QC.has(e.type)) {
          var o = Dy.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (o === void 0 && (o = [], Dy.set(a, o)), o.push(e));
        }
      }, lo.flushLegacyContextWarning = function() {
        Dy.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], o = /* @__PURE__ */ new Set();
            e.forEach(function(d) {
              o.add(gt(d) || "Component"), QC.add(d.type);
            });
            var u = oc(o);
            try {
              Jt(a), y(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              Jn();
            }
          }
        });
      }, lo.discardPendingWarnings = function() {
        vv = [], hv = [], mv = [], yv = [], gv = [], Sv = [], Dy = /* @__PURE__ */ new Map();
      };
    }
    var BS, HS, VS, IS, YS, qC = function(e, t) {
    };
    BS = !1, HS = !1, VS = {}, IS = {}, YS = {}, qC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = gt(t) || "Component";
        IS[a] || (IS[a] = !0, y('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function l_(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function bv(e, t, a) {
      var o = a.ref;
      if (o !== null && typeof o != "function" && typeof o != "object") {
        if ((e.mode & Rt || De) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== k) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !l_(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = gt(e) || "Component";
          VS[u] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, o), VS[u] = !0);
        }
        if (a._owner) {
          var d = a._owner, m;
          if (d) {
            var b = d;
            if (b.tag !== k)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            m = b.stateNode;
          }
          if (!m)
            throw new Error("Missing owner for string ref " + o + ". This error is likely caused by a bug in React. Please file an issue.");
          var E = m;
          kn(o, "ref");
          var R = "" + o;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === R)
            return t.ref;
          var D = function(V) {
            var F = E.refs;
            V === null ? delete F[R] : F[R] = V;
          };
          return D._stringRef = R, D;
        } else {
          if (typeof o != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + o + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return o;
    }
    function _y(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function My(e) {
      {
        var t = gt(e) || "Component";
        if (YS[t])
          return;
        YS[t] = !0, y("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function XC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function KC(e) {
      function t(G, ie) {
        if (e) {
          var Q = G.deletions;
          Q === null ? (G.deletions = [ie], G.flags |= jt) : Q.push(ie);
        }
      }
      function a(G, ie) {
        if (!e)
          return null;
        for (var Q = ie; Q !== null; )
          t(G, Q), Q = Q.sibling;
        return null;
      }
      function o(G, ie) {
        for (var Q = /* @__PURE__ */ new Map(), Se = ie; Se !== null; )
          Se.key !== null ? Q.set(Se.key, Se) : Q.set(Se.index, Se), Se = Se.sibling;
        return Q;
      }
      function u(G, ie) {
        var Q = mc(G, ie);
        return Q.index = 0, Q.sibling = null, Q;
      }
      function d(G, ie, Q) {
        if (G.index = Q, !e)
          return G.flags |= bp, ie;
        var Se = G.alternate;
        if (Se !== null) {
          var Be = Se.index;
          return Be < ie ? (G.flags |= fn, ie) : Be;
        } else
          return G.flags |= fn, ie;
      }
      function m(G) {
        return e && G.alternate === null && (G.flags |= fn), G;
      }
      function b(G, ie, Q, Se) {
        if (ie === null || ie.tag !== B) {
          var Be = F1(Q, G.mode, Se);
          return Be.return = G, Be;
        } else {
          var Ue = u(ie, Q);
          return Ue.return = G, Ue;
        }
      }
      function E(G, ie, Q, Se) {
        var Be = Q.type;
        if (Be === ni)
          return D(G, ie, Q.props.children, Se, Q.key);
        if (ie !== null && (ie.elementType === Be || // Keep this check inline so it only runs on the false path:
        nw(ie, Q) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Be == "object" && Be !== null && Be.$$typeof === ft && XC(Be) === ie.type)) {
          var Ue = u(ie, Q.props);
          return Ue.ref = bv(G, ie, Q), Ue.return = G, Ue._debugSource = Q._source, Ue._debugOwner = Q._owner, Ue;
        }
        var dt = j1(Q, G.mode, Se);
        return dt.ref = bv(G, ie, Q), dt.return = G, dt;
      }
      function R(G, ie, Q, Se) {
        if (ie === null || ie.tag !== A || ie.stateNode.containerInfo !== Q.containerInfo || ie.stateNode.implementation !== Q.implementation) {
          var Be = B1(Q, G.mode, Se);
          return Be.return = G, Be;
        } else {
          var Ue = u(ie, Q.children || []);
          return Ue.return = G, Ue;
        }
      }
      function D(G, ie, Q, Se, Be) {
        if (ie === null || ie.tag !== L) {
          var Ue = es(Q, G.mode, Se, Be);
          return Ue.return = G, Ue;
        } else {
          var dt = u(ie, Q);
          return dt.return = G, dt;
        }
      }
      function V(G, ie, Q) {
        if (typeof ie == "string" && ie !== "" || typeof ie == "number") {
          var Se = F1("" + ie, G.mode, Q);
          return Se.return = G, Se;
        }
        if (typeof ie == "object" && ie !== null) {
          switch (ie.$$typeof) {
            case Vi: {
              var Be = j1(ie, G.mode, Q);
              return Be.ref = bv(G, null, ie), Be.return = G, Be;
            }
            case ha: {
              var Ue = B1(ie, G.mode, Q);
              return Ue.return = G, Ue;
            }
            case ft: {
              var dt = ie._payload, yt = ie._init;
              return V(G, yt(dt), Q);
            }
          }
          if (sr(ie) || ma(ie)) {
            var tn = es(ie, G.mode, Q, null);
            return tn.return = G, tn;
          }
          _y(G, ie);
        }
        return typeof ie == "function" && My(G), null;
      }
      function F(G, ie, Q, Se) {
        var Be = ie !== null ? ie.key : null;
        if (typeof Q == "string" && Q !== "" || typeof Q == "number")
          return Be !== null ? null : b(G, ie, "" + Q, Se);
        if (typeof Q == "object" && Q !== null) {
          switch (Q.$$typeof) {
            case Vi:
              return Q.key === Be ? E(G, ie, Q, Se) : null;
            case ha:
              return Q.key === Be ? R(G, ie, Q, Se) : null;
            case ft: {
              var Ue = Q._payload, dt = Q._init;
              return F(G, ie, dt(Ue), Se);
            }
          }
          if (sr(Q) || ma(Q))
            return Be !== null ? null : D(G, ie, Q, Se, null);
          _y(G, Q);
        }
        return typeof Q == "function" && My(G), null;
      }
      function K(G, ie, Q, Se, Be) {
        if (typeof Se == "string" && Se !== "" || typeof Se == "number") {
          var Ue = G.get(Q) || null;
          return b(ie, Ue, "" + Se, Be);
        }
        if (typeof Se == "object" && Se !== null) {
          switch (Se.$$typeof) {
            case Vi: {
              var dt = G.get(Se.key === null ? Q : Se.key) || null;
              return E(ie, dt, Se, Be);
            }
            case ha: {
              var yt = G.get(Se.key === null ? Q : Se.key) || null;
              return R(ie, yt, Se, Be);
            }
            case ft:
              var tn = Se._payload, Pt = Se._init;
              return K(G, ie, Q, Pt(tn), Be);
          }
          if (sr(Se) || ma(Se)) {
            var ir = G.get(Q) || null;
            return D(ie, ir, Se, Be, null);
          }
          _y(ie, Se);
        }
        return typeof Se == "function" && My(ie), null;
      }
      function J(G, ie, Q) {
        {
          if (typeof G != "object" || G === null)
            return ie;
          switch (G.$$typeof) {
            case Vi:
            case ha:
              qC(G, Q);
              var Se = G.key;
              if (typeof Se != "string")
                break;
              if (ie === null) {
                ie = /* @__PURE__ */ new Set(), ie.add(Se);
                break;
              }
              if (!ie.has(Se)) {
                ie.add(Se);
                break;
              }
              y("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", Se);
              break;
            case ft:
              var Be = G._payload, Ue = G._init;
              J(Ue(Be), ie, Q);
              break;
          }
        }
        return ie;
      }
      function ae(G, ie, Q, Se) {
        for (var Be = null, Ue = 0; Ue < Q.length; Ue++) {
          var dt = Q[Ue];
          Be = J(dt, Be, G);
        }
        for (var yt = null, tn = null, Pt = ie, ir = 0, $t = 0, Yn = null; Pt !== null && $t < Q.length; $t++) {
          Pt.index > $t ? (Yn = Pt, Pt = null) : Yn = Pt.sibling;
          var da = F(G, Pt, Q[$t], Se);
          if (da === null) {
            Pt === null && (Pt = Yn);
            break;
          }
          e && Pt && da.alternate === null && t(G, Pt), ir = d(da, ir, $t), tn === null ? yt = da : tn.sibling = da, tn = da, Pt = Yn;
        }
        if ($t === Q.length) {
          if (a(G, Pt), Br()) {
            var Qr = $t;
            rc(G, Qr);
          }
          return yt;
        }
        if (Pt === null) {
          for (; $t < Q.length; $t++) {
            var di = V(G, Q[$t], Se);
            di !== null && (ir = d(di, ir, $t), tn === null ? yt = di : tn.sibling = di, tn = di);
          }
          if (Br()) {
            var Oa = $t;
            rc(G, Oa);
          }
          return yt;
        }
        for (var ka = o(G, Pt); $t < Q.length; $t++) {
          var pa = K(ka, G, $t, Q[$t], Se);
          pa !== null && (e && pa.alternate !== null && ka.delete(pa.key === null ? $t : pa.key), ir = d(pa, ir, $t), tn === null ? yt = pa : tn.sibling = pa, tn = pa);
        }
        if (e && ka.forEach(function(Ed) {
          return t(G, Ed);
        }), Br()) {
          var Hl = $t;
          rc(G, Hl);
        }
        return yt;
      }
      function ze(G, ie, Q, Se) {
        var Be = ma(Q);
        if (typeof Be != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          Q[Symbol.toStringTag] === "Generator" && (HS || y("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), HS = !0), Q.entries === Be && (BS || y("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), BS = !0);
          var Ue = Be.call(Q);
          if (Ue)
            for (var dt = null, yt = Ue.next(); !yt.done; yt = Ue.next()) {
              var tn = yt.value;
              dt = J(tn, dt, G);
            }
        }
        var Pt = Be.call(Q);
        if (Pt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var ir = null, $t = null, Yn = ie, da = 0, Qr = 0, di = null, Oa = Pt.next(); Yn !== null && !Oa.done; Qr++, Oa = Pt.next()) {
          Yn.index > Qr ? (di = Yn, Yn = null) : di = Yn.sibling;
          var ka = F(G, Yn, Oa.value, Se);
          if (ka === null) {
            Yn === null && (Yn = di);
            break;
          }
          e && Yn && ka.alternate === null && t(G, Yn), da = d(ka, da, Qr), $t === null ? ir = ka : $t.sibling = ka, $t = ka, Yn = di;
        }
        if (Oa.done) {
          if (a(G, Yn), Br()) {
            var pa = Qr;
            rc(G, pa);
          }
          return ir;
        }
        if (Yn === null) {
          for (; !Oa.done; Qr++, Oa = Pt.next()) {
            var Hl = V(G, Oa.value, Se);
            Hl !== null && (da = d(Hl, da, Qr), $t === null ? ir = Hl : $t.sibling = Hl, $t = Hl);
          }
          if (Br()) {
            var Ed = Qr;
            rc(G, Ed);
          }
          return ir;
        }
        for (var Zv = o(G, Yn); !Oa.done; Qr++, Oa = Pt.next()) {
          var Qo = K(Zv, G, Qr, Oa.value, Se);
          Qo !== null && (e && Qo.alternate !== null && Zv.delete(Qo.key === null ? Qr : Qo.key), da = d(Qo, da, Qr), $t === null ? ir = Qo : $t.sibling = Qo, $t = Qo);
        }
        if (e && Zv.forEach(function(AN) {
          return t(G, AN);
        }), Br()) {
          var NN = Qr;
          rc(G, NN);
        }
        return ir;
      }
      function lt(G, ie, Q, Se) {
        if (ie !== null && ie.tag === B) {
          a(G, ie.sibling);
          var Be = u(ie, Q);
          return Be.return = G, Be;
        }
        a(G, ie);
        var Ue = F1(Q, G.mode, Se);
        return Ue.return = G, Ue;
      }
      function nt(G, ie, Q, Se) {
        for (var Be = Q.key, Ue = ie; Ue !== null; ) {
          if (Ue.key === Be) {
            var dt = Q.type;
            if (dt === ni) {
              if (Ue.tag === L) {
                a(G, Ue.sibling);
                var yt = u(Ue, Q.props.children);
                return yt.return = G, yt._debugSource = Q._source, yt._debugOwner = Q._owner, yt;
              }
            } else if (Ue.elementType === dt || // Keep this check inline so it only runs on the false path:
            nw(Ue, Q) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof dt == "object" && dt !== null && dt.$$typeof === ft && XC(dt) === Ue.type) {
              a(G, Ue.sibling);
              var tn = u(Ue, Q.props);
              return tn.ref = bv(G, Ue, Q), tn.return = G, tn._debugSource = Q._source, tn._debugOwner = Q._owner, tn;
            }
            a(G, Ue);
            break;
          } else
            t(G, Ue);
          Ue = Ue.sibling;
        }
        if (Q.type === ni) {
          var Pt = es(Q.props.children, G.mode, Se, Q.key);
          return Pt.return = G, Pt;
        } else {
          var ir = j1(Q, G.mode, Se);
          return ir.ref = bv(G, ie, Q), ir.return = G, ir;
        }
      }
      function Lt(G, ie, Q, Se) {
        for (var Be = Q.key, Ue = ie; Ue !== null; ) {
          if (Ue.key === Be)
            if (Ue.tag === A && Ue.stateNode.containerInfo === Q.containerInfo && Ue.stateNode.implementation === Q.implementation) {
              a(G, Ue.sibling);
              var dt = u(Ue, Q.children || []);
              return dt.return = G, dt;
            } else {
              a(G, Ue);
              break;
            }
          else
            t(G, Ue);
          Ue = Ue.sibling;
        }
        var yt = B1(Q, G.mode, Se);
        return yt.return = G, yt;
      }
      function kt(G, ie, Q, Se) {
        var Be = typeof Q == "object" && Q !== null && Q.type === ni && Q.key === null;
        if (Be && (Q = Q.props.children), typeof Q == "object" && Q !== null) {
          switch (Q.$$typeof) {
            case Vi:
              return m(nt(G, ie, Q, Se));
            case ha:
              return m(Lt(G, ie, Q, Se));
            case ft:
              var Ue = Q._payload, dt = Q._init;
              return kt(G, ie, dt(Ue), Se);
          }
          if (sr(Q))
            return ae(G, ie, Q, Se);
          if (ma(Q))
            return ze(G, ie, Q, Se);
          _y(G, Q);
        }
        return typeof Q == "string" && Q !== "" || typeof Q == "number" ? m(lt(G, ie, "" + Q, Se)) : (typeof Q == "function" && My(G), a(G, ie));
      }
      return kt;
    }
    var rd = KC(!0), ZC = KC(!1);
    function u_(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, o = mc(a, a.pendingProps);
        for (t.child = o, o.return = t; a.sibling !== null; )
          a = a.sibling, o = o.sibling = mc(a, a.pendingProps), o.return = t;
        o.sibling = null;
      }
    }
    function s_(e, t) {
      for (var a = e.child; a !== null; )
        X2(a, t), a = a.sibling;
    }
    var WS = Fu(null), GS;
    GS = {};
    var Ny = null, ad = null, QS = null, Ay = !1;
    function Ly() {
      Ny = null, ad = null, QS = null, Ay = !1;
    }
    function JC() {
      Ay = !0;
    }
    function eT() {
      Ay = !1;
    }
    function tT(e, t, a) {
      ca(WS, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== GS && y("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = GS;
    }
    function qS(e, t) {
      var a = WS.current;
      sa(WS, t), e._currentValue = a;
    }
    function XS(e, t, a) {
      for (var o = e; o !== null; ) {
        var u = o.alternate;
        if (Tl(o.childLanes, t) ? u !== null && !Tl(u.childLanes, t) && (u.childLanes = St(u.childLanes, t)) : (o.childLanes = St(o.childLanes, t), u !== null && (u.childLanes = St(u.childLanes, t))), o === a)
          break;
        o = o.return;
      }
      o !== a && y("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function c_(e, t, a) {
      f_(e, t, a);
    }
    function f_(e, t, a) {
      var o = e.child;
      for (o !== null && (o.return = e); o !== null; ) {
        var u = void 0, d = o.dependencies;
        if (d !== null) {
          u = o.child;
          for (var m = d.firstContext; m !== null; ) {
            if (m.context === t) {
              if (o.tag === k) {
                var b = Eu(a), E = Ul(sn, b);
                E.tag = Uy;
                var R = o.updateQueue;
                if (R !== null) {
                  var D = R.shared, V = D.pending;
                  V === null ? E.next = E : (E.next = V.next, V.next = E), D.pending = E;
                }
              }
              o.lanes = St(o.lanes, a);
              var F = o.alternate;
              F !== null && (F.lanes = St(F.lanes, a)), XS(o.return, a, e), d.lanes = St(d.lanes, a);
              break;
            }
            m = m.next;
          }
        } else if (o.tag === le)
          u = o.type === e.type ? null : o.child;
        else if (o.tag === O) {
          var K = o.return;
          if (K === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          K.lanes = St(K.lanes, a);
          var J = K.alternate;
          J !== null && (J.lanes = St(J.lanes, a)), XS(K, a, e), u = o.sibling;
        } else
          u = o.child;
        if (u !== null)
          u.return = o;
        else
          for (u = o; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var ae = u.sibling;
            if (ae !== null) {
              ae.return = u.return, u = ae;
              break;
            }
            u = u.return;
          }
        o = u;
      }
    }
    function id(e, t) {
      Ny = e, ad = null, QS = null;
      var a = e.dependencies;
      if (a !== null) {
        var o = a.firstContext;
        o !== null && (la(a.lanes, t) && zv(), a.firstContext = null);
      }
    }
    function hr(e) {
      Ay && y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (QS !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (ad === null) {
          if (Ny === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          ad = a, Ny.dependencies = {
            lanes: de,
            firstContext: a
          };
        } else
          ad = ad.next = a;
      }
      return t;
    }
    var uc = null;
    function KS(e) {
      uc === null ? uc = [e] : uc.push(e);
    }
    function d_() {
      if (uc !== null) {
        for (var e = 0; e < uc.length; e++) {
          var t = uc[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var o = a.next, u = t.pending;
            if (u !== null) {
              var d = u.next;
              u.next = o, a.next = d;
            }
            t.pending = a;
          }
        }
        uc = null;
      }
    }
    function nT(e, t, a, o) {
      var u = t.interleaved;
      return u === null ? (a.next = a, KS(t)) : (a.next = u.next, u.next = a), t.interleaved = a, zy(e, o);
    }
    function p_(e, t, a, o) {
      var u = t.interleaved;
      u === null ? (a.next = a, KS(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function v_(e, t, a, o) {
      var u = t.interleaved;
      return u === null ? (a.next = a, KS(t)) : (a.next = u.next, u.next = a), t.interleaved = a, zy(e, o);
    }
    function Ga(e, t) {
      return zy(e, t);
    }
    var h_ = zy;
    function zy(e, t) {
      e.lanes = St(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = St(a.lanes, t)), a === null && (e.flags & (fn | za)) !== ot && Zx(e);
      for (var o = e, u = e.return; u !== null; )
        u.childLanes = St(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = St(a.childLanes, t) : (u.flags & (fn | za)) !== ot && Zx(e), o = u, u = u.return;
      if (o.tag === M) {
        var d = o.stateNode;
        return d;
      } else
        return null;
    }
    var rT = 0, aT = 1, Uy = 2, ZS = 3, Py = !1, JS, $y;
    JS = !1, $y = null;
    function eb(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: de
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function iT(e, t) {
      var a = t.updateQueue, o = e.updateQueue;
      if (a === o) {
        var u = {
          baseState: o.baseState,
          firstBaseUpdate: o.firstBaseUpdate,
          lastBaseUpdate: o.lastBaseUpdate,
          shared: o.shared,
          effects: o.effects
        };
        t.updateQueue = u;
      }
    }
    function Ul(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: rT,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Iu(e, t, a) {
      var o = e.updateQueue;
      if (o === null)
        return null;
      var u = o.shared;
      if ($y === u && !JS && (y("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), JS = !0), p2()) {
        var d = u.pending;
        return d === null ? t.next = t : (t.next = d.next, d.next = t), u.pending = t, h_(e, a);
      } else
        return v_(e, u, t, a);
    }
    function jy(e, t, a) {
      var o = t.updateQueue;
      if (o !== null) {
        var u = o.shared;
        if (zp(a)) {
          var d = u.lanes;
          d = Cf(d, e.pendingLanes);
          var m = St(d, a);
          u.lanes = m, Up(e, m);
        }
      }
    }
    function tb(e, t) {
      var a = e.updateQueue, o = e.alternate;
      if (o !== null) {
        var u = o.updateQueue;
        if (a === u) {
          var d = null, m = null, b = a.firstBaseUpdate;
          if (b !== null) {
            var E = b;
            do {
              var R = {
                eventTime: E.eventTime,
                lane: E.lane,
                tag: E.tag,
                payload: E.payload,
                callback: E.callback,
                next: null
              };
              m === null ? d = m = R : (m.next = R, m = R), E = E.next;
            } while (E !== null);
            m === null ? d = m = t : (m.next = t, m = t);
          } else
            d = m = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: d,
            lastBaseUpdate: m,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var D = a.lastBaseUpdate;
      D === null ? a.firstBaseUpdate = t : D.next = t, a.lastBaseUpdate = t;
    }
    function m_(e, t, a, o, u, d) {
      switch (a.tag) {
        case aT: {
          var m = a.payload;
          if (typeof m == "function") {
            JC();
            var b = m.call(d, o, u);
            {
              if (e.mode & Rt) {
                Vn(!0);
                try {
                  m.call(d, o, u);
                } finally {
                  Vn(!1);
                }
              }
              eT();
            }
            return b;
          }
          return m;
        }
        case ZS:
          e.flags = e.flags & ~fr | pt;
        case rT: {
          var E = a.payload, R;
          if (typeof E == "function") {
            JC(), R = E.call(d, o, u);
            {
              if (e.mode & Rt) {
                Vn(!0);
                try {
                  E.call(d, o, u);
                } finally {
                  Vn(!1);
                }
              }
              eT();
            }
          } else
            R = E;
          return R == null ? o : wt({}, o, R);
        }
        case Uy:
          return Py = !0, o;
      }
      return o;
    }
    function Fy(e, t, a, o) {
      var u = e.updateQueue;
      Py = !1, $y = u.shared;
      var d = u.firstBaseUpdate, m = u.lastBaseUpdate, b = u.shared.pending;
      if (b !== null) {
        u.shared.pending = null;
        var E = b, R = E.next;
        E.next = null, m === null ? d = R : m.next = R, m = E;
        var D = e.alternate;
        if (D !== null) {
          var V = D.updateQueue, F = V.lastBaseUpdate;
          F !== m && (F === null ? V.firstBaseUpdate = R : F.next = R, V.lastBaseUpdate = E);
        }
      }
      if (d !== null) {
        var K = u.baseState, J = de, ae = null, ze = null, lt = null, nt = d;
        do {
          var Lt = nt.lane, kt = nt.eventTime;
          if (Tl(o, Lt)) {
            if (lt !== null) {
              var ie = {
                eventTime: kt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: In,
                tag: nt.tag,
                payload: nt.payload,
                callback: nt.callback,
                next: null
              };
              lt = lt.next = ie;
            }
            K = m_(e, u, nt, K, t, a);
            var Q = nt.callback;
            if (Q !== null && // If the update was already committed, we should not queue its
            // callback again.
            nt.lane !== In) {
              e.flags |= Ci;
              var Se = u.effects;
              Se === null ? u.effects = [nt] : Se.push(nt);
            }
          } else {
            var G = {
              eventTime: kt,
              lane: Lt,
              tag: nt.tag,
              payload: nt.payload,
              callback: nt.callback,
              next: null
            };
            lt === null ? (ze = lt = G, ae = K) : lt = lt.next = G, J = St(J, Lt);
          }
          if (nt = nt.next, nt === null) {
            if (b = u.shared.pending, b === null)
              break;
            var Be = b, Ue = Be.next;
            Be.next = null, nt = Ue, u.lastBaseUpdate = Be, u.shared.pending = null;
          }
        } while (!0);
        lt === null && (ae = K), u.baseState = ae, u.firstBaseUpdate = ze, u.lastBaseUpdate = lt;
        var dt = u.shared.interleaved;
        if (dt !== null) {
          var yt = dt;
          do
            J = St(J, yt.lane), yt = yt.next;
          while (yt !== dt);
        } else d === null && (u.shared.lanes = de);
        Gv(J), e.lanes = J, e.memoizedState = K;
      }
      $y = null;
    }
    function y_(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function oT() {
      Py = !1;
    }
    function By() {
      return Py;
    }
    function lT(e, t, a) {
      var o = t.effects;
      if (t.effects = null, o !== null)
        for (var u = 0; u < o.length; u++) {
          var d = o[u], m = d.callback;
          m !== null && (d.callback = null, y_(m, a));
        }
    }
    var Ev = {}, Yu = Fu(Ev), Cv = Fu(Ev), Hy = Fu(Ev);
    function Vy(e) {
      if (e === Ev)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function uT() {
      var e = Vy(Hy.current);
      return e;
    }
    function nb(e, t) {
      ca(Hy, t, e), ca(Cv, e, e), ca(Yu, Ev, e);
      var a = Lk(t);
      sa(Yu, e), ca(Yu, a, e);
    }
    function od(e) {
      sa(Yu, e), sa(Cv, e), sa(Hy, e);
    }
    function rb() {
      var e = Vy(Yu.current);
      return e;
    }
    function sT(e) {
      Vy(Hy.current);
      var t = Vy(Yu.current), a = zk(t, e.type);
      t !== a && (ca(Cv, e, e), ca(Yu, a, e));
    }
    function ab(e) {
      Cv.current === e && (sa(Yu, e), sa(Cv, e));
    }
    var g_ = 0, cT = 1, fT = 1, Tv = 2, uo = Fu(g_);
    function ib(e, t) {
      return (e & t) !== 0;
    }
    function ld(e) {
      return e & cT;
    }
    function ob(e, t) {
      return e & cT | t;
    }
    function S_(e, t) {
      return e | t;
    }
    function Wu(e, t) {
      ca(uo, t, e);
    }
    function ud(e) {
      sa(uo, e);
    }
    function b_(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Iy(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === U) {
          var a = t.memoizedState;
          if (a !== null) {
            var o = a.dehydrated;
            if (o === null || kC(o) || xS(o))
              return t;
          }
        } else if (t.tag === ne && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & pt) !== ot;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Qa = (
      /*   */
      0
    ), Cr = (
      /* */
      1
    ), Bo = (
      /*  */
      2
    ), Tr = (
      /*    */
      4
    ), Hr = (
      /*   */
      8
    ), lb = [];
    function ub() {
      for (var e = 0; e < lb.length; e++) {
        var t = lb[e];
        t._workInProgressVersionPrimary = null;
      }
      lb.length = 0;
    }
    function E_(e, t) {
      var a = t._getVersion, o = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, o] : e.mutableSourceEagerHydrationData.push(t, o);
    }
    var je = c.ReactCurrentDispatcher, xv = c.ReactCurrentBatchConfig, sb, sd;
    sb = /* @__PURE__ */ new Set();
    var sc = de, en = null, xr = null, wr = null, Yy = !1, wv = !1, Rv = 0, C_ = 0, T_ = 25, ce = null, Mi = null, Gu = -1, cb = !1;
    function Vt() {
      {
        var e = ce;
        Mi === null ? Mi = [e] : Mi.push(e);
      }
    }
    function Ne() {
      {
        var e = ce;
        Mi !== null && (Gu++, Mi[Gu] !== e && x_(e));
      }
    }
    function cd(e) {
      e != null && !sr(e) && y("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ce, typeof e);
    }
    function x_(e) {
      {
        var t = gt(en);
        if (!sb.has(t) && (sb.add(t), Mi !== null)) {
          for (var a = "", o = 30, u = 0; u <= Gu; u++) {
            for (var d = Mi[u], m = u === Gu ? e : d, b = u + 1 + ". " + d; b.length < o; )
              b += " ";
            b += m + `
`, a += b;
          }
          y(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function fa() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function fb(e, t) {
      if (cb)
        return !1;
      if (t === null)
        return y("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ce), !1;
      e.length !== t.length && y(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ce, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!We(e[a], t[a]))
          return !1;
      return !0;
    }
    function fd(e, t, a, o, u, d) {
      sc = d, en = t, Mi = e !== null ? e._debugHookTypes : null, Gu = -1, cb = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = de, e !== null && e.memoizedState !== null ? je.current = AT : Mi !== null ? je.current = NT : je.current = MT;
      var m = a(o, u);
      if (wv) {
        var b = 0;
        do {
          if (wv = !1, Rv = 0, b >= T_)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          b += 1, cb = !1, xr = null, wr = null, t.updateQueue = null, Gu = -1, je.current = LT, m = a(o, u);
        } while (wv);
      }
      je.current = ag, t._debugHookTypes = Mi;
      var E = xr !== null && xr.next !== null;
      if (sc = de, en = null, xr = null, wr = null, ce = null, Mi = null, Gu = -1, e !== null && (e.flags & Sr) !== (t.flags & Sr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & tt) !== Je && y("Internal React error: Expected static flag was missing. Please notify the React team."), Yy = !1, E)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return m;
    }
    function dd() {
      var e = Rv !== 0;
      return Rv = 0, e;
    }
    function dT(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Ca) !== Je ? t.flags &= ~(vl | ta | Sn | bt) : t.flags &= ~(Sn | bt), e.lanes = Fs(e.lanes, a);
    }
    function pT() {
      if (je.current = ag, Yy) {
        for (var e = en.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Yy = !1;
      }
      sc = de, en = null, xr = null, wr = null, Mi = null, Gu = -1, ce = null, RT = !1, wv = !1, Rv = 0;
    }
    function Ho() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return wr === null ? en.memoizedState = wr = e : wr = wr.next = e, wr;
    }
    function Ni() {
      var e;
      if (xr === null) {
        var t = en.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = xr.next;
      var a;
      if (wr === null ? a = en.memoizedState : a = wr.next, a !== null)
        wr = a, a = wr.next, xr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        xr = e;
        var o = {
          memoizedState: xr.memoizedState,
          baseState: xr.baseState,
          baseQueue: xr.baseQueue,
          queue: xr.queue,
          next: null
        };
        wr === null ? en.memoizedState = wr = o : wr = wr.next = o;
      }
      return wr;
    }
    function vT() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function db(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function pb(e, t, a) {
      var o = Ho(), u;
      a !== void 0 ? u = a(t) : u = t, o.memoizedState = o.baseState = u;
      var d = {
        pending: null,
        interleaved: null,
        lanes: de,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      o.queue = d;
      var m = d.dispatch = k_.bind(null, en, d);
      return [o.memoizedState, m];
    }
    function vb(e, t, a) {
      var o = Ni(), u = o.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var d = xr, m = d.baseQueue, b = u.pending;
      if (b !== null) {
        if (m !== null) {
          var E = m.next, R = b.next;
          m.next = R, b.next = E;
        }
        d.baseQueue !== m && y("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), d.baseQueue = m = b, u.pending = null;
      }
      if (m !== null) {
        var D = m.next, V = d.baseState, F = null, K = null, J = null, ae = D;
        do {
          var ze = ae.lane;
          if (Tl(sc, ze)) {
            if (J !== null) {
              var nt = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: In,
                action: ae.action,
                hasEagerState: ae.hasEagerState,
                eagerState: ae.eagerState,
                next: null
              };
              J = J.next = nt;
            }
            if (ae.hasEagerState)
              V = ae.eagerState;
            else {
              var Lt = ae.action;
              V = e(V, Lt);
            }
          } else {
            var lt = {
              lane: ze,
              action: ae.action,
              hasEagerState: ae.hasEagerState,
              eagerState: ae.eagerState,
              next: null
            };
            J === null ? (K = J = lt, F = V) : J = J.next = lt, en.lanes = St(en.lanes, ze), Gv(ze);
          }
          ae = ae.next;
        } while (ae !== null && ae !== D);
        J === null ? F = V : J.next = K, We(V, o.memoizedState) || zv(), o.memoizedState = V, o.baseState = F, o.baseQueue = J, u.lastRenderedState = V;
      }
      var kt = u.interleaved;
      if (kt !== null) {
        var G = kt;
        do {
          var ie = G.lane;
          en.lanes = St(en.lanes, ie), Gv(ie), G = G.next;
        } while (G !== kt);
      } else m === null && (u.lanes = de);
      var Q = u.dispatch;
      return [o.memoizedState, Q];
    }
    function hb(e, t, a) {
      var o = Ni(), u = o.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var d = u.dispatch, m = u.pending, b = o.memoizedState;
      if (m !== null) {
        u.pending = null;
        var E = m.next, R = E;
        do {
          var D = R.action;
          b = e(b, D), R = R.next;
        } while (R !== E);
        We(b, o.memoizedState) || zv(), o.memoizedState = b, o.baseQueue === null && (o.baseState = b), u.lastRenderedState = b;
      }
      return [b, d];
    }
    function U5(e, t, a) {
    }
    function P5(e, t, a) {
    }
    function mb(e, t, a) {
      var o = en, u = Ho(), d, m = Br();
      if (m) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        d = a(), sd || d !== a() && (y("The result of getServerSnapshot should be cached to avoid an infinite loop"), sd = !0);
      } else {
        if (d = t(), !sd) {
          var b = t();
          We(d, b) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), sd = !0);
        }
        var E = Tg();
        if (E === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        js(E, sc) || hT(o, t, d);
      }
      u.memoizedState = d;
      var R = {
        value: d,
        getSnapshot: t
      };
      return u.queue = R, Xy(yT.bind(null, o, R, e), [e]), o.flags |= Sn, Ov(Cr | Hr, mT.bind(null, o, R, d, t), void 0, null), d;
    }
    function Wy(e, t, a) {
      var o = en, u = Ni(), d = t();
      if (!sd) {
        var m = t();
        We(d, m) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), sd = !0);
      }
      var b = u.memoizedState, E = !We(b, d);
      E && (u.memoizedState = d, zv());
      var R = u.queue;
      if (Dv(yT.bind(null, o, R, e), [e]), R.getSnapshot !== t || E || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      wr !== null && wr.memoizedState.tag & Cr) {
        o.flags |= Sn, Ov(Cr | Hr, mT.bind(null, o, R, d, t), void 0, null);
        var D = Tg();
        if (D === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        js(D, sc) || hT(o, t, d);
      }
      return d;
    }
    function hT(e, t, a) {
      e.flags |= Ds;
      var o = {
        getSnapshot: t,
        value: a
      }, u = en.updateQueue;
      if (u === null)
        u = vT(), en.updateQueue = u, u.stores = [o];
      else {
        var d = u.stores;
        d === null ? u.stores = [o] : d.push(o);
      }
    }
    function mT(e, t, a, o) {
      t.value = a, t.getSnapshot = o, gT(t) && ST(e);
    }
    function yT(e, t, a) {
      var o = function() {
        gT(t) && ST(e);
      };
      return a(o);
    }
    function gT(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var o = t();
        return !We(a, o);
      } catch {
        return !0;
      }
    }
    function ST(e) {
      var t = Ga(e, at);
      t !== null && Dr(t, e, at, sn);
    }
    function Gy(e) {
      var t = Ho();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: de,
        dispatch: null,
        lastRenderedReducer: db,
        lastRenderedState: e
      };
      t.queue = a;
      var o = a.dispatch = D_.bind(null, en, a);
      return [t.memoizedState, o];
    }
    function yb(e) {
      return vb(db);
    }
    function gb(e) {
      return hb(db);
    }
    function Ov(e, t, a, o) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: o,
        // Circular
        next: null
      }, d = en.updateQueue;
      if (d === null)
        d = vT(), en.updateQueue = d, d.lastEffect = u.next = u;
      else {
        var m = d.lastEffect;
        if (m === null)
          d.lastEffect = u.next = u;
        else {
          var b = m.next;
          m.next = u, u.next = b, d.lastEffect = u;
        }
      }
      return u;
    }
    function Sb(e) {
      var t = Ho();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Qy(e) {
      var t = Ni();
      return t.memoizedState;
    }
    function kv(e, t, a, o) {
      var u = Ho(), d = o === void 0 ? null : o;
      en.flags |= e, u.memoizedState = Ov(Cr | t, a, void 0, d);
    }
    function qy(e, t, a, o) {
      var u = Ni(), d = o === void 0 ? null : o, m = void 0;
      if (xr !== null) {
        var b = xr.memoizedState;
        if (m = b.destroy, d !== null) {
          var E = b.deps;
          if (fb(d, E)) {
            u.memoizedState = Ov(t, a, m, d);
            return;
          }
        }
      }
      en.flags |= e, u.memoizedState = Ov(Cr | t, a, m, d);
    }
    function Xy(e, t) {
      return (en.mode & Ca) !== Je ? kv(vl | Sn | Do, Hr, e, t) : kv(Sn | Do, Hr, e, t);
    }
    function Dv(e, t) {
      return qy(Sn, Hr, e, t);
    }
    function bb(e, t) {
      return kv(bt, Bo, e, t);
    }
    function Ky(e, t) {
      return qy(bt, Bo, e, t);
    }
    function Eb(e, t) {
      var a = bt;
      return a |= ea, (en.mode & Ca) !== Je && (a |= ta), kv(a, Tr, e, t);
    }
    function Zy(e, t) {
      return qy(bt, Tr, e, t);
    }
    function bT(e, t) {
      if (typeof t == "function") {
        var a = t, o = e();
        return a(o), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || y("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var d = e();
        return u.current = d, function() {
          u.current = null;
        };
      }
    }
    function Cb(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var o = a != null ? a.concat([e]) : null, u = bt;
      return u |= ea, (en.mode & Ca) !== Je && (u |= ta), kv(u, Tr, bT.bind(null, t, e), o);
    }
    function Jy(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var o = a != null ? a.concat([e]) : null;
      return qy(bt, Tr, bT.bind(null, t, e), o);
    }
    function w_(e, t) {
    }
    var eg = w_;
    function Tb(e, t) {
      var a = Ho(), o = t === void 0 ? null : t;
      return a.memoizedState = [e, o], e;
    }
    function tg(e, t) {
      var a = Ni(), o = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && o !== null) {
        var d = u[1];
        if (fb(o, d))
          return u[0];
      }
      return a.memoizedState = [e, o], e;
    }
    function xb(e, t) {
      var a = Ho(), o = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, o], u;
    }
    function ng(e, t) {
      var a = Ni(), o = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && o !== null) {
        var d = u[1];
        if (fb(o, d))
          return u[0];
      }
      var m = e();
      return a.memoizedState = [m, o], m;
    }
    function wb(e) {
      var t = Ho();
      return t.memoizedState = e, e;
    }
    function ET(e) {
      var t = Ni(), a = xr, o = a.memoizedState;
      return TT(t, o, e);
    }
    function CT(e) {
      var t = Ni();
      if (xr === null)
        return t.memoizedState = e, e;
      var a = xr.memoizedState;
      return TT(t, a, e);
    }
    function TT(e, t, a) {
      var o = !Nm(sc);
      if (o) {
        if (!We(a, t)) {
          var u = zm();
          en.lanes = St(en.lanes, u), Gv(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, zv()), e.memoizedState = a, a;
    }
    function R_(e, t, a) {
      var o = Ba();
      _n(Y0(o, to)), e(!0);
      var u = xv.transition;
      xv.transition = {};
      var d = xv.transition;
      xv.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (_n(o), xv.transition = u, u === null && d._updatedFibers) {
          var m = d._updatedFibers.size;
          m > 10 && S("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), d._updatedFibers.clear();
        }
      }
    }
    function Rb() {
      var e = Gy(!1), t = e[0], a = e[1], o = R_.bind(null, a), u = Ho();
      return u.memoizedState = o, [t, o];
    }
    function xT() {
      var e = yb(), t = e[0], a = Ni(), o = a.memoizedState;
      return [t, o];
    }
    function wT() {
      var e = gb(), t = e[0], a = Ni(), o = a.memoizedState;
      return [t, o];
    }
    var RT = !1;
    function O_() {
      return RT;
    }
    function Ob() {
      var e = Ho(), t = Tg(), a = t.identifierPrefix, o;
      if (Br()) {
        var u = ID();
        o = ":" + a + "R" + u;
        var d = Rv++;
        d > 0 && (o += "H" + d.toString(32)), o += ":";
      } else {
        var m = C_++;
        o = ":" + a + "r" + m.toString(32) + ":";
      }
      return e.memoizedState = o, o;
    }
    function rg() {
      var e = Ni(), t = e.memoizedState;
      return t;
    }
    function k_(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var o = Zu(e), u = {
        lane: o,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (OT(e))
        kT(t, u);
      else {
        var d = nT(e, t, u, o);
        if (d !== null) {
          var m = Ra();
          Dr(d, e, o, m), DT(d, t, o);
        }
      }
      _T(e, o);
    }
    function D_(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var o = Zu(e), u = {
        lane: o,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (OT(e))
        kT(t, u);
      else {
        var d = e.alternate;
        if (e.lanes === de && (d === null || d.lanes === de)) {
          var m = t.lastRenderedReducer;
          if (m !== null) {
            var b;
            b = je.current, je.current = so;
            try {
              var E = t.lastRenderedState, R = m(E, a);
              if (u.hasEagerState = !0, u.eagerState = R, We(R, E)) {
                p_(e, t, u, o);
                return;
              }
            } catch {
            } finally {
              je.current = b;
            }
          }
        }
        var D = nT(e, t, u, o);
        if (D !== null) {
          var V = Ra();
          Dr(D, e, o, V), DT(D, t, o);
        }
      }
      _T(e, o);
    }
    function OT(e) {
      var t = e.alternate;
      return e === en || t !== null && t === en;
    }
    function kT(e, t) {
      wv = Yy = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function DT(e, t, a) {
      if (zp(a)) {
        var o = t.lanes;
        o = Cf(o, e.pendingLanes);
        var u = St(o, a);
        t.lanes = u, Up(e, u);
      }
    }
    function _T(e, t, a) {
      As(e, t);
    }
    var ag = {
      readContext: hr,
      useCallback: fa,
      useContext: fa,
      useEffect: fa,
      useImperativeHandle: fa,
      useInsertionEffect: fa,
      useLayoutEffect: fa,
      useMemo: fa,
      useReducer: fa,
      useRef: fa,
      useState: fa,
      useDebugValue: fa,
      useDeferredValue: fa,
      useTransition: fa,
      useMutableSource: fa,
      useSyncExternalStore: fa,
      useId: fa,
      unstable_isNewReconciler: se
    }, MT = null, NT = null, AT = null, LT = null, Vo = null, so = null, ig = null;
    {
      var kb = function() {
        y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, ht = function() {
        y("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      MT = {
        readContext: function(e) {
          return hr(e);
        },
        useCallback: function(e, t) {
          return ce = "useCallback", Vt(), cd(t), Tb(e, t);
        },
        useContext: function(e) {
          return ce = "useContext", Vt(), hr(e);
        },
        useEffect: function(e, t) {
          return ce = "useEffect", Vt(), cd(t), Xy(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ce = "useImperativeHandle", Vt(), cd(a), Cb(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ce = "useInsertionEffect", Vt(), cd(t), bb(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ce = "useLayoutEffect", Vt(), cd(t), Eb(e, t);
        },
        useMemo: function(e, t) {
          ce = "useMemo", Vt(), cd(t);
          var a = je.current;
          je.current = Vo;
          try {
            return xb(e, t);
          } finally {
            je.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ce = "useReducer", Vt();
          var o = je.current;
          je.current = Vo;
          try {
            return pb(e, t, a);
          } finally {
            je.current = o;
          }
        },
        useRef: function(e) {
          return ce = "useRef", Vt(), Sb(e);
        },
        useState: function(e) {
          ce = "useState", Vt();
          var t = je.current;
          je.current = Vo;
          try {
            return Gy(e);
          } finally {
            je.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ce = "useDebugValue", Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return ce = "useDeferredValue", Vt(), wb(e);
        },
        useTransition: function() {
          return ce = "useTransition", Vt(), Rb();
        },
        useMutableSource: function(e, t, a) {
          return ce = "useMutableSource", Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ce = "useSyncExternalStore", Vt(), mb(e, t, a);
        },
        useId: function() {
          return ce = "useId", Vt(), Ob();
        },
        unstable_isNewReconciler: se
      }, NT = {
        readContext: function(e) {
          return hr(e);
        },
        useCallback: function(e, t) {
          return ce = "useCallback", Ne(), Tb(e, t);
        },
        useContext: function(e) {
          return ce = "useContext", Ne(), hr(e);
        },
        useEffect: function(e, t) {
          return ce = "useEffect", Ne(), Xy(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ce = "useImperativeHandle", Ne(), Cb(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ce = "useInsertionEffect", Ne(), bb(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ce = "useLayoutEffect", Ne(), Eb(e, t);
        },
        useMemo: function(e, t) {
          ce = "useMemo", Ne();
          var a = je.current;
          je.current = Vo;
          try {
            return xb(e, t);
          } finally {
            je.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ce = "useReducer", Ne();
          var o = je.current;
          je.current = Vo;
          try {
            return pb(e, t, a);
          } finally {
            je.current = o;
          }
        },
        useRef: function(e) {
          return ce = "useRef", Ne(), Sb(e);
        },
        useState: function(e) {
          ce = "useState", Ne();
          var t = je.current;
          je.current = Vo;
          try {
            return Gy(e);
          } finally {
            je.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ce = "useDebugValue", Ne(), void 0;
        },
        useDeferredValue: function(e) {
          return ce = "useDeferredValue", Ne(), wb(e);
        },
        useTransition: function() {
          return ce = "useTransition", Ne(), Rb();
        },
        useMutableSource: function(e, t, a) {
          return ce = "useMutableSource", Ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ce = "useSyncExternalStore", Ne(), mb(e, t, a);
        },
        useId: function() {
          return ce = "useId", Ne(), Ob();
        },
        unstable_isNewReconciler: se
      }, AT = {
        readContext: function(e) {
          return hr(e);
        },
        useCallback: function(e, t) {
          return ce = "useCallback", Ne(), tg(e, t);
        },
        useContext: function(e) {
          return ce = "useContext", Ne(), hr(e);
        },
        useEffect: function(e, t) {
          return ce = "useEffect", Ne(), Dv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ce = "useImperativeHandle", Ne(), Jy(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ce = "useInsertionEffect", Ne(), Ky(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ce = "useLayoutEffect", Ne(), Zy(e, t);
        },
        useMemo: function(e, t) {
          ce = "useMemo", Ne();
          var a = je.current;
          je.current = so;
          try {
            return ng(e, t);
          } finally {
            je.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ce = "useReducer", Ne();
          var o = je.current;
          je.current = so;
          try {
            return vb(e, t, a);
          } finally {
            je.current = o;
          }
        },
        useRef: function(e) {
          return ce = "useRef", Ne(), Qy();
        },
        useState: function(e) {
          ce = "useState", Ne();
          var t = je.current;
          je.current = so;
          try {
            return yb(e);
          } finally {
            je.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ce = "useDebugValue", Ne(), eg();
        },
        useDeferredValue: function(e) {
          return ce = "useDeferredValue", Ne(), ET(e);
        },
        useTransition: function() {
          return ce = "useTransition", Ne(), xT();
        },
        useMutableSource: function(e, t, a) {
          return ce = "useMutableSource", Ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ce = "useSyncExternalStore", Ne(), Wy(e, t);
        },
        useId: function() {
          return ce = "useId", Ne(), rg();
        },
        unstable_isNewReconciler: se
      }, LT = {
        readContext: function(e) {
          return hr(e);
        },
        useCallback: function(e, t) {
          return ce = "useCallback", Ne(), tg(e, t);
        },
        useContext: function(e) {
          return ce = "useContext", Ne(), hr(e);
        },
        useEffect: function(e, t) {
          return ce = "useEffect", Ne(), Dv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ce = "useImperativeHandle", Ne(), Jy(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ce = "useInsertionEffect", Ne(), Ky(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ce = "useLayoutEffect", Ne(), Zy(e, t);
        },
        useMemo: function(e, t) {
          ce = "useMemo", Ne();
          var a = je.current;
          je.current = ig;
          try {
            return ng(e, t);
          } finally {
            je.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ce = "useReducer", Ne();
          var o = je.current;
          je.current = ig;
          try {
            return hb(e, t, a);
          } finally {
            je.current = o;
          }
        },
        useRef: function(e) {
          return ce = "useRef", Ne(), Qy();
        },
        useState: function(e) {
          ce = "useState", Ne();
          var t = je.current;
          je.current = ig;
          try {
            return gb(e);
          } finally {
            je.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ce = "useDebugValue", Ne(), eg();
        },
        useDeferredValue: function(e) {
          return ce = "useDeferredValue", Ne(), CT(e);
        },
        useTransition: function() {
          return ce = "useTransition", Ne(), wT();
        },
        useMutableSource: function(e, t, a) {
          return ce = "useMutableSource", Ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ce = "useSyncExternalStore", Ne(), Wy(e, t);
        },
        useId: function() {
          return ce = "useId", Ne(), rg();
        },
        unstable_isNewReconciler: se
      }, Vo = {
        readContext: function(e) {
          return kb(), hr(e);
        },
        useCallback: function(e, t) {
          return ce = "useCallback", ht(), Vt(), Tb(e, t);
        },
        useContext: function(e) {
          return ce = "useContext", ht(), Vt(), hr(e);
        },
        useEffect: function(e, t) {
          return ce = "useEffect", ht(), Vt(), Xy(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ce = "useImperativeHandle", ht(), Vt(), Cb(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ce = "useInsertionEffect", ht(), Vt(), bb(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ce = "useLayoutEffect", ht(), Vt(), Eb(e, t);
        },
        useMemo: function(e, t) {
          ce = "useMemo", ht(), Vt();
          var a = je.current;
          je.current = Vo;
          try {
            return xb(e, t);
          } finally {
            je.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ce = "useReducer", ht(), Vt();
          var o = je.current;
          je.current = Vo;
          try {
            return pb(e, t, a);
          } finally {
            je.current = o;
          }
        },
        useRef: function(e) {
          return ce = "useRef", ht(), Vt(), Sb(e);
        },
        useState: function(e) {
          ce = "useState", ht(), Vt();
          var t = je.current;
          je.current = Vo;
          try {
            return Gy(e);
          } finally {
            je.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ce = "useDebugValue", ht(), Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return ce = "useDeferredValue", ht(), Vt(), wb(e);
        },
        useTransition: function() {
          return ce = "useTransition", ht(), Vt(), Rb();
        },
        useMutableSource: function(e, t, a) {
          return ce = "useMutableSource", ht(), Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ce = "useSyncExternalStore", ht(), Vt(), mb(e, t, a);
        },
        useId: function() {
          return ce = "useId", ht(), Vt(), Ob();
        },
        unstable_isNewReconciler: se
      }, so = {
        readContext: function(e) {
          return kb(), hr(e);
        },
        useCallback: function(e, t) {
          return ce = "useCallback", ht(), Ne(), tg(e, t);
        },
        useContext: function(e) {
          return ce = "useContext", ht(), Ne(), hr(e);
        },
        useEffect: function(e, t) {
          return ce = "useEffect", ht(), Ne(), Dv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ce = "useImperativeHandle", ht(), Ne(), Jy(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ce = "useInsertionEffect", ht(), Ne(), Ky(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ce = "useLayoutEffect", ht(), Ne(), Zy(e, t);
        },
        useMemo: function(e, t) {
          ce = "useMemo", ht(), Ne();
          var a = je.current;
          je.current = so;
          try {
            return ng(e, t);
          } finally {
            je.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ce = "useReducer", ht(), Ne();
          var o = je.current;
          je.current = so;
          try {
            return vb(e, t, a);
          } finally {
            je.current = o;
          }
        },
        useRef: function(e) {
          return ce = "useRef", ht(), Ne(), Qy();
        },
        useState: function(e) {
          ce = "useState", ht(), Ne();
          var t = je.current;
          je.current = so;
          try {
            return yb(e);
          } finally {
            je.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ce = "useDebugValue", ht(), Ne(), eg();
        },
        useDeferredValue: function(e) {
          return ce = "useDeferredValue", ht(), Ne(), ET(e);
        },
        useTransition: function() {
          return ce = "useTransition", ht(), Ne(), xT();
        },
        useMutableSource: function(e, t, a) {
          return ce = "useMutableSource", ht(), Ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ce = "useSyncExternalStore", ht(), Ne(), Wy(e, t);
        },
        useId: function() {
          return ce = "useId", ht(), Ne(), rg();
        },
        unstable_isNewReconciler: se
      }, ig = {
        readContext: function(e) {
          return kb(), hr(e);
        },
        useCallback: function(e, t) {
          return ce = "useCallback", ht(), Ne(), tg(e, t);
        },
        useContext: function(e) {
          return ce = "useContext", ht(), Ne(), hr(e);
        },
        useEffect: function(e, t) {
          return ce = "useEffect", ht(), Ne(), Dv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ce = "useImperativeHandle", ht(), Ne(), Jy(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ce = "useInsertionEffect", ht(), Ne(), Ky(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ce = "useLayoutEffect", ht(), Ne(), Zy(e, t);
        },
        useMemo: function(e, t) {
          ce = "useMemo", ht(), Ne();
          var a = je.current;
          je.current = so;
          try {
            return ng(e, t);
          } finally {
            je.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ce = "useReducer", ht(), Ne();
          var o = je.current;
          je.current = so;
          try {
            return hb(e, t, a);
          } finally {
            je.current = o;
          }
        },
        useRef: function(e) {
          return ce = "useRef", ht(), Ne(), Qy();
        },
        useState: function(e) {
          ce = "useState", ht(), Ne();
          var t = je.current;
          je.current = so;
          try {
            return gb(e);
          } finally {
            je.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ce = "useDebugValue", ht(), Ne(), eg();
        },
        useDeferredValue: function(e) {
          return ce = "useDeferredValue", ht(), Ne(), CT(e);
        },
        useTransition: function() {
          return ce = "useTransition", ht(), Ne(), wT();
        },
        useMutableSource: function(e, t, a) {
          return ce = "useMutableSource", ht(), Ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ce = "useSyncExternalStore", ht(), Ne(), Wy(e, t);
        },
        useId: function() {
          return ce = "useId", ht(), Ne(), rg();
        },
        unstable_isNewReconciler: se
      };
    }
    var Qu = s.unstable_now, zT = 0, og = -1, _v = -1, lg = -1, Db = !1, ug = !1;
    function UT() {
      return Db;
    }
    function __() {
      ug = !0;
    }
    function M_() {
      Db = !1, ug = !1;
    }
    function N_() {
      Db = ug, ug = !1;
    }
    function PT() {
      return zT;
    }
    function $T() {
      zT = Qu();
    }
    function _b(e) {
      _v = Qu(), e.actualStartTime < 0 && (e.actualStartTime = Qu());
    }
    function jT(e) {
      _v = -1;
    }
    function sg(e, t) {
      if (_v >= 0) {
        var a = Qu() - _v;
        e.actualDuration += a, t && (e.selfBaseDuration = a), _v = -1;
      }
    }
    function Io(e) {
      if (og >= 0) {
        var t = Qu() - og;
        og = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case M:
              var o = a.stateNode;
              o.effectDuration += t;
              return;
            case Y:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Mb(e) {
      if (lg >= 0) {
        var t = Qu() - lg;
        lg = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case M:
              var o = a.stateNode;
              o !== null && (o.passiveEffectDuration += t);
              return;
            case Y:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Yo() {
      og = Qu();
    }
    function Nb() {
      lg = Qu();
    }
    function Ab(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function co(e, t) {
      if (e && e.defaultProps) {
        var a = wt({}, t), o = e.defaultProps;
        for (var u in o)
          a[u] === void 0 && (a[u] = o[u]);
        return a;
      }
      return t;
    }
    var Lb = {}, zb, Ub, Pb, $b, jb, FT, cg, Fb, Bb, Hb, Mv;
    {
      zb = /* @__PURE__ */ new Set(), Ub = /* @__PURE__ */ new Set(), Pb = /* @__PURE__ */ new Set(), $b = /* @__PURE__ */ new Set(), Fb = /* @__PURE__ */ new Set(), jb = /* @__PURE__ */ new Set(), Bb = /* @__PURE__ */ new Set(), Hb = /* @__PURE__ */ new Set(), Mv = /* @__PURE__ */ new Set();
      var BT = /* @__PURE__ */ new Set();
      cg = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          BT.has(a) || (BT.add(a), y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, FT = function(e, t) {
        if (t === void 0) {
          var a = Qt(e) || "Component";
          jb.has(a) || (jb.add(a), y("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Lb, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Lb);
    }
    function Vb(e, t, a, o) {
      var u = e.memoizedState, d = a(o, u);
      {
        if (e.mode & Rt) {
          Vn(!0);
          try {
            d = a(o, u);
          } finally {
            Vn(!1);
          }
        }
        FT(t, d);
      }
      var m = d == null ? u : wt({}, u, d);
      if (e.memoizedState = m, e.lanes === de) {
        var b = e.updateQueue;
        b.baseState = m;
      }
    }
    var Ib = {
      isMounted: ba,
      enqueueSetState: function(e, t, a) {
        var o = Aa(e), u = Ra(), d = Zu(o), m = Ul(u, d);
        m.payload = t, a != null && (cg(a, "setState"), m.callback = a);
        var b = Iu(o, m, d);
        b !== null && (Dr(b, o, d, u), jy(b, o, d)), As(o, d);
      },
      enqueueReplaceState: function(e, t, a) {
        var o = Aa(e), u = Ra(), d = Zu(o), m = Ul(u, d);
        m.tag = aT, m.payload = t, a != null && (cg(a, "replaceState"), m.callback = a);
        var b = Iu(o, m, d);
        b !== null && (Dr(b, o, d, u), jy(b, o, d)), As(o, d);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Aa(e), o = Ra(), u = Zu(a), d = Ul(o, u);
        d.tag = Uy, t != null && (cg(t, "forceUpdate"), d.callback = t);
        var m = Iu(a, d, u);
        m !== null && (Dr(m, a, u, o), jy(m, a, u)), af(a, u);
      }
    };
    function HT(e, t, a, o, u, d, m) {
      var b = e.stateNode;
      if (typeof b.shouldComponentUpdate == "function") {
        var E = b.shouldComponentUpdate(o, d, m);
        {
          if (e.mode & Rt) {
            Vn(!0);
            try {
              E = b.shouldComponentUpdate(o, d, m);
            } finally {
              Vn(!1);
            }
          }
          E === void 0 && y("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Qt(t) || "Component");
        }
        return E;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !ct(a, o) || !ct(u, d) : !0;
    }
    function A_(e, t, a) {
      var o = e.stateNode;
      {
        var u = Qt(t) || "Component", d = o.render;
        d || (t.prototype && typeof t.prototype.render == "function" ? y("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : y("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), o.getInitialState && !o.getInitialState.isReactClassApproved && !o.state && y("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), o.getDefaultProps && !o.getDefaultProps.isReactClassApproved && y("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), o.propTypes && y("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), o.contextType && y("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Mv.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Rt) === Je && (Mv.add(t), y(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Mv.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Rt) === Je && (Mv.add(t), y(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), o.contextTypes && y("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !Bb.has(t) && (Bb.add(t), y("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof o.componentShouldUpdate == "function" && y("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof o.shouldComponentUpdate < "u" && y("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Qt(t) || "A pure component"), typeof o.componentDidUnmount == "function" && y("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof o.componentDidReceiveProps == "function" && y("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof o.componentWillRecieveProps == "function" && y("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof o.UNSAFE_componentWillRecieveProps == "function" && y("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var m = o.props !== a;
        o.props !== void 0 && m && y("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), o.defaultProps && y("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof o.getSnapshotBeforeUpdate == "function" && typeof o.componentDidUpdate != "function" && !Pb.has(t) && (Pb.add(t), y("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Qt(t))), typeof o.getDerivedStateFromProps == "function" && y("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof o.getDerivedStateFromError == "function" && y("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && y("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var b = o.state;
        b && (typeof b != "object" || sr(b)) && y("%s.state: must be set to an object or null", u), typeof o.getChildContext == "function" && typeof t.childContextTypes != "object" && y("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function VT(e, t) {
      t.updater = Ib, e.stateNode = t, lu(t, e), t._reactInternalInstance = Lb;
    }
    function IT(e, t, a) {
      var o = !1, u = ci, d = ci, m = t.contextType;
      if ("contextType" in t) {
        var b = (
          // Allow null for conditional declaration
          m === null || m !== void 0 && m.$$typeof === me && m._context === void 0
        );
        if (!b && !Hb.has(t)) {
          Hb.add(t);
          var E = "";
          m === void 0 ? E = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof m != "object" ? E = " However, it is set to a " + typeof m + "." : m.$$typeof === z ? E = " Did you accidentally pass the Context.Provider instead?" : m._context !== void 0 ? E = " Did you accidentally pass the Context.Consumer instead?" : E = " However, it is set to an object with keys {" + Object.keys(m).join(", ") + "}.", y("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Qt(t) || "Component", E);
        }
      }
      if (typeof m == "object" && m !== null)
        d = hr(m);
      else {
        u = Zf(e, t, !0);
        var R = t.contextTypes;
        o = R != null, d = o ? Jf(e, u) : ci;
      }
      var D = new t(a, d);
      if (e.mode & Rt) {
        Vn(!0);
        try {
          D = new t(a, d);
        } finally {
          Vn(!1);
        }
      }
      var V = e.memoizedState = D.state !== null && D.state !== void 0 ? D.state : null;
      VT(e, D);
      {
        if (typeof t.getDerivedStateFromProps == "function" && V === null) {
          var F = Qt(t) || "Component";
          Ub.has(F) || (Ub.add(F), y("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", F, D.state === null ? "null" : "undefined", F));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof D.getSnapshotBeforeUpdate == "function") {
          var K = null, J = null, ae = null;
          if (typeof D.componentWillMount == "function" && D.componentWillMount.__suppressDeprecationWarning !== !0 ? K = "componentWillMount" : typeof D.UNSAFE_componentWillMount == "function" && (K = "UNSAFE_componentWillMount"), typeof D.componentWillReceiveProps == "function" && D.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? J = "componentWillReceiveProps" : typeof D.UNSAFE_componentWillReceiveProps == "function" && (J = "UNSAFE_componentWillReceiveProps"), typeof D.componentWillUpdate == "function" && D.componentWillUpdate.__suppressDeprecationWarning !== !0 ? ae = "componentWillUpdate" : typeof D.UNSAFE_componentWillUpdate == "function" && (ae = "UNSAFE_componentWillUpdate"), K !== null || J !== null || ae !== null) {
            var ze = Qt(t) || "Component", lt = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            $b.has(ze) || ($b.add(ze), y(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ze, lt, K !== null ? `
  ` + K : "", J !== null ? `
  ` + J : "", ae !== null ? `
  ` + ae : ""));
          }
        }
      }
      return o && AC(e, u, d), D;
    }
    function L_(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (y("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", gt(e) || "Component"), Ib.enqueueReplaceState(t, t.state, null));
    }
    function YT(e, t, a, o) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, o), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, o), t.state !== u) {
        {
          var d = gt(e) || "Component";
          zb.has(d) || (zb.add(d), y("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", d));
        }
        Ib.enqueueReplaceState(t, t.state, null);
      }
    }
    function Yb(e, t, a, o) {
      A_(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, eb(e);
      var d = t.contextType;
      if (typeof d == "object" && d !== null)
        u.context = hr(d);
      else {
        var m = Zf(e, t, !0);
        u.context = Jf(e, m);
      }
      {
        if (u.state === a) {
          var b = Qt(t) || "Component";
          Fb.has(b) || (Fb.add(b), y("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", b));
        }
        e.mode & Rt && lo.recordLegacyContextWarning(e, u), lo.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var E = t.getDerivedStateFromProps;
      if (typeof E == "function" && (Vb(e, t, E, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (L_(e, u), Fy(e, a, u, o), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var R = bt;
        R |= ea, (e.mode & Ca) !== Je && (R |= ta), e.flags |= R;
      }
    }
    function z_(e, t, a, o) {
      var u = e.stateNode, d = e.memoizedProps;
      u.props = d;
      var m = u.context, b = t.contextType, E = ci;
      if (typeof b == "object" && b !== null)
        E = hr(b);
      else {
        var R = Zf(e, t, !0);
        E = Jf(e, R);
      }
      var D = t.getDerivedStateFromProps, V = typeof D == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !V && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (d !== a || m !== E) && YT(e, u, a, E), oT();
      var F = e.memoizedState, K = u.state = F;
      if (Fy(e, a, u, o), K = e.memoizedState, d === a && F === K && !Ey() && !By()) {
        if (typeof u.componentDidMount == "function") {
          var J = bt;
          J |= ea, (e.mode & Ca) !== Je && (J |= ta), e.flags |= J;
        }
        return !1;
      }
      typeof D == "function" && (Vb(e, t, D, a), K = e.memoizedState);
      var ae = By() || HT(e, t, d, a, F, K, E);
      if (ae) {
        if (!V && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var ze = bt;
          ze |= ea, (e.mode & Ca) !== Je && (ze |= ta), e.flags |= ze;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var lt = bt;
          lt |= ea, (e.mode & Ca) !== Je && (lt |= ta), e.flags |= lt;
        }
        e.memoizedProps = a, e.memoizedState = K;
      }
      return u.props = a, u.state = K, u.context = E, ae;
    }
    function U_(e, t, a, o, u) {
      var d = t.stateNode;
      iT(e, t);
      var m = t.memoizedProps, b = t.type === t.elementType ? m : co(t.type, m);
      d.props = b;
      var E = t.pendingProps, R = d.context, D = a.contextType, V = ci;
      if (typeof D == "object" && D !== null)
        V = hr(D);
      else {
        var F = Zf(t, a, !0);
        V = Jf(t, F);
      }
      var K = a.getDerivedStateFromProps, J = typeof K == "function" || typeof d.getSnapshotBeforeUpdate == "function";
      !J && (typeof d.UNSAFE_componentWillReceiveProps == "function" || typeof d.componentWillReceiveProps == "function") && (m !== E || R !== V) && YT(t, d, o, V), oT();
      var ae = t.memoizedState, ze = d.state = ae;
      if (Fy(t, o, d, u), ze = t.memoizedState, m === E && ae === ze && !Ey() && !By() && !Ee)
        return typeof d.componentDidUpdate == "function" && (m !== e.memoizedProps || ae !== e.memoizedState) && (t.flags |= bt), typeof d.getSnapshotBeforeUpdate == "function" && (m !== e.memoizedProps || ae !== e.memoizedState) && (t.flags |= La), !1;
      typeof K == "function" && (Vb(t, a, K, o), ze = t.memoizedState);
      var lt = By() || HT(t, a, b, o, ae, ze, V) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Ee;
      return lt ? (!J && (typeof d.UNSAFE_componentWillUpdate == "function" || typeof d.componentWillUpdate == "function") && (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(o, ze, V), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(o, ze, V)), typeof d.componentDidUpdate == "function" && (t.flags |= bt), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= La)) : (typeof d.componentDidUpdate == "function" && (m !== e.memoizedProps || ae !== e.memoizedState) && (t.flags |= bt), typeof d.getSnapshotBeforeUpdate == "function" && (m !== e.memoizedProps || ae !== e.memoizedState) && (t.flags |= La), t.memoizedProps = o, t.memoizedState = ze), d.props = o, d.state = ze, d.context = V, lt;
    }
    function cc(e, t) {
      return {
        value: e,
        source: t,
        stack: Wd(t),
        digest: null
      };
    }
    function Wb(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function P_(e, t) {
      return !0;
    }
    function Gb(e, t) {
      try {
        var a = P_(e, t);
        if (a === !1)
          return;
        var o = t.value, u = t.source, d = t.stack, m = d !== null ? d : "";
        if (o != null && o._suppressLogging) {
          if (e.tag === k)
            return;
          console.error(o);
        }
        var b = u ? gt(u) : null, E = b ? "The above error occurred in the <" + b + "> component:" : "The above error occurred in one of your React components:", R;
        if (e.tag === M)
          R = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var D = gt(e) || "Anonymous";
          R = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + D + ".");
        }
        var V = E + `
` + m + `

` + ("" + R);
        console.error(V);
      } catch (F) {
        setTimeout(function() {
          throw F;
        });
      }
    }
    var $_ = typeof WeakMap == "function" ? WeakMap : Map;
    function WT(e, t, a) {
      var o = Ul(sn, a);
      o.tag = ZS, o.payload = {
        element: null
      };
      var u = t.value;
      return o.callback = function() {
        _2(u), Gb(e, t);
      }, o;
    }
    function Qb(e, t, a) {
      var o = Ul(sn, a);
      o.tag = ZS;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var d = t.value;
        o.payload = function() {
          return u(d);
        }, o.callback = function() {
          rw(e), Gb(e, t);
        };
      }
      var m = e.stateNode;
      return m !== null && typeof m.componentDidCatch == "function" && (o.callback = function() {
        rw(e), Gb(e, t), typeof u != "function" && k2(this);
        var E = t.value, R = t.stack;
        this.componentDidCatch(E, {
          componentStack: R !== null ? R : ""
        }), typeof u != "function" && (la(e.lanes, at) || y("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", gt(e) || "Unknown"));
      }), o;
    }
    function GT(e, t, a) {
      var o = e.pingCache, u;
      if (o === null ? (o = e.pingCache = new $_(), u = /* @__PURE__ */ new Set(), o.set(t, u)) : (u = o.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), o.set(t, u))), !u.has(a)) {
        u.add(a);
        var d = M2.bind(null, e, t, a);
        Ea && Qv(e, a), t.then(d, d);
      }
    }
    function j_(e, t, a, o) {
      var u = e.updateQueue;
      if (u === null) {
        var d = /* @__PURE__ */ new Set();
        d.add(a), e.updateQueue = d;
      } else
        u.add(a);
    }
    function F_(e, t) {
      var a = e.tag;
      if ((e.mode & tt) === Je && (a === x || a === q || a === te)) {
        var o = e.alternate;
        o ? (e.updateQueue = o.updateQueue, e.memoizedState = o.memoizedState, e.lanes = o.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function QT(e) {
      var t = e;
      do {
        if (t.tag === U && b_(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function qT(e, t, a, o, u) {
      if ((e.mode & tt) === Je) {
        if (e === t)
          e.flags |= fr;
        else {
          if (e.flags |= pt, a.flags |= _s, a.flags &= ~(Wc | ga), a.tag === k) {
            var d = a.alternate;
            if (d === null)
              a.tag = Oe;
            else {
              var m = Ul(sn, at);
              m.tag = Uy, Iu(a, m, at);
            }
          }
          a.lanes = St(a.lanes, at);
        }
        return e;
      }
      return e.flags |= fr, e.lanes = u, e;
    }
    function B_(e, t, a, o, u) {
      if (a.flags |= ga, Ea && Qv(e, u), o !== null && typeof o == "object" && typeof o.then == "function") {
        var d = o;
        F_(a), Br() && a.mode & tt && FC();
        var m = QT(t);
        if (m !== null) {
          m.flags &= ~Dn, qT(m, t, a, e, u), m.mode & tt && GT(e, d, u), j_(m, e, d);
          return;
        } else {
          if (!Lp(u)) {
            GT(e, d, u), O1();
            return;
          }
          var b = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          o = b;
        }
      } else if (Br() && a.mode & tt) {
        FC();
        var E = QT(t);
        if (E !== null) {
          (E.flags & fr) === ot && (E.flags |= Dn), qT(E, t, a, e, u), FS(cc(o, a));
          return;
        }
      }
      o = cc(o, a), b2(o);
      var R = t;
      do {
        switch (R.tag) {
          case M: {
            var D = o;
            R.flags |= fr;
            var V = Eu(u);
            R.lanes = St(R.lanes, V);
            var F = WT(R, D, V);
            tb(R, F);
            return;
          }
          case k:
            var K = o, J = R.type, ae = R.stateNode;
            if ((R.flags & pt) === ot && (typeof J.getDerivedStateFromError == "function" || ae !== null && typeof ae.componentDidCatch == "function" && !Qx(ae))) {
              R.flags |= fr;
              var ze = Eu(u);
              R.lanes = St(R.lanes, ze);
              var lt = Qb(R, K, ze);
              tb(R, lt);
              return;
            }
            break;
        }
        R = R.return;
      } while (R !== null);
    }
    function H_() {
      return null;
    }
    var Nv = c.ReactCurrentOwner, fo = !1, qb, Av, Xb, Kb, Zb, fc, Jb, fg, Lv;
    qb = {}, Av = {}, Xb = {}, Kb = {}, Zb = {}, fc = !1, Jb = {}, fg = {}, Lv = {};
    function xa(e, t, a, o) {
      e === null ? t.child = ZC(t, null, a, o) : t.child = rd(t, e.child, a, o);
    }
    function V_(e, t, a, o) {
      t.child = rd(t, e.child, null, o), t.child = rd(t, null, a, o);
    }
    function XT(e, t, a, o, u) {
      if (t.type !== t.elementType) {
        var d = a.propTypes;
        d && io(
          d,
          o,
          // Resolved props
          "prop",
          Qt(a)
        );
      }
      var m = a.render, b = t.ref, E, R;
      id(t, u), fu(t);
      {
        if (Nv.current = t, ii(!0), E = fd(e, t, m, o, b, u), R = dd(), t.mode & Rt) {
          Vn(!0);
          try {
            E = fd(e, t, m, o, b, u), R = dd();
          } finally {
            Vn(!1);
          }
        }
        ii(!1);
      }
      return aa(), e !== null && !fo ? (dT(e, t, u), Pl(e, t, u)) : (Br() && R && LS(t), t.flags |= Oo, xa(e, t, E, u), t.child);
    }
    function KT(e, t, a, o, u) {
      if (e === null) {
        var d = a.type;
        if (Q2(d) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var m = d;
          return m = bd(d), t.tag = te, t.type = m, n1(t, d), ZT(e, t, m, o, u);
        }
        {
          var b = d.propTypes;
          if (b && io(
            b,
            o,
            // Resolved props
            "prop",
            Qt(d)
          ), a.defaultProps !== void 0) {
            var E = Qt(d) || "Unknown";
            Lv[E] || (y("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", E), Lv[E] = !0);
          }
        }
        var R = $1(a.type, null, o, t, t.mode, u);
        return R.ref = t.ref, R.return = t, t.child = R, R;
      }
      {
        var D = a.type, V = D.propTypes;
        V && io(
          V,
          o,
          // Resolved props
          "prop",
          Qt(D)
        );
      }
      var F = e.child, K = u1(e, u);
      if (!K) {
        var J = F.memoizedProps, ae = a.compare;
        if (ae = ae !== null ? ae : ct, ae(J, o) && e.ref === t.ref)
          return Pl(e, t, u);
      }
      t.flags |= Oo;
      var ze = mc(F, o);
      return ze.ref = t.ref, ze.return = t, t.child = ze, ze;
    }
    function ZT(e, t, a, o, u) {
      if (t.type !== t.elementType) {
        var d = t.elementType;
        if (d.$$typeof === ft) {
          var m = d, b = m._payload, E = m._init;
          try {
            d = E(b);
          } catch {
            d = null;
          }
          var R = d && d.propTypes;
          R && io(
            R,
            o,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Qt(d)
          );
        }
      }
      if (e !== null) {
        var D = e.memoizedProps;
        if (ct(D, o) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (fo = !1, t.pendingProps = o = D, u1(e, u))
            (e.flags & _s) !== ot && (fo = !0);
          else return t.lanes = e.lanes, Pl(e, t, u);
      }
      return e1(e, t, a, o, u);
    }
    function JT(e, t, a) {
      var o = t.pendingProps, u = o.children, d = e !== null ? e.memoizedState : null;
      if (o.mode === "hidden" || I)
        if ((t.mode & tt) === Je) {
          var m = {
            baseLanes: de,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = m, xg(t, a);
        } else if (la(a, Lr)) {
          var V = {
            baseLanes: de,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = V;
          var F = d !== null ? d.baseLanes : a;
          xg(t, F);
        } else {
          var b = null, E;
          if (d !== null) {
            var R = d.baseLanes;
            E = St(R, a);
          } else
            E = a;
          t.lanes = t.childLanes = Lr;
          var D = {
            baseLanes: E,
            cachePool: b,
            transitions: null
          };
          return t.memoizedState = D, t.updateQueue = null, xg(t, E), null;
        }
      else {
        var K;
        d !== null ? (K = St(d.baseLanes, a), t.memoizedState = null) : K = a, xg(t, K);
      }
      return xa(e, t, u, a), t.child;
    }
    function I_(e, t, a) {
      var o = t.pendingProps;
      return xa(e, t, o, a), t.child;
    }
    function Y_(e, t, a) {
      var o = t.pendingProps.children;
      return xa(e, t, o, a), t.child;
    }
    function W_(e, t, a) {
      {
        t.flags |= bt;
        {
          var o = t.stateNode;
          o.effectDuration = 0, o.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, d = u.children;
      return xa(e, t, d, a), t.child;
    }
    function ex(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Jr, t.flags |= Ep);
    }
    function e1(e, t, a, o, u) {
      if (t.type !== t.elementType) {
        var d = a.propTypes;
        d && io(
          d,
          o,
          // Resolved props
          "prop",
          Qt(a)
        );
      }
      var m;
      {
        var b = Zf(t, a, !0);
        m = Jf(t, b);
      }
      var E, R;
      id(t, u), fu(t);
      {
        if (Nv.current = t, ii(!0), E = fd(e, t, a, o, m, u), R = dd(), t.mode & Rt) {
          Vn(!0);
          try {
            E = fd(e, t, a, o, m, u), R = dd();
          } finally {
            Vn(!1);
          }
        }
        ii(!1);
      }
      return aa(), e !== null && !fo ? (dT(e, t, u), Pl(e, t, u)) : (Br() && R && LS(t), t.flags |= Oo, xa(e, t, E, u), t.child);
    }
    function tx(e, t, a, o, u) {
      {
        switch (sN(t)) {
          case !1: {
            var d = t.stateNode, m = t.type, b = new m(t.memoizedProps, d.context), E = b.state;
            d.updater.enqueueSetState(d, E, null);
            break;
          }
          case !0: {
            t.flags |= pt, t.flags |= fr;
            var R = new Error("Simulated error coming from DevTools"), D = Eu(u);
            t.lanes = St(t.lanes, D);
            var V = Qb(t, cc(R, t), D);
            tb(t, V);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var F = a.propTypes;
          F && io(
            F,
            o,
            // Resolved props
            "prop",
            Qt(a)
          );
        }
      }
      var K;
      Fo(a) ? (K = !0, Ty(t)) : K = !1, id(t, u);
      var J = t.stateNode, ae;
      J === null ? (pg(e, t), IT(t, a, o), Yb(t, a, o, u), ae = !0) : e === null ? ae = z_(t, a, o, u) : ae = U_(e, t, a, o, u);
      var ze = t1(e, t, a, ae, K, u);
      {
        var lt = t.stateNode;
        ae && lt.props !== o && (fc || y("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", gt(t) || "a component"), fc = !0);
      }
      return ze;
    }
    function t1(e, t, a, o, u, d) {
      ex(e, t);
      var m = (t.flags & pt) !== ot;
      if (!o && !m)
        return u && UC(t, a, !1), Pl(e, t, d);
      var b = t.stateNode;
      Nv.current = t;
      var E;
      if (m && typeof a.getDerivedStateFromError != "function")
        E = null, jT();
      else {
        fu(t);
        {
          if (ii(!0), E = b.render(), t.mode & Rt) {
            Vn(!0);
            try {
              b.render();
            } finally {
              Vn(!1);
            }
          }
          ii(!1);
        }
        aa();
      }
      return t.flags |= Oo, e !== null && m ? V_(e, t, E, d) : xa(e, t, E, d), t.memoizedState = b.state, u && UC(t, a, !0), t.child;
    }
    function nx(e) {
      var t = e.stateNode;
      t.pendingContext ? LC(e, t.pendingContext, t.pendingContext !== t.context) : t.context && LC(e, t.context, !1), nb(e, t.containerInfo);
    }
    function G_(e, t, a) {
      if (nx(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var o = t.pendingProps, u = t.memoizedState, d = u.element;
      iT(e, t), Fy(t, o, null, a);
      var m = t.memoizedState;
      t.stateNode;
      var b = m.element;
      if (u.isDehydrated) {
        var E = {
          element: b,
          isDehydrated: !1,
          cache: m.cache,
          pendingSuspenseBoundaries: m.pendingSuspenseBoundaries,
          transitions: m.transitions
        }, R = t.updateQueue;
        if (R.baseState = E, t.memoizedState = E, t.flags & Dn) {
          var D = cc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return rx(e, t, b, a, D);
        } else if (b !== d) {
          var V = cc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return rx(e, t, b, a, V);
        } else {
          XD(t);
          var F = ZC(t, null, b, a);
          t.child = F;
          for (var K = F; K; )
            K.flags = K.flags & ~fn | za, K = K.sibling;
        }
      } else {
        if (nd(), b === d)
          return Pl(e, t, a);
        xa(e, t, b, a);
      }
      return t.child;
    }
    function rx(e, t, a, o, u) {
      return nd(), FS(u), t.flags |= Dn, xa(e, t, a, o), t.child;
    }
    function Q_(e, t, a) {
      sT(t), e === null && jS(t);
      var o = t.type, u = t.pendingProps, d = e !== null ? e.memoizedProps : null, m = u.children, b = bS(o, u);
      return b ? m = null : d !== null && bS(o, d) && (t.flags |= Ht), ex(e, t), xa(e, t, m, a), t.child;
    }
    function q_(e, t) {
      return e === null && jS(t), null;
    }
    function X_(e, t, a, o) {
      pg(e, t);
      var u = t.pendingProps, d = a, m = d._payload, b = d._init, E = b(m);
      t.type = E;
      var R = t.tag = q2(E), D = co(E, u), V;
      switch (R) {
        case x:
          return n1(t, E), t.type = E = bd(E), V = e1(null, t, E, D, o), V;
        case k:
          return t.type = E = N1(E), V = tx(null, t, E, D, o), V;
        case q:
          return t.type = E = A1(E), V = XT(null, t, E, D, o), V;
        case re: {
          if (t.type !== t.elementType) {
            var F = E.propTypes;
            F && io(
              F,
              D,
              // Resolved for outer only
              "prop",
              Qt(E)
            );
          }
          return V = KT(
            null,
            t,
            E,
            co(E.type, D),
            // The inner type can have defaults too
            o
          ), V;
        }
      }
      var K = "";
      throw E !== null && typeof E == "object" && E.$$typeof === ft && (K = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + E + ". " + ("Lazy element type must resolve to a class or function." + K));
    }
    function K_(e, t, a, o, u) {
      pg(e, t), t.tag = k;
      var d;
      return Fo(a) ? (d = !0, Ty(t)) : d = !1, id(t, u), IT(t, a, o), Yb(t, a, o, u), t1(null, t, a, !0, d, u);
    }
    function Z_(e, t, a, o) {
      pg(e, t);
      var u = t.pendingProps, d;
      {
        var m = Zf(t, a, !1);
        d = Jf(t, m);
      }
      id(t, o);
      var b, E;
      fu(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var R = Qt(a) || "Unknown";
          qb[R] || (y("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", R, R), qb[R] = !0);
        }
        t.mode & Rt && lo.recordLegacyContextWarning(t, null), ii(!0), Nv.current = t, b = fd(null, t, a, u, d, o), E = dd(), ii(!1);
      }
      if (aa(), t.flags |= Oo, typeof b == "object" && b !== null && typeof b.render == "function" && b.$$typeof === void 0) {
        var D = Qt(a) || "Unknown";
        Av[D] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", D, D, D), Av[D] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof b == "object" && b !== null && typeof b.render == "function" && b.$$typeof === void 0
      ) {
        {
          var V = Qt(a) || "Unknown";
          Av[V] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", V, V, V), Av[V] = !0);
        }
        t.tag = k, t.memoizedState = null, t.updateQueue = null;
        var F = !1;
        return Fo(a) ? (F = !0, Ty(t)) : F = !1, t.memoizedState = b.state !== null && b.state !== void 0 ? b.state : null, eb(t), VT(t, b), Yb(t, a, u, o), t1(null, t, a, !0, F, o);
      } else {
        if (t.tag = x, t.mode & Rt) {
          Vn(!0);
          try {
            b = fd(null, t, a, u, d, o), E = dd();
          } finally {
            Vn(!1);
          }
        }
        return Br() && E && LS(t), xa(null, t, b, o), n1(t, a), t.child;
      }
    }
    function n1(e, t) {
      {
        if (t && t.childContextTypes && y("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", o = Ma();
          o && (a += `

Check the render method of \`` + o + "`.");
          var u = o || "", d = e._debugSource;
          d && (u = d.fileName + ":" + d.lineNumber), Zb[u] || (Zb[u] = !0, y("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var m = Qt(t) || "Unknown";
          Lv[m] || (y("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", m), Lv[m] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var b = Qt(t) || "Unknown";
          Kb[b] || (y("%s: Function components do not support getDerivedStateFromProps.", b), Kb[b] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var E = Qt(t) || "Unknown";
          Xb[E] || (y("%s: Function components do not support contextType.", E), Xb[E] = !0);
        }
      }
    }
    var r1 = {
      dehydrated: null,
      treeContext: null,
      retryLane: In
    };
    function a1(e) {
      return {
        baseLanes: e,
        cachePool: H_(),
        transitions: null
      };
    }
    function J_(e, t) {
      var a = null;
      return {
        baseLanes: St(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function eM(e, t, a, o) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return ib(e, Tv);
    }
    function tM(e, t) {
      return Fs(e.childLanes, t);
    }
    function ax(e, t, a) {
      var o = t.pendingProps;
      cN(t) && (t.flags |= pt);
      var u = uo.current, d = !1, m = (t.flags & pt) !== ot;
      if (m || eM(u, e) ? (d = !0, t.flags &= ~pt) : (e === null || e.memoizedState !== null) && (u = S_(u, fT)), u = ld(u), Wu(t, u), e === null) {
        jS(t);
        var b = t.memoizedState;
        if (b !== null) {
          var E = b.dehydrated;
          if (E !== null)
            return oM(t, E);
        }
        var R = o.children, D = o.fallback;
        if (d) {
          var V = nM(t, R, D, a), F = t.child;
          return F.memoizedState = a1(a), t.memoizedState = r1, V;
        } else
          return i1(t, R);
      } else {
        var K = e.memoizedState;
        if (K !== null) {
          var J = K.dehydrated;
          if (J !== null)
            return lM(e, t, m, o, J, K, a);
        }
        if (d) {
          var ae = o.fallback, ze = o.children, lt = aM(e, t, ze, ae, a), nt = t.child, Lt = e.child.memoizedState;
          return nt.memoizedState = Lt === null ? a1(a) : J_(Lt, a), nt.childLanes = tM(e, a), t.memoizedState = r1, lt;
        } else {
          var kt = o.children, G = rM(e, t, kt, a);
          return t.memoizedState = null, G;
        }
      }
    }
    function i1(e, t, a) {
      var o = e.mode, u = {
        mode: "visible",
        children: t
      }, d = o1(u, o);
      return d.return = e, e.child = d, d;
    }
    function nM(e, t, a, o) {
      var u = e.mode, d = e.child, m = {
        mode: "hidden",
        children: t
      }, b, E;
      return (u & tt) === Je && d !== null ? (b = d, b.childLanes = de, b.pendingProps = m, e.mode & vt && (b.actualDuration = 0, b.actualStartTime = -1, b.selfBaseDuration = 0, b.treeBaseDuration = 0), E = es(a, u, o, null)) : (b = o1(m, u), E = es(a, u, o, null)), b.return = e, E.return = e, b.sibling = E, e.child = b, E;
    }
    function o1(e, t, a) {
      return iw(e, t, de, null);
    }
    function ix(e, t) {
      return mc(e, t);
    }
    function rM(e, t, a, o) {
      var u = e.child, d = u.sibling, m = ix(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & tt) === Je && (m.lanes = o), m.return = t, m.sibling = null, d !== null) {
        var b = t.deletions;
        b === null ? (t.deletions = [d], t.flags |= jt) : b.push(d);
      }
      return t.child = m, m;
    }
    function aM(e, t, a, o, u) {
      var d = t.mode, m = e.child, b = m.sibling, E = {
        mode: "hidden",
        children: a
      }, R;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (d & tt) === Je && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== m
      ) {
        var D = t.child;
        R = D, R.childLanes = de, R.pendingProps = E, t.mode & vt && (R.actualDuration = 0, R.actualStartTime = -1, R.selfBaseDuration = m.selfBaseDuration, R.treeBaseDuration = m.treeBaseDuration), t.deletions = null;
      } else
        R = ix(m, E), R.subtreeFlags = m.subtreeFlags & Sr;
      var V;
      return b !== null ? V = mc(b, o) : (V = es(o, d, u, null), V.flags |= fn), V.return = t, R.return = t, R.sibling = V, t.child = R, V;
    }
    function dg(e, t, a, o) {
      o !== null && FS(o), rd(t, e.child, null, a);
      var u = t.pendingProps, d = u.children, m = i1(t, d);
      return m.flags |= fn, t.memoizedState = null, m;
    }
    function iM(e, t, a, o, u) {
      var d = t.mode, m = {
        mode: "visible",
        children: a
      }, b = o1(m, d), E = es(o, d, u, null);
      return E.flags |= fn, b.return = t, E.return = t, b.sibling = E, t.child = b, (t.mode & tt) !== Je && rd(t, e.child, null, u), E;
    }
    function oM(e, t, a) {
      return (e.mode & tt) === Je ? (y("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = at) : xS(t) ? e.lanes = eo : e.lanes = Lr, null;
    }
    function lM(e, t, a, o, u, d, m) {
      if (a)
        if (t.flags & Dn) {
          t.flags &= ~Dn;
          var G = Wb(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return dg(e, t, m, G);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= pt, null;
          var ie = o.children, Q = o.fallback, Se = iM(e, t, ie, Q, m), Be = t.child;
          return Be.memoizedState = a1(m), t.memoizedState = r1, Se;
        }
      else {
        if (QD(), (t.mode & tt) === Je)
          return dg(
            e,
            t,
            m,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (xS(u)) {
          var b, E, R;
          {
            var D = fD(u);
            b = D.digest, E = D.message, R = D.stack;
          }
          var V;
          E ? V = new Error(E) : V = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var F = Wb(V, b, R);
          return dg(e, t, m, F);
        }
        var K = la(m, e.childLanes);
        if (fo || K) {
          var J = Tg();
          if (J !== null) {
            var ae = $m(J, m);
            if (ae !== In && ae !== d.retryLane) {
              d.retryLane = ae;
              var ze = sn;
              Ga(e, ae), Dr(J, e, ae, ze);
            }
          }
          O1();
          var lt = Wb(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return dg(e, t, m, lt);
        } else if (kC(u)) {
          t.flags |= pt, t.child = e.child;
          var nt = N2.bind(null, e);
          return dD(u, nt), null;
        } else {
          KD(t, u, d.treeContext);
          var Lt = o.children, kt = i1(t, Lt);
          return kt.flags |= za, kt;
        }
      }
    }
    function ox(e, t, a) {
      e.lanes = St(e.lanes, t);
      var o = e.alternate;
      o !== null && (o.lanes = St(o.lanes, t)), XS(e.return, t, a);
    }
    function uM(e, t, a) {
      for (var o = t; o !== null; ) {
        if (o.tag === U) {
          var u = o.memoizedState;
          u !== null && ox(o, a, e);
        } else if (o.tag === ne)
          ox(o, a, e);
        else if (o.child !== null) {
          o.child.return = o, o = o.child;
          continue;
        }
        if (o === e)
          return;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === e)
            return;
          o = o.return;
        }
        o.sibling.return = o.return, o = o.sibling;
      }
    }
    function sM(e) {
      for (var t = e, a = null; t !== null; ) {
        var o = t.alternate;
        o !== null && Iy(o) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function cM(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !Jb[e])
        if (Jb[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              y('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          y('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function fM(e, t) {
      e !== void 0 && !fg[e] && (e !== "collapsed" && e !== "hidden" ? (fg[e] = !0, y('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (fg[e] = !0, y('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function lx(e, t) {
      {
        var a = sr(e), o = !a && typeof ma(e) == "function";
        if (a || o) {
          var u = a ? "array" : "iterable";
          return y("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function dM(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (sr(e)) {
          for (var a = 0; a < e.length; a++)
            if (!lx(e[a], a))
              return;
        } else {
          var o = ma(e);
          if (typeof o == "function") {
            var u = o.call(e);
            if (u)
              for (var d = u.next(), m = 0; !d.done; d = u.next()) {
                if (!lx(d.value, m))
                  return;
                m++;
              }
          } else
            y('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function l1(e, t, a, o, u) {
      var d = e.memoizedState;
      d === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: o,
        tail: a,
        tailMode: u
      } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = a, d.tailMode = u);
    }
    function ux(e, t, a) {
      var o = t.pendingProps, u = o.revealOrder, d = o.tail, m = o.children;
      cM(u), fM(d, u), dM(m, u), xa(e, t, m, a);
      var b = uo.current, E = ib(b, Tv);
      if (E)
        b = ob(b, Tv), t.flags |= pt;
      else {
        var R = e !== null && (e.flags & pt) !== ot;
        R && uM(t, t.child, a), b = ld(b);
      }
      if (Wu(t, b), (t.mode & tt) === Je)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var D = sM(t.child), V;
            D === null ? (V = t.child, t.child = null) : (V = D.sibling, D.sibling = null), l1(
              t,
              !1,
              // isBackwards
              V,
              D,
              d
            );
            break;
          }
          case "backwards": {
            var F = null, K = t.child;
            for (t.child = null; K !== null; ) {
              var J = K.alternate;
              if (J !== null && Iy(J) === null) {
                t.child = K;
                break;
              }
              var ae = K.sibling;
              K.sibling = F, F = K, K = ae;
            }
            l1(
              t,
              !0,
              // isBackwards
              F,
              null,
              // last
              d
            );
            break;
          }
          case "together": {
            l1(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function pM(e, t, a) {
      nb(t, t.stateNode.containerInfo);
      var o = t.pendingProps;
      return e === null ? t.child = rd(t, null, o, a) : xa(e, t, o, a), t.child;
    }
    var sx = !1;
    function vM(e, t, a) {
      var o = t.type, u = o._context, d = t.pendingProps, m = t.memoizedProps, b = d.value;
      {
        "value" in d || sx || (sx = !0, y("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var E = t.type.propTypes;
        E && io(E, d, "prop", "Context.Provider");
      }
      if (tT(t, u, b), m !== null) {
        var R = m.value;
        if (We(R, b)) {
          if (m.children === d.children && !Ey())
            return Pl(e, t, a);
        } else
          c_(t, u, a);
      }
      var D = d.children;
      return xa(e, t, D, a), t.child;
    }
    var cx = !1;
    function hM(e, t, a) {
      var o = t.type;
      o._context === void 0 ? o !== o.Consumer && (cx || (cx = !0, y("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : o = o._context;
      var u = t.pendingProps, d = u.children;
      typeof d != "function" && y("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), id(t, a);
      var m = hr(o);
      fu(t);
      var b;
      return Nv.current = t, ii(!0), b = d(m), ii(!1), aa(), t.flags |= Oo, xa(e, t, b, a), t.child;
    }
    function zv() {
      fo = !0;
    }
    function pg(e, t) {
      (t.mode & tt) === Je && e !== null && (e.alternate = null, t.alternate = null, t.flags |= fn);
    }
    function Pl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), jT(), Gv(t.lanes), la(a, t.childLanes) ? (u_(e, t), t.child) : null;
    }
    function mM(e, t, a) {
      {
        var o = t.return;
        if (o === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === o.child)
          o.child = a;
        else {
          var u = o.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var d = o.deletions;
        return d === null ? (o.deletions = [e], o.flags |= jt) : d.push(e), a.flags |= fn, a;
      }
    }
    function u1(e, t) {
      var a = e.lanes;
      return !!la(a, t);
    }
    function yM(e, t, a) {
      switch (t.tag) {
        case M:
          nx(t), t.stateNode, nd();
          break;
        case $:
          sT(t);
          break;
        case k: {
          var o = t.type;
          Fo(o) && Ty(t);
          break;
        }
        case A:
          nb(t, t.stateNode.containerInfo);
          break;
        case le: {
          var u = t.memoizedProps.value, d = t.type._context;
          tT(t, d, u);
          break;
        }
        case Y:
          {
            var m = la(a, t.childLanes);
            m && (t.flags |= bt);
            {
              var b = t.stateNode;
              b.effectDuration = 0, b.passiveEffectDuration = 0;
            }
          }
          break;
        case U: {
          var E = t.memoizedState;
          if (E !== null) {
            if (E.dehydrated !== null)
              return Wu(t, ld(uo.current)), t.flags |= pt, null;
            var R = t.child, D = R.childLanes;
            if (la(a, D))
              return ax(e, t, a);
            Wu(t, ld(uo.current));
            var V = Pl(e, t, a);
            return V !== null ? V.sibling : null;
          } else
            Wu(t, ld(uo.current));
          break;
        }
        case ne: {
          var F = (e.flags & pt) !== ot, K = la(a, t.childLanes);
          if (F) {
            if (K)
              return ux(e, t, a);
            t.flags |= pt;
          }
          var J = t.memoizedState;
          if (J !== null && (J.rendering = null, J.tail = null, J.lastEffect = null), Wu(t, uo.current), K)
            break;
          return null;
        }
        case ue:
        case xe:
          return t.lanes = de, JT(e, t, a);
      }
      return Pl(e, t, a);
    }
    function fx(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return mM(e, t, $1(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var o = e.memoizedProps, u = t.pendingProps;
        if (o !== u || Ey() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          fo = !0;
        else {
          var d = u1(e, a);
          if (!d && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & pt) === ot)
            return fo = !1, yM(e, t, a);
          (e.flags & _s) !== ot ? fo = !0 : fo = !1;
        }
      } else if (fo = !1, Br() && HD(t)) {
        var m = t.index, b = VD();
        jC(t, b, m);
      }
      switch (t.lanes = de, t.tag) {
        case _:
          return Z_(e, t, t.type, a);
        case Ae: {
          var E = t.elementType;
          return X_(e, t, E, a);
        }
        case x: {
          var R = t.type, D = t.pendingProps, V = t.elementType === R ? D : co(R, D);
          return e1(e, t, R, V, a);
        }
        case k: {
          var F = t.type, K = t.pendingProps, J = t.elementType === F ? K : co(F, K);
          return tx(e, t, F, J, a);
        }
        case M:
          return G_(e, t, a);
        case $:
          return Q_(e, t, a);
        case B:
          return q_(e, t);
        case U:
          return ax(e, t, a);
        case A:
          return pM(e, t, a);
        case q: {
          var ae = t.type, ze = t.pendingProps, lt = t.elementType === ae ? ze : co(ae, ze);
          return XT(e, t, ae, lt, a);
        }
        case L:
          return I_(e, t, a);
        case P:
          return Y_(e, t, a);
        case Y:
          return W_(e, t, a);
        case le:
          return vM(e, t, a);
        case ee:
          return hM(e, t, a);
        case re: {
          var nt = t.type, Lt = t.pendingProps, kt = co(nt, Lt);
          if (t.type !== t.elementType) {
            var G = nt.propTypes;
            G && io(
              G,
              kt,
              // Resolved for outer only
              "prop",
              Qt(nt)
            );
          }
          return kt = co(nt.type, kt), KT(e, t, nt, kt, a);
        }
        case te:
          return ZT(e, t, t.type, t.pendingProps, a);
        case Oe: {
          var ie = t.type, Q = t.pendingProps, Se = t.elementType === ie ? Q : co(ie, Q);
          return K_(e, t, ie, Se, a);
        }
        case ne:
          return ux(e, t, a);
        case be:
          break;
        case ue:
          return JT(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function pd(e) {
      e.flags |= bt;
    }
    function dx(e) {
      e.flags |= Jr, e.flags |= Ep;
    }
    var px, s1, vx, hx;
    px = function(e, t, a, o) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === $ || u.tag === B)
          jk(e, u.stateNode);
        else if (u.tag !== A) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, s1 = function(e, t) {
    }, vx = function(e, t, a, o, u) {
      var d = e.memoizedProps;
      if (d !== o) {
        var m = t.stateNode, b = rb(), E = Bk(m, a, d, o, u, b);
        t.updateQueue = E, E && pd(t);
      }
    }, hx = function(e, t, a, o) {
      a !== o && pd(t);
    };
    function Uv(e, t) {
      if (!Br())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, o = null; a !== null; )
              a.alternate !== null && (o = a), a = a.sibling;
            o === null ? e.tail = null : o.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, d = null; u !== null; )
              u.alternate !== null && (d = u), u = u.sibling;
            d === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : d.sibling = null;
            break;
          }
        }
    }
    function Vr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = de, o = ot;
      if (t) {
        if ((e.mode & vt) !== Je) {
          for (var E = e.selfBaseDuration, R = e.child; R !== null; )
            a = St(a, St(R.lanes, R.childLanes)), o |= R.subtreeFlags & Sr, o |= R.flags & Sr, E += R.treeBaseDuration, R = R.sibling;
          e.treeBaseDuration = E;
        } else
          for (var D = e.child; D !== null; )
            a = St(a, St(D.lanes, D.childLanes)), o |= D.subtreeFlags & Sr, o |= D.flags & Sr, D.return = e, D = D.sibling;
        e.subtreeFlags |= o;
      } else {
        if ((e.mode & vt) !== Je) {
          for (var u = e.actualDuration, d = e.selfBaseDuration, m = e.child; m !== null; )
            a = St(a, St(m.lanes, m.childLanes)), o |= m.subtreeFlags, o |= m.flags, u += m.actualDuration, d += m.treeBaseDuration, m = m.sibling;
          e.actualDuration = u, e.treeBaseDuration = d;
        } else
          for (var b = e.child; b !== null; )
            a = St(a, St(b.lanes, b.childLanes)), o |= b.subtreeFlags, o |= b.flags, b.return = e, b = b.sibling;
        e.subtreeFlags |= o;
      }
      return e.childLanes = a, t;
    }
    function gM(e, t, a) {
      if (n_() && (t.mode & tt) !== Je && (t.flags & pt) === ot)
        return WC(t), nd(), t.flags |= Dn | ga | fr, !1;
      var o = ky(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!o)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (e_(t), Vr(t), (t.mode & vt) !== Je) {
            var u = a !== null;
            if (u) {
              var d = t.child;
              d !== null && (t.treeBaseDuration -= d.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (nd(), (t.flags & pt) === ot && (t.memoizedState = null), t.flags |= bt, Vr(t), (t.mode & vt) !== Je) {
            var m = a !== null;
            if (m) {
              var b = t.child;
              b !== null && (t.treeBaseDuration -= b.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return GC(), !0;
    }
    function mx(e, t, a) {
      var o = t.pendingProps;
      switch (zS(t), t.tag) {
        case _:
        case Ae:
        case te:
        case x:
        case q:
        case L:
        case P:
        case Y:
        case ee:
        case re:
          return Vr(t), null;
        case k: {
          var u = t.type;
          return Fo(u) && Cy(t), Vr(t), null;
        }
        case M: {
          var d = t.stateNode;
          if (od(t), MS(t), ub(), d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null), e === null || e.child === null) {
            var m = ky(t);
            if (m)
              pd(t);
            else if (e !== null) {
              var b = e.memoizedState;
              // Check if this is a client root
              (!b.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Dn) !== ot) && (t.flags |= La, GC());
            }
          }
          return s1(e, t), Vr(t), null;
        }
        case $: {
          ab(t);
          var E = uT(), R = t.type;
          if (e !== null && t.stateNode != null)
            vx(e, t, R, o, E), e.ref !== t.ref && dx(t);
          else {
            if (!o) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Vr(t), null;
            }
            var D = rb(), V = ky(t);
            if (V)
              ZD(t, E, D) && pd(t);
            else {
              var F = $k(R, o, E, D, t);
              px(F, t, !1, !1), t.stateNode = F, Fk(F, R, o, E) && pd(t);
            }
            t.ref !== null && dx(t);
          }
          return Vr(t), null;
        }
        case B: {
          var K = o;
          if (e && t.stateNode != null) {
            var J = e.memoizedProps;
            hx(e, t, J, K);
          } else {
            if (typeof K != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var ae = uT(), ze = rb(), lt = ky(t);
            lt ? JD(t) && pd(t) : t.stateNode = Hk(K, ae, ze, t);
          }
          return Vr(t), null;
        }
        case U: {
          ud(t);
          var nt = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Lt = gM(e, t, nt);
            if (!Lt)
              return t.flags & fr ? t : null;
          }
          if ((t.flags & pt) !== ot)
            return t.lanes = a, (t.mode & vt) !== Je && Ab(t), t;
          var kt = nt !== null, G = e !== null && e.memoizedState !== null;
          if (kt !== G && kt) {
            var ie = t.child;
            if (ie.flags |= ko, (t.mode & tt) !== Je) {
              var Q = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !fe);
              Q || ib(uo.current, fT) ? S2() : O1();
            }
          }
          var Se = t.updateQueue;
          if (Se !== null && (t.flags |= bt), Vr(t), (t.mode & vt) !== Je && kt) {
            var Be = t.child;
            Be !== null && (t.treeBaseDuration -= Be.treeBaseDuration);
          }
          return null;
        }
        case A:
          return od(t), s1(e, t), e === null && zD(t.stateNode.containerInfo), Vr(t), null;
        case le:
          var Ue = t.type._context;
          return qS(Ue, t), Vr(t), null;
        case Oe: {
          var dt = t.type;
          return Fo(dt) && Cy(t), Vr(t), null;
        }
        case ne: {
          ud(t);
          var yt = t.memoizedState;
          if (yt === null)
            return Vr(t), null;
          var tn = (t.flags & pt) !== ot, Pt = yt.rendering;
          if (Pt === null)
            if (tn)
              Uv(yt, !1);
            else {
              var ir = E2() && (e === null || (e.flags & pt) === ot);
              if (!ir)
                for (var $t = t.child; $t !== null; ) {
                  var Yn = Iy($t);
                  if (Yn !== null) {
                    tn = !0, t.flags |= pt, Uv(yt, !1);
                    var da = Yn.updateQueue;
                    return da !== null && (t.updateQueue = da, t.flags |= bt), t.subtreeFlags = ot, s_(t, a), Wu(t, ob(uo.current, Tv)), t.child;
                  }
                  $t = $t.sibling;
                }
              yt.tail !== null && wn() > Px() && (t.flags |= pt, tn = !0, Uv(yt, !1), t.lanes = Om);
            }
          else {
            if (!tn) {
              var Qr = Iy(Pt);
              if (Qr !== null) {
                t.flags |= pt, tn = !0;
                var di = Qr.updateQueue;
                if (di !== null && (t.updateQueue = di, t.flags |= bt), Uv(yt, !0), yt.tail === null && yt.tailMode === "hidden" && !Pt.alternate && !Br())
                  return Vr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              wn() * 2 - yt.renderingStartTime > Px() && a !== Lr && (t.flags |= pt, tn = !0, Uv(yt, !1), t.lanes = Om);
            }
            if (yt.isBackwards)
              Pt.sibling = t.child, t.child = Pt;
            else {
              var Oa = yt.last;
              Oa !== null ? Oa.sibling = Pt : t.child = Pt, yt.last = Pt;
            }
          }
          if (yt.tail !== null) {
            var ka = yt.tail;
            yt.rendering = ka, yt.tail = ka.sibling, yt.renderingStartTime = wn(), ka.sibling = null;
            var pa = uo.current;
            return tn ? pa = ob(pa, Tv) : pa = ld(pa), Wu(t, pa), ka;
          }
          return Vr(t), null;
        }
        case be:
          break;
        case ue:
        case xe: {
          R1(t);
          var Hl = t.memoizedState, Ed = Hl !== null;
          if (e !== null) {
            var Zv = e.memoizedState, Qo = Zv !== null;
            Qo !== Ed && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !I && (t.flags |= ko);
          }
          return !Ed || (t.mode & tt) === Je ? Vr(t) : la(Go, Lr) && (Vr(t), t.subtreeFlags & (fn | bt) && (t.flags |= ko)), null;
        }
        case Le:
          return null;
        case we:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function SM(e, t, a) {
      switch (zS(t), t.tag) {
        case k: {
          var o = t.type;
          Fo(o) && Cy(t);
          var u = t.flags;
          return u & fr ? (t.flags = u & ~fr | pt, (t.mode & vt) !== Je && Ab(t), t) : null;
        }
        case M: {
          t.stateNode, od(t), MS(t), ub();
          var d = t.flags;
          return (d & fr) !== ot && (d & pt) === ot ? (t.flags = d & ~fr | pt, t) : null;
        }
        case $:
          return ab(t), null;
        case U: {
          ud(t);
          var m = t.memoizedState;
          if (m !== null && m.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            nd();
          }
          var b = t.flags;
          return b & fr ? (t.flags = b & ~fr | pt, (t.mode & vt) !== Je && Ab(t), t) : null;
        }
        case ne:
          return ud(t), null;
        case A:
          return od(t), null;
        case le:
          var E = t.type._context;
          return qS(E, t), null;
        case ue:
        case xe:
          return R1(t), null;
        case Le:
          return null;
        default:
          return null;
      }
    }
    function yx(e, t, a) {
      switch (zS(t), t.tag) {
        case k: {
          var o = t.type.childContextTypes;
          o != null && Cy(t);
          break;
        }
        case M: {
          t.stateNode, od(t), MS(t), ub();
          break;
        }
        case $: {
          ab(t);
          break;
        }
        case A:
          od(t);
          break;
        case U:
          ud(t);
          break;
        case ne:
          ud(t);
          break;
        case le:
          var u = t.type._context;
          qS(u, t);
          break;
        case ue:
        case xe:
          R1(t);
          break;
      }
    }
    var gx = null;
    gx = /* @__PURE__ */ new Set();
    var vg = !1, Ir = !1, bM = typeof WeakSet == "function" ? WeakSet : Set, Ge = null, vd = null, hd = null;
    function EM(e) {
      pl(null, function() {
        throw e;
      }), Sp();
    }
    var CM = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & vt)
        try {
          Yo(), t.componentWillUnmount();
        } finally {
          Io(e);
        }
      else
        t.componentWillUnmount();
    };
    function Sx(e, t) {
      try {
        qu(Tr, e);
      } catch (a) {
        vn(e, t, a);
      }
    }
    function c1(e, t, a) {
      try {
        CM(e, a);
      } catch (o) {
        vn(e, t, o);
      }
    }
    function TM(e, t, a) {
      try {
        a.componentDidMount();
      } catch (o) {
        vn(e, t, o);
      }
    }
    function bx(e, t) {
      try {
        Cx(e);
      } catch (a) {
        vn(e, t, a);
      }
    }
    function md(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var o;
          try {
            if (Pe && Qe && e.mode & vt)
              try {
                Yo(), o = a(null);
              } finally {
                Io(e);
              }
            else
              o = a(null);
          } catch (u) {
            vn(e, t, u);
          }
          typeof o == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", gt(e));
        } else
          a.current = null;
    }
    function hg(e, t, a) {
      try {
        a();
      } catch (o) {
        vn(e, t, o);
      }
    }
    var Ex = !1;
    function xM(e, t) {
      Uk(e.containerInfo), Ge = t, wM();
      var a = Ex;
      return Ex = !1, a;
    }
    function wM() {
      for (; Ge !== null; ) {
        var e = Ge, t = e.child;
        (e.subtreeFlags & uu) !== ot && t !== null ? (t.return = e, Ge = t) : RM();
      }
    }
    function RM() {
      for (; Ge !== null; ) {
        var e = Ge;
        Jt(e);
        try {
          OM(e);
        } catch (a) {
          vn(e, e.return, a);
        }
        Jn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ge = t;
          return;
        }
        Ge = e.return;
      }
    }
    function OM(e) {
      var t = e.alternate, a = e.flags;
      if ((a & La) !== ot) {
        switch (Jt(e), e.tag) {
          case x:
          case q:
          case te:
            break;
          case k: {
            if (t !== null) {
              var o = t.memoizedProps, u = t.memoizedState, d = e.stateNode;
              e.type === e.elementType && !fc && (d.props !== e.memoizedProps && y("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", gt(e) || "instance"), d.state !== e.memoizedState && y("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", gt(e) || "instance"));
              var m = d.getSnapshotBeforeUpdate(e.elementType === e.type ? o : co(e.type, o), u);
              {
                var b = gx;
                m === void 0 && !b.has(e.type) && (b.add(e.type), y("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", gt(e)));
              }
              d.__reactInternalSnapshotBeforeUpdate = m;
            }
            break;
          }
          case M: {
            {
              var E = e.stateNode;
              lD(E.containerInfo);
            }
            break;
          }
          case $:
          case B:
          case A:
          case Oe:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Jn();
      }
    }
    function po(e, t, a) {
      var o = t.updateQueue, u = o !== null ? o.lastEffect : null;
      if (u !== null) {
        var d = u.next, m = d;
        do {
          if ((m.tag & e) === e) {
            var b = m.destroy;
            m.destroy = void 0, b !== void 0 && ((e & Hr) !== Qa ? xm(t) : (e & Tr) !== Qa && si(t), (e & Bo) !== Qa && qv(!0), hg(t, a, b), (e & Bo) !== Qa && qv(!1), (e & Hr) !== Qa ? tf() : (e & Tr) !== Qa && du());
          }
          m = m.next;
        } while (m !== d);
      }
    }
    function qu(e, t) {
      var a = t.updateQueue, o = a !== null ? a.lastEffect : null;
      if (o !== null) {
        var u = o.next, d = u;
        do {
          if ((d.tag & e) === e) {
            (e & Hr) !== Qa ? Mo(t) : (e & Tr) !== Qa && wm(t);
            var m = d.create;
            (e & Bo) !== Qa && qv(!0), d.destroy = m(), (e & Bo) !== Qa && qv(!1), (e & Hr) !== Qa ? ef() : (e & Tr) !== Qa && Ms();
            {
              var b = d.destroy;
              if (b !== void 0 && typeof b != "function") {
                var E = void 0;
                (d.tag & Tr) !== ot ? E = "useLayoutEffect" : (d.tag & Bo) !== ot ? E = "useInsertionEffect" : E = "useEffect";
                var R = void 0;
                b === null ? R = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof b.then == "function" ? R = `

It looks like you wrote ` + E + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + E + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : R = " You returned: " + b, y("%s must not return anything besides a function, which is used for clean-up.%s", E, R);
              }
            }
          }
          d = d.next;
        } while (d !== u);
      }
    }
    function kM(e, t) {
      if ((t.flags & bt) !== ot)
        switch (t.tag) {
          case Y: {
            var a = t.stateNode.passiveEffectDuration, o = t.memoizedProps, u = o.id, d = o.onPostCommit, m = PT(), b = t.alternate === null ? "mount" : "update";
            UT() && (b = "nested-update"), typeof d == "function" && d(u, b, a, m);
            var E = t.return;
            e: for (; E !== null; ) {
              switch (E.tag) {
                case M:
                  var R = E.stateNode;
                  R.passiveEffectDuration += a;
                  break e;
                case Y:
                  var D = E.stateNode;
                  D.passiveEffectDuration += a;
                  break e;
              }
              E = E.return;
            }
            break;
          }
        }
    }
    function DM(e, t, a, o) {
      if ((a.flags & Nr) !== ot)
        switch (a.tag) {
          case x:
          case q:
          case te: {
            if (!Ir)
              if (a.mode & vt)
                try {
                  Yo(), qu(Tr | Cr, a);
                } finally {
                  Io(a);
                }
              else
                qu(Tr | Cr, a);
            break;
          }
          case k: {
            var u = a.stateNode;
            if (a.flags & bt && !Ir)
              if (t === null)
                if (a.type === a.elementType && !fc && (u.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", gt(a) || "instance"), u.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", gt(a) || "instance")), a.mode & vt)
                  try {
                    Yo(), u.componentDidMount();
                  } finally {
                    Io(a);
                  }
                else
                  u.componentDidMount();
              else {
                var d = a.elementType === a.type ? t.memoizedProps : co(a.type, t.memoizedProps), m = t.memoizedState;
                if (a.type === a.elementType && !fc && (u.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", gt(a) || "instance"), u.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", gt(a) || "instance")), a.mode & vt)
                  try {
                    Yo(), u.componentDidUpdate(d, m, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Io(a);
                  }
                else
                  u.componentDidUpdate(d, m, u.__reactInternalSnapshotBeforeUpdate);
              }
            var b = a.updateQueue;
            b !== null && (a.type === a.elementType && !fc && (u.props !== a.memoizedProps && y("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", gt(a) || "instance"), u.state !== a.memoizedState && y("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", gt(a) || "instance")), lT(a, b, u));
            break;
          }
          case M: {
            var E = a.updateQueue;
            if (E !== null) {
              var R = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case $:
                    R = a.child.stateNode;
                    break;
                  case k:
                    R = a.child.stateNode;
                    break;
                }
              lT(a, E, R);
            }
            break;
          }
          case $: {
            var D = a.stateNode;
            if (t === null && a.flags & bt) {
              var V = a.type, F = a.memoizedProps;
              Gk(D, V, F);
            }
            break;
          }
          case B:
            break;
          case A:
            break;
          case Y: {
            {
              var K = a.memoizedProps, J = K.onCommit, ae = K.onRender, ze = a.stateNode.effectDuration, lt = PT(), nt = t === null ? "mount" : "update";
              UT() && (nt = "nested-update"), typeof ae == "function" && ae(a.memoizedProps.id, nt, a.actualDuration, a.treeBaseDuration, a.actualStartTime, lt);
              {
                typeof J == "function" && J(a.memoizedProps.id, nt, ze, lt), R2(a);
                var Lt = a.return;
                e: for (; Lt !== null; ) {
                  switch (Lt.tag) {
                    case M:
                      var kt = Lt.stateNode;
                      kt.effectDuration += ze;
                      break e;
                    case Y:
                      var G = Lt.stateNode;
                      G.effectDuration += ze;
                      break e;
                  }
                  Lt = Lt.return;
                }
              }
            }
            break;
          }
          case U: {
            PM(e, a);
            break;
          }
          case ne:
          case Oe:
          case be:
          case ue:
          case xe:
          case we:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Ir || a.flags & Jr && Cx(a);
    }
    function _M(e) {
      switch (e.tag) {
        case x:
        case q:
        case te: {
          if (e.mode & vt)
            try {
              Yo(), Sx(e, e.return);
            } finally {
              Io(e);
            }
          else
            Sx(e, e.return);
          break;
        }
        case k: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && TM(e, e.return, t), bx(e, e.return);
          break;
        }
        case $: {
          bx(e, e.return);
          break;
        }
      }
    }
    function MM(e, t) {
      for (var a = null, o = e; ; ) {
        if (o.tag === $) {
          if (a === null) {
            a = o;
            try {
              var u = o.stateNode;
              t ? rD(u) : iD(o.stateNode, o.memoizedProps);
            } catch (m) {
              vn(e, e.return, m);
            }
          }
        } else if (o.tag === B) {
          if (a === null)
            try {
              var d = o.stateNode;
              t ? aD(d) : oD(d, o.memoizedProps);
            } catch (m) {
              vn(e, e.return, m);
            }
        } else if (!((o.tag === ue || o.tag === xe) && o.memoizedState !== null && o !== e)) {
          if (o.child !== null) {
            o.child.return = o, o = o.child;
            continue;
          }
        }
        if (o === e)
          return;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === e)
            return;
          a === o && (a = null), o = o.return;
        }
        a === o && (a = null), o.sibling.return = o.return, o = o.sibling;
      }
    }
    function Cx(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, o;
        switch (e.tag) {
          case $:
            o = a;
            break;
          default:
            o = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & vt)
            try {
              Yo(), u = t(o);
            } finally {
              Io(e);
            }
          else
            u = t(o);
          typeof u == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", gt(e));
        } else
          t.hasOwnProperty("current") || y("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", gt(e)), t.current = o;
      }
    }
    function NM(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function Tx(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, Tx(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === $) {
          var a = e.stateNode;
          a !== null && $D(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function AM(e) {
      for (var t = e.return; t !== null; ) {
        if (xx(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function xx(e) {
      return e.tag === $ || e.tag === M || e.tag === A;
    }
    function wx(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || xx(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== $ && t.tag !== B && t.tag !== O; ) {
          if (t.flags & fn || t.child === null || t.tag === A)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & fn))
          return t.stateNode;
      }
    }
    function LM(e) {
      var t = AM(e);
      switch (t.tag) {
        case $: {
          var a = t.stateNode;
          t.flags & Ht && (OC(a), t.flags &= ~Ht);
          var o = wx(e);
          d1(e, o, a);
          break;
        }
        case M:
        case A: {
          var u = t.stateNode.containerInfo, d = wx(e);
          f1(e, d, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function f1(e, t, a) {
      var o = e.tag, u = o === $ || o === B;
      if (u) {
        var d = e.stateNode;
        t ? Jk(a, d, t) : Kk(a, d);
      } else if (o !== A) {
        var m = e.child;
        if (m !== null) {
          f1(m, t, a);
          for (var b = m.sibling; b !== null; )
            f1(b, t, a), b = b.sibling;
        }
      }
    }
    function d1(e, t, a) {
      var o = e.tag, u = o === $ || o === B;
      if (u) {
        var d = e.stateNode;
        t ? Zk(a, d, t) : Xk(a, d);
      } else if (o !== A) {
        var m = e.child;
        if (m !== null) {
          d1(m, t, a);
          for (var b = m.sibling; b !== null; )
            d1(b, t, a), b = b.sibling;
        }
      }
    }
    var Yr = null, vo = !1;
    function zM(e, t, a) {
      {
        var o = t;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case $: {
              Yr = o.stateNode, vo = !1;
              break e;
            }
            case M: {
              Yr = o.stateNode.containerInfo, vo = !0;
              break e;
            }
            case A: {
              Yr = o.stateNode.containerInfo, vo = !0;
              break e;
            }
          }
          o = o.return;
        }
        if (Yr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        Rx(e, t, a), Yr = null, vo = !1;
      }
      NM(a);
    }
    function Xu(e, t, a) {
      for (var o = a.child; o !== null; )
        Rx(e, t, o), o = o.sibling;
    }
    function Rx(e, t, a) {
      switch (ml(a), a.tag) {
        case $:
          Ir || md(a, t);
        case B: {
          {
            var o = Yr, u = vo;
            Yr = null, Xu(e, t, a), Yr = o, vo = u, Yr !== null && (vo ? tD(Yr, a.stateNode) : eD(Yr, a.stateNode));
          }
          return;
        }
        case O: {
          Yr !== null && (vo ? nD(Yr, a.stateNode) : TS(Yr, a.stateNode));
          return;
        }
        case A: {
          {
            var d = Yr, m = vo;
            Yr = a.stateNode.containerInfo, vo = !0, Xu(e, t, a), Yr = d, vo = m;
          }
          return;
        }
        case x:
        case q:
        case re:
        case te: {
          if (!Ir) {
            var b = a.updateQueue;
            if (b !== null) {
              var E = b.lastEffect;
              if (E !== null) {
                var R = E.next, D = R;
                do {
                  var V = D, F = V.destroy, K = V.tag;
                  F !== void 0 && ((K & Bo) !== Qa ? hg(a, t, F) : (K & Tr) !== Qa && (si(a), a.mode & vt ? (Yo(), hg(a, t, F), Io(a)) : hg(a, t, F), du())), D = D.next;
                } while (D !== R);
              }
            }
          }
          Xu(e, t, a);
          return;
        }
        case k: {
          if (!Ir) {
            md(a, t);
            var J = a.stateNode;
            typeof J.componentWillUnmount == "function" && c1(a, t, J);
          }
          Xu(e, t, a);
          return;
        }
        case be: {
          Xu(e, t, a);
          return;
        }
        case ue: {
          if (
            // TODO: Remove this dead flag
            a.mode & tt
          ) {
            var ae = Ir;
            Ir = ae || a.memoizedState !== null, Xu(e, t, a), Ir = ae;
          } else
            Xu(e, t, a);
          break;
        }
        default: {
          Xu(e, t, a);
          return;
        }
      }
    }
    function UM(e) {
      e.memoizedState;
    }
    function PM(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var o = t.alternate;
        if (o !== null) {
          var u = o.memoizedState;
          if (u !== null) {
            var d = u.dehydrated;
            d !== null && ED(d);
          }
        }
      }
    }
    function Ox(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new bM()), t.forEach(function(o) {
          var u = A2.bind(null, e, o);
          if (!a.has(o)) {
            if (a.add(o), Ea)
              if (vd !== null && hd !== null)
                Qv(hd, vd);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            o.then(u, u);
          }
        });
      }
    }
    function $M(e, t, a) {
      vd = a, hd = e, Jt(t), kx(t, e), Jt(t), vd = null, hd = null;
    }
    function ho(e, t, a) {
      var o = t.deletions;
      if (o !== null)
        for (var u = 0; u < o.length; u++) {
          var d = o[u];
          try {
            zM(e, t, d);
          } catch (E) {
            vn(d, t, E);
          }
        }
      var m = x0();
      if (t.subtreeFlags & na)
        for (var b = t.child; b !== null; )
          Jt(b), kx(b, e), b = b.sibling;
      Jt(m);
    }
    function kx(e, t, a) {
      var o = e.alternate, u = e.flags;
      switch (e.tag) {
        case x:
        case q:
        case re:
        case te: {
          if (ho(t, e), Wo(e), u & bt) {
            try {
              po(Bo | Cr, e, e.return), qu(Bo | Cr, e);
            } catch (dt) {
              vn(e, e.return, dt);
            }
            if (e.mode & vt) {
              try {
                Yo(), po(Tr | Cr, e, e.return);
              } catch (dt) {
                vn(e, e.return, dt);
              }
              Io(e);
            } else
              try {
                po(Tr | Cr, e, e.return);
              } catch (dt) {
                vn(e, e.return, dt);
              }
          }
          return;
        }
        case k: {
          ho(t, e), Wo(e), u & Jr && o !== null && md(o, o.return);
          return;
        }
        case $: {
          ho(t, e), Wo(e), u & Jr && o !== null && md(o, o.return);
          {
            if (e.flags & Ht) {
              var d = e.stateNode;
              try {
                OC(d);
              } catch (dt) {
                vn(e, e.return, dt);
              }
            }
            if (u & bt) {
              var m = e.stateNode;
              if (m != null) {
                var b = e.memoizedProps, E = o !== null ? o.memoizedProps : b, R = e.type, D = e.updateQueue;
                if (e.updateQueue = null, D !== null)
                  try {
                    Qk(m, D, R, E, b, e);
                  } catch (dt) {
                    vn(e, e.return, dt);
                  }
              }
            }
          }
          return;
        }
        case B: {
          if (ho(t, e), Wo(e), u & bt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var V = e.stateNode, F = e.memoizedProps, K = o !== null ? o.memoizedProps : F;
            try {
              qk(V, K, F);
            } catch (dt) {
              vn(e, e.return, dt);
            }
          }
          return;
        }
        case M: {
          if (ho(t, e), Wo(e), u & bt && o !== null) {
            var J = o.memoizedState;
            if (J.isDehydrated)
              try {
                bD(t.containerInfo);
              } catch (dt) {
                vn(e, e.return, dt);
              }
          }
          return;
        }
        case A: {
          ho(t, e), Wo(e);
          return;
        }
        case U: {
          ho(t, e), Wo(e);
          var ae = e.child;
          if (ae.flags & ko) {
            var ze = ae.stateNode, lt = ae.memoizedState, nt = lt !== null;
            if (ze.isHidden = nt, nt) {
              var Lt = ae.alternate !== null && ae.alternate.memoizedState !== null;
              Lt || g2();
            }
          }
          if (u & bt) {
            try {
              UM(e);
            } catch (dt) {
              vn(e, e.return, dt);
            }
            Ox(e);
          }
          return;
        }
        case ue: {
          var kt = o !== null && o.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & tt
          ) {
            var G = Ir;
            Ir = G || kt, ho(t, e), Ir = G;
          } else
            ho(t, e);
          if (Wo(e), u & ko) {
            var ie = e.stateNode, Q = e.memoizedState, Se = Q !== null, Be = e;
            if (ie.isHidden = Se, Se && !kt && (Be.mode & tt) !== Je) {
              Ge = Be;
              for (var Ue = Be.child; Ue !== null; )
                Ge = Ue, FM(Ue), Ue = Ue.sibling;
            }
            MM(Be, Se);
          }
          return;
        }
        case ne: {
          ho(t, e), Wo(e), u & bt && Ox(e);
          return;
        }
        case be:
          return;
        default: {
          ho(t, e), Wo(e);
          return;
        }
      }
    }
    function Wo(e) {
      var t = e.flags;
      if (t & fn) {
        try {
          LM(e);
        } catch (a) {
          vn(e, e.return, a);
        }
        e.flags &= ~fn;
      }
      t & za && (e.flags &= ~za);
    }
    function jM(e, t, a) {
      vd = a, hd = t, Ge = e, Dx(e, t, a), vd = null, hd = null;
    }
    function Dx(e, t, a) {
      for (var o = (e.mode & tt) !== Je; Ge !== null; ) {
        var u = Ge, d = u.child;
        if (u.tag === ue && o) {
          var m = u.memoizedState !== null, b = m || vg;
          if (b) {
            p1(e, t, a);
            continue;
          } else {
            var E = u.alternate, R = E !== null && E.memoizedState !== null, D = R || Ir, V = vg, F = Ir;
            vg = b, Ir = D, Ir && !F && (Ge = u, BM(u));
            for (var K = d; K !== null; )
              Ge = K, Dx(
                K,
                // New root; bubble back up to here and stop.
                t,
                a
              ), K = K.sibling;
            Ge = u, vg = V, Ir = F, p1(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Nr) !== ot && d !== null ? (d.return = u, Ge = d) : p1(e, t, a);
      }
    }
    function p1(e, t, a) {
      for (; Ge !== null; ) {
        var o = Ge;
        if ((o.flags & Nr) !== ot) {
          var u = o.alternate;
          Jt(o);
          try {
            DM(t, u, o, a);
          } catch (m) {
            vn(o, o.return, m);
          }
          Jn();
        }
        if (o === e) {
          Ge = null;
          return;
        }
        var d = o.sibling;
        if (d !== null) {
          d.return = o.return, Ge = d;
          return;
        }
        Ge = o.return;
      }
    }
    function FM(e) {
      for (; Ge !== null; ) {
        var t = Ge, a = t.child;
        switch (t.tag) {
          case x:
          case q:
          case re:
          case te: {
            if (t.mode & vt)
              try {
                Yo(), po(Tr, t, t.return);
              } finally {
                Io(t);
              }
            else
              po(Tr, t, t.return);
            break;
          }
          case k: {
            md(t, t.return);
            var o = t.stateNode;
            typeof o.componentWillUnmount == "function" && c1(t, t.return, o);
            break;
          }
          case $: {
            md(t, t.return);
            break;
          }
          case ue: {
            var u = t.memoizedState !== null;
            if (u) {
              _x(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Ge = a) : _x(e);
      }
    }
    function _x(e) {
      for (; Ge !== null; ) {
        var t = Ge;
        if (t === e) {
          Ge = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ge = a;
          return;
        }
        Ge = t.return;
      }
    }
    function BM(e) {
      for (; Ge !== null; ) {
        var t = Ge, a = t.child;
        if (t.tag === ue) {
          var o = t.memoizedState !== null;
          if (o) {
            Mx(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Ge = a) : Mx(e);
      }
    }
    function Mx(e) {
      for (; Ge !== null; ) {
        var t = Ge;
        Jt(t);
        try {
          _M(t);
        } catch (o) {
          vn(t, t.return, o);
        }
        if (Jn(), t === e) {
          Ge = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ge = a;
          return;
        }
        Ge = t.return;
      }
    }
    function HM(e, t, a, o) {
      Ge = t, VM(t, e, a, o);
    }
    function VM(e, t, a, o) {
      for (; Ge !== null; ) {
        var u = Ge, d = u.child;
        (u.subtreeFlags & Ua) !== ot && d !== null ? (d.return = u, Ge = d) : IM(e, t, a, o);
      }
    }
    function IM(e, t, a, o) {
      for (; Ge !== null; ) {
        var u = Ge;
        if ((u.flags & Sn) !== ot) {
          Jt(u);
          try {
            YM(t, u, a, o);
          } catch (m) {
            vn(u, u.return, m);
          }
          Jn();
        }
        if (u === e) {
          Ge = null;
          return;
        }
        var d = u.sibling;
        if (d !== null) {
          d.return = u.return, Ge = d;
          return;
        }
        Ge = u.return;
      }
    }
    function YM(e, t, a, o) {
      switch (t.tag) {
        case x:
        case q:
        case te: {
          if (t.mode & vt) {
            Nb();
            try {
              qu(Hr | Cr, t);
            } finally {
              Mb(t);
            }
          } else
            qu(Hr | Cr, t);
          break;
        }
      }
    }
    function WM(e) {
      Ge = e, GM();
    }
    function GM() {
      for (; Ge !== null; ) {
        var e = Ge, t = e.child;
        if ((Ge.flags & jt) !== ot) {
          var a = e.deletions;
          if (a !== null) {
            for (var o = 0; o < a.length; o++) {
              var u = a[o];
              Ge = u, XM(u, e);
            }
            {
              var d = e.alternate;
              if (d !== null) {
                var m = d.child;
                if (m !== null) {
                  d.child = null;
                  do {
                    var b = m.sibling;
                    m.sibling = null, m = b;
                  } while (m !== null);
                }
              }
            }
            Ge = e;
          }
        }
        (e.subtreeFlags & Ua) !== ot && t !== null ? (t.return = e, Ge = t) : QM();
      }
    }
    function QM() {
      for (; Ge !== null; ) {
        var e = Ge;
        (e.flags & Sn) !== ot && (Jt(e), qM(e), Jn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ge = t;
          return;
        }
        Ge = e.return;
      }
    }
    function qM(e) {
      switch (e.tag) {
        case x:
        case q:
        case te: {
          e.mode & vt ? (Nb(), po(Hr | Cr, e, e.return), Mb(e)) : po(Hr | Cr, e, e.return);
          break;
        }
      }
    }
    function XM(e, t) {
      for (; Ge !== null; ) {
        var a = Ge;
        Jt(a), ZM(a, t), Jn();
        var o = a.child;
        o !== null ? (o.return = a, Ge = o) : KM(e);
      }
    }
    function KM(e) {
      for (; Ge !== null; ) {
        var t = Ge, a = t.sibling, o = t.return;
        if (Tx(t), t === e) {
          Ge = null;
          return;
        }
        if (a !== null) {
          a.return = o, Ge = a;
          return;
        }
        Ge = o;
      }
    }
    function ZM(e, t) {
      switch (e.tag) {
        case x:
        case q:
        case te: {
          e.mode & vt ? (Nb(), po(Hr, e, t), Mb(e)) : po(Hr, e, t);
          break;
        }
      }
    }
    function JM(e) {
      switch (e.tag) {
        case x:
        case q:
        case te: {
          try {
            qu(Tr | Cr, e);
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
        case k: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
      }
    }
    function e2(e) {
      switch (e.tag) {
        case x:
        case q:
        case te: {
          try {
            qu(Hr | Cr, e);
          } catch (t) {
            vn(e, e.return, t);
          }
          break;
        }
      }
    }
    function t2(e) {
      switch (e.tag) {
        case x:
        case q:
        case te: {
          try {
            po(Tr | Cr, e, e.return);
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
        case k: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && c1(e, e.return, t);
          break;
        }
      }
    }
    function n2(e) {
      switch (e.tag) {
        case x:
        case q:
        case te:
          try {
            po(Hr | Cr, e, e.return);
          } catch (t) {
            vn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Pv = Symbol.for;
      Pv("selector.component"), Pv("selector.has_pseudo_class"), Pv("selector.role"), Pv("selector.test_id"), Pv("selector.text");
    }
    var r2 = [];
    function a2() {
      r2.forEach(function(e) {
        return e();
      });
    }
    var i2 = c.ReactCurrentActQueue;
    function o2(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function Nx() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && i2.current !== null && y("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var l2 = Math.ceil, v1 = c.ReactCurrentDispatcher, h1 = c.ReactCurrentOwner, Wr = c.ReactCurrentBatchConfig, mo = c.ReactCurrentActQueue, Rr = (
      /*             */
      0
    ), Ax = (
      /*               */
      1
    ), Gr = (
      /*                */
      2
    ), Ai = (
      /*                */
      4
    ), $l = 0, $v = 1, dc = 2, mg = 3, jv = 4, Lx = 5, m1 = 6, At = Rr, wa = null, jn = null, Or = de, Go = de, y1 = Fu(de), kr = $l, Fv = null, yg = de, Bv = de, gg = de, Hv = null, qa = null, g1 = 0, zx = 500, Ux = 1 / 0, u2 = 500, jl = null;
    function Vv() {
      Ux = wn() + u2;
    }
    function Px() {
      return Ux;
    }
    var Sg = !1, S1 = null, yd = null, pc = !1, Ku = null, Iv = de, b1 = [], E1 = null, s2 = 50, Yv = 0, C1 = null, T1 = !1, bg = !1, c2 = 50, gd = 0, Eg = null, Wv = sn, Cg = de, $x = !1;
    function Tg() {
      return wa;
    }
    function Ra() {
      return (At & (Gr | Ai)) !== Rr ? wn() : (Wv !== sn || (Wv = wn()), Wv);
    }
    function Zu(e) {
      var t = e.mode;
      if ((t & tt) === Je)
        return at;
      if ((At & Gr) !== Rr && Or !== de)
        return Eu(Or);
      var a = i_() !== a_;
      if (a) {
        if (Wr.transition !== null) {
          var o = Wr.transition;
          o._updatedFibers || (o._updatedFibers = /* @__PURE__ */ new Set()), o._updatedFibers.add(e);
        }
        return Cg === In && (Cg = zm()), Cg;
      }
      var u = Ba();
      if (u !== In)
        return u;
      var d = Vk();
      return d;
    }
    function f2(e) {
      var t = e.mode;
      return (t & tt) === Je ? at : oa();
    }
    function Dr(e, t, a, o) {
      z2(), $x && y("useInsertionEffect must not schedule updates."), T1 && (bg = !0), xl(e, a, o), (At & Gr) !== de && e === wa ? $2(t) : (Ea && wf(e, t, a), j2(t), e === wa && ((At & Gr) === Rr && (Bv = St(Bv, a)), kr === jv && Ju(e, Or)), Xa(e, o), a === at && At === Rr && (t.mode & tt) === Je && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !mo.isBatchingLegacy && (Vv(), $C()));
    }
    function d2(e, t, a) {
      var o = e.current;
      o.lanes = t, xl(e, t, a), Xa(e, a);
    }
    function p2(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (At & Gr) !== Rr
      );
    }
    function Xa(e, t) {
      var a = e.callbackNode;
      _m(e, t);
      var o = Cl(e, e === wa ? Or : de);
      if (o === de) {
        a !== null && ew(a), e.callbackNode = null, e.callbackPriority = In;
        return;
      }
      var u = Un(o), d = e.callbackPriority;
      if (d === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(mo.current !== null && a !== _1)) {
        a == null && d !== at && y("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && ew(a);
      var m;
      if (u === at)
        e.tag === Bu ? (mo.isBatchingLegacy !== null && (mo.didScheduleLegacyUpdate = !0), BD(Bx.bind(null, e))) : PC(Bx.bind(null, e)), mo.current !== null ? mo.current.push(Hu) : Yk(function() {
          (At & (Gr | Ai)) === Rr && Hu();
        }), m = null;
      else {
        var b;
        switch (Er(o)) {
          case Pn:
            b = Kc;
            break;
          case to:
            b = hl;
            break;
          case xi:
            b = Ti;
            break;
          case Cu:
            b = Zc;
            break;
          default:
            b = Ti;
            break;
        }
        m = M1(b, jx.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = m;
    }
    function jx(e, t) {
      if (M_(), Wv = sn, Cg = de, (At & (Gr | Ai)) !== Rr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, o = Bl();
      if (o && e.callbackNode !== a)
        return null;
      var u = Cl(e, e === wa ? Or : de);
      if (u === de)
        return null;
      var d = !js(e, u) && !Lm(e, u) && !t, m = d ? T2(e, u) : wg(e, u);
      if (m !== $l) {
        if (m === dc) {
          var b = Ao(e);
          b !== de && (u = b, m = x1(e, b));
        }
        if (m === $v) {
          var E = Fv;
          throw vc(e, de), Ju(e, u), Xa(e, wn()), E;
        }
        if (m === m1)
          Ju(e, u);
        else {
          var R = !js(e, u), D = e.current.alternate;
          if (R && !h2(D)) {
            if (m = wg(e, u), m === dc) {
              var V = Ao(e);
              V !== de && (u = V, m = x1(e, V));
            }
            if (m === $v) {
              var F = Fv;
              throw vc(e, de), Ju(e, u), Xa(e, wn()), F;
            }
          }
          e.finishedWork = D, e.finishedLanes = u, v2(e, m, u);
        }
      }
      return Xa(e, wn()), e.callbackNode === a ? jx.bind(null, e) : null;
    }
    function x1(e, t) {
      var a = Hv;
      if (Rf(e)) {
        var o = vc(e, t);
        o.flags |= Dn, LD(e.containerInfo);
      }
      var u = wg(e, t);
      if (u !== dc) {
        var d = qa;
        qa = a, d !== null && Fx(d);
      }
      return u;
    }
    function Fx(e) {
      qa === null ? qa = e : qa.push.apply(qa, e);
    }
    function v2(e, t, a) {
      switch (t) {
        case $l:
        case $v:
          throw new Error("Root did not complete. This is a bug in React.");
        case dc: {
          hc(e, qa, jl);
          break;
        }
        case mg: {
          if (Ju(e, a), Mm(a) && // do not delay if we're inside an act() scope
          !tw()) {
            var o = g1 + zx - wn();
            if (o > 10) {
              var u = Cl(e, de);
              if (u !== de)
                break;
              var d = e.suspendedLanes;
              if (!Tl(d, a)) {
                Ra(), Tf(e, d);
                break;
              }
              e.timeoutHandle = ES(hc.bind(null, e, qa, jl), o);
              break;
            }
          }
          hc(e, qa, jl);
          break;
        }
        case jv: {
          if (Ju(e, a), Am(a))
            break;
          if (!tw()) {
            var m = km(e, a), b = m, E = wn() - b, R = L2(E) - E;
            if (R > 10) {
              e.timeoutHandle = ES(hc.bind(null, e, qa, jl), R);
              break;
            }
          }
          hc(e, qa, jl);
          break;
        }
        case Lx: {
          hc(e, qa, jl);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function h2(e) {
      for (var t = e; ; ) {
        if (t.flags & Ds) {
          var a = t.updateQueue;
          if (a !== null) {
            var o = a.stores;
            if (o !== null)
              for (var u = 0; u < o.length; u++) {
                var d = o[u], m = d.getSnapshot, b = d.value;
                try {
                  if (!We(m(), b))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var E = t.child;
        if (t.subtreeFlags & Ds && E !== null) {
          E.return = t, t = E;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Ju(e, t) {
      t = Fs(t, gg), t = Fs(t, Bv), Pm(e, t);
    }
    function Bx(e) {
      if (N_(), (At & (Gr | Ai)) !== Rr)
        throw new Error("Should not already be working.");
      Bl();
      var t = Cl(e, de);
      if (!la(t, at))
        return Xa(e, wn()), null;
      var a = wg(e, t);
      if (e.tag !== Bu && a === dc) {
        var o = Ao(e);
        o !== de && (t = o, a = x1(e, o));
      }
      if (a === $v) {
        var u = Fv;
        throw vc(e, de), Ju(e, t), Xa(e, wn()), u;
      }
      if (a === m1)
        throw new Error("Root did not complete. This is a bug in React.");
      var d = e.current.alternate;
      return e.finishedWork = d, e.finishedLanes = t, hc(e, qa, jl), Xa(e, wn()), null;
    }
    function m2(e, t) {
      t !== de && (Up(e, St(t, at)), Xa(e, wn()), (At & (Gr | Ai)) === Rr && (Vv(), Hu()));
    }
    function w1(e, t) {
      var a = At;
      At |= Ax;
      try {
        return e(t);
      } finally {
        At = a, At === Rr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !mo.isBatchingLegacy && (Vv(), $C());
      }
    }
    function y2(e, t, a, o, u) {
      var d = Ba(), m = Wr.transition;
      try {
        return Wr.transition = null, _n(Pn), e(t, a, o, u);
      } finally {
        _n(d), Wr.transition = m, At === Rr && Vv();
      }
    }
    function Fl(e) {
      Ku !== null && Ku.tag === Bu && (At & (Gr | Ai)) === Rr && Bl();
      var t = At;
      At |= Ax;
      var a = Wr.transition, o = Ba();
      try {
        return Wr.transition = null, _n(Pn), e ? e() : void 0;
      } finally {
        _n(o), Wr.transition = a, At = t, (At & (Gr | Ai)) === Rr && Hu();
      }
    }
    function Hx() {
      return (At & (Gr | Ai)) !== Rr;
    }
    function xg(e, t) {
      ca(y1, Go, e), Go = St(Go, t);
    }
    function R1(e) {
      Go = y1.current, sa(y1, e);
    }
    function vc(e, t) {
      e.finishedWork = null, e.finishedLanes = de;
      var a = e.timeoutHandle;
      if (a !== CS && (e.timeoutHandle = CS, Ik(a)), jn !== null)
        for (var o = jn.return; o !== null; ) {
          var u = o.alternate;
          yx(u, o), o = o.return;
        }
      wa = e;
      var d = mc(e.current, null);
      return jn = d, Or = Go = t, kr = $l, Fv = null, yg = de, Bv = de, gg = de, Hv = null, qa = null, d_(), lo.discardPendingWarnings(), d;
    }
    function Vx(e, t) {
      do {
        var a = jn;
        try {
          if (Ly(), pT(), Jn(), h1.current = null, a === null || a.return === null) {
            kr = $v, Fv = t, jn = null;
            return;
          }
          if (Pe && a.mode & vt && sg(a, !0), Ze)
            if (aa(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var o = t;
              yl(a, o, Or);
            } else
              Ns(a, t, Or);
          B_(e, a.return, a, t, Or), Gx(a);
        } catch (u) {
          t = u, jn === a && a !== null ? (a = a.return, jn = a) : a = jn;
          continue;
        }
        return;
      } while (!0);
    }
    function Ix() {
      var e = v1.current;
      return v1.current = ag, e === null ? ag : e;
    }
    function Yx(e) {
      v1.current = e;
    }
    function g2() {
      g1 = wn();
    }
    function Gv(e) {
      yg = St(e, yg);
    }
    function S2() {
      kr === $l && (kr = mg);
    }
    function O1() {
      (kr === $l || kr === mg || kr === dc) && (kr = jv), wa !== null && ($s(yg) || $s(Bv)) && Ju(wa, Or);
    }
    function b2(e) {
      kr !== jv && (kr = dc), Hv === null ? Hv = [e] : Hv.push(e);
    }
    function E2() {
      return kr === $l;
    }
    function wg(e, t) {
      var a = At;
      At |= Gr;
      var o = Ix();
      if (wa !== e || Or !== t) {
        if (Ea) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Qv(e, Or), u.clear()), Pp(e, t);
        }
        jl = Hs(), vc(e, t);
      }
      bn(t);
      do
        try {
          C2();
          break;
        } catch (d) {
          Vx(e, d);
        }
      while (!0);
      if (Ly(), At = a, Yx(o), jn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return rf(), wa = null, Or = de, kr;
    }
    function C2() {
      for (; jn !== null; )
        Wx(jn);
    }
    function T2(e, t) {
      var a = At;
      At |= Gr;
      var o = Ix();
      if (wa !== e || Or !== t) {
        if (Ea) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Qv(e, Or), u.clear()), Pp(e, t);
        }
        jl = Hs(), Vv(), vc(e, t);
      }
      bn(t);
      do
        try {
          x2();
          break;
        } catch (d) {
          Vx(e, d);
        }
      while (!0);
      return Ly(), Yx(o), At = a, jn !== null ? (nf(), $l) : (rf(), wa = null, Or = de, kr);
    }
    function x2() {
      for (; jn !== null && !Xc(); )
        Wx(jn);
    }
    function Wx(e) {
      var t = e.alternate;
      Jt(e);
      var a;
      (e.mode & vt) !== Je ? (_b(e), a = k1(t, e, Go), sg(e, !0)) : a = k1(t, e, Go), Jn(), e.memoizedProps = e.pendingProps, a === null ? Gx(e) : jn = a, h1.current = null;
    }
    function Gx(e) {
      var t = e;
      do {
        var a = t.alternate, o = t.return;
        if ((t.flags & ga) === ot) {
          Jt(t);
          var u = void 0;
          if ((t.mode & vt) === Je ? u = mx(a, t, Go) : (_b(t), u = mx(a, t, Go), sg(t, !1)), Jn(), u !== null) {
            jn = u;
            return;
          }
        } else {
          var d = SM(a, t);
          if (d !== null) {
            d.flags &= ym, jn = d;
            return;
          }
          if ((t.mode & vt) !== Je) {
            sg(t, !1);
            for (var m = t.actualDuration, b = t.child; b !== null; )
              m += b.actualDuration, b = b.sibling;
            t.actualDuration = m;
          }
          if (o !== null)
            o.flags |= ga, o.subtreeFlags = ot, o.deletions = null;
          else {
            kr = m1, jn = null;
            return;
          }
        }
        var E = t.sibling;
        if (E !== null) {
          jn = E;
          return;
        }
        t = o, jn = t;
      } while (t !== null);
      kr === $l && (kr = Lx);
    }
    function hc(e, t, a) {
      var o = Ba(), u = Wr.transition;
      try {
        Wr.transition = null, _n(Pn), w2(e, t, a, o);
      } finally {
        Wr.transition = u, _n(o);
      }
      return null;
    }
    function w2(e, t, a, o) {
      do
        Bl();
      while (Ku !== null);
      if (U2(), (At & (Gr | Ai)) !== Rr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, d = e.finishedLanes;
      if (_o(d), u === null)
        return Jc(), null;
      if (d === de && y("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = de, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = In;
      var m = St(u.lanes, u.childLanes);
      xf(e, m), e === wa && (wa = null, jn = null, Or = de), ((u.subtreeFlags & Ua) !== ot || (u.flags & Ua) !== ot) && (pc || (pc = !0, E1 = a, M1(Ti, function() {
        return Bl(), null;
      })));
      var b = (u.subtreeFlags & (uu | na | Nr | Ua)) !== ot, E = (u.flags & (uu | na | Nr | Ua)) !== ot;
      if (b || E) {
        var R = Wr.transition;
        Wr.transition = null;
        var D = Ba();
        _n(Pn);
        var V = At;
        At |= Ai, h1.current = null, xM(e, u), $T(), $M(e, u, d), Pk(e.containerInfo), e.current = u, kp(d), jM(u, e, d), pu(), bm(), At = V, _n(D), Wr.transition = R;
      } else
        e.current = u, $T();
      var F = pc;
      if (pc ? (pc = !1, Ku = e, Iv = d) : (gd = 0, Eg = null), m = e.pendingLanes, m === de && (yd = null), F || Kx(e.current, !1), cu(u.stateNode, o), Ea && e.memoizedUpdaters.clear(), a2(), Xa(e, wn()), t !== null)
        for (var K = e.onRecoverableError, J = 0; J < t.length; J++) {
          var ae = t[J], ze = ae.stack, lt = ae.digest;
          K(ae.value, {
            componentStack: ze,
            digest: lt
          });
        }
      if (Sg) {
        Sg = !1;
        var nt = S1;
        throw S1 = null, nt;
      }
      return la(Iv, at) && e.tag !== Bu && Bl(), m = e.pendingLanes, la(m, at) ? (__(), e === C1 ? Yv++ : (Yv = 0, C1 = e)) : Yv = 0, Hu(), Jc(), null;
    }
    function Bl() {
      if (Ku !== null) {
        var e = Er(Iv), t = W0(xi, e), a = Wr.transition, o = Ba();
        try {
          return Wr.transition = null, _n(t), O2();
        } finally {
          _n(o), Wr.transition = a;
        }
      }
      return !1;
    }
    function R2(e) {
      b1.push(e), pc || (pc = !0, M1(Ti, function() {
        return Bl(), null;
      }));
    }
    function O2() {
      if (Ku === null)
        return !1;
      var e = E1;
      E1 = null;
      var t = Ku, a = Iv;
      if (Ku = null, Iv = de, (At & (Gr | Ai)) !== Rr)
        throw new Error("Cannot flush passive effects while already rendering.");
      T1 = !0, bg = !1, Rm(a);
      var o = At;
      At |= Ai, WM(t.current), HM(t, t.current, a, e);
      {
        var u = b1;
        b1 = [];
        for (var d = 0; d < u.length; d++) {
          var m = u[d];
          kM(t, m);
        }
      }
      Dp(), Kx(t.current, !0), At = o, Hu(), bg ? t === Eg ? gd++ : (gd = 0, Eg = t) : gd = 0, T1 = !1, bg = !1, ja(t);
      {
        var b = t.current.stateNode;
        b.effectDuration = 0, b.passiveEffectDuration = 0;
      }
      return !0;
    }
    function Qx(e) {
      return yd !== null && yd.has(e);
    }
    function k2(e) {
      yd === null ? yd = /* @__PURE__ */ new Set([e]) : yd.add(e);
    }
    function D2(e) {
      Sg || (Sg = !0, S1 = e);
    }
    var _2 = D2;
    function qx(e, t, a) {
      var o = cc(a, t), u = WT(e, o, at), d = Iu(e, u, at), m = Ra();
      d !== null && (xl(d, at, m), Xa(d, m));
    }
    function vn(e, t, a) {
      if (EM(a), qv(!1), e.tag === M) {
        qx(e, e, a);
        return;
      }
      var o = null;
      for (o = t; o !== null; ) {
        if (o.tag === M) {
          qx(o, e, a);
          return;
        } else if (o.tag === k) {
          var u = o.type, d = o.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof d.componentDidCatch == "function" && !Qx(d)) {
            var m = cc(a, e), b = Qb(o, m, at), E = Iu(o, b, at), R = Ra();
            E !== null && (xl(E, at, R), Xa(E, R));
            return;
          }
        }
        o = o.return;
      }
      y(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function M2(e, t, a) {
      var o = e.pingCache;
      o !== null && o.delete(t);
      var u = Ra();
      Tf(e, a), F2(e), wa === e && Tl(Or, a) && (kr === jv || kr === mg && Mm(Or) && wn() - g1 < zx ? vc(e, de) : gg = St(gg, a)), Xa(e, u);
    }
    function Xx(e, t) {
      t === In && (t = f2(e));
      var a = Ra(), o = Ga(e, t);
      o !== null && (xl(o, t, a), Xa(o, a));
    }
    function N2(e) {
      var t = e.memoizedState, a = In;
      t !== null && (a = t.retryLane), Xx(e, a);
    }
    function A2(e, t) {
      var a = In, o;
      switch (e.tag) {
        case U:
          o = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case ne:
          o = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      o !== null && o.delete(t), Xx(e, a);
    }
    function L2(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : l2(e / 1960) * 1960;
    }
    function z2() {
      if (Yv > s2)
        throw Yv = 0, C1 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      gd > c2 && (gd = 0, Eg = null, y("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function U2() {
      lo.flushLegacyContextWarning(), lo.flushPendingUnsafeLifecycleWarnings();
    }
    function Kx(e, t) {
      Jt(e), Rg(e, ta, t2), t && Rg(e, vl, n2), Rg(e, ta, JM), t && Rg(e, vl, e2), Jn();
    }
    function Rg(e, t, a) {
      for (var o = e, u = null; o !== null; ) {
        var d = o.subtreeFlags & t;
        o !== u && o.child !== null && d !== ot ? o = o.child : ((o.flags & t) !== ot && a(o), o.sibling !== null ? o = o.sibling : o = u = o.return);
      }
    }
    var Og = null;
    function Zx(e) {
      {
        if ((At & Gr) !== Rr || !(e.mode & tt))
          return;
        var t = e.tag;
        if (t !== _ && t !== M && t !== k && t !== x && t !== q && t !== re && t !== te)
          return;
        var a = gt(e) || "ReactComponent";
        if (Og !== null) {
          if (Og.has(a))
            return;
          Og.add(a);
        } else
          Og = /* @__PURE__ */ new Set([a]);
        var o = Bn;
        try {
          Jt(e), y("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          o ? Jt(e) : Jn();
        }
      }
    }
    var k1;
    {
      var P2 = null;
      k1 = function(e, t, a) {
        var o = ow(P2, t);
        try {
          return fx(e, t, a);
        } catch (d) {
          if (qD() || d !== null && typeof d == "object" && typeof d.then == "function")
            throw d;
          if (Ly(), pT(), yx(e, t), ow(t, o), t.mode & vt && _b(t), pl(null, fx, null, e, t, a), B0()) {
            var u = Sp();
            typeof u == "object" && u !== null && u._suppressLogging && typeof d == "object" && d !== null && !d._suppressLogging && (d._suppressLogging = !0);
          }
          throw d;
        }
      };
    }
    var Jx = !1, D1;
    D1 = /* @__PURE__ */ new Set();
    function $2(e) {
      if (_a && !O_())
        switch (e.tag) {
          case x:
          case q:
          case te: {
            var t = jn && gt(jn) || "Unknown", a = t;
            if (!D1.has(a)) {
              D1.add(a);
              var o = gt(e) || "Unknown";
              y("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", o, t, t);
            }
            break;
          }
          case k: {
            Jx || (y("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), Jx = !0);
            break;
          }
        }
    }
    function Qv(e, t) {
      if (Ea) {
        var a = e.memoizedUpdaters;
        a.forEach(function(o) {
          wf(e, o, t);
        });
      }
    }
    var _1 = {};
    function M1(e, t) {
      {
        var a = mo.current;
        return a !== null ? (a.push(t), _1) : qc(e, t);
      }
    }
    function ew(e) {
      if (e !== _1)
        return Sm(e);
    }
    function tw() {
      return mo.current !== null;
    }
    function j2(e) {
      {
        if (e.mode & tt) {
          if (!Nx())
            return;
        } else if (!o2() || At !== Rr || e.tag !== x && e.tag !== q && e.tag !== te)
          return;
        if (mo.current === null) {
          var t = Bn;
          try {
            Jt(e), y(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, gt(e));
          } finally {
            t ? Jt(e) : Jn();
          }
        }
      }
    }
    function F2(e) {
      e.tag !== Bu && Nx() && mo.current === null && y(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function qv(e) {
      $x = e;
    }
    var Li = null, Sd = null, B2 = function(e) {
      Li = e;
    };
    function bd(e) {
      {
        if (Li === null)
          return e;
        var t = Li(e);
        return t === void 0 ? e : t.current;
      }
    }
    function N1(e) {
      return bd(e);
    }
    function A1(e) {
      {
        if (Li === null)
          return e;
        var t = Li(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = bd(e.render);
            if (e.render !== a) {
              var o = {
                $$typeof: _e,
                render: a
              };
              return e.displayName !== void 0 && (o.displayName = e.displayName), o;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function nw(e, t) {
      {
        if (Li === null)
          return !1;
        var a = e.elementType, o = t.type, u = !1, d = typeof o == "object" && o !== null ? o.$$typeof : null;
        switch (e.tag) {
          case k: {
            typeof o == "function" && (u = !0);
            break;
          }
          case x: {
            (typeof o == "function" || d === ft) && (u = !0);
            break;
          }
          case q: {
            (d === _e || d === ft) && (u = !0);
            break;
          }
          case re:
          case te: {
            (d === zt || d === ft) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var m = Li(a);
          if (m !== void 0 && m === Li(o))
            return !0;
        }
        return !1;
      }
    }
    function rw(e) {
      {
        if (Li === null || typeof WeakSet != "function")
          return;
        Sd === null && (Sd = /* @__PURE__ */ new WeakSet()), Sd.add(e);
      }
    }
    var H2 = function(e, t) {
      {
        if (Li === null)
          return;
        var a = t.staleFamilies, o = t.updatedFamilies;
        Bl(), Fl(function() {
          L1(e.current, o, a);
        });
      }
    }, V2 = function(e, t) {
      {
        if (e.context !== ci)
          return;
        Bl(), Fl(function() {
          Xv(t, e, null, null);
        });
      }
    };
    function L1(e, t, a) {
      {
        var o = e.alternate, u = e.child, d = e.sibling, m = e.tag, b = e.type, E = null;
        switch (m) {
          case x:
          case te:
          case k:
            E = b;
            break;
          case q:
            E = b.render;
            break;
        }
        if (Li === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var R = !1, D = !1;
        if (E !== null) {
          var V = Li(E);
          V !== void 0 && (a.has(V) ? D = !0 : t.has(V) && (m === k ? D = !0 : R = !0));
        }
        if (Sd !== null && (Sd.has(e) || o !== null && Sd.has(o)) && (D = !0), D && (e._debugNeedsRemount = !0), D || R) {
          var F = Ga(e, at);
          F !== null && Dr(F, e, at, sn);
        }
        u !== null && !D && L1(u, t, a), d !== null && L1(d, t, a);
      }
    }
    var I2 = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), o = new Set(t.map(function(u) {
          return u.current;
        }));
        return z1(e.current, o, a), a;
      }
    };
    function z1(e, t, a) {
      {
        var o = e.child, u = e.sibling, d = e.tag, m = e.type, b = null;
        switch (d) {
          case x:
          case te:
          case k:
            b = m;
            break;
          case q:
            b = m.render;
            break;
        }
        var E = !1;
        b !== null && t.has(b) && (E = !0), E ? Y2(e, a) : o !== null && z1(o, t, a), u !== null && z1(u, t, a);
      }
    }
    function Y2(e, t) {
      {
        var a = W2(e, t);
        if (a)
          return;
        for (var o = e; ; ) {
          switch (o.tag) {
            case $:
              t.add(o.stateNode);
              return;
            case A:
              t.add(o.stateNode.containerInfo);
              return;
            case M:
              t.add(o.stateNode.containerInfo);
              return;
          }
          if (o.return === null)
            throw new Error("Expected to reach root first.");
          o = o.return;
        }
      }
    }
    function W2(e, t) {
      for (var a = e, o = !1; ; ) {
        if (a.tag === $)
          o = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return o;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return o;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var U1;
    {
      U1 = !1;
      try {
        var aw = Object.preventExtensions({});
      } catch {
        U1 = !0;
      }
    }
    function G2(e, t, a, o) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = o, this.flags = ot, this.subtreeFlags = ot, this.deletions = null, this.lanes = de, this.childLanes = de, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !U1 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var fi = function(e, t, a, o) {
      return new G2(e, t, a, o);
    };
    function P1(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Q2(e) {
      return typeof e == "function" && !P1(e) && e.defaultProps === void 0;
    }
    function q2(e) {
      if (typeof e == "function")
        return P1(e) ? k : x;
      if (e != null) {
        var t = e.$$typeof;
        if (t === _e)
          return q;
        if (t === zt)
          return re;
      }
      return _;
    }
    function mc(e, t) {
      var a = e.alternate;
      a === null ? (a = fi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = ot, a.subtreeFlags = ot, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Sr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var o = e.dependencies;
      switch (a.dependencies = o === null ? null : {
        lanes: o.lanes,
        firstContext: o.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case _:
        case x:
        case te:
          a.type = bd(e.type);
          break;
        case k:
          a.type = N1(e.type);
          break;
        case q:
          a.type = A1(e.type);
          break;
      }
      return a;
    }
    function X2(e, t) {
      e.flags &= Sr | fn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = de, e.lanes = t, e.child = null, e.subtreeFlags = ot, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = ot, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var o = a.dependencies;
        e.dependencies = o === null ? null : {
          lanes: o.lanes,
          firstContext: o.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function K2(e, t, a) {
      var o;
      return e === xy ? (o = tt, t === !0 && (o |= Rt, o |= Ca)) : o = Je, Ea && (o |= vt), fi(M, null, null, o);
    }
    function $1(e, t, a, o, u, d) {
      var m = _, b = e;
      if (typeof e == "function")
        P1(e) ? (m = k, b = N1(b)) : b = bd(b);
      else if (typeof e == "string")
        m = $;
      else
        e: switch (e) {
          case ni:
            return es(a.children, u, d, t);
          case So:
            m = P, u |= Rt, (u & tt) !== Je && (u |= Ca);
            break;
          case rl:
            return Z2(a, u, d, t);
          case rt:
            return J2(a, u, d, t);
          case _t:
            return eN(a, u, d, t);
          case cn:
            return iw(a, u, d, t);
          case xn:
          case xt:
          case Kr:
          case bo:
          case ur:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case z:
                  m = le;
                  break e;
                case me:
                  m = ee;
                  break e;
                case _e:
                  m = q, b = A1(b);
                  break e;
                case zt:
                  m = re;
                  break e;
                case ft:
                  m = Ae, b = null;
                  break e;
              }
            var E = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (E += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var R = o ? gt(o) : null;
              R && (E += `

Check the render method of \`` + R + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + E));
          }
        }
      var D = fi(m, a, t, u);
      return D.elementType = e, D.type = b, D.lanes = d, D._debugOwner = o, D;
    }
    function j1(e, t, a) {
      var o = null;
      o = e._owner;
      var u = e.type, d = e.key, m = e.props, b = $1(u, d, m, o, t, a);
      return b._debugSource = e._source, b._debugOwner = e._owner, b;
    }
    function es(e, t, a, o) {
      var u = fi(L, e, o, t);
      return u.lanes = a, u;
    }
    function Z2(e, t, a, o) {
      typeof e.id != "string" && y('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = fi(Y, e, o, t | vt);
      return u.elementType = rl, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function J2(e, t, a, o) {
      var u = fi(U, e, o, t);
      return u.elementType = rt, u.lanes = a, u;
    }
    function eN(e, t, a, o) {
      var u = fi(ne, e, o, t);
      return u.elementType = _t, u.lanes = a, u;
    }
    function iw(e, t, a, o) {
      var u = fi(ue, e, o, t);
      u.elementType = cn, u.lanes = a;
      var d = {
        isHidden: !1
      };
      return u.stateNode = d, u;
    }
    function F1(e, t, a) {
      var o = fi(B, e, null, t);
      return o.lanes = a, o;
    }
    function tN() {
      var e = fi($, null, null, Je);
      return e.elementType = "DELETED", e;
    }
    function nN(e) {
      var t = fi(O, null, null, Je);
      return t.stateNode = e, t;
    }
    function B1(e, t, a) {
      var o = e.children !== null ? e.children : [], u = fi(A, o, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function ow(e, t) {
      return e === null && (e = fi(_, null, null, Je)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function rN(e, t, a, o, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = CS, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = In, this.eventTimes = Bs(de), this.expirationTimes = Bs(sn), this.pendingLanes = de, this.suspendedLanes = de, this.pingedLanes = de, this.expiredLanes = de, this.mutableReadLanes = de, this.finishedLanes = de, this.entangledLanes = de, this.entanglements = Bs(de), this.identifierPrefix = o, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var d = this.pendingUpdatersLaneMap = [], m = 0; m < zs; m++)
          d.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case xy:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Bu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function lw(e, t, a, o, u, d, m, b, E, R) {
      var D = new rN(e, t, a, b, E), V = K2(t, d);
      D.current = V, V.stateNode = D;
      {
        var F = {
          element: o,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        V.memoizedState = F;
      }
      return eb(V), D;
    }
    var H1 = "18.3.1";
    function aN(e, t, a) {
      var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Tn(o), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: ha,
        key: o == null ? null : "" + o,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var V1, I1;
    V1 = !1, I1 = {};
    function uw(e) {
      if (!e)
        return ci;
      var t = Aa(e), a = FD(t);
      if (t.tag === k) {
        var o = t.type;
        if (Fo(o))
          return zC(t, o, a);
      }
      return a;
    }
    function iN(e, t) {
      {
        var a = Aa(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var o = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + o);
        }
        var u = Pa(a);
        if (u === null)
          return null;
        if (u.mode & Rt) {
          var d = gt(a) || "Component";
          if (!I1[d]) {
            I1[d] = !0;
            var m = Bn;
            try {
              Jt(u), a.mode & Rt ? y("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, d) : y("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, d);
            } finally {
              m ? Jt(m) : Jn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function sw(e, t, a, o, u, d, m, b) {
      var E = !1, R = null;
      return lw(e, t, E, R, a, o, u, d, m);
    }
    function cw(e, t, a, o, u, d, m, b, E, R) {
      var D = !0, V = lw(a, o, D, e, u, d, m, b, E);
      V.context = uw(null);
      var F = V.current, K = Ra(), J = Zu(F), ae = Ul(K, J);
      return ae.callback = t ?? null, Iu(F, ae, J), d2(V, J, K), V;
    }
    function Xv(e, t, a, o) {
      Op(t, e);
      var u = t.current, d = Ra(), m = Zu(u);
      _p(m);
      var b = uw(a);
      t.context === null ? t.context = b : t.pendingContext = b, _a && Bn !== null && !V1 && (V1 = !0, y(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, gt(Bn) || "Unknown"));
      var E = Ul(d, m);
      E.payload = {
        element: e
      }, o = o === void 0 ? null : o, o !== null && (typeof o != "function" && y("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", o), E.callback = o);
      var R = Iu(u, E, m);
      return R !== null && (Dr(R, u, m, d), jy(R, u, m)), m;
    }
    function kg(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case $:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function oN(e) {
      switch (e.tag) {
        case M: {
          var t = e.stateNode;
          if (Rf(t)) {
            var a = Ap(t);
            m2(t, a);
          }
          break;
        }
        case U: {
          Fl(function() {
            var u = Ga(e, at);
            if (u !== null) {
              var d = Ra();
              Dr(u, e, at, d);
            }
          });
          var o = at;
          Y1(e, o);
          break;
        }
      }
    }
    function fw(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Um(a.retryLane, t));
    }
    function Y1(e, t) {
      fw(e, t);
      var a = e.alternate;
      a && fw(a, t);
    }
    function lN(e) {
      if (e.tag === U) {
        var t = Ps, a = Ga(e, t);
        if (a !== null) {
          var o = Ra();
          Dr(a, e, t, o);
        }
        Y1(e, t);
      }
    }
    function uN(e) {
      if (e.tag === U) {
        var t = Zu(e), a = Ga(e, t);
        if (a !== null) {
          var o = Ra();
          Dr(a, e, t, o);
        }
        Y1(e, t);
      }
    }
    function dw(e) {
      var t = gm(e);
      return t === null ? null : t.stateNode;
    }
    var pw = function(e) {
      return null;
    };
    function sN(e) {
      return pw(e);
    }
    var vw = function(e) {
      return !1;
    };
    function cN(e) {
      return vw(e);
    }
    var hw = null, mw = null, yw = null, gw = null, Sw = null, bw = null, Ew = null, Cw = null, Tw = null;
    {
      var xw = function(e, t, a) {
        var o = t[a], u = sr(e) ? e.slice() : wt({}, e);
        return a + 1 === t.length ? (sr(u) ? u.splice(o, 1) : delete u[o], u) : (u[o] = xw(e[o], t, a + 1), u);
      }, ww = function(e, t) {
        return xw(e, t, 0);
      }, Rw = function(e, t, a, o) {
        var u = t[o], d = sr(e) ? e.slice() : wt({}, e);
        if (o + 1 === t.length) {
          var m = a[o];
          d[m] = d[u], sr(d) ? d.splice(u, 1) : delete d[u];
        } else
          d[u] = Rw(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            o + 1
          );
        return d;
      }, Ow = function(e, t, a) {
        if (t.length !== a.length) {
          S("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var o = 0; o < a.length - 1; o++)
            if (t[o] !== a[o]) {
              S("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return Rw(e, t, a, 0);
      }, kw = function(e, t, a, o) {
        if (a >= t.length)
          return o;
        var u = t[a], d = sr(e) ? e.slice() : wt({}, e);
        return d[u] = kw(e[u], t, a + 1, o), d;
      }, Dw = function(e, t, a) {
        return kw(e, t, 0, a);
      }, W1 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      hw = function(e, t, a, o) {
        var u = W1(e, t);
        if (u !== null) {
          var d = Dw(u.memoizedState, a, o);
          u.memoizedState = d, u.baseState = d, e.memoizedProps = wt({}, e.memoizedProps);
          var m = Ga(e, at);
          m !== null && Dr(m, e, at, sn);
        }
      }, mw = function(e, t, a) {
        var o = W1(e, t);
        if (o !== null) {
          var u = ww(o.memoizedState, a);
          o.memoizedState = u, o.baseState = u, e.memoizedProps = wt({}, e.memoizedProps);
          var d = Ga(e, at);
          d !== null && Dr(d, e, at, sn);
        }
      }, yw = function(e, t, a, o) {
        var u = W1(e, t);
        if (u !== null) {
          var d = Ow(u.memoizedState, a, o);
          u.memoizedState = d, u.baseState = d, e.memoizedProps = wt({}, e.memoizedProps);
          var m = Ga(e, at);
          m !== null && Dr(m, e, at, sn);
        }
      }, gw = function(e, t, a) {
        e.pendingProps = Dw(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var o = Ga(e, at);
        o !== null && Dr(o, e, at, sn);
      }, Sw = function(e, t) {
        e.pendingProps = ww(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ga(e, at);
        a !== null && Dr(a, e, at, sn);
      }, bw = function(e, t, a) {
        e.pendingProps = Ow(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var o = Ga(e, at);
        o !== null && Dr(o, e, at, sn);
      }, Ew = function(e) {
        var t = Ga(e, at);
        t !== null && Dr(t, e, at, sn);
      }, Cw = function(e) {
        pw = e;
      }, Tw = function(e) {
        vw = e;
      };
    }
    function fN(e) {
      var t = Pa(e);
      return t === null ? null : t.stateNode;
    }
    function dN(e) {
      return null;
    }
    function pN() {
      return Bn;
    }
    function vN(e) {
      var t = e.findFiberByHostInstance, a = c.ReactCurrentDispatcher;
      return Rp({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: hw,
        overrideHookStateDeletePath: mw,
        overrideHookStateRenamePath: yw,
        overrideProps: gw,
        overridePropsDeletePath: Sw,
        overridePropsRenamePath: bw,
        setErrorHandler: Cw,
        setSuspenseHandler: Tw,
        scheduleUpdate: Ew,
        currentDispatcherRef: a,
        findHostInstanceByFiber: fN,
        findFiberByHostInstance: t || dN,
        // React Refresh
        findHostInstancesForRefresh: I2,
        scheduleRefresh: H2,
        scheduleRoot: V2,
        setRefreshHandler: B2,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: pN,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: H1
      });
    }
    var _w = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function G1(e) {
      this._internalRoot = e;
    }
    Dg.prototype.render = G1.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? y("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : _g(arguments[1]) ? y("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && y("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Hn) {
          var o = dw(t.current);
          o && o.parentNode !== a && y("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Xv(e, t, null, null);
    }, Dg.prototype.unmount = G1.prototype.unmount = function() {
      typeof arguments[0] == "function" && y("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Hx() && y("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Fl(function() {
          Xv(null, e, null, null);
        }), _C(t);
      }
    };
    function hN(e, t) {
      if (!_g(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      Mw(e);
      var a = !1, o = !1, u = "", d = _w;
      t != null && (t.hydrate ? S("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Vi && y(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var m = sw(e, xy, null, a, o, u, d);
      yy(m.current, e);
      var b = e.nodeType === Hn ? e.parentNode : e;
      return nv(b), new G1(m);
    }
    function Dg(e) {
      this._internalRoot = e;
    }
    function mN(e) {
      e && q0(e);
    }
    Dg.prototype.unstable_scheduleHydration = mN;
    function yN(e, t, a) {
      if (!_g(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      Mw(e), t === void 0 && y("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var o = a ?? null, u = a != null && a.hydratedSources || null, d = !1, m = !1, b = "", E = _w;
      a != null && (a.unstable_strictMode === !0 && (d = !0), a.identifierPrefix !== void 0 && (b = a.identifierPrefix), a.onRecoverableError !== void 0 && (E = a.onRecoverableError));
      var R = cw(t, null, e, xy, o, d, m, b, E);
      if (yy(R.current, e), nv(e), u)
        for (var D = 0; D < u.length; D++) {
          var V = u[D];
          E_(R, V);
        }
      return new Dg(R);
    }
    function _g(e) {
      return !!(e && (e.nodeType === Zr || e.nodeType === oi || e.nodeType === ll || !Re));
    }
    function Kv(e) {
      return !!(e && (e.nodeType === Zr || e.nodeType === oi || e.nodeType === ll || e.nodeType === Hn && e.nodeValue === " react-mount-point-unstable "));
    }
    function Mw(e) {
      e.nodeType === Zr && e.tagName && e.tagName.toUpperCase() === "BODY" && y("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), pv(e) && (e._reactRootContainer ? y("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : y("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var gN = c.ReactCurrentOwner, Nw;
    Nw = function(e) {
      if (e._reactRootContainer && e.nodeType !== Hn) {
        var t = dw(e._reactRootContainer.current);
        t && t.parentNode !== e && y("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, o = Q1(e), u = !!(o && ju(o));
      u && !a && y("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Zr && e.tagName && e.tagName.toUpperCase() === "BODY" && y("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function Q1(e) {
      return e ? e.nodeType === oi ? e.documentElement : e.firstChild : null;
    }
    function Aw() {
    }
    function SN(e, t, a, o, u) {
      if (u) {
        if (typeof o == "function") {
          var d = o;
          o = function() {
            var F = kg(m);
            d.call(F);
          };
        }
        var m = cw(
          t,
          o,
          e,
          Bu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Aw
        );
        e._reactRootContainer = m, yy(m.current, e);
        var b = e.nodeType === Hn ? e.parentNode : e;
        return nv(b), Fl(), m;
      } else {
        for (var E; E = e.lastChild; )
          e.removeChild(E);
        if (typeof o == "function") {
          var R = o;
          o = function() {
            var F = kg(D);
            R.call(F);
          };
        }
        var D = sw(
          e,
          Bu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Aw
        );
        e._reactRootContainer = D, yy(D.current, e);
        var V = e.nodeType === Hn ? e.parentNode : e;
        return nv(V), Fl(function() {
          Xv(t, D, a, o);
        }), D;
      }
    }
    function bN(e, t) {
      e !== null && typeof e != "function" && y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Mg(e, t, a, o, u) {
      Nw(a), bN(u === void 0 ? null : u, "render");
      var d = a._reactRootContainer, m;
      if (!d)
        m = SN(a, t, e, u, o);
      else {
        if (m = d, typeof u == "function") {
          var b = u;
          u = function() {
            var E = kg(m);
            b.call(E);
          };
        }
        Xv(t, m, e, u);
      }
      return kg(m);
    }
    var Lw = !1;
    function EN(e) {
      {
        Lw || (Lw = !0, y("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = gN.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || y("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Qt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Zr ? e : iN(e, "findDOMNode");
    }
    function CN(e, t, a) {
      if (y("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Kv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var o = pv(t) && t._reactRootContainer === void 0;
        o && y("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Mg(null, e, t, !0, a);
    }
    function TN(e, t, a) {
      if (y("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Kv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var o = pv(t) && t._reactRootContainer === void 0;
        o && y("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Mg(null, e, t, !1, a);
    }
    function xN(e, t, a, o) {
      if (y("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Kv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !ks(e))
        throw new Error("parentComponent must be a valid React Component");
      return Mg(e, t, a, !1, o);
    }
    var zw = !1;
    function wN(e) {
      if (zw || (zw = !0, y("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Kv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = pv(e) && e._reactRootContainer === void 0;
        t && y("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = Q1(e), o = a && !ju(a);
          o && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Fl(function() {
          Mg(null, null, e, !1, function() {
            e._reactRootContainer = null, _C(e);
          });
        }), !0;
      } else {
        {
          var u = Q1(e), d = !!(u && ju(u)), m = e.nodeType === Zr && Kv(e.parentNode) && !!e.parentNode._reactRootContainer;
          d && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", m ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    wu(oN), G0(lN), kf(uN), jm(Ba), Fm(zr), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && y("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), hm(Ok), Ic(w1, y2, Fl);
    function RN(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!_g(t))
        throw new Error("Target container is not a DOM element.");
      return aN(e, t, null, a);
    }
    function ON(e, t, a, o) {
      return xN(e, t, a, o);
    }
    var q1 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [ju, Kf, gy, Vc, ws, w1]
    };
    function kN(e, t) {
      return q1.usingClientEntryPoint || y('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), hN(e, t);
    }
    function DN(e, t, a) {
      return q1.usingClientEntryPoint || y('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), yN(e, t, a);
    }
    function _N(e) {
      return Hx() && y("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Fl(e);
    }
    var MN = vN({
      findFiberByHostInstance: tc,
      bundleType: 1,
      version: H1,
      rendererPackageName: "react-dom"
    });
    if (!MN && Tt && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var Uw = window.location.protocol;
      /^(https?|file):$/.test(Uw) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (Uw === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Za.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = q1, Za.createPortal = RN, Za.createRoot = kN, Za.findDOMNode = EN, Za.flushSync = _N, Za.hydrate = CN, Za.hydrateRoot = DN, Za.render = TN, Za.unmountComponentAtNode = wN, Za.unstable_batchedUpdates = w1, Za.unstable_renderSubtreeIntoContainer = ON, Za.version = H1, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Za;
}
function kO() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kO);
    } catch (i) {
      console.error(i);
    }
  }
}
process.env.NODE_ENV === "production" ? (kO(), SE.exports = _3()) : SE.exports = M3();
var DO = SE.exports;
const Pg = /* @__PURE__ */ HR(DO), _R = {
  disabled: !1
};
var N3 = process.env.NODE_ENV !== "production" ? w.oneOfType([w.number, w.shape({
  enter: w.number,
  exit: w.number,
  appear: w.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && w.oneOfType([w.string, w.shape({
  enter: w.string,
  exit: w.string,
  active: w.string
}), w.shape({
  enter: w.string,
  enterDone: w.string,
  enterActive: w.string,
  exit: w.string,
  exitDone: w.string,
  exitActive: w.string
})]);
const e0 = vi.createContext(null);
var A3 = function(s) {
  return s.scrollTop;
}, sh = "unmounted", yc = "exited", gc = "entering", Dd = "entered", bE = "exiting", Gl = /* @__PURE__ */ function(i) {
  RO(s, i);
  function s(p, h) {
    var S;
    S = i.call(this, p, h) || this;
    var y = h, C = y && !y.isMounting ? p.enter : p.appear, x;
    return S.appearStatus = null, p.in ? C ? (x = yc, S.appearStatus = gc) : x = Dd : p.unmountOnExit || p.mountOnEnter ? x = sh : x = yc, S.state = {
      status: x
    }, S.nextCallback = null, S;
  }
  s.getDerivedStateFromProps = function(h, S) {
    var y = h.in;
    return y && S.status === sh ? {
      status: yc
    } : null;
  };
  var c = s.prototype;
  return c.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, c.componentDidUpdate = function(h) {
    var S = null;
    if (h !== this.props) {
      var y = this.state.status;
      this.props.in ? y !== gc && y !== Dd && (S = gc) : (y === gc || y === Dd) && (S = bE);
    }
    this.updateStatus(!1, S);
  }, c.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, c.getTimeouts = function() {
    var h = this.props.timeout, S, y, C;
    return S = y = C = h, h != null && typeof h != "number" && (S = h.exit, y = h.enter, C = h.appear !== void 0 ? h.appear : y), {
      exit: S,
      enter: y,
      appear: C
    };
  }, c.updateStatus = function(h, S) {
    if (h === void 0 && (h = !1), S !== null)
      if (this.cancelNextCallback(), S === gc) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var y = this.props.nodeRef ? this.props.nodeRef.current : Pg.findDOMNode(this);
          y && A3(y);
        }
        this.performEnter(h);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === yc && this.setState({
      status: sh
    });
  }, c.performEnter = function(h) {
    var S = this, y = this.props.enter, C = this.context ? this.context.isMounting : h, x = this.props.nodeRef ? [C] : [Pg.findDOMNode(this), C], k = x[0], _ = x[1], M = this.getTimeouts(), A = C ? M.appear : M.enter;
    if (!h && !y || _R.disabled) {
      this.safeSetState({
        status: Dd
      }, function() {
        S.props.onEntered(k);
      });
      return;
    }
    this.props.onEnter(k, _), this.safeSetState({
      status: gc
    }, function() {
      S.props.onEntering(k, _), S.onTransitionEnd(A, function() {
        S.safeSetState({
          status: Dd
        }, function() {
          S.props.onEntered(k, _);
        });
      });
    });
  }, c.performExit = function() {
    var h = this, S = this.props.exit, y = this.getTimeouts(), C = this.props.nodeRef ? void 0 : Pg.findDOMNode(this);
    if (!S || _R.disabled) {
      this.safeSetState({
        status: yc
      }, function() {
        h.props.onExited(C);
      });
      return;
    }
    this.props.onExit(C), this.safeSetState({
      status: bE
    }, function() {
      h.props.onExiting(C), h.onTransitionEnd(y.exit, function() {
        h.safeSetState({
          status: yc
        }, function() {
          h.props.onExited(C);
        });
      });
    });
  }, c.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, c.safeSetState = function(h, S) {
    S = this.setNextCallback(S), this.setState(h, S);
  }, c.setNextCallback = function(h) {
    var S = this, y = !0;
    return this.nextCallback = function(C) {
      y && (y = !1, S.nextCallback = null, h(C));
    }, this.nextCallback.cancel = function() {
      y = !1;
    }, this.nextCallback;
  }, c.onTransitionEnd = function(h, S) {
    this.setNextCallback(S);
    var y = this.props.nodeRef ? this.props.nodeRef.current : Pg.findDOMNode(this), C = h == null && !this.props.addEndListener;
    if (!y || C) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var x = this.props.nodeRef ? [this.nextCallback] : [y, this.nextCallback], k = x[0], _ = x[1];
      this.props.addEndListener(k, _);
    }
    h != null && setTimeout(this.nextCallback, h);
  }, c.render = function() {
    var h = this.state.status;
    if (h === sh)
      return null;
    var S = this.props, y = S.children;
    S.in, S.mountOnEnter, S.unmountOnExit, S.appear, S.enter, S.exit, S.timeout, S.addEndListener, S.onEnter, S.onEntering, S.onEntered, S.onExit, S.onExiting, S.onExited, S.nodeRef;
    var C = wO(S, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ vi.createElement(e0.Provider, {
        value: null
      }, typeof y == "function" ? y(h, C) : vi.cloneElement(vi.Children.only(y), C))
    );
  }, s;
}(vi.Component);
Gl.contextType = e0;
Gl.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: w.shape({
    current: typeof Element > "u" ? w.any : function(i, s, c, p, h, S) {
      var y = i[s];
      return w.instanceOf(y && "ownerDocument" in y ? y.ownerDocument.defaultView.Element : Element)(i, s, c, p, h, S);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: w.oneOfType([w.func.isRequired, w.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: w.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: w.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: w.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: w.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: w.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: w.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(s) {
    var c = N3;
    s.addEndListener || (c = c.isRequired);
    for (var p = arguments.length, h = new Array(p > 1 ? p - 1 : 0), S = 1; S < p; S++)
      h[S - 1] = arguments[S];
    return c.apply(void 0, [s].concat(h));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: w.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: w.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: w.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: w.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: w.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: w.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: w.func
} : {};
function Od() {
}
Gl.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Od,
  onEntering: Od,
  onEntered: Od,
  onExit: Od,
  onExiting: Od,
  onExited: Od
};
Gl.UNMOUNTED = sh;
Gl.EXITED = yc;
Gl.ENTERING = gc;
Gl.ENTERED = Dd;
Gl.EXITING = bE;
function L3(i) {
  if (i === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return i;
}
function VE(i, s) {
  var c = function(S) {
    return s && Bg(S) ? s(S) : S;
  }, p = /* @__PURE__ */ Object.create(null);
  return i && $N.map(i, function(h) {
    return h;
  }).forEach(function(h) {
    p[h.key] = c(h);
  }), p;
}
function z3(i, s) {
  i = i || {}, s = s || {};
  function c(_) {
    return _ in s ? s[_] : i[_];
  }
  var p = /* @__PURE__ */ Object.create(null), h = [];
  for (var S in i)
    S in s ? h.length && (p[S] = h, h = []) : h.push(S);
  var y, C = {};
  for (var x in s) {
    if (p[x])
      for (y = 0; y < p[x].length; y++) {
        var k = p[x][y];
        C[p[x][y]] = c(k);
      }
    C[x] = c(x);
  }
  for (y = 0; y < h.length; y++)
    C[h[y]] = c(h[y]);
  return C;
}
function Sc(i, s, c) {
  return c[s] != null ? c[s] : i.props[s];
}
function U3(i, s) {
  return VE(i.children, function(c) {
    return Hg(c, {
      onExited: s.bind(null, c),
      in: !0,
      appear: Sc(c, "appear", i),
      enter: Sc(c, "enter", i),
      exit: Sc(c, "exit", i)
    });
  });
}
function P3(i, s, c) {
  var p = VE(i.children), h = z3(s, p);
  return Object.keys(h).forEach(function(S) {
    var y = h[S];
    if (Bg(y)) {
      var C = S in s, x = S in p, k = s[S], _ = Bg(k) && !k.props.in;
      x && (!C || _) ? h[S] = Hg(y, {
        onExited: c.bind(null, y),
        in: !0,
        exit: Sc(y, "exit", i),
        enter: Sc(y, "enter", i)
      }) : !x && C && !_ ? h[S] = Hg(y, {
        in: !1
      }) : x && C && Bg(k) && (h[S] = Hg(y, {
        onExited: c.bind(null, y),
        in: k.props.in,
        exit: Sc(y, "exit", i),
        enter: Sc(y, "enter", i)
      }));
    }
  }), h;
}
var $3 = Object.values || function(i) {
  return Object.keys(i).map(function(s) {
    return i[s];
  });
}, j3 = {
  component: "div",
  childFactory: function(s) {
    return s;
  }
}, IE = /* @__PURE__ */ function(i) {
  RO(s, i);
  function s(p, h) {
    var S;
    S = i.call(this, p, h) || this;
    var y = S.handleExited.bind(L3(S));
    return S.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: y,
      firstRender: !0
    }, S;
  }
  var c = s.prototype;
  return c.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, c.componentWillUnmount = function() {
    this.mounted = !1;
  }, s.getDerivedStateFromProps = function(h, S) {
    var y = S.children, C = S.handleExited, x = S.firstRender;
    return {
      children: x ? U3(h, C) : P3(h, y, C),
      firstRender: !1
    };
  }, c.handleExited = function(h, S) {
    var y = VE(this.props.children);
    h.key in y || (h.props.onExited && h.props.onExited(S), this.mounted && this.setState(function(C) {
      var x = Xg({}, C.children);
      return delete x[h.key], {
        children: x
      };
    }));
  }, c.render = function() {
    var h = this.props, S = h.component, y = h.childFactory, C = wO(h, ["component", "childFactory"]), x = this.state.contextValue, k = $3(this.state.children).map(y);
    return delete C.appear, delete C.enter, delete C.exit, S === null ? /* @__PURE__ */ vi.createElement(e0.Provider, {
      value: x
    }, k) : /* @__PURE__ */ vi.createElement(e0.Provider, {
      value: x
    }, /* @__PURE__ */ vi.createElement(S, C, k));
  }, s;
}(vi.Component);
IE.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: w.any,
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
  children: w.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: w.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: w.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: w.bool,
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
  childFactory: w.func
} : {};
IE.defaultProps = j3;
function _O(i) {
  const {
    className: s,
    classes: c,
    pulsate: p = !1,
    rippleX: h,
    rippleY: S,
    rippleSize: y,
    in: C,
    onExited: x,
    timeout: k
  } = i, [_, M] = ve.useState(!1), A = mr(s, c.ripple, c.rippleVisible, p && c.ripplePulsate), $ = {
    width: y,
    height: y,
    top: -(y / 2) + S,
    left: -(y / 2) + h
  }, B = mr(c.child, _ && c.childLeaving, p && c.childPulsate);
  return !C && !_ && M(!0), ve.useEffect(() => {
    if (!C && x != null) {
      const L = setTimeout(x, k);
      return () => {
        clearTimeout(L);
      };
    }
  }, [x, C, k]), /* @__PURE__ */ Dt.jsx("span", {
    className: A,
    style: $,
    children: /* @__PURE__ */ Dt.jsx("span", {
      className: B
    })
  });
}
process.env.NODE_ENV !== "production" && (_O.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: w.object.isRequired,
  className: w.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: w.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: w.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: w.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: w.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: w.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: w.number,
  /**
   * exit delay
   */
  timeout: w.number.isRequired
});
const zi = Tc("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), EE = 550, F3 = 80, B3 = PE`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, H3 = PE`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, V3 = PE`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, I3 = Bi("span", {
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
}), Y3 = Bi(_O, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${zi.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${B3};
    animation-duration: ${EE}ms;
    animation-timing-function: ${({
  theme: i
}) => i.transitions.easing.easeInOut};
  }

  &.${zi.ripplePulsate} {
    animation-duration: ${({
  theme: i
}) => i.transitions.duration.shorter}ms;
  }

  & .${zi.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${zi.childLeaving} {
    opacity: 0;
    animation-name: ${H3};
    animation-duration: ${EE}ms;
    animation-timing-function: ${({
  theme: i
}) => i.transitions.easing.easeInOut};
  }

  & .${zi.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${V3};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: i
}) => i.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, MO = /* @__PURE__ */ ve.forwardRef(function(s, c) {
  const p = xc({
    props: s,
    name: "MuiTouchRipple"
  }), {
    center: h = !1,
    classes: S = {},
    className: y,
    ...C
  } = p, [x, k] = ve.useState([]), _ = ve.useRef(0), M = ve.useRef(null);
  ve.useEffect(() => {
    M.current && (M.current(), M.current = null);
  }, [x]);
  const A = ve.useRef(!1), $ = Md(), B = ve.useRef(null), L = ve.useRef(null), P = ve.useCallback((Y) => {
    const {
      pulsate: U,
      rippleX: re,
      rippleY: te,
      rippleSize: Ae,
      cb: Oe
    } = Y;
    k((O) => [...O, /* @__PURE__ */ Dt.jsx(Y3, {
      classes: {
        ripple: mr(S.ripple, zi.ripple),
        rippleVisible: mr(S.rippleVisible, zi.rippleVisible),
        ripplePulsate: mr(S.ripplePulsate, zi.ripplePulsate),
        child: mr(S.child, zi.child),
        childLeaving: mr(S.childLeaving, zi.childLeaving),
        childPulsate: mr(S.childPulsate, zi.childPulsate)
      },
      timeout: EE,
      pulsate: U,
      rippleX: re,
      rippleY: te,
      rippleSize: Ae
    }, _.current)]), _.current += 1, M.current = Oe;
  }, [S]), ee = ve.useCallback((Y = {}, U = {}, re = () => {
  }) => {
    const {
      pulsate: te = !1,
      center: Ae = h || U.pulsate,
      fakeElement: Oe = !1
      // For test purposes
    } = U;
    if ((Y == null ? void 0 : Y.type) === "mousedown" && A.current) {
      A.current = !1;
      return;
    }
    (Y == null ? void 0 : Y.type) === "touchstart" && (A.current = !0);
    const O = Oe ? null : L.current, ne = O ? O.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let be, ue, xe;
    if (Ae || Y === void 0 || Y.clientX === 0 && Y.clientY === 0 || !Y.clientX && !Y.touches)
      be = Math.round(ne.width / 2), ue = Math.round(ne.height / 2);
    else {
      const {
        clientX: Le,
        clientY: we
      } = Y.touches && Y.touches.length > 0 ? Y.touches[0] : Y;
      be = Math.round(Le - ne.left), ue = Math.round(we - ne.top);
    }
    if (Ae)
      xe = Math.sqrt((2 * ne.width ** 2 + ne.height ** 2) / 3), xe % 2 === 0 && (xe += 1);
    else {
      const Le = Math.max(Math.abs((O ? O.clientWidth : 0) - be), be) * 2 + 2, we = Math.max(Math.abs((O ? O.clientHeight : 0) - ue), ue) * 2 + 2;
      xe = Math.sqrt(Le ** 2 + we ** 2);
    }
    Y != null && Y.touches ? B.current === null && (B.current = () => {
      P({
        pulsate: te,
        rippleX: be,
        rippleY: ue,
        rippleSize: xe,
        cb: re
      });
    }, $.start(F3, () => {
      B.current && (B.current(), B.current = null);
    })) : P({
      pulsate: te,
      rippleX: be,
      rippleY: ue,
      rippleSize: xe,
      cb: re
    });
  }, [h, P, $]), le = ve.useCallback(() => {
    ee({}, {
      pulsate: !0
    });
  }, [ee]), q = ve.useCallback((Y, U) => {
    if ($.clear(), (Y == null ? void 0 : Y.type) === "touchend" && B.current) {
      B.current(), B.current = null, $.start(0, () => {
        q(Y, U);
      });
      return;
    }
    B.current = null, k((re) => re.length > 0 ? re.slice(1) : re), M.current = U;
  }, [$]);
  return ve.useImperativeHandle(c, () => ({
    pulsate: le,
    start: ee,
    stop: q
  }), [le, ee, q]), /* @__PURE__ */ Dt.jsx(I3, {
    className: mr(zi.root, S.root, y),
    ref: L,
    ...C,
    children: /* @__PURE__ */ Dt.jsx(IE, {
      component: null,
      exit: !0,
      children: x
    })
  });
});
process.env.NODE_ENV !== "production" && (MO.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: w.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: w.object,
  /**
   * @ignore
   */
  className: w.string
});
function W3(i) {
  return is("MuiButtonBase", i);
}
const G3 = Tc("MuiButtonBase", ["root", "disabled", "focusVisible"]), Q3 = (i) => {
  const {
    disabled: s,
    focusVisible: c,
    focusVisibleClassName: p,
    classes: h
  } = i, y = Fd({
    root: ["root", s && "disabled", c && "focusVisible"]
  }, W3, h);
  return c && p && (y.root += ` ${p}`), y;
}, q3 = Bi("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (i, s) => s.root
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
  [`&.${G3.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), YE = /* @__PURE__ */ ve.forwardRef(function(s, c) {
  const p = xc({
    props: s,
    name: "MuiButtonBase"
  }), {
    action: h,
    centerRipple: S = !1,
    children: y,
    className: C,
    component: x = "button",
    disabled: k = !1,
    disableRipple: _ = !1,
    disableTouchRipple: M = !1,
    focusRipple: A = !1,
    focusVisibleClassName: $,
    LinkComponent: B = "a",
    onBlur: L,
    onClick: P,
    onContextMenu: ee,
    onDragLeave: le,
    onFocus: q,
    onFocusVisible: Y,
    onKeyDown: U,
    onKeyUp: re,
    onMouseDown: te,
    onMouseLeave: Ae,
    onMouseUp: Oe,
    onTouchEnd: O,
    onTouchMove: ne,
    onTouchStart: be,
    tabIndex: ue = 0,
    TouchRippleProps: xe,
    touchRippleRef: Le,
    type: we,
    ...Fe
  } = p, se = ve.useRef(null), Ee = R3(), I = rs(Ee.ref, Le), [fe, Re] = ve.useState(!1);
  k && fe && Re(!1), ve.useImperativeHandle(h, () => ({
    focusVisible: () => {
      Re(!0), se.current.focus();
    }
  }), []);
  const Ie = Ee.shouldMount && !_ && !k;
  ve.useEffect(() => {
    fe && A && !_ && Ee.pulsate();
  }, [_, A, fe, Ee]);
  function De(Xe, Xn, Fn = M) {
    return _d((Kn) => (Xn && Xn(Kn), Fn || Ee[Xe](Kn), !0));
  }
  const Ze = De("start", te), Pe = De("stop", ee), Qe = De("stop", le), Ve = De("stop", Oe), it = De("stop", (Xe) => {
    fe && Xe.preventDefault(), Ae && Ae(Xe);
  }), st = De("start", be), Ct = De("stop", O), ye = De("stop", ne), Tt = De("stop", (Xe) => {
    Zg(Xe.target) || Re(!1), L && L(Xe);
  }, !1), ke = _d((Xe) => {
    se.current || (se.current = Xe.currentTarget), Zg(Xe.target) && (Re(!0), Y && Y(Xe)), q && q(Xe);
  }), Mt = () => {
    const Xe = se.current;
    return x && x !== "button" && !(Xe.tagName === "A" && Xe.href);
  }, Ft = _d((Xe) => {
    A && !Xe.repeat && fe && Xe.key === " " && Ee.stop(Xe, () => {
      Ee.start(Xe);
    }), Xe.target === Xe.currentTarget && Mt() && Xe.key === " " && Xe.preventDefault(), U && U(Xe), Xe.target === Xe.currentTarget && Mt() && Xe.key === "Enter" && !k && (Xe.preventDefault(), P && P(Xe));
  }), It = _d((Xe) => {
    A && Xe.key === " " && fe && !Xe.defaultPrevented && Ee.stop(Xe, () => {
      Ee.pulsate(Xe);
    }), re && re(Xe), P && Xe.target === Xe.currentTarget && Mt() && Xe.key === " " && !Xe.defaultPrevented && P(Xe);
  });
  let yn = x;
  yn === "button" && (Fe.href || Fe.to) && (yn = B);
  const Tn = {};
  yn === "button" ? (Tn.type = we === void 0 ? "button" : we, Tn.disabled = k) : (!Fe.href && !Fe.to && (Tn.role = "button"), k && (Tn["aria-disabled"] = k));
  const kn = rs(c, se), Ln = {
    ...p,
    centerRipple: S,
    component: x,
    disabled: k,
    disableRipple: _,
    disableTouchRipple: M,
    focusRipple: A,
    tabIndex: ue,
    focusVisible: fe
  }, qn = Q3(Ln);
  return /* @__PURE__ */ Dt.jsxs(q3, {
    as: yn,
    className: mr(qn.root, C),
    ownerState: Ln,
    onBlur: Tt,
    onClick: P,
    onContextMenu: Pe,
    onFocus: ke,
    onKeyDown: Ft,
    onKeyUp: It,
    onMouseDown: Ze,
    onMouseLeave: it,
    onMouseUp: Ve,
    onDragLeave: Qe,
    onTouchEnd: Ct,
    onTouchMove: ye,
    onTouchStart: st,
    ref: kn,
    tabIndex: k ? -1 : ue,
    type: we,
    ...Tn,
    ...Fe,
    children: [y, Ie ? /* @__PURE__ */ Dt.jsx(MO, {
      ref: I,
      center: S,
      ...xe
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (YE.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: FE,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: w.bool,
  /**
   * The content of the component.
   */
  children: w.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: w.object,
  /**
   * @ignore
   */
  className: w.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Tz,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: w.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: w.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: w.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: w.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: w.string,
  /**
   * @ignore
   */
  href: w.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: w.elementType,
  /**
   * @ignore
   */
  onBlur: w.func,
  /**
   * @ignore
   */
  onClick: w.func,
  /**
   * @ignore
   */
  onContextMenu: w.func,
  /**
   * @ignore
   */
  onDragLeave: w.func,
  /**
   * @ignore
   */
  onFocus: w.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: w.func,
  /**
   * @ignore
   */
  onKeyDown: w.func,
  /**
   * @ignore
   */
  onKeyUp: w.func,
  /**
   * @ignore
   */
  onMouseDown: w.func,
  /**
   * @ignore
   */
  onMouseLeave: w.func,
  /**
   * @ignore
   */
  onMouseUp: w.func,
  /**
   * @ignore
   */
  onTouchEnd: w.func,
  /**
   * @ignore
   */
  onTouchMove: w.func,
  /**
   * @ignore
   */
  onTouchStart: w.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: w.oneOfType([w.arrayOf(w.oneOfType([w.func, w.object, w.bool])), w.func, w.object]),
  /**
   * @default 0
   */
  tabIndex: w.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: w.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: w.oneOfType([w.func, w.shape({
    current: w.shape({
      pulsate: w.func.isRequired,
      start: w.func.isRequired,
      stop: w.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: w.oneOfType([w.oneOf(["button", "reset", "submit"]), w.string])
});
function X3(i) {
  return typeof i.main == "string";
}
function K3(i, s = []) {
  if (!X3(i))
    return !1;
  for (const c of s)
    if (!i.hasOwnProperty(c) || typeof i[c] != "string")
      return !1;
  return !0;
}
function CE(i = []) {
  return ([, s]) => s && K3(s, i);
}
function Z3(i) {
  return is("MuiButton", i);
}
const kd = Tc("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), NO = /* @__PURE__ */ ve.createContext({});
process.env.NODE_ENV !== "production" && (NO.displayName = "ButtonGroupContext");
const AO = /* @__PURE__ */ ve.createContext(void 0);
process.env.NODE_ENV !== "production" && (AO.displayName = "ButtonGroupButtonContext");
const J3 = (i) => {
  const {
    color: s,
    disableElevation: c,
    fullWidth: p,
    size: h,
    variant: S,
    classes: y
  } = i, C = {
    root: ["root", S, `${S}${Cn(s)}`, `size${Cn(h)}`, `${S}Size${Cn(h)}`, `color${Cn(s)}`, c && "disableElevation", p && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${Cn(h)}`],
    endIcon: ["icon", "endIcon", `iconSize${Cn(h)}`]
  }, x = Fd(C, Z3, y);
  return {
    ...y,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...x
  };
}, LO = [{
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
}], eU = Bi(YE, {
  shouldForwardProp: (i) => WR(i) || i === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (i, s) => {
    const {
      ownerState: c
    } = i;
    return [s.root, s[c.variant], s[`${c.variant}${Cn(c.color)}`], s[`size${Cn(c.size)}`], s[`${c.variant}Size${Cn(c.size)}`], c.color === "inherit" && s.colorInherit, c.disableElevation && s.disableElevation, c.fullWidth && s.fullWidth];
  }
})(Ec(({
  theme: i
}) => {
  const s = i.palette.mode === "light" ? i.palette.grey[300] : i.palette.grey[800], c = i.palette.mode === "light" ? i.palette.grey.A100 : i.palette.grey[700];
  return {
    ...i.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (i.vars || i).shape.borderRadius,
    transition: i.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: i.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${kd.disabled}`]: {
      color: (i.vars || i).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: "var(--variant-containedColor)",
        backgroundColor: "var(--variant-containedBg)",
        boxShadow: (i.vars || i).shadows[2],
        "&:hover": {
          boxShadow: (i.vars || i).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (i.vars || i).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (i.vars || i).shadows[8]
        },
        [`&.${kd.focusVisible}`]: {
          boxShadow: (i.vars || i).shadows[6]
        },
        [`&.${kd.disabled}`]: {
          color: (i.vars || i).palette.action.disabled,
          boxShadow: (i.vars || i).shadows[0],
          backgroundColor: (i.vars || i).palette.action.disabledBackground
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
        [`&.${kd.disabled}`]: {
          border: `1px solid ${(i.vars || i).palette.action.disabledBackground}`
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
    }, ...Object.entries(i.palette).filter(CE()).map(([p]) => ({
      props: {
        color: p
      },
      style: {
        "--variant-textColor": (i.vars || i).palette[p].main,
        "--variant-outlinedColor": (i.vars || i).palette[p].main,
        "--variant-outlinedBorder": i.vars ? `rgba(${i.vars.palette[p].mainChannel} / 0.5)` : Zo(i.palette[p].main, 0.5),
        "--variant-containedColor": (i.vars || i).palette[p].contrastText,
        "--variant-containedBg": (i.vars || i).palette[p].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (i.vars || i).palette[p].dark,
            "--variant-textBg": i.vars ? `rgba(${i.vars.palette[p].mainChannel} / ${i.vars.palette.action.hoverOpacity})` : Zo(i.palette[p].main, i.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (i.vars || i).palette[p].main,
            "--variant-outlinedBg": i.vars ? `rgba(${i.vars.palette[p].mainChannel} / ${i.vars.palette.action.hoverOpacity})` : Zo(i.palette[p].main, i.palette.action.hoverOpacity)
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
        "--variant-containedBg": i.vars ? i.vars.palette.Button.inheritContainedBg : s,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": i.vars ? i.vars.palette.Button.inheritContainedHoverBg : c,
            "--variant-textBg": i.vars ? `rgba(${i.vars.palette.text.primaryChannel} / ${i.vars.palette.action.hoverOpacity})` : Zo(i.palette.text.primary, i.palette.action.hoverOpacity),
            "--variant-outlinedBg": i.vars ? `rgba(${i.vars.palette.text.primaryChannel} / ${i.vars.palette.action.hoverOpacity})` : Zo(i.palette.text.primary, i.palette.action.hoverOpacity)
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
        fontSize: i.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: i.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: i.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: i.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: i.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: i.typography.pxToRem(15)
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
        [`&.${kd.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${kd.disabled}`]: {
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
})), tU = Bi("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (i, s) => {
    const {
      ownerState: c
    } = i;
    return [s.startIcon, s[`iconSize${Cn(c.size)}`]];
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
  }, ...LO]
}), nU = Bi("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (i, s) => {
    const {
      ownerState: c
    } = i;
    return [s.endIcon, s[`iconSize${Cn(c.size)}`]];
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
  }, ...LO]
}), WE = /* @__PURE__ */ ve.forwardRef(function(s, c) {
  const p = ve.useContext(NO), h = ve.useContext(AO), S = Qg(p, s), y = xc({
    props: S,
    name: "MuiButton"
  }), {
    children: C,
    color: x = "primary",
    component: k = "button",
    className: _,
    disabled: M = !1,
    disableElevation: A = !1,
    disableFocusRipple: $ = !1,
    endIcon: B,
    focusVisibleClassName: L,
    fullWidth: P = !1,
    size: ee = "medium",
    startIcon: le,
    type: q,
    variant: Y = "text",
    ...U
  } = y, re = {
    ...y,
    color: x,
    component: k,
    disabled: M,
    disableElevation: A,
    disableFocusRipple: $,
    fullWidth: P,
    size: ee,
    type: q,
    variant: Y
  }, te = J3(re), Ae = le && /* @__PURE__ */ Dt.jsx(tU, {
    className: te.startIcon,
    ownerState: re,
    children: le
  }), Oe = B && /* @__PURE__ */ Dt.jsx(nU, {
    className: te.endIcon,
    ownerState: re,
    children: B
  }), O = h || "";
  return /* @__PURE__ */ Dt.jsxs(eU, {
    ownerState: re,
    className: mr(p.className, te.root, _, O),
    component: k,
    disabled: M,
    focusRipple: !$,
    focusVisibleClassName: mr(te.focusVisible, L),
    ref: c,
    type: q,
    ...U,
    classes: te,
    children: [Ae, C, Oe]
  });
});
process.env.NODE_ENV !== "production" && (WE.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: w.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: w.object,
  /**
   * @ignore
   */
  className: w.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: w.oneOfType([w.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), w.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: w.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: w.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: w.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: w.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: w.bool,
  /**
   * Element placed after the children.
   */
  endIcon: w.node,
  /**
   * @ignore
   */
  focusVisibleClassName: w.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: w.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: w.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: w.oneOfType([w.oneOf(["small", "medium", "large"]), w.string]),
  /**
   * Element placed before the children.
   */
  startIcon: w.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: w.oneOfType([w.arrayOf(w.oneOfType([w.func, w.object, w.bool])), w.func, w.object]),
  /**
   * @ignore
   */
  type: w.oneOfType([w.oneOf(["button", "reset", "submit"]), w.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: w.oneOfType([w.oneOf(["contained", "outlined", "text"]), w.string])
});
function F5(i) {
  const { bgcolor: s, text: c, txtcolor: p, disabled: h, onClick: S, size: y } = i;
  return (
    //Uso el Button de la librería MUI y lo personalizo con las props que pasan a mi componente.
    /* @__PURE__ */ Dt.jsx(
      WE,
      {
        type: "button",
        onClick: S,
        disabled: h,
        size: y,
        sx: { backgroundColor: s, color: p },
        children: c
      }
    )
  );
}
function B5(i) {
  const { bgColor: s, text: c, txtColor: p, borderColor: h, width: S, disabled: y, onClick: C, size: x, hover: k, bgHover: _ } = i, [M, A] = jN(!1);
  return (
    //Uso el Button de la librería MUI y lo personalizo con las props que pasan a mi componente.
    /* @__PURE__ */ Dt.jsx(
      WE,
      {
        type: "button",
        onClick: C,
        disabled: y,
        size: x,
        onMouseEnter: () => A(!0),
        onMouseLeave: () => A(!1),
        sx: {
          backgroundColor: M && _ ? _ : s,
          color: M && k ? k : p,
          borderColor: h,
          width: S,
          borderWidth: 1,
          borderStyle: "solid",
          transition: "background-color 0.4s, color 0.4s"
        },
        children: c
      }
    )
  );
}
function rU(i) {
  return is("MuiSvgIcon", i);
}
Tc("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const aU = (i) => {
  const {
    color: s,
    fontSize: c,
    classes: p
  } = i, h = {
    root: ["root", s !== "inherit" && `color${Cn(s)}`, `fontSize${Cn(c)}`]
  };
  return Fd(h, rU, p);
}, iU = Bi("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (i, s) => {
    const {
      ownerState: c
    } = i;
    return [s.root, c.color !== "inherit" && s[`color${Cn(c.color)}`], s[`fontSize${Cn(c.fontSize)}`]];
  }
})(Ec(({
  theme: i
}) => {
  var s, c, p, h, S, y, C, x, k, _, M, A, $, B;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (h = (s = i.transitions) == null ? void 0 : s.create) == null ? void 0 : h.call(s, "fill", {
      duration: (p = (c = (i.vars ?? i).transitions) == null ? void 0 : c.duration) == null ? void 0 : p.shorter
    }),
    variants: [
      {
        props: (L) => !L.hasSvgAsChild,
        style: {
          // the <svg> will define the property that has `currentColor`
          // for example heroicons uses fill="none" and stroke="currentColor"
          fill: "currentColor"
        }
      },
      {
        props: {
          fontSize: "inherit"
        },
        style: {
          fontSize: "inherit"
        }
      },
      {
        props: {
          fontSize: "small"
        },
        style: {
          fontSize: ((y = (S = i.typography) == null ? void 0 : S.pxToRem) == null ? void 0 : y.call(S, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((x = (C = i.typography) == null ? void 0 : C.pxToRem) == null ? void 0 : x.call(C, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((_ = (k = i.typography) == null ? void 0 : k.pxToRem) == null ? void 0 : _.call(k, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((i.vars ?? i).palette).filter(([, L]) => L && L.main).map(([L]) => {
        var P, ee;
        return {
          props: {
            color: L
          },
          style: {
            color: (ee = (P = (i.vars ?? i).palette) == null ? void 0 : P[L]) == null ? void 0 : ee.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (A = (M = (i.vars ?? i).palette) == null ? void 0 : M.action) == null ? void 0 : A.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (B = ($ = (i.vars ?? i).palette) == null ? void 0 : $.action) == null ? void 0 : B.disabled
        }
      },
      {
        props: {
          color: "inherit"
        },
        style: {
          color: void 0
        }
      }
    ]
  };
})), Sh = /* @__PURE__ */ ve.forwardRef(function(s, c) {
  const p = xc({
    props: s,
    name: "MuiSvgIcon"
  }), {
    children: h,
    className: S,
    color: y = "inherit",
    component: C = "svg",
    fontSize: x = "medium",
    htmlColor: k,
    inheritViewBox: _ = !1,
    titleAccess: M,
    viewBox: A = "0 0 24 24",
    ...$
  } = p, B = /* @__PURE__ */ ve.isValidElement(h) && h.type === "svg", L = {
    ...p,
    color: y,
    component: C,
    fontSize: x,
    instanceFontSize: s.fontSize,
    inheritViewBox: _,
    viewBox: A,
    hasSvgAsChild: B
  }, P = {};
  _ || (P.viewBox = A);
  const ee = aU(L);
  return /* @__PURE__ */ Dt.jsxs(iU, {
    as: C,
    className: mr(ee.root, S),
    focusable: "false",
    color: k,
    "aria-hidden": M ? void 0 : !0,
    role: M ? "img" : void 0,
    ref: c,
    ...P,
    ...$,
    ...B && h.props,
    ownerState: L,
    children: [B ? h.props.children : h, M ? /* @__PURE__ */ Dt.jsx("title", {
      children: M
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (Sh.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: w.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: w.object,
  /**
   * @ignore
   */
  className: w.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: w.oneOfType([w.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), w.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: w.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: w.oneOfType([w.oneOf(["inherit", "large", "medium", "small"]), w.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: w.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: w.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: w.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: w.oneOfType([w.arrayOf(w.oneOfType([w.func, w.object, w.bool])), w.func, w.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: w.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: w.string
});
Sh && (Sh.muiName = "SvgIcon");
function GE(i, s) {
  function c(p, h) {
    return /* @__PURE__ */ Dt.jsx(Sh, {
      "data-testid": `${s}Icon`,
      ref: h,
      ...p,
      children: i
    });
  }
  return process.env.NODE_ENV !== "production" && (c.displayName = `${s}Icon`), c.muiName = Sh.muiName, /* @__PURE__ */ ve.memo(/* @__PURE__ */ ve.forwardRef(c));
}
const oU = (i) => i.scrollTop;
function MR(i, s) {
  const {
    timeout: c,
    easing: p,
    style: h = {}
  } = i;
  return {
    duration: h.transitionDuration ?? (typeof c == "number" ? c : c[s.mode] || 0),
    easing: h.transitionTimingFunction ?? (typeof p == "object" ? p[s.mode] : p),
    delay: h.transitionDelay
  };
}
function lU(i) {
  return is("MuiIconButton", i);
}
const uU = Tc("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), sU = (i) => {
  const {
    classes: s,
    disabled: c,
    color: p,
    edge: h,
    size: S
  } = i, y = {
    root: ["root", c && "disabled", p !== "default" && `color${Cn(p)}`, h && `edge${Cn(h)}`, `size${Cn(S)}`]
  };
  return Fd(y, lU, s);
}, cU = Bi(YE, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (i, s) => {
    const {
      ownerState: c
    } = i;
    return [s.root, c.color !== "default" && s[`color${Cn(c.color)}`], c.edge && s[`edge${Cn(c.edge)}`], s[`size${Cn(c.size)}`]];
  }
})(Ec(({
  theme: i
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: i.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (i.vars || i).palette.action.active,
  transition: i.transitions.create("background-color", {
    duration: i.transitions.duration.shortest
  }),
  variants: [{
    props: (s) => !s.disableRipple,
    style: {
      "--IconButton-hoverBg": i.vars ? `rgba(${i.vars.palette.action.activeChannel} / ${i.vars.palette.action.hoverOpacity})` : Zo(i.palette.action.active, i.palette.action.hoverOpacity),
      "&:hover": {
        backgroundColor: "var(--IconButton-hoverBg)",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), Ec(({
  theme: i
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(i.palette).filter(CE()).map(([s]) => ({
    props: {
      color: s
    },
    style: {
      color: (i.vars || i).palette[s].main
    }
  })), ...Object.entries(i.palette).filter(CE()).map(([s]) => ({
    props: {
      color: s
    },
    style: {
      "--IconButton-hoverBg": i.vars ? `rgba(${(i.vars || i).palette[s].mainChannel} / ${i.vars.palette.action.hoverOpacity})` : Zo((i.vars || i).palette[s].main, i.palette.action.hoverOpacity)
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: i.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: i.typography.pxToRem(28)
    }
  }],
  [`&.${uU.disabled}`]: {
    backgroundColor: "transparent",
    color: (i.vars || i).palette.action.disabled
  }
}))), S0 = /* @__PURE__ */ ve.forwardRef(function(s, c) {
  const p = xc({
    props: s,
    name: "MuiIconButton"
  }), {
    edge: h = !1,
    children: S,
    className: y,
    color: C = "default",
    disabled: x = !1,
    disableFocusRipple: k = !1,
    size: _ = "medium",
    ...M
  } = p, A = {
    ...p,
    edge: h,
    color: C,
    disabled: x,
    disableFocusRipple: k,
    size: _
  }, $ = sU(A);
  return /* @__PURE__ */ Dt.jsx(cU, {
    className: mr($.root, y),
    centerRipple: !0,
    focusRipple: !k,
    disabled: x,
    ref: c,
    ...M,
    ownerState: A,
    children: S
  });
});
process.env.NODE_ENV !== "production" && (S0.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: Rh(w.node, (i) => ve.Children.toArray(i.children).some((c) => /* @__PURE__ */ ve.isValidElement(c) && c.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: w.object,
  /**
   * @ignore
   */
  className: w.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: w.oneOfType([w.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), w.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: w.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: w.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: w.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: w.oneOf(["end", "start", !1]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: w.oneOfType([w.oneOf(["small", "medium", "large"]), w.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: w.oneOfType([w.arrayOf(w.oneOfType([w.func, w.object, w.bool])), w.func, w.object])
});
var Ja = "top", $i = "bottom", ji = "right", ei = "left", QE = "auto", Oh = [Ja, $i, ji, ei], Ud = "start", bh = "end", fU = "clippingParents", zO = "viewport", ah = "popper", dU = "reference", NR = /* @__PURE__ */ Oh.reduce(function(i, s) {
  return i.concat([s + "-" + Ud, s + "-" + bh]);
}, []), UO = /* @__PURE__ */ [].concat(Oh, [QE]).reduce(function(i, s) {
  return i.concat([s, s + "-" + Ud, s + "-" + bh]);
}, []), pU = "beforeRead", vU = "read", hU = "afterRead", mU = "beforeMain", yU = "main", gU = "afterMain", SU = "beforeWrite", bU = "write", EU = "afterWrite", CU = [pU, vU, hU, mU, yU, gU, SU, bU, EU];
function tl(i) {
  return i ? (i.nodeName || "").toLowerCase() : null;
}
function yi(i) {
  if (i == null)
    return window;
  if (i.toString() !== "[object Window]") {
    var s = i.ownerDocument;
    return s && s.defaultView || window;
  }
  return i;
}
function Cc(i) {
  var s = yi(i).Element;
  return i instanceof s || i instanceof Element;
}
function Pi(i) {
  var s = yi(i).HTMLElement;
  return i instanceof s || i instanceof HTMLElement;
}
function qE(i) {
  if (typeof ShadowRoot > "u")
    return !1;
  var s = yi(i).ShadowRoot;
  return i instanceof s || i instanceof ShadowRoot;
}
function TU(i) {
  var s = i.state;
  Object.keys(s.elements).forEach(function(c) {
    var p = s.styles[c] || {}, h = s.attributes[c] || {}, S = s.elements[c];
    !Pi(S) || !tl(S) || (Object.assign(S.style, p), Object.keys(h).forEach(function(y) {
      var C = h[y];
      C === !1 ? S.removeAttribute(y) : S.setAttribute(y, C === !0 ? "" : C);
    }));
  });
}
function xU(i) {
  var s = i.state, c = {
    popper: {
      position: s.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(s.elements.popper.style, c.popper), s.styles = c, s.elements.arrow && Object.assign(s.elements.arrow.style, c.arrow), function() {
    Object.keys(s.elements).forEach(function(p) {
      var h = s.elements[p], S = s.attributes[p] || {}, y = Object.keys(s.styles.hasOwnProperty(p) ? s.styles[p] : c[p]), C = y.reduce(function(x, k) {
        return x[k] = "", x;
      }, {});
      !Pi(h) || !tl(h) || (Object.assign(h.style, C), Object.keys(S).forEach(function(x) {
        h.removeAttribute(x);
      }));
    });
  };
}
const wU = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: TU,
  effect: xU,
  requires: ["computeStyles"]
};
function el(i) {
  return i.split("-")[0];
}
var bc = Math.max, t0 = Math.min, Pd = Math.round;
function TE() {
  var i = navigator.userAgentData;
  return i != null && i.brands && Array.isArray(i.brands) ? i.brands.map(function(s) {
    return s.brand + "/" + s.version;
  }).join(" ") : navigator.userAgent;
}
function PO() {
  return !/^((?!chrome|android).)*safari/i.test(TE());
}
function $d(i, s, c) {
  s === void 0 && (s = !1), c === void 0 && (c = !1);
  var p = i.getBoundingClientRect(), h = 1, S = 1;
  s && Pi(i) && (h = i.offsetWidth > 0 && Pd(p.width) / i.offsetWidth || 1, S = i.offsetHeight > 0 && Pd(p.height) / i.offsetHeight || 1);
  var y = Cc(i) ? yi(i) : window, C = y.visualViewport, x = !PO() && c, k = (p.left + (x && C ? C.offsetLeft : 0)) / h, _ = (p.top + (x && C ? C.offsetTop : 0)) / S, M = p.width / h, A = p.height / S;
  return {
    width: M,
    height: A,
    top: _,
    right: k + M,
    bottom: _ + A,
    left: k,
    x: k,
    y: _
  };
}
function XE(i) {
  var s = $d(i), c = i.offsetWidth, p = i.offsetHeight;
  return Math.abs(s.width - c) <= 1 && (c = s.width), Math.abs(s.height - p) <= 1 && (p = s.height), {
    x: i.offsetLeft,
    y: i.offsetTop,
    width: c,
    height: p
  };
}
function $O(i, s) {
  var c = s.getRootNode && s.getRootNode();
  if (i.contains(s))
    return !0;
  if (c && qE(c)) {
    var p = s;
    do {
      if (p && i.isSameNode(p))
        return !0;
      p = p.parentNode || p.host;
    } while (p);
  }
  return !1;
}
function Wl(i) {
  return yi(i).getComputedStyle(i);
}
function RU(i) {
  return ["table", "td", "th"].indexOf(tl(i)) >= 0;
}
function os(i) {
  return ((Cc(i) ? i.ownerDocument : (
    // $FlowFixMe[prop-missing]
    i.document
  )) || window.document).documentElement;
}
function b0(i) {
  return tl(i) === "html" ? i : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    i.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    i.parentNode || // DOM Element detected
    (qE(i) ? i.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    os(i)
  );
}
function AR(i) {
  return !Pi(i) || // https://github.com/popperjs/popper-core/issues/837
  Wl(i).position === "fixed" ? null : i.offsetParent;
}
function OU(i) {
  var s = /firefox/i.test(TE()), c = /Trident/i.test(TE());
  if (c && Pi(i)) {
    var p = Wl(i);
    if (p.position === "fixed")
      return null;
  }
  var h = b0(i);
  for (qE(h) && (h = h.host); Pi(h) && ["html", "body"].indexOf(tl(h)) < 0; ) {
    var S = Wl(h);
    if (S.transform !== "none" || S.perspective !== "none" || S.contain === "paint" || ["transform", "perspective"].indexOf(S.willChange) !== -1 || s && S.willChange === "filter" || s && S.filter && S.filter !== "none")
      return h;
    h = h.parentNode;
  }
  return null;
}
function kh(i) {
  for (var s = yi(i), c = AR(i); c && RU(c) && Wl(c).position === "static"; )
    c = AR(c);
  return c && (tl(c) === "html" || tl(c) === "body" && Wl(c).position === "static") ? s : c || OU(i) || s;
}
function KE(i) {
  return ["top", "bottom"].indexOf(i) >= 0 ? "x" : "y";
}
function fh(i, s, c) {
  return bc(i, t0(s, c));
}
function kU(i, s, c) {
  var p = fh(i, s, c);
  return p > c ? c : p;
}
function jO() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function FO(i) {
  return Object.assign({}, jO(), i);
}
function BO(i, s) {
  return s.reduce(function(c, p) {
    return c[p] = i, c;
  }, {});
}
var DU = function(s, c) {
  return s = typeof s == "function" ? s(Object.assign({}, c.rects, {
    placement: c.placement
  })) : s, FO(typeof s != "number" ? s : BO(s, Oh));
};
function _U(i) {
  var s, c = i.state, p = i.name, h = i.options, S = c.elements.arrow, y = c.modifiersData.popperOffsets, C = el(c.placement), x = KE(C), k = [ei, ji].indexOf(C) >= 0, _ = k ? "height" : "width";
  if (!(!S || !y)) {
    var M = DU(h.padding, c), A = XE(S), $ = x === "y" ? Ja : ei, B = x === "y" ? $i : ji, L = c.rects.reference[_] + c.rects.reference[x] - y[x] - c.rects.popper[_], P = y[x] - c.rects.reference[x], ee = kh(S), le = ee ? x === "y" ? ee.clientHeight || 0 : ee.clientWidth || 0 : 0, q = L / 2 - P / 2, Y = M[$], U = le - A[_] - M[B], re = le / 2 - A[_] / 2 + q, te = fh(Y, re, U), Ae = x;
    c.modifiersData[p] = (s = {}, s[Ae] = te, s.centerOffset = te - re, s);
  }
}
function MU(i) {
  var s = i.state, c = i.options, p = c.element, h = p === void 0 ? "[data-popper-arrow]" : p;
  h != null && (typeof h == "string" && (h = s.elements.popper.querySelector(h), !h) || $O(s.elements.popper, h) && (s.elements.arrow = h));
}
const NU = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: _U,
  effect: MU,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function jd(i) {
  return i.split("-")[1];
}
var AU = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function LU(i, s) {
  var c = i.x, p = i.y, h = s.devicePixelRatio || 1;
  return {
    x: Pd(c * h) / h || 0,
    y: Pd(p * h) / h || 0
  };
}
function LR(i) {
  var s, c = i.popper, p = i.popperRect, h = i.placement, S = i.variation, y = i.offsets, C = i.position, x = i.gpuAcceleration, k = i.adaptive, _ = i.roundOffsets, M = i.isFixed, A = y.x, $ = A === void 0 ? 0 : A, B = y.y, L = B === void 0 ? 0 : B, P = typeof _ == "function" ? _({
    x: $,
    y: L
  }) : {
    x: $,
    y: L
  };
  $ = P.x, L = P.y;
  var ee = y.hasOwnProperty("x"), le = y.hasOwnProperty("y"), q = ei, Y = Ja, U = window;
  if (k) {
    var re = kh(c), te = "clientHeight", Ae = "clientWidth";
    if (re === yi(c) && (re = os(c), Wl(re).position !== "static" && C === "absolute" && (te = "scrollHeight", Ae = "scrollWidth")), re = re, h === Ja || (h === ei || h === ji) && S === bh) {
      Y = $i;
      var Oe = M && re === U && U.visualViewport ? U.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        re[te]
      );
      L -= Oe - p.height, L *= x ? 1 : -1;
    }
    if (h === ei || (h === Ja || h === $i) && S === bh) {
      q = ji;
      var O = M && re === U && U.visualViewport ? U.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        re[Ae]
      );
      $ -= O - p.width, $ *= x ? 1 : -1;
    }
  }
  var ne = Object.assign({
    position: C
  }, k && AU), be = _ === !0 ? LU({
    x: $,
    y: L
  }, yi(c)) : {
    x: $,
    y: L
  };
  if ($ = be.x, L = be.y, x) {
    var ue;
    return Object.assign({}, ne, (ue = {}, ue[Y] = le ? "0" : "", ue[q] = ee ? "0" : "", ue.transform = (U.devicePixelRatio || 1) <= 1 ? "translate(" + $ + "px, " + L + "px)" : "translate3d(" + $ + "px, " + L + "px, 0)", ue));
  }
  return Object.assign({}, ne, (s = {}, s[Y] = le ? L + "px" : "", s[q] = ee ? $ + "px" : "", s.transform = "", s));
}
function zU(i) {
  var s = i.state, c = i.options, p = c.gpuAcceleration, h = p === void 0 ? !0 : p, S = c.adaptive, y = S === void 0 ? !0 : S, C = c.roundOffsets, x = C === void 0 ? !0 : C, k = {
    placement: el(s.placement),
    variation: jd(s.placement),
    popper: s.elements.popper,
    popperRect: s.rects.popper,
    gpuAcceleration: h,
    isFixed: s.options.strategy === "fixed"
  };
  s.modifiersData.popperOffsets != null && (s.styles.popper = Object.assign({}, s.styles.popper, LR(Object.assign({}, k, {
    offsets: s.modifiersData.popperOffsets,
    position: s.options.strategy,
    adaptive: y,
    roundOffsets: x
  })))), s.modifiersData.arrow != null && (s.styles.arrow = Object.assign({}, s.styles.arrow, LR(Object.assign({}, k, {
    offsets: s.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: x
  })))), s.attributes.popper = Object.assign({}, s.attributes.popper, {
    "data-popper-placement": s.placement
  });
}
const UU = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: zU,
  data: {}
};
var $g = {
  passive: !0
};
function PU(i) {
  var s = i.state, c = i.instance, p = i.options, h = p.scroll, S = h === void 0 ? !0 : h, y = p.resize, C = y === void 0 ? !0 : y, x = yi(s.elements.popper), k = [].concat(s.scrollParents.reference, s.scrollParents.popper);
  return S && k.forEach(function(_) {
    _.addEventListener("scroll", c.update, $g);
  }), C && x.addEventListener("resize", c.update, $g), function() {
    S && k.forEach(function(_) {
      _.removeEventListener("scroll", c.update, $g);
    }), C && x.removeEventListener("resize", c.update, $g);
  };
}
const $U = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: PU,
  data: {}
};
var jU = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Gg(i) {
  return i.replace(/left|right|bottom|top/g, function(s) {
    return jU[s];
  });
}
var FU = {
  start: "end",
  end: "start"
};
function zR(i) {
  return i.replace(/start|end/g, function(s) {
    return FU[s];
  });
}
function ZE(i) {
  var s = yi(i), c = s.pageXOffset, p = s.pageYOffset;
  return {
    scrollLeft: c,
    scrollTop: p
  };
}
function JE(i) {
  return $d(os(i)).left + ZE(i).scrollLeft;
}
function BU(i, s) {
  var c = yi(i), p = os(i), h = c.visualViewport, S = p.clientWidth, y = p.clientHeight, C = 0, x = 0;
  if (h) {
    S = h.width, y = h.height;
    var k = PO();
    (k || !k && s === "fixed") && (C = h.offsetLeft, x = h.offsetTop);
  }
  return {
    width: S,
    height: y,
    x: C + JE(i),
    y: x
  };
}
function HU(i) {
  var s, c = os(i), p = ZE(i), h = (s = i.ownerDocument) == null ? void 0 : s.body, S = bc(c.scrollWidth, c.clientWidth, h ? h.scrollWidth : 0, h ? h.clientWidth : 0), y = bc(c.scrollHeight, c.clientHeight, h ? h.scrollHeight : 0, h ? h.clientHeight : 0), C = -p.scrollLeft + JE(i), x = -p.scrollTop;
  return Wl(h || c).direction === "rtl" && (C += bc(c.clientWidth, h ? h.clientWidth : 0) - S), {
    width: S,
    height: y,
    x: C,
    y: x
  };
}
function eC(i) {
  var s = Wl(i), c = s.overflow, p = s.overflowX, h = s.overflowY;
  return /auto|scroll|overlay|hidden/.test(c + h + p);
}
function HO(i) {
  return ["html", "body", "#document"].indexOf(tl(i)) >= 0 ? i.ownerDocument.body : Pi(i) && eC(i) ? i : HO(b0(i));
}
function dh(i, s) {
  var c;
  s === void 0 && (s = []);
  var p = HO(i), h = p === ((c = i.ownerDocument) == null ? void 0 : c.body), S = yi(p), y = h ? [S].concat(S.visualViewport || [], eC(p) ? p : []) : p, C = s.concat(y);
  return h ? C : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    C.concat(dh(b0(y)))
  );
}
function xE(i) {
  return Object.assign({}, i, {
    left: i.x,
    top: i.y,
    right: i.x + i.width,
    bottom: i.y + i.height
  });
}
function VU(i, s) {
  var c = $d(i, !1, s === "fixed");
  return c.top = c.top + i.clientTop, c.left = c.left + i.clientLeft, c.bottom = c.top + i.clientHeight, c.right = c.left + i.clientWidth, c.width = i.clientWidth, c.height = i.clientHeight, c.x = c.left, c.y = c.top, c;
}
function UR(i, s, c) {
  return s === zO ? xE(BU(i, c)) : Cc(s) ? VU(s, c) : xE(HU(os(i)));
}
function IU(i) {
  var s = dh(b0(i)), c = ["absolute", "fixed"].indexOf(Wl(i).position) >= 0, p = c && Pi(i) ? kh(i) : i;
  return Cc(p) ? s.filter(function(h) {
    return Cc(h) && $O(h, p) && tl(h) !== "body";
  }) : [];
}
function YU(i, s, c, p) {
  var h = s === "clippingParents" ? IU(i) : [].concat(s), S = [].concat(h, [c]), y = S[0], C = S.reduce(function(x, k) {
    var _ = UR(i, k, p);
    return x.top = bc(_.top, x.top), x.right = t0(_.right, x.right), x.bottom = t0(_.bottom, x.bottom), x.left = bc(_.left, x.left), x;
  }, UR(i, y, p));
  return C.width = C.right - C.left, C.height = C.bottom - C.top, C.x = C.left, C.y = C.top, C;
}
function VO(i) {
  var s = i.reference, c = i.element, p = i.placement, h = p ? el(p) : null, S = p ? jd(p) : null, y = s.x + s.width / 2 - c.width / 2, C = s.y + s.height / 2 - c.height / 2, x;
  switch (h) {
    case Ja:
      x = {
        x: y,
        y: s.y - c.height
      };
      break;
    case $i:
      x = {
        x: y,
        y: s.y + s.height
      };
      break;
    case ji:
      x = {
        x: s.x + s.width,
        y: C
      };
      break;
    case ei:
      x = {
        x: s.x - c.width,
        y: C
      };
      break;
    default:
      x = {
        x: s.x,
        y: s.y
      };
  }
  var k = h ? KE(h) : null;
  if (k != null) {
    var _ = k === "y" ? "height" : "width";
    switch (S) {
      case Ud:
        x[k] = x[k] - (s[_] / 2 - c[_] / 2);
        break;
      case bh:
        x[k] = x[k] + (s[_] / 2 - c[_] / 2);
        break;
    }
  }
  return x;
}
function Eh(i, s) {
  s === void 0 && (s = {});
  var c = s, p = c.placement, h = p === void 0 ? i.placement : p, S = c.strategy, y = S === void 0 ? i.strategy : S, C = c.boundary, x = C === void 0 ? fU : C, k = c.rootBoundary, _ = k === void 0 ? zO : k, M = c.elementContext, A = M === void 0 ? ah : M, $ = c.altBoundary, B = $ === void 0 ? !1 : $, L = c.padding, P = L === void 0 ? 0 : L, ee = FO(typeof P != "number" ? P : BO(P, Oh)), le = A === ah ? dU : ah, q = i.rects.popper, Y = i.elements[B ? le : A], U = YU(Cc(Y) ? Y : Y.contextElement || os(i.elements.popper), x, _, y), re = $d(i.elements.reference), te = VO({
    reference: re,
    element: q,
    strategy: "absolute",
    placement: h
  }), Ae = xE(Object.assign({}, q, te)), Oe = A === ah ? Ae : re, O = {
    top: U.top - Oe.top + ee.top,
    bottom: Oe.bottom - U.bottom + ee.bottom,
    left: U.left - Oe.left + ee.left,
    right: Oe.right - U.right + ee.right
  }, ne = i.modifiersData.offset;
  if (A === ah && ne) {
    var be = ne[h];
    Object.keys(O).forEach(function(ue) {
      var xe = [ji, $i].indexOf(ue) >= 0 ? 1 : -1, Le = [Ja, $i].indexOf(ue) >= 0 ? "y" : "x";
      O[ue] += be[Le] * xe;
    });
  }
  return O;
}
function WU(i, s) {
  s === void 0 && (s = {});
  var c = s, p = c.placement, h = c.boundary, S = c.rootBoundary, y = c.padding, C = c.flipVariations, x = c.allowedAutoPlacements, k = x === void 0 ? UO : x, _ = jd(p), M = _ ? C ? NR : NR.filter(function(B) {
    return jd(B) === _;
  }) : Oh, A = M.filter(function(B) {
    return k.indexOf(B) >= 0;
  });
  A.length === 0 && (A = M);
  var $ = A.reduce(function(B, L) {
    return B[L] = Eh(i, {
      placement: L,
      boundary: h,
      rootBoundary: S,
      padding: y
    })[el(L)], B;
  }, {});
  return Object.keys($).sort(function(B, L) {
    return $[B] - $[L];
  });
}
function GU(i) {
  if (el(i) === QE)
    return [];
  var s = Gg(i);
  return [zR(i), s, zR(s)];
}
function QU(i) {
  var s = i.state, c = i.options, p = i.name;
  if (!s.modifiersData[p]._skip) {
    for (var h = c.mainAxis, S = h === void 0 ? !0 : h, y = c.altAxis, C = y === void 0 ? !0 : y, x = c.fallbackPlacements, k = c.padding, _ = c.boundary, M = c.rootBoundary, A = c.altBoundary, $ = c.flipVariations, B = $ === void 0 ? !0 : $, L = c.allowedAutoPlacements, P = s.options.placement, ee = el(P), le = ee === P, q = x || (le || !B ? [Gg(P)] : GU(P)), Y = [P].concat(q).reduce(function(De, Ze) {
      return De.concat(el(Ze) === QE ? WU(s, {
        placement: Ze,
        boundary: _,
        rootBoundary: M,
        padding: k,
        flipVariations: B,
        allowedAutoPlacements: L
      }) : Ze);
    }, []), U = s.rects.reference, re = s.rects.popper, te = /* @__PURE__ */ new Map(), Ae = !0, Oe = Y[0], O = 0; O < Y.length; O++) {
      var ne = Y[O], be = el(ne), ue = jd(ne) === Ud, xe = [Ja, $i].indexOf(be) >= 0, Le = xe ? "width" : "height", we = Eh(s, {
        placement: ne,
        boundary: _,
        rootBoundary: M,
        altBoundary: A,
        padding: k
      }), Fe = xe ? ue ? ji : ei : ue ? $i : Ja;
      U[Le] > re[Le] && (Fe = Gg(Fe));
      var se = Gg(Fe), Ee = [];
      if (S && Ee.push(we[be] <= 0), C && Ee.push(we[Fe] <= 0, we[se] <= 0), Ee.every(function(De) {
        return De;
      })) {
        Oe = ne, Ae = !1;
        break;
      }
      te.set(ne, Ee);
    }
    if (Ae)
      for (var I = B ? 3 : 1, fe = function(Ze) {
        var Pe = Y.find(function(Qe) {
          var Ve = te.get(Qe);
          if (Ve)
            return Ve.slice(0, Ze).every(function(it) {
              return it;
            });
        });
        if (Pe)
          return Oe = Pe, "break";
      }, Re = I; Re > 0; Re--) {
        var Ie = fe(Re);
        if (Ie === "break") break;
      }
    s.placement !== Oe && (s.modifiersData[p]._skip = !0, s.placement = Oe, s.reset = !0);
  }
}
const qU = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: QU,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function PR(i, s, c) {
  return c === void 0 && (c = {
    x: 0,
    y: 0
  }), {
    top: i.top - s.height - c.y,
    right: i.right - s.width + c.x,
    bottom: i.bottom - s.height + c.y,
    left: i.left - s.width - c.x
  };
}
function $R(i) {
  return [Ja, ji, $i, ei].some(function(s) {
    return i[s] >= 0;
  });
}
function XU(i) {
  var s = i.state, c = i.name, p = s.rects.reference, h = s.rects.popper, S = s.modifiersData.preventOverflow, y = Eh(s, {
    elementContext: "reference"
  }), C = Eh(s, {
    altBoundary: !0
  }), x = PR(y, p), k = PR(C, h, S), _ = $R(x), M = $R(k);
  s.modifiersData[c] = {
    referenceClippingOffsets: x,
    popperEscapeOffsets: k,
    isReferenceHidden: _,
    hasPopperEscaped: M
  }, s.attributes.popper = Object.assign({}, s.attributes.popper, {
    "data-popper-reference-hidden": _,
    "data-popper-escaped": M
  });
}
const KU = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: XU
};
function ZU(i, s, c) {
  var p = el(i), h = [ei, Ja].indexOf(p) >= 0 ? -1 : 1, S = typeof c == "function" ? c(Object.assign({}, s, {
    placement: i
  })) : c, y = S[0], C = S[1];
  return y = y || 0, C = (C || 0) * h, [ei, ji].indexOf(p) >= 0 ? {
    x: C,
    y
  } : {
    x: y,
    y: C
  };
}
function JU(i) {
  var s = i.state, c = i.options, p = i.name, h = c.offset, S = h === void 0 ? [0, 0] : h, y = UO.reduce(function(_, M) {
    return _[M] = ZU(M, s.rects, S), _;
  }, {}), C = y[s.placement], x = C.x, k = C.y;
  s.modifiersData.popperOffsets != null && (s.modifiersData.popperOffsets.x += x, s.modifiersData.popperOffsets.y += k), s.modifiersData[p] = y;
}
const e5 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: JU
};
function t5(i) {
  var s = i.state, c = i.name;
  s.modifiersData[c] = VO({
    reference: s.rects.reference,
    element: s.rects.popper,
    strategy: "absolute",
    placement: s.placement
  });
}
const n5 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: t5,
  data: {}
};
function r5(i) {
  return i === "x" ? "y" : "x";
}
function a5(i) {
  var s = i.state, c = i.options, p = i.name, h = c.mainAxis, S = h === void 0 ? !0 : h, y = c.altAxis, C = y === void 0 ? !1 : y, x = c.boundary, k = c.rootBoundary, _ = c.altBoundary, M = c.padding, A = c.tether, $ = A === void 0 ? !0 : A, B = c.tetherOffset, L = B === void 0 ? 0 : B, P = Eh(s, {
    boundary: x,
    rootBoundary: k,
    padding: M,
    altBoundary: _
  }), ee = el(s.placement), le = jd(s.placement), q = !le, Y = KE(ee), U = r5(Y), re = s.modifiersData.popperOffsets, te = s.rects.reference, Ae = s.rects.popper, Oe = typeof L == "function" ? L(Object.assign({}, s.rects, {
    placement: s.placement
  })) : L, O = typeof Oe == "number" ? {
    mainAxis: Oe,
    altAxis: Oe
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, Oe), ne = s.modifiersData.offset ? s.modifiersData.offset[s.placement] : null, be = {
    x: 0,
    y: 0
  };
  if (re) {
    if (S) {
      var ue, xe = Y === "y" ? Ja : ei, Le = Y === "y" ? $i : ji, we = Y === "y" ? "height" : "width", Fe = re[Y], se = Fe + P[xe], Ee = Fe - P[Le], I = $ ? -Ae[we] / 2 : 0, fe = le === Ud ? te[we] : Ae[we], Re = le === Ud ? -Ae[we] : -te[we], Ie = s.elements.arrow, De = $ && Ie ? XE(Ie) : {
        width: 0,
        height: 0
      }, Ze = s.modifiersData["arrow#persistent"] ? s.modifiersData["arrow#persistent"].padding : jO(), Pe = Ze[xe], Qe = Ze[Le], Ve = fh(0, te[we], De[we]), it = q ? te[we] / 2 - I - Ve - Pe - O.mainAxis : fe - Ve - Pe - O.mainAxis, st = q ? -te[we] / 2 + I + Ve + Qe + O.mainAxis : Re + Ve + Qe + O.mainAxis, Ct = s.elements.arrow && kh(s.elements.arrow), ye = Ct ? Y === "y" ? Ct.clientTop || 0 : Ct.clientLeft || 0 : 0, Tt = (ue = ne == null ? void 0 : ne[Y]) != null ? ue : 0, ke = Fe + it - Tt - ye, Mt = Fe + st - Tt, Ft = fh($ ? t0(se, ke) : se, Fe, $ ? bc(Ee, Mt) : Ee);
      re[Y] = Ft, be[Y] = Ft - Fe;
    }
    if (C) {
      var It, yn = Y === "x" ? Ja : ei, Tn = Y === "x" ? $i : ji, kn = re[U], Ln = U === "y" ? "height" : "width", qn = kn + P[yn], Xe = kn - P[Tn], Xn = [Ja, ei].indexOf(ee) !== -1, Fn = (It = ne == null ? void 0 : ne[U]) != null ? It : 0, Kn = Xn ? qn : kn - te[Ln] - Ae[Ln] - Fn + O.altAxis, Kt = Xn ? kn + te[Ln] + Ae[Ln] - Fn - O.altAxis : Xe, lr = $ && Xn ? kU(Kn, kn, Kt) : fh($ ? Kn : qn, kn, $ ? Kt : Xe);
      re[U] = lr, be[U] = lr - kn;
    }
    s.modifiersData[p] = be;
  }
}
const i5 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: a5,
  requiresIfExists: ["offset"]
};
function o5(i) {
  return {
    scrollLeft: i.scrollLeft,
    scrollTop: i.scrollTop
  };
}
function l5(i) {
  return i === yi(i) || !Pi(i) ? ZE(i) : o5(i);
}
function u5(i) {
  var s = i.getBoundingClientRect(), c = Pd(s.width) / i.offsetWidth || 1, p = Pd(s.height) / i.offsetHeight || 1;
  return c !== 1 || p !== 1;
}
function s5(i, s, c) {
  c === void 0 && (c = !1);
  var p = Pi(s), h = Pi(s) && u5(s), S = os(s), y = $d(i, h, c), C = {
    scrollLeft: 0,
    scrollTop: 0
  }, x = {
    x: 0,
    y: 0
  };
  return (p || !p && !c) && ((tl(s) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  eC(S)) && (C = l5(s)), Pi(s) ? (x = $d(s, !0), x.x += s.clientLeft, x.y += s.clientTop) : S && (x.x = JE(S))), {
    x: y.left + C.scrollLeft - x.x,
    y: y.top + C.scrollTop - x.y,
    width: y.width,
    height: y.height
  };
}
function c5(i) {
  var s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Set(), p = [];
  i.forEach(function(S) {
    s.set(S.name, S);
  });
  function h(S) {
    c.add(S.name);
    var y = [].concat(S.requires || [], S.requiresIfExists || []);
    y.forEach(function(C) {
      if (!c.has(C)) {
        var x = s.get(C);
        x && h(x);
      }
    }), p.push(S);
  }
  return i.forEach(function(S) {
    c.has(S.name) || h(S);
  }), p;
}
function f5(i) {
  var s = c5(i);
  return CU.reduce(function(c, p) {
    return c.concat(s.filter(function(h) {
      return h.phase === p;
    }));
  }, []);
}
function d5(i) {
  var s;
  return function() {
    return s || (s = new Promise(function(c) {
      Promise.resolve().then(function() {
        s = void 0, c(i());
      });
    })), s;
  };
}
function p5(i) {
  var s = i.reduce(function(c, p) {
    var h = c[p.name];
    return c[p.name] = h ? Object.assign({}, h, p, {
      options: Object.assign({}, h.options, p.options),
      data: Object.assign({}, h.data, p.data)
    }) : p, c;
  }, {});
  return Object.keys(s).map(function(c) {
    return s[c];
  });
}
var jR = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function FR() {
  for (var i = arguments.length, s = new Array(i), c = 0; c < i; c++)
    s[c] = arguments[c];
  return !s.some(function(p) {
    return !(p && typeof p.getBoundingClientRect == "function");
  });
}
function v5(i) {
  i === void 0 && (i = {});
  var s = i, c = s.defaultModifiers, p = c === void 0 ? [] : c, h = s.defaultOptions, S = h === void 0 ? jR : h;
  return function(C, x, k) {
    k === void 0 && (k = S);
    var _ = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, jR, S),
      modifiersData: {},
      elements: {
        reference: C,
        popper: x
      },
      attributes: {},
      styles: {}
    }, M = [], A = !1, $ = {
      state: _,
      setOptions: function(ee) {
        var le = typeof ee == "function" ? ee(_.options) : ee;
        L(), _.options = Object.assign({}, S, _.options, le), _.scrollParents = {
          reference: Cc(C) ? dh(C) : C.contextElement ? dh(C.contextElement) : [],
          popper: dh(x)
        };
        var q = f5(p5([].concat(p, _.options.modifiers)));
        return _.orderedModifiers = q.filter(function(Y) {
          return Y.enabled;
        }), B(), $.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!A) {
          var ee = _.elements, le = ee.reference, q = ee.popper;
          if (FR(le, q)) {
            _.rects = {
              reference: s5(le, kh(q), _.options.strategy === "fixed"),
              popper: XE(q)
            }, _.reset = !1, _.placement = _.options.placement, _.orderedModifiers.forEach(function(O) {
              return _.modifiersData[O.name] = Object.assign({}, O.data);
            });
            for (var Y = 0; Y < _.orderedModifiers.length; Y++) {
              if (_.reset === !0) {
                _.reset = !1, Y = -1;
                continue;
              }
              var U = _.orderedModifiers[Y], re = U.fn, te = U.options, Ae = te === void 0 ? {} : te, Oe = U.name;
              typeof re == "function" && (_ = re({
                state: _,
                options: Ae,
                name: Oe,
                instance: $
              }) || _);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: d5(function() {
        return new Promise(function(P) {
          $.forceUpdate(), P(_);
        });
      }),
      destroy: function() {
        L(), A = !0;
      }
    };
    if (!FR(C, x))
      return $;
    $.setOptions(k).then(function(P) {
      !A && k.onFirstUpdate && k.onFirstUpdate(P);
    });
    function B() {
      _.orderedModifiers.forEach(function(P) {
        var ee = P.name, le = P.options, q = le === void 0 ? {} : le, Y = P.effect;
        if (typeof Y == "function") {
          var U = Y({
            state: _,
            name: ee,
            instance: $,
            options: q
          }), re = function() {
          };
          M.push(U || re);
        }
      });
    }
    function L() {
      M.forEach(function(P) {
        return P();
      }), M = [];
    }
    return $;
  };
}
var h5 = [$U, n5, UU, wU, e5, qU, i5, NU, KU], m5 = /* @__PURE__ */ v5({
  defaultModifiers: h5
});
function y5(i) {
  return typeof i == "function" ? i() : i;
}
const n0 = /* @__PURE__ */ ve.forwardRef(function(s, c) {
  const {
    children: p,
    container: h,
    disablePortal: S = !1
  } = s, [y, C] = ve.useState(null), x = rs(/* @__PURE__ */ ve.isValidElement(p) ? BE(p) : null, c);
  if (mh(() => {
    S || C(y5(h) || document.body);
  }, [h, S]), mh(() => {
    if (y && !S)
      return mE(c, y), () => {
        mE(c, null);
      };
  }, [c, y, S]), S) {
    if (/* @__PURE__ */ ve.isValidElement(p)) {
      const k = {
        ref: x
      };
      return /* @__PURE__ */ ve.cloneElement(p, k);
    }
    return /* @__PURE__ */ Dt.jsx(ve.Fragment, {
      children: p
    });
  }
  return /* @__PURE__ */ Dt.jsx(ve.Fragment, {
    children: y && /* @__PURE__ */ DO.createPortal(p, y)
  });
});
process.env.NODE_ENV !== "production" && (n0.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: w.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: w.oneOfType([yh, w.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: w.bool
});
process.env.NODE_ENV !== "production" && (n0.propTypes = wz(n0.propTypes));
function g5(i) {
  return is("MuiPopper", i);
}
Tc("MuiPopper", ["root"]);
function S5(i, s) {
  if (s === "ltr")
    return i;
  switch (i) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return i;
  }
}
function r0(i) {
  return typeof i == "function" ? i() : i;
}
function E0(i) {
  return i.nodeType !== void 0;
}
function b5(i) {
  return !E0(i);
}
const E5 = (i) => {
  const {
    classes: s
  } = i;
  return Fd({
    root: ["root"]
  }, g5, s);
}, C5 = {}, T5 = /* @__PURE__ */ ve.forwardRef(function(s, c) {
  const {
    anchorEl: p,
    children: h,
    direction: S,
    disablePortal: y,
    modifiers: C,
    open: x,
    placement: k,
    popperOptions: _,
    popperRef: M,
    slotProps: A = {},
    slots: $ = {},
    TransitionProps: B,
    // @ts-ignore internal logic
    ownerState: L,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...P
  } = s, ee = ve.useRef(null), le = rs(ee, c), q = ve.useRef(null), Y = rs(q, M), U = ve.useRef(Y);
  mh(() => {
    U.current = Y;
  }, [Y]), ve.useImperativeHandle(M, () => q.current, []);
  const re = S5(k, S), [te, Ae] = ve.useState(re), [Oe, O] = ve.useState(r0(p));
  ve.useEffect(() => {
    q.current && q.current.forceUpdate();
  }), ve.useEffect(() => {
    p && O(r0(p));
  }, [p]), mh(() => {
    if (!Oe || !x)
      return;
    const Le = (se) => {
      Ae(se.placement);
    };
    if (process.env.NODE_ENV !== "production" && Oe && E0(Oe) && Oe.nodeType === 1) {
      const se = Oe.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && se.top === 0 && se.left === 0 && se.right === 0 && se.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let we = [{
      name: "preventOverflow",
      options: {
        altBoundary: y
      }
    }, {
      name: "flip",
      options: {
        altBoundary: y
      }
    }, {
      name: "onUpdate",
      enabled: !0,
      phase: "afterWrite",
      fn: ({
        state: se
      }) => {
        Le(se);
      }
    }];
    C != null && (we = we.concat(C)), _ && _.modifiers != null && (we = we.concat(_.modifiers));
    const Fe = m5(Oe, ee.current, {
      placement: re,
      ..._,
      modifiers: we
    });
    return U.current(Fe), () => {
      Fe.destroy(), U.current(null);
    };
  }, [Oe, y, C, x, _, re]);
  const ne = {
    placement: te
  };
  B !== null && (ne.TransitionProps = B);
  const be = E5(s), ue = $.root ?? "div", xe = Uz({
    elementType: ue,
    externalSlotProps: A.root,
    externalForwardedProps: P,
    additionalProps: {
      role: "tooltip",
      ref: le
    },
    ownerState: s,
    className: be.root
  });
  return /* @__PURE__ */ Dt.jsx(ue, {
    ...xe,
    children: typeof h == "function" ? h(ne) : h
  });
}), IO = /* @__PURE__ */ ve.forwardRef(function(s, c) {
  const {
    anchorEl: p,
    children: h,
    container: S,
    direction: y = "ltr",
    disablePortal: C = !1,
    keepMounted: x = !1,
    modifiers: k,
    open: _,
    placement: M = "bottom",
    popperOptions: A = C5,
    popperRef: $,
    style: B,
    transition: L = !1,
    slotProps: P = {},
    slots: ee = {},
    ...le
  } = s, [q, Y] = ve.useState(!0), U = () => {
    Y(!1);
  }, re = () => {
    Y(!0);
  };
  if (!x && !_ && (!L || q))
    return null;
  let te;
  if (S)
    te = S;
  else if (p) {
    const O = r0(p);
    te = O && E0(O) ? dR(O).body : dR(null).body;
  }
  const Ae = !_ && x && (!L || q) ? "none" : void 0, Oe = L ? {
    in: _,
    onEnter: U,
    onExited: re
  } : void 0;
  return /* @__PURE__ */ Dt.jsx(n0, {
    disablePortal: C,
    container: te,
    children: /* @__PURE__ */ Dt.jsx(T5, {
      anchorEl: p,
      direction: y,
      disablePortal: C,
      modifiers: k,
      ref: c,
      open: L ? !q : _,
      placement: M,
      popperOptions: A,
      popperRef: $,
      slotProps: P,
      slots: ee,
      ...le,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: Ae,
        ...B
      },
      TransitionProps: Oe,
      children: h
    })
  });
});
process.env.NODE_ENV !== "production" && (IO.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: Rh(w.oneOfType([yh, w.object, w.func]), (i) => {
    if (i.open) {
      const s = r0(i.anchorEl);
      if (s && E0(s) && s.nodeType === 1) {
        const c = s.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && c.top === 0 && c.left === 0 && c.right === 0 && c.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!s || typeof s.getBoundingClientRect != "function" || b5(s) && s.contextElement != null && s.contextElement.nodeType !== 1)
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`));
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: w.oneOfType([w.node, w.func]),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: w.oneOfType([yh, w.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: w.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: w.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: w.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: w.arrayOf(w.shape({
    data: w.object,
    effect: w.func,
    enabled: w.bool,
    fn: w.func,
    name: w.any,
    options: w.object,
    phase: w.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: w.arrayOf(w.string),
    requiresIfExists: w.arrayOf(w.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: w.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: w.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: w.shape({
    modifiers: w.array,
    onFirstUpdate: w.func,
    placement: w.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: w.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: FE,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: w.shape({
    root: w.oneOfType([w.func, w.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: w.shape({
    root: w.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: w.bool
});
const x5 = Bi(IO, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (i, s) => s.root
})({}), tC = /* @__PURE__ */ ve.forwardRef(function(s, c) {
  const p = mO(), h = xc({
    props: s,
    name: "MuiPopper"
  }), {
    anchorEl: S,
    component: y,
    components: C,
    componentsProps: x,
    container: k,
    disablePortal: _,
    keepMounted: M,
    modifiers: A,
    open: $,
    placement: B,
    popperOptions: L,
    popperRef: P,
    transition: ee,
    slots: le,
    slotProps: q,
    ...Y
  } = h, U = (le == null ? void 0 : le.root) ?? (C == null ? void 0 : C.Root), re = {
    anchorEl: S,
    container: k,
    disablePortal: _,
    keepMounted: M,
    modifiers: A,
    open: $,
    placement: B,
    popperOptions: L,
    popperRef: P,
    transition: ee,
    ...Y
  };
  return /* @__PURE__ */ Dt.jsx(x5, {
    as: y,
    direction: p ? "rtl" : "ltr",
    slots: {
      root: U
    },
    slotProps: q ?? x,
    ...re,
    ref: c
  });
});
process.env.NODE_ENV !== "production" && (tC.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: w.oneOfType([yh, w.object, w.func]),
  /**
   * Popper render function or node.
   */
  children: w.oneOfType([w.node, w.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: w.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  components: w.shape({
    Root: w.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  componentsProps: w.shape({
    root: w.oneOfType([w.func, w.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: w.oneOfType([yh, w.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: w.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: w.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: w.arrayOf(w.shape({
    data: w.object,
    effect: w.func,
    enabled: w.bool,
    fn: w.func,
    name: w.any,
    options: w.object,
    phase: w.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: w.arrayOf(w.string),
    requiresIfExists: w.arrayOf(w.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: w.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: w.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: w.shape({
    modifiers: w.array,
    onFirstUpdate: w.func,
    placement: w.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: w.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: FE,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: w.shape({
    root: w.oneOfType([w.func, w.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: w.shape({
    root: w.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: w.oneOfType([w.arrayOf(w.oneOfType([w.func, w.object, w.bool])), w.func, w.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: w.bool
});
function wE(i) {
  return `scale(${i}, ${i ** 2})`;
}
const w5 = {
  entering: {
    opacity: 1,
    transform: wE(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, uE = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Ch = /* @__PURE__ */ ve.forwardRef(function(s, c) {
  const {
    addEndListener: p,
    appear: h = !0,
    children: S,
    easing: y,
    in: C,
    onEnter: x,
    onEntered: k,
    onEntering: _,
    onExit: M,
    onExited: A,
    onExiting: $,
    style: B,
    timeout: L = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: P = Gl,
    ...ee
  } = s, le = Md(), q = ve.useRef(), Y = xO(), U = ve.useRef(null), re = rs(U, BE(S), c), te = (Le) => (we) => {
    if (Le) {
      const Fe = U.current;
      we === void 0 ? Le(Fe) : Le(Fe, we);
    }
  }, Ae = te(_), Oe = te((Le, we) => {
    oU(Le);
    const {
      duration: Fe,
      delay: se,
      easing: Ee
    } = MR({
      style: B,
      timeout: L,
      easing: y
    }, {
      mode: "enter"
    });
    let I;
    L === "auto" ? (I = Y.transitions.getAutoHeightDuration(Le.clientHeight), q.current = I) : I = Fe, Le.style.transition = [Y.transitions.create("opacity", {
      duration: I,
      delay: se
    }), Y.transitions.create("transform", {
      duration: uE ? I : I * 0.666,
      delay: se,
      easing: Ee
    })].join(","), x && x(Le, we);
  }), O = te(k), ne = te($), be = te((Le) => {
    const {
      duration: we,
      delay: Fe,
      easing: se
    } = MR({
      style: B,
      timeout: L,
      easing: y
    }, {
      mode: "exit"
    });
    let Ee;
    L === "auto" ? (Ee = Y.transitions.getAutoHeightDuration(Le.clientHeight), q.current = Ee) : Ee = we, Le.style.transition = [Y.transitions.create("opacity", {
      duration: Ee,
      delay: Fe
    }), Y.transitions.create("transform", {
      duration: uE ? Ee : Ee * 0.666,
      delay: uE ? Fe : Fe || Ee * 0.333,
      easing: se
    })].join(","), Le.style.opacity = 0, Le.style.transform = wE(0.75), M && M(Le);
  }), ue = te(A), xe = (Le) => {
    L === "auto" && le.start(q.current || 0, Le), p && p(U.current, Le);
  };
  return /* @__PURE__ */ Dt.jsx(P, {
    appear: h,
    in: C,
    nodeRef: U,
    onEnter: Oe,
    onEntered: O,
    onEntering: Ae,
    onExit: be,
    onExited: ue,
    onExiting: ne,
    addEndListener: xe,
    timeout: L === "auto" ? null : L,
    ...ee,
    children: (Le, we) => /* @__PURE__ */ ve.cloneElement(S, {
      style: {
        opacity: 0,
        transform: wE(0.75),
        visibility: Le === "exited" && !C ? "hidden" : void 0,
        ...w5[Le],
        ...B,
        ...S.props.style
      },
      ref: re,
      ...we
    })
  });
});
process.env.NODE_ENV !== "production" && (Ch.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: w.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: w.bool,
  /**
   * A single child content element.
   */
  children: jE.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: w.oneOfType([w.shape({
    enter: w.string,
    exit: w.string
  }), w.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: w.bool,
  /**
   * @ignore
   */
  onEnter: w.func,
  /**
   * @ignore
   */
  onEntered: w.func,
  /**
   * @ignore
   */
  onEntering: w.func,
  /**
   * @ignore
   */
  onExit: w.func,
  /**
   * @ignore
   */
  onExited: w.func,
  /**
   * @ignore
   */
  onExiting: w.func,
  /**
   * @ignore
   */
  style: w.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: w.oneOfType([w.oneOf(["auto"]), w.number, w.shape({
    appear: w.number,
    enter: w.number,
    exit: w.number
  })])
});
Ch && (Ch.muiSupportAuto = !0);
function R5(i) {
  return is("MuiTooltip", i);
}
const Qn = Tc("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function O5(i) {
  return Math.round(i * 1e5) / 1e5;
}
const k5 = (i) => {
  const {
    classes: s,
    disableInteractive: c,
    arrow: p,
    touch: h,
    placement: S
  } = i, y = {
    popper: ["popper", !c && "popperInteractive", p && "popperArrow"],
    tooltip: ["tooltip", p && "tooltipArrow", h && "touch", `tooltipPlacement${Cn(S.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return Fd(y, R5, s);
}, D5 = Bi(tC, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (i, s) => {
    const {
      ownerState: c
    } = i;
    return [s.popper, !c.disableInteractive && s.popperInteractive, c.arrow && s.popperArrow, !c.open && s.popperClose];
  }
})(Ec(({
  theme: i
}) => ({
  zIndex: (i.vars || i).zIndex.tooltip,
  pointerEvents: "none",
  variants: [{
    props: ({
      ownerState: s
    }) => !s.disableInteractive,
    style: {
      pointerEvents: "auto"
    }
  }, {
    props: ({
      open: s
    }) => !s,
    style: {
      pointerEvents: "none"
    }
  }, {
    props: ({
      ownerState: s
    }) => s.arrow,
    style: {
      [`&[data-popper-placement*="bottom"] .${Qn.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
          transformOrigin: "0 100%"
        }
      },
      [`&[data-popper-placement*="top"] .${Qn.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
          transformOrigin: "100% 0"
        }
      },
      [`&[data-popper-placement*="right"] .${Qn.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "100% 100%"
        }
      },
      [`&[data-popper-placement*="left"] .${Qn.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "0 0"
        }
      }
    }
  }, {
    props: ({
      ownerState: s
    }) => s.arrow && !s.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${Qn.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: s
    }) => s.arrow && !!s.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${Qn.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: s
    }) => s.arrow && !s.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${Qn.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: s
    }) => s.arrow && !!s.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${Qn.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }]
}))), _5 = Bi("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (i, s) => {
    const {
      ownerState: c
    } = i;
    return [s.tooltip, c.touch && s.touch, c.arrow && s.tooltipArrow, s[`tooltipPlacement${Cn(c.placement.split("-")[0])}`]];
  }
})(Ec(({
  theme: i
}) => ({
  backgroundColor: i.vars ? i.vars.palette.Tooltip.bg : Zo(i.palette.grey[700], 0.92),
  borderRadius: (i.vars || i).shape.borderRadius,
  color: (i.vars || i).palette.common.white,
  fontFamily: i.typography.fontFamily,
  padding: "4px 8px",
  fontSize: i.typography.pxToRem(11),
  maxWidth: 300,
  margin: 2,
  wordWrap: "break-word",
  fontWeight: i.typography.fontWeightMedium,
  [`.${Qn.popper}[data-popper-placement*="left"] &`]: {
    transformOrigin: "right center"
  },
  [`.${Qn.popper}[data-popper-placement*="right"] &`]: {
    transformOrigin: "left center"
  },
  [`.${Qn.popper}[data-popper-placement*="top"] &`]: {
    transformOrigin: "center bottom",
    marginBottom: "14px"
  },
  [`.${Qn.popper}[data-popper-placement*="bottom"] &`]: {
    transformOrigin: "center top",
    marginTop: "14px"
  },
  variants: [{
    props: ({
      ownerState: s
    }) => s.arrow,
    style: {
      position: "relative",
      margin: 0
    }
  }, {
    props: ({
      ownerState: s
    }) => s.touch,
    style: {
      padding: "8px 16px",
      fontSize: i.typography.pxToRem(14),
      lineHeight: `${O5(16 / 14)}em`,
      fontWeight: i.typography.fontWeightRegular
    }
  }, {
    props: ({
      ownerState: s
    }) => !s.isRtl,
    style: {
      [`.${Qn.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "14px"
      },
      [`.${Qn.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "14px"
      }
    }
  }, {
    props: ({
      ownerState: s
    }) => !s.isRtl && s.touch,
    style: {
      [`.${Qn.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "24px"
      },
      [`.${Qn.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "24px"
      }
    }
  }, {
    props: ({
      ownerState: s
    }) => !!s.isRtl,
    style: {
      [`.${Qn.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "14px"
      },
      [`.${Qn.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "14px"
      }
    }
  }, {
    props: ({
      ownerState: s
    }) => !!s.isRtl && s.touch,
    style: {
      [`.${Qn.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "24px"
      },
      [`.${Qn.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "24px"
      }
    }
  }, {
    props: ({
      ownerState: s
    }) => s.touch,
    style: {
      [`.${Qn.popper}[data-popper-placement*="top"] &`]: {
        marginBottom: "24px"
      }
    }
  }, {
    props: ({
      ownerState: s
    }) => s.touch,
    style: {
      [`.${Qn.popper}[data-popper-placement*="bottom"] &`]: {
        marginTop: "24px"
      }
    }
  }]
}))), M5 = Bi("span", {
  name: "MuiTooltip",
  slot: "Arrow",
  overridesResolver: (i, s) => s.arrow
})(Ec(({
  theme: i
}) => ({
  overflow: "hidden",
  position: "absolute",
  width: "1em",
  height: "0.71em",
  boxSizing: "border-box",
  color: i.vars ? i.vars.palette.Tooltip.bg : Zo(i.palette.grey[700], 0.9),
  "&::before": {
    content: '""',
    margin: "auto",
    display: "block",
    width: "100%",
    height: "100%",
    backgroundColor: "currentColor",
    transform: "rotate(45deg)"
  }
})));
let jg = !1;
const BR = new g0();
let ih = {
  x: 0,
  y: 0
};
function Fg(i, s) {
  return (c, ...p) => {
    s && s(c, ...p), i(c, ...p);
  };
}
const YO = /* @__PURE__ */ ve.forwardRef(function(s, c) {
  var gi, Hi, go;
  const p = xc({
    props: s,
    name: "MuiTooltip"
  }), {
    arrow: h = !1,
    children: S,
    classes: y,
    components: C = {},
    componentsProps: x = {},
    describeChild: k = !1,
    disableFocusListener: _ = !1,
    disableHoverListener: M = !1,
    disableInteractive: A = !1,
    disableTouchListener: $ = !1,
    enterDelay: B = 100,
    enterNextDelay: L = 0,
    enterTouchDelay: P = 700,
    followCursor: ee = !1,
    id: le,
    leaveDelay: q = 0,
    leaveTouchDelay: Y = 1500,
    onClose: U,
    onOpen: re,
    open: te,
    placement: Ae = "bottom",
    PopperComponent: Oe,
    PopperProps: O = {},
    slotProps: ne = {},
    slots: be = {},
    title: ue,
    TransitionComponent: xe = Ch,
    TransitionProps: Le,
    ...we
  } = p, Fe = /* @__PURE__ */ ve.isValidElement(S) ? S : /* @__PURE__ */ Dt.jsx("span", {
    children: S
  }), se = xO(), Ee = mO(), [I, fe] = ve.useState(), [Re, Ie] = ve.useState(null), De = ve.useRef(!1), Ze = A || ee, Pe = Md(), Qe = Md(), Ve = Md(), it = Md(), [st, Ct] = Dz({
    controlled: te,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let ye = st;
  if (process.env.NODE_ENV !== "production") {
    const {
      current: mt
    } = ve.useRef(te !== void 0);
    ve.useEffect(() => {
      I && I.disabled && !mt && ue !== "" && I.tagName.toLowerCase() === "button" && console.error(["MUI: You are providing a disabled `button` child to the Tooltip component.", "A disabled element does not fire events.", "Tooltip needs to listen to the child element's events to display the title.", "", "Add a simple wrapper element, such as a `span`."].join(`
`));
    }, [ue, I, mt]);
  }
  const Tt = kz(le), ke = ve.useRef(), Mt = _d(() => {
    ke.current !== void 0 && (document.body.style.WebkitUserSelect = ke.current, ke.current = void 0), it.clear();
  });
  ve.useEffect(() => Mt, [Mt]);
  const Ft = (mt) => {
    BR.clear(), jg = !0, Ct(!0), re && !ye && re(mt);
  }, It = _d(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (mt) => {
      BR.start(800 + q, () => {
        jg = !1;
      }), Ct(!1), U && ye && U(mt), Pe.start(se.transitions.duration.shortest, () => {
        De.current = !1;
      });
    }
  ), yn = (mt) => {
    De.current && mt.type !== "touchstart" || (I && I.removeAttribute("title"), Qe.clear(), Ve.clear(), B || jg && L ? Qe.start(jg ? L : B, () => {
      Ft(mt);
    }) : Ft(mt));
  }, Tn = (mt) => {
    Qe.clear(), Ve.start(q, () => {
      It(mt);
    });
  }, [, kn] = ve.useState(!1), Ln = (mt) => {
    Zg(mt.target) || (kn(!1), Tn(mt));
  }, qn = (mt) => {
    I || fe(mt.currentTarget), Zg(mt.target) && (kn(!0), yn(mt));
  }, Xe = (mt) => {
    De.current = !0;
    const Zn = Fe.props;
    Zn.onTouchStart && Zn.onTouchStart(mt);
  }, Xn = (mt) => {
    Xe(mt), Ve.clear(), Pe.clear(), Mt(), ke.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", it.start(P, () => {
      document.body.style.WebkitUserSelect = ke.current, yn(mt);
    });
  }, Fn = (mt) => {
    Fe.props.onTouchEnd && Fe.props.onTouchEnd(mt), Mt(), Ve.start(Y, () => {
      It(mt);
    });
  };
  ve.useEffect(() => {
    if (!ye)
      return;
    function mt(Zn) {
      Zn.key === "Escape" && It(Zn);
    }
    return document.addEventListener("keydown", mt), () => {
      document.removeEventListener("keydown", mt);
    };
  }, [It, ye]);
  const Kn = rs(BE(Fe), fe, c);
  !ue && ue !== 0 && (ye = !1);
  const Kt = ve.useRef(), lr = (mt) => {
    const Zn = Fe.props;
    Zn.onMouseMove && Zn.onMouseMove(mt), ih = {
      x: mt.clientX,
      y: mt.clientY
    }, Kt.current && Kt.current.update();
  }, Xr = {}, Pr = typeof ue == "string";
  k ? (Xr.title = !ye && Pr && !M ? ue : null, Xr["aria-describedby"] = ye ? Tt : null) : (Xr["aria-label"] = Pr ? ue : null, Xr["aria-labelledby"] = ye && !Pr ? Tt : null);
  const Ce = {
    ...Xr,
    ...we,
    ...Fe.props,
    className: mr(we.className, Fe.props.className),
    onTouchStart: Xe,
    ref: Kn,
    ...ee ? {
      onMouseMove: lr
    } : {}
  };
  process.env.NODE_ENV !== "production" && (Ce["data-mui-internal-clone-element"] = !0, ve.useEffect(() => {
    I && !I.getAttribute("data-mui-internal-clone-element") && console.error(["MUI: The `children` component of the Tooltip is not forwarding its props correctly.", "Please make sure that props are spread on the same element that the ref is applied to."].join(`
`));
  }, [I]));
  const Ke = {};
  $ || (Ce.onTouchStart = Xn, Ce.onTouchEnd = Fn), M || (Ce.onMouseOver = Fg(yn, Ce.onMouseOver), Ce.onMouseLeave = Fg(Tn, Ce.onMouseLeave), Ze || (Ke.onMouseOver = yn, Ke.onMouseLeave = Tn)), _ || (Ce.onFocus = Fg(qn, Ce.onFocus), Ce.onBlur = Fg(Ln, Ce.onBlur), Ze || (Ke.onFocus = qn, Ke.onBlur = Ln)), process.env.NODE_ENV !== "production" && Fe.props.title && console.error(["MUI: You have provided a `title` prop to the child of <Tooltip />.", `Remove this title prop \`${Fe.props.title}\` or the Tooltip component.`].join(`
`));
  const Et = ve.useMemo(() => {
    var Zn;
    let mt = [{
      name: "arrow",
      enabled: !!Re,
      options: {
        element: Re,
        padding: 4
      }
    }];
    return (Zn = O.popperOptions) != null && Zn.modifiers && (mt = mt.concat(O.popperOptions.modifiers)), {
      ...O.popperOptions,
      modifiers: mt
    };
  }, [Re, O]), Nt = {
    ...p,
    isRtl: Ee,
    arrow: h,
    disableInteractive: Ze,
    placement: Ae,
    PopperComponentProp: Oe,
    touch: De.current
  }, ln = k5(Nt), zn = be.popper ?? C.Popper ?? D5, gn = be.transition ?? C.Transition ?? xe ?? Ch, gr = be.tooltip ?? C.Tooltip ?? _5, Yt = be.arrow ?? C.Arrow ?? M5, $r = lh(zn, {
    ...O,
    ...ne.popper ?? x.popper,
    className: mr(ln.popper, O == null ? void 0 : O.className, (gi = ne.popper ?? x.popper) == null ? void 0 : gi.className)
  }, Nt), Wt = lh(gn, {
    ...Le,
    ...ne.transition ?? x.transition
  }, Nt), Zt = lh(gr, {
    ...ne.tooltip ?? x.tooltip,
    className: mr(ln.tooltip, (Hi = ne.tooltip ?? x.tooltip) == null ? void 0 : Hi.className)
  }, Nt), yo = lh(Yt, {
    ...ne.arrow ?? x.arrow,
    className: mr(ln.arrow, (go = ne.arrow ?? x.arrow) == null ? void 0 : go.className)
  }, Nt);
  return /* @__PURE__ */ Dt.jsxs(ve.Fragment, {
    children: [/* @__PURE__ */ ve.cloneElement(Fe, Ce), /* @__PURE__ */ Dt.jsx(zn, {
      as: Oe ?? tC,
      placement: Ae,
      anchorEl: ee ? {
        getBoundingClientRect: () => ({
          top: ih.y,
          left: ih.x,
          right: ih.x,
          bottom: ih.y,
          width: 0,
          height: 0
        })
      } : I,
      popperRef: Kt,
      open: I ? ye : !1,
      id: Tt,
      transition: !0,
      ...Ke,
      ...$r,
      popperOptions: Et,
      children: ({
        TransitionProps: mt
      }) => /* @__PURE__ */ Dt.jsx(gn, {
        timeout: se.transitions.duration.shorter,
        ...mt,
        ...Wt,
        children: /* @__PURE__ */ Dt.jsxs(gr, {
          ...Zt,
          children: [ue, h ? /* @__PURE__ */ Dt.jsx(Yt, {
            ...yo,
            ref: Ie
          }) : null]
        })
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (YO.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, adds an arrow to the tooltip.
   * @default false
   */
  arrow: w.bool,
  /**
   * Tooltip reference element.
   */
  children: jE.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: w.object,
  /**
   * @ignore
   */
  className: w.string,
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. [How to migrate](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/).
   *
   * @default {}
   */
  components: w.shape({
    Arrow: w.elementType,
    Popper: w.elementType,
    Tooltip: w.elementType,
    Transition: w.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. [How to migrate](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/).
   *
   * @default {}
   */
  componentsProps: w.shape({
    arrow: w.object,
    popper: w.object,
    tooltip: w.object,
    transition: w.object
  }),
  /**
   * Set to `true` if the `title` acts as an accessible description.
   * By default the `title` acts as an accessible label for the child.
   * @default false
   */
  describeChild: w.bool,
  /**
   * Do not respond to focus-visible events.
   * @default false
   */
  disableFocusListener: w.bool,
  /**
   * Do not respond to hover events.
   * @default false
   */
  disableHoverListener: w.bool,
  /**
   * Makes a tooltip not interactive, i.e. it will close when the user
   * hovers over the tooltip before the `leaveDelay` is expired.
   * @default false
   */
  disableInteractive: w.bool,
  /**
   * Do not respond to long press touch events.
   * @default false
   */
  disableTouchListener: w.bool,
  /**
   * The number of milliseconds to wait before showing the tooltip.
   * This prop won't impact the enter touch delay (`enterTouchDelay`).
   * @default 100
   */
  enterDelay: w.number,
  /**
   * The number of milliseconds to wait before showing the tooltip when one was already recently opened.
   * @default 0
   */
  enterNextDelay: w.number,
  /**
   * The number of milliseconds a user must touch the element before showing the tooltip.
   * @default 700
   */
  enterTouchDelay: w.number,
  /**
   * If `true`, the tooltip follow the cursor over the wrapped element.
   * @default false
   */
  followCursor: w.bool,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: w.string,
  /**
   * The number of milliseconds to wait before hiding the tooltip.
   * This prop won't impact the leave touch delay (`leaveTouchDelay`).
   * @default 0
   */
  leaveDelay: w.number,
  /**
   * The number of milliseconds after the user stops touching an element before hiding the tooltip.
   * @default 1500
   */
  leaveTouchDelay: w.number,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onClose: w.func,
  /**
   * Callback fired when the component requests to be open.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: w.func,
  /**
   * If `true`, the component is shown.
   */
  open: w.bool,
  /**
   * Tooltip placement.
   * @default 'bottom'
   */
  placement: w.oneOf(["bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * The component used for the popper.
   * @default Popper
   */
  PopperComponent: w.elementType,
  /**
   * Props applied to the [`Popper`](https://mui.com/material-ui/api/popper/) element.
   * @default {}
   */
  PopperProps: w.object,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: w.shape({
    arrow: w.object,
    popper: w.object,
    tooltip: w.object,
    transition: w.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: w.shape({
    arrow: w.elementType,
    popper: w.elementType,
    tooltip: w.elementType,
    transition: w.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: w.oneOfType([w.arrayOf(w.oneOfType([w.func, w.object, w.bool])), w.func, w.object]),
  /**
   * Tooltip title. Zero-length titles string, undefined, null and false are never displayed.
   */
  title: w.node,
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: w.elementType,
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   */
  TransitionProps: w.object
});
const N5 = GE(/* @__PURE__ */ Dt.jsx("path", {
  d: "m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"
}), "Favorite");
function H5({ iconColor: i, disabled: s = !1, onClick: c }) {
  return /* @__PURE__ */ Dt.jsx(
    S0,
    {
      onClick: c,
      disabled: s,
      sx: { color: i },
      children: /* @__PURE__ */ Dt.jsx(N5, {})
    }
  );
}
const A5 = GE(/* @__PURE__ */ Dt.jsx("path", {
  d: "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05"
}), "FavoriteBorder");
function V5({ iconColor: i, disabled: s = !1, onClick: c }) {
  return /* @__PURE__ */ Dt.jsx(
    S0,
    {
      onClick: c,
      disabled: s,
      sx: { color: i },
      children: /* @__PURE__ */ Dt.jsx(A5, {})
    }
  );
}
const L5 = GE(/* @__PURE__ */ Dt.jsx("path", {
  d: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92"
}), "Share");
function I5({
  iconColor: i,
  disabled: s = !1,
  onClick: c,
  tooltipText: p = "Compartir",
  size: h = "medium",
  backgroundColor: S,
  iconSize: y
}) {
  return /* @__PURE__ */ Dt.jsx(YO, { title: p, children: /* @__PURE__ */ Dt.jsx(
    S0,
    {
      onClick: c,
      disabled: s,
      size: h,
      sx: { color: i, backgroundColor: S },
      children: /* @__PURE__ */ Dt.jsx(L5, { sx: { fontSize: y } })
    }
  ) });
}
export {
  F5 as CustomButton,
  B5 as MyButton,
  H5 as MyFavourite,
  V5 as MyFavouriteBorder,
  I5 as TahicheHA
};
//# sourceMappingURL=index.es.js.map
