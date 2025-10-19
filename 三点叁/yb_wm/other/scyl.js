(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/other/scyl"],
  {
    "1ae6": function ae6(t, e, n) {},
    "45a0": function a0(t, e, n) {
      "use strict";
      n.r(e);
      var a = n("8a44"),
        r = n("4cde");
      for (var u in r) {
        ["default"].indexOf(u) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(u);
      }
      n("9fb6");
      var i = n("f0c5"),
        c = Object(i["a"])(
          r["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "18dcc0a4",
          null,
          !1,
          a["a"],
          void 0
        );
      e["default"] = c.exports;
    },
    "4cde": function cde(t, e, n) {
      "use strict";
      n.r(e);
      var a = n("ba11"),
        r = n.n(a);
      for (var u in a) {
        ["default"].indexOf(u) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(u);
      }
      e["default"] = r.a;
    },
    8608: function _(t, e, n) {
      "use strict";
      (function (t, e) {
        var a = n("4ea4");
        n("f00a");
        a(n("66fd"));
        var r = a(n("45a0"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = n), e(r.default);
      }).call(this, n("bc2e")["default"], n("543d")["createPage"]);
    },
    "8a44": function a44(t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return a;
      }),
        n.d(e, "c", function () {
          return r;
        }),
        n.d(e, "a", function () {});
      var a = function a() {
          var t = this.$createElement;
          this._self._c;
        },
        r = [];
    },
    "9fb6": function fb6(t, e, n) {
      "use strict";
      var a = n("1ae6"),
        r = n.n(a);
      r.a;
    },
    ba11: function ba11(t, e, n) {
      "use strict";
      var a = n("4ea4");
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var r = a(n("2eee")),
        u = a(n("c973")),
        i = (n("26cb"), a(n("8bb1"))),
        c = n("6326"),
        s = {
          name: "scyl",
          components: {
            mgPhoto: function mgPhoto() {
              n.e("components/form/mg-photo")
                .then(
                  function () {
                    return resolve(n("d577"));
                  }.bind(null, n)
                )
                .catch(n.oe);
            },
          },
          data: function data() {
            return {
              loading: !1,
              params: { media: "" },
              info: "",
              scylConfig: {},
              showjl: !1,
            };
          },
          onLoad: function onLoad(t) {
            var e = this;
            return (0, u.default)(
              r.default.mark(function t() {
                return r.default.wrap(function (t) {
                  while (1) {
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          e.getSystem({ setNB: 1 }),
                          e.util.setNT("收藏有礼"),
                          e.getConfig(),
                          (t.next = 5),
                          e.getLoginInfo()
                        );
                      case 5:
                        e.getData();
                      case 6:
                      case "end":
                        return t.stop();
                    }
                  }
                }, t);
              })
            )();
          },
          computed: {
            jfName: function jfName() {
              return this.system.custom.integral;
            },
            balanceName: function balanceName() {
              return this.system.custom.balance;
            },
          },
          methods: {
            getConfig: function getConfig() {
              var t = this;
              return (0, u.default)(
                r.default.mark(function e() {
                  var n, a;
                  return r.default.wrap(function (e) {
                    while (1) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!getApp().globalData.scylConfig) {
                            e.next = 4;
                            break;
                          }
                          (t.scylConfig = getApp().globalData.scylConfig),
                            (e.next = 9);
                          break;
                        case 4:
                          return (
                            (e.next = 6),
                            t.util.request({
                              url: t.api.config,
                              data: { ident: "collection" },
                            })
                          );
                        case 6:
                          (n = e.sent),
                            (a = n.data),
                            (t.scylConfig = getApp().globalData.scylConfig = a);
                        case 9:
                        case "end":
                          return e.stop();
                      }
                    }
                  }, e);
                })
              )();
            },
            getData: function getData() {
              var t = this;
              return (0, u.default)(
                r.default.mark(function e() {
                  var n, a;
                  return r.default.wrap(function (e) {
                    while (1) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2), t.util.request({ url: t.api.scyl })
                          );
                        case 2:
                          (n = e.sent),
                            (a = n.data),
                            (t.info = a),
                            (t.loading = !1);
                        case 6:
                        case "end":
                          return e.stop();
                      }
                    }
                  }, e);
                })
              )();
            },
            changeImg: function changeImg(t) {
              this.params.media = t.p;
            },
            tjsh: function tjsh() {
              this.state = 2;
            },
            save: function save() {
              var t = this;
              return (0, u.default)(
                r.default.mark(function e() {
                  var n, a, u, s, o;
                  return r.default.wrap(function (e) {
                    while (1) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!(t.info.state > 0 && t.info.state < 3)) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return", (t.showjl = !0));
                        case 2:
                          if (
                            ((n = []),
                            (a = i.default.isFailParams({
                              field: t.params,
                              filter: n,
                              tips: { media: "请上传截图" },
                            })),
                            a)
                          ) {
                            e.next = 8;
                            break;
                          }
                          return e.abrupt("return");
                        case 8:
                          return (
                            (t.loading = !0),
                            t.util.showLoading("上传中"),
                            (e.next = 12),
                            (0, c.uploadImg)({ files: t.params.media })
                          );
                        case 12:
                          return (
                            (u = e.sent),
                            (s = i.default.deepCopy(t.params)),
                            (s.media = u.join()),
                            (e.next = 17),
                            t.util.request({
                              url: t.api.scyl,
                              method: "POST",
                              mask: 1,
                              data: s,
                            })
                          );
                        case 17:
                          (o = e.sent),
                            o
                              ? (t.util.message("提交成功", 1, 1e3),
                                i.default.stfn(function () {
                                  (t.showjl = !0), t.getData();
                                }))
                              : (t.loading = !1);
                        case 19:
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
  },
  [["8608", "common/runtime", "common/vendor"]],
]);
