(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/my/other/collection"],
  {
    "08fc": function fc(t, e, n) {
      "use strict";
      n.r(e);
      var a = n("b2d2"),
        i = n.n(a);
      for (var o in a) {
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(o);
      }
      e["default"] = i.a;
    },
    "33a5": function a5(t, e, n) {
      "use strict";
      (function (t, e) {
        var a = n("4ea4");
        n("f00a");
        a(n("66fd"));
        var i = a(n("d868"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = n), e(i.default);
      }).call(this, n("bc2e")["default"], n("543d")["createPage"]);
    },
    8327: function _(t, e, n) {
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
                  i = t.typeName(e),
                  o = i ? t.typeName(e) : null;
                return { $orig: a, m0: i, m1: o };
              })),
            a = 0 == t.dataList.length && t.isget;
          t.$mp.data = Object.assign({}, { $root: { l0: n, g0: a } });
        },
        i = [];
    },
    b2d2: function b2d2(t, e, n) {
      "use strict";
      var a = n("4ea4");
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var i = a(n("2eee")),
        o = a(n("c973")),
        r =
          (n("26cb"),
          {
            name: "myCoupon",
            components: {
              navTab: function navTab() {
                n.e("components/common/functionCmp/nav-tab")
                  .then(
                    function () {
                      return resolve(n("ceaf"));
                    }.bind(null, n)
                  )
                  .catch(n.oe);
              },
              jzz: function jzz() {
                n.e("components/common/jzz")
                  .then(
                    function () {
                      return resolve(n("3db1"));
                    }.bind(null, n)
                  )
                  .catch(n.oe);
              },
              uniRate: function uniRate() {
                n.e("components/third/uni-rate")
                  .then(
                    function () {
                      return resolve(n("2ad6"));
                    }.bind(null, n)
                  )
                  .catch(n.oe);
              },
            },
            data: function data() {
              return {
                aIdx: 0,
                tabs: [
                  { name: "未使用", type: 1 },
                  { name: "已使用", type: 2 },
                  { name: "已失效", type: 3 },
                ],
                dataList: [],
                isget: !1,
                mygd: !1,
                params: { userId: "", size: 10, page: 1, type: 1 },
              };
            },
            onLoad: function onLoad(t) {
              var e = this;
              return (0, o.default)(
                i.default.mark(function n() {
                  return i.default.wrap(function (n) {
                    while (1) {
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            e.getSystem(),
                            e.util.setNT("我的收藏"),
                            (n.next = 4),
                            e.getLoginInfo()
                          );
                        case 4:
                          (e.params.userId = e.uId),
                            (e.aIdx = +t.idx || 0),
                            e.changeTab(e.aIdx);
                        case 7:
                        case "end":
                          return n.stop();
                      }
                    }
                  }, n);
                })
              )();
            },
            onReachBottom: function onReachBottom() {
              !this.mygd && this.isget && ((this.isget = !1), this.getList());
            },
            computed: {},
            methods: {
              refresh: function refresh() {
                this.changeTab(this.aIdx);
              },
              changeTab: function changeTab(t) {
                (this.isget = this.mygd = !1),
                  (this.params.page = 1),
                  (this.params.size = 10),
                  (this.params.type = this.tabs[t].type),
                  (this.dataList = []),
                  this.getList();
              },
              getList: function getList() {
                var t = this;
                return (0, o.default)(
                  i.default.mark(function e() {
                    var n, a;
                    return i.default.wrap(function (e) {
                      while (1) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              t.util.request({
                                url: t.api.MyCollection,
                                method: "POST",
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
              typeName: function typeName(t) {
                return t.typeName
                  ? t.typePname + "/" + t.typeName
                  : t.typePname;
              },
              goDl: function goDl(t) {
                this.go({ t: 1, url: "/yb_o2o/gfood/shop-dl?storeId=" + t });
              },
            },
          });
      e.default = r;
    },
    d868: function d868(t, e, n) {
      "use strict";
      n.r(e);
      var a = n("8327"),
        i = n("08fc");
      for (var o in i) {
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(o);
      }
      var r = n("f0c5"),
        u = Object(r["a"])(
          i["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "6e46ad8c",
          null,
          !1,
          a["a"],
          void 0
        );
      e["default"] = u.exports;
    },
  },
  [["33a5", "common/runtime", "common/vendor"]],
]);
