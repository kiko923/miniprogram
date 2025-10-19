(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/order/invitation/syxq"],
  {
    1702: function _(t, e, a) {
      "use strict";
      (function (t, e) {
        var n = a("4ea4");
        a("f00a");
        n(a("66fd"));
        var r = n(a("f411"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = a), e(r.default);
      }).call(this, a("bc2e")["default"], a("543d")["createPage"]);
    },
    "182e": function e(t, _e, a) {},
    3829: function _(t, e, a) {
      "use strict";
      a.r(e);
      var n = a("42d8"),
        r = a.n(n);
      for (var u in n) {
        ["default"].indexOf(u) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(u);
      }
      e["default"] = r.a;
    },
    "42d8": function d8(t, e, a) {
      "use strict";
      var n = a("4ea4");
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var r = n(a("2eee")),
        u = n(a("c973")),
        i = (a("26cb"), a("4789")),
        s = {
          name: "wdfs",
          components: {
            navTab: function navTab() {
              a.e("components/common/functionCmp/nav-tab")
                .then(
                  function () {
                    return resolve(a("ceaf"));
                  }.bind(null, a)
                )
                .catch(a.oe);
            },
            jzz: function jzz() {
              a.e("components/common/jzz")
                .then(
                  function () {
                    return resolve(a("3db1"));
                  }.bind(null, a)
                )
                .catch(a.oe);
            },
          },
          data: function data() {
            return {
              aIdx: -1,
              tabs: [{ name: "已入账" }, { name: "在路上" }],
              params: { size: 10, page: 1, type: "" },
            };
          },
          onLoad: function onLoad(t) {
            var e = this;
            return (0, u.default)(
              r.default.mark(function a() {
                var n;
                return r.default.wrap(function (a) {
                  while (1) {
                    switch ((a.prev = a.next)) {
                      case 0:
                        console.log(t),
                          e.getSystem(),
                          (n = ""),
                          (a.t0 = +t.t),
                          (a.next =
                            1 === a.t0
                              ? 6
                              : 2 === a.t0
                              ? 9
                              : 3 === a.t0
                              ? 12
                              : 4 === a.t0
                              ? 15
                              : 18);
                        break;
                      case 6:
                        return (
                          (n = "今日收益"), (e.aIdx = 0), a.abrupt("break", 21)
                        );
                      case 9:
                        return (
                          (n = "已完成订单"),
                          (e.params.state = 2),
                          a.abrupt("break", 21)
                        );
                      case 12:
                        return (
                          (n = "在途中订单"),
                          (e.params.state = 1),
                          a.abrupt("break", 21)
                        );
                      case 15:
                        return (
                          (n = "我的伙伴-收益详情"),
                          (e.params.partnerId = t.uid),
                          a.abrupt("break", 21)
                        );
                      case 18:
                        return (
                          (n = "收益详情"), (e.aIdx = 0), a.abrupt("break", 21)
                        );
                      case 21:
                        return e.util.setNT(n), (a.next = 24), e.getLoginInfo();
                      case 24:
                        (e.params.userId = e.uId),
                          t.t > 1 ? e.getList() : e.changeTab(e.aIdx);
                      case 26:
                      case "end":
                        return a.stop();
                    }
                  }
                }, a);
              })
            )();
          },
          mixins: [i.sljz, i.utilMixins],
          computed: {},
          methods: {
            changeTab: function changeTab(t) {
              (this.isget = this.mygd = !1),
                (this.params.page = 1),
                (this.params.type = 0 == t ? 2 : 1),
                (this.dataList = []),
                this.getList();
            },
            getList: function getList() {
              var t = this;
              return (0, u.default)(
                r.default.mark(function e() {
                  var a, n;
                  return r.default.wrap(function (e) {
                    while (1) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            t.util.request({
                              url: t.api.distributionDO,
                              data: t.params,
                            })
                          );
                        case 2:
                          (a = e.sent),
                            (n = a.data),
                            (t.dataList = t.dataList.concat(n)),
                            (t.isget = !0),
                            (t.mygd = t.params.size > n.length),
                            t.params.page++;
                        case 8:
                        case "end":
                          return e.stop();
                      }
                    }
                  }, e);
                })
              )();
            },
          },
        };
      e.default = s;
    },
    "5c64": function c64(t, e, a) {
      "use strict";
      var n = a("182e"),
        r = a.n(n);
      r.a;
    },
    f142: function f142(t, e, a) {
      "use strict";
      a.d(e, "b", function () {
        return n;
      }),
        a.d(e, "c", function () {
          return r;
        }),
        a.d(e, "a", function () {});
      var n = function n() {
          var t = this,
            e = t.$createElement,
            a =
              (t._self._c,
              t.__map(t.dataList, function (e, a) {
                var n = t.__get_orig(e),
                  r = e.createdAt.substring(0, 16);
                return { $orig: n, g0: r };
              })),
            n = 0 == t.dataList.length && t.isget;
          t.$mp.data = Object.assign({}, { $root: { l0: a, g1: n } });
        },
        r = [];
    },
    f411: function f411(t, e, a) {
      "use strict";
      a.r(e);
      var n = a("f142"),
        r = a("3829");
      for (var u in r) {
        ["default"].indexOf(u) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return r[t];
            });
          })(u);
      }
      a("5c64");
      var i = a("f0c5"),
        s = Object(i["a"])(
          r["default"],
          n["b"],
          n["c"],
          !1,
          null,
          "0e97d010",
          null,
          !1,
          n["a"],
          void 0
        );
      e["default"] = s.exports;
    },
  },
  [["1702", "common/runtime", "common/vendor"]],
]);
