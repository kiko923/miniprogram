(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/shop/out/goods-dl"],
  {
    "12f5": function f5(t, e, n) {
      "use strict";
      var o = n("1d21"),
        s = n.n(o);
      s.a;
    },
    "1d21": function d21(t, e, n) {},
    2241: function _(t, e, n) {
      "use strict";
      n.r(e);
      var o = n("3c4f"),
        s = n.n(o);
      for (var r in o) {
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return o[t];
            });
          })(r);
      }
      e["default"] = s.a;
    },
    "3c4f": function c4f(t, e, n) {
      "use strict";
      (function (t) {
        var o = n("4ea4");
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var s = o(n("2eee")),
          r = o(n("9523")),
          i = o(n("c973")),
          a = n("26cb"),
          c = o(n("8bb1")),
          u = n("4789"),
          d = n("6326");
        function h(t, e) {
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
              ? h(Object(n), !0).forEach(function (e) {
                  (0, r.default)(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : h(Object(n)).forEach(function (e) {
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
            MgSwiper: function MgSwiper() {
              n.e("components/common/functionCmp/swiper")
                .then(
                  function () {
                    return resolve(n("3415"));
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
            goods: function goods() {
              n.e("components/goods/index")
                .then(
                  function () {
                    return resolve(n("0205"));
                  }.bind(null, n)
                )
                .catch(n.oe);
            },
            mgRtext: function mgRtext() {
              Promise.all([
                n.e("common/vendor"),
                n.e("components/common/functionCmp/rich-text"),
              ])
                .then(
                  function () {
                    return resolve(n("0b28"));
                  }.bind(null, n)
                )
                .catch(n.oe);
            },
            uniNavBar: function uniNavBar() {
              n.e("components/third/uni-nav-bar")
                .then(
                  function () {
                    return resolve(n("d2b9"));
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
            mgShare: function mgShare() {
              n.e("components/template/share")
                .then(
                  function () {
                    return resolve(n("5db8"));
                  }.bind(null, n)
                )
                .catch(n.oe);
            },
            uniQrcode: function uniQrcode() {
              Promise.all([
                n.e("common/vendor"),
                n.e("components/uQrcode/uni-qrcode"),
              ])
                .then(
                  function () {
                    return resolve(n("629c"));
                  }.bind(null, n)
                )
                .catch(n.oe);
            },
          },
          data: function data() {
            return {
              opcity: 0,
              iconOpcity: 0.5,
              swiper: {
                class: "",
                padding: 0,
                swiper: [],
                duration: "",
                mode: "",
                height: "750",
                radius: "0",
                auto: !0,
                interval: 5,
              },
              isshopGoods: !1,
              co: null,
              showGg: !1,
              outin: "1",
              goodsInfo: {},
              showjz: !1,
              shareshow: !1,
              shareCo: {},
              buyType: "2",
              catrgoryList: [],
              xdtype: "",
            };
          },
          onLoad: function onLoad(e) {
            var n = this;
            return (0, i.default)(
              s.default.mark(function o() {
                var r;
                return s.default.wrap(function (o) {
                  while (1) {
                    switch ((o.prev = o.next)) {
                      case 0:
                        return (
                          n.util.setNT("商品详情"),
                          t.$on("qjjtsj", function (t) {
                            t.wmtz
                              ? n.$refs.goodscar.goPay(2)
                              : ((n.xdtype = ""), (n.xdtype = t));
                          }),
                          e.scene
                            ? ((r = decodeURIComponent(e.scene).split(",")),
                              (n.id = r[0]),
                              (n.querystoreId = r[1]))
                            : ((n.id = e.gid),
                              (n.querystoreId = e.storeId || n.storeInfo.id),
                              (n.buyType = e.buyType)),
                          n.getSystem(),
                          (o.next = 6),
                          n.getLoginInfo({ inviteId: e.userId })
                        );
                      case 6:
                        n.getData(),
                          n.getDw(),
                          "shopGoods" == e.page &&
                            ((n.isshopGoods = !0),
                            (n.lastPage = n.util.getPage().$vm)),
                          console.log(
                            "%c options ",
                            "color: white; background-color: #2274A5",
                            n.isshopGoods,
                            e,
                            n.storeInfo
                          );
                      case 10:
                      case "end":
                        return o.stop();
                    }
                  }
                }, o);
              })
            )();
          },
          mixins: [u.utilMixins],
          computed: f(
            f(
              f({}, (0, a.mapState)(["sjxx"])),
              (0, a.mapState)({
                scarList: function scarList(t) {
                  return t.scarList.out.data || [];
                },
                storeInfo: function storeInfo(t) {
                  return t.config.storeInfo;
                },
              })
            ),
            {},
            {
              canUseShopGoods: function canUseShopGoods() {
                return this.isshopGoods;
              },
              getTotal: function getTotal() {
                var t = this,
                  e = 0;
                return (
                  this.scarList.forEach(function (n) {
                    (e += +n.num),
                      t.co &&
                        t.co.name &&
                        t.co.name == n.name &&
                        (t.co.num = n.num);
                  }),
                  { num: e }
                );
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
                        (this.buyType = +t[0].value))
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
            }
          ),
          methods: f(
            f(
              f(
                {},
                (0, a.mapActions)([
                  "getSjxx",
                  "supdCar",
                  "getMycar",
                  "getConfig",
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
              ljyq: function ljyq() {
                this.shareshow = !0;
              },
              ewmlink: function ewmlink() {
                return (0, d.getEwmLink)(
                  "yb_wm/index/index?userId=".concat(this.uId)
                );
              },
              decn: function decn(t) {
                this.isClose &&
                  ((this.showjz = !0), this.updList({ type: 2, e: t })),
                  1 != this.co.num || (this.co.num = 0);
              },
              addn: function addn(t) {
                if (this.isClose) {
                  if (t.g.SalesStock && t.g.SalesStock <= 0)
                    return this.util.message("商品已售罄", 3);
                  if (t.g.stock <= 0) return this.util.message("商品已售罄", 3);
                  (this.showjz = !0),
                    (1 != t.g.isSpecs &&
                      1 != t.g.isMaterial &&
                      1 != t.g.isAttr) ||
                    t.g.hasOwnProperty("groupId")
                      ? this.updList({ type: 1, e: t })
                      : ((this.showGg = !0),
                        (this.goodsInfo = t.g),
                        (this.showjz = !1));
                }
              },
              add: function add(t) {
                (this.showjz = !0), this.updList({ type: 1, e: t });
              },
              dec: function dec(t) {
                (this.showjz = !0), this.updList({ type: 2, e: t });
              },
              celarCar: function celarCar(t) {
                for (
                  var e = this.catrgoryList, n = 0, o = e.length;
                  n < o;
                  n++
                ) {
                  for (var s = 0, r = e[n].goods.length; s < r; s++) {
                    e[n].goods[s].num = 0;
                  }
                }
                this.co.num = 0;
              },
              jrgwc: function jrgwc() {
                if (!this.uId) return this.util.message("暂未登录", 3);
                (this.showjz = !0),
                  1 == this.co.isSpecs ||
                  1 == this.co.isMaterial ||
                  1 == this.co.isAttr
                    ? ((this.showGg = !0),
                      (this.goodsInfo = this.co),
                      (this.showjz = !1))
                    : this.updList({ type: 1, e: { addwz: 1, g: this.co } });
              },
              updList: function updList(t) {
                var e = this;
                return (0, i.default)(
                  s.default.mark(function n() {
                    return s.default.wrap(
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
                                      ? {
                                          storeId: e.co.storeId,
                                          type: t.type,
                                          goodsId: t.e.g.id,
                                          groupId: t.e.g.groupId || "",
                                          material: t.e.g.material || [],
                                          attribute: t.e.g.attribute || "",
                                          num: t.e.g.ggnum,
                                        }
                                      : {
                                          storeId: e.co.storeId,
                                          type: t.type,
                                          goodsId: t.e.g.id,
                                        }
                                    : {
                                        storeId: e.co.storeId,
                                        type: t.type,
                                        goodsId: t.e.g.goodsId,
                                        id: t.e.g.id,
                                      }
                                )
                              );
                            case 3:
                              n.sent, (e.showjz = !1), (n.next = 11);
                              break;
                            case 7:
                              (n.prev = 7),
                                (n.t0 = n["catch"](0)),
                                (e.showjz = !1),
                                console.log(n.t0);
                            case 11:
                            case "end":
                              return n.stop();
                          }
                        }
                      },
                      n,
                      null,
                      [[0, 7]]
                    );
                  })
                )();
              },
              gopay: function gopay() {
                this.canUseShopGoods
                  ? this.go({ t: 4 })
                  : this.go({
                      t: 3,
                      url: "/yb_o2o/shop/goods?storeId=".concat(
                        this.co.storeId,
                        "&isgl=1"
                      ),
                    });
              },
              refreshInfo: function refreshInfo() {
                var t = this;
                return (0, i.default)(
                  s.default.mark(function e() {
                    return s.default.wrap(function (e) {
                      while (1) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            (getApp().globalData.xzdzInfo = null),
                              t.setScarList({ data: {} }),
                              t.getData(),
                              t.getDw();
                          case 4:
                          case "end":
                            return e.stop();
                        }
                      }
                    }, e);
                  })
                )();
              },
              getData: function getData() {
                var e = this;
                return (0, i.default)(
                  s.default.mark(function n() {
                    var o, r, i, a;
                    return s.default.wrap(
                      function (n) {
                        while (1) {
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (
                                (n.next = 2),
                                e.util.request({
                                  url: e.api.spxq,
                                  data: {
                                    goodsId: e.id,
                                    storeId: e.querystoreId,
                                  },
                                })
                              );
                            case 2:
                              if (((o = n.sent), o.data.id)) {
                                n.next = 7;
                                break;
                              }
                              return (
                                e.util.message("此商家暂无此商品", 3),
                                c.default.swnb(1e3),
                                n.abrupt("return")
                              );
                            case 7:
                              return (
                                (n.next = 9),
                                e.getMycar({ storeId: e.querystoreId })
                              );
                            case 9:
                              return (
                                (e.co = o.data),
                                0,
                                e.scarList.forEach(function (t) {
                                  o.data.name == t.name && +t.num;
                                }),
                                (e.swiper.swiper =
                                  o.data.media && o.data.media.length
                                    ? o.data.media.map(function (t) {
                                        return { url: t };
                                      })
                                    : [{ icon: o.data.icon }]),
                                (e.catrgoryList = c.default.deepCopy(
                                  e.sjxx.data
                                )),
                                (n.next = 16),
                                e.util.request({
                                  url: e.api.xcxm,
                                  data: {
                                    page: "yb_wm/shop/out/goods-dl",
                                    ident: "goodsDl",
                                    scene: e.co.id + "," + e.co.storeId,
                                  },
                                })
                              );
                            case 16:
                              return (
                                (r = n.sent),
                                (i = r.data),
                                (n.prev = 18),
                                (n.t0 = Promise),
                                (n.t1 = t.getImageInfo({ src: e.co.icon })),
                                (n.t2 = t.getImageInfo({ src: i })),
                                (n.next = 24),
                                t.getImageInfo({ src: e.co.storeIcon })
                              );
                            case 24:
                              return (
                                (n.t3 = n.sent),
                                (n.t4 = [n.t1, n.t2, n.t3]),
                                (n.next = 28),
                                n.t0.all.call(n.t0, n.t4)
                              );
                            case 28:
                              (a = n.sent),
                                (e.shareCo = {
                                  isget: !0,
                                  bgimg: a[0][1].path,
                                  code: a[1][1].path,
                                  logo: a[2][1].path,
                                  co: e.co,
                                }),
                                (n.next = 35);
                              break;
                            case 32:
                              (n.prev = 32),
                                (n.t5 = n["catch"](18)),
                                console.log("图片error", n.t5);
                            case 35:
                            case "end":
                              return n.stop();
                          }
                        }
                      },
                      n,
                      null,
                      [[18, 32]]
                    );
                  })
                )();
              },
              init: function init() {
                var t = arguments,
                  e = this;
                return (0, i.default)(
                  s.default.mark(function n() {
                    var o;
                    return s.default.wrap(function (n) {
                      while (1) {
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              t.length > 0 && void 0 !== t[0] ? t[0] : 1,
                              (o = getApp().globalData.gdlocation),
                              (n.next = 4),
                              e.getSjxx({
                                storeId: e.querystoreId,
                                lat: o.latitude,
                                lng: o.longitude,
                              })
                            );
                          case 4:
                            (e.catrgoryList = c.default.deepCopy(e.sjxx.data)),
                              e.getConfig({
                                key: "storeInfo",
                                data: {
                                  id: e.sjxx.shopData.id,
                                  name: e.sjxx.shopData.name,
                                  distance: e.sjxx.shopData.distance,
                                },
                              });
                          case 6:
                          case "end":
                            return n.stop();
                        }
                      }
                    }, n);
                  })
                )();
              },
              itemBoxMoney: function itemBoxMoney(t, e) {
                return (t * e).toFixed(1);
              },
              gwc: function gwc() {
                this.$refs.goodscar.openCar(),
                  setTimeout(function () {
                    t.$emit("qjjtsj", { showgwc: 1 });
                  }, 200);
              },
              dlgoPay: function dlgoPay() {
                var t = this.$refs.goodscar.qsTextt();
                1 == t.reach
                  ? this.$refs.goodscar.goPay(2)
                  : this.util.modal(t.text);
              },
              tsgwc: function tsgwc() {
                this.util.message("请先选择商品", 3);
              },
            }
          ),
          created: function created() {
            return (0, i.default)(
              s.default.mark(function t() {
                return s.default.wrap(function (t) {
                  while (1) {
                    switch ((t.prev = t.next)) {
                      case 0:
                      case "end":
                        return t.stop();
                    }
                  }
                }, t);
              })
            )();
          },
          onShareAppMessage: function onShareAppMessage() {
            this.shareshow = !1;
            var t = "yb_wm/shop/out/goods-dl?gid="
              .concat(this.id, "&storeId=")
              .concat(this.co.storeId, "&userId=")
              .concat(this.uId, "&buyType=")
              .concat(this.buyType);
            return this.util.mpShare({
              t: this.co.name,
              i: this.getImgS(this.co.icon),
              p: t,
            });
          },
          onShareTimeline: function onShareTimeline(t) {
            return {
              title: this.co.name,
              imageUrl: this.getImgS(this.co.icon),
            };
          },
        };
        e.default = l;
      }).call(this, n("543d")["default"]);
    },
    "7c41": function c41(t, e, n) {
      "use strict";
      (function (t, e) {
        var o = n("4ea4");
        n("f00a");
        o(n("66fd"));
        var s = o(n("e603"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = n), e(s.default);
      }).call(this, n("bc2e")["default"], n("543d")["createPage"]);
    },
    e603: function e603(t, e, n) {
      "use strict";
      n.r(e);
      var o = n("eadf"),
        s = n("2241");
      for (var r in s) {
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return s[t];
            });
          })(r);
      }
      n("12f5");
      var i = n("f0c5"),
        a = Object(i["a"])(
          s["default"],
          o["b"],
          o["c"],
          !1,
          null,
          "3dbf5290",
          null,
          !1,
          o["a"],
          void 0
        );
      e["default"] = a.exports;
    },
    eadf: function eadf(t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return o;
      }),
        n.d(e, "c", function () {
          return s;
        }),
        n.d(e, "a", function () {});
      var o = function o() {
          var t = this.$createElement,
            e = (this._self._c, this.co ? this.scarList.length : null);
          this.$mp.data = Object.assign({}, { $root: { g0: e } });
        },
        s = [];
    },
  },
  [["7c41", "common/runtime", "common/vendor"]],
]);
