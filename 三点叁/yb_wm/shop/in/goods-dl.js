(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/shop/in/goods-dl"],
  {
    "073f": function f(e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return o;
      }),
        n.d(t, "c", function () {
          return r;
        }),
        n.d(t, "a", function () {});
      var o = function o() {
          var e = this.$createElement,
            t =
              (this._self._c,
              this.co ? this.scarList.length || this.scarList2.length : null);
          this.$mp.data = Object.assign({}, { $root: { g0: t } });
        },
        r = [];
    },
    "24c4": function c4(e, t, n) {
      "use strict";
      var o = n("4f50"),
        r = n.n(o);
      r.a;
    },
    "43e4": function e4(e, t, n) {
      "use strict";
      (function (e) {
        var o = n("4ea4");
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var r = o(n("2eee")),
          s = o(n("9523")),
          i = o(n("c973")),
          c = n("26cb"),
          a = o(n("8bb1")),
          u = n("4789"),
          d = n("6326");
        function f(e, t) {
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
        function l(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? f(Object(n), !0).forEach(function (t) {
                  (0, s.default)(e, t, n[t]);
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
        var p = {
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
              outin: "3",
              goodsInfo: {},
              showjz: !1,
              shareshow: !1,
              shareCo: {},
              query: "",
            };
          },
          onLoad: function onLoad(e) {
            var t = this;
            return (0, i.default)(
              r.default.mark(function n() {
                var o;
                return r.default.wrap(function (n) {
                  while (1) {
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          t.util.setNT("商品详情"),
                          e.scene
                            ? ((o = decodeURIComponent(e.scene).split(",")),
                              (t.id = o[0]),
                              (t.querystoreId = o[1]))
                            : ((t.id = e.gid), (t.querystoreId = e.storeId)),
                          t.getSystem(),
                          (n.next = 5),
                          t.getLoginInfo({ inviteId: e.userId })
                        );
                      case 5:
                        t.getData(),
                          ("shopGoods" != e.page &&
                            "fastGoods" != e.page &&
                            "inGoods" != e.page) ||
                            ((t.isshopGoods = !0),
                            (t.lastPage = t.util.getPage().$vm)),
                          (t.query = e),
                          console.log(
                            "%c options ",
                            "color: white; background-color: #2274A5",
                            t.isshopGoods,
                            e
                          );
                      case 9:
                      case "end":
                        return n.stop();
                    }
                  }
                }, n);
              })
            )();
          },
          mixins: [u.utilMixins],
          computed: l(
            l(
              l({}, (0, c.mapState)(["sjxx"])),
              (0, c.mapState)({
                scarList: function scarList(e) {
                  return e.scarList.fast.data || [];
                },
                scarList2: function scarList2(e) {
                  return e.scarList.ins.data || [];
                },
              })
            ),
            {},
            {
              canUseShopGoods: function canUseShopGoods() {
                return this.isshopGoods;
              },
              getTotal: function getTotal() {
                var e = 0;
                return (
                  "fastGoods" == this.query.page
                    ? this.scarList.forEach(function (t) {
                        e += +t.num;
                      })
                    : this.scarList2.forEach(function (t) {
                        e += +t.num;
                      }),
                  { num: e }
                );
              },
            }
          ),
          methods: l(
            l({}, (0, c.mapActions)(["getSjxx", "supdCar", "getMycar"])),
            {},
            {
              ljyq: function ljyq() {
                this.shareshow = !0;
              },
              ewmlink: function ewmlink() {
                return (0, d.getEwmLink)(
                  "yb_wm/index/index?userId=".concat(this.uId)
                );
              },
              decn: function decn(e) {
                1 != this.co.num && (this.co.num -= 1);
              },
              addn: function addn(e) {
                (this.co.stock && this.co.num == this.co.stock) ||
                  (this.co.num += 1);
              },
              add: function add(e) {
                (this.showjz = !0), this.updList({ type: 1, e: e });
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
              updList: function updList(e) {
                var t = this;
                return (0, i.default)(
                  r.default.mark(function n() {
                    return r.default.wrap(
                      function (n) {
                        while (1) {
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (
                                (n.prev = 0),
                                (n.next = 3),
                                t.supdCar(
                                  "1" == e.e.addwz
                                    ? e.e.g.ggnum
                                      ? {
                                          storeId: t.co.storeId,
                                          type: e.type,
                                          goodsId: e.e.g.id,
                                          groupId: e.e.g.groupId || "",
                                          material: e.e.g.material || [],
                                          attribute: e.e.g.attribute || "",
                                          num: e.e.g.ggnum,
                                          item:
                                            "inGoods" == t.query.page ? 2 : 3,
                                          key:
                                            "inGoods" == t.query.page
                                              ? "ins"
                                              : "fast",
                                          tableId:
                                            "inGoods" == t.query.page
                                              ? t.query.tableId
                                              : "",
                                        }
                                      : {
                                          storeId: t.co.storeId,
                                          type: e.type,
                                          goodsId: e.e.g.id,
                                          num: e.e.g.num,
                                          item:
                                            "inGoods" == t.query.page ? 2 : 3,
                                          key:
                                            "inGoods" == t.query.page
                                              ? "ins"
                                              : "fast",
                                          tableId:
                                            "inGoods" == t.query.page
                                              ? t.query.tableId
                                              : "",
                                        }
                                    : {
                                        storeId: t.co.storeId,
                                        type: e.type,
                                        goodsId: e.e.g.goodsId,
                                        id: e.e.g.id,
                                        item: "inGoods" == t.query.page ? 2 : 3,
                                        key:
                                          "inGoods" == t.query.page
                                            ? "ins"
                                            : "fast",
                                        tableId:
                                          "inGoods" == t.query.page
                                            ? t.query.tableId
                                            : "",
                                      }
                                )
                              );
                            case 3:
                              n.sent, (t.showjz = !1), (n.next = 11);
                              break;
                            case 7:
                              (n.prev = 7),
                                (n.t0 = n["catch"](0)),
                                (t.showjz = !1),
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
              getData: function getData() {
                var e = this;
                return (0, i.default)(
                  r.default.mark(function t() {
                    var n;
                    return r.default.wrap(function (t) {
                      while (1) {
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              e.util.request({
                                url: e.api.spxq,
                                data: {
                                  goodsId: e.id,
                                  storeId: e.querystoreId,
                                },
                              })
                            );
                          case 2:
                            if (((n = t.sent), n.data.id)) {
                              t.next = 7;
                              break;
                            }
                            return (
                              e.util.message("此商家暂无此商品", 3),
                              a.default.swnb(1e3),
                              t.abrupt("return")
                            );
                          case 7:
                            (n.data.num = 1),
                              (e.co = n.data),
                              (e.swiper.swiper =
                                n.data.media && n.data.media.length
                                  ? n.data.media.map(function (e) {
                                      return { url: e };
                                    })
                                  : [{ icon: n.data.icon }]),
                              e.canUseShopGoods ||
                                e.getMycar({ storeId: n.data.storeId });
                          case 11:
                          case "end":
                            return t.stop();
                        }
                      }
                    }, t);
                  })
                )();
              },
              gwc: function gwc() {
                "fastGoods" == this.query.page
                  ? this.go({ t: 5, url: "/yb_wm/shop/ffmode/goods" })
                  : "inGoods" == this.query.page &&
                    this.go({ t: 5, url: "/yb_wm/shop/in/goods" }),
                  setTimeout(function () {
                    e.$emit("qjjtsj", { showgwc: 1 });
                  }, 200);
              },
            }
          ),
          created: function created() {
            return (0, i.default)(
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
        t.default = p;
      }).call(this, n("543d")["default"]);
    },
    "4f50": function f50(e, t, n) {},
    "561f": function f(e, t, n) {
      "use strict";
      n.r(t);
      var o = n("43e4"),
        r = n.n(o);
      for (var s in o) {
        ["default"].indexOf(s) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return o[e];
            });
          })(s);
      }
      t["default"] = r.a;
    },
    cc69: function cc69(e, t, n) {
      "use strict";
      (function (e, t) {
        var o = n("4ea4");
        n("f00a");
        o(n("66fd"));
        var r = o(n("d2a2"));
        (e.__webpack_require_UNI_MP_PLUGIN__ = n), t(r.default);
      }).call(this, n("bc2e")["default"], n("543d")["createPage"]);
    },
    d2a2: function d2a2(e, t, n) {
      "use strict";
      n.r(t);
      var o = n("073f"),
        r = n("561f");
      for (var s in r) {
        ["default"].indexOf(s) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return r[e];
            });
          })(s);
      }
      n("24c4");
      var i = n("f0c5"),
        c = Object(i["a"])(
          r["default"],
          o["b"],
          o["c"],
          !1,
          null,
          "1616fc66",
          null,
          !1,
          o["a"],
          void 0
        );
      t["default"] = c.exports;
    },
  },
  [["cc69", "common/runtime", "common/vendor"]],
]);
