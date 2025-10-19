Page({
  data: {
    wifiName: '',  // 存储Wi-Fi名称
    wifiPassword: ''  // 存储Wi-Fi密码
  },

  // 处理Wi-Fi名称输入
  onWifiNameInput: function (e) {
    this.setData({
      wifiName: e.detail.value
    });
  },

  // 处理Wi-Fi密码输入
  onPasswordInput: function (e) {
    this.setData({
      wifiPassword: e.detail.value
    });
  },

  // 创建Wi-Fi的函数
  createWifi: function () {
    const { wifiName, wifiPassword } = this.data;

    // 检查Wi-Fi名称和密码是否填写完整
    if (!wifiName || !wifiPassword) {
      wx.showToast({
        title: '请填写完整的Wi-Fi信息',
        icon: 'none'
      });
      return;
    }

    // 密码验证：不能含有中文，且必须至少8位
    const hasChinese = /[\u4e00-\u9fa5]/.test(wifiPassword);

    if (hasChinese) {
      wx.showToast({
        title: '密码不能包含中文字符',
        icon: 'none'
      });
      return;
    }

    if (wifiPassword.length < 8) {
      wx.showToast({
        title: '密码长度不能少于8位',
        icon: 'none'
      });
      return;
    }

    // 显示加载提示
    wx.showLoading({
      title: '正在创建...',
    });

    // 生成二维码
    this.generateQRCode(wifiName, wifiPassword);

 
  },

  // 生成唯一的 WiFi ID
  generateWifiId() {
    const timestamp = Date.now().toString(36); // 时间戳转36进制
    const random = Math.random().toString(36).substr(2, 6); // 6位随机字符
    return `wifi_${timestamp}_${random}`;
  },



  // 生成二维码
  generateQRCode(wifiName, wifiPassword) {
    wx.request({
      url: 'https://api.znnu.com/wifi/api.php?act=generate',
      method: 'POST',
      data: JSON.stringify({
        wifiName: wifiName,
        wifiPassword: wifiPassword
      }),
      header: {
        'Content-Type': 'application/json'
      },
      success: (res) => {
        wx.hideLoading();

        if (res.data && (res.data.code === 200 || res.data.success === true)) {
          wx.showToast({
            title: '生成成功',
            icon: 'success'
          });
          
          console.log("✅ 二维码生成成功，WiFi名称:", wifiName);
          console.log("二维码链接格式:", `weixin://dl/business/?appid=wxf928b141405e22e3&path=pages/connectWifi/connectWifi&query=wifiName%3D${encodeURIComponent(wifiName)}%26wifiPassword%3D${encodeURIComponent(wifiPassword)}&env_version=develop`);
          
          // 保存二维码到相册
          this.saveToAlbum(res.data.qrCode);
        } else {
          wx.showModal({
            title: '生成失败',
            content: res.data.message || '二维码生成失败',
            showCancel: false,
            confirmText: '确认'
          });
        }
      },
      fail: (err) => {
        wx.hideLoading();
        wx.showToast({
          title: '生成失败，请重试',
          icon: 'none'
        });
      }
    });
  },

  // 将二维码保存到相册的函数
  saveToAlbum: function (base64Img) {
    // 获取当前时间戳并生成文件名
    const timestamp = Date.now();
    const tempFilePath = wx.env.USER_DATA_PATH + '/qrCode_' + timestamp + '.png';

    // 处理 data URL 格式的 base64 数据
    let base64Data = base64Img;
    if (base64Data.startsWith('data:image/')) {
      // 移除 data URL 的前缀，只保留 base64 部分
      base64Data = base64Data.split(',')[1];
    }

    // 将 base64 编码的图片转换为临时文件路径
    wx.getFileSystemManager().writeFile({
      filePath: tempFilePath,
      data: wx.base64ToArrayBuffer(base64Data),  // 将处理后的 base64 转为 ArrayBuffer
      encoding: 'binary',
      success: () => {
        // 保存到相册
        wx.saveImageToPhotosAlbum({
          filePath: tempFilePath,
          success: () => {
            // 保存成功后弹出确认框
            wx.showModal({
              title: '提示',
              content: '二维码已保存到相册',
              showCancel: false,  // 不显示取消按钮
              confirmText: '确认',
              success: function (modalRes) {
                if (modalRes.confirm) {
                  // 点击确认后返回到上一页面
                  wx.navigateBack({
                    delta: 1,  // 返回上一页面，delta 代表返回的层数，默认为1
                    success: function() {
                      // 延时1秒后显示成功提示
                      setTimeout(function() {
                        wx.showToast({
                          icon: 'success',
                          title: '保存成功',
                        });
                      }, 500);  // 1秒后显示提示
                    }
                  });
                }
              }
            });
          },
          fail: (err) => {
            wx.showToast({
              title: '保存失败，请重试',
              icon: 'none'
            });
          }
        });
      },
      fail: (err) => {
        wx.showToast({
          title: '二维码保存失败',
          icon: 'none'
        });
      }
    });
  },

  // 生成多种数据传递方案的工具函数
  generateDataMethods: function(wifiName, wifiPassword) {
    console.log("=== 数据传递方案示例 ===");
    
    // 方案一：scene 参数（推荐）
    const sceneParam = `s=${encodeURIComponent(wifiName)}&p=${encodeURIComponent(wifiPassword)}`;
    console.log("1. Scene 参数:", sceneParam);
    console.log("   二维码链接:", `pages/connectWifi/connectWifi?scene=${encodeURIComponent(sceneParam)}`);
    
    // 方案二：直接 URL 参数
    const urlParams = `ssid=${encodeURIComponent(wifiName)}&password=${encodeURIComponent(wifiPassword)}`;
    console.log("2. URL 参数:", urlParams);
    console.log("   页面链接:", `pages/connectWifi/connectWifi?${urlParams}`);
    
    // 方案三：本地存储方案
    console.log("3. 本地存储方案:");
    console.log("   先保存:", `wx.setStorageSync('tempWifiData', {ssid: '${wifiName}', password: '${wifiPassword}'})`);
    console.log("   再跳转:", `wx.navigateTo({url: '/pages/connectWifi/connectWifi'})`);
    
    // 方案四：wifiName/wifiPassword 参数
    const namedParams = `wifiName=${encodeURIComponent(wifiName)}&wifiPassword=${encodeURIComponent(wifiPassword)}`;
    console.log("4. 命名参数:", namedParams);
    console.log("   页面链接:", `pages/connectWifi/connectWifi?${namedParams}`);
  },

  back: function () {
    const pages = getCurrentPages(); // 获取当前页面栈
    if (pages.length > 1) {
        // 如果有上一页面，则返回上一页面
        wx.navigateBack({
            delta: 1 // 返回的层数
        });
    } else {
        // 如果没有上一页面，则跳转到指定页面
        wx.redirectTo({
            url: '/pages/connectWifi/connectWifi' // 指定跳转的页面路径
        });
    }
}
});
