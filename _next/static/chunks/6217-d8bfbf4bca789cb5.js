(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6217], {
        4319: function(e, t) {
            ! function(e) {
                "use strict";
                var t, r, a = function() {
                        return t || "undefined" != typeof window && (t = window.gsap) && t.registerPlugin && t
                    },
                    s = function(e, t) {
                        return !!(void 0 === e ? t : e && !~(e + "").indexOf("false"))
                    },
                    n = function(e) {
                        if (t = e || a()) {
                            r = t.registerEase;
                            var s, n = t.parseEase(),
                                o = function(e) {
                                    return function(t) {
                                        var r = .5 + t / 2;
                                        e.config = function(t) {
                                            return e(2 * (1 - t) * t * r + t * t)
                                        }
                                    }
                                };
                            for (s in n) n[s].config || o(n[s]);
                            for (s in r("slow", c), r("expoScale", d), r("rough", f), h) "version" !== s && t.core.globals(s, h[s])
                        }
                    },
                    o = function(e, t, r) {
                        var a = (e = Math.min(1, e || .7)) < 1 ? t || 0 === t ? t : .7 : 0,
                            n = (1 - e) / 2,
                            o = n + e,
                            l = s(r);
                        return function(e) {
                            var t = e + (.5 - e) * a;
                            return e < n ? l ? 1 - (e = 1 - e / n) * e : t - (e = 1 - e / n) * e * e * e * t : e > o ? l ? 1 === e ? 0 : 1 - (e = (e - o) / n) * e : t + (e - t) * (e = (e - o) / n) * e * e * e : l ? 1 : t
                        }
                    },
                    l = function(e, r, a) {
                        var s = Math.log(r / e),
                            n = r - e;
                        return a && (a = t.parseEase(a)),
                            function(t) {
                                return (e * Math.exp(s * (a ? a(t) : t)) - e) / n
                            }
                    },
                    i = function(e, t, r) {
                        this.t = e, this.v = t, r && (this.next = r, r.prev = this, this.c = r.v - t, this.gap = r.t - e)
                    },
                    u = function(e) {
                        "object" != typeof e && (e = {
                            points: +e || 20
                        });
                        for (var r, a, n, o, l, u, c, d = e.taper || "none", f = [], h = 0, p = 0 | (+e.points || 20), x = p, w = s(e.randomize, !0), m = s(e.clamp), v = t ? t.parseEase(e.template) : 0, g = .4 * (+e.strength || 1); --x > -1;) r = w ? Math.random() : 1 / p * x, a = v ? v(r) : r, n = "none" === d ? g : "out" === d ? (o = 1 - r) * o * g : "in" === d ? r * r * g : r < .5 ? (o = 2 * r) * o * .5 * g : (o = (1 - r) * 2) * o * .5 * g, w ? a += Math.random() * n - .5 * n : x % 2 ? a += .5 * n : a -= .5 * n, m && (a > 1 ? a = 1 : a < 0 && (a = 0)), f[h++] = {
                            x: r,
                            y: a
                        };
                        for (f.sort(function(e, t) {
                                return e.x - t.x
                            }), u = new i(1, 1, null), x = p; x--;) u = new i((l = f[x]).x, l.y, u);
                        return c = new i(0, 0, u.t ? u : u.next),
                            function(e) {
                                var t = c;
                                if (e > t.t) {
                                    for (; t.next && e >= t.t;) t = t.next;
                                    t = t.prev
                                } else
                                    for (; t.prev && e <= t.t;) t = t.prev;
                                return c = t, t.v + (e - t.t) / t.gap * t.c
                            }
                    },
                    c = o(.7);
                c.ease = c, c.config = o;
                var d = l(1, 2);
                d.config = l;
                var f = u();
                f.ease = f, f.config = u;
                var h = {
                    SlowMo: c,
                    RoughEase: f,
                    ExpoScaleEase: d
                };
                for (var p in h) h[p].register = n, h[p].version = "3.12.5";
                a() && t.registerPlugin(c), e.EasePack = h, e.ExpoScaleEase = d, e.RoughEase = f, e.SlowMo = c, e.default = h, Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }(t)
        },
        6217: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return p
                }
            });
            var a = r(5893),
                s = r(146),
                n = r(7294),
                o = r(6038),
                l = r(4347),
                i = r.n(l),
                u = r(4247),
                c = () => (0, a.jsxs)("svg", {
                    width: "286",
                    height: "286",
                    viewBox: "0 0 286 286",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, a.jsxs)("g", {
                        clipPath: "url(#clip0_4489_62323)",
                        children: [(0, a.jsxs)("mask", {
                            id: "mask0_4489_62323",
                            style: {
                                maskType: "alpha"
                            },
                            maskUnits: "userSpaceOnUse",
                            x: "18",
                            y: "-49",
                            width: "271",
                            height: "203",
                            children: [(0, a.jsx)("rect", {
                                x: "224",
                                y: "14.5488",
                                width: "194.476",
                                height: "73.7032",
                                transform: "rotate(149.564 224 14.5488)",
                                fill: "url(#paint0_linear_4489_62323)"
                            }), (0, a.jsx)("rect", {
                                x: "167",
                                y: "-19",
                                width: "122",
                                height: "173",
                                fill: "#D9D9D9"
                            })]
                        }), (0, a.jsx)("g", {
                            mask: "url(#mask0_4489_62323)",
                            children: (0, a.jsx)("path", {
                                opacity: "0.15",
                                d: "M20.6185 72.2329C36.1479 45.2009 60.1697 24.0541 88.9524 12.0774C117.735 0.100734 149.667 -2.0354 179.789 6.00087C209.91 14.0371 236.535 31.7959 255.526 56.5185C274.518 81.2412 284.813 111.544 284.813 142.719",
                                stroke: "#575349"
                            })
                        })]
                    }), (0, a.jsxs)("defs", {
                        children: [(0, a.jsxs)("linearGradient", {
                            id: "paint0_linear_4489_62323",
                            x1: "418.476",
                            y1: "88.252",
                            x2: "224",
                            y2: "88.252",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, a.jsx)("stop", {
                                stopColor: "#F2EFE9",
                                stopOpacity: "0"
                            }), (0, a.jsx)("stop", {
                                offset: "1",
                                stopColor: "#F2EFE9"
                            })]
                        }), (0, a.jsx)("clipPath", {
                            id: "clip0_4489_62323",
                            children: (0, a.jsx)("rect", {
                                width: "286",
                                height: "286",
                                fill: "white"
                            })
                        })]
                    })]
                }),
                d = r(4319),
                f = r(6546),
                h = r(5285),
                p = e => {
                    let {
                        index: t,
                        slicesLength: r = 1,
                        simple: l = !1,
                        children: p,
                        translated: x = !0
                    } = e, w = (0, n.useRef)(), m = (0, n.useRef)(), v = (0, n.useRef)(), g = (0, n.useRef)(), C = (0, n.useRef)(), j = (0, n.useRef)(), y = (0, n.useRef)(), E = (0, n.useRef)(), b = (0, n.useRef)(), _ = (0, n.useRef)(), M = (0, n.useRef)(0), N = (0, h.LZ)(), R = (0, s.o)(e => e.startTransition), S = (0, s.o)(e => e.setIsAppear), L = (0, s.o)(e => e.isLoaded), k = (0, s.o)(e => e.isFirstLoaded), A = (0, s.o)(e => e.setCursorHidden), T = () => {
                        E.current && o.p8.set(E.current, {
                            x: window.innerWidth / 2 - 42 - 5,
                            y: window.innerHeight / 2 - 40.5,
                            transformOrigin: "center",
                            rotate: -90,
                            scale: 0
                        })
                    }, P = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            t = document.querySelector(".fade");
                        t.classList.remove("opacity-0"), o.p8.timeline({
                            delay: e ? .5 : 1.1,
                            onStart: () => {
                                if (e) {
                                    let e = document.querySelector(".loader");
                                    e && o.p8.set(e, {
                                        autoAlpha: 0
                                    })
                                }
                            },
                            onComplete: () => {
                                window.dispatchEvent(new CustomEvent("is-appeared")), N && N.start(), f.ScrollTrigger.refresh()
                            }
                        }).fromTo(t, {
                            autoAlpha: 1
                        }, {
                            autoAlpha: 0,
                            duration: .6,
                            ease: "power2.out"
                        }, 0).call(() => {
                            S(!0)
                        }, [], 0)
                    }, D = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        T();
                        let t = document.querySelector(".fade"),
                            r = document.querySelector(".loader");
                        y.current && y.current.classList.remove("hidden");
                        let a = window.innerWidth / 83,
                            s = window.innerHeight / 80,
                            n = v.current.querySelectorAll("path"),
                            l = o.p8.timeline({
                                delay: .1,
                                onStart: () => {
                                    o.p8.set([t, r], {
                                        autoAlpha: 0
                                    }), A(!0)
                                },
                                onComplete: () => {
                                    window.dispatchEvent(new CustomEvent("is-appeared")), N && N.start(), f.ScrollTrigger.refresh(), e && window.dispatchEvent(new CustomEvent("introduction-complete")), m.current && (m.current.style.clipPath = null), y.current && y.current.classList.add("hidden"), b.current && b.current.classList.add("hidden")
                                }
                            });
                        l.addLabel("start", 0), e && l.fromTo(M, {
                            current: 0
                        }, {
                            current: 100,
                            ease: "linear",
                            duration: 2.5,
                            onUpdate: () => {
                                _.current && (_.current.innerHTML = M.current < 100 ? "0" + Math.round(M.current) : Math.round(M.current))
                            }
                        }, 0), l.fromTo(v.current, {
                            rotate: 120,
                            autoAlpha: 0,
                            scale: .2
                        }, {
                            rotate: 0,
                            scale: 1,
                            autoAlpha: 1,
                            ease: "expo.out",
                            duration: 1.9
                        }, "start").fromTo(n, {
                            scale: .1
                        }, {
                            scale: 1,
                            ease: "expo.out",
                            duration: .95
                        }, "start+=0.12").fromTo(g.current, {
                            scale: .45,
                            autoAlpha: 0
                        }, {
                            scale: 1,
                            autoAlpha: 1,
                            ease: "power2.out",
                            duration: 2
                        }, "start").fromTo(g.current, {
                            autoAlpha: 0
                        }, {
                            autoAlpha: 1,
                            ease: "power2.out",
                            duration: 1.2
                        }, "start"), l.fromTo(E.current, {
                            rotate: -90,
                            scale: 0
                        }, {
                            scale: (a > s ? a : s) + 8,
                            rotate: "+=70",
                            duration: 2,
                            ease: "beaucoup.intro"
                        }, e ? "start+=2.7" : "start+=1.5").to([g.current, v.current], {
                            autoAlpha: 0,
                            ease: "power2.out",
                            duration: .4
                        }, "<30%").call(() => {
                            S(!0)
                        }, [], e ? "start+=3.1" : "start+=1.9");
                        let i = o.p8.timeline({
                            delay: .1
                        });
                        e ? i.to(C.current, {
                            rotate: "+=360",
                            repeat: 2,
                            ease: "slow(0.2, 0.67)",
                            repeatRefresh: !0,
                            duration: 2.2
                        }, 0).fromTo(j.current, {
                            rotate: -80
                        }, {
                            rotate: "+=360",
                            repeatRefresh: !0,
                            ease: "slow(0.05, 0.6)",
                            repeat: 2,
                            duration: 2.4
                        }, .12) : i.to(C.current, {
                            rotate: "+=360",
                            repeat: 2,
                            ease: "slow(0.2, 0.67)",
                            repeatRefresh: !0,
                            duration: 1.9
                        }, 0).fromTo(j.current, {
                            rotate: -80
                        }, {
                            rotate: "+=360",
                            repeatRefresh: !0,
                            ease: "slow(0.05, 0.6)",
                            repeat: 2,
                            duration: 2.1
                        }, .12)
                    };
                    return (0, n.useEffect)(() => {
                        o.p8.registerPlugin(d.SlowMo), o.p8.registerPlugin(i()), i().create("beaucoup.intro", "0.89, 0.12, 0.21, 1.00"), k && b.current && b.current.classList.add("hidden")
                    }, []), (0, n.useEffect)(() => {
                        L && !k ? (N && N.stop(), w.current ? P(!0) : D(!0)) : L || T()
                    }, [L, k]), (0, n.useEffect)(() => {
                        if (w.current) {
                            P();
                            return
                        }
                        R && D()
                    }, [R]), 0 !== t || l ? (0, a.jsx)("div", {
                        ref: w,
                        className: "simple-transition-path",
                        children: p
                    }) : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none",
                            children: (0, a.jsx)("div", {
                                ref: v,
                                className: "svg-wrapper w-[4.267rem]",
                                children: (0, a.jsxs)("svg", {
                                    width: "56",
                                    height: "50",
                                    viewBox: "0 0 56 50",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [(0, a.jsx)("path", {
                                        d: "M40.565 15.0573C36.9268 17.6142 32.6423 19.102 28.1985 19.3514H27.9062C23.4275 19.0849 19.1111 17.5827 15.4385 15.0125C12.5943 13.1513 8.90682 10.3484 9.23285 6.43554C9.45769 3.74473 12.3919 2.42176 14.5842 1.74906C15.506 1.46877 16.4391 1.23332 17.3722 1.04272C24.0175 -0.257846 30.8455 -0.333841 37.5183 0.818491H37.6082C38.6313 1.00909 39.6543 1.23332 40.6886 1.5024L41.543 1.74906C43.7353 2.42176 46.6695 3.74473 46.8943 6.43554C47.2316 10.3484 43.3305 13.1626 40.4862 15.0573H40.565Z",
                                        fill: "#D7D1C6"
                                    }), (0, a.jsx)("path", {
                                        d: "M12.5493 17.6362C16.7717 19.4085 20.4376 22.2821 23.162 25.9552L23.2407 26.0674L23.3306 26.2019C25.6353 29.8457 26.2311 34.4761 26.2536 38.8263C26.2536 42.2458 25.6353 47.1453 22.5661 48.7822C20.194 50.0267 17.5071 48.3113 15.7533 46.8202C15.0226 46.2035 14.3143 45.5421 13.6398 44.8581C8.91013 39.9371 5.10259 34.2109 2.39755 27.9509V27.8724C1.99283 26.9082 1.61059 25.9216 1.27333 24.9013C1.18339 24.621 1.09347 24.3296 1.01478 24.0381C0.362728 21.7957 -0.109461 18.6228 1.94787 16.9523C5.00576 14.5193 9.50266 16.2571 12.6055 17.6362H12.5493Z",
                                        fill: "#D7D1C6"
                                    }), (0, a.jsx)("path", {
                                        d: "M43.6228 17.6362C39.3954 19.4053 35.725 22.2794 32.9988 25.9552L32.9202 26.0674L32.8302 26.2019C30.5256 29.8457 29.9297 34.4761 29.9072 38.8263C29.9072 42.2458 30.5255 47.1453 33.5947 48.7822C35.9668 50.0267 38.6537 48.3113 40.4075 46.8202C41.1382 46.2035 41.8465 45.5421 42.521 44.8581C47.2549 39.9404 51.0629 34.2135 53.7633 27.9509V27.8724C54.168 26.9082 54.5502 25.9216 54.8875 24.9013L55.1573 24.0381C55.8094 21.7957 56.2815 18.6228 54.213 16.9523C51.1551 14.5193 46.6582 16.2571 43.5666 17.6362H43.6228Z",
                                        fill: "#D7D1C6"
                                    })]
                                })
                            })
                        }), (0, a.jsxs)("div", {
                            ref: g,
                            className: "absolute top-1/2 left-1/2 w-[28.4rem] h-[28.4rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none",
                            style: {
                                overflow: "hidden"
                            },
                            children: [(0, a.jsxs)("div", {
                                className: "absolute w-full h-full",
                                ref: C,
                                children: [(0, a.jsx)("div", {
                                    className: "absolute left-0 top-1/2 w-[0.7rem] -translate-x-[0.2rem] -translate-y-1/2 rotate-45",
                                    children: (0, a.jsx)(u.Z, {
                                        color: "#A39B8B"
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "absolute top-0 left-0 w-full h-full svg-wrapper rotate-180",
                                    children: (0, a.jsx)(c, {})
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "absolute w-full h-full rounded-full",
                                ref: j,
                                children: [(0, a.jsx)("div", {
                                    className: "absolute left-0 top-1/2 w-[0.7rem] -translate-x-[0.2rem] -translate-y-1/2 rotate-45",
                                    children: (0, a.jsx)(u.Z, {
                                        color: "#A39B8B"
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "absolute top-0 left-0 w-full h-full svg-wrapper rotate-180",
                                    children: (0, a.jsx)(c, {})
                                })]
                            })]
                        }), (0, a.jsxs)("div", {
                            ref: b,
                            className: "absolute left-1/2 bottom-[3.5rem] -translate-x-1/2 text-10 leading-[1.8rem] tracking-[0.05rem] font-body-mono text-dark_grey",
                            children: [(0, a.jsx)("span", {
                                ref: _,
                                children: "000"
                            }), (0, a.jsx)("span", {
                                children: "/"
                            }), (0, a.jsx)("span", {
                                children: "100"
                            })]
                        }), (0, a.jsxs)("div", {
                            style: {
                                clipPath: "url(#svgPath)",
                                backfaceVisibility: "hidden",
                                transform: x ? "translate3d(0, 0, 0)" : "",
                                zIndex: x ? r - t : "10"
                            },
                            ref: m,
                            className: "transition-path relative",
                            children: [(0, a.jsx)("div", {
                                className: "absolute top-0 left-0 w-full h-screen pointer-events-none",
                                children: (0, a.jsx)("div", {
                                    ref: y,
                                    className: "absolute top-0 left-0 w-full h-full hidden z-1",
                                    children: (0, a.jsx)("svg", {
                                        width: "84",
                                        height: "81",
                                        className: "w-full h-full",
                                        children: (0, a.jsx)("defs", {
                                            children: (0, a.jsx)("clipPath", {
                                                id: "svgPath",
                                                children: (0, a.jsx)("path", {
                                                    ref: E,
                                                    d: "M79.4794 63.3751C60.1831 81.0548 4.91108 83.8741 0.832418 57.5147C-4.41761 23.5849 23.6769 -1.01793 45.0967 5.07786C76.8979 14.1281 91.9353 51.9624 79.4794 63.3751Z"
                                                })
                                            })
                                        })
                                    })
                                })
                            }), p]
                        })]
                    })
                }
        }
    }
]);