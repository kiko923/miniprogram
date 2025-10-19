(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/common/jzz"],
  {
    "3db1": function db1(t, n, e) {
      "use strict";
      e.r(n);
      var a = e("6f55"),
        u = e("493f");
      for (var o in u) {
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return u[t];
            });
          })(o);
      }
      e("dc2b");
      var i = e("f0c5"),
        r = Object(i["a"])(
          u["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "5bf55010",
          null,
          !1,
          a["a"],
          void 0
        );
      n["default"] = r.exports;
    },
    "493f": function f(t, n, e) {
      "use strict";
      e.r(n);
      var a = e("9272"),
        u = e.n(a);
      for (var o in a) {
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return a[t];
            });
          })(o);
      }
      n["default"] = u.a;
    },
    5032: function _(t, n, e) {},
    "6f55": function f55(t, n, e) {
      "use strict";
      e.d(n, "b", function () {
        return a;
      }),
        e.d(n, "c", function () {
          return u;
        }),
        e.d(n, "a", function () {});
      var a = function a() {
          var t = this.$createElement,
            n =
              (this._self._c,
              this.nodata ? this.__get_style([this.sname]) : null);
          this.$mp.data = Object.assign({}, { $root: { s0: n } });
        },
        u = [];
    },
    9272: function _(t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0);
      var a = {
        name: "mg-img",
        props: {
          sname: Object,
          imgn: { type: String, default: "zwdd" },
          bgcolor: "",
          mygd: { type: Boolean, default: !1 },
          tcolor: { type: String, default: "" },
          nodata: "",
          otext: { type: String, default: "" },
          ttext: { type: String, default: "" },
        },
        data: function data() {
          return {};
        },
      };
      n.default = a;
    },
    dc2b: function dc2b(t, n, e) {
      "use strict";
      var a = e("5032"),
        u = e.n(a);
      u.a;
    },
  },
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  "components/common/jzz-create-component",
  {
    "components/common/jzz-create-component":
      function componentsCommonJzzCreateComponent(
        module,
        exports,
        __webpack_require__
      ) {
        __webpack_require__("543d")["createComponent"](
          __webpack_require__("3db1")
        );
      },
  },
  [["components/common/jzz-create-component"]],
]);
