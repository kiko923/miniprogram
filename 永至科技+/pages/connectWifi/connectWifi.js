const Base64 = require("base64.js");
Page({
  data: {
    wifiName: "92_5G", // 默认 Wi-Fi 名称
    wifiPassword: "13809631951", // 默认 Wi-Fi 密码
    copyText: 'https://api.znnu.com/wifi/', // 你要复制的内容，替换成你的页面链接
  },

  // 跳转到 createWifi 页面
  navigateToCreateWifi: function () {
    wx.navigateTo({
      url: '/pages/createWifi/createWifi' // 目标页面的路径
    });
  },
  // 复制内容并弹出提示框
  copyContent: function() {
    const content = this.data.copyText;
    // 将指定内容复制到剪贴板
    wx.setClipboardData({
      data: content,
      success: () => {
        // 弹出提示框，告诉用户复制成功并引导打开浏览器
        wx.showModal({
          title: '复制成功',
          content: '已复制链接，请在浏览器中制作。',
          showCancel: false,  // 不显示取消按钮
          confirmText: '确认', // 确认按钮文本
          success: function(res) {
            if (res.confirm) {
              // 用户点击了确认按钮
              console.log('用户点击了确认');
            }
          },
          fail: (err) => {
            console.error('弹出提示框失败:', err);
          }
        });
      },
      fail: (err) => {
        wx.showToast({
          title: '复制失败，请重试',
          icon: 'none',
        });
        console.error('复制失败:', err);
      }
    });
  },
  onLoad(options) {
    console.log("页面加载，接收到的参数:", options);
    
    // 只接受 scene 参数中的随机 ID
    if (options.scene) {
      const randomId = decodeURIComponent(options.scene);
      console.log("收到随机 ID:", randomId);
      
      // 显示加载状态
      wx.showLoading({
        title: '正在获取 Wi-Fi 信息...',
      });
      
      // 根据 ID 获取 WiFi 数据
      this.fetchWifiDataById(randomId);
    } else {
      // 没有 scene 参数，显示错误
      console.log("❌ 未找到 ID 参数");
      wx.showModal({
        title: '错误',
        content: '无效的 Wi-Fi 二维码，请重新生成。',
        showCancel: false,
        confirmText: '确定',
        success: () => {
          // 返回上一页或跳转到首页
          wx.navigateBack({
            delta: 1,
            fail: () => {
              wx.switchTab({
                url: '/pages/index/index'
              });
            }
          });
        }
      });
    }
  },

  // 根据 ID 获取 WiFi 数据
  fetchWifiDataById(randomId) {
    wx.request({
      url: 'https://api.znnu.com/wifi/api.php?act=get', // 文件存储获取端点
      method: 'POST',
      data: {
        id: randomId
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: (res) => {
        wx.hideLoading();
        
        console.log("数据获取响应:", res.data);
        
        if (res.data && res.data.success && res.data.data) {
          const wifiData = res.data.data;
          
          // 设置 WiFi 数据
          this.setData({
            wifiName: wifiData.ssid,
            wifiPassword: wifiData.password
          });
          
          console.log("✅ 根据 ID 获取 WiFi 数据成功:", wifiData.ssid, wifiData.password);
          console.log("✅ 对应文件:", res.data.filename);
          
          // 显示成功提示
          wx.showToast({
            title: 'Wi-Fi 信息加载成功',
            icon: 'success',
            duration: 1500
          });
          
        } else {
          // 没有找到数据
          console.log("❌ 未找到对应 ID 的 WiFi 数据:", res.data);
          this.handleDataError(res.data.message || 'Wi-Fi 数据已过期或不存在');
        }
      },
      fail: (err) => {
        wx.hideLoading();
        console.error("❌ 获取数据失败:", err);
        this.handleDataError('网络错误，请检查网络连接');
      }
    });
  },

  // 处理数据获取失败的情况
  handleDataError(message) {
    wx.showModal({
      title: '获取失败',
      content: message,
      showCancel: true,
      cancelText: '返回',
      confirmText: '重试',
      success: (res) => {
        if (res.confirm) {
          // 重新加载页面
          const pages = getCurrentPages();
          const currentPage = pages[pages.length - 1];
          const options = currentPage.options;
          this.onLoad(options);
        } else {
          // 返回上一页
          wx.navigateBack({
            delta: 1,
            fail: () => {
              wx.switchTab({
                url: '/pages/index/index'
              });
            }
          });
        }
      }
    });
  },
  connectWifi() {
    const { wifiName, wifiPassword } = this.data;
    // 显示加载动画
    wx.showLoading({
      title: '正在连接...',
    });
    console.log( wifiName, wifiPassword)
    wx.startWifi({
      success: (res) => {
        console.log("startWifi 成功：", res);
        wx.connectWifi({
          SSID: wifiName,
          password: wifiPassword,
          success: (res) => {
            console.log("connectWifi 成功：", res);
            wx.getConnectedWifi({
              success: (res) => {
                console.log("getConnectedWifi 成功：", res);
                if (res.wifi.SSID === wifiName) {
                  wx.showToast({
                    title: 'Wi-Fi 连接成功',
                    icon: 'success',
                    mask: true, // 显示遮罩
                  });
                } else {
                  wx.showToast({
                    title: '连接失败，请检查 Wi-Fi 名称和密码',
                    icon: 'none',
                  });
                }
              },
              fail: (err) => {
                console.error("getConnectedWifi 失败：", err);
                wx.showToast({
                  title: '无法获取连接状态，连接可能失败',
                  icon: 'none',
                });
              },
            });
          },
          fail: (err) => {
            console.error("connectWifi 失败：", err);
            if (err.errCode === 12002) {
              wx.showToast({
                title: 'Wi-Fi 密码错误，请检查后重试。',
                icon: 'none',
              });
            } else {
              this.handleWifiError(err.errCode);
            }
          },
          complete: () => {
            // 隐藏加载动画
            //wx.hideLoading();
          },
        });
      },
      fail: (err) => {
        console.error("startWifi 失败：", err.errMsg);
        wx.showToast({
          title: err.errMsg,
          icon: 'none',
          duration: 3000,
        });
        wx.hideLoading(); // 确保失败时也隐藏加载动画
      },
    });
  },
  handleWifiError(errCode) {
    let errMsg = '';
    switch (errCode) {
      case 12000:
        errMsg = '未初始化 Wi-Fi 模块，请重试。';
        break;
      case 12001:
        errMsg = '当前系统不支持相关能力。';
        break;
      case 12002:
        errMsg = 'Wi-Fi 密码错误，请检查后重试。';
        break;
      case 12003:
        errMsg = '连接超时，请靠近路由器重试。';
        break;
      case 12004:
        errMsg = '重复连接 Wi-Fi，请稍后重试。';
        break;
      case 12005:
        errMsg = '未打开 Wi-Fi 开关，请检查设备设置。';
        break;
      case 12006:
        errMsg = '未打开 GPS 定位开关，无法连接 Wi-Fi。';
        break;
      case 12007:
        errMsg = '用户拒绝授权连接 Wi-Fi。';
        break;
      case 12008:
        errMsg = '无效 SSID，请检查 Wi-Fi 名称。';
        break;
      case 12009:
        errMsg = '系统运营商配置拒绝连接 Wi-Fi。';
        break;
      case 12010:
        errMsg = '系统其他错误。';
        break;
      case 12011:
        errMsg = '操作过于频繁，请稍后重试。';
        break;
      case 12013:
        errMsg = '无法连接到目标 Wi-Fi，请检查网络状态。';
        break;
      case 12014:
        errMsg = '无效的 WEP/WPA 密码。';
        break;
      default:
        errMsg = `未知错误，错误码：${errCode}`;
        break;
    }
    console.error(`Wi-Fi 错误码：${errCode}, 错误信息：${errMsg}, 当前Wi-Fi名：${this.data.wifiName}`);
    wx.showToast({
      title: errMsg,
      icon: 'none',
      duration: 3000,
    });
  },// 设置分享内容
  onShareAppMessage: function() {
    return {
      title: 'Wi-Fi分享给你了，无需密码，直接点击连接！',// 分享的标题
      imageUrl: '/static/img/wifiShare.png', // 分享的图片
      success: function(res) {
        // 分享成功回调
        wx.showToast({
          title: '分享成功',
        });
        console.log('分享成功', res);  // 输出成功的返回信息
      },
      fail: function(err) {
        // 分享失败回调
        wx.showToast({
          title: '分享失败',
          icon: 'none',
        });
        console.log('分享失败', err);  // 输出失败的返回信息
      },
      complete: function() {
        console.log('分享完成');
      }
    };
  }
});
