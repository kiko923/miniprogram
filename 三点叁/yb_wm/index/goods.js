(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/index/goods"],
  {
    "451b": function b(t, e, o) {
      "use strict";
      o.r(e);
      var n = o("885a"),
        s = o.n(n);
      for (var r in n) {
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            o.d(e, t, function () {
              return n[t];
            });
          })(r);
      }
      e["default"] = s.a;
    },
    "493a": function a(t, e, o) {
      "use strict";
      o.r(e);
      var n = o("7c69"),
        s = o("451b");
      for (var r in s) {
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            o.d(e, t, function () {
              return s[t];
            });
          })(r);
      }
      o("cf8c");
      var i = o("f0c5"),
        a = Object(i["a"])(
          s["default"],
          n["b"],
          n["c"],
          !1,
          null,
          "66ac98d4",
          null,
          !1,
          n["a"],
          void 0
        );
      e["default"] = a.exports;
    },
    "7c69": function c69(t, e, o) {
      "use strict";
      o.d(e, "b", function () {
        return n;
      }),
        o.d(e, "c", function () {
          return s;
        }),
        o.d(e, "a", function () {});
      var n = function n() {
          var t = this,
            e = t.$createElement,
            o = (t._self._c, t.ModeArr.length),
            n = o ? t.ModeArr.length : null,
            s = t.goodsList.length,
            r =
              t.sjxx.moreSet && 2 == t.sjxx.moreSet.style
                ? t.__map(t.catrgoryList, function (e, o) {
                    var n = t.__get_orig(e),
                      s =
                        3 == t.sjxx.categorySet.display
                          ? t.lfName(e.name)
                          : null,
                      r =
                        3 == t.sjxx.categorySet.display
                          ? t.lsName(e.name)
                          : null,
                      i =
                        3 == t.sjxx.categorySet.display && r
                          ? t.lsName(e.name)
                          : null;
                    return { $orig: n, m0: s, m1: r, m2: i };
                  })
                : null,
            i =
              t.sjxx.moreSet && 2 != t.sjxx.moreSet.style
                ? t.__map(t.catrgoryList, function (e, o) {
                    var n = t.__get_orig(e),
                      s =
                        3 == t.sjxx.categorySet.display
                          ? t.lfName(e.name)
                          : null,
                      r =
                        3 == t.sjxx.categorySet.display
                          ? t.lsName(e.name)
                          : null,
                      i =
                        3 == t.sjxx.categorySet.display && r
                          ? t.lsName(e.name)
                          : null;
                    return { $orig: n, m3: s, m4: r, m5: i };
                  })
                : null,
            a =
              t.sjxx.moreSet && 1 == t.sjxx.moreSet.goodload
                ? t.__map(t.catrgoryList, function (e, o) {
                    var n = t.__get_orig(e),
                      s =
                        1 == t.sjxx.moreSet.show_classification
                          ? e.children && e.children.length > 1
                          : null,
                      r = t.__map(e.goods, function (e, o) {
                        var n = t.__get_orig(e),
                          s = e.labelName ? t.cTR(e.labelColor) : null,
                          r =
                            e.activityGoodData.type > 3 &&
                            4 == e.activityGoodData.type
                              ? Number(e.activityGoodData.discount)
                              : null,
                          i = Number(e.vipPrice),
                          a = Number(e.activityGoodData.activityMoney),
                          c =
                            e.activityGoodData.type > 0 &&
                            e.activityGoodData.type < 4 &&
                            1 != e.activityGoodData.type &&
                            2 == e.activityGoodData.type
                              ? Number(e.activityGoodData.discount)
                              : null;
                        return { $orig: n, m6: s, m7: r, m8: i, m9: a, m10: c };
                      });
                    return { $orig: n, g3: s, l2: r };
                  })
                : null,
            c =
              t.sjxx.moreSet && 1 != t.sjxx.moreSet.goodload
                ? t.catrgoryList.length
                : null,
            u =
              t.sjxx.moreSet && 1 != t.sjxx.moreSet.goodload && c
                ? t.catrgoryList[t.sIndex].goods.length
                : null,
            d =
              t.sjxx.moreSet && 1 != t.sjxx.moreSet.goodload && c && u
                ? t.__map(t.catrgoryList[t.sIndex].goods, function (e, o) {
                    var n = t.__get_orig(e),
                      s = e.labelName ? t.cTR(e.labelColor) : null,
                      r =
                        e.activityGoodData.type > 3 &&
                        4 == e.activityGoodData.type
                          ? Number(e.activityGoodData.discount)
                          : null,
                      i = Number(e.vipPrice),
                      a = Number(e.activityGoodData.activityMoney),
                      c =
                        e.activityGoodData.type > 0 &&
                        e.activityGoodData.type < 4 &&
                        1 != e.activityGoodData.type &&
                        2 == e.activityGoodData.type
                          ? Number(e.activityGoodData.discount)
                          : null;
                    return { $orig: n, m11: s, m12: r, m13: i, m14: a, m15: c };
                  })
                : null;
          t._isMounted ||
            ((t.e0 = function (e) {
              t.showShopInfo = !t.showShopInfo;
            }),
            (t.e1 = function (e) {
              t.tcyhqshow = !1;
            })),
            (t.$mp.data = Object.assign(
              {},
              {
                $root: {
                  g0: o,
                  g1: n,
                  g2: s,
                  l0: r,
                  l1: i,
                  l3: a,
                  g4: c,
                  g5: u,
                  l4: d,
                },
              }
            ));
        },
        s = [];
    },
    "885a": function a(t, e, o) {
      "use strict";
      (function (t) {
        var n = o("4ea4");
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var s = n(o("2eee")),
          r = n(o("9523")),
          i = n(o("c973")),
          a = o("26cb"),
          c = n(o("8bb1")),
          u = o("4789"),
          d = o("6326");
        function l(t, e) {
          var o = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              o.push.apply(o, n);
          }
          return o;
        }
        function h(t) {
          for (var e = 1; e < arguments.length; e++) {
            var o = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? l(Object(o), !0).forEach(function (e) {
                  (0, r.default)(t, e, o[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
              : l(Object(o)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(o, e)
                  );
                });
          }
          return t;
        }
        var f = getApp().globalData,
          g = {
            components: {
              uniNavBar: function uniNavBar() {
                o.e("components/third/uni-nav-bar")
                  .then(
                    function () {
                      return resolve(o("d2b9"));
                    }.bind(null, o)
                  )
                  .catch(o.oe);
              },
              goods: function goods() {
                o.e("components/goods/index")
                  .then(
                    function () {
                      return resolve(o("0205"));
                    }.bind(null, o)
                  )
                  .catch(o.oe);
              },
              goodsCar: function goodsCar() {
                o.e("components/goods/goods-car")
                  .then(
                    function () {
                      return resolve(o("1b0e"));
                    }.bind(null, o)
                  )
                  .catch(o.oe);
              },
              spec: function spec() {
                o.e("components/goods/spec")
                  .then(
                    function () {
                      return resolve(o("b20c"));
                    }.bind(null, o)
                  )
                  .catch(o.oe);
              },
              load: function load() {
                o.e("components/common/load")
                  .then(
                    function () {
                      return resolve(o("2d33"));
                    }.bind(null, o)
                  )
                  .catch(o.oe);
              },
              mgPopup: function mgPopup() {
                o.e("components/common/popup")
                  .then(
                    function () {
                      return resolve(o("6b80"));
                    }.bind(null, o)
                  )
                  .catch(o.oe);
              },
              mgModal: function mgModal() {
                o.e("components/common/modal")
                  .then(
                    function () {
                      return resolve(o("ddfd"));
                    }.bind(null, o)
                  )
                  .catch(o.oe);
              },
              jzz: function jzz() {
                o.e("components/common/jzz")
                  .then(
                    function () {
                      return resolve(o("3db1"));
                    }.bind(null, o)
                  )
                  .catch(o.oe);
              },
              tips: function tips() {
                o.e("components/common/tips")
                  .then(
                    function () {
                      return resolve(o("4951"));
                    }.bind(null, o)
                  )
                  .catch(o.oe);
              },
              MgSwiper: function MgSwiper() {
                o.e("components/common/functionCmp/swiper")
                  .then(
                    function () {
                      return resolve(o("3415"));
                    }.bind(null, o)
                  )
                  .catch(o.oe);
              },
              tcyhq: function tcyhq() {
                o.e("components/template/tcyhq")
                  .then(
                    function () {
                      return resolve(o("90f7"));
                    }.bind(null, o)
                  )
                  .catch(o.oe);
              },
              tcgg: function tcgg() {
                o.e("components/template/tcgg")
                  .then(
                    function () {
                      return resolve(o("fa4a"));
                    }.bind(null, o)
                  )
                  .catch(o.oe);
              },
              storeInfo: function storeInfo() {
                o.e("components/goods/store/store-info")
                  .then(
                    function () {
                      return resolve(o("4ea6"));
                    }.bind(null, o)
                  )
                  .catch(o.oe);
              },
              storeShop: function storeShop() {
                o.e("components/goods/store/store-shop")
                  .then(
                    function () {
                      return resolve(o("dd31"));
                    }.bind(null, o)
                  )
                  .catch(o.oe);
              },
            },
            data: function data() {
              return {
                showloading: !0,
                catrgoryList: [],
                goodsList: [],
                sIndex: 0,
                rsiv: "",
                rsiv2: "",
                lsiv: "",
                showGg: !1,
                buyType: 2,
                showShopInfo: !1,
                showShopSelect: !1,
                outin: "1",
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
                showhdp: 0,
                cIndex: 0,
              };
            },
            mixins: [u.utilMixins],
            onLoad: function onLoad(e) {
              var o = this;
              return (0, i.default)(
                s.default.mark(function n() {
                  return s.default.wrap(function (n) {
                    while (1) {
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            t.$on("qjjtsj", function (t) {
                              t.showgwc
                                ? (o.showCar = !0)
                                : t.hasOwnProperty("flid")
                                ? ((o.flid = ""),
                                  setTimeout(function () {
                                    o.flid = t.flid;
                                  }))
                                : t.wmtz
                                ? o.$refs.goodscar.goPay(2)
                                : ((o.xdtype = ""), (o.xdtype = t));
                            }),
                            (o.storeId =
                              c.default.getOptions(e, {
                                key: "storeId",
                                q1: o.storeInfo.id,
                              }) || ""),
                            console.log(o.storeId),
                            (o.query = e),
                            (n.next = 6),
                            o.getLoginInfo({ inviteId: e.userId })
                          );
                        case 6:
                          o.getDw(),
                            o.getSystem(),
                            o.getLayout(),
                            o
                              .getConfig({ key: "orderset", api: "ddsz" })
                              .then(function () {
                                "1" == o.orderset.orderStore &&
                                  (o.showShopSelect = !0);
                              });
                        case 10:
                        case "end":
                          return n.stop();
                      }
                    }
                  }, n);
                })
              )();
            },
            onHide: function onHide() {
              this.startMoney = "";
            },
            computed: h(
              h(
                h({}, (0, a.mapState)(["sjxx"])),
                (0, a.mapState)({
                  scarList: function scarList(t) {
                    return t.scarList.out.data || [];
                  },
                  storeInfo: function storeInfo(t) {
                    return t.config.storeInfo;
                  },
                  orderset: function orderset(t) {
                    return t.config.orderset;
                  },
                })
              ),
              {},
              {
                pageHeight: function pageHeight() {
                  if (!getApp().sgheight) {
                    var e = t.getSystemInfoSync(),
                      o = +(e.statusBarHeight + 44 + t.upx2px(228)).toFixed(2);
                    getApp().sgheight = { topH: o, topH2: 224 };
                  }
                  return getApp().sgheight;
                },
                lbswiper: function lbswiper() {
                  return {
                    class: "mt10 mb20",
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
                ModeArr: function ModeArr() {
                  var t = [];
                  return (
                    this.sjxx.moreSet &&
                      (2 == this.sjxx.moreSet.distributionSupport.length
                        ? ((t = [
                            { name: this.sjxx.moreSet.selfName, value: "2" },
                            { name: this.sjxx.moreSet.outName, value: "1" },
                          ]),
                          2 == this.sjxx.moreSet.auto && t.reverse(),
                          (this.buyType = +t[0].value),
                          this.xdtype && (this.buyType = this.xdtype))
                        : this.sjxx.moreSet.distributionSupport.find(function (
                            t
                          ) {
                            return 1 == t;
                          })
                        ? (this.buyType = 1)
                        : this.sjxx.moreSet.distributionSupport.find(function (
                            t
                          ) {
                            return 2 == t;
                          }) && (this.buyType = 2)),
                    t
                  );
                },
                isClose: function isClose() {
                  return (
                    this.sjxx.shopData &&
                    (1 == this.sjxx.shopData.storeOpen ||
                      (2 == this.sjxx.shopData.storeOpen &&
                        1 == this.sjxx.moreSet.status))
                  );
                },
                cshow: function cshow() {
                  return this.scarList.length > 0;
                },
                leftpb: function leftpb() {
                  return 1 == this.system.outTabbar
                    ? this.cshow
                      ? "305rpx"
                      : "115rpx"
                    : this.cshow
                    ? "260rpx"
                    : "115rpx";
                },
                rightpb: function rightpb() {
                  return (
                    this.system.outTabbar, this.cshow ? "230rpx" : "115rpx"
                  );
                },
                qhfl: function qhfl() {
                  return { jsgdwb: this.jsgdwb, flid: this.flid };
                },
                ztqs: function ztqs() {
                  return "rgba(".concat(this.cTR(this.tColor), ",0.1)");
                },
                mjtxt: function mjtxt() {
                  return this.sjxx.discount &&
                    1 == this.sjxx.discount.reduce.type
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
            watch: {
              qhfl: {
                handler: function handler(t) {
                  var e = this;
                  if (
                    t.jsgdwb &&
                    t.flid &&
                    this.sjxx.data.find(function (e) {
                      return e.id == t.flid;
                    })
                  ) {
                    var o = this.sjxx.data.findIndex(function (e) {
                      return e.id == t.flid;
                    });
                    (this.sIndex = o),
                      (this.noscroll = !0),
                      (this.lsiv = "l".concat(o - 3)),
                      (this.rsiv = "r".concat(o)),
                      setTimeout(function () {
                        e.noscroll = !1;
                      }, 500);
                  }
                },
                immediate: !0,
              },
            },
            methods: h(
              h(
                h(
                  {},
                  (0, a.mapActions)([
                    "getSjxx",
                    "getConfig",
                    "supdCar",
                    "getMycar",
                  ])
                ),
                (0, a.mapMutations)(["setScarList"])
              ),
              {},
              {
                getDw: function getDw() {
                  var t = this;
                  return (0, i.default)(
                    s.default.mark(function e() {
                      return s.default.wrap(function (e) {
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
                  return (0, i.default)(
                    s.default.mark(function e() {
                      return s.default.wrap(function (e) {
                        while (1) {
                          switch ((e.prev = e.next)) {
                            case 0:
                              (t.sIndex = 0),
                                (t.rsiv = "r0"),
                                (f.xzdzInfo = null),
                                t.setScarList({ data: {} }),
                                t.init();
                            case 5:
                            case "end":
                              return e.stop();
                          }
                        }
                      }, e);
                    })
                  )();
                },
                init: function init() {
                  var t = arguments,
                    e = this;
                  return (0, i.default)(
                    s.default.mark(function o() {
                      var n, r, a, u, d;
                      return s.default.wrap(function (o) {
                        while (1) {
                          switch ((o.prev = o.next)) {
                            case 0:
                              return (
                                t.length > 0 && void 0 !== t[0] ? t[0] : 1,
                                (n = getApp().globalData.gdlocation),
                                (o.next = 4),
                                e.getSjxx({
                                  storeId: e.storeId,
                                  lat: n.latitude,
                                  lng: n.longitude,
                                })
                              );
                            case 4:
                              return (
                                (o.next = 6),
                                e.getMycar({ storeId: e.sjxx.shopData.id })
                              );
                            case 6:
                              for (
                                e.storeId = e.sjxx.shopData.id,
                                  e.goodsList = c.default.deepCopy(
                                    e.sjxx.recommendData
                                  ),
                                  e.catrgoryList = c.default.deepCopy(
                                    e.sjxx.data
                                  ),
                                  e.showloading = !1,
                                  r = 0;
                                r < e.scarList.length;
                                r++
                              ) {
                                for (a = 0; a < e.catrgoryList.length; a++) {
                                  for (
                                    u = 0;
                                    u < e.catrgoryList[a].goods.length;
                                    u++
                                  ) {
                                    e.catrgoryList[a].goods[u].id ==
                                      e.scarList[r].goodsId &&
                                      (e.catrgoryList[a].goods[u].num =
                                        +e.catrgoryList[a].goods[u].num +
                                        +e.scarList[r].num);
                                  }
                                }
                                for (d = 0; d < e.goodsList.length; d++) {
                                  e.goodsList[d].id == e.scarList[r].goodsId &&
                                    (e.goodsList[d].num =
                                      +e.goodsList[d].num + +e.scarList[r].num);
                                }
                              }
                              e.$nextTick(function () {
                                setTimeout(function () {
                                  e.getHeightList();
                                }, 100);
                              }),
                                e.getConfig({
                                  key: "storeInfo",
                                  data: {
                                    id: e.sjxx.shopData.id,
                                    name: e.sjxx.shopData.name,
                                    distance: e.sjxx.shopData.distance,
                                  },
                                }),
                                setTimeout(
                                  (0, i.default)(
                                    s.default.mark(function t() {
                                      return s.default.wrap(function (t) {
                                        while (1) {
                                          switch ((t.prev = t.next)) {
                                            case 0:
                                              return (
                                                (t.next = 2), e.getOtherData()
                                              );
                                            case 2:
                                              e.addFwjl({
                                                storeId: e.storeId,
                                                origin: "2",
                                              });
                                            case 3:
                                            case "end":
                                              return t.stop();
                                          }
                                        }
                                      }, t);
                                    })
                                  ),
                                  1e3
                                );
                            case 14:
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
                  return (0, i.default)(
                    s.default.mark(function e() {
                      var o, n;
                      return s.default.wrap(function (e) {
                        while (1) {
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t.issc = 1 == t.sjxx.shopData.isCollection),
                                (e.next = 3),
                                t.util.request({
                                  url: t.api.qtsjjh,
                                  data: { location: 1, storeId: t.storeId },
                                })
                              );
                            case 3:
                              (o = e.sent),
                                (n = o.data),
                                n.windowCoupon.hasOwnProperty("name") &&
                                  ((t.tcCoupon = n.windowCoupon),
                                  (t.tcyhqshow = !0)),
                                (t.sjyhq = n.storeCoupon),
                                (t.sjqb = n.rollBag);
                            case 8:
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
                    o = t.createSelectorQuery();
                  o.selectAll(".c-item")
                    .boundingClientRect(function (t) {
                      var o = [],
                        n = 0;
                      t.forEach(function (t) {
                        (n += t.height), o.push(n);
                      }),
                        (e.right_height = o),
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
                    for (var o = 0; o < this.right_height.length; o++) {
                      if (e < this.right_height[0])
                        (this.sIndex = 0), (this.lsiv = "l0");
                      else if (
                        e >= this.right_height[o - 1] &&
                        e < this.right_height[o]
                      ) {
                        (this.sIndex = o),
                          (this.lsiv = "l".concat(o - 3)),
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
                  var o = this;
                  return (0, i.default)(
                    s.default.mark(function n() {
                      return s.default.wrap(function (n) {
                        while (1) {
                          switch ((n.prev = n.next)) {
                            case 0:
                              (o.rsiv2 = ""),
                                setTimeout(function () {
                                  o.rsiv2 = "r0";
                                }, 50),
                                (o.lsiv = "l".concat(e - 3)),
                                0 == o.catrgoryList[e].goods.length &&
                                  (o.util.showLoading(),
                                  o.$nextTick(function () {
                                    t.hideLoading();
                                  }));
                            case 4:
                            case "end":
                              return n.stop();
                          }
                        }
                      }, n);
                    })
                  )();
                },
                refreshList: function refreshList() {
                  for (
                    var t = this.scarList,
                      e = this.catrgoryList,
                      o = 0,
                      n = e.length;
                    o < n;
                    o++
                  ) {
                    for (var s = 0, r = e[o].goods.length; s < r; s++) {
                      e[o].goods[s].num = 0;
                      for (var i = 0; i < t.length; i++) {
                        e[o].goods[s].id == t[i].goodsId &&
                          (e[o].goods[s].num += +t[i].num);
                      }
                    }
                  }
                  for (
                    var a = this.goodsList, c = 0, u = a.length;
                    c < u;
                    c++
                  ) {
                    a[c].num = 0;
                    for (var d = 0; d < t.length; d++) {
                      a[c].id == t[d].goodsId && (a[c].num += +t[d].num);
                    }
                  }
                },
                updList: function updList(t) {
                  var e = this;
                  return (0, i.default)(
                    s.default.mark(function o() {
                      var n, r, i, a, c, u, d, l, h;
                      return s.default.wrap(
                        function (o) {
                          while (1) {
                            switch ((o.prev = o.next)) {
                              case 0:
                                return (
                                  (o.prev = 0),
                                  (o.next = 3),
                                  e.supdCar(
                                    "1" == t.e.addwz
                                      ? t.e.g.ggnum
                                        ? {
                                            storeId: e.storeId,
                                            type: t.type,
                                            goodsId: t.e.g.id,
                                            groupId: t.e.g.groupId || "",
                                            material: t.e.g.material || [],
                                            attribute: t.e.g.attribute || "",
                                            num: t.e.g.ggnum,
                                          }
                                        : {
                                            storeId: e.storeId,
                                            type: t.type,
                                            goodsId: t.e.g.id,
                                          }
                                      : {
                                          storeId: e.storeId,
                                          type: t.type,
                                          goodsId: t.e.g.goodsId,
                                          id: t.e.g.id,
                                        }
                                  )
                                );
                              case 3:
                                if (((n = o.sent), n >= 0)) {
                                  for (
                                    r = e.catrgoryList, i = 0, a = r.length;
                                    i < a;
                                    i++
                                  ) {
                                    for (
                                      c = 0, u = r[i].goods.length;
                                      c < u;
                                      c++
                                    ) {
                                      (("1" == t.e.addwz &&
                                        r[i].goods[c].id == t.e.g.id) ||
                                        ("2" == t.e.addwz &&
                                          r[i].goods[c].id == t.e.g.goodsId)) &&
                                        (r[i].goods[c].num = n);
                                    }
                                  }
                                  for (
                                    d = e.goodsList, l = 0, h = d.length;
                                    l < h;
                                    l++
                                  ) {
                                    (("1" == t.e.addwz &&
                                      d[l].id == t.e.g.id) ||
                                      ("2" == t.e.addwz &&
                                        d[l].id == t.e.g.goodsId)) &&
                                      (d[l].num = n);
                                  }
                                }
                                (e.showjz = !1), (o.next = 12);
                                break;
                              case 8:
                                (o.prev = 8),
                                  (o.t0 = o["catch"](0)),
                                  (e.showjz = !1),
                                  console.log(o.t0);
                              case 12:
                              case "end":
                                return o.stop();
                            }
                          }
                        },
                        o,
                        null,
                        [[0, 8]]
                      );
                    })
                  )();
                },
                dec: function dec(t) {
                  var e = this;
                  return (0, i.default)(
                    s.default.mark(function o() {
                      return s.default.wrap(function (o) {
                        while (1) {
                          switch ((o.prev = o.next)) {
                            case 0:
                              e.isClose &&
                                ((e.showjz = !0), e.updList({ type: 2, e: t }));
                            case 1:
                            case "end":
                              return o.stop();
                          }
                        }
                      }, o);
                    })
                  )();
                },
                add: function add(t) {
                  var e = this;
                  return (0, i.default)(
                    s.default.mark(function o() {
                      return s.default.wrap(function (o) {
                        while (1) {
                          switch ((o.prev = o.next)) {
                            case 0:
                              if (!e.isClose) {
                                o.next = 7;
                                break;
                              }
                              if (!(t.g.SalesStock && t.g.SalesStock <= 0)) {
                                o.next = 3;
                                break;
                              }
                              return o.abrupt(
                                "return",
                                e.util.message("商品已售罄", 3)
                              );
                            case 3:
                              if (!(t.g.stock <= 0)) {
                                o.next = 5;
                                break;
                              }
                              return o.abrupt(
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
                              return o.stop();
                          }
                        }
                      }, o);
                    })
                  )();
                },
                celarCar: function celarCar(t) {
                  for (
                    var e = this.catrgoryList, o = 0, n = e.length;
                    o < n;
                    o++
                  ) {
                    for (var s = 0, r = e[o].goods.length; s < r; s++) {
                      e[o].goods[s].num = 0;
                    }
                  }
                  for (
                    var i = this.goodsList, a = 0, c = i.length;
                    a < c;
                    a++
                  ) {
                    i[a].num = 0;
                  }
                },
                changeBuyType: function changeBuyType(t) {
                  if (t.value != this.buyType) {
                    if (1 == t.value && 2 == this.ModeArr[0].value)
                      return (
                        console.log("用户想切换外卖"),
                        (f.xzdzInfo = null),
                        void this.go({
                          t: 1,
                          url: "/yb_wm/my/address/index?from=2&storeId=".concat(
                            this.storeId
                          ),
                        })
                      );
                    2 == t.value && (f.xzdzInfo = null),
                      (this.buyType = 1 == this.buyType ? 2 : 1);
                  }
                },
                trigger: function trigger(t) {
                  this.go({ t: t.index > 1 ? 1 : 2, url: t.item.url }),
                    console.log(t);
                },
                lfName: function lfName(t) {
                  t.substr(0, 2), t.substr(2, 4);
                  return t.substr(0, 2);
                },
                lsName: function lsName(t) {
                  return t.substr(2, 5);
                },
                onmore: function onmore() {
                  this.go({ url: "/yb_wm/shop/search/out?page=shopGoods" });
                },
                goodinfo: function goodinfo(t) {
                  this.go({
                    t: 1,
                    url: "/yb_wm/shop/out/goods-dl?gid="
                      .concat(t, "&storeId=")
                      .concat(this.storeId, "&page=shopGoods&buyType=")
                      .concat(this.buyType),
                  });
                },
                changeCatrgory: function changeCatrgory(t, e, o) {
                  var n = this;
                  return (0, i.default)(
                    s.default.mark(function r() {
                      var i, a;
                      return s.default.wrap(function (s) {
                        while (1) {
                          switch ((s.prev = s.next)) {
                            case 0:
                              if (n.cIndex !== e) {
                                s.next = 2;
                                break;
                              }
                              return s.abrupt("return");
                            case 2:
                              return (
                                (n.cIndex = e),
                                (s.next = 5),
                                n.util.request({
                                  url: n.api.ejfl,
                                  data: {
                                    storeId: n.storeId,
                                    categoryId: t.id ? t.id : t.pid,
                                  },
                                })
                              );
                            case 5:
                              (i = s.sent),
                                (a = i.data),
                                (n.catrgoryList[o].goods =
                                  c.default.deepCopy(a));
                            case 8:
                            case "end":
                              return s.stop();
                          }
                        }
                      }, r);
                    })
                  )();
                },
                goSelect: function goSelect() {
                  2 == this.system.storeSet.storeModel &&
                    this.go({
                      url:
                        "/yb_wm/shop/select/index?page=goods&storeId=" +
                        this.storeId,
                    });
                },
                scdp: c.default.throttle(
                  (function () {
                    var t = (0, i.default)(
                      s.default.mark(function t(e) {
                        var o;
                        return s.default.wrap(
                          function (t) {
                            while (1) {
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (t.next = 2),
                                    this.util.request({
                                      url: this.api.scjk,
                                      method: "POST",
                                      data: {
                                        collectionId: this.storeId,
                                        type: 1,
                                      },
                                    })
                                  );
                                case 2:
                                  (o = t.sent),
                                    o &&
                                      ((this.issc = !this.issc),
                                      this.util.message(
                                        (this.issc ? "" : "取消") + "收藏成功",
                                        3
                                      ));
                                case 4:
                                case "end":
                                  return t.stop();
                              }
                            }
                          },
                          t,
                          this
                        );
                      })
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                  1e3
                ),
              }
            ),
            onShow: function onShow() {
              this.sjxx.moreSet &&
                (this.storeId != this.storeInfo.id
                  ? this.changeStore(this.storeInfo)
                  : (this.ModeArr.length &&
                      2 == this.ModeArr[0].value &&
                      (1 != this.buyType && f.xzdzInfo
                        ? ((this.buyType = 1), console.log("选择了地址"))
                        : 1 != this.buyType ||
                          f.xzdzInfo ||
                          (this.buyType = 2)),
                    this.refreshList()),
                this.$refs.goodscar.closeCar());
            },
            onShareAppMessage: function onShareAppMessage() {
              var t = "yb_cy/shop/goods?storeId="
                .concat(this.storeId, "&userId=")
                .concat(this.uId);
              return this.util.mpShare({ t: this.sjxx.storeInfo.name, p: t });
            },
          };
        e.default = g;
      }).call(this, o("543d")["default"]);
    },
    a0bb: function a0bb(t, e, o) {},
    ab88: function ab88(t, e, o) {
      "use strict";
      (function (t, e) {
        var n = o("4ea4");
        o("f00a");
        n(o("66fd"));
        var s = n(o("493a"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = o), e(s.default);
      }).call(this, o("bc2e")["default"], o("543d")["createPage"]);
    },
    cf8c: function cf8c(t, e, o) {
      "use strict";
      var n = o("a0bb"),
        s = o.n(n);
      s.a;
    },
  },
  [["ab88", "common/runtime", "common/vendor"]],
]);
