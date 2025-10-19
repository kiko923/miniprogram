(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/my/other/kf"],
  {
    "0ebf": function ebf(t, n, e) {
      "use strict";
      e.r(n);
      var o = e("e4f3"),
        c = e("d440");
      for (var u in c) {
        ["default"].indexOf(u) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return c[t];
            });
          })(u);
      }
      e("fd07");
      var f = e("f0c5"),
        i = Object(f["a"])(
          c["default"],
          o["b"],
          o["c"],
          !1,
          null,
          "c0d93464",
          null,
          !1,
          o["a"],
          void 0
        );
      n["default"] = i.exports;
    },
    "20ac": function ac(t, n, e) {
      "use strict";
      (function (t, o) {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.default = void 0);
        e("26cb");
        var c = {
          name: "kf",
          components: {
            mgPopup: function mgPopup() {
              e.e("components/common/popup")
                .then(
                  function () {
                    return resolve(e("6b80"));
                  }.bind(null, e)
                )
                .catch(e.oe);
            },
          },
          data: function data() {
            return { showSq: !0 };
          },
          onLoad: function onLoad(t) {
            this.getSystem({ normal: 1 }), this.util.setNT("联系客服");
          },
          computed: {},
          methods: {
            zxkf: function zxkf() {
              t.openCustomerServiceChat({
                extInfo: { url: this.system.serviceUrl },
                corpId: this.system.corpId,
                success: function success(t) {},
                fail: function fail(t) {
                  console.log(t);
                },
              });
            },
            bbh: function bbh() {
              o.showModal({ title: "小程序版本号", content: "23.04.14" });
            },
          },
        };
        n.default = c;
      }).call(this, e("bc2e")["default"], e("543d")["default"]);
    },
    "87b5": function b5(t, n, e) {
      "use strict";
      (function (t, n) {
        var o = e("4ea4");
        e("f00a");
        o(e("66fd"));
        var c = o(e("0ebf"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = e), n(c.default);
      }).call(this, e("bc2e")["default"], e("543d")["createPage"]);
    },
    d440: function d440(t, n, e) {
      "use strict";
      e.r(n);
      var o = e("20ac"),
        c = e.n(o);
      for (var u in o) {
        ["default"].indexOf(u) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return o[t];
            });
          })(u);
      }
      n["default"] = c.a;
    },
    d62c: function d62c(t, n, e) {},
    e4f3: function e4f3(t, n, e) {
      "use strict";
      e.d(n, "b", function () {
        return o;
      }),
        e.d(n, "c", function () {
          return c;
        }),
        e.d(n, "a", function () {});
      var o = function o() {
          var t = this,
            n = t.$createElement;
          t._self._c;
          t._isMounted ||
            (t.e0 = function (n) {
              return t.util.makeTel(t.system.tel);
            });
        },
        c = [];
    },
    fd07: function fd07(t, n, e) {
      "use strict";
      var o = e("d62c"),
        c = e.n(o);
      c.a;
    },
  },
  [["87b5", "common/runtime", "common/vendor"]],
]);
