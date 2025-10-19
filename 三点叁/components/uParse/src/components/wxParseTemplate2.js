(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/uParse/src/components/wxParseTemplate2"],
  {
    "2fd9": function fd9(e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0);
      var o = {
        name: "wxParseTemplate2",
        props: { node: {} },
        components: {
          wxParseTemplate: function wxParseTemplate() {
            t.e("components/uParse/src/components/wxParseTemplate3")
              .then(
                function () {
                  return resolve(t("9859"));
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
    5251: function _(e, n, t) {
      "use strict";
      t.r(n);
      var o = t("2fd9"),
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
    cc9b: function cc9b(e, n, t) {
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
    fec0: function fec0(e, n, t) {
      "use strict";
      t.r(n);
      var o = t("cc9b"),
        r = t("5251");
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
  },
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  "components/uParse/src/components/wxParseTemplate2-create-component",
  {
    "components/uParse/src/components/wxParseTemplate2-create-component":
      function componentsUParseSrcComponentsWxParseTemplate2CreateComponent(
        module,
        exports,
        __webpack_require__
      ) {
        __webpack_require__("543d")["createComponent"](
          __webpack_require__("fec0")
        );
      },
  },
  [["components/uParse/src/components/wxParseTemplate2-create-component"]],
]);
