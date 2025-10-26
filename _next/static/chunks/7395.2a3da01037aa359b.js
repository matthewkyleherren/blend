"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7395], {
    7395: function(e, r, t) {
      t.r(r);
      var n = t(5893),
        l = t(7712),
        o = t(188),
        i = t(6038),
        c = t(6546),
        u = t(7294),
        a = t(7825),
        s = t(6217),
        d = t(146),
        f = t(5285),
        g = t(7118),
        m = t(1100),
        h = t(512);
      r.default = e => (0, n.jsxs)(n.Fragment, {
        children: ["default" === e.item.variant && (0, n.jsx)(p, {
          ...e
        }), "scroll_reveal" === e.item.variant && (0, n.jsx)(x, {
          ...e
        })]
      });
      let p = e => {
          let {
            item: r,
            items: t,
            index: l
          } = e, a = (0, u.useRef)(null), f = (0, u.useRef)(!1), g = (0, u.useRef)(null), m = (0, u.useRef)(null), h = (0, u.useRef)([]), p = (0, u.useRef)(null), x = (0, u.useRef)(0), v = (0, u.useRef)(0), R = (0, u.useRef)(null), k = (0, u.useRef)(null), y = (0, u.useRef)(null), j = (0, u.useRef)(null), C = (0, u.useRef)(null), N = (0, d.o)(e => e.isAppear), E = (0, u.useMemo)(() => (0, n.jsx)(b, {
            ref: R,
            item: r
          }), []), S = () => {
            for (let e = 0; e < h.current.length; e++) x.current += h.current[e][0].parentElement.getBoundingClientRect().height, e >= 2 && (v.current += h.current[e][0].parentElement.getBoundingClientRect().height);
            i.p8.set(p.current, {
              y: p.current.offsetHeight
            })
          }, T = () => {
            let e = i.p8.timeline({
                defaults: {
                  duration: 1.4,
                  ease: "power4.inOut"
                }
              }),
              r = window.innerWidth < 768 ? "-1rem" : "-2.5rem",
              t = window.innerWidth < 768 ? "-0.5rem" : "-0.96rem",
              n = [h.current[0], h.current[1]];
            e.fromTo(p.current, {
              y: p.current.offsetHeight
            }, {
              y: v.current
            }, 0).fromTo(n, {
              letterSpacing: r
            }, {
              letterSpacing: t
            }, 0)
          };
          return (0, u.useEffect)(() => {
            window.innerWidth <= 1024 && (g.current.style.height = window.innerHeight + "px"), h.current = R.current.getSplittedText(), f.current = R.current.getRef(), S();
            let e = window.innerWidth < 768 ? "-0.5rem" : "-0.96rem",
              r = h.current.slice(2);
            k.current = i.p8.timeline({
              defaults: {
                duration: 1.4,
                ease: "power4.inOut"
              },
              paused: !0
            }), k.current.to(f.current, {
              y: r.length > 1 ? -v.current - 20 : -v.current
            }, 0).to(r, {
              y: r.length > 1 ? 20 : 0,
              letterSpacing: e
            }, 0), y.current = i.p8.timeline({
              defaults: {
                duration: 1.4,
                ease: "power4.inOut"
              },
              paused: !0
            }), y.current.to(f.current, {
              y: 0
            }, 0).to(r, {
              y: (0, o.z6)(30),
              letterSpacing: "-2.5rem"
            }, 0);
            let t = window.innerWidth < 768 ? "-1.5rem" : "-2.5rem";
            i.p8.set(r, {
              y: (0, o.z6)(30),
              letterSpacing: t
            });
            let n = i.p8.fromTo(m.current, {
              scale: 1,
              borderRadius: 0
            }, {
              scale: window.innerWidth < 768 ? .965 : .972,
              borderRadius: 30,
              ease: "none"
            });
            return C.current = c.ScrollTrigger.create({
              trigger: a.current,
              animation: n,
              start: "bottom bottom",
              end: () => "+=".concat(.5 * window.innerHeight),
              scrub: !0
            }), j.current = c.ScrollTrigger.create({
              trigger: a.current,
              start: "top top-=10px",
              onEnter: () => {
                (0, o.RE)(y.current), k.current.restart()
              },
              onLeaveBack: () => {
                (0, o.RE)(k.current), y.current.restart()
              }
            }), () => {
              j.current.kill(), j.current = null, C.current.kill(), C.current = null
            }
          }, []), (0, u.useEffect)(() => {
            T()
          }, [N]), (0, n.jsx)(s.Z, {
            index: l,
            slicesLength: t.length,
            children: (0, n.jsxs)("section", {
              ref: a,
              style: {
                zIndex: t.length - l
              },
              className: "relative h-[175vh] ".concat("White" === r.backgroundColor.color ? "bg-white" : "Beige light" === r.backgroundColor.color ? "bg-light_beige" : "Beige dark" === r.backgroundColor.color ? "bg-dark_beige" : "Grey dark" === r.backgroundColor.color ? "bg-dark_grey" : "bg-green"),
              children: [(0, n.jsx)(w, {
                item: r
              }), (0, n.jsx)("div", {
                className: "absolute top-0 left-0 w-full h-full pointer-events-none",
                children: (0, n.jsx)("div", {
                  ref: g,
                  className: "sticky top-0 h-screen",
                  children: (0, n.jsx)("div", {
                    ref: m,
                    className: "absolute top-0 left-0 w-full h-full overflow-hidden",
                    children: (0, n.jsx)("div", {
                      ref: p,
                      className: "absolute bottom-0 left-0 w-full px-container overflow-hidden pb-[2.4rem]",
                      children: E
                    })
                  })
                })
              })]
            })
          })
        },
        b = (0, u.forwardRef)((e, r) => {
          let {
            item: l
          } = e, o = (0, u.useRef)(null), i = (0, u.useRef)(!1);
          (0, u.useImperativeHandle)(r, () => ({
            getRef: a,
            getSplittedText: c
          }));
          let c = () => i.current,
            a = () => o.current;
          return (0, u.useEffect)(() => {
            let e = t(2392);
            i.current = new e({
              target: o.current,
              by: "lines"
            })[0].lines
          }, []), (0, n.jsx)("h1", {
            ref: o,
            className: "text-center z-1 font-headings text-[6rem] -tracking-[0.5rem] md:text-[12rem] lg:text-[16rem] md:-tracking-[0.96rem] lowercase text-[#f2f0ec] leading-[75%]",
            children: l.title.split("\n").map(e => (0, n.jsx)("div", {
              children: e
            }, e))
          })
        }),
        w = e => {
          let {
            item: r
          } = e, t = (0, u.useRef)(null), o = (0, u.useRef)(null), s = (0, u.useRef)(null), f = (0, u.useRef)(null), g = (0, u.useRef)(null), h = (0, u.useRef)(null), [p, b] = (0, u.useState)(0), w = (0, a.a)(), x = (0, d.o)(e => e.isAppear), v = (0, d.o)(e => e.setCursorHidden), R = (0, u.useRef)(null), k = (0, u.useRef)(null), y = (0, u.useRef)(null), j = () => {
            let e = i.p8.fromTo(o.current, {
                y: 0
              }, {
                y: window.innerWidth / 15,
                ease: "none"
              }),
              r = i.p8.fromTo(s.current, {
                scale: 1,
                borderRadius: 0
              }, {
                scale: window.innerWidth < 768 ? .965 : .972,
                borderRadius: 30,
                ease: "none"
              });
            R.current = c.ScrollTrigger.create({
              trigger: t.current,
              animation: e,
              start: "bottom bottom",
              scrub: !0
            }), k.current = c.ScrollTrigger.create({
              trigger: t.current,
              animation: r,
              start: "bottom bottom",
              end: () => "+=".concat(.5 * window.innerHeight),
              scrub: !0
            })
          }, C = () => {
            h.current = .75 * window.innerHeight
          };
          return (0, u.useEffect)(() => (j(), window.addEventListener("resize", C), () => {
            window.removeEventListener("resize", C), k.current.kill(), k.current = null, R.current && (R.current.kill(), R.current = null)
          }), []), (0, u.useEffect)(() => {
            x && i.p8.fromTo(f.current, {
              scale: 1.2
            }, {
              scale: 1,
              duration: 1.6,
              ease: "expo.out",
              delay: .4
            })
          }, [x]), (0, u.useEffect)(() => (h.current = .75 * window.innerHeight, i.p8.set(f.current, {
            scale: 1.2
          }), w || (y.current = c.ScrollTrigger.create({
            trigger: t.current,
            start: "bottom bottom",
            end: () => "+=".concat(t.current.clientHeight),
            scrub: !0,
            onUpdate: () => {
              g.current.addScrollValue(h.current)
            }
          })), () => {
            y.current && (y.current.kill(), y.current = null)
          }), [w]), (0, n.jsx)("div", {
            ref: t,
            className: "w-full h-full",
            onMouseEnter: () => {
              b(1), v(!0)
            },
            onMouseLeave: () => {
              b(0), v(!1)
            },
            children: (0, n.jsx)("div", {
              className: "sticky top-0 h-screen",
              children: (0, n.jsxs)("div", {
                ref: s,
                className: "w-full h-full overflow-hidden",
                children: [(0, n.jsx)("div", {
                  className: "absolute top-0 left-0 w-full h-full pointer-events-none z-1 block mobile:hidden",
                  children: (0, n.jsx)(l.Z, {
                    ref: g,
                    showBlogFromParent: p,
                    text: "Keep going \xb7 Scroll down \xb7"
                  })
                }), (0, n.jsx)("div", {
                  ref: o,
                  className: "w-full h-screen relative",
                  children: (0, n.jsx)("div", {
                    ref: f,
                    className: "w-full h-full",
                    children: (0, n.jsx)(m.p, {
                      loading: "eager",
                      priority: !0,
                      image: r.image.data,
                      sizes: "100vw",
                      className: "w-full h-full object-cover",
                      fallbackAlt: ""
                    })
                  })
                })]
              })
            })
          })
        };
      b.displayName = "TitleSplitted", w.displayName = "CoverImage", p.displayName = "CoverDefault";
      let x = e => {
        let {
          item: r,
          items: t,
          index: p
        } = e, b = (0, u.useRef)(null), w = (0, u.useRef)(null), x = (0, u.useRef)(null), v = (0, u.useRef)(null), R = (0, u.useRef)(null), k = (0, u.useRef)(null), y = (0, u.useRef)(null), j = (0, u.useRef)(null), C = (0, u.useRef)(0), N = (0, u.useRef)(null), E = (0, f.LZ)(), [S, T] = (0, u.useState)(0), [B, H] = (0, u.useState)(!1), _ = (0, a.a)("(max-width: 1024px)", !0), z = (0, d.o)(e => e.currentTransition), W = (0, d.o)(e => e.isAppear), L = (0, d.o)(e => e.setCursorHidden);
        (0, u.useEffect)(() => {
          E && "popup-reverse" !== z && B && Z()
        }, [E, B]);
        let Z = () => {
            let e = window.innerWidth <= 768 ? .75 : .4,
              r = k.current.offsetHeight,
              t = window.innerWidth <= 768 ? r * e * 1.35 : r * e,
              n = _ ? (0, o.z6)(73) : (0, o.z6)(96),
              l = x.current.offsetHeight - n,
              u = i.p8.timeline({
                defaults: {
                  ease: "none"
                }
              });
            u.fromTo(k.current, {
              borderRadius: _ ? "".concat(1.3 * (1 + e), "rem") : "4rem",
              y: .45 * t
            }, {
              scale: 1,
              borderRadius: _ ? "1rem" : "1.2rem",
              y: 0
            }), u.fromTo(R.current, {
              scale: 1.3
            }, {
              scale: 1
            }, "<"), u.to(w.current, {
              y: -l / 3
            }, "<"), y.current = c.ScrollTrigger.create({
              trigger: x.current,
              animation: u,
              start: () => "bottom-=".concat(n, " bottom"),
              end: () => "+=".concat(l),
              scrub: !0,
              invalidateOnRefresh: !0
            }), j.current = c.ScrollTrigger.create({
              trigger: b.current,
              start: "bottom bottom",
              end: () => "+=".concat(window.innerHeight),
              scrub: !0,
              invalidateOnRefresh: !0,
              animation: i.p8.to(x.current, {
                scale: _ ? 1.0325 : 1.0145
              })
            })
          },
          A = () => {
            let e = window.innerWidth <= 768 ? .75 : .4,
              r = k.current.offsetHeight,
              t = window.innerWidth <= 768 ? r * e * 1.35 : r * e,
              n = i.p8.timeline({
                delay: .3,
                onComplete: () => {
                  H(!0)
                }
              });
            n.set(k.current, {
              y: t,
              scale: 0
            }), n.fromTo(x.current, {
              yPercent: 100
            }, {
              yPercent: 0,
              duration: 1,
              ease: "expo.out"
            }), n.fromTo(w.current, {
              y: r / 2
            }, {
              delay: .1,
              y: 0,
              duration: 1,
              ease: "expo.out"
            }, "<"), n.to(k.current, {
              y: .45 * t,
              delay: .05,
              borderRadius: _ ? "".concat(1.3 * (1 + e), "rem") : "4rem",
              scale: e,
              duration: 1,
              ease: "expo.out"
            }, "<")
          };
        return (0, u.useEffect)(() => {
          W && A()
        }, [W]), (0, u.useEffect)(() => (i.p8.set(R.current, {
          scale: 1.3
        }), () => {
          y.current && y.current.kill(), j.current && j.current.kill()
        }), []), (0, u.useEffect)(() => (C.current = window.innerHeight - (0, o.z6)(96), _ || (N.current = c.ScrollTrigger.create({
          trigger: b.current,
          start: "bottom bottom",
          end: () => "+=".concat(window.innerHeight),
          scrub: !0,
          onUpdate: () => {
            v.current && v.current.addScrollValue(C.current)
          }
        })), () => {
          N.current && (N.current.kill(), N.current = null)
        }), [_]), (0, n.jsx)(s.Z, {
          index: p,
          slicesLength: t.length,
          children: (0, n.jsx)(g.Z, {
            children: (0, n.jsx)("section", {
              style: {
                zIndex: t.length - p
              },
              onMouseEnter: () => {
                T(1), L(!0)
              },
              onMouseLeave: () => {
                T(0), L(!1)
              },
              ref: b,
              className: (0, h.Z)("relative h-[200vh] p-container-mobile md:p-container", {
                "bg-white": "White" === r.backgroundColor.color,
                "bg-real_white": "Real white" === r.backgroundColor.color,
                "bg-light_beige": "Beige light" === r.backgroundColor.color,
                "bg-dark_beige": "Beige dark" === r.backgroundColor.color,
                "bg-dark_grey": "Grey dark" === r.backgroundColor.color,
                "bg-green": "Green" === r.backgroundColor.color
              }),
              children: (0, n.jsxs)("div", {
                ref: x,
                className: "rounded-12 h-screen flex items-center justify-center sticky top-[7.6rem] md:top-[9.6rem] lg:top-[12.6rem]",
                children: [(0, n.jsx)("div", {
                  className: "absolute top-0 left-0 w-full h-[calc(100%+9.6rem)] -translate-y-[9.6rem] pointer-events-none z-1 hidden xl:block",
                  children: (0, n.jsx)(l.Z, {
                    ref: v,
                    showBlogFromParent: S,
                    text: "Keep going \xb7 Scroll down \xb7"
                  })
                }), (0, n.jsx)("div", {
                  className: (0, h.Z)("absolute top-0 left-0 w-full h-full rounded-12", {
                    "bg-white": "White" === r.foregroundColor.color,
                    "bg-real_white": "Real white" === r.foregroundColor.color,
                    "bg-light_beige": "Beige light" === r.foregroundColor.color,
                    "bg-dark_beige": "Beige dark" === r.foregroundColor.color,
                    "bg-dark_grey": "Grey dark" === r.foregroundColor.color,
                    "bg-green": "Green" === r.foregroundColor.color
                  })
                }), (0, n.jsx)("h1", {
                  ref: w,
                  className: "w-[80%] md:w-full text-center font-headings text-[8.33em] -tracking-[0.045em] leading-[89%] text-dark_grey",
                  children: r.title.split("\n").map(e => (0, n.jsx)("div", {
                    children: e
                  }, e))
                }), (0, n.jsx)("div", {
                  ref: k,
                  className: "absolute left-0 top-0 w-full h-full origin-bottom rounded-12 overflow-hidden will-change-transform",
                  children: (0, n.jsx)("div", {
                    ref: R,
                    className: "w-full h-full relative will-change-transform",
                    children: (0, n.jsx)(m.p, {
                      loading: "eager",
                      priority: !0,
                      image: r.image.data,
                      sizes: "100vw",
                      className: "object-cover",
                      fallbackAlt: "",
                      fill: !0
                    })
                  })
                })]
              })
            })
          })
        })
      }
    },
    7118: function(e, r, t) {
      var n = t(5893),
        l = t(7294),
        o = t(6546),
        i = t(146),
        c = t(188);
      r.Z = e => {
        let {
          children: r,
          sticky: t = !1,
          zIndex: u = 0
        } = e, a = (0, l.useRef)(null), s = (0, l.useRef)(null), d = (0, i.o)(e => e.headerLoaded), f = (0, i.o)(e => e.setHeaderDark);
        return (0, l.useEffect)(() => {
          if (!d) return;
          let e = document.querySelector(".header");
          return t ? s.current = o.ScrollTrigger.create({
            trigger: a.current,
            start: () => "top+=".concat(window.innerHeight, " top+=").concat(e.getBoundingClientRect().bottom),
            end: () => "bottom-=".concat((0, c.z6)(10), " top+=").concat(e.getBoundingClientRect().bottom),
            onEnter: () => {
              f(!0)
            },
            onLeave: () => {
              f(!1)
            },
            onEnterBack: () => {
              f(!0)
            },
            onLeaveBack: () => {
              f(!1)
            }
          }) : s.current = o.ScrollTrigger.create({
            trigger: a.current,
            start: () => "top top+=".concat(e.getBoundingClientRect().bottom),
            end: () => "bottom top+=".concat(e.getBoundingClientRect().bottom),
            onEnter: () => {
              f(!0)
            },
            onLeave: () => {
              f(!1)
            },
            onEnterBack: () => {
              f(!0)
            },
            onLeaveBack: () => {
              f(!1)
            }
          }), () => {
            s.current && (s.current.kill(), s.current = null), f(!1)
          }
        }, [d]), (0, n.jsx)("div", {
          ref: a,
          style: {
            zIndex: u
          },
          className: "relative w-full",
          children: r
        })
      }
    },
    512: function(e, r, t) {
      r.Z = function() {
        for (var e, r, t = 0, n = "", l = arguments.length; t < l; t++)(e = arguments[t]) && (r = function e(r) {
          var t, n, l = "";
          if ("string" == typeof r || "number" == typeof r) l += r;
          else if ("object" == typeof r) {
            if (Array.isArray(r)) {
              var o = r.length;
              for (t = 0; t < o; t++) r[t] && (n = e(r[t])) && (l && (l += " "), l += n)
            } else
              for (n in r) r[n] && (l && (l += " "), l += n)
          }
          return l
        }(e)) && (n && (n += " "), n += r);
        return n
      }
    }
  }
]);