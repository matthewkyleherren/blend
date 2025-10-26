(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6693], {
    6693: function(e, t, r) {
      "use strict";
      r.r(t), r.d(t, {
        default: function() {
          return g
        }
      });
      var n = r(5893),
        l = r(503),
        o = r.n(l),
        i = r(7294),
        s = r(9521),
        a = r.n(s),
        u = r(2757),
        c = r.n(u),
        x = r(987),
        m = r(7712),
        f = r(146),
        d = r(1100),
        h = r(6217);
      let T = m.Z;

      function g(e) {
        let {
          item: t
        } = e, r = (0, i.useRef)(null), l = (0, i.useRef)(null), s = (0, i.useRef)(null), u = (0, i.useRef)(null), m = (0, i.useRef)(null);
        (0, i.useRef)(null);
        let g = (0, i.useRef)(null),
          C = (0, x.s)(e => e.currentDevice),
          [_, v] = (0, i.useState)(1),
          b = (0, f.o)(e => e.setCursorHidden),
          p = (0, f.o)(e => e.setHeaderDark);
        (0, i.useLayoutEffect)(() => {
          if (u.current && !g.current) return g.current = new(c())(u.current, {
            type: "chars, words"
          }), () => {
            var e;
            null === (e = g.current) || void 0 === e || e.revert(), g.current = null
          }
        }, [u]), (0, i.useEffect)(() => {
          let e = a().context(() => {
            let e = a().timeline({
              scrollTrigger: {
                trigger: r.current,
                start: "30% 90%",
                end: "10% 11.5%",
                scrub: .5
              },
              defaults: {
                ease: "linear"
              }
            });
            e.fromTo(s.current, {
              y: "-50%"
            }, {
              y: "-140%",
              duration: 1
            }, 0), e.to(l.current, {
              width: "100%",
              height: "100%",
              top: "0%",
              duration: 1
            }, 0)
          });
          return () => e && e.revert()
        }, [l, s, r, C]), (0, i.useEffect)(() => {
          if (!g.current || !m.current || !r.current) return;
          let e = a().context(() => {
            let e = a().timeline({
              scrollTrigger: {
                trigger: r.current,
                start: "50% 70%",
                end: "70% 85%",
                scrub: .5,
                onEnterBack: () => p(!1),
                onLeave: () => p(!0)
              }
            });
            g.current.chars.forEach((t, r) => {
              e.fromTo(t, {
                opacity: .1
              }, {
                opacity: 1,
                duration: .5
              }, .035 * r)
            }), e.fromTo(m.current, {
              opacity: .1
            }, {
              opacity: 1,
              duration: .5
            }, .035 * g.current.chars.length + .5)
          });
          return () => e && e.revert()
        }, [g, m, C, r]);
        let w = (0, i.useCallback)(() => {
            v(1), b(!0)
          }, [v, b]),
          j = (0, i.useCallback)(() => {
            v(0), b(!1)
          }, [v, b]);
        return (0, n.jsx)(h.Z, {
          index: 0,
          children: (0, n.jsxs)("section", {
            ref: r,
            className: o().heroContainer,
            children: [(0, n.jsxs)("div", {
              className: o().imageAndTitleContainer,
              onMouseEnter: w,
              onMouseLeave: j,
              children: [(0, n.jsx)("div", {
                className: "absolute left-[2rem] bottom-[1.2rem] md:left-[2.5rem] md:bottom-[2.5rem] lg:left-[2rem] lg:bottom-[2rem] xl:mobile:left-[2rem] xl:mobile:bottom-[2rem] xl:mobile:w-auto xl:mobile:top-[initial] xl:mobile:h-[8rem] xl:fixed xl:left-0 xl:top-0 xl:w-full xl:h-full pointer-events-none z-5",
                children: (0, n.jsx)(T, {
                  showBlogFromParent: _,
                  text: "Keep going \xb7 Scroll down \xb7",
                  addScroll: !1
                })
              }), (0, n.jsx)("h1", {
                ref: s,
                children: t.title
              }), (0, n.jsx)(d.p, {
                ref: l,
                className: o().heroImage,
                image: t.image.data,
                priority: !0
              })]
            }), (0, n.jsxs)("div", {
              className: o().textContainer,
              children: [(0, n.jsx)("p", {
                ref: u,
                className: o().text,
                children: t.mainText
              }), (0, n.jsx)("p", {
                ref: m,
                className: o().subText,
                children: t.secondaryText
              })]
            })]
          })
        })
      }
    },
    503: function(e) {
      e.exports = {
        heroContainer: "CoverWithTwoTexts_heroContainer__W6rJr",
        imageAndTitleContainer: "CoverWithTwoTexts_imageAndTitleContainer__9MUEn",
        heroImage: "CoverWithTwoTexts_heroImage__nF4GC",
        textContainer: "CoverWithTwoTexts_textContainer__UXRav",
        text: "CoverWithTwoTexts_text__C7p1J",
        subText: "CoverWithTwoTexts_subText__Av3tK"
      }
    }
  }
]);