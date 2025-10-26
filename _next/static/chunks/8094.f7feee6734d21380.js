(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8094], {
    8094: function(e, t, r) {
      "use strict";
      r.r(t), r.d(t, {
        default: function() {
          return T
        }
      });
      var n = r(5893),
        l = r(6033),
        o = r.n(l),
        a = r(7294),
        i = r(2757),
        s = r.n(i),
        c = r(9521),
        u = r.n(c),
        x = r(987),
        m = r(146),
        f = r(7712),
        d = r(1100),
        h = r(6620),
        C = r(6217);
      let _ = f.Z;

      function T(e) {
        let {
          item: t
        } = e, r = (0, x.s)(e => e.currentDevice), l = (0, a.useRef)(null), i = (0, a.useRef)(null), c = (0, a.useRef)(null), f = (0, a.useRef)(null), T = (0, a.useRef)(null), g = (0, a.useRef)(null), p = (0, a.useRef)(null), [v, b] = (0, a.useState)(1), j = (0, m.o)(e => e.setCursorHidden), A = (0, m.o)(e => e.setHeaderDark);
        (0, a.useLayoutEffect)(() => {
          if (f.current && !p.current) return p.current = new(s())(f.current, {
            type: "chars, words"
          }), () => {
            var e;
            null === (e = p.current) || void 0 === e || e.revert(), p.current = null
          }
        }, [f]), (0, a.useEffect)(() => {
          let e = u().context(() => {
            let e = u().timeline({
              scrollTrigger: {
                trigger: l.current,
                start: "30% 90%",
                end: "10% 11.5%",
                scrub: .5
              },
              defaults: {
                ease: "linear"
              }
            });
            e.fromTo(i.current, {
              y: "-50%"
            }, {
              y: "-140%",
              duration: 1
            }, 0), e.to(c.current, {
              width: "100%",
              height: "100%",
              top: "0%",
              duration: 1
            }, 0)
          });
          return () => e && e.revert()
        }, [c, i, l, r]), (0, a.useEffect)(() => {
          if (!p.current || !g.current || !T.current || !l.current) return;
          let e = u().context(() => {
            let e = u().timeline({
              scrollTrigger: {
                trigger: l.current,
                start: "50% 70%",
                end: "70% 85%",
                scrub: .5,
                onEnterBack: () => A(!1),
                onLeave: () => A(!0)
              }
            });
            p.current.chars.forEach((t, r) => {
              e.fromTo(t, {
                opacity: .1
              }, {
                opacity: 1,
                duration: .5
              }, .035 * r)
            }), e.fromTo(T.current, {
              scale: 0,
              x: "-50%",
              opacity: 0
            }, {
              scale: 1,
              x: "0%",
              opacity: 1,
              duration: 1
            }, .035 * p.current.chars.length + .5), e.fromTo(g.current, {
              x: "-50%",
              opacity: 0
            }, {
              x: "0%",
              opacity: 1,
              duration: 1
            }, .035 * p.current.chars.length + .5)
          });
          return () => e && e.revert()
        }, [p, g, T, r, l]);
        let y = (0, a.useCallback)(() => {
            b(1), j(!0)
          }, [b, j]),
          N = (0, a.useCallback)(() => {
            b(0), j(!1)
          }, [b, j]);
        return (0, n.jsx)(C.Z, {
          index: 0,
          children: (0, n.jsxs)("section", {
            ref: l,
            className: o().heroContainer,
            children: [(0, n.jsxs)("div", {
              className: o().imageAndTitleContainer,
              onMouseEnter: y,
              onMouseLeave: N,
              children: [(0, n.jsx)("div", {
                className: "absolute left-[2rem] bottom-[1.2rem] md:left-[2.5rem] md:bottom-[2.5rem] lg:left-[2rem] lg:bottom-[2rem] xl:mobile:left-[2rem] xl:mobile:bottom-[2rem] xl:mobile:w-auto xl:mobile:top-[initial] xl:mobile:h-[8rem] xl:fixed xl:left-0 xl:top-0 xl:w-full xl:h-full pointer-events-none z-5",
                children: (0, n.jsx)(_, {
                  showBlogFromParent: v,
                  text: "Keep going \xb7 Scroll down \xb7",
                  addScroll: !1
                })
              }), (0, n.jsx)("h1", {
                ref: i,
                children: t.title
              }), (0, n.jsx)(d.p, {
                ref: c,
                className: o().heroImage,
                image: t.image.data,
                priority: !0
              })]
            }), (0, n.jsxs)("div", {
              className: o().textContainer,
              children: [(0, n.jsx)("p", {
                ref: f,
                className: o().text,
                children: t.text
              }), (0, n.jsxs)(h.U, {
                data: t.cta,
                className: o().CTAContainer,
                children: [(0, n.jsxs)("span", {
                  ref: T,
                  className: o().CTAIconContainer,
                  children: [(0, n.jsx)("span", {}), (0, n.jsx)("span", {})]
                }), (0, n.jsx)("span", {
                  ref: g,
                  className: o().CTALabel,
                  children: t.cta.title
                })]
              })]
            })]
          })
        })
      }
    },
    6033: function(e) {
      e.exports = {
        heroContainer: "CoverWithText_heroContainer__GUv00",
        imageAndTitleContainer: "CoverWithText_imageAndTitleContainer__6Evbu",
        heroImage: "CoverWithText_heroImage__kU3ee",
        textContainer: "CoverWithText_textContainer__gZ4rH",
        text: "CoverWithText_text__Lx_bW",
        CTAContainer: "CoverWithText_CTAContainer__g5GeT",
        CTALabel: "CoverWithText_CTALabel__BuYcQ",
        CTAIconContainer: "CoverWithText_CTAIconContainer__wSMp3"
      }
    }
  }
]);