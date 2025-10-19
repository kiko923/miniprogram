(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/form/mg-agree"],
  {
    "228a": function a(n, t, e) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var c = {
        components: {
          MgCell: function MgCell() {
            e.e("components/common/mg-cell")
              .then(
                function () {
                  return resolve(e("f3fc"));
                }.bind(null, e)
              )
              .catch(e.oe);
          },
        },
        props: {
          title: "",
          value: "",
          color: "",
          p: "",
          cname: "",
          sname: "",
          type: { type: String, default: "1" },
        },
        data: function data() {
          return {};
        },
        computed: {
          cbVal: {
            get: function get() {
              return this.value;
            },
            set: function set(n) {
              this.$emit("input", n);
            },
          },
        },
        methods: {
          checkboxChange: function checkboxChange(n) {
            this.cbVal = !this.cbVal;
          },
        },
      };
      t.default = c;
    },
    "31d2": function d2(n, t, e) {
      "use strict";
      var c = e("8958"),
        u = e.n(c);
      u.a;
    },
    "71e1": function e1(n, t, e) {
      "use strict";
      e.r(t);
      var c = e("228a"),
        u = e.n(c);
      for (var o in c) {
        ["default"].indexOf(o) < 0 &&
          (function (n) {
            e.d(t, n, function () {
              return c[n];
            });
          })(o);
      }
      t["default"] = u.a;
    },
    "801b": function b(n, t, e) {
      "use strict";
      e.d(t, "b", function () {
        return c;
      }),
        e.d(t, "c", function () {
          return u;
        }),
        e.d(t, "a", function () {});
      var c = function c() {
          var n = this.$createElement;
          this._self._c;
        },
        u = [];
    },
    8958: function _(n, t, e) {},
    a8e6: function a8e6(n, t, e) {
      "use strict";
      e.r(t);
      var c = e("801b"),
        u = e("71e1");
      for (var o in u) {
        ["default"].indexOf(o) < 0 &&
          (function (n) {
            e.d(t, n, function () {
              return u[n];
            });
          })(o);
      }
      e("31d2");
      var a = e("f0c5"),
        i = Object(a["a"])(
          u["default"],
          c["b"],
          c["c"],
          !1,
          null,
          "9daa40b8",
          null,
          !1,
          c["a"],
          void 0
        );
      t["default"] = i.exports;
    },
  },
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  "components/form/mg-agree-create-component",
  {
    "components/form/mg-agree-create-component":
      function componentsFormMgAgreeCreateComponent(
        module,
        exports,
        __webpack_require__
      ) {
        __webpack_require__("543d")["createComponent"](
          __webpack_require__("a8e6")
        );
      },
  },
  [["components/form/mg-agree-create-component"]],
]);
