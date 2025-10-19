(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/drag/margic"],
  {
    "0259": function _(t, n, e) {
      "use strict";
      e.d(n, "b", function () {
        return u;
      }),
        e.d(n, "c", function () {
          return r;
        }),
        e.d(n, "a", function () {});
      var u = function u() {
          var t = this.$createElement;
          this._self._c;
        },
        r = [];
    },
    "34f1": function f1(t, n, e) {
      "use strict";
      e.r(n);
      var u = e("0259"),
        r = e("4893");
      for (var c in r) {
        ["default"].indexOf(c) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return r[t];
            });
          })(c);
      }
      e("5e6c");
      var a = e("f0c5"),
        i = Object(a["a"])(
          r["default"],
          u["b"],
          u["c"],
          !1,
          null,
          "40e8a3a2",
          null,
          !1,
          u["a"],
          void 0
        );
      n["default"] = i.exports;
    },
    3628: function _(t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0);
      var u = {
        name: "margic",
        props: {
          co: {
            type: Object,
            default: function _default() {
              return {};
            },
          },
          u: { type: String, default: "px" },
        },
        data: function data() {
          return {};
        },
        computed: {
          imgH: function imgH() {
            return 2 * this.co.height + "rpx";
          },
        },
        methods: {
          goTo: function goTo(t) {
            this.goUrl(t.url, t);
          },
        },
      };
      n.default = u;
    },
    4893: function _(t, n, e) {
      "use strict";
      e.r(n);
      var u = e("3628"),
        r = e.n(u);
      for (var c in u) {
        ["default"].indexOf(c) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return u[t];
            });
          })(c);
      }
      n["default"] = r.a;
    },
    "5e6c": function e6c(t, n, e) {
      "use strict";
      var u = e("adb0"),
        r = e.n(u);
      r.a;
    },
    adb0: function adb0(t, n, e) {},
  },
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  "components/drag/margic-create-component",
  {
    "components/drag/margic-create-component":
      function componentsDragMargicCreateComponent(
        module,
        exports,
        __webpack_require__
      ) {
        __webpack_require__("543d")["createComponent"](
          __webpack_require__("34f1")
        );
      },
  },
  [["components/drag/margic-create-component"]],
]);
