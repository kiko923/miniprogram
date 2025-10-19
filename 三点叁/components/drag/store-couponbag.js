(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/drag/store-couponbag"],
  {
    "0c9d": function c9d(t, e, n) {
      "use strict";
      n.r(e);
      var r = n("c0e9"),
        o = n.n(r);
      for (var c in r) {
        ["default"].indexOf(c) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(c);
      }
      e["default"] = o.a;
    },
    "4be3": function be3(t, e, n) {
      "use strict";
      n.r(e);
      var r = n("97cf"),
        o = n("0c9d");
      for (var c in o) {
        ["default"].indexOf(c) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return o[t];
            });
          })(c);
      }
      n("c905");
      var a = n("f0c5"),
        u = Object(a["a"])(
          o["default"],
          r["b"],
          r["c"],
          !1,
          null,
          "70582dc3",
          null,
          !1,
          r["a"],
          void 0
        );
      e["default"] = u.exports;
    },
    "97cf": function cf(t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "c", function () {
          return o;
        }),
        n.d(e, "a", function () {});
      var r = function r() {
          var t = this,
            e = t.$createElement,
            n = (t._self._c, t.sjqb.length),
            r = n
              ? t.__map(t.sjqb, function (e, n) {
                  var r = t.__get_orig(e),
                    o = t.sjqb.length;
                  return { $orig: r, g1: o };
                })
              : null;
          t.$mp.data = Object.assign({}, { $root: { g0: n, l0: r } });
        },
        o = [];
    },
    c0e9: function c0e9(t, e, n) {
      "use strict";
      var r = n("4ea4");
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var o = r(n("2eee")),
        c = r(n("c973")),
        a =
          (n("26cb"),
          {
            name: "searchBox",
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
            },
            props: {
              co: {
                type: Object,
                default: function _default() {
                  return {
                    infoTitle: "",
                    isBottom: 0,
                    reverseTwo: 0,
                    topMargin: 0,
                  };
                },
              },
              storeInfo: {},
              u: { type: String, default: "px" },
              color: { type: String, default: "" },
            },
            data: function data() {
              return { list: [], sjqb: [] };
            },
            watch: {
              storeInfo: {
                handler: function handler(t) {
                  var e = this;
                  return (0, c.default)(
                    o.default.mark(function t() {
                      var n, r;
                      return o.default.wrap(function (t) {
                        while (1) {
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (!e.storeInfo.id) {
                                t.next = 6;
                                break;
                              }
                              return (
                                (t.next = 3),
                                e.util.request({
                                  url: e.api.qtsjjh,
                                  data: {
                                    location: 1,
                                    storeId: e.storeInfo.id,
                                  },
                                })
                              );
                            case 3:
                              (n = t.sent), (r = n.data), (e.sjqb = r.rollBag);
                            case 6:
                            case "end":
                              return t.stop();
                          }
                        }
                      }, t);
                    })
                  )();
                },
                immediate: !0,
              },
            },
            created: function created() {
              return (0, c.default)(
                o.default.mark(function t() {
                  return o.default.wrap(function (t) {
                    while (1) {
                      switch ((t.prev = t.next)) {
                        case 0:
                        case "end":
                          return t.stop();
                      }
                    }
                  }, t);
                })
              )();
            },
            methods: {
              onClick: function onClick() {
                this.$emit("click");
              },
            },
          });
      e.default = a;
    },
    c905: function c905(t, e, n) {
      "use strict";
      var r = n("f089"),
        o = n.n(r);
      o.a;
    },
    f089: function f089(t, e, n) {},
  },
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  "components/drag/store-couponbag-create-component",
  {
    "components/drag/store-couponbag-create-component":
      function componentsDragStoreCouponbagCreateComponent(
        module,
        exports,
        __webpack_require__
      ) {
        __webpack_require__("543d")["createComponent"](
          __webpack_require__("4be3")
        );
      },
  },
  [["components/drag/store-couponbag-create-component"]],
]);
