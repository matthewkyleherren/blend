"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8431], {
    8431: function(e, t, a) {
      a.r(t);
      var r = a(5893),
        n = a(753),
        l = a(7294),
        o = a(6038),
        c = a(6546),
        s = a.n(c),
        i = a(3205),
        p = a(7118),
        d = a(1100),
        u = a(7062);
      t.default = e => {
        var t;
        let {
          item: a,
          context: c
        } = e, i = null !== (t = c.posts) && void 0 !== t ? t : [], p = Array.from(new Set(i.flatMap(e => e.attributes.tags.map(e => e.name)))), [d, f] = (0, l.useState)(null), [h, x] = (0, l.useState)(i), v = (0, l.useRef)([]), w = e => {
          "page-popup-fetching" === e.type && document.body.classList.add("waiting"), "page-popup-fetched" === e.type && document.body.classList.remove("waiting")
        };
        return (0, l.useEffect)(() => {
          s().refresh();
          let e = v.current.filter(e => null !== e);
          e && e.length > 0 && o.ZP.fromTo(e, {
            alpha: 0
          }, {
            alpha: 1,
            delay: .1,
            duration: .8,
            ease: "power2.out",
            stagger: .05
          })
        }, [h]), (0, l.useEffect)(() => (window.addEventListener("page-popup-fetching", w), window.addEventListener("page-popup-fetched", w), () => {
          window.removeEventListener("page-popup-fetching", w), window.removeEventListener("page-popup-fetched", w)
        }), []), (0, r.jsx)(g, {
          isWhite: "White" === a.backgroundColor.color,
          children: (0, r.jsxs)("section", {
            className: "pb-[14.4rem] lg:pb-[17.2rem] ".concat("White" === a.backgroundColor.color ? "bg-white" : "bg-light_beige"),
            children: [(0, r.jsx)("div", {
              className: "w-full px-[1.2rem] md:px-container",
              children: (0, r.jsx)(n.Z, {
                mode: "dark"
              })
            }), (0, r.jsx)(u.x, {
              activeFilter: d,
              filters: p,
              onChange: e => {
                d !== e && (f(e), o.ZP.to(v.current, {
                  alpha: 0,
                  duration: .2,
                  ease: "power2.out",
                  onComplete: () => {
                    null === e ? x(i) : x(i.filter(t => t.attributes.tags.find(t => {
                      let {
                        name: a
                      } = t;
                      return a === e
                    })))
                  }
                }))
              }
            }), (0, r.jsx)("div", {
              className: "grid grid-cols-12 gap-x-10 gap-y-48 lg:gap-y-[10.4rem] px-[1.2rem] lg:px-container mt-60 lg:mt-[8rem]",
              children: h && h.map((e, t) => {
                switch (!0) {
                  case t % 8 == 0 || t % 8 == 1 || t % 8 == 2:
                    return (0, r.jsx)("div", {
                      className: "".concat(t % 8 == 0 ? "col-span-full lg:col-span-6" : "col-span-full md:col-span-6 lg:col-span-3"),
                      ref: e => {
                        v.current[t] = e
                      },
                      children: (0, r.jsx)(m, {
                        item: e,
                        isLarge: t % 8 == 0
                      })
                    }, "post-card-".concat(t));
                  case t % 8 == 3 || t % 8 == 4:
                    return (0, r.jsx)("div", {
                      className: "col-span-full lg:col-span-6",
                      ref: e => {
                        v.current[t] = e
                      },
                      children: (0, r.jsx)(m, {
                        item: e,
                        isLarge: !0
                      })
                    }, "post-card-".concat(t));
                  case t % 8 == 5 || t % 8 == 6 || t % 8 == 7:
                    return (0, r.jsx)("div", {
                      className: "col-span-full ".concat(t % 8 == 7 ? "col-span-full lg:col-span-6" : "col-span-full md:col-span-6 lg:col-span-3"),
                      ref: e => {
                        v.current[t] = e
                      },
                      children: (0, r.jsx)(m, {
                        item: e,
                        isLarge: t % 8 == 7
                      })
                    }, "post-card-".concat(t))
                }
              })
            })]
          })
        })
      };
      let g = e => {
          let {
            isWhite: t,
            children: a
          } = e;
          return t ? (0, r.jsx)(p.Z, {
            children: a
          }) : a
        },
        m = (0, l.forwardRef)((e, t) => {
          let {
            item: a,
            isLarge: n
          } = e;
          return (0, r.jsx)("div", {
            ref: t,
            children: (0, r.jsxs)(i.Z, {
              className: "flex flex-col gap-y-[2.4rem] lg:gap-y-48 w-full cursor-pointer group",
              href: "/post/" + a.attributes.slug,
              onClick: e => {
                e.preventDefault(), window.dispatchEvent(new CustomEvent("open-popup", {
                  detail: {
                    name: "global",
                    type: "post",
                    uid: a.id
                  }
                }))
              },
              children: [(0, r.jsx)("div", {
                className: "relative h-0 pb-[100%] w-full rounded-18 overflow-hidden",
                children: (0, r.jsx)("div", {
                  className: "absolute top-0 left-0 w-full h-full xl:group-hover:scale-[1.03] transition-transform duration-500 ease-out",
                  children: a.attributes.mainImage.data && (0, r.jsx)(d.p, {
                    image: a.attributes.mainImage.data,
                    className: "w-full h-full object-cover",
                    sizes: n ? "(max-width: 768px) 96vw, 47vw" : "(max-width: 768px) 96vw, 24vw",
                    fallbackAlt: ""
                  })
                })
              }), (0, r.jsxs)("div", {
                className: "w-[28rem] px-[0.8rem] lg:px-10",
                children: [(0, r.jsxs)("div", {
                  className: "mb-[0.4rem] lg:mb-8 flex flex-wrap items-center gap-x-[0.6rem]",
                  children: [(0, r.jsx)("span", {
                    className: "text-dark_grey font-body-mono text-10 leading-[180%] uppercase tracking-0.05",
                    children: a.attributes.author
                  }), a.attributes.tags.length > 0 && (0, r.jsx)("span", {
                    className: "w-[0.2rem] h-[0.2rem] rounded-full bg-dark_grey"
                  }), a.attributes.tags.map((e, t) => (0, r.jsx)("span", {
                    className: "text-dark_grey font-body-mono text-10 leading-[180%] uppercase tracking-0.05",
                    children: e.name
                  }, "".concat(a.name, "-post-tag-").concat(t)))]
                }), (0, r.jsx)("div", {
                  className: "font-body text-[1.7rem] lg:text-20 text-dark_grey leading-[141%] lg:leading-[130%] -tracking-0.01 lg:-tracking-0.03",
                  children: a.attributes.title
                })]
              })]
            })
          })
        })
    },
    7062: function(e, t, a) {
      a.d(t, {
        x: function() {
          return n
        }
      });
      var r = a(5893);

      function n(e) {
        let {
          activeFilter: t,
          filters: a,
          onChange: n
        } = e;
        return (0, r.jsxs)("div", {
          className: "flex gap-x-[1.8rem] mt-12 lg:mt-[2.4rem] overflow-x-auto u-nsb w-full lg:flex-wrap",
          children: [(0, r.jsx)("div", {
            className: "shrink-0 grow-0 pl-[1.2rem] lg:pl-[2.3rem] font-body-mono font-12 leading-[200%] uppercase tracking-0.03 text-dark_grey cursor-pointer ".concat(null === t ? "opacity-100" : "opacity-50"),
            onClick: () => n(null),
            children: "All"
          }), a.map((e, a) => (0, r.jsx)("div", {
            className: "font-body-mono whitespace-nowrap font-12 leading-[200%] uppercase tracking-0.03 text-dark_grey hover:opacity-100 transition-opacity duration-500 cursor-pointer last-of-type:pr-[1.2rem] lg:last-of-type:pr-[2.3rem] ".concat(t === e ? "opacity-100" : "opacity-50"),
            onClick: () => n(e),
            children: e
          }, "".concat(e, "-").concat(a)))]
        })
      }
    },
    7118: function(e, t, a) {
      var r = a(5893),
        n = a(7294),
        l = a(6546),
        o = a(146),
        c = a(188);
      t.Z = e => {
        let {
          children: t,
          sticky: a = !1,
          zIndex: s = 0
        } = e, i = (0, n.useRef)(null), p = (0, n.useRef)(null), d = (0, o.o)(e => e.headerLoaded), u = (0, o.o)(e => e.setHeaderDark);
        return (0, n.useEffect)(() => {
          if (!d) return;
          let e = document.querySelector(".header");
          return a ? p.current = l.ScrollTrigger.create({
            trigger: i.current,
            start: () => "top+=".concat(window.innerHeight, " top+=").concat(e.getBoundingClientRect().bottom),
            end: () => "bottom-=".concat((0, c.z6)(10), " top+=").concat(e.getBoundingClientRect().bottom),
            onEnter: () => {
              u(!0)
            },
            onLeave: () => {
              u(!1)
            },
            onEnterBack: () => {
              u(!0)
            },
            onLeaveBack: () => {
              u(!1)
            }
          }) : p.current = l.ScrollTrigger.create({
            trigger: i.current,
            start: () => "top top+=".concat(e.getBoundingClientRect().bottom),
            end: () => "bottom top+=".concat(e.getBoundingClientRect().bottom),
            onEnter: () => {
              u(!0)
            },
            onLeave: () => {
              u(!1)
            },
            onEnterBack: () => {
              u(!0)
            },
            onLeaveBack: () => {
              u(!1)
            }
          }), () => {
            p.current && (p.current.kill(), p.current = null), u(!1)
          }
        }, [d]), (0, r.jsx)("div", {
          ref: i,
          style: {
            zIndex: s
          },
          className: "relative w-full",
          children: t
        })
      }
    }
  }
]);