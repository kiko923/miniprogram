(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/uParse/src/components/wxParseTemplate3"],
  {
    "5d0c": function d0c(e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0);
      var o = {
        name: "wxParseTemplate3",
        props: { node: {} },
        components: {
          wxParseTemplate: function wxParseTemplate() {
            t.e("components/uParse/src/components/wxParseTemplate4")
              .then(
                function () {
                  return resolve(t("6e82"));
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
    "80d1": function d1(e, n, t) {
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
    9859: function _(e, n, t) {
      "use strict";
      t.r(n);
      var o = t("80d1"),
        r = t("af65");
      for (var c in r) {
        ["default"].indexOf(c) < 0 &&
          (function (e) {
            t.d(n, e, function () {
              return r[e];
            });
          })(c);
      }
      var a = t("f0c5"),
        u = Object(a["a"])(
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
    af65: function af65(e, n, t) {
      "use strict";
      t.r(n);
      var o = t("5d0c"),
        r = t.n(o);
      for (var c in o) {
        ["default"].indexOf(c) < 0 &&
          (function (e) {
            t.d(n, e, function () {
              return o[e];
            });
          })(c);
      }
      n["default"] = r.a;
    },
  },
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  "components/uParse/src/components/wxParseTemplate3-create-component",
  {
    "components/uParse/src/components/wxParseTemplate3-create-component":
      function componentsUParseSrcComponentsWxParseTemplate3CreateComponent(
        module,
        exports,
        __webpack_require__
      ) {
        __webpack_require__("543d")["createComponent"](
          __webpack_require__("9859")
        );
      },
  },
  [["components/uParse/src/components/wxParseTemplate3-create-component"]],
]);
