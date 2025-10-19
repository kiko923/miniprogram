(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/drag/attenTion"],
  {
    "08e5": function e5(t, e, n) {},
    "0dc3": function dc3(t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "c", function () {
          return o;
        }),
        n.d(e, "a", function () {});
      var r = function r() {
          var t = this.$createElement,
            e = (this._self._c, this.showTips ? this.util.getSb() : null);
          this.$mp.data = Object.assign({}, { $root: { g0: e } });
        },
        o = [];
    },
    "157b": function b(t, e, n) {
      "use strict";
      (function (t) {
        var r = n("4ea4");
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var o = r(n("9523")),
          c = n("26cb");
        function i(t, e) {
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
        var u = {
          name: "attenTion",
          components: {},
          props: ["co"],
          data: function data() {
            return {};
          },
          methods: {
            close: function close() {
              (this.$store.state.config.showTips = !1),
                t.setStorageSync("tips", !0);
            },
          },
          computed: (function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? i(Object(n), !0).forEach(function (e) {
                    (0, o.default)(t, e, n[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : i(Object(n)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(n, e)
                    );
                  });
            }
            return t;
          })(
            {},
            (0, c.mapState)({
              showTips: function showTips(t) {
                return t.config.showTips;
              },
            })
          ),
        };
        e.default = u;
      }).call(this, n("543d")["default"]);
    },
    "8f00": function f00(t, e, n) {
      "use strict";
      n.r(e);
      var r = n("0dc3"),
        o = n("bd3e");
      for (var c in o) {
        ["default"].indexOf(c) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return o[t];
            });
          })(c);
      }
      n("9c96");
      var i = n("f0c5"),
        u = Object(i["a"])(
          o["default"],
          r["b"],
          r["c"],
          !1,
          null,
          "7365573a",
          null,
          !1,
          r["a"],
          void 0
        );
      e["default"] = u.exports;
    },
    "9c96": function c96(t, e, n) {
      "use strict";
      var r = n("08e5"),
        o = n.n(r);
      o.a;
    },
    bd3e: function bd3e(t, e, n) {
      "use strict";
      n.r(e);
      var r = n("157b"),
        o = n.n(r);
      for (var c in r) {
        ["default"].indexOf(c) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(c);
      }
      e["default"] = o.a;
    },
  },
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  "components/drag/attenTion-create-component",
  {
    "components/drag/attenTion-create-component":
      function componentsDragAttenTionCreateComponent(
        module,
        exports,
        __webpack_require__
      ) {
        __webpack_require__("543d")["createComponent"](
          __webpack_require__("8f00")
        );
      },
  },
  [["components/drag/attenTion-create-component"]],
]);
