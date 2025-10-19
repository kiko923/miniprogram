(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/my/other/bzzx"],
  {
    "142c": function c(t, e, n) {
      "use strict";
      (function (t, e) {
        var r = n("4ea4");
        n("f00a");
        r(n("66fd"));
        var a = r(n("1e2f"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = n), e(a.default);
      }).call(this, n("bc2e")["default"], n("543d")["createPage"]);
    },
    "1e2f": function e2f(t, e, n) {
      "use strict";
      n.r(e);
      var r = n("6d04"),
        a = n("b695");
      for (var u in a) {
        ["default"].indexOf(u) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(u);
      }
      var c = n("f0c5"),
        o = Object(c["a"])(
          a["default"],
          r["b"],
          r["c"],
          !1,
          null,
          "ffef8700",
          null,
          !1,
          r["a"],
          void 0
        );
      e["default"] = o.exports;
    },
    "6d04": function d04(t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "c", function () {
          return a;
        }),
        n.d(e, "a", function () {});
      var r = function r() {
          var t = this.$createElement,
            e = (this._self._c, this.arr.length);
          this.$mp.data = Object.assign({}, { $root: { g0: e } });
        },
        a = [];
    },
    "9d57": function d57(t, e, n) {
      "use strict";
      var r = n("4ea4");
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var a = r(n("2eee")),
        u = r(n("c973")),
        c =
          (n("26cb"),
          {
            name: "order-index",
            components: {
              jzz: function jzz() {
                n.e("components/common/jzz")
                  .then(
                    function () {
                      return resolve(n("3db1"));
                    }.bind(null, n)
                  )
                  .catch(n.oe);
              },
            },
            data: function data() {
              return { arr: [] };
            },
            onLoad: function onLoad(t) {
              var e = this;
              return (0, u.default)(
                a.default.mark(function t() {
                  var n, r;
                  return a.default.wrap(function (t) {
                    while (1) {
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            e.getSystem(),
                            e.util.setNT("帮助中心"),
                            (t.next = 4),
                            e.util.request({ url: e.api.bzzx })
                          );
                        case 4:
                          (n = t.sent), (r = n.data), (e.arr = r);
                        case 7:
                        case "end":
                          return t.stop();
                      }
                    }
                  }, t);
                })
              )();
            },
            computed: {},
            methods: {
              goDl: function goDl(t) {
                this.go({
                  t: 1,
                  url: "/yb_wm/my/other/gywm?t="
                    .concat(t.title, "&p=2&id=")
                    .concat(t.id),
                });
              },
            },
          });
      e.default = c;
    },
    b695: function b695(t, e, n) {
      "use strict";
      n.r(e);
      var r = n("9d57"),
        a = n.n(r);
      for (var u in r) {
        ["default"].indexOf(u) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(u);
      }
      e["default"] = a.a;
    },
  },
  [["142c", "common/runtime", "common/vendor"]],
]);
