"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4858], {
    7446: function(e, t, n) {
      function r(e) {
        return {
          lang: e?.lang ?? o?.lang,
          message: e?.message,
          abortEarly: e?.abortEarly ?? o?.abortEarly,
          abortPipeEarly: e?.abortPipeEarly ?? o?.abortPipeEarly
        }
      }

      function s(e) {
        let t = typeof e;
        return "string" === t ? `"${e}"` : "number" === t || "bigint" === t || "boolean" === t ? `${e}` : "object" === t || "function" === t ? (e && Object.getPrototypeOf(e)?.constructor?.name) ?? "null" : t
      }

      function i(e, t, n, r, i) {
        var u, a, l, o;
        let y = i && "input" in i ? i.input : n.value,
          h = i?.expected ?? e.expects ?? null,
          d = i?.received ?? s(y),
          b = {
            kind: e.kind,
            type: e.type,
            input: y,
            expected: h,
            received: d,
            message: `Invalid ${t}: ${h?`Expected ${h} but r`:"R"}eceived ${d}`,
            requirement: e.requirement,
            path: i?.path,
            issues: i?.issues,
            lang: r.lang,
            abortEarly: r.abortEarly,
            abortPipeEarly: r.abortPipeEarly
          },
          v = "schema" === e.kind,
          g = i?.message ?? e.message ?? (u = e.reference, a = b.lang, f?.get(u)?.get(a)) ?? (v ? (l = b.lang, c?.get(l)) : null) ?? r.message ?? (o = b.lang, p?.get(o));
        g && (b.message = "function" == typeof g ? g(b) : g), v && (n.typed = !1), n.issues ? n.issues.push(b) : n.issues = [b]
      }

      function u(e) {
        return {
          version: 1,
          vendor: "valibot",
          validate: t => e["~run"]({
            value: t
          }, r())
        }
      }

      function a(e) {
        if (e.path) {
          let t = "";
          for (let n of e.path) {
            if ("string" != typeof n.key && "number" != typeof n.key) return null;
            t ? t += `.${n.key}` : t += n.key
          }
          return t
        }
        return null
      }

      function l(e) {
        return e instanceof y
      }
      n.d(t, {
        AsG: function() {
          return j
        },
        G0j: function() {
          return E
        },
        Qc3: function() {
          return x
        },
        Ryn: function() {
          return v
        },
        YjB: function() {
          return d
        },
        Z_8: function() {
          return k
        },
        cfj: function() {
          return g
        },
        i0J: function() {
          return b
        },
        xNY: function() {
          return a
        },
        yhs: function() {
          return l
        }
      });
      var o, p, c, f, y = class extends Error {
        constructor(e) {
          super(e[0].message), this.name = "ValiError", this.issues = e
        }
      };

      function h(e, t, n) {
        return "function" == typeof e.default ? e.default(t, n) : e.default
      }

      function d() {
        return {
          kind: "schema",
          type: "any",
          reference: d,
          expects: "any",
          async: !1,
          get "~standard"() {
            return u(this)
          },
          "~run": e => (e.typed = !0, e)
        }
      }

      function b(e, t) {
        return {
          kind: "schema",
          type: "literal",
          reference: b,
          expects: s(e),
          async: !1,
          literal: e,
          message: t,
          get "~standard"() {
            return u(this)
          },
          "~run"(e, t) {
            return e.value === this.literal ? e.typed = !0 : i(this, "type", e, t), e
          }
        }
      }

      function v(e, t) {
        return {
          kind: "schema",
          type: "object",
          reference: v,
          expects: "Object",
          async: !1,
          entries: e,
          message: t,
          get "~standard"() {
            return u(this)
          },
          "~run"(e, t) {
            let n = e.value;
            if (n && "object" == typeof n)
              for (let r in e.typed = !0, e.value = {}, this.entries) {
                let s = this.entries[r];
                if (r in n || ("exact_optional" === s.type || "optional" === s.type || "nullish" === s.type) && void 0 !== s.default) {
                  let i = r in n ? n[r] : h(s),
                    u = s["~run"]({
                      value: i
                    }, t);
                  if (u.issues) {
                    let s = {
                      type: "object",
                      origin: "value",
                      input: n,
                      key: r,
                      value: i
                    };
                    for (let t of u.issues) t.path ? t.path.unshift(s) : t.path = [s], e.issues?.push(t);
                    if (e.issues || (e.issues = u.issues), t.abortEarly) {
                      e.typed = !1;
                      break
                    }
                  }
                  u.typed || (e.typed = !1), e.value[r] = u.value
                } else if ("exact_optional" !== s.type && "optional" !== s.type && "nullish" !== s.type && (i(this, "key", e, t, {
                    input: void 0,
                    expected: `"${r}"`,
                    path: [{
                      type: "object",
                      origin: "key",
                      input: n,
                      key: r,
                      value: n[r]
                    }]
                  }), t.abortEarly)) break
              } else i(this, "type", e, t);
            return e
          }
        }
      }

      function g(e, t) {
        return {
          kind: "schema",
          type: "strict_object",
          reference: g,
          expects: "Object",
          async: !1,
          entries: e,
          message: t,
          get "~standard"() {
            return u(this)
          },
          "~run"(e, t) {
            let n = e.value;
            if (n && "object" == typeof n) {
              for (let r in e.typed = !0, e.value = {}, this.entries) {
                let s = this.entries[r];
                if (r in n || ("exact_optional" === s.type || "optional" === s.type || "nullish" === s.type) && void 0 !== s.default) {
                  let i = r in n ? n[r] : h(s),
                    u = s["~run"]({
                      value: i
                    }, t);
                  if (u.issues) {
                    let s = {
                      type: "object",
                      origin: "value",
                      input: n,
                      key: r,
                      value: i
                    };
                    for (let t of u.issues) t.path ? t.path.unshift(s) : t.path = [s], e.issues?.push(t);
                    if (e.issues || (e.issues = u.issues), t.abortEarly) {
                      e.typed = !1;
                      break
                    }
                  }
                  u.typed || (e.typed = !1), e.value[r] = u.value
                } else if ("exact_optional" !== s.type && "optional" !== s.type && "nullish" !== s.type && (i(this, "key", e, t, {
                    input: void 0,
                    expected: `"${r}"`,
                    path: [{
                      type: "object",
                      origin: "key",
                      input: n,
                      key: r,
                      value: n[r]
                    }]
                  }), t.abortEarly)) break
              }
              if (!e.issues || !t.abortEarly) {
                for (let r in n)
                  if (!(r in this.entries)) {
                    i(this, "key", e, t, {
                      input: r,
                      expected: "never",
                      path: [{
                        type: "object",
                        origin: "key",
                        input: n,
                        key: r,
                        value: n[r]
                      }]
                    });
                    break
                  }
              }
            } else i(this, "type", e, t);
            return e
          }
        }
      }

      function k(e) {
        return {
          kind: "schema",
          type: "string",
          reference: k,
          expects: "string",
          async: !1,
          message: e,
          get "~standard"() {
            return u(this)
          },
          "~run"(e, t) {
            return "string" == typeof e.value ? e.typed = !0 : i(this, "type", e, t), e
          }
        }
      }

      function m(e) {
        let t;
        if (e)
          for (let n of e) t ? t.push(...n.issues) : t = n.issues;
        return t
      }

      function E(e, t) {
        return {
          kind: "schema",
          type: "union",
          reference: E,
          expects: function(e, t) {
            let n = [...new Set(e)];
            return n.length > 1 ? `(${n.join(" | ")})` : n[0] ?? "never"
          }(e.map(e => e.expects), 0),
          async: !1,
          options: e,
          message: t,
          get "~standard"() {
            return u(this)
          },
          "~run"(e, t) {
            let n, r, s;
            for (let i of this.options) {
              let u = i["~run"]({
                value: e.value
              }, t);
              if (u.typed) {
                if (u.issues) r ? r.push(u) : r = [u];
                else {
                  n = u;
                  break
                }
              } else s ? s.push(u) : s = [u]
            }
            if (n) return n;
            if (r) {
              if (1 === r.length) return r[0];
              i(this, "type", e, t, {
                issues: m(r)
              }), e.typed = !0
            } else {
              if (s?.length === 1) return s[0];
              i(this, "type", e, t, {
                issues: m(s)
              })
            }
            return e
          }
        }
      }

      function x(e, t, n) {
        let s = e["~run"]({
          value: t
        }, r(n));
        if (s.issues) throw new y(s.issues);
        return s.value
      }

      function j(e, t, n) {
        let s = e["~run"]({
          value: t
        }, r(n));
        return {
          typed: s.typed,
          success: !s.issues,
          output: s.value,
          issues: s.issues
        }
      }
    }
  }
]);