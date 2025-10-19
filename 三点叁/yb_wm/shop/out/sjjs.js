(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/shop/out/sjjs"],
  {
    "0188": function _(t, n, e) {
      "use strict";
      (function (t, n) {
        var c = e("4ea4");
        e("f00a");
        c(e("66fd"));
        var i = c(e("3046"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = e), n(i.default);
      }).call(this, e("bc2e")["default"], e("543d")["createPage"]);
    },
    3046: function _(t, n, e) {
      "use strict";
      e.r(n);
      var c = e("8924"),
        i = e("6c37");
      for (var u in i) {
        ["default"].indexOf(u) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return i[t];
            });
          })(u);
      }
      e("323c");
      var o = e("f0c5"),
        a = Object(o["a"])(
          i["default"],
          c["b"],
          c["c"],
          !1,
          null,
          "693d24d4",
          null,
          !1,
          c["a"],
          void 0
        );
      n["default"] = a.exports;
    },
    "323c": function c(t, n, e) {
      "use strict";
      var c = e("481f"),
        i = e.n(c);
      i.a;
    },
    "481f": function f(t, n, e) {},
    "506d": function d(t, n, e) {
      "use strict";
      var c = e("4ea4");
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0);
      var i = c(e("2eee")),
        u = c(e("c973")),
        o =
          (e("26cb"),
          {
            name: "bzf",
            components: {
              MgImg: function MgImg() {
                e.e("components/common/mg-img")
                  .then(
                    function () {
                      return resolve(e("2dc2"));
                    }.bind(null, e)
                  )
                  .catch(e.oe);
              },
              navTab: function navTab() {
                e.e("components/common/functionCmp/nav-tab")
                  .then(
                    function () {
                      return resolve(e("ceaf"));
                    }.bind(null, e)
                  )
                  .catch(e.oe);
              },
            },
            data: function data() {
              return {
                info: {},
                list: [],
                tIdx: 0,
                tabs: [{ name: "商品安全档案" }, { name: "营业执照" }],
              };
            },
            onLoad: function onLoad(t) {
              var n = this;
              return (0, u.default)(
                i.default.mark(function e() {
                  return i.default.wrap(function (e) {
                    while (1) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          n.getSystem(),
                            (n.info = JSON.parse(decodeURIComponent(t.info))),
                            n.changeTab(n.tIdx);
                        case 3:
                        case "end":
                          return e.stop();
                      }
                    }
                  }, e);
                })
              )();
            },
            computed: {},
            methods: {
              changeTab: function changeTab(t) {
                var n = this;
                0 == this.tIdx
                  ? (this.util.setNT("商品安全档案"),
                    (this.list = this.info.foodRecords.map(function (t) {
                      return n.getImgS(t);
                    })))
                  : 1 == this.tIdx &&
                    (this.util.setNT("营业执照"),
                    (this.list = this.info.license.map(function (t) {
                      return n.getImgS(t);
                    })));
              },
              yl: function yl(t) {
                this.util.preImg({ idx: t, urls: this.list });
              },
            },
            created: function created() {
              return (0, u.default)(
                i.default.mark(function t() {
                  return i.default.wrap(function (t) {
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
      n.default = o;
    },
    "6c37": function c37(t, n, e) {
      "use strict";
      e.r(n);
      var c = e("506d"),
        i = e.n(c);
      for (var u in c) {
        ["default"].indexOf(u) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return c[t];
            });
          })(u);
      }
      n["default"] = i.a;
    },
    8924: function _(t, n, e) {
      "use strict";
      e.d(n, "b", function () {
        return c;
      }),
        e.d(n, "c", function () {
          return i;
        }),
        e.d(n, "a", function () {});
      var c = function c() {
          var t = this.$createElement;
          this._self._c;
        },
        i = [];
    },
  },
  [["0188", "common/runtime", "common/vendor"]],
]);
