(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/shop/gfhb/gfhb"],
  {
    "1dce": function dce(e, n, t) {
      "use strict";
      t.r(n);
      var u = t("24d1"),
        r = t.n(u);
      for (var o in u) {
        ["default"].indexOf(o) < 0 &&
          (function (e) {
            t.d(n, e, function () {
              return u[e];
            });
          })(o);
      }
      n["default"] = r.a;
    },
    "24d1": function d1(e, n, t) {
      "use strict";
      var u = t("4ea4");
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0);
      var r = u(t("2eee")),
        o = u(t("c973")),
        c = (t("26cb"), t("4789")),
        i = {
          name: "gfhb",
          components: {
            MgImg: function MgImg() {
              t.e("components/common/mg-img")
                .then(
                  function () {
                    return resolve(t("2dc2"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
            MgCell: function MgCell() {
              t.e("components/common/mg-cell")
                .then(
                  function () {
                    return resolve(t("f3fc"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
            bookText: function bookText() {
              Promise.all([
                t.e("common/vendor"),
                t.e("components/common/functionCmp/rich-text"),
              ])
                .then(
                  function () {
                    return resolve(t("0b28"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
            load: function load() {
              t.e("components/common/load")
                .then(
                  function () {
                    return resolve(t("2d33"));
                  }.bind(null, t)
                )
                .catch(t.oe);
            },
          },
          data: function data() {
            return {
              agreement: "",
              content: "",
              couponData: "",
              hbData: [],
              divinfo: "",
              showLoading: !0,
            };
          },
          onLoad: function onLoad(e) {
            var n = this;
            return (0, o.default)(
              r.default.mark(function t() {
                return r.default.wrap(function (t) {
                  while (1) {
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), n.getLoginInfo();
                      case 2:
                        n.getSystem(),
                          n.util.setNT("瓜分红包"),
                          (n.query = e),
                          n.getReceive();
                      case 6:
                      case "end":
                        return t.stop();
                    }
                  }
                }, t);
              })
            )();
          },
          mixins: [c.utilMixins],
          computed: {},
          methods: {
            getReceive: function getReceive() {
              var e = this;
              return (0, o.default)(
                r.default.mark(function n() {
                  return r.default.wrap(function (n) {
                    while (1) {
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.next = 2),
                            e.util
                              .request({
                                url: e.api.divreceive,
                                method: "POST",
                                data: { id: e.query.id },
                              })
                              .then(function (n) {
                                e.getInfo();
                              })
                          );
                        case 2:
                          n.sent;
                        case 3:
                        case "end":
                          return n.stop();
                      }
                    }
                  }, n);
                })
              )();
            },
            getInfo: function getInfo() {
              var e = this;
              return (0, o.default)(
                r.default.mark(function n() {
                  var t, u;
                  return r.default.wrap(function (n) {
                    while (1) {
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.next = 2),
                            e.util.request({
                              url: e.api.divinfo,
                              data: { id: e.query.id },
                            })
                          );
                        case 2:
                          (t = n.sent),
                            (u = t.data),
                            (e.divinfo = u),
                            (e.showLoading = !1);
                        case 6:
                        case "end":
                          return n.stop();
                      }
                    }
                  }, n);
                })
              )();
            },
            yjdllq: function yjdllq() {
              var e = this;
              return (0, o.default)(
                r.default.mark(function n() {
                  return r.default.wrap(function (n) {
                    while (1) {
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.next = 2), e.checkLogin();
                        case 2:
                          if (n.sent) {
                            n.next = 4;
                            break;
                          }
                          return n.abrupt("return");
                        case 4:
                          e.getReceive();
                        case 5:
                        case "end":
                          return n.stop();
                      }
                    }
                  }, n);
                })
              )();
            },
            use: function use() {
              this.go({ t: 6, url: "/yb_wm/index/goods" });
            },
            seelist: function seelist() {
              this.go({
                t: 1,
                url: "/yb_wm/shop/gfhb/gflb?id=".concat(this.query.id),
              });
            },
          },
        };
      n.default = i;
    },
    3241: function _(e, n, t) {},
    "4a9b": function a9b(e, n, t) {
      "use strict";
      t.r(n);
      var u = t("fd02"),
        r = t("1dce");
      for (var o in r) {
        ["default"].indexOf(o) < 0 &&
          (function (e) {
            t.d(n, e, function () {
              return r[e];
            });
          })(o);
      }
      t("7249");
      var c = t("f0c5"),
        i = Object(c["a"])(
          r["default"],
          u["b"],
          u["c"],
          !1,
          null,
          null,
          null,
          !1,
          u["a"],
          void 0
        );
      n["default"] = i.exports;
    },
    "6e0a": function e0a(e, n, t) {
      "use strict";
      (function (e, n) {
        var u = t("4ea4");
        t("f00a");
        u(t("66fd"));
        var r = u(t("4a9b"));
        (e.__webpack_require_UNI_MP_PLUGIN__ = t), n(r.default);
      }).call(this, t("bc2e")["default"], t("543d")["createPage"]);
    },
    7249: function _(e, n, t) {
      "use strict";
      var u = t("3241"),
        r = t.n(u);
      r.a;
    },
    fd02: function fd02(e, n, t) {
      "use strict";
      t.d(n, "b", function () {
        return u;
      }),
        t.d(n, "c", function () {
          return r;
        }),
        t.d(n, "a", function () {});
      var u = function u() {
          var e = this.$createElement;
          this._self._c;
        },
        r = [];
    },
  },
  [["6e0a", "common/runtime", "common/vendor"]],
]);
