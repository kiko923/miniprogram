(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/goods/add-goods"],
  {
    "03a6": function a6(t, e, n) {
      "use strict";
      n.r(e);
      var o = n("1d35"),
        a = n.n(o);
      for (var d in o) {
        ["default"].indexOf(d) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return o[t];
            });
          })(d);
      }
      e["default"] = a.a;
    },
    "1d32": function d32(t, e, n) {
      "use strict";
      var o = n("dec8"),
        a = n.n(o);
      a.a;
    },
    "1d35": function d35(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      n("26cb");
      var o = {
        name: "add-goods",
        props: {
          co: {
            type: Object,
            default: function _default() {
              return {};
            },
          },
          cname: { type: String, default: "" },
          numc: String,
          addwz: { type: String, default: "1" },
          outin: { type: String, default: "1" },
          pcname: "",
          isprice: { type: Number, default: 1 },
          isyprice: { type: Boolean, default: !1 },
          isunit: { type: Boolean, default: !1 },
          showspec: { type: Boolean, default: !0 },
          showjj: { type: Boolean, default: !0 },
          nocheckgd: { type: Boolean, default: !1 },
          addgb: { type: Boolean, default: !0 },
          color: { type: String, default: "" },
        },
        data: function data() {
          return {};
        },
        computed: {
          isClose: function isClose() {
            return this.nocheckgd || this.addgb;
          },
        },
        methods: {},
      };
      e.default = o;
    },
    3488: function _(t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return o;
      }),
        n.d(e, "c", function () {
          return a;
        }),
        n.d(e, "a", function () {});
      var o = function o() {
          var t = this,
            e = t.$createElement;
          t._self._c;
          t._isMounted ||
            ((t.e0 = function (e) {
              e.stopPropagation(),
                t.isClose && t.$emit("add", { addwz: t.addwz });
            }),
            (t.e1 = function (e) {
              e.stopPropagation(),
                t.isClose && t.$emit("dec", { addwz: t.addwz });
            }),
            (t.e2 = function (e) {
              e.stopPropagation(),
                t.isClose && t.$emit("add", { addwz: t.addwz });
            }));
        },
        a = [];
    },
    c7a2: function c7a2(t, e, n) {
      "use strict";
      n.r(e);
      var o = n("3488"),
        a = n("03a6");
      for (var d in a) {
        ["default"].indexOf(d) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(d);
      }
      n("1d32");
      var u = n("f0c5"),
        i = Object(u["a"])(
          a["default"],
          o["b"],
          o["c"],
          !1,
          null,
          "ad94365a",
          null,
          !1,
          o["a"],
          void 0
        );
      e["default"] = i.exports;
    },
    dec8: function dec8(t, e, n) {},
  },
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  "components/goods/add-goods-create-component",
  {
    "components/goods/add-goods-create-component":
      function componentsGoodsAddGoodsCreateComponent(
        module,
        exports,
        __webpack_require__
      ) {
        __webpack_require__("543d")["createComponent"](
          __webpack_require__("c7a2")
        );
      },
  },
  [["components/goods/add-goods-create-component"]],
]);
