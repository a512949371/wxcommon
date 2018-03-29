Page({

  /**
   * 页面的初始数据
   */
  data: {
    logo:"../../pages/images/logo.png",
    phone:'',
    sms:'',
    smsStatus:true,
    time:30,
    smsText:"获取验证码"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  // 获取用户输入的值
  inputdata:function(e){
    if(e.currentTarget.dataset.id==1){
      this.setData({
        phone:e.detail.value
      })
    }
    if (e.currentTarget.dataset.id ==2) {
      this.setData({
        sms: e.detail.value
      })
    }
  },
  // 登录
  formSubmit:function(e){
    var that=this;
    if (!this.phoneTF()) { 
       wx.showToast({
         title: '手机号不正确,请重新输入',
         icon:"none",
         duration:2000
       })
    }else{
      wx.request({
        url: 'https://e-shop.szrundao.com/WebApi/UserManager/LoginWithSMS',
        data:{
          UserName:that.data.phone,
          SMSCode:that.data.sms
        },
        success:function(res){
          console.log(res.data);
          wx.setStorage({
            key: 'longtoken',
            data: encodeURIComponent(res.data.additional_data),
          })
          wx.setStorage({
            key: 'shorttoken',
            data: encodeURIComponent(res.data.data),
          })
          wx.switchTab({
            url: '/pages/index/index',
          })
        },
        fail:function(error){
          wx.showToast({
            title: error,
            icon: "none",
            duration: 2000
          })
        }
      })
    }
    
  },
  // 发送验证码
  sendsms:function(){
    var that=this;
    if(this.data.smsStatus){
      if (!this.phoneTF()) {
        wx.showToast({
          title: '手机号不正确,请重新输入',
          icon: "none",
          duration: 2000
        })
      } else {
        wx.request({
          url: 'https://e-shop.szrundao.com/WebApi/AuthManager/SendSMS',
          data: {
            mobile: that.data.phone
          },
          success: function (res) {
            console.log(res);
            that.setData({
              sms: "1"
            })
          },
          fail: function (error) {
            wx.showToast({
              title: error,
              icon: "none",
              duration: 2000
            })
          }
        })
       var ctime= setInterval(function () { that.sTime(ctime) }, 1000)
      }
    }
  },
  // 手机号判断
  phoneTF:function(){
    if ((/^1[34578]\d{9}$/.test(this.data.phone))) { 
      return true
    }else{
      return false
    }
  },
  // 计时器
  sTime:function(ctime){
    console.log(ctime)
    if (this.data.time>0){
      this.data.time--
      this.setData({
        time: this.data.time,
        smsText: this.data.time + "s",
        smsStatus:false
      })
    }
    else{
      clearInterval(ctime);
      this.setData({
        time: 30,
        smsText: "获取验证码",
        smsStatus:true
      })
    }
  }
})