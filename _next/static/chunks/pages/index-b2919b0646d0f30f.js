(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5405], {
        8312: function(t, e, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return n(7246)
            }])
        },
        8833: function(t, e, n) {
            "use strict";
            var a = n(5893),
                i = n(9008),
                r = n.n(i),
                o = n(2881);
            e.Z = t => {
                var e;
                let {
                    data: n
                } = t, i = n.metaTitle ? n.metaTitle : n.title ? "Blend | ".concat(n.title) : "Pebble Mobility", m = (null === (e = n.metaImage) || void 0 === e ? void 0 : e.data) ? {
                    url: o.$N(n.metaImage.data.attributes.url),
                    width: n.metaImage.data.attributes.width,
                    height: n.metaImage.data.attributes.height,
                    type: n.metaImage.data.attributes.mime
                } : void 0;
                return (0, a.jsxs)(r(), {
                    children: [(0, a.jsx)("title", {
                        children: i
                    }), (0, a.jsx)("meta", {
                        property: "og:title",
                        content: i
                    }, "title"), (0, a.jsx)("meta", {
                        property: "og:site_name",
                        content: "Blend"
                    }), n.metaDescription && (0, a.jsx)("meta", {
                        name: "description",
                        content: n.metaDescription
                    }), m && (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("meta", {
                            property: "og:image",
                            content: m.url
                        }), (0, a.jsx)("meta", {
                            property: "og:image:type",
                            content: m.type
                        }), m.width ? (0, a.jsx)("meta", {
                            property: "og:image:width",
                            content: m.width
                        }) : null, m.height ? (0, a.jsx)("meta", {
                            property: "og:image:height",
                            content: m.height
                        }) : null]
                    }), (0, a.jsx)("meta", {
                        name: "twitter:card",
                        content: "summary_image"
                    }), (0, a.jsx)("meta", {
                        name: "theme-color",
                        content: "#d7d1c6"
                    }), (0, a.jsx)("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, maximum-scale=1"
                    })]
                })
            }
        },
        7246: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                __N_SSP: function() {
                    return m
                },
                default: function() {
                    return s
                }
            });
            var a = n(5893),
                i = n(3158),
                r = n(8833),
                o = n(8744),
                m = !0;

            function s(t) {
                let {
                    page: e,
                    footer: n
                } = t;
                return (0, a.jsxs)("div", {
                    className: "home",
                    children: [e && (0, a.jsx)(r.Z, {
                        data: e.seo
                    }), e && (0, a.jsx)(o.W, {
                        items: e.content
                    }), n && (0, a.jsx)(i.Z, {
                        data: n
                    })]
                })
            }
        },
        9008: function(t, e, n) {
            t.exports = n(3867)
        }
    },
    function(t) {
        t.O(0, [1894, 3158, 2888, 9774, 179], function() {
            return t(t.s = 8312)
        }), _N_E = t.O()
    }
]);