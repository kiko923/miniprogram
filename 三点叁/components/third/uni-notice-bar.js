(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/third/uni-notice-bar"],
  {
    2214: function _(t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "c", function () {
          return o;
        }),
        n.d(e, "a", function () {});
      var i = function i() {
          var t = this.$createElement;
          this._self._c;
        },
        o = [];
    },
    "3fd4": function fd4(t, e, n) {},
    "990a": function a(t, e, n) {
      "use strict";
      n.r(e);
      var i = n("2214"),
        o = n("c1e7");
      for (var a in o) {
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return o[t];
            });
          })(a);
      }
      n("a808");
      var c = n("f0c5"),
        r = Object(c["a"])(
          o["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "f2b68db8",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = r.exports;
    },
    a808: function a808(t, e, n) {
      "use strict";
      var i = n("3fd4"),
        o = n.n(i);
      o.a;
    },
    c1e7: function c1e7(t, e, n) {
      "use strict";
      n.r(e);
      var i = n("cfd6"),
        o = n.n(i);
      for (var a in i) {
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(a);
      }
      e["default"] = o.a;
    },
    cfd6: function cfd6(t, e, n) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var n = {
          name: "UniNoticeBar",
          components: {},
          props: {
            text: { type: String, default: "" },
            moreText: { type: String, default: "" },
            backgroundColor: { type: String, default: "#fffbe8" },
            speed: { type: Number, default: 50 },
            color: { type: String, default: "#de8c17" },
            fs: { type: [String, Number], default: "28" },
            moreColor: { type: String, default: "#999999" },
            single: { type: [Boolean, String], default: !1 },
            scrollable: { type: [Boolean, String], default: !1 },
            showIcon: { type: [Boolean, String], default: !1 },
            showGetMore: { type: [Boolean, String], default: !1 },
            showClose: { type: [Boolean, String], default: !1 },
          },
          data: function data() {
            var t = "Uni_".concat(Math.ceil(1e6 * Math.random()).toString(36)),
              e = "Uni_".concat(Math.ceil(1e6 * Math.random()).toString(36));
            return {
              textWidth: 0,
              boxWidth: 0,
              wrapWidth: "",
              webviewHide: !1,
              elId: t,
              elIdBox: e,
              show: !0,
              animationDuration: "none",
              animationPlayState: "paused",
              animationDelay: "0s",
            };
          },
          mounted: function mounted() {
            var t = this;
            this.$nextTick(function () {
              t.initSize();
            });
          },
          methods: {
            initSize: function initSize() {
              var e = this;
              if (this.scrollable) {
                var n = [],
                  i = new Promise(function (n, i) {
                    t.createSelectorQuery()
                      .in(e)
                      .select("#".concat(e.elId))
                      .boundingClientRect()
                      .exec(function (t) {
                        (e.textWidth = t[0].width), n();
                      });
                  }),
                  o = new Promise(function (n, i) {
                    t.createSelectorQuery()
                      .in(e)
                      .select("#".concat(e.elIdBox))
                      .boundingClientRect()
                      .exec(function (t) {
                        (e.boxWidth = t[0].width), n();
                      });
                  });
                n.push(i),
                  n.push(o),
                  Promise.all(n).then(function () {
                    (e.animationDuration = "".concat(
                      e.textWidth / e.speed,
                      "s"
                    )),
                      (e.animationDelay = "-".concat(
                        e.boxWidth / e.speed,
                        "s"
                      )),
                      setTimeout(function () {
                        e.animationPlayState = "running";
                      }, 1e3);
                  });
              }
            },
            loopAnimation: function loopAnimation() {},
            clickMore: function clickMore() {
              this.$emit("getmore");
            },
            close: function close() {
              (this.show = !1), this.$emit("close");
            },
            onClick: function onClick() {
              this.$emit("click");
            },
          },
        };
        e.default = n;
      }).call(this, n("543d")["default"]);
    },
  },
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  "components/third/uni-notice-bar-create-component",
  {
    "components/third/uni-notice-bar-create-component":
      function componentsThirdUniNoticeBarCreateComponent(
        module,
        exports,
        __webpack_require__
      ) {
        __webpack_require__("543d")["createComponent"](
          __webpack_require__("990a")
        );
      },
  },
  [["components/third/uni-notice-bar-create-component"]],
]);
