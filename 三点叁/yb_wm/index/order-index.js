(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/index/order-index"],
  {
    "2b5f": function b5f(t, e, n) {
      "use strict";
      n.r(e);
      var r = n("967f"),
        a = n("ea82");
      for (var s in a) {
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(s);
      }
      n("84aa");
      var o = n("f0c5"),
        i = Object(o["a"])(
          a["default"],
          r["b"],
          r["c"],
          !1,
          null,
          "39c963f6",
          null,
          !1,
          r["a"],
          void 0
        );
      e["default"] = i.exports;
    },
    "5bf6": function bf6(t, e, n) {
      "use strict";
      (function (t, e) {
        var r = n("4ea4");
        n("f00a");
        r(n("66fd"));
        var a = r(n("2b5f"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = n), e(a.default);
      }).call(this, n("bc2e")["default"], n("543d")["createPage"]);
    },
    "83cc": function cc(t, e, n) {},
    "84aa": function aa(t, e, n) {
      "use strict";
      var r = n("83cc"),
        a = n.n(r);
      a.a;
    },
    "967f": function f(t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "c", function () {
          return a;
        }),
        n.d(e, "a", function () {});
      var r = function r() {
          var t = this,
            e = t.$createElement,
            n =
              (t._self._c,
              0 != t.taIdx || "1" != t.system.powerList.takeout
                ? 1 == t.taIdx && t.tntabs.length
                : null),
            r =
              !t.isLogin ||
              ("1" != t.system.powerList.takeout &&
                "1" != t.system.powerList.instore)
                ? null
                : 0 == t.dataList.length && t.isget,
            a =
              !t.isLogin ||
              ("1" != t.system.powerList.takeout &&
                "1" != t.system.powerList.instore) ||
              0 != t.taIdx
                ? null
                : 0 == t.dataList.length && t.isget,
            s = t.tcCoupon.couponInfo ? null : t.cTR(t.tColor);
          t._isMounted ||
            (t.e0 = function (e) {
              t.showCoupon = !1;
            }),
            (t.$mp.data = Object.assign(
              {},
              { $root: { g0: n, g1: r, g2: a, m0: s } }
            ));
        },
        a = [];
    },
    bd1e: function bd1e(t, e, n) {
      "use strict";
      (function (t) {
        var r = n("4ea4");
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var a = r(n("2eee")),
          s = r(n("9523")),
          o = r(n("c973")),
          i = n("26cb"),
          u = r(n("8bb1")),
          c = n("4789");
        function d(t, e) {
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
        function m(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? d(Object(n), !0).forEach(function (e) {
                  (0, s.default)(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : d(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
          }
          return t;
        }
        var l = getApp().globalData,
          p = {
            name: "orderIndex",
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
              navTab: function navTab() {
                n.e("components/common/functionCmp/nav-tab")
                  .then(
                    function () {
                      return resolve(n("ceaf"));
                    }.bind(null, n)
                  )
                  .catch(n.oe);
              },
              myOrder: function myOrder() {
                n.e("yb_wm/index/components/my-order")
                  .then(
                    function () {
                      return resolve(n("46d9"));
                    }.bind(null, n)
                  )
                  .catch(n.oe);
              },
              dnOrder: function dnOrder() {
                Promise.all([
                  n.e("common/vendor"),
                  n.e("yb_wm/index/components/dn-order"),
                ])
                  .then(
                    function () {
                      return resolve(n("c3df"));
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
              TabBar: function TabBar() {
                n.e("components/common/tabbar")
                  .then(
                    function () {
                      return resolve(n("4ad0"));
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
              mgCoupon: function mgCoupon() {
                Promise.all([
                  n.e("common/vendor"),
                  n.e("components/common/mg-coupon"),
                ])
                  .then(
                    function () {
                      return resolve(n("6ba4"));
                    }.bind(null, n)
                  )
                  .catch(n.oe);
              },
              MgCell: function MgCell() {
                n.e("components/common/mg-cell")
                  .then(
                    function () {
                      return resolve(n("f3fc"));
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
              mgRadio: function mgRadio() {
                n.e("components/form/mg-radio")
                  .then(
                    function () {
                      return resolve(n("e169"));
                    }.bind(null, n)
                  )
                  .catch(n.oe);
              },
              footc: function footc() {
                n.e("components/common/footc")
                  .then(
                    function () {
                      return resolve(n("884b"));
                    }.bind(null, n)
                  )
                  .catch(n.oe);
              },
            },
            data: function data() {
              return {
                toph: 0,
                taIdx: 0,
                aIdx: 0,
                tabs: [{ name: "当前订单" }, { name: "历史订单" }],
                tntabs: [
                  { name: "堂食", type: 1 },
                  { name: "快餐", type: 4 },
                ],
                labelArr: [],
                laIdx: 0,
                dataList: [],
                isget: !1,
                mygd: !1,
                params: { size: 10, page: 1 },
                tcCoupon: {},
                showCoupon: !1,
                showCancel: !1,
                yyArr: [],
                yyradio: "",
              };
            },
            onLoad: function onLoad(e) {
              var n = this;
              return (0, o.default)(
                a.default.mark(function e() {
                  return a.default.wrap(function (e) {
                    while (1) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            n.getSystem().then(function () {
                              n.toph =
                                n.util.getSb().customNavh +
                                t.upx2px("96") +
                                "px";
                            }),
                            (e.next = 3),
                            n.getLoginInfo()
                          );
                        case 3:
                          return (
                            (e.next = 5),
                            n.getConfig({ key: "orderset", api: "ddsz" })
                          );
                        case 5:
                          return (
                            (n.taIdx =
                              ("1" == n.system.powerList.takeout &&
                                "1" == n.system.powerList.instore) ||
                              ("1" == n.system.powerList.takeout &&
                                "2" == n.system.powerList.instore)
                                ? 0
                                : 1),
                            n.system.custom.fastName &&
                              n.tntabs.forEach(function (t) {
                                4 == t.type &&
                                  (t.name = n.system.custom.fastName);
                              }),
                            n.system.custom.oInstoreName &&
                              n.tntabs.forEach(function (t) {
                                1 == t.type &&
                                  (t.name = n.system.custom.oInstoreName);
                              }),
                            2 != n.orderset.cashierOpen &&
                              n.tntabs.push({ name: "当面付", type: 2 }),
                            1 == n.system.powerList.queuing &&
                              n.tntabs.push({ name: "排队", type: 5 }),
                            1 == n.system.powerList.reserve &&
                              n.tntabs.push({ name: "预约", type: 3 }),
                            n.system.custom.cashierName &&
                              n.tntabs.forEach(function (t) {
                                2 == t.type &&
                                  (t.name = n.system.custom.cashierName);
                              }),
                            n.system.custom.queuingName &&
                              n.tntabs.forEach(function (t) {
                                5 == t.type &&
                                  (t.name = n.system.custom.queuingName);
                              }),
                            n.system.custom.reserveName &&
                              n.tntabs.forEach(function (t) {
                                3 == t.type &&
                                  (t.name = n.system.custom.reserveName);
                              }),
                            n.xgIdx(),
                            n.changeTab(n.aIdx),
                            n.getLayout(),
                            (n.isload = !0),
                            e.abrupt("return")
                          );
                        case 21:
                        case "end":
                          return e.stop();
                      }
                    }
                  }, e);
                })
              )();
            },
            onReachBottom: u.default.debounce(function (t) {
              !this.mygd && this.isget && ((this.isget = !1), this.getList());
            }, 300),
            onHide: function onHide() {
              l.ddquery = "";
            },
            onShow: function onShow() {
              var t = this;
              return (0, o.default)(
                a.default.mark(function e() {
                  return a.default.wrap(function (e) {
                    while (1) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          t.isload && (t.xgIdx(), t.refresh());
                        case 1:
                        case "end":
                          return e.stop();
                      }
                    }
                  }, e);
                })
              )();
            },
            mixins: [c.utilMixins],
            computed: m(
              m(
                {},
                (0, i.mapState)({
                  orderset: function orderset(t) {
                    return t.config.orderset;
                  },
                })
              ),
              {},
              {
                tarr: function tarr() {
                  return [
                    {
                      show: 1 == this.system.powerList.takeout,
                      name: this.system.custom.takeOut + "订单",
                      type: 1,
                    },
                    {
                      show: 1 == this.system.powerList.instore,
                      name: this.system.custom.inStore + "订单",
                      type: 2,
                    },
                  ];
                },
              }
            ),
            methods: m(
              m({}, (0, i.mapActions)(["getConfig"])),
              {},
              {
                xgIdx: function xgIdx() {
                  l.ddquery &&
                    ((this.taIdx = l.ddquery.nt),
                    (this.aIdx = this.tntabs.findIndex(function (t) {
                      return t.type == l.ddquery.t;
                    })));
                },
                tClick: function tClick(t) {
                  t != this.taIdx &&
                    ((this.taIdx = t), (this.aIdx = 0), this.refresh());
                },
                ljck: function ljck() {
                  (this.showCoupon = !1),
                    this.go({ t: 1, url: "/yb_wm/my/coupon/my" });
                },
                qdyy: function qdyy() {
                  var t = this;
                  (this.showCancel = !1),
                    "qxdd" == this.operationt
                      ? ((this.qxyy = this.qxyyArr.find(function (e) {
                          return e.value == t.yyradio;
                        }).name),
                        this.qxdd(1))
                      : ((this.qxyy = this.tkyyArr.find(function (e) {
                          return e.value == t.yyradio;
                        }).name),
                        this.operation({ t: "tk", co: this.orderInfo }));
                },
                operation: function operation(t) {
                  var e = this;
                  return (0, o.default)(
                    a.default.mark(function n() {
                      var r, s;
                      return a.default.wrap(
                        function (n) {
                          while (1) {
                            switch ((n.prev = n.next)) {
                              case 0:
                                (e.orderInfo = t.co),
                                  (e.operationt = t.t),
                                  (r = {}),
                                  (n.t0 = t.t),
                                  (n.next =
                                    "qxdd" === n.t0
                                      ? 6
                                      : "sqtk" === n.t0
                                      ? 15
                                      : "cd" === n.t0
                                      ? 19
                                      : "qrsh" === n.t0
                                      ? 21
                                      : "scdd" === n.t0
                                      ? 23
                                      : "lxsj" === n.t0
                                      ? 25
                                      : "pj" === n.t0
                                      ? 26
                                      : "ljzf" === n.t0
                                      ? 27
                                      : 29);
                                break;
                              case 6:
                                if (!t.tip) {
                                  n.next = 14;
                                  break;
                                }
                                return n.abrupt("return", e.qxdd(1));
                              case 14:
                                return n.abrupt("return", e.qxdd());
                              case 15:
                                if (2 != t.co.state) {
                                  n.next = 17;
                                  break;
                                }
                                return n.abrupt("return", e.qxdd(1));
                              case 17:
                                return (
                                  (r = {
                                    title: "您确认取消订单吗？",
                                    url: "wmddtk",
                                    params: {
                                      orderId: t.co.id,
                                      note: e.qxyy || "",
                                    },
                                  }),
                                  n.abrupt("break", 29)
                                );
                              case 19:
                                return (
                                  (r = {
                                    title: "您确认催单吗？",
                                    url: "wmddcd",
                                    params: {
                                      userId: e.user.userId,
                                      orderId: t.co.id,
                                    },
                                  }),
                                  n.abrupt("break", 29)
                                );
                              case 21:
                                return (
                                  (r = {
                                    title: "您确认已收到货吗？",
                                    url: "wmddsh",
                                    params: { orderId: t.co.id },
                                  }),
                                  n.abrupt("break", 29)
                                );
                              case 23:
                                return (
                                  (r = {
                                    title: "您确认删除订单吗？",
                                    url: "wmddsc",
                                    params: { orderId: t.co.id },
                                  }),
                                  n.abrupt("break", 29)
                                );
                              case 25:
                                return n.abrupt(
                                  "return",
                                  e.util.makeTel(t.co.storeTel)
                                );
                              case 26:
                                return n.abrupt(
                                  "return",
                                  e.go({
                                    t: 1,
                                    url:
                                      "/yb_wm/order/pl?orderId=" +
                                      t.co.id +
                                      "&storeName=" +
                                      t.co.storeName +
                                      "&storeId=" +
                                      t.co.storeId,
                                  })
                                );
                              case 27:
                                return (
                                  e.go({
                                    t: 1,
                                    url:
                                      "/yb_wm/other/mg-pay?payObj=" +
                                      encodeURIComponent(
                                        JSON.stringify({
                                          orderId: e.orderInfo.id,
                                          orderType: 1,
                                          info: {
                                            money: e.orderInfo.money,
                                            storeName: e.orderInfo.storeName,
                                            type: "下单支付",
                                            cancel: 1,
                                            go: { t: 4 },
                                          },
                                        })
                                      ),
                                  }),
                                  n.abrupt("return")
                                );
                              case 29:
                                return (
                                  (n.prev = 29),
                                  (n.next = 32),
                                  e.util.modal(r.title)
                                );
                              case 32:
                                n.next = 37;
                                break;
                              case 34:
                                return (
                                  (n.prev = 34),
                                  (n.t1 = n["catch"](29)),
                                  n.abrupt("return")
                                );
                              case 37:
                                return (
                                  (n.next = 39),
                                  e.util.request({
                                    url: e.api[r.url],
                                    method: "POST",
                                    mask: 1,
                                    data: r.params,
                                  })
                                );
                              case 39:
                                (s = n.sent),
                                  s &&
                                    (e.refresh(),
                                    e.util.message("操作成功", 1));
                              case 41:
                              case "end":
                                return n.stop();
                            }
                          }
                        },
                        n,
                        null,
                        [[29, 34]]
                      );
                    })
                  )();
                },
                qxdd: function qxdd(t) {
                  var e = this;
                  return (0, o.default)(
                    a.default.mark(function n() {
                      var r;
                      return a.default.wrap(
                        function (n) {
                          while (1) {
                            switch ((n.prev = n.next)) {
                              case 0:
                                if (!t) {
                                  n.next = 9;
                                  break;
                                }
                                return (
                                  (n.prev = 1),
                                  (n.next = 4),
                                  e.util.modal("您确认取消订单吗？")
                                );
                              case 4:
                                n.next = 9;
                                break;
                              case 6:
                                return (
                                  (n.prev = 6),
                                  (n.t0 = n["catch"](1)),
                                  n.abrupt("return")
                                );
                              case 9:
                                return (
                                  (n.next = 11),
                                  e.util.request({
                                    url: e.api.wmddqx,
                                    method: "POST",
                                    mask: "取消订单中",
                                    data: {
                                      orderId: e.orderInfo.id,
                                      note: (t && e.qxyy) || "",
                                    },
                                  })
                                );
                              case 11:
                                (r = n.sent),
                                  r &&
                                    (e.refresh(),
                                    e.util.message("操作成功", 1));
                              case 13:
                              case "end":
                                return n.stop();
                            }
                          }
                        },
                        n,
                        null,
                        [[1, 6]]
                      );
                    })
                  )();
                },
                refresh: function refresh() {
                  this.changeTab(this.aIdx);
                },
                changeTab: function changeTab(t) {
                  if (
                    ((this.laIdx = 0),
                    (this.isget = this.mygd = !1),
                    (this.params.page = 1),
                    0 == this.taIdx)
                  ) {
                    var e = "";
                    switch (t) {
                      case 0:
                        e = "1";
                        break;
                      case 1:
                        e = "2";
                        break;
                    }
                    (this.params.api = "ddlb"), (this.iparams = { type: e });
                  } else
                    switch (this.tntabs[t].type) {
                      case 1:
                        (this.labelArr = [
                          "全部",
                          "待付款",
                          "已支付",
                          "已关闭",
                        ]),
                          (this.params.api = "tsdd"),
                          (this.iparams = { state: "" });
                        break;
                      case 2:
                        (this.labelArr = []),
                          (this.params.api = "dmlb"),
                          (this.iparams = {});
                        break;
                      case 4:
                        (this.labelArr = ["全部", "制作中", "已完成"]),
                          (this.params.api = "kclb"),
                          (this.iparams = { state: "" });
                        break;
                      case 3:
                        (this.labelArr = []),
                          (this.params.api = "wdyy"),
                          (this.iparams = {});
                        break;
                      case 5:
                        (this.labelArr = []),
                          (this.params.api = "pdlb"),
                          (this.iparams = {});
                        break;
                    }
                  (this.dataList = []), this.getList();
                },
                dnrefresh: function dnrefresh(t) {
                  t.hasOwnProperty("state")
                    ? ((this.iparams.state = t.state),
                      (this.isget = this.mygd = !1),
                      (this.params.page = 1),
                      (this.dataList = []),
                      this.getList())
                    : this.refresh();
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
                                  url: t.api[t.params.api],
                                  method: "POST",
                                  data: m(m({}, t.params), t.iparams),
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
                onmore: function onmore() {},
              }
            ),
          };
        e.default = p;
      }).call(this, n("543d")["default"]);
    },
    ea82: function ea82(t, e, n) {
      "use strict";
      n.r(e);
      var r = n("bd1e"),
        a = n.n(r);
      for (var s in r) {
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(s);
      }
      e["default"] = a.a;
    },
  },
  [["5bf6", "common/runtime", "common/vendor"]],
]);
