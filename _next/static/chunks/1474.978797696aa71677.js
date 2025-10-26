(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1474], {
    1474: function(e, t, n) {
      "use strict";
      n.r(t), n.d(t, {
        default: function() {
          return f
        }
      });
      var i = n(5893),
        r = n(4539),
        o = n.n(r),
        s = n(7294),
        a = n(6546),
        c = n.n(a),
        l = n(9521),
        p = n.n(l),
        u = n(987),
        g = n(146),
        m = n(1100),
        d = n(2289);

      function f(e) {
        let {
          item: t
        } = e, n = (0, s.useRef)(null), r = (0, s.useRef)(null), a = (0, s.useRef)(null), l = (0, u.s)(e => e.currentDevice), f = (0, g.o)(e => e.setHeaderDark), C = (0, s.useRef)([]), [_, x] = (0, s.useState)(1);
        return (0, s.useEffect)(() => {
          0 === C.current.length && (C.current = Array.from({
            length: t.items.length
          }, () => null))
        }, [t.items.length]), (0, s.useEffect)(() => {
          if (!n.current || !r.current || !a.current || "Charging" !== t.page) return;
          let e = p().context(() => {
            "Desktop" === l ? b(r.current, r.current, "top top", "top+=".concat(.9544 * window.innerHeight, " top"), {
              onLeave: () => f && f(!0),
              onEnterBack: () => f && f(!1)
            }) : (b(a.current, r.current, "bottom-=10% bottom", "35% top"), b(n.current, r.current, "top+=".concat(.6444 * window.innerHeight, " top"), "bottom bottom", {
              onEnter: () => f(!0),
              onLeaveBack: () => f(!1)
            }))
          });
          return () => e.revert()
        }, [r, n, a, l, t.page]), (0, s.useEffect)(() => {
          if (!n.current || !r.current || !a.current || "Plumbing" !== t.page) return;
          let e = p().context(() => {
            b("Mobile" === l ? a.current : n.current, r.current, "Mobile" === l ? "bottom bottom" : "top top", "Mobile" === l ? "50% top" : "bottom bottom"), c().create({
              trigger: n.current,
              start: "top+=".concat(.9544 * window.innerHeight, " top"),
              end: "bottom bottom",
              onEnter: () => f(!0),
              onLeaveBack: () => f(!1)
            })
          });
          return () => e && e.revert()
        }, [n, l, a, r, t.page]), (0, s.useEffect)(() => {
          if ("Charging" === t.page && "Desktop" === l || "Plumbing" === t.page && "Mobile" === l || !n.current) return;
          let e = p().context(() => {
            let e = 1,
              i = t.items.length,
              r = 1 / i,
              o = .4 * r,
              s = .2 * r,
              a = p().timeline({
                scrollTrigger: {
                  trigger: n.current,
                  start: "top+=".concat(100 / i, "% top"),
                  end: "bottom-=".concat(100 / i, "% top"),
                  scrub: !0,
                  onUpdate: n => {
                    let i = Math.ceil(n.progress * t.items.length);
                    e !== i && (x(i), e = i)
                  }
                },
                defaults: {
                  ease: "none"
                }
              });
            C.current.forEach((e, t) => {
              let n = t * r;
              0 === t ? (a.fromTo(e, {
                opacity: 1
              }, {
                opacity: 1,
                duration: o
              }, n), a.to(e, {
                opacity: 0,
                duration: o
              }, n + o + s)) : t === i - 1 ? (a.fromTo(e, {
                opacity: 0
              }, {
                opacity: 1,
                duration: o
              }, n), a.to(e, {
                opacity: 1,
                duration: s
              }, n + o)) : (a.fromTo(e, {
                opacity: 0
              }, {
                opacity: 1,
                duration: o
              }, n), a.to(e, {
                opacity: 1,
                duration: s
              }, n + o), a.to(e, {
                opacity: 0,
                duration: o
              }, n + o + s))
            })
          });
          return () => e && e.revert()
        }, [n, l, C, t.items.length, t.page]), (0, s.useEffect)(() => {
          h(t.page, l, t.items.length, n.current)
        }, [t.page, l, n, t.items.length]), (0, i.jsxs)("section", {
          className: o().benefitsContainer,
          children: [(0, i.jsxs)("div", {
            ref: a,
            className: o().benefitsIntroductionContainer,
            children: [(0, i.jsx)("h2", {
              children: t.title
            }), (0, i.jsx)(d.Z, {
              width: {
                desktop: "27.777%",
                mobile: "42.66%"
              },
              colorCross: "#4C4C4C",
              colorLine: "#d6d5d1",
              marginBottom: {
                desktop: "3.6em",
                mobile: "4.5em"
              }
            }), (0, i.jsx)("p", {
              children: t.introduction
            })]
          }), (0, i.jsx)("div", {
            ref: n,
            className: o().benefitsSectionsContainer,
            style: {
              backgroundColor: "".concat("Charging" === t.page ? "#fdfdfd" : "#cbc7bd")
            },
            children: (0, i.jsxs)("div", {
              className: o().sectionsAndImageContainer,
              ref: r,
              style: {
                paddingLeft: "Charging" === t.page ? "" : "Desktop" === l ? "0.9em" : "0em",
                justifyContent: "Charging" === t.page ? "" : "space-between"
              },
              children: ["Charging" === t.page && (0, i.jsx)("div", {
                className: o().sectionsChargingWrapper,
                children: t.items.map((e, n) => (0, i.jsxs)("article", {
                  className: o().sectionChargingContainer,
                  ref: e => {
                    C.current[n] = e
                  },
                  children: [(0, i.jsx)("div", {
                    className: o().iconContainer,
                    children: (0, i.jsx)(m.p, {
                      image: e.icon.data
                    })
                  }), (0, i.jsx)("h3", {
                    children: e.title.split("\n").map((e, t) => (0, i.jsxs)("span", {
                      children: [e, (0, i.jsx)("br", {})]
                    }, "".concat(e, "-").concat(t)))
                  }), (0, i.jsx)("p", {
                    style: "Mobile" === l ? {
                      width: "".concat(e.text.length < 160 ? "68%" : "80%")
                    } : {},
                    children: e.text
                  }), n !== t.items.length - 1 && "Desktop" === l && (0, i.jsxs)("div", {
                    className: o().separateLine,
                    children: [(0, i.jsx)("span", {}), (0, i.jsx)("span", {})]
                  })]
                }, n))
              }), "Plumbing" === t.page && (0, i.jsxs)("div", {
                className: o().sectionsPlumbingWrapper,
                children: [t.items.map((e, t) => (0, i.jsxs)(s.Fragment, {
                  children: ["Mobile" === l && e.icon.data && (0, i.jsx)(m.p, {
                    image: e.icon.data,
                    fill: !0
                  }), (0, i.jsxs)("article", {
                    className: o().sectionPlumbingContainer,
                    ref: e => {
                      C.current[t] = e
                    },
                    children: [(0, i.jsx)("h3", {
                      children: e.title.split("\n").map((e, t) => (0, i.jsxs)("span", {
                        children: [e, (0, i.jsx)("br", {})]
                      }, "".concat(e, "-").concat(t)))
                    }), (0, i.jsxs)("div", {
                      className: o().sectionPlumbingSeparateLine,
                      children: [(0, i.jsx)("span", {}), (0, i.jsx)("span", {})]
                    }), (0, i.jsx)("p", {
                      children: e.text
                    })]
                  })]
                }, e.id)), "Desktop" === l && (0, i.jsxs)("div", {
                  className: o().plumbingBenefitsCountContainer,
                  children: ["Benefit \xb7 ", _, "/", t.items.length]
                })]
              }), ("Plumbing" !== t.page || "Mobile" !== l) && t.image.data && (0, i.jsx)(m.p, {
                className: o().benefitsImage,
                image: t.image.data
              })]
            })
          })]
        })
      }
      let b = (e, t, n, i, r) => {
          c().create({
            trigger: e,
            pin: t,
            start: n,
            end: i,
            ...r
          })
        },
        h = (e, t, n, i) => {
          p().set(i, {
            height: "Plumbing" === e && "Desktop" === t || "Plumbing" !== e && "Mobile" === t ? "".concat(90 * n, "vh") : "auto"
          })
        }
    },
    2289: function(e, t, n) {
      "use strict";
      n.d(t, {
        Z: function() {
          return a
        }
      });
      var i = n(5893),
        r = n(987),
        o = n(247),
        s = n.n(o);

      function a(e) {
        let {
          width: t,
          marginBottom: n,
          marginTop: o,
          colorLine: a,
          colorCross: c
        } = e, l = "Desktop" === (0, r.s)(e => e.currentDevice), p = e => e ? l ? e.desktop : e.mobile : "0";
        return (0, i.jsxs)("div", {
          className: s().separateLine,
          style: {
            borderBottom: "1px solid ".concat(a),
            marginBottom: p(n),
            marginTop: p(o),
            width: p(t)
          },
          children: [(0, i.jsx)("span", {
            style: {
              backgroundColor: c
            }
          }), (0, i.jsx)("span", {
            style: {
              backgroundColor: c
            }
          })]
        })
      }
    },
    4539: function(e) {
      e.exports = {
        benefitsContainer: "Benefits_benefitsContainer__cWE0X",
        benefitsIntroductionContainer: "Benefits_benefitsIntroductionContainer__NFIUK",
        separateLine: "Benefits_separateLine__cZ5DB",
        sectionsAndImageContainer: "Benefits_sectionsAndImageContainer__fzJmb",
        benefitsSectionsContainer: "Benefits_benefitsSectionsContainer__KU_YV",
        benefitsImage: "Benefits_benefitsImage__wR60d",
        sectionsChargingWrapper: "Benefits_sectionsChargingWrapper__oqNNW",
        sectionsPlumbingWrapper: "Benefits_sectionsPlumbingWrapper__jb0Gs",
        plumbingBenefitsCountContainer: "Benefits_plumbingBenefitsCountContainer__uxYYb",
        sectionChargingContainer: "Benefits_sectionChargingContainer__49F_I",
        sectionPlumbingContainer: "Benefits_sectionPlumbingContainer__xTE_X",
        sectionPlumbingSeparateLine: "Benefits_sectionPlumbingSeparateLine__C7bE_",
        iconContainer: "Benefits_iconContainer__W5vB9"
      }
    },
    247: function(e) {
      e.exports = {
        separateLine: "separateLine_separateLine__XZlUb"
      }
    }
  }
]);