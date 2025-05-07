(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1894], {
        4715: function(e, t, r) {
            "use strict";
            r.d(t, {
                V: function() {
                    return a
                }
            });
            var n = r(7294),
                i = r(6038);
            let s = "undefined" != typeof document ? n.useLayoutEffect : n.useEffect,
                o = e => e && !Array.isArray(e) && "object" == typeof e,
                u = [],
                c = {},
                l = i.ZP,
                a = (e, t = u) => {
                    let r = c;
                    o(e) ? (r = e, e = null, t = "dependencies" in r ? r.dependencies : u) : o(t) && (t = "dependencies" in (r = t) ? r.dependencies : u), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
                    let {
                        scope: i,
                        revertOnUpdate: a
                    } = r, d = (0, n.useRef)(!1), h = (0, n.useRef)(l.context(() => {}, i)), f = (0, n.useRef)(e => h.current.add(null, e)), p = t && t.length && !a;
                    return p && s(() => (d.current = !0, () => h.current.revert()), u), s(() => {
                        if (e && h.current.add(e, i), !p || !d.current) return () => h.current.revert()
                    }, t), {
                        context: h.current,
                        contextSafe: f.current
                    }
                };
            a.register = e => {
                l = e
            }, a.headless = !0
        },
        7443: function(e, t, r) {
            "use strict";
            var n = r(3454);
            r(1479);
            var i = r(7294),
                s = i && "object" == typeof i && "default" in i ? i : {
                    default: i
                },
                o = void 0 !== n && n.env && !0,
                u = function(e) {
                    return "[object String]" === Object.prototype.toString.call(e)
                },
                c = function() {
                    function e(e) {
                        var t = void 0 === e ? {} : e,
                            r = t.name,
                            n = void 0 === r ? "stylesheet" : r,
                            i = t.optimizeForSpeed,
                            s = void 0 === i ? o : i;
                        l(u(n), "`name` must be a string"), this._name = n, this._deletedRulePlaceholder = "#" + n + "-deleted-rule____{}", l("boolean" == typeof s, "`optimizeForSpeed` must be a boolean"), this._optimizeForSpeed = s, this._serverSheet = void 0, this._tags = [], this._injected = !1, this._rulesCount = 0;
                        var c = document.querySelector('meta[property="csp-nonce"]');
                        this._nonce = c ? c.getAttribute("content") : null
                    }
                    var t = e.prototype;
                    return t.setOptimizeForSpeed = function(e) {
                            l("boolean" == typeof e, "`setOptimizeForSpeed` accepts a boolean"), l(0 === this._rulesCount, "optimizeForSpeed cannot be when rules have already been inserted"), this.flush(), this._optimizeForSpeed = e, this.inject()
                        }, t.isOptimizeForSpeed = function() {
                            return this._optimizeForSpeed
                        }, t.inject = function() {
                            var e = this;
                            if (l(!this._injected, "sheet already injected"), this._injected = !0, this._optimizeForSpeed) {
                                this._tags[0] = this.makeStyleTag(this._name), this._optimizeForSpeed = "insertRule" in this.getSheet(), this._optimizeForSpeed || (o || console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."), this.flush(), this._injected = !0);
                                return
                            }
                            this._serverSheet = {
                                cssRules: [],
                                insertRule: function(t, r) {
                                    return "number" == typeof r ? e._serverSheet.cssRules[r] = {
                                        cssText: t
                                    } : e._serverSheet.cssRules.push({
                                        cssText: t
                                    }), r
                                },
                                deleteRule: function(t) {
                                    e._serverSheet.cssRules[t] = null
                                }
                            }
                        }, t.getSheetForTag = function(e) {
                            if (e.sheet) return e.sheet;
                            for (var t = 0; t < document.styleSheets.length; t++)
                                if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
                        }, t.getSheet = function() {
                            return this.getSheetForTag(this._tags[this._tags.length - 1])
                        }, t.insertRule = function(e, t) {
                            if (l(u(e), "`insertRule` accepts only strings"), this._optimizeForSpeed) {
                                var r = this.getSheet();
                                "number" != typeof t && (t = r.cssRules.length);
                                try {
                                    r.insertRule(e, t)
                                } catch (t) {
                                    return o || console.warn("StyleSheet: illegal rule: \n\n" + e + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), -1
                                }
                            } else {
                                var n = this._tags[t];
                                this._tags.push(this.makeStyleTag(this._name, e, n))
                            }
                            return this._rulesCount++
                        }, t.replaceRule = function(e, t) {
                            if (this._optimizeForSpeed) {
                                var r = this.getSheet();
                                if (t.trim() || (t = this._deletedRulePlaceholder), !r.cssRules[e]) return e;
                                r.deleteRule(e);
                                try {
                                    r.insertRule(t, e)
                                } catch (n) {
                                    o || console.warn("StyleSheet: illegal rule: \n\n" + t + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), r.insertRule(this._deletedRulePlaceholder, e)
                                }
                            } else {
                                var n = this._tags[e];
                                l(n, "old rule at index `" + e + "` not found"), n.textContent = t
                            }
                            return e
                        }, t.deleteRule = function(e) {
                            if (this._optimizeForSpeed) this.replaceRule(e, "");
                            else {
                                var t = this._tags[e];
                                l(t, "rule at index `" + e + "` not found"), t.parentNode.removeChild(t), this._tags[e] = null
                            }
                        }, t.flush = function() {
                            this._injected = !1, this._rulesCount = 0, this._tags.forEach(function(e) {
                                return e && e.parentNode.removeChild(e)
                            }), this._tags = []
                        }, t.cssRules = function() {
                            var e = this;
                            return this._tags.reduce(function(t, r) {
                                return r ? t = t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules, function(t) {
                                    return t.cssText === e._deletedRulePlaceholder ? null : t
                                })) : t.push(null), t
                            }, [])
                        }, t.makeStyleTag = function(e, t, r) {
                            t && l(u(t), "makeStyleTag accepts only strings as second parameter");
                            var n = document.createElement("style");
                            this._nonce && n.setAttribute("nonce", this._nonce), n.type = "text/css", n.setAttribute("data-" + e, ""), t && n.appendChild(document.createTextNode(t));
                            var i = document.head || document.getElementsByTagName("head")[0];
                            return r ? i.insertBefore(n, r) : i.appendChild(n), n
                        },
                        function(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var n = t[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                            }
                        }(e.prototype, [{
                            key: "length",
                            get: function() {
                                return this._rulesCount
                            }
                        }]), e
                }();

            function l(e, t) {
                if (!e) throw Error("StyleSheet: " + t + ".")
            }
            var a = function(e) {
                    for (var t = 5381, r = e.length; r;) t = 33 * t ^ e.charCodeAt(--r);
                    return t >>> 0
                },
                d = {};

            function h(e, t) {
                if (!t) return "jsx-" + e;
                var r = String(t),
                    n = e + r;
                return d[n] || (d[n] = "jsx-" + a(e + "-" + r)), d[n]
            }

            function f(e, t) {
                var r = e + t;
                return d[r] || (d[r] = t.replace(/__jsx-style-dynamic-selector/g, e)), d[r]
            }
            var p = function() {
                    function e(e) {
                        var t = void 0 === e ? {} : e,
                            r = t.styleSheet,
                            n = void 0 === r ? null : r,
                            i = t.optimizeForSpeed,
                            s = void 0 !== i && i;
                        this._sheet = n || new c({
                            name: "styled-jsx",
                            optimizeForSpeed: s
                        }), this._sheet.inject(), n && "boolean" == typeof s && (this._sheet.setOptimizeForSpeed(s), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
                    }
                    var t = e.prototype;
                    return t.add = function(e) {
                        var t = this;
                        void 0 === this._optimizeForSpeed && (this._optimizeForSpeed = Array.isArray(e.children), this._sheet.setOptimizeForSpeed(this._optimizeForSpeed), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._fromServer || (this._fromServer = this.selectFromServer(), this._instancesCounts = Object.keys(this._fromServer).reduce(function(e, t) {
                            return e[t] = 0, e
                        }, {}));
                        var r = this.getIdAndRules(e),
                            n = r.styleId,
                            i = r.rules;
                        if (n in this._instancesCounts) {
                            this._instancesCounts[n] += 1;
                            return
                        }
                        var s = i.map(function(e) {
                            return t._sheet.insertRule(e)
                        }).filter(function(e) {
                            return -1 !== e
                        });
                        this._indices[n] = s, this._instancesCounts[n] = 1
                    }, t.remove = function(e) {
                        var t = this,
                            r = this.getIdAndRules(e).styleId;
                        if (function(e, t) {
                                if (!e) throw Error("StyleSheetRegistry: " + t + ".")
                            }(r in this._instancesCounts, "styleId: `" + r + "` not found"), this._instancesCounts[r] -= 1, this._instancesCounts[r] < 1) {
                            var n = this._fromServer && this._fromServer[r];
                            n ? (n.parentNode.removeChild(n), delete this._fromServer[r]) : (this._indices[r].forEach(function(e) {
                                return t._sheet.deleteRule(e)
                            }), delete this._indices[r]), delete this._instancesCounts[r]
                        }
                    }, t.update = function(e, t) {
                        this.add(t), this.remove(e)
                    }, t.flush = function() {
                        this._sheet.flush(), this._sheet.inject(), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
                    }, t.cssRules = function() {
                        var e = this,
                            t = this._fromServer ? Object.keys(this._fromServer).map(function(t) {
                                return [t, e._fromServer[t]]
                            }) : [],
                            r = this._sheet.cssRules();
                        return t.concat(Object.keys(this._indices).map(function(t) {
                            return [t, e._indices[t].map(function(e) {
                                return r[e].cssText
                            }).join(e._optimizeForSpeed ? "" : "\n")]
                        }).filter(function(e) {
                            return !!e[1]
                        }))
                    }, t.styles = function(e) {
                        var t, r;
                        return t = this.cssRules(), void 0 === (r = e) && (r = {}), t.map(function(e) {
                            var t = e[0],
                                n = e[1];
                            return s.default.createElement("style", {
                                id: "__" + t,
                                key: "__" + t,
                                nonce: r.nonce ? r.nonce : void 0,
                                dangerouslySetInnerHTML: {
                                    __html: n
                                }
                            })
                        })
                    }, t.getIdAndRules = function(e) {
                        var t = e.children,
                            r = e.dynamic,
                            n = e.id;
                        if (r) {
                            var i = h(n, r);
                            return {
                                styleId: i,
                                rules: Array.isArray(t) ? t.map(function(e) {
                                    return f(i, e)
                                }) : [f(i, t)]
                            }
                        }
                        return {
                            styleId: h(n),
                            rules: Array.isArray(t) ? t : [t]
                        }
                    }, t.selectFromServer = function() {
                        return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e, t) {
                            return e[t.id.slice(2)] = t, e
                        }, {})
                    }, e
                }(),
                m = i.createContext(null);
            m.displayName = "StyleSheetContext";
            var _ = s.default.useInsertionEffect || s.default.useLayoutEffect,
                y = new p;

            function v(e) {
                var t = y || i.useContext(m);
                return t && _(function() {
                    return t.add(e),
                        function() {
                            t.remove(e)
                        }
                }, [e.id, String(e.dynamic)]), null
            }
            v.dynamic = function(e) {
                return e.map(function(e) {
                    return h(e[0], e[1])
                }).join(" ")
            }, t.style = v
        },
        645: function(e, t, r) {
            "use strict";
            e.exports = r(7443).style
        },
        1479: function() {},
        230: function(e, t, r) {
            "use strict";
            r.d(t, {
                i: function() {
                    return f
                }
            });
            var n = r(5893),
                i = r(7294);
            let s = ({
                    text: e,
                    ...t
                }) => {
                    let {
                        modifiers: r,
                        missingModifierTypes: i
                    } = h();
                    return Object.keys(t).reduce((e, s) => {
                        if (!t[s]) return e;
                        let o = r[s];
                        return o ? (0, n.jsx)(o, {
                            children: e
                        }) : (i.includes(s) || (console.warn(`[@strapi/block-react-renderer] No component found for modifier "${s}"`), i.push(s)), e)
                    }, (0, n.jsx)(n.Fragment, {
                        children: e
                    }))
                },
                o = ["image"],
                u = e => {
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
                c = ({
                    content: e
                }) => {
                    let {
                        children: t,
                        type: r,
                        ...l
                    } = e, {
                        blocks: a,
                        missingBlockTypes: d
                    } = h(), f = a[r];
                    if (!f) return d.includes(r) || (console.warn(`[@strapi/block-react-renderer] No component found for block type "${r}"`), d.push(r)), null;
                    if (o.includes(r)) return (0, n.jsx)(f, {
                        ...l
                    });
                    if ("paragraph" === r && 1 === t.length && "text" === t[0].type && "" === t[0].text) return (0, n.jsx)("br", {});
                    let p = u(e);
                    return (0, n.jsx)(f, {
                        ...p,
                        children: t.map((e, t) => {
                            if ("text" === e.type) {
                                let {
                                    type: r,
                                    ...n
                                } = e;
                                return (0, i.createElement)(s, {
                                    ...n,
                                    key: t
                                })
                            }
                            return (0, n.jsx)(c, {
                                content: e
                            }, t)
                        })
                    })
                },
                l = {
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
                a = i.createContext(l),
                d = ({
                    children: e,
                    value: t = l
                }) => {
                    let r = i.useMemo(() => t, [t]);
                    return (0, n.jsx)(a.Provider, {
                        value: r,
                        children: e
                    })
                };

            function h() {
                return i.useContext(a)
            }
            let f = e => {
                let t = {
                        ...l.blocks,
                        ...e.blocks
                    },
                    r = {
                        ...l.modifiers,
                        ...e.modifiers
                    },
                    s = i.useRef([]),
                    o = i.useRef([]);
                return (0, n.jsx)(d, {
                    value: {
                        blocks: t,
                        modifiers: r,
                        missingBlockTypes: s.current,
                        missingModifierTypes: o.current
                    },
                    children: e.content.map((e, t) => (0, n.jsx)(c, {
                        content: e
                    }, t))
                })
            }
        }
    }
]);