(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/order/invitation/tx"],
  {
    "0af6": function af6(e, t, n) {
      "use strict";
      var a = n("4ea4");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = a(n("2eee")),
        s = a(n("c973")),
        i = (n("26cb"), a(n("8bb1"))),
        u = {
          name: "tx",
          components: {
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
            mgPopup: function mgPopup() {
              n.e("components/common/popup")
                .then(
                  function () {
                    return resolve(n("6b80"));
                  }.bind(null, n)
                )
                .catch(n.oe);
            },
            MgImg: function MgImg() {
              n.e("components/common/mg-img")
                .then(
                  function () {
                    return resolve(n("2dc2"));
                  }.bind(null, n)
                )
                .catch(n.oe);
            },
            mgInput: function mgInput() {
              n.e("components/form/mg-input")
                .then(
                  function () {
                    return resolve(n("5af8"));
                  }.bind(null, n)
                )
                .catch(n.oe);
            },
          },
          data: function data() {
            return {
              loading: !1,
              params: {
                money: "",
                wxUserName: "",
                aliUserName: "",
                aliAccount: "",
                bankName: "",
                bankUserName: "",
                bankAccount: "",
                type: "",
              },
              shareshow: !1,
              aIdx: 0,
              tabs: [],
              xtData: {},
              txName: "",
              txMoney: "",
            };
          },
          onLoad: function onLoad(e) {
            var t = this;
            this.getSystem(),
              this.util.setNT("提现"),
              e.t && ((this.params.item = e.t), console.log("options", e.t)),
              this.getLoginInfo().then(function () {
                t.getLdxTxConfig(),
                  "1" == t.params.item
                    ? (t.txMoney = t.user.bonus)
                    : "2" == t.params.item && (t.txMoney = t.user.commission);
              });
          },
          onShow: function onShow() {
            this.getLdxTxConfig();
          },
          computed: {},
          methods: {
            getLdxTxConfig: function getLdxTxConfig() {
              var e = this;
              return (0, s.default)(
                r.default.mark(function t() {
                  var n, a, s, i, u;
                  return r.default.wrap(function (t) {
                    while (1) {
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2),
                            e.util.request({
                              url: e.api.config,
                              data: {
                                ident:
                                  "1" == e.params.item
                                    ? "oldWithNewWithdrawalSet"
                                    : "distributionWithdrawalSet",
                              },
                            })
                          );
                        case 2:
                          if (
                            ((n = t.sent),
                            (a = n.data),
                            (e.xtData = a),
                            (s = []),
                            (i = e.xtData.channel),
                            i.includes("4") &&
                              s.push({ name: "余额", icn: "ye", type: "4" }),
                            i.includes("1") &&
                              s.push({ name: "微信", icn: "wx", type: "1" }),
                            i.includes("2") &&
                              s.push({ name: "支付宝", icn: "zfb", type: "2" }),
                            i.includes("3") &&
                              s.push({ name: "银行卡", icn: "yhk", type: "3" }),
                            (e.tabs = s),
                            e.tabs.length)
                          )
                            for (u in e.tabs) {
                              (e.params.type = e.tabs[0].type),
                                (e.txName = e.tabs[0].name);
                            }
                        case 12:
                        case "end":
                          return t.stop();
                      }
                    }
                  }, t);
                })
              )();
            },
            ljyq: function ljyq() {
              this.shareshow = !0;
            },
            changeTab: function changeTab(e, t) {
              (this.aIdx = e),
                (this.params.type = t.type),
                (this.txName = t.name),
                (this.shareshow = !1);
            },
            qbtx: function qbtx() {
              this.params.money = this.txMoney;
            },
            save: function save() {
              var e = this;
              return (0, s.default)(
                r.default.mark(function t() {
                  var n;
                  return r.default.wrap(function (t) {
                    while (1) {
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (e.params.type) {
                            t.next = 2;
                            break;
                          }
                          return t.abrupt(
                            "return",
                            e.util.message("请设置提现方式", 3)
                          );
                        case 2:
                          if (e.params.money) {
                            t.next = 4;
                            break;
                          }
                          return t.abrupt(
                            "return",
                            e.util.message("请输入提现金额", 3)
                          );
                        case 4:
                          if ("1" != e.params.type) {
                            t.next = 7;
                            break;
                          }
                          if (e.params.wxUserName) {
                            t.next = 7;
                            break;
                          }
                          return t.abrupt(
                            "return",
                            e.util.message("请输入真实姓名", 3)
                          );
                        case 7:
                          if ("2" != e.params.type) {
                            t.next = 12;
                            break;
                          }
                          if (e.params.aliUserName) {
                            t.next = 10;
                            break;
                          }
                          return t.abrupt(
                            "return",
                            e.util.message("请输入支付宝姓名", 3)
                          );
                        case 10:
                          if (e.params.aliAccount) {
                            t.next = 12;
                            break;
                          }
                          return t.abrupt(
                            "return",
                            e.util.message("请输入支付宝账号", 3)
                          );
                        case 12:
                          if ("3" != e.params.type) {
                            t.next = 19;
                            break;
                          }
                          if (e.params.bankName) {
                            t.next = 15;
                            break;
                          }
                          return t.abrupt(
                            "return",
                            e.util.message("请输入所属银行", 3)
                          );
                        case 15:
                          if (e.params.bankAccount) {
                            t.next = 17;
                            break;
                          }
                          return t.abrupt(
                            "return",
                            e.util.message("请输入银行卡号", 3)
                          );
                        case 17:
                          if (e.params.bankUserName) {
                            t.next = 19;
                            break;
                          }
                          return t.abrupt(
                            "return",
                            e.util.message("请输入户主姓名", 3)
                          );
                        case 19:
                          if (!(+e.params.money.trim() > +e.txMoney)) {
                            t.next = 21;
                            break;
                          }
                          return t.abrupt(
                            "return",
                            e.util.message("输入金额大于可提现金额", 3)
                          );
                        case 21:
                          if (!(+e.params.money.trim() < +e.xtData.downMoney)) {
                            t.next = 23;
                            break;
                          }
                          return t.abrupt(
                            "return",
                            e.util.message("金额需大于最低提现金额", 3)
                          );
                        case 23:
                          return (
                            (e.loading = !0),
                            (e.params.money = e.params.money.trim()),
                            (t.next = 27),
                            e.util.request({
                              url: e.api.memberBW,
                              method: "POST",
                              mask: 1,
                              data: e.params,
                            })
                          );
                        case 27:
                          (n = t.sent),
                            n
                              ? (e.util.message("提交成功", 1, 1e3),
                                i.default.stfn(function () {
                                  e.go({
                                    t: 1,
                                    url: "1" == e.params.item ? "yqyl" : "fxzx",
                                  });
                                }),
                                (e.loading = !1))
                              : (e.loading = !1);
                        case 29:
                        case "end":
                          return t.stop();
                      }
                    }
                  }, t);
                })
              )();
            },
          },
        };
      t.default = u;
    },
    "38e5": function e5(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("0af6"),
        r = n.n(a);
      for (var s in a) {
        ["default"].indexOf(s) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return a[e];
            });
          })(s);
      }
      t["default"] = r.a;
    },
    "91bd": function bd(e, t, n) {},
    a701: function a701(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("e05a"),
        r = n("38e5");
      for (var s in r) {
        ["default"].indexOf(s) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return r[e];
            });
          })(s);
      }
      n("e391");
      var i = n("f0c5"),
        u = Object(i["a"])(
          r["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "167d8bf1",
          null,
          !1,
          a["a"],
          void 0
        );
      t["default"] = u.exports;
    },
    bcb0: function bcb0(e, t, n) {
      "use strict";
      (function (e, t) {
        var a = n("4ea4");
        n("f00a");
        a(n("66fd"));
        var r = a(n("a701"));
        (e.__webpack_require_UNI_MP_PLUGIN__ = n), t(r.default);
      }).call(this, n("bc2e")["default"], n("543d")["createPage"]);
    },
    e05a: function e05a(e, t, n) {
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
            t = (this._self._c, this.xtData.open ? this.txMoney.length : null),
            n = this.tabs.length;
          this.$mp.data = Object.assign({}, { $root: { g0: t, g1: n } });
        },
        r = [];
    },
    e391: function e391(e, t, n) {
      "use strict";
      var a = n("91bd"),
        r = n.n(a);
      r.a;
    },
  },
  [["bcb0", "common/runtime", "common/vendor"]],
]);
