Page({
  data: {
    isDarkMode: !1
  },
  onLoad: function () {
    var e = this;
    wx.getSystemInfo({
      success: function (a) {
        e.setData({
          isDarkMode: "dark" === a.theme
        })
      }
    })
  },
  onThemeChange: function (e) {
    var a = e.theme;
    this.setData({
      isDarkMode: "dark" === a
    })
  },
  goToHome: function () {
    wx.reLaunch({
      url: "/pages/parse/parse"
    })
  }
});