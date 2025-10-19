// tools.js
Page({
  data: {
    tools: [
      { 
        name: '去水印解析', 
        image: 'https://img.znnu.com/favicon.ico', 
        url: '/pages/parse/parse'
      },
      { 
        name: '连接Wi-Fi', 
        image: 'https://img.znnu.com/favicon.ico', 
        url: '/pages/connectWifi/connectWifi'
      },
      { 
        name: '生成Wi-Fi', 
        image: 'https://img.znnu.com/favicon.ico', 
        url: '/pages/createWifi/createWifi'
      },
      { 
        name: '水印工具', 
        image: 'https://img.znnu.com/favicon.ico', 
        url: '/pages/watermark/watermark'
      }
    ]
  },

  navigateToPage: function(e) {
    const url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: url,
      fail: (err) => {
        console.error('页面跳转失败:', err);
        wx.showToast({
          title: '页面跳转失败',
          icon: 'none'
        });
      }
    });
  }
}); 