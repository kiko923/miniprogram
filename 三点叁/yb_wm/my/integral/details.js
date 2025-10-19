(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/my/integral/details"],
  {
    "0666": function _(e, t, n) {
      "use strict";
      var r = n("8c1f"),
        a = n.n(r);
      a.a;
    },
    "09f5": function f5(e, t, n) {
      "use strict";
      (function (e, t) {
        var r = n("4ea4");
        n("f00a");
        r(n("66fd"));
        var a = r(n("efde"));
        (e.__webpack_require_UNI_MP_PLUGIN__ = n), t(a.default);
      }).call(this, n("bc2e")["default"], n("543d")["createPage"]);
    },
    "14b3": function b3(e, t, n) {
      "use strict";
      (function (e) {
        var r = n("4ea4");
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var a = r(n("2eee")),
          o = r(n("c973")),
          i = (n("26cb"), r(n("8bb1"))),
          s = n("4789"),
          d = {
            name: "js-details",
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
              getAddress: function getAddress() {
                n.e("components/address/get-address")
                  .then(
                    function () {
                      return resolve(n("8a7f"));
                    }.bind(null, n)
                  )
                  .catch(n.oe);
              },
              getZtjf: function getZtjf() {
                n.e("components/address/get-ztjf")
                  .then(
                    function () {
                      return resolve(n("01dc"));
                    }.bind(null, n)
                  )
                  .catch(n.oe);
              },
              ziList: function ziList() {
                n.e("yb_wm/my/integral/zi-list")
                  .then(
                    function () {
                      return resolve(n("1318"));
                    }.bind(null, n)
                  )
                  .catch(n.oe);
              },
              numberBox: function numberBox() {
                n.e("components/form/number-box")
                  .then(
                    function () {
                      return resolve(n("83de"));
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
            },
            data: function data() {
              return {
                swiper: {
                  class: "",
                  padding: 0,
                  swiper: [{ icon: "" }],
                  duration: "",
                  mode: "",
                  height: "500",
                  radius: "0",
                  auto: !0,
                  interval: 5,
                },
                showLoading: !0,
                loading: !1,
                payObj: {},
                showTime: !1,
                wmAddress: "",
                ziAddress: "",
                params: {
                  selfId: "",
                  goodsId: "",
                  convertNum: "1",
                  deliveryMode: "",
                  userAddId: "",
                },
                dlDatl: "",
                config: "",
                ModeArr: [],
                showGg: !1,
                zitiList: {},
                maxNum: 1,
              };
            },
            onLoad: function onLoad(t) {
              var n = this;
              return (0, o.default)(
                a.default.mark(function r() {
                  var o;
                  return a.default.wrap(function (r) {
                    while (1) {
                      switch ((r.prev = r.next)) {
                        case 0:
                          (o = t.scene ? decodeURIComponent(t.scene) : t.id),
                            (n.id = o),
                            n.getSystem(),
                            n.util.setNT(n.jfName + "商城-商品详情"),
                            n.getData(),
                            e.$on("changeChoose", function (e) {
                              e.hasOwnProperty("addInfo") &&
                                n.refreshAddress(e.addInfo);
                            }),
                            console.log(
                              "%c options ",
                              "color: white; background-color: #2274A5",
                              t
                            );
                        case 7:
                        case "end":
                          return r.stop();
                      }
                    }
                  }, r);
                })
              )();
            },
            onUnload: function onUnload() {
              e.$off("changeChoose");
            },
            mixins: [s.utilMixins],
            computed: {
              jfName: function jfName() {
                return this.system.custom.integral;
              },
              xjMoney: function xjMoney() {
                if (this.dlDatl) {
                  var e,
                    t,
                    n = +this.params.convertNum,
                    r = +this.dlDatl.score,
                    a = +this.dlDatl.money,
                    o = +(
                      (1 == this.params.deliveryMode &&
                        1 == this.dlDatl.type &&
                        this.dlDatl.deliveryMoney) ||
                      0
                    );
                  return (
                    (e = +(n * a + o).toFixed(2)),
                    (t = n * r),
                    { total: e, totalScore: t }
                  );
                }
              },
            },
            methods: {
              getConfig: function getConfig() {
                var e = this;
                return (0, o.default)(
                  a.default.mark(function t() {
                    var n, r;
                    return a.default.wrap(function (t) {
                      while (1) {
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              e.util.request({
                                url: e.api.config,
                                data: { ident: "integral" },
                              })
                            );
                          case 2:
                            (n = t.sent), (r = n.data), (e.config = r);
                          case 5:
                          case "end":
                            return t.stop();
                        }
                      }
                    }, t);
                  })
                )();
              },
              getData: function getData() {
                var e = this;
                return (0, o.default)(
                  a.default.mark(function t() {
                    var n, r;
                    return a.default.wrap(function (t) {
                      while (1) {
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              e.util.request({
                                url: e.api.jfspxq,
                                mask: 1,
                                data: { id: e.id },
                              })
                            );
                          case 2:
                            return (
                              (n = t.sent),
                              (r = n.data),
                              (e.swiper.swiper[0].icon = r.icon),
                              (e.dlDatl = r),
                              (t.next = 8),
                              e.getLoginInfo()
                            );
                          case 8:
                            e.getziList(),
                              (e.maxNum = r.stock),
                              (e.params.goodsId = r.id),
                              r.deliveryMode.indexOf(1) > -1 &&
                                e.ModeArr.push({
                                  icon: "iconddys",
                                  name: "快递配送",
                                  value: "1",
                                }),
                              r.deliveryMode.indexOf(2) > -1 &&
                                e.ModeArr.push({
                                  icon: "iconshangjia",
                                  name: "到店自取",
                                  value: "2",
                                }),
                              1 == e.ModeArr.length &&
                              r.deliveryMode.indexOf(2) > -1
                                ? (e.params.deliveryMode = 2)
                                : (e.params.deliveryMode = 1),
                              (e.showLoading = !1);
                          case 15:
                          case "end":
                            return t.stop();
                        }
                      }
                    }, t);
                  })
                )();
              },
              getziList: function getziList() {
                var e = this;
                return (0, o.default)(
                  a.default.mark(function t() {
                    var n, r;
                    return a.default.wrap(function (t) {
                      while (1) {
                        switch ((t.prev = t.next)) {
                          case 0:
                            if ("1" != e.dlDatl.type) {
                              t.next = 10;
                              break;
                            }
                            return (
                              (t.next = 3),
                              e.util.request({ url: e.api.wdshdz })
                            );
                          case 3:
                            return (
                              (n = t.sent),
                              n.data.length > 0 && (e.wmAddress = n.data[0]),
                              (t.next = 7),
                              e.util.request({ url: e.api.jfscztlb })
                            );
                          case 7:
                            (r = t.sent),
                              (e.zitiList = r.data),
                              (e.ziAddress = r.data[0]);
                          case 10:
                          case "end":
                            return t.stop();
                        }
                      }
                    }, t);
                  })
                )();
              },
              refreshAddress: function refreshAddress(e) {
                this.wmAddress = e;
              },
              ztshow: function ztshow(e) {
                this.showGg = !0;
              },
              chooseAdd: function chooseAdd(e) {
                (this.ziAddress = e), console.log("chooseAdd", this.ziAddress);
              },
              clickMode: function clickMode(t) {
                this.util.showLoading("设置中..."),
                  (this.params.deliveryMode = t.value),
                  setTimeout(function () {
                    e.hideLoading();
                  }, 500),
                  console.log(t.name);
              },
              bindChange: function bindChange(e) {
                console.log("Changenum", e), (this.params.convertNum = e);
              },
              ljdh: function ljdh() {
                var e = this;
                return (0, o.default)(
                  a.default.mark(function t() {
                    return a.default.wrap(function (t) {
                      while (1) {
                        switch ((t.prev = t.next)) {
                          case 0:
                            e.showTime = !0;
                          case 1:
                          case "end":
                            return t.stop();
                        }
                      }
                    }, t);
                  })
                )();
              },
              qrdh: function qrdh() {
                var e = this;
                return (0, o.default)(
                  a.default.mark(function t() {
                    var n;
                    return a.default.wrap(function (t) {
                      while (1) {
                        switch ((t.prev = t.next)) {
                          case 0:
                            if ("2" != e.dlDatl.type) {
                              t.next = 5;
                              break;
                            }
                            (e.params.selfId = ""),
                              (e.params.userAddId = ""),
                              (t.next = 16);
                            break;
                          case 5:
                            if ("1" != e.params.deliveryMode) {
                              t.next = 12;
                              break;
                            }
                            if (e.wmAddress) {
                              t.next = 8;
                              break;
                            }
                            return t.abrupt(
                              "return",
                              e.util.message("请选择收货地址后下单", 3)
                            );
                          case 8:
                            (e.params.userAddId = e.wmAddress.id),
                              (e.params.selfId = ""),
                              (t.next = 16);
                            break;
                          case 12:
                            if (e.ziAddress) {
                              t.next = 14;
                              break;
                            }
                            return t.abrupt(
                              "return",
                              e.util.message("请选择自提地址后下单", 3)
                            );
                          case 14:
                            (e.params.userAddId = ""),
                              (e.params.selfId = e.ziAddress.id);
                          case 16:
                            return (
                              (e.loading = !0),
                              (t.next = 19),
                              e.util.request({
                                url: e.api.jfspxd,
                                method: "POST",
                                mask: "下单中",
                                data: e.params,
                              })
                            );
                          case 19:
                            (n = t.sent),
                              n
                                ? (e.util.message("提交成功", 1, 1e3),
                                  i.default.stfn(function () {
                                    e.xjMoney.total > 0
                                      ? e.go({
                                          t: 2,
                                          url:
                                            "/yb_wm/other/mg-pay?payObj=" +
                                            encodeURIComponent(
                                              JSON.stringify({
                                                orderId: n.data,
                                                orderType: 3,
                                                info: {
                                                  money: e.xjMoney.total,
                                                  type: "下单支付",
                                                  cancel: 1,
                                                  go: {
                                                    t: 2,
                                                    url: "/yb_wm/my/integral/integral-record",
                                                  },
                                                },
                                              })
                                            ),
                                        })
                                      : e.go({
                                          t: 2,
                                          url: "/yb_wm/my/integral/integral-record",
                                        });
                                  }))
                                : (e.loading = !1);
                          case 21:
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
        t.default = d;
      }).call(this, n("543d")["default"]);
    },
    2041: function _(e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return r;
      }),
        n.d(t, "c", function () {
          return a;
        }),
        n.d(t, "a", function () {});
      var r = function r() {
          var e = this.$createElement;
          this._self._c;
        },
        a = [];
    },
    "8c1f": function c1f(e, t, n) {},
    ad95: function ad95(e, t, n) {
      "use strict";
      n.r(t);
      var r = n("14b3"),
        a = n.n(r);
      for (var o in r) {
        ["default"].indexOf(o) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return r[e];
            });
          })(o);
      }
      t["default"] = a.a;
    },
    efde: function efde(e, t, n) {
      "use strict";
      n.r(t);
      var r = n("2041"),
        a = n("ad95");
      for (var o in a) {
        ["default"].indexOf(o) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return a[e];
            });
          })(o);
      }
      n("0666");
      var i = n("f0c5"),
        s = Object(i["a"])(
          a["default"],
          r["b"],
          r["c"],
          !1,
          null,
          "198e8b62",
          null,
          !1,
          r["a"],
          void 0
        );
      t["default"] = s.exports;
    },
  },
  [["09f5", "common/runtime", "common/vendor"]],
]);
