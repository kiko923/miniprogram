Page({
  data: {
    openid: ''
  },

  onLoad: function() {
    const that = this; // 解决作用域问题

    // 获取用户 openid
    wx.login({
      success: (res) => {
        if (res.code) {
          console.log('登录成功，code:', res.code);

          // 请求后端接口获取 openid
          wx.request({
            url: 'https://api.znnu.com/getOpenid.php', // 替换为你的后端 API 地址
            data: { code: res.code },
            success: (res) => {
              console.log('后端返回数据:', res); // 确保拿到完整数据

              if (res.data && res.data.code === 1 && res.data.data && res.data.data.openid) {
                that.setData({
                  openid: res.data.data.openid
                }, () => {
                  console.log('获取 openid 成功:', that.data.openid);
                });
              } else {
                console.warn('返回的数据格式错误:', res.data);
              }
            },
            fail: (err) => {
              console.error('获取 openid 失败:', err);
              wx.showToast({
                title: '获取 openid 失败',
                icon: 'none'
              });
            }
          });
        } else {
          console.error('wx.login 失败:', res.errMsg);
          wx.showToast({
            title: '微信登录失败',
            icon: 'none'
          });
        }
      },
      fail: (err) => {
        console.error('wx.login 接口调用失败:', err);
        wx.showToast({
          title: '登录接口调用失败',
          icon: 'none'
        });
      }
    });
  }
});
