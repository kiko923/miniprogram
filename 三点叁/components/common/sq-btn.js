(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/common/sq-btn"],
  {
    "46d1": function d1(e, t, n) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        n("26cb");
        var o = {
          name: "sq-btn",
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
          props: {
            cname: "",
            sname: "",
            w: "",
            h: "",
            t: "",
            type: { type: String, default: "1" },
            storeid: { type: String, default: "" },
            value: { type: Boolean, default: !1 },
          },
          data: function data() {
            return { loading: !1 };
          },
          computed: {
            ptname: function ptname() {
              var e = "";
              switch (this.api.platform) {
                case "mini":
                  e = "微信";
                  break;
                case "ali":
                  e = "支付宝";
                  break;
                case "baidu":
                  e = "百度";
                  break;
                case "toutiao":
                  e = "字节跳动";
                  break;
              }
              return e;
            },
            show: {
              get: function get() {
                return this.value;
              },
              set: function set(e) {
                this.$emit("input", e);
              },
            },
          },
          watch: {},
          methods: {
            share: function share() {
              e.showModal({
                title: "提示",
                content: "点击右上角分享",
                showCancel: !1,
                confirmText: "我知道了",
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
                  }).then(function (e) {
                    t.$emit("refresh");
                  });
                },
              });
            },
            getAlPhoneNumber: function getAlPhoneNumber() {
              var e = this;
              my.getPhoneNumber({
                success: function success(t) {
                  var n = JSON.parse(t.response);
                  e.util
                    .request({
                      url: e.api.jm,
                      method: "POST",
                      data: { data: n.response },
                    })
                    .then(function (t) {
                      console.log("jm res", t),
                        t.data &&
                          ((e.show = !1),
                          4 == e.type
                            ? e.util.message("绑定成功", 1, 1e3)
                            : e.$emit("refresh", t.data),
                          e.refreshUser({ nomask: 1, get: 1, now: 1 }));
                    }),
                    console.log("getAlPhoneNumber success", n);
                },
                fail: function fail(e) {
                  console.log("getAlPhoneNumber fail", e);
                },
              });
            },
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
                      t.$emit("refresh");
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
            mpGetUserInfo: function mpGetUserInfo(t) {
              var n = this;
              if (
                (console.log("mpGetUserInfo", t),
                "getUserInfo:ok" == t.detail.errMsg)
              ) {
                var o = t.detail.userInfo.avatarUrl,
                  s = t.detail.userInfo.nickName,
                  r = this.uId;
                this.refreshUser({
                  storeId: this.storeid,
                  portrait: o,
                  userName: s,
                  userId: r,
                }).then(function (e) {
                  n.$emit("refresh");
                }),
                  console.log(o, s, r);
              } else
                e.showModal({
                  title: "温馨提示",
                  content: "获取头像等信息失败",
                  showCancel: !1,
                });
            },
            mpGetphonenumber: function mpGetphonenumber(t) {
              var n = this;
              if (
                ((this.loading = !0),
                console.log("mpGetphonenumber", t),
                "getPhoneNumber:ok" != t.detail.errMsg)
              )
                return (
                  (this.loading = !1),
                  void e.showModal({
                    title: "温馨提示",
                    content: "授权手机号失败",
                    showCancel: !1,
                  })
                );
              var o = getApp().globalData.session_key,
                s = t.detail.encryptedData,
                r = t.detail.iv,
                i = this.uId;
              this.util
                .request({
                  url: this.api.jm,
                  method: "POST",
                  data: { userId: i, sessionKey: o, data: s, iv: r },
                })
                .then(function (e) {
                  (n.loading = !1),
                    e.data &&
                      ((n.show = !1),
                      4 == n.type
                        ? n.util.message("绑定成功", 1, 1e3)
                        : n.$emit("refresh", e.data),
                      n.refreshUser({ nomask: 1, get: 1, now: 1 })),
                    console.log(e);
                })
                .catch(function () {
                  n.loading = !1;
                }),
                console.log(o, s, r);
            },
          },
        };
        t.default = o;
      }).call(this, n("543d")["default"]);
    },
    "6f9d": function f9d(e, t, n) {
      "use strict";
      var o = n("edf2"),
        s = n.n(o);
      s.a;
    },
    "739f": function f(e, t, n) {
      "use strict";
      n.r(t);
      var o = n("46d1"),
        s = n.n(o);
      for (var r in o) {
        ["default"].indexOf(r) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return o[e];
            });
          })(r);
      }
      t["default"] = s.a;
    },
    "92b0": function b0(e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return o;
      }),
        n.d(t, "c", function () {
          return s;
        }),
        n.d(t, "a", function () {});
      var o = function o() {
          var e = this,
            t = e.$createElement,
            n =
              (e._self._c,
              1 == e.type
                ? e.__get_style([
                    {
                      width: e.w + "rpx",
                      height: e.h + "rpx",
                      lineHeight: e.h + "rpx",
                    },
                    e.sname,
                  ])
                : null),
            o =
              2 == e.type
                ? e.__get_style([
                    {
                      width: e.w + "rpx",
                      height: e.h + "rpx",
                      lineHeight: e.h + "rpx",
                    },
                    e.sname,
                  ])
                : null,
            s =
              3 == e.type
                ? e.__get_style([
                    {
                      width: e.w + "rpx",
                      height: e.h + "rpx",
                      lineHeight: e.h + "rpx",
                    },
                    e.sname,
                  ])
                : null;
          e._isMounted ||
            (e.e0 = function (e) {
              return this.$emit("refresh");
            }),
            (e.$mp.data = Object.assign(
              {},
              { $root: { s0: n, s1: o, s2: s } }
            ));
        },
        s = [];
    },
    9823: function _(e, t, n) {
      "use strict";
      n.r(t);
      var o = n("92b0"),
        s = n("739f");
      for (var r in s) {
        ["default"].indexOf(r) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return s[e];
            });
          })(r);
      }
      n("6f9d");
      var i = n("f0c5"),
        a = Object(i["a"])(
          s["default"],
          o["b"],
          o["c"],
          !1,
          null,
          "1ad035d3",
          null,
          !1,
          o["a"],
          void 0
        );
      t["default"] = a.exports;
    },
    edf2: function edf2(e, t, n) {},
  },
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  "components/common/sq-btn-create-component",
  {
    "components/common/sq-btn-create-component":
      function componentsCommonSqBtnCreateComponent(
        module,
        exports,
        __webpack_require__
      ) {
        __webpack_require__("543d")["createComponent"](
          __webpack_require__("9823")
        );
      },
  },
  [["components/common/sq-btn-create-component"]],
]);
