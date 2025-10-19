(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/shop/out/pay-order"],
  {
    "1ffe": function ffe(e, t, r) {
      "use strict";
      var n = r("c159"),
        o = r.n(n);
      o.a;
    },
    "4b42": function b42(e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return n;
      }),
        r.d(t, "c", function () {
          return o;
        }),
        r.d(t, "a", function () {});
      var n = function n() {
          var e = this,
            t = e.$createElement,
            r =
              (e._self._c,
              e.carInfo.sjxx && e.carInfo.sjxx.moreSet.orderNotice
                ? e.cTR(e.tColor)
                : null),
            n = e.ModeArr.length,
            o = e.ModeArr.length,
            s = e.yjTime.length,
            a = !e.yjTime.length && e.wmTime.length,
            i = e.ztTypeArr.length,
            c = e.yjTime.length,
            u = !e.yjTime.length && e.wmTime.length,
            d = e.__map(e.pcarList, function (t, r) {
              var n = e.__get_orig(t),
                o = r == e.pcarList.length - 1 && 1,
                s = t.ishd ? e.itemTotal(t.discountPrice, t.spnum) : null,
                a = t.ishd ? null : e.itemTotal(t.money, t.spnum);
              return { $orig: n, g7: o, m1: s, m2: a };
            }),
            f =
              e.orderMuster.changePay &&
              e.orderMuster.changePay.goodsArr &&
              e.orderMuster.changePay.goodsArr.length,
            l = f ? e.blxs(e.hgInfo.price - e.hgInfo.money) : null,
            h = f
              ? e.__map(e.orderMuster.changePay.goodsArr, function (t, r) {
                  var n = e.__get_orig(t),
                    o = Number(((t.money / t.price) * 10).toFixed(2));
                  return { $orig: n, m4: o };
                })
              : null,
            m = e.yjTime.length;
          e._isMounted ||
            ((e.e0 = function (t) {
              e.showTime = !0;
            }),
            (e.e1 = function (t) {
              e.showTime = !0;
            }),
            (e.e2 = function (t) {
              e.showyhgz = !0;
            }),
            (e.e3 = function (t) {
              e.showTime = !1;
            }),
            (e.e4 = function (t) {
              t.stopPropagation(), (e.showyhgz = !1);
            }),
            (e.e5 = function (t) {
              e.showqrtc = !1;
            })),
            (e.$mp.data = Object.assign(
              {},
              {
                $root: {
                  m0: r,
                  g0: n,
                  g1: o,
                  g2: s,
                  g3: a,
                  g4: i,
                  g5: c,
                  g6: u,
                  l0: d,
                  g8: f,
                  m3: l,
                  l1: h,
                  g9: m,
                },
              }
            ));
        },
        o = [];
    },
    "76f3": function f3(e, t, r) {
      "use strict";
      (function (e, t) {
        var n = r("4ea4");
        r("f00a");
        n(r("66fd"));
        var o = n(r("9af2"));
        (e.__webpack_require_UNI_MP_PLUGIN__ = r), t(o.default);
      }).call(this, r("bc2e")["default"], r("543d")["createPage"]);
    },
    8432: function _(e, t, r) {
      "use strict";
      r.r(t);
      var n = r("8e2a"),
        o = r.n(n);
      for (var s in n) {
        ["default"].indexOf(s) < 0 &&
          (function (e) {
            r.d(t, e, function () {
              return n[e];
            });
          })(s);
      }
      t["default"] = o.a;
    },
    "8e2a": function e2a(e, t, r) {
      "use strict";
      (function (e) {
        var n = r("4ea4");
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var o = n(r("2eee")),
          s = n(r("9523")),
          a = n(r("c973")),
          i = r("4789"),
          c = r("26cb");
        n(r("8bb1"));
        function u(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function d(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? u(Object(r), !0).forEach(function (t) {
                  (0, s.default)(e, t, r[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : u(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
          }
          return e;
        }
        var f = getApp().globalData,
          l = {
            name: "pay-order",
            components: {
              getAddress: function getAddress() {
                r.e("components/address/get-address")
                  .then(
                    function () {
                      return resolve(r("8a7f"));
                    }.bind(null, r)
                  )
                  .catch(r.oe);
              },
              getZtd: function getZtd() {
                r.e("components/address/get-ztd")
                  .then(
                    function () {
                      return resolve(r("9cc5"));
                    }.bind(null, r)
                  )
                  .catch(r.oe);
              },
              uniNoticeBar: function uniNoticeBar() {
                r.e("components/third/uni-notice-bar")
                  .then(
                    function () {
                      return resolve(r("990a"));
                    }.bind(null, r)
                  )
                  .catch(r.oe);
              },
              mgPopup: function mgPopup() {
                r.e("components/common/popup")
                  .then(
                    function () {
                      return resolve(r("6b80"));
                    }.bind(null, r)
                  )
                  .catch(r.oe);
              },
              bkB: function bkB() {
                r.e("components/common/block-b")
                  .then(
                    function () {
                      return resolve(r("9d64"));
                    }.bind(null, r)
                  )
                  .catch(r.oe);
              },
              sqBtn: function sqBtn() {
                r.e("components/common/sq-btn")
                  .then(
                    function () {
                      return resolve(r("9823"));
                    }.bind(null, r)
                  )
                  .catch(r.oe);
              },
              mgRadio: function mgRadio() {
                r.e("components/form/mg-radio")
                  .then(
                    function () {
                      return resolve(r("e169"));
                    }.bind(null, r)
                  )
                  .catch(r.oe);
              },
              mgAgree: function mgAgree() {
                r.e("components/form/mg-agree")
                  .then(
                    function () {
                      return resolve(r("a8e6"));
                    }.bind(null, r)
                  )
                  .catch(r.oe);
              },
              mgModal: function mgModal() {
                r.e("components/common/modal")
                  .then(
                    function () {
                      return resolve(r("ddfd"));
                    }.bind(null, r)
                  )
                  .catch(r.oe);
              },
              load: function load() {
                r.e("components/common/load")
                  .then(
                    function () {
                      return resolve(r("2d33"));
                    }.bind(null, r)
                  )
                  .catch(r.oe);
              },
            },
            data: function data() {
              return {
                showLoading: !1,
                closePay: !1,
                showPay: !1,
                carInfo: {},
                pcarList: [],
                ModeArr: [],
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
                zzsj: {},
                showqrtc: !1,
                openset: 1,
              };
            },
            onLoad: function onLoad() {
              var t = this;
              return (0, a.default)(
                o.default.mark(function r() {
                  var n, s;
                  return o.default.wrap(function (r) {
                    while (1) {
                      switch ((r.prev = r.next)) {
                        case 0:
                          for (s in (t.getSystem(),
                          t.util.setNT("提交订单"),
                          (t.carInfo = e.getStorageSync("carInfo")),
                          (n = []),
                          t.carInfo.carList)) {
                            t.carInfo.carList[s].originalNum > 0 &&
                              n.push(
                                Object.assign(
                                  {
                                    ishd: 0,
                                    spnum: t.carInfo.carList[s].originalNum,
                                  },
                                  t.carInfo.carList[s]
                                )
                              ),
                              t.carInfo.carList[s].discountNum > 0 &&
                                n.push(
                                  Object.assign(
                                    {
                                      ishd: 1,
                                      spnum: t.carInfo.carList[s].discountNum,
                                    },
                                    t.carInfo.carList[s]
                                  )
                                );
                          }
                          (t.pcarList = n),
                            (t.params.storeId = t.carInfo.sjxx.shopData.id),
                            (t.params.userTel = t.user.userTel),
                            (t.wmAddress = f.xzdzInfo || ""),
                            console.log("this.wmAddress", t.wmAddress),
                            t.getOrderset(),
                            t.getWmAddress(),
                            t.getOrderMuster(),
                            t.getyhqArr(),
                            e.$on("payorder", function (e) {
                              e.hasOwnProperty("hbInfo") &&
                                (1 == e.type
                                  ? ((t.couponInfo.store = e.hbInfo || ""),
                                    (t.params.couponId.store = t.couponInfo
                                      .store
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
                        case 16:
                        case "end":
                          return r.stop();
                      }
                    }
                  }, r);
                })
              )();
            },
            onUnload: function onUnload() {
              e.$off("payorder");
            },
            onShow: function onShow() {
              f.xzdzInfo && this.refreshAddress(f.xzdzInfo);
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
                    storeInfo: function storeInfo(e) {
                      return e.config.storeInfo;
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
                      r = 0,
                      n = 0;
                    this.couponInfo.store &&
                      (this.orderMuster.newReduction <= 0 ||
                        1 == this.orderMuster.newandcoupon) &&
                      (1 == this.couponInfo.store.type ||
                      3 == this.couponInfo.store.type
                        ? (r = +this.couponInfo.store.money || 0)
                        : 2 == this.couponInfo.store.type &&
                          (r = +this.couponInfo.store.money),
                      r < 0 && (r = 0)),
                      this.couponInfo.platform &&
                        (this.orderMuster.newReduction <= 0 ||
                          1 == this.orderMuster.newandcoupon) &&
                        (1 == this.couponInfo.platform.type
                          ? (n = +this.couponInfo.platform.money || 0)
                          : 2 == this.couponInfo.platform.type &&
                            (n = +this.couponInfo.platform.money),
                        n < 0 && (n = 0));
                    var o = +(
                        (this.wmAddress && this.wmAddress.deliveryMoney) ||
                        0
                      ),
                      s = this.carInfo.getTotal.bzf,
                      a = 0,
                      i = 0,
                      c = +(e - r - n - t).toFixed(2);
                    return (
                      (this.deliveryPreferential = 0),
                      1 == this.params.deliveryMode
                        ? ((o = 0), 1 == this.params.isOut && (s = 0))
                        : this.wmAddress &&
                          (this.deliveryPreferential = this.wmAddress.discount),
                      c <= 0 && (c = 0.01),
                      (a = +(c + o + s).toFixed(2)),
                      a <= 0 && (a = 0.01),
                      (this.yhqPreferential.store = r),
                      (this.yhqPreferential.platform = n),
                      this.system.taxRatio > 0 &&
                        (i = +(a * (this.system.taxRatio / 100)).toFixed(2)),
                      { total: a, psf: o, slje: i, bzf: s }
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
                      r = this.xjMoney.total + this.xjMoney.slje,
                      n = {},
                      o = {};
                    t += this.carInfo.getTotal.hyzk;
                    var s =
                      this.carInfo.sjxx.discount.give.moneyArr &&
                      this.carInfo.sjxx.discount.give.moneyArr.find(function (
                        t
                      ) {
                        return e.xjMoney.total >= t.fullMoney;
                      });
                    return (
                      s && (n = { name: "满赠优惠", title: "".concat(s.give) }),
                      this.xjMoney.total >=
                        this.carInfo.sjxx.discount.grantCoupon.orderMoney &&
                        (o = {
                          name: "满返门店代金券",
                          title: this.carInfo.sjxx.discount.grantCoupon.name,
                        }),
                      this.hgInfo.id && (r = +this.hgInfo.money + r),
                      {
                        yhzj: +t.toFixed(2),
                        hjMoney: +r.toFixed(2),
                        mzInfo: n,
                        mfInfo: o,
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
                    (this.params.deliveryMode = +e.value),
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
                  return (0, a.default)(
                    o.default.mark(function r() {
                      var n, s;
                      return o.default.wrap(function (r) {
                        while (1) {
                          switch ((r.prev = r.next)) {
                            case 0:
                              (n = t.carInfo.sjxx.moreSet),
                                (s = t.carInfo.sjxx.outSet),
                                s.includes("2") &&
                                  t.ModeArr.push({
                                    icon: "iconmd",
                                    name: n.selfName,
                                    value: "1",
                                  }),
                                s.includes("1") &&
                                  t.ModeArr.push({
                                    icon: "iconps",
                                    name: n.outName,
                                    value: "2",
                                  }),
                                2 == s.length &&
                                  2 == t.carInfo.sjxx.moreSet.auto &&
                                  t.ModeArr.reverse(),
                                (t.params.deliveryMode =
                                  1 == t.carInfo.buyType ? 2 : 1),
                                n.diningType.includes("1") &&
                                  t.ztTypeArr.push({
                                    value: "1",
                                    name: t.system.custom.dnjc || "店内就餐",
                                    icon: "icondianneitubiao f36",
                                  }),
                                n.diningType.includes("2") &&
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
                                    console.log("se", t.orderset),
                                      2 == t.orderset.show_delivery_time &&
                                        (t.openset = 2),
                                      e.setStorageSync(
                                        "fwb",
                                        t.orderset.selfAgreement
                                      );
                                  });
                            case 9:
                            case "end":
                              return r.stop();
                          }
                        }
                      }, r);
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
                  return (0, a.default)(
                    o.default.mark(function r() {
                      var n;
                      return o.default.wrap(function (r) {
                        while (1) {
                          switch ((r.prev = r.next)) {
                            case 0:
                              return (
                                e.setStorageSync("kyhb", { n: 0, data: [] }),
                                (r.next = 3),
                                Promise.all([
                                  t.util.request({
                                    url: t.api.kyyhq,
                                    method: "POST",
                                    data: {
                                      storeId: t.params.storeId,
                                      type: 1,
                                      storeType: 1,
                                    },
                                  }),
                                  t.util.request({
                                    url: t.api.kyyhq,
                                    method: "POST",
                                    data: {
                                      storeId: t.params.storeId,
                                      type: 1,
                                      storeType: 2,
                                    },
                                  }),
                                ])
                              );
                            case 3:
                              (n = r.sent),
                                (t.kyhb = {
                                  dpyhq: {
                                    n: n[0].data.length,
                                    data: n[0].data,
                                  },
                                  ptyhq: {
                                    n: n[1].data.length,
                                    data: n[1].data,
                                  },
                                }),
                                e.hideLoading();
                            case 6:
                            case "end":
                              return r.stop();
                          }
                        }
                      }, r);
                    })
                  )();
                },
                getOrderMuster: function getOrderMuster() {
                  var e = this;
                  return (0, a.default)(
                    o.default.mark(function t() {
                      var r, n;
                      return o.default.wrap(function (t) {
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
                                    userId: e.uId,
                                    orderType: 1,
                                  },
                                })
                              );
                            case 2:
                              (r = t.sent),
                                (n = r.data),
                                (e.orderMuster = n || { newReduction: 0 }),
                                e.getZzsj();
                            case 6:
                            case "end":
                              return t.stop();
                          }
                        }
                      }, t);
                    })
                  )();
                },
                getZzsj: function getZzsj() {
                  var e = this;
                  return (0, a.default)(
                    o.default.mark(function t() {
                      var r, n;
                      return o.default.wrap(function (t) {
                        while (1) {
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.next = 2),
                                e.util.request({
                                  url: e.api.zzsj,
                                  method: "POST",
                                  data: { storeId: e.params.storeId },
                                })
                              );
                            case 2:
                              (r = t.sent), (n = r.data), (e.zzsj = n);
                            case 5:
                            case "end":
                              return t.stop();
                          }
                        }
                      }, t);
                    })
                  )();
                },
                checkQsj: function checkQsj() {
                  var t = this;
                  this.wmAddress &&
                    +this.wmAddress.startMoney > this.carInfo.getTotal.total &&
                    e.showModal({
                      title: "提示",
                      content: "您的商品总计金额"
                        .concat(
                          this.sl + this.carInfo.getTotal.total,
                          "，未达到此收货地址的起送价"
                        )
                        .concat(this.sl + this.wmAddress.startMoney),
                      showCancel: !1,
                      success: function success(e) {
                        var r = t.util.getPage();
                        (r.$vm.startMoney = t.wmAddress.startMoney),
                          t.go({ t: 4 });
                      },
                    });
                },
                refreshAddress: function refreshAddress(e) {
                  (this.wmAddress = e || ""),
                    this.getZzsj(),
                    this.getWmAddress();
                },
                getWmAddress: function getWmAddress() {
                  var e = this;
                  return (0, a.default)(
                    o.default.mark(function t() {
                      var r;
                      return o.default.wrap(function (t) {
                        while (1) {
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (2 != e.params.deliveryMode) {
                                t.next = 12;
                                break;
                              }
                              if (e.wmAddress.id) {
                                t.next = 7;
                                break;
                              }
                              return (
                                (t.next = 4),
                                e.util.request({
                                  url: e.api.xzshdz,
                                  method: "POST",
                                  data: {
                                    storeId: e.carInfo.sjxx.shopData.id,
                                    lat: e.latLng.lat,
                                    lng: e.latLng.lng,
                                  },
                                })
                              );
                            case 4:
                              (r = t.sent), (t.next = 10);
                              break;
                            case 7:
                              return (
                                (t.next = 9),
                                e.util.request({
                                  url: e.api.xzshdz,
                                  method: "POST",
                                  data: {
                                    storeId: e.carInfo.sjxx.shopData.id,
                                    addressId: e.wmAddress.id,
                                    lat: e.latLng.lat,
                                    lng: e.latLng.lng,
                                  },
                                })
                              );
                            case 9:
                              r = t.sent;
                            case 10:
                              (e.wmAddress = (r && r.data) || ""),
                                r || e.$refs.getaddress.goChoose();
                            case 12:
                              e.wmAddress
                                ? ((e.params.userAddId = e.wmAddress.id),
                                  2 == e.params.deliveryMode
                                    ? (e.checkQsj(),
                                      e.getyjTime(e.params.userAddId))
                                    : e.getyjTime())
                                : ((e.params.userAddId = ""), e.getyjTime()),
                                e.getZzsj(),
                                (e.showLoading = !0);
                            case 15:
                            case "end":
                              return t.stop();
                          }
                        }
                      }, t);
                    })
                  )();
                },
                getyjTime: function getyjTime() {
                  var t = arguments,
                    r = this;
                  return (0, a.default)(
                    o.default.mark(function n() {
                      var s, a, i;
                      return o.default.wrap(function (n) {
                        while (1) {
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (
                                (s =
                                  t.length > 0 && void 0 !== t[0] ? t[0] : ""),
                                (r.yjIndex = 0),
                                (n.next = 4),
                                r.util.request({
                                  url: r.api.wmxzsj,
                                  data: {
                                    userAddId: s,
                                    storeId: r.params.storeId,
                                    orderType:
                                      1 == r.params.deliveryMode ? 2 : 1,
                                  },
                                })
                              );
                            case 4:
                              (a = n.sent),
                                (i = a.data),
                                i[0]
                                  ? (r.yjrV = i[0].time[0])
                                  : e.showModal({
                                      title: "提示",
                                      content:
                                        "此商家营业时间或预约单设置不合理，无有效的供用户选择的时间，无法下单",
                                      showCancel: !1,
                                      success: function success(e) {
                                        r.go({ t: 4 });
                                      },
                                    }),
                                e.hideLoading(),
                                (r.yjTime = i);
                            case 9:
                            case "end":
                              return n.stop();
                          }
                        }
                      }, n);
                    })
                  )();
                },
                yjlClick: function yjlClick(e) {
                  var t = this;
                  (this.yjIndex = e),
                    (this.rsiv = "r"),
                    setTimeout(function () {
                      t.rsiv = "r".concat(Object.keys(t.yjTime[e].time)[0]);
                    }, 10);
                },
                yjrClick: function yjrClick(e) {
                  var t = this;
                  (this.yjrV = e),
                    console.log(e),
                    2 == this.openset && (this.openset = 1),
                    setTimeout(function () {
                      t.showTime = !1;
                    }, 200);
                },
                itemTotal: function itemTotal(e, t) {
                  return (e * t).toFixed(2);
                },
                xzhg: function xzhg(e) {
                  this.hgInfo = e.id == this.hgInfo.id ? {} : e;
                },
                ljzf: function ljzf() {
                  var t = this;
                  return (0, a.default)(
                    o.default.mark(function r() {
                      var n, s, a;
                      return o.default.wrap(
                        function (r) {
                          while (1) {
                            switch ((r.prev = r.next)) {
                              case 0:
                                if (2 != t.openset) {
                                  r.next = 3;
                                  break;
                                }
                                return (t.showTime = !0), r.abrupt("return");
                              case 3:
                                if (t.yjrV.time) {
                                  r.next = 5;
                                  break;
                                }
                                return r.abrupt(
                                  "return",
                                  t.util.message("请选择时间", 3)
                                );
                              case 5:
                                if (2 != t.params.deliveryMode) {
                                  r.next = 10;
                                  break;
                                }
                                if (t.params.userAddId) {
                                  r.next = 8;
                                  break;
                                }
                                return r.abrupt(
                                  "return",
                                  t.$refs.getaddress.goChoose()
                                );
                              case 8:
                                r.next = 16;
                                break;
                              case 10:
                                if (
                                  "2" ==
                                    t.carInfo.sjxx.moreSet.reserveTelOpen ||
                                  t.params.userTel
                                ) {
                                  r.next = 14;
                                  break;
                                }
                                return r.abrupt(
                                  "return",
                                  t.util.message("请输入预留手机号", 3)
                                );
                              case 14:
                                if (t.agree) {
                                  r.next = 16;
                                  break;
                                }
                                return r.abrupt(
                                  "return",
                                  t.util.message("请阅读并同意服务协议", 3)
                                );
                              case 16:
                                if (
                                  1 != t.orderset.confirmSwitch ||
                                  t.showqrtc
                                ) {
                                  r.next = 18;
                                  break;
                                }
                                return r.abrupt("return", (t.showqrtc = !0));
                              case 18:
                                if (((t.loading = !0), t.jjmbxx)) {
                                  r.next = 30;
                                  break;
                                }
                                return (
                                  (r.prev = 20),
                                  (r.next = 23),
                                  t.requestSM("saveOrder")
                                );
                              case 23:
                                r.next = 30;
                                break;
                              case 25:
                                return (
                                  (r.prev = 25),
                                  (r.t0 = r["catch"](20)),
                                  (t.jjmbxx = !0),
                                  (t.loading = !1),
                                  r.abrupt("return")
                                );
                              case 30:
                                return (
                                  t.hgInfo.id &&
                                    ((t.params.changeId =
                                      t.orderMuster.changePay.id),
                                    (t.params.changeGoodsId = t.hgInfo.id)),
                                  (t.params.serviceAt =
                                    -1 == t.yjrV.timeTitle.indexOf("现在下单")
                                      ? t.yjTime[t.yjIndex].dayTitle +
                                        " " +
                                        t.yjrV.timeTitle
                                      : t.yjrV.timeTitle),
                                  (t.params.serviceTime = t.yjrV.time),
                                  (t.params.appointment = t.appointment
                                    ? 1
                                    : ""),
                                  1 != t.params.appointment &&
                                    (t.params.serviceAt =
                                      t.params.serviceAt.substr(4)),
                                  (r.next = 37),
                                  t.util.request({
                                    url: t.api["wmxd"],
                                    method: "POST",
                                    ct: 1,
                                    mask: "下单中",
                                    data: t.params,
                                  })
                                );
                              case 37:
                                (n = r.sent),
                                  n
                                    ? ((s = getCurrentPages().length),
                                      s && 1 == s
                                        ? t.refreshInfo()
                                        : ((a = t.util.getPage()),
                                          a.$vm.refreshInfo()),
                                      t.go({
                                        t: 2,
                                        url:
                                          "/yb_wm/other/mg-pay?payObj=" +
                                          encodeURIComponent(
                                            JSON.stringify({
                                              orderId: n.data,
                                              orderType: 1,
                                              info: {
                                                money: t.jsInfo.hjMoney,
                                                storeName:
                                                  t.carInfo.sjxx.shopData.name,
                                                type: "下单支付",
                                                go: {
                                                  t: 6,
                                                  url: "/yb_wm/index/order-index",
                                                },
                                              },
                                            })
                                          ),
                                      }),
                                      e.setStorageSync(
                                        "note",
                                        t.params.userNote
                                      ))
                                    : (t.loading = !1);
                              case 39:
                              case "end":
                                return r.stop();
                            }
                          }
                        },
                        r,
                        null,
                        [[20, 25]]
                      );
                    })
                  )();
                },
                refreshInfo: function refreshInfo() {
                  var e = this;
                  return (0, a.default)(
                    o.default.mark(function t() {
                      return o.default.wrap(function (t) {
                        while (1) {
                          switch ((t.prev = t.next)) {
                            case 0:
                              (getApp().globalData.xzdzInfo = null),
                                e.setScarList({ data: {} });
                            case 2:
                            case "end":
                              return t.stop();
                          }
                        }
                      }, t);
                    })
                  )();
                },
              }
            ),
            created: function created() {
              return (0, a.default)(
                o.default.mark(function e() {
                  return o.default.wrap(function (e) {
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
        t.default = l;
      }).call(this, r("543d")["default"]);
    },
    "9af2": function af2(e, t, r) {
      "use strict";
      r.r(t);
      var n = r("4b42"),
        o = r("8432");
      for (var s in o) {
        ["default"].indexOf(s) < 0 &&
          (function (e) {
            r.d(t, e, function () {
              return o[e];
            });
          })(s);
      }
      r("f00e"), r("1ffe");
      var a = r("f0c5"),
        i = Object(a["a"])(
          o["default"],
          n["b"],
          n["c"],
          !1,
          null,
          "f4139268",
          null,
          !1,
          n["a"],
          void 0
        );
      t["default"] = i.exports;
    },
    c159: function c159(e, t, r) {},
    f00e: function f00e(e, t, r) {
      "use strict";
      var n = r("f58e"),
        o = r.n(n);
      o.a;
    },
    f58e: function f58e(e, t, r) {},
  },
  [["76f3", "common/runtime", "common/vendor"]],
]);
