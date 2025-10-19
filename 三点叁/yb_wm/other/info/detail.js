(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/other/info/detail"],
  {
    "0cc3": function cc3(t, e, n) {},
    "20a8": function a8(t, e, n) {
      "use strict";
      n.r(e);
      var i = n("e690"),
        c = n("d4ea");
      for (var o in c) {
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return c[t];
            });
          })(o);
      }
      n("5d15");
      var a = n("f0c5"),
        r = Object(a["a"])(
          c["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "d7bea48e",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = r.exports;
    },
    "5d15": function d15(t, e, n) {
      "use strict";
      var i = n("0cc3"),
        c = n.n(i);
      c.a;
    },
    "7ce3": function ce3(t, e, n) {
      "use strict";
      (function (t, e) {
        var i = n("4ea4");
        n("f00a");
        i(n("66fd"));
        var c = i(n("20a8"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = n), e(c.default);
      }).call(this, n("bc2e")["default"], n("543d")["createPage"]);
    },
    d4ea: function d4ea(t, e, n) {
      "use strict";
      n.r(e);
      var i = n("db70"),
        c = n.n(i);
      for (var o in i) {
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(o);
      }
      e["default"] = c.a;
    },
    db70: function db70(t, e, n) {
      "use strict";
      var i = n("4ea4");
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var c = i(n("2eee")),
        o = i(n("c973")),
        a = (n("26cb"), i(n("8bb1"))),
        r = {
          name: "order-index",
          components: {
            jzz: function jzz() {
              n.e("components/common/jzz")
                .then(
                  function () {
                    return resolve(n("3db1"));
                  }.bind(null, n)
                )
                .catch(n.oe);
            },
            mgRtext: function mgRtext() {
              Promise.all([
                n.e("common/vendor"),
                n.e("components/common/functionCmp/rich-text"),
              ])
                .then(
                  function () {
                    return resolve(n("0b28"));
                  }.bind(null, n)
                )
                .catch(n.oe);
            },
          },
          data: function data() {
            return { co: {} };
          },
          onLoad: function onLoad(t) {
            this.getSystem(),
              this.util.setNT("资讯详情"),
              (this.id = t.id),
              this.getData();
          },
          computed: {},
          methods: {
            getData: function getData() {
              var t = this;
              return (0, o.default)(
                c.default.mark(function e() {
                  var n, i;
                  return c.default.wrap(function (e) {
                    while (1) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            t.util.request({
                              url: t.api.zxxq,
                              data: { id: t.id },
                            })
                          );
                        case 2:
                          (n = e.sent), (i = n.data), (t.co = i);
                        case 5:
                        case "end":
                          return e.stop();
                      }
                    }
                  }, e);
                })
              )();
            },
            getTime: function getTime(t) {
              return a.default.settime(t);
            },
          },
          onShareAppMessage: function onShareAppMessage() {
            return this.util.mpShare({
              t: this.co.title,
              i: this.getImgS(this.co.icon),
            });
          },
          onShareTimeline: function onShareTimeline(t) {
            return {
              title: this.co.title,
              imageUrl: this.getImgS(this.co.icon),
            };
          },
        };
      e.default = r;
    },
    e690: function e690(t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "c", function () {
          return c;
        }),
        n.d(e, "a", function () {});
      var i = function i() {
          var t = this.$createElement,
            e =
              (this._self._c,
              this.co.id ? this.getTime(this.co.createdAt) : null);
          this.$mp.data = Object.assign({}, { $root: { m0: e } });
        },
        c = [];
    },
  },
  [["7ce3", "common/runtime", "common/vendor"]],
]);
