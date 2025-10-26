(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [672], {
    1919: function(e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push(["/forgotten-password", function() {
        return n(9234)
      }])
    },
    8833: function(e, t, n) {
      "use strict";
      var s = n(5893),
        a = n(9008),
        r = n.n(a),
        o = n(2881);
      t.Z = e => {
        var t;
        let {
          data: n
        } = e, a = n.metaTitle ? n.metaTitle : n.title ? "Blend | ".concat(n.title) : "Pebble Mobility", i = (null === (t = n.metaImage) || void 0 === t ? void 0 : t.data) ? {
          url: o.$N(n.metaImage.data.attributes.url),
          width: n.metaImage.data.attributes.width,
          height: n.metaImage.data.attributes.height,
          type: n.metaImage.data.attributes.mime
        } : void 0;
        return (0, s.jsxs)(r(), {
          children: [(0, s.jsx)("title", {
            children: a
          }), (0, s.jsx)("meta", {
            property: "og:title",
            content: a
          }, "title"), (0, s.jsx)("meta", {
            property: "og:site_name",
            content: "Pebble"
          }), n.metaDescription && (0, s.jsx)("meta", {
            name: "description",
            content: n.metaDescription
          }), i && (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)("meta", {
              property: "og:image",
              content: i.url
            }), (0, s.jsx)("meta", {
              property: "og:image:type",
              content: i.type
            }), i.width ? (0, s.jsx)("meta", {
              property: "og:image:width",
              content: i.width
            }) : null, i.height ? (0, s.jsx)("meta", {
              property: "og:image:height",
              content: i.height
            }) : null]
          }), (0, s.jsx)("meta", {
            name: "twitter:card",
            content: "summary_large_image"
          }), (0, s.jsx)("meta", {
            name: "theme-color",
            content: "#d7d1c6"
          }), (0, s.jsx)("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1, maximum-scale=1"
          })]
        })
      }
    },
    4211: function(e, t, n) {
      "use strict";
      n.d(t, {
        I: function() {
          return o
        }
      });
      var s = n(3977),
        a = n(1259);
      let r = (0, s.C6)().length ? (0, s.Mq)() : (0, s.ZF)({
          apiKey: "AIzaSyARZUfUCMdST-lqFjSYDymXKivzsNRfcM0",
          authDomain: "pebblerv-d321a.firebaseapp.com",
          databaseURL: "https://pebblerv-d321a-default-rtdb.firebaseio.com",
          projectId: "pebblerv-d321a",
          storageBucket: "pebblerv-d321a.firebasestorage.app",
          messagingSenderId: "1077327007729",
          appId: "1:1077327007729:web:1e72bf449c51fab95fbe50"
        }),
        o = (0, a.v0)(r)
    },
    9234: function(e, t, n) {
      "use strict";
      n.r(t), n.d(t, {
        __N_SSP: function() {
          return I
        },
        default: function() {
          return F
        }
      });
      var s = n(5893),
        a = n(958),
        r = n.n(a),
        o = n(7294),
        i = n(1664),
        l = n.n(i),
        c = n(9684),
        m = n(8964),
        d = n(7066);
      let {
        Axios: u,
        AxiosError: h,
        CanceledError: p,
        isCancel: f,
        CancelToken: g,
        VERSION: w,
        all: x,
        Cancel: b,
        isAxiosError: _,
        spread: j,
        toFormData: C,
        AxiosHeaders: y,
        HttpStatusCode: P,
        formToJSON: N,
        getAdapter: v,
        mergeConfig: S
      } = d.default;
      var k = n(4211),
        T = n(1259),
        A = n(1100),
        E = n(8833),
        I = !0;

      function F(e) {
        let {
          page: t
        } = e, [n, a] = (0, o.useState)(() => c.jw.NotAsked());
        async function i(e) {
          a(c.jw.Loading());
          let t = await D(e);
          (0, m.EQ)(t).with(c.x4.P.Ok(m.P.any), () => a(c.jw.Done(c.x4.Ok(e)))).with(c.x4.P.Error(m.P.select()), e => {
            a(c.jw.Done(c.x4.Error(e)))
          }).exhaustive()
        }

        function d() {
          a(c.jw.NotAsked())
        }
        return (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(E.Z, {
            data: t.seo
          }), (0, s.jsxs)("main", {
            className: r().resetPasswordContainer,
            children: [(0, s.jsxs)("section", {
              className: r().imageContainer,
              children: [(0, s.jsx)(l(), {
                className: r().homeButton,
                href: "/",
                children: (0, s.jsxs)("svg", {
                  viewBox: "0 0 25 22",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [(0, s.jsx)("path", {
                    d: "M18.184 6.72867C16.5381 7.87183 14.5998 8.53698 12.5894 8.6485H12.4572C10.431 8.52934 8.47829 7.85774 6.81681 6.70862C5.53006 5.87653 3.86186 4.62338 4.00935 2.87398C4.11107 1.67095 5.43852 1.07947 6.43029 0.77871C6.84734 0.653395 7.26946 0.548128 7.6916 0.462913C10.6979 -0.118554 13.7869 -0.152531 16.8057 0.362663H16.8464C17.3092 0.447877 17.772 0.548129 18.2399 0.668432L18.6265 0.77871C19.6182 1.07947 20.9457 1.67095 21.0474 2.87398C21.2 4.62338 19.4351 5.88154 18.1484 6.72867H18.184Z",
                    fill: "#575349"
                  }), (0, s.jsx)("path", {
                    d: "M5.47042 7.88106C7.38065 8.67344 9.03911 9.95821 10.2716 11.6004L10.3072 11.6505L10.3479 11.7107C11.3905 13.3398 11.6601 15.41 11.6702 17.3549C11.6702 18.8837 11.3905 21.0742 10.002 21.8061C8.92889 22.3625 7.71334 21.5955 6.91993 20.9289C6.58934 20.6532 6.26892 20.3574 5.96376 20.0517C3.82406 17.8515 2.10153 15.2914 0.877773 12.4927V12.4576C0.694677 12.0265 0.521754 11.5854 0.369174 11.1292C0.328486 11.0039 0.287808 10.8736 0.252207 10.7433C-0.0427805 9.74074 -0.256399 8.32217 0.674336 7.57529C2.05772 6.48755 4.09212 7.26451 5.49586 7.88106H5.47042Z",
                    fill: "#575349"
                  }), (0, s.jsx)("path", {
                    d: "M19.5308 7.8835C17.6183 8.67447 15.9579 9.95942 14.7245 11.6029L14.689 11.653L14.6483 11.7131C13.6056 13.3422 13.3361 15.4124 13.3259 17.3573C13.3259 18.8862 13.6056 21.0767 14.9941 21.8085C16.0672 22.3649 17.2828 21.598 18.0762 20.9313C18.4068 20.6556 18.7272 20.3599 19.0324 20.0541C21.174 17.8555 22.8967 15.295 24.1184 12.4951V12.46C24.3015 12.0289 24.4744 11.5878 24.627 11.1317L24.749 10.7457C25.044 9.74318 25.2576 8.32461 24.3218 7.57773C22.9384 6.49 20.904 7.26695 19.5054 7.8835H19.5308Z",
                    fill: "#575349"
                  })]
                })
              }), (0, s.jsx)(A.p, {
                image: t.image.data
              })]
            }), (0, s.jsx)("section", {
              className: r().content,
              children: (0, m.EQ)(n).with(c.jw.P.Done(c.x4.P.Ok(m.P.select())), e => (0, s.jsx)(L, {
                email: e,
                onRetry: d
              })).otherwise(e => (0, s.jsx)(O, {
                submission: e,
                onSubmit: i
              }))
            })]
          })]
        })
      }

      function L(e) {
        let {
          email: t,
          onRetry: n
        } = e;
        return (0, s.jsxs)(B, {
          subtitle: "Check your email for instruction on how to reset your password",
          children: [(0, s.jsxs)("span", {
            className: r().emailSentInfo,
            children: ["Email sent to: ", t.toLowerCase()]
          }), (0, s.jsx)("span", {
            className: r().emailSentInfo,
            children: "(Please check your spam folder if you do not see it in your inbox)"
          }), (0, s.jsx)("button", {
            className: r().tryAgainButton,
            onClick: () => n(),
            children: "Not seeing it? Try again"
          })]
        })
      }

      function O(e) {
        let {
          submission: t,
          onSubmit: n
        } = e, a = async e => {
          e.preventDefault(), n(new FormData(e.currentTarget).get("email").toString())
        }, o = (0, m.EQ)(t).with(c.jw.P.Done(c.x4.P.Error(m.P.select())), e => c.Wx.Some(e)).otherwise(() => c.Wx.None());
        return (0, s.jsx)(B, {
          subtitle: "Enter your email to receive instructions",
          children: (0, s.jsx)("section", {
            className: r().formContainer,
            children: (0, s.jsxs)("form", {
              className: r().form,
              onSubmit: a,
              children: [o.match({
                Some: e => (0, s.jsx)("p", {
                  children: e.message
                }),
                None: () => null
              }), (0, s.jsx)("input", {
                type: "email",
                name: "email",
                required: !0,
                placeholder: "Email"
              }), (0, s.jsx)(l(), {
                className: r().forgotEmailCTA,
                href: "/contact",
                children: "Forgot email? Contact us"
              }), (0, s.jsx)("button", {
                type: "submit",
                children: "Submit"
              })]
            })
          })
        })
      }

      function B(e) {
        let {
          subtitle: t,
          children: n
        } = e;
        return (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)("h1", {
            className: r().title,
            children: "Reset password"
          }), (0, s.jsx)("h2", {
            className: r().subtitle,
            style: {
              width: "90%"
            },
            children: t
          }), n, (0, s.jsx)(l(), {
            className: r().backToSignInCTA,
            href: "/log-in",
            children: "Back to sign in"
          })]
        })
      }
      async function D(e) {
        try {
          let t = await fetch("".concat("https://pebblelife.com", "/api/check-firebase-user"), {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              email: e
            })
          });
          if ((await t.json()).exists) return console.log("in log-in firebaseUserAccount exists"), c.ol.fromPromise((0, T.LS)(k.I, e)).mapOk(() => ({
            message: "Password reset email sent via Firebase"
          })).mapError(e => ({
            message: "An unknown Firebase error occurred"
          }));
          return c.ol.fromPromise(d.default.post("/api/auth/forgotten-password", {
            email: e
          }, {
            headers: {
              "Content-Type": "application/json"
            }
          })).mapError(e => {
            var t, n;
            return _(e) && (null === (t = e.response) || void 0 === t ? void 0 : t.data) ? null === (n = e.response) || void 0 === n ? void 0 : n.data : {
              message: "An unknown error occured"
            }
          })
        } catch (e) {
          console.error("Firebase sign-up error:", e)
        }
      }
    },
    958: function(e) {
      e.exports = {
        resetPasswordContainer: "resetPassword_resetPasswordContainer__8a5VA",
        imageContainer: "resetPassword_imageContainer__3mFOX",
        homeButton: "resetPassword_homeButton__JoBBa",
        content: "resetPassword_content__hTA1O",
        title: "resetPassword_title__yGfO_",
        subtitle: "resetPassword_subtitle__wLhbw",
        formContainer: "resetPassword_formContainer__NTctL",
        form: "resetPassword_form__hYDfY",
        forgotEmailCTA: "resetPassword_forgotEmailCTA__r9r9A",
        emailSentInfo: "resetPassword_emailSentInfo__XFmcO",
        tryAgainButton: "resetPassword_tryAgainButton__zNioe",
        backToSignInCTA: "resetPassword_backToSignInCTA__0fUHe"
      }
    }
  },
  function(e) {
    e.O(0, [6420, 4478, 225, 2888, 9774, 179], function() {
      return e(e.s = 1919)
    }), _N_E = e.O()
  }
]);