(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/template/share"],
  {
    "411e": function e(t, n, _e) {
      "use strict";
      _e.d(n, "b", function () {
        return o;
      }),
        _e.d(n, "c", function () {
          return c;
        }),
        _e.d(n, "a", function () {});
      var o = function o() {
          var t = this.$createElement;
          this._self._c;
        },
        c = [];
    },
    "4be5": function be5(t, n, e) {
      "use strict";
      e.r(n);
      var o = e("4d53"),
        c = e.n(o);
      for (var i in o) {
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return o[t];
            });
          })(i);
      }
      n["default"] = c.a;
    },
    "4d53": function d53(t, n, e) {
      "use strict";
      (function (t) {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.default = void 0);
        e("26cb");
        var o = {
          name: "mg-share",
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
            MgSwiper: function MgSwiper() {
              e.e("components/common/functionCmp/swiper")
                .then(
                  function () {
                    return resolve(e("3415"));
                  }.bind(null, e)
                )
                .catch(e.oe);
            },
          },
          props: {
            co: {
              type: Object,
              default: function _default() {
                return {};
              },
            },
            value: { type: Boolean, default: !1 },
            wxs: { type: String, default: "1" },
            hbs: { type: Boolean, default: !1 },
            link: { type: String, default: "" },
            ptype: String,
          },
          data: function data() {
            return {};
          },
          computed: {
            show: {
              get: function get() {
                return this.value;
              },
              set: function set(t) {
                this.$emit("input", t);
              },
            },
          },
          watch: {},
          methods: {
            share: function share() {
              (this.show = !1),
                t.showModal({
                  title: "提示",
                  content: "点击右上角分享",
                  showCancel: !1,
                  confirmText: "我知道了",
                });
            },
            fzlj: function fzlj() {
              this.util.fz(this.link || location.href);
            },
            hbfx: function hbfx() {
              1 == this.ptype &&
                ((this.show = !1),
                t.setStorageSync("bdhc", this.co),
                this.go({ url: "/yb_wm/other/hb?type=".concat(this.ptype) })),
                2 == this.ptype &&
                  ((this.show = !1),
                  t.setStorageSync("bdhc", this.co),
                  this.go({ url: "/yb_wm/other/hb?type=".concat(this.ptype) })),
                console.log(this.ptype);
            },
          },
        };
        n.default = o;
      }).call(this, e("543d")["default"]);
    },
    "5db8": function db8(t, n, e) {
      "use strict";
      e.r(n);
      var o = e("411e"),
        c = e("4be5");
      for (var i in c) {
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return c[t];
            });
          })(i);
      }
      e("c7b0");
      var u = e("f0c5"),
        r = Object(u["a"])(
          c["default"],
          o["b"],
          o["c"],
          !1,
          null,
          "152af834",
          null,
          !1,
          o["a"],
          void 0
        );
      n["default"] = r.exports;
    },
    c7b0: function c7b0(t, n, e) {
      "use strict";
      var o = e("d5e6"),
        c = e.n(o);
      c.a;
    },
    d5e6: function d5e6(t, n, e) {},
  },
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  "components/template/share-create-component",
  {
    "components/template/share-create-component":
      function componentsTemplateShareCreateComponent(
        module,
        exports,
        __webpack_require__
      ) {
        __webpack_require__("543d")["createComponent"](
          __webpack_require__("5db8")
        );
      },
  },
  [["components/template/share-create-component"]],
]);
