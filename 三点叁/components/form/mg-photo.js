(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/form/mg-photo"],
  {
    "327f": function f(t, e, n) {
      "use strict";
      var r = n("a4d2"),
        a = n.n(r);
      a.a;
    },
    6854: function _(t, e, n) {
      "use strict";
      n.r(e);
      var r = n("6d4d"),
        a = n.n(r);
      for (var i in r) {
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(i);
      }
      e["default"] = a.a;
    },
    "6d4d": function d4d(t, e, n) {
      "use strict";
      var r = n("4ea4");
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var a = r(n("2eee")),
        i = r(n("c973")),
        o = n("6326");
      function f(t, e) {
        var _n =
          ("undefined" !== typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!_n) {
          if (
            Array.isArray(t) ||
            (_n = (function (t, e) {
              if (!t) return;
              if ("string" === typeof t) return u(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return u(t, e);
            })(t)) ||
            (e && t && "number" === typeof t.length)
          ) {
            _n && (t = _n);
            var r = 0,
              a = function a() {};
            return {
              s: a,
              n: function n() {
                return r >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[r++] };
              },
              e: function e(t) {
                throw t;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i,
          o = !0,
          _f = !1;
        return {
          s: function s() {
            _n = _n.call(t);
          },
          n: function n() {
            var t = _n.next();
            return (o = t.done), t;
          },
          e: function e(t) {
            (_f = !0), (i = t);
          },
          f: function f() {
            try {
              o || null == _n.return || _n.return();
            } finally {
              if (_f) throw i;
            }
          },
        };
      }
      function u(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) {
          r[n] = t[n];
        }
        return r;
      }
      var c = {
        components: {
          MgCell: function MgCell() {
            n.e("components/common/mg-cell")
              .then(
                function () {
                  return resolve(n("f3fc"));
                }.bind(null, n)
              )
              .catch(n.oe);
          },
        },
        props: {
          cname: "",
          max: { type: String, default: "9" },
          fileList: {
            type: Array,
            default: function _default() {
              return [];
            },
          },
          pt: { type: String, default: "" },
          mark: { type: [String, Number], default: "" },
          pkey: { type: String, default: "" },
          icon: { type: String, default: "iconjia" },
          title: "",
          ftitle: "",
          w: "",
        },
        data: function data() {
          return { filePaths: [], files: [] };
        },
        computed: {},
        watch: {
          fileList: {
            handler: function handler(t) {
              (this.filePaths = Object.assign(
                [],
                t.map(function (t) {
                  return { url: t };
                })
              )),
                t.length &&
                  (this.$emit("change-img", {
                    p: this.filePaths,
                    mark: this.mark,
                    pkey: this.pkey,
                  }),
                  "weChat" == this.api.platform &&
                    (this.files = this.filePaths));
            },
            immediate: !0,
          },
        },
        methods: {
          add: function add() {
            var t = this;
            return (0, i.default)(
              a.default.mark(function e() {
                var n, r, i, u, c, s, l;
                return a.default.wrap(
                  function (e) {
                    while (1) {
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            (0, o.choosePhoto)({
                              num: t.max - t.filePaths.length,
                            })
                          );
                        case 2:
                          if (((n = e.sent), "weChat" == t.api.platform)) {
                            e.next = 8;
                            break;
                          }
                          (t.filePaths = t.filePaths.concat(
                            n.map(function (t) {
                              return { tmp: 1, url: t };
                            })
                          )),
                            t.$emit("change-img", {
                              p: t.filePaths,
                              mark: t.mark,
                              pkey: t.pkey,
                            }),
                            (e.next = 32);
                          break;
                        case 8:
                          (r = []), (i = f(n)), (e.prev = 10), i.s();
                        case 12:
                          if ((u = i.n()).done) {
                            e.next = 21;
                            break;
                          }
                          return (
                            (c = u.value), (e.next = 16), (0, o.uploadImage)(c)
                          );
                        case 16:
                          (s = e.sent), (l = s.serverId), r.push(l);
                        case 19:
                          e.next = 12;
                          break;
                        case 21:
                          e.next = 26;
                          break;
                        case 23:
                          (e.prev = 23), (e.t0 = e["catch"](10)), i.e(e.t0);
                        case 26:
                          return (e.prev = 26), i.f(), e.finish(26);
                        case 29:
                          (t.filePaths = t.filePaths.concat(
                            n.map(function (t) {
                              return { tmp: 1, url: t };
                            })
                          )),
                            (t.files = t.files.concat(
                              r.map(function (t) {
                                return { tmp: 1, url: t };
                              })
                            )),
                            t.$emit("change-img", {
                              p: t.files,
                              mark: t.mark,
                              pkey: t.pkey,
                            });
                        case 32:
                          console.log(t.api.platform, n);
                        case 33:
                        case "end":
                          return e.stop();
                      }
                    }
                  },
                  e,
                  null,
                  [[10, 23, 26, 29]]
                );
              })
            )();
          },
          deletePic: function deletePic(t) {
            this.filePaths.splice(t, 1),
              "weChat" != this.api.platform
                ? this.$emit("change-img", {
                    p: this.filePaths,
                    mark: this.mark,
                    pkey: this.pkey,
                  })
                : (this.files.splice(t, 1),
                  this.$emit("change-img", {
                    p: this.files,
                    mark: this.mark,
                    pkey: this.pkey,
                  }));
          },
        },
      };
      e.default = c;
    },
    a4d2: function a4d2(t, e, n) {},
    a770: function a770(t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "c", function () {
          return a;
        }),
        n.d(e, "a", function () {});
      var r = function r() {
          var t = this.$createElement,
            e = (this._self._c, this.filePaths.length);
          this.$mp.data = Object.assign({}, { $root: { g0: e } });
        },
        a = [];
    },
    d577: function d577(t, e, n) {
      "use strict";
      n.r(e);
      var r = n("a770"),
        a = n("6854");
      for (var i in a) {
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(i);
      }
      n("327f");
      var o = n("f0c5"),
        f = Object(o["a"])(
          a["default"],
          r["b"],
          r["c"],
          !1,
          null,
          "0d675383",
          null,
          !1,
          r["a"],
          void 0
        );
      e["default"] = f.exports;
    },
  },
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  "components/form/mg-photo-create-component",
  {
    "components/form/mg-photo-create-component":
      function componentsFormMgPhotoCreateComponent(
        module,
        exports,
        __webpack_require__
      ) {
        __webpack_require__("543d")["createComponent"](
          __webpack_require__("d577")
        );
      },
  },
  [["components/form/mg-photo-create-component"]],
]);
