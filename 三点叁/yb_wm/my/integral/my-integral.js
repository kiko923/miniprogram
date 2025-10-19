(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/my/integral/my-integral"],
  {
    "248b": function b(t, e, n) {
      "use strict";
      n.r(e);
      var a = n("66df"),
        r = n("d1af");
      for (var i in r) {
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(i);
      }
      n("f9e2");
      var u = n("f0c5"),
        c = Object(u["a"])(
          r["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "3cd506d2",
          null,
          !1,
          a["a"],
          void 0
        );
      e["default"] = c.exports;
    },
    6502: function _(t, e, n) {
      "use strict";
      (function (t, e) {
        var a = n("4ea4");
        n("f00a");
        a(n("66fd"));
        var r = a(n("248b"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = n), e(r.default);
      }).call(this, n("bc2e")["default"], n("543d")["createPage"]);
    },
    "66df": function df(t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return a;
      }),
        n.d(e, "c", function () {
          return r;
        }),
        n.d(e, "a", function () {});
      var a = function a() {
          var t = this.$createElement,
            e =
              (this._self._c,
              this.jfName ? 0 == this.dataList.length && this.isget : null);
          this.$mp.data = Object.assign({}, { $root: { g0: e } });
        },
        r = [];
    },
    "9aee": function aee(t, e, n) {},
    bfa5: function bfa5(t, e, n) {
      "use strict";
      var a = n("4ea4");
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var r = a(n("2eee")),
        i = a(n("c973")),
        u = (n("26cb"), n("4789")),
        c = {
          name: "myIntegral",
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
            return { params: { page: 1, size: 10 }, integral: "0" };
          },
          onLoad: function onLoad() {
            var t = this;
            return (0, i.default)(
              r.default.mark(function e() {
                return r.default.wrap(function (e) {
                  while (1) {
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          t.getSystem().then(function () {
                            t.util.setNT("我的" + t.jfName);
                          }),
                          (e.next = 3),
                          t.getLoginInfo()
                        );
                      case 3:
                        (t.integral = t.user.integral), t.getList();
                      case 5:
                      case "end":
                        return e.stop();
                    }
                  }
                }, e);
              })
            )();
          },
          mixins: [u.utilMixins, u.sljz],
          computed: {
            jfName: function jfName() {
              return this.system.custom.integral;
            },
          },
          methods: {
            getList: function getList() {
              var t = this;
              return (0, i.default)(
                r.default.mark(function e() {
                  var n, a;
                  return r.default.wrap(function (e) {
                    while (1) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            t.util.request({
                              url: t.api.jfmx,
                              mask: 1,
                              data: t.params,
                            })
                          );
                        case 2:
                          (n = e.sent),
                            (a = n.data),
                            (t.dataList = t.dataList.concat(a)),
                            (t.isget = !0),
                            (t.mygd = t.params.size > a.length),
                            t.params.page++;
                        case 8:
                        case "end":
                          return e.stop();
                      }
                    }
                  }, e);
                })
              )();
            },
            integralMall: function integralMall() {
              this.go({ t: 2, url: "/yb_wm/my/integral/shop-index" });
            },
            integralRule: function integralRule() {
              this.go({
                t: 1,
                url: "/yb_wm/my/other/gywm?t=".concat(this.jfName, "规则&p=8"),
              });
            },
          },
        };
      e.default = c;
    },
    d1af: function d1af(t, e, n) {
      "use strict";
      n.r(e);
      var a = n("bfa5"),
        r = n.n(a);
      for (var i in a) {
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(i);
      }
      e["default"] = r.a;
    },
    f9e2: function f9e2(t, e, n) {
      "use strict";
      var a = n("9aee"),
        r = n.n(a);
      r.a;
    },
  },
  [["6502", "common/runtime", "common/vendor"]],
]);
