(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/template/tcgg"],
  {
    2411: function _(t, e, n) {},
    7907: function _(t, e, n) {
      "use strict";
      n.r(e);
      var u = n("8c43"),
        c = n.n(u);
      for (var o in u) {
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return u[t];
            });
          })(o);
      }
      e["default"] = c.a;
    },
    "7ab6": function ab6(t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return u;
      }),
        n.d(e, "c", function () {
          return c;
        }),
        n.d(e, "a", function () {});
      var u = function u() {
          var t = this,
            e = t.$createElement;
          t._self._c;
          t._isMounted ||
            (t.e0 = function (e) {
              t.show = !1;
            });
        },
        c = [];
    },
    "8c43": function c43(t, e, n) {
      "use strict";
      var u = n("4ea4");
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var c = u(n("2eee")),
        o = u(n("c973")),
        r =
          (n("26cb"),
          {
            name: "searchBox",
            components: {
              mgModal: function mgModal() {
                n.e("components/common/modal")
                  .then(
                    function () {
                      return resolve(n("ddfd"));
                    }.bind(null, n)
                  )
                  .catch(n.oe);
              },
              MgSwiper: function MgSwiper() {
                n.e("components/common/functionCmp/swiper")
                  .then(
                    function () {
                      return resolve(n("3415"));
                    }.bind(null, n)
                  )
                  .catch(n.oe);
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
              list: {
                type: Array,
                default: function _default() {
                  return [];
                },
              },
              color: { type: String, default: "" },
            },
            data: function data() {
              return {
                swiper: {
                  class: "bs20",
                  swiper: { children: [] },
                  duration: "",
                  mode: "",
                  height: "733",
                  radius: 20,
                  auto: !0,
                  interval: 5,
                },
              };
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
            watch: {
              list: {
                handler: function handler(t) {
                  var e = this;
                  return (0, o.default)(
                    c.default.mark(function n() {
                      return c.default.wrap(function (n) {
                        while (1) {
                          switch ((n.prev = n.next)) {
                            case 0:
                              t.length && (e.swiper.swiper.children = t);
                            case 1:
                            case "end":
                              return n.stop();
                          }
                        }
                      }, n);
                    })
                  )();
                },
                immediate: !0,
              },
            },
            methods: {},
          });
      e.default = r;
    },
    cae6: function cae6(t, e, n) {
      "use strict";
      var u = n("2411"),
        c = n.n(u);
      c.a;
    },
    fa4a: function fa4a(t, e, n) {
      "use strict";
      n.r(e);
      var u = n("7ab6"),
        c = n("7907");
      for (var o in c) {
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return c[t];
            });
          })(o);
      }
      n("cae6");
      var r = n("f0c5"),
        a = Object(r["a"])(
          c["default"],
          u["b"],
          u["c"],
          !1,
          null,
          "06f86bcb",
          null,
          !1,
          u["a"],
          void 0
        );
      e["default"] = a.exports;
    },
  },
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  "components/template/tcgg-create-component",
  {
    "components/template/tcgg-create-component":
      function componentsTemplateTcggCreateComponent(
        module,
        exports,
        __webpack_require__
      ) {
        __webpack_require__("543d")["createComponent"](
          __webpack_require__("fa4a")
        );
      },
  },
  [["components/template/tcgg-create-component"]],
]);
