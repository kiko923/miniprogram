(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/shop/select/select"],
  {
    2110: function _(t, n, e) {
      "use strict";
      e.r(n);
      var a = e("da84"),
        r = e.n(a);
      for (var i in a) {
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return a[t];
            });
          })(i);
      }
      n["default"] = r.a;
    },
    "42f6": function f6(t, n, e) {},
    "6ff7": function ff7(t, n, e) {
      "use strict";
      e.r(n);
      var a = e("b96d"),
        r = e("2110");
      for (var i in r) {
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return r[t];
            });
          })(i);
      }
      e("8226");
      var c = e("f0c5"),
        u = Object(c["a"])(
          r["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "56e540f1",
          null,
          !1,
          a["a"],
          void 0
        );
      n["default"] = u.exports;
    },
    "753c": function c(t, n, e) {
      "use strict";
      (function (t, n) {
        var a = e("4ea4");
        e("f00a");
        a(e("66fd"));
        var r = a(e("6ff7"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = e), n(r.default);
      }).call(this, e("bc2e")["default"], e("543d")["createPage"]);
    },
    8226: function _(t, n, e) {
      "use strict";
      var a = e("42f6"),
        r = e.n(a);
      r.a;
    },
    b96d: function b96d(t, n, e) {
      "use strict";
      e.d(n, "b", function () {
        return a;
      }),
        e.d(n, "c", function () {
          return r;
        }),
        e.d(n, "a", function () {});
      var a = function a() {
          var t = this.$createElement;
          this._self._c;
        },
        r = [];
    },
    da84: function da84(t, n, e) {
      "use strict";
      (function (t) {
        var a = e("4ea4");
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.default = void 0);
        var r = a(e("2eee")),
          i = a(e("c973")),
          c = (e("26cb"), a(e("8bb1"))),
          u = {
            name: "select-select",
            components: {},
            data: function data() {
              return {
                aIdx: 0,
                tabs: [{ name: "中国" }, { name: "城市" }, { name: "" }],
                arr: [[{ name: "中国" }], [], [{ name: "全部地区", id: "" }]],
                xzarr: [0, 0, 0],
                zfbH: "h100",
              };
            },
            onLoad: function onLoad(t) {
              var n = this;
              return (0, i.default)(
                r.default.mark(function e() {
                  var a, i, c;
                  return r.default.wrap(function (e) {
                    while (1) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            n.getSystem(),
                            n.util.setNT("选择地区"),
                            (a = JSON.parse(decodeURIComponent(t.info))),
                            (n.tabs[1].name = a.cityName),
                            (n.tabs[2].name = a.zoneName || "全部地区"),
                            (e.next = 7),
                            n.util.request({ url: n.api.cssj, method: "POST" })
                          );
                        case 7:
                          (i = e.sent),
                            (c = i.data),
                            (n.citys = c),
                            (n.arr[0] = c.map(function (t) {
                              return { name: t.name };
                            })),
                            (n.arr[1] = c[0].children.map(function (t) {
                              return { name: t.name, id: t.id };
                            })),
                            (n.arr[2] = n.arr[2].concat(
                              c[0].children.find(function (t) {
                                return t.id == a.cityId;
                              }).children
                            )),
                            (n.xzarr[1] = n.arr[1].findIndex(function (t) {
                              return t.id == a.cityId;
                            })),
                            (n.xzarr[2] = n.arr[2].findIndex(function (t) {
                              return t.id == a.zoneId;
                            })),
                            setTimeout(function () {
                              n.aIdx = 2;
                            }, 100);
                        case 16:
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
              stopTouchMove: function stopTouchMove() {
                return !1;
              },
              changeTab: function changeTab(t) {
                this.aIdx = t;
              },
              swiperTab: function swiperTab(t) {
                this.aIdx = t.detail.current;
              },
              xzitem: function xzitem(n, e) {
                var a = this;
                0 != n &&
                  (1 == n &&
                    ((this.tabs[n].name = this.arr[n][e].name),
                    (this.tabs[n + 1].name = "全部地区"),
                    (this.xzarr[n] = e),
                    (this.xzarr[n + 1] = -1),
                    (this.arr[2] = [{ name: "全部地区", id: "" }].concat(
                      this.citys[0].children[e].children
                    )),
                    (this.aIdx = n + 1)),
                  2 == n &&
                    (this.$set(this.xzarr, n, e),
                    c.default.stfn(function () {
                      t.$emit("changeCity", {
                        dwcsInfo: {
                          cityId: a.arr[1][a.xzarr[1]].id,
                          cityName: a.arr[1][a.xzarr[1]].name,
                          zoneId: a.arr[2][a.xzarr[2]].id,
                          zoneName: a.arr[2][a.xzarr[2]].name,
                        },
                      }),
                        a.go({ t: 4 });
                    }, 200)));
              },
            },
          };
        n.default = u;
      }).call(this, e("543d")["default"]);
    },
  },
  [["753c", "common/runtime", "common/vendor"]],
]);
