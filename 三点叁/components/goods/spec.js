(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/goods/spec"],
  {
    1194: function _(t, n, o) {
      "use strict";
      o.r(n);
      var e = o("cd4a"),
        i = o.n(e);
      for (var a in e) {
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            o.d(n, t, function () {
              return e[t];
            });
          })(a);
      }
      n["default"] = i.a;
    },
    "2b80": function b80(t, n, o) {
      "use strict";
      var e = o("3f6f"),
        i = o.n(e);
      i.a;
    },
    "3f6f": function f6f(t, n, o) {},
    "552b": function b(t, n, o) {
      "use strict";
      o.d(n, "b", function () {
        return e;
      }),
        o.d(n, "c", function () {
          return i;
        }),
        o.d(n, "a", function () {});
      var e = function e() {
          var t = this,
            n = t.$createElement,
            o =
              (t._self._c,
              t.loading
                ? null
                : 1 == t.goodsInfo.isSpecs && t.goodsInfo.specsData.length),
            e = t.loading
              ? null
              : 1 == t.goodsInfo.isAttr && t.goodsInfo.attrData.length,
            i = t.loading
              ? null
              : 1 == t.goodsInfo.isMaterial && t.goodsInfo.meterialData.length,
            a =
              !t.loading && t.goodsInfo.id
                ? Number(t.xzSpecInfo.vipPrice)
                : null,
            r =
              !t.loading && t.goodsInfo.id
                ? Number(t.xzSpecInfo.SalesPrice)
                : null,
            s =
              !t.loading && t.goodsInfo.id
                ? 1 == t.goodsInfo.isSpecs && t.goodsInfo.specsData.length
                : null,
            u =
              !t.loading && t.goodsInfo.id && s
                ? Number(t.xzSpecInfo.SalesPrice)
                : null,
            c =
              !t.loading && t.goodsInfo.id
                ? 1 == t.goodsInfo.isMaterial && t.goodsInfo.meterialData.length
                : null,
            f = !t.loading && t.goodsInfo.id ? t.xzSxInfo.arr.length : null,
            d =
              !t.loading && t.goodsInfo.id && f
                ? t.xzSxInfo.arr
                    .map(function (t) {
                      return t.name;
                    })
                    .toString()
                : null,
            l = !t.loading && t.goodsInfo.id ? t.xzJlInfo.arr.length : null,
            g =
              !t.loading && t.goodsInfo.id && l
                ? t.xzJlInfo.arr
                    .map(function (t) {
                      return t.materialName;
                    })
                    .toString()
                : null;
          t._isMounted ||
            (t.e0 = function (n) {
              t.showGg = !1;
            }),
            (t.$mp.data = Object.assign(
              {},
              {
                $root: {
                  g0: o,
                  g1: e,
                  g2: i,
                  m0: a,
                  m1: r,
                  g3: s,
                  m2: u,
                  g4: c,
                  g5: f,
                  g6: d,
                  g7: l,
                  g8: g,
                },
              }
            ));
        },
        i = [];
    },
    b20c: function b20c(t, n, o) {
      "use strict";
      o.r(n);
      var e = o("552b"),
        i = o("1194");
      for (var a in i) {
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            o.d(n, t, function () {
              return i[t];
            });
          })(a);
      }
      o("2b80");
      var r = o("f0c5"),
        s = Object(r["a"])(
          i["default"],
          e["b"],
          e["c"],
          !1,
          null,
          "e38afce0",
          null,
          !1,
          e["a"],
          void 0
        );
      n["default"] = s.exports;
    },
    cd4a: function cd4a(t, n, o) {
      "use strict";
      var e = o("4ea4");
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0);
      var i = e(o("2eee")),
        a = e(o("c973")),
        r = e(o("9523")),
        s = o("26cb"),
        u = e(o("8bb1"));
      function c(t, n) {
        var o = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var e = Object.getOwnPropertySymbols(t);
          n &&
            (e = e.filter(function (n) {
              return Object.getOwnPropertyDescriptor(t, n).enumerable;
            })),
            o.push.apply(o, e);
        }
        return o;
      }
      function f(t) {
        for (var n = 1; n < arguments.length; n++) {
          var o = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? c(Object(o), !0).forEach(function (n) {
                (0, r.default)(t, n, o[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
            : c(Object(o)).forEach(function (n) {
                Object.defineProperty(
                  t,
                  n,
                  Object.getOwnPropertyDescriptor(o, n)
                );
              });
        }
        return t;
      }
      var d = {
        name: "popup",
        components: {
          mgPopup: function mgPopup() {
            o.e("components/common/popup")
              .then(
                function () {
                  return resolve(o("6b80"));
                }.bind(null, o)
              )
              .catch(o.oe);
          },
          bkB: function bkB() {
            o.e("components/common/block-b")
              .then(
                function () {
                  return resolve(o("9d64"));
                }.bind(null, o)
              )
              .catch(o.oe);
          },
        },
        props: {
          co: {
            type: Object,
            default: function _default() {
              return {};
            },
          },
          cname: { type: String, default: "" },
          value: { type: Boolean, default: !1 },
          width: { type: String, default: "70%" },
          zindex: { type: Number, default: 999 },
          outin: { type: String, default: "1" },
          storeid: { type: String, default: "" },
          systemGood: {
            type: Object,
            default: function _default() {
              return {};
            },
          },
        },
        data: function data() {
          return { loading: !0, goodsInfo: {} };
        },
        methods: {
          clickSpec: function clickSpec(t) {
            var n = this.goodsInfo.specsData;
            for (var o in n) {
              n[o].a = o == t ? 1 : 0;
            }
          },
          clickAttribute: function clickAttribute(t, n) {
            var o = this.goodsInfo.attrData;
            for (var e in o[t].attrStr) {
              o[t].isMultiple && "1" == o[t].isMultiple
                ? e == n &&
                  this.$set(
                    o[t].attrStr[e],
                    "a",
                    1 == o[t].attrStr[e].a ? 0 : 1
                  )
                : (o[t].attrStr[e].a = e == n ? 1 : 0);
            }
          },
          clickMaterial: function clickMaterial(t) {
            this.goodsInfo.meterialData;
            this.$set(
              this.goodsInfo.meterialData[t],
              "a",
              1 == this.goodsInfo.meterialData[t].a ? 0 : 1
            );
          },
          addSpec: function addSpec() {
            (this.xzSpecInfo.SalesStock &&
              this.goodsInfo.ggnum == this.xzSpecInfo.SalesStock) ||
              (this.goodsInfo.ggnum += 1);
          },
          decSpec: function decSpec() {
            1 != this.goodsInfo.ggnum && (this.goodsInfo.ggnum -= 1);
          },
          jrgwc: u.default.throttle(function (t) {
            var n,
              o = this,
              e = Object.assign({}, this.xzSpecInfo),
              i = {
                jlmoney: this.xzJlInfo.money,
                material: this.xzJlInfo.arr.map(function (t) {
                  return { materialId: t.id, num: 1 };
                }),
                jldata: "",
                jlids: "",
              },
              a = { attribute: "" };
            if (
              ((e.groupId = e.id || ""),
              delete e.id,
              (a.attribute = this.xzSxInfo.arr
                .map(function (t) {
                  return t.name;
                })
                .toString()),
              (i.jldata = this.xzJlInfo.arr
                .map(function (t) {
                  return t.materialName;
                })
                .toString()),
              (i.jlids = this.xzJlInfo.arr
                .map(function (t) {
                  return t.id;
                })
                .toString()),
              (n =
                1 != this.co.isSpecs &&
                1 != this.co.isMaterial &&
                1 != this.co.isAttr
                  ? this.carList.find(function (t) {
                      return t.goodsId == o.co.id;
                    })
                  : this.carList.find(function (t) {
                      return (
                        t.goodsId == o.co.id &&
                        t.groupId == e.groupId &&
                        t.materialIds == i.jlids &&
                        t.attribute == a.attribute
                      );
                    })),
              n)
            ) {
              if (
                this.co.maxNum > 0 &&
                Number(n.num) + Number(this.goodsInfo.ggnum) > this.co.maxNum
              )
                return this.util.message(
                  "此商品限购".concat(this.co.maxNum, "份"),
                  3
                );
            } else {
              if (this.co.minNum > 1 && this.co.minNum > this.goodsInfo.ggnum)
                return this.util.message(
                  "此商品".concat(this.co.minNum, "份起购"),
                  3
                );
              if (this.co.maxNum > 0 && this.goodsInfo.ggnum > this.co.maxNum)
                return this.util.message(
                  "此商品限购".concat(this.co.maxNum, "份"),
                  3
                );
            }
            var r = Object.assign(
              { ggnum: this.goodsInfo.ggnum },
              this.co,
              e,
              a,
              i
            );
            this.$emit("add", { g: r, addwz: 1 }), (this.showGg = !1);
          }, 300),
        },
        computed: f(
          f(
            {},
            (0, s.mapState)({
              carList: function carList(t) {
                return t.scarList.data || [];
              },
            })
          ),
          {},
          {
            showGg: {
              get: function get() {
                return this.value;
              },
              set: function set(t) {
                this.$emit("input", t);
              },
            },
            xzSpecInfo: function xzSpecInfo() {
              return 1 == this.goodsInfo.isSpecs &&
                this.goodsInfo.specsData.length
                ? this.goodsInfo.specsData.find(function (t) {
                    return t.a;
                  })
                : {};
            },
            xzSxInfo: function xzSxInfo() {
              var t = { arr: [] };
              if (
                1 == this.goodsInfo.isAttr &&
                this.goodsInfo.attrData.length
              ) {
                var n = this.goodsInfo.attrData,
                  o = [];
                for (var e in n) {
                  for (var i in n[e].attrStr) {
                    n[e].attrStr[i].a && o.push(n[e].attrStr[i]);
                  }
                }
                t.arr = o;
              }
              return t;
            },
            xzJlInfo: function xzJlInfo() {
              var t = this,
                n = { money: 0, arr: [] };
              if (
                1 == this.goodsInfo.isMaterial &&
                this.goodsInfo.meterialData.length
              ) {
                var o = [];
                this.goodsInfo.meterialData.forEach(function (e) {
                  e.a && ((n.money += (t.outin, +e.SalesPrice)), o.push(e));
                }),
                  (n.money = +n.money.toFixed(2)),
                  (n.arr = o);
              }
              return n;
            },
            xzspxx: function xzspxx() {
              var t = [];
              this.xzSpecInfo.id && t.push(this.xzSpecInfo.specsName),
                this.xzSxInfo.arr.length && t.push();
            },
          }
        ),
        watch: {
          value: function value(t) {
            var n = this;
            return (0, a.default)(
              i.default.mark(function o() {
                var e, a;
                return i.default.wrap(function (o) {
                  while (1) {
                    switch ((o.prev = o.next)) {
                      case 0:
                        if (!t) {
                          o.next = 11;
                          break;
                        }
                        return (
                          (n.loading = !0),
                          (n.goodsInfo = {}),
                          (o.next = 5),
                          n.util.request({
                            url: n.api.ggxq,
                            data: { id: n.co.id, storeId: n.storeid },
                          })
                        );
                      case 5:
                        (e = o.sent),
                          (a = e.data),
                          1 == n.co.isSpecs &&
                            a.specsData &&
                            a.specsData.forEach(function (t, n) {
                              t.a = 0 == n ? 1 : 0;
                            }),
                          1 == n.co.isAttr &&
                            a.attrData &&
                            a.attrData.forEach(function (t) {
                              t.attrStr.forEach(function (t, n) {
                                t.a = 0 == n ? 1 : 0;
                              });
                            }),
                          (n.goodsInfo = Object.assign({}, n.co, a, {
                            ggnum: 1,
                          })),
                          (n.loading = !1);
                      case 11:
                      case "end":
                        return o.stop();
                    }
                  }
                }, o);
              })
            )();
          },
        },
      };
      n.default = d;
    },
  },
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  "components/goods/spec-create-component",
  {
    "components/goods/spec-create-component":
      function componentsGoodsSpecCreateComponent(
        module,
        exports,
        __webpack_require__
      ) {
        __webpack_require__("543d")["createComponent"](
          __webpack_require__("b20c")
        );
      },
  },
  [["components/goods/spec-create-component"]],
]);
