(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [95], {
    95: function(e, n, t) {
      "use strict";
      t.r(n), t.d(n, {
        default: function() {
          return l
        }
      });
      var s = t(5893),
        i = t(1100),
        c = t(3555),
        a = t.n(c);

      function l(e) {
        let {
          item: n
        } = e;
        return (0, s.jsxs)("section", {
          className: a().techSpecsContainer,
          children: [(0, s.jsx)("h2", {
            children: n.title
          }), (0, s.jsxs)("div", {
            className: a().specsContainer,
            children: [n.image.data ? (0, s.jsx)(i.p, {
              image: n.image.data,
              fallbackAlt: "Tech Specs Image",
              width: 881,
              height: 446
            }) : null, (0, s.jsx)("ul", {
              children: n.items.map(e => (0, s.jsx)("li", {
                children: e.label
              }, e.id))
            })]
          })]
        })
      }
    },
    3555: function(e) {
      e.exports = {
        techSpecsContainer: "ListSection_techSpecsContainer__kJb7q",
        specsContainer: "ListSection_specsContainer__ovpYG"
      }
    }
  }
]);