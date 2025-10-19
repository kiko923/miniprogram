var e = {
  BASE_URL: "https://jiejing.fun/xcx/parse.php",
  FAIL_URL: "https://jiejing.fun/xcx/fail.php",
  TOKEN: "xiaosiwole8"
};
module.exports = {
  parseVideo: function (i) {
    return new Promise((function (t, a) {
      wx.request({
        url: e.BASE_URL,
        method: "GET",
        data: {
          url: i,
          token: e.TOKEN
        },
        success: function (e) {
          0 === e.data.code ? t(e.data.data) : a({
            message: "不支持的平台或 URL 链接",
            originalUrl: i
          })
        },
        fail: function (e) {
          a({
            message: "不支持的平台或 URL 链接",
            originalUrl: i
          })
        }
      })
    }))
  },
  API_CONFIG: e
};