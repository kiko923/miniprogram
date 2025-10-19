(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/other/info/index"],
  {
    "17c7": function c7(t, e, n) {
      "use strict";
      var a = n("4ea4");
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var i = a(n("2eee")),
        r = a(n("c973")),
        u = (n("26cb"), n("4789")),
        c = {
          name: "myIntegral",
          components: {
            jzz: function jzz() {
              n.e("components/common/jzz")
                .then(
                  function () {
                    return resolve(n("3db1"));
                  }.bind(null, n)
                )
                .catch(n.oe);
            },
          },
          data: function data() {
            return { params: { page: 1, size: 10 } };
          },
          onLoad: function onLoad() {
            var t = this;
            return (0, r.default)(
              i.default.mark(function e() {
                return i.default.wrap(function (e) {
                  while (1) {
                    switch ((e.prev = e.next)) {
                      case 0:
                        t.getSystem().then(function () {
                          t.util.setNT(t.system.custom.informationTitle);
                        }),
                          t.getList();
                      case 2:
                      case "end":
                        return e.stop();
                    }
                  }
                }, e);
              })
            )();
          },
          mixins: [u.utilMixins, u.sljz],
          computed: {},
          methods: {
            getList: function getList() {
              var t = this;
              return (0, r.default)(
                i.default.mark(function e() {
                  var n, a;
                  return i.default.wrap(function (e) {
                    while (1) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            t.util.request({ url: t.api.zxlb, data: t.params })
                          );
                        case 2:
                          (n = e.sent),
                            (a = n.data),
                            (t.dataList = t.dataList.concat(a)),
                            (t.isget = !0),
                            (t.mygd = t.params.size > a.length),
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
          onShareAppMessage: function onShareAppMessage() {
            return this.util.mpShare({
              t: "进来看看" + this.system.custom.informationTitle,
            });
          },
          onShareTimeline: function onShareTimeline(t) {
            return { title: "进来看看" + this.system.custom.informationTitle };
          },
        };
      e.default = c;
    },
    4392: function _(t, e, n) {
      "use strict";
      var a = n("e5c0"),
        i = n.n(a);
      i.a;
    },
    "5de5": function de5(t, e, n) {
      "use strict";
      n.r(e);
      var a = n("17c7"),
        i = n.n(a);
      for (var r in a) {
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(r);
      }
      e["default"] = i.a;
    },
    "7dea": function dea(t, e, n) {
      "use strict";
      n.r(e);
      var a = n("9f2d"),
        i = n("5de5");
      for (var r in i) {
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(r);
      }
      n("4392");
      var u = n("f0c5"),
        c = Object(u["a"])(
          i["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "68d6188d",
          null,
          !1,
          a["a"],
          void 0
        );
      e["default"] = c.exports;
    },
    "9f2d": function f2d(t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return a;
      }),
        n.d(e, "c", function () {
          return i;
        }),
        n.d(e, "a", function () {});
      var a = function a() {
          var t = this,
            e = t.$createElement,
            n =
              (t._self._c,
              t.__map(t.dataList, function (e, n) {
                var a = t.__get_orig(e),
                  i = t.timeToDate(e.createdAt, "MM月dd日");
                return { $orig: a, m0: i };
              })),
            a = 0 == t.dataList.length && t.isget;
          t.$mp.data = Object.assign({}, { $root: { l0: n, g0: a } });
        },
        i = [];
    },
    e5c0: function e5c0(t, e, n) {},
    f252: function f252(t, e, n) {
      "use strict";
      (function (t, e) {
        var a = n("4ea4");
        n("f00a");
        a(n("66fd"));
        var i = a(n("7dea"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = n), e(i.default);
      }).call(this, n("bc2e")["default"], n("543d")["createPage"]);
    },
  },
  [["f252", "common/runtime", "common/vendor"]],
]);
