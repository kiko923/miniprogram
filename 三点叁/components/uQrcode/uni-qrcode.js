(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/uQrcode/uni-qrcode"],
  {
    "629c": function c(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("f0b3"),
        r = n("8dd5");
      for (var i in r) {
        ["default"].indexOf(i) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return r[e];
            });
          })(i);
      }
      var c = n("f0c5"),
        o = Object(c["a"])(
          r["default"],
          a["b"],
          a["c"],
          !1,
          null,
          null,
          null,
          !1,
          a["a"],
          void 0
        );
      t["default"] = o.exports;
    },
    "8dd5": function dd5(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("c0e0"),
        r = n.n(a);
      for (var i in a) {
        ["default"].indexOf(i) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return a[e];
            });
          })(i);
      }
      t["default"] = r.a;
    },
    c0e0: function c0e0(e, t, n) {
      "use strict";
      (function (e) {
        var a = n("4ea4");
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var r = a(n("2eee")),
          i = a(n("c973")),
          c = a(n("2026")),
          o = {
            props: {
              cid: { type: String, required: !0 },
              text: { type: String, required: !0 },
              size: { type: Number, default: 129 },
              margin: { type: Number, default: 0 },
              backgroundColor: { type: String, default: "#ffffff" },
              foregroundColor: { type: String, default: "#000000" },
              backgroundImage: { type: String },
              logo: { type: String },
              makeOnLoad: { type: Boolean, default: !1 },
            },
            data: function data() {
              return {};
            },
            mounted: function mounted() {
              this.makeOnLoad && this.make();
            },
            methods: {
              make: function make() {
                var e = this;
                return (0, i.default)(
                  r.default.mark(function t() {
                    var n, a;
                    return r.default.wrap(function (t) {
                      while (1) {
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (n = {
                                canvasId: e.cid,
                                componentInstance: e,
                                text: e.text,
                                size: e.size,
                                margin: e.margin,
                                backgroundColor: e.backgroundImage
                                  ? "rgba(255,255,255,0)"
                                  : e.backgroundColor,
                                foregroundColor: e.foregroundColor,
                              }),
                              (t.next = 3),
                              e.makeSync(n)
                            );
                          case 3:
                            if (((a = t.sent), !e.backgroundImage)) {
                              t.next = 8;
                              break;
                            }
                            return (t.next = 7), e.drawBackgroundImageSync(a);
                          case 7:
                            a = t.sent;
                          case 8:
                            if (!e.logo) {
                              t.next = 12;
                              break;
                            }
                            return (t.next = 11), e.drawLogoSync(a);
                          case 11:
                            a = t.sent;
                          case 12:
                            return e.makeComplete(a), t.abrupt("return", a);
                          case 14:
                          case "end":
                            return t.stop();
                        }
                      }
                    }, t);
                  })
                )();
              },
              makeComplete: function makeComplete(e) {
                this.$emit("makeComplete", e);
              },
              drawBackgroundImage: function drawBackgroundImage(t) {
                var n = this,
                  a = e.createCanvasContext(this.cid, this);
                a.drawImage(this.backgroundImage, 0, 0, this.size, this.size),
                  a.drawImage(t.filePath, 0, 0, this.size, this.size),
                  a.draw(!1, function () {
                    e.canvasToTempFilePath({
                      canvasId: n.cid,
                      success: function success(e) {
                        t.success && t.success(e.tempFilePath);
                      },
                      fail: function fail(e) {
                        t.fail && t.fail(e);
                      },
                    });
                  });
              },
              drawBackgroundImageSync: function drawBackgroundImageSync(e) {
                var t = this;
                return (0, i.default)(
                  r.default.mark(function n() {
                    return r.default.wrap(function (n) {
                      while (1) {
                        switch ((n.prev = n.next)) {
                          case 0:
                            return n.abrupt(
                              "return",
                              new Promise(function (n, a) {
                                t.drawBackgroundImage({
                                  filePath: e,
                                  success: function success(e) {
                                    n(e);
                                  },
                                  fail: function fail(e) {
                                    a(e);
                                  },
                                });
                              })
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
              fillRoundRect: function fillRoundRect(e, t, n, a, r, i) {
                e.save(),
                  e.translate(n, a),
                  e.beginPath(),
                  e.arc(r - t, i - t, t, 0, Math.PI / 2),
                  e.lineTo(t, i),
                  e.arc(t, i - t, t, Math.PI / 2, Math.PI),
                  e.lineTo(0, t),
                  e.arc(t, t, t, Math.PI, (3 * Math.PI) / 2),
                  e.lineTo(r - t, 0),
                  e.arc(r - t, t, t, (3 * Math.PI) / 2, 2 * Math.PI),
                  e.lineTo(r, i - t),
                  e.closePath(),
                  e.setFillStyle("#ffffff"),
                  e.fill(),
                  e.restore();
              },
              drawLogo: function drawLogo(t) {
                var n = this,
                  a = e.createCanvasContext(this.cid, this);
                a.drawImage(t.filePath, 0, 0, this.size, this.size);
                var r = this.size / 4,
                  i = this.size / 2 - r / 2,
                  c = i,
                  o = r + 10,
                  u = this.size / 2 - o / 2,
                  s = u;
                this.fillRoundRect(a, 5, u, s, o, o),
                  a.drawImage(this.logo, i, c, r, r),
                  a.draw(!1, function () {
                    e.canvasToTempFilePath({
                      canvasId: n.cid,
                      success: function success(e) {
                        t.success && t.success(e.tempFilePath);
                      },
                      fail: function fail(e) {
                        t.fail && t.fail(e);
                      },
                    });
                  });
              },
              drawLogoSync: function drawLogoSync(e) {
                var t = this;
                return (0, i.default)(
                  r.default.mark(function n() {
                    return r.default.wrap(function (n) {
                      while (1) {
                        switch ((n.prev = n.next)) {
                          case 0:
                            return n.abrupt(
                              "return",
                              new Promise(function (n, a) {
                                t.drawLogo({
                                  filePath: e,
                                  success: function success(e) {
                                    n(e);
                                  },
                                  fail: function fail(e) {
                                    a(e);
                                  },
                                });
                              })
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
              makeSync: function makeSync(e) {
                return (0, i.default)(
                  r.default.mark(function t() {
                    return r.default.wrap(function (t) {
                      while (1) {
                        switch ((t.prev = t.next)) {
                          case 0:
                            return t.abrupt(
                              "return",
                              new Promise(function (t, n) {
                                c.default.make({
                                  canvasId: e.canvasId,
                                  componentInstance: e.componentInstance,
                                  text: e.text,
                                  size: e.size,
                                  margin: e.margin,
                                  backgroundColor: e.backgroundColor,
                                  foregroundColor: e.foregroundColor,
                                  success: function success(e) {
                                    t(e);
                                  },
                                  fail: function fail(e) {
                                    n(e);
                                  },
                                });
                              })
                            );
                          case 1:
                          case "end":
                            return t.stop();
                        }
                      }
                    }, t);
                  })
                )();
              },
            },
          };
        t.default = o;
      }).call(this, n("543d")["default"]);
    },
    f0b3: function f0b3(e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return a;
      }),
        n.d(t, "c", function () {
          return r;
        }),
        n.d(t, "a", function () {});
      var a = function a() {
          var e = this.$createElement;
          this._self._c;
        },
        r = [];
    },
  },
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  "components/uQrcode/uni-qrcode-create-component",
  {
    "components/uQrcode/uni-qrcode-create-component":
      function componentsUQrcodeUniQrcodeCreateComponent(
        module,
        exports,
        __webpack_require__
      ) {
        __webpack_require__("543d")["createComponent"](
          __webpack_require__("629c")
        );
      },
  },
  [["components/uQrcode/uni-qrcode-create-component"]],
]);
