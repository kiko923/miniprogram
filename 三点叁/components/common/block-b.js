(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/common/block-b"],
  {
    "0c74": function c74(t, e, o) {
      "use strict";
      o.r(e);
      var n = o("9887"),
        r = o.n(n);
      for (var l in n) {
        ["default"].indexOf(l) < 0 &&
          (function (t) {
            o.d(e, t, function () {
              return n[t];
            });
          })(l);
      }
      e["default"] = r.a;
    },
    9887: function _(t, e, o) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var n = {
        name: "popup",
        props: {
          cName: { type: String, default: "" },
          sname: "",
          type: { type: String, default: "1" },
          t: { type: String, default: "" },
          color: { type: String, default: "" },
          block: { type: String, default: "" },
        },
        methods: {},
      };
      e.default = n;
    },
    "9d64": function d64(t, e, o) {
      "use strict";
      o.r(e);
      var n = o("fa59"),
        r = o("0c74");
      for (var l in r) {
        ["default"].indexOf(l) < 0 &&
          (function (t) {
            o.d(e, t, function () {
              return r[t];
            });
          })(l);
      }
      var a = o("f0c5"),
        c = Object(a["a"])(
          r["default"],
          n["b"],
          n["c"],
          !1,
          null,
          "230ae7b1",
          null,
          !1,
          n["a"],
          void 0
        );
      e["default"] = c.exports;
    },
    fa59: function fa59(t, e, o) {
      "use strict";
      o.d(e, "b", function () {
        return n;
      }),
        o.d(e, "c", function () {
          return r;
        }),
        o.d(e, "a", function () {});
      var n = function n() {
          var t = this,
            e = t.$createElement,
            o =
              (t._self._c,
              1 == t.type
                ? t.__get_style([
                    {
                      background: t.color,
                      borderColor: t.color,
                      display: t.block && "block",
                    },
                    t.sname,
                  ])
                : null),
            n =
              1 != t.type && 2 == t.type
                ? t.__get_style([
                    {
                      color: t.color,
                      borderColor: t.color,
                      display: t.block && "block",
                    },
                    t.sname,
                  ])
                : null;
          t.$mp.data = Object.assign({}, { $root: { s0: o, s1: n } });
        },
        r = [];
    },
  },
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  "components/common/block-b-create-component",
  {
    "components/common/block-b-create-component":
      function componentsCommonBlockBCreateComponent(
        module,
        exports,
        __webpack_require__
      ) {
        __webpack_require__("543d")["createComponent"](
          __webpack_require__("9d64")
        );
      },
  },
  [["components/common/block-b-create-component"]],
]);
