"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6064], {
    8616: function(e, r, t) {
      var l = t(5893),
        n = t(7294),
        o = t(3205),
        c = t(6038);
      let a = (0, n.forwardRef)((e, r) => {
        let {
          children: a,
          href: i,
          target: s,
          mode: g = "white",
          ...u
        } = e, d = (0, n.useRef)(null), h = (0, n.useRef)(null), m = (0, n.useRef)(null);
        (0, n.useImperativeHandle)(r, () => ({
          getChars: b,
          getAnimation: f
        }));
        let b = () => h.current,
          f = () => x(),
          x = () => (m.current = c.p8.effects.blink(h.current), m.current),
          k = () => {
            x()
          };
        return (0, n.useEffect)(() => (d.current.addEventListener("mouseenter", k), () => {
          d.current && d.current.removeEventListener("mouseenter", k)
        }), []), (0, n.useEffect)(() => {
          let e = t(2392);
          h.current = new e({
            target: d.current,
            by: "chars"
          })[0].chars
        }, []), (0, l.jsx)("div", {
          ref: d,
          children: (0, l.jsx)(o.Z, {
            href: i,
            target: s,
            className: "button-" + g + " inline-block py-[2.4rem] px-[2.5rem] rounded-[1rem] text-10 leading-[180%] tracking-[0.05rem] uppercase xl:transition-transform xl:duration-global xl:ease-out xl:hover:scale-[1.04]",
            ...u,
            children: a
          })
        })
      });
      a.displayName = "Button", r.Z = a
    },
    6064: function(e, r, t) {
      t.r(r);
      var l = t(5893),
        n = t(8616),
        o = t(2881);
      r.default = e => {
        var r;
        let {
          item: t,
          items: c,
          index: a
        } = e;
        return (0, l.jsx)("section", {
          style: {
            zIndex: c.length - a
          },
          className: "\n        relative -mt-px grid grid-cols-6 lg:grid-cols-12 px-container py-[10rem] md:py-[15rem] lg:py-[19rem] min-h-[66.7rem] lg:h-screen items-center\n        ".concat("White" === t.backgroundColor.color ? "bg-white" : "Beige light" === t.backgroundColor.color ? "bg-light_beige" : "Beige dark" === t.backgroundColor.color ? "bg-dark_beige" : "Grey dark" === t.backgroundColor.color ? "bg-dark_grey" : "bg-green", " \n        ").concat("White" === t.backgroundColor.color ? "text-dark_grey" : "Beige light" === t.backgroundColor.color ? "text-dark_grey" : "Beige dark" === t.backgroundColor.color ? "text-white" : "Grey dark" === t.backgroundColor.color ? "text-white" : "text-light_beige", "\n      "),
          children: (0, l.jsxs)("div", {
            className: "flex flex-col items-center col-span-full lg:col-start-4 lg:col-end-10",
            children: [(0, l.jsx)("h2", {
              className: "w-full heading-56 lg:heading-120 text-center",
              children: t.title
            }), (0, l.jsx)("div", {
              className: "mt-[3.2rem] md:mt-[5.6rem]",
              children: (0, l.jsx)(n.Z, {
                mode: "light_beige",
                href: o.sI(t.button),
                target: null !== (r = t.button.target) && void 0 !== r ? r : "_self",
                children: t.button.title
              })
            })]
          })
        })
      }
    }
  }
]);