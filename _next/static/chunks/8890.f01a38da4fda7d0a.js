(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8890], {
        8890: function(e, t, i) {
            "use strict";
            i.r(t);
            var r = i(5893),
                s = i(7294),
                l = i(4458),
                n = i(753),
                a = i(1477),
                c = i(1100),
                m = i(2881),
                o = i(2445),
                d = i(9684),
                u = i(1551),
                p = i.n(u);
            let x = e => {
                    let {
                        item: t,
                        items: i,
                        index: l
                    } = e, n = (0, s.useRef)([]), a = (0, s.useRef)([]), u = e => {
                        n.current[e].style.opacity = 1
                    }, x = e => {
                        n.current[e].style.opacity = 0
                    }, v = e => {
                        window.dispatchEvent(new CustomEvent("open-popup", {
                            detail: {
                                name: e
                            }
                        }))
                    }, w = m.$N(t.video.data.attributes.url), [j, g] = (0, s.useState)(d.jw.Loading());
                    return (0, r.jsxs)("section", {
                        style: {
                            height: "1000vh",
                            width: "100%",
                            zIndex: i.length - l
                        },
                        className: "relative ".concat(p().videoContainer),
                        children: [(0, r.jsx)(o.Z, {
                            src: w,
                            onReady: function() {
                                g(d.jw.Done(!0))
                            },
                            onChange: function(e) {
                                let t = Math.min(e, 1);
                                t >= .01 && t <= .15 ? u(0) : x(0), t >= .15 && t <= .46 ? u(1) : x(1), t >= .45 && t <= .72 ? u(2) : x(2), t >= .8 && t <= .92 ? u(3) : x(3), t >= .9 && t <= 1 ? u(4) : x(4)
                            }
                        }), (0, r.jsx)("div", {
                            className: "absolute top-0 left-0 w-full h-screen ".concat(j.match({
                                NotAsked: () => "",
                                Loading: () => "",
                                Done: () => "invisible"
                            })),
                            children: (0, r.jsx)(c.p, {
                                image: t.placeholderImage.data,
                                className: "w-full h-full object-cover object-center"
                            })
                        }), (0, r.jsx)("div", {
                            className: "absolute w-full h-full top-0 left-0",
                            children: (0, r.jsx)("div", {
                                className: "sticky top-0 w-full h-screen",
                                children: (0, r.jsxs)("div", {
                                    className: "invisible md:visible",
                                    children: [(0, r.jsx)("div", {
                                        ref: e => {
                                            n.current[0] = e
                                        },
                                        className: "absolute bottom-[23.5rem] md:bottom-[40%] md:right-[10%] xl:bottom-[initial] xl:top-[24.7rem] right-[1rem] xl:right-[25.3rem]",
                                        onClick: () => v("card-1"),
                                        children: (0, r.jsx)(h, {
                                            ref: e => {
                                                a.current[0] = e
                                            },
                                            title: t.items[0].title
                                        })
                                    }), (0, r.jsx)("div", {
                                        ref: e => {
                                            n.current[1] = e
                                        },
                                        className: "absolute bottom-[16.8rem] left-[2.5rem] md:left-[10%] md:bottom-[35%] xl:bottom-[16.8rem] xl:left-[27.8rem]",
                                        onClick: () => v("card-2"),
                                        children: (0, r.jsx)(h, {
                                            ref: e => {
                                                a.current[1] = e
                                            },
                                            title: t.items[1].title
                                        })
                                    }), (0, r.jsx)("div", {
                                        ref: e => {
                                            n.current[2] = e
                                        },
                                        className: "absolute top-[30.1rem] md:top-[60%] xl:top-[39.2rem] right-[10.2rem] md:right-[15%] xl:right-[49.1rem]",
                                        onClick: () => v("card-3"),
                                        children: (0, r.jsx)(h, {
                                            ref: e => {
                                                a.current[2] = e
                                            },
                                            title: t.items[2].title
                                        })
                                    }), (0, r.jsx)("div", {
                                        ref: e => {
                                            n.current[3] = e
                                        },
                                        className: "absolute top-[20rem] left-[2rem] md:top-[45%] md:left-[10%] xl:bottom-[25.8rem] xl:top-[initial] xl:left-[54.9rem]",
                                        onClick: () => v("card-4"),
                                        children: (0, r.jsx)(h, {
                                            ref: e => {
                                                a.current[3] = e
                                            },
                                            title: t.items[3].title
                                        })
                                    }), (0, r.jsx)("div", {
                                        ref: e => {
                                            n.current[4] = e
                                        },
                                        className: "absolute top-[30.3rem] right-[3rem] md:top-[40%] md:right-[28%] xl:top-[40rem] xl:right-[22.6rem]",
                                        onClick: () => v("card-5"),
                                        children: (0, r.jsx)(h, {
                                            ref: e => {
                                                a.current[4] = e
                                            },
                                            title: t.items[4].title
                                        })
                                    })]
                                })
                            })
                        }), (0, r.jsx)(f, {
                            name: "card-1",
                            title: t.items[0].popupTitle,
                            image: t.items[0].image.data,
                            subtitle: t.items[0].subtitle,
                            content: t.items[0].content
                        }), (0, r.jsx)(f, {
                            name: "card-2",
                            title: t.items[1].popupTitle,
                            image: t.items[1].image.data,
                            subtitle: t.items[1].subtitle,
                            content: t.items[1].content
                        }), (0, r.jsx)(f, {
                            name: "card-3",
                            title: t.items[2].popupTitle,
                            image: t.items[2].image.data,
                            subtitle: t.items[2].subtitle,
                            content: t.items[2].content
                        }), (0, r.jsx)(f, {
                            name: "card-4",
                            title: t.items[3].popupTitle,
                            image: t.items[3].image.data,
                            subtitle: t.items[3].subtitle,
                            content: t.items[3].content
                        }), (0, r.jsx)(f, {
                            name: "card-5",
                            title: t.items[4].popupTitle,
                            image: t.items[4].image.data,
                            subtitle: t.items[4].subtitle,
                            content: t.items[4].content
                        })]
                    })
                },
                h = (0, s.forwardRef)((e, t) => {
                    let {
                        title: n
                    } = e, a = (0, s.useRef)(null), [c, m] = (0, s.useState)(null);
                    return (0, s.useImperativeHandle)(t, () => ({
                        title: c
                    })), (0, s.useEffect)(() => {
                        m(new(i(2392))({
                            target: a.current
                        }))
                    }, []), (0, r.jsxs)("div", {
                        ref: t,
                        className: "flex justify-center items-center bg-white rounded-12 p-[2.4rem] uppercase font-body-mono text-10 leading-[180%] tracking-[0.05rem] text-orange cursor-pointer transition-transform duration-global ease-out xl:hover:scale-[1.05]",
                        children: [(0, r.jsx)("span", {
                            className: "inline-block mr-[0.7rem]",
                            children: (0, r.jsx)(l.Z, {})
                        }), (0, r.jsx)("span", {
                            ref: a,
                            className: "whitespace-nowrap",
                            children: n
                        })]
                    })
                }),
                f = e => {
                    let {
                        name: t,
                        title: i,
                        image: s,
                        subtitle: l,
                        content: m
                    } = e;
                    return (0, r.jsx)(a.Z, {
                        name: t,
                        children: (0, r.jsx)("div", {
                            className: "relative h-[calc(100vh_-_1.2rem)] md:h-[calc(100vh_-_2rem)] overflow-y-scroll rounded-18 u-nsb",
                            "data-lenis-prevent": !0,
                            children: (0, r.jsxs)("div", {
                                className: "relative",
                                children: [(0, r.jsx)("div", {
                                    className: "relative w-full px-[0.2rem] pt-[0.2rem]",
                                    children: (0, r.jsx)("div", {
                                        className: "relative w-full h-0 pt-[73.53%] md:pt-[67.28%]",
                                        children: (0, r.jsx)("div", {
                                            className: "absolute top-0 left-0 w-full h-full rounded-16 overflow-hidden",
                                            children: s && (0, r.jsx)(c.p, {
                                                image: s,
                                                fallbackAlt: "",
                                                className: "w-full h-full object-cover"
                                            })
                                        })
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: "flex flex-col px-[1.4rem] md:px-20 pb-[5rem]",
                                    children: [(0, r.jsx)("div", {
                                        className: "font-headings text-dark_grey text-32 leading-[3rem] -tracking-[0.128rem] md:text-44 md:leading-[86%] md:-tracking-[0.176rem] text-center px-[3.3rem] py-[6.7rem] md:py-[8rem]",
                                        children: i
                                    }), (0, r.jsx)(n.Z, {
                                        mode: "dark"
                                    }), (0, r.jsxs)("div", {
                                        className: "flex flex-row pt-[2rem] md:pt-[3.5rem] text-dark_grey text-13 md:text-14 leading-[2rem] tracking-[0.013rem] md:tracking-[0.014rem]",
                                        children: [(0, r.jsx)("div", {
                                            className: "w-[35%] md:w-1/2 pr-[2rem]",
                                            children: l
                                        }), (0, r.jsx)("div", {
                                            className: "w-[65%] md:w-1/2",
                                            children: null == m ? void 0 : m.split("\n").map(e => (0, r.jsx)("p", {
                                                children: e
                                            }, e))
                                        })]
                                    })]
                                })]
                            })
                        })
                    })
                };
            h.displayName = "Card", f.displayName = "CardPopup", x.displayName = "FocusPoints", t.default = x
        },
        1477: function(e, t, i) {
            "use strict";
            var r = i(5893),
                s = i(9419),
                l = i(7294);
            t.Z = e => {
                let {
                    size: t = "small",
                    name: i,
                    keepContent: n = !1,
                    children: a
                } = e, [c, m] = (0, l.useState)(!1), o = (0, l.useRef)(!1), d = (0, l.useRef)(!1), u = e => {
                    e.detail.name === i && (m(!0), d.current = !0)
                };
                (0, l.useEffect)(() => {
                    c && window.history.pushState({}, null, null)
                }, [c]);
                let p = () => {
                        d.current && (o.current = !0, window.history.back(), o.current = !1)
                    },
                    x = () => {
                        d.current && !o.current && (m(!1), d.current = !1, window.dispatchEvent(new CustomEvent("back-close-popup")))
                    };
                return (0, l.useEffect)(() => (window.addEventListener("open-popup", u), window.addEventListener("popup-closed", p), window.addEventListener("popstate", x), () => {
                    window.removeEventListener("open-popup", u), window.removeEventListener("popup-closed", p), window.removeEventListener("popstate", x)
                }), []), (0, r.jsx)(s.Z, {
                    size: t,
                    name: i,
                    keepContent: n,
                    children: a
                })
            }
        },
        4458: function(e, t, i) {
            "use strict";
            var r = i(5893);
            t.Z = () => (0, r.jsxs)("svg", {
                width: "12",
                height: "12",
                viewBox: "0 0 12 12",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, r.jsx)("circle", {
                    cx: "6",
                    cy: "6",
                    r: "2",
                    fill: "#FE814B"
                }), (0, r.jsx)("circle", {
                    cx: "6",
                    cy: "6",
                    r: "5",
                    stroke: "#FE814B",
                    strokeDasharray: "1 1"
                })]
            })
        },
        1551: function(e) {
            e.exports = {
                videoContainer: "FocusPoints_videoContainer__6INyW"
            }
        }
    }
]);