// pages/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPhoneNumber: true, //是否开启支付前获取手机号码
    isPayFinish: false,
    isPaySuccess: false,
    disablePay: true,
    payFailMsg: '',
    money: '0.00',
    url: null,
    code: '',
    phone_code: '',
    payData: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(opt) {
    wx.hideHomeButton();
    if(!opt.hasOwnProperty('url') || !opt.hasOwnProperty('money')){
      this.showFailMsg('页面参数不完整')
      return;
    }
    this.data.url = opt.url;
    this.setData({
      money: opt.money
    })
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    this.login();
  },

  showMessage(msg, title, callback){
    title = title || '错误提示'
    wx.showModal({
      title: title,
      content: msg,
      showCancel: false,
      success(){
        if(callback) callback()
      }
    });
  },
  showFailMsg(msg){
    this.setData({
      isPayFinish: true,
      isPaySuccess: false,
      payFailMsg: msg,
    })
  },
  login(){
    var that = this;
    console.log(that)
    wx.login({
      success(res){
        if (res.code) {
          that.data.code = res.code;
          if(that.data.isPhoneNumber){
            that.setData({
              disablePay: false
            })
            wx.hideLoading()
            return;
          }
          that.getPayData();
        }else{
          that.showMessage(res.errMsg, '登录失败')
        }
      },
      fail(err){
        that.showMessage(err.errMsg, '登录失败')
      }
    })
  },
  getPhoneNumber (e) {
    if(e.detail.errno){
      this.showMessage(e.detail.errMsg, '登录失败')
    }
    this.data.phone_code = e.detail.code
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    this.getPayData()
  },
  getPayData(){
    var that = this;
    wx.request({
      url: that.data.url,
      data: { code: that.data.code, phone_code: that.data.phone_code },
      success(res){
        wx.hideLoading()
        if(res.statusCode < 400){
          if(res.data.code == 0){
            that.data.payData = res.data.data;
            that.setData({
              isPhoneNumber: false,
              disablePay: false
            })
            that.submitPay();
          }else{
            that.showMessage(res.data.msg)
          }
        }else{
          that.showMessage('request fail: statusCode='+res.statusCode)
        }
      },
      fail(err){
        wx.hideLoading()
        that.showMessage(that.url + err.errMsg)
      }
    })
  },
  submitPay(){
    if(this.data.disablePay) return;
    var that = this;
    try {
      var pay = this.data.payData;
      wx.requestPayment({
        timeStamp: pay.timeStamp + "",
        nonceStr: pay.nonceStr,
        package: pay.package,
        signType: pay.signType,
        paySign: pay.paySign,
        success(res) {
          that.setData({
            isPayFinish: true,
            isPaySuccess: true
          })
        },
        fail(err) {
          if(err.errMsg.includes("fail cancel")){
            console.log(err.errMsg);
            that.showMessage("手动取消支付","支付未完成")
          }else{
            console.log(err.errMsg);
            that.showMessage(err.errMsg);
          }
        }
      });
    } catch (e) {
      console.log(e.message);
      that.showMessage(e.message)
    }
  },
  exitApp(e){
    wx.exitMiniProgram();
  }
})