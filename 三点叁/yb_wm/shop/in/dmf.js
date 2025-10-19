(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/shop/in/dmf"],
  {
    "21af": function af(t, e, n) {
      "use strict";
      n.r(e);
      var r = n("5295"),
        o = n("30e0");
      for (var a in o) {
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return o[t];
            });
          })(a);
      }
      n("98ff"), n("9935");
      var u = n("f0c5"),
        i = Object(u["a"])(
          o["default"],
          r["b"],
          r["c"],
          !1,
          null,
          "67ed81c3",
          null,
          !1,
          r["a"],
          void 0
        );
      e["default"] = i.exports;
    },
    "30e0": function e0(t, e, n) {
      "use strict";
      n.r(e);
      var r = n("ee62"),
        o = n.n(r);
      for (var a in r) {
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(a);
      }
      e["default"] = o.a;
    },
    5295: function _(t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "c", function () {
          return o;
        }),
        n.d(e, "a", function () {});
      var r = function r() {
          var t = this.$createElement;
          this._self._c;
        },
        o = [];
    },
    "727b": function b(t, e, n) {
      "use strict";
      (function (t, e) {
        var r = n("4ea4");
        n("f00a");
        r(n("66fd"));
        var o = r(n("21af"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = n), e(o.default);
      }).call(this, n("bc2e")["default"], n("543d")["createPage"]);
    },
    "98ff": function ff(t, e, n) {
      "use strict";
      var r = n("f489"),
        o = n.n(r);
      o.a;
    },
    9935: function _(t, e, n) {
      "use strict";
      var r = n("e2b8"),
        o = n.n(r);
      o.a;
    },
    e2b8: function e2b8(t, e, n) {},
    ee62: function ee62(t, e, n) {
      "use strict";
      (function (t) {
        var r = n("4ea4");
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var o = r(n("2eee")),
          a = r(n("9523")),
          u = r(n("c973")),
          i = n("26cb"),
          s = n("4789"),
          c = r(n("8bb1"));
        function f(t, e) {
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
        function d(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? f(Object(n), !0).forEach(function (e) {
                  (0, a.default)(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : f(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
          }
          return t;
        }
        var l = {
          name: "bzf",
          components: {
            MgCell: function MgCell() {
              n.e("components/common/mg-cell")
                .then(
                  function () {
                    return resolve(n("f3fc"));
                  }.bind(null, n)
                )
                .catch(n.oe);
            },
            sqBtn: function sqBtn() {
              n.e("components/common/sq-btn")
                .then(
                  function () {
                    return resolve(n("9823"));
                  }.bind(null, n)
                )
                .catch(n.oe);
            },
          },
          data: function data() {
            return {
              money: "",
              params: { money: "", storeId: "", userNote: "", useCouponId: "" },
              shopinfo: {},
              mdconfig: null,
              discountData: null,
              loading: !1,
              kyhb: { n: 0, data: [] },
              couponInfo: null,
              snameData:{padding:'50rpx'}
            };
          },
          onLoad: function onLoad(t) {
            var e = this;
            return (0, u.default)(
              o.default.mark(function n() {
                var r, a;
                return o.default.wrap(function (n) {
                  while (1) {
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          e.getSystem(),
                          e.util.setNT("买单"),
                          (e.params.storeId = c.default.getOptions(t, {
                            key: "storeId",
                            q1: e.storeInfo.id,
                          })),
                          e.getLoginInfo().then(function () {}),
                          (n.next = 6),
                          e.util.request({
                            url: e.api.zjdp,
                            data: { storeId: e.params.storeId },
                          })
                        );
                      case 6:
                        (r = n.sent),
                          (a = r.data),
                          (e.shopinfo = a),
                          e.getDiscount();
                      case 10:
                      case "end":
                        return n.stop();
                    }
                  }
                }, n);
              })
            )();
          },
          mixins: [s.utilMixins],
          computed: d(
            d(
              {},
              (0, i.mapState)({
                storeInfo: function storeInfo(t) {
                  return t.config.storeInfo;
                },
              })
            ),
            {},
            {
              yhq: function yhq() {
                return (
                  this.mdconfig && this.mdconfig.discount.indexOf("1") > -1
                );
              },
              vip: function vip() {
                return (
                  this.isVip &&
                  this.mdconfig &&
                  this.mdconfig.discount.indexOf("3") > -1
                );
              },
              zkmoney: function zkmoney() {
                var t = 0,
                  e = +((this.couponInfo && this.couponInfo.money) || 0);
                return (
                  this.vip &&
                    this.user.discount &&
                    (t = ((10 - this.user.discount) / 10) * (this.money - e)),
                  this.blxs(t)
                );
              },
              newMoney: function newMoney() {
                return this.discountData && this.discountData.newMoney;
              },
              total: function total() {
                var t = 0,
                  e = +((this.couponInfo && this.couponInfo.money) || 0),
                  n = this.zkmoney;
                return (
                  (t = this.blxs(this.money - e - n)),
                  this.newMoney && (t = this.newMoney),
                  t <= 0 && (t = 0.01),
                  t
                );
              },
            }
          ),
          methods: {
            minput: function minput(t) {
              (this.couponInfo = null), this.getDiscount();
            },
            changeUsecoupon: function changeUsecoupon() {
              var e = 0,
                n = c.default.deepCopy(this.yhqArr);
              for (var r in n) {
                1 == n[r].isUse &&
                  (this.money >= +n[r].full || 1 == n[r].isLimit
                    ? ((n[r].isUse = 1), (e += 1))
                    : (n[r].isUse = 2));
              }
              (this.kyhb = { n: e, data: n }),
                t.setStorageSync("kyhb", this.kyhb);
            },
            getConfig: function getConfig() {
              var t = this;
              return (0, u.default)(
                o.default.mark(function e() {
                  var n, r;
                  return o.default.wrap(function (e) {
                    while (1) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            t.util.request({
                              url: t.api.config,
                              data: { ident: "cashierset" },
                            })
                          );
                        case 2:
                          (n = e.sent), (r = n.data), (t.mdconfig = r);
                        case 5:
                        case "end":
                          return e.stop();
                      }
                    }
                  }, e);
                })
              )();
            },
            getDiscount: function getDiscount() {
              var t = this;
              return (0, u.default)(
                o.default.mark(function e() {
                  var n, r;
                  return o.default.wrap(function (e) {
                    while (1) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            t.util.request({
                              url: t.api.getDiscount,
                              data: { money: t.money },
                            })
                          );
                        case 2:
                          (n = e.sent), (r = n.data), (t.discountData = r);
                        case 5:
                        case "end":
                          return e.stop();
                      }
                    }
                  }, e);
                })
              )();
            },
            getyhqArr: function getyhqArr() {
              var e = this;
              return (0, u.default)(
                o.default.mark(function n() {
                  var r, a;
                  return o.default.wrap(function (n) {
                    while (1) {
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            e.util.showLoading(),
                            t.setStorageSync("kyhb", { n: 0, data: [] }),
                            (n.next = 4),
                            e.util.request({
                              url: e.api.AvailableCoupon,
                              method: "POST",
                              data: {
                                type: 3,
                                userId: e.params.userId,
                                storeId: e.params.storeId,
                              },
                            })
                          );
                        case 4:
                          (r = n.sent),
                            (a = r.data),
                            a && ((e.yhqArr = a), e.changeUsecoupon()),
                            t.hideLoading();
                        case 8:
                        case "end":
                          return n.stop();
                      }
                    }
                  }, n);
                })
              )();
            },
            changeCoupon: function changeCoupon(t) {
              (this.couponInfo = t || null),
                (this.params.useCouponId = t ? t.id : ""),
                console.log(t);
            },
            qdzf: function qdzf() {
              var t = this;
              return (0, u.default)(
                o.default.mark(function e() {
                  var n;
                  return o.default.wrap(
                    function (e) {
                      while (1) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (t.money) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt(
                              "return",
                              t.util.message("请输入金额", 3)
                            );
                          case 2:
                            return (e.next = 4), t.checkLogin();
                          case 4:
                            if (e.sent) {
                              e.next = 6;
                              break;
                            }
                            return e.abrupt("return");
                          case 6:
                            if (((t.loading = !0), t.jjmbxx)) {
                              e.next = 18;
                              break;
                            }
                            return (
                              (e.prev = 8),
                              (e.next = 11),
                              t.requestSM("cashierOrder")
                            );
                          case 11:
                            e.next = 18;
                            break;
                          case 13:
                            return (
                              (e.prev = 13),
                              (e.t0 = e["catch"](8)),
                              (t.jjmbxx = !0),
                              (t.loading = !1),
                              e.abrupt("return")
                            );
                          case 18:
                            return (
                              (t.params.money = t.money),
                              (e.next = 21),
                              t.util.request({
                                url: t.api["syxd"],
                                method: "POST",
                                mask: "下单中",
                                data: t.params,
                              })
                            );
                          case 21:
                            (n = e.sent),
                              n
                                ? t.go({
                                    t: 2,
                                    url:
                                      "/yb_wm/other/mg-pay?payObj=" +
                                      encodeURIComponent(
                                        JSON.stringify({
                                          orderId: n.data,
                                          orderType: 5,
                                          info: {
                                            money: t.total,
                                            type: "买单支付",
                                            cancel: 1,
                                            go: {
                                              t: 6,
                                              url: "/yb_wm/index/order-index",
                                            },
                                          },
                                        })
                                      ),
                                  })
                                : (t.loading = !1);
                          case 23:
                          case "end":
                            return e.stop();
                        }
                      }
                    },
                    e,
                    null,
                    [[8, 13]]
                  );
                })
              )();
            },
          },
        };
        e.default = l;
      }).call(this, n("543d")["default"]);
    },
    f489: function f489(t, e, n) {},
  },
  [["727b", "common/runtime", "common/vendor"]],
]);
