(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/order/invitation/fxzx"],
  {
    "31cb": function cb(t, e, n) {
      "use strict";
      n.r(e);
      var r = n("ca95"),
        a = n.n(r);
      for (var i in r) {
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(i);
      }
      e["default"] = a.a;
    },
    "6c01": function c01(t, e, n) {},
    "7bae": function bae(t, e, n) {
      "use strict";
      var r = n("6c01"),
        a = n.n(r);
      a.a;
    },
    a213: function a213(t, e, n) {
      "use strict";
      (function (t, e) {
        var r = n("4ea4");
        n("f00a");
        r(n("66fd"));
        var a = r(n("dfd6"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = n), e(a.default);
      }).call(this, n("bc2e")["default"], n("543d")["createPage"]);
    },
    a6e6: function a6e6(t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "c", function () {
          return a;
        }),
        n.d(e, "a", function () {});
      var r = function r() {
          var t = this.$createElement;
          this._self._c;
        },
        a = [];
    },
    ca95: function ca95(t, e, n) {
      "use strict";
      (function (t) {
        var r = n("4ea4");
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var a = r(n("2eee")),
          i = r(n("278c")),
          o = r(n("9523")),
          c = r(n("c973")),
          u = n("26cb"),
          s = (r(n("8bb1")), n("4789")),
          f = n("6326");
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
        function d(t) {
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
        var h = {
          name: "fxzx",
          components: {
            uniNavBar: function uniNavBar() {
              n.e("components/third/uni-nav-bar")
                .then(
                  function () {
                    return resolve(n("d2b9"));
                  }.bind(null, n)
                )
                .catch(n.oe);
            },
            MgImg: function MgImg() {
              n.e("components/common/mg-img")
                .then(
                  function () {
                    return resolve(n("2dc2"));
                  }.bind(null, n)
                )
                .catch(n.oe);
            },
            MgCell: function MgCell() {
              n.e("components/common/mg-cell")
                .then(
                  function () {
                    return resolve(n("f3fc"));
                  }.bind(null, n)
                )
                .catch(n.oe);
            },
            mgModal: function mgModal() {
              n.e("components/common/modal")
                .then(
                  function () {
                    return resolve(n("ddfd"));
                  }.bind(null, n)
                )
                .catch(n.oe);
            },
            mgShare: function mgShare() {
              n.e("components/template/share")
                .then(
                  function () {
                    return resolve(n("5db8"));
                  }.bind(null, n)
                )
                .catch(n.oe);
            },
          },
          data: function data() {
            return {
              shareshow: !1,
              shareCo: { isget: !0 },
              name: "分销中心",
              iData: {},
              arr: [
                {
                  icn: "iconcz f44",
                  url: "syxq",
                  name: "分销订单",
                  ftnumber: "0",
                  ftunit: "笔",
                },
                {
                  icn: "icondhjl f44",
                  url: "wdfs",
                  name: "我的团队",
                  ftnumber: "0",
                  ftunit: "人",
                },
                { icn: "iconjfgz f40", url: "txmx?t=2", name: "提现明细" },
              ],
            };
          },
          onLoad: function onLoad(t) {
            var e = this;
            this.getSystem(),
              this.util.setNT("分销中心"),
              this.getLoginInfo().then(
                (0, c.default)(
                  a.default.mark(function t() {
                    return a.default.wrap(function (t) {
                      while (1) {
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), e.getFxzx();
                          case 2:
                            return (t.next = 4), e.getFxSq();
                          case 4:
                            e.getIndex(),
                              e.getSy(),
                              e.getLdxConfig("distributionWithdrawalSet"),
                              (0, f.wxShare)({
                                title: e.fxsInfo.shareTitle,
                                desc: e.system.introduction || "进来看看吧！",
                                link: (0, f.getSLink)(
                                  "yb_wm/index/index?scene=".concat(e.uId) +
                                    ",2"
                                ),
                                imgUrl: e.fxsInfo.shareIcon,
                              });
                          case 8:
                          case "end":
                            return t.stop();
                        }
                      }
                    }, t);
                  })
                )
              );
          },
          mixins: [s.utilMixins],
          computed: d(
            d(
              d({}, (0, u.mapState)("dndc", ["fxsInfo", "fxsSq", "ldxConfig"])),
              (0, u.mapState)({
                system: function system(t) {
                  return t.system;
                },
              })
            ),
            {},
            {
              syarr: function syarr() {
                return [
                  { t: "累计佣金", url: "syxq?t=1", n: this.iData.allMoney },
                  {
                    t: this.system.custom.distributorName || "下线",
                    url: "wdfs",
                    n: this.iData.people,
                  },
                ];
              },
              tjarr: function tjarr() {
                return [
                  { t: "在路上", url: "syxq?t=1", n: this.iData.frozen },
                  { t: "可提现", url: "syxq?t=2", n: this.iData.userMoney },
                  { t: "提现中", url: "syxq?t=3", n: this.iData.wait },
                  { t: "已提现", url: "syxq?t=3", n: this.iData.alreadyMoney },
                ];
              },
            }
          ),
          methods: d(
            d({}, (0, u.mapActions)("dndc", ["getFxzx", "getLdxConfig"])),
            {},
            {
              getIndex: function getIndex() {
                var t = this;
                return (0, c.default)(
                  a.default.mark(function e() {
                    var n, r;
                    return a.default.wrap(function (e) {
                      while (1) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              t.util.request({
                                url: t.api.distributionIndex,
                                mask: 1,
                              })
                            );
                          case 2:
                            (n = e.sent), (r = n.data), (t.iData = r);
                          case 5:
                          case "end":
                            return e.stop();
                        }
                      }
                    }, e);
                  })
                )();
              },
              getSy: function getSy() {
                var e = this;
                return (0, c.default)(
                  a.default.mark(function n() {
                    return a.default.wrap(function (n) {
                      while (1) {
                        switch ((n.prev = n.next)) {
                          case 0:
                            e.util
                              .request({
                                url: e.api.xcxm,
                                data: {
                                  page: "yb_wm/index/index",
                                  ident: "distribution",
                                  scene: e.uId + ",2",
                                },
                              })
                              .then(
                                (function () {
                                  var n = (0, c.default)(
                                    a.default.mark(function n(r) {
                                      var o,
                                        c,
                                        u,
                                        s,
                                        f,
                                        l,
                                        d,
                                        h,
                                        m,
                                        p,
                                        x,
                                        g,
                                        b,
                                        v;
                                      return a.default.wrap(
                                        function (n) {
                                          while (1) {
                                            switch ((n.prev = n.next)) {
                                              case 0:
                                                return (
                                                  console.log(22, r),
                                                  (c = e.fxsInfo.shareAd),
                                                  (n.prev = 2),
                                                  (n.next = 5),
                                                  t.downloadFile({ url: c })
                                                );
                                              case 5:
                                                if (
                                                  ((u = n.sent),
                                                  (s = (0, i.default)(u, 2)),
                                                  (f = s[0]),
                                                  (l = s[1]),
                                                  (o = l),
                                                  l)
                                                ) {
                                                  n.next = 19;
                                                  break;
                                                }
                                                return (
                                                  (n.next = 13),
                                                  t.getImageInfo({ src: c })
                                                );
                                              case 13:
                                                (d = n.sent),
                                                  (h = (0, i.default)(d, 2)),
                                                  (m = h[0]),
                                                  (p = h[1]),
                                                  (o = p),
                                                  console.log(
                                                    "res1 getImageInfo",
                                                    m,
                                                    p
                                                  );
                                              case 19:
                                                return (
                                                  (n.next = 21),
                                                  t.getImageInfo({
                                                    src: r.data,
                                                  })
                                                );
                                              case 21:
                                                (x = n.sent),
                                                  (g = (0, i.default)(x, 2)),
                                                  (b = g[0]),
                                                  (v = g[1]),
                                                  (e.shareCo = {
                                                    isget: !0,
                                                    bgimg:
                                                      o.path || o.tempFilePath,
                                                    code: v.path,
                                                  }),
                                                  console.log(
                                                    "res downloadFile",
                                                    f,
                                                    l,
                                                    "res2",
                                                    b,
                                                    v
                                                  ),
                                                  (n.next = 32);
                                                break;
                                              case 29:
                                                (n.prev = 29),
                                                  (n.t0 = n["catch"](2)),
                                                  console.log(
                                                    "图片error",
                                                    n.t0
                                                  );
                                              case 32:
                                              case "end":
                                                return n.stop();
                                            }
                                          }
                                        },
                                        n,
                                        null,
                                        [[2, 29]]
                                      );
                                    })
                                  );
                                  return function (t) {
                                    return n.apply(this, arguments);
                                  };
                                })()
                              );
                          case 1:
                          case "end":
                            return n.stop();
                        }
                      }
                    }, n);
                  })
                )();
              },
              ljyq: function ljyq() {
                this.shareshow = !0;
              },
              ljtx: function ljtx() {
                this.go({ t: 1, url: "/yb_wm/order/distribution/tx?p=6" });
              },
            }
          ),
          onShareAppMessage: function onShareAppMessage() {
            this.shareshow = !1;
            var t = "yb_wm/index/index?scene=".concat(this.uId) + ",2";
            return this.util.mpShare({
              t: this.fxsInfo.shareTitle,
              i:
                this.fxsInfo.shareIcon &&
                this.getSingleImg(this.fxsInfo.shareIcon),
              p: t,
            });
          },
        };
        e.default = h;
      }).call(this, n("543d")["default"]);
    },
    dfd6: function dfd6(t, e, n) {
      "use strict";
      n.r(e);
      var r = n("a6e6"),
        a = n("31cb");
      for (var i in a) {
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(i);
      }
      n("7bae");
      var o = n("f0c5"),
        c = Object(o["a"])(
          a["default"],
          r["b"],
          r["c"],
          !1,
          null,
          "bceffe6a",
          null,
          !1,
          r["a"],
          void 0
        );
      e["default"] = c.exports;
    },
  },
  [["a213", "common/runtime", "common/vendor"]],
]);
