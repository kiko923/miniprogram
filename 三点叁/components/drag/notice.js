(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/drag/notice"],
  {
    "0a30": function a30(t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "c", function () {
          return a;
        }),
        n.d(e, "a", function () {});
      var r = function r() {
          var t = this.$createElement;
          this._self._c;
        },
        a = [];
    },
    1551: function _(t, e, n) {},
    "913a": function a(t, e, n) {
      "use strict";
      n.r(e);
      var r = n("0a30"),
        a = n("a900");
      for (var u in a) {
        ["default"].indexOf(u) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(u);
      }
      n("b78e");
      var c = n("f0c5"),
        i = Object(c["a"])(
          a["default"],
          r["b"],
          r["c"],
          !1,
          null,
          "9f0938dc",
          null,
          !1,
          r["a"],
          void 0
        );
      e["default"] = i.exports;
    },
    a900: function a900(t, e, n) {
      "use strict";
      n.r(e);
      var r = n("d916"),
        a = n.n(r);
      for (var u in r) {
        ["default"].indexOf(u) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(u);
      }
      e["default"] = a.a;
    },
    b78e: function b78e(t, e, n) {
      "use strict";
      var r = n("1551"),
        a = n.n(r);
      a.a;
    },
    d916: function d916(t, e, n) {
      "use strict";
      (function (t) {
        var r = n("4ea4");
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var a = r(n("2eee")),
          u = r(n("c973")),
          c =
            (n("26cb"),
            {
              name: "searchBox",
              components: {
                uniNoticeBar: function uniNoticeBar() {
                  n.e("components/third/uni-notice-bar")
                    .then(
                      function () {
                        return resolve(n("990a"));
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
                shopinfo: {
                  type: Object,
                  default: function _default() {
                    return {};
                  },
                },
                u: { type: String, default: "px" },
                ptype: { type: String, default: "1" },
                type: { type: String, default: "1" },
                list: {
                  type: Array,
                  default: function _default() {
                    return [];
                  },
                },
                color: { type: String, default: "" },
                arrow: { type: Boolean, default: !0 },
              },
              data: function data() {
                return { notice: "", nlist: [] };
              },
              watch: {
                shopinfo: {
                  handler: function handler(t) {
                    var e = this;
                    return (0, u.default)(
                      a.default.mark(function n() {
                        var r, u;
                        return a.default.wrap(function (n) {
                          while (1) {
                            switch ((n.prev = n.next)) {
                              case 0:
                                if (!t.id || 2 != e.co.source) {
                                  n.next = 6;
                                  break;
                                }
                                return (
                                  (n.next = 3),
                                  e.util.request({
                                    url: e.api.ptgg,
                                    data: { type: e.co.source, storeId: t.id },
                                  })
                                );
                              case 3:
                                (r = n.sent), (u = r.data), (e.nlist = u);
                              case 6:
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
              methods: {
                goLink: function goLink(t) {
                  this.goUrl(t.url);
                },
                goDl: function goDl(e) {
                  t.setStorageSync("fwb", e.body),
                    this.go({
                      t: 1,
                      url: "/yb_wm/my/other/gywm?t=".concat(e.title, "&p=4"),
                    });
                },
              },
              created: function created() {
                var t = this;
                return (0, u.default)(
                  a.default.mark(function e() {
                    var n, r;
                    return a.default.wrap(function (e) {
                      while (1) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            (e.t0 = +t.ptype),
                              (e.next = 1 === e.t0 ? 3 : 3 === e.t0 ? 10 : 12);
                            break;
                          case 3:
                            if (1 != t.co.source) {
                              e.next = 9;
                              break;
                            }
                            return (
                              (e.next = 6),
                              t.util.request({
                                url: t.api.ptgg,
                                data: { type: t.co.source },
                              })
                            );
                          case 6:
                            (n = e.sent), (r = n.data), (t.nlist = r);
                          case 9:
                            return e.abrupt("break", 13);
                          case 10:
                            return (t.nlist = t.list), e.abrupt("break", 13);
                          case 12:
                            return e.abrupt("break", 13);
                          case 13:
                          case "end":
                            return e.stop();
                        }
                      }
                    }, e);
                  })
                )();
              },
            });
        e.default = c;
      }).call(this, n("543d")["default"]);
    },
  },
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  "components/drag/notice-create-component",
  {
    "components/drag/notice-create-component":
      function componentsDragNoticeCreateComponent(
        module,
        exports,
        __webpack_require__
      ) {
        __webpack_require__("543d")["createComponent"](
          __webpack_require__("913a")
        );
      },
  },
  [["components/drag/notice-create-component"]],
]);
