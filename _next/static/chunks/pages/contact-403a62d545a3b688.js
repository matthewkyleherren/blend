(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9335], {
    1382: function(e, l, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push(["/contact", function() {
        return i(4126)
      }])
    },
    4126: function(e, l, i) {
      "use strict";
      i.r(l), i.d(l, {
        __N_SSP: function() {
          return m
        },
        default: function() {
          return x
        }
      });
      var a = i(5893),
        n = i(9684),
        t = i(2473),
        s = i.n(t),
        o = i(2289),
        d = i(6374),
        r = i(8964),
        c = i(6620),
        u = i(3158),
        h = i(6217),
        p = i(3205),
        m = !0;

      function x(e) {
        let {
          page: l,
          footer: i
        } = e;
        return (0, a.jsxs)(h.Z, {
          index: 0,
          translated: !1,
          children: [(0, a.jsxs)("section", {
            className: "flex flex-col items-center py-40 lg:py-72",
            children: [(0, a.jsx)("h1", {
              className: "".concat(s().title, " text-center"),
              children: l.title
            }), (0, a.jsx)(o.Z, {
              width: {
                desktop: "63.82%",
                mobile: "89.33%"
              },
              colorCross: "#575349",
              colorLine: "#edeceb",
              marginBottom: {
                desktop: "4.4em",
                mobile: "4.3em"
              }
            }), (0, a.jsx)(d.Z, {
              title: l.formTitle,
              subjectField: {
                label: l.subjectField.label,
                options: l.subjectField.options.map(e => e.label),
                placeholder: n.Wx.fromNullable(l.subjectField.placeholder)
              },
              nameField: {
                label: l.nameField.label,
                placeholder: n.Wx.fromNullable(l.nameField.placeholder)
              },
              emailField: {
                label: l.emailField.label,
                placeholder: n.Wx.fromNullable(l.emailField.placeholder)
              },
              phoneField: {
                label: l.phoneField.label,
                placeholder: n.Wx.fromNullable(l.phoneField.placeholder)
              },
              zipcodeField: {
                label: l.zipcodeField.label,
                placeholder: n.Wx.fromNullable(l.zipcodeField.placeholder)
              },
              messageField: {
                label: l.messageField.label,
                placeholder: n.Wx.fromNullable(l.messageField.placeholder)
              },
              mailingListField: {
                label: l.mailingListField.label
              },
              marketingField: {
                label: l.marketingField.label
              },
              privacyField: {
                label: l.privacyField.label
              }
            }), l.departments.map(e => (0, a.jsxs)("div", {
              className: s().department,
              children: [(0, a.jsx)("h2", {
                children: e.title
              }), (0, a.jsxs)("div", {
                className: s().departmentInfos,
                children: [e.openingsDays ? (0, a.jsx)("span", {
                  children: e.openingsDays
                }) : null, e.openingsHours ? (0, a.jsx)("span", {
                  children: e.openingsHours
                }) : null, e.email ? (0, a.jsx)("a", {
                  href: "mailto:".concat(e.email),
                  children: e.email
                }) : null]
              }), e.button ? (0, a.jsx)("div", {
                children: (0, r.EQ)(e.buttonVariant).with("plain", () => (0, a.jsx)(b, {
                  data: e.button
                })).with("solid", () => (0, a.jsx)(j, {
                  data: e.button
                })).otherwise(() => null)
              }) : null]
            }, e.id)), l.socials.length > 0 ? (0, a.jsxs)("div", {
              className: s().sectionContactContainer,
              children: [(0, a.jsx)("h2", {
                children: l.socialsTitle
              }), (0, a.jsx)("div", {
                className: s().socialMediaContainer,
                children: l.socials.map(e => (0, a.jsx)(p.Z, {
                  href: e.url,
                  target: e.target,
                  children: e.title
                }, e.id))
              })]
            }) : null]
          }), i && (0, a.jsx)(u.Z, {
            data: i,
            version: "default"
          })]
        })
      }

      function b(e) {
        let {
          data: l
        } = e;
        return (0, a.jsx)(c.U, {
          data: l,
          className: s().plainButton
        })
      }

      function j(e) {
        let {
          data: l
        } = e;
        return (0, a.jsxs)(c.U, {
          data: l,
          className: s().solidButton,
          children: [(0, a.jsx)("span", {
            children: l.title
          }), (0, a.jsxs)("svg", {
            viewBox: "0 0 7 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, a.jsx)("path", {
              d: "M3.76684 0.820212V7.96343M3.76684 7.96343L1 5.19659M3.76684 7.96343L6.53368 5.19659",
              stroke: "#575349"
            }), (0, a.jsx)("line", {
              x1: "1",
              y1: "10.6924",
              x2: "6.56934",
              y2: "10.6924",
              stroke: "#575349"
            })]
          })]
        })
      }
    }
  },
  function(e) {
    e.O(0, [1894, 6217, 3158, 9648, 2888, 9774, 179], function() {
      return e(e.s = 1382)
    }), _N_E = e.O()
  }
]);