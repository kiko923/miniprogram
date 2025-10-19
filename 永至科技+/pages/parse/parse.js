Page({
  data: {
    isDarkMode: false,
    url: '',
    selectedImages: [],
    selectedCount: 0,
    isAllSelected: false
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
  },
  onInput(e) {
    this.setData({
      url: e.detail.value
    });
  },
  clearInput: function () {
    this.setData({
      url: "",
      result: null,
      loading: !1,
      showImageCountTip: !1,
      showShareModal: !1,
      showErrorModal: !1,
      errorUrl: ""
    })
  },
  pasteContent: function () {
    var e = this;
    wx.getClipboardData({
      success: function (t) {
        if (t.data) {
          var r = e.extractUrl(t.data);
          r ? e.setData({
            url: r
          }) : wx.navigateTo({
            url: "/pages/guide/guide"
          })
        }
      },
      fail: function (e) {
        console.error("Paste error:", e), wx.showToast({
          title: "粘贴失败",
          icon: "none"
        })
      }
    })
  },
  extractUrl: function (e) {
    if (!e) return "";
    if (console.log("原始剪贴板内容:", e), e.includes("youtube.com") || e.includes("youtu.be")) {
      var t = e.match(/https?:\/\/(?:www\.)?(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)[^&\s]+(?:[&?][^\s]*)*/);
      if (t && t[0]) return console.log("提取到YouTube链接:", t[0]), t[0]
    }
    if (e.includes("instagram.com")) {
      var r = e.match(/https?:\/\/(?:www\.)?instagram\.com\/[^\/\s]+(?:\/[^\/\s]*)*(?:\?[^\s]*)?/);
      if (r && r[0]) return console.log("提取到Instagram链接:", r[0]), r[0]
    }
    if (e.includes("tiktok.com")) {
      var a = e.match(/https?:\/\/(?:www\.)?(?:tiktok\.com\/(?:@[^\/\s]+\/video\/|v\/)|vm\.tiktok\.com\/)[^\/\s]+(?:\/[^\/\s]*)*(?:\?[^\s]*)?/);
      if (a && a[0]) return console.log("提取到TikTok链接:", a[0]), a[0]
    }
    if (e.includes("video.weibo.com")) {
      var n = e.match(/https?:\/\/video\.weibo\.com\/show\?fid=[^&\s]+(?:&[^\s]*)?/);
      if (n && n[0]) return console.log("提取到微博视频链接:", n[0]), n[0]
    }
    if (e.includes("v.qq.com") || e.includes("m.v.qq.com")) {
      var s = e.match(/https?:\/\/[mv]\.qq\.com\/(?:play\/play\.html\?vid=|x\/page\/|)[^&\s]+(?:&[^\s]*)?/);
      if (s && s[0]) return console.log("提取到腾讯视频链接:", s[0]), s[0]
    }
    if (e.includes("xhslink.com")) {
      var o = e.match(/https?:\/\/(?:www\.)?xhslink\.com\/[a-zA-Z0-9\/\-_]+/);
      if (o && o[0]) return console.log("提取到小红书链接:", o[0]), o[0]
    }
    if (e.includes("douyin.com")) {
      var i = e.match(/https?:\/\/(?:www\.)?douyin\.com\/[^\/\s]+(?:\/[^\/\s]*)*(?:\?[^\s]*)?/);
      if (i && i[0]) return console.log("提取到抖音链接:", i[0]), i[0]
    }
    if (e.includes("kuaishou.com")) {
      var c = e.match(/https?:\/\/(?:www\.)?kuaishou\.com\/[^\/\s]+(?:\/[^\/\s]*)*(?:\?[^\s]*)?/);
      if (c && c[0]) return console.log("提取到快手链接:", c[0]), c[0]
    }
    if (e.includes("dw4.co")) {
      var l = e.match(/https?:\/\/(?:www\.)?dw4\.co\/[a-zA-Z0-9\/\-_]+/);
      if (l && l[0]) return console.log("提取到得物链接:", l[0]), l[0]
    }
    if (e.includes("twitter.com") || e.includes("x.com")) {
      var u = e.match(/https?:\/\/(?:www\.)?(?:twitter\.com|x\.com)\/[^\/\s]+(?:\/[^\/\s]*)*(?:\?[^\s]*)?/);
      if (u && u[0]) return console.log("提取到Twitter/X链接:", u[0]), u[0]
    }
    if (e.includes("threads.net")) {
      var d = e.match(/https?:\/\/(?:www\.)?threads\.net\/[^\/\s]+(?:\/[^\/\s]*)*(?:\?[^\s]*)?/);
      if (d && d[0]) return console.log("提取到Threads链接:", d[0]), d[0]
    }
    var h = e.match(/https?:\/\/[^\s,，。；：'"!?、]+/);
    if (h && h.length > 0) {
      var m = h[0];
      return m = m.replace(/[.,;:'"!?，。；：'""！？、]$/, ""), console.log("提取到的 URL:", m), m
    }
    return ""
  },
  goToFaq: function () {
    wx.navigateTo({
      url: "/pages/faq/faq"
    })
  },
  goToHistory: function () {
    wx.showToast({
      title: '开发中',
      icon: 'none'
    });
  },
  handleActionBtn() {
        this.data.url ? this.clearInput() :this.pasteContent()

  },
  copyShortcutLink: function () {
    wx.setClipboardData({
      data: "https://link3.cc/yionchi",
      success: function () {
        wx.showToast({
          title: "链接已复制",
          icon: "success"
        })
      }
    })
  },
  startParse() {
    if (!this.data.url) {
      wx.showToast({
        title: '请输入视频链接',
        icon: 'none'
      });
      return;
    }
    
    wx.showLoading({
      title: '解析中...'
    });

    wx.request({
      url: 'https://api.znnu.com/media/new_xcx_api.php',
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {
        openid: this.data.openid,
        url: this.data.url
      },
      success: (res) => {
        wx.hideLoading();
        if (res.data && res.data.data && res.data.data.url_list) {
          var num = Array.isArray(res.data.data.url_list) ? res.data.data.url_list.length : 1;
            wx.showToast({
              title: '解析成功 共' + num + '个媒体',
              icon: 'none'
            });
          // 更新页面显示状态
          this.setData({
            result: {
              data: {
                type: res.data.data.type || 'images',
                url_list: Array.isArray(res.data.data.url_list) ? res.data.data.url_list : [res.data.data.url_list],
                title: res.data.data.title || '解析结果',
                cover: res.data.data.cover || ''  // 确保封面URL正确存储
              }
            }
          });
          
          // 初始化图片选择状态
          if (res.data.data.url_list.length > 1) {
            const selectedImages = new Array(res.data.data.url_list.length).fill(false);
            this.setData({
              selectedImages,
              selectedCount: 0,
              isAllSelected: false
            });
          }
        } else {
          wx.showModal({
            title: '提示',
            content: res.data.msg || '解析失败，请重试',
            showCancel: false
          });
        }
      },
      fail: (err) => {
        wx.hideLoading();
        wx.showModal({
          title: '提示',
          content: '网络请求失败，请重试',
          showCancel: false
        });
      }
    });
  },

  // 尝试保存为图片
  async tryImageSave(filePath) {
    return new Promise((resolve, reject) => {
      wx.saveImageToPhotosAlbum({
        filePath: filePath,
        success: resolve,
        fail: reject
      });
    });
  },

  // 尝试保存为视频
  async tryVideoSave(filePath) {
    return new Promise((resolve, reject) => {
      wx.saveVideoToPhotosAlbum({
        filePath: filePath,
        success: resolve,
        fail: reject
      });
    });
  },

  // 处理一键保存按钮点击
  saveAllContent() {
    if (!this.data.result || !this.data.result.data || !this.data.result.data.url_list) {
      wx.showToast({
        title: '没有可保存的内容',
        icon: 'none'
      });
      return;
    }

    let urlsToSave = [];
    if (this.data.result.data.url_list.length > 1) {
      // 多图片模式：只保存选中的图片
      urlsToSave = this.data.result.data.url_list.filter((url, index) => this.data.selectedImages[index]);
      console.log('选中的图片数量:', this.data.selectedCount);
      console.log('要保存的URL数量:', urlsToSave.length);
      if (urlsToSave.length === 0) {
        wx.showToast({
          title: '请先选择要保存的图片',
          icon: 'none'
        });
        return;
      }
    } else {
      // 单图片/视频模式：保存全部
      urlsToSave = this.data.result.data.url_list;
    }

    this.saveMediaToAlbum(urlsToSave);
  },

  // 保存媒体文件到相册
  saveMediaToAlbum(urlList) {
    wx.showLoading({
      title: '保存中...'
    });

    let savedCount = 0;
    const totalCount = urlList.length;
    console.log('开始保存，总数量:', totalCount);

    const savePromises = urlList.map((url, index) => {
      return new Promise((resolve, reject) => {
        wx.downloadFile({
          url: url,
          success: async (res) => {
            if (res.statusCode === 200) {
              const contentType = res.header['Content-Type'] || res.header['content-type'] || '';
              const isVideo = contentType.includes('video/');
              
              try {
                if (isVideo) {
                  await this.tryVideoSave(res.tempFilePath);
                } else {
                  try {
                    await this.tryImageSave(res.tempFilePath);
                  } catch (imageError) {
                    console.error('保存图片失败，尝试保存为视频:', imageError);
                    await this.tryVideoSave(res.tempFilePath);
                  }
                }
                resolve();
              } catch (error) {
                console.error('保存失败:', error);
                reject(error);
              }
            } else {
              console.error('下载文件失败:', res);
              reject(new Error('下载失败'));
            }
          },
          fail: (err) => {
            console.error('下载文件失败:', err);
            reject(err);
          }
        });
      }).finally(() => {
        savedCount++;
        this.checkSaveComplete(savedCount, totalCount);
      });
    });

    // 使用Promise.all确保所有文件都被处理
    Promise.all(savePromises).catch(error => {
      console.error('部分文件保存失败:', error);
    });
  },

  // 检查是否所有文件都保存完成
  checkSaveComplete(savedCount, totalCount) {
    if (savedCount === totalCount) {
      wx.hideLoading();
      wx.showModal({
        title: '提示',
        content: '已保存到相册',
        showCancel: false
      });
    }
  },

  showCommonProblems() {
    wx.showModal({
      title: '常见问题',
      content: '1. 支持平台：抖音、快手、小红书等\n2. 复制视频分享链接即可解析\n3. 如遇问题请重试',
      showCancel: false
    });
  },

  showHistory() {
    wx.showToast({
      title: '开发中。。。',
      icon: 'none'
    });
  },

  // 处理全选/取消全选
  toggleSelectAll() {
    if (!this.data.result || !this.data.result.data || !this.data.result.data.url_list) {
      return;
    }

    const newIsAllSelected = !this.data.isAllSelected;
    const newSelectedImages = new Array(this.data.result.data.url_list.length).fill(newIsAllSelected);
    
    this.setData({
      isAllSelected: newIsAllSelected,
      selectedImages: newSelectedImages,
      selectedCount: newIsAllSelected ? this.data.result.data.url_list.length : 0
    });
  },

  // 处理单个图片选择
  toggleSelectImage(e) {
    const index = e.currentTarget.dataset.index;
    if (typeof index !== 'number' || !this.data.selectedImages) {
      return;
    }

    const newSelectedImages = [...this.data.selectedImages];
    newSelectedImages[index] = !newSelectedImages[index];

    const newSelectedCount = newSelectedImages.filter(selected => selected).length;
    const newIsAllSelected = newSelectedCount === this.data.result.data.url_list.length;

    this.setData({
      selectedImages: newSelectedImages,
      selectedCount: newSelectedCount,
      isAllSelected: newIsAllSelected
    });
  },

  // 保存封面图
  saveCover() {
    if (!this.data.result || !this.data.result.data || !this.data.result.data.cover) {
      wx.showToast({
        title: '没有封面可保存',
        icon: 'none'
      });
      return;
    }

    wx.showLoading({
      title: '保存中...'
    });

    wx.downloadFile({
      url: this.data.result.data.cover,
      success: async (res) => {
        if (res.statusCode === 200) {
          try {
            await this.tryImageSave(res.tempFilePath);
            wx.showToast({
              title: '封面已保存',
              icon: 'success'
            });
          } catch (error) {
            console.error('保存封面失败:', error);
            wx.showToast({
              title: '保存失败',
              icon: 'none'
            });
          }
        } else {
          wx.showToast({
            title: '下载失败',
            icon: 'none'
          });
        }
      },
      fail: (err) => {
        console.error('下载封面失败:', err);
        wx.showToast({
          title: '下载失败',
          icon: 'none'
        });
      },
      complete: () => {
        wx.hideLoading();
      }
    });
  },

  // 复制文本内容
  copyText(e) {
    const text = e.currentTarget.dataset.text;
    if (!text) {
      wx.showToast({
        title: '没有可复制的内容',
        icon: 'none'
      });
      return;
    }

    wx.setClipboardData({
      data: text,
      success: () => {
        wx.showToast({
          title: '复制成功',
          icon: 'success'
        });
      },
      fail: () => {
        wx.showToast({
          title: '复制失败',
          icon: 'none'
        });
      }
    });
  }
}); 