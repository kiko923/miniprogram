(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/drag/product"],
  {
    "3a94": function a94(t, e, o) {
      "use strict";
      o.r(e);
      var n = o("b55e"),
        r = o.n(n);
      for (var c in n) {
        ["default"].indexOf(c) < 0 &&
          (function (t) {
            o.d(e, t, function () {
              return n[t];
            });
          })(c);
      }
      e["default"] = r.a;
    },
    "3b24": function b24(t, e, o) {
      "use strict";
      o.r(e);
      var n = o("fe02"),
        r = o("3a94");
      for (var c in r) {
        ["default"].indexOf(c) < 0 &&
          (function (t) {
            o.d(e, t, function () {
              return r[t];
            });
          })(c);
      }
      o("f360");
      var i = o("f0c5"),
        u = Object(i["a"])(
          r["default"],
          n["b"],
          n["c"],
          !1,
          null,
          "9e06b9cc",
          null,
          !1,
          n["a"],
          void 0
        );
      e["default"] = u.exports;
    },
    "68aa": function aa(t, e, o) {},
    b55e: function b55e(t, e, o) {
      "use strict";
      var n = o("4ea4");
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var r = n(o("2eee")),
        c = n(o("9523")),
        i = n(o("c973"));
      o("26cb");
      function u(t, e) {
        var o = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            o.push.apply(o, n);
        }
        return o;
      }
      function a(t) {
        for (var e = 1; e < arguments.length; e++) {
          var o = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? u(Object(o), !0).forEach(function (e) {
                (0, c.default)(t, e, o[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
            : u(Object(o)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(o, e)
                );
              });
        }
        return t;
      }
      var s = {
        name: "product",
        components: {
          jzz: function jzz() {
            o.e("components/common/jzz")
              .then(
                function () {
                  return resolve(o("3db1"));
                }.bind(null, o)
              )
              .catch(o.oe);
          },
        },
        props: {
          type: { type: String, default: "1" },
          co: {
            type: Object,
            default: function _default() {
              return {};
            },
          },
          u: { type: String, default: "px" },
          shopinfo: Object,
        },
        data: function data() {
          return { list: [], isget: !1 };
        },
        watch: {
          shopinfo: {
            handler: function handler(t) {
              if (t.id)
                if (
                  1 == this.co.typeProduct &&
                  this.co.productName &&
                  this.co.productName.length
                ) {
                  var e = this.co.productName
                    .map(function (t) {
                      return t.name.id;
                    })
                    .toString();
                  this.getData({ type: 1, ids: e }), console.log("商品组", e);
                } else
                  2 == this.co.typeProduct &&
                  this.co.productGroup &&
                  this.co.productGroup.length
                    ? this.co.productGroup[0].name.pid > 0
                      ? (this.getData({
                          type: 2,
                          pid: this.co.productGroup[0].name.pid,
                          id: this.co.productGroup[0].name.id,
                          num: this.co.productNum,
                        }),
                        console.log("商品组2级分类"))
                      : (this.getData({
                          type: 2,
                          pid: this.co.productGroup[0].name.id,
                          num: this.co.productNum,
                        }),
                        console.log("商品组1级分类"))
                    : 3 == this.co.typeProduct &&
                      this.getData({
                        type: 3,
                        ranktype: this.co.productMarket,
                        num: this.co.productNum,
                      });
            },
            immediate: !0,
          },
        },
        methods: {
          getData: function getData(t) {
            var e = this;
            return (0, i.default)(
              r.default.mark(function o() {
                var n, c;
                return r.default.wrap(function (o) {
                  while (1) {
                    switch ((o.prev = o.next)) {
                      case 0:
                        return (
                          (o.next = 2),
                          e.util.request({
                            url: e.api.tzssp,
                            method: "POST",
                            data: a(a({}, t), {}, { storeId: e.shopinfo.id }),
                          })
                        );
                      case 2:
                        (n = o.sent),
                          (c = n.data),
                          (e.list = c),
                          (e.isget = !0);
                      case 6:
                      case "end":
                        return o.stop();
                    }
                  }
                }, o);
              })
            )();
          },
          goodinfo: function goodinfo(t) {
            this.go({
              t: 1,
              url: "/yb_wm/shop/out/goods-dl?gid="
                .concat(t, "&storeId=")
                .concat(this.shopinfo.id, "&page=index"),
            });
          },
        },
        created: function created() {},
      };
      e.default = s;
    },
    f360: function f360(t, e, o) {
      "use strict";
      var n = o("68aa"),
        r = o.n(n);
      r.a;
    },
    fe02: function fe02(t, e, o) {
      "use strict";
      o.d(e, "b", function () {
        return n;
      }),
        o.d(e, "c", function () {
          return r;
        }),
        o.d(e, "a", function () {});
      var n = function n() {
          var t = this.$createElement,
            e = (this._self._c, this.list.length);
          this.$mp.data = Object.assign({}, { $root: { g0: e } });
        },
        r = [];
    },
  },
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  "components/drag/product-create-component",
  {
    "components/drag/product-create-component":
      function componentsDragProductCreateComponent(
        module,
        exports,
        __webpack_require__
      ) {
        __webpack_require__("543d")["createComponent"](
          __webpack_require__("3b24")
        );
      },
  },
  [["components/drag/product-create-component"]],
]);
