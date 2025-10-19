(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/my/signin/my-coupon"],
  {
    "022d": function d(t, e, n) {
      "use strict";
      (function (t, e) {
        var a = n("4ea4");
        n("f00a");
        a(n("66fd"));
        var i = a(n("22d6"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = n), e(i.default);
      }).call(this, n("bc2e")["default"], n("543d")["createPage"]);
    },
    "22d6": function d6(t, e, n) {
      "use strict";
      n.r(e);
      var a = n("7332"),
        i = n("8846");
      for (var r in i) {
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(r);
      }
      var u = n("f0c5"),
        c = Object(u["a"])(
          i["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "2ab81a0b",
          null,
          !1,
          a["a"],
          void 0
        );
      e["default"] = c.exports;
    },
    7332: function _(t, e, n) {
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
                  i = 1 == e.type ? Number(e.money) : null,
                  r = 1 != e.type && 2 == e.type ? Number(e.discount) : null;
                return { $orig: a, m0: i, m1: r };
              })),
            a = 0 == t.dataList.length && t.isget;
          t.$mp.data = Object.assign({}, { $root: { l0: n, g0: a } });
        },
        i = [];
    },
    8846: function _(t, e, n) {
      "use strict";
      n.r(e);
      var a = n("f916"),
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
    f916: function f916(t, e, n) {
      "use strict";
      var a = n("4ea4");
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var i = a(n("2eee")),
        r = a(n("c973")),
        u = (n("26cb"), n("4789")),
        c = {
          name: "mySignin",
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
            return { params: { page: 1, size: 10, receiveType: 2 } };
          },
          onLoad: function onLoad() {
            this.getSystem(), this.util.setNT("我的优惠券"), this.getList();
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
                            t.util.request({
                              url: t.api.wdyhq,
                              mask: 1,
                              data: t.params,
                            })
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
        };
      e.default = c;
    },
  },
  [["022d", "common/runtime", "common/vendor"]],
]);
