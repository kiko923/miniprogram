// pages/clogin/clogin.js
/**
 * 彩虹聚合登录
 */
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canGetUserInfo: false,
    userInfo: {},
    hasUserInfo: false,
    inputUserInfo: false,
    avatarUrl: null,
    defaultAvatarUrl: 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(opt) {
    wx.hideHomeButton();
    if(!opt.hasOwnProperty('siteurl') || !opt.hasOwnProperty('state')){
      this.showMessage('页面参数不完整', '错误提示', function(){ wx.exitMiniProgram(); });
      return;
    }
    this.siteurl = opt.siteurl,
    this.state = opt.state
    this.login()
  },

  showMessage(msg, title, callback){
    title = title || '错误提示'
    wx.showModal({
      title: title,
      content: msg,
      showCancel:false,
      success(){
        if(callback) callback()
      }
    });
  },
  request(data, callback){
    var that = this;
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    wx.request({
      url: that.siteurl + 'wxapp.php',
      method:'post',
      data: data,
      header: {'content-type': 'application/x-www-form-urlencoded'},
      success(data){
        wx.hideLoading()
        if(data.statusCode < 400){
          callback(data.data)
        }else{
          that.showMessage('request fail: statusCode='+data.statusCode)
        }
      },
      fail(err){
        wx.hideLoading()
        that.showMessage(err.errMsg)
      }
    })
  },
  login(){
    var that = this;
    wx.login({
      success(res){
        if (res.code) {
          that.request({
            state: that.state,
            code: res.code
          }, function(data){
            if(data.code == 0){
              const appBaseInfo = wx.getAppBaseInfo()
              if(data.getUserInfo == true && that.compareVersion(appBaseInfo.SDKVersion, '2.27.1')>=0){
                that.sessionkey = data.sessionkey;
                that.setData({
                  inputUserInfo: true
                })
              }else if(data.getUserInfo == true && wx.getUserProfile){
                that.setData({
                  canGetUserInfo: true
                })
              }else{
                that.showMessage('登录成功！请返回到浏览器！', '提示', function(){ wx.exitMiniProgram(); })
              }
            }else{
              that.showMessage(data.msg)
            }
          })
        }else{
          that.showMessage(res.errMsg, '登录失败')
        }
      },
      fail(err){
        that.showMessage(err.errMsg, '登录失败')
      }
    })
  },
  getUserProfile(e) {
    var that = this;
    wx.getUserProfile({
      desc: '快捷登录',
      success: (res) => {
        //console.log(res)
        that.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        that.request({
          state: that.state,
          rawData: res.rawData,
          signature: res.signature
        }, function(data){
          if(data.code == 0){
            that.showMessage('登录成功！请返回到浏览器！', '提示', function(){ wx.exitMiniProgram(); })
          }else{
            that.showMessage('登录失败！' + data.msg, '提示', function(){ wx.exitMiniProgram(); })
          }
        })
      }
    })
  },
  cancelLogin(e){
    wx.exitMiniProgram();
  },
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail
    this.setData({
      avatarUrl,
    })
  },
  submitUserInfo(e){
    const avatar = this.data.avatarUrl;
    const { nickname } = e.detail.value;
    //if(!avatar){
      //this.showMessage('请选择头像')
      //return;
    //}
    //if(nickname == '') {
      //this.showMessage('请输入昵称')
      //return;
    //}
    wx.showLoading({
      title: '保存中',
      mask: true
    })
    var that = this;
    wx.uploadFile({
      url: that.siteurl + 'wxapp.php',
      filePath: avatar,
      name: 'avatar',
      header: {
        'content-type': 'multipart/form-data'
      },
      formData: {
        'state': that.state,
        'sessionkey' : that.sessionkey,
        'nickname': nickname,
      },
      success (res){
        wx.hideLoading()
        const data = JSON.parse(res.data)
        if(data.code == 0){
          that.showMessage('登录成功！请返回到浏览器！', '提示', function(){ wx.exitMiniProgram(); })
        }else{
          that.showMessage('登录失败！' + data.msg, '提示', function(){ wx.exitMiniProgram(); })
        }
      },
      fail(err){
        wx.hideLoading()
        that.showMessage(err.errMsg)
      }
    })
  },
  compareVersion(v1, v2) {
    v1 = v1.split('.')
    v2 = v2.split('.')
    const len = Math.max(v1.length, v2.length)
    while (v1.length < len) {
      v1.push('0')
    }
    while (v2.length < len) {
      v2.push('0')
    }
    for (let i = 0; i < len; i++) {
      const num1 = parseInt(v1[i])
      const num2 = parseInt(v2[i])
      if (num1 > num2) {
        return 1
      } else if (num1 < num2) {
        return -1
      }
    }
    return 0
  }  
})