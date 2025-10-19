// index.js
Page({
  data: {
    // 图片相关
    selectedImages: [],
    
    // 水印类型
    watermarkType: 'wm1', // 默认选择类型1
    
    // 处理状态
    processing: false,
    processedCount: 0,
    totalCount: 0,
    progressPercent: 0,
    
    // 云端处理配置
    apiUrl: 'https://api.lau.plus/watermark/do.php'
  },

  onLoad() {
    // 页面加载时显示欢迎提示
  },

  // 选择要处理的图片
  selectImages() {
    wx.chooseMedia({
      count: 9, // 最多选择9张
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      sizeType: ['original'], // 默认勾选原图
      success: async (res) => {
        const newImages = res.tempFiles.map(file => file.tempFilePath);
        const totalImages = [...this.data.selectedImages, ...newImages];
        
        // 限制最多20张图片
        if (totalImages.length > 20) {
          wx.showToast({
            title: '最多选择20张图片',
            icon: 'none'
          });
          return;
        }
        
        // 保留所有图片
        const finalImages = [...this.data.selectedImages, ...newImages];
        
        this.setData({
          selectedImages: finalImages
        });
        
        // 显示选择结果
        wx.showToast({
          title: `已选择${finalImages.length}张原图`,
          icon: 'success'
        });
      },
      fail: (err) => {
        // 用户取消选择不显示错误
        if (err.errMsg && !err.errMsg.includes('cancel')) {
          console.error('选择图片失败:', err);
          wx.showToast({
            title: '选择失败',
            icon: 'error'
          });
        }
      }
    });
  },

  // 移除图片
  removeImage(e) {
    const index = e.currentTarget.dataset.index;
    const images = [...this.data.selectedImages];
    images.splice(index, 1);
    
    this.setData({
      selectedImages: images
    });
    
    if (images.length === 0) {
      wx.showToast({
        title: '请选择图片',
        icon: 'none'
      });
    }
  },

  // 清空所有图片
  clearAllImages() {
    wx.showModal({
      title: '确认清空',
      content: '确定要清空所有已选择的图片吗？',
      success: (res) => {
        if (res.confirm) {
          this.setData({
            selectedImages: []
          });
          wx.showToast({
            title: '已清空',
            icon: 'success'
          });
        }
      }
    });
  },

  // 选择水印类型
  selectWatermarkType(e) {
    const type = e.currentTarget.dataset.type;
    this.setData({
      watermarkType: type
    });
    
    wx.showToast({
      title: `已选择${type === 'wm1' ? '类型1' : '类型2'}`,
      icon: 'success',
      duration: 1000
    });
  },

  // 开始批量处理
  async startProcess() {
    if (this.data.selectedImages.length === 0 || this.data.processing) {
      wx.showToast({
        title: '请先选择图片',
        icon: 'none'
      });
      return;
    }

    // 请求保存到相册权限
    try {
      await this.requestSavePermission();
    } catch (err) {
      wx.showToast({
        title: '需要相册权限才能保存',
        icon: 'error'
      });
      return;
    }

    // 开始处理，显示进度条
    this.setData({
      processing: true,
      processedCount: 0,
      totalCount: this.data.selectedImages.length,
      progressPercent: 0
    });

    // 开始批量处理
    await this.batchProcessImages();
  },

  // 请求保存到相册权限
  requestSavePermission() {
    return new Promise((resolve, reject) => {
      wx.getSetting({
        success: (res) => {
          if (res.authSetting['scope.writePhotosAlbum']) {
            resolve();
          } else {
            wx.authorize({
              scope: 'scope.writePhotosAlbum',
              success: resolve,
              fail: () => {
                wx.showModal({
                  title: '需要相册权限',
                  content: '需要获取相册权限来保存处理后的图片',
                  confirmText: '去设置',
                  success: (modalRes) => {
                    if (modalRes.confirm) {
                      wx.openSetting({
                        success: (settingRes) => {
                          if (settingRes.authSetting['scope.writePhotosAlbum']) {
                            resolve();
                          } else {
                            reject();
                          }
                        },
                        fail: reject
                      });
                    } else {
                      reject();
                    }
                  }
                });
              }
            });
          }
        },
        fail: reject
      });
    });
  },

  // 批量处理图片 - 云端处理版本
  async batchProcessImages() {
    const images = this.data.selectedImages;
    let successCount = 0;
    let failCount = 0;
    const failedImages = [];
    let lastErrorMsg = ''; // 记录最后一个错误信息

    try {
      for (let i = 0; i < images.length; i++) {
        try {
          await this.processImageWithCloud(images[i], i + 1);
          successCount++;
          
        } catch (err) {
          console.error(`处理第${i + 1}张图片失败:`, err);
          failCount++;
          failedImages.push(i + 1);
          lastErrorMsg = err.message || '未知错误'; // 记录错误信息
        }

        // 更新进度
        const processedCount = i + 1;
        const progressPercent = Math.round((processedCount / images.length) * 100);
        
        this.setData({
          processedCount,
          progressPercent
        });

        // 添加小延迟避免请求过快
        await this.sleep(300);
      }
    } catch (error) {
      console.error('批量处理过程中发生错误:', error);
    } finally {
      // 处理完成，隐藏进度条
      this.setData({
        processing: false
      });

      // 显示处理结果
      if (failCount === 0) {
        // 全部成功 - 使用 toast
        wx.showToast({
          title: `已保存${successCount}张图片`,
          icon: 'success',
          duration: 2500
        });
        // 延迟清空选择的图片
        setTimeout(() => {
          this.setData({
            selectedImages: []
          });
        }, 2500);
      } else if (successCount > 0) {
        // 部分成功 - 使用弹窗显示详细信息
        wx.showModal({
          title: '处理完成',
          content: `成功处理 ${successCount} 张图片\n失败 ${failCount} 张图片\n\n错误信息：${lastErrorMsg}`,
          showCancel: false,
          confirmText: '知道了',
          success: () => {
            // 清空已成功处理的图片
            this.setData({
              selectedImages: []
            });
          }
        });
      } else {
        // 全部失败 - 使用弹窗显示错误信息
        wx.showModal({
          title: '处理失败',
          content: `所有图片处理失败\n\n错误信息：${lastErrorMsg}`,
          showCancel: false,
          confirmText: '知道了'
        });
      }
    }
  },

  // 云端处理单张图片
  processImageWithCloud(imagePath, imageIndex) {
    return new Promise((resolve, reject) => {
      // 使用POST方式上传图片到云端处理
      wx.uploadFile({
        url: this.data.apiUrl,
        filePath: imagePath,
        name: 'file',
        formData: {
          'watermark': this.data.watermarkType // 添加水印类型参数
        },
        timeout: 60000, // 60秒超时
        success: (uploadRes) => {
          try {
            console.log('云端响应:', uploadRes.data);
            const response = JSON.parse(uploadRes.data);
            
            if (response.success) {
              // 云端处理成功，下载处理后的图片
              this.downloadAndSaveImage(response.data.file_url, imageIndex)
                .then(resolve)
                .catch(reject);
            } else {
              reject(new Error('云端处理失败，请稍后重试'));
            }
          } catch (error) {
            console.error('解析云端响应失败:', error, '原始响应:', uploadRes.data);
            reject(new Error('解析云端响应失败'));
          }
        },
        fail: (error) => {
          console.error(`上传第${imageIndex}张图片失败:`, error);
          reject(new Error(`上传失败: ${error.errMsg || '网络错误'}`));
        }
      });
    });
  },

  // 下载并保存图片到相册
  downloadAndSaveImage(imageUrl, imageIndex) {
    return new Promise((resolve, reject) => {
      // 下载图片
      wx.downloadFile({
        url: imageUrl,
        timeout: 30000, // 30秒超时
        success: (downloadRes) => {
          if (downloadRes.statusCode === 200) {
            // 保存到相册
            wx.saveImageToPhotosAlbum({
              filePath: downloadRes.tempFilePath,
              success: () => {
                console.log(`第${imageIndex}张图片保存成功`);
                resolve();
              },
              fail: (saveError) => {
                console.error(`保存第${imageIndex}张图片失败:`, saveError);
                reject(new Error(`保存失败: ${saveError.errMsg || '未知错误'}`));
              }
            });
          } else {
            reject(new Error(`下载失败: HTTP ${downloadRes.statusCode}`));
          }
        },
        fail: (downloadError) => {
          console.error(`下载第${imageIndex}张图片失败:`, downloadError);
          reject(new Error(`下载失败: ${downloadError.errMsg || '网络错误'}`));
        }
      });
    });
  },




  // 延迟函数
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },

  // 获取图片信息的辅助函数
  getImageInfo(imagePath) {
    return new Promise((resolve, reject) => {
      wx.getImageInfo({
        src: imagePath,
        success: resolve,
        fail: reject
      });
    });
  },

  // 页面卸载时清理资源
  onUnload() {
    // 如果正在处理，停止处理
    if (this.data.processing) {
      this.setData({
        processing: false
      });
    }
  }
});
