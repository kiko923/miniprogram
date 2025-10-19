(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/other/zrdf"],
  {
    "048b": function b(e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return r;
      }),
        n.d(t, "c", function () {
          return o;
        }),
        n.d(t, "a", function () {});
      var r = function r() {
          var e = this,
            t = e.$createElement,
            n =
              (e._self._c,
              e.info
                ? e.__map(e.info.goodsArr, function (t, n) {
                    var r = e.__get_orig(t),
                      o = e.info.goodsArr.length,
                      i = e.itemTotal(t);
                    return { $orig: r, g0: o, m0: i };
                  })
                : null);
          e.$mp.data = Object.assign({}, { $root: { l0: n } });
        },
        o = [];
    },
    5190: function _(e, t, n) {
      "use strict";
      n.r(t);
      var r = n("9959"),
        o = n.n(r);
      for (var i in r) {
        ["default"].indexOf(i) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return r[e];
            });
          })(i);
      }
      t["default"] = o.a;
    },
    7205: function _(e, t, n) {},
    9959: function _(e, t, n) {
      "use strict";
      (function (e) {
        var r = n("4ea4");
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var o = r(n("2eee")),
          i = r(n("9523")),
          a = r(n("c973")),
          c = n("26cb"),
          u = r(n("8bb1")),
          s = n("4789");
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
        function d(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? f(Object(n), !0).forEach(function (t) {
                  (0, i.default)(e, t, n[t]);
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
        }
        var l = {
          name: "df",
          components: {},
          data: function data() {
            return { stime: "", info: null, loading: !1 };
          },
          onLoad: function onLoad(t) {
            var n = this;
            return (0, a.default)(
              o.default.mark(function r() {
                return o.default.wrap(function (r) {
                  while (1) {
                    switch ((r.prev = r.next)) {
                      case 0:
                        n.getSystem(),
                          n.util.setNT("求付款"),
                          n.getLoginInfo().then(
                            (0, a.default)(
                              o.default.mark(function r() {
                                var i, a;
                                return o.default.wrap(function (r) {
                                  while (1) {
                                    switch ((r.prev = r.next)) {
                                      case 0:
                                        return (
                                          (r.next = 2),
                                          n.getConfig({
                                            key: "payConfig",
                                            api: "config",
                                            params: { ident: "payConfig" },
                                          })
                                        );
                                      case 2:
                                        return (
                                          (r.next = 4),
                                          n.getConfig({
                                            key: "orderset",
                                            api: "ddsz",
                                          })
                                        );
                                      case 4:
                                        if (!t.orderId) {
                                          r.next = 10;
                                          break;
                                        }
                                        return (
                                          (r.next = 7),
                                          n.util.request({
                                            url: n.api.orderRep,
                                            data: { orderId: t.orderId },
                                          })
                                        );
                                      case 7:
                                        (i = r.sent),
                                          (a = i.data),
                                          a &&
                                            (1 == a.state
                                              ? ((n.info = a),
                                                n.djs(a.createdAt))
                                              : (e.showModal({
                                                  title: "提示",
                                                  content: "订单已付款或异常",
                                                  showCancel: !1,
                                                }),
                                                setTimeout(function () {
                                                  n.go({
                                                    t: 6,
                                                    url: "/yb_wm/index/order-index",
                                                  });
                                                }, 1e3)));
                                      case 10:
                                      case "end":
                                        return r.stop();
                                    }
                                  }
                                }, r);
                              })
                            )
                          );
                      case 3:
                      case "end":
                        return r.stop();
                    }
                  }
                }, r);
              })
            )();
          },
          mixins: [s.utilMixins],
          computed: d(
            d(
              {},
              (0, c.mapState)({
                payConfig: function payConfig(e) {
                  return e.config.payConfig;
                },
                orderset: function orderset(e) {
                  return e.config.orderset;
                },
              })
            ),
            {},
            {
              pmoney: function pmoney() {
                return Number((this.info && this.info.money) || 0).toFixed(2);
              },
            }
          ),
          methods: d(
            d({}, (0, c.mapActions)(["getConfig"])),
            {},
            {
              djs: function djs(e) {
                var t = this,
                  n = this.dateToTime(),
                  r = +e + 60 * this.orderset.closeTime;
                r > n &&
                  ((this.stime = u.default.countDownTime(r - n)),
                  (this.dsq = setInterval(
                    (0, a.default)(
                      o.default.mark(function e() {
                        return o.default.wrap(function (e) {
                          while (1) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                (r -= 1),
                                  r == n &&
                                    (clearInterval(t.dsq), t.go({ t: 4 })),
                                  (t.stime = u.default.countDownTime(r - n));
                              case 3:
                              case "end":
                                return e.stop();
                            }
                          }
                        }, e);
                      })
                    ),
                    1e3
                  )));
              },
              setzfcg: function setzfcg() {
                e.setStorageSync("payedCoupon", {
                  orderId: this.info.orderId,
                  paymoney: this.pmoney,
                });
              },
              formSubmit: function formSubmit(t) {
                var n = this;
                return (0, a.default)(
                  o.default.mark(function r() {
                    var i;
                    return o.default.wrap(function (r) {
                      while (1) {
                        switch ((r.prev = r.next)) {
                          case 0:
                            return (
                              console.log(t),
                              (n.loading = !0),
                              (r.next = 4),
                              n.util.request({
                                url: n.api.pay,
                                method: "POST",
                                mask: 1,
                                data: { orderId: n.info.id, orderType: 1 },
                              })
                            );
                          case 4:
                            (i = r.sent),
                              i
                                ? e.requestPayment({
                                    provider: n.provider,
                                    timeStamp: i.data.timeStamp,
                                    nonceStr: i.data.nonceStr,
                                    package: i.data.package,
                                    signType: i.data.signType,
                                    paySign: i.data.paySign,
                                    success: function success(e) {
                                      n.setzfcg(),
                                        n.go({
                                          url:
                                            "/yb_wm/other/zfyl?payObj=" +
                                            encodeURIComponent(
                                              JSON.stringify({
                                                orderId: n.info.id,
                                                orderType: 1,
                                                info: {
                                                  go: {
                                                    t: 6,
                                                    url: "/yb_wm/index/order-index",
                                                  },
                                                },
                                              })
                                            ),
                                        });
                                    },
                                    fail: function fail(t) {
                                      console.log("fail:" + JSON.stringify(t)),
                                        "requestPayment:fail cancel" == t.errMsg
                                          ? (n.util.message("取消支付", 2),
                                            setTimeout(function () {
                                              n.go({
                                                t: 6,
                                                url: "/yb_wm/index/order-index",
                                              });
                                            }, 1e3))
                                          : (e.showModal({
                                              title: "提示",
                                              content: t.errMsg + t.err_desc,
                                              showCancel: !1,
                                            }),
                                            (n.loading = !1));
                                    },
                                    complete: function complete(e) {
                                      console.log("paymentcomplete", e);
                                    },
                                  })
                                : (n.loading = !1),
                              console.log("formSubmit payres", i);
                          case 7:
                          case "end":
                            return r.stop();
                        }
                      }
                    }, r);
                  })
                )();
              },
              itemTotal: function itemTotal(e) {
                var t = +(
                  (e.vipMoney > 0 && +e.vipMoney < +e.money && e.vipMoney) ||
                  e.money
                );
                return +(t * e.num).toFixed(2);
              },
            }
          ),
          onShareAppMessage: function onShareAppMessage() {
            this.go({ url: "/yb_wm/index/index" });
            var e = "yb_wm/other/zrdf?orderId=".concat(this.info.id);
            return this.util.mpShare({
              t: this.payConfig.help,
              i: this.payConfig.icon && this.getSingleImg(this.payConfig.icon),
              p: e,
            });
          },
        };
        t.default = l;
      }).call(this, n("543d")["default"]);
    },
    c1b6: function c1b6(e, t, n) {
      "use strict";
      var r = n("7205"),
        o = n.n(r);
      o.a;
    },
    e3b4: function e3b4(e, t, n) {
      "use strict";
      n.r(t);
      var r = n("048b"),
        o = n("5190");
      for (var i in o) {
        ["default"].indexOf(i) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return o[e];
            });
          })(i);
      }
      n("c1b6");
      var a = n("f0c5"),
        c = Object(a["a"])(
          o["default"],
          r["b"],
          r["c"],
          !1,
          null,
          "1df7f434",
          null,
          !1,
          r["a"],
          void 0
        );
      t["default"] = c.exports;
    },
    e673: function e673(e, t, n) {
      "use strict";
      (function (e, t) {
        var r = n("4ea4");
        n("f00a");
        r(n("66fd"));
        var o = r(n("e3b4"));
        (e.__webpack_require_UNI_MP_PLUGIN__ = n), t(o.default);
      }).call(this, n("bc2e")["default"], n("543d")["createPage"]);
    },
  },
  [["e673", "common/runtime", "common/vendor"]],
]);
