Page({
  data: {
    isDarkMode: !1,
    isLinkValid: !0
  },
  onLoad: function () {
    var t = this;
    wx.getSystemInfo({
      success: function (i) {
        t.setData({
          isDarkMode: "dark" === i.theme
        })
      }
    })
  },
  onThemeChange: function (t) {
    var i = t.theme;
    this.setData({
      isDarkMode: "dark" === i
    })
  },
  copyLink: function () {
    this.checkLink().then((function (t) {
      t ? wx.setClipboardData({
        data: "https://jiejing.fun/sites/70.html",
        success: function () {
          wx.showToast({
            title: "链接已复制",
            icon: "success"
          })
        }
      }) : wx.showToast({
        title: "链接已失效",
        icon: "error"
      })
    }))
  },
  checkLink: function () {
    var t = this;
    return new Promise((function (i) {
      wx.request({
        url: "https://jiejing.fun/sites/70.html",
        method: "HEAD",
        success: function (e) {
          var s = 200 === e.statusCode;
          t.setData({
            isLinkValid: s
          }), i(s)
        },
        fail: function () {
          t.setData({
            isLinkValid: !1
          }), i(!1)
        }
      })
    }))
  },
  backToHome: function () {
    wx.reLaunch({
      url: "/pages/parse/parse"
    })
  }
});