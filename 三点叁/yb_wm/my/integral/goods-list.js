(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/my/integral/goods-list"],
  {
    "1e89": function e89(t, n, e) {
      "use strict";
      e.r(n);
      var i = e("6315"),
        u = e("a00e");
      for (var o in u) {
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return u[t];
            });
          })(o);
      }
      e("9093");
      var r = e("f0c5"),
        c = Object(r["a"])(
          u["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "582cf343",
          null,
          !1,
          i["a"],
          void 0
        );
      n["default"] = c.exports;
    },
    4018: function _(t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0);
      e("26cb");
      var i = {
        name: "goods-list",
        props: {
          co: {
            type: Object,
            default: function _default() {
              return {};
            },
          },
          list: {
            type: Array,
            default: function _default() {
              return [];
            },
          },
        },
        data: function data() {
          return {};
        },
        computed: {
          jfName: function jfName() {
            return this.system.custom.integral;
          },
          goodsList: function goodsList() {
            return this.list;
          },
        },
        methods: {
          onClick: function onClick() {
            this.$emit("click");
          },
        },
      };
      n.default = i;
    },
    "532d": function d(t, n, e) {},
    6315: function _(t, n, e) {
      "use strict";
      e.d(n, "b", function () {
        return i;
      }),
        e.d(n, "c", function () {
          return u;
        }),
        e.d(n, "a", function () {});
      var i = function i() {
          var t = this.$createElement,
            n = (this._self._c, this.goodsList.length);
          this.$mp.data = Object.assign({}, { $root: { g0: n } });
        },
        u = [];
    },
    9093: function _(t, n, e) {
      "use strict";
      var i = e("532d"),
        u = e.n(i);
      u.a;
    },
    a00e: function a00e(t, n, e) {
      "use strict";
      e.r(n);
      var i = e("4018"),
        u = e.n(i);
      for (var o in i) {
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return i[t];
            });
          })(o);
      }
      n["default"] = u.a;
    },
  },
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  "yb_wm/my/integral/goods-list-create-component",
  {
    "yb_wm/my/integral/goods-list-create-component":
      function yb_wmMyIntegralGoodsListCreateComponent(
        module,
        exports,
        __webpack_require__
      ) {
        __webpack_require__("543d")["createComponent"](
          __webpack_require__("1e89")
        );
      },
  },
  [["yb_wm/my/integral/goods-list-create-component"]],
]);
