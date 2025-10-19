(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/other/sq-login"],
  {
    "466c": function c(e, t, n) {
      "use strict";
      var a = n("a26b"),
        r = n.n(a);
      r.a;
    },
    4823: function _(e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return a;
      }),
        n.d(t, "c", function () {
          return r;
        }),
        n.d(t, "a", function () {});
      var a = function a() {
          var e = this,
            t = e.$createElement;
          e._self._c;
          e._isMounted ||
            (e.e0 = function (t) {
              e.value = !1;
            });
        },
        r = [];
    },
    "84ed": function ed(e, t, n) {
      "use strict";
      (function (e, a) {
        var r = n("4ea4");
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var o = r(n("2eee")),
          s = r(n("c973")),
          i = (n("26cb"), r(n("8bb1"))),
          u = {
            name: "sq-login",
            components: {
              mgModal: function mgModal() {
                n.e("components/common/modal")
                  .then(
                    function () {
                      return resolve(n("ddfd"));
                    }.bind(null, n)
                  )
                  .catch(n.oe);
              },
            },
            data: function data() {
              return {
                loading: !1,
                ptname: "ali" == this.api.platform,
                value: !1,
                avatarUrl: "",
                nickname: "",
              };
            },
            onLoad: function onLoad() {
              this.getSystem(), this.util.setNT("登录");
            },
            methods: {
              getUserInfo: function getUserInfo() {
                var t = this;
                e.getUserInfo({
                  success: function success(e) {
                    t
                      .refreshUser({
                        storeId: t.storeid,
                        portrait: portrait,
                        userName: userName,
                        userId: userId,
                      })
                      .then(function (e) {
                        t.$emit("refresh"),
                          t.util.message("登录成功", 1, 1e3),
                          i.default.swnb(1e3);
                      }),
                      console.log("getUserInfo success", e);
                  },
                  fail: function fail(t) {
                    console.log("getUserInfo fail", t),
                      e.showModal({
                        title: "温馨提示",
                        content: "获取头像等信息失败",
                        showCancel: !1,
                      });
                  },
                });
              },
              onChooseAvatar: function onChooseAvatar(e) {
                this.avatarUrl = e.detail.avatarUrl;
              },
              onInput: function onInput(e) {
                this.nickname = e.detail.value;
              },
              goLogin: function goLogin() {
                var e = this;
                return (0, s.default)(
                  o.default.mark(function t() {
                    var n;
                    return o.default.wrap(function (t) {
                      while (1) {
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (!e.avatarUrl || !e.nickname) {
                              t.next = 7;
                              break;
                            }
                            return (
                              (n = a.getFileSystemManager()),
                              new ArrayBuffer(1024),
                              n.readFile({
                                filePath: e.avatarUrl,
                                encoding: "base64",
                                position: 0,
                                success: (function () {
                                  var t = (0, s.default)(
                                    o.default.mark(function t(n) {
                                      var a, r, s, u, c;
                                      return o.default.wrap(function (t) {
                                        while (1) {
                                          switch ((t.prev = t.next)) {
                                            case 0:
                                              return (
                                                (t.next = 2),
                                                e.util.request({
                                                  url: "common/file/upload-base64",
                                                  method: "post",
                                                  data: {
                                                    ext: "jpeg",
                                                    file: n.data,
                                                  },
                                                })
                                              );
                                            case 2:
                                              if (
                                                ((a = t.sent),
                                                (r = a.data),
                                                console.log("data", r),
                                                r)
                                              ) {
                                                t.next = 7;
                                                break;
                                              }
                                              return t.abrupt("return");
                                            case 7:
                                              (s = r),
                                                (u = e.nickname),
                                                (c = e.uId),
                                                e
                                                  .refreshUser({
                                                    storeId: e.storeid,
                                                    portrait: s,
                                                    userName: u,
                                                    userId: c,
                                                    now: 1,
                                                  })
                                                  .then(function (t) {
                                                    e.util.message(
                                                      "登录成功",
                                                      1,
                                                      1e3
                                                    ),
                                                      i.default.swnb(1e3);
                                                  })
                                                  .catch(function () {
                                                    e.loading = !1;
                                                  }),
                                                (e.value = !1);
                                            case 10:
                                            case "end":
                                              return t.stop();
                                          }
                                        }
                                      }, t);
                                    })
                                  );
                                  return function (e) {
                                    return t.apply(this, arguments);
                                  };
                                })(),
                                fail: function fail(e) {
                                  console.error(e);
                                },
                              }),
                              t.abrupt("return")
                            );
                          case 7:
                            e.util.message("请选择图像或者昵称", 3, 2e3);
                          case 8:
                          case "end":
                            return t.stop();
                        }
                      }
                    }, t);
                  })
                )();
              },
              getUserProfile: function getUserProfile() {
                var t = this,
                  n = this.util.getSb().hostSDKVersion;
                console.log("version", n),
                  this.util.compareVersion(n, "2.27.1") >= 0
                    ? (this.value = !0)
                    : this.loading ||
                      ((this.loading = !0),
                      e.getUserProfile({
                        desc: "用于完善用户资料",
                        success: function success(e) {
                          try {
                            if ("getUserProfile:ok" == e.errMsg) {
                              var n = e.userInfo.avatarUrl,
                                a = e.userInfo.nickName,
                                r = t.uId;
                              t.refreshUser({
                                storeId: t.storeid,
                                portrait: n,
                                userName: a,
                                userId: r,
                                now: 1,
                              })
                                .then(function (e) {
                                  t.util.message("登录成功", 1, 1e3),
                                    i.default.swnb(1e3);
                                })
                                .catch(function () {
                                  t.loading = !1;
                                });
                            }
                          } catch (o) {
                            (t.loading = !1), console.log(o);
                          }
                        },
                        fail: function fail(n) {
                          (t.loading = !1),
                            e.showModal({
                              title: "温馨提示",
                              content: "获取头像等信息失败",
                              showCancel: !1,
                            });
                        },
                      }));
              },
              mpGetUserInfo: function mpGetUserInfo(t) {
                var n = this;
                if (!this.loading)
                  if (
                    ((this.loading = !0),
                    console.log("mpGetUserInfo", t),
                    "getUserInfo:ok" == t.detail.errMsg)
                  ) {
                    var a = t.detail.userInfo.avatarUrl,
                      r = t.detail.userInfo.nickName,
                      o = this.uId;
                    this.refreshUser({
                      storeId: this.storeid,
                      portrait: a,
                      userName: r,
                      userId: o,
                      now: 1,
                    })
                      .then(function (e) {
                        n.util.message("登录成功", 1, 1e3), i.default.swnb(1e3);
                      })
                      .catch(function () {
                        n.loading = !1;
                      });
                  } else
                    (this.loading = !1),
                      e.showModal({
                        title: "温馨提示",
                        content: "获取头像等信息失败",
                        showCancel: !1,
                      });
              },
              onGetAuthorize: function onGetAuthorize(e) {
                var t = this;
                my.getOpenUserInfo({
                  fail: function fail(e) {},
                  success: function success(e) {
                    var n = JSON.parse(e.response).response;
                    t.refreshUser({
                      storeId: t.storeid,
                      portrait: n.avatar,
                      userName: n.nickName,
                      userId: t.uId,
                      now: 1,
                    }).then(function (e) {
                      t.util.message("登录成功", 1, 1e3), i.default.swnb(1e3);
                    });
                  },
                });
              },
              mpGetphonenumber: function mpGetphonenumber(t) {
                var n = this;
                if (
                  (console.log("mpGetphonenumber", t),
                  "getPhoneNumber:ok" == t.detail.errMsg)
                ) {
                  var a = getApp().globalData.session_key,
                    r = t.detail.encryptedData,
                    o = t.detail.iv,
                    s = this.uId;
                  this.util
                    .request({
                      url: this.api.jm,
                      method: "POST",
                      data: { userId: s, sessionKey: a, data: r, iv: o },
                    })
                    .then(function (e) {
                      e.data && n.$emit("refresh", e.data),
                        n.refreshUser({ get: 1 }),
                        console.log(e);
                    }),
                    console.log(a, r, o);
                } else
                  e.showModal({
                    title: "温馨提示",
                    content: "授权手机号失败",
                    showCancel: !1,
                  });
              },
            },
          };
        t.default = u;
      }).call(this, n("543d")["default"], n("bc2e")["default"]);
    },
    a26b: function a26b(e, t, n) {},
    a72b: function a72b(e, t, n) {
      "use strict";
      (function (e, t) {
        var a = n("4ea4");
        n("f00a");
        a(n("66fd"));
        var r = a(n("b4e1"));
        (e.__webpack_require_UNI_MP_PLUGIN__ = n), t(r.default);
      }).call(this, n("bc2e")["default"], n("543d")["createPage"]);
    },
    b4e1: function b4e1(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("4823"),
        r = n("dacd");
      for (var o in r) {
        ["default"].indexOf(o) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return r[e];
            });
          })(o);
      }
      n("466c");
      var s = n("f0c5"),
        i = Object(s["a"])(
          r["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "0393e547",
          null,
          !1,
          a["a"],
          void 0
        );
      t["default"] = i.exports;
    },
    dacd: function dacd(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("84ed"),
        r = n.n(a);
      for (var o in a) {
        ["default"].indexOf(o) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return a[e];
            });
          })(o);
      }
      t["default"] = r.a;
    },
  },
  [["a72b", "common/runtime", "common/vendor"]],
]);
