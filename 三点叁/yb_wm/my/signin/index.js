(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/my/signin/index"],
  {
    "300b": function b(t, e, n) {
      "use strict";
      n.r(e);
      var a = n("a3b9"),
        r = n.n(a);
      for (var i in a) {
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(i);
      }
      e["default"] = r.a;
    },
    "65ee": function ee(t, e, n) {
      "use strict";
      (function (t, e) {
        var a = n("4ea4");
        n("f00a");
        a(n("66fd"));
        var r = a(n("9ed5"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = n), e(r.default);
      }).call(this, n("bc2e")["default"], n("543d")["createPage"]);
    },
    "66f5": function f5(t, e, n) {
      "use strict";
      var a = n("8938"),
        r = n.n(a);
      r.a;
    },
    8938: function _(t, e, n) {},
    "9ed5": function ed5(t, e, n) {
      "use strict";
      n.r(e);
      var a = n("d16d"),
        r = n("300b");
      for (var i in r) {
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(i);
      }
      n("66f5");
      var u = n("f0c5"),
        o = Object(u["a"])(
          r["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "773ca2ce",
          null,
          !1,
          a["a"],
          void 0
        );
      e["default"] = o.exports;
    },
    a3b9: function a3b9(t, e, n) {
      "use strict";
      (function (t) {
        var a = n("4ea4");
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var r = a(n("2eee")),
          i = a(n("9523")),
          u = a(n("c973")),
          o = n("26cb"),
          s = n("4789"),
          c = n("6326"),
          d = a(n("8bb1"));
        function f(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(t);
            e &&
              (a = a.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              n.push.apply(n, a);
          }
          return n;
        }
        function l(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? f(Object(n), !0).forEach(function (e) {
                  (0, i.default)(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : f(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
          }
          return t;
        }
        var g = {
          name: "index",
          components: {
            load: function load() {
              n.e("components/common/load")
                .then(
                  function () {
                    return resolve(n("2d33"));
                  }.bind(null, n)
                )
                .catch(n.oe);
            },
          },
          data: function data() {
            return {
              goSignin: "",
              dataRecord: "",
              totalSignDay: 0,
              totalDay: 0,
              mySignData: "",
              config: {},
              dataList: [],
              showLoading: !0,
              storeInfo: {},
              disabled: !1,
            };
          },
          onLoad: function onLoad() {
            var t = this;
            return (0, u.default)(
              r.default.mark(function e() {
                return r.default.wrap(function (e) {
                  while (1) {
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          t.getpageconfig().then(function () {
                            t.util.setNT(t.config.name || "签到");
                          })
                        );
                      case 2:
                        return (
                          t.getSystem(),
                          d.default.formatTime(new Date()),
                          new Date().getTime(),
                          (e.next = 6),
                          t.getLoginInfo()
                        );
                      case 6:
                        t.weekSignRecord(), t.mySign(), t.getList(), t.getDw();
                      case 10:
                      case "end":
                        return e.stop();
                    }
                  }
                }, e);
              })
            )();
          },
          mixins: [s.utilMixins],
          computed: {
            jfName: function jfName() {
              return this.system.custom.integral;
            },
            jsqd: function jsqd() {
              var t = this;
              if (this.dataRecord && this.config.oneDay) {
                for (
                  var e = this.dataRecord,
                    n = 0,
                    a = this.timeToDate(this.dateToTime()).substring(0, 10),
                    r = e.findIndex(function (t) {
                      return t.time == a;
                    }),
                    i = 0;
                  i < e.length;
                  i++
                ) {
                  i < r
                    ? 1 == e[i].sign
                      ? ((e[i].type = 1),
                        (e[i].btnName = "已签到"),
                        (e[i].icon = "/static/wd/signin/gou.png"))
                      : (e[i].type = 2)
                    : i == r
                    ? 1 == e[i].sign
                      ? ((e[i].type = 1),
                        (e[i].btnName = "已签到"),
                        (e[i].icon = "/static/wd/signin/gou.png"))
                      : ((e[i].type = 3),
                        (e[i].btnName = "签到"),
                        (e[i].icon = "/static/wd/signin/jb.png"))
                    : ((e[i].type = 4),
                      (e[i].icon = "/static/wd/signin/jb.png")),
                    (e[i].name = i + 1),
                    1 == e[i].sign && n++;
                }
                n = +n;
                var u = function u(n) {
                  var a = e.find(function (e, a) {
                    return a + 1 == t.config.continuity[n].days;
                  });
                  a && (a.hasjl = 1);
                };
                for (var o in this.config.continuity) {
                  u(o);
                }
                var s = this.config.continuity.sort(function (t, e) {
                    return t.days - e.days;
                  }),
                  c = s.find(function (t) {
                    return t.days > n;
                  }),
                  d = c ? c.days - n : 0,
                  f = e;
                return { totalSignDay: n, totalDay: d, weeklist: f };
              }
            },
          },
          methods: l(
            l({}, (0, o.mapActions)(["getConfig"])),
            {},
            {
              getpageconfig: function getpageconfig() {
                var e = this;
                return (0, u.default)(
                  r.default.mark(function n() {
                    var a, i;
                    return r.default.wrap(function (n) {
                      while (1) {
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.next = 2),
                              e.util.request({
                                url: e.api.config,
                                data: { ident: "signin" },
                              })
                            );
                          case 2:
                            (a = n.sent),
                              (i = a.data),
                              (e.config = i),
                              1 != i.open &&
                                t.showModal({
                                  title: "提示",
                                  content: "签到功能已关闭",
                                  showCancel: !1,
                                  success: function success(t) {
                                    e.go({
                                      t: 6,
                                      url: "/yb_wm/index/my-index",
                                    });
                                  },
                                });
                          case 6:
                          case "end":
                            return n.stop();
                        }
                      }
                    }, n);
                  })
                )();
              },
              weekSignRecord: function weekSignRecord() {
                var t = this;
                return (0, u.default)(
                  r.default.mark(function e() {
                    var n, a;
                    return r.default.wrap(function (e) {
                      while (1) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              t.util.request({
                                url: t.api.bzqd,
                                method: "POST",
                              })
                            );
                          case 2:
                            (n = e.sent),
                              (a = n.data),
                              (t.dataRecord = a.record),
                              t.showBtn(),
                              (t.showLoading = !1);
                          case 7:
                          case "end":
                            return e.stop();
                        }
                      }
                    }, e);
                  })
                )();
              },
              mySign: function mySign() {
                var t = this;
                return (0, u.default)(
                  r.default.mark(function e() {
                    var n, a;
                    return r.default.wrap(function (e) {
                      while (1) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              t.util.request({
                                url: t.api.wdqdsj,
                                method: "POST",
                              })
                            );
                          case 2:
                            (n = e.sent), (a = n.data), (t.mySignData = a);
                          case 5:
                          case "end":
                            return e.stop();
                        }
                      }
                    }, e);
                  })
                )();
              },
              showBtn: function showBtn() {
                var t = this;
                return (0, u.default)(
                  r.default.mark(function e() {
                    var n;
                    return r.default.wrap(function (e) {
                      while (1) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            (n = t.jsqd.weeklist.map(function (t) {
                              return { type: t.type };
                            })),
                              3 == n[t.jsqd.totalSignDay].type
                                ? (t.goSignin = "1")
                                : (t.goSignin = "2");
                          case 2:
                          case "end":
                            return e.stop();
                        }
                      }
                    }, e);
                  })
                )();
              },
              ljqd: function ljqd() {
                var t = this;
                return (0, u.default)(
                  r.default.mark(function e() {
                    var n, a;
                    return r.default.wrap(
                      function (e) {
                        while (1) {
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), t.checkLogin();
                            case 2:
                              if (e.sent) {
                                e.next = 4;
                                break;
                              }
                              return e.abrupt("return");
                            case 4:
                              if (((t.disabled = !0), t.jjmbxx)) {
                                e.next = 16;
                                break;
                              }
                              return (
                                (e.prev = 6),
                                (e.next = 9),
                                t.requestSM("signIn")
                              );
                            case 9:
                              e.next = 16;
                              break;
                            case 11:
                              return (
                                (e.prev = 11),
                                (e.t0 = e["catch"](6)),
                                (t.jjmbxx = !0),
                                (t.disabled = !1),
                                e.abrupt("return")
                              );
                            case 16:
                              if (
                                ((n = t.jsqd.totalSignDay + 1),
                                "1" != t.goSignin)
                              ) {
                                e.next = 26;
                                break;
                              }
                              return (
                                (e.next = 20),
                                t.util.request({
                                  url: t.api.qd,
                                  method: "POST",
                                  data: { day: n },
                                })
                              );
                            case 20:
                              (a = e.sent),
                                t.weekSignRecord(),
                                t.mySign(),
                                a
                                  ? t.util.message("签到成功", 1)
                                  : (t.disabled = !1),
                                (e.next = 27);
                              break;
                            case 26:
                              t.disabled = !1;
                            case 27:
                            case "end":
                              return e.stop();
                          }
                        }
                      },
                      e,
                      null,
                      [[6, 11]]
                    );
                  })
                )();
              },
              getDw: function getDw() {
                var t = this;
                return (0, u.default)(
                  r.default.mark(function e() {
                    var n, a, i;
                    return r.default.wrap(function (e) {
                      while (1) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), (0, c.getDw)({ t: 0 });
                          case 2:
                            return (
                              (n = e.sent),
                              (e.next = 5),
                              t.util.request({
                                url: t.api.zjdp,
                                data: { lat: n.latitude, lng: n.longitude },
                              })
                            );
                          case 5:
                            (a = e.sent), (i = a.data), (t.storeInfo = i);
                          case 8:
                          case "end":
                            return e.stop();
                        }
                      }
                    }, e);
                  })
                )();
              },
              getList: function getList() {
                var t = this;
                return (0, u.default)(
                  r.default.mark(function e() {
                    var n, a;
                    return r.default.wrap(function (e) {
                      while (1) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              t.util.request({
                                url: t.api.jfsplb,
                                method: "POST",
                                data: { typeId: "", page: 1, size: 10 },
                              })
                            );
                          case 2:
                            (n = e.sent),
                              (a = n.data),
                              (t.dataList = t.dataList.concat(a));
                          case 5:
                          case "end":
                            return e.stop();
                        }
                      }
                    }, e);
                  })
                )();
              },
              qxd: function qxd() {
                this.getConfig({
                  key: "storeInfo",
                  data: {
                    id: this.storeInfo.id,
                    name: this.storeInfo.name,
                    distance: this.storeInfo.distance,
                  },
                }),
                  this.go({ t: 6, url: "/yb_wm/index/goods" });
              },
              mysignin: function mysignin(t) {
                this.go({
                  t: 1,
                  url: "/yb_wm/my/signin/my-signin?type=" + t.type,
                });
              },
              mycoupon: function mycoupon() {
                this.go({ t: 1, url: "/yb_wm/my/signin/my-coupon" });
              },
              getDates: function getDates(t) {
                for (
                  var e = new Date(t),
                    n = e.getTime(),
                    a = e.getDay(),
                    r = [],
                    i = 0;
                  i < 7;
                  i++
                ) {
                  r.push(
                    new Date(n + 864e5 * (i - ((a + 6) % 7)))
                      .toLocaleDateString()
                      .replace(/\//g, "-")
                  );
                }
                for (var u in r) {
                  r[u] = r[u].split("-").map(d.default.formatNumber).join("-");
                }
                return console.log(r), r;
              },
            }
          ),
          created: function created() {
            return (0, u.default)(
              r.default.mark(function t() {
                return r.default.wrap(function (t) {
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
        };
        e.default = g;
      }).call(this, n("543d")["default"]);
    },
    d16d: function d16d(t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return a;
      }),
        n.d(e, "c", function () {
          return r;
        }),
        n.d(e, "a", function () {});
      var a = function a() {
          var t = this.$createElement,
            e =
              (this._self._c,
              this.config.continuity.length && this.jsqd.totalDay > 0),
            n = this.dataList.length;
          this.$mp.data = Object.assign({}, { $root: { g0: e, g1: n } });
        },
        r = [];
    },
  },
  [["65ee", "common/runtime", "common/vendor"]],
]);
