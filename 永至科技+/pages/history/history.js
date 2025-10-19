var t = require("../../@babel/runtime/helpers/objectSpread2");
require("../../@babel/runtime/helpers/Arrayincludes"), Page({
  data: {
    activeTab: "video",
    videoHistory: [],
    imagesHistory: [],
    isEmpty: !0,
    isDarkMode: !1,
    sortType: "time",
    sortOrder: "desc",
    imageLoadStatus: {}
  },
  onLoad: function () {
    this.loadHistoryData(), this.checkSystemTheme()
  },
  onShow: function () {
    this.loadHistoryData(), this.checkSystemTheme()
  },
  checkSystemTheme: function () {
    var t = this;
    wx.getSystemInfo({
      success: function (a) {
        t.setData({
          isDarkMode: "dark" === a.theme
        }), console.log("当前主题:", a.theme, "暗黑模式:", t.data.isDarkMode)
      }
    })
  },
  onThemeChange: function (t) {
    console.log("主题变化:", t.theme), this.setData({
      isDarkMode: "dark" === t.theme
    })
  },
  identifyPlatform: function (t) {
    return t ? t.includes("instagram.com") ? "instagram" : t.includes("youtube.com") || t.includes("youtu.be") ? "youtube" : t.includes("twitter.com") || t.includes("x.com") ? "twitter" : t.includes("tiktok.com") ? "tiktok" : t.includes("threads.net") ? "threads" : t.includes("douyin.com") || t.includes("iesdouyin.com") ? "douyin" : t.includes("kuaishou.com") || t.includes("gifshow.com") ? "kuaishou" : t.includes("xiaohongshu.com") || t.includes("xhslink.com") ? "xiaohongshu" : t.includes("bilibili.com") || t.includes("b23.tv") ? "bilibili" : t.includes("weibo.com") || t.includes("weibo.cn") ? "weibo" : "" : ""
  },
  getPlatformWeight: function (t) {
    return {
      douyin: 10,
      kuaishou: 9,
      xiaohongshu: 8,
      weibo: 7,
      bilibili: 6,
      instagram: 5,
      youtube: 4,
      twitter: 3,
      tiktok: 2,
      threads: 1
    } [t] || 0
  },
  loadHistoryData: function () {
    var t = this;
    try {
      var a = wx.getStorageSync("videoHistory") || [],
        e = wx.getStorageSync("imagesHistory") || [];
      a.forEach((function (a) {
        if (a.timestamp && !a.formattedTime) {
          var e = new Date(a.timestamp);
          a.formattedTime = "".concat(e.getFullYear(), "-").concat((e.getMonth() + 1).toString().padStart(2, "0"), "-").concat(e.getDate().toString().padStart(2, "0"), " ").concat(e.getHours().toString().padStart(2, "0"), ":").concat(e.getMinutes().toString().padStart(2, "0"))
        } else a.formattedTime || (a.formattedTime = "未知时间");
        a.platform && "unknown" !== a.platform || !a.url || (a.platform = t.identifyPlatform(a.url))
      })), e.forEach((function (a) {
        if (a.timestamp && !a.formattedTime) {
          var e = new Date(a.timestamp);
          a.formattedTime = "".concat(e.getFullYear(), "-").concat((e.getMonth() + 1).toString().padStart(2, "0"), "-").concat(e.getDate().toString().padStart(2, "0"), " ").concat(e.getHours().toString().padStart(2, "0"), ":").concat(e.getMinutes().toString().padStart(2, "0"))
        } else a.formattedTime || (a.formattedTime = "未知时间");
        a.platform && "unknown" !== a.platform || !a.url || (a.platform = t.identifyPlatform(a.url))
      }));
      var i = this.sortHistoryData(a),
        o = this.sortHistoryData(e);
      this.setData({
        videoHistory: i,
        imagesHistory: o,
        isEmpty: 0 === i.length && 0 === o.length
      })
    } catch (t) {
      console.error("加载历史记录失败", t), wx.showToast({
        title: "加载历史记录失败",
        icon: "none"
      })
    }
  },
  sortHistoryData: function (t) {
    var a = this;
    return t && 0 !== t.length ? t.sort((function (t, e) {
      if ("time" === a.data.sortType) {
        var i = t.timestamp || 0,
          o = e.timestamp || 0;
        return "desc" === a.data.sortOrder ? o - i : i - o
      }
      var r = a.getPlatformWeight(t.platform || ""),
        s = a.getPlatformWeight(e.platform || "");
      return "desc" === a.data.sortOrder ? s - r : r - s
    })) : []
  },
  changeSort: function (t) {
    var a = this,
      e = t.currentTarget.dataset.type,
      i = this.data.sortOrder;
    i = e === this.data.sortType && "desc" === i ? "asc" : "desc", this.setData({
      sortType: e,
      sortOrder: i
    }, (function () {
      var t = a.sortHistoryData(a.data.videoHistory),
        e = a.sortHistoryData(a.data.imagesHistory);
      a.setData({
        videoHistory: t,
        imagesHistory: e
      })
    }))
  },
  switchTab: function (t) {
    var a = t.currentTarget.dataset.tab;
    this.setData({
      activeTab: a
    })
  },
  clearHistory: function () {
    var t = this;
    wx.showModal({
      title: "确认清空",
      content: "确定要清空所有历史记录吗？",
      success: function (a) {
        a.confirm && ("video" === t.data.activeTab ? (wx.setStorageSync("videoHistory", []), t.setData({
          videoHistory: [],
          isEmpty: 0 === t.data.imagesHistory.length
        })) : (wx.setStorageSync("imagesHistory", []), t.setData({
          imagesHistory: [],
          isEmpty: 0 === t.data.videoHistory.length
        })), wx.showToast({
          title: "已清空历史记录",
          icon: "success"
        }))
      }
    })
  },
  onHistoryItemTap: function (t) {
    var a = t.currentTarget.dataset,
      e = a.type,
      i = a.index,
      o = "video" === e ? this.data.videoHistory[i] : this.data.imagesHistory[i];
    o.platform && "unknown" !== o.platform || !o.url || (o.platform = this.identifyPlatform(o.url));
    var r = getCurrentPages(),
      s = r[r.length - 2];
    s && (s.loadHistoryItem(o), wx.navigateBack())
  },
  onImageLoad: function (a) {
    var e = a.currentTarget.dataset.index,
      i = t({}, this.data.imageLoadStatus);
    i[e] = "loaded", this.setData({
      imageLoadStatus: i
    })
  },
  onImageError: function (a) {
    var e = a.currentTarget.dataset.index,
      i = t({}, this.data.imageLoadStatus);
    i[e] = "error", this.setData({
      imageLoadStatus: i
    })
  },
  goBack: function () {
    wx.navigateBack()
  }
});