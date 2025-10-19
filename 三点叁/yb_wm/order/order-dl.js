(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/order/order-dl"],
  {
    "0ecf": function ecf(e, t, n) {
      "use strict";
      (function (e) {
        var r = n("4ea4");
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var o = r(n("2eee")),
          i = r(n("c973")),
          a = r(n("9523")),
          s = n("26cb"),
          c = (n("6326"), n("4789")),
          u = r(n("8bb1"));
        function d(e, t) {
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
        function f(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? d(Object(n), !0).forEach(function (t) {
                  (0, a.default)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : d(Object(n)).forEach(function (t) {
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
          name: "order-dl",
          components: {
            bkB: function bkB() {
              n.e("components/common/block-b")
                .then(
                  function () {
                    return resolve(n("9d64"));
                  }.bind(null, n)
                )
                .catch(n.oe);
            },
            MgCell: function MgCell() {
              n.e("components/common/mg-cell")
                .then(
                  function () {
                    return resolve(n("f3fc"));
                  }.bind(null, n)
                )
                .catch(n.oe);
            },
            mgPopup: function mgPopup() {
              n.e("components/common/popup")
                .then(
                  function () {
                    return resolve(n("6b80"));
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
              info: {},
              stime: "",
              latitude: "",
              longitude: "",
              covers: [],
              line: [],
              showRed: !1,
              hbId: "",
              qcmsrc: "",
              carInfo: {},
            };
          },
          onLoad: function onLoad(t) {
            this.getSystem(),
              this.util.setNT("订单详情"),
              (this.orderId = t.id),
              this.getInfo(),
              (this.carInfo = e.getStorageSync("carInfo"));
          },
          mixins: [c.utilMixins],
          computed: f(
            f(
              {},
              (0, s.mapState)({
                orderset: function orderset(e) {
                  return e.config.orderset;
                },
              })
            ),
            {},
            {
              orderState: function orderState() {
                var e = "",
                  t = "",
                  n = "",
                  r = "";
                switch (+this.info.state) {
                  case 1:
                    (e = "待支付"),
                      (t = "剩余支付时间: "
                        .concat(this.stime[2], ":")
                        .concat(this.stime[3], "（超过")
                        .concat(
                          this.orderset.closeTime,
                          "分钟未支付，订单将自动取消哦！)"
                        ));
                    break;
                  case 2:
                    (e = "下单成功"),
                      (t = "订单已提交，等待商家接单"),
                      (r = "xdcg");
                    break;
                  case 3:
                    (e = "商家已接单"),
                      this.info.deliveryMode,
                      (t = "您的商品正在制作中，请您耐心等待"),
                      (r = "sjyjd");
                    break;
                  case 4:
                    10 != this.info.deliveryMode
                      ? ((e = "商品派送中"),
                        (t = "您的订单由".concat(
                          this.info.deliveryName,
                          "派送中,请您耐心等待"
                        )),
                        (r = "psz"))
                      : ((e = "待取货"),
                        (t = "您的订单制作完成后,请前往门店自取,("
                          .concat(this.system.custom.orderNumber, ": #")
                          .concat(this.info.takeNo, ")")),
                        (r = "dqc"));
                    break;
                  case 5:
                  case 6:
                    (e = "订单已完成"),
                      (t = "感谢您对我们的信任，期待再次光临"),
                      (r = "ddywc");
                    break;
                  case 7:
                    (e = "订单已取消"),
                      (t = "感谢您对我们的信任，期待再次光临"),
                      (n = "取消原因：订单超时或未支付");
                    break;
                  case 8:
                    (e = "商家拒单"),
                      (t = "非常抱歉！感谢您对我们的信任，期待再次光临"),
                      (n =
                        this.info.refuseReason &&
                        "拒单原因：" + this.info.refuseReason);
                    break;
                  case 9:
                    (e = "申请退款中"),
                      (t = "您正在申请订单退款，请耐心等待门店处理"),
                      (n =
                        this.info.cancelReason &&
                        "取消原因：" + this.info.cancelReason);
                    break;
                  case 10:
                    (e = "订单已退款"),
                      (t = "感谢您对我们的信任，期待再次光临");
                    break;
                  case 11:
                    (e = "订单退款拒绝"),
                      (t = "感谢您对我们的信任，如有疑问请联系商家"),
                      (n =
                        this.info.refuseReason &&
                        "拒绝原因：" + this.info.refuseReason);
                    break;
                }
                return { str1: e, str2: t, str3: n, strimg: r };
              },
              zqmArr: function zqmArr() {
                return (
                  console.log(
                    this.info.selfCode && this.info.selfCode.split("")
                  ),
                  this.info.selfCode && this.info.selfCode.split("")
                );
              },
              sl: function sl() {
                return this.info.symbol || this.system.symbol || "￥";
              },
              dsfps: function dsfps() {
                return (
                  1 != this.info.deliveryMode && 10 != this.info.deliveryMode
                );
              },
            }
          ),
          methods: {
            getInfo: function getInfo() {
              var e = this;
              return (0, i.default)(
                o.default.mark(function t() {
                  var n, r;
                  return o.default.wrap(function (t) {
                    while (1) {
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2),
                            e.util.request({
                              url: e.api.wmddxq,
                              mask: "加载中",
                              data: { orderId: e.orderId },
                            })
                          );
                        case 2:
                          if (((n = t.sent), (r = n.data), !r)) {
                            t.next = 16;
                            break;
                          }
                          return (
                            e.getisPop(),
                            (e.info = r),
                            1 == r.state && e.djs(r.createdAt),
                            (3 != r.state && 4 != r.state) ||
                              10 != r.deliveryMode ||
                              e.getqcm(),
                            t.abrupt("return")
                          );
                        case 16:
                        case "end":
                          return t.stop();
                      }
                    }
                  }, t);
                })
              )();
            },
            getqcm: function getqcm() {
              var e = this;
              return (0, i.default)(
                o.default.mark(function t() {
                  var n, r;
                  return o.default.wrap(function (t) {
                    while (1) {
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2),
                            e.util.request({
                              url: e.api.zqqcm,
                              mask: "加载中",
                              data: { id: e.orderId },
                            })
                          );
                        case 2:
                          (n = t.sent), (r = n.data), (e.qcmsrc = r);
                        case 5:
                        case "end":
                          return t.stop();
                      }
                    }
                  }, t);
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
            djs: function djs(e) {
              var t = this;
              if (1 == this.info.state && 1 == this.orderset.autoClose) {
                var n = this.dateToTime(),
                  r = +e + 60 * this.orderset.closeTime;
                r > n &&
                  ((this.stime = u.default.countDownTime(r - n)),
                  (this.dsq = setInterval(
                    (0, i.default)(
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
              }
            },
            psxq: function psxq() {},
            operation: function operation(e, t) {
              var n = this;
              return (0, i.default)(
                o.default.mark(function r() {
                  var i, a;
                  return o.default.wrap(
                    function (r) {
                      while (1) {
                        switch ((r.prev = r.next)) {
                          case 0:
                            if (((i = {}), "sqtk" != e)) {
                              r.next = 7;
                              break;
                            }
                            if (2 != t.state) {
                              r.next = 4;
                              break;
                            }
                            return r.abrupt("return", n.qxdd(1));
                          case 4:
                            (i = {
                              title: "您确认取消订单吗？",
                              url: "wmddtk",
                              params: { orderId: t.id, note: "" },
                            }),
                              (r.next = 18);
                            break;
                          case 7:
                            if ("cd" != e) {
                              r.next = 11;
                              break;
                            }
                            (i = {
                              title: "您确认催单吗？",
                              url: "wmddcd",
                              params: { orderId: t.id },
                            }),
                              (r.next = 18);
                            break;
                          case 11:
                            if ("qrsh" != e) {
                              r.next = 15;
                              break;
                            }
                            (i = {
                              title: "您确认已收到货吗？",
                              url: "wmddsh",
                              params: { orderId: t.id },
                            }),
                              (r.next = 18);
                            break;
                          case 15:
                            if ("ljzf" != e) {
                              r.next = 18;
                              break;
                            }
                            return (
                              n.go({
                                t: 1,
                                url:
                                  "/yb_wm/other/mg-pay?payObj=" +
                                  encodeURIComponent(
                                    JSON.stringify({
                                      orderId: t.id,
                                      orderType: 1,
                                      info: {
                                        money: t.money,
                                        storeName: t.storeName,
                                        type: "下单支付",
                                        cancel: 1,
                                        go: {
                                          t: 6,
                                          url: "/yb_wm/index/order-index",
                                        },
                                      },
                                    })
                                  ),
                              }),
                              r.abrupt("return")
                            );
                          case 18:
                            return (
                              (r.prev = 18),
                              (r.next = 21),
                              n.util.modal(i.title)
                            );
                          case 21:
                            r.next = 26;
                            break;
                          case 23:
                            return (
                              (r.prev = 23),
                              (r.t0 = r["catch"](18)),
                              r.abrupt("return")
                            );
                          case 26:
                            return (
                              (r.next = 28),
                              n.util.request({
                                url: n.api[i.url],
                                method: "POST",
                                mask: 1,
                                data: i.params,
                              })
                            );
                          case 28:
                            (a = r.sent),
                              a &&
                                (n.util.message("操作成功", 1),
                                n.go({
                                  t: 6,
                                  url: "/yb_wm/index/order-index",
                                }));
                          case 30:
                          case "end":
                            return r.stop();
                        }
                      }
                    },
                    r,
                    null,
                    [[18, 23]]
                  );
                })
              )();
            },
            caozuo: function caozuo(e) {
              var t = this;
              return (0, i.default)(
                o.default.mark(function n() {
                  return o.default.wrap(function (n) {
                    while (1) {
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.next = 2), t.util.modal("您确认再来一单吗？")
                          );
                        case 2:
                          t.go({
                            t: 3,
                            url: "/yb_wm/index/goods?storeId=" + e.storeId,
                          });
                        case 3:
                        case "end":
                          return n.stop();
                      }
                    }
                  }, n);
                })
              )();
            },
            qxdd: function qxdd(e) {
              var t = this;
              return (0, i.default)(
                o.default.mark(function n() {
                  var r;
                  return o.default.wrap(
                    function (n) {
                      while (1) {
                        switch ((n.prev = n.next)) {
                          case 0:
                            if (!e) {
                              n.next = 9;
                              break;
                            }
                            return (
                              (n.prev = 1),
                              (n.next = 4),
                              t.util.modal("您确认取消订单吗？")
                            );
                          case 4:
                            n.next = 9;
                            break;
                          case 6:
                            return (
                              (n.prev = 6),
                              (n.t0 = n["catch"](1)),
                              n.abrupt("return")
                            );
                          case 9:
                            return (
                              (n.next = 11),
                              t.util.request({
                                url: t.api.wmddqx,
                                method: "POST",
                                mask: "取消订单中",
                                data: { orderId: t.info.id, note: "" },
                              })
                            );
                          case 11:
                            (r = n.sent),
                              r &&
                                (t.util.message("操作成功", 1),
                                t.go({
                                  t: 6,
                                  url: "/yb_wm/index/order-index",
                                }));
                          case 13:
                          case "end":
                            return n.stop();
                        }
                      }
                    },
                    n,
                    null,
                    [[1, 6]]
                  );
                })
              )();
            },
            ckwz: function ckwz(e) {
              this.util.ckWz({
                lat: e.storeLat,
                lng: e.storeLng,
                name: e.storeName,
                address: e.address,
              });
            },
            getisPop: function getisPop() {
              var e = this;
              return (0, i.default)(
                o.default.mark(function t() {
                  var n, r;
                  return o.default.wrap(function (t) {
                    while (1) {
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2),
                            e.util.request({
                              url: e.api.ispop,
                              data: { orderId: e.orderId },
                            })
                          );
                        case 2:
                          (n = t.sent),
                            (r = n.data),
                            (e.hbId = r ? r.id : ""),
                            (e.config = r);
                        case 6:
                        case "end":
                          return t.stop();
                      }
                    }
                  }, t);
                })
              )();
            },
            showhb: function showhb() {
              this.showRed = !0;
            },
            fhb: function fhb() {
              this.showRed = !1;
            },
          },
          onUnload: function onUnload() {
            this.dsq && clearInterval(this.dsq);
          },
          onShareAppMessage: function onShareAppMessage() {
            var e = "yb_wm/shop/gfhb/gfhb?id="
              .concat(this.hbId, "&userId=")
              .concat(this.uId);
            return this.util.mpShare({
              t: this.config.shareTitle,
              i: this.getImgS(this.config.shareImg),
              p: e,
            });
          },
        };
        t.default = l;
      }).call(this, n("543d")["default"]);
    },
    "3f03": function f03(e, t, n) {},
    "5dd4": function dd4(e, t, n) {
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
              e.info.id
                ? e.__map(e.info.goodsArr, function (t, n) {
                    var r = e.__get_orig(t),
                      o = e.info.goodsArr.length,
                      i = e.itemTotal(t);
                    return { $orig: r, g0: o, m0: i };
                  })
                : null),
            r =
              e.info.id && 10 != e.info.deliveryMode && 1 == e.info.appointment
                ? e.timeToDate(e.info.serviceTime)
                : null,
            o =
              e.info.id && 10 == e.info.deliveryMode && 1 == e.info.appointment
                ? e.timeToDate(e.info.serviceTime)
                : null,
            i = e.info.id ? e.timeToDate(e.info.createdAt) : null,
            a = e.info.id && e.info.payMode ? e.payName(e.info.payMode) : null;
          e._isMounted ||
            ((e.e0 = function (t) {
              return e.util.makeTel(e.info.deliveryInfo.riderTel);
            }),
            (e.e1 = function (t) {
              return e.util.makeTel(e.info.storeTel);
            }),
            (e.e2 = function (t) {
              return e.util.makeTel(e.info.storeTel);
            }),
            (e.e3 = function (t) {
              return e.util.fz(e.info.outTradeNo);
            }),
            (e.e4 = function (t) {
              e.showRed = !1;
            })),
            (e.$mp.data = Object.assign(
              {},
              { $root: { l0: n, m1: r, m2: o, m3: i, m4: a } }
            ));
        },
        o = [];
    },
    be0e: function be0e(e, t, n) {
      "use strict";
      var r = n("3f03"),
        o = n.n(r);
      o.a;
    },
    d172: function d172(e, t, n) {
      "use strict";
      n.r(t);
      var r = n("0ecf"),
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
    e3f3: function e3f3(e, t, n) {
      "use strict";
      n.r(t);
      var r = n("5dd4"),
        o = n("d172");
      for (var i in o) {
        ["default"].indexOf(i) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return o[e];
            });
          })(i);
      }
      n("be0e");
      var a = n("f0c5"),
        s = Object(a["a"])(
          o["default"],
          r["b"],
          r["c"],
          !1,
          null,
          "6868b7ff",
          null,
          !1,
          r["a"],
          void 0
        );
      t["default"] = s.exports;
    },
    ee3c: function ee3c(e, t, n) {
      "use strict";
      (function (e, t) {
        var r = n("4ea4");
        n("f00a");
        r(n("66fd"));
        var o = r(n("e3f3"));
        (e.__webpack_require_UNI_MP_PLUGIN__ = n), t(o.default);
      }).call(this, n("bc2e")["default"], n("543d")["createPage"]);
    },
  },
  [["ee3c", "common/runtime", "common/vendor"]],
]);
