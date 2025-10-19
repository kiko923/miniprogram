(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/uParse/src/components/wxParseTemplate4"],
  {
    "317f": function f(e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0);
      var o = {
        name: "wxParseTemplate4",
        props: { node: {} },
        components: {
          wxParseTemplate: function wxParseTemplate() {
            t.e("components/uParse/src/components/wxParseTemplate5")
              .then(
                function () {
                  return resolve(t("155b"));
                }.bind(null, t)
              )
              .catch(t.oe);
          },
          wxParseImg: function wxParseImg() {
            t.e("components/uParse/src/components/wxParseImg")
              .then(
                function () {
                  return resolve(t("de6c"));
                }.bind(null, t)
              )
              .catch(t.oe);
          },
          wxParseVideo: function wxParseVideo() {
            t.e("components/uParse/src/components/wxParseVideo")
              .then(
                function () {
                  return resolve(t("ade3"));
                }.bind(null, t)
              )
              .catch(t.oe);
          },
          wxParseAudio: function wxParseAudio() {
            t.e("components/uParse/src/components/wxParseAudio")
              .then(
                function () {
                  return resolve(t("c8d2"));
                }.bind(null, t)
              )
              .catch(t.oe);
          },
        },
        inject: ["uparse"],
        methods: {
          wxParseATap: function wxParseATap(e) {
            var n = e.currentTarget.dataset.href;
            n && this.uparse.navigate(n, e);
          },
        },
      };
      n.default = o;
    },
    "6b79": function b79(e, n, t) {
      "use strict";
      t.r(n);
      var o = t("317f"),
        r = t.n(o);
      for (var a in o) {
        ["default"].indexOf(a) < 0 &&
          (function (e) {
            t.d(n, e, function () {
              return o[e];
            });
          })(a);
      }
      n["default"] = r.a;
    },
    "6e82": function e82(e, n, t) {
      "use strict";
      t.r(n);
      var o = t("77a4"),
        r = t("6b79");
      for (var a in r) {
        ["default"].indexOf(a) < 0 &&
          (function (e) {
            t.d(n, e, function () {
              return r[e];
            });
          })(a);
      }
      var c = t("f0c5"),
        u = Object(c["a"])(
          r["default"],
          o["b"],
          o["c"],
          !1,
          null,
          null,
          null,
          !1,
          o["a"],
          void 0
        );
      n["default"] = u.exports;
    },
    "77a4": function a4(e, n, t) {
      "use strict";
      t.d(n, "b", function () {
        return o;
      }),
        t.d(n, "c", function () {
          return r;
        }),
        t.d(n, "a", function () {});
      var o = function o() {
          var e = this.$createElement;
          this._self._c;
        },
        r = [];
    },
  },
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  "components/uParse/src/components/wxParseTemplate4-create-component",
  {
    "components/uParse/src/components/wxParseTemplate4-create-component":
      function componentsUParseSrcComponentsWxParseTemplate4CreateComponent(
        module,
        exports,
        __webpack_require__
      ) {
        __webpack_require__("543d")["createComponent"](
          __webpack_require__("6e82")
        );
      },
  },
  [["components/uParse/src/components/wxParseTemplate4-create-component"]],
]);
