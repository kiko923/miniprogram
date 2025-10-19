(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/my/signin/my-signin"],
  {
    "37a5": function a5(t, e, n) {
      "use strict";
      (function (t, e) {
        var a = n("4ea4");
        n("f00a");
        a(n("66fd"));
        var i = a(n("84e3"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = n), e(i.default);
      }).call(this, n("bc2e")["default"], n("543d")["createPage"]);
    },
    "84e3": function e3(t, e, n) {
      "use strict";
      n.r(e);
      var a = n("d6932"),
        i = n("b6e8");
      for (var r in i) {
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(r);
      }
      var s = n("f0c5"),
        u = Object(s["a"])(
          i["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "f0b45460",
          null,
          !1,
          a["a"],
          void 0
        );
      e["default"] = u.exports;
    },
    b6e8: function b6e8(t, e, n) {
      "use strict";
      n.r(e);
      var a = n("fcac"),
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
    d6932: function d6932(t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return a;
      }),
        n.d(e, "c", function () {
          return i;
        }),
        n.d(e, "a", function () {});
      var a = function a() {
          var t = this.$createElement,
            e = (this._self._c, 0 == this.dataList.length && this.isget);
          this.$mp.data = Object.assign({}, { $root: { g0: e } });
        },
        i = [];
    },
    fcac: function fcac(t, e, n) {
      "use strict";
      var a = n("4ea4");
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var i = a(n("2eee")),
        r = a(n("c973")),
        s = (n("26cb"), n("4789")),
        u = {
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
            return { params: { page: 1, size: 10 }, integral: "", type: "" };
          },
          onLoad: function onLoad(t) {
            this.getSystem(this),
              this.util.setNT("我的" + (1 == t.type ? this.jfName : "签到")),
              (this.integral = this.user.integral),
              this.getList(),
              (this.type = t.type);
          },
          mixins: [s.sljz],
          computed: {
            jfName: function jfName() {
              return this.system.custom.integral;
            },
          },
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
                              url: t.api.wdqdjl,
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
            integralMall: function integralMall() {
              this.go({ t: 1, url: "/yb_wm/my/integral/shop-index" });
            },
            integralRule: function integralRule() {
              this.go({
                t: 1,
                url: "/yb_wm/my/other/gywm?t=".concat(this.jfName, "规则&p=8"),
              });
            },
          },
        };
      e.default = u;
    },
  },
  [["37a5", "common/runtime", "common/vendor"]],
]);
