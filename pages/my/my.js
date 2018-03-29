Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"这是一个新名字",
    times: ["2018-3-11 19:20:15", "2018-3-15 13:10:5", "2018-3-18 10:40:45", "2018-3-20 21:24:25", "2018-3-22 5:15:25"],
    myicon:"../../pages/images/my-icon.png",
    username:"登录/注册",
    myinfo:'',
    orderstatus:[{
      img:'../../pages/images/wait-pay.png',
      name:'待支付'
    },
      {
        img: '../../pages/images/wait-get.png',
        name: '待收货'
      },
      {
        img: '../../pages/images/wait-say.png',
        name: '待评价'
      },
      {
        img: '../../pages/images/wait-back.png',
        name: '退换/售后'
      }],
    discountdata:[
      {
        img: "../../pages/images/userinfo.png",
        name: "我的信息",
        url:''
      },{
      img:"../../pages/images/kanjia_icon.png",
      name:"我的砍价",
      url:'/pages/my/mybargain/mybargain'
    },
      {
        img: "../../pages/images/bank.png",
        name: "我的银行卡",
        url:'/pages/my/mybank/mybank'
      },
      {
        img: "../../pages/images/icon-wallet.png",
        name: "我的购物车",
        url:'/pages/shopcar/shopcar'
      },
      {
        img: "../../pages/images/icon-add.png",
        name: "我的地址",
        url: '/pages/my/myadd/myadd'
      },
      {
        img: "../../pages/images/icon-coupon.png",
        name: "我的优惠券",
        url: '/pages/my/mycoupons/mycoupons'
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.Oneclick()
    console.log(getApp().getToken())
    if (getApp().tokenTF()){
      wx.request({
        url: 'https://e-shop.szrundao.com/WebApi/UserManager/UserAccountInfo',
        data:{
          token: getApp().getToken()
        },
        success:function(res){
          console.log(res)
        },
        fail:function(error){
          wx.showToast({
            title: error,
            icon:"none"
          })
        }
      })
    }
    else{
      console.log("false")
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.time = this.selectComponent("#time");
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
  //接口请求测试
  Oneclick:function(){
    var that=this
    wx.request({
      url: 'https://e-shop.szrundao.com/WebApi/Test/Test',
      success: function (data) {
        that.setData({
          name:"这是一个请求数据"
        })
        console.log(that.data.name);
      }
    })  
  },
  Login:function(){
    wx.navigateTo({
      url: '/pages/login/login',
    })
  }
})