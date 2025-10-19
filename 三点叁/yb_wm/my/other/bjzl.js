(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/my/other/bjzl"],
  {
    "5e6f": function e6f(e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return n;
      }),
        a.d(t, "c", function () {
          return r;
        }),
        a.d(t, "a", function () {});
      var n = function n() {
          var e = this.$createElement;
          this._self._c;
        },
        r = [];
    },
    "6f0d": function f0d(e, t, a) {},
    "73df": function df(e, t, a) {
      "use strict";
      (function (e) {
        var n = a("4ea4");
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var r = n(a("2eee")),
          u = n(a("c973")),
          i = (a("26cb"), n(a("8bb1"))),
          s = a("4789"),
          c = {
            components: {
              mgInput: function mgInput() {
                a.e("components/form/mg-input")
                  .then(
                    function () {
                      return resolve(a("5af8"));
                    }.bind(null, a)
                  )
                  .catch(a.oe);
              },
              mgRadio: function mgRadio() {
                a.e("components/form/mg-radio")
                  .then(
                    function () {
                      return resolve(a("e169"));
                    }.bind(null, a)
                  )
                  .catch(a.oe);
              },
              MgCell: function MgCell() {
                a.e("components/common/mg-cell")
                  .then(
                    function () {
                      return resolve(a("f3fc"));
                    }.bind(null, a)
                  )
                  .catch(a.oe);
              },
              bkB: function bkB() {
                a.e("components/common/block-b")
                  .then(
                    function () {
                      return resolve(a("9d64"));
                    }.bind(null, a)
                  )
                  .catch(a.oe);
              },
              sqBtn: function sqBtn() {
                a.e("components/common/sq-btn")
                  .then(
                    function () {
                      return resolve(a("9823"));
                    }.bind(null, a)
                  )
                  .catch(a.oe);
              },
            },
            data: function data() {
              return {
                t: "digit",
                params: {
                  userId: "",
                  userTel: "",
                  birthday: "",
                  sex: "男",
                  realName: "",
                  createdAt: "",
                },
                sexArr: [
                  { value: "男", name: "男" },
                  { value: "女", name: "女", checked: "true" },
                ],
                loading: !1,
                isEdit: !1,
                date: "",
                endDate: "",
                isbj: !1,
                avatarUrl: "",
                nickname: "",
              };
            },
            onLoad: function onLoad(e) {
              var t = this;
              return (0, u.default)(
                r.default.mark(function e() {
                  return r.default.wrap(function (e) {
                    while (1) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          t.util.setNT("编辑资料"),
                            t.getSystem(),
                            t.user &&
                              ((t.avatarUrl =
                                t.user.portrait ||
                                "https://mmbiz.qpic.cn/mmbiz_png/c0PwDajAGp77U0OjoSUmWiaaWM5ZHLeMbQBLPtfZF54ea52ib9Jt2uian7nH06NjCC7yiaIXSVCKbOZg1SeYJPZO9A/0?wx_fmt=png"),
                              (t.nickname = t.user.userName)),
                            (t.date = t.endDate =
                              t.timeToDate(t.dateToTime(), "yyyy-MM-dd")),
                            t.getLoginInfo().then(function () {
                              (t.params.userId = t.uId),
                                (t.params.userTel = t.user.userTel || ""),
                                t.user.birthday && t.user.birthday.length > 10
                                  ? (t.params.birthday =
                                      t.user.birthday.substring(0, 10))
                                  : (t.params.birthday = t.user.birthday),
                                (t.params.createdAt = t.user.createdAt),
                                null != t.user.sex &&
                                  ((t.isbj = !0),
                                  (t.params.realName = t.user.realName),
                                  (t.params.sex = t.user.sex));
                            });
                        case 5:
                        case "end":
                          return e.stop();
                      }
                    }
                  }, e);
                })
              )();
            },
            mixins: [s.utilMixins],
            computed: {},
            methods: {
              setTel: function setTel(e) {
                this.params.userTel = e;
              },
              bindDateChange: function bindDateChange(e) {
                this.params.birthday = e.target.value;
              },
              onChooseAvatar: function onChooseAvatar(e) {
                this.avatarUrl = e.detail.avatarUrl;
              },
              onInput: function onInput(e) {
                this.nickname = e.detail.value;
              },
              save: function save() {
                var t = this;
                return (0, u.default)(
                  r.default.mark(function a() {
                    var n, s, c, o;
                    return r.default.wrap(function (a) {
                      while (1) {
                        switch ((a.prev = a.next)) {
                          case 0:
                            if (
                              ((n = [
                                "realName",
                                "userTel",
                                "birthday",
                                "createdAt",
                              ]),
                              (s = i.default.isFailParams({
                                field: t.params,
                                filter: n,
                                tips: {
                                  userId: "缺少用户id",
                                  realName: "请输入姓名",
                                  userTel: "请输入手机号",
                                  birthday: "请选择生日",
                                },
                              })),
                              s)
                            ) {
                              a.next = 6;
                              break;
                            }
                            return a.abrupt("return");
                          case 6:
                            if (!t.params.userTel) {
                              a.next = 9;
                              break;
                            }
                            if (i.default.isTelCode(t.params.userTel)) {
                              a.next = 9;
                              break;
                            }
                            return a.abrupt(
                              "return",
                              t.util.message("请输入正确的手机号", 3)
                            );
                          case 9:
                            if (!t.avatarUrl || !t.nickname) {
                              a.next = 25;
                              break;
                            }
                            if (!(t.avatarUrl.indexOf("https") > -1)) {
                              a.next = 20;
                              break;
                            }
                            return (
                              (t.params.portrait = t.avatarUrl),
                              (t.params.userName = t.nickname),
                              (t.loading = !0),
                              (a.next = 16),
                              t.util.request({
                                url: t.api.xgyh,
                                method: "POST",
                                mask: 1,
                                data: t.params,
                              })
                            );
                          case 16:
                            (c = a.sent),
                              c
                                ? (t.util.message("提交成功", 1, 1e3),
                                  i.default.swnb(1e3))
                                : (t.loading = !1),
                              (a.next = 23);
                            break;
                          case 20:
                            (o = e.getFileSystemManager()),
                              new ArrayBuffer(1024),
                              o.readFile({
                                filePath: t.avatarUrl,
                                encoding: "base64",
                                position: 0,
                                success: (function () {
                                  var e = (0, u.default)(
                                    r.default.mark(function e(a) {
                                      var n, u, s;
                                      return r.default.wrap(function (e) {
                                        while (1) {
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                (e.next = 2),
                                                t.util.request({
                                                  url: "common/file/upload-base64",
                                                  method: "post",
                                                  data: {
                                                    ext: "jpeg",
                                                    file: a.data,
                                                  },
                                                })
                                              );
                                            case 2:
                                              if (
                                                ((n = e.sent),
                                                (u = n.data),
                                                console.log("data", u),
                                                u)
                                              ) {
                                                e.next = 7;
                                                break;
                                              }
                                              return e.abrupt("return");
                                            case 7:
                                              return (
                                                (t.params.portrait = u),
                                                (t.params.userName =
                                                  t.nickname),
                                                (t.loading = !0),
                                                (e.next = 12),
                                                t.util.request({
                                                  url: t.api.xgyh,
                                                  method: "POST",
                                                  mask: 1,
                                                  data: t.params,
                                                })
                                              );
                                            case 12:
                                              (s = e.sent),
                                                s
                                                  ? (t.util.message(
                                                      "提交成功",
                                                      1,
                                                      1e3
                                                    ),
                                                    i.default.swnb(1e3))
                                                  : (t.loading = !1);
                                            case 14:
                                            case "end":
                                              return e.stop();
                                          }
                                        }
                                      }, e);
                                    })
                                  );
                                  return function (t) {
                                    return e.apply(this, arguments);
                                  };
                                })(),
                                fail: function fail(e) {
                                  console.error(e);
                                },
                              });
                          case 23:
                            a.next = 27;
                            break;
                          case 25:
                            return (
                              t.util.message("请选择图像或者昵称", 3, 2e3),
                              a.abrupt("return")
                            );
                          case 27:
                          case "end":
                            return a.stop();
                        }
                      }
                    }, a);
                  })
                )();
              },
            },
          };
        t.default = c;
      }).call(this, a("bc2e")["default"]);
    },
    b478: function b478(e, t, a) {
      "use strict";
      var n = a("6f0d"),
        r = a.n(n);
      r.a;
    },
    bb9d: function bb9d(e, t, a) {
      "use strict";
      a.r(t);
      var n = a("73df"),
        r = a.n(n);
      for (var u in n) {
        ["default"].indexOf(u) < 0 &&
          (function (e) {
            a.d(t, e, function () {
              return n[e];
            });
          })(u);
      }
      t["default"] = r.a;
    },
    c62e: function c62e(e, t, a) {
      "use strict";
      (function (e, t) {
        var n = a("4ea4");
        a("f00a");
        n(a("66fd"));
        var r = n(a("d840"));
        (e.__webpack_require_UNI_MP_PLUGIN__ = a), t(r.default);
      }).call(this, a("bc2e")["default"], a("543d")["createPage"]);
    },
    d840: function d840(e, t, a) {
      "use strict";
      a.r(t);
      var n = a("5e6f"),
        r = a("bb9d");
      for (var u in r) {
        ["default"].indexOf(u) < 0 &&
          (function (e) {
            a.d(t, e, function () {
              return r[e];
            });
          })(u);
      }
      a("b478");
      var i = a("f0c5"),
        s = Object(i["a"])(
          r["default"],
          n["b"],
          n["c"],
          !1,
          null,
          "7dfa5098",
          null,
          !1,
          n["a"],
          void 0
        );
      t["default"] = s.exports;
    },
  },
  [["c62e", "common/runtime", "common/vendor"]],
]);
