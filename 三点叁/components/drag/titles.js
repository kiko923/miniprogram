(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/drag/titles"],
  {
    "0072": function _(t, n, e) {
      "use strict";
      e.r(n);
      var u = e("f391"),
        r = e("adb9");
      for (var f in r) {
        ["default"].indexOf(f) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return r[t];
            });
          })(f);
      }
      e("f939");
      var a = e("f0c5"),
        c = Object(a["a"])(
          r["default"],
          u["b"],
          u["c"],
          !1,
          null,
          "cf05b776",
          null,
          !1,
          u["a"],
          void 0
        );
      n["default"] = c.exports;
    },
    "0a59": function a59(t, n, e) {},
    7874: function _(t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0);
      var u = {
        name: "titles",
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
        methods: {
          goLink: function goLink(t) {
            this.goUrl(t.url);
          },
        },
        created: function created() {},
      };
      n.default = u;
    },
    adb9: function adb9(t, n, e) {
      "use strict";
      e.r(n);
      var u = e("7874"),
        r = e.n(u);
      for (var f in u) {
        ["default"].indexOf(f) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return u[t];
            });
          })(f);
      }
      n["default"] = r.a;
    },
    f391: function f391(t, n, e) {
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
    f939: function f939(t, n, e) {
      "use strict";
      var u = e("0a59"),
        r = e.n(u);
      r.a;
    },
  },
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  "components/drag/titles-create-component",
  {
    "components/drag/titles-create-component":
      function componentsDragTitlesCreateComponent(
        module,
        exports,
        __webpack_require__
      ) {
        __webpack_require__("543d")["createComponent"](
          __webpack_require__("0072")
        );
      },
  },
  [["components/drag/titles-create-component"]],
]);
