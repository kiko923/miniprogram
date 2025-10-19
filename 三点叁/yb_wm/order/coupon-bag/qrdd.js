(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/order/coupon-bag/qrdd"],
  {
    "1ff1": function ff1(t, n, e) {
      "use strict";
      (function (t) {
        var a = e("4ea4");
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.default = void 0);
        var o = a(e("2eee")),
          r = a(e("c973")),
          c =
            (e("26cb"),
            {
              name: "order-index",
              components: {
                numberBox: function numberBox() {
                  e.e("components/form/number-box")
                    .then(
                      function () {
                        return resolve(e("83de"));
                      }.bind(null, e)
                    )
                    .catch(e.oe);
                },
              },
              data: function data() {
                return {
                  co: {},
                  params: { rollBagId: "", num: 1 },
                  loading: !1,
                };
              },
              onLoad: function onLoad(n) {
                this.getSystem(),
                  this.util.setNT("确认订单"),
                  (this.params.rollBagId = t.getStorageSync("bdhc").id),
                  (this.co = t.getStorageSync("bdhc"));
              },
              computed: {
                maxNum: function maxNum() {
                  if (this.co.id) {
                    var t = this.co,
                      n = t.stock - t.salesNum <= 0 ? 1 : t.stock - t.salesNum,
                      e = 1 != t.isLimit ? +t.dayNum : n;
                    return e > n ? n : e;
                  }
                },
                hjje: function hjje() {
                  return +(this.co.money * this.params.num).toFixed(2);
                },
              },
              methods: {
                bindChange: function bindChange(t) {
                  this.params.num = t;
                },
                tjdd: function tjdd() {
                  var t = this;
                  return (0, r.default)(
                    o.default.mark(function n() {
                      var e;
                      return o.default.wrap(function (n) {
                        while (1) {
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (
                                (t.loading = !0),
                                (n.next = 3),
                                t.util.request({
                                  url: t.api.qbxd,
                                  method: "POST",
                                  mask: "下单中",
                                  data: t.params,
                                })
                              );
                            case 3:
                              (e = n.sent),
                                e
                                  ? t.go({
                                      t: 2,
                                      url:
                                        "/yb_wm/other/mg-pay?payObj=" +
                                        encodeURIComponent(
                                          JSON.stringify({
                                            orderId: e.data,
                                            orderType: 4,
                                            info: {
                                              money: t.hjje,
                                              type: "购买券包",
                                              cancel: 1,
                                              go: {
                                                t: 6,
                                                url: "/yb_wm/index/goods",
                                              },
                                            },
                                          })
                                        ),
                                    })
                                  : (t.loading = !1);
                            case 5:
                            case "end":
                              return n.stop();
                          }
                        }
                      }, n);
                    })
                  )();
                },
              },
            });
        n.default = c;
      }).call(this, e("543d")["default"]);
    },
    "251c": function c(t, n, e) {},
    8026: function _(t, n, e) {
      "use strict";
      var a = e("251c"),
        o = e.n(a);
      o.a;
    },
    b01c: function b01c(t, n, e) {
      "use strict";
      e.r(n);
      var a = e("d5aa"),
        o = e("ff2d");
      for (var r in o) {
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return o[t];
            });
          })(r);
      }
      e("8026");
      var c = e("f0c5"),
        u = Object(c["a"])(
          o["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "60a84c42",
          null,
          !1,
          a["a"],
          void 0
        );
      n["default"] = u.exports;
    },
    c0b5: function c0b5(t, n, e) {
      "use strict";
      (function (t, n) {
        var a = e("4ea4");
        e("f00a");
        a(e("66fd"));
        var o = a(e("b01c"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = e), n(o.default);
      }).call(this, e("bc2e")["default"], e("543d")["createPage"]);
    },
    d5aa: function d5aa(t, n, e) {
      "use strict";
      e.d(n, "b", function () {
        return a;
      }),
        e.d(n, "c", function () {
          return o;
        }),
        e.d(n, "a", function () {});
      var a = function a() {
          var t = this.$createElement;
          this._self._c;
        },
        o = [];
    },
    ff2d: function ff2d(t, n, e) {
      "use strict";
      e.r(n);
      var a = e("1ff1"),
        o = e.n(a);
      for (var r in a) {
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return a[t];
            });
          })(r);
      }
      n["default"] = o.a;
    },
  },
  [["c0b5", "common/runtime", "common/vendor"]],
]);
