(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/my/other/gywmtwo"],
  {
    "2adf": function adf(e, t, n) {
      "use strict";
      n.r(t);
      var r = n("f11e"),
        o = n("ed56");
      for (var c in o) {
        ["default"].indexOf(c) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return o[e];
            });
          })(c);
      }
      n("37ad");
      var a = n("f0c5"),
        u = Object(a["a"])(
          o["default"],
          r["b"],
          r["c"],
          !1,
          null,
          "47a138e7",
          null,
          !1,
          r["a"],
          void 0
        );
      t["default"] = u.exports;
    },
    "37ad": function ad(e, t, n) {
      "use strict";
      var r = n("fe72"),
        o = n.n(r);
      o.a;
    },
    b0fd: function b0fd(e, t, n) {
      "use strict";
      var r = n("4ea4");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = r(n("2eee")),
        c = r(n("9523")),
        a = r(n("c973")),
        u = n("26cb");
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
          return (0, a.default)(
            o.default.mark(function e() {
              return o.default.wrap(function (e) {
                while (1) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      t.getSystem({ setNB: 1 }),
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
                  (0, c.default)(e, t, n[t]);
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
        })({}, (0, u.mapState)(["vipConfig"])),
        methods: {},
      };
      t.default = i;
    },
    b2c0: function b2c0(e, t, n) {
      "use strict";
      (function (e, t) {
        var r = n("4ea4");
        n("f00a");
        r(n("66fd"));
        var o = r(n("2adf"));
        (e.__webpack_require_UNI_MP_PLUGIN__ = n), t(o.default);
      }).call(this, n("bc2e")["default"], n("543d")["createPage"]);
    },
    ed56: function ed56(e, t, n) {
      "use strict";
      n.r(t);
      var r = n("b0fd"),
        o = n.n(r);
      for (var c in r) {
        ["default"].indexOf(c) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return r[e];
            });
          })(c);
      }
      t["default"] = o.a;
    },
    f11e: function f11e(e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return r;
      }),
        n.d(t, "c", function () {
          return o;
        }),
        n.d(t, "a", function () {});
      var r = function r() {
          var e = this.$createElement;
          this._self._c;
        },
        o = [];
    },
    fe72: function fe72(e, t, n) {},
  },
  [["b2c0", "common/runtime", "common/vendor"]],
]);
