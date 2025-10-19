(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/my/integral/zi-list"],
  {
    1318: function _(t, e, n) {
      "use strict";
      n.r(e);
      var u = n("44e5"),
        a = n("e69c");
      for (var o in a) {
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(o);
      }
      n("c266");
      var i = n("f0c5"),
        r = Object(i["a"])(
          a["default"],
          u["b"],
          u["c"],
          !1,
          null,
          "d99ee3d4",
          null,
          !1,
          u["a"],
          void 0
        );
      e["default"] = r.exports;
    },
    "394d": function d(t, e, n) {
      "use strict";
      var u = n("4ea4");
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var a = u(n("2eee")),
        o = u(n("c973")),
        i = {
          name: "popup",
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
          },
          props: {
            co: {
              type: Object,
              default: function _default() {
                return {};
              },
            },
            cname: { type: String, default: "" },
            value: { type: Boolean, default: !1 },
            width: { type: String, default: "70%" },
            zindex: { type: Number, default: 999 },
            outin: { type: String, default: "1" },
            storeid: { type: String, default: "" },
          },
          data: function data() {
            return { loading: !1 };
          },
          methods: {
            chooseAdd: function chooseAdd(t) {
              var e = this;
              return (0, o.default)(
                a.default.mark(function n() {
                  return a.default.wrap(function (n) {
                    while (1) {
                      switch ((n.prev = n.next)) {
                        case 0:
                          (e.showGg = !1), e.$emit("chooseAdd", t);
                        case 2:
                        case "end":
                          return n.stop();
                      }
                    }
                  }, n);
                })
              )();
            },
          },
          computed: {
            showGg: {
              get: function get() {
                return this.value;
              },
              set: function set(t) {
                this.$emit("input", t);
              },
            },
          },
        };
      e.default = i;
    },
    "44e5": function e5(t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return u;
      }),
        n.d(e, "c", function () {
          return a;
        }),
        n.d(e, "a", function () {});
      var u = function u() {
          var t = this.$createElement;
          this._self._c;
        },
        a = [];
    },
    "64aa": function aa(t, e, n) {},
    c266: function c266(t, e, n) {
      "use strict";
      var u = n("64aa"),
        a = n.n(u);
      a.a;
    },
    e69c: function e69c(t, e, n) {
      "use strict";
      n.r(e);
      var u = n("394d"),
        a = n.n(u);
      for (var o in u) {
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return u[t];
            });
          })(o);
      }
      e["default"] = a.a;
    },
  },
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  "yb_wm/my/integral/zi-list-create-component",
  {
    "yb_wm/my/integral/zi-list-create-component":
      function yb_wmMyIntegralZiListCreateComponent(
        module,
        exports,
        __webpack_require__
      ) {
        __webpack_require__("543d")["createComponent"](
          __webpack_require__("1318")
        );
      },
  },
  [["yb_wm/my/integral/zi-list-create-component"]],
]);
