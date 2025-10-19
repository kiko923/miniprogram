(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/other/hb"],
  {
    "0a88": function a88(e, t, n) {
      "use strict";
      n.r(t);
      var o = n("7967"),
        a = n("e867");
      for (var c in a) {
        ["default"].indexOf(c) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return a[e];
            });
          })(c);
      }
      n("3e1c");
      var r = n("f0c5"),
        i = Object(r["a"])(
          a["default"],
          o["b"],
          o["c"],
          !1,
          null,
          "7f6d515a",
          null,
          !1,
          o["a"],
          void 0
        );
      t["default"] = i.exports;
    },
    "3e1c": function e1c(e, t, n) {
      "use strict";
      var o = n("a4f6"),
        a = n.n(o);
      a.a;
    },
    7967: function _(e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return o;
      }),
        n.d(t, "c", function () {
          return a;
        }),
        n.d(t, "a", function () {});
      var o = function o() {
          var e = this.$createElement;
          this._self._c;
        },
        a = [];
    },
    "983d": function d(e, t, n) {
      "use strict";
      (function (e, t) {
        var o = n("4ea4");
        n("f00a");
        o(n("66fd"));
        var a = o(n("0a88"));
        (e.__webpack_require_UNI_MP_PLUGIN__ = n), t(a.default);
      }).call(this, n("bc2e")["default"], n("543d")["createPage"]);
    },
    a4f6: function a4f6(e, t, n) {},
    e867: function e867(e, t, n) {
      "use strict";
      n.r(t);
      var o = n("eb32"),
        a = n.n(o);
      for (var c in o) {
        ["default"].indexOf(c) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return o[e];
            });
          })(c);
      }
      t["default"] = a.a;
    },
    eb32: function eb32(e, t, n) {
      "use strict";
      (function (e) {
        var o = n("4ea4");
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var a = o(n("2eee")),
          c = o(n("c973")),
          r = o(n("9523")),
          i = n("26cb"),
          s = o(n("8bb1"));
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
        function u(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? l(Object(n), !0).forEach(function (t) {
                  (0, r.default)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : l(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        var f = {
          name: "order-hb",
          components: {},
          data: function data() {
            return { hbh: "", img: "", show: !1 };
          },
          onLoad: function onLoad(t) {
            getApp().globalData.sphb &&
              getApp().globalData.sphb.id == e.getStorageSync("bdhc").co.id &&
              ((this.show = !0),
              (this.img = getApp().globalData.sphb.img),
              console.log("有缓存")),
              this.util.showLoading("海报生成中"),
              this.getSystem({ setNB: 1 }),
              this.util.setNT("海报"),
              (this.query = u(u({}, t), {}, { co: e.getStorageSync("bdhc") })),
              console.log(this.query, 600 / this.util.getSb().rate);
          },
          onReady: function onReady() {
            var e = this;
            setTimeout(function () {
              e.getCanvas();
            }, 100);
          },
          computed: u({}, (0, i.mapState)("dndc", ["fxsInfo"])),
          methods: {
            getCanvas: function getCanvas() {
              var t = this;
              return (0, c.default)(
                a.default.mark(function n() {
                  var o, c, r, i, l, u, f, d, g;
                  return a.default.wrap(function (n) {
                    while (1) {
                      switch ((n.prev = n.next)) {
                        case 0:
                          (n.t0 = +t.query.type),
                            (n.next = 1 === n.t0 ? 3 : 2 === n.t0 ? 5 : 7);
                          break;
                        case 3:
                          try {
                            (o = e.createCanvasContext("hbctx")),
                              (c = t.query.co.bgimg),
                              (r = t.query.co.code),
                              (i = t.query.co.logo),
                              (l = 20),
                              0,
                              290,
                              (u = 290),
                              o.setFillStyle("#fff"),
                              o.fillRect(0, 0, 330, 490),
                              o.drawImage(c, l, 0, 290, u),
                              o.drawImage(r, 210, 310, 100, 100),
                              o.save(),
                              o.beginPath(),
                              o.arc(260, 360, 22.5, 0, 2 * Math.PI),
                              o.clip(),
                              o.drawImage(i, 237.5, 337.5, 45, 45),
                              o.restore(),
                              o.setFillStyle("#000"),
                              o.setFontSize(16),
                              o.setTextAlign("left"),
                              o.fillText(
                                s.default.jqzf({
                                  str: t.query.co.co.name,
                                  n: 9,
                                }),
                                l,
                                320
                              ),
                              o.setFillStyle(t.tColor),
                              o.setFontSize(12),
                              o.setTextAlign("left"),
                              o.fillText(t.sl, l, 430),
                              o.setFillStyle(t.tColor),
                              o.setFontSize(23),
                              o.setTextAlign("left"),
                              o.fillText(t.query.co.co.price, 30, 430),
                              o.setFillStyle("#666"),
                              o.setFontSize(12),
                              o.setTextAlign("center"),
                              o.fillText("长按小程序码去购买", 260, 430),
                              o.draw(),
                              setTimeout(function () {
                                e.canvasToTempFilePath({
                                  canvasId: "hbctx",
                                  success: function success(e) {
                                    (t.show = !0),
                                      (t.img = e.tempFilePath),
                                      (getApp().globalData.sphb = {
                                        id: t.query.co.co.id,
                                        img: e.tempFilePath,
                                      });
                                  },
                                  complete: function complete(t) {
                                    e.hideLoading(), console.log(t);
                                  },
                                });
                              }, 200);
                          } catch (a) {
                            console.log(a), t.util.message("生成失败", 2);
                          }
                          return n.abrupt("break", 8);
                        case 5:
                          try {
                            (f = e.createCanvasContext("hbctx")),
                              (d = t.query.co.bgimg),
                              (g = t.query.co.code),
                              f.fillRect(0, 0, 325, 450),
                              f.drawImage(d, 0, 0, 330, 490),
                              f.save(),
                              f.beginPath(),
                              f.arc(160, 360, 60, 0, 2 * Math.PI),
                              f.clip(),
                              f.drawImage(g, 100, 300, 120, 120),
                              f.restore(),
                              f.draw(),
                              setTimeout(function () {
                                e.canvasToTempFilePath({
                                  canvasId: "hbctx",
                                  success: function success(e) {
                                    (t.show = !0), (t.img = e.tempFilePath);
                                  },
                                  complete: function complete(t) {
                                    e.hideLoading(), console.log(t);
                                  },
                                });
                              }, 200);
                          } catch (a) {
                            t.util.message("生成失败", 2);
                          }
                          return n.abrupt("break", 8);
                        case 7:
                          return n.abrupt("break", 8);
                        case 8:
                        case "end":
                          return n.stop();
                      }
                    }
                  }, n);
                })
              )();
            },
            bc: function bc() {
              var t = this;
              e.saveImageToPhotosAlbum({
                filePath: this.img,
                success: function success(n) {
                  e.showModal({
                    content: "图片已保存到相册，赶紧晒一下吧~",
                    showCancel: !1,
                    confirmText: "好的",
                    success: function success() {
                      t.go({ t: 4 });
                    },
                  });
                },
                complete: function complete(t) {
                  t.errMsg.indexOf("deny") > -1 &&
                    e.showModal({
                      title: "温馨提示",
                      content: "授权失败,请打开小程序设置开启授权",
                      showCancel: !1,
                    }),
                    console.log(t);
                },
              });
            },
          },
        };
        t.default = f;
      }).call(this, n("543d")["default"]);
    },
  },
  [["983d", "common/runtime", "common/vendor"]],
]);
