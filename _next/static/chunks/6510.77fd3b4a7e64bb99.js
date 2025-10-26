"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6510], {
    6510: function(e, r, t) {
      t.r(r);
      var n = t(5893),
        l = t(7652),
        o = t(7294),
        u = t(6038),
        c = t(188),
        a = t(146),
        s = t(1800),
        i = t(6217),
        p = t(5285),
        d = t(1100);
      let f = e => {
        let {
          popup: r,
          item: i
        } = e, f = (0, p.LZ)(), m = (0, a.o)(e => e.windowWidth), h = (0, o.useRef)([]), x = (0, o.useRef)([]), g = (0, o.useRef)([]), v = (0, o.useRef)([]), b = (0, o.useRef)([]), w = (0, o.useRef)([]), j = (0, o.useRef)([]), y = (0, o.useRef)(), N = (0, o.useRef)([]), k = (0, o.useRef)([]), P = (0, o.useRef)(), R = (0, o.useRef)(null), _ = (0, o.useRef)(!1), Z = (0, o.useRef)(null), A = (0, o.useRef)(1), z = (0, o.useRef)(null), E = e => {
          m >= 1024 && e === R.current || _.current || ((0, c.RE)(Z.current), !r && m < 1024 && f && f.stop(), setTimeout(() => {
            C(e)
          }, 0))
        }, M = e => {
          if (m <= 1024 && 0 !== m) return;
          let r = z.current({
              target: N.current[e],
              by: "chars"
            })[0],
            t = z.current({
              target: k.current[e],
              by: "chars"
            })[0],
            n = u.ZP.timeline(),
            l = u.ZP.timeline();
          r.chars.forEach((e, r) => {
            n.to(e, {
              autoAlpha: Math.round(r % Math.random() * 3),
              duration: .04
            }), n.set(e, {
              autoAlpha: 1
            })
          }), t.chars.forEach((e, r) => {
            l.to(e, {
              autoAlpha: Math.round(r % Math.random() * 3),
              duration: .04
            }), l.set(e, {
              autoAlpha: 1
            })
          })
        }, C = e => {
          let r = e === R.current ? null : R.current;
          R.current = e, Z.current = u.ZP.timeline({
            defaults: {
              ease: "power3.out",
              duration: 1
            },
            onStart: () => {
              _.current = !0
            }
          }), Z.current.call(() => {
            _.current = !1
          }, [], .6), Z.current.set(x.current[r], {
            pointerEvents: "none"
          }), Z.current.set(x.current[R.current], {
            pointerEvents: "all"
          }), Z.current.set(g.current[R.current], {
            zIndex: A.current++
          }, 0), Z.current.set(P.current, {
            zIndex: A.current + 1
          }, 0), Z.current.to(h.current[e], {
            autoAlpha: 1,
            filter: "saturate(1)",
            mixBlendMode: "normal",
            duration: .6,
            ease: "expo.out"
          }, .1), Z.current.to(h.current[r], {
            autoAlpha: .6,
            filter: "saturate(0)",
            mixBlendMode: "multiply",
            duration: .6
          }, .1), m >= 1024 ? (Z.current.fromTo(g.current[R.current], {
            yPercent: 100
          }, {
            yPercent: 0
          }, .1), Z.current.fromTo(v.current[R.current], {
            yPercent: -30
          }, {
            yPercent: 0
          }, .1), Z.current.to(g.current[r], {
            yPercent: -30
          }, .1), Z.current.fromTo([b.current[r], w.current[r], j.current[r]], {
            autoAlpha: 1
          }, {
            autoAlpha: 0,
            stagger: -.075,
            duration: .4,
            ease: "power2.inOut"
          }, 0), Z.current.fromTo([b.current[R.current], w.current[R.current], j.current[R.current]], {
            autoAlpha: 0
          }, {
            autoAlpha: 1,
            stagger: -.075,
            duration: .6,
            ease: "power2.inOut"
          }, .3)) : (Z.current.set([g.current[R.current], v.current[R.current]], {
            yPercent: 0
          }, 0), g.current[r] && Z.current.set([g.current[r], g.current[r]], {
            yPercent: 100
          }, 0), b.current[r] && Z.current.set([b.current[r], w.current[r], j.current[r]], {
            autoAlpha: 0
          }, 0), Z.current.set([b.current[R.current], w.current[R.current], j.current[R.current]], {
            autoAlpha: 1
          }, 0), Z.current.to(y.current, {
            xPercent: 0,
            duration: .5,
            ease: "power2.out"
          }, .1))
        };
        return (0, o.useEffect)(() => {
          0 !== m && (m >= 1024 ? (g.current.forEach((e, r) => {
            0 !== r && u.ZP.set(e, {
              yPercent: 100
            })
          }), v.current.forEach((e, r) => {
            0 !== r && u.ZP.set(e, {
              yPercent: -30
            })
          }), u.ZP.set(y.current, {
            xPercent: 0
          })) : (u.ZP.set(y.current, {
            xPercent: 100
          }), u.ZP.set(P.current, {
            zIndex: A.current + 1
          })))
        }, [m]), (0, o.useEffect)(() => {
          R.current = 0, z.current = t(2392), u.ZP.set(x.current[R.current], {
            pointerEvents: "all"
          })
        }, []), (0, n.jsxs)("section", {
          className: "popup:lg:flex lg:grid lg:grid-cols-12 popup:px-0 px-container-mobile md:px-container pt-[10rem] popup:pt-0 pb-100 popup:pb-0 popup:gap-x-[0.4rem] popup:h-[calc(var(--vh)_-_1.2rem)] popup:md:h-[calc(var(--vh)_-_2rem)] lg:h-auto relative popup:-mb-100 overflow-hidden popup:lg:overflow-hidden lg:overflow-visible team",
          children: [(0, n.jsx)("div", {
            className: "popup:absolute fixed top-0 left-0 popup:lg:relative lg:block w-full popup:lg:w-[65%] lg:col-start-2 lg:col-end-8 h-full popup:lg:h-full lg:sticky lg:max-h-screen lg:py-10 popup:py-0 popup:z-1 z-popup lg:z-1",
            ref: y,
            children: (0, n.jsxs)("div", {
              className: "relative w-full h-full rounded-18 bg-white",
              children: [(0, n.jsx)("div", {
                className: "block lg:hidden absolute top-container-mobile md:top-container popup:top-[0.6rem] left-container-mobile md:left-container popup:left-[0.6rem] z-1",
                onClick: () => {
                  !r && m < 1024 && f && f.start(), u.ZP.to(y.current, {
                    xPercent: 100,
                    duration: .6,
                    ease: "power2.out"
                  })
                },
                ref: P,
                children: (0, n.jsx)("div", {
                  className: "flex justify-center items-center w-[5.6rem] h-[5.6rem] bg-white rounded-10 transition-transform duration-global ease-out group-hover:scale-105",
                  children: (0, n.jsx)("div", {
                    className: "svg-wrapper w-[1.45rem] h-[1rem] -rotate-180",
                    children: (0, n.jsx)(s.Z, {})
                  })
                })
              }), (0, n.jsx)("div", {
                className: "absolute top-0 left-0 w-full h-full bg-dots bg-size-dots bg-repeat opacity-40 z-0 pointer-events-none"
              }), (0, n.jsx)("div", {
                className: "relative h-full",
                children: i.items.map((e, r) => (0, n.jsxs)("div", {
                  className: "flex flex-col absolute left-0 top-0 w-full h-full p-[0.2rem] rounded-18 overflow-hidden pointer-events-none",
                  ref: e => {
                    x.current[r] = e
                  },
                  children: [(0, n.jsx)("div", {
                    className: "relative w-full h-0 pb-[110%] popup:md:pb-[110%] md:pb-[86%] lg:pb-[65%] lg:popup:pb-[86%] rounded-[1.6rem] overflow-hidden",
                    children: (0, n.jsx)("div", {
                      className: "absolute top-0 left-0 w-full h-full rounded-[1.6rem] overflow-hidden",
                      ref: e => {
                        g.current[r] = e
                      },
                      children: (0, n.jsx)("div", {
                        className: "absolute top-0 left-0 w-full h-full",
                        ref: e => {
                          v.current[r] = e
                        },
                        children: (0, n.jsx)(d.p, {
                          transition: 0 === r ? "long" : "none",
                          image: e.image.data,
                          className: "absolute top-0 left-0 w-full h-full object-cover",
                          fallbackAlt: "",
                          sizes: "(max-width: 768px) 96vw, 55vw"
                        })
                      })
                    })
                  }), (0, n.jsxs)("div", {
                    className: "flex flex-col items-center justify-center grow h-full",
                    children: [(0, n.jsx)("div", {
                      className: "".concat(0 !== r ? "opacity-0" : "", " mb-12 heading-44 text-dark_grey"),
                      ref: e => {
                        b.current[r] = e
                      },
                      children: e.name
                    }), (0, n.jsx)("div", {
                      className: "".concat(0 !== r ? "opacity-0" : "", " mb-12 body-10 text-dark_grey tracking-[0.07rem] uppercase"),
                      ref: e => {
                        w.current[r] = e
                      },
                      children: e.position
                    }), (0, n.jsx)("a", {
                      href: e.linkedin,
                      target: "_blank",
                      rel: "noopener",
                      className: "".concat(0 !== r ? "opacity-0" : "", " relative mb-[2.2rem] w-[4.4rem] h-[4.4rem] border-px border-dark_grey/10 rounded-[0.8rem]"),
                      ref: e => {
                        j.current[r] = e
                      },
                      children: (0, n.jsx)("div", {
                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-15 h-15 svg-wrapper",
                        children: (0, n.jsx)(l.Z, {})
                      })
                    })]
                  })]
                }, "team-member-focus-".concat(r)))
              })]
            })
          }), (0, n.jsxs)("div", {
            className: "w-full popup:lg:w-[35%] md:col-start-8 md:col-end-12 h-full relative overflow-hidden",
            children: [(0, n.jsx)("div", {
              className: "absolute top-0 left-0 w-full h-full bg-dots bg-size-dots bg-repeat opacity-40 z-0 pointer-events-none"
            }), (0, n.jsx)("div", {
              className: "w-full h-full px-0 popup:px-20 lg:px-20 py-[0.05rem] bg-white rounded-18 overflow-auto u-nsb",
              children: i.items.map((e, r) => (0, n.jsxs)("div", {
                className: "flex gap-x-20 items-center py-15 border-b-px border-dark_grey/10 cursor-pointer group",
                onClick: () => E(r),
                onMouseEnter: () => M(r),
                children: [(0, n.jsx)("div", {
                  className: "w-[7.2rem] h-[7.2rem] grow-0 shrink-0 overflow-hidden rounded-[0.8rem] ".concat(m < 1024 || 0 !== r ? "opacity-60" : ""),
                  style: {
                    backgroundColor: "lightgray",
                    mixBlendMode: "".concat(m < 1024 || 0 !== r ? "multiply" : "normal"),
                    filter: "".concat(m < 1024 || 0 !== r ? "saturate(0)" : "saturate(1)")
                  },
                  ref: e => {
                    h.current[r] = e
                  },
                  children: (0, n.jsx)(d.p, {
                    image: e.image.data,
                    fallbackAlt: "",
                    sizes: "7.2rem",
                    className: "w-full h-full object-cover"
                  })
                }), (0, n.jsxs)("div", {
                  children: [(0, n.jsx)("div", {
                    className: "body-mono-10 group-hover:text-dark_grey text-dark_beige tracking-0.05 transition-colors duration-300",
                    ref: e => {
                      N.current[r] = e
                    },
                    children: e.name
                  }), (0, n.jsx)("div", {
                    className: "body-mono-10 group-hover:text-dark_grey text-dark_beige tracking-0.05 transition-colors duration-300",
                    ref: e => {
                      k.current[r] = e
                    },
                    children: e.position
                  })]
                })]
              }, "team-member-".concat(r)))
            })]
          })]
        })
      };
      r.default = e => {
        let {
          item: r,
          context: t
        } = e;
        return t && t.popup ? (0, n.jsx)(f, {
          popup: t.popup,
          item: r
        }) : (0, n.jsx)(i.Z, {
          index: "0",
          slicesLength: 1,
          simple: !0,
          children: (0, n.jsx)(f, {
            popup: t.popup,
            item: r
          })
        })
      }
    },
    1800: function(e, r, t) {
      var n = t(5893);
      r.Z = e => {
        let {
          stroke: r = "#575349"
        } = e;
        return (0, n.jsx)("svg", {
          width: "11",
          height: "9",
          viewBox: "0 0 11 9",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, n.jsx)("path", {
            id: "Vector 201",
            d: "M0 4.5H9.5M9.5 4.5L5.9 1M9.5 4.5L5.9 8",
            stroke: r
          })
        })
      }
    }
  }
]);