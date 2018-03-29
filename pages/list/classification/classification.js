Page({

  /**
   * 页面的初始数据
   */
  data: {
    shoplist:[],
    page:1,
    pagesize:"10",
    goodstype:'',
    url:"https://e-shop.szrundao.com/WebApi/Public/picture/",
    nodata:true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var that=this;
    this.setData({
      goodstype:options.id
    })
    this.loadData(that);
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
    wx.showNavigationBarLoading()
    console.log("11111")
    var that = this;
    if (this.data.nodata && this.data.page>0){
      this.data.page--
    }else{
      this.data.page
    }
    this.setData({
      page: this.data.page,
      Pagpagesize: this.data.pagesize,
    })
    this.loadData(that,"2")    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this;
    if(this.data.nodata){
      this.data.page++
    }else{
      this.data.page
    }
    this.setData({
      page:this.data.page,
      Pagpagesize:this.data.pagesize,
    })
    this.loadData(that,"3")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  //根据商品类型请求商品列表
  loadData:function(that,num){
    wx.request({
      url: 'https://e-shop.szrundao.com/WebApi/ShopManager/GoodsListByType',
      data: {
        GoodsType: that.data.goodstype,
        Page: that.data.page,
        PageSize: that.data.pagesize
      },
      success: function (res) {
        console.log(res.data)
        if(res.data.status!=115){
          that.data.shoplist = res.data.data;
          that.data.nodata=true;
        }else{
          that.data.shoplist = that.data.shoplist;
          that.data.nodata=false;
          if(num=="3"){
            that.data.page --;
          } 
        }
        that.setData({
          shoplist: that.data.shoplist
        })
      },
      fail: function (error) {
        wx.showToast({
          title: error,
        })
      },
      complete: function () {
        wx.hideNavigationBarLoading() //完成停止加载
        wx.stopPullDownRefresh() //停止下拉刷新
        console.log(that.data.page)
      }
    }) 
  }
})