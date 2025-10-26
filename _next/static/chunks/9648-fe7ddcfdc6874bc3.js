(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9648], {
    6374: function(e, t, n) {
      "use strict";
      n.d(t, {
        Z: function() {
          return d
        }
      });
      var r = n(5893),
        i = n(9457),
        o = n.n(i),
        a = n(987),
        s = n(7294),
        l = n(6398),
        c = n.n(l);

      function u(e) {
        let {
          id: t,
          name: n,
          defaultChecked: i,
          color: o
        } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("input", {
            className: c().checkBox,
            type: "checkbox",
            id: t,
            name: n,
            defaultChecked: i,
            style: {
              "--checkbox-color": o
            }
          }), (0, r.jsx)("svg", {
            className: c().svg,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, r.jsx)("circle", {
              cx: "8",
              cy: "8",
              r: "7.5",
              stroke: o,
              "stroke-dasharray": "1 1"
            })
          })]
        })
      }
      var h = n(9684),
        m = n(8964);

      function d(e) {
        let {
          title: t,
          emailField: n,
          phoneField: i,
          messageField: l,
          zipcodeField: c,
          nameField: d,
          subjectField: g,
          initialValues: f,
          privacyField: x,
          marketingField: _,
          mailingListField: v
        } = e, y = (0, a.s)(e => e.currentDevice), [j, b] = (0, s.useState)(h.jw.NotAsked()), k = async e => {
          e.preventDefault(), b(h.jw.Loading());
          let t = new FormData(e.currentTarget),
            n = {
              subject: t.get("subject") || "",
              name: t.get("name"),
              email: t.get("email"),
              phone: t.get("phone"),
              zipcode: t.get("zipcode"),
              orderStatus: t.get("orderStatus") || "",
              message: t.get("message") || "",
              mailingList: "on" === t.get("mailingList"),
              marketing: "on" === t.get("marketing"),
              privacy: "on" === t.get("privacy")
            },
            r = await h.ol.fromPromise(fetch("/api/contact-message", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(n)
            })).mapOkToResult(e => e.ok ? h.x4.Ok(e) : h.x4.Error(e)).flatMapOk(e => h.ol.fromPromise(e.json()).mapError(() => ({
              message: "An error occured"
            }))).flatMapError(e => e instanceof Response ? h.ol.fromPromise(e.json()).mapError(() => ({
              message: "An error occured"
            })).mapOkToResult(e => h.x4.Error(e)) : h.ol.value(h.x4.Error({
              message: "An error occured"
            })));
          b(h.jw.Done(r))
        }, C = j.match({
          Loading: () => [],
          NotAsked: () => [],
          Done: e => e.match({
            Error: e => e.violations,
            Ok: () => []
          })
        });
        return (0, m.EQ)(j).with(m.P.union(h.jw.P.Done(h.x4.P.Error(m.P._)), h.jw.P.NotAsked, h.jw.P.Loading), e => (0, r.jsxs)("div", {
          className: o().contactFormContainer,
          children: ["Mobile" === y && (0, r.jsx)("h2", {
            children: t
          }), (0, r.jsxs)("form", {
            noValidate: !0,
            className: o().formContainer,
            onSubmit: k,
            children: ["Desktop" === y && (0, r.jsx)("h3", {
              style: {
                marginBottom: 0
              },
              children: t
            }), (0, r.jsx)("p", {
              className: o().requiredText,
              children: "*required field"
            }), (0, r.jsxs)("div", {
              className: o().inputContainer,
              children: [(0, r.jsxs)("label", {
                htmlFor: "subject",
                children: [g.label, " ", (0, r.jsx)("span", {
                  style: {
                    color: "red",
                    fontSize: "1.2em"
                  },
                  children: "*"
                })]
              }), (0, r.jsxs)("div", {
                className: o().selectBox,
                children: [(0, r.jsxs)("select", {
                  className: o().selectInput,
                  id: "subject",
                  name: "subject",
                  required: !0,
                  defaultValue: "",
                  children: [(0, r.jsx)("option", {
                    value: "",
                    disabled: !0,
                    children: g.placeholder.getOr("Select an option")
                  }), g.options.map(e => (0, r.jsx)("option", {
                    value: e,
                    children: e
                  }, e))]
                }), (0, r.jsx)("svg", {
                  className: o().arrow,
                  viewBox: "0 0 6 6",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: (0, r.jsx)("path", {
                    d: "M3 5.06236L0 0.950195H6L3 5.06236Z",
                    fill: "#A39B8B"
                  })
                })]
              }), C.filter(e => "subject" === e.path).map(e => (0, r.jsx)(p, {
                children: e.message
              }, e.message))]
            }), (0, r.jsxs)("div", {
              className: o().inputContainer,
              children: [(0, r.jsxs)("label", {
                htmlFor: "name",
                children: [d.label, " ", (0, r.jsx)("span", {
                  style: {
                    color: "red",
                    fontSize: "1.2em"
                  },
                  children: "*"
                })]
              }), (0, r.jsx)("input", {
                type: "text",
                required: !0,
                placeholder: d.placeholder.getOr(""),
                id: "name",
                name: "name",
                defaultValue: null == f ? void 0 : f.name
              }), C.filter(e => "name" === e.path).map(e => (0, r.jsx)(p, {
                children: e.message
              }, e.message))]
            }), (0, r.jsxs)("div", {
              className: o().inputContainer,
              children: [(0, r.jsxs)("label", {
                htmlFor: "email",
                children: [n.label, " ", (0, r.jsx)("span", {
                  style: {
                    color: "red",
                    fontSize: "1.2em"
                  },
                  children: "*"
                })]
              }), (0, r.jsx)("input", {
                type: "email",
                id: "email",
                name: "email",
                required: !0,
                placeholder: n.placeholder.getOr(""),
                defaultValue: null == f ? void 0 : f.email
              }), C.filter(e => "email" === e.path).map(e => (0, r.jsx)(p, {
                children: e.message
              }, e.message))]
            }), (0, r.jsxs)("div", {
              className: o().inputContainer,
              children: [(0, r.jsx)("label", {
                htmlFor: "phone",
                children: i.label
              }), (0, r.jsx)("input", {
                type: "text",
                id: "phone",
                name: "phone",
                placeholder: i.placeholder.getOr(""),
                defaultValue: null == f ? void 0 : f.phone
              }), C.filter(e => "phone" === e.path).map(e => (0, r.jsx)(p, {
                children: e.message
              }, e.message))]
            }), (0, r.jsxs)("div", {
              className: o().inputContainer,
              children: [(0, r.jsxs)("label", {
                htmlFor: "zipcode",
                children: [c.label, " ", (0, r.jsx)("span", {
                  style: {
                    color: "red",
                    fontSize: "1.2em"
                  },
                  children: "*"
                })]
              }), (0, r.jsx)("input", {
                type: "text",
                id: "zipcode",
                name: "zipcode",
                required: !0,
                placeholder: c.placeholder.getOr(""),
                defaultValue: null == f ? void 0 : f.zipcode
              }), C.filter(e => "zipcode" === e.path).map(e => (0, r.jsx)(p, {
                children: e.message
              }, e.message))]
            }), (0, r.jsxs)("div", {
              className: o().inputContainer,
              children: [(0, r.jsxs)("label", {
                htmlFor: "message",
                children: [l.label, " ", (0, r.jsx)("span", {
                  style: {
                    color: "red",
                    fontSize: "1.2em"
                  },
                  children: "*"
                })]
              }), (0, r.jsx)("textarea", {
                required: !0,
                id: "message",
                name: "message",
                placeholder: l.placeholder.getOr("")
              }), C.filter(e => "message" === e.path).map(e => (0, r.jsx)(p, {
                children: e.message
              }, e.message))]
            }), (0, r.jsxs)("div", {
              children: [(0, r.jsxs)("div", {
                className: o().checkBoxContainer,
                children: [(0, r.jsx)(u, {
                  id: "mailingList",
                  name: "mailingList",
                  color: "#61574E"
                }), (0, r.jsx)("label", {
                  htmlFor: "mailingList",
                  style: {
                    color: "#61574E"
                  },
                  children: v.label
                })]
              }), C.filter(e => "mailingList" === e.path).map(e => (0, r.jsx)(p, {
                children: e.message
              }, e.message))]
            }), (0, r.jsxs)("div", {
              children: [(0, r.jsxs)("div", {
                className: o().checkBoxContainer,
                children: [(0, r.jsx)(u, {
                  id: "marketing",
                  name: "marketing",
                  color: "#A39B8B"
                }), (0, r.jsxs)("label", {
                  htmlFor: "marketing",
                  style: {
                    color: "#A39B8B",
                    fontSize: "Desktop" === y ? "0.98em" : "0.82em"
                  },
                  children: [_.label, " ", " ", (0, r.jsx)("a", {
                    href: "/privacy-policy",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    style: {
                      color: "#A39B8B",
                      textDecoration: "underline"
                    },
                    children: "Privacy Policy"
                  }), " ", (0, r.jsx)("a", {
                    href: "/terms-service",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    style: {
                      color: "#A39B8B",
                      textDecoration: "underline"
                    },
                    children: "Terms of Service"
                  })]
                })]
              }), C.filter(e => "marketing" === e.path).map(e => (0, r.jsx)(p, {
                children: e.message
              }, e.message))]
            }), (0, r.jsxs)("div", {
              children: [(0, r.jsxs)("div", {
                className: o().checkBoxContainer,
                style: {
                  marginBottom: "0.1em"
                },
                children: [(0, r.jsx)(u, {
                  id: "privacy",
                  name: "privacy",
                  color: "#A39B8B"
                }), (0, r.jsxs)("label", {
                  htmlFor: "privacy",
                  style: {
                    color: "#A39B8B",
                    fontSize: "Desktop" === y ? "0.98em" : "0.82em"
                  },
                  children: [x.label, " ", (0, r.jsx)("span", {
                    style: {
                      color: "red",
                      fontSize: "1.2em"
                    },
                    children: "*"
                  })]
                })]
              }), C.filter(e => "privacy" === e.path).map(e => (0, r.jsx)(p, {
                children: e.message
              }, e.message))]
            }), (0, r.jsx)("button", {
              type: "submit",
              disabled: e.isLoading(),
              children: "Send"
            })]
          })]
        })).with(h.jw.P.Done(h.x4.P.Ok(m.P.select())), e => {
          let {
            message: t
          } = e;
          return (0, r.jsx)("p", {
            className: "my-48 text-12",
            children: t
          })
        }).exhaustive()
      }

      function p(e) {
        let {
          children: t
        } = e;
        return (0, r.jsx)("p", {
          className: "text-[red]",
          children: t
        })
      }
    },
    2289: function(e, t, n) {
      "use strict";
      n.d(t, {
        Z: function() {
          return s
        }
      });
      var r = n(5893),
        i = n(987),
        o = n(247),
        a = n.n(o);

      function s(e) {
        let {
          width: t,
          marginBottom: n,
          marginTop: o,
          colorLine: s,
          colorCross: l
        } = e, c = "Desktop" === (0, i.s)(e => e.currentDevice), u = e => e ? c ? e.desktop : e.mobile : "0";
        return (0, r.jsxs)("div", {
          className: a().separateLine,
          style: {
            borderBottom: "1px solid ".concat(s),
            marginBottom: u(n),
            marginTop: u(o),
            width: u(t)
          },
          children: [(0, r.jsx)("span", {
            style: {
              backgroundColor: l
            }
          }), (0, r.jsx)("span", {
            style: {
              backgroundColor: l
            }
          })]
        })
      }
    },
    6398: function(e) {
      e.exports = {
        checkBox: "checkbox_checkBox__7Bvv0",
        svg: "checkbox_svg__UctMZ"
      }
    },
    9457: function(e) {
      e.exports = {
        contactFormContainer: "customerPortalContactForm_contactFormContainer__lBfid",
        formContainer: "customerPortalContactForm_formContainer__Xh1Q7",
        requiredText: "customerPortalContactForm_requiredText__wl83I",
        inputContainer: "customerPortalContactForm_inputContainer__8TiXQ",
        selectBox: "customerPortalContactForm_selectBox__XRSNw",
        selectInput: "customerPortalContactForm_selectInput__p7wHk",
        arrow: "customerPortalContactForm_arrow__R4Jh0",
        checkBoxContainer: "customerPortalContactForm_checkBoxContainer__F91jG"
      }
    },
    247: function(e) {
      e.exports = {
        separateLine: "separateLine_separateLine__XZlUb"
      }
    },
    2473: function(e) {
      e.exports = {
        customerPortal: "contact_customerPortal__n_Wtj",
        contactContainer: "contact_contactContainer__FR_b7",
        imageContainer: "contact_imageContainer__RBkIF",
        homeButton: "contact_homeButton__XUGgt",
        title: "contact_title__BBhce",
        department: "contact_department__QvR_8",
        departmentInfos: "contact_departmentInfos__w5Ti6",
        plainButton: "contact_plainButton__kvFr0",
        solidButton: "contact_solidButton__aymBA",
        sectionContactContainer: "contact_sectionContactContainer__Bzyyk",
        requestTourContainer: "contact_requestTourContainer__Zcq0z",
        careersSectionContainer: "contact_careersSectionContainer___SPK2",
        mediaAndPressContainer: "contact_mediaAndPressContainer__zhQqS",
        cta: "contact_cta__winZV",
        businessPartnersContainer: "contact_businessPartnersContainer__uUbpv",
        socialMediaContainer: "contact_socialMediaContainer__mRmNr",
        homeButtonDesktop: "contact_homeButtonDesktop__L4YNl",
        desktopImage: "contact_desktopImage__iZgY4"
      }
    },
    8964: function(e, t, n) {
      "use strict";
      n.d(t, {
        EQ: function() {
          return L
        },
        P: function() {
          return E
        }
      });
      let r = Symbol.for("@ts-pattern/matcher"),
        i = Symbol.for("@ts-pattern/isVariadic"),
        o = "@ts-pattern/anonymous-select-key",
        a = e => !!(e && "object" == typeof e),
        s = e => e && !!e[r],
        l = (e, t, n) => {
          if (s(e)) {
            let {
              matched: i,
              selections: o
            } = e[r]().match(t);
            return i && o && Object.keys(o).forEach(e => n(e, o[e])), i
          }
          if (a(e)) {
            if (!a(t)) return !1;
            if (Array.isArray(e)) {
              if (!Array.isArray(t)) return !1;
              let r = [],
                o = [],
                a = [];
              for (let t of e.keys()) {
                let n = e[t];
                s(n) && n[i] ? a.push(n) : a.length ? o.push(n) : r.push(n)
              }
              if (a.length) {
                if (a.length > 1) throw Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
                if (t.length < r.length + o.length) return !1;
                let e = t.slice(0, r.length),
                  i = 0 === o.length ? [] : t.slice(-o.length),
                  s = t.slice(r.length, 0 === o.length ? 1 / 0 : -o.length);
                return r.every((t, r) => l(t, e[r], n)) && o.every((e, t) => l(e, i[t], n)) && (0 === a.length || l(a[0], s, n))
              }
              return e.length === t.length && e.every((e, r) => l(e, t[r], n))
            }
            return Reflect.ownKeys(e).every(i => {
              let o = e[i];
              return (i in t || s(o) && "optional" === o[r]().matcherType) && l(o, t[i], n)
            })
          }
          return Object.is(t, e)
        },
        c = e => {
          var t, n, i;
          return a(e) ? s(e) ? null != (t = null == (n = (i = e[r]()).getSelectionKeys) ? void 0 : n.call(i)) ? t : [] : Array.isArray(e) ? u(e, c) : u(Object.values(e), c) : []
        },
        u = (e, t) => e.reduce((e, n) => e.concat(t(n)), []);

      function h(e) {
        return Object.assign(e, {
          optional: () => m(e),
          and: t => g(e, t),
          or: t => f(e, t),
          select: t => void 0 === t ? _(e) : _(t, e)
        })
      }

      function m(e) {
        return h({
          [r]: () => ({
            match: t => {
              let n = {},
                r = (e, t) => {
                  n[e] = t
                };
              return void 0 === t ? (c(e).forEach(e => r(e, void 0)), {
                matched: !0,
                selections: n
              }) : {
                matched: l(e, t, r),
                selections: n
              }
            },
            getSelectionKeys: () => c(e),
            matcherType: "optional"
          })
        })
      }
      let d = (e, t) => {
          for (let n of e)
            if (!t(n)) return !1;
          return !0
        },
        p = (e, t) => {
          for (let [n, r] of e.entries())
            if (!t(r, n)) return !1;
          return !0
        };

      function g(...e) {
        return h({
          [r]: () => ({
            match: t => {
              let n = {},
                r = (e, t) => {
                  n[e] = t
                };
              return {
                matched: e.every(e => l(e, t, r)),
                selections: n
              }
            },
            getSelectionKeys: () => u(e, c),
            matcherType: "and"
          })
        })
      }

      function f(...e) {
        return h({
          [r]: () => ({
            match: t => {
              let n = {},
                r = (e, t) => {
                  n[e] = t
                };
              return u(e, c).forEach(e => r(e, void 0)), {
                matched: e.some(e => l(e, t, r)),
                selections: n
              }
            },
            getSelectionKeys: () => u(e, c),
            matcherType: "or"
          })
        })
      }

      function x(e) {
        return {
          [r]: () => ({
            match: t => ({
              matched: !!e(t)
            })
          })
        }
      }

      function _(...e) {
        let t = "string" == typeof e[0] ? e[0] : void 0,
          n = 2 === e.length ? e[1] : "string" == typeof e[0] ? void 0 : e[0];
        return h({
          [r]: () => ({
            match: e => {
              let r = {
                [null != t ? t : o]: e
              };
              return {
                matched: void 0 === n || l(n, e, (e, t) => {
                  r[e] = t
                }),
                selections: r
              }
            },
            getSelectionKeys: () => [null != t ? t : o].concat(void 0 === n ? [] : c(n))
          })
        })
      }

      function v(e) {
        return "number" == typeof e
      }

      function y(e) {
        return "string" == typeof e
      }

      function j(e) {
        return "bigint" == typeof e
      }
      let b = h(x(function(e) {
          return !0
        })),
        k = e => Object.assign(h(e), {
          startsWith: t => k(g(e, x(e => y(e) && e.startsWith(t)))),
          endsWith: t => k(g(e, x(e => y(e) && e.endsWith(t)))),
          minLength: t => k(g(e, x(e => y(e) && e.length >= t))),
          length: t => k(g(e, x(e => y(e) && e.length === t))),
          maxLength: t => k(g(e, x(e => y(e) && e.length <= t))),
          includes: t => k(g(e, x(e => y(e) && e.includes(t)))),
          regex: t => k(g(e, x(e => y(e) && !!e.match(t))))
        }),
        C = k(x(y)),
        w = e => Object.assign(h(e), {
          between: (t, n) => w(g(e, x(e => v(e) && t <= e && n >= e))),
          lt: t => w(g(e, x(e => v(e) && e < t))),
          gt: t => w(g(e, x(e => v(e) && e > t))),
          lte: t => w(g(e, x(e => v(e) && e <= t))),
          gte: t => w(g(e, x(e => v(e) && e >= t))),
          int: () => w(g(e, x(e => v(e) && Number.isInteger(e)))),
          finite: () => w(g(e, x(e => v(e) && Number.isFinite(e)))),
          positive: () => w(g(e, x(e => v(e) && e > 0))),
          negative: () => w(g(e, x(e => v(e) && e < 0)))
        }),
        B = w(x(v)),
        S = e => Object.assign(h(e), {
          between: (t, n) => S(g(e, x(e => j(e) && t <= e && n >= e))),
          lt: t => S(g(e, x(e => j(e) && e < t))),
          gt: t => S(g(e, x(e => j(e) && e > t))),
          lte: t => S(g(e, x(e => j(e) && e <= t))),
          gte: t => S(g(e, x(e => j(e) && e >= t))),
          positive: () => S(g(e, x(e => j(e) && e > 0))),
          negative: () => S(g(e, x(e => j(e) && e < 0)))
        }),
        P = S(x(j)),
        N = h(x(function(e) {
          return "boolean" == typeof e
        })),
        F = h(x(function(e) {
          return "symbol" == typeof e
        })),
        O = h(x(function(e) {
          return null == e
        })),
        A = h(x(function(e) {
          return null != e
        }));
      var E = {
        __proto__: null,
        matcher: r,
        optional: m,
        array: function(...e) {
          return function e(t) {
            return Object.assign(Object.assign(t, {
              [Symbol.iterator]() {
                let e = 0,
                  n = [{
                    value: Object.assign(t, {
                      [i]: !0
                    }),
                    done: !1
                  }, {
                    done: !0,
                    value: void 0
                  }];
                return {
                  next: () => {
                    var t;
                    return null != (t = n[e++]) ? t : n.at(-1)
                  }
                }
              }
            }), {
              optional: () => e(m(t)),
              select: n => e(void 0 === n ? _(t) : _(n, t))
            })
          }({
            [r]: () => ({
              match: t => {
                if (!Array.isArray(t)) return {
                  matched: !1
                };
                if (0 === e.length) return {
                  matched: !0
                };
                let n = e[0],
                  r = {};
                if (0 === t.length) return c(n).forEach(e => {
                  r[e] = []
                }), {
                  matched: !0,
                  selections: r
                };
                let i = (e, t) => {
                  r[e] = (r[e] || []).concat([t])
                };
                return {
                  matched: t.every(e => l(n, e, i)),
                  selections: r
                }
              },
              getSelectionKeys: () => 0 === e.length ? [] : c(e[0])
            })
          })
        },
        set: function(...e) {
          return h({
            [r]: () => ({
              match: t => {
                if (!(t instanceof Set)) return {
                  matched: !1
                };
                let n = {};
                if (0 === t.size) return {
                  matched: !0,
                  selections: n
                };
                if (0 === e.length) return {
                  matched: !0
                };
                let r = (e, t) => {
                    n[e] = (n[e] || []).concat([t])
                  },
                  i = e[0];
                return {
                  matched: d(t, e => l(i, e, r)),
                  selections: n
                }
              },
              getSelectionKeys: () => 0 === e.length ? [] : c(e[0])
            })
          })
        },
        map: function(...e) {
          return h({
            [r]: () => ({
              match: t => {
                var n;
                if (!(t instanceof Map)) return {
                  matched: !1
                };
                let r = {};
                if (0 === t.size) return {
                  matched: !0,
                  selections: r
                };
                let i = (e, t) => {
                  r[e] = (r[e] || []).concat([t])
                };
                if (0 === e.length) return {
                  matched: !0
                };
                if (1 === e.length) throw Error(`\`P.map\` wasn't given enough arguments. Expected (key, value), received ${null==(n=e[0])?void 0:n.toString()}`);
                let [o, a] = e;
                return {
                  matched: p(t, (e, t) => {
                    let n = l(o, t, i),
                      r = l(a, e, i);
                    return n && r
                  }),
                  selections: r
                }
              },
              getSelectionKeys: () => 0 === e.length ? [] : [...c(e[0]), ...c(e[1])]
            })
          })
        },
        intersection: g,
        union: f,
        not: function(e) {
          return h({
            [r]: () => ({
              match: t => ({
                matched: !l(e, t, () => {})
              }),
              getSelectionKeys: () => [],
              matcherType: "not"
            })
          })
        },
        when: x,
        select: _,
        any: b,
        _: b,
        string: C,
        number: B,
        bigint: P,
        boolean: N,
        symbol: F,
        nullish: O,
        nonNullable: A,
        instanceOf: function(e) {
          return h(x(t => t instanceof e))
        },
        shape: function(e) {
          return h(x(function(...e) {
            if (1 === e.length) {
              let [t] = e;
              return e => l(t, e, () => {})
            }
            if (2 === e.length) {
              let [t, n] = e;
              return l(t, n, () => {})
            }
            throw Error(`isMatching wasn't given the right number of arguments: expected 1 or 2, received ${e.length}.`)
          }(e)))
        }
      };
      class z extends Error {
        constructor(e) {
          let t;
          try {
            t = JSON.stringify(e)
          } catch (n) {
            t = e
          }
          super(`Pattern matching error: no pattern matches value ${t}`), this.input = void 0, this.input = e
        }
      }
      let T = {
        matched: !1,
        value: void 0
      };

      function L(e) {
        return new D(e, T)
      }
      class D {
        constructor(e, t) {
          this.input = void 0, this.state = void 0, this.input = e, this.state = t
        }
        with(...e) {
          let t;
          if (this.state.matched) return this;
          let n = e[e.length - 1],
            r = [e[0]];
          3 === e.length && "function" == typeof e[1] ? t = e[1] : e.length > 2 && r.push(...e.slice(1, e.length - 1));
          let i = !1,
            a = {},
            s = (e, t) => {
              i = !0, a[e] = t
            },
            c = r.some(e => l(e, this.input, s)) && (!t || t(this.input)) ? {
              matched: !0,
              value: n(i ? o in a ? a[o] : a : this.input, this.input)
            } : T;
          return new D(this.input, c)
        }
        when(e, t) {
          if (this.state.matched) return this;
          let n = !!e(this.input);
          return new D(this.input, n ? {
            matched: !0,
            value: t(this.input, this.input)
          } : T)
        }
        otherwise(e) {
          return this.state.matched ? this.state.value : e(this.input)
        }
        exhaustive() {
          if (this.state.matched) return this.state.value;
          throw new z(this.input)
        }
        run() {
          return this.exhaustive()
        }
        returnType() {
          return this
        }
      }
    }
  }
]);