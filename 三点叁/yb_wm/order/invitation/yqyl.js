(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/order/invitation/yqyl"],
  {
    "32b0": function b0(e, n, t) {
      "use strict";
      t.d(n, "b", function () {
        return r;
      }),
        t.d(n, "c", function () {
          return a;
        }),
        t.d(n, "a", function () {});
      var r = function r() {
          var e = this,
            n = e.$createElement,
            t =
              (e._self._c,
              e.hdInfo.name
                ? e.timeToDate(e.hdInfo.startTime, "yyyy-MM-dd")
                : null),
            r = e.hdInfo.name
              ? e.timeToDate(e.hdInfo.endTime, "yyyy-MM-dd")
              : null,
            a = e.jtarr.length,
            o = e.monarr2.length && 0 == e.tabClick,
            i = e.monarr2 && e.monarr2.length > 3,
            c = i ? e.monarr2.slice(3) : null;
          e._isMounted ||
            ((e.e0 = function (n) {
              e.shareshow = !0;
            }),
            (e.e1 = function (n) {
              return e.util.preImg({ idx: 0, urls: [e.mdmimg] });
            }),
            (e.e2 = function (n) {
              e.mdmshow = !1;
            })),
            (e.$mp.data = Object.assign(
              {},
              { $root: { m0: t, m1: r, g0: a, g1: o, g2: i, l0: c } }
            ));
        },
        a = [];
    },
    5778: function _(e, n, t) {
      "use strict";
      var r = t("ee81"),
        a = t.n(r);
      a.a;
    },
    6336: function _(e, n, t) {
      "use strict";
      t.r(n);
      var r = t("d693"),
        a = t.n(r);
      for (var o in r) {
        ["default"].indexOf(o) < 0 &&
          (function (e) {
            t.d(n, e, function () {
              return r[e];
            });
          })(o);
      }
      n["default"] = a.a;
    },
    c2b1: function c2b1(e, n, t) {
      "use strict";
      (function (e, n) {
        var r = t("4ea4");
        t("f00a");
        r(t("66fd"));
        var a = r(t("f2e3"));
        (e.__webpack_require_UNI_MP_PLUGIN__ = t), n(a.default);
      }).call(this, t("bc2e")["default"], t("543d")["createPage"]);
    },
    d693: function d693(e, n, t) {
      "use strict";
      (function (e) {
        var r = t("4ea4");
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.default = void 0);
        var a = r(t("2eee")),
          o = r(t("9523")),
          i = r(t("c973")),
          c = t("26cb"),
          u = (r(t("8bb1")), t("4789")),
          s = t("6326");
        function d(e, n) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n &&
              (r = r.filter(function (n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable;
              })),
              t.push.apply(t, r);
          }
          return t;
        }
        function l(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {};
            n % 2
              ? d(Object(t), !0).forEach(function (n) {
                  (0, o.default)(e, n, t[n]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : d(Object(t)).forEach(function (n) {
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
          name: "order-index",
          components: {
            uniNavBar: function uniNavBar() {
              t.e("components/third/uni-nav-bar")
                .then(
                  function () {
                    return resolve(t("d2b9"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
            MgImg: function MgImg() {
              t.e("components/common/mg-img")
                .then(
                  function () {
                    return resolve(t("2dc2"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
            MgCell: function MgCell() {
              t.e("components/common/mg-cell")
                .then(
                  function () {
                    return resolve(t("f3fc"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
            mgModal: function mgModal() {
              t.e("components/common/modal")
                .then(
                  function () {
                    return resolve(t("ddfd"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
            mgShare: function mgShare() {
              t.e("components/template/share")
                .then(
                  function () {
                    return resolve(t("5db8"));
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
          },
          data: function data() {
            return {
              showLoading: !0,
              opcity: 0,
              iconOpcity: 0.5,
              hdInfo: {},
              params: { userId: "", name: "", tel: "" },
              LDXInfo: {},
              loading: !1,
              lbarr: [1, 2, 3],
              syarr: [
                { num: 0, url: "", name: "在路上收益" },
                { num: 0, url: "", name: "累计收益" },
                { num: 0, url: "yx-wdfs", name: "成功邀请" },
              ],
              jtarr: [
                { img: "yq", name: "邀请新人好友" },
                { img: "hb", name: "好友领红包" },
                { img: "gwc", name: "好友7日内消费" },
              ],
              hbarr: [],
              mData3: {},
              mData2: {},
              mData1: {},
              jsarr: [
                { img: "yxsj", name: "邀新赏金", money: "650元" },
                { img: "yxhg", name: "荣耀赏金", money: "800元" },
                { img: "yxjb", name: "总计", money: "1450元" },
              ],
              tabs: [
                { name: "本周榜单", data: "", text: "本周一至今日排名" },
                { name: "上周榜单", data: "", text: "查看上周邀新先锋" },
              ],
              monarr: [],
              monarr2: [],
              tabClick: "0",
              fxshow: !1,
              shareshow: !1,
              mdmshow: !1,
              mdmimg: "",
            };
          },
          onLoad: function onLoad(e) {
            var n = this;
            return (0, i.default)(
              a.default.mark(function e() {
                return a.default.wrap(function (e) {
                  while (1) {
                    switch ((e.prev = e.next)) {
                      case 0:
                        n.getLoginInfo().then(
                          (0, i.default)(
                            a.default.mark(function e() {
                              return a.default.wrap(function (e) {
                                while (1) {
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      (n.params.userId = n.uId),
                                        (n.showLoading = !1),
                                        n.getSy();
                                    case 3:
                                    case "end":
                                      return e.stop();
                                  }
                                }
                              }, e);
                            })
                          )
                        ),
                          n.getLdxConfig("oldWithNewWithdrawalSet"),
                          n.getOwnrank();
                      case 3:
                      case "end":
                        return e.stop();
                    }
                  }
                }, e);
              })
            )();
          },
          mixins: [u.utilMixins],
          computed: l(
            l(
              l({}, (0, c.mapState)("dndc", ["ldxConfig", "mySwitch"])),
              (0, c.mapState)({
                system: function system(e) {
                  return e.system;
                },
              })
            ),
            {},
            {
              nzmoney: function nzmoney() {
                var e = this.LDXInfo.rewardArr;
                if (e && e.length) {
                  var n = e.reduce(function (e, n) {
                    return e + Number(n.money);
                  }, 0);
                  return e.length > 1 ? n : "".concat(e[0].money);
                }
              },
            }
          ),
          methods: l(
            l(
              {},
              (0, c.mapActions)("dndc", ["getLdxConfig", "getSwitchConfig"])
            ),
            {},
            {
              navClick: function navClick(e) {
                (this.tabClick = e), this.getOwnrank(e);
              },
              tx: function tx() {
                var e = this;
                return (0, i.default)(
                  a.default.mark(function n() {
                    return a.default.wrap(function (n) {
                      while (1) {
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (n.next = 2), e.checkLogin();
                          case 2:
                            if (n.sent) {
                              n.next = 4;
                              break;
                            }
                            return n.abrupt("return");
                          case 4:
                            e.go({ t: 1, url: "tx?t=1" });
                          case 5:
                          case "end":
                            return n.stop();
                        }
                      }
                    }, n);
                  })
                )();
              },
              txjl: function txjl() {
                var e = this;
                return (0, i.default)(
                  a.default.mark(function n() {
                    return a.default.wrap(function (n) {
                      while (1) {
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (n.next = 2), e.checkLogin();
                          case 2:
                            if (n.sent) {
                              n.next = 4;
                              break;
                            }
                            return n.abrupt("return");
                          case 4:
                            e.go({ t: 1, url: "txmx?t=1" });
                          case 5:
                          case "end":
                            return n.stop();
                        }
                      }
                    }, n);
                  })
                )();
              },
              hdgz: function hdgz() {
                e.setStorageSync("fwb", this.hdInfo.shareRule),
                  this.go({
                    t: 1,
                    url: "/yb_wm/my/other/gywm?t=".concat(
                      this.hdInfo.name,
                      "&p=6"
                    ),
                  });
              },
              ljyq: function ljyq(e) {
                var n = this;
                return (0, i.default)(
                  a.default.mark(function t() {
                    return a.default.wrap(function (t) {
                      while (1) {
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), n.checkLogin();
                          case 2:
                            if (t.sent) {
                              t.next = 4;
                              break;
                            }
                            return t.abrupt("return");
                          case 4:
                            1 == e ? (n.shareshow = !0) : (n.mdmshow = !0);
                          case 5:
                          case "end":
                            return t.stop();
                        }
                      }
                    }, t);
                  })
                )();
              },
              getSy: function getSy() {
                var e = this;
                return (0, i.default)(
                  a.default.mark(function n() {
                    var t, r;
                    return a.default.wrap(function (n) {
                      while (1) {
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.next = 2), e.util.request({ url: e.api.owni })
                            );
                          case 2:
                            (t = n.sent),
                              (r = t.data),
                              r &&
                                ((e.LDXInfo = r),
                                (e.hdInfo = r.actinfo || {}),
                                (e.hbarr = r.rewardArr || []),
                                (e.syarr[0].num = +r.waitMoney),
                                (e.syarr[1].num = +r.money),
                                (e.syarr[2].num = +r.num),
                                e.util
                                  .request({
                                    url: e.api.xcxm,
                                    data: {
                                      page: "yb_wm/index/index",
                                      ident: "oldWithNew",
                                      scene: e.uId + ",1",
                                    },
                                  })
                                  .then(function (n) {
                                    e.mdmimg = n.data;
                                  }),
                                (0, s.wxShare)({
                                  title: e.hdInfo.shareTitle,
                                  desc: e.system.introduction || "进来看看吧！",
                                  link: (0, s.getSLink)(
                                    "yb_wm/index/index?scene=".concat(e.uId) +
                                      ",1"
                                  ),
                                  imgUrl: e.hdInfo.shareIcon,
                                }));
                          case 5:
                          case "end":
                            return n.stop();
                        }
                      }
                    }, n);
                  })
                )();
              },
              getOwnrank: function getOwnrank(e) {
                var n = this;
                return (0, i.default)(
                  a.default.mark(function t() {
                    var r, o;
                    return a.default.wrap(function (t) {
                      while (1) {
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              n.util.request({
                                url: n.api.ownrank,
                                data: { type: e ? +e + 1 : "1" },
                              })
                            );
                          case 2:
                            (r = t.sent),
                              (o = r.data),
                              o &&
                                ((n.tabs[0].data =
                                  o.weekStart + "-" + o.weekEnd),
                                (n.tabs[1].data =
                                  o.lastWeekStart + "-" + o.lastWeekEnd),
                                (n.mData1 = o.rank.length && o.rank[0]),
                                (n.mData2 = o.rank.length > 1 && o.rank[1]),
                                (n.mData3 = o.rank.length > 2 && o.rank[2]),
                                (n.monarr2 = o.rank));
                          case 5:
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
          onPageScroll: function onPageScroll(e) {
            if (!(this.opcity >= 1 && e.scrollTop / 64 >= 1)) {
              var n = e.scrollTop / 64;
              this.opcity = n;
            }
          },
          onShareAppMessage: function onShareAppMessage() {
            this.shareshow = !1;
            var e = "yb_wm/index/index?scene=".concat(this.uId) + ",1";
            return this.util.mpShare({
              t: this.hdInfo.shareTitle,
              i:
                this.hdInfo.shareIcon &&
                this.getSingleImg(this.hdInfo.shareIcon),
              p: e,
            });
          },
        };
        n.default = f;
      }).call(this, t("543d")["default"]);
    },
    ee81: function ee81(e, n, t) {},
    f2e3: function f2e3(e, n, t) {
      "use strict";
      t.r(n);
      var r = t("32b0"),
        a = t("6336");
      for (var o in a) {
        ["default"].indexOf(o) < 0 &&
          (function (e) {
            t.d(n, e, function () {
              return a[e];
            });
          })(o);
      }
      t("5778");
      var i = t("f0c5"),
        c = Object(i["a"])(
          a["default"],
          r["b"],
          r["c"],
          !1,
          null,
          "b46d6f9e",
          null,
          !1,
          r["a"],
          void 0
        );
      n["default"] = c.exports;
    },
  },
  [["c2b1", "common/runtime", "common/vendor"]],
]);
