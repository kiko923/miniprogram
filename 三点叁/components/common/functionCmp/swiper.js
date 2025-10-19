(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/common/functionCmp/swiper"],
  {
    "1d49": function d49(t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "c", function () {
          return i;
        }),
        n.d(e, "a", function () {});
      var r = function r() {
          var t = this.$createElement,
            e = (this._self._c, this.list.length),
            n = e && "px" == this.u ? this.getSjgd(this.co.height) : null,
            r = e ? this.list.length : null;
          this.$mp.data = Object.assign({}, { $root: { g0: e, m0: n, g1: r } });
        },
        i = [];
    },
    3415: function _(t, e, n) {
      "use strict";
      n.r(e);
      var r = n("1d49"),
        i = n("d59d");
      for (var a in i) {
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(a);
      }
      n("6abf");
      var u = n("f0c5"),
        o = Object(u["a"])(
          i["default"],
          r["b"],
          r["c"],
          !1,
          null,
          "07555280",
          null,
          !1,
          r["a"],
          void 0
        );
      e["default"] = o.exports;
    },
    "5a35": function a35(t, e, n) {
      "use strict";
      (function (t) {
        var r = n("4ea4");
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var i = r(n("2eee")),
          a = r(n("c973")),
          u =
            (n("26cb"),
            {
              name: "swiper",
              props: {
                co: {
                  type: Object,
                  default: function _default() {
                    return {
                      class: "",
                      topMargin: 0,
                      leftRightPadding: 0,
                      upDownPadding: 0,
                      swiper: { children: [] },
                      duration: "",
                      mode: "",
                      height: "",
                      radius: "",
                      auto: !0,
                      interval: 5,
                    };
                  },
                },
                storeInfo: {
                  type: Object,
                  default: function _default() {
                    return {};
                  },
                },
                u: { type: String, default: "px" },
                color: { type: String, default: "" },
              },
              data: function data() {
                return { StoreAd: [] };
              },
              computed: {
                list: function list() {
                  return 1 != this.co.reverseThree
                    ? this.co.swiper || []
                    : this.StoreAd;
                },
              },
              watch: {
                storeInfo: {
                  handler: function handler(t) {
                    var e = this;
                    return (0, a.default)(
                      i.default.mark(function t() {
                        var n, r;
                        return i.default.wrap(function (t) {
                          while (1) {
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (!e.storeInfo.id || 1 != e.co.reverseThree) {
                                  t.next = 6;
                                  break;
                                }
                                return (
                                  (t.next = 3),
                                  e.util.request({
                                    url: e.api.StoreAd,
                                    data: { type: 1, storeId: e.storeInfo.id },
                                  })
                                );
                              case 3:
                                (n = t.sent), (r = n.data), (e.StoreAd = r);
                              case 6:
                              case "end":
                                return t.stop();
                            }
                          }
                        }, t);
                      })
                    )();
                  },
                  immediate: !0,
                },
              },
              methods: {
                goTo: function goTo(e) {
                  var n = this.list[e];
                  if (n.entry) this.goUrl(n.entry, n);
                  else if (n.link)
                    switch (n.link.type) {
                      case "webUrl":
                        this.go({
                          t: 1,
                          url:
                            "/yb_wm/other/web-view?src=" +
                            encodeURIComponent(JSON.stringify(n.link.url)),
                        });
                        break;
                      case "miniUrl":
                        t.navigateTo({ url: n.link.url });
                        break;
                      case "mini":
                        t.navigateToMiniProgram({
                          appId: n.link.url,
                          path: n.link.xcx_name,
                        });
                        break;
                    }
                },
              },
              created: function created() {
                return (0, a.default)(
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
        e.default = u;
      }).call(this, n("543d")["default"]);
    },
    "6abf": function abf(t, e, n) {
      "use strict";
      var r = n("87a0"),
        i = n.n(r);
      i.a;
    },
    "87a0": function a0(t, e, n) {},
    d59d: function d59d(t, e, n) {
      "use strict";
      n.r(e);
      var r = n("5a35"),
        i = n.n(r);
      for (var a in r) {
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(a);
      }
      e["default"] = i.a;
    },
  },
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  "components/common/functionCmp/swiper-create-component",
  {
    "components/common/functionCmp/swiper-create-component":
      function componentsCommonFunctionCmpSwiperCreateComponent(
        module,
        exports,
        __webpack_require__
      ) {
        __webpack_require__("543d")["createComponent"](
          __webpack_require__("3415")
        );
      },
  },
  [["components/common/functionCmp/swiper-create-component"]],
]);
