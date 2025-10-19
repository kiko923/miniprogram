(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/third/ls-swiper/index"],
  {
    "06fb": function fb(t, e, n) {
      "use strict";
      n.r(e);
      var u = n("9b03"),
        a = n.n(u);
      for (var r in u) {
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return u[t];
            });
          })(r);
      }
      e["default"] = a.a;
    },
    "1def": function def(t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return u;
      }),
        n.d(e, "c", function () {
          return a;
        }),
        n.d(e, "a", function () {});
      var u = function u() {
          var t = this.$createElement,
            e = (this._self._c, this.list && this.list.length > 0);
          this.$mp.data = Object.assign({}, { $root: { g0: e } });
        },
        a = [];
    },
    "9b03": function b03(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var u = {
        props: {
          list: {
            type: Array,
            default: function _default() {
              return [];
            },
          },
          imgKey: { type: String, required: !0 },
          height: { type: Number, default: 200 },
          imgRadius: { type: Number, default: 0 },
          imgShadow: { type: Boolean, default: !1 },
          previousMargin: { type: Number, default: 0 },
          nextMargin: { type: Number, default: 0 },
          imgWidth: { type: String, default: "100%" },
          loop: { type: Boolean, default: !1 },
          autoplay: { type: Boolean, default: !1 },
          interval: { type: Number, default: 2e3 },
          duration: { type: Number, default: 600 },
          dots: { type: Boolean, default: !1 },
          bottom: { type: Number, default: 10 },
          crown: { type: Boolean, default: !1 },
          slots: { type: Boolean, default: !1 },
          swcurrent: { type: Number, default: 0 },
        },
        data: function data() {
          return { current: 0 };
        },
        watch: {
          swcurrent: function swcurrent(t) {
            this.current = t;
          },
        },
        methods: {
          change: function change(t) {
            var e = t.detail.current;
            (this.current = e), this.$emit("change", this.list[e]);
          },
        },
      };
      e.default = u;
    },
    a1ac: function a1ac(t, e, n) {},
    d67e: function d67e(t, e, n) {
      "use strict";
      var u = n("a1ac"),
        a = n.n(u);
      a.a;
    },
    d98b: function d98b(t, e, n) {
      "use strict";
      n.r(e);
      var u = n("1def"),
        a = n("06fb");
      for (var r in a) {
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(r);
      }
      n("d67e");
      var i = n("f0c5"),
        o = Object(i["a"])(
          a["default"],
          u["b"],
          u["c"],
          !1,
          null,
          "302b1c2d",
          null,
          !1,
          u["a"],
          void 0
        );
      e["default"] = o.exports;
    },
  },
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  "components/third/ls-swiper/index-create-component",
  {
    "components/third/ls-swiper/index-create-component":
      function componentsThirdLsSwiperIndexCreateComponent(
        module,
        exports,
        __webpack_require__
      ) {
        __webpack_require__("543d")["createComponent"](
          __webpack_require__("d98b")
        );
      },
  },
  [["components/third/ls-swiper/index-create-component"]],
]);
