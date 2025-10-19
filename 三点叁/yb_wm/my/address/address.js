(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/my/address/address"],
  {
    "0b84": function b84(e, t, n) {
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
    1635: function _(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("7660"),
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
    7660: function _(e, t, n) {
      "use strict";
      var a = n("4ea4");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = a(n("2eee")),
        o = a(n("9523")),
        c = a(n("c973")),
        s = n("26cb"),
        u = a(n("8bb1"));
      function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                (0, o.default)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
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
          mgMap: function mgMap() {
            n.e("components/form/mg-map")
              .then(
                function () {
                  return resolve(n("77d8"));
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
          wPicker: function wPicker() {
            Promise.all([n.e("common/vendor"), n.e("components/form/w-picker")])
              .then(
                function () {
                  return resolve(n("59fa"));
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
            snameData:{background:'transparent'},
            params: {
              userName: "",
              sex: "先生",
              userTel: "",
              address: "",
              details: "",
              label: "公司",
              lat: "",
              lng: "",
              id: "",
              zipCode: "",
            },
            sexArr: [
              { value: "先生", name: "先生" },
              { value: "女士", name: "女士", checked: "true" },
            ],
            labels: ["公司", "家", "学校"],
            labels2: ["宿舍", "家", "学校"],
            loading: !1,
            isEdit: !1,
            pArr: [
              { label: "cv1", value: "1" },
              { label: "cv2", value: "2" },
              { label: "cv3", value: "3" },
              { label: "cv4", value: "4" },
              { label: "cv5", value: "5" },
              { label: "cv6", value: "6" },
            ],
          };
        },
        onLoad: function onLoad(e) {
          var t = this;
          return (0, c.default)(
            r.default.mark(function n() {
              var a, o;
              return r.default.wrap(function (n) {
                while (1) {
                  switch ((n.prev = n.next)) {
                    case 0:
                      if ((t.getSystem(), t.util.setNT("编辑地址"), !e.id)) {
                        n.next = 9;
                        break;
                      }
                      return (
                        (t.isEdit = !0),
                        (n.next = 6),
                        t.util.request({
                          url: t.api.bcshdz,
                          data: { id: e.id },
                        })
                      );
                    case 6:
                      for (o in ((a = n.sent), t.params)) {
                        t.params[o] = a.data[o];
                      }
                      console.log(e, t.params);
                    case 9:
                    case "end":
                      return n.stop();
                  }
                }
              }, n);
            })
          )();
        },
        methods: l(
          l({}, (0, s.mapActions)([""])),
          {},
          {
            label: function label(e) {
              this.params.label = e;
            },
            chooseLocation: function chooseLocation() {
              this.$refs.mgmap.choose();
            },
            setCLP: function setCLP(e) {
              (this.params.address = e.address),
                (this.params.details = e.name),
                (this.params.lat = e.latitude),
                (this.params.lng = e.longitude);
            },
            setTel: function setTel(e) {
              this.params.userTel = e;
            },
            save: function save() {
              var e = this;
              return (0, c.default)(
                r.default.mark(function t() {
                  var n, a, o, c;
                  return r.default.wrap(function (t) {
                    while (1) {
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            (console.log(e.params),
                            (n = ["lat", "lng", "zipCode"]),
                            e.params.id || n.push("id"),
                            (a = u.default.isFailParams({
                              field: e.params,
                              filter: n,
                              tips: {
                                userId: "缺少用户id",
                                userName: "请输入联系人",
                                userTel: "输入手机号",
                                address: "请选择地址",
                                details: "请输入门牌号等详细地址",
                                label: "请选择标签",
                                id: "缺少地址id",
                              },
                            })),
                            a)
                          ) {
                            t.next = 8;
                            break;
                          }
                          return t.abrupt("return");
                        case 8:
                          return (
                            (e.loading = !0),
                            (t.next = 11),
                            e.util.request({
                              url: e.api.bcshdz,
                              method: "POST",
                              mask: 1,
                              data: e.params,
                            })
                          );
                        case 11:
                          (o = t.sent),
                            o
                              ? (e.util.message("保存成功", 1, 1e3),
                                (c = e.util.getPage()),
                                c.$vm.getData(),
                                u.default.swnb(1e3))
                              : (e.loading = !1);
                        case 13:
                        case "end":
                          return t.stop();
                      }
                    }
                  }, t);
                })
              )();
            },
            deleteAdd: function deleteAdd() {
              var e = this;
              return (0, c.default)(
                r.default.mark(function t() {
                  var n, a;
                  return r.default.wrap(
                    function (t) {
                      while (1) {
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              (t.next = 3),
                              e.util.modal("确认删除此地址吗？")
                            );
                          case 3:
                            return (
                              (t.next = 5),
                              e.util.request({
                                url: e.api.scshdz,
                                method: "POST",
                                mask: 1,
                                data: { id: e.params.id },
                              })
                            );
                          case 5:
                            (n = t.sent),
                              n &&
                                (e.util.message("删除成功", 1, 1e3),
                                (a = e.util.getPage()),
                                a.$vm.getData(),
                                u.default.swnb(1e3)),
                              (t.next = 11);
                            break;
                          case 9:
                            (t.prev = 9), (t.t0 = t["catch"](0));
                          case 11:
                          case "end":
                            return t.stop();
                        }
                      }
                    },
                    t,
                    null,
                    [[0, 9]]
                  );
                })
              )();
            },
            toggleTab: function toggleTab(e) {
              this.$refs[e].show();
            },
            onConfirm: function onConfirm(e, t) {
              switch (t) {
                case "people":
                  this.params.zipCode = e.result;
                  break;
              }
            },
          }
        ),
      };
      t.default = d;
    },
    c470: function c470(e, t, n) {
      "use strict";
      (function (e, t) {
        var a = n("4ea4");
        n("f00a");
        a(n("66fd"));
        var r = a(n("c792"));
        (e.__webpack_require_UNI_MP_PLUGIN__ = n), t(r.default);
      }).call(this, n("bc2e")["default"], n("543d")["createPage"]);
    },
    c792: function c792(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("0b84"),
        r = n("1635");
      for (var o in r) {
        ["default"].indexOf(o) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return r[e];
            });
          })(o);
      }
      var c = n("f0c5"),
        s = Object(c["a"])(
          r["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "fdcd396e",
          null,
          !1,
          a["a"],
          void 0
        );
      t["default"] = s.exports;
    },
  },
  [["c470", "common/runtime", "common/vendor"]],
]);
