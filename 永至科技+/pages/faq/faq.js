require("../../@babel/runtime/helpers/Arrayincludes"), Page({
  data: {
    faqs: [{
      question: "如何使用这个小程序？",
      answer: '复制视频链接，粘贴到输入框，点击"一键解析"按钮即可获取无水印视频或图片。'
    }, {
      question: "为什么保存视频失败？",
      answer: "请确保已授权小程序访问相册权限，或者手机存储空间充足。"
    }, {
      question: "支持哪些平台的视频解析？",
      answer: "支持抖音、快手、小红书、B站、微博等国内主流短视频平台。由于微信小程序政策限制，不支持国外平台，有相关需求请使用快捷指令或网页版。"
    }, {
      question: "为什么有些视频无法解析？",
      answer: "可能是链接失效、平台限制或者视频已被删除，建议尝试其他视频链接。"
    }, {
      question: "为何解析之后还是有水印？",
      answer: "这是作者或者平台本身添加的无法去除，简单说你在APP能看到水印，那么小程序下载的也会有。"
    }],
    isDarkMode: !1,
    showFeedbackModal: !1,
    feedbackText: ""
  },
  onLoad: function () {
    this.checkSystemTheme()
  },
  onShow: function () {
    this.checkSystemTheme()
  },
  checkSystemTheme: function () {
    var e = this;
    wx.getSystemInfo({
      success: function (t) {
        e.setData({
          isDarkMode: "dark" === t.theme
        }), console.log("FAQ页面主题:", t.theme, "暗黑模式:", e.data.isDarkMode)
      }
    })
  },
  onThemeChange: function (e) {
    var t = e.theme;
    console.log("FAQ页面主题变化:", t), this.setData({
      isDarkMode: "dark" === t
    })
  },
  backToHome: function () {
    try {
      wx.navigateBack({
        delta: 1
      })
    } catch (e) {
      wx.redirectTo({
        url: "/pages/parse/parse"
      })
    }
  },
  showFeedbackModal: function () {
    wx.showToast({
      title: '未开放',
      icon: 'none'
    })
    return
    this.setData({
      showFeedbackModal: !0,
      feedbackText: ""
    })
  },
  closeFeedbackModal: function () {
    this.setData({
      showFeedbackModal: !1,
      feedbackText: ""
    })
  },
  onFeedbackInput: function (e) {
    this.setData({
      feedbackText: e.detail.value
    })
  },
  submitFeedback: function () {
    var e = this,
      t = this.data.feedbackText.trim();
    t ? (wx.showLoading({
      title: "提交中..."
    }), wx.request({
      url: "https://jiejing.fun/xcx/unlock.json",
      method: "GET",
      success: function (a) {
        if (200 === a.statusCode && a.data && a.data.data && Array.isArray(a.data.data)) {
          var o = a.data.data,
            s = a.data.message || "反馈成功，刷新小程序即可";
          if (o.includes(t)) return void wx.setStorage({
            key: "foreign_platforms_unlocked",
            data: !0,
            success: function () {
              wx.setStorage({
                key: "unlock_code",
                data: t
              }), e.submitNormalFeedback(t, (function () {
                wx.hideLoading(), wx.showToast({
                  title: s,
                  icon: "success",
                  duration: 2e3
                }), e.closeFeedbackModal()
              }))
            }
          })
        }
        e.submitNormalFeedback(t)
      },
      fail: function (a) {
        console.error("获取解锁码失败:", a), e.submitNormalFeedback(t)
      }
    })) : wx.showToast({
      title: "请输入反馈内容",
      icon: "none"
    })
  },
  submitNormalFeedback: function (e, t) {
    var a = this;
    wx.request({
      url: "https://jiejing.fun/xcx/feedback.php",
      method: "POST",
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      data: {
        text: e
      },
      success: function (e) {
        "function" != typeof t ? (wx.hideLoading(), console.log("反馈提交结果:", e.data), 200 === e.statusCode && e.data && "success" === e.data.status ? (wx.showToast({
          title: "提交成功",
          icon: "success"
        }), a.closeFeedbackModal()) : wx.showToast({
          title: e.data && e.data.message ? e.data.message : "提交失败，请重试",
          icon: "none"
        })) : t(e)
      },
      fail: function (e) {
        console.error("反馈提交失败:", e), "function" != typeof t ? (wx.hideLoading(), wx.showToast({
          title: "提交失败，请重试",
          icon: "none"
        })) : t(null)
      }
    })
  }
});