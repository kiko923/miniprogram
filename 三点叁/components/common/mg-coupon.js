(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/common/mg-coupon"],
  {
    "255d": function d(t, e, p) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      p("26cb");
      var y = p("4789"),
        o = {
          name: "searchBox",
          components: {
            mgRtext: function mgRtext() {
              Promise.all([
                p.e("common/vendor"),
                p.e("components/common/functionCmp/rich-text"),
              ])
                .then(
                  function () {
                    return resolve(p("0b28"));
                  }.bind(null, p)
                )
                .catch(p.oe);
            },
          },
          props: {
            co: {
              type: Object,
              default: function _default() {
                return {};
              },
            },
            gttype: { type: String, default: "" },
            ptype: { type: String, default: "1" },
            ttype: { type: String, default: "1" },
            cname: { type: String, default: "" },
            u: { type: String, default: "px" },
            color: { type: String, default: "" },
          },
          data: function data() {
            return { active: !1, disabled: !1 };
          },
          mixins: [y.utilMixins],
          computed: {
            typeName: function typeName() {
              var t,
                e = "";
              switch (this.ptype) {
                case "1":
                  1 == this.ttype
                    ? ((t = "领 取"),
                      (e = "linear-gradient(90deg, #ff3a48, #ff3a48)"))
                    : ((t =
                        1 == this.co.useState
                          ? "去使用"
                          : 2 == this.co.useState
                          ? "已使用"
                          : "已失效"),
                      (e =
                        1 == this.co.useState
                          ? "linear-gradient(90deg, #ff3a48, #ff3a48)"
                          : ""));
                  break;
                default:
                  break;
              }
              return { t: t, c: e };
            },
            fullName: function fullName() {
              return this.co.fullMoney > 0
                ? "满".concat(Number(this.co.fullMoney) + this.dw, "可用")
                : "无门槛";
            },
            qbbl: function qbbl() {
              return this.co.saleNum / this.co.totalNum >= 1
                ? 1
                : this.co.saleNum / this.co.totalNum;
            },
            qlx: function qlx() {
              return 1 == this.co.type
                ? "代"
                : 2 == this.co.type
                ? "折"
                : 3 == this.co.type
                ? "兑"
                : void 0;
            },
            iswdq: function iswdq() {
              return 2 == this.ttype && 13 == this.co.receiveType;
            },
          },
          methods: {
            useTypeName: function useTypeName(t) {
              var e;
              switch (+t) {
                case 1:
                  e = "全门店通用";
                  break;
                case 2:
                  e = "指定商户可用";
                  break;
                case 6:
                  e = "指定商户可用";
                  break;
                case 7:
                  e = "指定商品可用";
                  break;
                case 8:
                  e = "指定分类可用";
                  break;
                default:
                  break;
              }
              return e;
            },
            goTo: function goTo() {
              var t =
                "/yb_wm/my/coupon/coupon-dl?id=" +
                (this.co.couponId ? this.co.couponId : this.co.id);
              (1 == this.ptype && 2 == this.ttype) || 4 == this.ptype
                ? (t =
                    "/yb_wm/my/coupon/coupon-dl?islq=1&receiveId=" + this.co.id)
                : 8 == this.ptype &&
                  (t = "/yb_wm/order/coupon-bag/qbxq?id=" + this.co.id),
                this.go({ t: 1, url: t });
            },
            btnClick: function btnClick() {
              var t = this;
              (this.typeName.c || 5 == this.ptype) &&
                (((1 == this.ptype && 1 == this.ttype) || 5 == this.ptype) &&
                  ((this.disabled = !0),
                  setTimeout(function () {
                    t.disabled = !1;
                  }, 1e3)),
                this.$emit("btntap"));
            },
          },
        };
      e.default = o;
    },
    6492: function _(t, e, p) {
      "use strict";
      p.r(e);
      var y = p("255d"),
        o = p.n(y);
      for (var c in y) {
        ["default"].indexOf(c) < 0 &&
          (function (t) {
            p.d(e, t, function () {
              return y[t];
            });
          })(c);
      }
      e["default"] = o.a;
    },
    "6ba4": function ba4(t, e, p) {
      "use strict";
      p.r(e);
      var y = p("c26c"),
        o = p("6492");
      for (var c in o) {
        ["default"].indexOf(c) < 0 &&
          (function (t) {
            p.d(e, t, function () {
              return o[t];
            });
          })(c);
      }
      p("cf8ce");
      var n = p("f0c5"),
        i = Object(n["a"])(
          o["default"],
          y["b"],
          y["c"],
          !1,
          null,
          "a9fa188c",
          null,
          !1,
          y["a"],
          void 0
        );
      e["default"] = i.exports;
    },
    b07c: function b07c(t, e, p) {},
    c26c: function c26c(t, e, p) {
      "use strict";
      p.d(e, "b", function () {
        return y;
      }),
        p.d(e, "c", function () {
          return o;
        }),
        p.d(e, "a", function () {});
      var y = function y() {
          var t = this,
            e = t.$createElement,
            p =
              (t._self._c,
              1 == t.ptype && 1 == t.co.type ? Number(t.co.money) : null),
            y =
              1 == t.ptype && 1 != t.co.type && 2 == t.co.type
                ? Number(t.co.discount)
                : null,
            o =
              1 != t.ptype && 2 == t.ptype && 1 == t.co.type
                ? Number(t.co.money)
                : null,
            c =
              1 != t.ptype && 2 == t.ptype && 1 != t.co.type && 2 == t.co.type
                ? Number(t.co.discount)
                : null,
            n =
              1 != t.ptype && 2 != t.ptype && 3 == t.ptype
                ? Number(t.co.money)
                : null,
            i =
              1 != t.ptype && 2 != t.ptype && 3 == t.ptype
                ? t.useTypeName(t.co.activityType)
                : null,
            u =
              1 != t.ptype &&
              2 != t.ptype &&
              3 != t.ptype &&
              4 == t.ptype &&
              1 == t.co.type
                ? Number(t.co.money)
                : null,
            a =
              1 != t.ptype &&
              2 != t.ptype &&
              3 != t.ptype &&
              4 == t.ptype &&
              1 != t.co.type &&
              2 == t.co.type
                ? Number(t.co.discount)
                : null,
            r =
              1 == t.ptype ||
              2 == t.ptype ||
              3 == t.ptype ||
              4 == t.ptype ||
              5 != t.ptype ||
              (1 != t.co.type && 3 != t.co.type)
                ? null
                : Number(t.co.money),
            s =
              1 != t.ptype &&
              2 != t.ptype &&
              3 != t.ptype &&
              4 != t.ptype &&
              5 == t.ptype &&
              1 != t.co.type &&
              3 != t.co.type &&
              2 == t.co.type
                ? Number(t.co.discount)
                : null,
            l =
              1 != t.ptype &&
              2 != t.ptype &&
              3 != t.ptype &&
              4 != t.ptype &&
              5 != t.ptype &&
              6 == t.ptype
                ? Number(t.co.money)
                : null,
            m =
              1 != t.ptype &&
              2 != t.ptype &&
              3 != t.ptype &&
              4 != t.ptype &&
              5 != t.ptype &&
              6 == t.ptype
                ? t.useTypeName(t.co.activityType)
                : null,
            f =
              1 != t.ptype &&
              2 != t.ptype &&
              3 != t.ptype &&
              4 != t.ptype &&
              5 != t.ptype &&
              6 != t.ptype &&
              7 == t.ptype
                ? t.useTypeName(t.co.activityType)
                : null,
            d =
              1 != t.ptype &&
              2 != t.ptype &&
              3 != t.ptype &&
              4 != t.ptype &&
              5 != t.ptype &&
              6 != t.ptype &&
              7 != t.ptype &&
              8 == t.ptype
                ? Number(t.co.price)
                : null,
            b =
              1 != t.ptype &&
              2 != t.ptype &&
              3 != t.ptype &&
              4 != t.ptype &&
              5 != t.ptype &&
              6 != t.ptype &&
              7 != t.ptype &&
              8 == t.ptype
                ? Number(t.co.money)
                : null,
            h =
              1 != t.ptype &&
              2 != t.ptype &&
              3 != t.ptype &&
              4 != t.ptype &&
              5 != t.ptype &&
              6 != t.ptype &&
              7 != t.ptype &&
              8 != t.ptype &&
              9 == t.ptype
                ? parseInt(100 * (1 - t.qbbl))
                : null,
            v =
              1 != t.ptype &&
              2 != t.ptype &&
              3 != t.ptype &&
              4 != t.ptype &&
              5 != t.ptype &&
              6 != t.ptype &&
              7 != t.ptype &&
              8 != t.ptype &&
              9 != t.ptype &&
              10 == t.ptype
                ? Number(t.co.money)
                : null,
            N =
              1 != t.ptype &&
              2 != t.ptype &&
              3 != t.ptype &&
              4 != t.ptype &&
              5 != t.ptype &&
              6 != t.ptype &&
              7 != t.ptype &&
              8 != t.ptype &&
              9 != t.ptype &&
              10 == t.ptype
                ? t.useTypeName(t.co.activityType)
                : null,
            g =
              1 != t.ptype &&
              2 != t.ptype &&
              3 != t.ptype &&
              4 != t.ptype &&
              5 != t.ptype &&
              6 != t.ptype &&
              7 != t.ptype &&
              8 != t.ptype &&
              9 != t.ptype &&
              10 == t.ptype
                ? t.useTypeName(t.co.activityType)
                : null;
          t._isMounted ||
            ((t.e0 = function (e) {
              e.stopPropagation(), (t.active = !t.active);
            }),
            (t.e1 = function (e) {
              1 != t.co.isUse ? t.$emit("change", t.co.id) : t.goTo();
            }),
            (t.e2 = function (e) {
              e.stopPropagation(), (t.active = !t.active);
            }),
            (t.e3 = function (e) {
              e.stopPropagation(), (t.active = !t.active);
            }),
            (t.e4 = function (e) {
              e.stopPropagation(), (t.active = !t.active);
            })),
            (t.$mp.data = Object.assign(
              {},
              {
                $root: {
                  m0: p,
                  m1: y,
                  m2: o,
                  m3: c,
                  m4: n,
                  m5: i,
                  m6: u,
                  m7: a,
                  m8: r,
                  m9: s,
                  m10: l,
                  m11: m,
                  m12: f,
                  m13: d,
                  m14: b,
                  m15: h,
                  m16: v,
                  m17: N,
                  m18: g,
                },
              }
            ));
        },
        o = [];
    },
    cf8ce: function cf8ce(t, e, p) {
      "use strict";
      var y = p("b07c"),
        o = p.n(y);
      o.a;
    },
  },
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  "components/common/mg-coupon-create-component",
  {
    "components/common/mg-coupon-create-component":
      function componentsCommonMgCouponCreateComponent(
        module,
        exports,
        __webpack_require__
      ) {
        __webpack_require__("543d")["createComponent"](
          __webpack_require__("6ba4")
        );
      },
  },
  [["components/common/mg-coupon-create-component"]],
]);
