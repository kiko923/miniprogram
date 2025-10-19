(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/shop/in/pay-order"],
  {
    "0ff3": function ff3(e, t, n) {
      "use strict";
      (function (e) {
        var o = n("4ea4");
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var r = o(n("2eee")),
          a = o(n("9523")),
          s = o(n("c973")),
          i = n("4789"),
          u = n("26cb");
        o(n("8bb1"));
        function c(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t &&
              (o = o.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, o);
          }
          return n;
        }
        function d(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? c(Object(n), !0).forEach(function (t) {
                  (0, a.default)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : c(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        getApp().globalData;
        var f = {
          name: "pay-order",
          components: {
            uniNoticeBar: function uniNoticeBar() {
              n.e("components/third/uni-notice-bar")
                .then(
                  function () {
                    return resolve(n("990a"));
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
            bkB: function bkB() {
              n.e("components/common/block-b")
                .then(
                  function () {
                    return resolve(n("9d64"));
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
            mgRadio: function mgRadio() {
              n.e("components/form/mg-radio")
                .then(
                  function () {
                    return resolve(n("e169"));
                  }.bind(null, n)
                )
                .catch(n.oe);
            },
            mgAgree: function mgAgree() {
              n.e("components/form/mg-agree")
                .then(
                  function () {
                    return resolve(n("a8e6"));
                  }.bind(null, n)
                )
                .catch(n.oe);
            },
            mgModal: function mgModal() {
              n.e("components/common/modal")
                .then(
                  function () {
                    return resolve(n("ddfd"));
                  }.bind(null, n)
                )
                .catch(n.oe);
            },
            load: function load() {
              n.e("components/common/load")
                .then(
                  function () {
                    return resolve(n("2d33"));
                  }.bind(null, n)
                )
                .catch(n.oe);
            },
            numberBox: function numberBox() {
              n.e("components/form/number-box")
                .then(
                  function () {
                    return resolve(n("83de"));
                  }.bind(null, n)
                )
                .catch(n.oe);
            },
          },
          data: function data() {
            return {
              showLoading: !1,
              tableInfo: {},
              closePay: !1,
              showPay: !1,
              carInfo: { data: [] },
              ModeArr: [],
              wmAddress: "",
              params: {
                deliveryMode: "1",
                couponId: { store: "", platform: "" },
                people: 0,
                storeId: "",
                tableId: "",
                userNote: "",
                eatType: "",
              },
              loading: !1,
              payObj: {},
              showTime: !1,
              wmIndex: 0,
              wmTime: [],
              yjIndex: 0,
              yjTime: [],
              rsiv: "",
              yjrV: {},
              deliveryPreferential: 0,
              yhqPreferential: { store: 0, platform: 0 },
              kyhb: { dpyhq: { n: 0, data: [] }, ptyhq: { n: 0, data: [] } },
              couponInfo: { store: "", platform: "" },
              orderMuster: {},
              ztTypeArr: [],
              agree: !0,
              showyhgz: !1,
              hgInfo: {},
              sjxx: {},
              pcarList: [],
            };
          },
          onLoad: function onLoad(t) {
            var n = this;
            return (0, s.default)(
              r.default.mark(function o() {
                return r.default.wrap(function (o) {
                  while (1) {
                    switch ((o.prev = o.next)) {
                      case 0:
                        n.getSystem(),
                          n.util.setNT("提交订单"),
                          (n.sjxx = e.getStorageSync("carInfo").sjxx),
                          (n.tableInfo = JSON.parse(
                            decodeURIComponent(t.tableInfo)
                          )),
                          (n.params.people = n.tableInfo.pnum || 1),
                          (n.params.storeId = n.tableInfo.storeId),
                          (n.params.tableId = n.tableInfo.tableId),
                          (n.params.eatType = n.sjxx.moreSet.payMode),
                          (n.supdCarbp = {
                            storeId: n.tableInfo.storeId,
                            tableId: n.tableInfo.tableId,
                            item: 2,
                            key: "ins",
                            mask: 1,
                          }),
                          n.getGoodsArr(),
                          console.log("payorder", n.tableInfo, n.sjxx),
                          n.getOrderset(),
                          n.getOrderMuster(),
                          n.getyhqArr(),
                          e.$on("payorder", function (e) {
                            e.hasOwnProperty("hbInfo") &&
                              (1 == e.type
                                ? ((n.couponInfo.store = e.hbInfo || ""),
                                  (n.params.couponId.store = n.couponInfo.store
                                    ? n.couponInfo.store.id
                                    : ""))
                                : 2 == e.type &&
                                  ((n.couponInfo.platform = e.hbInfo || ""),
                                  (n.params.couponId.platform = n.couponInfo
                                    .platform
                                    ? n.couponInfo.platform.id
                                    : ""))),
                              console.log("payorderEl", e);
                          }),
                          setTimeout(function () {
                            n.isOnLoad = !0;
                          });
                      case 16:
                      case "end":
                        return o.stop();
                    }
                  }
                }, o);
              })
            )();
          },
          onUnload: function onUnload() {
            e.$off("payorder");
          },
          onShow: function onShow() {
            this.isOnLoad;
          },
          mixins: [i.utilMixins],
          computed: d(
            d(
              d(
                d({}, (0, u.mapState)(["scarList"])),
                (0, u.mapState)({
                  orderset: function orderset(e) {
                    return e.config.orderset;
                  },
                })
              ),
              (0, u.mapState)("dndc", ["latLng"])
            ),
            {},
            {
              xjMoney: function xjMoney() {
                if (this.carInfo.price) {
                  var e = +(
                    this.carInfo.oldPrice -
                    this.carInfo.boxMoney -
                    this.carInfo.reduce
                  ).toFixed(2);
                  this.orderMuster.newReduction;
                  0;
                  var t = 0,
                    n = 0;
                  this.couponInfo.store &&
                    (this.orderMuster.newReduction <= 0 ||
                      1 == this.orderMuster.newandcoupon) &&
                    (1 == this.couponInfo.store.type ||
                    3 == this.couponInfo.store.type
                      ? (t = +this.couponInfo.store.money || 0)
                      : 2 == this.couponInfo.store.type &&
                        (t = +this.couponInfo.store.money),
                    t < 0 && (t = 0)),
                    this.couponInfo.platform &&
                      (this.orderMuster.newReduction <= 0 ||
                        1 == this.orderMuster.newandcoupon) &&
                      (1 == this.couponInfo.platform.type
                        ? (n = +this.couponInfo.platform.money || 0)
                        : 2 == this.couponInfo.platform.type &&
                          (n = +this.couponInfo.platform.money),
                      n < 0 && (n = 0));
                  var o = this.blxs(
                      1 == this.sjxx.moreSet.serviceType
                        ? this.params.people * this.sjxx.moreSet.serviceMoney
                        : this.sjxx.moreSet.serviceMoney
                    ),
                    r = 0,
                    a = 0,
                    s = +(e - t - n - 0).toFixed(2);
                  return (
                    (this.deliveryPreferential = 0),
                    s <= 0 && (s = 0.01),
                    (r = +(s + 0 + o).toFixed(2)),
                    r <= 0 && (r = 0.01),
                    (this.yhqPreferential.store = t),
                    (this.yhqPreferential.platform = n),
                    this.system.taxRatio > 0 &&
                      (a = +(r * (this.system.taxRatio / 100)).toFixed(2)),
                    { total: r, slje: a, bzf: 0, zwf: o }
                  );
                }
              },
              jsInfo: function jsInfo() {
                var e = this;
                if (this.carInfo.price) {
                  var t =
                      +this.carInfo.oldPrice +
                      this.xjMoney.zwf -
                      (2 == this.params.deliveryMode && this.wmAddress
                        ? Number(
                            this.deliveryPreferential > 0
                              ? this.wmAddress.oldMoney
                              : this.wmAddress.deliveryMoney
                          )
                        : 0) -
                      this.xjMoney.total,
                    n = this.xjMoney.total + this.xjMoney.slje,
                    o = {},
                    r = {};
                  t += +this.carInfo.vipDiscount;
                  var a =
                    this.sjxx.discount.give.moneyArr &&
                    this.sjxx.discount.give.moneyArr.find(function (t) {
                      return e.xjMoney.total >= t.fullMoney;
                    });
                  return (
                    a && (o = { name: "满赠优惠", title: "".concat(a.give) }),
                    this.xjMoney.total >=
                      this.sjxx.discount.grantCoupon.orderMoney &&
                      (r = {
                        name: "满返门店代金券",
                        title: this.sjxx.discount.grantCoupon.name,
                      }),
                    this.hgInfo.id && (n = +this.hgInfo.money + n),
                    {
                      yhzj: +t.toFixed(2),
                      hjMoney: +n.toFixed(2),
                      mzInfo: o,
                      mfInfo: r,
                    }
                  );
                }
              },
            }
          ),
          methods: d(
            d(
              d({}, (0, u.mapActions)(["getConfig", "getMycar"])),
              (0, u.mapMutations)(["setScarList"])
            ),
            {},
            {
              bindChange: function bindChange(e) {
                this.params.people = e;
              },
              clickMode: function clickMode(e) {
                e.value != this.params.deliveryMode &&
                  (this.util.showLoading("设置中..."),
                  (this.params.deliveryMode = e.value),
                  this.getWmAddress());
              },
              clickztMode: function clickztMode(e) {
                this.params.isOut = e.value;
              },
              setTel: function setTel(e) {
                this.params.userTel = e;
              },
              getGoodsArr: function getGoodsArr() {
                var e = this;
                return (0, s.default)(
                  r.default.mark(function t() {
                    var n, o, a;
                    return r.default.wrap(function (t) {
                      while (1) {
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), e.getMycar(e.supdCarbp);
                          case 2:
                            for (o in ((e.carInfo = e.scarList.ins),
                            (n = []),
                            e.carInfo.data)) {
                              e.carInfo.data[o].originalNum > 0 &&
                                n.push(
                                  Object.assign(
                                    {
                                      ishd: 0,
                                      spnum: e.carInfo.data[o].originalNum,
                                    },
                                    e.carInfo.data[o]
                                  )
                                ),
                                e.carInfo.data[o].discountNum > 0 &&
                                  n.push(
                                    Object.assign(
                                      {
                                        ishd: 1,
                                        spnum: e.carInfo.data[o].discountNum,
                                      },
                                      e.carInfo.data[o]
                                    )
                                  );
                            }
                            (e.pcarList = n),
                              (a = 0),
                              e.scarList.ins.data.forEach(function (e) {
                                a += +e.num;
                              }),
                              (e.carInfo.num = a),
                              (e.showLoading = !0);
                          case 10:
                          case "end":
                            return t.stop();
                        }
                      }
                    }, t);
                  })
                )();
              },
              getOrderset: function getOrderset() {
                var t = this;
                return (0, s.default)(
                  r.default.mark(function n() {
                    return r.default.wrap(function (n) {
                      while (1) {
                        switch ((n.prev = n.next)) {
                          case 0:
                            t.getConfig({ key: "orderset", api: "ddsz" }).then(
                              function () {
                                e.setStorageSync(
                                  "fwb",
                                  t.orderset.selfAgreement
                                );
                              }
                            );
                          case 1:
                          case "end":
                            return n.stop();
                        }
                      }
                    }, n);
                  })
                )();
              },
              tzxqyhq: function tzxqyhq(t) {
                1 == t
                  ? (e.setStorageSync("kyhb", this.kyhb.dpyhq),
                    this.go({
                      t: 1,
                      url:
                        "/yb_wm/my/coupon/use-coupon?t=1&name=门店代金券&couponId=" +
                        this.params.couponId.store,
                    }))
                  : 2 == t &&
                    (e.setStorageSync("kyhb", this.kyhb.ptyhq),
                    this.go({
                      t: 1,
                      url:
                        "/yb_wm/my/coupon/use-coupon?t=2&name=" +
                        this.system.custom.systemRedbag +
                        "&couponId=" +
                        this.params.couponId.platform,
                    }));
              },
              getyhqArr: function getyhqArr() {
                var t = this;
                return (0, s.default)(
                  r.default.mark(function n() {
                    var o;
                    return r.default.wrap(function (n) {
                      while (1) {
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              e.setStorageSync("kyhb", { n: 0, data: [] }),
                              (n.next = 3),
                              Promise.all([
                                t.util.request({
                                  url: t.api.kyyhq,
                                  method: "POST",
                                  data: {
                                    storeId: t.params.storeId,
                                    tableId: t.params.tableId,
                                    type: 2,
                                    storeType: 1,
                                  },
                                }),
                                t.util.request({
                                  url: t.api.kyyhq,
                                  method: "POST",
                                  data: {
                                    storeId: t.params.storeId,
                                    tableId: t.params.tableId,
                                    type: 2,
                                    storeType: 2,
                                  },
                                }),
                              ])
                            );
                          case 3:
                            (o = n.sent),
                              (t.kyhb = {
                                dpyhq: { n: o[0].data.length, data: o[0].data },
                                ptyhq: { n: o[1].data.length, data: o[1].data },
                              }),
                              e.hideLoading();
                          case 6:
                          case "end":
                            return n.stop();
                        }
                      }
                    }, n);
                  })
                )();
              },
              getOrderMuster: function getOrderMuster() {
                var e = this;
                return (0, s.default)(
                  r.default.mark(function t() {
                    var n, o;
                    return r.default.wrap(function (t) {
                      while (1) {
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              e.util.request({
                                url: e.api.wmxdbd,
                                method: "POST",
                                data: {
                                  storeId: e.params.storeId,
                                  orderType: 2,
                                  userId: e.uId,
                                },
                              })
                            );
                          case 2:
                            (n = t.sent),
                              (o = n.data),
                              (e.orderMuster = o || { newReduction: 0 });
                          case 5:
                          case "end":
                            return t.stop();
                        }
                      }
                    }, t);
                  })
                )();
              },
              itemTotal: function itemTotal(e, t) {
                return this.blxs(e * t);
              },
              xzhg: function xzhg(e) {
                this.hgInfo = e.id == this.hgInfo.id ? {} : e;
              },
              ljzf: function ljzf() {
                var e = this;
                return (0, s.default)(
                  r.default.mark(function t() {
                    var n, o;
                    return r.default.wrap(
                      function (t) {
                        while (1) {
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (e.loading = !0),
                                (t.next = 3),
                                e.util.request({
                                  url: e.api["tspdbxp"],
                                  method: "POST",
                                  ct: 1,
                                  mask: 1,
                                  data: {
                                    storeId: e.params.storeId,
                                    item: 2,
                                    tableId: e.params.tableId,
                                  },
                                })
                              );
                            case 3:
                              if (((n = t.sent), n)) {
                                t.next = 7;
                                break;
                              }
                              return (e.loading = !1), t.abrupt("return");
                            case 7:
                              return (t.next = 9), e.getGoodsArr();
                            case 9:
                              if (e.jjmbxx) {
                                t.next = 20;
                                break;
                              }
                              return (
                                (t.prev = 10),
                                (t.next = 13),
                                e.requestSM("inStoreOrder")
                              );
                            case 13:
                              t.next = 20;
                              break;
                            case 15:
                              return (
                                (t.prev = 15),
                                (t.t0 = t["catch"](10)),
                                (e.jjmbxx = !0),
                                (e.loading = !1),
                                t.abrupt("return")
                              );
                            case 20:
                              return (
                                e.hgInfo.id &&
                                  ((e.params.changeId =
                                    e.orderMuster.changePay.id),
                                  (e.params.changeGoodsId = e.hgInfo.id)),
                                (t.next = 23),
                                e.util.request({
                                  url: e.api["tsxdd"],
                                  method: "POST",
                                  ct: 1,
                                  mask: "下单中",
                                  data: e.params,
                                })
                              );
                            case 23:
                              (o = t.sent),
                                o
                                  ? (e.util.message("下单成功", 1),
                                    1 == e.params.eatType
                                      ? e.go({
                                          t: 3,
                                          url:
                                            "/yb_wm/other/mg-pay?payObj=" +
                                            encodeURIComponent(
                                              JSON.stringify({
                                                orderId: o.data,
                                                orderType: 7,
                                                info: {
                                                  money: e.jsInfo.hjMoney,
                                                  storeName:
                                                    e.sjxx.shopData.name,
                                                  type: "堂食下单支付",
                                                  go: {
                                                    t: 3,
                                                    url:
                                                      "/yb_wm/shop/in/order-dl?id=" +
                                                      o.data,
                                                  },
                                                },
                                              })
                                            ),
                                        })
                                      : 2 == e.params.eatType &&
                                        e.go({
                                          t: 3,
                                          url: "order-dl?id=" + o.data,
                                        }))
                                  : (e.loading = !1);
                            case 25:
                            case "end":
                              return t.stop();
                          }
                        }
                      },
                      t,
                      null,
                      [[10, 15]]
                    );
                  })
                )();
              },
            }
          ),
          created: function created() {
            return (0, s.default)(
              r.default.mark(function e() {
                return r.default.wrap(function (e) {
                  while (1) {
                    switch ((e.prev = e.next)) {
                      case 0:
                      case "end":
                        return e.stop();
                    }
                  }
                }, e);
              })
            )();
          },
        };
        t.default = f;
      }).call(this, n("543d")["default"]);
    },
    "22e7": function e7(e, t, n) {
      "use strict";
      (function (e, t) {
        var o = n("4ea4");
        n("f00a");
        o(n("66fd"));
        var r = o(n("7c6b"));
        (e.__webpack_require_UNI_MP_PLUGIN__ = n), t(r.default);
      }).call(this, n("bc2e")["default"], n("543d")["createPage"]);
    },
    "5b6d": function b6d(e, t, n) {
      "use strict";
      n.r(t);
      var o = n("0ff3"),
        r = n.n(o);
      for (var a in o) {
        ["default"].indexOf(a) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return o[e];
            });
          })(a);
      }
      t["default"] = r.a;
    },
    7725: function _(e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return o;
      }),
        n.d(t, "c", function () {
          return r;
        }),
        n.d(t, "a", function () {});
      var o = function o() {
          var e = this,
            t = e.$createElement,
            n = (e._self._c, e.ztTypeArr.length),
            o = e.__map(e.pcarList, function (t, n) {
              var o = e.__get_orig(t),
                r = n == e.pcarList.length - 1 && 1,
                a = t.ishd ? e.itemTotal(t.discountPrice, t.spnum) : null,
                s = t.ishd ? null : e.itemTotal(t.money, t.spnum);
              return { $orig: o, g1: r, m0: a, m1: s };
            }),
            r =
              e.orderMuster.changePay && e.orderMuster.changePay.goodsArr
                ? e.blxs(e.hgInfo.price - e.hgInfo.money)
                : null,
            a =
              e.orderMuster.changePay && e.orderMuster.changePay.goodsArr
                ? e.__map(e.orderMuster.changePay.goodsArr, function (t, n) {
                    var o = e.__get_orig(t),
                      r = Number(((t.money / t.price) * 10).toFixed(2));
                    return { $orig: o, m3: r };
                  })
                : null,
            s = e.carInfo.data.length;
          e._isMounted ||
            ((e.e0 = function (t) {
              e.showyhgz = !0;
            }),
            (e.e1 = function (t) {
              t.stopPropagation(), (e.showyhgz = !1);
            })),
            (e.$mp.data = Object.assign(
              {},
              { $root: { g0: n, l0: o, m2: r, l1: a, g2: s } }
            ));
        },
        r = [];
    },
    "7c6b": function c6b(e, t, n) {
      "use strict";
      n.r(t);
      var o = n("7725"),
        r = n("5b6d");
      for (var a in r) {
        ["default"].indexOf(a) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return r[e];
            });
          })(a);
      }
      n("937d"), n("8710");
      var s = n("f0c5"),
        i = Object(s["a"])(
          r["default"],
          o["b"],
          o["c"],
          !1,
          null,
          "453a68bf",
          null,
          !1,
          o["a"],
          void 0
        );
      t["default"] = i.exports;
    },
    8710: function _(e, t, n) {
      "use strict";
      var o = n("e4fd"),
        r = n.n(o);
      r.a;
    },
    "937d": function d(e, t, n) {
      "use strict";
      var o = n("f915"),
        r = n.n(o);
      r.a;
    },
    e4fd: function e4fd(e, t, n) {},
    f915: function f915(e, t, n) {},
  },
  [["22e7", "common/runtime", "common/vendor"]],
]);
