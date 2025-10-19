(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/drag/remind"],
  {
    "1d3f": function d3f(n, t, e) {
      "use strict";
      e.r(t);
      var i = e("f82f"),
        u = e("f11eb");
      for (var c in u) {
        ["default"].indexOf(c) < 0 &&
          (function (n) {
            e.d(t, n, function () {
              return u[n];
            });
          })(c);
      }
      e("c553");
      var o = e("f0c5"),
        a = Object(o["a"])(
          u["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "00153027",
          null,
          !1,
          i["a"],
          void 0
        );
      t["default"] = a.exports;
    },
    "8ca4": function ca4(n, t, e) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = {
        name: "remind",
        data: function data() {
          return {
            img: "../../../static/tubiao/xuanfu.png",
            activeIndex: 0,
            intnum: void 0,
          };
        },
        computed: {
          top: function top() {
            return 30 * -this.activeIndex + "px";
          },
        },
        props: ["co"],
        mounted: function mounted() {},
        methods: {
          ScrollUp: function ScrollUp() {
            var n = this;
            this.intnum = setInterval(function (t) {
              n.activeIndex < n.co.numberList.length
                ? (n.activeIndex += 1)
                : (n.activeIndex = 0);
            }, 1e3);
          },
          Stop: function Stop() {
            clearInterval(this.intnum);
          },
          Up: function Up() {
            this.ScrollUp();
          },
        },
      };
      t.default = i;
    },
    c553: function c553(n, t, e) {
      "use strict";
      var i = e("de34"),
        u = e.n(i);
      u.a;
    },
    de34: function de34(n, t, e) {},
    f11eb: function f11eb(n, t, e) {
      "use strict";
      e.r(t);
      var i = e("8ca4"),
        u = e.n(i);
      for (var c in i) {
        ["default"].indexOf(c) < 0 &&
          (function (n) {
            e.d(t, n, function () {
              return i[n];
            });
          })(c);
      }
      t["default"] = u.a;
    },
    f82f: function f82f(n, t, e) {
      "use strict";
      e.d(t, "b", function () {
        return i;
      }),
        e.d(t, "c", function () {
          return u;
        }),
        e.d(t, "a", function () {});
      var i = function i() {
          var n = this.$createElement;
          this._self._c;
        },
        u = [];
    },
  },
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  "components/drag/remind-create-component",
  {
    "components/drag/remind-create-component":
      function componentsDragRemindCreateComponent(
        module,
        exports,
        __webpack_require__
      ) {
        __webpack_require__("543d")["createComponent"](
          __webpack_require__("1d3f")
        );
      },
  },
  [["components/drag/remind-create-component"]],
]);
