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

    // 密码验证：不能含有中文，且必须至少8位，且必须包含字母和数字
    const passwordRegex = /^[A-Za-z0-9]+$/;  // 只允许字母和数字
    const hasChinese = /[\u4e00-\u9fa5]/.test(wifiPassword);
    const acchasChinese = /[\u4e00-\u9fa5]/.test(wifiName);
    


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

    // 向 https://api.znnu.com/wifi/api.php 发送 POST 请求
    wx.request({
      url: 'https://api.znnu.com/wifi/api.php',
      method: 'POST',
      data: {
        wifiName: wifiName,
        wifiPassword: wifiPassword,
        qrCodeType: 'auto'
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'  // 设置表单数据格式
      },
      success: (res) => {
        // 隐藏加载提示
        wx.hideLoading();

        if (res.data && res.data.code === 200) {
          wx.showToast({
            title: '成功',
            icon: 'none'
          });
          // 如果返回的 code 是 200，则将 qrCode 保存到相册
          this.saveToAlbum(res.data.qrCode);
        } else {
          // 如果返回的 code 不是 200，则弹出提示框显示 message
          wx.showModal({
            title: '提示',
            content: res.data.message || '发生未知错误',
            showCancel: false,  // 不显示取消按钮
            confirmText: '确认',
            success: function (modalRes) {
              if (modalRes.confirm) {
                console.log('用户点击了确认');
              }
            }
          });
        }
      },
      fail: (err) => {
        // 隐藏加载提示
        wx.hideLoading();
        wx.showToast({
          title: '服务器错误',
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

    // 将 base64 编码的图片转换为临时文件路径
    wx.getFileSystemManager().writeFile({
      filePath: tempFilePath,
      data: wx.base64ToArrayBuffer(base64Img),  // 将 base64 转为 ArrayBuffer
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
