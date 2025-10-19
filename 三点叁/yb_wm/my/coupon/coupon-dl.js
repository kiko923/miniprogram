(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/my/coupon/coupon-dl"],
  {
    "16e1": function e1(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("3d5c"),
        o = n("8d53");
      for (var r in o) {
        ["default"].indexOf(r) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return o[e];
            });
          })(r);
      }
      n("b8bf");
      var i = n("f0c5"),
        c = Object(i["a"])(
          o["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "36c968a2",
          null,
          !1,
          a["a"],
          void 0
        );
      t["default"] = c.exports;
    },
    "1ce4": function ce4(e, t, n) {
      "use strict";
      (function (e, t) {
        var a = n("4ea4");
        n("f00a");
        a(n("66fd"));
        var o = a(n("16e1"));
        (e.__webpack_require_UNI_MP_PLUGIN__ = n), t(o.default);
      }).call(this, n("bc2e")["default"], n("543d")["createPage"]);
    },
    "3d5c": function d5c(e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return a;
      }),
        n.d(t, "c", function () {
          return o;
        }),
        n.d(t, "a", function () {});
      var a = function a() {
          var e = this,
            t = e.$createElement,
            n =
              (e._self._c,
              e.dataInfo.startTime ? e.timeToDate(e.dataInfo.startTime) : null),
            a = e.dataInfo.startTime ? e.timeToDate(e.dataInfo.endTime) : null;
          e._isMounted ||
            (e.e0 = function (t) {
              t.stopPropagation(), (e.active = !e.active);
            }),
            (e.$mp.data = Object.assign({}, { $root: { m0: n, m1: a } }));
        },
        o = [];
    },
    "3e29": function e29(e, t, n) {},
    "8d53": function d53(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("cb72"),
        o = n.n(a);
      for (var r in a) {
        ["default"].indexOf(r) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return a[e];
            });
          })(r);
      }
      t["default"] = o.a;
    },
    b8bf: function b8bf(e, t, n) {
      "use strict";
      var a = n("3e29"),
        o = n.n(a);
      o.a;
    },
    cb72: function cb72(e, t, n) {
      "use strict";
      var a = n("4ea4");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = a(n("2eee")),
        r = a(n("c973")),
        i = (n("26cb"), n("4789")),
        c = {
          name: "couponDl",
          components: {
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
          },
          data: function data() {
            return {
              dataInfo: {},
              query: {},
              active: !1,
              loading: !1,
              qcmsrc: "",
            };
          },
          onLoad: function onLoad(e) {
            var t = this;
            return (0, r.default)(
              o.default.mark(function n() {
                return o.default.wrap(function (n) {
                  while (1) {
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (t.query = e),
                          t.getSystem(),
                          t.util.setNT("优惠券详情"),
                          (n.next = 5),
                          t.getLoginInfo()
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
          mixins: [i.utilMixins],
          computed: {
            color: function color() {
              return this.dataInfo.color;
            },
            sycjName: function sycjName() {
              if (this.dataInfo.useType) {
                var e = this.dataInfo.useType,
                  t = [];
                return (
                  e.indexOf(1) > -1 && t.push("外卖可用"),
                  e.indexOf(2) > -1 && t.push("堂食可用"),
                  e.indexOf(3) > -1 && t.push("快餐可用"),
                  t.toString()
                );
              }
            },
            qlx: function qlx() {
              if (this.dataInfo.id) {
                var e = "";
                switch (+this.dataInfo.type) {
                  case 1:
                    e = "代金券";
                    break;
                  case 2:
                    e = "折扣券";
                    break;
                  case 3:
                    e = "商品兑换券";
                    break;
                }
                return e;
              }
            },
            anlx: function anlx() {
              if (this.dataInfo.id) {
                var e = "";
                switch (+this.dataInfo.useState) {
                  case 1:
                    e = "点击领取";
                    break;
                  case 2:
                    e = "点击使用";
                    break;
                  case 3:
                    e = "已使用";
                    break;
                  case 4:
                    e = "未到使用时间";
                    break;
                  case 5:
                    e = "已过期";
                    break;
                }
                return e;
              }
            },
          },
          methods: {
            getInfo: function getInfo() {
              var e = this;
              return (0, r.default)(
                o.default.mark(function t() {
                  var n, a;
                  return o.default.wrap(function (t) {
                    while (1) {
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2),
                            e.util.request({
                              url: e.api.yhqxq,
                              method: "POST",
                              mask: 1,
                              data: {
                                id: e.query.id || "",
                                receiveId: e.query.receiveId || "",
                              },
                            })
                          );
                        case 2:
                          (n = t.sent),
                            (a = n.data),
                            a.color || (a.color = "#EE472B"),
                            (e.dataInfo = a),
                            e.dataInfo.useState >= 2 &&
                              e.query.receiveId &&
                              "1" == e.dataInfo.isHx &&
                              e.getqcm(),
                            (e.loading = !1);
                        case 8:
                        case "end":
                          return t.stop();
                      }
                    }
                  }, t);
                })
              )();
            },
            ljsy: function ljsy() {
              var e = this;
              return (0, r.default)(
                o.default.mark(function t() {
                  var n, a;
                  return o.default.wrap(function (t) {
                    while (1) {
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (((n = e.dataInfo.useState), 1 != n)) {
                            t.next = 9;
                            break;
                          }
                          return (
                            (e.loading = !0),
                            (t.next = 5),
                            e.util.request({
                              url: e.api.lqyhq,
                              method: "POST",
                              mask: 1,
                              data: { couponId: e.dataInfo.id },
                            })
                          );
                        case 5:
                          (a = t.sent),
                            a
                              ? (e.util.message("领取成功", 1),
                                setTimeout(function () {
                                  e.getInfo();
                                }, 500))
                              : (e.loading = !1),
                            (t.next = 10);
                          break;
                        case 9:
                          2 == n && e.go({ t: 6, url: "/yb_wm/index/goods" });
                        case 10:
                        case "end":
                          return t.stop();
                      }
                    }
                  }, t);
                })
              )();
            },
            gosjDL: function gosjDL(e) {
              this.go({ t: 6, url: "/yb_wm/index/goods" });
            },
            getqcm: function getqcm() {
              var e = this;
              return (0, r.default)(
                o.default.mark(function t() {
                  var n, a;
                  return o.default.wrap(function (t) {
                    while (1) {
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2),
                            e.util.request({
                              url: e.api.mealCode,
                              mask: "加载中",
                              data: { id: e.query.receiveId },
                            })
                          );
                        case 2:
                          (n = t.sent), (a = n.data), (e.qcmsrc = a);
                        case 5:
                        case "end":
                          return t.stop();
                      }
                    }
                  }, t);
                })
              )();
            },
          },
          onShareAppMessage: function onShareAppMessage() {
            var e = "yb_wm/my/coupon/coupon-dl?id="
              .concat(this.dataInfo.id, "&receiveId=")
              .concat(this.query.receiveId || "");
            return this.util.mpShare({
              t: this.dataInfo.shareTitle,
              i: this.getImgS(this.dataInfo.shareImg),
              p: e,
            });
          },
          onShareTimeline: function onShareTimeline(e) {
            return {
              title: this.dataInfo.shareTitle,
              imageUrl: this.getImgS(this.dataInfo.shareImg),
            };
          },
        };
      t.default = c;
    },
  },
  [["1ce4", "common/runtime", "common/vendor"]],
]);
