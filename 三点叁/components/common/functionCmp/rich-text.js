(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/common/functionCmp/rich-text"],
  {
    "0b28": function b28(e, t, n) {
      "use strict";
      n.r(t);
      var c = n("9cbb"),
        r = n("3ae3");
      for (var o in r) {
        ["default"].indexOf(o) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return r[e];
            });
          })(o);
      }
      n("bc82");
      var a = n("f0c5"),
        i = Object(a["a"])(
          r["default"],
          c["b"],
          c["c"],
          !1,
          null,
          "4e29163f",
          null,
          !1,
          c["a"],
          void 0
        );
      t["default"] = i.exports;
    },
    "1e55": function e55(e, t, n) {
      "use strict";
      (function (e) {
        var c = n("4ea4");
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var r = c(n("2eee")),
          o = c(n("c973")),
          a =
            (n("26cb"),
            {
              name: "searchBox",
              components: {
                uParse: function uParse() {
                  Promise.all([
                    n.e("common/vendor"),
                    n.e("components/uParse/src/wxParse"),
                  ])
                    .then(
                      function () {
                        return resolve(n("55d7"));
                      }.bind(null, n)
                    )
                    .catch(n.oe);
                },
              },
              props: {
                type: { type: String, default: "1" },
                co: {
                  type: Object,
                  default: function _default() {
                    return { richText: "", topMargin: 0 };
                  },
                },
                u: { type: String, default: "px" },
                color: { type: String, default: "" },
                content: { type: String, default: "" },
              },
              data: function data() {
                return {};
              },
              computed: {
                nodes: function nodes() {
                  return 1 == this.type
                    ? this.co.html
                        .replace(
                          /\<p class="ql-align-center/gi,
                          '<p style="text-align:center" class="ql-align-center'
                        )
                        .replace(
                          /\<img/gi,
                          '<img style="max-width:100%;height:auto"'
                        )
                    : this.content.replace(/<img[^>]*>/gi, function (e, t) {
                        return e.replace(
                          /style=|alt\s*?=\s*?([‘"])[\s\S]*?\1/gi,
                          'style="width:100%;height:auto;"'
                        );
                      });
                },
              },
              methods: {
                preview: function preview(e, t) {
                  console.log("src: " + e);
                },
                navigate: function navigate(t, n) {
                  console.log("href: " + t),
                    e.showModal({
                      content: "点击链接为：" + t,
                      showCancel: !1,
                    });
                },
              },
              created: function created() {
                return (0, o.default)(
                  r.default.mark(function e() {
                    return r.default.wrap(function (e) {
                      while (1) {
                        switch ((e.prev = e.next)) {
                          case 0:
                          case "end":
                            return e.stop();
                        }
                      }
                    }, e);
                  })
                )();
              },
            });
        t.default = a;
      }).call(this, n("543d")["default"]);
    },
    "3ae3": function ae3(e, t, n) {
      "use strict";
      n.r(t);
      var c = n("1e55"),
        r = n.n(c);
      for (var o in c) {
        ["default"].indexOf(o) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return c[e];
            });
          })(o);
      }
      t["default"] = r.a;
    },
    "3e65": function e65(e, t, n) {},
    "9cbb": function cbb(e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return c;
      }),
        n.d(t, "c", function () {
          return r;
        }),
        n.d(t, "a", function () {});
      var c = function c() {
          var e = this.$createElement;
          this._self._c;
        },
        r = [];
    },
    bc82: function bc82(e, t, n) {
      "use strict";
      var c = n("3e65"),
        r = n.n(c);
      r.a;
    },
  },
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  "components/common/functionCmp/rich-text-create-component",
  {
    "components/common/functionCmp/rich-text-create-component":
      function componentsCommonFunctionCmpRichTextCreateComponent(
        module,
        exports,
        __webpack_require__
      ) {
        __webpack_require__("543d")["createComponent"](
          __webpack_require__("0b28")
        );
      },
  },
  [["components/common/functionCmp/rich-text-create-component"]],
]);
