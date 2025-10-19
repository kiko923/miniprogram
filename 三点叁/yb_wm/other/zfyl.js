(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/other/zfyl"],
  {
    "09dd": function dd(t, e, n) {
      "use strict";
      n.r(e);
      var r = n("9da1"),
        o = n("e881");
      for (var a in o) {
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return o[t];
            });
          })(a);
      }
      n("e13d");
      var c = n("f0c5"),
        u = Object(c["a"])(
          o["default"],
          r["b"],
          r["c"],
          !1,
          null,
          "ecd1b404",
          null,
          !1,
          r["a"],
          void 0
        );
      e["default"] = u.exports;
    },
    "9da1": function da1(t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "c", function () {
          return o;
        }),
        n.d(e, "a", function () {});
      var r = function r() {
          var t = this.$createElement;
          this._self._c;
        },
        o = [];
    },
    a3b1: function a3b1(t, e, n) {},
    e13d: function e13d(t, e, n) {
      "use strict";
      var r = n("a3b1"),
        o = n.n(r);
      o.a;
    },
    e881: function e881(t, e, n) {
      "use strict";
      n.r(e);
      var r = n("f321"),
        o = n.n(r);
      for (var a in r) {
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(a);
      }
      e["default"] = o.a;
    },
    f321: function f321(t, e, n) {
      "use strict";
      var r = n("4ea4");
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var o = r(n("2eee")),
        a = r(n("c973")),
        c = (n("26cb"), r(n("8bb1"))),
        u = getApp().globalData,
        i = {
          name: "rwzx",
          components: {
            productGroup: function productGroup() {
              n.e("components/drag/product")
                .then(
                  function () {
                    return resolve(n("3b24"));
                  }.bind(null, n)
                )
                .catch(n.oe);
            },
          },
          data: function data() {
            return { shopinfo: {}, ylInfo: {} };
          },
          onLoad: function onLoad(t) {
            this.getSystem({ setNB: 1 }),
              this.util.setNT(""),
              (this.payObj = JSON.parse(decodeURIComponent(t.payObj)) || {
                orderId: 61,
                orderType: 1,
                info: {
                  money: 0.01,
                  storeName: "楚河11汉街店",
                  type: "下单支付",
                  cancel: 1,
                  go: { t: 4 },
                },
              }),
              this.getData();
          },
          computed: {
            jfName: function jfName() {
              return this.system.custom.integral;
            },
            balanceName: function balanceName() {
              return this.system.custom.balance;
            },
            pgco: function pgco() {
              return {
                circle: "8",
                colorBg: "rgba(0,0,0,0)",
                colorBtn: this.tColor,
                colorProductBg: "#fff",
                colorTitle: "#212121",
                img: "https://bkycms.com/addons/yb_wm/web/static/yb_wm/36/2020/09/24/202009241022175541.png",
                marginBottom: "0",
                marginLR: "0",
                marginLeft: "0",
                marginRight: "0",
                marginTop: "0",
                productMarket: "3",
                productNum: "4",
                type: "1",
                typeBg: "1",
                typeBtn: "3",
                typePay: "4",
                typeProduct: "3",
                typeText: "推荐",
              };
            },
          },
          methods: {
            getData: function getData() {
              var t = this;
              return (0, a.default)(
                o.default.mark(function e() {
                  var n, r;
                  return o.default.wrap(function (e) {
                    while (1) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            t.util.request({
                              url: t.api.zfyl,
                              data: {
                                id: t.payObj.orderId,
                                orderType: t.payObj.orderType,
                              },
                            })
                          );
                        case 2:
                          (n = e.sent),
                            (r = n.data),
                            (t.ylInfo = r),
                            (t.shopinfo = { id: r.storeId });
                        case 6:
                        case "end":
                          return e.stop();
                      }
                    }
                  }, e);
                })
              )();
            },
            ckdd: c.default.throttle(function (t) {
              if (4 == this.payObj.info.go.t) {
                var e = this.util.getPage();
                e.$vm.paySuccess && e.$vm.paySuccess();
              }
              5 == this.payObj.orderType
                ? (u.ddquery = { nt: 1, t: 2 })
                : 6 == this.payObj.orderType
                ? (u.ddquery = { nt: 1, t: 4 })
                : 9 == this.payObj.orderType && (u.ddquery = { nt: 1, t: 3 }),
                this.go(this.payObj.info.go);
            }, 1e3),
          },
        };
      e.default = i;
    },
    ffd0: function ffd0(t, e, n) {
      "use strict";
      (function (t, e) {
        var r = n("4ea4");
        n("f00a");
        r(n("66fd"));
        var o = r(n("09dd"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = n), e(o.default);
      }).call(this, n("bc2e")["default"], n("543d")["createPage"]);
    },
  },
  [["ffd0", "common/runtime", "common/vendor"]],
]);
