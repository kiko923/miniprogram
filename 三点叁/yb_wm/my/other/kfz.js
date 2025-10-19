(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/my/other/kfz"],
  {
    2449: function _(n, t, e) {
      "use strict";
      e.r(t);
      var o = e("e23a"),
        c = e("2e08");
      for (var u in c) {
        ["default"].indexOf(u) < 0 &&
          (function (n) {
            e.d(t, n, function () {
              return c[n];
            });
          })(u);
      }
      var a = e("f0c5"),
        i = Object(a["a"])(
          c["default"],
          o["b"],
          o["c"],
          !1,
          null,
          "2ffd4a21",
          null,
          !1,
          o["a"],
          void 0
        );
      t["default"] = i.exports;
    },
    "2e08": function e08(n, t, e) {
      "use strict";
      e.r(t);
      var o = e("3b40"),
        c = e.n(o);
      for (var u in o) {
        ["default"].indexOf(u) < 0 &&
          (function (n) {
            e.d(t, n, function () {
              return o[n];
            });
          })(u);
      }
      t["default"] = c.a;
    },
    "3b40": function b40(n, t, e) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      e("26cb");
      var o = {
        name: "order-index",
        components: {
          jzz: function jzz() {
            e.e("components/common/jzz")
              .then(
                function () {
                  return resolve(e("3db1"));
                }.bind(null, e)
              )
              .catch(e.oe);
          },
        },
        data: function data() {
          return {};
        },
        onLoad: function onLoad(n) {
          this.getSystem(), this.util.setNT("敬请期待");
        },
        computed: {},
        methods: {
          onClick: function onClick() {
            this.$emit("click");
          },
        },
      };
      t.default = o;
    },
    a887: function a887(n, t, e) {
      "use strict";
      (function (n, t) {
        var o = e("4ea4");
        e("f00a");
        o(e("66fd"));
        var c = o(e("2449"));
        (n.__webpack_require_UNI_MP_PLUGIN__ = e), t(c.default);
      }).call(this, e("bc2e")["default"], e("543d")["createPage"]);
    },
    e23a: function e23a(n, t, e) {
      "use strict";
      e.d(t, "b", function () {
        return o;
      }),
        e.d(t, "c", function () {
          return c;
        }),
        e.d(t, "a", function () {});
      var o = function o() {
          var n = this.$createElement;
          this._self._c;
        },
        c = [];
    },
  },
  [["a887", "common/runtime", "common/vendor"]],
]);
