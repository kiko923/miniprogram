(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/other/mg-pay", "components/common/mg-cell"],
  {
    "0555": function _(e, t, n) {
      "use strict";
      (function (e, a) {
        var r = n("4ea4");
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var i = r(n("2eee")),
          o = r(n("9523")),
          c = r(n("c973")),
          u = n("26cb"),
          s = (r(n("f3fc")), r(n("8bb1"))),
          f = n("4789");
        n("6326");
        function l(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            t &&
              (a = a.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, a);
          }
          return n;
        }
        function p(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? l(Object(n), !0).forEach(function (t) {
                  (0, o.default)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : l(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        var d = {
          name: "mg-pay",
          components: {
            mgPopup: function mgPopup() {
              n.e("components/common/popup")
                .then(
                  function () {
                    return resolve(n("6b80"));
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
          },
          data: function data() {
            return {
              loading: !1,
              payObj: {},
              payArr: [],
              showCoupon: !1,
              stime: "",
              info: null,
              radioVal: "",
              xzcolor: "",
              xzzfimg: "",
              yeczrule: [],
            };
          },
          onLoad: function onLoad(t) {
            var n = this;
            return (0, c.default)(
              i.default.mark(function a() {
                var r, o;
                return i.default.wrap(function (a) {
                  while (1) {
                    switch ((a.prev = a.next)) {
                      case 0:
                        if (
                          (n.util.setNT("收银台"),
                          (n.payObj = JSON.parse(decodeURIComponent(t.payObj))),
                          n
                            .getConfig({
                              key: "payConfig",
                              api: "config",
                              params: { ident: "payConfig" },
                            })
                            .then(function (e) {
                              n.getPayArr();
                            }),
                          n.getConfig({
                            key: "miniConfig",
                            api: "config",
                            params: { ident: "miniConfig" },
                          }),
                          1 != n.payObj.orderType)
                        ) {
                          a.next = 10;
                          break;
                        }
                        return (
                          (a.next = 7),
                          n.util.request({
                            url: n.api.wmddxq,
                            mask: 1,
                            data: { orderId: n.payObj.orderId },
                          })
                        );
                      case 7:
                        (r = a.sent),
                          (o = r.data),
                          o &&
                            1 == o.state &&
                            ((n.info = o), n.djs(o.createdAt));
                      case 10:
                        e.getProvider({
                          service: "payment",
                          success: function success(e) {
                            e.provider.indexOf("wxpay")
                              ? (n.provider = "wxpay")
                              : e.provider.indexOf("alipay")
                              ? (n.provider = "alipay")
                              : e.provider.indexOf("baidu")
                              ? (n.provider = "baidu")
                              : e.provider.indexOf("toutiao") &&
                                (n.provider = "toutiao");
                          },
                        }),
                          e.setStorageSync("payPage", !0),
                          e.setStorageSync("payedCoupon", !1);
                      case 13:
                      case "end":
                        return a.stop();
                    }
                  }
                }, a);
              })
            )();
          },
          onShow: function onShow() {
            this.refreshUser({ get: 1, now: 1 });
          },
          onUnload: function onUnload() {
            var t = this;
            setTimeout(function () {
              e.removeStorageSync("payPage"), t.dsq && clearInterval(t.dsq);
            }, 1e3);
          },
          mixins: [f.utilMixins],
          computed: p(
            p(
              {},
              (0, u.mapState)({
                payConfig: function payConfig(e) {
                  return e.config.payConfig;
                },
                orderset: function orderset(e) {
                  return e.config.orderset;
                },
                miniConfig: function miniConfig(e) {
                  return e.config.miniConfig;
                },
              })
            ),
            {},
            {
              pmoney: function pmoney() {
                return Number(
                  (this.payObj.info && this.payObj.info.money) || 0
                ).toFixed(2);
              },
              jfName: function jfName() {
                return this.system.custom.integral;
              },
              balanceName: function balanceName() {
                return this.system.custom.balance;
              },
            }
          ),
          methods: p(
            p({}, (0, u.mapActions)(["getConfig"])),
            {},
            {
              radioChange: function radioChange(e) {
                this.radioVal = e.detail.value;
                var t = this.payArr.find(function (t) {
                  return t.value == e.detail.value;
                });
                this.util.setNB(t.color),
                  (this.xzcolor = t.color),
                  (this.xzzfimg = t.img2);
              },
              getPayArr: function getPayArr() {
                var e = [];
                if (
                  ((1 == this.payConfig.payOpen &&
                    "mini" == this.api.platform) ||
                  "weChat" == this.api.platform ||
                  (2 == this.payObj.orderType && "mini" == this.api.platform) ||
                  "weChat" == this.api.platform
                    ? e.push({
                        name: "微信支付",
                        value: "wx",
                        img: "/static/pay/wxzf.png",
                        img2: "wxb",
                        color: "#65B05B",
                        text: "更方便，更快捷",
                      })
                    : "ali" == this.api.platform
                    ? e.push({
                        name: "支付宝支付",
                        value: "zfb",
                        img: "/static/pay/zfbzf.png",
                        img2: "ylbg",
                        color: "#1890ff",
                        text: "更方便，更快捷",
                      })
                    : "baidu" == this.api.platform
                    ? e.push({
                        name: "百度支付",
                        value: "baidu",
                        img: "/static/pay/bdzf.png",
                      })
                    : "toutiao" == this.api.platform &&
                      e.push({
                        name: "头条支付",
                        value: "toutiao",
                        color: "#37BECC",
                        img: "/static/pay/ttzf.png",
                        text: "更方便，更快捷",
                      }),
                  1 == this.payConfig.balancePayOpen)
                )
                  switch (+this.payObj.orderType) {
                    case 2:
                      break;
                    default:
                      e.push({
                        name: this.balanceName + "支付",
                        value: "ye",
                        img: "/static/pay/yezf.png",
                        img2: "yeb",
                        color: this.tColor,
                        text: this.balanceName + "支付，充值有优惠",
                      });
                      break;
                  }
                if (
                  1 == this.payObj.orderType &&
                  1 == this.payConfig.payMentOpen
                )
                  switch (+this.payObj.orderType) {
                    case 2:
                      break;
                    default:
                      e.push({
                        name: "好友代付",
                        value: "df",
                        img: "/static/pay/zrdf.png",
                        img2: "yeb",
                        color: "#2D8CF0",
                        text: "一键代付，方便快捷",
                      });
                      break;
                  }
                if (
                  1 == this.payObj.orderType &&
                  1 == this.payConfig.deliveryOpen
                )
                  switch (+this.payObj.orderType) {
                    case 2:
                      break;
                    default:
                      e.push({
                        name: "货到付款",
                        value: "hdfk",
                        img: "/static/pay/hdfk.png",
                        img2: "yeb",
                        color: "#FF972E",
                        text: "货到付款，方便快捷",
                      });
                      break;
                  }
                (this.payArr = e),
                  this.radioChange({ detail: { value: e[0].value } }),
                  e.find(function (e) {
                    return "ye" == e.value;
                  }) && this.rechargeRule();
              },
              rechargeRule: function rechargeRule() {
                var e = this;
                return (0, c.default)(
                  i.default.mark(function t() {
                    var n, a;
                    return i.default.wrap(function (t) {
                      while (1) {
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2), e.util.request({ url: e.api.czgz })
                            );
                          case 2:
                            (n = t.sent),
                              (a = n.data),
                              (e.yeczrule = a.list || []);
                          case 5:
                          case "end":
                            return t.stop();
                        }
                      }
                    }, t);
                  })
                )();
              },
              djs: function djs(e) {
                var t = this,
                  n = this.dateToTime(),
                  a = +e + 60 * this.orderset.closeTime;
                a > n &&
                  ((this.stime = s.default.countDownTime(a - n)),
                  (this.dsq = setInterval(
                    (0, c.default)(
                      i.default.mark(function e() {
                        return i.default.wrap(function (e) {
                          while (1) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                (a -= 1),
                                  a == n &&
                                    (clearInterval(t.dsq), t.go({ t: 4 })),
                                  (t.stime = s.default.countDownTime(a - n));
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
              },
              setzfcg: function setzfcg() {
                e.setStorageSync("payedCoupon", {
                  orderId: this.payObj.orderId,
                  paymoney: this.pmoney,
                });
              },
              formSubmit: function formSubmit(t) {
                var n = this;
                return (0, c.default)(
                  i.default.mark(function r() {
                    var o, c;
                    return i.default.wrap(
                      function (r) {
                        while (1) {
                          switch ((r.prev = r.next)) {
                            case 0:
                              if (
                                ((o = s.default.deepCopy(n.payObj)),
                                "ye" != t.detail.value.radiogroup)
                              ) {
                                r.next = 5;
                                break;
                              }
                              if (
                                ((o.payType = 1),
                                !(+n.pmoney > +n.user.balance))
                              ) {
                                r.next = 5;
                                break;
                              }
                              return r.abrupt(
                                "return",
                                n.util.message(
                                  "您的" + n.balanceName + "不足支付",
                                  3
                                )
                              );
                            case 5:
                              if (1 != n.payObj.orderType) {
                                r.next = 17;
                                break;
                              }
                              if (n.jjmbxx) {
                                r.next = 17;
                                break;
                              }
                              return (
                                (r.prev = 7),
                                (r.next = 10),
                                n.requestSM("payOrder")
                              );
                            case 10:
                              r.next = 17;
                              break;
                            case 12:
                              return (
                                (r.prev = 12),
                                (r.t0 = r["catch"](7)),
                                (n.jjmbxx = !0),
                                (n.loading = !1),
                                r.abrupt("return")
                              );
                            case 17:
                              if (
                                1 != n.payObj.orderType ||
                                "df" != t.detail.value.radiogroup
                              ) {
                                r.next = 21;
                                break;
                              }
                              return (
                                (o.payType = 1),
                                n.go({
                                  t: 1,
                                  url: "/yb_wm/other/fqdf?orderId=".concat(
                                    n.payObj.orderId
                                  ),
                                }),
                                r.abrupt("return")
                              );
                            case 21:
                              return (
                                (n.loading = !0),
                                1 == n.payObj.orderType &&
                                  "hdfk" == t.detail.value.radiogroup &&
                                  (o.payType = 2),
                                (r.next = 25),
                                n.util.request({
                                  url: n.api.pay,
                                  method: "POST",
                                  mask: 1,
                                  data: o,
                                })
                              );
                            case 25:
                              if (((c = r.sent), !c)) {
                                r.next = 39;
                                break;
                              }
                              if (
                                "ye" == t.detail.value.radiogroup ||
                                "hdfk" == t.detail.value.radiogroup
                              ) {
                                r.next = 35;
                                break;
                              }
                              if (
                                !n.miniConfig ||
                                !n.miniConfig.miniPayType ||
                                2 != n.miniConfig.miniPayType
                              ) {
                                r.next = 32;
                                break;
                              }
                              return (
                                console.log("支付管理"),
                                a.requestOrderPayment({
                                  timeStamp: c.data.timeStamp,
                                  nonceStr: c.data.nonceStr,
                                  package: c.data.package,
                                  signType: c.data.signType,
                                  paySign: c.data.paySign,
                                  success: function success(e) {
                                    n.setzfcg(),
                                      n.go({
                                        t: 2,
                                        url:
                                          "zfyl?payObj=" +
                                          encodeURIComponent(JSON.stringify(o)),
                                      });
                                  },
                                  fail: function fail(t) {
                                    if (
                                      (console.log("fail:" + JSON.stringify(t)),
                                      "requestPayment:fail cancel" == t.errMsg)
                                    ) {
                                      if (
                                        (n.util.message("取消支付", 2),
                                        o.info.cancel)
                                      )
                                        return (n.loading = !1);
                                      setTimeout(function () {
                                        n.go(o.info.go);
                                      }, 1e3);
                                    } else
                                      e.showModal({
                                        title: "提示",
                                        content: t.errMsg + t.err_desc,
                                        showCancel: !1,
                                      }),
                                        (n.loading = !1);
                                  },
                                }),
                                r.abrupt("return")
                              );
                            case 32:
                              e.requestPayment({
                                provider: n.provider,
                                timeStamp: c.data.timeStamp,
                                nonceStr: c.data.nonceStr,
                                package: c.data.package,
                                signType: c.data.signType,
                                paySign: c.data.paySign,
                                success: function success(e) {
                                  n.setzfcg(),
                                    n.go({
                                      t: 2,
                                      url:
                                        "zfyl?payObj=" +
                                        encodeURIComponent(JSON.stringify(o)),
                                    });
                                },
                                fail: function fail(t) {
                                  if (
                                    (console.log("fail:" + JSON.stringify(t)),
                                    "requestPayment:fail cancel" == t.errMsg)
                                  ) {
                                    if (
                                      (n.util.message("取消支付", 2),
                                      o.info.cancel)
                                    )
                                      return (n.loading = !1);
                                    setTimeout(function () {
                                      n.go(o.info.go);
                                    }, 1e3);
                                  } else
                                    e.showModal({
                                      title: "提示",
                                      content: t.errMsg + t.err_desc,
                                      showCancel: !1,
                                    }),
                                      (n.loading = !1);
                                },
                                complete: function complete(e) {
                                  console.log("paymentcomplete", e);
                                },
                              }),
                                (r.next = 37);
                              break;
                            case 35:
                              n.setzfcg(),
                                n.go({
                                  t: 2,
                                  url:
                                    "zfyl?payObj=" +
                                    encodeURIComponent(JSON.stringify(o)),
                                });
                            case 37:
                              r.next = 40;
                              break;
                            case 39:
                              n.loading = !1;
                            case 40:
                              console.log("formSubmit payres", c);
                            case 41:
                            case "end":
                              return r.stop();
                          }
                        }
                      },
                      r,
                      null,
                      [[7, 12]]
                    );
                  })
                )();
              },
            }
          ),
        };
        t.default = d;
      }).call(this, n("543d")["default"], n("bc2e")["default"]);
    },
    2196: function _(e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return a;
      }),
        n.d(t, "c", function () {
          return r;
        }),
        n.d(t, "a", function () {});
      var a = function a() {
          var e = this.$createElement,
            t =
              (this._self._c,
              this.__get_style([{ background: this.bgc }, this.sname]));
          this.$mp.data = Object.assign({}, { $root: { s0: t } });
        },
        r = [];
    },
    "2d92": function d92(e, t, n) {
      "use strict";
      (function (e, t) {
        var a = n("4ea4");
        n("f00a");
        a(n("66fd"));
        var r = a(n("e4ad"));
        (e.__webpack_require_UNI_MP_PLUGIN__ = n), t(r.default);
      }).call(this, n("bc2e")["default"], n("543d")["createPage"]);
    },
    "346b": function b(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var a = {
        name: "mg-cell",
        props: {
          bgc: { type: String, default: "" },
          htc: "",
          last: "",
          cname: "",
          noc: "",
          sname: "",
          isl: "",
          isr: "",
          iconn: "",
          ht: "",
          hdc: "",
          hw: "",
          img: "",
          m: { type: String, default: "aspectFill" },
          w: "",
          h: "",
          brs: "",
          imgr: "",
          bdmw: { type: String, default: "0" },
          btt: "",
          bttc: "",
          bbt: "",
          ft: "",
          ftc: "",
          color: "",
          arrow: "",
          ac: "",
          asize: "",
          acolor: "",
          hc: { type: String, value: "" },
        },
        data: function data() {
          return {};
        },
        computed: {},
        methods: {
          maskTap: function maskTap() {
            this.$emit("input", !1);
          },
        },
      };
      t.default = a;
    },
    "50d7": function d7(e, t, n) {},
    "6f1a": function f1a(e, t, n) {
      "use strict";
      var a = n("50d7"),
        r = n.n(a);
      r.a;
    },
    9530: function _(e, t, n) {},
    baca: function baca(e, t, n) {
      "use strict";
      var a = n("9530"),
        r = n.n(a);
      r.a;
    },
    bf51: function bf51(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("0555"),
        r = n.n(a);
      for (var i in a) {
        ["default"].indexOf(i) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return a[e];
            });
          })(i);
      }
      t["default"] = r.a;
    },
    d82f: function d82f(e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return a;
      }),
        n.d(t, "c", function () {
          return r;
        }),
        n.d(t, "a", function () {});
      var a = function a() {
          var e = this,
            t = e.$createElement,
            n =
              (e._self._c,
              e.__map(e.payArr, function (t, n) {
                var a = e.__get_orig(t),
                  r =
                    "ye" == t.value
                      ? e.__map(e.yeczrule, function (t, n) {
                          var a = e.__get_orig(t),
                            r =
                              n < 2 && 1 == t.couponOpen
                                ? t.couponArr.length
                                : null;
                          return { $orig: a, g0: r };
                        })
                      : null,
                  i = "ye" == t.value ? e.yeczrule.length : null;
                return { $orig: a, l0: r, g1: i };
              })),
            a = e.payArr.length;
          e.$mp.data = Object.assign({}, { $root: { l1: n, g2: a } });
        },
        r = [];
    },
    e4ad: function e4ad(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("d82f"),
        r = n("bf51");
      for (var i in r) {
        ["default"].indexOf(i) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return r[e];
            });
          })(i);
      }
      n("6f1a");
      var o = n("f0c5"),
        c = Object(o["a"])(
          r["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "2f5ab8d8",
          null,
          !1,
          a["a"],
          void 0
        );
      t["default"] = c.exports;
    },
    ef8f: function ef8f(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("346b"),
        r = n.n(a);
      for (var i in a) {
        ["default"].indexOf(i) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return a[e];
            });
          })(i);
      }
      t["default"] = r.a;
    },
    f3fc: function f3fc(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("2196"),
        r = n("ef8f");
      for (var i in r) {
        ["default"].indexOf(i) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return r[e];
            });
          })(i);
      }
      n("baca");
      var o = n("f0c5"),
        c = Object(o["a"])(
          r["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "321ac44c",
          null,
          !1,
          a["a"],
          void 0
        );
      t["default"] = c.exports;
    },
  },
  [["2d92", "common/runtime", "common/vendor"]],
]);
