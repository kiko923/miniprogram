(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/order/vip/czz"],
  {
    "546e": function e(t, _e, n) {
      "use strict";
      (function (t) {
        var a = n("4ea4");
        Object.defineProperty(_e, "__esModule", { value: !0 }),
          (_e.default = void 0);
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
              return { params: { page: 1, size: 10 }, integral: "0", topH: "" };
            },
            onLoad: function onLoad() {
              var e = this;
              return (0, i.default)(
                r.default.mark(function n() {
                  var a;
                  return r.default.wrap(function (n) {
                    while (1) {
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            e.getSystem(),
                            e.util.setNT("成长值"),
                            (n.next = 4),
                            e.getLoginInfo()
                          );
                        case 4:
                          e.refreshUser({ nomask: 1, get: 1, now: 1 }),
                            (a = t.createSelectorQuery()),
                            a
                              .select(".czztm")
                              .boundingClientRect(function (t) {
                                e.topH = t.height;
                              })
                              .exec(),
                            (e.integral = e.user.integral),
                            e.getList();
                        case 9:
                        case "end":
                          return n.stop();
                      }
                    }
                  }, n);
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
                                url: t.api.hykczz,
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
                this.go({ t: 1, url: "wkk?type=1" });
              },
            },
          };
        _e.default = c;
      }).call(this, n("543d")["default"]);
    },
    "60c5": function c5(t, e, n) {
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
            e = (this._self._c, 0 == this.dataList.length && this.isget);
          this.$mp.data = Object.assign({}, { $root: { g0: e } });
        },
        r = [];
    },
    "72e7": function e7(t, e, n) {
      "use strict";
      (function (t, e) {
        var a = n("4ea4");
        n("f00a");
        a(n("66fd"));
        var r = a(n("f6d1"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = n), e(r.default);
      }).call(this, n("bc2e")["default"], n("543d")["createPage"]);
    },
    "8e36": function e36(t, e, n) {},
    abac: function abac(t, e, n) {
      "use strict";
      n.r(e);
      var a = n("546e"),
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
    f6d1: function f6d1(t, e, n) {
      "use strict";
      n.r(e);
      var a = n("60c5"),
        r = n("abac");
      for (var i in r) {
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(i);
      }
      n("fb54");
      var u = n("f0c5"),
        c = Object(u["a"])(
          r["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "7abb0ab0",
          null,
          !1,
          a["a"],
          void 0
        );
      e["default"] = c.exports;
    },
    fb54: function fb54(t, e, n) {
      "use strict";
      var a = n("8e36"),
        r = n.n(a);
      r.a;
    },
  },
  [["72e7", "common/runtime", "common/vendor"]],
]);
