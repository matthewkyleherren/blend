(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5751], {
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
                s = {},
                a = o.ZP,
                l = (e, t = c) => {
                    let n = s;
                    u(e) ? (n = e, e = null, t = "dependencies" in n ? n.dependencies : c) : u(t) && (t = "dependencies" in (n = t) ? n.dependencies : c), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
                    let {
                        scope: o,
                        revertOnUpdate: l
                    } = n, f = (0, r.useRef)(!1), d = (0, r.useRef)(a.context(() => {}, o)), p = (0, r.useRef)(e => d.current.add(null, e)), m = t && t.length && !l;
                    return m && i(() => (f.current = !0, () => d.current.revert()), c), i(() => {
                        if (e && d.current.add(e, o), !m || !f.current) return () => d.current.revert()
                    }, t), {
                        context: d.current,
                        contextSafe: p.current
                    }
                };
            l.register = e => {
                a = e
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
                var s, a, l, f, d, p = {
                    exports: {}
                };
                p.exports = (function() {
                    if (d) return f;
                    d = 1;
                    var e = l ? a : (l = 1, a = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");

                    function t() {}

                    function n() {}
                    return n.resetWarningCache = t, f = function() {
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
                var m = (s = p.exports) && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s,
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
                    g = function(e) {
                        var n = t.useRef(e);
                        return t.useEffect(function() {
                            n.current = e
                        }, [e]), n.current
                    },
                    y = function(e) {
                        return null !== e && "object" === o(e)
                    },
                    v = "[object Object]",
                    b = function e(t, n) {
                        if (!y(t) || !y(n)) return t === n;
                        var r = Array.isArray(t);
                        if (r !== Array.isArray(n)) return !1;
                        var o = Object.prototype.toString.call(t) === v;
                        if (o !== (Object.prototype.toString.call(n) === v)) return !1;
                        if (!o && !r) return t === n;
                        var i = Object.keys(t),
                            u = Object.keys(n);
                        if (i.length !== u.length) return !1;
                        for (var c = {}, s = 0; s < i.length; s += 1) c[i[s]] = !0;
                        for (var a = 0; a < u.length; a += 1) c[u[a]] = !0;
                        var l = Object.keys(c);
                        return l.length === i.length && l.every(function(r) {
                            return e(t[r], n[r])
                        })
                    },
                    E = function(e, t, n) {
                        return y(e) ? Object.keys(e).reduce(function(o, u) {
                            var c = !y(t) || !b(e[u], t[u]);
                            return n.includes(u) ? (c && console.warn("Unsupported prop change: options.".concat(u, " is not a mutable property.")), o) : c ? r(r({}, o || {}), {}, i({}, u, e[u])) : o
                        }, null) : null
                    },
                    k = "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
                    C = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : k;
                        if (null === e || y(e) && "function" == typeof e.elements && "function" == typeof e.createToken && "function" == typeof e.createPaymentMethod && "function" == typeof e.confirmCardPayment) return e;
                        throw Error(t)
                    },
                    S = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : k;
                        if (y(e) && "function" == typeof e.then) return {
                            tag: "async",
                            stripePromise: Promise.resolve(e).then(function(e) {
                                return C(e, t)
                            })
                        };
                        var n = C(e, t);
                        return null === n ? {
                            tag: "empty"
                        } : {
                            tag: "sync",
                            stripe: n
                        }
                    },
                    x = function(e) {
                        e && e._registerWrapper && e.registerAppInfo && (e._registerWrapper({
                            name: "react-stripe-js",
                            version: "3.1.0"
                        }), e.registerAppInfo({
                            name: "react-stripe-js",
                            version: "3.1.0",
                            url: "https://stripe.com/docs/stripe-js/react"
                        }))
                    },
                    w = t.createContext(null);
                w.displayName = "ElementsContext";
                var j = function(e, t) {
                        if (!e) throw Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
                        return e
                    },
                    O = function(e) {
                        var n = e.stripe,
                            r = e.options,
                            o = e.children,
                            i = t.useMemo(function() {
                                return S(n)
                            }, [n]),
                            c = u(t.useState(function() {
                                return {
                                    stripe: "sync" === i.tag ? i.stripe : null,
                                    elements: "sync" === i.tag ? i.stripe.elements(r) : null
                                }
                            }), 2),
                            s = c[0],
                            a = c[1];
                        t.useEffect(function() {
                            var e = !0,
                                t = function(e) {
                                    a(function(t) {
                                        return t.stripe ? t : {
                                            stripe: e,
                                            elements: e.elements(r)
                                        }
                                    })
                                };
                            return "async" !== i.tag || s.stripe ? "sync" !== i.tag || s.stripe || t(i.stripe) : i.stripePromise.then(function(n) {
                                    n && e && t(n)
                                }),
                                function() {
                                    e = !1
                                }
                        }, [i, s, r]);
                        var l = g(n);
                        t.useEffect(function() {
                            null !== l && l !== n && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")
                        }, [l, n]);
                        var f = g(r);
                        return t.useEffect(function() {
                            if (s.elements) {
                                var e = E(r, f, ["clientSecret", "fonts"]);
                                e && s.elements.update(e)
                            }
                        }, [r, f, s.elements]), t.useEffect(function() {
                            x(s.stripe)
                        }, [s.stripe]), t.createElement(w.Provider, {
                            value: s
                        }, o)
                    };
                O.propTypes = {
                    stripe: m.any,
                    options: m.object
                };
                var P = function(e) {
                        return j(t.useContext(w), e)
                    },
                    A = function(e) {
                        return (0, e.children)(P("mounts <ElementsConsumer>"))
                    };
                A.propTypes = {
                    children: m.func.isRequired
                };
                var I = ["on", "session"],
                    L = t.createContext(null);
                L.displayName = "CheckoutSdkContext";
                var T = function(e, t) {
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
                        }(e, I);
                        return t ? r(r({}, n), t) : r(r({}, n), e.session())
                    },
                    N = function(e) {
                        var n = e.stripe,
                            r = e.options,
                            o = e.children,
                            i = t.useMemo(function() {
                                return S(n, "Invalid prop `stripe` supplied to `CheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")
                            }, [n]),
                            c = u(t.useState(null), 2),
                            s = c[0],
                            a = c[1],
                            l = u(t.useState(function() {
                                return {
                                    stripe: "sync" === i.tag ? i.stripe : null,
                                    checkoutSdk: null
                                }
                            }), 2),
                            f = l[0],
                            d = l[1],
                            p = function(e, t) {
                                d(function(n) {
                                    return n.stripe && n.checkoutSdk ? n : {
                                        stripe: e,
                                        checkoutSdk: t
                                    }
                                })
                            },
                            m = t.useRef(!1);
                        t.useEffect(function() {
                            var e = !0;
                            return "async" !== i.tag || f.stripe ? "sync" === i.tag && i.stripe && !m.current && (m.current = !0, i.stripe.initCheckout(r).then(function(e) {
                                    e && (p(i.stripe, e), e.on("change", a))
                                })) : i.stripePromise.then(function(t) {
                                    t && e && !m.current && (m.current = !0, t.initCheckout(r).then(function(e) {
                                        e && (p(t, e), e.on("change", a))
                                    }))
                                }),
                                function() {
                                    e = !1
                                }
                        }, [i, f, r, a]);
                        var h = g(n);
                        t.useEffect(function() {
                            null !== h && h !== n && console.warn("Unsupported prop change on CheckoutProvider: You cannot change the `stripe` prop after setting it.")
                        }, [h, n]);
                        var v = g(r);
                        t.useEffect(function() {
                            if (f.checkoutSdk) {
                                !r.clientSecret || y(v) || b(r.clientSecret, v.clientSecret) || console.warn("Unsupported prop change: options.clientSecret is not a mutable property.");
                                var e, t, n = null == v ? void 0 : null === (e = v.elementsOptions) || void 0 === e ? void 0 : e.appearance,
                                    o = null == r ? void 0 : null === (t = r.elementsOptions) || void 0 === t ? void 0 : t.appearance;
                                o && !b(o, n) && f.checkoutSdk.changeAppearance(o)
                            }
                        }, [r, v, f.checkoutSdk]), t.useEffect(function() {
                            x(f.stripe)
                        }, [f.stripe]);
                        var E = t.useMemo(function() {
                            return D(f.checkoutSdk, s)
                        }, [f.checkoutSdk, s]);
                        return f.checkoutSdk ? t.createElement(L.Provider, {
                            value: f
                        }, t.createElement(M.Provider, {
                            value: E
                        }, o)) : null
                    };
                N.propTypes = {
                    stripe: m.any,
                    options: m.shape({
                        clientSecret: m.string.isRequired,
                        elementsOptions: m.object
                    }).isRequired
                };
                var R = function(e) {
                        var n = t.useContext(L),
                            r = t.useContext(w);
                        if (n && r) throw Error("You cannot wrap the part of your app that ".concat(e, " in both <CheckoutProvider> and <Elements> providers."));
                        return n ? T(n, e) : j(r, e)
                    },
                    F = function(e, n) {
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
                                    s = n.options,
                                    a = void 0 === s ? {} : s,
                                    l = n.onBlur,
                                    f = n.onFocus,
                                    d = n.onReady,
                                    p = n.onChange,
                                    m = n.onEscape,
                                    y = n.onClick,
                                    v = n.onLoadError,
                                    b = n.onLoaderStart,
                                    k = n.onNetworksChange,
                                    C = n.onConfirm,
                                    S = n.onCancel,
                                    x = n.onShippingAddressChange,
                                    w = n.onShippingRateChange,
                                    j = R("mounts <".concat(r, ">")),
                                    O = "elements" in j ? j.elements : null,
                                    P = "checkoutSdk" in j ? j.checkoutSdk : null,
                                    A = u(t.useState(null), 2),
                                    I = A[0],
                                    L = A[1],
                                    T = t.useRef(null),
                                    M = t.useRef(null);
                                h(I, "blur", l), h(I, "focus", f), h(I, "escape", m), h(I, "click", y), h(I, "loaderror", v), h(I, "loaderstart", b), h(I, "networkschange", k), h(I, "confirm", C), h(I, "cancel", S), h(I, "shippingaddresschange", x), h(I, "shippingratechange", w), h(I, "change", p), d && (o = "expressCheckout" === e ? d : function() {
                                    d(I)
                                }), h(I, "ready", o), t.useLayoutEffect(function() {
                                    if (null === T.current && null !== M.current && (O || P)) {
                                        var t = null;
                                        P ? t = P.createElement(e, a) : O && (t = O.create(e, a)), T.current = t, L(t), t && t.mount(M.current)
                                    }
                                }, [O, P, a]);
                                var D = g(a);
                                return t.useEffect(function() {
                                    if (T.current) {
                                        var e = E(a, D, ["paymentRequest"]);
                                        e && "update" in T.current && T.current.update(e)
                                    }
                                }, [a, D]), t.useLayoutEffect(function() {
                                    return function() {
                                        if (T.current && "function" == typeof T.current.destroy) try {
                                            T.current.destroy(), T.current = null
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
                    B = "undefined" == typeof window,
                    U = t.createContext(null);
                U.displayName = "EmbeddedCheckoutProviderContext";
                var _ = function() {
                        var e = t.useContext(U);
                        if (!e) throw Error("<EmbeddedCheckout> must be used within <EmbeddedCheckoutProvider>");
                        return e
                    },
                    q = B ? function(e) {
                        var n = e.id,
                            r = e.className;
                        return _(), t.createElement("div", {
                            id: n,
                            className: r
                        })
                    } : function(e) {
                        var n = e.id,
                            r = e.className,
                            o = _().embeddedCheckout,
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
                    Y = F("auBankAccount", B),
                    V = F("card", B),
                    H = F("cardNumber", B),
                    W = F("cardExpiry", B),
                    $ = F("cardCvc", B),
                    z = F("fpxBank", B),
                    J = F("iban", B),
                    Z = F("idealBank", B),
                    X = F("p24Bank", B),
                    Q = F("epsBank", B),
                    G = F("payment", B),
                    K = F("expressCheckout", B),
                    ee = F("currencySelector", B),
                    et = F("paymentRequestButton", B),
                    en = F("linkAuthentication", B),
                    er = F("address", B),
                    eo = F("shippingAddress", B),
                    ei = F("paymentMethodMessaging", B),
                    eu = F("affirmMessage", B),
                    ec = F("afterpayClearpayMessage", B);
                e.AddressElement = er, e.AffirmMessageElement = eu, e.AfterpayClearpayMessageElement = ec, e.AuBankAccountElement = Y, e.CardCvcElement = $, e.CardElement = V, e.CardExpiryElement = W, e.CardNumberElement = H, e.CheckoutProvider = N, e.CurrencySelectorElement = ee, e.Elements = O, e.ElementsConsumer = A, e.EmbeddedCheckout = q, e.EmbeddedCheckoutProvider = function(e) {
                    var n = e.stripe,
                        r = e.options,
                        o = e.children,
                        i = t.useMemo(function() {
                            return S(n, "Invalid prop `stripe` supplied to `EmbeddedCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")
                        }, [n]),
                        c = t.useRef(null),
                        s = t.useRef(null),
                        a = u(t.useState({
                            embeddedCheckout: null
                        }), 2),
                        l = a[0],
                        f = a[1];
                    t.useEffect(function() {
                        if (!s.current && !c.current) {
                            var e = function(e) {
                                s.current || c.current || (s.current = e, c.current = s.current.initEmbeddedCheckout(r).then(function(e) {
                                    f({
                                        embeddedCheckout: e
                                    })
                                }))
                            };
                            "async" === i.tag && !s.current && (r.clientSecret || r.fetchClientSecret) ? i.stripePromise.then(function(t) {
                                t && e(t)
                            }) : "sync" === i.tag && !s.current && (r.clientSecret || r.fetchClientSecret) && e(i.stripe)
                        }
                    }, [i, r, l, s]), t.useEffect(function() {
                        return function() {
                            l.embeddedCheckout ? (c.current = null, l.embeddedCheckout.destroy()) : c.current && c.current.then(function() {
                                c.current = null, l.embeddedCheckout && l.embeddedCheckout.destroy()
                            })
                        }
                    }, [l.embeddedCheckout]), t.useEffect(function() {
                        x(s)
                    }, [s]);
                    var d = g(n);
                    t.useEffect(function() {
                        null !== d && d !== n && console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the `stripe` prop after setting it.")
                    }, [d, n]);
                    var p = g(r);
                    return t.useEffect(function() {
                        if (null != p) {
                            if (null == r) {
                                console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot unset options after setting them.");
                                return
                            }
                            void 0 === r.clientSecret && void 0 === r.fetchClientSecret && console.warn("Invalid props passed to EmbeddedCheckoutProvider: You must provide one of either `options.fetchClientSecret` or `options.clientSecret`."), null != p.clientSecret && r.clientSecret !== p.clientSecret && console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the client secret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead."), null != p.fetchClientSecret && r.fetchClientSecret !== p.fetchClientSecret && console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change fetchClientSecret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead."), null != p.onComplete && r.onComplete !== p.onComplete && console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onComplete option after setting it."), null != p.onShippingDetailsChange && r.onShippingDetailsChange !== p.onShippingDetailsChange && console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onShippingDetailsChange option after setting it."), null != p.onLineItemsChange && r.onLineItemsChange !== p.onLineItemsChange && console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onLineItemsChange option after setting it.")
                        }
                    }, [p, r]), t.createElement(U.Provider, {
                        value: l
                    }, o)
                }, e.EpsBankElement = Q, e.ExpressCheckoutElement = K, e.FpxBankElement = z, e.IbanElement = J, e.IdealBankElement = Z, e.LinkAuthenticationElement = en, e.P24BankElement = X, e.PaymentElement = G, e.PaymentMethodMessagingElement = ei, e.PaymentRequestButtonElement = et, e.ShippingAddressElement = eo, e.useCheckout = function() {
                    e = "calls useCheckout()", T(t.useContext(L), e);
                    var e, n = t.useContext(M);
                    if (!n) throw Error("Could not find Checkout Context; You need to wrap the part of your app that calls useCheckout() in an <CheckoutProvider> provider.");
                    return n
                }, e.useElements = function() {
                    return P("calls useElements()").elements
                }, e.useStripe = function() {
                    return R("calls useStripe()").stripe
                }
            }(t, n(7294))
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
                    } = d();
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
                s = ({
                    content: e
                }) => {
                    let {
                        children: t,
                        type: n,
                        ...a
                    } = e, {
                        blocks: l,
                        missingBlockTypes: f
                    } = d(), p = l[n];
                    if (!p) return f.includes(n) || (console.warn(`[@strapi/block-react-renderer] No component found for block type "${n}"`), f.push(n)), null;
                    if (u.includes(n)) return (0, r.jsx)(p, {
                        ...a
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
                            return (0, r.jsx)(s, {
                                content: e
                            }, t)
                        })
                    })
                },
                a = {
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
                l = o.createContext(a),
                f = ({
                    children: e,
                    value: t = a
                }) => {
                    let n = o.useMemo(() => t, [t]);
                    return (0, r.jsx)(l.Provider, {
                        value: n,
                        children: e
                    })
                };

            function d() {
                return o.useContext(l)
            }
            let p = e => {
                let t = {
                        ...a.blocks,
                        ...e.blocks
                    },
                    n = {
                        ...a.modifiers,
                        ...e.modifiers
                    },
                    i = o.useRef([]),
                    u = o.useRef([]);
                return (0, r.jsx)(f, {
                    value: {
                        blocks: t,
                        modifiers: n,
                        missingBlockTypes: i.current,
                        missingModifierTypes: u.current
                    },
                    children: e.content.map((e, t) => (0, r.jsx)(s, {
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
                s = function(e, t) {
                    e && e._registerWrapper && e._registerWrapper({
                        name: "stripe-js",
                        version: "5.5.0",
                        startTime: t
                    })
                },
                a = null,
                l = null,
                f = null,
                d = function(e, t, n) {
                    if (null === e) return null;
                    var r = e.apply(void 0, t);
                    return s(r, n), r
                },
                p = !1,
                m = function() {
                    return r || (r = (null !== a ? a : (a = new Promise(function(e, t) {
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
                            r ? r && null !== f && null !== l && (r.removeEventListener("load", f), r.removeEventListener("error", l), null === (n = r.parentNode) || void 0 === n || n.removeChild(r), r = c(null)) : r = c(null), f = function() {
                                window.Stripe ? e(window.Stripe) : t(Error("Stripe.js not available"))
                            }, l = function() {
                                t(Error("Failed to load Stripe.js"))
                            }, r.addEventListener("load", f), r.addEventListener("error", l)
                        } catch (e) {
                            t(e);
                            return
                        }
                    })).catch(function(e) {
                        return a = null, Promise.reject(e)
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
                    return d(e, t, r)
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
                    return w
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

            function s(e) {
                return "string" == typeof e
            }

            function a(e) {
                return "boolean" == typeof e
            }

            function l(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            }

            function f(e) {
                return Math.abs(e)
            }

            function d(e) {
                return Math.sign(e)
            }

            function p(e) {
                return y(e).map(Number)
            }

            function m(e) {
                return e[h(e)]
            }

            function h(e) {
                return Math.max(0, e.length - 1)
            }

            function g(e, t = 0) {
                return Array.from(Array(e), (e, n) => t + n)
            }

            function y(e) {
                return Object.keys(e)
            }

            function v(e, t) {
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
                let n = f(e - t);

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

            function C(e, t) {
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
            let S = {
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

            function x(e, t, n) {
                let r, o, i, u, w;
                let j = e.ownerDocument,
                    O = j.defaultView,
                    P = function(e) {
                        function t(e, t) {
                            return function e(t, n) {
                                return [t, n].reduce((t, n) => (y(n).forEach(r => {
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
                                    o = y(r).filter(t => e.matchMedia(t).matches).map(e => r[e]).reduce((e, n) => t(e, n), {});
                                return t(n, o)
                            },
                            optionsMediaQueries: function(t) {
                                return t.map(e => y(e.breakpoints || {})).reduce((e, t) => e.concat(t), []).map(e.matchMedia)
                            }
                        }
                    }(O),
                    A = (w = [], {
                        init: function(e, t) {
                            return (w = t.filter(({
                                options: e
                            }) => !1 !== P.optionsAtMedia(e).active)).forEach(t => t.init(e, P)), t.reduce((e, t) => Object.assign(e, {
                                [t.name]: t
                            }), {})
                        },
                        destroy: function() {
                            w = w.filter(e => e.destroy())
                        }
                    }),
                    I = b(),
                    L = function() {
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
                        mergeOptions: T,
                        optionsAtMedia: M,
                        optionsMediaQueries: D
                    } = P,
                    {
                        on: N,
                        off: R,
                        emit: F
                    } = L,
                    B = !1,
                    U = T(S, x.globalOptions),
                    _ = T(U),
                    q = [];

                function Y(t, n) {
                    !B && (_ = M(U = T(U, t)), q = n || q, function() {
                        let {
                            container: t,
                            slides: n
                        } = _;
                        i = (s(t) ? e.querySelector(t) : t) || e.children[0];
                        let r = s(n) ? i.querySelectorAll(n) : n;
                        u = [].slice.call(r || i.children)
                    }(), r = function t(n) {
                        let r = function(e, t, n, r, o, i, u) {
                            let l, S;
                            let {
                                align: x,
                                axis: w,
                                direction: j,
                                startIndex: O,
                                loop: P,
                                duration: A,
                                dragFree: I,
                                dragThreshold: L,
                                inViewThreshold: T,
                                slidesToScroll: M,
                                skipSnaps: D,
                                containScroll: N,
                                watchResize: R,
                                watchSlides: F,
                                watchDrag: B,
                                watchFocus: U
                            } = i, _ = {
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
                            }, q = _.measure(t), Y = n.map(_.measure), V = function(e, t) {
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
                            }(w, j), H = V.measureSize(q), W = {
                                measure: function(e) {
                                    return e / 100 * H
                                }
                            }, $ = function(e, t) {
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
                                        return s(e) ? n[e](r) : e(t, r, o)
                                    }
                                }
                            }(x, H), z = !P && !!N, {
                                slideSizes: J,
                                slideSizesWithGaps: Z,
                                startGap: X,
                                endGap: Q
                            } = function(e, t, n, r, o, i) {
                                let {
                                    measureSize: u,
                                    startEdge: c,
                                    endEdge: s
                                } = e, a = n[0] && o, l = function() {
                                    if (!a) return 0;
                                    let e = n[0];
                                    return f(t[c] - e[c])
                                }(), d = a ? parseFloat(i.getComputedStyle(m(r)).getPropertyValue(`margin-${s}`)) : 0, p = n.map(u), g = n.map((e, t, n) => {
                                    let r = t === h(n);
                                    return t ? r ? p[t] + d : n[t + 1][c] - e[c] : p[t] + l
                                }).map(f);
                                return {
                                    slideSizes: p,
                                    slideSizesWithGaps: g,
                                    startGap: l,
                                    endGap: d
                                }
                            }(V, q, Y, n, P || !!N, o), G = function(e, t, n, r, o, i, u, s, a) {
                                let {
                                    startEdge: l,
                                    endEdge: d,
                                    direction: g
                                } = e, y = c(n);
                                return {
                                    groupSlides: function(e) {
                                        return y ? p(e).filter(e => e % n == 0).map(t => e.slice(t, t + n)) : e.length ? p(e).reduce((n, c, a) => {
                                            let p = m(n) || 0,
                                                y = c === h(e),
                                                v = o[l] - i[p][l],
                                                b = o[l] - i[c][d],
                                                E = r || 0 !== p ? 0 : g(u),
                                                k = f(b - (!r && y ? g(s) : 0) - (v + E));
                                            return a && k > t + 2 && n.push(c), y && n.push(e.length), n
                                        }, []).map((t, n, r) => {
                                            let o = Math.max(r[n - 1] || 0);
                                            return e.slice(o, t)
                                        }) : []
                                    }
                                }
                            }(V, H, M, P, q, Y, X, Q, 0), {
                                snaps: K,
                                snapsAligned: ee
                            } = function(e, t, n, r, o) {
                                let {
                                    startEdge: i,
                                    endEdge: u
                                } = e, {
                                    groupSlides: c
                                } = o, s = c(r).map(e => m(e)[u] - e[0][i]).map(f).map(t.measure), a = r.map(e => n[i] - e[i]).map(e => -f(e)), l = c(a).map(e => e[0]).map((e, t) => e + s[t]);
                                return {
                                    snaps: a,
                                    snapsAligned: l
                                }
                            }(V, $, q, Y, G), et = -m(K) + m(Z), {
                                snapsContained: en,
                                scrollContainLimit: er
                            } = function(e, t, n, r, o) {
                                let i = E(-t + e, 0),
                                    u = n.map((e, t) => {
                                        let {
                                            min: r,
                                            max: o
                                        } = i, u = i.constrain(e), c = t === h(n);
                                        return t ? c || 1 >= f(r - u) ? r : 1 >= f(o - u) ? o : u : o
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
                            }(H, et, ee, N, 0), eo = z ? en : ee, {
                                limit: ei
                            } = function(e, t, n) {
                                let r = t[0];
                                return {
                                    limit: E(n ? r - e : m(t), r)
                                }
                            }(et, eo, P), eu = function e(t, n, r) {
                                let {
                                    constrain: o
                                } = E(0, t), i = t + 1, u = c(n);

                                function c(e) {
                                    return r ? f((i + e) % i) : o(e)
                                }

                                function s() {
                                    return e(t, u, r)
                                }
                                let a = {
                                    get: function() {
                                        return u
                                    },
                                    set: function(e) {
                                        return u = c(e), a
                                    },
                                    add: function(e) {
                                        return s().set(u + e)
                                    },
                                    clone: s
                                };
                                return a
                            }(h(eo), O, P), ec = eu.clone(), es = p(n), ea = ({
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
                                animation: s,
                                eventHandler: a,
                                scrollBounds: l,
                                options: {
                                    loop: f
                                }
                            }, d) => {
                                let p = e.settled(),
                                    m = !l.shouldConstrain(),
                                    h = f ? p : p && m;
                                h && !c.pointerDown() && (s.stop(), a.emit("settle")), h || a.emit("scroll");
                                let g = n.get() * d + o.get() * (1 - d);
                                r.set(g), f && (i.loop(e.direction()), u.loop()), t.to(r.get())
                            }, ef = function(e, t, n, r) {
                                let o = b(),
                                    i = 1e3 / 60,
                                    u = null,
                                    c = 0,
                                    s = 0;

                                function a(e) {
                                    if (!s) return;
                                    u || (u = e, n(), n());
                                    let o = e - u;
                                    for (u = e, c += o; c >= i;) n(), c -= i;
                                    r(c / i), s && (s = t.requestAnimationFrame(a))
                                }

                                function l() {
                                    t.cancelAnimationFrame(s), u = null, c = 0, s = 0
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
                                        s || (s = t.requestAnimationFrame(a))
                                    },
                                    stop: l,
                                    update: n,
                                    render: r
                                }
                            }(r, o, () => ea(ew), e => el(ew, e)), ed = eo[eu.get()], ep = k(ed), em = k(ed), eh = k(ed), eg = k(ed), ey = function(e, t, n, r, o, i) {
                                let u = 0,
                                    c = 0,
                                    s = o,
                                    a = .68,
                                    l = e.get(),
                                    p = 0;

                                function m(e) {
                                    return s = e, g
                                }

                                function h(e) {
                                    return a = e, g
                                }
                                let g = {
                                    direction: function() {
                                        return c
                                    },
                                    duration: function() {
                                        return s
                                    },
                                    velocity: function() {
                                        return u
                                    },
                                    seek: function() {
                                        let t = r.get() - e.get(),
                                            o = 0;
                                        return s ? (n.set(e), u += t / s, u *= a, l += u, e.add(u), o = l - p) : (u = 0, n.set(r), e.set(r), o = t), c = d(o), p = l, g
                                    },
                                    settled: function() {
                                        return .001 > f(r.get() - t.get())
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
                                return g
                            }(ep, eh, em, eg, A, 0), ev = function(e, t, n, r, o) {
                                let {
                                    reachedAny: i,
                                    removeOffset: u,
                                    constrain: c
                                } = r;

                                function s(e) {
                                    return e.concat().sort((e, t) => f(e) - f(t))[0]
                                }

                                function a(t, r) {
                                    let o = [t, t + n, t - n];
                                    if (!e) return t;
                                    if (!r) return s(o);
                                    let i = o.filter(e => d(e) === r);
                                    return i.length ? s(i) : m(o) - n
                                }
                                return {
                                    byDistance: function(n, r) {
                                        let s = o.get() + n,
                                            {
                                                index: l,
                                                distance: d
                                            } = function(n) {
                                                let r = e ? u(n) : c(n),
                                                    {
                                                        index: o
                                                    } = t.map((e, t) => ({
                                                        diff: a(e - r, 0),
                                                        index: t
                                                    })).sort((e, t) => f(e.diff) - f(t.diff))[0];
                                                return {
                                                    index: o,
                                                    distance: r
                                                }
                                            }(s),
                                            p = !e && i(s);
                                        if (!r || p) return {
                                            index: l,
                                            distance: n
                                        };
                                        let m = n + a(t[l] - d, 0);
                                        return {
                                            index: l,
                                            distance: m
                                        }
                                    },
                                    byIndex: function(e, n) {
                                        let r = a(t[e] - o.get(), n);
                                        return {
                                            index: e,
                                            distance: r
                                        }
                                    },
                                    shortcut: a
                                }
                            }(P, eo, et, ei, eg), eb = function(e, t, n, r, o, i, u) {
                                function c(o) {
                                    let c = o.distance,
                                        s = o.index !== t.get();
                                    i.add(c), c && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())), s && (n.set(t.get()), t.set(o.index), u.emit("select"))
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
                            }(ef, eu, ec, ey, ev, eg, u), eE = function(e) {
                                let {
                                    max: t,
                                    length: n
                                } = e;
                                return {
                                    get: function(e) {
                                        return n ? -((e - t) / n) : 0
                                    }
                                }
                            }(ei), ek = b(), eC = function(e, t, n, r) {
                                let o;
                                let i = {},
                                    u = null,
                                    c = null,
                                    s = !1;
                                return {
                                    init: function() {
                                        o = new IntersectionObserver(e => {
                                            s || (e.forEach(e => {
                                                i[t.indexOf(e.target)] = e
                                            }), u = null, c = null, n.emit("slidesInView"))
                                        }, {
                                            root: e.parentElement,
                                            threshold: r
                                        }), t.forEach(e => o.observe(e))
                                    },
                                    destroy: function() {
                                        o && o.disconnect(), s = !0
                                    },
                                    get: function(e = !0) {
                                        if (e && u) return u;
                                        if (!e && c) return c;
                                        let t = y(i).reduce((t, n) => {
                                            let r = parseInt(n),
                                                {
                                                    isIntersecting: o
                                                } = i[r];
                                            return (e && o || !e && !o) && t.push(r), t
                                        }, []);
                                        return e && (u = t), e || (c = t), t
                                    }
                                }
                            }(t, n, u, T), {
                                slideRegistry: eS
                            } = function(e, t, n, r, o, i) {
                                let {
                                    groupSlides: u
                                } = o, {
                                    min: c,
                                    max: s
                                } = r;
                                return {
                                    slideRegistry: function() {
                                        let r = u(i);
                                        return 1 === n.length ? [i] : e && "keepSnaps" !== t ? r.slice(c, s).map((e, t, n) => {
                                            let r = t === h(n);
                                            return t ? r ? g(h(i) - m(n)[0] + 1, m(n)[0]) : e : g(m(n[0]) + 1)
                                        }) : r
                                    }()
                                }
                            }(z, N, eo, er, G, es), ex = function(e, t, n, r, o, i, u, s) {
                                let l = {
                                        passive: !0,
                                        capture: !0
                                    },
                                    f = 0;

                                function d(e) {
                                    "Tab" === e.code && (f = new Date().getTime())
                                }
                                return {
                                    init: function(p) {
                                        s && (i.add(document, "keydown", d, !1), t.forEach((t, d) => {
                                            i.add(t, "focus", t => {
                                                (a(s) || s(p, t)) && function(t) {
                                                    if (new Date().getTime() - f > 10) return;
                                                    u.emit("slideFocusStart"), e.scrollLeft = 0;
                                                    let i = n.findIndex(e => e.includes(t));
                                                    c(i) && (o.useDuration(0), r.index(i, 0), u.emit("slideFocus"))
                                                }(d)
                                            }, l)
                                        }))
                                    }
                                }
                            }(e, n, eS, eb, ey, ek, u, U), ew = {
                                ownerDocument: r,
                                ownerWindow: o,
                                eventHandler: u,
                                containerRect: q,
                                slideRects: Y,
                                animation: ef,
                                axis: V,
                                dragHandler: function(e, t, n, r, o, i, u, c, s, l, p, m, h, g, y, k, C, S, x) {
                                    let {
                                        cross: w,
                                        direction: j
                                    } = e, O = ["INPUT", "SELECT", "TEXTAREA"], P = {
                                        passive: !1
                                    }, A = b(), I = b(), L = E(50, 225).constrain(g.measure(20)), T = {
                                        mouse: 300,
                                        touch: 400
                                    }, M = {
                                        mouse: 500,
                                        touch: 600
                                    }, D = y ? 43 : 25, N = !1, R = 0, F = 0, B = !1, U = !1, _ = !1, q = !1;

                                    function Y(e) {
                                        if (!v(e, r) && e.touches.length >= 2) return V(e);
                                        let t = i.readPoint(e),
                                            n = i.readPoint(e, w),
                                            u = f(t - R),
                                            s = f(n - F);
                                        if (!U && !q && (!e.cancelable || !(U = u > s))) return V(e);
                                        let a = i.pointerMove(e);
                                        u > k && (_ = !0), l.useFriction(.3).useDuration(.75), c.start(), o.add(j(a)), e.preventDefault()
                                    }

                                    function V(e) {
                                        let t = p.byDistance(0, !1).index !== m.get(),
                                            n = i.pointerUp(e) * (y ? M : T)[q ? "mouse" : "touch"],
                                            r = function(e, t) {
                                                let n = m.add(-1 * d(e)),
                                                    r = p.byDistance(e, !y).distance;
                                                return y || f(e) < L ? r : C && t ? .5 * r : p.byIndex(n.get(), 0).distance
                                            }(j(n), t),
                                            o = function(e, t) {
                                                var n, r;
                                                if (0 === e || 0 === t || f(e) <= f(t)) return 0;
                                                let o = (n = f(e), r = f(t), f(n - r));
                                                return f(o / e)
                                            }(n, r);
                                        U = !1, B = !1, I.clear(), l.useDuration(D - 10 * o).useFriction(.68 + o / 50), s.distance(r, !y), q = !1, h.emit("pointerUp")
                                    }

                                    function H(e) {
                                        _ && (e.stopPropagation(), e.preventDefault(), _ = !1)
                                    }
                                    return {
                                        init: function(e) {
                                            x && A.add(t, "dragstart", e => e.preventDefault(), P).add(t, "touchmove", () => void 0, P).add(t, "touchend", () => void 0).add(t, "touchstart", c).add(t, "mousedown", c).add(t, "touchcancel", V).add(t, "contextmenu", V).add(t, "click", H, !0);

                                            function c(c) {
                                                (a(x) || x(e, c)) && function(e) {
                                                    let c = v(e, r);
                                                    q = c, _ = y && c && !e.buttons && N, N = f(o.get() - u.get()) >= 2, c && 0 !== e.button || function(e) {
                                                        let t = e.nodeName || "";
                                                        return O.includes(t)
                                                    }(e.target) || (B = !0, i.pointerDown(e), l.useFriction(0).useDuration(0), o.set(u), function() {
                                                        let e = q ? n : t;
                                                        I.add(e, "touchmove", Y, P).add(e, "touchend", V).add(e, "mousemove", Y, P).add(e, "mouseup", V)
                                                    }(), R = i.readPoint(e), F = i.readPoint(e, w), h.emit("pointerDown"))
                                                }(c)
                                            }
                                        },
                                        destroy: function() {
                                            A.clear(), I.clear()
                                        },
                                        pointerDown: function() {
                                            return B
                                        }
                                    }
                                }(V, e, r, o, eg, function(e, t) {
                                    let n, r;

                                    function o(e) {
                                        return e.timeStamp
                                    }

                                    function i(n, r) {
                                        let o = r || e.scroll,
                                            i = `client${"x"===o?"X":"Y"}`;
                                        return (v(n, t) ? n : n.touches[0])[i]
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
                                                s = t / u;
                                            return u && !c && f(s) > .1 ? s : 0
                                        },
                                        readPoint: i
                                    }
                                }(V, o), ep, ef, eb, ey, ev, eu, u, W, I, L, D, 0, B),
                                eventStore: ek,
                                percentOfView: W,
                                index: eu,
                                indexPrevious: ec,
                                limit: ei,
                                location: ep,
                                offsetLocation: eh,
                                previousLocation: em,
                                options: i,
                                resizeHandler: function(e, t, n, r, o, i, u) {
                                    let c, s;
                                    let l = [e].concat(r),
                                        d = [],
                                        p = !1;

                                    function m(e) {
                                        return o.measureSize(u.measure(e))
                                    }
                                    return {
                                        init: function(o) {
                                            i && (s = m(e), d = r.map(m), c = new ResizeObserver(n => {
                                                (a(i) || i(o, n)) && function(n) {
                                                    for (let i of n) {
                                                        if (p) return;
                                                        let n = i.target === e,
                                                            u = r.indexOf(i.target),
                                                            c = n ? s : d[u];
                                                        if (f(m(n ? e : r[u]) - c) >= .5) {
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
                                }(t, u, o, n, V, R, _),
                                scrollBody: ey,
                                scrollBounds: function(e, t, n, r, o) {
                                    let i = o.measure(10),
                                        u = o.measure(50),
                                        c = E(.1, .99),
                                        s = !1;

                                    function a() {
                                        return !!(!s && e.reachedAny(n.get()) && e.reachedAny(t.get()))
                                    }
                                    return {
                                        shouldConstrain: a,
                                        constrain: function(o) {
                                            if (!a()) return;
                                            let s = e.reachedMin(t.get()) ? "min" : "max",
                                                l = f(e[s] - t.get()),
                                                d = n.get() - t.get(),
                                                p = c.constrain(l / u);
                                            n.subtract(d * p), !o && f(d) < i && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction())
                                        },
                                        toggleActive: function(e) {
                                            s = !e
                                        }
                                    }
                                }(ei, eh, eg, ey, W),
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
                                }(et, ei, eh, [ep, eh, em, eg]),
                                scrollProgress: eE,
                                scrollSnapList: eo.map(eE.get),
                                scrollSnaps: eo,
                                scrollTarget: ev,
                                scrollTo: eb,
                                slideLooper: function(e, t, n, r, o, i, u, c, s) {
                                    let a = p(o),
                                        l = m(d(p(o).reverse(), u[0]), n, !1).concat(m(d(a, t - u[0] - 1), -n, !0));

                                    function f(e, t) {
                                        return e.reduce((e, t) => e - o[t], t)
                                    }

                                    function d(e, t) {
                                        return e.reduce((e, n) => f(e, t) > 0 ? e.concat([n]) : e, [])
                                    }

                                    function m(o, u, a) {
                                        let l = i.map((e, n) => ({
                                            start: e - r[n] + .5 + u,
                                            end: e + t - .5 + u
                                        }));
                                        return o.map(t => {
                                            let r = a ? 0 : -n,
                                                o = a ? n : 0,
                                                i = l[t][a ? "end" : "start"];
                                            return {
                                                index: t,
                                                loopPoint: i,
                                                slideLocation: k(-1),
                                                translate: C(e, s[t]),
                                                target: () => c.get() > i ? r : o
                                            }
                                        })
                                    }
                                    return {
                                        canLoop: function() {
                                            return l.every(({
                                                index: e
                                            }) => .1 >= f(a.filter(t => t !== e), t))
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
                                }(V, H, et, J, Z, K, eo, eh, n),
                                slideFocus: ex,
                                slidesHandler: (S = !1, {
                                    init: function(e) {
                                        F && (l = new MutationObserver(t => {
                                            !S && (a(F) || F(e, t)) && function(t) {
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
                                        l && l.disconnect(), S = !0
                                    }
                                }),
                                slidesInView: eC,
                                slideIndexes: es,
                                slideRegistry: eS,
                                slidesToScroll: G,
                                target: eg,
                                translate: C(V, t)
                            };
                            return ew
                        }(e, i, u, j, O, n, L);
                        return n.loop && !r.slideLooper.canLoop() ? t(Object.assign({}, n, {
                            loop: !1
                        })) : r
                    }(_), D([U, ...q.map(({
                        options: e
                    }) => e)]).forEach(e => I.add(e, "change", V)), _.active && (r.translate.to(r.location.get()), r.animation.init(), r.slidesInView.init(), r.slideFocus.init(z), r.eventHandler.init(z), r.resizeHandler.init(z), r.slidesHandler.init(z), r.options.loop && r.slideLooper.loop(), i.offsetParent && u.length && r.dragHandler.init(z), o = A.init(z, q)))
                }

                function V(e, t) {
                    let n = $();
                    H(), Y(T({
                        startIndex: n
                    }, e), t), L.emit("reInit")
                }

                function H() {
                    r.dragHandler.destroy(), r.eventStore.clear(), r.translate.clear(), r.slideLooper.clear(), r.resizeHandler.destroy(), r.slidesHandler.destroy(), r.slidesInView.destroy(), r.animation.destroy(), A.destroy(), I.clear()
                }

                function W(e, t, n) {
                    _.active && !B && (r.scrollBody.useBaseFriction().useDuration(!0 === t ? 0 : _.duration), r.scrollTo.index(e, n || 0))
                }

                function $() {
                    return r.index.get()
                }
                let z = {
                    canScrollNext: function() {
                        return r.index.add(1).get() !== $()
                    },
                    canScrollPrev: function() {
                        return r.index.add(-1).get() !== $()
                    },
                    containerNode: function() {
                        return i
                    },
                    internalEngine: function() {
                        return r
                    },
                    destroy: function() {
                        B || (B = !0, I.clear(), H(), L.emit("destroy"), L.clear())
                    },
                    off: R,
                    on: N,
                    emit: F,
                    plugins: function() {
                        return o
                    },
                    previousScrollSnap: function() {
                        return r.indexPrevious.get()
                    },
                    reInit: V,
                    rootNode: function() {
                        return e
                    },
                    scrollNext: function(e) {
                        W(r.index.add(1).get(), e, -1)
                    },
                    scrollPrev: function(e) {
                        W(r.index.add(-1).get(), e, 1)
                    },
                    scrollProgress: function() {
                        return r.scrollProgress.get(r.location.get())
                    },
                    scrollSnapList: function() {
                        return r.scrollSnapList
                    },
                    scrollTo: W,
                    selectedScrollSnap: $,
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
                return Y(t, n), setTimeout(() => L.emit("init"), 0), z
            }

            function w(e = {}, t = []) {
                let n = (0, r.useRef)(e),
                    o = (0, r.useRef)(t),
                    [c, s] = (0, r.useState)(),
                    [a, l] = (0, r.useState)(),
                    f = (0, r.useCallback)(() => {
                        c && c.reInit(n.current, o.current)
                    }, [c]);
                return (0, r.useEffect)(() => {
                    i(n.current, e) || (n.current = e, f())
                }, [e, f]), (0, r.useEffect)(() => {
                    ! function(e, t) {
                        if (e.length !== t.length) return !1;
                        let n = u(e),
                            r = u(t);
                        return n.every((e, t) => i(e, r[t]))
                    }(o.current, t) && (o.current = t, f())
                }, [t, f]), (0, r.useEffect)(() => {
                    if ("undefined" != typeof window && window.document && window.document.createElement && a) {
                        x.globalOptions = w.globalOptions;
                        let e = x(a, n.current, o.current);
                        return s(e), () => e.destroy()
                    }
                    s(void 0)
                }, [a, s]), [l, c]
            }
            x.globalOptions = void 0, w.globalOptions = void 0
        }
    }
]);