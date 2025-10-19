(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/shop/in/goods"],
  {
    "0f41": function f41(t, e, n) {
      "use strict";
      (function (t) {
        var o = n("4ea4");
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var r = o(n("2eee")),
          s = o(n("9523")),
          a = o(n("c973")),
          i = n("26cb"),
          c = o(n("8bb1")),
          u = n("4789"),
          d = n("6326");
        function l(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            e &&
              (o = o.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              n.push.apply(n, o);
          }
          return n;
        }
        function f(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? l(Object(n), !0).forEach(function (e) {
                  (0, s.default)(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : l(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
          }
          return t;
        }
        getApp().globalData;
        var h = {
          components: {
            uniNavBar: function uniNavBar() {
              n.e("components/third/uni-nav-bar")
                .then(
                  function () {
                    return resolve(n("d2b9"));
                  }.bind(null, n)
                )
                .catch(n.oe);
            },
            goods: function goods() {
              n.e("components/goods/index")
                .then(
                  function () {
                    return resolve(n("0205"));
                  }.bind(null, n)
                )
                .catch(n.oe);
            },
            goodsCar: function goodsCar() {
              n.e("components/goods/goods-car")
                .then(
                  function () {
                    return resolve(n("1b0e"));
                  }.bind(null, n)
                )
                .catch(n.oe);
            },
            spec: function spec() {
              n.e("components/goods/spec")
                .then(
                  function () {
                    return resolve(n("b20c"));
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
            mgPopup: function mgPopup() {
              n.e("components/common/popup")
                .then(
                  function () {
                    return resolve(n("6b80"));
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
            mgInput: function mgInput() {
              n.e("components/form/mg-input")
                .then(
                  function () {
                    return resolve(n("5af8"));
                  }.bind(null, n)
                )
                .catch(n.oe);
            },
            jzz: function jzz() {
              n.e("components/common/jzz")
                .then(
                  function () {
                    return resolve(n("3db1"));
                  }.bind(null, n)
                )
                .catch(n.oe);
            },
            tips: function tips() {
              n.e("components/common/tips")
                .then(
                  function () {
                    return resolve(n("4951"));
                  }.bind(null, n)
                )
                .catch(n.oe);
            },
            MgSwiper: function MgSwiper() {
              n.e("components/common/functionCmp/swiper")
                .then(
                  function () {
                    return resolve(n("3415"));
                  }.bind(null, n)
                )
                .catch(n.oe);
            },
            tcyhq: function tcyhq() {
              n.e("components/template/tcyhq")
                .then(
                  function () {
                    return resolve(n("90f7"));
                  }.bind(null, n)
                )
                .catch(n.oe);
            },
            tcgg: function tcgg() {
              n.e("components/template/tcgg")
                .then(
                  function () {
                    return resolve(n("fa4a"));
                  }.bind(null, n)
                )
                .catch(n.oe);
            },
            storeInfo: function storeInfo() {
              n.e("components/goods/store/store-info")
                .then(
                  function () {
                    return resolve(n("4ea6"));
                  }.bind(null, n)
                )
                .catch(n.oe);
            },
          },
          data: function data() {
            return {
              showloading: !0,
              catrgoryList: [],
              sIndex: 0,
              rsiv: "",
              rsiv2: "",
              lsiv: "",
              showGg: !1,
              buyType: 2,
              showShopInfo: !1,
              outin: "2",
              goodsInfo: {},
              showjz: !1,
              tcyhqshow: !1,
              tcCoupon: {},
              tcggshow: !1,
              tcggList: [],
              showCar: !1,
              startMoney: "",
              xdtype: "",
              issc: !1,
              sjyhq: [],
              flid: "",
              jsgdwb: !1,
              sjqb: [],
              storeInfo: {},
              showTable: !1,
              showTotop: !1,
              parr: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "更多"],
              paIx: 1,
              showxzrs: !1,
              zdyrs: "",
              sjxx: {},
              showhdp: "",
            };
          },
          mixins: [u.utilMixins],
          onLoad: function onLoad(t) {
            var e = this;
            return (0, a.default)(
              r.default.mark(function n() {
                var o, s, a;
                return r.default.wrap(function (n) {
                  while (1) {
                    switch ((n.prev = n.next)) {
                      case 0:
                        if (
                          ((o = c.default.getOptions(t, { key: "tableId" })),
                          (e.query = t),
                          (e.tableId = o),
                          o)
                        ) {
                          n.next = 5;
                          break;
                        }
                        return n.abrupt("return", e.tips());
                      case 5:
                        return (
                          (n.next = 7),
                          Promise.all([
                            e.getLoginInfo(),
                            e.getConfig({ key: "orderset", api: "ddsz" }),
                          ])
                        );
                      case 7:
                        if (((s = {}), 1 != e.dndcConfig.distanceOpen)) {
                          n.next = 12;
                          break;
                        }
                        return (n.next = 11), (0, d.getDw)({ t: 0 });
                      case 11:
                        s = n.sent;
                      case 12:
                        return (
                          (n.next = 14),
                          e.util.request({
                            url: e.api.tsczxq,
                            method: "POST",
                            data: {
                              tableId: o,
                              lat: s.latitude || "",
                              lng: s.longitude || "",
                            },
                          })
                        );
                      case 14:
                        if (((a = n.sent), !a)) {
                          n.next = 23;
                          break;
                        }
                        if (
                          ((a.data.tableId = o),
                          (e.storeInfo = {
                            id: a.data.storeId,
                            tableInfo: a.data,
                          }),
                          (e.storeId = a.data.storeId),
                          !a.data || "2" != a.data.display)
                        ) {
                          n.next = 21;
                          break;
                        }
                        return n.abrupt("return", e.tip());
                      case 21:
                        n.next = 24;
                        break;
                      case 23:
                        return n.abrupt("return", e.tips());
                      case 24:
                        (e.supdCarbp = {
                          storeId: e.storeId,
                          tableId: o,
                          item: e.outin,
                          key: "ins",
                        }),
                          e.getDw(),
                          e.getSystem();
                      case 27:
                      case "end":
                        return n.stop();
                    }
                  }
                }, n);
              })
            )();
          },
          onShow: function onShow() {
            var t = this;
            this.storeInfo.id &&
              setTimeout(
                (0, a.default)(
                  r.default.mark(function e() {
                    return r.default.wrap(function (e) {
                      while (1) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              t.getMycar(f(f({}, t.supdCarbp), {}, { mask: 1 }))
                            );
                          case 2:
                            t.refreshList();
                          case 3:
                          case "end":
                            return e.stop();
                        }
                      }
                    }, e);
                  })
                ),
                100
              );
          },
          computed: f(
            f(
              {},
              (0, i.mapState)({
                scarList: function scarList(t) {
                  return t.scarList.ins.data || [];
                },
                dndcConfig: function dndcConfig(t) {
                  return t.config.orderset.instore || {};
                },
              })
            ),
            {},
            {
              lbswiper: function lbswiper() {
                return {
                  class: "mt20 mb20",
                  swiper:
                    this.sjxx.moreSet &&
                    this.sjxx.moreSet.orderMedia.map(function (t) {
                      return { url: t };
                    }),
                  duration: "",
                  mode: "",
                  height: "260",
                  radius: "8",
                  auto: !0,
                  interval: 5,
                };
              },
              isClose: function isClose() {
                return (
                  this.sjxx.shopData &&
                  (1 == this.sjxx.shopData.storeOpen ||
                    (2 == this.sjxx.shopData.storeOpen &&
                      1 == this.sjxx.moreSet.status))
                );
              },
              leftpb: function leftpb() {
                return 1 == this.system.outTabbar ? "0" : "100rpx";
              },
              rightpb: function rightpb() {
                return 1 == this.system.outTabbar ? "0" : "100rpx";
              },
              ztqs: function ztqs() {
                return "rgba(".concat(this.cTR(this.tColor), ",0.1)");
              },
              mjtxt: function mjtxt() {
                return this.sjxx.discount && 1 == this.sjxx.discount.reduce.type
                  ? ""
                      .concat(
                        this.sjxx.discount.reduce.moneyArr[0].fullMoney,
                        "减"
                      )
                      .concat(this.sjxx.discount.reduce.moneyArr[0].money)
                  : this.sjxx.discount && 2 == this.sjxx.discount.reduce.type
                  ? this.sjxx.discount.reduce.moneyArr
                      .map(function (t) {
                        return "满".concat(t.fullMoney, "减").concat(t.money);
                      })
                      .reverse()
                      .toString()
                  : void 0;
              },
            }
          ),
          watch: {},
          methods: f(
            f(
              f(
                {},
                (0, i.mapActions)([
                  "getSjxx",
                  "getConfig",
                  "supdCar",
                  "getMycar",
                ])
              ),
              (0, i.mapMutations)(["setScarList"])
            ),
            {},
            {
              ljdc: function ljdc() {
                if ("" == this.paIx) return this.util.message("请选择人数", 3);
                (this.storeInfo.tableInfo.pnum = this.paIx),
                  (this.showTable = !1);
              },
              dcParr: function dcParr(t) {
                if (11 == t) return (this.showxzrs = !0);
                this.paIx = t;
              },
              qdxzrs: function qdxzrs() {
                if ("" == this.zdyrs) return this.util.message("请输入人数", 3);
                (this.storeInfo.tableInfo.pnum = this.paIx = this.zdyrs),
                  (this.showTable = !1);
              },
              tips: function tips() {
                var e = this;
                t.showModal({
                  title: "提示",
                  content: "未获取到桌位信息或者超出商家范围",
                  showCancel: !1,
                  success: function success(t) {
                    e.go({ t: 6, url: "/yb_wm/index/index" });
                  },
                });
              },
              tip: function tip() {
                var e = this;
                t.showModal({
                  title: "提示",
                  content: "桌台已关闭，请联系管理员",
                  showCancel: !1,
                  success: function success(t) {
                    e.go({ t: 6, url: "/yb_wm/index/index" });
                  },
                });
              },
              getDw: function getDw() {
                var t = this;
                return (0, a.default)(
                  r.default.mark(function e() {
                    return r.default.wrap(function (e) {
                      while (1) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), (0, d.getDw)({ t: 0 });
                          case 2:
                            e.sent, t.init();
                          case 4:
                          case "end":
                            return e.stop();
                        }
                      }
                    }, e);
                  })
                )();
              },
              changeStore: function changeStore(t) {
                (this.showloading = !0),
                  (this.tcyhqshow = this.tcggshow = this.jsgdwb = !1),
                  (this.startMoney = ""),
                  (this.xdtype = this.flid = ""),
                  (this.sIndex = 0),
                  (this.storeId = t.id),
                  this.refreshInfo();
              },
              refreshInfo: function refreshInfo() {
                var t = this;
                return (0, a.default)(
                  r.default.mark(function e() {
                    return r.default.wrap(function (e) {
                      while (1) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            (t.sIndex = 0),
                              (t.rsiv = "r0"),
                              t.setScarList({ key: "ins", data: {} }),
                              t.init();
                          case 4:
                          case "end":
                            return e.stop();
                        }
                      }
                    }, e);
                  })
                )();
              },
              init: function init() {
                var e = arguments,
                  n = this;
                return (0, a.default)(
                  r.default.mark(function o() {
                    var s;
                    return r.default.wrap(function (o) {
                      while (1) {
                        switch ((o.prev = o.next)) {
                          case 0:
                            return (
                              e.length > 0 && void 0 !== e[0] ? e[0] : 1,
                              (s = getApp().globalData.gdlocation),
                              (o.next = 4),
                              n.getSjxx2({
                                storeId: n.storeId,
                                goodsType: 2,
                                lat: s.latitude,
                                lng: s.longitude,
                              })
                            );
                          case 4:
                            return (o.next = 6), n.getMycar(n.supdCarbp);
                          case 6:
                            (n.storeId = n.sjxx.shopData.id),
                              (n.catrgoryList = c.default.deepCopy(
                                n.sjxx.data
                              )),
                              n.sjxx.data.length ||
                                t.showModal({
                                  title: "提示",
                                  content: "暂无堂食商品",
                                  confirmText: "返回主页",
                                  cancelText: "我知道了",
                                  success: function success(t) {
                                    t.confirm &&
                                      n.go({ t: 6, url: "/yb_wm/index/index" });
                                  },
                                }),
                              (n.showloading = !1),
                              n.refreshList(),
                              n.$nextTick(function () {
                                setTimeout(function () {
                                  n.getHeightList();
                                }, 100);
                              }),
                              setTimeout(
                                (0, a.default)(
                                  r.default.mark(function t() {
                                    return r.default.wrap(function (t) {
                                      while (1) {
                                        switch ((t.prev = t.next)) {
                                          case 0:
                                            return (
                                              (t.next = 2), n.getOtherData()
                                            );
                                          case 2:
                                          case "end":
                                            return t.stop();
                                        }
                                      }
                                    }, t);
                                  })
                                ),
                                1e3
                              );
                          case 13:
                          case "end":
                            return o.stop();
                        }
                      }
                    }, o);
                  })
                )();
              },
              refreshList: function refreshList() {
                this.showjz = !0;
                for (
                  var t = this.scarList,
                    e = this.catrgoryList,
                    n = 0,
                    o = e.length;
                  n < o;
                  n++
                ) {
                  for (var r = 0, s = e[n].goods.length; r < s; r++) {
                    e[n].goods[r].num = 0;
                    for (var a = 0; a < t.length; a++) {
                      e[n].goods[r].id == t[a].goodsId &&
                        (e[n].goods[r].num += +t[a].num);
                    }
                  }
                }
                this.showjz = !1;
              },
              getSjxx2: function getSjxx2(e) {
                var n = this;
                return (0, a.default)(
                  r.default.mark(function o() {
                    var s, a;
                    return r.default.wrap(function (o) {
                      while (1) {
                        switch ((o.prev = o.next)) {
                          case 0:
                            return (
                              (o.next = 2),
                              n.util.request({
                                url: n.api.shopGoodsInfo,
                                data: e,
                              })
                            );
                          case 2:
                            (s = o.sent),
                              (a = s.data),
                              (a.discount.newReduction =
                                a.discount.give.id =
                                a.discount.grantCoupon.name =
                                  null),
                              (n.sjxx = a),
                              1 == a.moreSet.orderMode
                                ? n.storeInfo.tableInfo.orderInfo
                                  ? ((n.showLoading = !1),
                                    n.query.tableId ||
                                      n.go({
                                        t: 2,
                                        url:
                                          "/yb_wm/shop/in/order-dl?id=" +
                                          n.storeInfo.tableInfo.orderInfo.id,
                                      }))
                                  : 1 == n.storeInfo.tableInfo.state &&
                                    1 == a.moreSet.select_numbe_switch
                                  ? ((n.showTable = !0),
                                    (n.showLoading = !1),
                                    setTimeout(function () {
                                      n.showTotop = !0;
                                    }, 100))
                                  : ((n.storeInfo.tableInfo.pnum = 1),
                                    (n.showLoading = !1))
                                : ((n.showTable = !0),
                                  (n.showLoading = !1),
                                  setTimeout(function () {
                                    n.showTotop = !0;
                                  }, 100)),
                              a.shopData &&
                                a.shopData.tiktokCode &&
                                t.setClipboardData({
                                  data: a.shopData.tiktokCode,
                                  success: function success() {
                                    t.hideToast(),
                                      console.log(a.shopData.tiktokCode);
                                  },
                                });
                          case 8:
                          case "end":
                            return o.stop();
                        }
                      }
                    }, o);
                  })
                )();
              },
              getOtherData: function getOtherData() {
                var t = this;
                return (0, a.default)(
                  r.default.mark(function e() {
                    var n, o;
                    return r.default.wrap(function (e) {
                      while (1) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              t.util.request({
                                url: t.api.qtsjjh,
                                data: { location: 2, storeId: t.storeId },
                              })
                            );
                          case 2:
                            (n = e.sent),
                              (o = n.data),
                              o.windowCoupon.hasOwnProperty("name") &&
                                ((t.tcCoupon = o.windowCoupon),
                                (t.tcyhqshow = !0)),
                              (t.sjyhq = o.storeCoupon);
                          case 6:
                          case "end":
                            return e.stop();
                        }
                      }
                    }, e);
                  })
                )();
              },
              getHeightList: function getHeightList() {
                var e = this,
                  n = t.createSelectorQuery();
                n.selectAll(".c-item")
                  .boundingClientRect(function (t) {
                    var n = [],
                      o = 0;
                    t.forEach(function (t) {
                      (o += t.height), n.push(o);
                    }),
                      (e.right_height = n),
                      (e.jsgdwb = !0);
                  })
                  .exec();
              },
              choose: function choose(t) {
                var e = this;
                if (1 == this.sjxx.moreSet.goodload) {
                  if (this.sIndex == t) return;
                  (this.sIndex = t),
                    (this.noscroll = !0),
                    (this.lsiv = "l".concat(t - 3)),
                    (this.rsiv = "r".concat(t)),
                    setTimeout(function () {
                      e.noscroll = !1;
                    }, 500);
                } else {
                  if (this.sIndex == t) return;
                  (this.sIndex = t), this.swiperChange(t);
                }
              },
              myscroll: function myscroll(t) {
                if (!this.noscroll) {
                  var e = t.detail.scrollTop;
                  this.showhdp = e > 10 ? 1 : 0;
                  for (var n = 0; n < this.right_height.length; n++) {
                    if (e < this.right_height[0])
                      (this.sIndex = 0), (this.lsiv = "l0");
                    else if (
                      e >= this.right_height[n - 1] &&
                      e < this.right_height[n]
                    ) {
                      (this.sIndex = n),
                        (this.lsiv = "l".concat(n - 3)),
                        (this.rsiv = "");
                      break;
                    }
                  }
                }
              },
              myscrolltoupper: function myscrolltoupper(t) {
                "top" == t.detail.direction && (this.showhdp = 0);
              },
              swiperChange: function swiperChange(e) {
                var n = this;
                return (0, a.default)(
                  r.default.mark(function o() {
                    return r.default.wrap(function (o) {
                      while (1) {
                        switch ((o.prev = o.next)) {
                          case 0:
                            (n.rsiv2 = ""),
                              setTimeout(function () {
                                n.rsiv2 = "r0";
                              }, 50),
                              (n.lsiv = "l".concat(e - 3)),
                              0 == n.catrgoryList[e].goods.length &&
                                (n.util.showLoading(),
                                n.$nextTick(function () {
                                  t.hideLoading();
                                }));
                          case 4:
                          case "end":
                            return o.stop();
                        }
                      }
                    }, o);
                  })
                )();
              },
              updList: function updList(t) {
                var e = this;
                return (0, a.default)(
                  r.default.mark(function n() {
                    var o;
                    return r.default.wrap(
                      function (n) {
                        while (1) {
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (
                                (n.prev = 0),
                                (n.next = 3),
                                e.supdCar(
                                  "1" == t.e.addwz
                                    ? t.e.g.ggnum
                                      ? f(
                                          f({}, e.supdCarbp),
                                          {},
                                          {
                                            type: t.type,
                                            goodsId: t.e.g.id,
                                            groupId: t.e.g.groupId || "",
                                            material: t.e.g.material || [],
                                            attribute: t.e.g.attribute || "",
                                            num: t.e.g.ggnum,
                                          }
                                        )
                                      : f(
                                          f({}, e.supdCarbp),
                                          {},
                                          { type: t.type, goodsId: t.e.g.id }
                                        )
                                    : f(
                                        f({}, e.supdCarbp),
                                        {},
                                        {
                                          type: t.type,
                                          goodsId: t.e.g.goodsId,
                                          id: t.e.g.id,
                                        }
                                      )
                                )
                              );
                            case 3:
                              (o = n.sent),
                                o >= 0 && e.refreshList(),
                                (e.showjz = !1),
                                (n.next = 12);
                              break;
                            case 8:
                              (n.prev = 8),
                                (n.t0 = n["catch"](0)),
                                (e.showjz = !1),
                                console.log(n.t0);
                            case 12:
                            case "end":
                              return n.stop();
                          }
                        }
                      },
                      n,
                      null,
                      [[0, 8]]
                    );
                  })
                )();
              },
              dec: function dec(t) {
                var e = this;
                return (0, a.default)(
                  r.default.mark(function n() {
                    return r.default.wrap(function (n) {
                      while (1) {
                        switch ((n.prev = n.next)) {
                          case 0:
                            e.isClose &&
                              ((e.showjz = !0), e.updList({ type: 2, e: t }));
                          case 1:
                          case "end":
                            return n.stop();
                        }
                      }
                    }, n);
                  })
                )();
              },
              add: function add(t) {
                var e = this;
                return (0, a.default)(
                  r.default.mark(function n() {
                    return r.default.wrap(function (n) {
                      while (1) {
                        switch ((n.prev = n.next)) {
                          case 0:
                            if (!e.isClose) {
                              n.next = 7;
                              break;
                            }
                            if (!(t.g.SalesStock && t.g.SalesStock <= 0)) {
                              n.next = 3;
                              break;
                            }
                            return n.abrupt(
                              "return",
                              e.util.message("商品已售罄", 3)
                            );
                          case 3:
                            if (!(t.g.stock <= 0)) {
                              n.next = 5;
                              break;
                            }
                            return n.abrupt(
                              "return",
                              e.util.message("商品已售罄", 3)
                            );
                          case 5:
                            (e.showjz = !0),
                              (1 != t.g.isSpecs &&
                                1 != t.g.isMaterial &&
                                1 != t.g.isAttr) ||
                              t.g.hasOwnProperty("groupId")
                                ? e.updList({ type: 1, e: t })
                                : ((e.showGg = !0),
                                  (e.goodsInfo = t.g),
                                  (e.showjz = !1));
                          case 7:
                          case "end":
                            return n.stop();
                        }
                      }
                    }, n);
                  })
                )();
              },
              celarCar: function celarCar(t) {
                for (
                  var e = this.catrgoryList, n = 0, o = e.length;
                  n < o;
                  n++
                ) {
                  for (var r = 0, s = e[n].goods.length; r < s; r++) {
                    e[n].goods[r].num = 0;
                  }
                }
              },
              lfName: function lfName(t) {
                t.substr(0, 2), t.substr(2, 4);
                return t.substr(0, 2);
              },
              lsName: function lsName(t) {
                return t.substr(2, 5);
              },
              onmore: function onmore() {
                var t = this;
                return (0, a.default)(
                  r.default.mark(function e() {
                    var n;
                    return r.default.wrap(function (e) {
                      while (1) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = getApp().globalData.gdlocation),
                              (e.next = 3),
                              t.getSjxx({
                                storeId: t.storeId,
                                lat: n.latitude,
                                lng: n.longitude,
                              })
                            );
                          case 3:
                            t.go({
                              url: "/yb_wm/shop/search/out?page=inGoods&tableId=".concat(
                                t.tableId
                              ),
                            });
                          case 4:
                          case "end":
                            return e.stop();
                        }
                      }
                    }, e);
                  })
                )();
              },
              goodinfo: function goodinfo(t) {
                this.go({
                  t: 1,
                  url: "/yb_wm/shop/in/goods-dl?gid="
                    .concat(t, "&storeId=")
                    .concat(this.storeId, "&page=inGoods&tableId=")
                    .concat(this.tableId),
                });
              },
              goSelect: function goSelect() {
                2 == this.system.storeSet.storeModel &&
                  this.go({
                    url:
                      "/yb_wm/shop/select/index?page=goods&storeId=" +
                      this.storeId,
                  });
              },
              tzdd: function tzdd() {
                this.go({ t: 1, url: "/yb_wm/shop/in/indd" });
              },
            }
          ),
        };
        e.default = h;
      }).call(this, n("543d")["default"]);
    },
    "7bcc": function bcc(t, e, n) {
      "use strict";
      n.r(e);
      var o = n("cbfd"),
        r = n("90b2");
      for (var s in r) {
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(s);
      }
      n("c75e");
      var a = n("f0c5"),
        i = Object(a["a"])(
          r["default"],
          o["b"],
          o["c"],
          !1,
          null,
          "480b979a",
          null,
          !1,
          o["a"],
          void 0
        );
      e["default"] = i.exports;
    },
    "90b2": function b2(t, e, n) {
      "use strict";
      n.r(e);
      var o = n("0f41"),
        r = n.n(o);
      for (var s in o) {
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return o[t];
            });
          })(s);
      }
      e["default"] = r.a;
    },
    a50c: function a50c(t, e, n) {
      "use strict";
      (function (t, e) {
        var o = n("4ea4");
        n("f00a");
        o(n("66fd"));
        var r = o(n("7bcc"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = n), e(r.default);
      }).call(this, n("bc2e")["default"], n("543d")["createPage"]);
    },
    c75e: function c75e(t, e, n) {
      "use strict";
      var o = n("feaa"),
        r = n.n(o);
      r.a;
    },
    cbfd: function cbfd(t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return o;
      }),
        n.d(e, "c", function () {
          return r;
        }),
        n.d(e, "a", function () {});
      var o = function o() {
          var t = this,
            e = t.$createElement,
            n = (t._self._c, t.util.getSb()),
            o = t.util.getSb(),
            r =
              t.sjxx.moreSet && 2 == t.sjxx.moreSet.style
                ? t.__map(t.catrgoryList, function (e, n) {
                    var o = t.__get_orig(e),
                      r =
                        3 == t.sjxx.categorySet.display
                          ? t.lfName(e.name)
                          : null,
                      s =
                        3 == t.sjxx.categorySet.display
                          ? t.lsName(e.name)
                          : null,
                      a =
                        3 == t.sjxx.categorySet.display && s
                          ? t.lsName(e.name)
                          : null;
                    return { $orig: o, m0: r, m1: s, m2: a };
                  })
                : null,
            s =
              t.sjxx.moreSet && 2 != t.sjxx.moreSet.style
                ? t.__map(t.catrgoryList, function (e, n) {
                    var o = t.__get_orig(e),
                      r =
                        3 == t.sjxx.categorySet.display
                          ? t.lfName(e.name)
                          : null,
                      s =
                        3 == t.sjxx.categorySet.display
                          ? t.lsName(e.name)
                          : null,
                      a =
                        3 == t.sjxx.categorySet.display && s
                          ? t.lsName(e.name)
                          : null;
                    return { $orig: o, m3: r, m4: s, m5: a };
                  })
                : null,
            a =
              t.sjxx.moreSet && 1 == t.sjxx.moreSet.goodload
                ? t.__map(t.catrgoryList, function (e, n) {
                    var o = t.__get_orig(e),
                      r = t.__map(e.goods, function (e, n) {
                        var o = t.__get_orig(e),
                          r =
                            (e.labelName || e.activityGoodData.type > 3) &&
                            e.labelName
                              ? t.cTR(e.labelColor)
                              : null,
                          s =
                            (e.labelName || e.activityGoodData.type > 3) &&
                            e.activityGoodData.type > 3 &&
                            4 == e.activityGoodData.type
                              ? Number(e.activityGoodData.discount)
                              : null,
                          a = Number(e.vipPrice),
                          i = Number(e.activityGoodData.activityMoney),
                          c =
                            e.activityGoodData.type > 0 &&
                            e.activityGoodData.type < 4 &&
                            1 != e.activityGoodData.type &&
                            2 == e.activityGoodData.type
                              ? Number(e.activityGoodData.discount)
                              : null;
                        return { $orig: o, m6: r, m7: s, m8: a, m9: i, m10: c };
                      });
                    return { $orig: o, l2: r };
                  })
                : null,
            i =
              t.sjxx.moreSet && 1 != t.sjxx.moreSet.goodload
                ? t.catrgoryList.length
                : null,
            c =
              t.sjxx.moreSet && 1 != t.sjxx.moreSet.goodload && i
                ? t.catrgoryList[t.sIndex].goods.length
                : null,
            u =
              t.sjxx.moreSet && 1 != t.sjxx.moreSet.goodload && i && c
                ? t.__map(t.catrgoryList[t.sIndex].goods, function (e, n) {
                    var o = t.__get_orig(e),
                      r =
                        (e.labelName || e.activityGoodData.type > 3) &&
                        e.labelName
                          ? t.cTR(e.labelColor)
                          : null,
                      s =
                        (e.labelName || e.activityGoodData.type > 3) &&
                        e.activityGoodData.type > 3 &&
                        4 == e.activityGoodData.type
                          ? Number(e.activityGoodData.discount)
                          : null,
                      a = Number(e.vipPrice),
                      i = Number(e.activityGoodData.activityMoney),
                      c =
                        e.activityGoodData.type > 0 &&
                        e.activityGoodData.type < 4 &&
                        1 != e.activityGoodData.type &&
                        2 == e.activityGoodData.type
                          ? Number(e.activityGoodData.discount)
                          : null;
                    return { $orig: o, m11: r, m12: s, m13: a, m14: i, m15: c };
                  })
                : null;
          t._isMounted ||
            ((t.e0 = function (e) {
              t.showShopInfo = !t.showShopInfo;
            }),
            (t.e1 = function (e) {
              t.tcyhqshow = !1;
            }),
            (t.e2 = function (e) {
              t.showxzrs = !1;
            })),
            (t.$mp.data = Object.assign(
              {},
              {
                $root: {
                  g0: n,
                  g1: o,
                  l0: r,
                  l1: s,
                  l3: a,
                  g2: i,
                  g3: c,
                  l4: u,
                },
              }
            ));
        },
        r = [];
    },
    feaa: function feaa(t, e, n) {},
  },
  [["a50c", "common/runtime", "common/vendor"]],
]);
