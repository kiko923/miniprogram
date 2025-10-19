(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/form/mg-input"],
  {
    1250: function _(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var u = {
        name: "mg-input",
        components: {
          MgCell: function MgCell() {
            n.e("components/common/mg-cell")
              .then(
                function () {
                  return resolve(n("f3fc"));
                }.bind(null, n)
              )
              .catch(n.oe);
          },
        },
        props: {
          cname: { type: String, default: "p23" },
          sname: "",
          last: "",
          iconn: { type: String, default: "" },
          formt: { type: String, default: "1" },
          hw: { type: String, default: "" },
          isl: { type: String, default: "" },
          isr: { type: String, default: "" },
          ht: { type: String, default: "" },
          htc: { type: String, default: "" },
          ft: { type: String, default: "" },
          ftc: { type: String, default: "" },
          arrow: { type: String, default: "" },
          dis: { type: [Boolean, String], default: !1 },
          t: { type: String, default: "text" },
          value: { type: String, default: "" },
          icn: { type: String, default: "" },
          max: { type: [String, Number], default: 60 },
          pr: { type: String, default: "" },
        },
        data: function data() {
          return {};
        },
        computed: {
          inputVal: {
            get: function get() {
              return this.value;
            },
            set: function set(t) {
              this.$emit("input", t);
            },
          },
        },
        methods: {
          switchChange: function switchChange(t) {
            this.$emit("input", t.detail.value ? "1" : "2"),
              console.log(t.detail.value);
          },
          maskTap: function maskTap() {
            this.$emit("input", !1);
          },
        },
      };
      e.default = u;
    },
    "4d93": function d93(t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return u;
      }),
        n.d(e, "c", function () {
          return i;
        }),
        n.d(e, "a", function () {});
      var u = function u() {
          var t = this.$createElement;
          this._self._c;
        },
        i = [];
    },
    "5af8": function af8(t, e, n) {
      "use strict";
      n.r(e);
      var u = n("4d93"),
        i = n("b41e");
      for (var a in i) {
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(a);
      }
      n("fbbd");
      var r = n("f0c5"),
        f = Object(r["a"])(
          i["default"],
          u["b"],
          u["c"],
          !1,
          null,
          "75b9cb55",
          null,
          !1,
          u["a"],
          void 0
        );
      e["default"] = f.exports;
    },
    "7b5c": function b5c(t, e, n) {},
    b41e: function b41e(t, e, n) {
      "use strict";
      n.r(e);
      var u = n("1250"),
        i = n.n(u);
      for (var a in u) {
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return u[t];
            });
          })(a);
      }
      e["default"] = i.a;
    },
    fbbd: function fbbd(t, e, n) {
      "use strict";
      var u = n("7b5c"),
        i = n.n(u);
      i.a;
    },
  },
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  "components/form/mg-input-create-component",
  {
    "components/form/mg-input-create-component":
      function componentsFormMgInputCreateComponent(
        module,
        exports,
        __webpack_require__
      ) {
        __webpack_require__("543d")["createComponent"](
          __webpack_require__("5af8")
        );
      },
  },
  [["components/form/mg-input-create-component"]],
]);
