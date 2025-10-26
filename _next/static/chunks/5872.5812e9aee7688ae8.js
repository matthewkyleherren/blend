"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5872], {
    5872: function(e, r, t) {
      t.r(r);
      var n = t(5893),
        c = t(6038),
        u = t(6546),
        o = t(7294),
        a = t(146),
        s = t(5285),
        l = t(188);
      r.default = e => {
        let {
          items: r
        } = e, i = (0, o.useRef)(-1), [d, h] = (0, o.useState)([]), p = (0, o.useRef)(null), f = (0, o.useRef)(null), g = (0, o.useRef)(!1), m = (0, o.useRef)(null), w = (0, o.useRef)(!1), R = (0, o.useRef)([]), E = (0, o.useRef)([]), x = (0, o.useRef)([]), b = (0, o.useRef)(null), y = (0, o.useRef)(!1), A = (0, o.useRef)(null), v = (0, o.useRef)(null), k = (0, o.useRef)(null), j = (0, o.useRef)(!1), L = (0, o.useRef)(!1), N = (0, o.useRef)(!1), C = (0, o.useRef)(null), S = (0, o.useRef)(0), W = (0, o.useRef)(null), M = (0, o.useRef)(null), T = (0, o.useRef)(null), q = (0, o.useRef)([]), B = (0, s.LZ)(), _ = (0, a.o)(e => e.isAppear), H = (0, a.o)(e => e.headerVisible), V = (0, a.o)(e => e.setReduceHeaderSize), z = (0, a.o)(e => e.headerDark), O = (0, a.o)(e => e.isAnnouncementVisible);
        (0, o.useEffect)(() => {
          let e = [];
          r.forEach(r => {
            if (r.addAnchor) {
              let t = r.anchorName,
                n = document.querySelector("section[data-anchor =" + (0, l.lV)(t) + "]");
              e.push({
                title: t,
                section: n
              })
            }
          }), h(e)
        }, []), (0, o.useEffect)(() => (d.length && (V(!0), document.body.classList.add("has-anchors"), i.current = 0, R.current.forEach((e, r) => {
          x.current[r] = e.getBoundingClientRect().width
        }), g.current = p.current.getBoundingClientRect().width + (0, l.z6)(6), w.current = m.current.getBoundingClientRect().width, P(), Y(), window.addEventListener("scroll", G)), () => {
          V(!1), window.removeEventListener("scroll", G), document.body.classList.remove("has-anchors"), v.current && (0, l.RE)(v.current), A.current && (0, l.RE)(A.current), C.current && (0, l.RE)(C.current)
        }), [d]), (0, o.useEffect)(() => {
          _ ? c.p8.timeline().set(m.current, {
            autoAlpha: 1
          }).fromTo(m.current, {
            y: "-15.6rem"
          }, {
            y: 0,
            duration: 1.5,
            ease: "expo.out"
          }, .9) : m.current && c.p8.to(m.current, {
            autoAlpha: 0,
            duration: .4,
            ease: "power2.out"
          })
        }, [_]), (0, o.useEffect)(() => {
          (0, l.RE)(b.current), m.current && (b.current = c.p8.to(m.current, {
            autoAlpha: H ? 1 : 0,
            duration: .4,
            ease: "power2.out"
          }))
        }, [H]), (0, o.useEffect)(() => {
          m.current && m.current.classList.toggle("a", z)
        }, [z]);
        let Y = () => {
            d.forEach((e, r) => {
              r <= 0 || u.ScrollTrigger.create({
                onEnter: () => {
                  W.current = i.current, i.current = r, F()
                },
                onLeaveBack: () => {
                  W.current = i.current, i.current = r - 1, F()
                },
                start: "top 25%",
                trigger: e.section
              })
            })
          },
          D = () => {
            L.current = !1, y.current && !N.current && (C.current && (0, l.RE)(C.current), A.current && (0, l.RE)(A.current), v.current = c.p8.timeline(), 1024 > !window.innerWidth && R.current.forEach(e => {
              v.current.set(e, {
                pointerEvents: "all"
              }, 0)
            }), v.current.to([f.current.querySelectorAll("span"), q.current[i.current].chars], {
              autoAlpha: 0,
              duration: 0,
              ease: "none",
              stagger: -.045
            }).to(m.current, {
              duration: 1.2,
              ease: "expo.inOut",
              width: window.innerWidth < 1024 ? w.current : "auto"
            }, "<"), 1024 > !window.innerWidth && T.current.forEach((e, r) => {
              v.current.to(e.chars, {
                autoAlpha: 1,
                duration: 0,
                ease: "none",
                onStart: () => {
                  c.p8.effects.blink(e.chars)
                },
                stagger: .05
              }, 0 === r ? (q.current[i.current].chars.length + 4) * .05 : ">-=38%")
            }))
          },
          Z = () => {
            if (L.current = !0, !y.current || N.current) return;
            v.current && (0, l.RE)(v.current), A.current && (0, l.RE)(A.current);
            let e = g.current + x.current[i.current];
            C.current = c.p8.timeline({
              onComplete: () => {
                L.current = !1
              }
            }), k.current.innerHTML = i.current + 1, 1024 > !window.innerWidth && R.current.forEach(e => {
              C.current.set(e, {
                pointerEvents: "none"
              })
            }), C.current.set(E.current, {
              display: "none"
            }).set(E.current[i.current], {
              display: "block"
            }).to(m.current, {
              duration: 1.2,
              ease: "expo.inOut",
              width: e
            }, .045).to([f.current.querySelectorAll("span"), q.current[i.current].chars], {
              autoAlpha: 1,
              duration: 0,
              ease: "none",
              stagger: .05
            }, "-=0.6"), 1024 > !window.innerWidth && T.current.forEach(e => {
              C.current.to(e.chars, {
                autoAlpha: 0,
                duration: 0,
                ease: "none",
                stagger: -.045
              }, 0)
            })
          },
          F = () => {
            if (j.current || N.current) return;
            A.current && (A.current.kill(), A.current.seek(A.current.endTime()));
            let e = g.current + x.current[i.current];
            A.current = c.p8.timeline(), A.current.to([f.current.querySelectorAll("span"), q.current[W.current].chars], {
              autoAlpha: 0,
              duration: 0,
              ease: "none",
              stagger: -.045
            }).call(() => {
              k.current.innerHTML = i.current + 1
            }).set(E.current, {
              display: "none"
            }).set(E.current[i.current], {
              display: "block"
            }).to([f.current.querySelectorAll("span"), q.current[i.current].chars], {
              autoAlpha: 1,
              duration: 0,
              ease: "none",
              stagger: .05
            }).to(m.current, {
              duration: .6,
              ease: "power2.out",
              width: e
            }, "0.5"), R.current.forEach(e => {
              A.current.to(e, {
                pointerEvents: "none"
              }, 0)
            })
          },
          G = () => {
            !y.current && window.scrollY > 400 ? (y.current = !0, j.current || N.current || Z()) : y.current && window.scrollY < 400 && (j.current || N.current || D(), y.current = !1)
          },
          I = e => e < .5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2,
          J = e => {
            if (window.innerWidth < 1024) return;
            N.current = !0, S.current || (S.current = d[d.length - 1].section.getBoundingClientRect().top);
            let r = Math.abs(d[e].section.getBoundingClientRect().top) / S.current;
            B && B.stop(), B && B.scrollTo(d[e].section, {
              duration: Math.max(1.8 * r, 1),
              easing: I,
              force: !0,
              onComplete: () => {
                B && B.start(), N.current = !1, L.current && Z()
              }
            })
          },
          K = e => {
            window.innerWidth < 1024 || c.p8.effects.blink(T.current[e].chars)
          },
          P = () => {
            M.current = t(2392), T.current = M.current({
              target: R.current,
              by: "chars"
            }), q.current = M.current({
              target: E.current,
              by: "chars"
            }), c.p8.set(f.current.querySelectorAll("span"), {
              autoAlpha: 0
            }), q.current.forEach(e => {
              c.p8.set(e.chars, {
                autoAlpha: 0
              })
            }), window.innerWidth < 1024 && (k.current.innerHTML = i.current + 1, c.p8.set(R.current, {
              display: "none"
            }))
          };
        return d.length ? (0, n.jsxs)("section", {
          className: "anchors bg-white lg:cursor-pointer fixed flex font-body-mono gap-[1rem] h-[5.6rem] lg:h-[6.6rem] items-center leading-[1.8] left-container-mobile md:left-container opacity-0 lg:pl-[8.4rem] lg:pr-[2.2rem] rounded-12 text-10 text-dark_grey top-container-mobile md:top-container tracking-0.05 uppercase w-[5.6rem] lg:w-auto z-anchors transition-bg duration-global ease-out ".concat(O ? "mt-[70px] lg:mt-[45px]" : ""),
          onMouseEnter: () => {
            window.innerWidth < 1024 || (D(), j.current = !0)
          },
          onMouseLeave: () => {
            window.innerWidth < 1024 || (Z(), j.current = !1)
          },
          ref: m,
          children: [d.map((e, r) => (0, n.jsx)("div", {
            "data-anchor": (0, l.lV)(e.title),
            className: "cursor-pointer opacity-0 lg:opacity-100",
            onClick: () => J(r),
            onMouseEnter: () => K(r),
            ref: e => {
              R.current[r] = e
            },
            children: e.title
          }, "anchor-link-".concat(r))), (0, n.jsx)("div", {
            className: "absolute flex h-full left-0 pl-[6.8rem] lg:pl-[8.4rem] pointer-events-none pr-[1.8rem] lg:pr-[2.2rem] top-0",
            ref: p,
            children: (0, n.jsxs)("div", {
              className: "flex gap-[0.6rem] items-center",
              children: [(0, n.jsxs)("div", {
                className: "flex gap-[0.6rem] items-center",
                ref: f,
                children: [(0, n.jsxs)("div", {
                  className: "flex",
                  children: [(0, n.jsx)("span", {
                    ref: k,
                    children: "0"
                  }), (0, n.jsx)("span", {
                    children: "/"
                  }), (0, n.jsx)("span", {
                    children: d.length
                  })]
                }), (0, n.jsx)("span", {
                  children: (0, n.jsx)("div", {
                    className: "bg-black h-[0.2rem] rounded-full w-[0.2rem]"
                  })
                })]
              }), d.map((e, r) => (0, n.jsx)("div", {
                className: "hidden",
                ref: e => {
                  E.current[r] = e
                },
                children: e.title
              }, "anchor-item-".concat(r)))]
            })
          })]
        }) : ""
      }
    }
  }
]);