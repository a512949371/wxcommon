// pages/orderpreview/orderoreview.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    adddata:{
      username:"张三",
      userphone:"15288151487",
      addinfo:"云南省昆明市官渡区XXX路XXX号生命周期函数22"
    },
    ordershopdata:{
      id:"3",
      name:"监听页面加载",
      dec:"生命周期函数",
      price:354,
      img:"/pages/images/my-icon.png",
      buynum:1,
      freight:8
    },
    buyprice:0,
    couponsdata:{
      id:"2354",
      price:32
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.buyprice = parseFloat(this.data.ordershopdata.buynum * this.data.ordershopdata.price) + parseFloat(this.data.ordershopdata.freight);
    this.setData({
      buyprice: this.data.buyprice
    })
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
  //支付
  Pay:function(){
    
  }
  //选择新地址

})