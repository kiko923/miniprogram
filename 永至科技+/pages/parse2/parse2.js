require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../@babel/runtime/helpers/objectSpread2"),
  t = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = require("../../@babel/runtime/helpers/toConsumableArray"),
  a = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../@babel/runtime/helpers/asyncToGenerator"),
  s = require("../../utils/api.js");
Page({
  data: {
    url: "",
    result: null,
    loading: !1,
    showImageCountTip: !1,
    isVideoFullscreen: !1,
    showShareModal: !1,
    showErrorModal: !1,
    errorUrl: "",
    isDarkMode: !1,
    errorImages: {},
    currentErrorInfo: "",
    selectedImages: [],
    isAllSelected: !1,
    selectedCount: 0,
    isInstagramContent: !1,
    isSensitivePlatform: !1,
    platformName: "",
    safePreviewImage: "/images/yes.gif",
    showCouponsModal: !1,
    coupons: [{
      name: "饿了么红包",
      icon: "/images/eleme.png",
      desc: "最高领66元红包",
      appId: "wxece3a9a4c82f58c9",
      path: "commercialize/pages/taoke-guide/index?scene=0667e14beec2403789fbf60ef1363fe0"
    }, {
      name: "饿了么超吃卡",
      icon: "/images/eleme.png",
      desc: "大学生 0 元",
      appId: "wxece3a9a4c82f58c9",
      path: "ad-bdlm-sub/pages/wh-coupon-guide/index?scene=abc403117c284fbaae72fd4294134e38"
    }, {
      name: "美团外卖红包",
      icon: "/images/meituan.png",
      desc: "先领红包享优惠",
      appId: "wxde8ac0a21135c07d",
      path: "/index/pages/h5/h5?weburl=https%3A%2F%2Fclick.meituan.com%2Ft%3Ft%3D1%26c%3D2%26p%3Dqg3Vfb9zKQTK"
    }, {
      name: "美团外卖神券",
      icon: "/images/meituan.png",
      desc: "2.9元买30元券",
      appId: "wxde8ac0a21135c07d",
      path: "/index/pages/h5/h5?weburl=https%3A%2F%2Fclick.meituan.com%2Ft%3Ft%3D1%26c%3D2%26p%3DKDN1a79z07cp"
    }, {
      name: "滴滴打车",
      icon: "/images/didi.png",
      desc: "优惠打车5折起",
      appId: "wxaf35009675aa0b2a",
      path: "/pages/parse/parse?scene=rYe2XGg&source_id=484jutuike7426800&ref_from=dunion"
    }, {
      name: "花小猪打车",
      icon: "/images/zhu.png",
      desc: "真的很便宜",
      appId: "wxd98a20e429ce834b",
      path: "/pages/chitu/index?scene=ZRAKDZp&source_id=484jutuike123456&ref_from=dunion"
    }, {
      name: "特惠快递",
      icon: "/images/kuaidi.png",
      desc: "全国包邮 5 元起",
      appId: "wx795bd500b21f8fee",
      path: "pages/parse/parse?scene=cuid%3D13990033000313%3Bpsid%3D484jutuike123456"
    }, {
      name: "咖啡奶茶",
      icon: "/images/coffee.png",
      desc: "瑞幸7.9/库迪6.9",
      appId: "wx91d27dbf599dff74",
      path: "pages/union/proxy/proxy?spreadUrl=https://u.jd.com/6GVrS9j"
    }],
    isResultEmpty: !1,
    parsedUrl: "",
    showPreviewGuide: !1,
    foreignPlatformsUnlocked: !1
  },
  onLoad: function () {
    var e = this;
    this.videoContext = wx.createVideoContext("myVideo"), wx.getSystemInfo({
      success: function (t) {
        var r = "dark" === t.theme;
        console.log("系统主题模式:", r ? "深色" : "浅色"), e.setData({
          isDarkMode: r,
          safePreviewImage: r ? "/images/yes-dark.gif" : "/images/yes.gif"
        })
      }
    }), this.checkIsAddedToMyMiniProgram(), setTimeout((function () {
      e.showPinPromptIfNeeded()
    }), 500)
  },
  onShow: function () {
    var e = this;
    this.checkIsAddedToMyMiniProgram(), setTimeout((function () {
      e.showPinPromptIfNeeded()
    }), 500)
  },
  checkIsAddedToMyMiniProgram: function () {
    wx.checkIsAddedToMyMiniProgram && wx.checkIsAddedToMyMiniProgram({
      success: function (e) {
        getApp().globalData.isAddedToMyMiniProgram = e.added
      }
    })
  },
  onThemeChange: function (e) {
    var t = "dark" === e.theme;
    this.setData({
      isDarkMode: t,
      safePreviewImage: t ? "/images/safe-preview-dark.png" : "/images/safe-preview.png"
    })
  },
  onInput: function (e) {
    this.setData({
      url: e.detail.value
    })
  },
  clearInput: function () {
    this.setData({
      url: "",
      result: null,
      loading: !1,
      showImageCountTip: !1,
      showShareModal: !1,
      showErrorModal: !1,
      errorUrl: ""
    })
  },
  pasteContent: function () {
    var e = this;
    wx.getClipboardData({
      success: function (t) {
        if (t.data) {
          var r = e.extractUrl(t.data);
          r ? e.setData({
            url: r
          }) : wx.navigateTo({
            url: "/pages/guide/guide"
          })
        }
      },
      fail: function (e) {
        console.error("Paste error:", e), wx.showToast({
          title: "粘贴失败",
          icon: "none"
        })
      }
    })
  },
  copyShortcutLink: function () {
    wx.setClipboardData({
      data: "https://link3.cc/yionchi",
      success: function () {
        wx.showToast({
          title: "链接已复制",
          icon: "success"
        })
      }
    })
  },
  extractUrl: function (e) {
    if (!e) return "";
    if (console.log("原始剪贴板内容:", e), e.includes("youtube.com") || e.includes("youtu.be")) {
      var t = e.match(/https?:\/\/(?:www\.)?(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)[^&\s]+(?:[&?][^\s]*)*/);
      if (t && t[0]) return console.log("提取到YouTube链接:", t[0]), t[0]
    }
    if (e.includes("instagram.com")) {
      var r = e.match(/https?:\/\/(?:www\.)?instagram\.com\/[^\/\s]+(?:\/[^\/\s]*)*(?:\?[^\s]*)?/);
      if (r && r[0]) return console.log("提取到Instagram链接:", r[0]), r[0]
    }
    if (e.includes("tiktok.com")) {
      var a = e.match(/https?:\/\/(?:www\.)?(?:tiktok\.com\/(?:@[^\/\s]+\/video\/|v\/)|vm\.tiktok\.com\/)[^\/\s]+(?:\/[^\/\s]*)*(?:\?[^\s]*)?/);
      if (a && a[0]) return console.log("提取到TikTok链接:", a[0]), a[0]
    }
    if (e.includes("video.weibo.com")) {
      var n = e.match(/https?:\/\/video\.weibo\.com\/show\?fid=[^&\s]+(?:&[^\s]*)?/);
      if (n && n[0]) return console.log("提取到微博视频链接:", n[0]), n[0]
    }
    if (e.includes("v.qq.com") || e.includes("m.v.qq.com")) {
      var s = e.match(/https?:\/\/[mv]\.qq\.com\/(?:play\/play\.html\?vid=|x\/page\/|)[^&\s]+(?:&[^\s]*)?/);
      if (s && s[0]) return console.log("提取到腾讯视频链接:", s[0]), s[0]
    }
    if (e.includes("xhslink.com")) {
      var o = e.match(/https?:\/\/(?:www\.)?xhslink\.com\/[a-zA-Z0-9\/\-_]+/);
      if (o && o[0]) return console.log("提取到小红书链接:", o[0]), o[0]
    }
    if (e.includes("douyin.com")) {
      var i = e.match(/https?:\/\/(?:www\.)?douyin\.com\/[^\/\s]+(?:\/[^\/\s]*)*(?:\?[^\s]*)?/);
      if (i && i[0]) return console.log("提取到抖音链接:", i[0]), i[0]
    }
    if (e.includes("kuaishou.com")) {
      var c = e.match(/https?:\/\/(?:www\.)?kuaishou\.com\/[^\/\s]+(?:\/[^\/\s]*)*(?:\?[^\s]*)?/);
      if (c && c[0]) return console.log("提取到快手链接:", c[0]), c[0]
    }
    if (e.includes("dw4.co")) {
      var l = e.match(/https?:\/\/(?:www\.)?dw4\.co\/[a-zA-Z0-9\/\-_]+/);
      if (l && l[0]) return console.log("提取到得物链接:", l[0]), l[0]
    }
    if (e.includes("twitter.com") || e.includes("x.com")) {
      var u = e.match(/https?:\/\/(?:www\.)?(?:twitter\.com|x\.com)\/[^\/\s]+(?:\/[^\/\s]*)*(?:\?[^\s]*)?/);
      if (u && u[0]) return console.log("提取到Twitter/X链接:", u[0]), u[0]
    }
    if (e.includes("threads.net")) {
      var d = e.match(/https?:\/\/(?:www\.)?threads\.net\/[^\/\s]+(?:\/[^\/\s]*)*(?:\?[^\s]*)?/);
      if (d && d[0]) return console.log("提取到Threads链接:", d[0]), d[0]
    }
    var h = e.match(/https?:\/\/[^\s,，。；：'"!?、]+/);
    if (h && h.length > 0) {
      var m = h[0];
      return m = m.replace(/[.,;:'"!?，。；：'""！？、]$/, ""), console.log("提取到的 URL:", m), m
    }
    return ""
  },
  isForeignPlatform: function (e) {
    try {
      return [/^(?:https?:\/\/)?(?:www\.)?facebook\.com/, /^(?:https?:\/\/)?(?:www\.)?fb\.com/, /^(?:https?:\/\/)?(?:www\.)?instagram\.com/, /^(?:https?:\/\/)?(?:www\.)?youtube\.com/, /^(?:https?:\/\/)?(?:www\.)?youtu\.be/, /^(?:https?:\/\/)?(?:www\.)?twitter\.com/, /^(?:https?:\/\/)?(?:www\.)?x\.com/, /^(?:https?:\/\/)?(?:www\.)?tiktok\.com/, /^(?:https?:\/\/)?(?:www\.)?threads\.net/, /^(?:https?:\/\/)?(?:www\.)?twitch\.tv/, /^(?:https?:\/\/)?(?:www\.)?snapchat\.com/, /^(?:https?:\/\/)?(?:www\.)?vk\.com/].some((function (t) {
        return t.test(e.toLowerCase())
      }))
    } catch (e) {
      return !1
    }
  },
  isSupportedForeignPlatform: function (e) {
    try {
      return [/^(?:https?:\/\/)?(?:www\.)?instagram\.com/, /^(?:https?:\/\/)?(?:www\.)?twitter\.com/, /^(?:https?:\/\/)?(?:www\.)?x\.com/].some((function (t) {
        return t.test(e.toLowerCase())
      }))
    } catch (e) {
      return !1
    }
  },
  isUnsupportedForeignPlatform: function (e) {
    return this.isForeignPlatform(e) && !this.isSupportedForeignPlatform(e)
  },
  checkIsInstagramContent: function (e) {
    return e.includes("instagram.com")
  },
  checkIsSensitivePlatform: function (e) {
    return e.includes("instagram.com") ? (this.setData({
      platformName: "Instagram"
    }), !0) : e.includes("twitter.com") || e.includes("x.com") ? (this.setData({
      platformName: "X/Twitter"
    }), !0) : e.includes("youtube.com") || e.includes("youtu.be") ? (this.setData({
      platformName: "YouTube"
    }), !1) : e.includes("tiktok.com") ? (this.setData({
      platformName: "TikTok"
    }), !1) : e.includes("threads.net") ? (this.setData({
      platformName: "Threads"
    }), !1) : e.includes("douyin.com") || e.includes("iesdouyin.com") ? (this.setData({
      platformName: "抖音"
    }), !1) : e.includes("kuaishou.com") || e.includes("gifshow.com") ? (this.setData({
      platformName: "快手"
    }), !1) : e.includes("xiaohongshu.com") || e.includes("xhslink.com") ? (this.setData({
      platformName: "小红书"
    }), !1) : !(!e.includes("weibo.com") && !e.includes("weibo.cn")) && (this.setData({
      platformName: "微博"
    }), !1)
  },
  parseVideo: function () {
    var e = this;
    return n(a().mark((function t() {
      var r, n, s, o;
      return a().wrap((function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (e.data.url) {
              t.next = 3;
              break
            }
            return wx.showToast({
              title: "请输入视频链接",
              icon: "none"
            }), t.abrupt("return");
          case 3:
            if ((r = e.extractUrl(e.data.url)) && e.setData({
                url: r
              }), n = r || e.data.url) {
              t.next = 9;
              break
            }
            return wx.showToast({
              title: "未找到有效链接",
              icon: "none"
            }), t.abrupt("return");
          case 9:
            if (!e.isUnsupportedForeignPlatform(n)) {
              t.next = 13;
              break
            }
            return s = e.getPlatformName(n) || "国外平台", wx.showModal({
              title: "暂不支持",
              content: "由于微信小程序政策限制，".concat(s, "平台暂不支持解析，推荐使用快捷指令下载，支持YouTube、TikTok等各种平台。"),
              confirmText: "去查看",
              success: function (t) {
                t.confirm && wx.navigateTo({
                  url: "/pages/webview/webview",
                  success: function () {
                    e.setData({
                      url: ""
                    })
                  }
                })
              }
            }), t.abrupt("return");
          case 13:
            if (!(n.includes("instagram.com") || n.includes("twitter.com") || n.includes("x.com"))) {
              t.next = 18;
              break
            }
            return o = e.getPlatformName(n) || "国外平台", wx.showModal({
              title: "温馨提示",
              content: "由于微信小程序政策限制，".concat(o, "平台暂不支持解析，请查看常见问题了解更多信息。"),
              confirmText: "查看帮助",
              cancelText: "取消",
              success: function (t) {
                t.confirm ? wx.navigateTo({
                  url: "/pages/faq/faq",
                  success: function () {
                    e.setData({
                      url: ""
                    })
                  }
                }) : t.cancel && e.data.foreignPlatformsUnlocked && e.performParsing(n)
              }
            }), t.abrupt("return");
          case 18:
            e.performParsing(n);
          case 19:
          case "end":
            return t.stop()
        }
      }), t)
    })))()
  },
  performParsing: function (e) {
    var t = this;
    return n(a().mark((function n() {
      var o, i, c, l, u, d, h, m;
      return a().wrap((function (a) {
        for (;;) switch (a.prev = a.next) {
          case 0:
            if (!(e.includes("instagram.com") || e.includes("twitter.com") || e.includes("x.com"))) {
              a.next = 25;
              break
            }
            return a.prev = 1, a.next = 4, new Promise((function (e, t) {
              wx.request({
                url: "https://jiejing.fun/xcx/unlock.json",
                method: "GET",
                success: function (t) {
                  return e(t)
                },
                fail: function (e) {
                  return t(e)
                }
              })
            }));
          case 4:
            return o = a.sent, a.next = 7, new Promise((function (e) {
              wx.getStorage({
                key: "unlock_code",
                success: function (t) {
                  return e(t.data || "")
                },
                fail: function () {
                  return e("")
                }
              })
            }));
          case 7:
            if (i = a.sent, !(200 === o.statusCode && o.data && o.data.data && Array.isArray(o.data.data))) {
              a.next = 16;
              break
            }
            if (c = o.data.data, i && c.includes(i)) {
              a.next = 14;
              break
            }
            return l = o.data.error || "您的解锁权限已失效，请获取新的解锁码", wx.showModal({
              title: "解锁码失效",
              content: l,
              confirmText: "复制链接",
              cancelText: "取消",
              success: function (e) {
                e.confirm && wx.setClipboardData({
                  data: "https://u.jiejing.fun/s4u",
                  success: function () {
                    wx.showToast({
                      title: "链接已复制，请到浏览器中打开",
                      icon: "none",
                      duration: 2500
                    })
                  }
                })
              }
            }), a.abrupt("return");
          case 14:
            a.next = 18;
            break;
          case 16:
            return wx.showToast({
              title: "解锁验证失败，请重试",
              icon: "none"
            }), a.abrupt("return");
          case 18:
            a.next = 25;
            break;
          case 20:
            return a.prev = 20, a.t0 = a.catch(1), console.error("验证解锁字符串出错:", a.t0), wx.showToast({
              title: "网络错误，请重试",
              icon: "none"
            }), a.abrupt("return");
          case 25:
            return t.setData({
              loading: !0
            }), a.prev = 26, a.next = 29, s.parseVideo(e);
          case 29:
            (u = a.sent).url = e, (d = t.isSupportedForeignPlatform(e)) ? ((h = {
              videos: Array.isArray(u.videos) ? r(u.videos) : [],
              images: Array.isArray(u.images) ? r(u.images) : [],
              cover_url: u.cover_url || u.cover || ""
            }).videos && 0 !== h.videos.length || !u.video_url || (h.videos = [u.video_url]), h.video_url = u.video_url || "", console.log("敏感平台原始媒体URLs:", h), u.cover_url = t.data.safePreviewImage, u.images = [t.data.safePreviewImage], u.video_url = "", u.videos = [], u.isVideo = !1, u.isImages = !0, u.originalMediaUrls = h, t.setData({
              isSensitivePlatform: !0,
              platformName: t.getPlatformName(e)
            })) : t.setData({
              isSensitivePlatform: !1,
              platformName: t.getPlatformName(e)
            }), t.setData({
              result: u,
              showImageCountTip: u.isImages && !d
            }), u.isImages && (d || setTimeout((function () {
              t.setData({
                showImageCountTip: !1
              })
            }), 3e3), t.initImageSelection()), d || t.saveToHistory(u), a.next = 43;
            break;
          case 38:
            a.prev = 38, a.t1 = a.catch(26), console.error("Parse error:", a.t1), m = a.t1.originalUrl || t.data.url, t.isSupportedForeignPlatform(m) ? wx.showModal({
              title: "解析失败",
              content: "可能含政治、色情等敏感内容，不支持直接下载保存，推荐使用快捷指令下载，下载无限制，支持Instagram、X平台。",
              confirmText: "去查看",
              success: function (e) {
                e.confirm && wx.navigateTo({
                  url: "/pages/webview/webview",
                  success: function () {
                    t.setData({
                      url: ""
                    })
                  }
                })
              }
            }) : t.isUnsupportedForeignPlatform(m) ? wx.showModal({
              title: "暂不支持",
              content: "由于微信小程序政策限制，".concat(t.getPlatformName(m) || "该国外平台", "暂不支持解析，推荐使用快捷指令下载，支持X、YouTube、TikTok等各种平台。"),
              confirmText: "去查看",
              success: function (e) {
                e.confirm && wx.navigateTo({
                  url: "/pages/webview/webview",
                  success: function () {
                    t.setData({
                      url: ""
                    })
                  }
                })
              }
            }) : t.setData({
              showErrorModal: !0,
              errorUrl: a.t1.originalUrl || t.data.url
            });
          case 43:
            return a.prev = 43, t.setData({
              loading: !1
            }), a.finish(43);
          case 46:
          case "end":
            return a.stop()
        }
      }), n, null, [
        [1, 20],
        [26, 38, 43, 46]
      ])
    })))()
  },
  copyText: function (e) {
    var t = e.currentTarget.dataset.text;
    wx.setClipboardData({
      data: t,
      success: function () {
        wx.showToast({
          title: "复制成功",
          icon: "success"
        })
      }
    })
  },
  saveVideo: function () {
    var e = this;
    return n(a().mark((function n() {
      var s, o, i, c, l, u, d, h, m, f, w, g, p, x, v, b, k, T, P, S, M, y, I, A, D, C, U;
      return a().wrap((function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            if (!e.data.isSensitivePlatform || null === (s = e.data.result) || void 0 === s || !s.originalMediaUrls) {
              n.next = 73;
              break
            }
            if (l = e.data.result.originalMediaUrls, u = [], d = [], l.videos && Array.isArray(l.videos) ? (u = r(l.videos), console.log("敏感平台视频URLs (videos数组):", u)) : !l.video_url || l.videos && Array.isArray(l.videos) && 0 !== l.videos.length || (u.push(l.video_url), console.log("敏感平台视频URL (video_url):", l.video_url)), l.images && Array.isArray(l.images) && (d = r(l.images), console.log("敏感平台图片URLs:", d)), 0 === d.length && l.cover_url && d.push(l.cover_url), console.log("最终处理的视频URLs:", u), console.log("最终处理的图片URLs:", d), 0 !== u.length || 0 !== d.length) {
              n.next = 12;
              break
            }
            return wx.showToast({
              title: "没有可保存的内容",
              icon: "none"
            }), n.abrupt("return");
          case 12:
            return n.prev = 12, n.next = 15, wx.getSetting();
          case 15:
            if (n.sent.authSetting["scope.writePhotosAlbum"]) {
              n.next = 27;
              break
            }
            return n.prev = 17, n.next = 20, wx.authorize({
              scope: "scope.writePhotosAlbum"
            });
          case 20:
            n.next = 27;
            break;
          case 22:
            return n.prev = 22, n.t0 = n.catch(17), n.next = 26, wx.openSetting();
          case 26:
            return n.abrupt("return");
          case 27:
            if (wx.showLoading({
                title: "正在保存...",
                mask: !0
              }), h = !1, "", m = 0, f = 0, !(u.length > 0)) {
              n.next = 51;
              break
            }
            w = t(u), n.prev = 34, p = a().mark((function e() {
              var t, r;
              return a().wrap((function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (t = g.value) {
                      e.next = 3;
                      break
                    }
                    return e.abrupt("return", 1);
                  case 3:
                    return e.prev = 3, e.next = 6, new Promise((function (e, r) {
                      wx.downloadFile({
                        url: t,
                        success: e,
                        fail: function (e) {
                          e.errMsg && (e.errMsg.includes("domain is not in domain list") || e.errMsg.includes("downloadFile:fail url not in domain list")) && (h = !0, t), r(e)
                        }
                      })
                    }));
                  case 6:
                    if (200 !== (r = e.sent).statusCode) {
                      e.next = 11;
                      break
                    }
                    return e.next = 10, wx.saveVideoToPhotosAlbum({
                      filePath: r.tempFilePath
                    });
                  case 10:
                    m++;
                  case 11:
                    e.next = 16;
                    break;
                  case 13:
                    e.prev = 13, e.t0 = e.catch(3), console.error("Save video error:", e.t0);
                  case 16:
                  case "end":
                    return e.stop()
                }
              }), e, null, [
                [3, 13]
              ])
            })), w.s();
          case 37:
            if ((g = w.n()).done) {
              n.next = 43;
              break
            }
            return n.delegateYield(p(), "t1", 39);
          case 39:
            if (!n.t1) {
              n.next = 41;
              break
            }
            return n.abrupt("continue", 41);
          case 41:
            n.next = 37;
            break;
          case 43:
            n.next = 48;
            break;
          case 45:
            n.prev = 45, n.t2 = n.catch(34), w.e(n.t2);
          case 48:
            return n.prev = 48, w.f(), n.finish(48);
          case 51:
            if (!(d.length > 0)) {
              n.next = 62;
              break
            }
            return x = d.map((function (e) {
              return e ? new Promise((function (t, r) {
                wx.downloadFile({
                  url: e,
                  success: function (e) {
                    return t(e)
                  },
                  fail: function (r) {
                    console.error("Download failed for:", e, r), r.errMsg && (r.errMsg.includes("domain is not in domain list") || r.errMsg.includes("downloadFile:fail url not in domain list")) && (h = !0, e), t(null)
                  }
                })
              })) : Promise.resolve(null)
            })), n.next = 55, Promise.all(x);
          case 55:
            return v = n.sent, b = v.filter((function (e) {
              return e && 200 === e.statusCode
            })), k = b.map((function (e) {
              return new Promise((function (t, r) {
                wx.saveImageToPhotosAlbum({
                  filePath: e.tempFilePath,
                  success: function () {
                    return t(!0)
                  },
                  fail: function (e) {
                    console.error("Save failed:", e), t(!1)
                  }
                })
              }))
            })), n.next = 60, Promise.all(k);
          case 60:
            T = n.sent, f = T.filter((function (e) {
              return e
            })).length;
          case 62:
            wx.hideLoading(), P = m + f, h ? wx.showModal({
              title: "下载失败",
              content: "部分内容所在域名不在小程序合法域名列表内，请联系开发者添加域名到白名单。",
              showCancel: !1
            }) : P > 0 ? (S = "", f > 0 && m > 0 ? S = "已保存".concat(m, "个视频和").concat(f, "张图片") : m > 0 ? S = "已保存".concat(m, "个视频") : f > 0 && (S = "已保存".concat(f, "张图片")), wx.showToast({
              title: S,
              icon: "success",
              success: function () {
                setTimeout((function () {
                  e.setData({
                    showShareModal: !0
                  })
                }), 1500)
              }
            })) : wx.showToast({
              title: "保存失败",
              icon: "none"
            }), n.next = 72;
            break;
          case 67:
            n.prev = 67, n.t3 = n.catch(12), wx.hideLoading(), console.error("Save videos and images error:", n.t3), wx.showToast({
              title: "保存失败，请重试",
              icon: "none"
            });
          case 72:
            return n.abrupt("return");
          case 73:
            if (M = Array.isArray(null === (o = e.data.result) || void 0 === o ? void 0 : o.video_url) ? r(e.data.result.video_url) : null !== (i = e.data.result) && void 0 !== i && i.video_url ? [e.data.result.video_url] : [], null !== (c = e.data.result) && void 0 !== c && c.videos && Array.isArray(e.data.result.videos) && M.push.apply(M, r(e.data.result.videos)), 0 !== M.length) {
              n.next = 78;
              break
            }
            return wx.showToast({
              title: "没有可保存的视频",
              icon: "none"
            }), n.abrupt("return");
          case 78:
            return n.prev = 78, n.next = 81, wx.getSetting();
          case 81:
            if (n.sent.authSetting["scope.writePhotosAlbum"]) {
              n.next = 93;
              break
            }
            return n.prev = 83, n.next = 86, wx.authorize({
              scope: "scope.writePhotosAlbum"
            });
          case 86:
            n.next = 93;
            break;
          case 88:
            return n.prev = 88, n.t4 = n.catch(83), n.next = 92, wx.openSetting();
          case 92:
            return n.abrupt("return");
          case 93:
            wx.showLoading({
              title: "正在保存...",
              mask: !0
            }), y = !1, I = "", A = 0, D = t(M), n.prev = 98, U = a().mark((function e() {
              var t, r;
              return a().wrap((function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (t = C.value) {
                      e.next = 3;
                      break
                    }
                    return e.abrupt("return", 1);
                  case 3:
                    return e.prev = 3, e.next = 6, new Promise((function (e, r) {
                      wx.downloadFile({
                        url: t,
                        success: e,
                        fail: function (e) {
                          e.errMsg && (e.errMsg.includes("domain is not in domain list") || e.errMsg.includes("downloadFile:fail url not in domain list")) && (y = !0, I = t), r(e)
                        }
                      })
                    }));
                  case 6:
                    if (200 !== (r = e.sent).statusCode) {
                      e.next = 11;
                      break
                    }
                    return e.next = 10, wx.saveVideoToPhotosAlbum({
                      filePath: r.tempFilePath
                    });
                  case 10:
                    A++;
                  case 11:
                    e.next = 16;
                    break;
                  case 13:
                    e.prev = 13, e.t0 = e.catch(3), console.error("Save video error:", e.t0);
                  case 16:
                  case "end":
                    return e.stop()
                }
              }), e, null, [
                [3, 13]
              ])
            })), D.s();
          case 101:
            if ((C = D.n()).done) {
              n.next = 107;
              break
            }
            return n.delegateYield(U(), "t5", 103);
          case 103:
            if (!n.t5) {
              n.next = 105;
              break
            }
            return n.abrupt("continue", 105);
          case 105:
            n.next = 101;
            break;
          case 107:
            n.next = 112;
            break;
          case 109:
            n.prev = 109, n.t6 = n.catch(98), D.e(n.t6);
          case 112:
            return n.prev = 112, D.f(), n.finish(112);
          case 115:
            wx.hideLoading(), y ? e.showDomainErrorModal(I, "视频") : A > 0 ? (wx.showToast({
              title: A < M.length ? "成功保存".concat(A, "个视频") : "视频已保存到相册",
              icon: "success"
            }), setTimeout((function () {
              e.setData({
                showShareModal: !0
              })
            }), 1500)) : wx.showToast({
              title: "保存失败",
              icon: "none"
            }), n.next = 124;
            break;
          case 119:
            n.prev = 119, n.t7 = n.catch(78), wx.hideLoading(), console.error("Save video error:", n.t7), wx.showToast({
              title: "保存失败，请重试",
              icon: "none"
            });
          case 124:
          case "end":
            return n.stop()
        }
      }), n, null, [
        [12, 67],
        [17, 22],
        [34, 45, 48, 51],
        [78, 119],
        [83, 88],
        [98, 109, 112, 115]
      ])
    })))()
  },
  previewImage: function (e) {
    var t = this,
      r = e.currentTarget.dataset.index;
    if (e.currentTarget.dataset.url) {
      var a = e.currentTarget.dataset.url,
        n = this.data.result.pics || [a];
      wx.previewImage({
        current: a,
        urls: n,
        showmenu: !0
      })
    } else this.setData({
      showPreviewGuide: !0
    }), setTimeout((function () {
      t.setData({
        showPreviewGuide: !1
      })
    }), 3e3), wx.previewImage({
      current: this.data.result.images[r],
      urls: this.data.result.images,
      showmenu: !0
    })
  },
  saveImages: function () {
    var e = this;
    return n(a().mark((function r() {
      var n, s, o, i, c, l;
      return a().wrap((function (r) {
        for (;;) switch (r.prev = r.next) {
          case 0:
            if (null !== (n = e.data.result) && void 0 !== n && null !== (s = n.pics) && void 0 !== s && s.length) {
              r.next = 2;
              break
            }
            return r.abrupt("return");
          case 2:
            wx.showLoading({
              title: "保存中..."
            }), r.prev = 3, o = t(e.data.result.pics), r.prev = 5, o.s();
          case 7:
            if ((i = o.n()).done) {
              r.next = 16;
              break
            }
            return c = i.value, r.next = 11, wx.downloadFile({
              url: c
            });
          case 11:
            return l = r.sent, r.next = 14, wx.saveImageToPhotosAlbum({
              filePath: l.tempFilePath
            });
          case 14:
            r.next = 7;
            break;
          case 16:
            r.next = 21;
            break;
          case 18:
            r.prev = 18, r.t0 = r.catch(5), o.e(r.t0);
          case 21:
            return r.prev = 21, o.f(), r.finish(21);
          case 24:
            wx.showToast({
              title: "保存成功",
              icon: "success"
            }), r.next = 31;
            break;
          case 27:
            r.prev = 27, r.t1 = r.catch(3), console.error("Save images error:", r.t1), wx.showToast({
              title: "保存失败",
              icon: "none"
            });
          case 31:
            return r.prev = 31, wx.hideLoading(), r.finish(31);
          case 34:
          case "end":
            return r.stop()
        }
      }), r, null, [
        [3, 27, 31, 34],
        [5, 18, 21, 24]
      ])
    })))()
  },
  saveCover: function (e) {
    var t = this;
    return n(a().mark((function r() {
      var n, s;
      return a().wrap((function (r) {
        for (;;) switch (r.prev = r.next) {
          case 0:
            return r.prev = 0, r.next = 3, wx.getSetting();
          case 3:
            if (r.sent.authSetting["scope.writePhotosAlbum"]) {
              r.next = 7;
              break
            }
            return r.next = 7, wx.authorize({
              scope: "scope.writePhotosAlbum"
            });
          case 7:
            if (n = e.currentTarget.dataset.cover || t.data.result.cover_url || t.data.result.cover, console.log("Cover URL:", n), n) {
              r.next = 12;
              break
            }
            return wx.showToast({
              title: "未找到封面图",
              icon: "none"
            }), r.abrupt("return");
          case 12:
            return wx.showLoading({
              title: "正在保存..."
            }), r.next = 15, new Promise((function (e, r) {
              wx.downloadFile({
                url: n,
                success: function (t) {
                  console.log("Download response:", t), e(t)
                },
                fail: function (e) {
                  console.error("Download error:", e), e.errMsg && (e.errMsg.includes("domain is not in domain list") || e.errMsg.includes("downloadFile:fail url not in domain list")) && t.showDomainErrorModal(n, "封面图"), r(e)
                }
              })
            }));
          case 15:
            if (200 !== (s = r.sent).statusCode) {
              r.next = 22;
              break
            }
            return r.next = 19, wx.saveImageToPhotosAlbum({
              filePath: s.tempFilePath
            });
          case 19:
            wx.showToast({
              title: "已保存到相册",
              icon: "success",
              success: function () {
                setTimeout((function () {
                  t.setData({
                    showShareModal: !0
                  })
                }), 1500)
              }
            }), r.next = 24;
            break;
          case 22:
            throw console.error("Download failed with status:", s.statusCode), new Error("下载失败: ".concat(s.statusCode));
          case 24:
            r.next = 30;
            break;
          case 26:
            r.prev = 26, r.t0 = r.catch(0), console.error("Save cover error:", r.t0), r.t0.errMsg && (r.t0.errMsg.includes("domain is not in domain list") || r.t0.errMsg.includes("downloadFile:fail url not in domain list")) || wx.showToast({
              title: "保存失败，请检查网络",
              icon: "none"
            });
          case 30:
            return r.prev = 30, wx.hideLoading(), r.finish(30);
          case 33:
          case "end":
            return r.stop()
        }
      }), r, null, [
        [0, 26, 30, 33]
      ])
    })))()
  },
  saveSelectedImages: function () {
    var e = this;
    return n(a().mark((function r() {
      var n, s, o, i, c, l, u, d;
      return a().wrap((function (r) {
        for (;;) switch (r.prev = r.next) {
          case 0:
            if (0 !== (n = e.data.selectedImages.map((function (e, t) {
                return e ? t : -1
              })).filter((function (e) {
                return -1 !== e
              }))).length) {
              r.next = 3;
              break
            }
            return r.abrupt("return");
          case 3:
            return r.prev = 3, r.next = 6, wx.getSetting();
          case 6:
            if (r.sent.authSetting["scope.writePhotosAlbum"]) {
              r.next = 18;
              break
            }
            return r.prev = 8, r.next = 11, wx.authorize({
              scope: "scope.writePhotosAlbum"
            });
          case 11:
            r.next = 18;
            break;
          case 13:
            return r.prev = 13, r.t0 = r.catch(8), r.next = 17, wx.openSetting();
          case 17:
            return r.abrupt("return");
          case 18:
            wx.showLoading({
              title: "正在保存...",
              mask: !0
            }), s = n.map((function (t) {
              return e.data.result.images[t]
            })), o = !1, i = "", c = 0, l = t(s), r.prev = 24, d = a().mark((function e() {
              var t, r;
              return a().wrap((function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return t = u.value, e.prev = 1, e.next = 4, new Promise((function (e, r) {
                      wx.downloadFile({
                        url: t,
                        success: e,
                        fail: function (e) {
                          e.errMsg && (e.errMsg.includes("domain is not in domain list") || e.errMsg.includes("downloadFile:fail url not in domain list")) && (o = !0, i = t), r(e)
                        }
                      })
                    }));
                  case 4:
                    if (200 !== (r = e.sent).statusCode) {
                      e.next = 9;
                      break
                    }
                    return e.next = 8, wx.saveImageToPhotosAlbum({
                      filePath: r.tempFilePath
                    });
                  case 8:
                    c++;
                  case 9:
                    e.next = 14;
                    break;
                  case 11:
                    e.prev = 11, e.t0 = e.catch(1), console.error("Save image error:", e.t0);
                  case 14:
                  case "end":
                    return e.stop()
                }
              }), e, null, [
                [1, 11]
              ])
            })), l.s();
          case 27:
            if ((u = l.n()).done) {
              r.next = 31;
              break
            }
            return r.delegateYield(d(), "t1", 29);
          case 29:
            r.next = 27;
            break;
          case 31:
            r.next = 36;
            break;
          case 33:
            r.prev = 33, r.t2 = r.catch(24), l.e(r.t2);
          case 36:
            return r.prev = 36, l.f(), r.finish(36);
          case 39:
            if (wx.hideLoading(), !o) {
              r.next = 43;
              break
            }
            return e.showDomainErrorModal(i, "图片"), r.abrupt("return");
          case 43:
            c > 0 ? (wx.showToast({
              title: c < s.length ? "成功保存".concat(c, "张图片") : "已保存全部图片",
              icon: "success"
            }), setTimeout((function () {
              e.setData({
                showShareModal: !0
              })
            }), 1500)) : wx.showToast({
              title: "保存失败",
              icon: "none"
            }), r.next = 51;
            break;
          case 46:
            r.prev = 46, r.t3 = r.catch(3), console.error("Save selected images error:", r.t3), wx.hideLoading(), wx.showToast({
              title: "保存失败，请检查存储权限",
              icon: "none"
            });
          case 51:
          case "end":
            return r.stop()
        }
      }), r, null, [
        [3, 46],
        [8, 13],
        [24, 33, 36, 39]
      ])
    })))()
  },
  saveAllImages: function () {
    var e = this;
    return n(a().mark((function t() {
      var n, s, o, i, c, l, u, d, h, m, f, w, g, p, x, v, b, k;
      return a().wrap((function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (!e.data.isSensitivePlatform || null === (n = e.data.result) || void 0 === n || !n.originalMediaUrls) {
              t.next = 48;
              break
            }
            if (s = e.data.result.originalMediaUrls, o = [], s.images && Array.isArray(s.images) && (o = r(s.images), console.log("敏感平台图片URLs:", o)), 0 === o.length && s.cover_url && o.push(s.cover_url), console.log("最终处理的图片URLs:", o), 0 !== o.length) {
              t.next = 9;
              break
            }
            return wx.showToast({
              title: "没有可保存的图片",
              icon: "none"
            }), t.abrupt("return");
          case 9:
            return t.prev = 9, t.next = 12, wx.getSetting();
          case 12:
            if (t.sent.authSetting["scope.writePhotosAlbum"]) {
              t.next = 24;
              break
            }
            return t.prev = 14, t.next = 17, wx.authorize({
              scope: "scope.writePhotosAlbum"
            });
          case 17:
            t.next = 24;
            break;
          case 19:
            return t.prev = 19, t.t0 = t.catch(14), t.next = 23, wx.openSetting();
          case 23:
            return t.abrupt("return");
          case 24:
            return wx.showLoading({
              title: "正在保存...",
              mask: !0
            }), i = !1, "", c = 0, l = o.map((function (e) {
              return e ? new Promise((function (t, r) {
                wx.downloadFile({
                  url: e,
                  success: function (e) {
                    return t(e)
                  },
                  fail: function (r) {
                    console.error("Download failed for:", e, r), r.errMsg && (r.errMsg.includes("domain is not in domain list") || r.errMsg.includes("downloadFile:fail url not in domain list")) && (i = !0, e), t(null)
                  }
                })
              })) : Promise.resolve(null)
            })), t.next = 31, Promise.all(l);
          case 31:
            return u = t.sent, d = u.filter((function (e) {
              return e && 200 === e.statusCode
            })), h = d.map((function (e) {
              return new Promise((function (t, r) {
                wx.saveImageToPhotosAlbum({
                  filePath: e.tempFilePath,
                  success: function () {
                    return t(!0)
                  },
                  fail: function (e) {
                    console.error("Save failed:", e), t(!1)
                  }
                })
              }))
            })), t.next = 36, Promise.all(h);
          case 36:
            m = t.sent, c = m.filter((function (e) {
              return e
            })).length, wx.hideLoading(), i ? wx.showModal({
              title: "下载失败",
              content: "部分内容所在域名不在小程序合法域名列表内，请联系开发者添加域名到白名单。",
              showCancel: !1
            }) : c > 0 ? wx.showToast({
              title: "已保存".concat(c, "张图片"),
              icon: "success",
              success: function () {
                setTimeout((function () {
                  e.setData({
                    showShareModal: !0
                  })
                }), 1500)
              }
            }) : wx.showToast({
              title: "保存失败",
              icon: "none"
            }), t.next = 47;
            break;
          case 42:
            t.prev = 42, t.t1 = t.catch(9), wx.hideLoading(), console.error("Save images error:", t.t1), wx.showToast({
              title: "保存失败，请重试",
              icon: "none"
            });
          case 47:
            return t.abrupt("return");
          case 48:
            if (0 !== (f = e.data.selectedImages.map((function (e, t) {
                return e ? t : -1
              })).filter((function (e) {
                return -1 !== e
              }))).length) {
              t.next = 52;
              break
            }
            return wx.showToast({
              title: "请至少选择一张图片",
              icon: "none"
            }), t.abrupt("return");
          case 52:
            return t.prev = 52, wx.showLoading({
              title: "正在保存...",
              mask: !0
            }), w = f.map((function (t) {
              return e.data.result.images[t]
            })), console.log("保存的图片URLs:", w), t.next = 58, wx.getSetting();
          case 58:
            if (t.sent.authSetting["scope.writePhotosAlbum"]) {
              t.next = 71;
              break
            }
            return t.prev = 60, t.next = 63, wx.authorize({
              scope: "scope.writePhotosAlbum"
            });
          case 63:
            t.next = 71;
            break;
          case 65:
            return t.prev = 65, t.t2 = t.catch(60), wx.hideLoading(), t.next = 70, wx.openSetting();
          case 70:
            return t.abrupt("return");
          case 71:
            return g = w.map((function (e) {
              return new Promise((function (t, r) {
                wx.downloadFile({
                  url: e,
                  success: function (e) {
                    return t(e)
                  },
                  fail: function (r) {
                    console.error("Download failed for:", e, r), t(null)
                  }
                })
              }))
            })), t.next = 74, Promise.all(g);
          case 74:
            return p = t.sent, x = p.filter((function (e) {
              return e && 200 === e.statusCode
            })), v = x.map((function (e) {
              return new Promise((function (t, r) {
                wx.saveImageToPhotosAlbum({
                  filePath: e.tempFilePath,
                  success: function () {
                    return t(!0)
                  },
                  fail: function (e) {
                    console.error("Save failed:", e), t(!1)
                  }
                })
              }))
            })), t.next = 79, Promise.all(v);
          case 79:
            b = t.sent, k = b.filter((function (e) {
              return e
            })).length, wx.hideLoading(), k > 0 ? (wx.showToast({
              title: "已保存".concat(k, "张图片"),
              icon: "success"
            }), setTimeout((function () {
              e.setData({
                showShareModal: !0
              })
            }), 1500)) : wx.showToast({
              title: "保存失败",
              icon: "none"
            }), t.next = 90;
            break;
          case 85:
            t.prev = 85, t.t3 = t.catch(52), console.error("Save images error:", t.t3), wx.hideLoading(), wx.showToast({
              title: "保存失败，请重试",
              icon: "none"
            });
          case 90:
          case "end":
            return t.stop()
        }
      }), t, null, [
        [9, 42],
        [14, 19],
        [52, 85],
        [60, 65]
      ])
    })))()
  },
  onVideoFullscreenChange: function (e) {
    var t = e.detail.fullScreen;
    this.setData({
      isVideoFullscreen: t
    })
  },
  closeShareModal: function () {
    this.setData({
      showShareModal: !1
    })
  },
  closeErrorModal: function () {
    this.setData({
      showErrorModal: !1,
      errorUrl: ""
    })
  },
  sendFeedback: function () {
    var e = this,
      t = "".concat(s.API_CONFIG.FAIL_URL, "?url=").concat(encodeURIComponent(this.data.errorUrl));
    wx.request({
      url: t,
      success: function () {
        wx.showToast({
          title: "反馈成功",
          icon: "success"
        })
      },
      complete: function () {
        e.closeErrorModal()
      }
    })
  },
  shareContent: function () {
    if (this.data.result) {
      var e = this.data.result.text || this.data.result.title || "分享一个有趣的内容";
      e.length > 30 && (e = e.substring(0, 27) + "..."), console.log("设置分享标题:", e);
      var t = "";
      this.data.result.cover_url ? t = this.data.result.cover_url : this.data.result.images && this.data.result.images.length > 0 && (t = this.data.result.images[0]);
      var r = this.data.result.url || this.data.url || this.data.parsedUrl;
      getApp().globalData.shareContent = {
        title: e,
        imageUrl: t,
        url: r
      }, this.setData({
        shareContent: {
          title: e,
          imageUrl: t
        },
        parsedUrl: r
      }), console.log("分享内容已设置:", this.data.shareContent), console.log("分享URL:", r), wx.showShareMenu({
        withShareTicket: !0,
        menus: ["shareAppMessage", "shareTimeline"],
        success: function () {},
        fail: function () {
          wx.showToast({
            title: "点击右上角进行分享",
            icon: "none",
            duration: 2e3
          })
        }
      })
    } else wx.showToast({
      title: "没有可分享的内容",
      icon: "none"
    })
  },
  shareMiniProgram: function () {
    getApp().globalData.isShareMiniProgram = !0, wx.showShareMenu({
      withShareTicket: !0,
      menus: ["shareAppMessage", "shareTimeline"],
      success: function () {
        console.log("显示分享菜单成功")
      },
      fail: function (e) {
        console.error("显示分享菜单失败", e), wx.showToast({
          title: "点击右上角进行分享",
          icon: "none",
          duration: 2e3
        })
      }
    })
  },
  onShareAppMessage: function () {
    if (console.log("执行onShareAppMessage"), this.data.showShareModal) return {
      title: "超好用的视频去水印工具",
      path: "/pages/parse/parse",
      imageUrl: "/images/share.png"
    };
    var e = getApp().globalData.shareContent || {},
      t = this.data.shareContent && this.data.shareContent.title || e.title || this.data.result && (this.data.result.text || this.data.result.title) || "超好用的视频去水印工具",
      r = e.url || this.data.parsedUrl || this.data.result && this.data.result.url || "";
    if (!r) return console.error("没有有效的URL可以分享"), {
      title: "超好用的视频去水印工具",
      path: "/pages/parse/parse",
      imageUrl: "/images/share.png"
    };
    var a = r;
    if (r.includes("%")) try {
      a = decodeURIComponent(r)
    } catch (e) {
      console.error("解码URL失败，使用原始URL", e), a = r
    }
    var n = encodeURIComponent(a),
      s = "/pages/content/content?url=".concat(n);
    console.log("分享路径:", s);
    var o = this.data.shareContent && this.data.shareContent.imageUrl || e.imageUrl || this.data.result && (this.data.result.cover_url || (this.data.result.images && this.data.result.images.length > 0 ? this.data.result.images[0] : ""));
    return console.log("分享内容:", {
      title: t,
      path: s,
      imageUrl: o
    }), getApp().globalData.shareContent = null, !this.data.shareContent && this.data.result && this.shareContent(), {
      title: t,
      path: s,
      imageUrl: o
    }
  },
  onShareTimeline: function () {
    if (console.log("执行onShareTimeline"), this.data.showShareModal) return {
      title: "超好用的视频去水印工具",
      imageUrl: "/images/share.png"
    };
    var e = getApp().globalData.shareContent || {},
      t = this.data.shareContent && this.data.shareContent.title || e.title || this.data.result && (this.data.result.text || this.data.result.title) || "超好用的视频去水印工具",
      r = e.url || this.data.parsedUrl || this.data.result && this.data.result.url || "";
    if (!r) return console.error("没有有效的URL可以分享到朋友圈"), {
      title: "超好用的视频去水印工具",
      imageUrl: "/images/share.png"
    };
    var a = r;
    if (r.includes("%")) try {
      a = decodeURIComponent(r)
    } catch (e) {
      console.error("解码URL失败，使用原始URL", e), a = r
    }
    var n = "url=".concat(encodeURIComponent(a));
    console.log("分享朋友圈参数:", n);
    var s = this.data.shareContent && this.data.shareContent.imageUrl || e.imageUrl || this.data.result && (this.data.result.cover_url || (this.data.result.images && this.data.result.images.length > 0 ? this.data.result.images[0] : ""));
    return getApp().globalData.shareContent = null, !this.data.shareContent && this.data.result && this.shareContent(), {
      title: t,
      query: n,
      imageUrl: s
    }
  },
  handleImageError: function (t) {
    var r = t.currentTarget.dataset.index,
      a = e({}, this.data.errorImages);
    a[r] = !0, this.setData({
      errorImages: a,
      currentErrorInfo: "图片加载失败：".concat(this.data.imageList[r])
    }), wx.showToast({
      title: "图片加载失败",
      icon: "none",
      duration: 2e3
    }), console.error("Image load error:", {
      url: this.data.imageList[r],
      index: r,
      error: t
    })
  },
  initImageSelection: function () {
    if (this.data.result && this.data.result.isImages && this.data.result.images) {
      var e = this.data.result.images.map((function () {
        return !1
      }));
      this.setData({
        selectedImages: e,
        isAllSelected: !1,
        selectedCount: 0
      })
    }
  },
  toggleSelectImage: function (e) {
    var t = e.currentTarget.dataset.index,
      a = r(this.data.selectedImages);
    a[t] = !a[t];
    var n = a.filter(Boolean).length,
      s = n === this.data.result.images.length;
    return this.setData({
      selectedImages: a,
      isAllSelected: s,
      selectedCount: n
    }), !1
  },
  toggleSelectAll: function () {
    var e = !this.data.isAllSelected,
      t = this.data.result.images.map((function () {
        return e
      })),
      r = e ? this.data.result.images.length : 0;
    this.setData({
      selectedImages: t,
      isAllSelected: e,
      selectedCount: r
    })
  },
  handleParseSuccess: function (e) {
    if (3 === e.type) {
      var t = {
        videos: Array.isArray(e.videos) ? r(e.videos) : [],
        images: Array.isArray(e.images) ? r(e.images) : [],
        cover_url: e.cover_url || e.cover || ""
      };
      t.videos && 0 !== t.videos.length || !e.video_url || (t.videos = [e.video_url]), t.video_url = e.video_url || "", console.log("敏感平台原始媒体URLs:", t), e.cover_url = this.data.safePreviewImage, e.images = [this.data.safePreviewImage], e.video_url = "", e.videos = [], e.isVideo = !1, e.isImages = !0, e.originalMediaUrls = t, this.setData({
        isSensitivePlatform: !0
      })
    }
    this.initImageSelection(), this.setData({
      result: e,
      loading: !1,
      showImageCountTip: e.isImages
    });
    var a = this.checkIsInstagramContent(e.url || this.data.url),
      n = this.checkIsSensitivePlatform(e.url || this.data.url),
      s = this.getPlatformName(e.url || this.data.url);
    this.setData({
      isInstagramContent: a,
      isSensitivePlatform: n,
      platformName: s
    }), this.saveToHistory(e), this.showPinPromptIfNeeded()
  },
  showPinPromptIfNeeded: function () {
    if (!getApp().globalData.isAddedToMyMiniProgram) {
      var e = this.selectComponent(".pin-prompt");
      e && e.show()
    }
  },
  saveToHistory: function (t) {
    try {
      if (t.platform && "unknown" !== t.platform || !t.url || (t.url.includes("instagram.com") ? t.platform = "instagram" : t.url.includes("youtube.com") || t.url.includes("youtu.be") ? t.platform = "youtube" : t.url.includes("twitter.com") || t.url.includes("x.com") ? t.platform = "twitter" : t.url.includes("tiktok.com") ? t.platform = "tiktok" : t.url.includes("threads.net") ? t.platform = "threads" : t.url.includes("douyin.com") || t.url.includes("iesdouyin.com") ? t.platform = "douyin" : t.url.includes("kuaishou.com") || t.url.includes("gifshow.com") ? t.platform = "kuaishou" : t.url.includes("xiaohongshu.com") || t.url.includes("xhslink.com") ? t.platform = "xiaohongshu" : t.url.includes("weibo.com") || t.url.includes("weibo.cn") ? t.platform = "weibo" : (t.url.includes("bilibili.com") || t.url.includes("b23.tv")) && (t.platform = "bilibili")), 3 === t.type || t.isVideo && t.isImages) {
        var r = new Date,
          a = r.getTime(),
          n = "".concat(r.getMonth() + 1, "月").concat(r.getDate(), "日 ").concat(r.getHours().toString().padStart(2, "0"), ":").concat(r.getMinutes().toString().padStart(2, "0")),
          s = wx.getStorageSync("videoHistory") || [],
          o = e(e({}, t), {}, {
            timestamp: a,
            formattedTime: n,
            isVideo: !0,
            isImages: !1
          });
        s.unshift(o), s.length > 50 && (s.length = 50), wx.setStorageSync("videoHistory", s);
        var i = wx.getStorageSync("imagesHistory") || [],
          c = e(e({}, t), {}, {
            timestamp: a,
            formattedTime: n,
            isVideo: !1,
            isImages: !0
          });
        return i.unshift(c), i.length > 50 && (i.length = 50), void wx.setStorageSync("imagesHistory", i)
      }
      var l = t.isVideo ? "videoHistory" : "imagesHistory",
        u = wx.getStorageSync(l) || [],
        d = new Date,
        h = d.getTime(),
        m = "".concat(d.getMonth() + 1, "月").concat(d.getDate(), "日 ").concat(d.getHours().toString().padStart(2, "0"), ":").concat(d.getMinutes().toString().padStart(2, "0")),
        f = e(e({}, t), {}, {
          timestamp: h,
          formattedTime: m
        });
      u.unshift(f), u.length > 50 && (u = u.slice(0, 50)), wx.setStorageSync(l, u)
    } catch (e) {
      console.error("保存历史记录失败", e)
    }
  },
  loadHistoryItem: function (t) {
    if (t) {
      var r = t.platform || "";
      r && "unknown" !== r || (t.url && t.url.includes("instagram.com") ? r = "instagram" : t.url && (t.url.includes("youtube.com") || t.url.includes("youtu.be")) ? r = "youtube" : t.url && (t.url.includes("twitter.com") || t.url.includes("x.com")) ? r = "twitter" : t.url && t.url.includes("tiktok.com") ? r = "tiktok" : t.url && t.url.includes("threads.net") ? r = "threads" : t.url && (t.url.includes("douyin.com") || t.url.includes("iesdouyin.com")) ? r = "douyin" : t.url && (t.url.includes("kuaishou.com") || t.url.includes("gifshow.com")) ? r = "kuaishou" : t.url && (t.url.includes("xiaohongshu.com") || t.url.includes("xhslink.com")) ? r = "xiaohongshu" : t.url && (t.url.includes("weibo.com") || t.url.includes("weibo.cn")) ? r = "weibo" : t.url && (t.url.includes("bilibili.com") || t.url.includes("b23.tv")) && (r = "bilibili"));
      var a = "instagram" === r || t.url && t.url.includes("instagram.com"),
        n = ["instagram", "youtube", "twitter", "tiktok"].includes(r) || this.checkIsSensitivePlatform(t.url || ""),
        s = "";
      if ("instagram" === r ? s = "Instagram" : "youtube" === r ? s = "YouTube" : "twitter" === r ? s = "X/Twitter" : "tiktok" === r ? s = "TikTok" : "threads" === r ? s = "Threads" : "douyin" === r ? s = "抖音" : "kuaishou" === r ? s = "快手" : "xiaohongshu" === r ? s = "小红书" : "weibo" === r ? s = "微博" : "bilibili" === r && (s = "B站"), 3 === t.type && (t.isVideo = !0, t.isImages = !0), this.setData({
          result: e(e({}, t), {}, {
            platform: r || t.platform
          }),
          url: t.url || "",
          isInstagramContent: a,
          isSensitivePlatform: n,
          platformName: s
        }), t.isImages && this.initImageSelection(), n) {
        var o = "";
        t.isVideo && t.isImages ? o = "为保障内容安全，".concat(s, '内容不直接预览，请直接点击下方"一键保存"按钮下载。') : t.isVideo ? o = "为保障内容安全，".concat(s, '内容不直接预览，请直接点击下方"保存视频"按钮下载。') : t.isImages && (o = "为保障内容安全，".concat(s, '内容不直接预览，请直接点击下方"一键保存"按钮下载。')), wx.showModal({
          title: "内容已加载",
          content: o,
          showCancel: !1,
          confirmText: "我知道了"
        })
      }
    }
  },
  handleActionBtn: function () {
    this.data.url ? this.clearInput() : this.pasteContent()
  },
  goToFaq: function () {
    wx.navigateTo({
      url: "/pages/faq/faq"
    })
  },
  goToHistory: function () {
    wx.navigateTo({
      url: "/pages/history/history"
    })
  },
  closeCouponsModal: function () {
    this.setData({
      showCouponsModal: !1
    })
  },
  openMiniProgram: function (e) {
    var t = e.currentTarget.dataset.index,
      r = this.data.coupons[t];
    wx.navigateToMiniProgram({
      appId: r.appId,
      path: r.path,
      success: function () {
        console.log("成功打开小程序:", r.name)
      },
      fail: function (e) {
        console.error("打开小程序失败:", e), wx.showToast({
          title: "打开失败，请重试",
          icon: "none"
        })
      }
    })
  },
  saveAllMixedContent: function () {
    var e = this;
    return n(a().mark((function n() {
      var s, o, i, c, l, u, d, h, m, f, w, g, p, x, v, b, k, T, P, S, M;
      return a().wrap((function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            if (e.data.result) {
              n.next = 3;
              break
            }
            return wx.showToast({
              title: "内容无效",
              icon: "none"
            }), n.abrupt("return");
          case 3:
            return n.prev = 3, n.next = 6, wx.getSetting();
          case 6:
            if (n.sent.authSetting["scope.writePhotosAlbum"]) {
              n.next = 18;
              break
            }
            return n.prev = 8, n.next = 11, wx.authorize({
              scope: "scope.writePhotosAlbum"
            });
          case 11:
            n.next = 18;
            break;
          case 13:
            return n.prev = 13, n.t0 = n.catch(8), n.next = 17, wx.openSetting();
          case 17:
            return n.abrupt("return");
          case 18:
            if (wx.showLoading({
                title: "正在保存...",
                mask: !0
              }), i = !1, c = !1, l = "", u = 0, d = 0, h = Array.isArray(e.data.result.video_url) ? r(e.data.result.video_url) : null !== (s = e.data.result) && void 0 !== s && s.video_url ? [e.data.result.video_url] : [], e.data.result.videos && Array.isArray(e.data.result.videos) && (m = h).push.apply(m, r(e.data.result.videos)), e.data.isSensitivePlatform && null !== (o = e.data.result) && void 0 !== o && o.originalMediaUrls && (f = e.data.result.originalMediaUrls, h = [], f.videos && Array.isArray(f.videos) && f.videos.length > 0 ? (h = r(f.videos), console.log("敏感平台混合内容视频URLs (videos数组):", h)) : f.video_url && (h.push(f.video_url), console.log("敏感平台混合内容视频URL (video_url):", f.video_url)), console.log("敏感平台混合内容最终视频URLs:", h)), !(h.length > 0)) {
              n.next = 46;
              break
            }
            w = t(h), n.prev = 29, p = a().mark((function e() {
              var t, r;
              return a().wrap((function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (t = g.value) {
                      e.next = 3;
                      break
                    }
                    return e.abrupt("return", 1);
                  case 3:
                    return e.prev = 3, e.next = 6, new Promise((function (e, r) {
                      wx.downloadFile({
                        url: t,
                        success: e,
                        fail: function (e) {
                          e.errMsg && (e.errMsg.includes("domain is not in domain list") || e.errMsg.includes("downloadFile:fail url not in domain list")) && (i = !0, l = t), r(e)
                        }
                      })
                    }));
                  case 6:
                    if (200 !== (r = e.sent).statusCode) {
                      e.next = 12;
                      break
                    }
                    return e.next = 10, wx.saveVideoToPhotosAlbum({
                      filePath: r.tempFilePath
                    });
                  case 10:
                    console.log("视频保存成功:", t), u++;
                  case 12:
                    e.next = 17;
                    break;
                  case 14:
                    e.prev = 14, e.t0 = e.catch(3), console.error("Save video error:", e.t0);
                  case 17:
                  case "end":
                    return e.stop()
                }
              }), e, null, [
                [3, 14]
              ])
            })), w.s();
          case 32:
            if ((g = w.n()).done) {
              n.next = 38;
              break
            }
            return n.delegateYield(p(), "t1", 34);
          case 34:
            if (!n.t1) {
              n.next = 36;
              break
            }
            return n.abrupt("continue", 36);
          case 36:
            n.next = 32;
            break;
          case 38:
            n.next = 43;
            break;
          case 40:
            n.prev = 40, n.t2 = n.catch(29), w.e(n.t2);
          case 43:
            return n.prev = 43, w.f(), n.finish(43);
          case 46:
            if (x = [], e.data.isSensitivePlatform && e.data.result.originalMediaUrls ? (v = e.data.result.originalMediaUrls).images && Array.isArray(v.images) && (x = r(v.images), console.log("敏感平台解析图片URLs:", x)) : x = e.data.result.images || [], !(x.length > 0)) {
              n.next = 57;
              break
            }
            return b = x.map((function (e) {
              return e ? new Promise((function (t, r) {
                wx.downloadFile({
                  url: e,
                  success: function (e) {
                    return t(e)
                  },
                  fail: function (r) {
                    console.error("Download failed for:", e, r), r.errMsg && (r.errMsg.includes("domain is not in domain list") || r.errMsg.includes("downloadFile:fail url not in domain list")) && (c = !0, l = e), t(null)
                  }
                })
              })) : Promise.resolve(null)
            })), n.next = 52, Promise.all(b);
          case 52:
            return k = n.sent, T = k.filter((function (e) {
              return e && 200 === e.statusCode
            })), P = T.map((function (e) {
              return new Promise((function (t, r) {
                wx.saveImageToPhotosAlbum({
                  filePath: e.tempFilePath,
                  success: function () {
                    d++, t(!0)
                  },
                  fail: function (r) {
                    console.error("Save failed for:", e.tempFilePath, r), t(!1)
                  }
                })
              }))
            })), n.next = 57, Promise.all(P);
          case 57:
            if (wx.hideLoading(), !i && !c) {
              n.next = 61;
              break
            }
            return e.showDomainErrorModal(l, i ? "视频" : "图片"), n.abrupt("return");
          case 61:
            if (S = u + d, h.length + x.length, 0 !== S) {
              n.next = 66;
              break
            }
            return wx.showToast({
              title: "保存失败",
              icon: "none"
            }), n.abrupt("return");
          case 66:
            M = "", d > 0 && u > 0 ? M = "已保存".concat(u, "个视频和").concat(d, "张图片") : u > 0 ? M = "已保存".concat(u, "个视频") : d > 0 && (M = "已保存".concat(d, "张图片")), wx.showToast({
              title: M,
              icon: "success",
              success: function () {
                setTimeout((function () {
                  e.setData({
                    showShareModal: !0
                  })
                }), 1500)
              }
            }), e.data.isSensitivePlatform || setTimeout((function () {
              e.setData({
                showShareModal: !0
              })
            }), 1500), n.next = 77;
            break;
          case 72:
            n.prev = 72, n.t3 = n.catch(3), console.error("Save mixed content error:", n.t3), wx.hideLoading(), wx.showToast({
              title: "保存失败，请检查存储权限",
              icon: "none"
            });
          case 77:
          case "end":
            return n.stop()
        }
      }), n, null, [
        [3, 72],
        [8, 13],
        [29, 40, 43, 46]
      ])
    })))()
  },
  showDomainErrorModal: function (e, t) {
    wx.hideLoading(), wx.showModal({
      title: "保存失败",
      content: "该".concat(t, "来源于新域名，暂未收录。您可以复制链接到浏览器中下载保存。"),
      confirmText: "复制链接",
      cancelText: "取消",
      success: function (t) {
        t.confirm && wx.setClipboardData({
          data: e,
          success: function () {
            wx.showToast({
              title: "链接已复制",
              icon: "success"
            })
          }
        })
      }
    })
  },
  getPlatformName: function (e) {
    return e.includes("instagram.com") ? "Instagram" : e.includes("youtube.com") || e.includes("youtu.be") ? "YouTube" : e.includes("twitter.com") || e.includes("x.com") ? "X/Twitter" : e.includes("tiktok.com") ? "TikTok" : e.includes("threads.net") ? "Threads" : e.includes("facebook.com") || e.includes("fb.com") ? "Facebook" : e.includes("twitch.tv") ? "Twitch" : e.includes("snapchat.com") ? "Snapchat" : e.includes("vk.com") ? "VK" : e.includes("douyin.com") ? "抖音" : e.includes("kuaishou.com") || e.includes("gifshow.com") ? "快手" : e.includes("xiaohongshu.com") || e.includes("xhslink.com") ? "小红书" : e.includes("weibo.com") ? "微博" : e.includes("bilibili.com") ? "B站" : ""
  },
  saveAllContent: function () {
    var e = this;
    return n(a().mark((function n() {
      var s, o, i, c, l, u, d, h, m, f, w, g, p, x, v, b, k, T, P;
      return a().wrap((function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            if (e.data.result) {
              n.next = 3;
              break
            }
            return wx.showToast({
              title: "内容无效",
              icon: "none"
            }), n.abrupt("return");
          case 3:
            if (!e.data.isSensitivePlatform || null === (s = e.data.result) || void 0 === s || !s.originalMediaUrls) {
              n.next = 76;
              break
            }
            if (o = e.data.result.originalMediaUrls, i = [], c = [], o.videos && Array.isArray(o.videos) && o.videos.length > 0 ? (i = r(o.videos), console.log("敏感平台视频URLs (videos数组):", i)) : o.video_url && (i.push(o.video_url), console.log("敏感平台视频URL (video_url):", o.video_url)), o.images && Array.isArray(o.images) && o.images.length > 0 && (c = r(o.images), console.log("敏感平台图片URLs:", c)), 0 === c.length && o.cover_url && c.push(o.cover_url), console.log("最终处理的视频URLs:", i), console.log("最终处理的图片URLs:", c), 0 !== i.length || 0 !== c.length) {
              n.next = 15;
              break
            }
            return wx.showToast({
              title: "没有可保存的内容",
              icon: "none"
            }), n.abrupt("return");
          case 15:
            return n.prev = 15, n.next = 18, wx.getSetting();
          case 18:
            if (n.sent.authSetting["scope.writePhotosAlbum"]) {
              n.next = 30;
              break
            }
            return n.prev = 20, n.next = 23, wx.authorize({
              scope: "scope.writePhotosAlbum"
            });
          case 23:
            n.next = 30;
            break;
          case 25:
            return n.prev = 25, n.t0 = n.catch(20), n.next = 29, wx.openSetting();
          case 29:
            return n.abrupt("return");
          case 30:
            if (wx.showLoading({
                title: "正在保存...",
                mask: !0
              }), l = !1, u = "", d = 0, h = 0, !(i.length > 0)) {
              n.next = 54;
              break
            }
            m = t(i), n.prev = 37, w = a().mark((function e() {
              var t, r;
              return a().wrap((function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (t = f.value) {
                      e.next = 3;
                      break
                    }
                    return e.abrupt("return", 1);
                  case 3:
                    return e.prev = 3, e.next = 6, new Promise((function (e, r) {
                      wx.downloadFile({
                        url: t,
                        success: e,
                        fail: function (e) {
                          e.errMsg && (e.errMsg.includes("domain is not in domain list") || e.errMsg.includes("downloadFile:fail url not in domain list")) && (l = !0, u = t), r(e)
                        }
                      })
                    }));
                  case 6:
                    if (200 !== (r = e.sent).statusCode) {
                      e.next = 11;
                      break
                    }
                    return e.next = 10, wx.saveVideoToPhotosAlbum({
                      filePath: r.tempFilePath
                    });
                  case 10:
                    d++;
                  case 11:
                    e.next = 16;
                    break;
                  case 13:
                    e.prev = 13, e.t0 = e.catch(3), console.error("保存视频失败:", e.t0);
                  case 16:
                  case "end":
                    return e.stop()
                }
              }), e, null, [
                [3, 13]
              ])
            })), m.s();
          case 40:
            if ((f = m.n()).done) {
              n.next = 46;
              break
            }
            return n.delegateYield(w(), "t1", 42);
          case 42:
            if (!n.t1) {
              n.next = 44;
              break
            }
            return n.abrupt("continue", 44);
          case 44:
            n.next = 40;
            break;
          case 46:
            n.next = 51;
            break;
          case 48:
            n.prev = 48, n.t2 = n.catch(37), m.e(n.t2);
          case 51:
            return n.prev = 51, m.f(), n.finish(51);
          case 54:
            if (!(c.length > 0)) {
              n.next = 65;
              break
            }
            return g = c.map((function (e) {
              return e ? new Promise((function (t, r) {
                wx.downloadFile({
                  url: e,
                  success: function (e) {
                    return t(e)
                  },
                  fail: function (r) {
                    console.error("Download failed for:", e, r), r.errMsg && (r.errMsg.includes("domain is not in domain list") || r.errMsg.includes("downloadFile:fail url not in domain list")) && (l = !0, u = e), t(null)
                  }
                })
              })) : Promise.resolve(null)
            })), n.next = 58, Promise.all(g);
          case 58:
            return p = n.sent, x = p.filter((function (e) {
              return e && 200 === e.statusCode
            })), v = x.map((function (e) {
              return new Promise((function (t, r) {
                wx.saveImageToPhotosAlbum({
                  filePath: e.tempFilePath,
                  success: function () {
                    return t(!0)
                  },
                  fail: function (e) {
                    console.error("Save failed:", e), t(!1)
                  }
                })
              }))
            })), n.next = 63, Promise.all(v);
          case 63:
            b = n.sent, h = b.filter((function (e) {
              return e
            })).length;
          case 65:
            wx.hideLoading(), l ? e.showDomainErrorModal(u, "媒体内容") : d + h > 0 ? (k = "", k = d > 0 && h > 0 ? "已保存".concat(d, "个视频和").concat(h, "张图片") : d > 0 ? "已保存".concat(d, "个视频") : "已保存".concat(h, "张图片"), wx.showToast({
              title: k,
              icon: "success",
              duration: 2e3
            }), setTimeout((function () {
              e.setData({
                showShareModal: !0
              })
            }), 1500)) : wx.showToast({
              title: "保存失败",
              icon: "none"
            }), n.next = 74;
            break;
          case 69:
            n.prev = 69, n.t3 = n.catch(15), console.error("保存全部内容失败:", n.t3), wx.hideLoading(), wx.showToast({
              title: "保存失败，请检查网络和存储权限",
              icon: "none"
            });
          case 74:
            n.next = 110;
            break;
          case 76:
            if (!e.data.result.isVideo || e.data.result.isImages) {
              n.next = 81;
              break
            }
            return n.next = 79, e.saveVideo();
          case 79:
            n.next = 110;
            break;
          case 81:
            if (e.data.result.isVideo || !e.data.result.isImages) {
              n.next = 107;
              break
            }
            if (1 !== e.data.result.images.length) {
              n.next = 103;
              break
            }
            return n.prev = 83, wx.showLoading({
              title: "保存中..."
            }), T = e.data.result.images[0], n.next = 88, wx.downloadFile({
              url: T
            });
          case 88:
            return P = n.sent, n.next = 91, wx.saveImageToPhotosAlbum({
              filePath: P.tempFilePath
            });
          case 91:
            wx.hideLoading(), wx.showToast({
              title: "保存成功",
              icon: "success"
            }), setTimeout((function () {
              e.setData({
                showShareModal: !0
              })
            }), 1500), n.next = 101;
            break;
          case 96:
            n.prev = 96, n.t4 = n.catch(83), wx.hideLoading(), console.error("保存图片失败:", n.t4), wx.showToast({
              title: "保存失败，请检查权限",
              icon: "none"
            });
          case 101:
            n.next = 105;
            break;
          case 103:
            return n.next = 105, e.saveSelectedImages();
          case 105:
            n.next = 110;
            break;
          case 107:
            if (!e.data.result.isVideo || !e.data.result.isImages) {
              n.next = 110;
              break
            }
            return n.next = 110, e.saveAllMixedContent();
          case 110:
          case "end":
            return n.stop()
        }
      }), n, null, [
        [15, 69],
        [20, 25],
        [37, 48, 51, 54],
        [83, 96]
      ])
    })))()
  }
});