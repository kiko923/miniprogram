(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/common/tabbar"],
  {
    "24af": function af(t, e, n) {
      "use strict";
      n.r(e);
      var r = n("6500"),
        o = n.n(r);
      for (var i in r) {
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(i);
      }
      e["default"] = o.a;
    },
    "4ad0": function ad0(t, e, n) {
      "use strict";
      n.r(e);
      var r = n("771d"),
        o = n("24af");
      for (var i in o) {
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return o[t];
            });
          })(i);
      }
      var a = n("f0c5"),
        l = Object(a["a"])(
          o["default"],
          r["b"],
          r["c"],
          !1,
          null,
          null,
          null,
          !1,
          r["a"],
          void 0
        );
      e["default"] = l.exports;
    },
    6500: function _(t, e, n) {
      "use strict";
      (function (t) {
        var r = n("4ea4");
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var o = r(n("9523")),
          i = n("26cb"),
          a = r(n("8bb1"));
        function l(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e &&
              (r = r.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function c(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? l(Object(n), !0).forEach(function (e) {
                  (0, o.default)(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : l(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
          }
          return t;
        }
        var u = {
          name: "tabbar",
          props: {
            type: {
              type: Object,
              default: function _default() {
                return { message: "hello" };
              },
            },
            ptype: { type: String, default: "index" },
            color: { type: String, default: "" },
          },
          data: function data() {
            return {};
          },
          computed: c(
            c(
              {},
              (0, i.mapState)({
                layout: function layout(t) {
                  return t.layout.index.body && t.layout.index.body.menu;
                },
                cmlayout: function cmlayout(t) {
                  return t.layout.custom.body && t.layout.custom.body.menu;
                },
                isshopdl: function isshopdl(t) {
                  return t.config.isshopdl;
                },
              })
            ),
            {},
            {
              navbar: function navbar() {
                var t = this;
                if ("index" != this.ptype || this.isshopdl) {
                  if ("custom" == this.ptype && this.cmlayout) {
                    var e = {
                      colorBg: "#fff",
                      border_color: "rgba(0,0,0,0.05)",
                      color: "#333",
                      colorOff: "#888",
                      navs: [],
                    };
                    if (
                      this.cmlayout[0] &&
                      this.cmlayout[0].styles.imgUrl.length
                    ) {
                      var n = this.cmlayout[0].styles;
                      (e.colorBg = n.colorBg),
                        (e.border_color = n.colorLine),
                        (e.color = n.colorSelect),
                        (e.colorOff = n.colorUnselect);
                      var r = a.default.deepCopy(n.imgUrl);
                      for (var o in r) {
                        (r[o].icon = {
                          active: r[o].front[0].img,
                          normal: r[o].back[0].img,
                        }),
                          (r[o].link = this.changeUrl(r[o].url)),
                          delete r[o].front,
                          delete r[o].back,
                          delete r[o].url;
                      }
                      e.navs = r;
                    } else
                      e.navs = [
                        {
                          icon2: "iconjiayuan",
                          text: "首页",
                          link: "/yb_wm/index/index",
                        },
                        {
                          icon2: "iconjiayuan",
                          text: "订单",
                          link: "/yb_wm/index/order-index",
                        },
                        {
                          icon2: "iconjiayuan",
                          text: "我的",
                          link: "/yb_wm/index/my-index",
                        },
                      ];
                    e.navs.forEach(function (t) {
                      t.t = -1 != t.link.indexOf("/index/") ? 6 : 1;
                    });
                    var i = e.navs.findIndex(function (e) {
                      return e.link == "/" + t.util.getRoute();
                    });
                    return (
                      i > -1 &&
                        ((e.navs[i].active = !0), this.$emit("refresh", !0)),
                      e
                    );
                  }
                } else {
                  if (getApp().globalData.tabbar) {
                    var l = a.default.deepCopy(getApp().globalData.tabbar),
                      c = l.navs.findIndex(function (e) {
                        return e.link == "/" + t.util.getRoute();
                      });
                    return (
                      c > -1
                        ? ((l.navs[c].active = !0), this.$emit("refresh", !0))
                        : (l = null),
                      l
                    );
                  }
                  if (this.layout) {
                    var u = {
                      colorBg: "#fff",
                      border_color: "rgba(0,0,0,0.05)",
                      color: "#333",
                      colorOff: "#888",
                      navs: [],
                    };
                    if (this.layout[0] && this.layout[0].styles.imgUrl.length) {
                      var s = this.layout[0].styles;
                      (u.colorBg = s.colorBg),
                        (u.border_color = s.colorLine),
                        (u.color = s.colorSelect),
                        (u.colorOff = s.colorUnselect);
                      var f = JSON.parse(JSON.stringify(s.imgUrl));
                      for (var d in f) {
                        (f[d].icon = {
                          active: f[d].front[0].img,
                          normal: f[d].back[0].img,
                        }),
                          (f[d].link = this.changeUrl(f[d].url)),
                          delete f[d].front,
                          delete f[d].back;
                      }
                      u.navs = f;
                    } else
                      u.navs = [
                        {
                          icon2: "iconjiayuan",
                          text: "首页",
                          link: "/yb_wm/index/index",
                        },
                        {
                          icon2: "iconjiayuan",
                          text: "点单",
                          link: "/yb_wm/index/goods",
                        },
                        {
                          icon2: "iconjiayuan",
                          text: "订单",
                          link: "/yb_wm/index/order-index",
                        },
                        {
                          icon2: "iconjiayuan",
                          text: "我的",
                          link: "/yb_wm/index/my-index",
                        },
                      ];
                    u.navs.forEach(function (t) {
                      t.t = -1 != t.link.indexOf("/index/") ? 6 : 1;
                    }),
                      (getApp().globalData.tabbar = a.default.deepCopy(u));
                    var p = u.navs.findIndex(function (e) {
                      return e.link == "/" + t.util.getRoute();
                    });
                    return (
                      p > -1
                        ? ((u.navs[p].active = !0), this.$emit("refresh", !0))
                        : (u = null),
                      u
                    );
                  }
                }
              },
            }
          ),
          methods: {
            goPage: a.default.throttle(function (e) {
              if (!e[0].active) {
                if (
                  (e[0].url &&
                    "appjump" == e[0].url.params &&
                    t.navigateToMiniProgram({
                      appId: e[0].url.name.appId,
                      path: e[0].url.name.path,
                      complete: function complete(t) {},
                    }),
                  e[0].url && "customPage" == e[0].url.params)
                ) {
                  var n = "/yb_wm/order/other/custom?pid=" + e[0].url.name.id;
                  t.navigateTo({ url: n });
                }
                var r =
                  6 == e[0].t
                    ? 6
                    : this.pageroute.indexOf("/index/") > -1
                    ? 1
                    : 2;
                this.go({ t: r, url: e[0].link });
              }
            }, 500),
          },
          created: function created() {
            (this.pageroute = this.util.getRoute()), t.hideTabBar();
          },
        };
        e.default = u;
      }).call(this, n("543d")["default"]);
    },
    "771d": function d(t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "c", function () {
          return o;
        }),
        n.d(e, "a", function () {});
      var r = function r() {
          var t = this.$createElement,
            e =
              (this._self._c,
              this.navbar && this.navbar.navs && this.navbar.navs.length > 0);
          this.$mp.data = Object.assign({}, { $root: { g0: e } });
        },
        o = [];
    },
  },
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  "components/common/tabbar-create-component",
  {
    "components/common/tabbar-create-component":
      function componentsCommonTabbarCreateComponent(
        module,
        exports,
        __webpack_require__
      ) {
        __webpack_require__("543d")["createComponent"](
          __webpack_require__("4ad0")
        );
      },
  },
  [["components/common/tabbar-create-component"]],
]);
