(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/my/other/ptxx"],
  {
    3731: function _(e, t, n) {
      "use strict";
      n.r(t);
      var r = n("4808"),
        c = n("e0cf");
      for (var o in c) {
        ["default"].indexOf(o) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return c[e];
            });
          })(o);
      }
      n("84a3");
      var u = n("f0c5"),
        a = Object(u["a"])(
          c["default"],
          r["b"],
          r["c"],
          !1,
          null,
          "40b5d031",
          null,
          !1,
          r["a"],
          void 0
        );
      t["default"] = a.exports;
    },
    4232: function _(e, t, n) {},
    4808: function _(e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return r;
      }),
        n.d(t, "c", function () {
          return c;
        }),
        n.d(t, "a", function () {});
      var r = function r() {
          var e = this.$createElement;
          this._self._c;
        },
        c = [];
    },
    "5fcf": function fcf(e, t, n) {
      "use strict";
      (function (e, t) {
        var r = n("4ea4");
        n("f00a");
        r(n("66fd"));
        var c = r(n("3731"));
        (e.__webpack_require_UNI_MP_PLUGIN__ = n), t(c.default);
      }).call(this, n("bc2e")["default"], n("543d")["createPage"]);
    },
    "6f36": function f36(e, t, n) {
      "use strict";
      var r = n("4ea4");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var c = r(n("2eee")),
        o = r(n("9523")),
        u = r(n("c973")),
        a = n("26cb");
      function f(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var i = {
        name: "gywm",
        components: {
          mgRtext: function mgRtext() {
            Promise.all([
              n.e("common/vendor"),
              n.e("components/common/functionCmp/rich-text"),
            ])
              .then(
                function () {
                  return resolve(n("0b28"));
                }.bind(null, n)
              )
              .catch(n.oe);
          },
        },
        data: function data() {
          return { loading: !1, content: "", systemData: "" };
        },
        onLoad: function onLoad(e) {
          var t = this;
          return (0, u.default)(
            c.default.mark(function e() {
              return c.default.wrap(function (e) {
                while (1) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      t.getSystem(),
                        t.util.setNT("关于我们"),
                        console.log(t.system);
                    case 3:
                    case "end":
                      return e.stop();
                  }
                }
              }, e);
            })
          )();
        },
        computed: (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? f(Object(n), !0).forEach(function (t) {
                  (0, o.default)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : f(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        })({}, (0, a.mapState)(["vipConfig"])),
        methods: {},
      };
      t.default = i;
    },
    "84a3": function a3(e, t, n) {
      "use strict";
      var r = n("4232"),
        c = n.n(r);
      c.a;
    },
    e0cf: function e0cf(e, t, n) {
      "use strict";
      n.r(t);
      var r = n("6f36"),
        c = n.n(r);
      for (var o in r) {
        ["default"].indexOf(o) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return r[e];
            });
          })(o);
      }
      t["default"] = c.a;
    },
  },
  [["5fcf", "common/runtime", "common/vendor"]],
]);
