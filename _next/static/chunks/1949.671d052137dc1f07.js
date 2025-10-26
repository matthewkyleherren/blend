"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1949], {
    8616: function(e, t, n) {
      var r = n(5893),
        l = n(7294),
        i = n(3205),
        s = n(6038);
      let a = (0, l.forwardRef)((e, t) => {
        let {
          children: a,
          href: c,
          target: o,
          mode: d = "white",
          ...u
        } = e, g = (0, l.useRef)(null), m = (0, l.useRef)(null), f = (0, l.useRef)(null);
        (0, l.useImperativeHandle)(t, () => ({
          getChars: x,
          getAnimation: h
        }));
        let x = () => m.current,
          h = () => p(),
          p = () => (f.current = s.p8.effects.blink(m.current), f.current),
          v = () => {
            p()
          };
        return (0, l.useEffect)(() => (g.current.addEventListener("mouseenter", v), () => {
          g.current && g.current.removeEventListener("mouseenter", v)
        }), []), (0, l.useEffect)(() => {
          let e = n(2392);
          m.current = new e({
            target: g.current,
            by: "chars"
          })[0].chars
        }, []), (0, r.jsx)("div", {
          ref: g,
          children: (0, r.jsx)(i.Z, {
            href: c,
            target: o,
            className: "button-" + d + " inline-block py-[2.4rem] px-[2.5rem] rounded-[1rem] text-10 leading-[180%] tracking-[0.05rem] uppercase xl:transition-transform xl:duration-global xl:ease-out xl:hover:scale-[1.04]",
            ...u,
            children: a
          })
        })
      });
      a.displayName = "Button", t.Z = a
    },
    1949: function(e, t, n) {
      n.r(t), n.d(t, {
        default: function() {
          return g
        }
      });
      var r = n(5893),
        l = n(8616),
        i = n(7118),
        s = n(6217),
        a = () => (0, r.jsx)("svg", {
          width: "7",
          height: "11",
          viewBox: "0 0 7 11",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, r.jsxs)("g", {
            id: "Group 20639",
            children: [(0, r.jsx)("path", {
              id: "Vector 247",
              d: "M3.56762 0.628806V7.77202M3.56762 7.77202L0.800781 5.00518M3.56762 7.77202L6.33446 5.00518",
              stroke: "#575349"
            }), (0, r.jsx)("line", {
              id: "Line 318",
              x1: "0.800781",
              y1: "10.5",
              x2: "6.37012",
              y2: "10.5",
              stroke: "#575349"
            })]
          })
        }),
        c = n(146),
        o = n(7294),
        d = n(2881);
      let u = e => {
        let {
          item: t,
          popup: n = !1
        } = e, s = (0, o.useRef)(null), u = (0, c.o)(e => e.setCursorHidden), g = () => {
          s.current.classList.remove("pointer-events-none")
        };
        return (0, o.useEffect)(() => (window.addEventListener("is-appeared", g), () => {
          window.removeEventListener("is-appeared", g)
        }), []), (0, r.jsx)(i.Z, {
          children: (0, r.jsxs)("section", {
            ref: s,
            className: "bg-white pb-[1.2rem] pointer-events-none",
            onMouseEnter: () => {
              n || u(!1)
            },
            children: [!t.link && (0, r.jsxs)("div", {
              className: "mx-container border-b-dark_grey",
              children: [(0, r.jsx)("div", {
                className: "flex justify-center items-center pt-[20rem] mb-[17.1rem]",
                children: (0, r.jsx)("h1", {
                  className: "heading-60 text-dark_grey",
                  children: t.title
                })
              }), (0, r.jsx)("div", {
                className: "flex justify-start",
                children: (0, r.jsx)("div", {
                  className: "font-body-mono text-dark_grey uppercase",
                  children: t.date ? new Date(t.date).toLocaleDateString("en", {
                    month: "long",
                    year: "2-digit",
                    day: "2-digit"
                  }) : null
                })
              })]
            }), t.link && (0, r.jsxs)("div", {
              className: "flex flex-col justify-center items-center gap-y-[3.6rem] w-full pt-[22rem] pb-[16.4rem]",
              children: [(0, r.jsx)("h1", {
                className: "w-full lg:w-[43.5%] px-container lg:px-0 font-headings font-medium text-60 leading-[85%] -tracking-0.04 lg:text-160 lg:leading-[75%] lg:-tracking-0.06 text-dark_grey text-center lowercase",
                children: t.title
              }), (0, r.jsxs)(l.Z, {
                href: d.sI(t.link),
                target: "_blank",
                mode: "light_beige",
                download: !0,
                children: [t.link.title, (0, r.jsx)("span", {
                  className: "ml-[0.8rem] inline-block align-middle",
                  children: (0, r.jsx)(a, {})
                })]
              })]
            })]
          })
        })
      };
      var g = e => {
        let {
          item: t,
          items: n,
          index: l,
          context: i
        } = e;
        return i && i.popup ? (0, r.jsx)(u, {
          item: t,
          popup: !0
        }) : (0, r.jsx)(s.Z, {
          index: l,
          slicesLength: n.length,
          simple: !0,
          children: (0, r.jsx)(u, {
            item: t
          })
        })
      }
    },
    7118: function(e, t, n) {
      var r = n(5893),
        l = n(7294),
        i = n(6546),
        s = n(146),
        a = n(188);
      t.Z = e => {
        let {
          children: t,
          sticky: n = !1,
          zIndex: c = 0
        } = e, o = (0, l.useRef)(null), d = (0, l.useRef)(null), u = (0, s.o)(e => e.headerLoaded), g = (0, s.o)(e => e.setHeaderDark);
        return (0, l.useEffect)(() => {
          if (!u) return;
          let e = document.querySelector(".header");
          return n ? d.current = i.ScrollTrigger.create({
            trigger: o.current,
            start: () => "top+=".concat(window.innerHeight, " top+=").concat(e.getBoundingClientRect().bottom),
            end: () => "bottom-=".concat((0, a.z6)(10), " top+=").concat(e.getBoundingClientRect().bottom),
            onEnter: () => {
              g(!0)
            },
            onLeave: () => {
              g(!1)
            },
            onEnterBack: () => {
              g(!0)
            },
            onLeaveBack: () => {
              g(!1)
            }
          }) : d.current = i.ScrollTrigger.create({
            trigger: o.current,
            start: () => "top top+=".concat(e.getBoundingClientRect().bottom),
            end: () => "bottom top+=".concat(e.getBoundingClientRect().bottom),
            onEnter: () => {
              g(!0)
            },
            onLeave: () => {
              g(!1)
            },
            onEnterBack: () => {
              g(!0)
            },
            onLeaveBack: () => {
              g(!1)
            }
          }), () => {
            d.current && (d.current.kill(), d.current = null), g(!1)
          }
        }, [u]), (0, r.jsx)("div", {
          ref: o,
          style: {
            zIndex: c
          },
          className: "relative w-full",
          children: t
        })
      }
    }
  }
]);