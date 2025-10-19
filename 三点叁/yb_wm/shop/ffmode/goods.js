(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/shop/ffmode/goods"],
  {
    "14e8": function e8(t, e, o) {
      "use strict";
      o.r(e);
      var n = o("6c9e"),
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
    "6c9e": function c9e(t, e, o) {
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
                outin: "3",
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
                hasTabbar: !1,
                sjxx: {},
                showhdp: 0,
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
                                : ((o.xdtype = ""), (o.xdtype = t));
                            }),
                            (o.storeId =
                              c.default.getOptions(e, {
                                key: "storeId",
                                q1: o.storeInfo.id,
                              }) || ""),
                            (o.query = e),
                            (n.next = 5),
                            o.getLoginInfo({ inviteId: e.userId })
                          );
                        case 5:
                          o.getDw(), o.getSystem();
                        case 7:
                        case "end":
                          return n.stop();
                      }
                    }
                  }, n);
                })
              )();
            },
            computed: h(
              h(
                {},
                (0, a.mapState)({
                  scarList: function scarList(t) {
                    return t.scarList.fast.data || [];
                  },
                  storeInfo: function storeInfo(t) {
                    return t.config.storeInfo;
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
                  return this.system.outTabbar, "0";
                },
                rightpb: function rightpb() {
                  return this.system.outTabbar, "0";
                },
                getreet: function getreet() {
                  return this.isIpx && !this.hasTabbar
                    ? "40"
                    : !this.isIpx && this.hasTabbar
                    ? "115"
                    : this.isIpx && this.hasTabbar
                    ? "155"
                    : "0";
                },
                getreet2: function getreet2() {
                  return this.isIpx && !this.hasTabbar
                    ? "132"
                    : !this.isIpx && this.hasTabbar
                    ? "225"
                    : this.isIpx && this.hasTabbar
                    ? "265"
                    : "110";
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
            watch: {},
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
                tbrh: function tbrh(t) {
                  this.hasTabbar = !0;
                },
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
                                t.setScarList({ key: "fast", data: {} }),
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
                    o = this;
                  return (0, i.default)(
                    s.default.mark(function n() {
                      var r, a, u, d;
                      return s.default.wrap(function (n) {
                        while (1) {
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (
                                e.length > 0 && void 0 !== e[0] ? e[0] : 1,
                                (r = getApp().globalData.gdlocation),
                                (n.next = 4),
                                o.getSjxx2({
                                  storeId: o.storeId,
                                  goodsType: 2,
                                  isKc: 1,
                                  lat: r.latitude,
                                  lng: r.longitude,
                                })
                              );
                            case 4:
                              return (
                                (n.next = 6),
                                o.getMycar({
                                  storeId: o.sjxx.shopData.id,
                                  item: o.outin,
                                  key: "fast",
                                })
                              );
                            case 6:
                              for (
                                o.storeId = o.sjxx.shopData.id,
                                  o.catrgoryList = c.default.deepCopy(
                                    o.sjxx.data
                                  ),
                                  o.sjxx.data.length ||
                                    t.showModal({
                                      title: "提示",
                                      content: "暂无商品",
                                      confirmText: "返回主页",
                                      cancelText: "我知道了",
                                      success: function success(t) {
                                        t.confirm &&
                                          o.go({
                                            t: 6,
                                            url: "/yb_wm/index/index",
                                          });
                                      },
                                    }),
                                  o.showloading = !1,
                                  a = 0;
                                a < o.scarList.length;
                                a++
                              ) {
                                for (u = 0; u < o.catrgoryList.length; u++) {
                                  for (
                                    d = 0;
                                    d < o.catrgoryList[u].goods.length;
                                    d++
                                  ) {
                                    o.catrgoryList[u].goods[d].id ==
                                      o.scarList[a].goodsId &&
                                      (o.catrgoryList[u].goods[d].num =
                                        +o.catrgoryList[u].goods[d].num +
                                        +o.scarList[a].num);
                                  }
                                }
                              }
                              o.$nextTick(function () {
                                setTimeout(function () {
                                  o.getHeightList();
                                }, 100);
                              }),
                                o.getConfig({
                                  key: "storeInfo",
                                  data: {
                                    id: o.sjxx.shopData.id,
                                    name: o.sjxx.shopData.name,
                                    distance: o.sjxx.shopData.distance,
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
                                                (t.next = 2), o.getOtherData()
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
                            case 14:
                            case "end":
                              return n.stop();
                          }
                        }
                      }, n);
                    })
                  )();
                },
                getSjxx2: function getSjxx2(e) {
                  var o = this;
                  return (0, i.default)(
                    s.default.mark(function n() {
                      var r, i;
                      return s.default.wrap(function (n) {
                        while (1) {
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (
                                (n.next = 2),
                                o.util.request({
                                  url: o.api.shopGoodsInfo,
                                  data: e,
                                })
                              );
                            case 2:
                              (r = n.sent),
                                (i = r.data),
                                (i.discount.newReduction =
                                  i.discount.give.id =
                                  i.discount.grantCoupon.name =
                                    null),
                                (o.sjxx = i),
                                o.util.setNT(i.shopData.name),
                                i.shopData &&
                                  i.shopData.tiktokCode &&
                                  t.setClipboardData({
                                    data: i.shopData.tiktokCode,
                                    success: function success() {
                                      t.hideToast(),
                                        console.log(i.shopData.tiktokCode);
                                    },
                                  });
                            case 8:
                            case "end":
                              return n.stop();
                          }
                        }
                      }, n);
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
                                  data: { location: 3, storeId: t.storeId },
                                })
                              );
                            case 3:
                              (o = e.sent),
                                (n = o.data),
                                n.windowCoupon.hasOwnProperty("name") &&
                                  ((t.tcCoupon = n.windowCoupon),
                                  (t.tcyhqshow = !0)),
                                (t.sjyhq = n.storeCoupon);
                            case 7:
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
                myscroll2: function myscroll2(t) {
                  if (!this.noscroll) {
                    var e = t.detail.scrollTop;
                    this.showhdp = e > 10 ? 1 : 0;
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
                },
                updList: function updList(t) {
                  var e = this;
                  return (0, i.default)(
                    s.default.mark(function o() {
                      var n, r, i, a, c, u;
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
                                            item: e.outin,
                                            key: "fast",
                                          }
                                        : {
                                            storeId: e.storeId,
                                            type: t.type,
                                            goodsId: t.e.g.id,
                                            item: e.outin,
                                            key: "fast",
                                          }
                                      : {
                                          storeId: e.storeId,
                                          type: t.type,
                                          goodsId: t.e.g.goodsId,
                                          id: t.e.g.id,
                                          item: e.outin,
                                          key: "fast",
                                        }
                                  )
                                );
                              case 3:
                                if (((n = o.sent), n >= 0))
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
                  return (0, i.default)(
                    s.default.mark(function e() {
                      var o;
                      return s.default.wrap(function (e) {
                        while (1) {
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (o = getApp().globalData.gdlocation),
                                (e.next = 3),
                                t.getSjxx({
                                  storeId: t.storeId,
                                  lat: o.latitude,
                                  lng: o.longitude,
                                })
                              );
                            case 3:
                              t.go({
                                url: "/yb_wm/shop/search/out?page=fastGoods",
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
                      .concat(this.storeId, "&page=fastGoods"),
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
                tzdd: function tzdd() {
                  (f.ddquery = { nt: 1, t: 4 }),
                    this.go({ t: 6, url: "/yb_wm/index/order-index" });
                },
              }
            ),
            onShow: function onShow() {},
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
    "85f5": function f5(t, e, o) {
      "use strict";
      o.r(e);
      var n = o("f889"),
        s = o("14e8");
      for (var r in s) {
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            o.d(e, t, function () {
              return s[t];
            });
          })(r);
      }
      o("b73a");
      var i = o("f0c5"),
        a = Object(i["a"])(
          s["default"],
          n["b"],
          n["c"],
          !1,
          null,
          "06795104",
          null,
          !1,
          n["a"],
          void 0
        );
      e["default"] = a.exports;
    },
    b73a: function b73a(t, e, o) {
      "use strict";
      var n = o("ff18"),
        s = o.n(n);
      s.a;
    },
    c834: function c834(t, e, o) {
      "use strict";
      (function (t, e) {
        var n = o("4ea4");
        o("f00a");
        n(o("66fd"));
        var s = n(o("85f5"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = o), e(s.default);
      }).call(this, o("bc2e")["default"], o("543d")["createPage"]);
    },
    f889: function f889(t, e, o) {
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
            o =
              (t._self._c,
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
                : null),
            n =
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
            s =
              t.sjxx.moreSet && 1 == t.sjxx.moreSet.goodload
                ? t.__map(t.catrgoryList, function (e, o) {
                    var n = t.__get_orig(e),
                      s = t.__map(e.goods, function (e, o) {
                        var n = t.__get_orig(e),
                          s =
                            (e.labelName || e.activityGoodData.type > 3) &&
                            e.labelName
                              ? t.cTR(e.labelColor)
                              : null,
                          r =
                            (e.labelName || e.activityGoodData.type > 3) &&
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
                    return { $orig: n, l2: s };
                  })
                : null,
            r =
              t.sjxx.moreSet && 1 != t.sjxx.moreSet.goodload
                ? t.catrgoryList.length
                : null,
            i =
              t.sjxx.moreSet && 1 != t.sjxx.moreSet.goodload && r
                ? t.catrgoryList[t.sIndex].goods.length
                : null,
            a =
              t.sjxx.moreSet && 1 != t.sjxx.moreSet.goodload && r && i
                ? t.__map(t.catrgoryList[t.sIndex].goods, function (e, o) {
                    var n = t.__get_orig(e),
                      s =
                        (e.labelName || e.activityGoodData.type > 3) &&
                        e.labelName
                          ? t.cTR(e.labelColor)
                          : null,
                      r =
                        (e.labelName || e.activityGoodData.type > 3) &&
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
            ((t.e0 = function (t) {}),
            (t.e1 = function (e) {
              t.showShopInfo = !t.showShopInfo;
            }),
            (t.e2 = function (e) {
              t.tcyhqshow = !1;
            })),
            (t.$mp.data = Object.assign(
              {},
              { $root: { l0: o, l1: n, l3: s, g0: r, g1: i, l4: a } }
            ));
        },
        s = [];
    },
    ff18: function ff18(t, e, o) {},
  },
  [["c834", "common/runtime", "common/vendor"]],
]);
