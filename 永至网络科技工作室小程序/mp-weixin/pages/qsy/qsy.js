Page({
  data: {
    isUnlocked: false,  // 是否解锁
    passwordInput: '',  // 密码输入框内容
    password: 'lyz599..',  // 设置的密码
    unlockTime: null,    // 记录解锁时间
    title: '',           // 标题
    inputValue: '',      // 输入框内容
    urlList: [],         // 图片列表
    showTitle: false     // 是否显示标题
  },

  onLoad() {
    // 获取解锁时间
    const unlockTime = wx.getStorageSync('unlockTime');
    const currentTime = Date.now();

    // 如果解锁时间存在并且还在1天内
    if (unlockTime && currentTime - unlockTime < 24 * 60 * 60 * 1000) {
      this.setData({
        isUnlocked: true
      });
    }
  },

  // 输入密码
  onPasswordInput(e) {
    this.setData({
      passwordInput: e.detail.value
    });
  },

  // 解锁按钮点击事件
  onUnlock() {
    if (this.data.passwordInput === this.data.password) {
      // 密码正确，设置解锁状态，并记录解锁时间
      wx.setStorageSync('unlockTime', Date.now());  // 存储解锁时间
      this.setData({
        isUnlocked: true,
        passwordInput: ''
      });
    } else {
      wx.showToast({
        title: '密码错误',
        icon: 'none'
      });
    }
  },
  // 提交表单
  onSubmit() {
    const value = this.data.inputValue;
    if (value.trim()) {
      wx.showLoading({
        title: '提交中...',
      });

      wx.request({
        url: 'https://api.lau.plus/media/newapi.php',
        method: 'POST',
        header: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: {
          url: value,
          ios_version: '16.7.2',
          user: 'xcx',
          mac: 'xcx',
          clientid: 'xcx'
        },
        success: (res) => {
          wx.hideLoading();
          if (res.statusCode === 200) {
            const response = res.data;
            if (response.code === 200) {
              let urlListArray = []; // 创建一个数组来保存所有的url
              
              // 判断data.url_list字段的类型
              if (typeof response.data.url_list === 'string') {
                urlListArray.push(response.data.url_list); // 如果是字符串，直接添加到数组中
              } else if (Array.isArray(response.data.url_list)) {
                urlListArray = urlListArray.concat(response.data.url_list); // 如果是数组，展开并添加到数组中
              }

              // 将urlList存储到全局变量中
              this.setData({
                urlList: urlListArray,
                showTitle: true,
                title: response.data.title || '未提供标题'
              });

              wx.showToast({
                title: '提交成功',
                icon: 'success',
                duration: 2000
              });
            } else {
              wx.showToast({
                title: '请求失败',
                icon: 'none',
                duration: 2000
              });
            }
          }
        },
        fail: (err) => {
          wx.hideLoading();
          wx.showToast({
            title: '网络错误',
            icon: 'none',
            duration: 2000
          });
          console.error('网络错误：', err);
        }
      });
    } else {
      wx.showToast({
        title: '请输入内容',
        icon: 'none',
        duration: 2000
      });
    }
  },

  // 点击按钮触发下载操作
  onDownloadClick() {
    // 使用全局的urlList来触发下载
    this.downloadAllMedia(this.data.urlList);
  },

  // 下载所有媒体文件
  downloadAllMedia(urlListArray) {
    console.log('urlListArray类型:', Array.isArray(urlListArray));  // 检查是不是数组
    console.log('urlListArray内容:', urlListArray);

    if (!Array.isArray(urlListArray)) {
      console.error('urlListArray 不是数组!');
      return;  // 如果不是数组，直接返回
    }

    wx.showLoading({
      title: '保存中...',
      mask: true
    });

    // 遍历 urlListArray 中的所有链接
    urlListArray.forEach((url) => {
      // 默认尝试保存为图片
      this.saveFile(url, 'image');
    });

    wx.hideLoading(); // 隐藏加载提示
  },

  // 保存文件
  saveFile(url, type) {
    // 默认保存为图片
    if (type === 'image') {
      wx.downloadFile({
        url: url, // 下载图片文件
        success: (res) => {
          if (res.statusCode === 200) {
            wx.saveImageToPhotosAlbum({
              filePath: res.tempFilePath, // 使用下载后的文件路径直接保存图片
              success: () => {
                console.log('图片保存成功:', url);
                wx.showToast({
                  title: '图片保存成功',
                  icon: 'success',
                  duration: 2000
                });
              },
              fail: (err) => {
                console.error('图片保存失败:', err);
                // 如果保存图片失败，则尝试保存为视频
                this.saveFile(url, 'video');
              }
            });
          } else {
            wx.showToast({
              title: '下载图片失败',
              icon: 'none',
              duration: 2000
            });
          }
        },
        fail: (err) => {
          console.error('下载文件失败:', err);
          wx.showToast({
            title: '下载文件失败',
            icon: 'none',
            duration: 2000
          });
        }
      });
      wx.hideLoading(); // 隐藏加载提示
    }
    
    // 如果是视频，则保存为视频
    else if (type === 'video') {
      wx.downloadFile({
        url: url, // 下载视频文件
        success: (res) => {
          if (res.statusCode === 200) {
            wx.saveVideoToPhotosAlbum({
              filePath: res.tempFilePath, // 使用下载后的文件路径直接保存视频
              success: () => {
                console.log('视频保存成功:', url);
                wx.showToast({
                  title: '视频保存成功',
                  icon: 'success',
                  duration: 2000
                });
              },
              fail: (err) => {
                console.error('视频保存失败:', err);
                wx.showToast({
                  title: '保存视频失败',
                  icon: 'none',
                  duration: 2000
                });
              }
            });
          } else {
            wx.showToast({
              title: '下载视频失败',
              icon: 'none',
              duration: 2000
            });
          }
        },
        fail: (err) => {
          console.error('下载文件失败:', err);
          wx.showToast({
            title: '下载文件失败',
            icon: 'none',
            duration: 2000
          });
        }
      });
      wx.hideLoading(); // 隐藏加载提示
    }
    
  },

  // 清空按钮事件
  onClear() {
    this.setData({
      inputValue: '',
      title: '',
      showTitle: false,
      urlList: []
    });
  },

  // 复制标题按钮事件
  onCopyTitle() {
    wx.setClipboardData({
      data: this.data.title,
      success: () => {
        wx.showToast({
          title: '标题已复制',
          icon: 'success',
          duration: 2000
        });
      }
    });
  },

  // 粘贴按钮事件
  onPaste() {
    wx.getClipboardData({
      success: (res) => {
        this.setData({
          inputValue: res.data
        });
      }
    });
  }
});
