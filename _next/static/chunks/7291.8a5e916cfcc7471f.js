"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7291], {
    7291: function(e, l, t) {
      t.r(l), t.d(l, {
        default: function() {
          return i
        }
      });
      var r = t(5893),
        s = t(7712),
        n = t(6038),
        a = t(7294),
        u = t(146),
        o = () => (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "29",
          height: "22",
          viewBox: "0 0 29 22",
          fill: "none",
          children: (0, r.jsx)("path", {
            d: "M0.765625 11H27.7656M27.7656 11L17.534 1M27.7656 11L17.534 21",
            stroke: "#F2EFE9",
            strokeWidth: "1.2"
          })
        }),
        c = t(1100),
        i = e => {
          let {
            item: l,
            items: t,
            index: i
          } = e, d = (0, a.useRef)(null), f = (0, a.useRef)([]), h = (0, a.useRef)([]), m = (0, a.useRef)([]), x = (0, a.useRef)(), p = (0, a.useRef)(), v = (0, a.useRef)(), w = (0, a.useRef)(null), g = (0, a.useRef)(0), j = (0, a.useRef)(0), b = (0, a.useRef)(!1), N = (0, a.useRef)(1), [k, R] = (0, a.useState)(0), [M, C] = (0, a.useState)(""), E = (0, u.o)(e => e.setCursorHidden), z = e => {
            b.current || (g.current = n.p8.utils.wrap(0, f.current.length, g.current + e), P(g.current, e), j.current = g.current)
          }, P = (e, l) => {
            b.current = !0, n.p8.timeline({
              defaults: {
                duration: .8,
                ease: "power3.out"
              },
              onComplete: () => {
                b.current = !1
              }
            }).set(f.current[e], {
              zIndex: N.current++
            }).set(x, {
              zIndex: N.current + 1
            }).fromTo(f.current[e], {
              xPercent: -100 * l
            }, {
              xPercent: 0
            }, 0).fromTo(h.current[e], {
              xPercent: 100 * l
            }, {
              xPercent: 0
            }, 0).fromTo(m.current[e], {
              scale: 1.1
            }, {
              scale: 1
            }, 0)
          };
          return (0, r.jsx)("section", {
            style: {
              zIndex: t.length - i
            },
            onMouseEnter: () => {
              E(!0)
            },
            onMouseLeave: () => {
              E(!1)
            },
            ref: d,
            className: "relative w-full px-container popup:x-[pb-0,mt-0] lg:mt-75 pb-container",
            children: l.items.length > 1 ? (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)("div", {
                className: "block lg:hidden absolute top-1/2 -translate-y-1/2 left-[calc(var(--padding-container)+1rem)] rotate-180 max-lg:z-[200]",
                onClick: () => z(1),
                ref: p,
                children: (0, r.jsx)(o, {})
              }), (0, r.jsx)("div", {
                className: "block lg:hidden absolute top-1/2 -translate-y-1/2 right-[calc(var(--padding-container)+1rem)] max-lg:z-[200]",
                onClick: () => z(-1),
                ref: v,
                children: (0, r.jsx)(o, {})
              }), (0, r.jsx)("div", {
                className: "absolute left-0 top-0 w-full h-full hidden xl:block",
                children: (0, r.jsx)(s.Z, {
                  showBlogFromParent: k,
                  text: M
                })
              }), (0, r.jsx)("div", {
                className: "relative w-full h-0 pt-[71%] lg:pt-[58.63%] rounded-[1.6rem] cursor-pointer overflow-hidden",
                onMouseEnter: () => R(1),
                onMouseLeave: () => R(0),
                children: (0, r.jsx)("div", {
                  ref: w,
                  className: "absolute top-0 left-0 w-full h-full",
                  children: l.items.map((e, l) => (0, r.jsx)("div", {
                    ref: e => {
                      f.current[l] = e
                    },
                    className: "absolute top-0 left-0 w-full h-full overflow-hidden",
                    children: (0, r.jsx)("div", {
                      className: "w-full h-full",
                      ref: e => {
                        h.current[l] = e
                      },
                      children: (0, r.jsxs)("div", {
                        className: "w-full h-full",
                        ref: e => {
                          m.current[l] = e
                        },
                        children: [(0, r.jsx)("div", {
                          className: "hidden lg:block absolute top-0 left-0 w-1/2 h-full",
                          onMouseEnter: () => C("Previous"),
                          onClick: () => z(1)
                        }), (0, r.jsx)("div", {
                          className: "hidden lg:block absolute top-0 right-0 w-1/2 h-full",
                          onMouseEnter: () => C("Next"),
                          onClick: () => z(-1)
                        }), (0, r.jsx)(c.p, {
                          transition: "none",
                          fallbackAlt: "",
                          image: e.image.data,
                          className: "w-full h-full object-cover",
                          sizes: "(max-width: 768px) 96vw, 96vw"
                        })]
                      })
                    })
                  }, e.id))
                })
              })]
            }) : (0, r.jsx)("div", {
              className: "relative w-full h-0 pt-[58.63%] rounded-[1.6rem] overflow-hidden",
              children: (0, r.jsx)("div", {
                ref: w,
                className: "absolute top-0 left-0 w-full h-full",
                children: (0, r.jsx)("div", {
                  ref: e => {
                    f.current[0] = e
                  },
                  className: "absolute top-0 left-0 w-full h-full",
                  children: (0, r.jsx)(c.p, {
                    fallbackAlt: "",
                    image: l.items[0].image.data,
                    className: "w-full h-full object-cover",
                    sizes: "(max-width: 768px) 96vw, 96vw"
                  })
                })
              })
            })
          })
        }
    }
  }
]);