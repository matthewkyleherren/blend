"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4858], {
        7446: function(e, t, n) {
            function s(e) {
                return {
                    lang: e?.lang ?? l?.lang,
                    message: e?.message,
                    abortEarly: e?.abortEarly ?? l?.abortEarly,
                    abortPipeEarly: e?.abortPipeEarly ?? l?.abortPipeEarly
                }
            }

            function i(e, t, n, s, i) {
                var r, u, a, l;
                let y = i && "input" in i ? i.input : n.value,
                    f = i?.expected ?? e.expects ?? null,
                    h = i?.received ?? function(e) {
                        let t = typeof e;
                        return "string" === t ? `"${e}"` : "number" === t || "bigint" === t || "boolean" === t ? `${e}` : "object" === t || "function" === t ? (e && Object.getPrototypeOf(e)?.constructor?.name) ?? "null" : t
                    }(y),
                    d = {
                        kind: e.kind,
                        type: e.type,
                        input: y,
                        expected: f,
                        received: h,
                        message: `Invalid ${t}: ${f?`Expected ${f} but r`:"R"}eceived ${h}`,
                        requirement: e.requirement,
                        path: i?.path,
                        issues: i?.issues,
                        lang: s.lang,
                        abortEarly: s.abortEarly,
                        abortPipeEarly: s.abortPipeEarly
                    },
                    b = "schema" === e.kind,
                    v = i?.message ?? e.message ?? (r = e.reference, u = d.lang, c?.get(r)?.get(u)) ?? (b ? (a = d.lang, p?.get(a)) : null) ?? s.message ?? (l = d.lang, o?.get(l));
                v && (d.message = "function" == typeof v ? v(d) : v), b && (n.typed = !1), n.issues ? n.issues.push(d) : n.issues = [d]
            }

            function r(e) {
                return {
                    version: 1,
                    vendor: "valibot",
                    validate: t => e["~run"]({
                        value: t
                    }, s())
                }
            }

            function u(e) {
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

            function a(e) {
                return e instanceof y
            }
            n.d(t, {
                AsG: function() {
                    return g
                },
                Qc3: function() {
                    return v
                },
                Ryn: function() {
                    return h
                },
                Z_8: function() {
                    return b
                },
                cfj: function() {
                    return d
                },
                xNY: function() {
                    return u
                },
                yhs: function() {
                    return a
                }
            });
            var l, o, p, c, y = class extends Error {
                constructor(e) {
                    super(e[0].message), this.name = "ValiError", this.issues = e
                }
            };

            function f(e, t, n) {
                return "function" == typeof e.default ? e.default(t, n) : e.default
            }

            function h(e, t) {
                return {
                    kind: "schema",
                    type: "object",
                    reference: h,
                    expects: "Object",
                    async: !1,
                    entries: e,
                    message: t,
                    get "~standard"() {
                        return r(this)
                    },
                    "~run"(e, t) {
                        let n = e.value;
                        if (n && "object" == typeof n)
                            for (let s in e.typed = !0, e.value = {}, this.entries) {
                                let r = this.entries[s];
                                if (s in n || ("exact_optional" === r.type || "optional" === r.type || "nullish" === r.type) && void 0 !== r.default) {
                                    let i = s in n ? n[s] : f(r),
                                        u = r["~run"]({
                                            value: i
                                        }, t);
                                    if (u.issues) {
                                        let r = {
                                            type: "object",
                                            origin: "value",
                                            input: n,
                                            key: s,
                                            value: i
                                        };
                                        for (let t of u.issues) t.path ? t.path.unshift(r) : t.path = [r], e.issues?.push(t);
                                        if (e.issues || (e.issues = u.issues), t.abortEarly) {
                                            e.typed = !1;
                                            break
                                        }
                                    }
                                    u.typed || (e.typed = !1), e.value[s] = u.value
                                } else if ("exact_optional" !== r.type && "optional" !== r.type && "nullish" !== r.type && (i(this, "key", e, t, {
                                        input: void 0,
                                        expected: `"${s}"`,
                                        path: [{
                                            type: "object",
                                            origin: "key",
                                            input: n,
                                            key: s,
                                            value: n[s]
                                        }]
                                    }), t.abortEarly)) break
                            } else i(this, "type", e, t);
                        return e
                    }
                }
            }

            function d(e, t) {
                return {
                    kind: "schema",
                    type: "strict_object",
                    reference: d,
                    expects: "Object",
                    async: !1,
                    entries: e,
                    message: t,
                    get "~standard"() {
                        return r(this)
                    },
                    "~run"(e, t) {
                        let n = e.value;
                        if (n && "object" == typeof n) {
                            for (let s in e.typed = !0, e.value = {}, this.entries) {
                                let r = this.entries[s];
                                if (s in n || ("exact_optional" === r.type || "optional" === r.type || "nullish" === r.type) && void 0 !== r.default) {
                                    let i = s in n ? n[s] : f(r),
                                        u = r["~run"]({
                                            value: i
                                        }, t);
                                    if (u.issues) {
                                        let r = {
                                            type: "object",
                                            origin: "value",
                                            input: n,
                                            key: s,
                                            value: i
                                        };
                                        for (let t of u.issues) t.path ? t.path.unshift(r) : t.path = [r], e.issues?.push(t);
                                        if (e.issues || (e.issues = u.issues), t.abortEarly) {
                                            e.typed = !1;
                                            break
                                        }
                                    }
                                    u.typed || (e.typed = !1), e.value[s] = u.value
                                } else if ("exact_optional" !== r.type && "optional" !== r.type && "nullish" !== r.type && (i(this, "key", e, t, {
                                        input: void 0,
                                        expected: `"${s}"`,
                                        path: [{
                                            type: "object",
                                            origin: "key",
                                            input: n,
                                            key: s,
                                            value: n[s]
                                        }]
                                    }), t.abortEarly)) break
                            }
                            if (!e.issues || !t.abortEarly) {
                                for (let s in n)
                                    if (!(s in this.entries)) {
                                        i(this, "key", e, t, {
                                            input: s,
                                            expected: "never",
                                            path: [{
                                                type: "object",
                                                origin: "key",
                                                input: n,
                                                key: s,
                                                value: n[s]
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

            function b(e) {
                return {
                    kind: "schema",
                    type: "string",
                    reference: b,
                    expects: "string",
                    async: !1,
                    message: e,
                    get "~standard"() {
                        return r(this)
                    },
                    "~run"(e, t) {
                        return "string" == typeof e.value ? e.typed = !0 : i(this, "type", e, t), e
                    }
                }
            }

            function v(e, t, n) {
                let i = e["~run"]({
                    value: t
                }, s(n));
                if (i.issues) throw new y(i.issues);
                return i.value
            }

            function g(e, t, n) {
                let i = e["~run"]({
                    value: t
                }, s(n));
                return {
                    typed: i.typed,
                    success: !i.issues,
                    output: i.value,
                    issues: i.issues
                }
            }
        }
    }
]);