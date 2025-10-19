(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/common/mg-cell"],
  {
    2196: function _(t, n, e) {
      "use strict";
      e.d(n, "b", function () {
        return c;
      }),
        e.d(n, "c", function () {
          return a;
        }),
        e.d(n, "a", function () {});
      var c = function c() {
          var t = this.$createElement,
            n =
              (this._self._c,
              this.__get_style([{ background: this.bgc }, this.sname]));
          this.$mp.data = Object.assign({}, { $root: { s0: n } });
        },
        a = [];
    },
    "346b": function b(t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0);
      var c = {
        name: "mg-cell",
        props: {
          bgc: { type: String, default: "" },
          htc: "",
          last: "",
          cname: "",
          noc: "",
          sname: "",
          isl: "",
          isr: "",
          iconn: "",
          ht: "",
          hdc: "",
          hw: "",
          img: "",
          m: { type: String, default: "aspectFill" },
          w: "",
          h: "",
          brs: "",
          imgr: "",
          bdmw: { type: String, default: "0" },
          btt: "",
          bttc: "",
          bbt: "",
          ft: "",
          ftc: "",
          color: "",
          arrow: "",
          ac: "",
          asize: "",
          acolor: "",
          hc: { type: String, value: "" },
        },
        data: function data() {
          return {};
        },
        computed: {},
        methods: {
          maskTap: function maskTap() {
            this.$emit("input", !1);
          },
        },
      };
      n.default = c;
    },
    9530: function _(t, n, e) {},
    baca: function baca(t, n, e) {
      "use strict";
      var c = e("9530"),
        a = e.n(c);
      a.a;
    },
    ef8f: function ef8f(t, n, e) {
      "use strict";
      e.r(n);
      var c = e("346b"),
        a = e.n(c);
      for (var i in c) {
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return c[t];
            });
          })(i);
      }
      n["default"] = a.a;
    },
    f3fc: function f3fc(t, n, e) {
      "use strict";
      e.r(n);
      var c = e("2196"),
        a = e("ef8f");
      for (var i in a) {
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return a[t];
            });
          })(i);
      }
      e("baca");
      var r = e("f0c5"),
        u = Object(r["a"])(
          a["default"],
          c["b"],
          c["c"],
          !1,
          null,
          "321ac44c",
          null,
          !1,
          c["a"],
          void 0
        );
      n["default"] = u.exports;
    },
  },
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  "components/common/mg-cell-create-component",
  {
    "components/common/mg-cell-create-component":
      function componentsCommonMgCellCreateComponent(
        module,
        exports,
        __webpack_require__
      ) {
        __webpack_require__("543d")["createComponent"](
          __webpack_require__("f3fc")
        );
      },
  },
  [["components/common/mg-cell-create-component"]],
]);
