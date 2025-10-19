(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/shop/ffmode/order-dl"],
  {
    "0379": function _(e, t, n) {
      "use strict";
      var r = n("4ea4");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = r(n("2eee")),
        i = r(n("9523")),
        a = r(n("c973")),
        s = n("26cb"),
        c = n("4789"),
        u = r(n("8bb1"));
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
                        t.getSystem({ setNB: 1 }),
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
        mixins: [c.utilMixins],
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
                  (e = "订单待支付"), (t = "订单还未支付，请尽快支付哦！");
                  break;
                case 2:
                  (e = "订单待接单"), (t = "请耐心等待商家接单哦！");
                  break;
                case 3:
                  (e = "订单制作中"),
                    (t = "订单商家已接单，请耐心等待商家备餐哦！");
                  break;
                case 4:
                  (e = "订单已完成"),
                    (t = "感谢您对我们的信任，期待下次光临！");
                  break;
                case 5:
                  (e = "订单已关闭"),
                    (t = "订单因支付超时，已被系统自动关闭！");
                  break;
                case 6:
                  (e = "订单申请退款"),
                    (t = "订单申请退款中，请等待商家处理！");
                  break;
                case 7:
                  (e = "订单退款通过"),
                    (t = "您的订单退款申请已通过，支付金额已原路退还！");
                  break;
                case 8:
                  (e = "订单退款拒绝"), (t = "您的订单退款申请已被商家拒绝！");
                  break;
                case 9:
                  (e = "订单拒单"), (t = "您的订单已被商家拒单");
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
                              url: e.api.kcddxq,
                              mask: "加载中",
                              data: { id: e.orderId },
                            })
                          );
                        case 2:
                          (n = t.sent),
                            (r = n.data),
                            r &&
                              ((e.info = r),
                              1 == r.state && e.djs(r.createdAt));
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
                1 == this.orderset.instore.fastAutoClose
              ) {
                var n = this.dateToTime(),
                  r = +e + 60 * this.orderset.instore.fastCloseTime;
                console.log(r, n),
                  r > n &&
                    ((this.stime = u.default.countDownTime(r - n)),
                    (this.dsq = setInterval(
                      (0, a.default)(
                        o.default.mark(function e() {
                          return o.default.wrap(function (e) {
                            while (1) {
                              switch ((e.prev = e.next)) {
                                case 0:
                                  (r -= 1),
                                    r == n &&
                                      (clearInterval(t.dsq),
                                      t.util.message("加载中", 2),
                                      u.default.swnb(1e3)),
                                    (t.stime = u.default.countDownTime(r - n));
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
            bddh: function bddh(e) {
              this.util.makeTel(e.storeTel);
            },
            ckwz: function ckwz(e) {
              this.util.ckWz({
                lat: e.storeLat,
                lng: e.storeLng,
                name: e.storeName,
                address: e.storeAddress,
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
    "158b": function b(e, t, n) {
      "use strict";
      n.r(t);
      var r = n("0379"),
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
    "7ee2": function ee2(e, t, n) {
      "use strict";
      var r = n("d65d"),
        o = n.n(r);
      o.a;
    },
    a4b6: function a4b6(e, t, n) {
      "use strict";
      n.r(t);
      var r = n("fe91"),
        o = n("158b");
      for (var i in o) {
        ["default"].indexOf(i) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return o[e];
            });
          })(i);
      }
      n("7ee2");
      var a = n("f0c5"),
        s = Object(a["a"])(
          o["default"],
          r["b"],
          r["c"],
          !1,
          null,
          "4935406d",
          null,
          !1,
          r["a"],
          void 0
        );
      t["default"] = s.exports;
    },
    b9db: function b9db(e, t, n) {
      "use strict";
      (function (e, t) {
        var r = n("4ea4");
        n("f00a");
        r(n("66fd"));
        var o = r(n("a4b6"));
        (e.__webpack_require_UNI_MP_PLUGIN__ = n), t(o.default);
      }).call(this, n("bc2e")["default"], n("543d")["createPage"]);
    },
    d65d: function d65d(e, t, n) {},
    fe91: function fe91(e, t, n) {
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
            r = e.info.id ? e.timeToDate(e.info.createdAt) : null,
            o = e.info.id && e.info.payMode ? e.payName(e.info.payMode) : null;
          e._isMounted ||
            ((e.e0 = function (t) {
              return e.util.makeTel(e.info.storeTel);
            }),
            (e.e1 = function (t) {
              return e.util.fz(e.info.outTradeNo);
            })),
            (e.$mp.data = Object.assign(
              {},
              { $root: { l0: n, m1: r, m2: o } }
            ));
        },
        o = [];
    },
  },
  [["b9db", "common/runtime", "common/vendor"]],
]);
