(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/my/integral/integral-record"],
  {
    "189d": function d(t, e, a) {
      "use strict";
      var n = a("3f1f"),
        r = a.n(n);
      r.a;
    },
    3077: function _(t, e, a) {
      "use strict";
      var n = a("4ea4");
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var r = n(a("2eee")),
        s = n(a("c973")),
        i = (a("26cb"), a("4789")),
        u = {
          name: "integralRecord",
          components: {
            navTab: function navTab() {
              a.e("components/common/functionCmp/nav-tab")
                .then(
                  function () {
                    return resolve(a("ceaf"));
                  }.bind(null, a)
                )
                .catch(a.oe);
            },
            jzz: function jzz() {
              a.e("components/common/jzz")
                .then(
                  function () {
                    return resolve(a("3db1"));
                  }.bind(null, a)
                )
                .catch(a.oe);
            },
          },
          data: function data() {
            return {
              aIdx: 0,
              tabs: [{ name: "未完成" }, { name: "已完成" }],
              params: { page: 1, size: 10 },
            };
          },
          onLoad: function onLoad(t) {
            this.getSystem(),
              this.util.setNT("兑换记录"),
              (this.aIdx = +t.idx || 0),
              this.changeTab(this.aIdx);
          },
          mixins: [i.sljz],
          computed: {
            jfName: function jfName() {
              return this.system.custom.integral;
            },
          },
          methods: {
            getList: function getList() {
              var t = this;
              return (0, s.default)(
                r.default.mark(function e() {
                  var a, n;
                  return r.default.wrap(function (e) {
                    while (1) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            t.util.request({ url: t.api.jfdd, data: t.params })
                          );
                        case 2:
                          (a = e.sent),
                            (n = a.data),
                            (t.dataList = t.dataList.concat(n)),
                            (t.isget = !0),
                            (t.mygd = t.params.size > n.length),
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
            changeTab: function changeTab(t) {
              (this.isget = this.mygd = !1), (this.params.page = 1);
              var e = "";
              switch (t) {
                case 0:
                  e = "1";
                  break;
                case 1:
                  e = "2";
                  break;
              }
              (this.params.type = e), (this.dataList = []), this.getList();
            },
            qrsh: function qrsh(t) {
              var e = this;
              return (0, s.default)(
                r.default.mark(function a() {
                  var n;
                  return r.default.wrap(
                    function (a) {
                      while (1) {
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              (a.prev = 0),
                              (a.next = 3),
                              e.util.modal("您确认收货吗？")
                            );
                          case 3:
                            return (
                              (a.next = 5),
                              e.util.request({
                                url: e.api.jfqrsh,
                                mask: 1,
                                method: "POST",
                                data: { id: t },
                              })
                            );
                          case 5:
                            (n = a.sent),
                              n &&
                                (e.util.message("收货成功", 1, 1e3),
                                e.changeTab(e.aIdx)),
                              (a.next = 11);
                            break;
                          case 9:
                            (a.prev = 9), (a.t0 = a["catch"](0));
                          case 11:
                          case "end":
                            return a.stop();
                        }
                      }
                    },
                    a,
                    null,
                    [[0, 9]]
                  );
                })
              )();
            },
            wyqh: function wyqh(t) {
              var e = this;
              return (0, s.default)(
                r.default.mark(function a() {
                  var n;
                  return r.default.wrap(
                    function (a) {
                      while (1) {
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              (a.prev = 0),
                              (a.next = 3),
                              e.util.modal("是否已收到商品？")
                            );
                          case 3:
                            return (
                              (a.next = 5),
                              e.util.request({
                                url: e.api.jfqrsh,
                                mask: 1,
                                method: "POST",
                                data: { id: t },
                              })
                            );
                          case 5:
                            (n = a.sent),
                              n &&
                                (e.util.message("收货成功", 1, 1e3),
                                e.changeTab(e.aIdx)),
                              (a.next = 11);
                            break;
                          case 9:
                            (a.prev = 9), (a.t0 = a["catch"](0));
                          case 11:
                          case "end":
                            return a.stop();
                        }
                      }
                    },
                    a,
                    null,
                    [[0, 9]]
                  );
                })
              )();
            },
          },
        };
      e.default = u;
    },
    3198: function _(t, e, a) {
      "use strict";
      a.r(e);
      var n = a("86b4"),
        r = a("993d");
      for (var s in r) {
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return r[t];
            });
          })(s);
      }
      a("189d");
      var i = a("f0c5"),
        u = Object(i["a"])(
          r["default"],
          n["b"],
          n["c"],
          !1,
          null,
          "461b549b",
          null,
          !1,
          n["a"],
          void 0
        );
      e["default"] = u.exports;
    },
    "3f1f": function f1f(t, e, a) {},
    "5cbd": function cbd(t, e, a) {
      "use strict";
      (function (t, e) {
        var n = a("4ea4");
        a("f00a");
        n(a("66fd"));
        var r = n(a("3198"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = a), e(r.default);
      }).call(this, a("bc2e")["default"], a("543d")["createPage"]);
    },
    "86b4": function b4(t, e, a) {
      "use strict";
      a.d(e, "b", function () {
        return n;
      }),
        a.d(e, "c", function () {
          return r;
        }),
        a.d(e, "a", function () {});
      var n = function n() {
          var t = this.$createElement,
            e = (this._self._c, 0 == this.dataList.length && this.isget);
          this.$mp.data = Object.assign({}, { $root: { g0: e } });
        },
        r = [];
    },
    "993d": function d(t, e, a) {
      "use strict";
      a.r(e);
      var n = a("3077"),
        r = a.n(n);
      for (var s in n) {
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(s);
      }
      e["default"] = r.a;
    },
  },
  [["5cbd", "common/runtime", "common/vendor"]],
]);
