(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9544], {
    4715: function(e, t, n) {
      "use strict";
      n.d(t, {
        V: function() {
          return l
        }
      });
      var r = n(7294),
        o = n(6038);
      let i = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect,
        u = e => e && !Array.isArray(e) && "object" == typeof e,
        c = [],
        a = {},
        s = o.ZP,
        l = (e, t = c) => {
          let n = a;
          u(e) ? (n = e, e = null, t = "dependencies" in n ? n.dependencies : c) : u(t) && (t = "dependencies" in (n = t) ? n.dependencies : c), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
          let {
            scope: o,
            revertOnUpdate: l
          } = n, d = (0, r.useRef)(!1), f = (0, r.useRef)(s.context(() => {}, o)), p = (0, r.useRef)(e => f.current.add(null, e)), m = t && t.length && !l;
          return m && i(() => (d.current = !0, () => f.current.revert()), c), i(() => {
            if (e && f.current.add(e, o), !m || !d.current) return () => f.current.revert()
          }, t), {
            context: f.current,
            contextSafe: p.current
          }
        };
      l.register = e => {
        s = e
      }, l.headless = !0
    },
    6664: function(e, t, n) {
      ! function(e, t) {
        "use strict";

        function n(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, r)
          }
          return n
        }

        function r(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? n(Object(r), !0).forEach(function(t) {
              i(e, t, r[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
          }
          return e
        }

        function o(e) {
          return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
        }

        function i(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = n, e
        }

        function u(e, t) {
          return function(e) {
            if (Array.isArray(e)) return e
          }(e) || function(e, t) {
            var n, r, o = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
            if (null != o) {
              var i = [],
                u = !0,
                c = !1;
              try {
                for (o = o.call(e); !(u = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); u = !0);
              } catch (e) {
                c = !0, r = e
              } finally {
                try {
                  u || null == o.return || o.return()
                } finally {
                  if (c) throw r
                }
              }
              return i
            }
          }(e, t) || function(e, t) {
            if (e) {
              if ("string" == typeof e) return c(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
              if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
            }
          }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()
        }

        function c(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
          return r
        }
        var a, s, l, d, f, p = {
          exports: {}
        };
        p.exports = (function() {
          if (f) return d;
          f = 1;
          var e = l ? s : (l = 1, s = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");

          function t() {}

          function n() {}
          return n.resetWarningCache = t, d = function() {
            function r(t, n, r, o, i, u) {
              if (u !== e) {
                var c = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw c.name = "Invariant Violation", c
              }
            }

            function o() {
              return r
            }
            r.isRequired = r;
            var i = {
              array: r,
              bool: r,
              func: r,
              number: r,
              object: r,
              string: r,
              symbol: r,
              any: r,
              arrayOf: o,
              element: r,
              elementType: r,
              instanceOf: o,
              node: r,
              objectOf: o,
              oneOf: o,
              oneOfType: o,
              shape: o,
              exact: o,
              checkPropTypes: n,
              resetWarningCache: t
            };
            return i.PropTypes = i, i
          }
        })()();
        var m = (a = p.exports) && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a,
          h = function(e, n, r) {
            var o = !!r,
              i = t.useRef(r);
            t.useEffect(function() {
              i.current = r
            }, [r]), t.useEffect(function() {
              if (!o || !e) return function() {};
              var t = function() {
                i.current && i.current.apply(i, arguments)
              };
              return e.on(n, t),
                function() {
                  e.off(n, t)
                }
            }, [o, n, e, i])
          },
          v = function(e) {
            var n = t.useRef(e);
            return t.useEffect(function() {
              n.current = e
            }, [e]), n.current
          },
          g = function(e) {
            return null !== e && "object" === o(e)
          },
          y = "[object Object]",
          b = function e(t, n) {
            if (!g(t) || !g(n)) return t === n;
            var r = Array.isArray(t);
            if (r !== Array.isArray(n)) return !1;
            var o = Object.prototype.toString.call(t) === y;
            if (o !== (Object.prototype.toString.call(n) === y)) return !1;
            if (!o && !r) return t === n;
            var i = Object.keys(t),
              u = Object.keys(n);
            if (i.length !== u.length) return !1;
            for (var c = {}, a = 0; a < i.length; a += 1) c[i[a]] = !0;
            for (var s = 0; s < u.length; s += 1) c[u[s]] = !0;
            var l = Object.keys(c);
            return l.length === i.length && l.every(function(r) {
              return e(t[r], n[r])
            })
          },
          E = function(e, t, n) {
            return g(e) ? Object.keys(e).reduce(function(o, u) {
              var c = !g(t) || !b(e[u], t[u]);
              return n.includes(u) ? (c && console.warn("Unsupported prop change: options.".concat(u, " is not a mutable property.")), o) : c ? r(r({}, o || {}), {}, i({}, u, e[u])) : o
            }, null) : null
          },
          k = "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
          w = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : k;
            if (null === e || g(e) && "function" == typeof e.elements && "function" == typeof e.createToken && "function" == typeof e.createPaymentMethod && "function" == typeof e.confirmCardPayment) return e;
            throw Error(t)
          },
          C = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : k;
            if (g(e) && "function" == typeof e.then) return {
              tag: "async",
              stripePromise: Promise.resolve(e).then(function(e) {
                return w(e, t)
              })
            };
            var n = w(e, t);
            return null === n ? {
              tag: "empty"
            } : {
              tag: "sync",
              stripe: n
            }
          },
          S = function(e) {
            e && e._registerWrapper && e.registerAppInfo && (e._registerWrapper({
              name: "react-stripe-js",
              version: "3.1.0"
            }), e.registerAppInfo({
              name: "react-stripe-js",
              version: "3.1.0",
              url: "https://stripe.com/docs/stripe-js/react"
            }))
          },
          x = t.createContext(null);
        x.displayName = "ElementsContext";
        var P = function(e, t) {
            if (!e) throw Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
            return e
          },
          T = function(e) {
            var n = e.stripe,
              r = e.options,
              o = e.children,
              i = t.useMemo(function() {
                return C(n)
              }, [n]),
              c = u(t.useState(function() {
                return {
                  stripe: "sync" === i.tag ? i.stripe : null,
                  elements: "sync" === i.tag ? i.stripe.elements(r) : null
                }
              }), 2),
              a = c[0],
              s = c[1];
            t.useEffect(function() {
              var e = !0,
                t = function(e) {
                  s(function(t) {
                    return t.stripe ? t : {
                      stripe: e,
                      elements: e.elements(r)
                    }
                  })
                };
              return "async" !== i.tag || a.stripe ? "sync" !== i.tag || a.stripe || t(i.stripe) : i.stripePromise.then(function(n) {
                  n && e && t(n)
                }),
                function() {
                  e = !1
                }
            }, [i, a, r]);
            var l = v(n);
            t.useEffect(function() {
              null !== l && l !== n && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")
            }, [l, n]);
            var d = v(r);
            return t.useEffect(function() {
              if (a.elements) {
                var e = E(r, d, ["clientSecret", "fonts"]);
                e && a.elements.update(e)
              }
            }, [r, d, a.elements]), t.useEffect(function() {
              S(a.stripe)
            }, [a.stripe]), t.createElement(x.Provider, {
              value: a
            }, o)
          };
        T.propTypes = {
          stripe: m.any,
          options: m.object
        };
        var j = function(e) {
            return P(t.useContext(x), e)
          },
          L = function(e) {
            return (0, e.children)(j("mounts <ElementsConsumer>"))
          };
        L.propTypes = {
          children: m.func.isRequired
        };
        var O = ["on", "session"],
          A = t.createContext(null);
        A.displayName = "CheckoutSdkContext";
        var F = function(e, t) {
            if (!e) throw Error("Could not find CheckoutProvider context; You need to wrap the part of your app that ".concat(t, " in an <CheckoutProvider> provider."));
            return e
          },
          M = t.createContext(null);
        M.displayName = "CheckoutContext";
        var D = function(e, t) {
            if (!e) return null;
            e.on, e.session;
            var n = function(e, t) {
              if (null == e) return {};
              var n, r, o = function(e, t) {
                if (null == e) return {};
                var n, r, o = {},
                  i = Object.keys(e);
                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
              }(e, t);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
              }
              return o
            }(e, O);
            return t ? r(r({}, n), t) : r(r({}, n), e.session())
          },
          I = function(e) {
            var n = e.stripe,
              r = e.options,
              o = e.children,
              i = t.useMemo(function() {
                return C(n, "Invalid prop `stripe` supplied to `CheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")
              }, [n]),
              c = u(t.useState(null), 2),
              a = c[0],
              s = c[1],
              l = u(t.useState(function() {
                return {
                  stripe: "sync" === i.tag ? i.stripe : null,
                  checkoutSdk: null
                }
              }), 2),
              d = l[0],
              f = l[1],
              p = function(e, t) {
                f(function(n) {
                  return n.stripe && n.checkoutSdk ? n : {
                    stripe: e,
                    checkoutSdk: t
                  }
                })
              },
              m = t.useRef(!1);
            t.useEffect(function() {
              var e = !0;
              return "async" !== i.tag || d.stripe ? "sync" === i.tag && i.stripe && !m.current && (m.current = !0, i.stripe.initCheckout(r).then(function(e) {
                  e && (p(i.stripe, e), e.on("change", s))
                })) : i.stripePromise.then(function(t) {
                  t && e && !m.current && (m.current = !0, t.initCheckout(r).then(function(e) {
                    e && (p(t, e), e.on("change", s))
                  }))
                }),
                function() {
                  e = !1
                }
            }, [i, d, r, s]);
            var h = v(n);
            t.useEffect(function() {
              null !== h && h !== n && console.warn("Unsupported prop change on CheckoutProvider: You cannot change the `stripe` prop after setting it.")
            }, [h, n]);
            var y = v(r);
            t.useEffect(function() {
              if (d.checkoutSdk) {
                !r.clientSecret || g(y) || b(r.clientSecret, y.clientSecret) || console.warn("Unsupported prop change: options.clientSecret is not a mutable property.");
                var e, t, n = null == y ? void 0 : null === (e = y.elementsOptions) || void 0 === e ? void 0 : e.appearance,
                  o = null == r ? void 0 : null === (t = r.elementsOptions) || void 0 === t ? void 0 : t.appearance;
                o && !b(o, n) && d.checkoutSdk.changeAppearance(o)
              }
            }, [r, y, d.checkoutSdk]), t.useEffect(function() {
              S(d.stripe)
            }, [d.stripe]);
            var E = t.useMemo(function() {
              return D(d.checkoutSdk, a)
            }, [d.checkoutSdk, a]);
            return d.checkoutSdk ? t.createElement(A.Provider, {
              value: d
            }, t.createElement(M.Provider, {
              value: E
            }, o)) : null
          };
        I.propTypes = {
          stripe: m.any,
          options: m.shape({
            clientSecret: m.string.isRequired,
            elementsOptions: m.object
          }).isRequired
        };
        var R = function(e) {
            var n = t.useContext(A),
              r = t.useContext(x);
            if (n && r) throw Error("You cannot wrap the part of your app that ".concat(e, " in both <CheckoutProvider> and <Elements> providers."));
            return n ? F(n, e) : P(r, e)
          },
          N = function(e, n) {
            var r = "".concat(e.charAt(0).toUpperCase() + e.slice(1), "Element"),
              o = n ? function(e) {
                R("mounts <".concat(r, ">"));
                var n = e.id,
                  o = e.className;
                return t.createElement("div", {
                  id: n,
                  className: o
                })
              } : function(n) {
                var o, i = n.id,
                  c = n.className,
                  a = n.options,
                  s = void 0 === a ? {} : a,
                  l = n.onBlur,
                  d = n.onFocus,
                  f = n.onReady,
                  p = n.onChange,
                  m = n.onEscape,
                  g = n.onClick,
                  y = n.onLoadError,
                  b = n.onLoaderStart,
                  k = n.onNetworksChange,
                  w = n.onConfirm,
                  C = n.onCancel,
                  S = n.onShippingAddressChange,
                  x = n.onShippingRateChange,
                  P = R("mounts <".concat(r, ">")),
                  T = "elements" in P ? P.elements : null,
                  j = "checkoutSdk" in P ? P.checkoutSdk : null,
                  L = u(t.useState(null), 2),
                  O = L[0],
                  A = L[1],
                  F = t.useRef(null),
                  M = t.useRef(null);
                h(O, "blur", l), h(O, "focus", d), h(O, "escape", m), h(O, "click", g), h(O, "loaderror", y), h(O, "loaderstart", b), h(O, "networkschange", k), h(O, "confirm", w), h(O, "cancel", C), h(O, "shippingaddresschange", S), h(O, "shippingratechange", x), h(O, "change", p), f && (o = "expressCheckout" === e ? f : function() {
                  f(O)
                }), h(O, "ready", o), t.useLayoutEffect(function() {
                  if (null === F.current && null !== M.current && (T || j)) {
                    var t = null;
                    j ? t = j.createElement(e, s) : T && (t = T.create(e, s)), F.current = t, A(t), t && t.mount(M.current)
                  }
                }, [T, j, s]);
                var D = v(s);
                return t.useEffect(function() {
                  if (F.current) {
                    var e = E(s, D, ["paymentRequest"]);
                    e && "update" in F.current && F.current.update(e)
                  }
                }, [s, D]), t.useLayoutEffect(function() {
                  return function() {
                    if (F.current && "function" == typeof F.current.destroy) try {
                      F.current.destroy(), F.current = null
                    } catch (e) {}
                  }
                }, []), t.createElement("div", {
                  id: i,
                  className: c,
                  ref: M
                })
              };
            return o.propTypes = {
              id: m.string,
              className: m.string,
              onChange: m.func,
              onBlur: m.func,
              onFocus: m.func,
              onReady: m.func,
              onEscape: m.func,
              onClick: m.func,
              onLoadError: m.func,
              onLoaderStart: m.func,
              onNetworksChange: m.func,
              onConfirm: m.func,
              onCancel: m.func,
              onShippingAddressChange: m.func,
              onShippingRateChange: m.func,
              options: m.object
            }, o.displayName = r, o.__elementType = e, o
          },
          H = "undefined" == typeof window,
          B = t.createContext(null);
        B.displayName = "EmbeddedCheckoutProviderContext";
        var U = function() {
            var e = t.useContext(B);
            if (!e) throw Error("<EmbeddedCheckout> must be used within <EmbeddedCheckoutProvider>");
            return e
          },
          V = H ? function(e) {
            var n = e.id,
              r = e.className;
            return U(), t.createElement("div", {
              id: n,
              className: r
            })
          } : function(e) {
            var n = e.id,
              r = e.className,
              o = U().embeddedCheckout,
              i = t.useRef(!1),
              u = t.useRef(null);
            return t.useLayoutEffect(function() {
              return !i.current && o && null !== u.current && (o.mount(u.current), i.current = !0),
                function() {
                  if (i.current && o) try {
                    o.unmount(), i.current = !1
                  } catch (e) {}
                }
            }, [o]), t.createElement("div", {
              ref: u,
              id: n,
              className: r
            })
          },
          W = N("auBankAccount", H),
          q = N("card", H),
          z = N("cardNumber", H),
          _ = N("cardExpiry", H),
          Y = N("cardCvc", H),
          $ = N("fpxBank", H),
          K = N("iban", H),
          G = N("idealBank", H),
          X = N("p24Bank", H),
          Q = N("epsBank", H),
          Z = N("payment", H),
          J = N("expressCheckout", H),
          ee = N("currencySelector", H),
          et = N("paymentRequestButton", H),
          en = N("linkAuthentication", H),
          er = N("address", H),
          eo = N("shippingAddress", H),
          ei = N("paymentMethodMessaging", H),
          eu = N("affirmMessage", H),
          ec = N("afterpayClearpayMessage", H);
        e.AddressElement = er, e.AffirmMessageElement = eu, e.AfterpayClearpayMessageElement = ec, e.AuBankAccountElement = W, e.CardCvcElement = Y, e.CardElement = q, e.CardExpiryElement = _, e.CardNumberElement = z, e.CheckoutProvider = I, e.CurrencySelectorElement = ee, e.Elements = T, e.ElementsConsumer = L, e.EmbeddedCheckout = V, e.EmbeddedCheckoutProvider = function(e) {
          var n = e.stripe,
            r = e.options,
            o = e.children,
            i = t.useMemo(function() {
              return C(n, "Invalid prop `stripe` supplied to `EmbeddedCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")
            }, [n]),
            c = t.useRef(null),
            a = t.useRef(null),
            s = u(t.useState({
              embeddedCheckout: null
            }), 2),
            l = s[0],
            d = s[1];
          t.useEffect(function() {
            if (!a.current && !c.current) {
              var e = function(e) {
                a.current || c.current || (a.current = e, c.current = a.current.initEmbeddedCheckout(r).then(function(e) {
                  d({
                    embeddedCheckout: e
                  })
                }))
              };
              "async" === i.tag && !a.current && (r.clientSecret || r.fetchClientSecret) ? i.stripePromise.then(function(t) {
                t && e(t)
              }) : "sync" === i.tag && !a.current && (r.clientSecret || r.fetchClientSecret) && e(i.stripe)
            }
          }, [i, r, l, a]), t.useEffect(function() {
            return function() {
              l.embeddedCheckout ? (c.current = null, l.embeddedCheckout.destroy()) : c.current && c.current.then(function() {
                c.current = null, l.embeddedCheckout && l.embeddedCheckout.destroy()
              })
            }
          }, [l.embeddedCheckout]), t.useEffect(function() {
            S(a)
          }, [a]);
          var f = v(n);
          t.useEffect(function() {
            null !== f && f !== n && console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the `stripe` prop after setting it.")
          }, [f, n]);
          var p = v(r);
          return t.useEffect(function() {
            if (null != p) {
              if (null == r) {
                console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot unset options after setting them.");
                return
              }
              void 0 === r.clientSecret && void 0 === r.fetchClientSecret && console.warn("Invalid props passed to EmbeddedCheckoutProvider: You must provide one of either `options.fetchClientSecret` or `options.clientSecret`."), null != p.clientSecret && r.clientSecret !== p.clientSecret && console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the client secret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead."), null != p.fetchClientSecret && r.fetchClientSecret !== p.fetchClientSecret && console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change fetchClientSecret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead."), null != p.onComplete && r.onComplete !== p.onComplete && console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onComplete option after setting it."), null != p.onShippingDetailsChange && r.onShippingDetailsChange !== p.onShippingDetailsChange && console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onShippingDetailsChange option after setting it."), null != p.onLineItemsChange && r.onLineItemsChange !== p.onLineItemsChange && console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onLineItemsChange option after setting it.")
            }
          }, [p, r]), t.createElement(B.Provider, {
            value: l
          }, o)
        }, e.EpsBankElement = Q, e.ExpressCheckoutElement = J, e.FpxBankElement = $, e.IbanElement = K, e.IdealBankElement = G, e.LinkAuthenticationElement = en, e.P24BankElement = X, e.PaymentElement = Z, e.PaymentMethodMessagingElement = ei, e.PaymentRequestButtonElement = et, e.ShippingAddressElement = eo, e.useCheckout = function() {
          e = "calls useCheckout()", F(t.useContext(A), e);
          var e, n = t.useContext(M);
          if (!n) throw Error("Could not find Checkout Context; You need to wrap the part of your app that calls useCheckout() in an <CheckoutProvider> provider.");
          return n
        }, e.useElements = function() {
          return j("calls useElements()").elements
        }, e.useStripe = function() {
          return R("calls useStripe()").stripe
        }
      }(t, n(7294))
    },
    7775: function(e, t, n) {
      "use strict";

      function r(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some(t => e.test(t.brand))) || e.test(window.navigator.userAgent))
      }

      function o(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function i(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      n.d(t, {
        F: function() {
          return D
        }
      });
      let u = i(function() {
          return o(/^Mac/i)
        }),
        c = i(function() {
          return o(/^iPhone/i)
        }),
        a = i(function() {
          return o(/^iPad/i) || u() && navigator.maxTouchPoints > 1
        }),
        s = i(function() {
          return c() || a()
        });
      i(function() {
        return u() || s()
      }), i(function() {
        return r(/AppleWebKit/i) && !l()
      });
      let l = i(function() {
          return r(/Chrome/i)
        }),
        d = i(function() {
          return r(/Android/i)
        });
      i(function() {
        return r(/Firefox/i)
      });
      let f = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        p = e => e && "window" in e && e.window === e ? e : f(e).defaultView || window;
      var m = n(7294);
      let h = null,
        v = new Set,
        g = new Map,
        y = !1,
        b = !1,
        E = {
          Tab: !0,
          Escape: !0
        };

      function k(e, t) {
        for (let n of v) n(e, t)
      }

      function w(e) {
        y = !0, e.metaKey || !u() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key || (h = "keyboard", k("keyboard", e))
      }

      function C(e) {
        h = "pointer", ("mousedown" === e.type || "pointerdown" === e.type) && (y = !0, k("pointer", e))
      }

      function S(e) {
        (0 === e.mozInputSource && e.isTrusted || (d() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)) && (y = !0, h = "virtual")
      }

      function x(e) {
        e.target !== window && e.target !== document && (y || b || (h = "virtual", k("virtual", e)), y = !1, b = !1)
      }

      function P() {
        y = !1, b = !0
      }

      function T(e) {
        if ("undefined" == typeof window || g.get(p(e))) return;
        let t = p(e),
          n = f(e),
          r = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          y = !0, r.apply(this, arguments)
        }, n.addEventListener("keydown", w, !0), n.addEventListener("keyup", w, !0), n.addEventListener("click", S, !0), t.addEventListener("focus", x, !0), t.addEventListener("blur", P, !1), "undefined" != typeof PointerEvent ? (n.addEventListener("pointerdown", C, !0), n.addEventListener("pointermove", C, !0), n.addEventListener("pointerup", C, !0)) : (n.addEventListener("mousedown", C, !0), n.addEventListener("mousemove", C, !0), n.addEventListener("mouseup", C, !0)), t.addEventListener("beforeunload", () => {
          j(e)
        }, {
          once: !0
        }), g.set(t, {
          focus: r
        })
      }
      let j = (e, t) => {
        let n = p(e),
          r = f(e);
        t && r.removeEventListener("DOMContentLoaded", t), g.has(n) && (n.HTMLElement.prototype.focus = g.get(n).focus, r.removeEventListener("keydown", w, !0), r.removeEventListener("keyup", w, !0), r.removeEventListener("click", S, !0), n.removeEventListener("focus", x, !0), n.removeEventListener("blur", P, !1), "undefined" != typeof PointerEvent ? (r.removeEventListener("pointerdown", C, !0), r.removeEventListener("pointermove", C, !0), r.removeEventListener("pointerup", C, !0)) : (r.removeEventListener("mousedown", C, !0), r.removeEventListener("mousemove", C, !0), r.removeEventListener("mouseup", C, !0)), g.delete(n))
      };

      function L() {
        return "pointer" !== h
      }
      "undefined" != typeof document && function(e) {
        let t;
        let n = f(void 0);
        "loading" !== n.readyState ? T(void 0) : (t = () => {
          T(void 0)
        }, n.addEventListener("DOMContentLoaded", t)), () => j(e, t)
      }();
      let O = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]),
        A = "undefined" != typeof document ? m.useLayoutEffect : () => {};
      class F {
        isDefaultPrevented() {
          return this.nativeEvent.defaultPrevented
        }
        preventDefault() {
          this.defaultPrevented = !0, this.nativeEvent.preventDefault()
        }
        stopPropagation() {
          this.nativeEvent.stopPropagation(), this.isPropagationStopped = () => !0
        }
        isPropagationStopped() {
          return !1
        }
        persist() {}
        constructor(e, t) {
          this.nativeEvent = t, this.target = t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget, this.bubbles = t.bubbles, this.cancelable = t.cancelable, this.defaultPrevented = t.defaultPrevented, this.eventPhase = t.eventPhase, this.isTrusted = t.isTrusted, this.timeStamp = t.timeStamp, this.type = e
        }
      }

      function M(e) {
        let t = (0, m.useRef)({
          isFocused: !1,
          observer: null
        });
        A(() => {
          let e = t.current;
          return () => {
            e.observer && (e.observer.disconnect(), e.observer = null)
          }
        }, []);
        let n = function(e) {
          let t = (0, m.useRef)(null);
          return A(() => {
            t.current = e
          }, [e]), (0, m.useCallback)((...e) => {
            let n = t.current;
            return null == n ? void 0 : n(...e)
          }, [])
        }(t => {
          null == e || e(t)
        });
        return (0, m.useCallback)(e => {
          if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
            t.current.isFocused = !0;
            let r = e.target;
            r.addEventListener("focusout", e => {
              t.current.isFocused = !1, r.disabled && n(new F("blur", e)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
            }, {
              once: !0
            }), t.current.observer = new MutationObserver(() => {
              if (t.current.isFocused && r.disabled) {
                var e;
                null === (e = t.current.observer) || void 0 === e || e.disconnect();
                let n = r === document.activeElement ? null : document.activeElement;
                r.dispatchEvent(new FocusEvent("blur", {
                  relatedTarget: n
                })), r.dispatchEvent(new FocusEvent("focusout", {
                  bubbles: !0,
                  relatedTarget: n
                }))
              }
            }), t.current.observer.observe(r, {
              attributes: !0,
              attributeFilter: ["disabled"]
            })
          }
        }, [n])
      }

      function D(e = {}) {
        var t, n, r;
        let {
          autoFocus: o = !1,
          isTextInput: i,
          within: u
        } = e, c = (0, m.useRef)({
          isFocused: !1,
          isFocusVisible: o || L()
        }), [a, s] = (0, m.useState)(!1), [l, d] = (0, m.useState)(() => c.current.isFocused && c.current.isFocusVisible), h = (0, m.useCallback)(() => d(c.current.isFocused && c.current.isFocusVisible), []), g = (0, m.useCallback)(e => {
          c.current.isFocused = e, s(e), h()
        }, [h]);
        t = e => {
          c.current.isFocusVisible = e, h()
        }, n = [], r = {
          isTextInput: i
        }, T(), (0, m.useEffect)(() => {
          let e = (e, n) => {
            (function(e, t, n) {
              var r;
              let o = "undefined" != typeof window ? p(null == n ? void 0 : n.target).HTMLInputElement : HTMLInputElement,
                i = "undefined" != typeof window ? p(null == n ? void 0 : n.target).HTMLTextAreaElement : HTMLTextAreaElement,
                u = "undefined" != typeof window ? p(null == n ? void 0 : n.target).HTMLElement : HTMLElement,
                c = "undefined" != typeof window ? p(null == n ? void 0 : n.target).KeyboardEvent : KeyboardEvent;
              return !((e = e || (null == n ? void 0 : n.target) instanceof o && !O.has(null == n ? void 0 : null === (r = n.target) || void 0 === r ? void 0 : r.type) || (null == n ? void 0 : n.target) instanceof i || (null == n ? void 0 : n.target) instanceof u && (null == n ? void 0 : n.target.isContentEditable)) && "keyboard" === t && n instanceof c && !E[n.key])
            })(!!(null == r ? void 0 : r.isTextInput), e, n) && t(L())
          };
          return v.add(e), () => {
            v.delete(e)
          }
        }, n);
        let {
          focusProps: y
        } = function(e) {
          let {
            isDisabled: t,
            onFocus: n,
            onBlur: r,
            onFocusChange: o
          } = e, i = (0, m.useCallback)(e => {
            if (e.target === e.currentTarget) return r && r(e), o && o(!1), !0
          }, [r, o]), u = M(i), c = (0, m.useCallback)(e => {
            let t = f(e.target);
            e.target === e.currentTarget && t.activeElement === e.target && (n && n(e), o && o(!0), u(e))
          }, [o, n, u]);
          return {
            focusProps: {
              onFocus: !t && (n || o || r) ? c : void 0,
              onBlur: !t && (r || o) ? i : void 0
            }
          }
        }({
          isDisabled: u,
          onFocusChange: g
        }), {
          focusWithinProps: b
        } = function(e) {
          let {
            isDisabled: t,
            onBlurWithin: n,
            onFocusWithin: r,
            onFocusWithinChange: o
          } = e, i = (0, m.useRef)({
            isFocusWithin: !1
          }), u = (0, m.useCallback)(e => {
            i.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (i.current.isFocusWithin = !1, n && n(e), o && o(!1))
          }, [n, o, i]), c = M(u), a = (0, m.useCallback)(e => {
            i.current.isFocusWithin || document.activeElement !== e.target || (r && r(e), o && o(!0), i.current.isFocusWithin = !0, c(e))
          }, [r, o, c]);
          return t ? {
            focusWithinProps: {
              onFocus: void 0,
              onBlur: void 0
            }
          } : {
            focusWithinProps: {
              onFocus: a,
              onBlur: u
            }
          }
        }({
          isDisabled: !u,
          onFocusWithinChange: g
        });
        return {
          isFocused: a,
          isFocusVisible: l,
          focusProps: u ? b : y
        }
      }
    },
    8419: function(e, t, n) {
      "use strict";
      n.d(t, {
        X: function() {
          return s
        }
      });
      var r = n(7294);
      let o = !1,
        i = 0;

      function u() {
        o = !0, setTimeout(() => {
          o = !1
        }, 50)
      }

      function c(e) {
        "touch" === e.pointerType && u()
      }

      function a() {
        if ("undefined" != typeof document) return "undefined" != typeof PointerEvent ? document.addEventListener("pointerup", c) : document.addEventListener("touchend", u), i++, () => {
          --i > 0 || ("undefined" != typeof PointerEvent ? document.removeEventListener("pointerup", c) : document.removeEventListener("touchend", u))
        }
      }

      function s(e) {
        let {
          onHoverStart: t,
          onHoverChange: n,
          onHoverEnd: i,
          isDisabled: u
        } = e, [c, s] = (0, r.useState)(!1), l = (0, r.useRef)({
          isHovered: !1,
          ignoreEmulatedMouseEvents: !1,
          pointerType: "",
          target: null
        }).current;
        (0, r.useEffect)(a, []);
        let {
          hoverProps: d,
          triggerHoverEnd: f
        } = (0, r.useMemo)(() => {
          let e = (e, r) => {
              if (l.pointerType = r, u || "touch" === r || l.isHovered || !e.currentTarget.contains(e.target)) return;
              l.isHovered = !0;
              let o = e.currentTarget;
              l.target = o, t && t({
                type: "hoverstart",
                target: o,
                pointerType: r
              }), n && n(!0), s(!0)
            },
            r = (e, t) => {
              if (l.pointerType = "", l.target = null, "touch" === t || !l.isHovered) return;
              l.isHovered = !1;
              let r = e.currentTarget;
              i && i({
                type: "hoverend",
                target: r,
                pointerType: t
              }), n && n(!1), s(!1)
            },
            c = {};
          return "undefined" != typeof PointerEvent ? (c.onPointerEnter = t => {
            o && "mouse" === t.pointerType || e(t, t.pointerType)
          }, c.onPointerLeave = e => {
            !u && e.currentTarget.contains(e.target) && r(e, e.pointerType)
          }) : (c.onTouchStart = () => {
            l.ignoreEmulatedMouseEvents = !0
          }, c.onMouseEnter = t => {
            l.ignoreEmulatedMouseEvents || o || e(t, "mouse"), l.ignoreEmulatedMouseEvents = !1
          }, c.onMouseLeave = e => {
            !u && e.currentTarget.contains(e.target) && r(e, "mouse")
          }), {
            hoverProps: c,
            triggerHoverEnd: r
          }
        }, [t, n, i, u, l]);
        return (0, r.useEffect)(() => {
          u && f({
            currentTarget: l.target
          }, l.pointerType)
        }, [u]), {
          hoverProps: d,
          isHovered: c
        }
      }
    },
    230: function(e, t, n) {
      "use strict";
      n.d(t, {
        i: function() {
          return p
        }
      });
      var r = n(5893),
        o = n(7294);
      let i = ({
          text: e,
          ...t
        }) => {
          let {
            modifiers: n,
            missingModifierTypes: o
          } = f();
          return Object.keys(t).reduce((e, i) => {
            if (!t[i]) return e;
            let u = n[i];
            return u ? (0, r.jsx)(u, {
              children: e
            }) : (o.includes(i) || (console.warn(`[@strapi/block-react-renderer] No component found for modifier "${i}"`), o.push(i)), e)
          }, (0, r.jsx)(r.Fragment, {
            children: e
          }))
        },
        u = ["image"],
        c = e => {
          let {
            children: t,
            type: n,
            ...r
          } = e;
          if ("code" === n) {
            let t = e => e.reduce((e, n) => "text" === n.type ? e.concat(n.text) : "link" === n.type ? e.concat(t(n.children)) : e, "");
            return {
              ...r,
              plainText: t(e.children)
            }
          }
          return r
        },
        a = ({
          content: e
        }) => {
          let {
            children: t,
            type: n,
            ...s
          } = e, {
            blocks: l,
            missingBlockTypes: d
          } = f(), p = l[n];
          if (!p) return d.includes(n) || (console.warn(`[@strapi/block-react-renderer] No component found for block type "${n}"`), d.push(n)), null;
          if (u.includes(n)) return (0, r.jsx)(p, {
            ...s
          });
          if ("paragraph" === n && 1 === t.length && "text" === t[0].type && "" === t[0].text) return (0, r.jsx)("br", {});
          let m = c(e);
          return (0, r.jsx)(p, {
            ...m,
            children: t.map((e, t) => {
              if ("text" === e.type) {
                let {
                  type: n,
                  ...r
                } = e;
                return (0, o.createElement)(i, {
                  ...r,
                  key: t
                })
              }
              return (0, r.jsx)(a, {
                content: e
              }, t)
            })
          })
        },
        s = {
          blocks: {
            paragraph: e => (0, r.jsx)("p", {
              children: e.children
            }),
            quote: e => (0, r.jsx)("blockquote", {
              children: e.children
            }),
            code: e => (0, r.jsx)("pre", {
              children: (0, r.jsx)("code", {
                children: e.plainText
              })
            }),
            heading: ({
              level: e,
              children: t
            }) => {
              switch (e) {
                case 1:
                  return (0, r.jsx)("h1", {
                    children: t
                  });
                case 2:
                  return (0, r.jsx)("h2", {
                    children: t
                  });
                case 3:
                  return (0, r.jsx)("h3", {
                    children: t
                  });
                case 4:
                  return (0, r.jsx)("h4", {
                    children: t
                  });
                case 5:
                  return (0, r.jsx)("h5", {
                    children: t
                  });
                case 6:
                  return (0, r.jsx)("h6", {
                    children: t
                  })
              }
            },
            link: e => (0, r.jsx)("a", {
              href: e.url,
              children: e.children
            }),
            list: e => "ordered" === e.format ? (0, r.jsx)("ol", {
              children: e.children
            }) : (0, r.jsx)("ul", {
              children: e.children
            }),
            "list-item": e => (0, r.jsx)("li", {
              children: e.children
            }),
            image: e => (0, r.jsx)("img", {
              src: e.image.url,
              alt: e.image.alternativeText || void 0
            })
          },
          modifiers: {
            bold: e => (0, r.jsx)("strong", {
              children: e.children
            }),
            italic: e => (0, r.jsx)("em", {
              children: e.children
            }),
            underline: e => (0, r.jsx)("u", {
              children: e.children
            }),
            strikethrough: e => (0, r.jsx)("del", {
              children: e.children
            }),
            code: e => (0, r.jsx)("code", {
              children: e.children
            })
          },
          missingBlockTypes: [],
          missingModifierTypes: []
        },
        l = o.createContext(s),
        d = ({
          children: e,
          value: t = s
        }) => {
          let n = o.useMemo(() => t, [t]);
          return (0, r.jsx)(l.Provider, {
            value: n,
            children: e
          })
        };

      function f() {
        return o.useContext(l)
      }
      let p = e => {
        let t = {
            ...s.blocks,
            ...e.blocks
          },
          n = {
            ...s.modifiers,
            ...e.modifiers
          },
          i = o.useRef([]),
          u = o.useRef([]);
        return (0, r.jsx)(d, {
          value: {
            blocks: t,
            modifiers: n,
            missingBlockTypes: i.current,
            missingModifierTypes: u.current
          },
          children: e.content.map((e, t) => (0, r.jsx)(a, {
            content: e
          }, t))
        })
      }
    },
    2859: function(e, t, n) {
      "use strict";
      n.d(t, {
        J: function() {
          return h
        }
      });
      var r, o = "https://js.stripe.com/v3",
        i = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
        u = function() {
          for (var e = document.querySelectorAll('script[src^="'.concat(o, '"]')), t = 0; t < e.length; t++) {
            var n = e[t];
            if (i.test(n.src)) return n
          }
          return null
        },
        c = function(e) {
          var t = e && !e.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
            n = document.createElement("script");
          n.src = "".concat(o).concat(t);
          var r = document.head || document.body;
          if (!r) throw Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
          return r.appendChild(n), n
        },
        a = function(e, t) {
          e && e._registerWrapper && e._registerWrapper({
            name: "stripe-js",
            version: "5.5.0",
            startTime: t
          })
        },
        s = null,
        l = null,
        d = null,
        f = function(e, t, n) {
          if (null === e) return null;
          var r = e.apply(void 0, t);
          return a(r, n), r
        },
        p = !1,
        m = function() {
          return r || (r = (null !== s ? s : (s = new Promise(function(e, t) {
            if ("undefined" == typeof window || "undefined" == typeof document) {
              e(null);
              return
            }
            if (window.Stripe, window.Stripe) {
              e(window.Stripe);
              return
            }
            try {
              var n, r = u();
              r ? r && null !== d && null !== l && (r.removeEventListener("load", d), r.removeEventListener("error", l), null === (n = r.parentNode) || void 0 === n || n.removeChild(r), r = c(null)) : r = c(null), d = function() {
                window.Stripe ? e(window.Stripe) : t(Error("Stripe.js not available"))
              }, l = function() {
                t(Error("Failed to load Stripe.js"))
              }, r.addEventListener("load", d), r.addEventListener("error", l)
            } catch (e) {
              t(e);
              return
            }
          })).catch(function(e) {
            return s = null, Promise.reject(e)
          })).catch(function(e) {
            return r = null, Promise.reject(e)
          }))
        };
      Promise.resolve().then(function() {
        return m()
      }).catch(function(e) {
        p || console.warn(e)
      });
      var h = function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        p = !0;
        var r = Date.now();
        return m().then(function(e) {
          return f(e, t, r)
        })
      }
    },
    512: function(e, t, n) {
      "use strict";
      t.Z = function() {
        for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)(e = arguments[n]) && (t = function e(t) {
          var n, r, o = "";
          if ("string" == typeof t || "number" == typeof t) o += t;
          else if ("object" == typeof t) {
            if (Array.isArray(t)) {
              var i = t.length;
              for (n = 0; n < i; n++) t[n] && (r = e(t[n])) && (o && (o += " "), o += r)
            } else
              for (r in t) t[r] && (o && (o += " "), o += r)
          }
          return o
        }(e)) && (r && (r += " "), r += t);
        return r
      }
    },
    9382: function(e, t, n) {
      "use strict";
      n.d(t, {
        Z: function() {
          return x
        }
      });
      var r = n(7294);

      function o(e) {
        return "[object Object]" === Object.prototype.toString.call(e) || Array.isArray(e)
      }

      function i(e, t) {
        let n = Object.keys(e),
          r = Object.keys(t);
        return n.length === r.length && JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) && n.every(n => {
          let r = e[n],
            u = t[n];
          return "function" == typeof r ? `${r}` == `${u}` : o(r) && o(u) ? i(r, u) : r === u
        })
      }

      function u(e) {
        return e.concat().sort((e, t) => e.name > t.name ? 1 : -1).map(e => e.options)
      }

      function c(e) {
        return "number" == typeof e
      }

      function a(e) {
        return "string" == typeof e
      }

      function s(e) {
        return "boolean" == typeof e
      }

      function l(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
      }

      function d(e) {
        return Math.abs(e)
      }

      function f(e) {
        return Math.sign(e)
      }

      function p(e) {
        return g(e).map(Number)
      }

      function m(e) {
        return e[h(e)]
      }

      function h(e) {
        return Math.max(0, e.length - 1)
      }

      function v(e, t = 0) {
        return Array.from(Array(e), (e, n) => t + n)
      }

      function g(e) {
        return Object.keys(e)
      }

      function y(e, t) {
        return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
      }

      function b() {
        let e = [],
          t = {
            add: function(n, r, o, i = {
              passive: !0
            }) {
              let u;
              return "addEventListener" in n ? (n.addEventListener(r, o, i), u = () => n.removeEventListener(r, o, i)) : (n.addListener(o), u = () => n.removeListener(o)), e.push(u), t
            },
            clear: function() {
              e = e.filter(e => e())
            }
          };
        return t
      }

      function E(e = 0, t = 0) {
        let n = d(e - t);

        function r(n) {
          return n < e || n > t
        }
        return {
          length: n,
          max: t,
          min: e,
          constrain: function(n) {
            return r(n) ? n < e ? e : t : n
          },
          reachedAny: r,
          reachedMax: function(e) {
            return e > t
          },
          reachedMin: function(t) {
            return t < e
          },
          removeOffset: function(e) {
            return n ? e - n * Math.ceil((e - t) / n) : e
          }
        }
      }

      function k(e) {
        let t = e;

        function n(e) {
          return c(e) ? e : e.get()
        }
        return {
          get: function() {
            return t
          },
          set: function(e) {
            t = n(e)
          },
          add: function(e) {
            t += n(e)
          },
          subtract: function(e) {
            t -= n(e)
          }
        }
      }

      function w(e, t) {
        let n = "x" === e.scroll ? function(e) {
            return `translate3d(${e}px,0px,0px)`
          } : function(e) {
            return `translate3d(0px,${e}px,0px)`
          },
          r = t.style,
          o = null,
          i = !1;
        return {
          clear: function() {
            i || (r.transform = "", t.getAttribute("style") || t.removeAttribute("style"))
          },
          to: function(t) {
            if (i) return;
            let u = Math.round(100 * e.direction(t)) / 100;
            u !== o && (r.transform = n(u), o = u)
          },
          toggleActive: function(e) {
            i = !e
          }
        }
      }
      let C = {
        align: "center",
        axis: "x",
        container: null,
        slides: null,
        containScroll: "trimSnaps",
        direction: "ltr",
        slidesToScroll: 1,
        inViewThreshold: 0,
        breakpoints: {},
        dragFree: !1,
        dragThreshold: 10,
        loop: !1,
        skipSnaps: !1,
        duration: 25,
        startIndex: 0,
        active: !0,
        watchDrag: !0,
        watchResize: !0,
        watchSlides: !0,
        watchFocus: !0
      };

      function S(e, t, n) {
        let r, o, i, u, x;
        let P = e.ownerDocument,
          T = P.defaultView,
          j = function(e) {
            function t(e, t) {
              return function e(t, n) {
                return [t, n].reduce((t, n) => (g(n).forEach(r => {
                  let o = t[r],
                    i = n[r],
                    u = l(o) && l(i);
                  t[r] = u ? e(o, i) : i
                }), t), {})
              }(e, t || {})
            }
            return {
              mergeOptions: t,
              optionsAtMedia: function(n) {
                let r = n.breakpoints || {},
                  o = g(r).filter(t => e.matchMedia(t).matches).map(e => r[e]).reduce((e, n) => t(e, n), {});
                return t(n, o)
              },
              optionsMediaQueries: function(t) {
                return t.map(e => g(e.breakpoints || {})).reduce((e, t) => e.concat(t), []).map(e.matchMedia)
              }
            }
          }(T),
          L = (x = [], {
            init: function(e, t) {
              return (x = t.filter(({
                options: e
              }) => !1 !== j.optionsAtMedia(e).active)).forEach(t => t.init(e, j)), t.reduce((e, t) => Object.assign(e, {
                [t.name]: t
              }), {})
            },
            destroy: function() {
              x = x.filter(e => e.destroy())
            }
          }),
          O = b(),
          A = function() {
            let e, t = {},
              n = {
                init: function(t) {
                  e = t
                },
                emit: function(r) {
                  return (t[r] || []).forEach(t => t(e, r)), n
                },
                off: function(e, r) {
                  return t[e] = (t[e] || []).filter(e => e !== r), n
                },
                on: function(e, r) {
                  return t[e] = (t[e] || []).concat([r]), n
                },
                clear: function() {
                  t = {}
                }
              };
            return n
          }(),
          {
            mergeOptions: F,
            optionsAtMedia: M,
            optionsMediaQueries: D
          } = j,
          {
            on: I,
            off: R,
            emit: N
          } = A,
          H = !1,
          B = F(C, S.globalOptions),
          U = F(B),
          V = [];

        function W(t, n) {
          !H && (U = M(B = F(B, t)), V = n || V, function() {
            let {
              container: t,
              slides: n
            } = U;
            i = (a(t) ? e.querySelector(t) : t) || e.children[0];
            let r = a(n) ? i.querySelectorAll(n) : n;
            u = [].slice.call(r || i.children)
          }(), r = function t(n) {
            let r = function(e, t, n, r, o, i, u) {
              let l, C;
              let {
                align: S,
                axis: x,
                direction: P,
                startIndex: T,
                loop: j,
                duration: L,
                dragFree: O,
                dragThreshold: A,
                inViewThreshold: F,
                slidesToScroll: M,
                skipSnaps: D,
                containScroll: I,
                watchResize: R,
                watchSlides: N,
                watchDrag: H,
                watchFocus: B
              } = i, U = {
                measure: function(e) {
                  let {
                    offsetTop: t,
                    offsetLeft: n,
                    offsetWidth: r,
                    offsetHeight: o
                  } = e;
                  return {
                    top: t,
                    right: n + r,
                    bottom: t + o,
                    left: n,
                    width: r,
                    height: o
                  }
                }
              }, V = U.measure(t), W = n.map(U.measure), q = function(e, t) {
                let n = "rtl" === t,
                  r = "y" === e,
                  o = !r && n ? -1 : 1;
                return {
                  scroll: r ? "y" : "x",
                  cross: r ? "x" : "y",
                  startEdge: r ? "top" : n ? "right" : "left",
                  endEdge: r ? "bottom" : n ? "left" : "right",
                  measureSize: function(e) {
                    let {
                      height: t,
                      width: n
                    } = e;
                    return r ? t : n
                  },
                  direction: function(e) {
                    return e * o
                  }
                }
              }(x, P), z = q.measureSize(V), _ = {
                measure: function(e) {
                  return e / 100 * z
                }
              }, Y = function(e, t) {
                let n = {
                  start: function() {
                    return 0
                  },
                  center: function(e) {
                    return (t - e) / 2
                  },
                  end: function(e) {
                    return t - e
                  }
                };
                return {
                  measure: function(r, o) {
                    return a(e) ? n[e](r) : e(t, r, o)
                  }
                }
              }(S, z), $ = !j && !!I, {
                slideSizes: K,
                slideSizesWithGaps: G,
                startGap: X,
                endGap: Q
              } = function(e, t, n, r, o, i) {
                let {
                  measureSize: u,
                  startEdge: c,
                  endEdge: a
                } = e, s = n[0] && o, l = function() {
                  if (!s) return 0;
                  let e = n[0];
                  return d(t[c] - e[c])
                }(), f = s ? parseFloat(i.getComputedStyle(m(r)).getPropertyValue(`margin-${a}`)) : 0, p = n.map(u), v = n.map((e, t, n) => {
                  let r = t === h(n);
                  return t ? r ? p[t] + f : n[t + 1][c] - e[c] : p[t] + l
                }).map(d);
                return {
                  slideSizes: p,
                  slideSizesWithGaps: v,
                  startGap: l,
                  endGap: f
                }
              }(q, V, W, n, j || !!I, o), Z = function(e, t, n, r, o, i, u, a, s) {
                let {
                  startEdge: l,
                  endEdge: f,
                  direction: v
                } = e, g = c(n);
                return {
                  groupSlides: function(e) {
                    return g ? p(e).filter(e => e % n == 0).map(t => e.slice(t, t + n)) : e.length ? p(e).reduce((n, c, s) => {
                      let p = m(n) || 0,
                        g = c === h(e),
                        y = o[l] - i[p][l],
                        b = o[l] - i[c][f],
                        E = r || 0 !== p ? 0 : v(u),
                        k = d(b - (!r && g ? v(a) : 0) - (y + E));
                      return s && k > t + 2 && n.push(c), g && n.push(e.length), n
                    }, []).map((t, n, r) => {
                      let o = Math.max(r[n - 1] || 0);
                      return e.slice(o, t)
                    }) : []
                  }
                }
              }(q, z, M, j, V, W, X, Q, 0), {
                snaps: J,
                snapsAligned: ee
              } = function(e, t, n, r, o) {
                let {
                  startEdge: i,
                  endEdge: u
                } = e, {
                  groupSlides: c
                } = o, a = c(r).map(e => m(e)[u] - e[0][i]).map(d).map(t.measure), s = r.map(e => n[i] - e[i]).map(e => -d(e)), l = c(s).map(e => e[0]).map((e, t) => e + a[t]);
                return {
                  snaps: s,
                  snapsAligned: l
                }
              }(q, Y, V, W, Z), et = -m(J) + m(G), {
                snapsContained: en,
                scrollContainLimit: er
              } = function(e, t, n, r, o) {
                let i = E(-t + e, 0),
                  u = n.map((e, t) => {
                    let {
                      min: r,
                      max: o
                    } = i, u = i.constrain(e), c = t === h(n);
                    return t ? c || 1 >= d(r - u) ? r : 1 >= d(o - u) ? o : u : o
                  }).map(e => parseFloat(e.toFixed(3))),
                  c = function() {
                    let e = u[0],
                      t = m(u);
                    return E(u.lastIndexOf(e), u.indexOf(t) + 1)
                  }();
                return {
                  snapsContained: function() {
                    if (t <= e + 2) return [i.max];
                    if ("keepSnaps" === r) return u;
                    let {
                      min: n,
                      max: o
                    } = c;
                    return u.slice(n, o)
                  }(),
                  scrollContainLimit: c
                }
              }(z, et, ee, I, 0), eo = $ ? en : ee, {
                limit: ei
              } = function(e, t, n) {
                let r = t[0];
                return {
                  limit: E(n ? r - e : m(t), r)
                }
              }(et, eo, j), eu = function e(t, n, r) {
                let {
                  constrain: o
                } = E(0, t), i = t + 1, u = c(n);

                function c(e) {
                  return r ? d((i + e) % i) : o(e)
                }

                function a() {
                  return e(t, u, r)
                }
                let s = {
                  get: function() {
                    return u
                  },
                  set: function(e) {
                    return u = c(e), s
                  },
                  add: function(e) {
                    return a().set(u + e)
                  },
                  clone: a
                };
                return s
              }(h(eo), T, j), ec = eu.clone(), ea = p(n), es = ({
                dragHandler: e,
                scrollBody: t,
                scrollBounds: n,
                options: {
                  loop: r
                }
              }) => {
                r || n.constrain(e.pointerDown()), t.seek()
              }, el = ({
                scrollBody: e,
                translate: t,
                location: n,
                offsetLocation: r,
                previousLocation: o,
                scrollLooper: i,
                slideLooper: u,
                dragHandler: c,
                animation: a,
                eventHandler: s,
                scrollBounds: l,
                options: {
                  loop: d
                }
              }, f) => {
                let p = e.settled(),
                  m = !l.shouldConstrain(),
                  h = d ? p : p && m;
                h && !c.pointerDown() && (a.stop(), s.emit("settle")), h || s.emit("scroll");
                let v = n.get() * f + o.get() * (1 - f);
                r.set(v), d && (i.loop(e.direction()), u.loop()), t.to(r.get())
              }, ed = function(e, t, n, r) {
                let o = b(),
                  i = 1e3 / 60,
                  u = null,
                  c = 0,
                  a = 0;

                function s(e) {
                  if (!a) return;
                  u || (u = e, n(), n());
                  let o = e - u;
                  for (u = e, c += o; c >= i;) n(), c -= i;
                  r(c / i), a && (a = t.requestAnimationFrame(s))
                }

                function l() {
                  t.cancelAnimationFrame(a), u = null, c = 0, a = 0
                }
                return {
                  init: function() {
                    o.add(e, "visibilitychange", () => {
                      e.hidden && (u = null, c = 0)
                    })
                  },
                  destroy: function() {
                    l(), o.clear()
                  },
                  start: function() {
                    a || (a = t.requestAnimationFrame(s))
                  },
                  stop: l,
                  update: n,
                  render: r
                }
              }(r, o, () => es(ex), e => el(ex, e)), ef = eo[eu.get()], ep = k(ef), em = k(ef), eh = k(ef), ev = k(ef), eg = function(e, t, n, r, o, i) {
                let u = 0,
                  c = 0,
                  a = o,
                  s = .68,
                  l = e.get(),
                  p = 0;

                function m(e) {
                  return a = e, v
                }

                function h(e) {
                  return s = e, v
                }
                let v = {
                  direction: function() {
                    return c
                  },
                  duration: function() {
                    return a
                  },
                  velocity: function() {
                    return u
                  },
                  seek: function() {
                    let t = r.get() - e.get(),
                      o = 0;
                    return a ? (n.set(e), u += t / a, u *= s, l += u, e.add(u), o = l - p) : (u = 0, n.set(r), e.set(r), o = t), c = f(o), p = l, v
                  },
                  settled: function() {
                    return .001 > d(r.get() - t.get())
                  },
                  useBaseFriction: function() {
                    return h(.68)
                  },
                  useBaseDuration: function() {
                    return m(o)
                  },
                  useFriction: h,
                  useDuration: m
                };
                return v
              }(ep, eh, em, ev, L, 0), ey = function(e, t, n, r, o) {
                let {
                  reachedAny: i,
                  removeOffset: u,
                  constrain: c
                } = r;

                function a(e) {
                  return e.concat().sort((e, t) => d(e) - d(t))[0]
                }

                function s(t, r) {
                  let o = [t, t + n, t - n];
                  if (!e) return t;
                  if (!r) return a(o);
                  let i = o.filter(e => f(e) === r);
                  return i.length ? a(i) : m(o) - n
                }
                return {
                  byDistance: function(n, r) {
                    let a = o.get() + n,
                      {
                        index: l,
                        distance: f
                      } = function(n) {
                        let r = e ? u(n) : c(n),
                          {
                            index: o
                          } = t.map((e, t) => ({
                            diff: s(e - r, 0),
                            index: t
                          })).sort((e, t) => d(e.diff) - d(t.diff))[0];
                        return {
                          index: o,
                          distance: r
                        }
                      }(a),
                      p = !e && i(a);
                    if (!r || p) return {
                      index: l,
                      distance: n
                    };
                    let m = n + s(t[l] - f, 0);
                    return {
                      index: l,
                      distance: m
                    }
                  },
                  byIndex: function(e, n) {
                    let r = s(t[e] - o.get(), n);
                    return {
                      index: e,
                      distance: r
                    }
                  },
                  shortcut: s
                }
              }(j, eo, et, ei, ev), eb = function(e, t, n, r, o, i, u) {
                function c(o) {
                  let c = o.distance,
                    a = o.index !== t.get();
                  i.add(c), c && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())), a && (n.set(t.get()), t.set(o.index), u.emit("select"))
                }
                return {
                  distance: function(e, t) {
                    c(o.byDistance(e, t))
                  },
                  index: function(e, n) {
                    let r = t.clone().set(e);
                    c(o.byIndex(r.get(), n))
                  }
                }
              }(ed, eu, ec, eg, ey, ev, u), eE = function(e) {
                let {
                  max: t,
                  length: n
                } = e;
                return {
                  get: function(e) {
                    return n ? -((e - t) / n) : 0
                  }
                }
              }(ei), ek = b(), ew = function(e, t, n, r) {
                let o;
                let i = {},
                  u = null,
                  c = null,
                  a = !1;
                return {
                  init: function() {
                    o = new IntersectionObserver(e => {
                      a || (e.forEach(e => {
                        i[t.indexOf(e.target)] = e
                      }), u = null, c = null, n.emit("slidesInView"))
                    }, {
                      root: e.parentElement,
                      threshold: r
                    }), t.forEach(e => o.observe(e))
                  },
                  destroy: function() {
                    o && o.disconnect(), a = !0
                  },
                  get: function(e = !0) {
                    if (e && u) return u;
                    if (!e && c) return c;
                    let t = g(i).reduce((t, n) => {
                      let r = parseInt(n),
                        {
                          isIntersecting: o
                        } = i[r];
                      return (e && o || !e && !o) && t.push(r), t
                    }, []);
                    return e && (u = t), e || (c = t), t
                  }
                }
              }(t, n, u, F), {
                slideRegistry: eC
              } = function(e, t, n, r, o, i) {
                let {
                  groupSlides: u
                } = o, {
                  min: c,
                  max: a
                } = r;
                return {
                  slideRegistry: function() {
                    let r = u(i);
                    return 1 === n.length ? [i] : e && "keepSnaps" !== t ? r.slice(c, a).map((e, t, n) => {
                      let r = t === h(n);
                      return t ? r ? v(h(i) - m(n)[0] + 1, m(n)[0]) : e : v(m(n[0]) + 1)
                    }) : r
                  }()
                }
              }($, I, eo, er, Z, ea), eS = function(e, t, n, r, o, i, u, a) {
                let l = {
                    passive: !0,
                    capture: !0
                  },
                  d = 0;

                function f(e) {
                  "Tab" === e.code && (d = new Date().getTime())
                }
                return {
                  init: function(p) {
                    a && (i.add(document, "keydown", f, !1), t.forEach((t, f) => {
                      i.add(t, "focus", t => {
                        (s(a) || a(p, t)) && function(t) {
                          if (new Date().getTime() - d > 10) return;
                          u.emit("slideFocusStart"), e.scrollLeft = 0;
                          let i = n.findIndex(e => e.includes(t));
                          c(i) && (o.useDuration(0), r.index(i, 0), u.emit("slideFocus"))
                        }(f)
                      }, l)
                    }))
                  }
                }
              }(e, n, eC, eb, eg, ek, u, B), ex = {
                ownerDocument: r,
                ownerWindow: o,
                eventHandler: u,
                containerRect: V,
                slideRects: W,
                animation: ed,
                axis: q,
                dragHandler: function(e, t, n, r, o, i, u, c, a, l, p, m, h, v, g, k, w, C, S) {
                  let {
                    cross: x,
                    direction: P
                  } = e, T = ["INPUT", "SELECT", "TEXTAREA"], j = {
                    passive: !1
                  }, L = b(), O = b(), A = E(50, 225).constrain(v.measure(20)), F = {
                    mouse: 300,
                    touch: 400
                  }, M = {
                    mouse: 500,
                    touch: 600
                  }, D = g ? 43 : 25, I = !1, R = 0, N = 0, H = !1, B = !1, U = !1, V = !1;

                  function W(e) {
                    if (!y(e, r) && e.touches.length >= 2) return q(e);
                    let t = i.readPoint(e),
                      n = i.readPoint(e, x),
                      u = d(t - R),
                      a = d(n - N);
                    if (!B && !V && (!e.cancelable || !(B = u > a))) return q(e);
                    let s = i.pointerMove(e);
                    u > k && (U = !0), l.useFriction(.3).useDuration(.75), c.start(), o.add(P(s)), e.preventDefault()
                  }

                  function q(e) {
                    let t = p.byDistance(0, !1).index !== m.get(),
                      n = i.pointerUp(e) * (g ? M : F)[V ? "mouse" : "touch"],
                      r = function(e, t) {
                        let n = m.add(-1 * f(e)),
                          r = p.byDistance(e, !g).distance;
                        return g || d(e) < A ? r : w && t ? .5 * r : p.byIndex(n.get(), 0).distance
                      }(P(n), t),
                      o = function(e, t) {
                        var n, r;
                        if (0 === e || 0 === t || d(e) <= d(t)) return 0;
                        let o = (n = d(e), r = d(t), d(n - r));
                        return d(o / e)
                      }(n, r);
                    B = !1, H = !1, O.clear(), l.useDuration(D - 10 * o).useFriction(.68 + o / 50), a.distance(r, !g), V = !1, h.emit("pointerUp")
                  }

                  function z(e) {
                    U && (e.stopPropagation(), e.preventDefault(), U = !1)
                  }
                  return {
                    init: function(e) {
                      S && L.add(t, "dragstart", e => e.preventDefault(), j).add(t, "touchmove", () => void 0, j).add(t, "touchend", () => void 0).add(t, "touchstart", c).add(t, "mousedown", c).add(t, "touchcancel", q).add(t, "contextmenu", q).add(t, "click", z, !0);

                      function c(c) {
                        (s(S) || S(e, c)) && function(e) {
                          let c = y(e, r);
                          V = c, U = g && c && !e.buttons && I, I = d(o.get() - u.get()) >= 2, c && 0 !== e.button || function(e) {
                            let t = e.nodeName || "";
                            return T.includes(t)
                          }(e.target) || (H = !0, i.pointerDown(e), l.useFriction(0).useDuration(0), o.set(u), function() {
                            let e = V ? n : t;
                            O.add(e, "touchmove", W, j).add(e, "touchend", q).add(e, "mousemove", W, j).add(e, "mouseup", q)
                          }(), R = i.readPoint(e), N = i.readPoint(e, x), h.emit("pointerDown"))
                        }(c)
                      }
                    },
                    destroy: function() {
                      L.clear(), O.clear()
                    },
                    pointerDown: function() {
                      return H
                    }
                  }
                }(q, e, r, o, ev, function(e, t) {
                  let n, r;

                  function o(e) {
                    return e.timeStamp
                  }

                  function i(n, r) {
                    let o = r || e.scroll,
                      i = `client${"x"===o?"X":"Y"}`;
                    return (y(n, t) ? n : n.touches[0])[i]
                  }
                  return {
                    pointerDown: function(e) {
                      return n = e, r = e, i(e)
                    },
                    pointerMove: function(e) {
                      let t = i(e) - i(r),
                        u = o(e) - o(n) > 170;
                      return r = e, u && (n = e), t
                    },
                    pointerUp: function(e) {
                      if (!n || !r) return 0;
                      let t = i(r) - i(n),
                        u = o(e) - o(n),
                        c = o(e) - o(r) > 170,
                        a = t / u;
                      return u && !c && d(a) > .1 ? a : 0
                    },
                    readPoint: i
                  }
                }(q, o), ep, ed, eb, eg, ey, eu, u, _, O, A, D, 0, H),
                eventStore: ek,
                percentOfView: _,
                index: eu,
                indexPrevious: ec,
                limit: ei,
                location: ep,
                offsetLocation: eh,
                previousLocation: em,
                options: i,
                resizeHandler: function(e, t, n, r, o, i, u) {
                  let c, a;
                  let l = [e].concat(r),
                    f = [],
                    p = !1;

                  function m(e) {
                    return o.measureSize(u.measure(e))
                  }
                  return {
                    init: function(o) {
                      i && (a = m(e), f = r.map(m), c = new ResizeObserver(n => {
                        (s(i) || i(o, n)) && function(n) {
                          for (let i of n) {
                            if (p) return;
                            let n = i.target === e,
                              u = r.indexOf(i.target),
                              c = n ? a : f[u];
                            if (d(m(n ? e : r[u]) - c) >= .5) {
                              o.reInit(), t.emit("resize");
                              break
                            }
                          }
                        }(n)
                      }), n.requestAnimationFrame(() => {
                        l.forEach(e => c.observe(e))
                      }))
                    },
                    destroy: function() {
                      p = !0, c && c.disconnect()
                    }
                  }
                }(t, u, o, n, q, R, U),
                scrollBody: eg,
                scrollBounds: function(e, t, n, r, o) {
                  let i = o.measure(10),
                    u = o.measure(50),
                    c = E(.1, .99),
                    a = !1;

                  function s() {
                    return !!(!a && e.reachedAny(n.get()) && e.reachedAny(t.get()))
                  }
                  return {
                    shouldConstrain: s,
                    constrain: function(o) {
                      if (!s()) return;
                      let a = e.reachedMin(t.get()) ? "min" : "max",
                        l = d(e[a] - t.get()),
                        f = n.get() - t.get(),
                        p = c.constrain(l / u);
                      n.subtract(f * p), !o && d(f) < i && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction())
                    },
                    toggleActive: function(e) {
                      a = !e
                    }
                  }
                }(ei, eh, ev, eg, _),
                scrollLooper: function(e, t, n, r) {
                  let {
                    reachedMin: o,
                    reachedMax: i
                  } = E(t.min + .1, t.max + .1);
                  return {
                    loop: function(t) {
                      if (!(1 === t ? i(n.get()) : -1 === t && o(n.get()))) return;
                      let u = -1 * t * e;
                      r.forEach(e => e.add(u))
                    }
                  }
                }(et, ei, eh, [ep, eh, em, ev]),
                scrollProgress: eE,
                scrollSnapList: eo.map(eE.get),
                scrollSnaps: eo,
                scrollTarget: ey,
                scrollTo: eb,
                slideLooper: function(e, t, n, r, o, i, u, c, a) {
                  let s = p(o),
                    l = m(f(p(o).reverse(), u[0]), n, !1).concat(m(f(s, t - u[0] - 1), -n, !0));

                  function d(e, t) {
                    return e.reduce((e, t) => e - o[t], t)
                  }

                  function f(e, t) {
                    return e.reduce((e, n) => d(e, t) > 0 ? e.concat([n]) : e, [])
                  }

                  function m(o, u, s) {
                    let l = i.map((e, n) => ({
                      start: e - r[n] + .5 + u,
                      end: e + t - .5 + u
                    }));
                    return o.map(t => {
                      let r = s ? 0 : -n,
                        o = s ? n : 0,
                        i = l[t][s ? "end" : "start"];
                      return {
                        index: t,
                        loopPoint: i,
                        slideLocation: k(-1),
                        translate: w(e, a[t]),
                        target: () => c.get() > i ? r : o
                      }
                    })
                  }
                  return {
                    canLoop: function() {
                      return l.every(({
                        index: e
                      }) => .1 >= d(s.filter(t => t !== e), t))
                    },
                    clear: function() {
                      l.forEach(e => e.translate.clear())
                    },
                    loop: function() {
                      l.forEach(e => {
                        let {
                          target: t,
                          translate: n,
                          slideLocation: r
                        } = e, o = t();
                        o !== r.get() && (n.to(o), r.set(o))
                      })
                    },
                    loopPoints: l
                  }
                }(q, z, et, K, G, J, eo, eh, n),
                slideFocus: eS,
                slidesHandler: (C = !1, {
                  init: function(e) {
                    N && (l = new MutationObserver(t => {
                      !C && (s(N) || N(e, t)) && function(t) {
                        for (let n of t)
                          if ("childList" === n.type) {
                            e.reInit(), u.emit("slidesChanged");
                            break
                          }
                      }(t)
                    })).observe(t, {
                      childList: !0
                    })
                  },
                  destroy: function() {
                    l && l.disconnect(), C = !0
                  }
                }),
                slidesInView: ew,
                slideIndexes: ea,
                slideRegistry: eC,
                slidesToScroll: Z,
                target: ev,
                translate: w(q, t)
              };
              return ex
            }(e, i, u, P, T, n, A);
            return n.loop && !r.slideLooper.canLoop() ? t(Object.assign({}, n, {
              loop: !1
            })) : r
          }(U), D([B, ...V.map(({
            options: e
          }) => e)]).forEach(e => O.add(e, "change", q)), U.active && (r.translate.to(r.location.get()), r.animation.init(), r.slidesInView.init(), r.slideFocus.init($), r.eventHandler.init($), r.resizeHandler.init($), r.slidesHandler.init($), r.options.loop && r.slideLooper.loop(), i.offsetParent && u.length && r.dragHandler.init($), o = L.init($, V)))
        }

        function q(e, t) {
          let n = Y();
          z(), W(F({
            startIndex: n
          }, e), t), A.emit("reInit")
        }

        function z() {
          r.dragHandler.destroy(), r.eventStore.clear(), r.translate.clear(), r.slideLooper.clear(), r.resizeHandler.destroy(), r.slidesHandler.destroy(), r.slidesInView.destroy(), r.animation.destroy(), L.destroy(), O.clear()
        }

        function _(e, t, n) {
          U.active && !H && (r.scrollBody.useBaseFriction().useDuration(!0 === t ? 0 : U.duration), r.scrollTo.index(e, n || 0))
        }

        function Y() {
          return r.index.get()
        }
        let $ = {
          canScrollNext: function() {
            return r.index.add(1).get() !== Y()
          },
          canScrollPrev: function() {
            return r.index.add(-1).get() !== Y()
          },
          containerNode: function() {
            return i
          },
          internalEngine: function() {
            return r
          },
          destroy: function() {
            H || (H = !0, O.clear(), z(), A.emit("destroy"), A.clear())
          },
          off: R,
          on: I,
          emit: N,
          plugins: function() {
            return o
          },
          previousScrollSnap: function() {
            return r.indexPrevious.get()
          },
          reInit: q,
          rootNode: function() {
            return e
          },
          scrollNext: function(e) {
            _(r.index.add(1).get(), e, -1)
          },
          scrollPrev: function(e) {
            _(r.index.add(-1).get(), e, 1)
          },
          scrollProgress: function() {
            return r.scrollProgress.get(r.location.get())
          },
          scrollSnapList: function() {
            return r.scrollSnapList
          },
          scrollTo: _,
          selectedScrollSnap: Y,
          slideNodes: function() {
            return u
          },
          slidesInView: function() {
            return r.slidesInView.get()
          },
          slidesNotInView: function() {
            return r.slidesInView.get(!1)
          }
        };
        return W(t, n), setTimeout(() => A.emit("init"), 0), $
      }

      function x(e = {}, t = []) {
        let n = (0, r.useRef)(e),
          o = (0, r.useRef)(t),
          [c, a] = (0, r.useState)(),
          [s, l] = (0, r.useState)(),
          d = (0, r.useCallback)(() => {
            c && c.reInit(n.current, o.current)
          }, [c]);
        return (0, r.useEffect)(() => {
          i(n.current, e) || (n.current = e, d())
        }, [e, d]), (0, r.useEffect)(() => {
          ! function(e, t) {
            if (e.length !== t.length) return !1;
            let n = u(e),
              r = u(t);
            return n.every((e, t) => i(e, r[t]))
          }(o.current, t) && (o.current = t, d())
        }, [t, d]), (0, r.useEffect)(() => {
          if ("undefined" != typeof window && window.document && window.document.createElement && s) {
            S.globalOptions = x.globalOptions;
            let e = S(s, n.current, o.current);
            return a(e), () => e.destroy()
          }
          a(void 0)
        }, [s, a]), [l, c]
      }
      S.globalOptions = void 0, x.globalOptions = void 0
    },
    3664: function(e, t, n) {
      "use strict";
      n.d(t, {
        X: function() {
          return E
        }
      });
      var r = n(7775),
        o = n(8419),
        i = n(7294),
        u = n(3233),
        c = n(5246),
        a = n(8354),
        s = n(9327),
        l = n(1857),
        d = n(4872),
        f = n(1831),
        p = n(99),
        m = n(7257),
        h = n(2983),
        v = n(7895),
        g = n(9138),
        y = n(1237),
        b = n(862);
      let E = (0, v.yV)(function(e, t) {
        let n = (0, i.useId)(),
          E = (0, p.Q)(),
          k = (0, d.B)(),
          {
            id: w = E || "headlessui-checkbox-".concat(n),
            disabled: C = k || !1,
            autoFocus: S = !1,
            checked: x,
            defaultChecked: P,
            onChange: T,
            name: j,
            value: L,
            form: O,
            indeterminate: A = !1,
            ...F
          } = e,
          M = (0, l.L)(P),
          [D, I] = (0, s.q)(x, T, null != M && M),
          R = (0, b.wp)(),
          N = (0, g.zH)(),
          H = (0, c.G)(),
          [B, U] = (0, i.useState)(!1),
          V = (0, a.z)(() => {
            U(!0), null == I || I(!D), H.nextFrame(() => {
              U(!1)
            })
          }),
          W = (0, a.z)(e => {
            if ((0, m.P)(e.currentTarget)) return e.preventDefault();
            e.preventDefault(), V()
          }),
          q = (0, a.z)(e => {
            e.key === y.R.Space ? (e.preventDefault(), V()) : e.key === y.R.Enter && (0, h.g)(e.currentTarget)
          }),
          z = (0, a.z)(e => e.preventDefault()),
          {
            isFocusVisible: _,
            focusProps: Y
          } = (0, r.F)({
            autoFocus: S
          }),
          {
            isHovered: $,
            hoverProps: K
          } = (0, o.X)({
            isDisabled: C
          }),
          {
            pressed: G,
            pressProps: X
          } = function() {
            let {
              disabled: e = !1
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = (0, i.useRef)(null), [n, r] = (0, i.useState)(!1), o = (0, c.G)(), s = (0, a.z)(() => {
              t.current = null, r(!1), o.dispose()
            }), l = (0, a.z)(e => {
              if (o.dispose(), null === t.current) {
                t.current = e.currentTarget, r(!0);
                {
                  let n = (0, u.r)(e.currentTarget);
                  o.addEventListener(n, "pointerup", s, !1), o.addEventListener(n, "pointermove", e => {
                    if (t.current) {
                      var n, o;
                      let i, u;
                      r((i = e.width / 2, u = e.height / 2, n = {
                        top: e.clientY - u,
                        right: e.clientX + i,
                        bottom: e.clientY + u,
                        left: e.clientX - i
                      }, o = t.current.getBoundingClientRect(), !(!n || !o || n.right < o.left || n.left > o.right || n.bottom < o.top || n.top > o.bottom)))
                    }
                  }, !1), o.addEventListener(n, "pointercancel", s, !1)
                }
              }
            });
            return {
              pressed: n,
              pressProps: e ? {} : {
                onPointerDown: l,
                onPointerUp: s,
                onClick: s
              }
            }
          }({
            disabled: C
          }),
          Q = (0, v.dG)({
            ref: t,
            id: w,
            role: "checkbox",
            "aria-checked": A ? "mixed" : D ? "true" : "false",
            "aria-labelledby": R,
            "aria-describedby": N,
            "aria-disabled": !!C || void 0,
            indeterminate: A ? "true" : void 0,
            tabIndex: C ? void 0 : 0,
            onKeyUp: C ? void 0 : q,
            onKeyPress: C ? void 0 : z,
            onClick: C ? void 0 : W
          }, Y, K, X),
          Z = (0, i.useMemo)(() => ({
            checked: D,
            disabled: C,
            hover: $,
            focus: _,
            active: G,
            indeterminate: A,
            changing: B,
            autofocus: S
          }), [D, A, C, $, _, G, B, S]),
          J = (0, i.useCallback)(() => {
            if (void 0 !== M) return null == I ? void 0 : I(M)
          }, [I, M]),
          ee = (0, v.L6)();
        return i.createElement(i.Fragment, null, null != j && i.createElement(f.Mt, {
          disabled: C,
          data: {
            [j]: L || "on"
          },
          overrides: {
            type: "checkbox",
            checked: D
          },
          form: O,
          onReset: J
        }), ee({
          ourProps: Q,
          theirProps: F,
          slot: Z,
          defaultTag: "span",
          name: "Checkbox"
        }))
      })
    },
    9138: function(e, t, n) {
      "use strict";
      n.d(t, {
        dk: function() {
          return f
        },
        fw: function() {
          return d
        },
        zH: function() {
          return l
        }
      });
      var r = n(7294),
        o = n(8354),
        i = n(7110),
        u = n(6577),
        c = n(4872),
        a = n(7895);
      let s = (0, r.createContext)(null);

      function l() {
        var e, t;
        return null != (t = null == (e = (0, r.useContext)(s)) ? void 0 : e.value) ? t : void 0
      }

      function d() {
        let [e, t] = (0, r.useState)([]);
        return [e.length > 0 ? e.join(" ") : void 0, (0, r.useMemo)(() => function(e) {
          let n = (0, o.z)(e => (t(t => [...t, e]), () => t(t => {
              let n = t.slice(),
                r = n.indexOf(e);
              return -1 !== r && n.splice(r, 1), n
            }))),
            i = (0, r.useMemo)(() => ({
              register: n,
              slot: e.slot,
              name: e.name,
              props: e.props,
              value: e.value
            }), [n, e.slot, e.name, e.props, e.value]);
          return r.createElement(s.Provider, {
            value: i
          }, e.children)
        }, [t])]
      }
      s.displayName = "DescriptionContext";
      let f = Object.assign((0, a.yV)(function(e, t) {
        let n = (0, r.useId)(),
          o = (0, c.B)(),
          {
            id: l = "headlessui-description-".concat(n),
            ...d
          } = e,
          f = function e() {
            let t = (0, r.useContext)(s);
            if (null === t) {
              let t = Error("You used a <Description /> component, but it is not inside a relevant parent.");
              throw Error.captureStackTrace && Error.captureStackTrace(t, e), t
            }
            return t
          }(),
          p = (0, u.T)(t);
        (0, i.e)(() => f.register(l), [l, f.register]);
        let m = o || !1,
          h = (0, r.useMemo)(() => ({
            ...f.slot,
            disabled: m
          }), [f.slot, m]),
          v = {
            ref: p,
            ...f.props,
            id: l
          };
        return (0, a.L6)()({
          ourProps: v,
          theirProps: d,
          slot: h,
          defaultTag: "p",
          name: f.name || "Description"
        })
      }), {})
    },
    9961: function(e, t, n) {
      "use strict";
      n.d(t, {
        g: function() {
          return l
        }
      });
      var r = n(7294),
        o = n(4872),
        i = n(1831),
        u = n(99),
        c = n(7895),
        a = n(9138),
        s = n(862);
      let l = (0, c.yV)(function(e, t) {
        let n = "headlessui-control-".concat((0, r.useId)()),
          [l, d] = (0, s.bE)(),
          [f, p] = (0, a.fw)(),
          m = (0, o.B)(),
          {
            disabled: h = m || !1,
            ...v
          } = e,
          g = (0, r.useMemo)(() => ({
            disabled: h
          }), [h]),
          y = (0, c.L6)();
        return r.createElement(o.G, {
          value: h
        }, r.createElement(d, {
          value: l
        }, r.createElement(p, {
          value: f
        }, r.createElement(u.v, {
          id: n
        }, y({
          ourProps: {
            ref: t,
            disabled: h || void 0,
            "aria-disabled": h || void 0
          },
          theirProps: {
            ...v,
            children: r.createElement(i.wR, null, "function" == typeof v.children ? v.children(g) : v.children)
          },
          slot: g,
          defaultTag: "div",
          name: "Field"
        })))))
      })
    },
    1237: function(e, t, n) {
      "use strict";
      let r;
      n.d(t, {
        R: function() {
          return o
        }
      });
      var o = ((r = o || {}).Space = " ", r.Enter = "Enter", r.Escape = "Escape", r.Backspace = "Backspace", r.Delete = "Delete", r.ArrowLeft = "ArrowLeft", r.ArrowUp = "ArrowUp", r.ArrowRight = "ArrowRight", r.ArrowDown = "ArrowDown", r.Home = "Home", r.End = "End", r.PageUp = "PageUp", r.PageDown = "PageDown", r.Tab = "Tab", r)
    },
    862: function(e, t, n) {
      "use strict";
      n.d(t, {
        __: function() {
          return p
        },
        bE: function() {
          return f
        },
        wp: function() {
          return d
        }
      });
      var r = n(7294),
        o = n(8354),
        i = n(7110),
        u = n(6577),
        c = n(4872),
        a = n(99),
        s = n(7895);
      let l = (0, r.createContext)(null);

      function d(e) {
        var t, n, o;
        let i = null != (n = null == (t = (0, r.useContext)(l)) ? void 0 : t.value) ? n : void 0;
        return (null != (o = null == e ? void 0 : e.length) ? o : 0) > 0 ? [i, ...e].filter(Boolean).join(" ") : i
      }

      function f() {
        let {
          inherit: e = !1
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = d(), [n, i] = (0, r.useState)([]), u = e ? [t, ...n].filter(Boolean) : n;
        return [u.length > 0 ? u.join(" ") : void 0, (0, r.useMemo)(() => function(e) {
          let t = (0, o.z)(e => (i(t => [...t, e]), () => i(t => {
              let n = t.slice(),
                r = n.indexOf(e);
              return -1 !== r && n.splice(r, 1), n
            }))),
            n = (0, r.useMemo)(() => ({
              register: t,
              slot: e.slot,
              name: e.name,
              props: e.props,
              value: e.value
            }), [t, e.slot, e.name, e.props, e.value]);
          return r.createElement(l.Provider, {
            value: n
          }, e.children)
        }, [i])]
      }
      l.displayName = "LabelContext";
      let p = Object.assign((0, s.yV)(function(e, t) {
        var n;
        let d = (0, r.useId)(),
          f = function e() {
            let t = (0, r.useContext)(l);
            if (null === t) {
              let t = Error("You used a <Label /> component, but it is not inside a relevant parent.");
              throw Error.captureStackTrace && Error.captureStackTrace(t, e), t
            }
            return t
          }(),
          p = (0, a.Q)(),
          m = (0, c.B)(),
          {
            id: h = "headlessui-label-".concat(d),
            htmlFor: v = null != p ? p : null == (n = f.props) ? void 0 : n.htmlFor,
            passive: g = !1,
            ...y
          } = e,
          b = (0, u.T)(t);
        (0, i.e)(() => f.register(h), [h, f.register]);
        let E = (0, o.z)(e => {
            let t = e.currentTarget;
            if (t instanceof HTMLLabelElement && e.preventDefault(), f.props && "onClick" in f.props && "function" == typeof f.props.onClick && f.props.onClick(e), t instanceof HTMLLabelElement) {
              let e = document.getElementById(t.htmlFor);
              if (e) {
                let t = e.getAttribute("disabled");
                if ("true" === t || "" === t) return;
                let n = e.getAttribute("aria-disabled");
                if ("true" === n || "" === n) return;
                (e instanceof HTMLInputElement && ("radio" === e.type || "checkbox" === e.type) || "radio" === e.role || "checkbox" === e.role || "switch" === e.role) && e.click(), e.focus({
                  preventScroll: !0
                })
              }
            }
          }),
          k = m || !1,
          w = (0, r.useMemo)(() => ({
            ...f.slot,
            disabled: k
          }), [f.slot, k]),
          C = {
            ref: b,
            ...f.props,
            id: h,
            htmlFor: v,
            onClick: E
          };
        return g && ("onClick" in C && (delete C.htmlFor, delete C.onClick), "onClick" in y && delete y.onClick), (0, s.L6)()({
          ourProps: C,
          theirProps: y,
          slot: w,
          defaultTag: v ? "label" : "div",
          name: f.name || "Label"
        })
      }), {})
    },
    9327: function(e, t, n) {
      "use strict";
      n.d(t, {
        q: function() {
          return i
        }
      });
      var r = n(7294),
        o = n(8354);

      function i(e, t, n) {
        let [i, u] = (0, r.useState)(n), c = void 0 !== e, a = (0, r.useRef)(c), s = (0, r.useRef)(!1), l = (0, r.useRef)(!1);
        return !c || a.current || s.current ? c || !a.current || l.current || (l.current = !0, a.current = c, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")) : (s.current = !0, a.current = c, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")), [c ? e : i, (0, o.z)(e => (c || u(e), null == t ? void 0 : t(e)))]
      }
    },
    1857: function(e, t, n) {
      "use strict";
      n.d(t, {
        L: function() {
          return o
        }
      });
      var r = n(7294);

      function o(e) {
        let [t] = (0, r.useState)(e);
        return t
      }
    },
    5246: function(e, t, n) {
      "use strict";
      n.d(t, {
        G: function() {
          return o
        }
      });
      var r = n(7294);

      function o() {
        let [e] = (0, r.useState)(function e() {
          let t = [],
            n = {
              addEventListener: (e, t, r, o) => (e.addEventListener(t, r, o), n.add(() => e.removeEventListener(t, r, o))),
              requestAnimationFrame() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                let o = requestAnimationFrame(...t);
                return n.add(() => cancelAnimationFrame(o))
              },
              nextFrame() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return n.requestAnimationFrame(() => n.requestAnimationFrame(...t))
              },
              setTimeout() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                let o = setTimeout(...t);
                return n.add(() => clearTimeout(o))
              },
              microTask() {
                for (var e, t = arguments.length, r = Array(t), o = 0; o < t; o++) r[o] = arguments[o];
                let i = {
                  current: !0
                };
                return e = () => {
                  i.current && r[0]()
                }, "function" == typeof queueMicrotask ? queueMicrotask(e) : Promise.resolve().then(e).catch(e => setTimeout(() => {
                  throw e
                })), n.add(() => {
                  i.current = !1
                })
              },
              style(e, t, n) {
                let r = e.style.getPropertyValue(t);
                return Object.assign(e.style, {
                  [t]: n
                }), this.add(() => {
                  Object.assign(e.style, {
                    [t]: r
                  })
                })
              },
              group(t) {
                let n = e();
                return t(n), this.add(() => n.dispose())
              },
              add: e => (t.includes(e) || t.push(e), () => {
                let n = t.indexOf(e);
                if (n >= 0)
                  for (let e of t.splice(n, 1)) e()
              }),
              dispose() {
                for (let e of t.splice(0)) e()
              }
            };
          return n
        });
        return (0, r.useEffect)(() => () => e.dispose(), [e]), e
      }
    },
    8354: function(e, t, n) {
      "use strict";
      n.d(t, {
        z: function() {
          return i
        }
      });
      var r = n(7294),
        o = n(9438);
      let i = function(e) {
        let t = (0, o.E)(e);
        return r.useCallback(function() {
          for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
          return t.current(...n)
        }, [t])
      }
    },
    7110: function(e, t, n) {
      "use strict";
      n.d(t, {
        e: function() {
          return i
        }
      });
      var r = n(7294),
        o = n(3659);
      let i = (e, t) => {
        o.O.isServer ? (0, r.useEffect)(e, t) : (0, r.useLayoutEffect)(e, t)
      }
    },
    9438: function(e, t, n) {
      "use strict";
      n.d(t, {
        E: function() {
          return i
        }
      });
      var r = n(7294),
        o = n(7110);

      function i(e) {
        let t = (0, r.useRef)(e);
        return (0, o.e)(() => {
          t.current = e
        }, [e]), t
      }
    },
    6577: function(e, t, n) {
      "use strict";
      n.d(t, {
        T: function() {
          return u
        }
      });
      var r = n(7294),
        o = n(8354);
      let i = Symbol();

      function u() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        let u = (0, r.useRef)(t);
        (0, r.useEffect)(() => {
          u.current = t
        }, [t]);
        let c = (0, o.z)(e => {
          for (let t of u.current) null != t && ("function" == typeof t ? t(e) : t.current = e)
        });
        return t.every(e => null == e || (null == e ? void 0 : e[i])) ? void 0 : c
      }
    },
    4872: function(e, t, n) {
      "use strict";
      n.d(t, {
        B: function() {
          return i
        },
        G: function() {
          return u
        }
      });
      var r = n(7294);
      let o = (0, r.createContext)(void 0);

      function i() {
        return (0, r.useContext)(o)
      }

      function u(e) {
        let {
          value: t,
          children: n
        } = e;
        return r.createElement(o.Provider, {
          value: t
        }, n)
      }
    },
    1831: function(e, t, n) {
      "use strict";
      let r;
      n.d(t, {
        Mt: function() {
          return m
        },
        wR: function() {
          return f
        }
      });
      var o = n(7294),
        i = n(3935),
        u = n(5246),
        c = n(2983),
        a = n(7895),
        s = ((r = s || {})[r.None = 1] = "None", r[r.Focusable = 2] = "Focusable", r[r.Hidden = 4] = "Hidden", r);
      let l = (0, a.yV)(function(e, t) {
          var n;
          let {
            features: r = 1,
            ...o
          } = e, i = {
            ref: t,
            "aria-hidden": (2 & r) == 2 || (null != (n = o["aria-hidden"]) ? n : void 0),
            hidden: (4 & r) == 4 || void 0,
            style: {
              position: "fixed",
              top: 1,
              left: 1,
              width: 1,
              height: 0,
              padding: 0,
              margin: -1,
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              borderWidth: "0",
              ...(4 & r) == 4 && (2 & r) != 2 && {
                display: "none"
              }
            }
          };
          return (0, a.L6)()({
            ourProps: i,
            theirProps: o,
            slot: {},
            defaultTag: "span",
            name: "Hidden"
          })
        }),
        d = (0, o.createContext)(null);

      function f(e) {
        let [t, n] = (0, o.useState)(null);
        return o.createElement(d.Provider, {
          value: {
            target: t
          }
        }, e.children, o.createElement(l, {
          features: s.Hidden,
          ref: n
        }))
      }

      function p(e) {
        let {
          children: t
        } = e, n = (0, o.useContext)(d);
        if (!n) return o.createElement(o.Fragment, null, t);
        let {
          target: r
        } = n;
        return r ? (0, i.createPortal)(o.createElement(o.Fragment, null, t), r) : null
      }

      function m(e) {
        let {
          data: t,
          form: n,
          disabled: r,
          onReset: i,
          overrides: d
        } = e, [f, m] = (0, o.useState)(null), v = (0, u.G)();
        return (0, o.useEffect)(() => {
          if (i && f) return v.addEventListener(f, "reset", i)
        }, [f, n, i]), o.createElement(p, null, o.createElement(h, {
          setForm: m,
          formId: n
        }), (0, c.t)(t).map(e => {
          let [t, i] = e;
          return o.createElement(l, {
            features: s.Hidden,
            ...(0, a.oA)({
              key: t,
              as: "input",
              type: "hidden",
              hidden: !0,
              readOnly: !0,
              form: n,
              disabled: r,
              name: t,
              value: i,
              ...d
            })
          })
        }))
      }

      function h(e) {
        let {
          setForm: t,
          formId: n
        } = e;
        return (0, o.useEffect)(() => {
          if (n) {
            let e = document.getElementById(n);
            e && t(e)
          }
        }, [t, n]), n ? null : o.createElement(l, {
          features: s.Hidden,
          as: "input",
          type: "hidden",
          hidden: !0,
          readOnly: !0,
          ref: e => {
            if (!e) return;
            let n = e.closest("form");
            n && t(n)
          }
        })
      }
    },
    99: function(e, t, n) {
      "use strict";
      n.d(t, {
        Q: function() {
          return i
        },
        v: function() {
          return u
        }
      });
      var r = n(7294);
      let o = (0, r.createContext)(void 0);

      function i() {
        return (0, r.useContext)(o)
      }

      function u(e) {
        let {
          id: t,
          children: n
        } = e;
        return r.createElement(o.Provider, {
          value: t
        }, n)
      }
    },
    7257: function(e, t, n) {
      "use strict";

      function r(e) {
        let t = e.parentElement,
          n = null;
        for (; t && !(t instanceof HTMLFieldSetElement);) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
        let r = (null == t ? void 0 : t.getAttribute("disabled")) === "";
        return !(r && function(e) {
          if (!e) return !1;
          let t = e.previousElementSibling;
          for (; null !== t;) {
            if (t instanceof HTMLLegendElement) return !1;
            t = t.previousElementSibling
          }
          return !0
        }(n)) && r
      }
      n.d(t, {
        P: function() {
          return r
        }
      })
    },
    3659: function(e, t, n) {
      "use strict";
      n.d(t, {
        O: function() {
          return c
        }
      });
      var r = Object.defineProperty,
        o = (e, t, n) => t in e ? r(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: n
        }) : e[t] = n,
        i = (e, t, n) => (o(e, "symbol" != typeof t ? t + "" : t, n), n);
      class u {
        set(e) {
          this.current !== e && (this.handoffState = "pending", this.currentId = 0, this.current = e)
        }
        reset() {
          this.set(this.detect())
        }
        nextId() {
          return ++this.currentId
        }
        get isServer() {
          return "server" === this.current
        }
        get isClient() {
          return "client" === this.current
        }
        detect() {
          return "undefined" == typeof document ? "server" : "client"
        }
        handoff() {
          "pending" === this.handoffState && (this.handoffState = "complete")
        }
        get isHandoffComplete() {
          return "complete" === this.handoffState
        }
        constructor() {
          i(this, "current", this.detect()), i(this, "handoffState", "pending"), i(this, "currentId", 0)
        }
      }
      let c = new u
    },
    2983: function(e, t, n) {
      "use strict";

      function r(e, t) {
        return e ? e + "[" + t + "]" : t
      }

      function o(e) {
        var t, n;
        let r = null != (t = null == e ? void 0 : e.form) ? t : e.closest("form");
        if (r) {
          for (let t of r.elements)
            if (t !== e && ("INPUT" === t.tagName && "submit" === t.type || "BUTTON" === t.tagName && "submit" === t.type || "INPUT" === t.nodeName && "image" === t.type)) {
              t.click();
              return
            } null == (n = r.requestSubmit) || n.call(r)
        }
      }
      n.d(t, {
        g: function() {
          return o
        },
        t: function() {
          return function e() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
            for (let [i, u] of Object.entries(t)) ! function t(n, o, i) {
              if (Array.isArray(i))
                for (let [e, u] of i.entries()) t(n, r(o, e.toString()), u);
              else i instanceof Date ? n.push([o, i.toISOString()]) : "boolean" == typeof i ? n.push([o, i ? "1" : "0"]) : "string" == typeof i ? n.push([o, i]) : "number" == typeof i ? n.push([o, "".concat(i)]) : null == i ? n.push([o, ""]) : e(i, o, n)
            }(o, r(n, i), u);
            return o
          }
        }
      })
    },
    3745: function(e, t, n) {
      "use strict";

      function r(e, t) {
        for (var n = arguments.length, o = Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) o[i - 2] = arguments[i];
        if (e in t) {
          let n = t[e];
          return "function" == typeof n ? n(...o) : n
        }
        let u = Error('Tried to handle "'.concat(e, '" but there is no handler defined. Only defined handlers are: ').concat(Object.keys(t).map(e => '"'.concat(e, '"')).join(", "), "."));
        throw Error.captureStackTrace && Error.captureStackTrace(u, r), u
      }
      n.d(t, {
        E: function() {
          return r
        }
      })
    },
    3233: function(e, t, n) {
      "use strict";
      n.d(t, {
        r: function() {
          return o
        }
      });
      var r = n(3659);

      function o(e) {
        return r.O.isServer ? null : e instanceof Node ? e.ownerDocument : null != e && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document
      }
    },
    7895: function(e, t, n) {
      "use strict";
      let r, o;
      n.d(t, {
        oA: function() {
          return v
        },
        yV: function() {
          return h
        },
        dG: function() {
          return m
        },
        L6: function() {
          return l
        }
      });
      var i = n(7294);

      function u() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return Array.from(new Set(t.flatMap(e => "string" == typeof e ? e.split(" ") : []))).filter(Boolean).join(" ")
      }
      var c = n(3745),
        a = ((r = a || {})[r.None = 0] = "None", r[r.RenderStrategy = 1] = "RenderStrategy", r[r.Static = 2] = "Static", r),
        s = ((o = s || {})[o.Unmount = 0] = "Unmount", o[o.Hidden = 1] = "Hidden", o);

      function l() {
        let e, t;
        let n = (e = (0, i.useRef)([]), t = (0, i.useCallback)(t => {
          for (let n of e.current) null != n && ("function" == typeof n ? n(t) : n.current = t)
        }, []), function() {
          for (var n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
          if (!r.every(e => null == e)) return e.current = r, t
        });
        return (0, i.useCallback)(e => (function(e) {
          let {
            ourProps: t,
            theirProps: n,
            slot: r,
            defaultTag: o,
            features: i,
            visible: u = !0,
            name: a,
            mergeRefs: s
          } = e;
          s = null != s ? s : f;
          let l = p(n, t);
          if (u) return d(l, r, o, a, s);
          let m = null != i ? i : 0;
          if (2 & m) {
            let {
              static: e = !1,
              ...t
            } = l;
            if (e) return d(t, r, o, a, s)
          }
          if (1 & m) {
            let {
              unmount: e = !0,
              ...t
            } = l;
            return (0, c.E)(e ? 0 : 1, {
              0: () => null,
              1: () => d({
                ...t,
                hidden: !0,
                style: {
                  display: "none"
                }
              }, r, o, a, s)
            })
          }
          return d(l, r, o, a, s)
        })({
          mergeRefs: n,
          ...e
        }), [n])
      }

      function d(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = arguments.length > 2 ? arguments[2] : void 0,
          r = arguments.length > 3 ? arguments[3] : void 0,
          o = arguments.length > 4 ? arguments[4] : void 0,
          {
            as: c = n,
            children: a,
            refName: s = "ref",
            ...l
          } = g(e, ["unmount", "static"]),
          d = void 0 !== e.ref ? {
            [s]: e.ref
          } : {},
          f = "function" == typeof a ? a(t) : a;
        "className" in l && l.className && "function" == typeof l.className && (l.className = l.className(t)), l["aria-labelledby"] && l["aria-labelledby"] === l.id && (l["aria-labelledby"] = void 0);
        let m = {};
        if (t) {
          let e = !1,
            n = [];
          for (let [r, o] of Object.entries(t)) "boolean" == typeof o && (e = !0), !0 === o && n.push(r.replace(/([A-Z])/g, e => "-".concat(e.toLowerCase())));
          if (e)
            for (let e of (m["data-headlessui-state"] = n.join(" "), n)) m["data-".concat(e)] = ""
        }
        if (c === i.Fragment && (Object.keys(v(l)).length > 0 || Object.keys(v(m)).length > 0)) {
          if (!(0, i.isValidElement)(f) || Array.isArray(f) && f.length > 1) {
            if (Object.keys(v(l)).length > 0) throw Error(['Passing props on "Fragment"!', "", "The current component <".concat(r, ' /> is rendering a "Fragment".'), "However we need to passthrough the following props:", Object.keys(v(l)).concat(Object.keys(v(m))).map(e => "  - ".concat(e)).join("\n"), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(e => "  - ".concat(e)).join("\n")].join("\n"))
          } else {
            let e = f.props,
              t = null == e ? void 0 : e.className,
              n = "function" == typeof t ? function() {
                for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                return u(t(...n), l.className)
              } : u(t, l.className),
              r = p(f.props, v(g(l, ["ref"])));
            for (let e in m) e in r && delete m[e];
            return (0, i.cloneElement)(f, Object.assign({}, r, m, d, {
              ref: o(i.version.split(".")[0] >= "19" ? f.props.ref : f.ref, d.ref)
            }, n ? {
              className: n
            } : {}))
          }
        }
        return (0, i.createElement)(c, Object.assign({}, g(l, ["ref"]), c !== i.Fragment && d, c !== i.Fragment && m), f)
      }

      function f() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return t.every(e => null == e) ? void 0 : e => {
          for (let n of t) null != n && ("function" == typeof n ? n(e) : n.current = e)
        }
      }

      function p() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        if (0 === t.length) return {};
        if (1 === t.length) return t[0];
        let r = {},
          o = {};
        for (let e of t)
          for (let t in e) t.startsWith("on") && "function" == typeof e[t] ? (null != o[t] || (o[t] = []), o[t].push(e[t])) : r[t] = e[t];
        if (r.disabled || r["aria-disabled"])
          for (let e in o) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(e) && (o[e] = [e => {
            var t;
            return null == (t = null == e ? void 0 : e.preventDefault) ? void 0 : t.call(e)
          }]);
        for (let e in o) Object.assign(r, {
          [e](t) {
            for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
            for (let n of o[e]) {
              if ((t instanceof Event || (null == t ? void 0 : t.nativeEvent) instanceof Event) && t.defaultPrevented) return;
              n(t, ...r)
            }
          }
        });
        return r
      }

      function m() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        if (0 === t.length) return {};
        if (1 === t.length) return t[0];
        let r = {},
          o = {};
        for (let e of t)
          for (let t in e) t.startsWith("on") && "function" == typeof e[t] ? (null != o[t] || (o[t] = []), o[t].push(e[t])) : r[t] = e[t];
        for (let e in o) Object.assign(r, {
          [e]() {
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            for (let t of o[e]) null == t || t(...n)
          }
        });
        return r
      }

      function h(e) {
        var t;
        return Object.assign((0, i.forwardRef)(e), {
          displayName: null != (t = e.displayName) ? t : e.name
        })
      }

      function v(e) {
        let t = Object.assign({}, e);
        for (let e in t) void 0 === t[e] && delete t[e];
        return t
      }

      function g(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          n = Object.assign({}, e);
        for (let e of t) e in n && delete n[e];
        return n
      }
    }
  }
]);