(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/order/vip/open"],
  {
    "05d9": function d9(e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return r;
      }),
        n.d(t, "c", function () {
          return a;
        }),
        n.d(t, "a", function () {});
      var r = function r() {
          var e = this.$createElement,
            t =
              (this._self._c,
              this.vipset.register.includes("USER_FORM_INFO_FLAG_NAME")),
            n = this.vipset.register.includes("USER_FORM_INFO_FLAG_MOBILE"),
            r = this.vipset.register.includes("USER_FORM_INFO_FLAG_SEX"),
            a = this.vipset.register.includes("USER_FORM_INFO_FLAG_BIRTHDAY");
          this.$mp.data = Object.assign(
            {},
            { $root: { g0: t, g1: n, g2: r, g3: a } }
          );
        },
        a = [];
    },
    "5f5a": function f5a(e, t, n) {
      "use strict";
      var r = n("baaf"),
        a = n.n(r);
      a.a;
    },
    a100: function a100(e, t, n) {
      "use strict";
      (function (e, t) {
        var r = n("4ea4");
        n("f00a");
        r(n("66fd"));
        var a = r(n("b580"));
        (e.__webpack_require_UNI_MP_PLUGIN__ = n), t(a.default);
      }).call(this, n("bc2e")["default"], n("543d")["createPage"]);
    },
    b580: function b580(e, t, n) {
      "use strict";
      n.r(t);
      var r = n("05d9"),
        a = n("d75a");
      for (var i in a) {
        ["default"].indexOf(i) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return a[e];
            });
          })(i);
      }
      n("5f5a");
      var s = n("f0c5"),
        u = Object(s["a"])(
          a["default"],
          r["b"],
          r["c"],
          !1,
          null,
          "6cbb0bfa",
          null,
          !1,
          r["a"],
          void 0
        );
      t["default"] = u.exports;
    },
    baaf: function baaf(e, t, n) {},
    cd13: function cd13(e, t, n) {
      "use strict";
      var r = n("4ea4");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var a = r(n("2eee")),
        i = r(n("9523")),
        s = r(n("c973")),
        u = n("26cb"),
        c = r(n("8bb1")),
        o = n("4789");
      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                (0, i.default)(e, t, n[t]);
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
      var d = {
        components: {
          mgInput: function mgInput() {
            n.e("components/form/mg-input")
              .then(
                function () {
                  return resolve(n("5af8"));
                }.bind(null, n)
              )
              .catch(n.oe);
          },
          mgRadio: function mgRadio() {
            n.e("components/form/mg-radio")
              .then(
                function () {
                  return resolve(n("e169"));
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
          bkB: function bkB() {
            n.e("components/common/block-b")
              .then(
                function () {
                  return resolve(n("9d64"));
                }.bind(null, n)
              )
              .catch(n.oe);
          },
          sqBtn: function sqBtn() {
            n.e("components/common/sq-btn")
              .then(
                function () {
                  return resolve(n("9823"));
                }.bind(null, n)
              )
              .catch(n.oe);
          },
        },
        data: function data() {
          return {
            t: "digit",
            params: { userTel: "", birthday: "", sex: "男", realName: "" },
            sexArr: [
              { value: "男", name: "男" },
              { value: "女", name: "女", checked: "true" },
            ],
            loading: !1,
            isEdit: !1,
            date: "",
            endDate: "",
            isbj: !1,
          };
        },
        onLoad: function onLoad(e) {
          var t = this;
          return (0, s.default)(
            a.default.mark(function n() {
              return a.default.wrap(function (n) {
                while (1) {
                  switch ((n.prev = n.next)) {
                    case 0:
                      e.userId && (t.isbj = !0),
                        t.getSystem().then(function (e) {
                          t.util.setNT(
                            ""
                              .concat(t.vipset.title, "-")
                              .concat(t.isbj ? "修改资料" : "提交资料")
                          );
                        }),
                        (t.date = t.endDate =
                          t.timeToDate(t.dateToTime(), "yyyy-MM-dd")),
                        t.getLoginInfo().then(function () {
                          (t.params.userTel = t.user.userTel || ""),
                            t.isbj &&
                              ((t.params.realName = t.user.realName),
                              (t.params.sex = t.user.sex),
                              (t.date = t.timeToDate(
                                t.user.birthday,
                                "yyyy-MM-dd"
                              )));
                        });
                    case 4:
                    case "end":
                      return n.stop();
                  }
                }
              }, n);
            })
          )();
        },
        mixins: [o.utilMixins],
        computed: f(
          f(
            {},
            (0, u.mapState)({
              vipset: function vipset(e) {
                return e.config.vipset;
              },
            })
          ),
          {},
          {
            startDate: function startDate() {
              return this.getDate("start");
            },
          }
        ),
        methods: {
          setTel: function setTel(e) {
            this.params.userTel = e;
          },
          bindDateChange: function bindDateChange(e) {
            this.date = e.target.value;
          },
          getDate: function getDate(e) {
            var t = new Date(),
              n = t.getFullYear(),
              r = t.getMonth() + 1,
              a = t.getDate();
            return (
              "start" === e ? (n -= 70) : "end" === e && (n += 2),
              (r = r > 9 ? r : "0" + r),
              (a = a > 9 ? a : "0" + a),
              "".concat(n, "-").concat(r, "-").concat(a)
            );
          },
          save: function save() {
            var e = this;
            return (0, s.default)(
              a.default.mark(function t() {
                var n, r, i;
                return a.default.wrap(function (t) {
                  while (1) {
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          ((e.params.birthday = e.dateToTime(e.date)),
                          (n = []),
                          e.vipset.register.includes(
                            "USER_FORM_INFO_FLAG_NAME"
                          ) || n.push("realName"),
                          e.vipset.register.includes(
                            "USER_FORM_INFO_FLAG_SEX"
                          ) || n.push("sex"),
                          e.vipset.register.includes(
                            "USER_FORM_INFO_FLAG_BIRTHDAY"
                          ) || n.push("birthday"),
                          (r = c.default.isFailParams({
                            field: e.params,
                            filter: n,
                            tips: {
                              realName: "请输入姓名",
                              userTel: "请输入手机号",
                              birthday: "请选择生日",
                            },
                          })),
                          r)
                        ) {
                          t.next = 10;
                          break;
                        }
                        return t.abrupt("return");
                      case 10:
                        if (c.default.isTelCode(e.params.userTel)) {
                          t.next = 12;
                          break;
                        }
                        return t.abrupt(
                          "return",
                          e.util.message("请输入正确的手机号", 3)
                        );
                      case 12:
                        return (
                          (e.loading = !0),
                          (t.next = 15),
                          e.util.request({
                            url: e.api[e.isbj ? "SaveUser" : "hykk"],
                            method: "POST",
                            mask: 1,
                            data: e.params,
                          })
                        );
                      case 15:
                        (i = t.sent),
                          i
                            ? (e.util.message("提交成功", 1, 1e3),
                              e.refreshUser({ nomask: 1, get: 1, now: 1 }),
                              c.default.swnb(1e3))
                            : (e.loading = !1);
                      case 17:
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
      t.default = d;
    },
    d75a: function d75a(e, t, n) {
      "use strict";
      n.r(t);
      var r = n("cd13"),
        a = n.n(r);
      for (var i in r) {
        ["default"].indexOf(i) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return r[e];
            });
          })(i);
      }
      t["default"] = a.a;
    },
  },
  [["a100", "common/runtime", "common/vendor"]],
]);
