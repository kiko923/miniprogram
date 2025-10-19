(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/common/footc"],
  {
    "29da": function da(t, n, o) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0);
      o("26cb");
      var e = {
        name: "footc",
        props: { bottom: { type: String, default: "" } },
        data: function data() {
          return {
            goLink: function goLink() {
              this.system.copyright.support_link &&
                this.go({
                  t: 1,
                  url:
                    "/yb_wm/other/web-view?src=" +
                    encodeURIComponent(
                      JSON.stringify(this.system.copyright.support_link)
                    ),
                });
            },
          };
        },
      };
      n.default = e;
    },
    6784: function _(t, n, o) {
      "use strict";
      var e = o("f50d"),
        i = o.n(e);
      i.a;
    },
    "884b": function b(t, n, o) {
      "use strict";
      o.r(n);
      var e = o("b709"),
        i = o("aaba");
      for (var r in i) {
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            o.d(n, t, function () {
              return i[t];
            });
          })(r);
      }
      o("6784");
      var u = o("f0c5"),
        a = Object(u["a"])(
          i["default"],
          e["b"],
          e["c"],
          !1,
          null,
          "13f45034",
          null,
          !1,
          e["a"],
          void 0
        );
      n["default"] = a.exports;
    },
    aaba: function aaba(t, n, o) {
      "use strict";
      o.r(n);
      var e = o("29da"),
        i = o.n(e);
      for (var r in e) {
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            o.d(n, t, function () {
              return e[t];
            });
          })(r);
      }
      n["default"] = i.a;
    },
    b709: function b709(t, n, o) {
      "use strict";
      o.d(n, "b", function () {
        return e;
      }),
        o.d(n, "c", function () {
          return i;
        }),
        o.d(n, "a", function () {});
      var e = function e() {
          var t = this.$createElement;
          this._self._c;
        },
        i = [];
    },
    f50d: function f50d(t, n, o) {},
  },
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  "components/common/footc-create-component",
  {
    "components/common/footc-create-component":
      function componentsCommonFootcCreateComponent(
        module,
        exports,
        __webpack_require__
      ) {
        __webpack_require__("543d")["createComponent"](
          __webpack_require__("884b")
        );
      },
  },
  [["components/common/footc-create-component"]],
]);
