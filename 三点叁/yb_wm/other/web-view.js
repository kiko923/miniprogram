(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/other/web-view"],
  {
    "0eec": function eec(t, e, n) {
      "use strict";
      n.r(e);
      var c = n("4d10"),
        a = n("382f");
      for (var u in a) {
        ["default"].indexOf(u) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(u);
      }
      var o = n("f0c5"),
        r = Object(o["a"])(
          a["default"],
          c["b"],
          c["c"],
          !1,
          null,
          null,
          null,
          !1,
          c["a"],
          void 0
        );
      e["default"] = r.exports;
    },
    "382f": function f(t, e, n) {
      "use strict";
      n.r(e);
      var c = n("c75a"),
        a = n.n(c);
      for (var u in c) {
        ["default"].indexOf(u) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return c[t];
            });
          })(u);
      }
      e["default"] = a.a;
    },
    4472: function _(t, e, n) {
      "use strict";
      (function (t, e) {
        var c = n("4ea4");
        n("f00a");
        c(n("66fd"));
        var a = c(n("0eec"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = n), e(a.default);
      }).call(this, n("bc2e")["default"], n("543d")["createPage"]);
    },
    "4d10": function d10(t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return c;
      }),
        n.d(e, "c", function () {
          return a;
        }),
        n.d(e, "a", function () {});
      var c = function c() {
          var t = this.$createElement;
          this._self._c;
        },
        a = [];
    },
    c75a: function c75a(t, e, n) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var n = {
          data: function data() {
            return { src: "" };
          },
          onLoad: function onLoad(t) {
            this.util.setNT("外链"),
              (this.src = JSON.parse(decodeURIComponent(t.src)));
          },
          methods: {
            getMessage: function getMessage(e) {
              t.showModal({
                content: JSON.stringify(e.detail),
                showCancel: !1,
              });
            },
          },
        };
        e.default = n;
      }).call(this, n("543d")["default"]);
    },
  },
  [["4472", "common/runtime", "common/vendor"]],
]);
