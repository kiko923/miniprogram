(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["yb_wm/shop/gfhb/gflb"],
  {
    4357: function _(t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return a;
      }),
        n.d(e, "c", function () {
          return i;
        }),
        n.d(e, "a", function () {});
      var a = function a() {
          var t = this.$createElement;
          this._self._c;
        },
        i = [];
    },
    7712: function _(t, e, n) {
      "use strict";
      n.r(e);
      var a = n("4357"),
        i = n("b8e3");
      for (var u in i) {
        ["default"].indexOf(u) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(u);
      }
      n("ed13");
      var r = n("f0c5"),
        c = Object(r["a"])(
          i["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "75993e33",
          null,
          !1,
          a["a"],
          void 0
        );
      e["default"] = c.exports;
    },
    b8e3: function b8e3(t, e, n) {
      "use strict";
      n.r(e);
      var a = n("e5fa"),
        i = n.n(a);
      for (var u in a) {
        ["default"].indexOf(u) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(u);
      }
      e["default"] = i.a;
    },
    bbb2: function bbb2(t, e, n) {
      "use strict";
      (function (t, e) {
        var a = n("4ea4");
        n("f00a");
        a(n("66fd"));
        var i = a(n("7712"));
        (t.__webpack_require_UNI_MP_PLUGIN__ = n), e(i.default);
      }).call(this, n("bc2e")["default"], n("543d")["createPage"]);
    },
    e572: function e572(t, e, n) {},
    e5fa: function e5fa(t, e, n) {
      "use strict";
      var a = n("4ea4");
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var i = a(n("2eee")),
        u = a(n("c973")),
        r =
          (n("26cb"),
          {
            name: "gflb",
            components: {},
            data: function data() {
              return { divinfolist: [] };
            },
            onLoad: function onLoad(t) {
              this.getSystem(),
                this.util.setNT("瓜分列表"),
                (this.query = t),
                this.getInfolist();
            },
            computed: {},
            methods: {
              getInfolist: function getInfolist() {
                var t = this;
                return (0, u.default)(
                  i.default.mark(function e() {
                    var n, a;
                    return i.default.wrap(function (e) {
                      while (1) {
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              t.util.request({
                                url: t.api.divlist,
                                data: { id: t.query.id },
                              })
                            );
                          case 2:
                            (n = e.sent),
                              (a = n.data),
                              (t.divinfolist = a),
                              (t.showLoading = !1);
                          case 6:
                          case "end":
                            return e.stop();
                        }
                      }
                    }, e);
                  })
                )();
              },
            },
          });
      e.default = r;
    },
    ed13: function ed13(t, e, n) {
      "use strict";
      var a = n("e572"),
        i = n.n(a);
      i.a;
    },
  },
  [["bbb2", "common/runtime", "common/vendor"]],
]);
