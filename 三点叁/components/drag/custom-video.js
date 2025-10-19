(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/drag/custom-video"],
  {
    "7b4d": function b4d(t, e, n) {
      "use strict";
      n.r(e);
      var r = n("9185"),
        a = n.n(r);
      for (var u in r) {
        ["default"].indexOf(u) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(u);
      }
      e["default"] = a.a;
    },
    9185: function _(t, e, n) {
      "use strict";
      (function (t) {
        var r = n("4ea4");
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var a = r(n("2eee")),
          u = r(n("c973")),
          c =
            (n("26cb"),
            {
              name: "searchBox",
              props: {
                co: {
                  type: Object,
                  default: function _default() {
                    return {
                      icon: [{ url: "" }],
                      topMargin: 0,
                      videocon: { links: "", title: "视频名" },
                    };
                  },
                },
                u: { type: String, default: "px" },
                color: { type: String, default: "" },
              },
              data: function data() {
                return {};
              },
              methods: {
                videoErrorCallback: function videoErrorCallback(e) {
                  t.showModal({ content: e.target.errMsg, showCancel: !1 });
                },
              },
              created: function created() {
                return (0, u.default)(
                  a.default.mark(function t() {
                    return a.default.wrap(function (t) {
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
            });
        e.default = c;
      }).call(this, n("543d")["default"]);
    },
    a4a2: function a4a2(t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "c", function () {
          return a;
        }),
        n.d(e, "a", function () {});
      var r = function r() {
          var t = this.$createElement;
          this._self._c;
        },
        a = [];
    },
    caf5: function caf5(t, e, n) {
      "use strict";
      n.r(e);
      var r = n("a4a2"),
        a = n("7b4d");
      for (var u in a) {
        ["default"].indexOf(u) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(u);
      }
      var c = n("f0c5"),
        o = Object(c["a"])(
          a["default"],
          r["b"],
          r["c"],
          !1,
          null,
          "12cc0283",
          null,
          !1,
          r["a"],
          void 0
        );
      e["default"] = o.exports;
    },
  },
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  "components/drag/custom-video-create-component",
  {
    "components/drag/custom-video-create-component":
      function componentsDragCustomVideoCreateComponent(
        module,
        exports,
        __webpack_require__
      ) {
        __webpack_require__("543d")["createComponent"](
          __webpack_require__("caf5")
        );
      },
  },
  [["components/drag/custom-video-create-component"]],
]);
