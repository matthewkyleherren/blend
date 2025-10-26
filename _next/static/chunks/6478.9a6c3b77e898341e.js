(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6478], {
    6478: function(t, e, n) {
      "use strict";
      n.r(e), n.d(e, {
        default: function() {
          return p
        }
      });
      var r = n(5893),
        i = n(9968),
        s = n.n(i),
        a = n(6546),
        o = n.n(a),
        l = n(7294),
        u = n(9521),
        c = n.n(u),
        h = n(987),
        f = n(146),
        g = n(1100),
        d = n(8964),
        m = n(6904);

      function p(t) {
        let {
          item: e
        } = t, n = (0, l.useRef)(null), i = (0, l.useRef)(null), a = (0, h.s)(t => t.currentDevice), u = (0, f.o)(t => t.setHeaderDark);
        (0, l.useEffect)(() => {
          let t = c().context(() => {
            c().set(i.current, {
              y: "-100%"
            }), c().to(n.current, {
              opacity: 1,
              duration: .1,
              delay: 4.2
            }), o().create({
              trigger: i.current,
              pin: i.current,
              start: "top top",
              end: "bottom+=100% bottom",
              onLeave: () => u(!1),
              onEnterBack: () => u(!0)
            }), c().timeline({
              scrollTrigger: {
                trigger: n.current,
                start: "bottom+=30% bottom",
                end: "bottom+=100% bottom",
                scrub: !0
              }
            }).to(i.current, {
              y: "-=10%"
            })
          });
          return () => t && t.revert()
        }, [n, a]);
        let p = (0, d.EQ)(a).with("Mobile", () => {
          var t;
          return null !== (t = e.imageMobile.data) && void 0 !== t ? t : e.image.data
        }).with("Desktop", () => e.image.data).exhaustive();
        return (0, r.jsx)("section", {
          ref: n,
          className: s().howItWorksContainer,
          children: (0, r.jsxs)("div", {
            ref: i,
            className: s().wrapper,
            children: [(0, d.EQ)(p).with(d.P.nullish, () => null).when(t => t.attributes.mime.startsWith("video"), t => (0, r.jsx)(m.O, {
              className: s().image,
              video: t,
              autoPlay: !0,
              muted: !0,
              playsInline: !0,
              loop: !0
            })).when(t => t.attributes.mime.startsWith("image"), t => (0, r.jsx)(g.p, {
              className: s().image,
              image: t
            })).otherwise(() => null), "Mobile" === a && (0, r.jsx)("h2", {
              children: e.title
            }), (0, r.jsxs)("article", {
              className: s().textContent,
              children: ["Desktop" === a && (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)("h2", {
                  children: e.title
                }), (0, r.jsxs)("div", {
                  className: s().separateLine,
                  children: [(0, r.jsx)("span", {}), (0, r.jsx)("span", {})]
                })]
              }), (0, r.jsx)("p", {
                children: e.text
              })]
            })]
          })
        })
      }
    },
    6904: function(t, e, n) {
      "use strict";
      n.d(e, {
        O: function() {
          return a
        }
      });
      var r = n(5893),
        i = n(7294),
        s = n(2881);
      let a = (0, i.forwardRef)(function(t, e) {
        let {
          video: n,
          ...i
        } = t, a = s.$N(n.attributes.url);
        return (0, r.jsx)("video", {
          ref: e,
          src: a,
          ...i
        })
      })
    },
    9968: function(t) {
      t.exports = {
        howItWorksContainer: "AnnotatedBackgroundSection_howItWorksContainer__lg2uu",
        wrapper: "AnnotatedBackgroundSection_wrapper__hBKKe",
        textContent: "AnnotatedBackgroundSection_textContent__OZLMb",
        separateLine: "AnnotatedBackgroundSection_separateLine__ufj8_",
        image: "AnnotatedBackgroundSection_image__JLa4t"
      }
    },
    8964: function(t, e, n) {
      "use strict";
      n.d(e, {
        EQ: function() {
          return T
        },
        P: function() {
          return L
        }
      });
      let r = Symbol.for("@ts-pattern/matcher"),
        i = Symbol.for("@ts-pattern/isVariadic"),
        s = "@ts-pattern/anonymous-select-key",
        a = t => !!(t && "object" == typeof t),
        o = t => t && !!t[r],
        l = (t, e, n) => {
          if (o(t)) {
            let {
              matched: i,
              selections: s
            } = t[r]().match(e);
            return i && s && Object.keys(s).forEach(t => n(t, s[t])), i
          }
          if (a(t)) {
            if (!a(e)) return !1;
            if (Array.isArray(t)) {
              if (!Array.isArray(e)) return !1;
              let r = [],
                s = [],
                a = [];
              for (let e of t.keys()) {
                let n = t[e];
                o(n) && n[i] ? a.push(n) : a.length ? s.push(n) : r.push(n)
              }
              if (a.length) {
                if (a.length > 1) throw Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
                if (e.length < r.length + s.length) return !1;
                let t = e.slice(0, r.length),
                  i = 0 === s.length ? [] : e.slice(-s.length),
                  o = e.slice(r.length, 0 === s.length ? 1 / 0 : -s.length);
                return r.every((e, r) => l(e, t[r], n)) && s.every((t, e) => l(t, i[e], n)) && (0 === a.length || l(a[0], o, n))
              }
              return t.length === e.length && t.every((t, r) => l(t, e[r], n))
            }
            return Reflect.ownKeys(t).every(i => {
              let s = t[i];
              return (i in e || o(s) && "optional" === s[r]().matcherType) && l(s, e[i], n)
            })
          }
          return Object.is(e, t)
        },
        u = t => {
          var e, n, i;
          return a(t) ? o(t) ? null != (e = null == (n = (i = t[r]()).getSelectionKeys) ? void 0 : n.call(i)) ? e : [] : Array.isArray(t) ? c(t, u) : c(Object.values(t), u) : []
        },
        c = (t, e) => t.reduce((t, n) => t.concat(e(n)), []);

      function h(t) {
        return Object.assign(t, {
          optional: () => f(t),
          and: e => m(t, e),
          or: e => p(t, e),
          select: e => void 0 === e ? y(t) : y(e, t)
        })
      }

      function f(t) {
        return h({
          [r]: () => ({
            match: e => {
              let n = {},
                r = (t, e) => {
                  n[t] = e
                };
              return void 0 === e ? (u(t).forEach(t => r(t, void 0)), {
                matched: !0,
                selections: n
              }) : {
                matched: l(t, e, r),
                selections: n
              }
            },
            getSelectionKeys: () => u(t),
            matcherType: "optional"
          })
        })
      }
      let g = (t, e) => {
          for (let n of t)
            if (!e(n)) return !1;
          return !0
        },
        d = (t, e) => {
          for (let [n, r] of t.entries())
            if (!e(r, n)) return !1;
          return !0
        };

      function m(...t) {
        return h({
          [r]: () => ({
            match: e => {
              let n = {},
                r = (t, e) => {
                  n[t] = e
                };
              return {
                matched: t.every(t => l(t, e, r)),
                selections: n
              }
            },
            getSelectionKeys: () => c(t, u),
            matcherType: "and"
          })
        })
      }

      function p(...t) {
        return h({
          [r]: () => ({
            match: e => {
              let n = {},
                r = (t, e) => {
                  n[t] = e
                };
              return c(t, u).forEach(t => r(t, void 0)), {
                matched: t.some(t => l(t, e, r)),
                selections: n
              }
            },
            getSelectionKeys: () => c(t, u),
            matcherType: "or"
          })
        })
      }

      function v(t) {
        return {
          [r]: () => ({
            match: e => ({
              matched: !!t(e)
            })
          })
        }
      }

      function y(...t) {
        let e = "string" == typeof t[0] ? t[0] : void 0,
          n = 2 === t.length ? t[1] : "string" == typeof t[0] ? void 0 : t[0];
        return h({
          [r]: () => ({
            match: t => {
              let r = {
                [null != e ? e : s]: t
              };
              return {
                matched: void 0 === n || l(n, t, (t, e) => {
                  r[t] = e
                }),
                selections: r
              }
            },
            getSelectionKeys: () => [null != e ? e : s].concat(void 0 === n ? [] : u(n))
          })
        })
      }

      function b(t) {
        return "number" == typeof t
      }

      function w(t) {
        return "string" == typeof t
      }

      function x(t) {
        return "bigint" == typeof t
      }
      let j = h(v(function(t) {
          return !0
        })),
        _ = t => Object.assign(h(t), {
          startsWith: e => _(m(t, v(t => w(t) && t.startsWith(e)))),
          endsWith: e => _(m(t, v(t => w(t) && t.endsWith(e)))),
          minLength: e => _(m(t, v(t => w(t) && t.length >= e))),
          length: e => _(m(t, v(t => w(t) && t.length === e))),
          maxLength: e => _(m(t, v(t => w(t) && t.length <= e))),
          includes: e => _(m(t, v(t => w(t) && t.includes(e)))),
          regex: e => _(m(t, v(t => w(t) && !!t.match(e))))
        }),
        k = _(v(w)),
        S = t => Object.assign(h(t), {
          between: (e, n) => S(m(t, v(t => b(t) && e <= t && n >= t))),
          lt: e => S(m(t, v(t => b(t) && t < e))),
          gt: e => S(m(t, v(t => b(t) && t > e))),
          lte: e => S(m(t, v(t => b(t) && t <= e))),
          gte: e => S(m(t, v(t => b(t) && t >= e))),
          int: () => S(m(t, v(t => b(t) && Number.isInteger(t)))),
          finite: () => S(m(t, v(t => b(t) && Number.isFinite(t)))),
          positive: () => S(m(t, v(t => b(t) && t > 0))),
          negative: () => S(m(t, v(t => b(t) && t < 0)))
        }),
        E = S(v(b)),
        O = t => Object.assign(h(t), {
          between: (e, n) => O(m(t, v(t => x(t) && e <= t && n >= t))),
          lt: e => O(m(t, v(t => x(t) && t < e))),
          gt: e => O(m(t, v(t => x(t) && t > e))),
          lte: e => O(m(t, v(t => x(t) && t <= e))),
          gte: e => O(m(t, v(t => x(t) && t >= e))),
          positive: () => O(m(t, v(t => x(t) && t > 0))),
          negative: () => O(m(t, v(t => x(t) && t < 0)))
        }),
        A = O(v(x)),
        N = h(v(function(t) {
          return "boolean" == typeof t
        })),
        K = h(v(function(t) {
          return "symbol" == typeof t
        })),
        W = h(v(function(t) {
          return null == t
        })),
        C = h(v(function(t) {
          return null != t
        }));
      var L = {
        __proto__: null,
        matcher: r,
        optional: f,
        array: function(...t) {
          return function t(e) {
            return Object.assign(Object.assign(e, {
              [Symbol.iterator]() {
                let t = 0,
                  n = [{
                    value: Object.assign(e, {
                      [i]: !0
                    }),
                    done: !1
                  }, {
                    done: !0,
                    value: void 0
                  }];
                return {
                  next: () => {
                    var e;
                    return null != (e = n[t++]) ? e : n.at(-1)
                  }
                }
              }
            }), {
              optional: () => t(f(e)),
              select: n => t(void 0 === n ? y(e) : y(n, e))
            })
          }({
            [r]: () => ({
              match: e => {
                if (!Array.isArray(e)) return {
                  matched: !1
                };
                if (0 === t.length) return {
                  matched: !0
                };
                let n = t[0],
                  r = {};
                if (0 === e.length) return u(n).forEach(t => {
                  r[t] = []
                }), {
                  matched: !0,
                  selections: r
                };
                let i = (t, e) => {
                  r[t] = (r[t] || []).concat([e])
                };
                return {
                  matched: e.every(t => l(n, t, i)),
                  selections: r
                }
              },
              getSelectionKeys: () => 0 === t.length ? [] : u(t[0])
            })
          })
        },
        set: function(...t) {
          return h({
            [r]: () => ({
              match: e => {
                if (!(e instanceof Set)) return {
                  matched: !1
                };
                let n = {};
                if (0 === e.size) return {
                  matched: !0,
                  selections: n
                };
                if (0 === t.length) return {
                  matched: !0
                };
                let r = (t, e) => {
                    n[t] = (n[t] || []).concat([e])
                  },
                  i = t[0];
                return {
                  matched: g(e, t => l(i, t, r)),
                  selections: n
                }
              },
              getSelectionKeys: () => 0 === t.length ? [] : u(t[0])
            })
          })
        },
        map: function(...t) {
          return h({
            [r]: () => ({
              match: e => {
                var n;
                if (!(e instanceof Map)) return {
                  matched: !1
                };
                let r = {};
                if (0 === e.size) return {
                  matched: !0,
                  selections: r
                };
                let i = (t, e) => {
                  r[t] = (r[t] || []).concat([e])
                };
                if (0 === t.length) return {
                  matched: !0
                };
                if (1 === t.length) throw Error(`\`P.map\` wasn't given enough arguments. Expected (key, value), received ${null==(n=t[0])?void 0:n.toString()}`);
                let [s, a] = t;
                return {
                  matched: d(e, (t, e) => {
                    let n = l(s, e, i),
                      r = l(a, t, i);
                    return n && r
                  }),
                  selections: r
                }
              },
              getSelectionKeys: () => 0 === t.length ? [] : [...u(t[0]), ...u(t[1])]
            })
          })
        },
        intersection: m,
        union: p,
        not: function(t) {
          return h({
            [r]: () => ({
              match: e => ({
                matched: !l(t, e, () => {})
              }),
              getSelectionKeys: () => [],
              matcherType: "not"
            })
          })
        },
        when: v,
        select: y,
        any: j,
        _: j,
        string: k,
        number: E,
        bigint: A,
        boolean: N,
        symbol: K,
        nullish: W,
        nonNullable: C,
        instanceOf: function(t) {
          return h(v(e => e instanceof t))
        },
        shape: function(t) {
          return h(v(function(...t) {
            if (1 === t.length) {
              let [e] = t;
              return t => l(e, t, () => {})
            }
            if (2 === t.length) {
              let [e, n] = t;
              return l(e, n, () => {})
            }
            throw Error(`isMatching wasn't given the right number of arguments: expected 1 or 2, received ${t.length}.`)
          }(t)))
        }
      };
      class B extends Error {
        constructor(t) {
          let e;
          try {
            e = JSON.stringify(t)
          } catch (n) {
            e = t
          }
          super(`Pattern matching error: no pattern matches value ${e}`), this.input = void 0, this.input = t
        }
      }
      let P = {
        matched: !1,
        value: void 0
      };

      function T(t) {
        return new M(t, P)
      }
      class M {
        constructor(t, e) {
          this.input = void 0, this.state = void 0, this.input = t, this.state = e
        }
        with(...t) {
          let e;
          if (this.state.matched) return this;
          let n = t[t.length - 1],
            r = [t[0]];
          3 === t.length && "function" == typeof t[1] ? e = t[1] : t.length > 2 && r.push(...t.slice(1, t.length - 1));
          let i = !1,
            a = {},
            o = (t, e) => {
              i = !0, a[t] = e
            },
            u = r.some(t => l(t, this.input, o)) && (!e || e(this.input)) ? {
              matched: !0,
              value: n(i ? s in a ? a[s] : a : this.input, this.input)
            } : P;
          return new M(this.input, u)
        }
        when(t, e) {
          if (this.state.matched) return this;
          let n = !!t(this.input);
          return new M(this.input, n ? {
            matched: !0,
            value: e(this.input, this.input)
          } : P)
        }
        otherwise(t) {
          return this.state.matched ? this.state.value : t(this.input)
        }
        exhaustive() {
          if (this.state.matched) return this.state.value;
          throw new B(this.input)
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