import Base64 from "base64.js";
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
    // 检查是否传入了 scene 参数
    if (options.scene) {
      console.log("使用 scene 参数:", options.scene);
      const decodedScene = decodeURIComponent(options.scene); // 解码 scene 参数
      console.log("解码后的 scene 参数:", decodedScene);
  
      // 解析 scene 参数中的 ssid 和 password
      const params = this.parseSceneParams(decodedScene);
  
      // 尝试兼容多个参数名称
      const wifiName = params.s || params.ssid; // 支持 s 或 ssid
      const wifiPassword = params.p || params.pwd; // 支持 p 或 pwd
  
      if (wifiName && wifiPassword) {
        this.setData({
          wifiName: wifiName,
          wifiPassword: wifiPassword,
        });
        console.log("使用 scene 参数传入的 Wi-Fi 名称和密码:", wifiName, wifiPassword);
      } else {
        console.log("无法从 scene 参数解析出 Wi-Fi 名称和密码");
      }
    } else if (options.data) {
      console.log("收到 data 参数:", options.data);
  
      var str = options.data;
      let base64 = new Base64();
  
      // 解密 base64 字符串
      let allData = base64.decode(str.toString());
      console.log("解码后的 allData 内容:", allData);
      console.log("allData 类型:", typeof allData);
      const regex = /"ssid":"([^"]+)","password":"([^"]+)"/;
      const matches = allData.match(regex);

      if (matches) {
        const ssid = matches[1];      // "92123"
        const password = matches[2];  // "13809631951"

        this.setData({
          wifiName: ssid,
          wifiPassword: password,
        });
        console.log("SSID:", ssid);
        console.log("Password:", password);
      } else {
        console.log("没有匹配到数据");
      }
    } else {
      // 如果没有 scene，也没有 ssid 和 password 参数，则使用默认值
      console.log("使用默认的 Wi-Fi 名称和密码:", this.data.wifiName, this.data.wifiPassword);
    }
  },
  
  
  parseSceneParams(scene) {
    const params = {};
    if (!scene) {
      console.error("传入的 scene 参数为空");
      return params;
    }
    const pairs = scene.split("&"); // 按照 & 分割参数
    pairs.forEach(pair => {
      const [key, value] = pair.split("=");
      if (key && value) {
        params[key] = decodeURIComponent(value); // 解码并处理特殊字符
      }
    });
    console.log("解析后的 scene 参数:", params);
    return params;
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
