Page({
  data: {
    amount: '', // 收款金额
    qrCodeUrl: '', // 保存二维码URL
    pollingStatus: '', // 初始状态
    payTypes: ['扫码枪支付', '二维码支付'], // 显示的支付类型（中文）
    payTypesEnglish: ['pos', 'scan'], // 对应的支付类型（英文）
    selectedPayType: 'pos', // 默认支付类型（英文，pos表示扫码枪支付）
    selectedPayTypeDisplay: '扫码枪支付', // 默认显示中文支付类型

    qrPayTypes: ['微信', '支付宝'], // 二维码支付方式（微信/支付宝）
    selectedQrPayType: 'wechat', // 默认选择微信支付
    selectedQrPayTypeDisplay: '微信', // 默认显示支付方式
    isQrPaySelected: false // 是否显示二维码支付方式选择框
  },

  // 选择支付类型
  onSelectPayType(e) {
    const selectedIndex = e.detail.value; // 获取选择的索引
    this.setData({
      selectedPayType: this.data.payTypesEnglish[selectedIndex], // 设置英文支付类型
      selectedPayTypeDisplay: this.data.payTypes[selectedIndex] // 设置中文显示的支付类型
    });

    // 如果选择二维码支付，则显示选择微信或支付宝的选择框
    if (this.data.selectedPayType === 'scan') {
      this.setData({
        isQrPaySelected: true
      });
    } else {
      this.setData({
        isQrPaySelected: false,
        selectedQrPayType: 'wechat', // 默认选择微信
        selectedQrPayTypeDisplay: '微信' // 默认显示微信
      });
    }
  },

  // 选择二维码支付方式（微信/支付宝）
  onSelectQrPayType(e) {
    const selectedIndex = e.detail.value;
    const selectedPayType = this.data.qrPayTypes[selectedIndex];
    this.setData({
      selectedQrPayType: selectedPayType === '微信' ? 'wechat' : 'alipay', // 根据选择更新支付类型
      selectedQrPayTypeDisplay: selectedPayType // 显示的支付方式名称
    });
  },

  // 处理键盘输入
  onKeyPress(e) {
    let value = e.currentTarget.dataset.value;
    let amount = this.data.amount;

    if (value === '⌫') {
        amount = amount.slice(0, -1); // 删除最后一个字符
    } else if (value === '.') {
        if (amount.includes('.')) return; // 防止输入多个小数点
        if (amount === '') amount = '0'; // 如果金额为空，则在小数点前添加0
        amount += value; // 添加小数点
    } else {
        if (amount.includes('.') && amount.split('.')[1].length >= 2) return; // 限制小数点后最多两位
        if (amount.length < 10) amount += value; // 限制最多输入10个字符
    }

    this.setData({ amount }); // 更新金额
  },

  // 确认支付
  onConfirm() {
    if (!this.data.amount) {
        wx.showToast({ title: '请输入金额', icon: 'none' });
        return;
    }

    if (this.data.amount == 0) {
        wx.showToast({ title: '金额非法', icon: 'none' });
        return;
    }

    // **扫码枪支付（POS）**
    if (this.data.selectedPayType === 'pos') {
        wx.scanCode({
            success: (res) => {
                console.log('扫码结果:', res.result);
                const authCode = res.result;

                wx.request({
                    url: 'https://pay.znnu.com/api.php',
                    method: 'POST',
                    data: {
                        auth_code: authCode,
                        total_amount: this.data.amount,
                        do: 'pos' // 指定POS支付
                    },
                    header: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    success: (response) => {
                      if(response.data.code !==0){
                        console.log('支付请求成功:', response.data);
                        if (response.data.trade_state === 'USERPAYING') {
                            console.log('输入密码中:', response.data);
                            this.pollOrderStatus(response.data.out_trade_no);
                        } else {
                            wx.showToast({ title: '支付成功', icon: 'success' });
                        }
                      }else{
                        wx.showToast({ title: response.data.msg, icon: 'none' });
                      }
                    },
                    fail: (error) => {
                        console.error('请求失败:', error);
                        wx.showToast({ title: '支付请求失败', icon: 'none' });
                    }
                });
            },
            fail: (err) => {
                console.error('扫码失败:', err);
                wx.showToast({ title: '扫码失败', icon: 'none' });
            }
        });
    }

    // **二维码支付（SCAN）**
    else if (this.data.selectedPayType === 'scan') {
        wx.request({
            url: 'https://pay.znnu.com/api.php',
            method: 'POST',
            data: {
                total_amount: this.data.amount,
                do: 'scan',
                type: this.data.selectedQrPayType // 根据选择的支付方式传递 'wechat' 或 'alipay'
            },
            header: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            success: (response) => {
                console.log('扫码支付返回:', response.data);
              if(response.data.code !==0){
                if (response.data.code_url) {
                    // 使用二维码生成接口
                    const qrCodeUrl = `https://api.znnu.com/qrcode/?text=${encodeURIComponent(response.data.code_url)}&size=300`;
                    this.setData({ qrCodeUrl: qrCodeUrl });
                    wx.previewImage({
                        current: qrCodeUrl,  // 当前显示的二维码图片
                        urls: [qrCodeUrl]    // 图片链接数组
                    });
                } else {
                    wx.showToast({ title: '获取支付二维码失败', icon: 'none' });
                }
              }else{
                wx.showToast({ title: response.data.msg, icon: 'none' });
              }
            },
            fail: (error) => {
                console.error('扫码支付请求失败:', error);
                wx.showToast({ title: '扫码支付请求失败', icon: 'none' });
            }
        });
    }
  },

  /**
   * 轮询查询订单状态
   */
  pollOrderStatus(out_trade_no) {
    let maxRetries = 60; // 最多查询60次（60秒）
    let retryCount = 0;
    let interval = setInterval(() => {
      if (retryCount >= maxRetries) {
        clearInterval(interval);
        this.setData({ pollingStatus: '支付超时，请重新支付' });
        wx.showToast({ title: '支付超时', icon: 'none' });
        return;
      }
  
      wx.request({
        url: 'https://pay.znnu.com/api.php',
        method: 'POST',
        data: { out_trade_no: out_trade_no, do: 'query' },
        header: { 'Content-Type': 'application/x-www-form-urlencoded' },
        success: (res) => {
          console.log('订单查询结果:', res.data);
  
          // 更新前端显示状态
          let statusMessage = '';
          switch (res.data.trade_state) {
            case 'SUCCESS':
              statusMessage = '支付成功 🎉';
              clearInterval(interval);
              wx.showToast({ title: '支付成功', icon: 'success' });
              break;
            case 'USERPAYING':
              statusMessage = '用户支付中，请稍候... ⏳';
              break;
            case 'NOTPAY':
              statusMessage = '订单未支付，请扫码支付';
              break;
            case 'CLOSED':
              statusMessage = '订单已关闭 ❌';
              clearInterval(interval);
              break;
            default:
              statusMessage = '支付状态未知';
              clearInterval(interval);
              break;
          }
  
          this.setData({ pollingStatus: statusMessage });
        },
        fail: (err) => {
          console.error('订单查询失败:', err);
          this.setData({ pollingStatus: '查询失败，请稍后再试' });
        }
      });
  
      retryCount++;
    }, 2000); // 每秒查询一次
  }
});
