(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/my/address/index"],
  {
    2902: function _(e, t, n) {
      "use strict";
      n.r(t);
      var r = n("8178"),
        o = n("ca80");
      for (var a in o) {
        ["default"].indexOf(a) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return o[e];
            });
          })(a);
      }
      var c = n("f0c5"),
        u = Object(c["a"])(
          o["default"],
          r["b"],
          r["c"],
          !1,
          null,
          "1aa9ed0f",
          null,
          !1,
          r["a"],
          void 0
        );
      t["default"] = u.exports;
    },
    8178: function _(e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return r;
      }),
        n.d(t, "c", function () {
          return o;
        }),
        n.d(t, "a", function () {});
      var r = function r() {
          var e = this,
            t = e.$createElement,
            n =
              (e._self._c,
              e.__map(e.dataList, function (t, n) {
                var r = e.__get_orig(t),
                  o = e.labelColor(t.label);
                return { $orig: r, m0: o };
              })),
            r = 0 == e.dataList.length && e.isget;
          e.$mp.data = Object.assign({}, { $root: { l0: n, g0: r } });
        },
        o = [];
    },
    "8ecc": function ecc(e, t, n) {
      "use strict";
      (function (e, t) {
        var r = n("4ea4");
        n("f00a");
        r(n("66fd"));
        var o = r(n("2902"));
        (e.__webpack_require_UNI_MP_PLUGIN__ = n), t(o.default);
      }).call(this, n("bc2e")["default"], n("543d")["createPage"]);
    },
    ca80: function ca80(e, t, n) {
      "use strict";
      n.r(t);
      var r = n("cbbb"),
        o = n.n(r);
      for (var a in r) {
        ["default"].indexOf(a) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return r[e];
            });
          })(a);
      }
      t["default"] = o.a;
    },
    cbbb: function cbbb(e, t, n) {
      "use strict";
      (function (e) {
        var r = n("4ea4");
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var o = r(n("2eee")),
          a = r(n("9523")),
          c = r(n("c973")),
          u = n("26cb"),
          i = r(n("8bb1"));
        function s(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function f(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? s(Object(n), !0).forEach(function (t) {
                  (0, a.default)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : s(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        var d = getApp().globalData,
          l = {
            components: {
              mgInput: function mgInput() {
                n.e("components/form/mg-input")
                  .then(
                    function () {
                      return resolve(n("5af8"));
                    }.bind(null, n)
                  )
                  .catch(n.oe);
              },
              mgRadio: function mgRadio() {
                n.e("components/form/mg-radio")
                  .then(
                    function () {
                      return resolve(n("e169"));
                    }.bind(null, n)
                  )
                  .catch(n.oe);
              },
              bkB: function bkB() {
                n.e("components/common/block-b")
                  .then(
                    function () {
                      return resolve(n("9d64"));
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
            },
            data: function data() {
              return { dataList: [], isget: !1, mygd: !1 };
            },
            onLoad: function onLoad(e) {
              var t = this;
              return (0, c.default)(
                o.default.mark(function n() {
                  return o.default.wrap(function (n) {
                    while (1) {
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            t.getSystem(),
                            t.util.setNT("我的地址"),
                            (t.query = e),
                            (n.next = 5),
                            t.getLoginInfo()
                          );
                        case 5:
                          t.query.from && t.query.from <= 4 && e.storeId
                            ? (t.params = { storeId: e.storeId })
                            : (t.params = {}),
                            t.getData(),
                            console.log(e);
                        case 8:
                        case "end":
                          return n.stop();
                      }
                    }
                  }, n);
                })
              )();
            },
            onShow: function onShow() {},
            computed: f({}, (0, u.mapState)("dndc", ["latLng"])),
            methods: f(
              f({}, (0, u.mapActions)([""])),
              {},
              {
                getData: function getData() {
                  var e = this;
                  return (0, c.default)(
                    o.default.mark(function t() {
                      var n, r;
                      return o.default.wrap(function (t) {
                        while (1) {
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.next = 2),
                                e.util.request({
                                  url: e.api.wdshdz,
                                  data: e.params,
                                })
                              );
                            case 2:
                              (n = t.sent),
                                (e.dataList = n.data || []),
                                d.xzdzInfo &&
                                  ((r =
                                    -1 ==
                                    e.dataList.findIndex(function (e) {
                                      return e.id == d.xzdzInfo.id;
                                    })),
                                  r && (d.xzdzInfo = null)),
                                (e.isget = e.mygd = !0);
                            case 6:
                            case "end":
                              return t.stop();
                          }
                        }
                      }, t);
                    })
                  )();
                },
                chooseAdd: function chooseAdd(t) {
                  var n = this;
                  return (0, c.default)(
                    o.default.mark(function r() {
                      var a;
                      return o.default.wrap(function (r) {
                        while (1) {
                          switch ((r.prev = r.next)) {
                            case 0:
                              if (2 != t.isClick) {
                                r.next = 2;
                                break;
                              }
                              return r.abrupt("return");
                            case 2:
                              if (!(n.query.from && n.query.from <= 4)) {
                                r.next = 20;
                                break;
                              }
                              return (
                                n.util.showLoading("设置地址..."),
                                (r.next = 6),
                                n.util.request({
                                  url: n.api.xzshdz,
                                  method: "POST",
                                  data: {
                                    storeId: n.query.storeId || "",
                                    addressId: t.id,
                                    lat: n.latLng.lat || "",
                                    lng: n.latLng.lng || "",
                                  },
                                })
                              );
                            case 6:
                              if (((a = r.sent), !a)) {
                                r.next = 18;
                                break;
                              }
                              if (((d.xzdzInfo = a.data), 4 == n.query.from)) {
                                r.next = 16;
                                break;
                              }
                              if (3 != n.query.from) {
                                r.next = 13;
                                break;
                              }
                              return (
                                e.$emit("qjjtsj", { wmtz: 1 }),
                                r.abrupt("return")
                              );
                            case 13:
                              i.default.swnb(), (r.next = 18);
                              break;
                            case 16:
                              n.go({ t: 6, url: "/yb_wm/index/goods" }),
                                setTimeout(function () {
                                  e.$emit("qjjtsj", 1);
                                }, 200);
                            case 18:
                              r.next = 21;
                              break;
                            case 20:
                              5 == n.query.from &&
                                (e.$emit("changeChoose", { addInfo: t }),
                                i.default.swnb());
                            case 21:
                            case "end":
                              return r.stop();
                          }
                        }
                      }, r);
                    })
                  )();
                },
                xzdz: function xzdz() {
                  this.go({ t: 1, url: "address" });
                },
                chooseAddress: function chooseAddress() {
                  e.authorize({
                    scope: "scope.address",
                    success: function success(t) {
                      e.chooseAddress({
                        success: function success(e) {
                          console.log(e);
                        },
                      });
                    },
                    fail: function fail(t) {
                      e.showModal({
                        title: "温馨提示",
                        content: "获收货地址授权失败",
                        confirmText: "去设置",
                        success: function success(t) {
                          t.confirm
                            ? e.openSetting({
                                success: function success(e) {
                                  console.log(e.authSetting);
                                },
                              })
                            : t.cancel;
                        },
                      }),
                        console.log(t);
                    },
                  });
                },
                labelColor: function labelColor(e) {
                  return "公司" == e
                    ? "#94B2D8"
                    : "家" == e
                    ? "#DF8884"
                    : "#A0B888";
                },
              }
            ),
          };
        t.default = l;
      }).call(this, n("543d")["default"]);
    },
  },
  [["8ecc", "common/runtime", "common/vendor"]],
]);
