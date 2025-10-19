(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/third/uni-fab"],
  {
    "5b74": function b74(t, n, i) {
      "use strict";
      i.d(n, "b", function () {
        return o;
      }),
        i.d(n, "c", function () {
          return e;
        }),
        i.d(n, "a", function () {});
      var o = function o() {
          var t = this.$createElement;
          this._self._c;
        },
        e = [];
    },
    7164: function _(t, n, i) {},
    7707: function _(t, n, i) {
      "use strict";
      var o = i("7164"),
        e = i.n(o);
      e.a;
    },
    aa6f: function aa6f(t, n, i) {
      "use strict";
      i.r(n);
      var o = i("b936"),
        e = i.n(o);
      for (var r in o) {
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            i.d(n, t, function () {
              return o[t];
            });
          })(r);
      }
      n["default"] = e.a;
    },
    b936: function b936(t, n, i) {
      "use strict";
      (function (t) {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.default = void 0);
        var i = {
          props: {
            pattern: {
              type: Object,
              default: function _default() {
                return {};
              },
            },
            horizontal: { type: String, default: "left" },
            vertical: { type: String, default: "bottom" },
            direction: { type: String, default: "horizontal" },
            content: {
              type: Array,
              default: function _default() {
                return [];
              },
            },
          },
          data: function data() {
            return {
              fabShow: !1,
              flug: !0,
              showContent: !1,
              styles: {
                color: "#3c3e49",
                selectedColor: "#007AFF",
                backgroundColor: "#fff",
                buttonColor: "#3c3e49",
              },
            };
          },
          created: function created() {
            0 === this.top && (this.fabShow = !0),
              (this.styles = Object.assign({}, this.styles, this.pattern));
          },
          methods: {
            open: function open() {
              this.showContent = !this.showContent;
            },
            taps: function taps(t, n) {
              this.$emit("trigger", { index: t, item: n });
            },
            getPosition: function getPosition(t, n, i) {
              return 0 === t
                ? this.horizontal === n && this.vertical === i
                : 1 === t
                ? this.direction === n && this.vertical === i
                : 2 === t
                ? this.direction === n && this.horizontal === i
                : this.showContent && this.direction === n
                ? this.contentWidth
                : this.contentWidthMin;
            },
          },
          watch: {
            pattern: function pattern(t, n) {
              console.log(JSON.stringify(t)),
                (this.styles = Object.assign({}, this.styles, t));
            },
          },
          computed: {
            contentWidth: function contentWidth(n) {
              return t.upx2px(85 * (this.content.length + 1) + 20) + "px";
            },
            contentWidthMin: function contentWidthMin() {
              return t.upx2px(85) + "px";
            },
            boxWidth: function boxWidth() {
              return this.getPosition(3, "horizontal");
            },
            boxHeight: function boxHeight() {
              return this.getPosition(3, "vertical");
            },
            leftBottom: function leftBottom() {
              return this.getPosition(0, "left", "bottom");
            },
            rightBottom: function rightBottom() {
              return this.getPosition(0, "right", "bottom");
            },
            leftTop: function leftTop() {
              return this.getPosition(0, "left", "top");
            },
            rightTop: function rightTop() {
              return this.getPosition(0, "right", "top");
            },
            flexDirectionStart: function flexDirectionStart() {
              return this.getPosition(1, "vertical", "top");
            },
            flexDirectionEnd: function flexDirectionEnd() {
              return this.getPosition(1, "vertical", "bottom");
            },
            horizontalLeft: function horizontalLeft() {
              return this.getPosition(2, "horizontal", "left");
            },
            horizontalRight: function horizontalRight() {
              return this.getPosition(2, "horizontal", "right");
            },
          },
        };
        n.default = i;
      }).call(this, i("543d")["default"]);
    },
    c675: function c675(t, n, i) {
      "use strict";
      i.r(n);
      var o = i("5b74"),
        e = i("aa6f");
      for (var r in e) {
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            i.d(n, t, function () {
              return e[t];
            });
          })(r);
      }
      i("7707");
      var s = i("f0c5"),
        u = Object(s["a"])(
          e["default"],
          o["b"],
          o["c"],
          !1,
          null,
          "eaf8d54e",
          null,
          !1,
          o["a"],
          void 0
        );
      n["default"] = u.exports;
    },
  },
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  "components/third/uni-fab-create-component",
  {
    "components/third/uni-fab-create-component":
      function componentsThirdUniFabCreateComponent(
        module,
        exports,
        __webpack_require__
      ) {
        __webpack_require__("543d")["createComponent"](
          __webpack_require__("c675")
        );
      },
  },
  [["components/third/uni-fab-create-component"]],
]);
