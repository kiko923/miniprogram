(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/other/rwzx"],
  {
    "226f": function f(t, n, e) {
      "use strict";
      e.r(n);
      var c = e("e523"),
        u = e("a80c");
      for (var a in u) {
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return u[t];
            });
          })(a);
      }
      e("278d");
      var r = e("f0c5"),
        i = Object(r["a"])(
          u["default"],
          c["b"],
          c["c"],
          !1,
          null,
          "3caeef90",
          null,
          !1,
          c["a"],
          void 0
        );
      n["default"] = i.exports;
    },
    "278d": function d(t, n, e) {
      "use strict";
      var c = e("d8d9"),
        u = e.n(c);
      u.a;
    },
    "415a": function a(t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0);
      e("26cb");
      n.default = {
        name: "rwzx",
        components: {},
        data: function data() {
          return {
            arr: [
              { b: "完善信息", t: "+1成长值" },
              { b: "绑定手机号", t: "+1成长值" },
              { b: "收藏小程序", t: "+10成长值" },
              { b: "每日签到", t: "+2成长值" },
            ],
            arr2: [
              { b: "购买商品", t: "每消费1元，获得1成长值" },
              { b: "订单评价", t: "每完成1笔订单评价，获得1成长值" },
            ],
          };
        },
        onLoad: function onLoad(t) {
          this.getSystem(), this.util.setNT("任务中心");
        },
        computed: {},
        methods: {
          onClick: function onClick() {
            this.$emit("click");
          },
        },
      };
    },
    "8b00": function b00(t, n, e) {
      "use strict";
      (function (t, n) {
        var c = e("4ea4");
        e("f00a");
        c(e("66fd"));
        var u = c(e("226f"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = e), n(u.default);
      }).call(this, e("bc2e")["default"], e("543d")["createPage"]);
    },
    a80c: function a80c(t, n, e) {
      "use strict";
      e.r(n);
      var c = e("415a"),
        u = e.n(c);
      for (var a in c) {
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return c[t];
            });
          })(a);
      }
      n["default"] = u.a;
    },
    d8d9: function d8d9(t, n, e) {},
    e523: function e523(t, n, e) {
      "use strict";
      e.d(n, "b", function () {
        return c;
      }),
        e.d(n, "c", function () {
          return u;
        }),
        e.d(n, "a", function () {});
      var c = function c() {
          var t = this.$createElement;
          this._self._c;
        },
        u = [];
    },
  },
  [["8b00", "common/runtime", "common/vendor"]],
]);
