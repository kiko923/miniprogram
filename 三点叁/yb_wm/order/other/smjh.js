(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/order/other/smjh"],
  {
    "0a4c": function a4c(e, t, a) {
      "use strict";
      (function (e) {
        var n = a("4ea4");
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var r = n(a("2eee")),
          o = n(a("c973")),
          u = (a("26cb"), n(a("8bb1"))),
          c = {
            name: "order-index",
            components: {
              load: function load() {
                a.e("components/common/load")
                  .then(
                    function () {
                      return resolve(a("2d33"));
                    }.bind(null, a)
                  )
                  .catch(a.oe);
              },
            },
            data: function data() {
              return { showloading: !0 };
            },
            onLoad: function onLoad(t) {
              var a = this;
              return (0, o.default)(
                r.default.mark(function n() {
                  var o, c, d, s, i;
                  return r.default.wrap(function (n) {
                    while (1) {
                      switch ((n.prev = n.next)) {
                        case 0:
                          if (
                            (a.getSystem(),
                            t.q || getApp().globalData.siteInfo.qrCode)
                          ) {
                            n.next = 3;
                            break;
                          }
                          return n.abrupt(
                            "return",
                            a.util.message("未获取到参数", 3)
                          );
                        case 3:
                          return (
                            (o = t.q
                              ? u.default.getUrlParams(decodeURIComponent(t.q))
                              : u.default.getUrlParams(
                                  decodeURIComponent(
                                    getApp().globalData.siteInfo.qrCode
                                  )
                                )),
                            (n.next = 6),
                            a.util.request({
                              url: a.api.smjhm,
                              method: "POST",
                              ct: 1,
                              mask: "参数获取中",
                              data: { data: o },
                            })
                          );
                        case 6:
                          if (((c = n.sent), !c)) {
                            n.next = 24;
                            break;
                          }
                          (d = 2),
                            (s = c.data),
                            (i = ""),
                            (n.t0 = s.type),
                            (n.next =
                              "table" === n.t0
                                ? 12
                                : "cashier" === n.t0
                                ? 14
                                : "fastOrder" === n.t0
                                ? 16
                                : "goods" === n.t0
                                ? 18
                                : 21);
                          break;
                        case 12:
                          return (
                            (i = "/yb_wm/shop/in/goods?scene=" + s.tableId),
                            n.abrupt("break", 23)
                          );
                        case 14:
                          return (
                            (i = "/yb_wm/shop/in/dmf?storeId=" + s.storeId),
                            n.abrupt("break", 23)
                          );
                        case 16:
                          return (
                            (i =
                              "/yb_wm/shop/ffmode/goods?storeId=" + s.storeId),
                            n.abrupt("break", 23)
                          );
                        case 18:
                          return (
                            (i = "/yb_wm/index/goods?storeId=" + s.storeId),
                            (d = 3),
                            n.abrupt("break", 23)
                          );
                        case 21:
                          return (
                            e.showModal({
                              title: "提示",
                              content: "扫码参数暂不支持识别",
                              showCancel: !1,
                              success: function success(e) {
                                a.go({ t: 6, url: "/yb_wm/index/index" });
                              },
                            }),
                            n.abrupt("break", 23)
                          );
                        case 23:
                          a.go({ t: d, url: i });
                        case 24:
                        case "end":
                          return n.stop();
                      }
                    }
                  }, n);
                })
              )();
            },
            computed: {},
            methods: {},
          };
        t.default = c;
      }).call(this, a("543d")["default"]);
    },
    1894: function _(e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return n;
      }),
        a.d(t, "c", function () {
          return r;
        }),
        a.d(t, "a", function () {});
      var n = function n() {
          var e = this.$createElement;
          this._self._c;
        },
        r = [];
    },
    a6ae: function a6ae(e, t, a) {
      "use strict";
      a.r(t);
      var n = a("1894"),
        r = a("df54");
      for (var o in r) {
        ["default"].indexOf(o) < 0 &&
          (function (e) {
            a.d(t, e, function () {
              return r[e];
            });
          })(o);
      }
      var u = a("f0c5"),
        c = Object(u["a"])(
          r["default"],
          n["b"],
          n["c"],
          !1,
          null,
          "a6ed0734",
          null,
          !1,
          n["a"],
          void 0
        );
      t["default"] = c.exports;
    },
    ab19: function ab19(e, t, a) {
      "use strict";
      (function (e, t) {
        var n = a("4ea4");
        a("f00a");
        n(a("66fd"));
        var r = n(a("a6ae"));
        (e.__webpack_require_UNI_MP_PLUGIN__ = a), t(r.default);
      }).call(this, a("bc2e")["default"], a("543d")["createPage"]);
    },
    df54: function df54(e, t, a) {
      "use strict";
      a.r(t);
      var n = a("0a4c"),
        r = a.n(n);
      for (var o in n) {
        ["default"].indexOf(o) < 0 &&
          (function (e) {
            a.d(t, e, function () {
              return n[e];
            });
          })(o);
      }
      t["default"] = r.a;
    },
  },
  [["ab19", "common/runtime", "common/vendor"]],
]);
