(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/uParse/src/components/wxParseTemplate6"],
  {
    2273: function _(e, n, t) {
      "use strict";
      t.r(n);
      var o = t("25ad"),
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
    "25ad": function ad(e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0);
      var o = {
        name: "wxParseTemplate6",
        props: { node: {} },
        components: {
          wxParseTemplate: function wxParseTemplate() {
            t.e("components/uParse/src/components/wxParseTemplate7")
              .then(
                function () {
                  return resolve(t("2219"));
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
    "59a2": function a2(e, n, t) {
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
    c125: function c125(e, n, t) {
      "use strict";
      t.r(n);
      var o = t("59a2"),
        r = t("2273");
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
  },
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  "components/uParse/src/components/wxParseTemplate6-create-component",
  {
    "components/uParse/src/components/wxParseTemplate6-create-component":
      function componentsUParseSrcComponentsWxParseTemplate6CreateComponent(
        module,
        exports,
        __webpack_require__
      ) {
        __webpack_require__("543d")["createComponent"](
          __webpack_require__("c125")
        );
      },
  },
  [["components/uParse/src/components/wxParseTemplate6-create-component"]],
]);
