(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8074], {
    8074: function(e, t, r) {
      "use strict";
      r.r(t);
      var n = r(5893),
        o = r(7118),
        l = r(753),
        c = r(9139);
      let i = e => {
        let {
          isWhite: t,
          isPost: r,
          zIndex: l,
          children: c
        } = e;
        return t && !r ? (0, n.jsx)(o.Z, {
          zIndex: l,
          children: c
        }) : c
      };
      t.default = e => {
        let {
          item: t,
          items: r,
          index: o,
          context: l
        } = e, c = "block-content_default";
        return "big_title" === t.variant && (c = "block-content_contentBigTitle"), (0, n.jsx)(i, {
          zIndex: r.length - o,
          isPost: l.isPost || l.popup,
          isWhite: "White" === t.backgroundColor.color,
          children: (0, n.jsx)("section", {
            style: {
              zIndex: r.length - o
            },
            className: "relative s-content",
            children: (0, n.jsxs)(d, {
              item: t,
              wrapperClass: c,
              children: [(0, n.jsx)("div", {
                className: "dot-popup absolute top-0 left-0 w-full h-full bg-dots bg-size-dots bg-repeat opacity-40 z-0 pointer-events-none"
              }), (() => {
                switch (t.variant) {
                  case "default":
                    return (0, n.jsx)(a, {
                      item: t
                    });
                  case "big_title":
                    return (0, n.jsx)(s, {
                      item: t
                    })
                }
              })()]
            })
          })
        })
      };
      let a = e => {
          let {
            item: t
          } = e;
          return (0, n.jsxs)(n.Fragment, {
            children: [t.contentLeft && (0, n.jsx)("div", {
              className: "content-left \n      ".concat(t.addSeparators ? "pt-[4.3rem] lg:pt-[8rem] lg:pb-[22.4rem]" : "post-wrapper:pt-40 lg:post-wrapper:pt-[8rem] pt-[22.4rem] popup:!pb-0 lg:pb-100", "\n      popup:x-[pb-120,pl-0] lg:popup:pt-[8rem]\n      lg:pl-20 col-start-1 col-end-13 lg:col-end-7 block-content"),
              children: (0, n.jsx)(c.Z, {
                content: t.contentLeft
              })
            }), (0, n.jsx)("div", {
              className: "content-right \n      ".concat(t.addSeparators ? "pt-[2.4rem] lg:pt-[8rem] pb-[16rem] lg:pb-[22.4rem]" : "pt-40 lg:pt-[8rem] popup:pt-40 lg:pb-100", " \n      pb-[6.4rem] lg:popup:pb-120 popup:pr-0 lg:popup:pt-[8rem]\n      lg:pr-20 lg:col-end-12 col-start-1 col-end-13 lg:col-start-7 popup:col-end-13 block-content"),
              children: (0, n.jsx)(c.Z, {
                content: t.contentRight
              })
            })]
          })
        },
        s = e => {
          let {
            item: t
          } = e;
          return (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("div", {
              className: "".concat(t.addSeparators ? "md:pb-50" : "pt-100 lg:pt-[12rem] lg:pb-[33rem]", " xl:pb-20\n    col-start-1 col-end-13 md:col-end-4 heading-36 md:heading-60 leading-[94%] md:leading-[90%] xl:pl-20"),
              children: (0, n.jsx)(c.Z, {
                content: t.contentLeft
              })
            }), (0, n.jsx)("div", {
              className: "".concat(t.addSeparators ? "pb-30 md:pb-50" : "pt-40 md:pt-100 lg:pt-[12rem] pb-100 lg:pb-[33rem]", " \n    col-start-1 col-end-13 md:col-start-6 heading-36 md:heading-60 leading-[94%] md:leading-[90%] xl:pr-20\n    ").concat("White" === t.backgroundColor.color ? "text-light_beige" : "Beige light" === t.backgroundColor.color ? "text-dark_beige" : ("Beige dark" === t.backgroundColor.color || t.backgroundColor.color, "text-white"), "\n    "),
              children: (0, n.jsx)(c.Z, {
                content: t.contentRight
              })
            })]
          })
        },
        d = e => {
          let {
            item: t,
            wrapperClass: r,
            children: o
          } = e;
          return (0, n.jsxs)("div", {
            className: "relative w-full grid grid-cols-12 gap-x-0 px-container -mt-px pt-px\n      ".concat(r, "\n      popup:bg-transparent ").concat("White" === t.backgroundColor.color ? "bg-white" : "Beige light" === t.backgroundColor.color ? "bg-light_beige" : "Beige dark" === t.backgroundColor.color ? "bg-dark_beige" : "Grey dark" === t.backgroundColor.color ? "bg-dark_grey" : "bg-green", " \n      ").concat("White" === t.backgroundColor.color ? "text-dark_grey" : "Beige light" === t.backgroundColor.color ? "text-dark_grey" : ("Beige dark" === t.backgroundColor.color || t.backgroundColor.color, "text-white")),
            children: [t.addSeparators && (0, n.jsx)("div", {
              className: "col-span-full",
              children: (0, n.jsx)(l.Z, {
                mode: "White" === t.backgroundColor.color ? "dark" : "light"
              })
            }), o, t.addSeparators && (0, n.jsx)("div", {
              className: "col-span-full",
              children: (0, n.jsx)(l.Z, {
                mode: "White" === t.backgroundColor.color ? "dark" : "light"
              })
            })]
          })
        }
    },
    7118: function(e, t, r) {
      "use strict";
      var n = r(5893),
        o = r(7294),
        l = r(6546),
        c = r(146),
        i = r(188);
      t.Z = e => {
        let {
          children: t,
          sticky: r = !1,
          zIndex: a = 0
        } = e, s = (0, o.useRef)(null), d = (0, o.useRef)(null), p = (0, c.o)(e => e.headerLoaded), u = (0, c.o)(e => e.setHeaderDark);
        return (0, o.useEffect)(() => {
          if (!p) return;
          let e = document.querySelector(".header");
          return r ? d.current = l.ScrollTrigger.create({
            trigger: s.current,
            start: () => "top+=".concat(window.innerHeight, " top+=").concat(e.getBoundingClientRect().bottom),
            end: () => "bottom-=".concat((0, i.z6)(10), " top+=").concat(e.getBoundingClientRect().bottom),
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
          }) : d.current = l.ScrollTrigger.create({
            trigger: s.current,
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
            d.current && (d.current.kill(), d.current = null), u(!1)
          }
        }, [p]), (0, n.jsx)("div", {
          ref: s,
          style: {
            zIndex: a
          },
          className: "relative w-full",
          children: t
        })
      }
    },
    9139: function(e, t, r) {
      "use strict";
      r.d(t, {
        Z: function() {
          return i
        }
      });
      var n = r(5893),
        o = r(230),
        l = r(8406),
        c = r.n(l);

      function i(e) {
        let {
          content: t,
          blocks: r,
          className: l
        } = e;
        return (0, n.jsx)("div", {
          className: [c().root, l].join(" "),
          children: (0, n.jsx)(o.i, {
            content: t,
            blocks: r
          })
        })
      }
    },
    8406: function(e) {
      e.exports = {
        root: "StrapiRichText_root__LUiYo"
      }
    },
    230: function(e, t, r) {
      "use strict";
      r.d(t, {
        i: function() {
          return g
        }
      });
      var n = r(5893),
        o = r(7294);
      let l = ({
          text: e,
          ...t
        }) => {
          let {
            modifiers: r,
            missingModifierTypes: o
          } = u();
          return Object.keys(t).reduce((e, l) => {
            if (!t[l]) return e;
            let c = r[l];
            return c ? (0, n.jsx)(c, {
              children: e
            }) : (o.includes(l) || (console.warn(`[@strapi/block-react-renderer] No component found for modifier "${l}"`), o.push(l)), e)
          }, (0, n.jsx)(n.Fragment, {
            children: e
          }))
        },
        c = ["image"],
        i = e => {
          let {
            children: t,
            type: r,
            ...n
          } = e;
          if ("code" === r) {
            let t = e => e.reduce((e, r) => "text" === r.type ? e.concat(r.text) : "link" === r.type ? e.concat(t(r.children)) : e, "");
            return {
              ...n,
              plainText: t(e.children)
            }
          }
          return n
        },
        a = ({
          content: e
        }) => {
          let {
            children: t,
            type: r,
            ...s
          } = e, {
            blocks: d,
            missingBlockTypes: p
          } = u(), g = d[r];
          if (!g) return p.includes(r) || (console.warn(`[@strapi/block-react-renderer] No component found for block type "${r}"`), p.push(r)), null;
          if (c.includes(r)) return (0, n.jsx)(g, {
            ...s
          });
          if ("paragraph" === r && 1 === t.length && "text" === t[0].type && "" === t[0].text) return (0, n.jsx)("br", {});
          let h = i(e);
          return (0, n.jsx)(g, {
            ...h,
            children: t.map((e, t) => {
              if ("text" === e.type) {
                let {
                  type: r,
                  ...n
                } = e;
                return (0, o.createElement)(l, {
                  ...n,
                  key: t
                })
              }
              return (0, n.jsx)(a, {
                content: e
              }, t)
            })
          })
        },
        s = {
          blocks: {
            paragraph: e => (0, n.jsx)("p", {
              children: e.children
            }),
            quote: e => (0, n.jsx)("blockquote", {
              children: e.children
            }),
            code: e => (0, n.jsx)("pre", {
              children: (0, n.jsx)("code", {
                children: e.plainText
              })
            }),
            heading: ({
              level: e,
              children: t
            }) => {
              switch (e) {
                case 1:
                  return (0, n.jsx)("h1", {
                    children: t
                  });
                case 2:
                  return (0, n.jsx)("h2", {
                    children: t
                  });
                case 3:
                  return (0, n.jsx)("h3", {
                    children: t
                  });
                case 4:
                  return (0, n.jsx)("h4", {
                    children: t
                  });
                case 5:
                  return (0, n.jsx)("h5", {
                    children: t
                  });
                case 6:
                  return (0, n.jsx)("h6", {
                    children: t
                  })
              }
            },
            link: e => (0, n.jsx)("a", {
              href: e.url,
              children: e.children
            }),
            list: e => "ordered" === e.format ? (0, n.jsx)("ol", {
              children: e.children
            }) : (0, n.jsx)("ul", {
              children: e.children
            }),
            "list-item": e => (0, n.jsx)("li", {
              children: e.children
            }),
            image: e => (0, n.jsx)("img", {
              src: e.image.url,
              alt: e.image.alternativeText || void 0
            })
          },
          modifiers: {
            bold: e => (0, n.jsx)("strong", {
              children: e.children
            }),
            italic: e => (0, n.jsx)("em", {
              children: e.children
            }),
            underline: e => (0, n.jsx)("u", {
              children: e.children
            }),
            strikethrough: e => (0, n.jsx)("del", {
              children: e.children
            }),
            code: e => (0, n.jsx)("code", {
              children: e.children
            })
          },
          missingBlockTypes: [],
          missingModifierTypes: []
        },
        d = o.createContext(s),
        p = ({
          children: e,
          value: t = s
        }) => {
          let r = o.useMemo(() => t, [t]);
          return (0, n.jsx)(d.Provider, {
            value: r,
            children: e
          })
        };

      function u() {
        return o.useContext(d)
      }
      let g = e => {
        let t = {
            ...s.blocks,
            ...e.blocks
          },
          r = {
            ...s.modifiers,
            ...e.modifiers
          },
          l = o.useRef([]),
          c = o.useRef([]);
        return (0, n.jsx)(p, {
          value: {
            blocks: t,
            modifiers: r,
            missingBlockTypes: l.current,
            missingModifierTypes: c.current
          },
          children: e.content.map((e, t) => (0, n.jsx)(a, {
            content: e
          }, t))
        })
      }
    }
  }
]);