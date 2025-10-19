(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/shop/in/order-dl"],
  {
    "012b": function b(e, t, n) {
      "use strict";
      var r = n("4ea4");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = r(n("2eee")),
        i = r(n("9523")),
        a = r(n("c973")),
        s = n("26cb"),
        u = n("4789"),
        c = r(n("8bb1"));
      function f(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(Object(n), !0).forEach(function (t) {
                (0, i.default)(e, t, n[t]);
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
      var l = {
        name: "order-dl",
        components: {
          bkB: function bkB() {
            n.e("components/common/block-b")
              .then(
                function () {
                  return resolve(n("9d64"));
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
        },
        data: function data() {
          return {
            info: {},
            stime: "",
            latitude: "",
            longitude: "",
            covers: [],
            line: [],
            sjxx: {},
            loading: !1,
          };
        },
        onLoad: function onLoad(e) {
          var t = this;
          return (0, a.default)(
            o.default.mark(function n() {
              return o.default.wrap(function (n) {
                while (1) {
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        t.getSystem(),
                        t.util.setNT("订单详情"),
                        (t.orderId = e.id),
                        (n.next = 5),
                        t.getConfig({ key: "orderset", api: "ddsz" })
                      );
                    case 5:
                      t.getInfo();
                    case 6:
                    case "end":
                      return n.stop();
                  }
                }
              }, n);
            })
          )();
        },
        onShow: function onShow() {
          this.isload ? this.getInfo() : (this.isload = !0);
        },
        mixins: [u.utilMixins],
        computed: d(
          d(
            {},
            (0, s.mapState)({
              orderset: function orderset(e) {
                return e.config.orderset;
              },
            })
          ),
          {},
          {
            orderState: function orderState() {
              var e = "",
                t = "";
              switch (+this.info.state) {
                case 1:
                  (e = 1 == this.info.eatType ? "待支付" : "等待商家接单"),
                    (t = 1 == this.info.eatType ? "请尽快支付" : "");
                  break;
                case 2:
                  (e = "就餐中"), (t = "请耐心等待商家备餐");
                  break;
                case 3:
                  (e = "已完成"), (t = "");
                  break;
                case 4:
                  (e = "已关闭"), (t = "订单已关闭");
                  break;
                case 5:
                  (e = "已退款"), (t = "订单已退款");
                  break;
              }
              return { str1: e, str2: t, str3: "" };
            },
            zqmArr: function zqmArr() {
              return this.info.selfCode && this.info.selfCode.split("");
            },
            osl: function osl() {
              return this.info.symbol || this.sl;
            },
          }
        ),
        methods: d(
          d({}, (0, s.mapActions)(["getConfig"])),
          {},
          {
            jxtj: function jxtj() {
              this.go({
                t: 3,
                url: "/yb_wm/shop/in/goods?tableId=" + this.info.tableId,
              });
            },
            ljzf: function ljzf() {
              var e = this;
              return (0, a.default)(
                o.default.mark(function t() {
                  var n;
                  return o.default.wrap(function (t) {
                    while (1) {
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((e.loading = !0),
                            (n =
                              1 == e.sjxx.orderMode && 2 == e.info.eatType
                                ? { data: 1 }
                                : { data: 2 }),
                            1 != n.data)
                          ) {
                            t.next = 5;
                            break;
                          }
                          return (t.next = 5), e.getInfo();
                        case 5:
                          e.go({
                            t: 1,
                            url:
                              "/yb_wm/other/mg-pay?payObj=" +
                              encodeURIComponent(
                                JSON.stringify({
                                  orderId: e.orderId,
                                  orderType: 7,
                                  info: {
                                    money: e.info.money,
                                    type: "堂内订单支付",
                                    cancel: 1,
                                    go: { t: 3, url: "/yb_wm/shop/in/indd" },
                                  },
                                })
                              ),
                          }),
                            (e.loading = !1);
                        case 7:
                        case "end":
                          return t.stop();
                      }
                    }
                  }, t);
                })
              )();
            },
            getInfo: function getInfo() {
              var e = this;
              return (0, a.default)(
                o.default.mark(function t() {
                  var n, r;
                  return o.default.wrap(function (t) {
                    while (1) {
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2),
                            e.util.request({
                              url: e.api.tsddxq,
                              mask: "加载中",
                              data: { id: e.orderId },
                            })
                          );
                        case 2:
                          (n = t.sent),
                            (r = n.data),
                            r &&
                              ((e.info = r),
                              1 == r.state &&
                                1 == r.eatType &&
                                e.djs(r.createdAt),
                              (e.sjxx = r.storeSet));
                        case 5:
                        case "end":
                          return t.stop();
                      }
                    }
                  }, t);
                })
              )();
            },
            itemTotal: function itemTotal(e) {
              var t = +(
                (e.vipMoney > 0 && +e.vipMoney < +e.money && e.vipMoney) ||
                e.money
              );
              return +(t * e.num).toFixed(2);
            },
            getJldata: function getJldata(e) {
              if (e) {
                var t = "";
                return (
                  e.forEach(function (e) {
                    t += e.name + ",";
                  }),
                  t.substr(0, t.length - 1)
                );
              }
            },
            djs: function djs(e) {
              var t = this;
              if (
                1 == this.info.state &&
                1 == this.orderset.instore.autoClose
              ) {
                var n = this.dateToTime(),
                  r = +e + 60 * this.orderset.instore.closeTime + 2;
                r > n &&
                  ((this.stime = c.default.countDownTime(r - n)),
                  (this.dsq = setInterval(
                    (0, a.default)(
                      o.default.mark(function e() {
                        return o.default.wrap(function (e) {
                          while (1) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                (r -= 1),
                                  r == n && (clearInterval(t.dsq), t.qxdd()),
                                  (t.stime = c.default.countDownTime(r - n));
                              case 3:
                              case "end":
                                return e.stop();
                            }
                          }
                        }, e);
                      })
                    ),
                    1e3
                  )));
              }
            },
            qxdd: function qxdd(e) {
              var t = this;
              return (0, a.default)(
                o.default.mark(function n() {
                  var r;
                  return o.default.wrap(
                    function (n) {
                      while (1) {
                        switch ((n.prev = n.next)) {
                          case 0:
                            if (!e) {
                              n.next = 9;
                              break;
                            }
                            return (
                              (n.prev = 1),
                              (n.next = 4),
                              t.util.modal("您确认取消订单吗？")
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
                              t.util.request({
                                url: t.api.tsqxdd,
                                method: "POST",
                                mask: "取消订单中",
                                data: { orderId: t.info.id },
                              })
                            );
                          case 11:
                            (r = n.sent),
                              r &&
                                (setTimeout(function () {
                                  t.go({ t: 3, url: "/yb_wm/shop/in/indd" });
                                }, 1e3),
                                t.util.message("操作成功", 1));
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
            ckwz: function ckwz() {
              this.util.ckWz({
                lat: this.info.storeLat,
                lng: this.info.storeLng,
                name: this.info.storeName,
                address: this.info.storeAddress,
              });
            },
            tzdd: function tzdd() {
              this.go({
                t: getCurrentPages().length > 1 ? 4 : 1,
                url: "/yb_wm/shop/in/indd",
              });
            },
          }
        ),
        onUnload: function onUnload() {
          this.dsq && clearInterval(this.dsq);
        },
      };
      t.default = l;
    },
    "31f0": function f0(e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return r;
      }),
        n.d(t, "c", function () {
          return o;
        }),
        n.d(t, "a", function () {});
      var r = function r() {
          var e = this,
            t = e.$createElement,
            n =
              (e._self._c,
              e.info.id
                ? e.__map(e.info.goodsArr, function (t, n) {
                    var r = e.__get_orig(t),
                      o = e.info.goodsArr.length,
                      i = e.itemTotal(t);
                    return { $orig: r, g0: o, m0: i };
                  })
                : null),
            r = e.info.id
              ? e.__map(e.info.addGoods, function (t, n) {
                  var r = e.__get_orig(t),
                    o = t.length,
                    i = e.__map(t, function (t, n) {
                      var r = e.__get_orig(t),
                        o = e.itemTotal(t);
                      return { $orig: r, m1: o };
                    });
                  return { $orig: r, g1: o, l1: i };
                })
              : null,
            o =
              e.info.id && 1 == e.info.deliveryMode && 1 == e.info.appointment
                ? e.timeToDate(e.info.serviceTime)
                : null,
            i = e.info.id ? e.timeToDate(e.info.createdAt) : null,
            a =
              e.info.id && e.info.payMode && e.info.state >= 3
                ? e.payName(e.info.payMode)
                : null;
          e._isMounted ||
            ((e.e0 = function (t) {
              return e.util.makeTel(e.info.storeTel);
            }),
            (e.e1 = function (t) {
              return e.util.fz(e.info.outTradeNo);
            })),
            (e.$mp.data = Object.assign(
              {},
              { $root: { l0: n, l2: r, m2: o, m3: i, m4: a } }
            ));
        },
        o = [];
    },
    a71b: function a71b(e, t, n) {
      "use strict";
      n.r(t);
      var r = n("012b"),
        o = n.n(r);
      for (var i in r) {
        ["default"].indexOf(i) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return r[e];
            });
          })(i);
      }
      t["default"] = o.a;
    },
    ae53: function ae53(e, t, n) {
      "use strict";
      (function (e, t) {
        var r = n("4ea4");
        n("f00a");
        r(n("66fd"));
        var o = r(n("f9a1"));
        (e.__webpack_require_UNI_MP_PLUGIN__ = n), t(o.default);
      }).call(this, n("bc2e")["default"], n("543d")["createPage"]);
    },
    e523d: function e523d(e, t, n) {
      "use strict";
      var r = n("fd81"),
        o = n.n(r);
      o.a;
    },
    f9a1: function f9a1(e, t, n) {
      "use strict";
      n.r(t);
      var r = n("31f0"),
        o = n("a71b");
      for (var i in o) {
        ["default"].indexOf(i) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return o[e];
            });
          })(i);
      }
      n("e523d");
      var a = n("f0c5"),
        s = Object(a["a"])(
          o["default"],
          r["b"],
          r["c"],
          !1,
          null,
          "6d7c2db3",
          null,
          !1,
          r["a"],
          void 0
        );
      t["default"] = s.exports;
    },
    fd81: function fd81(e, t, n) {},
  },
  [["ae53", "common/runtime", "common/vendor"]],
]);
