(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/shop/ffmode/pay-order"],
  {
    "13a4": function a4(e, t, n) {
      "use strict";
      var o = n("82a5"),
        r = n.n(o);
      r.a;
    },
    "39b1": function b1(e, t, n) {
      "use strict";
      var o = n("63c9"),
        r = n.n(o);
      r.a;
    },
    "4e9a": function e9a(e, t, n) {
      "use strict";
      n.r(t);
      var o = n("e98e"),
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
    "63c9": function c9(e, t, n) {},
    "82a5": function a5(e, t, n) {},
    "9ead": function ead(e, t, n) {
      "use strict";
      n.r(t);
      var o = n("a95d"),
        r = n("4e9a");
      for (var a in r) {
        ["default"].indexOf(a) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return r[e];
            });
          })(a);
      }
      n("13a4"), n("39b1");
      var s = n("f0c5"),
        i = Object(s["a"])(
          r["default"],
          o["b"],
          o["c"],
          !1,
          null,
          "0a3145d4",
          null,
          !1,
          o["a"],
          void 0
        );
      t["default"] = i.exports;
    },
    a95d: function a95d(e, t, n) {
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
            n =
              (e._self._c,
              e.carInfo.sjxx && e.carInfo.sjxx.moreSet.fastOrderNotice
                ? e.cTR(e.tColor)
                : null),
            o = e.ModeArr.length,
            r = e.ztTypeArr.length,
            a = e.__map(e.pcarList, function (t, n) {
              var o = e.__get_orig(t),
                r = n == e.pcarList.length - 1 && 1,
                a = t.ishd ? e.itemTotal(t.discountPrice, t.spnum) : null,
                s = t.ishd ? null : e.itemTotal(t.money, t.spnum);
              return { $orig: o, g2: r, m1: a, m2: s };
            }),
            s =
              e.orderMuster.changePay && e.orderMuster.changePay.goodsArr
                ? e.blxs(e.hgInfo.price - e.hgInfo.money)
                : null,
            i =
              e.orderMuster.changePay && e.orderMuster.changePay.goodsArr
                ? e.__map(e.orderMuster.changePay.goodsArr, function (t, n) {
                    var o = e.__get_orig(t),
                      r = Number(((t.money / t.price) * 10).toFixed(2));
                    return { $orig: o, m4: r };
                  })
                : null;
          e._isMounted ||
            ((e.e0 = function (t) {
              e.showyhgz = !0;
            }),
            (e.e1 = function (t) {
              t.stopPropagation(), (e.showyhgz = !1);
            })),
            (e.$mp.data = Object.assign(
              {},
              { $root: { m0: n, g0: o, g1: r, l0: a, m3: s, l1: i } }
            ));
        },
        r = [];
    },
    c81c: function c81c(e, t, n) {
      "use strict";
      (function (e, t) {
        var o = n("4ea4");
        n("f00a");
        o(n("66fd"));
        var r = o(n("9ead"));
        (e.__webpack_require_UNI_MP_PLUGIN__ = n), t(r.default);
      }).call(this, n("bc2e")["default"], n("543d")["createPage"]);
    },
    e98e: function e98e(e, t, n) {
      "use strict";
      (function (e) {
        var o = n("4ea4");
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var r = o(n("2eee")),
          a = o(n("9523")),
          s = o(n("c973")),
          i = n("4789"),
          c = n("26cb");
        o(n("8bb1"));
        function u(e, t) {
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
              ? u(Object(n), !0).forEach(function (t) {
                  (0, a.default)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : u(Object(n)).forEach(function (t) {
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
            getAddress: function getAddress() {
              n.e("components/address/get-address")
                .then(
                  function () {
                    return resolve(n("8a7f"));
                  }.bind(null, n)
                )
                .catch(n.oe);
            },
            getZtd: function getZtd() {
              n.e("components/address/get-ztd")
                .then(
                  function () {
                    return resolve(n("9cc5"));
                  }.bind(null, n)
                )
                .catch(n.oe);
            },
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
          },
          data: function data() {
            return {
              showLoading: !1,
              closePay: !1,
              showPay: !1,
              carInfo: {},
              ModeArr: [],
              pcarList: [],
              wmAddress: "",
              params: {
                storeId: "",
                userAddId: "",
                deliveryMode: "2",
                serviceAt: "",
                appointment: "",
                serviceTime: "",
                userTel: "",
                couponId: { store: "", platform: "" },
                userNote: "",
                isOut: "",
                changeId: "",
                changeGoodsId: "",
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
            };
          },
          onLoad: function onLoad() {
            var t = this;
            return (0, s.default)(
              r.default.mark(function n() {
                var o, a;
                return r.default.wrap(function (n) {
                  while (1) {
                    switch ((n.prev = n.next)) {
                      case 0:
                        for (a in (t.getSystem(),
                        t.util.setNT("提交订单"),
                        (t.carInfo = e.getStorageSync("carInfo")),
                        (o = []),
                        t.carInfo.carList)) {
                          t.carInfo.carList[a].originalNum > 0 &&
                            o.push(
                              Object.assign(
                                {
                                  ishd: 0,
                                  spnum: t.carInfo.carList[a].originalNum,
                                },
                                t.carInfo.carList[a]
                              )
                            ),
                            t.carInfo.carList[a].discountNum > 0 &&
                              o.push(
                                Object.assign(
                                  {
                                    ishd: 1,
                                    spnum: t.carInfo.carList[a].discountNum,
                                  },
                                  t.carInfo.carList[a]
                                )
                              );
                        }
                        (t.pcarList = o),
                          (t.params.storeId = t.carInfo.sjxx.shopData.id),
                          (t.params.userTel = t.user.userTel),
                          t.getOrderset(),
                          t.getOrderMuster(),
                          t.getyhqArr(),
                          e.$on("payorder", function (e) {
                            e.hasOwnProperty("hbInfo") &&
                              (1 == e.type
                                ? ((t.couponInfo.store = e.hbInfo || ""),
                                  (t.params.couponId.store = t.couponInfo.store
                                    ? t.couponInfo.store.id
                                    : ""))
                                : 2 == e.type &&
                                  ((t.couponInfo.platform = e.hbInfo || ""),
                                  (t.params.couponId.platform = t.couponInfo
                                    .platform
                                    ? t.couponInfo.platform.id
                                    : ""))),
                              console.log("payorderEl", e);
                          }),
                          setTimeout(function () {
                            t.isOnLoad = !0;
                          });
                      case 13:
                      case "end":
                        return n.stop();
                    }
                  }
                }, n);
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
                {},
                (0, c.mapState)({
                  orderset: function orderset(e) {
                    return e.config.orderset;
                  },
                })
              ),
              (0, c.mapState)("dndc", ["latLng"])
            ),
            {},
            {
              xjMoney: function xjMoney() {
                if (this.carInfo.carPrice) {
                  var e = +(
                      this.carInfo.getTotal.spzj - this.carInfo.mjInfo.mjMoney
                    ).toFixed(2),
                    t = this.orderMuster.newReduction || 0,
                    n = 0,
                    o = 0;
                  this.couponInfo.store &&
                    (this.orderMuster.newReduction <= 0 ||
                      1 == this.orderMuster.newandcoupon) &&
                    (1 == this.couponInfo.store.type ||
                    3 == this.couponInfo.store.type
                      ? (n = +this.couponInfo.store.money || 0)
                      : 2 == this.couponInfo.store.type &&
                        (n = +this.couponInfo.store.money),
                    n < 0 && (n = 0)),
                    this.couponInfo.platform &&
                      (this.orderMuster.newReduction <= 0 ||
                        1 == this.orderMuster.newandcoupon) &&
                      (1 == this.couponInfo.platform.type
                        ? (o = +this.couponInfo.platform.money || 0)
                        : 2 == this.couponInfo.platform.type &&
                          (o = +this.couponInfo.platform.money),
                      o < 0 && (o = 0));
                  var r = +(
                      (this.wmAddress && this.wmAddress.deliveryMoney) ||
                      0
                    ),
                    a = this.carInfo.getTotal.bzf,
                    s = 0,
                    i = 0,
                    c = +(e - n - o - t).toFixed(2);
                  return (
                    (this.deliveryPreferential = 0),
                    1 == this.params.deliveryMode
                      ? ((r = 0), 1 == this.params.isOut && (a = 0))
                      : this.wmAddress &&
                        (this.deliveryPreferential = this.wmAddress.discount),
                    c <= 0 && (c = 0.01),
                    (s = +(c + r + a).toFixed(2)),
                    s <= 0 && (s = 0.01),
                    (this.yhqPreferential.store = n),
                    (this.yhqPreferential.platform = o),
                    this.system.taxRatio > 0 &&
                      (i = +(s * (this.system.taxRatio / 100)).toFixed(2)),
                    { total: s, psf: r, slje: i, bzf: a }
                  );
                }
              },
              jsInfo: function jsInfo() {
                var e = this;
                if (this.carInfo.carPrice) {
                  var t =
                      this.carInfo.getTotal.total +
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
                  t += this.carInfo.getTotal.hyzk;
                  var a =
                    this.carInfo.sjxx.discount.give.moneyArr &&
                    this.carInfo.sjxx.discount.give.moneyArr.find(function (t) {
                      return e.xjMoney.total >= t.fullMoney;
                    });
                  return (
                    a && (o = { name: "满赠优惠", title: "".concat(a.give) }),
                    this.xjMoney.total >=
                      this.carInfo.sjxx.discount.grantCoupon.orderMoney &&
                      (r = {
                        name: "满返门店代金券",
                        title: this.carInfo.sjxx.discount.grantCoupon.name,
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
              timearrow: function timearrow() {
                return this.yjTime.length;
              },
              appointment: function appointment() {
                return (
                  this.yjrV.timeTitle &&
                  -1 == this.yjrV.timeTitle.indexOf("现在下单")
                );
              },
              ljsctext: function ljsctext() {
                return 1 == this.params.deliveryMode
                  ? this.yjrV.timeTitle
                    ? "立即自取"
                    : ""
                  : this.yjrV.timeTitle
                  ? "约".concat(this.yjrV.timeTitle.substring(4, 9), "送达")
                  : "";
              },
            }
          ),
          methods: d(
            d(
              d({}, (0, c.mapActions)(["getConfig"])),
              (0, c.mapMutations)(["setScarList"])
            ),
            {},
            {
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
              getOrderset: function getOrderset() {
                var t = this;
                return (0, s.default)(
                  r.default.mark(function n() {
                    return r.default.wrap(function (n) {
                      while (1) {
                        switch ((n.prev = n.next)) {
                          case 0:
                            t.carInfo.sjxx.moreSet,
                              t.carInfo.sjxx.outSet,
                              (t.params.deliveryMode =
                                1 == t.carInfo.buyType ? 2 : 1),
                              [].includes("1") ||
                                t.ztTypeArr.push({
                                  value: "1",
                                  name: t.system.custom.dnjc || "店内就餐",
                                  icon: "icondianneitubiao f36",
                                }),
                              [].includes("2") ||
                                t.ztTypeArr.push({
                                  value: "2",
                                  name: t.system.custom.dbdz || "打包带走",
                                  icon: "icondabao f42",
                                }),
                              t.ztTypeArr[0] &&
                                (t.params.isOut = t.ztTypeArr[0].value),
                              t
                                .getConfig({ key: "orderset", api: "ddsz" })
                                .then(function () {
                                  e.setStorageSync(
                                    "fwb",
                                    t.orderset.selfAgreement
                                  );
                                }),
                              (t.showLoading = !0);
                          case 7:
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
                                    type: 3,
                                    storeType: 1,
                                  },
                                }),
                                t.util.request({
                                  url: t.api.kyyhq,
                                  method: "POST",
                                  data: {
                                    storeId: t.params.storeId,
                                    type: 3,
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
                                  orderType: 3,
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
                return (e * t).toFixed(2);
              },
              xzhg: function xzhg(e) {
                this.hgInfo = e.id == this.hgInfo.id ? {} : e;
              },
              ljzf: function ljzf() {
                var t = this;
                return (0, s.default)(
                  r.default.mark(function n() {
                    var o, a;
                    return r.default.wrap(
                      function (n) {
                        while (1) {
                          switch ((n.prev = n.next)) {
                            case 0:
                              if (((t.loading = !0), t.jjmbxx)) {
                                n.next = 12;
                                break;
                              }
                              return (
                                (n.prev = 2),
                                (n.next = 5),
                                t.requestSM("fastOrder")
                              );
                            case 5:
                              n.next = 12;
                              break;
                            case 7:
                              return (
                                (n.prev = 7),
                                (n.t0 = n["catch"](2)),
                                (t.jjmbxx = !0),
                                (t.loading = !1),
                                n.abrupt("return")
                              );
                            case 12:
                              return (
                                t.hgInfo.id &&
                                  ((t.params.changeId =
                                    t.orderMuster.changePay.id),
                                  (t.params.changeGoodsId = t.hgInfo.id)),
                                (n.next = 15),
                                t.util.request({
                                  url: t.api["kcxd"],
                                  method: "POST",
                                  ct: 1,
                                  mask: "下单中",
                                  data: t.params,
                                })
                              );
                            case 15:
                              (o = n.sent),
                                o
                                  ? (t.util.message("下单成功", 1),
                                    (a = t.util.getPage()),
                                    a.$vm.refreshInfo(),
                                    t.go({
                                      t: 2,
                                      url:
                                        "/yb_wm/other/mg-pay?payObj=" +
                                        encodeURIComponent(
                                          JSON.stringify({
                                            orderId: o.data,
                                            orderType: 6,
                                            info: {
                                              money: t.jsInfo.hjMoney,
                                              storeName:
                                                t.carInfo.sjxx.shopData.name,
                                              type: "".concat(
                                                t.system.custom.fastName ||
                                                  "快餐",
                                                "下单支付"
                                              ),
                                              go: {
                                                t: 6,
                                                url: "/yb_wm/index/order-index",
                                              },
                                            },
                                          })
                                        ),
                                    }),
                                    e.setStorageSync("note", t.params.userNote))
                                  : (t.loading = !1);
                            case 17:
                            case "end":
                              return n.stop();
                          }
                        }
                      },
                      n,
                      null,
                      [[2, 7]]
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
  },
  [["c81c", "common/runtime", "common/vendor"]],
]);
