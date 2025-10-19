(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["common/main"],
  {
    "19e6": function e6(e, t, n) {},
    "515d": function d(e, t, n) {
      "use strict";
      n.r(t);
      var o = n("afa8");
      for (var a in o) {
        ["default"].indexOf(a) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return o[e];
            });
          })(a);
      }
      n("c81a");
      var r = n("f0c5"),
        c = Object(r["a"])(
          o["default"],
          void 0,
          void 0,
          !1,
          null,
          null,
          null,
          !1,
          void 0,
          void 0
        );
      t["default"] = c.exports;
    },
    "7a7d": function a7d(e, t, n) {
      "use strict";
      (function (e) {
        var o = n("4ea4");
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var a = o(n("2eee")),
          r = o(n("c973")),
          c = o(n("842e")),
          i =
            (o(n("8bb1")),
            {
              globalData: {
                siteInfo: c.default,
                onImgurl: "https://s.y-bei.cn/static/miniapp/",
              },
              onLaunch: function onLaunch(e) {
                this.autoUpdate();
              },
              methods: {
                autoUpdate: function autoUpdate() {
                  var t = this,
                    n = e.getUpdateManager();
                  n.onCheckForUpdate(function (o) {
                    o.hasUpdate &&
                      e.showModal({
                        title: "更新提示",
                        confirmText: "确定更新",
                        showCancel: !1,
                        content: "新版本已经准备好，是否重启应用？",
                        success: function success(o) {
                          o.confirm
                            ? t.downLoadAndUpdate(n)
                            : e.showModal({
                                title: "温馨提示~",
                                content:
                                  "本次版本更新涉及到新的功能添加，旧版本无法正常访问的哦~",
                                showCancel: !1,
                                confirmText: "确定更新",
                                success: function success(e) {
                                  e.confirm && t.downLoadAndUpdate(n);
                                },
                              });
                        },
                      });
                  });
                },
                downLoadAndUpdate: function downLoadAndUpdate(t) {
                  e.showLoading(),
                    t.onUpdateReady(function () {
                      e.hideLoading(), t.applyUpdate();
                    }),
                    t.onUpdateFailed(function () {
                      e.hideLoading(),
                        e.showModal({
                          title: "已经有新版本了哟~",
                          content:
                            "新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~",
                        });
                    });
                },
              },
              onShow: (function () {
                var e = (0, r.default)(
                  a.default.mark(function e(t) {
                    var n;
                    return a.default.wrap(
                      function (e) {
                        while (1) {
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!t) {
                                e.next = 8;
                                break;
                              }
                              if (!t.hasOwnProperty("referrerInfo")) {
                                e.next = 8;
                                break;
                              }
                              if (
                                "wxeb490c6f9b154ef9" != t.referrerInfo.appId
                              ) {
                                e.next = 8;
                                break;
                              }
                              if (!t.referrerInfo.extraData) {
                                e.next = 8;
                                break;
                              }
                              return (
                                (e.next = 6),
                                this.util.request({
                                  url: this.api.jhhyk,
                                  method: "POST",
                                  data: {
                                    activate_ticket:
                                      t.referrerInfo.extraData.activate_ticket,
                                    card_id: t.referrerInfo.extraData.card_id,
                                    code: t.referrerInfo.extraData.code,
                                    userId: this.$store.state.user.userId,
                                  },
                                })
                              );
                            case 6:
                              (n = e.sent),
                                console.log(
                                  "%c extraData ",
                                  "color: white; background-color: #34aaff",
                                  t.referrerInfo,
                                  n.data
                                );
                            case 8:
                            case "end":
                              return e.stop();
                          }
                        }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              onHide: function onHide() {},
            });
        t.default = i;
      }).call(this, n("543d")["default"]);
    },
    afa8: function afa8(e, t, n) {
      "use strict";
      n.r(t);
      var o = n("7a7d"),
        a = n.n(o);
      for (var r in o) {
        ["default"].indexOf(r) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return o[e];
            });
          })(r);
      }
      t["default"] = a.a;
    },
    c81a: function c81a(e, t, n) {
      "use strict";
      var o = n("19e6"),
        a = n.n(o);
      a.a;
    },
    e0f1: function e0f1(e, t, n) {
      "use strict";
      (function (e, t) {
        var o = n("4ea4"),
          a = o(n("9523"));
        n("f00a");
        var r = o(n("66fd")),
          c = o(n("515d")),
          i = o(n("63f4")),
          f = o(n("99fd")),
          u = o(n("854b")),
          d = o(n("4868"));
        function l(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t &&
              (o = o.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, o);
          }
          return n;
        }
        e.__webpack_require_UNI_MP_PLUGIN__ = n;
        (r.default.prototype.util = f.default),
          (r.default.prototype.api = u.default),
          (r.default.config.productionTip = !1),
          r.default.use(d.default),
          r.default.component("tab-bar", function () {
            n.e("components/common/tabbar")
              .then(
                function () {
                  return resolve(n("4ad0"));
                }.bind(null, n)
              )
              .catch(n.oe);
          }),
          r.default.component("mg-img", function () {
            n.e("components/common/mg-img")
              .then(
                function () {
                  return resolve(n("2dc2"));
                }.bind(null, n)
              )
              .catch(n.oe);
          }),
          r.default.component("mg-cell", function () {
            n.e("components/common/mg-cell")
              .then(
                function () {
                  return resolve(n("f3fc"));
                }.bind(null, n)
              )
              .catch(n.oe);
          }),
          (c.default.mpType = "app");
        var s = new r.default(
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? l(Object(n), !0).forEach(function (t) {
                    (0, a.default)(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : l(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
            }
            return e;
          })({ store: i.default }, c.default)
        );
        t(s).$mount();
      }).call(this, n("bc2e")["default"], n("543d")["createApp"]);
    },
  },
  [["e0f1", "common/runtime", "common/vendor"]],
]);
