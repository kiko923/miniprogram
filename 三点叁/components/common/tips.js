(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/common/tips"],
  {
    "3c58": function c58(t, e, n) {
      "use strict";
      n.r(e);
      var r = n("6f8c"),
        c = n.n(r);
      for (var o in r) {
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(o);
      }
      e["default"] = c.a;
    },
    "3d42": function d42(t, e, n) {},
    4951: function _(t, e, n) {
      "use strict";
      n.r(e);
      var r = n("7114"),
        c = n("3c58");
      for (var o in c) {
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return c[t];
            });
          })(o);
      }
      n("8650");
      var u = n("f0c5"),
        i = Object(u["a"])(
          c["default"],
          r["b"],
          r["c"],
          !1,
          null,
          "47e064b7",
          null,
          !1,
          r["a"],
          void 0
        );
      e["default"] = i.exports;
    },
    "6f8c": function f8c(t, e, n) {
      "use strict";
      (function (t) {
        var r = n("4ea4");
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var c = r(n("9523")),
          o = n("26cb");
        function u(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e &&
              (r = r.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        var i = {
          name: "tips",
          components: {},
          props: { name: { type: String, default: "" } },
          data: function data() {
            return {};
          },
          methods: {
            close: function close() {
              (this.$store.state.showTips = !1), t.setStorageSync("tips", !0);
            },
          },
          computed: (function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? u(Object(n), !0).forEach(function (e) {
                    (0, c.default)(t, e, n[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : u(Object(n)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(n, e)
                    );
                  });
            }
            return t;
          })({}, (0, o.mapState)(["showTips"])),
          watch: {},
        };
        e.default = i;
      }).call(this, n("543d")["default"]);
    },
    7114: function _(t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "c", function () {
          return c;
        }),
        n.d(e, "a", function () {});
      var r = function r() {
          var t = this.$createElement;
          this._self._c;
        },
        c = [];
    },
    8650: function _(t, e, n) {
      "use strict";
      var r = n("3d42"),
        c = n.n(r);
      c.a;
    },
  },
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  "components/common/tips-create-component",
  {
    "components/common/tips-create-component":
      function componentsCommonTipsCreateComponent(
        module,
        exports,
        __webpack_require__
      ) {
        __webpack_require__("543d")["createComponent"](
          __webpack_require__("4951")
        );
      },
  },
  [["components/common/tips-create-component"]],
]);
