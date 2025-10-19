(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/my/integral/shop-index"],
  {
    2852: function _(t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "c", function () {
          return a;
        }),
        n.d(e, "a", function () {});
      var r = function r() {
          var t = this.$createElement,
            e = (this._self._c, this.ggList.length),
            n = this.hotList.length,
            r = 0 == this.dataList.length && this.isget;
          this.$mp.data = Object.assign({}, { $root: { g0: e, g1: n, g2: r } });
        },
        a = [];
    },
    "408d": function d(t, e, n) {
      "use strict";
      n.r(e);
      var r = n("2852"),
        a = n("ab15");
      for (var i in a) {
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(i);
      }
      n("ee27");
      var o = n("f0c5"),
        c = Object(o["a"])(
          a["default"],
          r["b"],
          r["c"],
          !1,
          null,
          "35c9a2e6",
          null,
          !1,
          r["a"],
          void 0
        );
      e["default"] = c.exports;
    },
    "6a0f": function a0f(t, e, n) {},
    "7b44": function b44(t, e, n) {
      "use strict";
      (function (t, e) {
        var r = n("4ea4");
        n("f00a");
        r(n("66fd"));
        var a = r(n("408d"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = n), e(a.default);
      }).call(this, n("bc2e")["default"], n("543d")["createPage"]);
    },
    a7a6: function a7a6(t, e, n) {
      "use strict";
      var r = n("4ea4");
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var a = r(n("2eee")),
        i = r(n("9523")),
        o = r(n("c973")),
        c = n("26cb"),
        s = n("4789");
      function u(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function f(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? u(Object(n), !0).forEach(function (e) {
                (0, i.default)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (e) {
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
        name: "jfsc",
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
          entryButtonGroup: function entryButtonGroup() {
            Promise.all([n.e("common/vendor"), n.e("components/drag/btn")])
              .then(
                function () {
                  return resolve(n("9169"));
                }.bind(null, n)
              )
              .catch(n.oe);
          },
          goodsList: function goodsList() {
            n.e("yb_wm/my/integral/goods-list")
              .then(
                function () {
                  return resolve(n("1e89"));
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
          noticeGroup: function noticeGroup() {
            n.e("components/common/functionCmp/notice-group")
              .then(
                function () {
                  return resolve(n("2718"));
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
          navTab: function navTab() {
            n.e("components/common/functionCmp/nav-tab")
              .then(
                function () {
                  return resolve(n("ceaf"));
                }.bind(null, n)
              )
              .catch(n.oe);
          },
        },
        data: function data() {
          return {
            swiper: {
              class: "p230",
              padding: 0,
              swiper: [],
              duration: "",
              mode: "",
              height: "248",
              radius: "0",
              auto: !0,
              interval: 5,
            },
            ebg: {
              active: 1,
              btnList: [],
              circle: "10",
              circleBtn: "50",
              colorBg: "#FFFFFF",
              colorWord: "#2c2c2c",
              line: "2",
              marginBottom: "0",
              marginLR: "10",
              marginTop: "0",
              num: "5",
            },
            hotList: [],
            params: { typeId: "", page: 1, size: 10, sort: "" },
            ggConfig: {
              txtOrImg: 2,
              notice: { title: "公告", fontSize: "32rpx" },
            },
            ggList: [],
            showLoading: !0,
            aIdx: 0,
            tabs: [],
          };
        },
        onLoad: function onLoad(t) {
          var e = this;
          return (0, o.default)(
            a.default.mark(function t() {
              return a.default.wrap(function (t) {
                while (1) {
                  switch ((t.prev = t.next)) {
                    case 0:
                      e.getLoginInfo(),
                        e.getSystem().then(function () {
                          e.util.setNT(e.jfName + "商城");
                        }),
                        e.getCategory(),
                        e.getList(),
                        e.getHotList();
                    case 5:
                    case "end":
                      return t.stop();
                  }
                }
              }, t);
            })
          )();
        },
        onShow: function onShow() {
          this.uId && this.refreshUser({ nomask: 1, get: 1, now: 1 });
        },
        mixins: [s.sljz],
        computed: {
          jfName: function jfName() {
            return this.system.custom.integral;
          },
        },
        methods: f(
          f({}, (0, c.mapActions)("dndc", ["getSwitchConfig"])),
          {},
          {
            myIntegral: function myIntegral() {
              this.go({ t: 2, url: "/yb_wm/my/integral/my-integral" });
            },
            integralRecord: function integralRecord() {
              this.go({ t: 1, url: "/yb_wm/my/integral/integral-record" });
            },
            tabitem: function tabitem(t) {
              (this.isget = this.mygd = !1),
                (this.params.typeId = t.id || ""),
                (this.params.page = 1),
                (this.dataList = []),
                this.getList();
            },
            changeTab: function changeTab(t) {
              (this.isget = this.mygd = !1),
                (this.params.typeId = this.tabs[t].id),
                (this.params.page = 1),
                (this.dataList = []),
                this.getList();
            },
            getList: function getList() {
              var t = this;
              return (0, o.default)(
                a.default.mark(function e() {
                  var n, r;
                  return a.default.wrap(function (e) {
                    while (1) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            t.util.request({
                              url: t.api.jfsplb,
                              method: "POST",
                              data: t.params,
                            })
                          );
                        case 2:
                          (n = e.sent),
                            (r = n.data),
                            (t.dataList = t.dataList.concat(r)),
                            (t.isget = !0),
                            (t.mygd = t.params.size > r.length),
                            t.params.page++;
                        case 8:
                        case "end":
                          return e.stop();
                      }
                    }
                  }, e);
                })
              )();
            },
            getHotList: function getHotList() {
              var t = this;
              return (0, o.default)(
                a.default.mark(function e() {
                  var n, r;
                  return a.default.wrap(function (e) {
                    while (1) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            t.util.request({
                              url: t.api.jfsplb,
                              method: "POST",
                              data: {
                                typeId: "",
                                page: 1,
                                size: 10,
                                sort: "1",
                              },
                            })
                          );
                        case 2:
                          (n = e.sent),
                            (r = n.data),
                            (t.hotList = t.hotList.concat(r)),
                            (t.showLoading = !1);
                        case 6:
                        case "end":
                          return e.stop();
                      }
                    }
                  }, e);
                })
              )();
            },
            getCategory: function getCategory() {
              var t = this;
              return (0, o.default)(
                a.default.mark(function e() {
                  var n;
                  return a.default.wrap(function (e) {
                    while (1) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            t.util.request({
                              url: t.api.jffl,
                              method: "POST",
                              data: {},
                            })
                          );
                        case 2:
                          (n = e.sent),
                            (t.swiper.swiper = n.data.ad.map(function (t) {
                              return { icon: t.icon };
                            })),
                            (t.tabs = [{ name: "全部", id: "" }].concat(
                              n.data.typeList
                            )),
                            (t.ggList = n.data.payList.map(function (t) {
                              return {
                                title: ""
                                  .concat(t.userName, "成功兑换了")
                                  .concat(t.goodsName),
                              };
                            }));
                        case 6:
                        case "end":
                          return e.stop();
                      }
                    }
                  }, e);
                })
              )();
            },
          }
        ),
      };
      e.default = l;
    },
    ab15: function ab15(t, e, n) {
      "use strict";
      n.r(e);
      var r = n("a7a6"),
        a = n.n(r);
      for (var i in r) {
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(i);
      }
      e["default"] = a.a;
    },
    ee27: function ee27(t, e, n) {
      "use strict";
      var r = n("6a0f"),
        a = n.n(r);
      a.a;
    },
  },
  [["7b44", "common/runtime", "common/vendor"]],
]);
