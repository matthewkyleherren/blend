"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6708], {
        6209: function(e, r, t) {
            var n = t(5893);
            r.Z = e => {
                let {
                    children: r,
                    size: t = "small",
                    blur: l = !0
                } = e;
                return (0, n.jsx)("div", {
                    className: "rounded-12 p-[1.8rem] lg:p-40\n  ".concat(l ? "backdrop-blur-[105px] text-white" : "bg-white text-dark_grey", "\n  ").concat("small" === t && l ? "w-[26.4rem] lg:w-[31rem]" : "", "\n  ").concat("small" !== t || l ? "" : "w-full md:w-[26.4rem] lg:w-[31rem]", "\n  ").concat("small" !== t && l ? "w-[26.4rem] lg:w-[36.8rem]" : "", "\n  ").concat("small" === t || l ? "" : "w-full md:w-[26.4rem] lg:w-[36.8rem]", "\n  "),
                    style: {
                        backgroundColor: "#d9d9d921"
                    },
                    children: r
                })
            }
        },
        6708: function(e, r, t) {
            t.r(r);
            var n = t(5893),
                l = t(7294),
                c = t(6038),
                o = t(6546),
                a = t(188),
                u = t(7825),
                i = t(7712),
                s = t(6209),
                d = t(146),
                g = t(1100),
                m = t(6217);
            r.default = e => {
                var r, t;
                let {
                    item: p,
                    items: f,
                    index: h
                } = e, w = (0, l.useRef)(null), v = (0, l.useRef)(null), x = (0, l.useRef)(null), b = (0, l.useRef)([]), k = (0, l.useRef)([]), j = (0, l.useRef)([]), y = (0, l.useRef)([]), _ = (0, l.useRef)(null), R = (0, l.useRef)(null), N = (0, l.useRef)(null), P = (0, l.useRef)(null), A = (0, l.useRef)(null), T = (0, l.useRef)(null), E = (0, l.useRef)(null), z = (0, l.useRef)(null), S = (0, l.useRef)(null), W = (0, d.o)(e => e.setCursorHidden), C = (0, d.o)(e => e.isAppear), [L, O] = (0, l.useState)(0), H = (0, u.a)("(max-width: 1024px)", !0), I = (0, l.useRef)(null), B = (0, l.useRef)(null), M = (0, l.useRef)(null), Z = (0, l.useRef)(null), F = (0, l.useRef)(null), G = (0, l.useRef)(null), K = (0, l.useRef)(null), U = (0, l.useRef)(null), V = (0, l.useRef)(null), q = () => {
                    let e = c.p8.timeline();
                    e.to(v.current, {
                        scale: window.innerWidth < 768 ? .965 : .972,
                        borderRadius: 30,
                        ease: "none"
                    }, 0);
                    let r = c.p8.timeline({
                            ease: "none"
                        }),
                        t = window.innerWidth / 40;
                    return window.innerWidth < 1024 && (t = window.innerWidth / 15), r.fromTo(N.current, {
                        y: 0
                    }, {
                        y: window.innerWidth / 15
                    }, 0).fromTo(x.current, {
                        y: "-50%"
                    }, {
                        y: t
                    }, 0), _.current && r.to(_.current, {
                        y: -window.innerWidth / 15
                    }, 0), {
                        scaleAnimation: e,
                        parallaxAnimation: r
                    }
                }, D = () => {
                    let e = "content.large-cover" === p.__component ? "-0.96rem" : "-0.66rem";
                    if (window.innerWidth < 1024 && (e = "content.large-cover" === p.__component ? "-0.368rem" : "-0.252rem"), "content.large-cover" !== p.variation) {
                        if (U.current = c.p8.timeline({
                                paused: !0,
                                defaults: {
                                    duration: 1.2,
                                    ease: "power4.inOut"
                                }
                            }), V.current = c.p8.timeline({
                                paused: !0,
                                defaults: {
                                    duration: 1.2,
                                    ease: "power4.inOut"
                                }
                            }), window.innerWidth < 768) U.current.to(k.current, {
                            autoAlpha: 0,
                            duration: .5,
                            ease: "power2.out"
                        }, 0).to(y.current, {
                            autoAlpha: 1,
                            duration: .7,
                            ease: "power2.out"
                        }, .45), V.current.to(y.current, {
                            autoAlpha: 0,
                            duration: .5,
                            ease: "power2.out"
                        }, 0).to(k.current, {
                            autoAlpha: 1,
                            duration: .7,
                            ease: "power2.out"
                        }, .45);
                        else {
                            let r = U.current.to(k.current, {
                                    yPercent: -110,
                                    duration: 1.2
                                }, 0).to(j.current[0], {
                                    yPercent: 0,
                                    letterSpacing: e,
                                    duration: 1.2
                                }, 0),
                                t = r;
                            y.current[0] && j.current[1] && (t = r.to([y.current[0], j.current[1]], {
                                yPercent: 0,
                                stagger: .1,
                                duration: 1.4
                            }, "<+=0.6")), t.to(b.current[1], {
                                yPercent: -110,
                                duration: 1.4
                            }, "<").to(j.current[1], {
                                letterSpacing: e,
                                duration: 1.4
                            }, "<"), V.current.to(j.current, {
                                yPercent: 100,
                                stagger: -.1
                            }, 0).to(j.current[1], {
                                letterSpacing: P.current
                            }, 0).to(y.current[0], {
                                yPercent: 100
                            }, .7).to(j.current[0], {
                                letterSpacing: P.current
                            }, .7).fromTo(b.current[1], {
                                letterSpacing: P.current
                            }, {
                                yPercent: 0,
                                letterSpacing: e,
                                duration: 1.4
                            }, 0).to(k.current, {
                                yPercent: 0,
                                duration: 1.4
                            }, "<+=0.7").fromTo(b.current[0], {
                                letterSpacing: P.current
                            }, {
                                letterSpacing: e,
                                duration: 1.4
                            }, "<")
                        }
                    }
                }, J = () => {
                    P.current = "-2.5rem", c.p8.set([E.current, z.current], {
                        scale: 1.2
                    }), window.innerWidth < 1024 && (P.current = "-1.3rem"), window.innerWidth >= 768 ? (R.current && c.p8.set(R.current, {
                        autoAlpha: 0
                    }), _.current && c.p8.set(_.current, {
                        yPercent: 140
                    }), j.current.length > 0 && c.p8.set(j.current, {
                        yPercent: 100
                    }), k.current[0] && c.p8.set(k.current[0], {
                        yPercent: 100
                    }), b.current && c.p8.set(b.current, {
                        yPercent: 100,
                        letterSpacing: P.current
                    }), y.current[0] && c.p8.set(y.current[0], {
                        yPercent: 100
                    }), j.current.length > 0 && c.p8.set(j.current, {
                        yPercent: 100,
                        letterSpacing: P.current
                    })) : y.current.length > 0 && c.p8.set(y.current, {
                        autoAlpha: 0
                    })
                }, Q = () => {
                    T.current = "content.large-cover" === p.__component ? window.innerHeight : .75 * window.innerHeight
                }, X = () => {
                    c.p8.to(x.current, {
                        y: "-50%"
                    });
                    let e = c.p8.timeline(),
                        r = "content.large-cover" === p.__component ? "-0.96rem" : "-0.66rem";
                    window.innerWidth < 1024 && (r = "content.large-cover" === p.__component ? "-0.368rem" : "-0.252rem"), e.fromTo([E.current, z.current], {
                        scale: 1.2
                    }, {
                        scale: 1,
                        ease: "expo.out",
                        duration: 1.6
                    }, .3), "content.large-cover" === p.__component ? (e.to(b.current, {
                        yPercent: 0,
                        letterSpacing: r,
                        duration: 1.8,
                        ease: "power4.inOut"
                    }, 0), R.current && e.fromTo(R.current, {
                        autoAlpha: 0
                    }, {
                        autoAlpha: 1,
                        duration: .8,
                        ease: "power2.out"
                    }, .8)) : e.to(b.current[0], {
                        yPercent: 0,
                        letterSpacing: r,
                        duration: 1.2,
                        ease: "power4.inOut"
                    }, 0).to([k.current[0], b.current[1]], {
                        yPercent: 0,
                        stagger: .1,
                        duration: 1.4,
                        ease: "power4.inOut"
                    }, .6).to(b.current[1], {
                        letterSpacing: r,
                        duration: 1.4,
                        ease: "power4.inOut"
                    }, "<")
                }, Y = () => {
                    S.current = !0, A.current && A.current.ref && c.p8.set(A.current.ref, {
                        autoAlpha: 1
                    }), _.current && _.current.classList.remove("hidden"), O(1)
                };
                return (0, l.useEffect)(() => {
                    C && X()
                }, [C]), (0, l.useEffect)(() => {
                    J(), D(), A.current && A.current.ref && c.p8.set(A.current.ref, {
                        autoAlpha: 0
                    });
                    let {
                        scaleAnimation: e,
                        parallaxAnimation: r
                    } = q();
                    if (I.current = o.ScrollTrigger.create({
                            trigger: w.current,
                            start: "bottom bottom",
                            end: () => "+=".concat(.5 * v.current.clientHeight),
                            animation: e,
                            scrub: !0
                        }), B.current = o.ScrollTrigger.create({
                            trigger: w.current,
                            start: "bottom bottom",
                            animation: r,
                            scrub: !0,
                            onLeaveBack: () => {
                                _.current && ((0, a.RE)(K.current), G.current = c.p8.to(_.current, {
                                    yPercent: 0,
                                    ease: "power2.inOut",
                                    duration: .9
                                }))
                            }
                        }), "content.large-cover" !== p.__component && (Z.current = o.ScrollTrigger.create({
                            trigger: w.current,
                            start: "top top-=10px",
                            onEnter: () => {
                                (0, a.RE)(V.current), U.current.restart()
                            },
                            onLeaveBack: () => {
                                (0, a.RE)(U.current), V.current.restart()
                            }
                        })), R.current || _.current) {
                        let e = c.p8.timeline({
                            paused: !0
                        });
                        R.current && e.to(R.current, {
                            autoAlpha: 0,
                            ease: "linear",
                            duration: .3
                        }, 0), _.current && e.fromTo(_.current, {
                            yPercent: 140
                        }, {
                            yPercent: 0,
                            ease: "power2.inOut",
                            duration: .9
                        }, 0), M.current = o.ScrollTrigger.create({
                            trigger: w.current,
                            start: "top top-=25%",
                            onEnter: () => {
                                e.play()
                            },
                            onLeaveBack: () => {
                                e.reverse()
                            }
                        })
                    }
                    return window.addEventListener("resize", Q), window.addEventListener("is-appeared", Y), () => {
                        window.removeEventListener("resize", Q), window.removeEventListener("is-appeared", Y), I.current.kill(), I.current = null, B.current.kill(), B.current = null, Z.current && Z.current.kill(), Z.current && (Z.current = null), M.current && M.current.kill(), M.current && (M.current = null)
                    }
                }, []), (0, l.useEffect)(() => (T.current = "content.large-cover" === p.__component ? window.innerHeight : .75 * window.innerHeight, H || (F.current = o.ScrollTrigger.create({
                    trigger: w.current,
                    start: "bottom bottom",
                    end: () => "+=".concat(v.current.clientHeight),
                    scrub: !0,
                    onUpdate: () => {
                        A.current && A.current.addScrollValue(T.current)
                    }
                })), () => {
                    F.current && (F.current.kill(), F.current = null)
                }), [H]), (0, n.jsx)(m.Z, {
                    index: h,
                    slicesLength: f.length,
                    children: (0, n.jsx)("section", {
                        style: {
                            zIndex: f.length - h
                        },
                        className: "relative ".concat("White" === p.backgroundColor.color ? "bg-white" : "Beige light" === p.backgroundColor.color ? "bg-light_beige" : "Beige dark" === p.backgroundColor.color ? "bg-dark_beige" : "Grey dark" === p.backgroundColor.color ? "bg-dark_grey" : "bg-green"),
                        ref: w,
                        onMouseEnter: () => {
                            S.current && O(1), W(!0)
                        },
                        onMouseLeave: () => {
                            O(0), W(!1)
                        },
                        children: (0, n.jsx)("div", {
                            className: "relative ".concat("content.large-cover" === p.__component ? "h-[200vh]" : "h-[175vh]", " text-white"),
                            children: (0, n.jsx)("div", {
                                className: "sticky top-0 h-screen",
                                children: (0, n.jsxs)("div", {
                                    ref: v,
                                    className: "relative w-full h-full overflow-hidden",
                                    children: [!H && (0, n.jsx)("div", {
                                        className: "absolute hidden xl:block xl:left-0 xl:top-0 xl:w-full xl:h-full pointer-events-none z-4",
                                        children: (0, n.jsx)(i.Z, {
                                            ref: A,
                                            showBlogFromParent: L,
                                            text: "Keep going \xb7 Scroll down \xb7"
                                        })
                                    }), (0, n.jsxs)("div", {
                                        ref: N,
                                        className: "relative w-full h-full",
                                        children: [(0, n.jsx)("div", {
                                            ref: E,
                                            className: "absolute top-0 left-0 w-full h-full z-0",
                                            children: H ? (0, n.jsxs)(n.Fragment, {
                                                children: [(0, n.jsx)("div", {
                                                    className: "w-full h-full xl:hidden landscape:hidden",
                                                    children: (0, n.jsx)(g.p, {
                                                        image: p.backgroundImageMobile.data,
                                                        fallbackAlt: "",
                                                        loading: "eager",
                                                        priority: !0,
                                                        className: "w-full h-full object-cover",
                                                        sizes: "100vw"
                                                    })
                                                }), (0, n.jsx)("div", {
                                                    className: "w-full h-full hidden landscape:block",
                                                    children: (0, n.jsx)(g.p, {
                                                        image: p.backgroundImage.data,
                                                        fallbackAlt: "",
                                                        loading: "eager",
                                                        priority: !0,
                                                        className: "w-full h-full object-cover",
                                                        sizes: "100vw"
                                                    })
                                                })]
                                            }) : (0, n.jsx)(g.p, {
                                                image: p.backgroundImage.data,
                                                fallbackAlt: "",
                                                loading: "eager",
                                                priority: !0,
                                                className: "w-full h-full object-cover",
                                                sizes: "100vw"
                                            })
                                        }), (0, n.jsx)("h1", {
                                            ref: x,
                                            className: "absolute top-[45%] md:top-1/2 left-0 w-full font-headings text-white text-center overflow-hidden",
                                            children: "content.large-cover" === p.__component ? (0, n.jsx)("div", {
                                                ref: e => {
                                                    b.current[0] = e
                                                },
                                                className: "w-full text-92 leading-[74%] -tracking-[0.368rem] lg:text-160 lg:-tracking-[0.96rem] lg:leading-[100%]",
                                                children: p.title.split("\n").map(e => (0, n.jsx)("p", {
                                                    children: e
                                                }, e))
                                            }) : (0, n.jsxs)("div", {
                                                className: "w-full text-[5.6rem] leading-[89%] -tracking-[0.252rem] lg:text-120 lg:leading-[80%] lg:-tracking-[0.66rem]",
                                                children: [(0, n.jsx)("div", {
                                                    className: "relative",
                                                    children: p.title.split("\n").map((e, r) => (0, n.jsx)("div", {
                                                        ref: e => {
                                                            k.current[r] = e
                                                        },
                                                        children: (0, n.jsx)("div", {
                                                            ref: e => {
                                                                b.current[r] = e
                                                            },
                                                            children: e
                                                        })
                                                    }, "title1-".concat(r)))
                                                }), (0, n.jsx)("div", {
                                                    className: "absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2",
                                                    children: (null !== (r = p.secondTitle) && void 0 !== r ? r : "").split("\n").map((e, r) => (0, n.jsx)("div", {
                                                        ref: e => {
                                                            y.current[r] = e
                                                        },
                                                        children: (0, n.jsx)("div", {
                                                            ref: e => {
                                                                j.current[r] = e
                                                            },
                                                            children: e
                                                        })
                                                    }, "title2-".concat(r)))
                                                })]
                                            })
                                        }), (0, n.jsx)("div", {
                                            ref: z,
                                            className: "absolute top-0 left-0 w-full h-full z-2",
                                            children: H ? (0, n.jsx)(g.p, {
                                                image: null !== (t = p.foregroundImageMobile.data) && void 0 !== t ? t : p.foregroundImage.data,
                                                fallbackAlt: "",
                                                className: "w-full h-full object-cover",
                                                sizes: "100vw"
                                            }) : (0, n.jsx)(g.p, {
                                                image: p.foregroundImage.data,
                                                fallbackAlt: "",
                                                className: "w-full h-full object-cover",
                                                sizes: "100vw"
                                            })
                                        }), "content.large-cover" === p.__component && p.bottomTitle && (0, n.jsx)("div", {
                                            ref: R,
                                            className: "absolute bottom-[35%] md:bottom-[8.4rem] left-1/2 -translate-x-1/2 text-center z-3 text-19 md:text-20 leading-[110%] md:leading-[105%] -tracking-[0.019rem] md:-tracking-[0.06rem]",
                                            children: p.bottomTitle.split("\n").map(e => (0, n.jsx)("p", {
                                                children: e
                                            }, e))
                                        }), "content.large-cover" === p.__component && p.rightContent && (0, n.jsx)("div", {
                                            ref: _,
                                            className: "absolute hidden bottom-10 right-10 md:bottom-20 md:right-20 rounded-12 bg-dark_grey/50 z-3 text-20 leading-[105%] -tracking-[0.06rem]",
                                            children: (0, n.jsxs)(s.Z, {
                                                size: "large",
                                                children: [p.rightTitle && (0, n.jsx)("div", {
                                                    className: "mb-[0.8rem] md:mb-[1.2rem] uppercase text-10 tracking-[0.05rem] leading-[180%]",
                                                    children: p.rightTitle
                                                }), (0, n.jsx)("div", {
                                                    className: "text-17 -tracking-[0.017rem] leading-[141%] md:text-20 md:leading-[130%] md:-tracking-[0.06rem]",
                                                    children: p.rightContent.split("\n").map(e => (0, n.jsx)("p", {
                                                        children: e
                                                    }, e))
                                                })]
                                            })
                                        })]
                                    })]
                                })
                            })
                        })
                    })
                })
            }
        }
    }
]);