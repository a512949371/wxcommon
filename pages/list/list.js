Page({

  /**
   * 页面的初始数据
   */
  data: {
    sortdata:'',
    url:"https://e-shop.szrundao.com/WebApi/Public/picture/" ,
    index:"0" 
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
    var that=this;
    wx.showLoading({
      title: '加载中。。。',
    })
    wx.request({
      url: 'https://e-shop.szrundao.com/WebApi/ShopManager/GoodsTypeList',
      success:function(res){
        that.setData({
          sortdata:res.data.data
        })
        console.log(res.data.data);
        wx.hideLoading()
      },
      fail:function(error){
        wx.showToast({
          title: error,
        })
      }
    })
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
  //点击分类加载相应商品类型
  Changecontent(event){
    this.setData({
      index:event.currentTarget.dataset.num
    })
  }
})