(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/index/index"],
  {
    "7ce9": function ce9(e, n, t) {
      "use strict";
      t.r(n);
      var o = t("9a60"),
        r = t.n(o);
      for (var c in o) {
        ["default"].indexOf(c) < 0 &&
          (function (e) {
            t.d(n, e, function () {
              return o[e];
            });
          })(c);
      }
      n["default"] = r.a;
    },
    8128: function _(e, n, t) {
      "use strict";
      t.d(n, "b", function () {
        return o;
      }),
        t.d(n, "c", function () {
          return r;
        }),
        t.d(n, "a", function () {});
      var o = function o() {
          var e = this,
            n = e.$createElement;
          e._self._c;
          e._isMounted ||
            ((e.e0 = function (n) {
              e.xkzxshow = !1;
            }),
            (e.e1 = function (n) {
              e.fqbshow = !1;
            }),
            (e.e2 = function (n) {
              e.fwxyshow = !1;
            }));
        },
        r = [];
    },
    "9a60": function a60(e, n, t) {
      "use strict";
      (function (e) {
        var o = t("4ea4");
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.default = void 0);
        var r = o(t("2eee")),
          c = o(t("c973")),
          i = o(t("9523")),
          s = t("26cb"),
          u = t("6326"),
          a = o(t("8bb1"));
        function l(e, n) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            n &&
              (o = o.filter(function (n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable;
              })),
              t.push.apply(t, o);
          }
          return t;
        }
        function d(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {};
            n % 2
              ? l(Object(t), !0).forEach(function (n) {
                  (0, i.default)(e, n, t[n]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(
                    e,
                    n,
                    Object.getOwnPropertyDescriptor(t, n)
                  );
                });
          }
          return e;
        }
        var f = {
          name: "index",
          data: function data() {
            return {
              showloading: !0,
              shopinfo: {},
              opcity: 0,
              xkzxshow: !1,
              xkzxInfo: "",
              fqbshow: !1,
              fqbInfo: "",
              fwxyshow: !1,
            };
          },
          components: {
            searchBox: function searchBox() {
              t.e("components/drag/search")
                .then(
                  function () {
                    return resolve(t("4cc9"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
            fixedSet: function fixedSet() {
              Promise.all([t.e("common/vendor"), t.e("components/drag/fixed")])
                .then(
                  function () {
                    return resolve(t("073b"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
            noticeSue: function noticeSue() {
              Promise.all([t.e("common/vendor"), t.e("components/drag/notice")])
                .then(
                  function () {
                    return resolve(t("913a"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
            picLunboBy: function picLunboBy() {
              Promise.all([
                t.e("common/vendor"),
                t.e("components/drag/picLunbo"),
              ])
                .then(
                  function () {
                    return resolve(t("5175"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
            btnGroup: function btnGroup() {
              Promise.all([t.e("common/vendor"), t.e("components/drag/btn")])
                .then(
                  function () {
                    return resolve(t("9169"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
            pictures: function pictures() {
              t.e("components/drag/pictures")
                .then(
                  function () {
                    return resolve(t("84f0"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
            titlesBar: function titlesBar() {
              t.e("components/drag/titles")
                .then(
                  function () {
                    return resolve(t("0072"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
            blank: function blank() {
              Promise.all([t.e("common/vendor"), t.e("components/drag/blank")])
                .then(
                  function () {
                    return resolve(t("8585"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
            linesWire: function linesWire() {
              t.e("components/drag/lines")
                .then(
                  function () {
                    return resolve(t("ad81"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
            storeMessage: function storeMessage() {
              t.e("components/drag/storeMessage")
                .then(
                  function () {
                    return resolve(t("c186"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
            bookText: function bookText() {
              Promise.all([
                t.e("common/vendor"),
                t.e("components/common/functionCmp/rich-text"),
              ])
                .then(
                  function () {
                    return resolve(t("0b28"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
            cardTab: function cardTab() {
              t.e("components/drag/card")
                .then(
                  function () {
                    return resolve(t("03db"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
            hotSpots: function hotSpots() {
              Promise.all([t.e("common/vendor"), t.e("components/drag/hot")])
                .then(
                  function () {
                    return resolve(t("432f"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
            margicCube: function margicCube() {
              t.e("components/drag/margic")
                .then(
                  function () {
                    return resolve(t("34f1"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
            listNav: function listNav() {
              Promise.all([
                t.e("common/vendor"),
                t.e("components/drag/listNav"),
              ])
                .then(
                  function () {
                    return resolve(t("d1df"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
            discountCoupons: function discountCoupons() {
              t.e("components/drag/discount")
                .then(
                  function () {
                    return resolve(t("7565"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
            productGroup: function productGroup() {
              t.e("components/drag/product")
                .then(
                  function () {
                    return resolve(t("3b24"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
            susBtn: function susBtn() {
              t.e("components/drag/susBtn")
                .then(
                  function () {
                    return resolve(t("cfaf"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
            attenTion: function attenTion() {
              t.e("components/drag/attenTion")
                .then(
                  function () {
                    return resolve(t("8f00"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
            orderPrompt: function orderPrompt() {
              t.e("components/drag/remind")
                .then(
                  function () {
                    return resolve(t("1d3f"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
            openList: function openList() {
              Promise.all([t.e("common/vendor"), t.e("components/drag/open")])
                .then(
                  function () {
                    return resolve(t("8fc6"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
            uniNavBar: function uniNavBar() {
              t.e("components/third/uni-nav-bar")
                .then(
                  function () {
                    return resolve(t("d2b9"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
            load: function load() {
              t.e("components/common/load")
                .then(
                  function () {
                    return resolve(t("2d33"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
            tcyhq: function tcyhq() {
              t.e("components/template/tcyhq")
                .then(
                  function () {
                    return resolve(t("90f7"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
            zxList: function zxList() {
              Promise.all([
                t.e("common/vendor"),
                t.e("components/drag/zx-list"),
              ])
                .then(
                  function () {
                    return resolve(t("f3d4"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
            footc: function footc() {
              t.e("components/common/footc")
                .then(
                  function () {
                    return resolve(t("884b"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
            myBalance: function myBalance() {
              t.e("components/drag/myBalance")
                .then(
                  function () {
                    return resolve(t("c3df3"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
            storeEvaluate: function storeEvaluate() {
              t.e("components/drag/store-evaluate")
                .then(
                  function () {
                    return resolve(t("c83c"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
            storeCouponbag: function storeCouponbag() {
              t.e("components/drag/store-couponbag")
                .then(
                  function () {
                    return resolve(t("4be3"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
            storeInformation: function storeInformation() {
              t.e("components/drag/store-information")
                .then(
                  function () {
                    return resolve(t("6920"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
            customVideo: function customVideo() {
              t.e("components/drag/custom-video")
                .then(
                  function () {
                    return resolve(t("caf5"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
            attAccount: function attAccount() {
              Promise.all([
                t.e("common/vendor"),
                t.e("components/drag/attAccount"),
              ])
                .then(
                  function () {
                    return resolve(t("cd33"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
            yszc: function yszc() {
              t.e("yb_wm/index/components/yszc")
                .then(
                  function () {
                    return resolve(t("71f3"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
          },
          onLoad: function onLoad(n) {
            (this.query = n),
              n && n.scene
                ? ((this.storeId = ""),
                  (this.ldxId = decodeURIComponent(n.scene).split(",")[0]),
                  (this.ldxType = decodeURIComponent(n.scene).split(",")[1]))
                : (this.storeId =
                    a.default.getOptions(n, {
                      key: "storeId",
                      q1: this.storeInfo.id,
                    }) || ""),
              this.xlsx(n),
              console.log("onLoad", n),
              e.getStorageSync("isYszc") || (this.fwxyshow = !0),
              console.log("yszz", e.getStorageSync("isYszc"));
          },
          onShow: function onShow() {
            this.shopinfo.id &&
              this.storeId != this.storeInfo.id &&
              this.changeStore(this.storeInfo),
              this.query &&
                this.query.scene &&
                ((this.storeId = ""),
                (this.ldxId = decodeURIComponent(this.query.scene).split(
                  ","
                )[0]),
                (this.ldxType = decodeURIComponent(this.query.scene).split(
                  ","
                )[1]),
                this.xlsx(this.query));
          },
          computed: d(
            d({}, (0, s.mapState)("dndc", ["latLng"])),
            (0, s.mapState)({
              layout: function layout(e) {
                return e.layout.index.body || {};
              },
              storeInfo: function storeInfo(e) {
                return e.config.storeInfo;
              },
              system: function system(e) {
                return e.system;
              },
            })
          ),
          methods: d(
            d({}, (0, s.mapActions)(["getConfig", "getSjwifi"])),
            {},
            {
              xlsx: function xlsx(e) {
                var n = this;
                return (0, c.default)(
                  r.default.mark(function e() {
                    var t;
                    return r.default.wrap(function (e) {
                      while (1) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), n.getLayout();
                          case 2:
                            return (e.next = 4), n.getSystem();
                          case 4:
                            if (
                              ((n.showloading = !1),
                              !n.system || 1 != n.system.position_switch)
                            ) {
                              e.next = 10;
                              break;
                            }
                            return (e.next = 8), (0, u.getDw)({ t: 0 });
                          case 8:
                            (t = e.sent), n.getAddInfo(t);
                          case 10:
                            n
                              .getLoginInfo({
                                inviteId: n.query.userId || n.ldxId,
                                type: n.ldxType,
                              })
                              .then(function () {
                                n.getXkzx(),
                                  (0, u.wxShare)({
                                    title: n.system.name,
                                    desc:
                                      n.system.introduction || "进来看看吧！",
                                    link: (0, u.getSLink)(
                                      "yb_wm/index/index?userId=".concat(n.uId)
                                    ),
                                    imgUrl: n.system.icon,
                                  });
                              }),
                              n.refreshInfo();
                          case 12:
                          case "end":
                            return e.stop();
                        }
                      }
                    }, e);
                  })
                )();
              },
              changeStore: function changeStore(e) {
                (this.storeId = e.id), this.refreshInfo();
              },
              refreshInfo: function refreshInfo() {
                var e = this;
                return (0, c.default)(
                  r.default.mark(function n() {
                    var t, o;
                    return r.default.wrap(function (n) {
                      while (1) {
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.next = 2),
                              e.util.request({
                                url: e.api.zjdp,
                                data: {
                                  storeId: e.storeId,
                                  lat: e.latLng.lat ? e.latLng.lat : "",
                                  lng: e.latLng.lng ? e.latLng.lng : "",
                                },
                              })
                            );
                          case 2:
                            (t = n.sent),
                              (o = t.data),
                              (e.storeId = o.id),
                              e.getConfig({
                                key: "storeInfo",
                                data: {
                                  id: o.id,
                                  name: o.name,
                                  distance: o.distance,
                                },
                              }),
                              e.getSjwifi({ storeId: o.id, ident: "wifi" }),
                              (e.shopinfo = o),
                              e.getSystem(),
                              setTimeout(function () {
                                e.addFwjl({ storeId: e.storeId, origin: "1" });
                              }, 1e3);
                          case 10:
                          case "end":
                            return n.stop();
                        }
                      }
                    }, n);
                  })
                )();
              },
              getXkzx: function getXkzx() {
                var e = this;
                return (0, c.default)(
                  r.default.mark(function n() {
                    var t;
                    return r.default.wrap(function (n) {
                      while (1) {
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.next = 2),
                              Promise.all([
                                e.util.request({
                                  url: e.api.xkzx,
                                  method: "POST",
                                }),
                                e.util.request({ url: e.api.sytchj }),
                              ])
                            );
                          case 2:
                            (t = n.sent),
                              "array" != a.default.getType(t[0].data) &&
                                ((e.xkzxInfo = t[0].data),
                                setTimeout(function () {
                                  e.xkzxshow = !0;
                                }, 400)),
                              t[1].data.issueCoupons.couponArr &&
                                ((e.fqbInfo = t[1].data.issueCoupons),
                                setTimeout(function () {
                                  e.fqbshow = !0;
                                }, 400));
                          case 5:
                          case "end":
                            return n.stop();
                        }
                      }
                    }, n);
                  })
                )();
              },
            }
          ),
          onPullDownRefresh: function onPullDownRefresh() {
            var n = this;
            return (0, c.default)(
              r.default.mark(function t() {
                return r.default.wrap(function (t) {
                  while (1) {
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (n.showloading = !0),
                          e.setStorageSync("firstdwtime", 0),
                          n.getSystem({ get: 1 }),
                          (n.$store.state.layout.index = {}),
                          (t.next = 6),
                          n.xlsx()
                        );
                      case 6:
                        e.stopPullDownRefresh();
                      case 7:
                      case "end":
                        return t.stop();
                    }
                  }
                }, t);
              })
            )();
          },
          onShareAppMessage: function onShareAppMessage() {
            return this.util.mpShare({
              t: this.system.forwardTitle,
              i: this.getImgS(this.system.forwardIcon),
            });
          },
          onShareTimeline: function onShareTimeline(e) {
            return {
              title: this.system.shareTitle,
              imageUrl: this.getImgS(this.system.shareIcon),
            };
          },
        };
        n.default = f;
      }).call(this, t("543d")["default"]);
    },
    "9f6b": function f6b(e, n, t) {
      "use strict";
      t.r(n);
      var o = t("8128"),
        r = t("7ce9");
      for (var c in r) {
        ["default"].indexOf(c) < 0 &&
          (function (e) {
            t.d(n, e, function () {
              return r[e];
            });
          })(c);
      }
      var i = t("f0c5"),
        s = Object(i["a"])(
          r["default"],
          o["b"],
          o["c"],
          !1,
          null,
          "98d38686",
          null,
          !1,
          o["a"],
          void 0
        );
      n["default"] = s.exports;
    },
    ea88: function ea88(e, n, t) {
      "use strict";
      (function (e, n) {
        var o = t("4ea4");
        t("f00a");
        o(t("66fd"));
        var r = o(t("9f6b"));
        (e.__webpack_require_UNI_MP_PLUGIN__ = t), n(r.default);
      }).call(this, t("bc2e")["default"], t("543d")["createPage"]);
    },
  },
  [["ea88", "common/runtime", "common/vendor"]],
]);
