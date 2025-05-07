"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9384], {
        7775: function(e, t, n) {
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
                    return N
                }
            });
            let u = i(function() {
                    return o(/^Mac/i)
                }),
                a = i(function() {
                    return o(/^iPhone/i)
                }),
                l = i(function() {
                    return o(/^iPad/i) || u() && navigator.maxTouchPoints > 1
                }),
                s = i(function() {
                    return a() || l()
                });
            i(function() {
                return u() || s()
            }), i(function() {
                return r(/AppleWebKit/i) && !c()
            });
            let c = i(function() {
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
            var v = n(7294);
            let m = null,
                h = new Set,
                g = new Map,
                b = !1,
                y = !1,
                E = {
                    Tab: !0,
                    Escape: !0
                };

            function w(e, t) {
                for (let n of h) n(e, t)
            }

            function T(e) {
                b = !0, e.metaKey || !u() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key || (m = "keyboard", w("keyboard", e))
            }

            function k(e) {
                m = "pointer", ("mousedown" === e.type || "pointerdown" === e.type) && (b = !0, w("pointer", e))
            }

            function P(e) {
                (0 === e.mozInputSource && e.isTrusted || (d() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)) && (b = !0, m = "virtual")
            }

            function F(e) {
                e.target !== window && e.target !== document && (b || y || (m = "virtual", w("virtual", e)), b = !1, y = !1)
            }

            function L() {
                b = !1, y = !0
            }

            function S(e) {
                if ("undefined" == typeof window || g.get(p(e))) return;
                let t = p(e),
                    n = f(e),
                    r = t.HTMLElement.prototype.focus;
                t.HTMLElement.prototype.focus = function() {
                    b = !0, r.apply(this, arguments)
                }, n.addEventListener("keydown", T, !0), n.addEventListener("keyup", T, !0), n.addEventListener("click", P, !0), t.addEventListener("focus", F, !0), t.addEventListener("blur", L, !1), "undefined" != typeof PointerEvent ? (n.addEventListener("pointerdown", k, !0), n.addEventListener("pointermove", k, !0), n.addEventListener("pointerup", k, !0)) : (n.addEventListener("mousedown", k, !0), n.addEventListener("mousemove", k, !0), n.addEventListener("mouseup", k, !0)), t.addEventListener("beforeunload", () => {
                    x(e)
                }, {
                    once: !0
                }), g.set(t, {
                    focus: r
                })
            }
            let x = (e, t) => {
                let n = p(e),
                    r = f(e);
                t && r.removeEventListener("DOMContentLoaded", t), g.has(n) && (n.HTMLElement.prototype.focus = g.get(n).focus, r.removeEventListener("keydown", T, !0), r.removeEventListener("keyup", T, !0), r.removeEventListener("click", P, !0), n.removeEventListener("focus", F, !0), n.removeEventListener("blur", L, !1), "undefined" != typeof PointerEvent ? (r.removeEventListener("pointerdown", k, !0), r.removeEventListener("pointermove", k, !0), r.removeEventListener("pointerup", k, !0)) : (r.removeEventListener("mousedown", k, !0), r.removeEventListener("mousemove", k, !0), r.removeEventListener("mouseup", k, !0)), g.delete(n))
            };

            function A() {
                return "pointer" !== m
            }
            "undefined" != typeof document && function(e) {
                let t;
                let n = f(void 0);
                "loading" !== n.readyState ? S(void 0) : (t = () => {
                    S(void 0)
                }, n.addEventListener("DOMContentLoaded", t)), () => x(e, t)
            }();
            let R = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]),
                C = "undefined" != typeof document ? v.useLayoutEffect : () => {};
            class O {
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
                let t = (0, v.useRef)({
                    isFocused: !1,
                    observer: null
                });
                C(() => {
                    let e = t.current;
                    return () => {
                        e.observer && (e.observer.disconnect(), e.observer = null)
                    }
                }, []);
                let n = function(e) {
                    let t = (0, v.useRef)(null);
                    return C(() => {
                        t.current = e
                    }, [e]), (0, v.useCallback)((...e) => {
                        let n = t.current;
                        return null == n ? void 0 : n(...e)
                    }, [])
                }(t => {
                    null == e || e(t)
                });
                return (0, v.useCallback)(e => {
                    if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
                        t.current.isFocused = !0;
                        let r = e.target;
                        r.addEventListener("focusout", e => {
                            t.current.isFocused = !1, r.disabled && n(new O("blur", e)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
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

            function N(e = {}) {
                var t, n, r;
                let {
                    autoFocus: o = !1,
                    isTextInput: i,
                    within: u
                } = e, a = (0, v.useRef)({
                    isFocused: !1,
                    isFocusVisible: o || A()
                }), [l, s] = (0, v.useState)(!1), [c, d] = (0, v.useState)(() => a.current.isFocused && a.current.isFocusVisible), m = (0, v.useCallback)(() => d(a.current.isFocused && a.current.isFocusVisible), []), g = (0, v.useCallback)(e => {
                    a.current.isFocused = e, s(e), m()
                }, [m]);
                t = e => {
                    a.current.isFocusVisible = e, m()
                }, n = [], r = {
                    isTextInput: i
                }, S(), (0, v.useEffect)(() => {
                    let e = (e, n) => {
                        (function(e, t, n) {
                            var r;
                            let o = "undefined" != typeof window ? p(null == n ? void 0 : n.target).HTMLInputElement : HTMLInputElement,
                                i = "undefined" != typeof window ? p(null == n ? void 0 : n.target).HTMLTextAreaElement : HTMLTextAreaElement,
                                u = "undefined" != typeof window ? p(null == n ? void 0 : n.target).HTMLElement : HTMLElement,
                                a = "undefined" != typeof window ? p(null == n ? void 0 : n.target).KeyboardEvent : KeyboardEvent;
                            return !((e = e || (null == n ? void 0 : n.target) instanceof o && !R.has(null == n ? void 0 : null === (r = n.target) || void 0 === r ? void 0 : r.type) || (null == n ? void 0 : n.target) instanceof i || (null == n ? void 0 : n.target) instanceof u && (null == n ? void 0 : n.target.isContentEditable)) && "keyboard" === t && n instanceof a && !E[n.key])
                        })(!!(null == r ? void 0 : r.isTextInput), e, n) && t(A())
                    };
                    return h.add(e), () => {
                        h.delete(e)
                    }
                }, n);
                let {
                    focusProps: b
                } = function(e) {
                    let {
                        isDisabled: t,
                        onFocus: n,
                        onBlur: r,
                        onFocusChange: o
                    } = e, i = (0, v.useCallback)(e => {
                        if (e.target === e.currentTarget) return r && r(e), o && o(!1), !0
                    }, [r, o]), u = M(i), a = (0, v.useCallback)(e => {
                        let t = f(e.target);
                        e.target === e.currentTarget && t.activeElement === e.target && (n && n(e), o && o(!0), u(e))
                    }, [o, n, u]);
                    return {
                        focusProps: {
                            onFocus: !t && (n || o || r) ? a : void 0,
                            onBlur: !t && (r || o) ? i : void 0
                        }
                    }
                }({
                    isDisabled: u,
                    onFocusChange: g
                }), {
                    focusWithinProps: y
                } = function(e) {
                    let {
                        isDisabled: t,
                        onBlurWithin: n,
                        onFocusWithin: r,
                        onFocusWithinChange: o
                    } = e, i = (0, v.useRef)({
                        isFocusWithin: !1
                    }), u = (0, v.useCallback)(e => {
                        i.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (i.current.isFocusWithin = !1, n && n(e), o && o(!1))
                    }, [n, o, i]), a = M(u), l = (0, v.useCallback)(e => {
                        i.current.isFocusWithin || document.activeElement !== e.target || (r && r(e), o && o(!0), i.current.isFocusWithin = !0, a(e))
                    }, [r, o, a]);
                    return t ? {
                        focusWithinProps: {
                            onFocus: void 0,
                            onBlur: void 0
                        }
                    } : {
                        focusWithinProps: {
                            onFocus: l,
                            onBlur: u
                        }
                    }
                }({
                    isDisabled: !u,
                    onFocusWithinChange: g
                });
                return {
                    isFocused: l,
                    isFocusVisible: c,
                    focusProps: u ? y : b
                }
            }
        },
        8419: function(e, t, n) {
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

            function a(e) {
                "touch" === e.pointerType && u()
            }

            function l() {
                if ("undefined" != typeof document) return "undefined" != typeof PointerEvent ? document.addEventListener("pointerup", a) : document.addEventListener("touchend", u), i++, () => {
                    --i > 0 || ("undefined" != typeof PointerEvent ? document.removeEventListener("pointerup", a) : document.removeEventListener("touchend", u))
                }
            }

            function s(e) {
                let {
                    onHoverStart: t,
                    onHoverChange: n,
                    onHoverEnd: i,
                    isDisabled: u
                } = e, [a, s] = (0, r.useState)(!1), c = (0, r.useRef)({
                    isHovered: !1,
                    ignoreEmulatedMouseEvents: !1,
                    pointerType: "",
                    target: null
                }).current;
                (0, r.useEffect)(l, []);
                let {
                    hoverProps: d,
                    triggerHoverEnd: f
                } = (0, r.useMemo)(() => {
                    let e = (e, r) => {
                            if (c.pointerType = r, u || "touch" === r || c.isHovered || !e.currentTarget.contains(e.target)) return;
                            c.isHovered = !0;
                            let o = e.currentTarget;
                            c.target = o, t && t({
                                type: "hoverstart",
                                target: o,
                                pointerType: r
                            }), n && n(!0), s(!0)
                        },
                        r = (e, t) => {
                            if (c.pointerType = "", c.target = null, "touch" === t || !c.isHovered) return;
                            c.isHovered = !1;
                            let r = e.currentTarget;
                            i && i({
                                type: "hoverend",
                                target: r,
                                pointerType: t
                            }), n && n(!1), s(!1)
                        },
                        a = {};
                    return "undefined" != typeof PointerEvent ? (a.onPointerEnter = t => {
                        o && "mouse" === t.pointerType || e(t, t.pointerType)
                    }, a.onPointerLeave = e => {
                        !u && e.currentTarget.contains(e.target) && r(e, e.pointerType)
                    }) : (a.onTouchStart = () => {
                        c.ignoreEmulatedMouseEvents = !0
                    }, a.onMouseEnter = t => {
                        c.ignoreEmulatedMouseEvents || o || e(t, "mouse"), c.ignoreEmulatedMouseEvents = !1
                    }, a.onMouseLeave = e => {
                        !u && e.currentTarget.contains(e.target) && r(e, "mouse")
                    }), {
                        hoverProps: a,
                        triggerHoverEnd: r
                    }
                }, [t, n, i, u, c]);
                return (0, r.useEffect)(() => {
                    u && f({
                        currentTarget: c.target
                    }, c.pointerType)
                }, [u]), {
                    hoverProps: d,
                    isHovered: a
                }
            }
        },
        3664: function(e, t, n) {
            n.d(t, {
                X: function() {
                    return E
                }
            });
            var r = n(7775),
                o = n(8419),
                i = n(7294),
                u = n(3233),
                a = n(5246),
                l = n(8354),
                s = n(9327),
                c = n(1857),
                d = n(4872),
                f = n(1831),
                p = n(99),
                v = n(7257),
                m = n(2983),
                h = n(7895),
                g = n(9138),
                b = n(1237),
                y = n(862);
            let E = (0, h.yV)(function(e, t) {
                let n = (0, i.useId)(),
                    E = (0, p.Q)(),
                    w = (0, d.B)(),
                    {
                        id: T = E || "headlessui-checkbox-".concat(n),
                        disabled: k = w || !1,
                        autoFocus: P = !1,
                        checked: F,
                        defaultChecked: L,
                        onChange: S,
                        name: x,
                        value: A,
                        form: R,
                        indeterminate: C = !1,
                        ...O
                    } = e,
                    M = (0, c.L)(L),
                    [N, I] = (0, s.q)(F, S, null != M && M),
                    D = (0, y.wp)(),
                    H = (0, g.zH)(),
                    j = (0, a.G)(),
                    [z, G] = (0, i.useState)(!1),
                    V = (0, l.z)(() => {
                        G(!0), null == I || I(!N), j.nextFrame(() => {
                            G(!1)
                        })
                    }),
                    W = (0, l.z)(e => {
                        if ((0, v.P)(e.currentTarget)) return e.preventDefault();
                        e.preventDefault(), V()
                    }),
                    B = (0, l.z)(e => {
                        e.key === b.R.Space ? (e.preventDefault(), V()) : e.key === b.R.Enter && (0, m.g)(e.currentTarget)
                    }),
                    U = (0, l.z)(e => e.preventDefault()),
                    {
                        isFocusVisible: _,
                        focusProps: K
                    } = (0, r.F)({
                        autoFocus: P
                    }),
                    {
                        isHovered: q,
                        hoverProps: X
                    } = (0, o.X)({
                        isDisabled: k
                    }),
                    {
                        pressed: Y,
                        pressProps: Q
                    } = function() {
                        let {
                            disabled: e = !1
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = (0, i.useRef)(null), [n, r] = (0, i.useState)(!1), o = (0, a.G)(), s = (0, l.z)(() => {
                            t.current = null, r(!1), o.dispose()
                        }), c = (0, l.z)(e => {
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
                                onPointerDown: c,
                                onPointerUp: s,
                                onClick: s
                            }
                        }
                    }({
                        disabled: k
                    }),
                    J = (0, h.dG)({
                        ref: t,
                        id: T,
                        role: "checkbox",
                        "aria-checked": C ? "mixed" : N ? "true" : "false",
                        "aria-labelledby": D,
                        "aria-describedby": H,
                        "aria-disabled": !!k || void 0,
                        indeterminate: C ? "true" : void 0,
                        tabIndex: k ? void 0 : 0,
                        onKeyUp: k ? void 0 : B,
                        onKeyPress: k ? void 0 : U,
                        onClick: k ? void 0 : W
                    }, K, X, Q),
                    $ = (0, i.useMemo)(() => ({
                        checked: N,
                        disabled: k,
                        hover: q,
                        focus: _,
                        active: Y,
                        indeterminate: C,
                        changing: z,
                        autofocus: P
                    }), [N, C, k, q, _, Y, z, P]),
                    Z = (0, i.useCallback)(() => {
                        if (void 0 !== M) return null == I ? void 0 : I(M)
                    }, [I, M]),
                    ee = (0, h.L6)();
                return i.createElement(i.Fragment, null, null != x && i.createElement(f.Mt, {
                    disabled: k,
                    data: {
                        [x]: A || "on"
                    },
                    overrides: {
                        type: "checkbox",
                        checked: N
                    },
                    form: R,
                    onReset: Z
                }), ee({
                    ourProps: J,
                    theirProps: O,
                    slot: $,
                    defaultTag: "span",
                    name: "Checkbox"
                }))
            })
        },
        9138: function(e, t, n) {
            n.d(t, {
                dk: function() {
                    return f
                },
                fw: function() {
                    return d
                },
                zH: function() {
                    return c
                }
            });
            var r = n(7294),
                o = n(8354),
                i = n(7110),
                u = n(6577),
                a = n(4872),
                l = n(7895);
            let s = (0, r.createContext)(null);

            function c() {
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
            let f = Object.assign((0, l.yV)(function(e, t) {
                let n = (0, r.useId)(),
                    o = (0, a.B)(),
                    {
                        id: c = "headlessui-description-".concat(n),
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
                (0, i.e)(() => f.register(c), [c, f.register]);
                let v = o || !1,
                    m = (0, r.useMemo)(() => ({
                        ...f.slot,
                        disabled: v
                    }), [f.slot, v]),
                    h = {
                        ref: p,
                        ...f.props,
                        id: c
                    };
                return (0, l.L6)()({
                    ourProps: h,
                    theirProps: d,
                    slot: m,
                    defaultTag: "p",
                    name: f.name || "Description"
                })
            }), {})
        },
        9961: function(e, t, n) {
            n.d(t, {
                g: function() {
                    return c
                }
            });
            var r = n(7294),
                o = n(4872),
                i = n(1831),
                u = n(99),
                a = n(7895),
                l = n(9138),
                s = n(862);
            let c = (0, a.yV)(function(e, t) {
                let n = "headlessui-control-".concat((0, r.useId)()),
                    [c, d] = (0, s.bE)(),
                    [f, p] = (0, l.fw)(),
                    v = (0, o.B)(),
                    {
                        disabled: m = v || !1,
                        ...h
                    } = e,
                    g = (0, r.useMemo)(() => ({
                        disabled: m
                    }), [m]),
                    b = (0, a.L6)();
                return r.createElement(o.G, {
                    value: m
                }, r.createElement(d, {
                    value: c
                }, r.createElement(p, {
                    value: f
                }, r.createElement(u.v, {
                    id: n
                }, b({
                    ourProps: {
                        ref: t,
                        disabled: m || void 0,
                        "aria-disabled": m || void 0
                    },
                    theirProps: {
                        ...h,
                        children: r.createElement(i.wR, null, "function" == typeof h.children ? h.children(g) : h.children)
                    },
                    slot: g,
                    defaultTag: "div",
                    name: "Field"
                })))))
            })
        },
        1237: function(e, t, n) {
            let r;
            n.d(t, {
                R: function() {
                    return o
                }
            });
            var o = ((r = o || {}).Space = " ", r.Enter = "Enter", r.Escape = "Escape", r.Backspace = "Backspace", r.Delete = "Delete", r.ArrowLeft = "ArrowLeft", r.ArrowUp = "ArrowUp", r.ArrowRight = "ArrowRight", r.ArrowDown = "ArrowDown", r.Home = "Home", r.End = "End", r.PageUp = "PageUp", r.PageDown = "PageDown", r.Tab = "Tab", r)
        },
        862: function(e, t, n) {
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
                a = n(4872),
                l = n(99),
                s = n(7895);
            let c = (0, r.createContext)(null);

            function d(e) {
                var t, n, o;
                let i = null != (n = null == (t = (0, r.useContext)(c)) ? void 0 : t.value) ? n : void 0;
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
                    return r.createElement(c.Provider, {
                        value: n
                    }, e.children)
                }, [i])]
            }
            c.displayName = "LabelContext";
            let p = Object.assign((0, s.yV)(function(e, t) {
                var n;
                let d = (0, r.useId)(),
                    f = function e() {
                        let t = (0, r.useContext)(c);
                        if (null === t) {
                            let t = Error("You used a <Label /> component, but it is not inside a relevant parent.");
                            throw Error.captureStackTrace && Error.captureStackTrace(t, e), t
                        }
                        return t
                    }(),
                    p = (0, l.Q)(),
                    v = (0, a.B)(),
                    {
                        id: m = "headlessui-label-".concat(d),
                        htmlFor: h = null != p ? p : null == (n = f.props) ? void 0 : n.htmlFor,
                        passive: g = !1,
                        ...b
                    } = e,
                    y = (0, u.T)(t);
                (0, i.e)(() => f.register(m), [m, f.register]);
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
                    w = v || !1,
                    T = (0, r.useMemo)(() => ({
                        ...f.slot,
                        disabled: w
                    }), [f.slot, w]),
                    k = {
                        ref: y,
                        ...f.props,
                        id: m,
                        htmlFor: h,
                        onClick: E
                    };
                return g && ("onClick" in k && (delete k.htmlFor, delete k.onClick), "onClick" in b && delete b.onClick), (0, s.L6)()({
                    ourProps: k,
                    theirProps: b,
                    slot: T,
                    defaultTag: h ? "label" : "div",
                    name: f.name || "Label"
                })
            }), {})
        },
        2174: function(e, t, n) {
            let r, o, i, u, a, l;
            n.d(t, {
                Y8: function() {
                    return X
                },
                Ee: function() {
                    return Y
                }
            });
            var s = n(7775),
                c = n(8419),
                d = n(7294);

            function f(e, t) {
                return null !== e && null !== t && "object" == typeof e && "object" == typeof t && "id" in e && "id" in t ? e.id === t.id : e === t
            }
            var p = n(9327),
                v = n(1857),
                m = n(8354),
                h = n(7110),
                g = n(9438),
                b = n(6577),
                y = n(4872),
                E = n(1831),
                w = n(99),
                T = n(7257);
            let k = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(e => "".concat(e, ":not([tabindex='-1'])")).join(","),
                P = ["[data-autofocus]"].map(e => "".concat(e, ":not([tabindex='-1'])")).join(",");
            var F = ((r = F || {})[r.First = 1] = "First", r[r.Previous = 2] = "Previous", r[r.Next = 4] = "Next", r[r.Last = 8] = "Last", r[r.WrapAround = 16] = "WrapAround", r[r.NoScroll = 32] = "NoScroll", r[r.AutoFocus = 64] = "AutoFocus", r),
                L = ((o = L || {})[o.Error = 0] = "Error", o[o.Overflow = 1] = "Overflow", o[o.Success = 2] = "Success", o[o.Underflow = 3] = "Underflow", o),
                S = ((i = S || {})[i.Previous = -1] = "Previous", i[i.Next = 1] = "Next", i),
                x = ((u = x || {})[u.Strict = 0] = "Strict", u[u.Loose = 1] = "Loose", u),
                A = ((a = A || {})[a.Keyboard = 0] = "Keyboard", a[a.Mouse = 1] = "Mouse", a);

            function R(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e => e;
                return e.slice().sort((e, n) => {
                    let r = t(e),
                        o = t(n);
                    if (null === r || null === o) return 0;
                    let i = r.compareDocumentPosition(o);
                    return i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
                })
            }

            function C(e, t) {
                var n, r, o;
                let {
                    sorted: i = !0,
                    relativeTo: u = null,
                    skipElements: a = []
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, l = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, s = Array.isArray(e) ? i ? R(e) : e : 64 & t ? function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.body;
                    return null == e ? [] : Array.from(e.querySelectorAll(P)).sort((e, t) => Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)))
                }(e) : function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.body;
                    return null == e ? [] : Array.from(e.querySelectorAll(k)).sort((e, t) => Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)))
                }(e);
                a.length > 0 && s.length > 1 && (s = s.filter(e => !a.some(t => null != t && "current" in t ? (null == t ? void 0 : t.current) === e : t === e))), u = null != u ? u : l.activeElement;
                let c = (() => {
                        if (5 & t) return 1;
                        if (10 & t) return -1;
                        throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                    })(),
                    d = (() => {
                        if (1 & t) return 0;
                        if (2 & t) return Math.max(0, s.indexOf(u)) - 1;
                        if (4 & t) return Math.max(0, s.indexOf(u)) + 1;
                        if (8 & t) return s.length - 1;
                        throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                    })(),
                    f = 32 & t ? {
                        preventScroll: !0
                    } : {},
                    p = 0,
                    v = s.length,
                    m;
                do {
                    if (p >= v || p + v <= 0) return 0;
                    let e = d + p;
                    if (16 & t) e = (e + v) % v;
                    else {
                        if (e < 0) return 3;
                        if (e >= v) return 1
                    }
                    null == (m = s[e]) || m.focus(f), p += c
                } while (m !== l.activeElement);
                return 6 & t && null != (o = null == (r = null == (n = m) ? void 0 : n.matches) ? void 0 : r.call(n, "textarea,input")) && o && m.select(), 2
            }
            "undefined" != typeof document && (document.addEventListener("keydown", e => {
                e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "")
            }, !0), document.addEventListener("click", e => {
                1 === e.detail ? delete document.documentElement.dataset.headlessuiFocusVisible : 0 === e.detail && (document.documentElement.dataset.headlessuiFocusVisible = "")
            }, !0));
            var O = n(2983),
                M = n(3745),
                N = n(3233),
                I = n(7895),
                D = n(9138),
                H = n(1237),
                j = n(862),
                z = ((l = z || {})[l.RegisterOption = 0] = "RegisterOption", l[l.UnregisterOption = 1] = "UnregisterOption", l);
            let G = {
                    0(e, t) {
                        let n = [...e.options, {
                            id: t.id,
                            element: t.element,
                            propsRef: t.propsRef
                        }];
                        return {
                            ...e,
                            options: R(n, e => e.element.current)
                        }
                    },
                    1(e, t) {
                        let n = e.options.slice(),
                            r = e.options.findIndex(e => e.id === t.id);
                        return -1 === r ? e : (n.splice(r, 1), {
                            ...e,
                            options: n
                        })
                    }
                },
                V = (0, d.createContext)(null);

            function W(e) {
                let t = (0, d.useContext)(V);
                if (null === t) {
                    let t = Error("<".concat(e, " /> is missing a parent <RadioGroup /> component."));
                    throw Error.captureStackTrace && Error.captureStackTrace(t, W), t
                }
                return t
            }
            V.displayName = "RadioGroupDataContext";
            let B = (0, d.createContext)(null);

            function U(e) {
                let t = (0, d.useContext)(B);
                if (null === t) {
                    let t = Error("<".concat(e, " /> is missing a parent <RadioGroup /> component."));
                    throw Error.captureStackTrace && Error.captureStackTrace(t, U), t
                }
                return t
            }

            function _(e, t) {
                return (0, M.E)(t.type, G, e, t)
            }
            B.displayName = "RadioGroupActionsContext";
            let K = (0, I.yV)(function(e, t) {
                    let n = (0, d.useId)(),
                        r = (0, y.B)(),
                        {
                            id: o = "headlessui-radiogroup-".concat(n),
                            value: i,
                            form: u,
                            name: a,
                            onChange: l,
                            by: s,
                            disabled: c = r || !1,
                            defaultValue: h,
                            ...g
                        } = e,
                        w = function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f;
                            return (0, d.useCallback)((t, n) => "string" == typeof e ? (null == t ? void 0 : t[e]) === (null == n ? void 0 : n[e]) : e(t, n), [e])
                        }(s),
                        [T, k] = (0, d.useReducer)(_, {
                            options: []
                        }),
                        P = T.options,
                        [S, x] = (0, j.bE)(),
                        [A, R] = (0, D.fw)(),
                        M = (0, d.useRef)(null),
                        z = (0, b.T)(M, t),
                        G = (0, v.L)(h),
                        [W, U] = (0, p.q)(i, l, G),
                        K = (0, d.useMemo)(() => P.find(e => !e.propsRef.current.disabled), [P]),
                        q = (0, d.useMemo)(() => P.some(e => w(e.propsRef.current.value, W)), [P, W]),
                        X = (0, m.z)(e => {
                            var t;
                            if (c || w(e, W)) return !1;
                            let n = null == (t = P.find(t => w(t.propsRef.current.value, e))) ? void 0 : t.propsRef.current;
                            return (null == n || !n.disabled) && (null == U || U(e), !0)
                        }),
                        Y = (0, m.z)(e => {
                            let t = M.current;
                            if (!t) return;
                            let n = (0, N.r)(t),
                                r = P.filter(e => !1 === e.propsRef.current.disabled).map(e => e.element.current);
                            switch (e.key) {
                                case H.R.Enter:
                                    (0, O.g)(e.currentTarget);
                                    break;
                                case H.R.ArrowLeft:
                                case H.R.ArrowUp:
                                    if (e.preventDefault(), e.stopPropagation(), C(r, F.Previous | F.WrapAround) === L.Success) {
                                        let e = P.find(e => e.element.current === (null == n ? void 0 : n.activeElement));
                                        e && X(e.propsRef.current.value)
                                    }
                                    break;
                                case H.R.ArrowRight:
                                case H.R.ArrowDown:
                                    if (e.preventDefault(), e.stopPropagation(), C(r, F.Next | F.WrapAround) === L.Success) {
                                        let e = P.find(e => e.element.current === (null == n ? void 0 : n.activeElement));
                                        e && X(e.propsRef.current.value)
                                    }
                                    break;
                                case H.R.Space: {
                                    e.preventDefault(), e.stopPropagation();
                                    let t = P.find(e => e.element.current === (null == n ? void 0 : n.activeElement));
                                    t && X(t.propsRef.current.value)
                                }
                            }
                        }),
                        Q = (0, m.z)(e => (k({
                            type: 0,
                            ...e
                        }), () => k({
                            type: 1,
                            id: e.id
                        }))),
                        J = (0, d.useMemo)(() => ({
                            value: W,
                            firstOption: K,
                            containsCheckedOption: q,
                            disabled: c,
                            compare: w,
                            ...T
                        }), [W, K, q, c, w, T]),
                        $ = (0, d.useMemo)(() => ({
                            registerOption: Q,
                            change: X
                        }), [Q, X]),
                        Z = (0, d.useMemo)(() => ({
                            value: W
                        }), [W]),
                        ee = (0, d.useCallback)(() => {
                            if (void 0 !== G) return X(G)
                        }, [X, G]),
                        et = (0, I.L6)();
                    return d.createElement(R, {
                        name: "RadioGroup.Description"
                    }, d.createElement(x, {
                        name: "RadioGroup.Label"
                    }, d.createElement(B.Provider, {
                        value: $
                    }, d.createElement(V.Provider, {
                        value: J
                    }, null != a && d.createElement(E.Mt, {
                        disabled: c,
                        data: {
                            [a]: W || "on"
                        },
                        overrides: {
                            type: "radio",
                            checked: null != W
                        },
                        form: u,
                        onReset: ee
                    }), et({
                        ourProps: {
                            ref: z,
                            id: o,
                            role: "radiogroup",
                            "aria-labelledby": S,
                            "aria-describedby": A,
                            onKeyDown: Y
                        },
                        theirProps: g,
                        slot: Z,
                        defaultTag: "div",
                        name: "RadioGroup"
                    })))))
                }),
                q = (0, I.yV)(function(e, t) {
                    var n;
                    let r = W("RadioGroup.Option"),
                        o = U("RadioGroup.Option"),
                        i = (0, d.useId)(),
                        {
                            id: u = "headlessui-radiogroup-option-".concat(i),
                            value: a,
                            disabled: l = r.disabled || !1,
                            autoFocus: f = !1,
                            ...p
                        } = e,
                        v = (0, d.useRef)(null),
                        y = (0, b.T)(v, t),
                        [E, w] = (0, j.bE)(),
                        [k, P] = (0, D.fw)(),
                        F = (0, g.E)({
                            value: a,
                            disabled: l
                        });
                    (0, h.e)(() => o.registerOption({
                        id: u,
                        element: v,
                        propsRef: F
                    }), [u, o, v, F]);
                    let L = (0, m.z)(e => {
                            var t;
                            if ((0, T.P)(e.currentTarget)) return e.preventDefault();
                            o.change(a) && (null == (t = v.current) || t.focus())
                        }),
                        S = (null == (n = r.firstOption) ? void 0 : n.id) === u,
                        {
                            isFocusVisible: x,
                            focusProps: A
                        } = (0, s.F)({
                            autoFocus: f
                        }),
                        {
                            isHovered: R,
                            hoverProps: C
                        } = (0, c.X)({
                            isDisabled: l
                        }),
                        O = r.compare(r.value, a),
                        M = (0, I.dG)({
                            ref: y,
                            id: u,
                            role: "radio",
                            "aria-checked": O ? "true" : "false",
                            "aria-labelledby": E,
                            "aria-describedby": k,
                            "aria-disabled": !!l || void 0,
                            tabIndex: l ? -1 : O || !r.containsCheckedOption && S ? 0 : -1,
                            onClick: l ? void 0 : L,
                            autoFocus: f
                        }, A, C),
                        N = (0, d.useMemo)(() => ({
                            checked: O,
                            disabled: l,
                            active: x,
                            hover: R,
                            focus: x,
                            autofocus: f
                        }), [O, l, R, x, f]),
                        H = (0, I.L6)();
                    return d.createElement(P, {
                        name: "RadioGroup.Description"
                    }, d.createElement(w, {
                        name: "RadioGroup.Label"
                    }, H({
                        ourProps: M,
                        theirProps: p,
                        slot: N,
                        defaultTag: "div",
                        name: "RadioGroup.Option"
                    })))
                }),
                X = (0, I.yV)(function(e, t) {
                    var n;
                    let r = W("Radio"),
                        o = U("Radio"),
                        i = (0, d.useId)(),
                        u = (0, w.Q)(),
                        a = (0, y.B)(),
                        {
                            id: l = u || "headlessui-radio-".concat(i),
                            value: f,
                            disabled: p = r.disabled || a || !1,
                            autoFocus: v = !1,
                            ...E
                        } = e,
                        k = (0, d.useRef)(null),
                        P = (0, b.T)(k, t),
                        F = (0, j.wp)(),
                        L = (0, D.zH)(),
                        S = (0, g.E)({
                            value: f,
                            disabled: p
                        });
                    (0, h.e)(() => o.registerOption({
                        id: l,
                        element: k,
                        propsRef: S
                    }), [l, o, k, S]);
                    let x = (0, m.z)(e => {
                            var t;
                            if ((0, T.P)(e.currentTarget)) return e.preventDefault();
                            o.change(f) && (null == (t = k.current) || t.focus())
                        }),
                        {
                            isFocusVisible: A,
                            focusProps: R
                        } = (0, s.F)({
                            autoFocus: v
                        }),
                        {
                            isHovered: C,
                            hoverProps: O
                        } = (0, c.X)({
                            isDisabled: p
                        }),
                        M = (null == (n = r.firstOption) ? void 0 : n.id) === l,
                        N = r.compare(r.value, f),
                        H = (0, I.dG)({
                            ref: P,
                            id: l,
                            role: "radio",
                            "aria-checked": N ? "true" : "false",
                            "aria-labelledby": F,
                            "aria-describedby": L,
                            "aria-disabled": !!p || void 0,
                            tabIndex: p ? -1 : N || !r.containsCheckedOption && M ? 0 : -1,
                            autoFocus: v,
                            onClick: p ? void 0 : x
                        }, R, O),
                        z = (0, d.useMemo)(() => ({
                            checked: N,
                            disabled: p,
                            hover: C,
                            focus: A,
                            autofocus: v
                        }), [N, p, C, A, v]);
                    return (0, I.L6)()({
                        ourProps: H,
                        theirProps: E,
                        slot: z,
                        defaultTag: "span",
                        name: "Radio"
                    })
                }),
                Y = Object.assign(K, {
                    Option: q,
                    Radio: X,
                    Label: j.__,
                    Description: D.dk
                })
        },
        9327: function(e, t, n) {
            n.d(t, {
                q: function() {
                    return i
                }
            });
            var r = n(7294),
                o = n(8354);

            function i(e, t, n) {
                let [i, u] = (0, r.useState)(n), a = void 0 !== e, l = (0, r.useRef)(a), s = (0, r.useRef)(!1), c = (0, r.useRef)(!1);
                return !a || l.current || s.current ? a || !l.current || c.current || (c.current = !0, l.current = a, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")) : (s.current = !0, l.current = a, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")), [a ? e : i, (0, o.z)(e => (a || u(e), null == t ? void 0 : t(e)))]
            }
        },
        1857: function(e, t, n) {
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
                let a = (0, o.z)(e => {
                    for (let t of u.current) null != t && ("function" == typeof t ? t(e) : t.current = e)
                });
                return t.every(e => null == e || (null == e ? void 0 : e[i])) ? void 0 : a
            }
        },
        4872: function(e, t, n) {
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
            let r;
            n.d(t, {
                Mt: function() {
                    return v
                },
                wR: function() {
                    return f
                }
            });
            var o = n(7294),
                i = n(3935),
                u = n(5246),
                a = n(2983),
                l = n(7895),
                s = ((r = s || {})[r.None = 1] = "None", r[r.Focusable = 2] = "Focusable", r[r.Hidden = 4] = "Hidden", r);
            let c = (0, l.yV)(function(e, t) {
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
                    return (0, l.L6)()({
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
                }, e.children, o.createElement(c, {
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

            function v(e) {
                let {
                    data: t,
                    form: n,
                    disabled: r,
                    onReset: i,
                    overrides: d
                } = e, [f, v] = (0, o.useState)(null), h = (0, u.G)();
                return (0, o.useEffect)(() => {
                    if (i && f) return h.addEventListener(f, "reset", i)
                }, [f, n, i]), o.createElement(p, null, o.createElement(m, {
                    setForm: v,
                    formId: n
                }), (0, a.t)(t).map(e => {
                    let [t, i] = e;
                    return o.createElement(c, {
                        features: s.Hidden,
                        ...(0, l.oA)({
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

            function m(e) {
                let {
                    setForm: t,
                    formId: n
                } = e;
                return (0, o.useEffect)(() => {
                    if (n) {
                        let e = document.getElementById(n);
                        e && t(e)
                    }
                }, [t, n]), n ? null : o.createElement(c, {
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
            n.d(t, {
                O: function() {
                    return a
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
            let a = new u
        },
        2983: function(e, t, n) {
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
            n.d(t, {
                E: function() {
                    return r
                }
            });

            function r(e, t) {
                for (var n = arguments.length, o = Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) o[i - 2] = arguments[i];
                if (e in t) {
                    let n = t[e];
                    return "function" == typeof n ? n(...o) : n
                }
                let u = Error('Tried to handle "'.concat(e, '" but there is no handler defined. Only defined handlers are: ').concat(Object.keys(t).map(e => '"'.concat(e, '"')).join(", "), "."));
                throw Error.captureStackTrace && Error.captureStackTrace(u, r), u
            }
        },
        3233: function(e, t, n) {
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
            let r, o;
            n.d(t, {
                oA: function() {
                    return h
                },
                yV: function() {
                    return m
                },
                dG: function() {
                    return v
                },
                L6: function() {
                    return c
                }
            });
            var i = n(7294);

            function u() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return Array.from(new Set(t.flatMap(e => "string" == typeof e ? e.split(" ") : []))).filter(Boolean).join(" ")
            }
            var a = n(3745),
                l = ((r = l || {})[r.None = 0] = "None", r[r.RenderStrategy = 1] = "RenderStrategy", r[r.Static = 2] = "Static", r),
                s = ((o = s || {})[o.Unmount = 0] = "Unmount", o[o.Hidden = 1] = "Hidden", o);

            function c() {
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
                        name: l,
                        mergeRefs: s
                    } = e;
                    s = null != s ? s : f;
                    let c = p(n, t);
                    if (u) return d(c, r, o, l, s);
                    let v = null != i ? i : 0;
                    if (2 & v) {
                        let {
                            static: e = !1,
                            ...t
                        } = c;
                        if (e) return d(t, r, o, l, s)
                    }
                    if (1 & v) {
                        let {
                            unmount: e = !0,
                            ...t
                        } = c;
                        return (0, a.E)(e ? 0 : 1, {
                            0: () => null,
                            1: () => d({
                                ...t,
                                hidden: !0,
                                style: {
                                    display: "none"
                                }
                            }, r, o, l, s)
                        })
                    }
                    return d(c, r, o, l, s)
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
                        as: a = n,
                        children: l,
                        refName: s = "ref",
                        ...c
                    } = g(e, ["unmount", "static"]),
                    d = void 0 !== e.ref ? {
                        [s]: e.ref
                    } : {},
                    f = "function" == typeof l ? l(t) : l;
                "className" in c && c.className && "function" == typeof c.className && (c.className = c.className(t)), c["aria-labelledby"] && c["aria-labelledby"] === c.id && (c["aria-labelledby"] = void 0);
                let v = {};
                if (t) {
                    let e = !1,
                        n = [];
                    for (let [r, o] of Object.entries(t)) "boolean" == typeof o && (e = !0), !0 === o && n.push(r.replace(/([A-Z])/g, e => "-".concat(e.toLowerCase())));
                    if (e)
                        for (let e of (v["data-headlessui-state"] = n.join(" "), n)) v["data-".concat(e)] = ""
                }
                if (a === i.Fragment && (Object.keys(h(c)).length > 0 || Object.keys(h(v)).length > 0)) {
                    if (!(0, i.isValidElement)(f) || Array.isArray(f) && f.length > 1) {
                        if (Object.keys(h(c)).length > 0) throw Error(['Passing props on "Fragment"!', "", "The current component <".concat(r, ' /> is rendering a "Fragment".'), "However we need to passthrough the following props:", Object.keys(h(c)).concat(Object.keys(h(v))).map(e => "  - ".concat(e)).join("\n"), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(e => "  - ".concat(e)).join("\n")].join("\n"))
                    } else {
                        let e = f.props,
                            t = null == e ? void 0 : e.className,
                            n = "function" == typeof t ? function() {
                                for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                return u(t(...n), c.className)
                            } : u(t, c.className),
                            r = p(f.props, h(g(c, ["ref"])));
                        for (let e in v) e in r && delete v[e];
                        return (0, i.cloneElement)(f, Object.assign({}, r, v, d, {
                            ref: o(i.version.split(".")[0] >= "19" ? f.props.ref : f.ref, d.ref)
                        }, n ? {
                            className: n
                        } : {}))
                    }
                }
                return (0, i.createElement)(a, Object.assign({}, g(c, ["ref"]), a !== i.Fragment && d, a !== i.Fragment && v), f)
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

            function v() {
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

            function m(e) {
                var t;
                return Object.assign((0, i.forwardRef)(e), {
                    displayName: null != (t = e.displayName) ? t : e.name
                })
            }

            function h(e) {
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
        },
        8557: function(e, t, n) {
            n.d(t, {
                a: function() {
                    return o
                }
            });
            var r = n(5504);

            function o(e, ...t) {
                let n = e,
                    i = t.map(e => "lazy" in e ? function(e) {
                        let {
                            lazy: t,
                            lazyArgs: n
                        } = e;
                        return Object.assign(t(...n), {
                            isSingle: t.single ?? !1,
                            index: 0,
                            items: []
                        })
                    }(e) : void 0),
                    u = 0;
                for (; u < t.length;) {
                    var a;
                    if (void 0 === i[u] || !("string" == typeof(a = n) || "object" == typeof a && null !== a && Symbol.iterator in a)) {
                        n = (0, t[u])(n), u += 1;
                        continue
                    }
                    let e = [];
                    for (let n = u; n < t.length; n++) {
                        let t = i[n];
                        if (void 0 === t || (e.push(t), t.isSingle)) break
                    }
                    let o = [];
                    for (let t of n)
                        if (function e(t, n, o) {
                                if (0 === o.length) return n.push(t), !1;
                                let i = t,
                                    u = r.a,
                                    a = !1;
                                for (let [t, r] of o.entries()) {
                                    let {
                                        index: l,
                                        items: s
                                    } = r;
                                    if (s.push(i), u = r(i, l, s), r.index += 1, u.hasNext) {
                                        if (u.hasMany) {
                                            for (let r of u.next)
                                                if (e(r, n, o.slice(t + 1))) return !0;
                                            return a
                                        }
                                        i = u.next
                                    }
                                    if (!u.hasNext) break;
                                    u.done && (a = !0)
                                }
                                return u.hasNext && n.push(i), a
                            }(t, o, e)) break;
                    let {
                        isSingle: l
                    } = e.at(-1);
                    n = l ? o[0] : o, u += e.length
                }
                return n
            }
        },
        5504: function(e, t, n) {
            n.d(t, {
                a: function() {
                    return r
                }
            });
            var r = {
                done: !1,
                hasNext: !1
            }
        },
        1327: function(e, t, n) {
            n.d(t, {
                a: function() {
                    return i
                }
            });
            var r = n(8557),
                o = n(5504);

            function i(...e) {
                return function(e, t) {
                    let n = t.length - e.length;
                    if (1 === n) {
                        let [n, ...o] = t;
                        return (0, r.a)(n, {
                            lazy: e,
                            lazyArgs: o
                        })
                    }
                    if (0 === n) {
                        let n = {
                            lazy: e,
                            lazyArgs: t
                        };
                        return Object.assign(e => (0, r.a)(e, n), n)
                    }
                    throw Error("Wrong number of arguments")
                }(u, e)
            }

            function u() {
                let e = new Set;
                return t => e.has(t) ? o.a : (e.add(t), {
                    done: !1,
                    hasNext: !0,
                    next: t
                })
            }
        },
        1709: function(e, t, n) {
            n.d(t, {
                a: function() {
                    return o
                }
            });
            var r = n(7800);

            function o(...e) {
                return (0, r.a)(i, e, u)
            }
            var i = (e, t) => e.map(t),
                u = e => (t, n, r) => ({
                    done: !1,
                    hasNext: !0,
                    next: e(t, n, r)
                })
        },
        2635: function(e, t, n) {
            n.d(t, {
                a: function() {
                    return o
                }
            });
            var r = n(7800);

            function o(...e) {
                return (0, r.a)(i, e)
            }

            function i(e, t) {
                let n = [];
                for (let r = e; r < t; r++) n.push(r);
                return n
            }
        },
        7800: function(e, t, n) {
            n.d(t, {
                a: function() {
                    return r
                }
            });

            function r(e, t, n) {
                let r = e.length - t.length;
                if (0 === r) return e(...t);
                if (1 === r) {
                    let r;
                    return r = n => e(n, ...t), void 0 === n ? r : Object.assign(r, {
                        lazy: n,
                        lazyArgs: t
                    })
                }
                throw Error("Wrong number of arguments")
            }
        },
        2527: function(e, t, n) {
            n.d(t, {
                a: function() {
                    return u
                }
            });
            var r = n(7800);

            function o(...e) {
                return (0, r.a)(i, e)
            }
            var i = (e, t) => e.length >= t;

            function u(...e) {
                return (0, r.a)(a, e)
            }

            function a(e, t) {
                if (!o(t, 1)) return {
                    ...e
                };
                if (!o(t, 2)) {
                    let {
                        [t[0]]: n, ...r
                    } = e;
                    return r
                }
                let n = {
                    ...e
                };
                for (let e of t) delete n[e];
                return n
            }
        },
        4594: function(e, t, n) {
            n.d(t, {
                a: function() {
                    return o
                }
            });
            var r = n(7800);

            function o(...e) {
                return (0, r.a)(i, e)
            }

            function i(e) {
                let t = "bigint" == typeof e[0] ? 0n : 0;
                for (let n of e) t += n;
                return t
            }
        },
        2660: function(e, t, n) {
            n.d(t, {
                a: function() {
                    return o
                }
            });
            var r = n(7800);

            function o(...e) {
                return (0, r.a)(i, e)
            }
            var i = (e, t) => {
                let n = {};
                for (let [r, o] of e.entries()) {
                    let i = t(o, r, e);
                    if (void 0 !== i) {
                        let {
                            [i]: e
                        } = n;
                        void 0 === e && (e = [], n[i] = e), e.push(o)
                    }
                }
                return n
            }
        },
        6935: function(e, t, n) {
            n.d(t, {
                D: function() {
                    return o
                }
            });
            var r = n(7446);

            function o(e) {
                let t = e.isPrivate ?? "undefined" == typeof window,
                    n = {
                        ...e.schema.public,
                        ...e.schema.shared
                    };
                t && (n = {
                    ...n,
                    ...e.schema.private
                });
                try {
                    return r.Qc3(r.Ryn(n), e.values)
                } catch (e) {
                    if (r.yhs(e)) {
                        let t = e.issues.map(e => "	" + [r.xNY(e), e.message].join(": ")).join("\n");
                        throw Error(`[valibot-env] Invalid environment variable values detected. Please check the following variables:
${t}`, {
                            cause: e
                        })
                    }
                    throw e
                }
            }
        },
        782: function(e, t, n) {
            n.d(t, {
                tJ: function() {
                    return o
                }
            });
            let r = e => t => {
                    try {
                        let n = e(t);
                        if (n instanceof Promise) return n;
                        return {
                            then: e => r(e)(n),
                            catch (e) {
                                return this
                            }
                        }
                    } catch (e) {
                        return {
                            then(e) {
                                return this
                            },
                            catch: t => r(t)(e)
                        }
                    }
                },
                o = (e, t) => (n, o, i) => {
                    let u, a = {
                            storage: function(e, t) {
                                let n;
                                try {
                                    n = e()
                                } catch (e) {
                                    return
                                }
                                return {
                                    getItem: e => {
                                        var t;
                                        let r = e => null === e ? null : JSON.parse(e, void 0),
                                            o = null != (t = n.getItem(e)) ? t : null;
                                        return o instanceof Promise ? o.then(r) : r(o)
                                    },
                                    setItem: (e, t) => n.setItem(e, JSON.stringify(t, void 0)),
                                    removeItem: e => n.removeItem(e)
                                }
                            }(() => localStorage),
                            partialize: e => e,
                            version: 0,
                            merge: (e, t) => ({
                                ...t,
                                ...e
                            }),
                            ...t
                        },
                        l = !1,
                        s = new Set,
                        c = new Set,
                        d = a.storage;
                    if (!d) return e((...e) => {
                        console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`), n(...e)
                    }, o, i);
                    let f = () => {
                            let e = a.partialize({
                                ...o()
                            });
                            return d.setItem(a.name, {
                                state: e,
                                version: a.version
                            })
                        },
                        p = i.setState;
                    i.setState = (e, t) => {
                        p(e, t), f()
                    };
                    let v = e((...e) => {
                        n(...e), f()
                    }, o, i);
                    i.getInitialState = () => v;
                    let m = () => {
                        var e, t;
                        if (!d) return;
                        l = !1, s.forEach(e => {
                            var t;
                            return e(null != (t = o()) ? t : v)
                        });
                        let i = (null == (t = a.onRehydrateStorage) ? void 0 : t.call(a, null != (e = o()) ? e : v)) || void 0;
                        return r(d.getItem.bind(d))(a.name).then(e => {
                            if (e) {
                                if ("number" != typeof e.version || e.version === a.version) return [!1, e.state];
                                if (a.migrate) {
                                    let t = a.migrate(e.state, e.version);
                                    return t instanceof Promise ? t.then(e => [!0, e]) : [!0, t]
                                }
                                console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                            }
                            return [!1, void 0]
                        }).then(e => {
                            var t;
                            let [r, i] = e;
                            if (n(u = a.merge(i, null != (t = o()) ? t : v), !0), r) return f()
                        }).then(() => {
                            null == i || i(u, void 0), u = o(), l = !0, c.forEach(e => e(u))
                        }).catch(e => {
                            null == i || i(void 0, e)
                        })
                    };
                    return i.persist = {
                        setOptions: e => {
                            a = {
                                ...a,
                                ...e
                            }, e.storage && (d = e.storage)
                        },
                        clearStorage: () => {
                            null == d || d.removeItem(a.name)
                        },
                        getOptions: () => a,
                        rehydrate: () => m(),
                        hasHydrated: () => l,
                        onHydrate: e => (s.add(e), () => {
                            s.delete(e)
                        }),
                        onFinishHydration: e => (c.add(e), () => {
                            c.delete(e)
                        })
                    }, a.skipHydration || m(), u || v
                }
        }
    }
]);