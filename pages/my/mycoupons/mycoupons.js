// pages/my/mycoupons/mycoupons.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    couponTF:0,
    coupondata:'',
    coupondatao: [{
      img: '/pages/images/icon-shopall.png',
      couponname: "满100减50",
      coupontype: "所有商品可用",
      couponstarttime: "2018-3-11",
      couponendtime:"2018-3-21",
      couponid: "2352",
      couponsort: "1"
    },
    {
      img: '/pages/images/icon-shopcl.png',
      couponname: "满100减80",
      coupontype: "仅限日常用品类商品",
      couponstarttime: "2018-3-21",
      couponendtime: "2018-5-21",
      couponid: "2352",
      couponsort: "2"
    },
    {
      img: '/pages/images/icon-shopall.png',
      couponname: "满30减10",
      coupontype: "所有商品可用",
      couponstarttime: "2018-3-21",
      couponendtime: "2018-5-21",
      couponid: "2352",
      couponsort: "1"
    },
    {
      img: '/pages/images/icon-shopdey.png',
      couponname: "满30减10",
      coupontype: "所有商品可用",
      couponstarttime: "2018-3-21",
      couponendtime: "2018-5-21",
      couponid: "2352",
      couponsort: "3"
    } ,
    {
      img: '/pages/images/icon-shopdey.png',
      couponname: "满30减10",
      coupontype: "所有商品可用",
      couponstarttime: "2018-3-21",
      couponendtime: "2018-5-21",
      couponid: "2352",
      couponsort: "3"
    }],
    coupondatat: [{
      img: '/pages/images/icon-shopcl.png',
      couponname: "满100减50",
      coupontype: "所有商品可用",
      couponstarttime: "2018-3-11",
      couponendtime: "2018-3-21",
      couponid: "2352",
      couponsort: "2"
    },
    {
      img: '/pages/images/icon-shopcl.png',
      couponname: "满100减80",
      coupontype: "仅限日常用品类商品",
      couponstarttime: "2018-3-21",
      couponendtime: "2018-5-21",
      couponid: "2352",
      couponsort: "2"
    },
    {
      img: '/pages/images/icon-shopcl.png',
      couponname: "满30减10",
      coupontype: "所有商品可用",
      couponstarttime: "2018-3-21",
      couponendtime: "2018-5-21",
      couponid: "2352",
      couponsort: "2"
    }],
    coupondatah: [{
      img: '/pages/images/icon-shopall.png',
      couponname: "满100减50",
      coupontype: "所有商品可用",
      couponstarttime: "2018-3-11",
      couponendtime: "2018-3-21",
      couponid: "2352",
      couponsort: "1"
    },
    {
      img: '/pages/images/icon-shopall.png',
      couponname: "满100减80",
      coupontype: "仅限日常用品类商品",
      couponstarttime: "2018-3-21",
      couponendtime: "2018-5-21",
      couponid: "2352",
      couponsort: "1"
    },
    {
      img: '/pages/images/icon-shopall.png',
      couponname: "满30减10",
      coupontype: "所有商品可用",
      couponstarttime: "2018-3-21",
      couponendtime: "2018-5-21",
      couponid: "2352",
      couponsort: "1"
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      coupondata: this.data.coupondatao
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
  //选项卡切换
  Changenav:function(e){
    this.data.couponTF=e.currentTarget.dataset.index;
    this.setData({
      couponTF: this.data.couponTF
    })
    if (e.currentTarget.dataset.index==0){
      this.setData({
        coupondata: this.data.coupondatao
      })
    }
    if (e.currentTarget.dataset.index == 1) {
      this.setData({
        coupondata: this.data.coupondatat
      })
    }
    if (e.currentTarget.dataset.index == 2) {
      this.setData({
        coupondata: this.data.coupondatah
      })
    }
  }
})