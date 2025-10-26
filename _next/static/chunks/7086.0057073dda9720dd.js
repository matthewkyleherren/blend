(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7086], {
    7086: function(e, r, t) {
      "use strict";
      t.r(r);
      var n = t(5893),
        i = t(9139);
      r.default = e => {
        let {
          item: r
        } = e;
        return (0, n.jsx)("section", {
          className: "px-container quote",
          children: (0, n.jsxs)("div", {
            className: "flex flex-col items-center justify-center gap-y-[2.4rem] bg-light_beige py-[12.4rem] px-[2.75rem] lg:pt-[16.5rem] lg:pb-[15.5rem] lg:px-[15.3rem] rounded-16",
            children: [(0, n.jsx)("div", {
              className: "font-headings text-[2.4rem] lg:text-30 text-dark_grey font-medium leading-[92%] lg:leading-120 -tracking-0.03 text-center quote-text",
              children: (0, n.jsx)(i.Z, {
                content: r.text
              })
            }), (0, n.jsxs)("div", {
              className: "font-body-mono text-10 text-dark_grey leading-[180%] uppercase tracking-0.05 text-center",
              children: [(0, n.jsx)("div", {
                children: r.author
              }), (0, n.jsx)("div", {
                children: r.job
              })]
            })]
          })
        })
      }
    },
    9139: function(e, r, t) {
      "use strict";
      t.d(r, {
        Z: function() {
          return l
        }
      });
      var n = t(5893),
        i = t(230),
        c = t(8406),
        s = t.n(c);

      function l(e) {
        let {
          content: r,
          blocks: t,
          className: c
        } = e;
        return (0, n.jsx)("div", {
          className: [s().root, c].join(" "),
          children: (0, n.jsx)(i.i, {
            content: r,
            blocks: t
          })
        })
      }
    },
    8406: function(e) {
      e.exports = {
        root: "StrapiRichText_root__LUiYo"
      }
    },
    230: function(e, r, t) {
      "use strict";
      t.d(r, {
        i: function() {
          return h
        }
      });
      var n = t(5893),
        i = t(7294);
      let c = ({
          text: e,
          ...r
        }) => {
          let {
            modifiers: t,
            missingModifierTypes: i
          } = x();
          return Object.keys(r).reduce((e, c) => {
            if (!r[c]) return e;
            let s = t[c];
            return s ? (0, n.jsx)(s, {
              children: e
            }) : (i.includes(c) || (console.warn(`[@strapi/block-react-renderer] No component found for modifier "${c}"`), i.push(c)), e)
          }, (0, n.jsx)(n.Fragment, {
            children: e
          }))
        },
        s = ["image"],
        l = e => {
          let {
            children: r,
            type: t,
            ...n
          } = e;
          if ("code" === t) {
            let r = e => e.reduce((e, t) => "text" === t.type ? e.concat(t.text) : "link" === t.type ? e.concat(r(t.children)) : e, "");
            return {
              ...n,
              plainText: r(e.children)
            }
          }
          return n
        },
        d = ({
          content: e
        }) => {
          let {
            children: r,
            type: t,
            ...o
          } = e, {
            blocks: u,
            missingBlockTypes: a
          } = x(), h = u[t];
          if (!h) return a.includes(t) || (console.warn(`[@strapi/block-react-renderer] No component found for block type "${t}"`), a.push(t)), null;
          if (s.includes(t)) return (0, n.jsx)(h, {
            ...o
          });
          if ("paragraph" === t && 1 === r.length && "text" === r[0].type && "" === r[0].text) return (0, n.jsx)("br", {});
          let j = l(e);
          return (0, n.jsx)(h, {
            ...j,
            children: r.map((e, r) => {
              if ("text" === e.type) {
                let {
                  type: t,
                  ...n
                } = e;
                return (0, i.createElement)(c, {
                  ...n,
                  key: r
                })
              }
              return (0, n.jsx)(d, {
                content: e
              }, r)
            })
          })
        },
        o = {
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
              children: r
            }) => {
              switch (e) {
                case 1:
                  return (0, n.jsx)("h1", {
                    children: r
                  });
                case 2:
                  return (0, n.jsx)("h2", {
                    children: r
                  });
                case 3:
                  return (0, n.jsx)("h3", {
                    children: r
                  });
                case 4:
                  return (0, n.jsx)("h4", {
                    children: r
                  });
                case 5:
                  return (0, n.jsx)("h5", {
                    children: r
                  });
                case 6:
                  return (0, n.jsx)("h6", {
                    children: r
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
        u = i.createContext(o),
        a = ({
          children: e,
          value: r = o
        }) => {
          let t = i.useMemo(() => r, [r]);
          return (0, n.jsx)(u.Provider, {
            value: t,
            children: e
          })
        };

      function x() {
        return i.useContext(u)
      }
      let h = e => {
        let r = {
            ...o.blocks,
            ...e.blocks
          },
          t = {
            ...o.modifiers,
            ...e.modifiers
          },
          c = i.useRef([]),
          s = i.useRef([]);
        return (0, n.jsx)(a, {
          value: {
            blocks: r,
            modifiers: t,
            missingBlockTypes: c.current,
            missingModifierTypes: s.current
          },
          children: e.content.map((e, r) => (0, n.jsx)(d, {
            content: e
          }, r))
        })
      }
    }
  }
]);