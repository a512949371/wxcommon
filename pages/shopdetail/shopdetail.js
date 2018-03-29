var WxParse = require('../../wxParse/wxParse.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img:"../images/shop1.jpg",
    imgSrc:"https://e-shop.szrundao.com/WebApi/Public/picture/",
    imgdata:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.request({
      url: 'https://e-shop.szrundao.com/WebApi/ShopManager/GoodsDetail/'+options.id,
      success:function(res){
        that.setData({
          imgdata:res.data.data[0]
        })
        WxParse.wxParse('shopdetail', 'html', res.data.data[0].goods_info_html,that,0)
        console.log(res.data.data[0])
      },
      error:function(error){

      }
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
  //加入购物车
  Cart:function(){
    wx.getStorage({
      key: 'userid',
      success: function(res) {
        
      },
    })
  },
  //立即购买
  Buy:function(){
    wx.navigateTo({
      url: '/pages/orderpreview/orderoreview',
    })
  }
})