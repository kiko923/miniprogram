(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/shop/select/index"],
  {
    6353: function _(t, e, a) {
      "use strict";
      (function (t) {
        var n = a("4ea4");
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var i = n(a("2eee")),
          s = n(a("9523")),
          r = n(a("c973")),
          o = a("26cb"),
          d = n(a("8bb1")),
          c = a("6326");
        function u(t, e) {
          var a = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              a.push.apply(a, n);
          }
          return a;
        }
        function l(t) {
          for (var e = 1; e < arguments.length; e++) {
            var a = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? u(Object(a), !0).forEach(function (e) {
                  (0, s.default)(t, e, a[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
              : u(Object(a)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(a, e)
                  );
                });
          }
          return t;
        }
        var f = {
          name: "select-index",
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
              isnameData:{fontWeight:'900'},
              tabs: [{ name: "选择门店" }, { name: "常用/收藏" }],
              latitude: 39.909,
              longitude: 116.39742,
              covers: [],
              dwcsInfo: {},
              dtshow: !0,
              dataList: [
                {
                  list: [],
                  isget: !1,
                  mygd: !1,
                  api: "dplb",
                  params: {
                    page: 1,
                    size: 10,
                    lat: "",
                    lng: "",
                    cityId: "",
                    zoneId: "",
                    storeId: "",
                  },
                },
                {
                  list: [],
                  isget: !1,
                  mygd: !1,
                  api: "dplbsc",
                  params: { page: 1, size: 10 },
                },
              ],
              xzdpidx: 0,
              ssobj: { list: [], isget: !1, params: { keyword: "" } },
              issearch: !1,
              showSearch: !1,
              zfbH: "h100",
            };
          },
          onLoad: function onLoad(e) {
            var a = this;
            return (0, r.default)(
              i.default.mark(function n() {
                return i.default.wrap(function (n) {
                  while (1) {
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (n.next = 2), a.getSystem();
                      case 2:
                        a.util.setNT("选择门店"),
                          (a.query = e),
                          a.swiperTab({ detail: { current: +e.idx || 0 } }),
                          t.$on("changeCity", function (t) {
                            t.hasOwnProperty("dwcsInfo") &&
                              ((a.dwcsInfo = t.dwcsInfo),
                              (a.dataList[0] = {
                                list: [],
                                isget: !1,
                                mygd: !1,
                                api: "dplb",
                                params: {
                                  page: 1,
                                  size: 10,
                                  lat: a.dataList[0].params.lat,
                                  lng: a.dataList[0].params.lng,
                                  cityId: a.dwcsInfo.cityId,
                                  zoneId: a.dwcsInfo.zoneId,
                                },
                              }),
                              (a.xzdpidx = 0),
                              a.getList());
                          }),
                          console.log(e);
                      case 7:
                      case "end":
                        return n.stop();
                    }
                  }
                }, n);
              })
            )();
          },
          onUnload: function onUnload() {
            t.$off("changeCity");
          },
          computed: {},
          methods: l(
            l({}, (0, o.mapActions)(["getConfig"])),
            {},
            {
              getDwcs: function getDwcs(t) {
                var e = this;
                return (0, r.default)(
                  i.default.mark(function a() {
                    var n, s;
                    return i.default.wrap(function (a) {
                      while (1) {
                        switch ((a.prev = a.next)) {
                          case 0:
                            if (1 != e.system.storeSet.showType) {
                              a.next = 15;
                              break;
                            }
                            return (
                              (a.next = 3),
                              e.util.request({
                                url: e.api.dwcs,
                                method: "POST",
                                data: {
                                  lat: t.latitude,
                                  lng: t.longitude,
                                  storeId: e.query.storeId || "",
                                },
                              })
                            );
                          case 3:
                            (n = a.sent),
                              (s = n.data),
                              (s.zoneName = "全部地区"),
                              (s.zoneId = ""),
                              (e.dwcsInfo = s),
                              (e.latitude = e.dataList[0].params.lat =
                                t.latitude),
                              (e.longitude = e.dataList[0].params.lng =
                                t.longitude),
                              (e.dataList[0].params.cityId = e.dwcsInfo.cityId),
                              (e.dataList[0].params.zoneId = ""),
                              (e.dataList[0].params.storeId =
                                e.query.storeId || ""),
                              (a.next = 18);
                            break;
                          case 15:
                            (e.latitude = e.dataList[0].params.lat =
                              t.latitude),
                              (e.longitude = e.dataList[0].params.lng =
                                t.longitude),
                              (e.dataList[0].params.storeId =
                                e.query.storeId || "");
                          case 18:
                          case "end":
                            return a.stop();
                        }
                      }
                    }, a);
                  })
                )();
              },
              stopTouchMove: function stopTouchMove() {
                return !1;
              },
              changeTab: function changeTab(t) {},
              swiperTab: function swiperTab(t) {
                var e = this;
                return (0, r.default)(
                  i.default.mark(function a() {
                    var n;
                    return i.default.wrap(function (a) {
                      while (1) {
                        switch ((a.prev = a.next)) {
                          case 0:
                            if (
                              ((e.aIdx = t.detail.current),
                              0 == e.aIdx || t.detail.hasOwnProperty("source"))
                            ) {
                              a.next = 3;
                              break;
                            }
                            return a.abrupt("return");
                          case 3:
                            if (e.dataList[t.detail.current].isget) {
                              a.next = 11;
                              break;
                            }
                            if (
                              0 != e.aIdx ||
                              e.dwcsInfo.hasOwnProperty("cityId")
                            ) {
                              a.next = 10;
                              break;
                            }
                            return (a.next = 7), (0, c.getDw)({ t: 0 });
                          case 7:
                            return (n = a.sent), (a.next = 10), e.getDwcs(n);
                          case 10:
                            e.getList();
                          case 11:
                          case "end":
                            return a.stop();
                        }
                      }
                    }, a);
                  })
                )();
              },
              lower: d.default.throttle(function (t) {
                !this.dataList[this.aIdx].mygd &&
                  this.dataList[this.aIdx].isget &&
                  ((this.dataList[this.aIdx].isget = !1), this.getList());
              }, 300),
              getList: function getList() {
                var t = this;
                return (0, r.default)(
                  i.default.mark(function e() {
                    var a, n, s;
                    return i.default.wrap(function (e) {
                      while (1) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = t.dataList[t.aIdx]),
                              (e.next = 3),
                              t.util.request({
                                url: t.api[t.dataList[t.aIdx].api],
                                data: t.dataList[t.aIdx].params,
                              })
                            );
                          case 3:
                            (n = e.sent),
                              (s = n.data),
                              (a.list = a.list.concat(s)),
                              (a.isget = !0),
                              (a.mygd = a.params.size > s.length),
                              a.params.page++,
                              t.$set(t.dataList, t.aIdx, a),
                              0 == t.aIdx && t.setCovers();
                          case 11:
                          case "end":
                            return e.stop();
                        }
                      }
                    }, e);
                  })
                )();
              },
              setCovers: function setCovers() {
                var t = this;
                this.dataList[0].list[0] &&
                  d.default.stfn(function () {
                    (t.latitude = +t.dataList[0].list[0].lat),
                      (t.longitude = +t.dataList[0].list[0].lng);
                  }, 400),
                  (this.covers = this.dataList[0].list.map(function (t) {
                    return {
                      id: +t.id,
                      latitude: t.lat,
                      longitude: t.lng,
                      iconPath: t.icon,
                      width: "25",
                      height: "25",
                      callout: {
                        content: t.name + ">",
                        color: "#333",
                        fontSize: 14,
                        borderRadius: 3,
                        bgColor: "#fff",
                        padding: 7,
                        display: "ALWAYS",
                        textAlign: "center",
                      },
                    };
                  }));
              },
              selectStore: function selectStore(e, a) {
                var n = this;
                return (0, r.default)(
                  i.default.mark(function s() {
                    var r;
                    return i.default.wrap(
                      function (i) {
                        while (1) {
                          switch ((i.prev = i.next)) {
                            case 0:
                              if (2 == n.system.storeSet.storeModel) {
                                i.next = 2;
                                break;
                              }
                              return i.abrupt(
                                "return",
                                n.util.message("多门店功能已关闭", 3)
                              );
                            case 2:
                              if (
                                ((n.xzdpidx = a),
                                (n.latitude = e.lat),
                                (n.longitude = e.lng),
                                n.query.storeId != e.id)
                              ) {
                                i.next = 7;
                                break;
                              }
                              return i.abrupt(
                                "return",
                                t.showModal({
                                  title: "提示",
                                  content:
                                    "你选中的是当前所在店铺，是否返回上级页面继续点单",
                                  success: function success(t) {
                                    t.confirm && n.go({ t: 4 });
                                  },
                                })
                              );
                            case 7:
                              return (
                                (r = ""),
                                (r =
                                  1 != e.storeOpen
                                    ? "[".concat(
                                        e.name,
                                        "] 休息中 确认切换到该门店吗？"
                                      )
                                    : 0 == a
                                    ? "确认切换到[".concat(e.name, "]门店吗？")
                                    : "您当前所在位置距离该门店较远 确认切换到 [".concat(
                                        e.name,
                                        "] 门店吗？"
                                      )),
                                (i.prev = 9),
                                (i.next = 12),
                                n.util.modal(r)
                              );
                            case 12:
                              ("goods" == n.query.page ||
                                "index" == n.query.page) &&
                                (n.qhdp(e), n.go({ t: 4 })),
                                (i.next = 17);
                              break;
                            case 15:
                              (i.prev = 15), (i.t0 = i["catch"](9));
                            case 17:
                            case "end":
                              return i.stop();
                          }
                        }
                      },
                      s,
                      null,
                      [[9, 15]]
                    );
                  })
                )();
              },
              qhdp: function qhdp(t) {
                this.getConfig({
                  key: "storeInfo",
                  data: { id: t.id, name: t.name, distance: t.distance },
                });
              },
              markertap: function markertap(t) {
                var e = this.dataList[0].list.find(function (e, a) {
                    return e.id == t.detail.markerId;
                  }),
                  a = this.dataList[0].list.findIndex(function (e, a) {
                    return e.id == t.detail.markerId;
                  });
                this.selectStore(e, a);
              },
              xzcs: function xzcs() {
                this.dwcsInfo.cityId &&
                  this.go({
                    url:
                      "select?info=" +
                      encodeURIComponent(JSON.stringify(this.dwcsInfo)),
                  });
              },
              yysj: function yysj(t) {
                var e = "",
                  a = t;
                return (
                  1 == a.timeType
                    ? (e = "24小时营业")
                    : ((e = ""
                        .concat(a.timeArr[0].startTime, "-")
                        .concat(a.timeArr[0].ciri ? "次日" : "")
                        .concat(a.timeArr[0].endTime)),
                      a.timeArr[1] &&
                        (e +=
                          " " +
                          ""
                            .concat(a.timeArr[1].startTime, "-")
                            .concat(a.timeArr[1].ciri ? "次日" : "")
                            .concat(a.timeArr[1].endTime)),
                      a.timeArr[2] &&
                        (e +=
                          " " +
                          ""
                            .concat(a.timeArr[2].startTime, "-")
                            .concat(a.timeArr[2].ciri ? "次日" : "")
                            .concat(a.timeArr[2].endTime))),
                  e
                );
              },
              djss: function djss() {
                this.showSearch = !0;
              },
              qxss: function qxss() {
                (this.showSearch = this.issearch = !1),
                  (this.ssobj = {
                    list: [],
                    isget: !1,
                    params: { keyword: "" },
                  });
              },
              cleanKey: function cleanKey() {
                (this.ssobj.params.keyword = ""),
                  (this.issearch = !1),
                  (this.ssobj.list = []),
                  (this.ssobj.isget = !1);
              },
              confirm: function confirm(t) {
                if (!this.ssobj.params.keyword)
                  return this.util.message("请输入搜索内容", 3);
                (this.issearch = !0),
                  (this.ssobj.list = []),
                  (this.ssobj.isget = !1),
                  this.getssList();
              },
              getssList: function getssList() {
                var t = this;
                return (0, r.default)(
                  i.default.mark(function e() {
                    var a, n;
                    return i.default.wrap(function (e) {
                      while (1) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              t.util.request({
                                url: t.api.dplbss,
                                method: "POST",
                                data: t.ssobj.params,
                              })
                            );
                          case 2:
                            (a = e.sent),
                              (n = a.data),
                              (t.ssobj.list = t.ssobj.list.concat(n)),
                              (t.ssobj.isget = !0);
                          case 6:
                          case "end":
                            return e.stop();
                        }
                      }
                    }, e);
                  })
                )();
              },
              xzssdp: function xzssdp(t) {
                var e = this;
                return (0, r.default)(
                  i.default.mark(function a() {
                    var n, s;
                    return i.default.wrap(function (a) {
                      while (1) {
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              e.qxss(),
                              (a.next = 3),
                              e.util.request({
                                url: e.api.dwcs,
                                mask: 1,
                                method: "POST",
                                data: { storeId: t.id },
                              })
                            );
                          case 3:
                            (n = a.sent),
                              (s = n.data),
                              (e.dwcsInfo = s),
                              (e.dataList[0] = {
                                list: [],
                                isget: !1,
                                mygd: !1,
                                api: "dplb",
                                params: {
                                  page: 1,
                                  size: 10,
                                  lat: e.dataList[0].params.lat,
                                  lng: e.dataList[0].params.lng,
                                  cityId: e.dwcsInfo.cityId,
                                  zoneId: e.dwcsInfo.zoneId,
                                },
                              }),
                              (e.xzdpidx = 0),
                              e.getList();
                          case 9:
                          case "end":
                            return a.stop();
                        }
                      }
                    }, a);
                  })
                )();
              },
              bddh: function bddh(t) {
                this.util.makeTel(t.storeTel);
              },
              ckwz: function ckwz(t) {
                this.util.ckWz({
                  lat: t.lat,
                  lng: t.lng,
                  name: t.name,
                  address: t.address,
                });
              },
            }
          ),
        };
        e.default = f;
      }).call(this, a("543d")["default"]);
    },
    "68fe": function fe(t, e, a) {},
    "7ac6": function ac6(t, e, a) {
      "use strict";
      var n = a("68fe"),
        i = a.n(n);
      i.a;
    },
    b394: function b394(t, e, a) {
      "use strict";
      a.r(e);
      var n = a("6353"),
        i = a.n(n);
      for (var s in n) {
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(s);
      }
      e["default"] = i.a;
    },
    cf49: function cf49(t, e, a) {
      "use strict";
      a.d(e, "b", function () {
        return n;
      }),
        a.d(e, "c", function () {
          return i;
        }),
        a.d(e, "a", function () {});
      var n = function n() {
          var t = this,
            e = t.$createElement,
            a =
              (t._self._c,
              t.__map(t.dataList[t.aIdx].list, function (e, a) {
                var n = t.__get_orig(e),
                  i = e.distributionSupport
                    ? e.distributionSupport.find(function (t) {
                        return 1 == t;
                      })
                    : null,
                  s = e.distributionSupport
                    ? e.distributionSupport.find(function (t) {
                        return 2 == t;
                      })
                    : null,
                  r = t.yysj(e),
                  o = Number((e.distance / 1e3).toFixed(1));
                return { $orig: n, g0: i, g1: s, m0: r, m1: o };
              })),
            n = 0 == t.dataList[t.aIdx].list.length && t.dataList[t.aIdx].isget,
            i = t.__map(t.dataList[t.aIdx].list, function (e, a) {
              var n = t.__get_orig(e),
                i = e.distributionSupport
                  ? e.distributionSupport.find(function (t) {
                      return 1 == t;
                    })
                  : null,
                s = e.distributionSupport
                  ? e.distributionSupport.find(function (t) {
                      return 2 == t;
                    })
                  : null,
                r = t.yysj(e);
              return { $orig: n, g3: i, g4: s, m2: r };
            }),
            s = 0 == t.dataList[t.aIdx].list.length && t.dataList[t.aIdx].isget,
            r = 0 == t.ssobj.list.length && t.ssobj.isget;
          t._isMounted ||
            (t.e0 = function (e) {
              t.dtshow = !t.dtshow;
            }),
            (t.$mp.data = Object.assign(
              {},
              { $root: { l0: a, g2: n, l1: i, g5: s, g6: r } }
            ));
        },
        i = [];
    },
    d09b: function d09b(t, e, a) {
      "use strict";
      a.r(e);
      var n = a("cf49"),
        i = a("b394");
      for (var s in i) {
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return i[t];
            });
          })(s);
      }
      a("7ac6");
      var r = a("f0c5"),
        o = Object(r["a"])(
          i["default"],
          n["b"],
          n["c"],
          !1,
          null,
          "5714c8f7",
          null,
          !1,
          n["a"],
          void 0
        );
      e["default"] = o.exports;
    },
    e00a: function e00a(t, e, a) {
      "use strict";
      (function (t, e) {
        var n = a("4ea4");
        a("f00a");
        n(a("66fd"));
        var i = n(a("d09b"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = a), e(i.default);
      }).call(this, a("bc2e")["default"], a("543d")["createPage"]);
    },
  },
  [["e00a", "common/runtime", "common/vendor"]],
]);
