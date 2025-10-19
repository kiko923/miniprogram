(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/common/mg-img"],
  {
    "2cd4": function cd4(t, n, e) {
      "use strict";
      e.d(n, "b", function () {
        return a;
      }),
        e.d(n, "c", function () {
          return c;
        }),
        e.d(n, "a", function () {});
      var a = function a() {
          var t = this.$createElement,
            n = (this._self._c, this.__get_style([this.sname])),
            e = this.getUrl(this.src);
          this.$mp.data = Object.assign({}, { $root: { s0: n, m0: e } });
        },
        c = [];
    },
    "2dc2": function dc2(t, n, e) {
      "use strict";
      e.r(n);
      var a = e("2cd4"),
        c = e("b5ca");
      for (var i in c) {
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return c[t];
            });
          })(i);
      }
      e("87a2");
      var r = e("f0c5"),
        u = Object(r["a"])(
          c["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "07fa0f6c",
          null,
          !1,
          a["a"],
          void 0
        );
      n["default"] = u.exports;
    },
    "6ee2": function ee2(t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0);
      var a = {
        name: "mg-img",
        props: {
          cname: "",
          sname: "",
          src: "",
          local: "",
          m: { type: String, default: "aspectFill" },
        },
        data: function data() {
          return {};
        },
        methods: {
          getUrl: function getUrl(t) {
            return t
              ? t.indexOf("http") > -1 ||
                t.indexOf("/static/") > -1 ||
                t.indexOf("base64") > -1 ||
                1 == this.local
                ? t
                : this.url + t
              : "/static/no.png";
          },
        },
        computed: {},
      };
      n.default = a;
    },
    "87a2": function a2(t, n, e) {
      "use strict";
      var a = e("e5ba"),
        c = e.n(a);
      c.a;
    },
    b5ca: function b5ca(t, n, e) {
      "use strict";
      e.r(n);
      var a = e("6ee2"),
        c = e.n(a);
      for (var i in a) {
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return a[t];
            });
          })(i);
      }
      n["default"] = c.a;
    },
    e5ba: function e5ba(t, n, e) {},
  },
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  "components/common/mg-img-create-component",
  {
    "components/common/mg-img-create-component":
      function componentsCommonMgImgCreateComponent(
        module,
        exports,
        __webpack_require__
      ) {
        __webpack_require__("543d")["createComponent"](
          __webpack_require__("2dc2")
        );
      },
  },
  [["components/common/mg-img-create-component"]],
]);
