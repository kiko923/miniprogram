(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/my/other/gywm"],
  {
    "299c": function c(e, t, r) {
      "use strict";
      (function (e) {
        var n = r("4ea4");
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var a = n(r("2eee")),
          c = n(r("9523")),
          u = n(r("c973")),
          o = r("26cb");
        function i(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function s(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? i(Object(r), !0).forEach(function (t) {
                  (0, c.default)(e, t, r[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : i(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
          }
          return e;
        }
        var f = {
          name: "gywm",
          components: {
            mgRtext: function mgRtext() {
              Promise.all([
                r.e("common/vendor"),
                r.e("components/common/functionCmp/rich-text"),
              ])
                .then(
                  function () {
                    return resolve(r("0b28"));
                  }.bind(null, r)
                )
                .catch(r.oe);
            },
          },
          data: function data() {
            return { loading: !1, content: "" };
          },
          onLoad: function onLoad(t) {
            var r = this;
            return (0, u.default)(
              a.default.mark(function n() {
                var c, u, o, i, s;
                return a.default.wrap(function (n) {
                  while (1) {
                    switch ((n.prev = n.next)) {
                      case 0:
                        r.getSystem(),
                          r.util.setNT(t.t),
                          (c = ""),
                          (n.t0 = +t.p),
                          (n.next =
                            1 === n.t0
                              ? 6
                              : 2 === n.t0
                              ? 8
                              : 3 === n.t0
                              ? 14
                              : 4 === n.t0
                              ? 16
                              : 5 === n.t0
                              ? 18
                              : 6 === n.t0
                              ? 20
                              : 7 === n.t0 || 9 === n.t0
                              ? 22
                              : 8 === n.t0
                              ? 24
                              : 10 === n.t0
                              ? 29
                              : 11 === n.t0
                              ? 31
                              : 12 === n.t0
                              ? 33
                              : 13 === n.t0
                              ? 35
                              : 14 === n.t0
                              ? 37
                              : 15 === n.t0
                              ? 42
                              : 16 === n.t0
                              ? 44
                              : 46);
                        break;
                      case 6:
                        return (
                          (c = r.system.introduction), n.abrupt("break", 46)
                        );
                      case 8:
                        return (
                          (n.next = 10),
                          r.util.request({
                            url: r.api.bzxq,
                            data: { id: t.id },
                          })
                        );
                      case 10:
                        return (
                          (u = n.sent),
                          (o = u.data),
                          (c = o.body),
                          n.abrupt("break", 46)
                        );
                      case 14:
                        return (
                          (c = r.vipConfig.cardNotice), n.abrupt("break", 46)
                        );
                      case 16:
                        return (
                          (c = e.getStorageSync("fwb")), n.abrupt("break", 46)
                        );
                      case 18:
                        return (c = r.recharge.details), n.abrupt("break", 46);
                      case 20:
                        return (
                          (c = e.getStorageSync("fwb")), n.abrupt("break", 46)
                        );
                      case 22:
                        return (
                          (c = e.getStorageSync("fwb")), n.abrupt("break", 46)
                        );
                      case 24:
                        return (
                          (n.next = 26),
                          r.util.request({
                            url: r.api.config,
                            data: { ident: "integralShop " },
                          })
                        );
                      case 26:
                        return (
                          (i = n.sent),
                          (c = i.data.details),
                          n.abrupt("break", 46)
                        );
                      case 29:
                        return (
                          (c = r.enterset.agreement), n.abrupt("break", 46)
                        );
                      case 31:
                        return (
                          (c = r.storageset.content), n.abrupt("break", 46)
                        );
                      case 33:
                        return (
                          (c = r.payVipset.introduction), n.abrupt("break", 46)
                        );
                      case 35:
                        return (c = r.fxsInfo.agreement), n.abrupt("break", 46);
                      case 37:
                        return (
                          (n.next = 39),
                          r.util.request({
                            url: r.api.getStoreConfig,
                            data: {
                              ident: "storageset",
                              storeId: r.storeInfo.id,
                            },
                          })
                        );
                      case 39:
                        return (
                          (s = n.sent),
                          (c = s.data.details),
                          n.abrupt("break", 46)
                        );
                      case 42:
                        return (c = r.system.ysxy), n.abrupt("break", 46);
                      case 44:
                        return (
                          (c = e.getStorageSync("hyk")), n.abrupt("break", 46)
                        );
                      case 46:
                        (r.content = c), console.log(t);
                      case 48:
                      case "end":
                        return n.stop();
                    }
                  }
                }, n);
              })
            )();
          },
          computed: s(
            s(
              s({}, (0, o.mapState)(["vipConfig"])),
              (0, o.mapState)({
                enterset: function enterset(e) {
                  return e.config.enterset;
                },
                storageset: function storageset(e) {
                  return e.config.storageset;
                },
                recharge: function recharge(e) {
                  return e.config.recharge;
                },
                payVipset: function payVipset(e) {
                  return e.config.payVipset;
                },
                storeInfo: function storeInfo(e) {
                  return e.config.storeInfo;
                },
              })
            ),
            (0, o.mapState)("dndc", ["fxsInfo"])
          ),
          methods: {},
        };
        t.default = f;
      }).call(this, r("543d")["default"]);
    },
    "3b0d": function b0d(e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return n;
      }),
        r.d(t, "c", function () {
          return a;
        }),
        r.d(t, "a", function () {});
      var n = function n() {
          var e = this.$createElement;
          this._self._c;
        },
        a = [];
    },
    "52f7": function f7(e, t, r) {
      "use strict";
      (function (e, t) {
        var n = r("4ea4");
        r("f00a");
        n(r("66fd"));
        var a = n(r("d6a0"));
        (e.__webpack_require_UNI_MP_PLUGIN__ = r), t(a.default);
      }).call(this, r("bc2e")["default"], r("543d")["createPage"]);
    },
    d6a0: function d6a0(e, t, r) {
      "use strict";
      r.r(t);
      var n = r("3b0d"),
        a = r("eb72");
      for (var c in a) {
        ["default"].indexOf(c) < 0 &&
          (function (e) {
            r.d(t, e, function () {
              return a[e];
            });
          })(c);
      }
      var u = r("f0c5"),
        o = Object(u["a"])(
          a["default"],
          n["b"],
          n["c"],
          !1,
          null,
          "286eb99b",
          null,
          !1,
          n["a"],
          void 0
        );
      t["default"] = o.exports;
    },
    eb72: function eb72(e, t, r) {
      "use strict";
      r.r(t);
      var n = r("299c"),
        a = r.n(n);
      for (var c in n) {
        ["default"].indexOf(c) < 0 &&
          (function (e) {
            r.d(t, e, function () {
              return n[e];
            });
          })(c);
      }
      t["default"] = a.a;
    },
  },
  [["52f7", "common/runtime", "common/vendor"]],
]);
