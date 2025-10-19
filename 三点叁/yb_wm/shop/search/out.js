(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/shop/search/out"],
  {
    "1f70": function f70(t, e, a) {
      "use strict";
      a.d(e, "b", function () {
        return r;
      }),
        a.d(e, "c", function () {
          return s;
        }),
        a.d(e, "a", function () {});
      var r = function r() {
          var t = this,
            e = t.$createElement,
            a =
              (t._self._c,
              "index" == t.query.page
                ? t.__map(t.dataList, function (e, a) {
                    var r = t.__get_orig(e),
                      s = t.isText(e, "1"),
                      o = t.isText(e, "2"),
                      n = e.typePname ? t.typeName(e) : null;
                    return { $orig: r, m0: s, m1: o, m2: n };
                  })
                : null),
            r = 0 == t.dataList.length && t.isget;
          t.$mp.data = Object.assign({}, { $root: { l0: a, g0: r } });
        },
        s = [];
    },
    "2b40": function b40(t, e, a) {
      "use strict";
      a.r(e);
      var r = a("c934"),
        s = a.n(r);
      for (var o in r) {
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return r[t];
            });
          })(o);
      }
      e["default"] = s.a;
    },
    "339e": function e(t, _e, a) {
      "use strict";
      a.r(_e);
      var r = a("1f70"),
        s = a("2b40");
      for (var o in s) {
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            a.d(_e, t, function () {
              return s[t];
            });
          })(o);
      }
      a("8dd2");
      var n = a("f0c5"),
        i = Object(n["a"])(
          s["default"],
          r["b"],
          r["c"],
          !1,
          null,
          "e442dfba",
          null,
          !1,
          r["a"],
          void 0
        );
      _e["default"] = i.exports;
    },
    "58d5": function d5(t, e, a) {
      "use strict";
      (function (t, e) {
        var r = a("4ea4");
        a("f00a");
        r(a("66fd"));
        var s = r(a("339e"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = a), e(s.default);
      }).call(this, a("bc2e")["default"], a("543d")["createPage"]);
    },
    "8dd2": function dd2(t, e, a) {
      "use strict";
      var r = a("9b29"),
        s = a.n(r);
      s.a;
    },
    "9b29": function b29(t, e, a) {},
    c934: function c934(t, e, a) {
      "use strict";
      (function (t) {
        var r = a("4ea4");
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var s = r(a("2eee")),
          o = r(a("9523")),
          n = r(a("c973")),
          i = a("26cb"),
          c = a("6326");
        function d(t, e) {
          var a = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e &&
              (r = r.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              a.push.apply(a, r);
          }
          return a;
        }
        function u(t) {
          for (var e = 1; e < arguments.length; e++) {
            var a = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? d(Object(a), !0).forEach(function (e) {
                  (0, o.default)(t, e, a[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
              : d(Object(a)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(a, e)
                  );
                });
          }
          return t;
        }
        var p = {
          name: "order-index",
          components: {
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
              query: {},
              history: [],
              key: "",
              issearch: !1,
              dataList: [],
              isget: !1,
              mygd: !1,
              params: {},
              tableId: "",
            };
          },
          onLoad: function onLoad(e) {
            var a = this;
            return (0, n.default)(
              s.default.mark(function r() {
                var o;
                return s.default.wrap(function (r) {
                  while (1) {
                    switch ((r.prev = r.next)) {
                      case 0:
                        if (
                          ((a.query = e),
                          a.getSystem({ nosetNB: 1 }),
                          a.util.setNT(
                            "shopGoods" == e.page ||
                              "fastGoods" == e.page ||
                              "inGoods" == e.page
                              ? a.sjxx.shopData.name + "-搜索商品"
                              : "搜索"
                          ),
                          "shopdl" != e.page && "shopGoods" != e.page)
                        ) {
                          r.next = 8;
                          break;
                        }
                        (a.params = {
                          storeId: a.storeInfo.id,
                          page: 1,
                          size: 10,
                          keyword: "",
                          item: "1",
                        }),
                          (a.query.api = "spss"),
                          (r.next = 24);
                        break;
                      case 8:
                        if ("fastGoods" != e.page) {
                          r.next = 13;
                          break;
                        }
                        (a.params = {
                          storeId: a.storeInfo.id,
                          page: 1,
                          size: 10,
                          keyword: "",
                          item: "2",
                        }),
                          (a.query.api = "spss"),
                          (r.next = 24);
                        break;
                      case 13:
                        if ("inGoods" != e.page) {
                          r.next = 18;
                          break;
                        }
                        (a.params = {
                          storeId: a.sjxx.shopData.id,
                          page: 1,
                          size: 10,
                          keyword: "",
                          item: "2",
                        }),
                          (a.query.api = "spss"),
                          (r.next = 24);
                        break;
                      case 18:
                        if ("index" != e.page) {
                          r.next = 24;
                          break;
                        }
                        return (r.next = 21), (0, c.getDw)({ t: 0 });
                      case 21:
                        (o = r.sent),
                          (a.params = {
                            lat: o.latitude,
                            lng: o.longitude,
                            page: 1,
                            size: 10,
                            keyword: "",
                            item: "",
                          }),
                          (a.query.api = "StoreList");
                      case 24:
                        e.tableId &&
                          "inGoods" == e.page &&
                          (a.tableId = e.tableId),
                          t.getStorageSync("searchHistory") ||
                            t.setStorageSync("searchHistory", []),
                          (a.history = t.getStorageSync("searchHistory"));
                      case 27:
                      case "end":
                        return r.stop();
                    }
                  }
                }, r);
              })
            )();
          },
          onReachBottom: function onReachBottom() {
            !this.mygd && this.isget && ((this.isget = !1), this.getList());
          },
          computed: u(
            u({}, (0, i.mapState)(["sjxx"])),
            (0, i.mapState)({
              storeInfo: function storeInfo(t) {
                return t.config.storeInfo;
              },
            })
          ),
          methods: {
            setKey: function setKey(t) {
              (this.params.keyword = t), this.confirm();
            },
            cleanKey: function cleanKey() {
              (this.params.keyword = ""),
                (this.issearch = !1),
                (this.isget = !1),
                (this.mygd = !1),
                (this.params.page = 1),
                (this.dataList = []);
            },
            clear: function clear() {
              var e = this;
              return (0, n.default)(
                s.default.mark(function a() {
                  return s.default.wrap(
                    function (a) {
                      while (1) {
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              (a.prev = 0),
                              (a.next = 3),
                              e.util.modal("确认清空搜索历史吗？")
                            );
                          case 3:
                            (e.history = []),
                              t.removeStorageSync("searchHistory"),
                              (a.next = 9);
                            break;
                          case 7:
                            (a.prev = 7), (a.t0 = a["catch"](0));
                          case 9:
                          case "end":
                            return a.stop();
                        }
                      }
                    },
                    a,
                    null,
                    [[0, 7]]
                  );
                })
              )();
            },
            confirm: function confirm(t) {
              if (!this.params.keyword)
                return this.util.message("请输入搜索内容", 3);
              (this.issearch = !0),
                (this.isget = !1),
                (this.mygd = !1),
                (this.params.page = 1),
                (this.dataList = []),
                this.getList(),
                this.setHistory();
            },
            getList: function getList() {
              var t = this;
              return (0, n.default)(
                s.default.mark(function e() {
                  var a, r;
                  return s.default.wrap(function (e) {
                    while (1) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            t.util.request({
                              url: t.api[t.query.api],
                              method: "POST",
                              data: t.params,
                            })
                          );
                        case 2:
                          (a = e.sent),
                            (r = a.data),
                            (t.dataList = t.dataList.concat(r)),
                            (t.isget = !0),
                            (t.mygd = t.params.size > r.length),
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
            setHistory: function setHistory() {
              var e = this,
                a = t.getStorageSync("searchHistory");
              -1 ==
                a.findIndex(function (t) {
                  return t == e.params.keyword;
                }) &&
                (a.push(this.params.keyword),
                t.setStorageSync("searchHistory", a)),
                (this.history = t.getStorageSync("searchHistory"));
            },
            goDl: function goDl(t) {
              "index" == this.query.page
                ? t.inStorePower.length
                  ? this.go({
                      t: 1,
                      url: "/yb_o2o/gfood/shop-dl?storeId=" + t.id,
                    })
                  : this.go({ t: 1, url: "/yb_o2o/shop/goods?storeId=" + t.id })
                : 1 == this.params.item
                ? "shopdl" == this.query.page
                  ? this.go({
                      t: 1,
                      url: "/yb_wm/shop/out/goods-dl?gid="
                        .concat(t.id, "&storeId=")
                        .concat(this.params.storeId),
                    })
                  : this.go({
                      t: 2,
                      url: "/yb_wm/shop/out/goods-dl?gid="
                        .concat(t.id, "&storeId=")
                        .concat(this.params.storeId, "&page=shopGoods"),
                    })
                : 2 == this.params.item &&
                  ("fastGoods" == this.query.page
                    ? this.go({
                        t: 2,
                        url: "/yb_wm/shop/in/goods-dl?gid="
                          .concat(t.id, "&storeId=")
                          .concat(this.params.storeId, "&page=fastGoods"),
                      })
                    : "inGoods" == this.query.page &&
                      this.go({
                        t: 2,
                        url: "/yb_wm/shop/in/goods-dl?gid="
                          .concat(t.id, "&storeId=")
                          .concat(this.params.storeId, "&page=inGoods&tableId=")
                          .concat(this.tableId),
                      }));
            },
            isText: function isText(t, e) {
              return t.inStorePower && t.inStorePower.indexOf(e) > -1;
            },
            typeName: function typeName(t) {
              return t.typeName ? t.typePname + "/" + t.typeName : t.typePname;
            },
          },
        };
        e.default = p;
      }).call(this, a("543d")["default"]);
    },
  },
  [["58d5", "common/runtime", "common/vendor"]],
]);
