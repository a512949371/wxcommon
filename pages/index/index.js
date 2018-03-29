//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgdata: ["../../images/banner1.jpg", "../../images/banner2.jpg", "../../images/banner3.jpg"],
    sortdata: [{
      name: "休闲",
      img: "../images/fenlei_icon.png"
    },
    {
      name: "个护",
      img: "../images/fenlei_icon2.png"
    },
    {
      name: "健康",
      img: "../images/fenlei_icon3.png"
    },
    {
      name: "音乐",
      img: "../images/fenlei_icon9.png"
    },
    {
      name: "健身",
      img: "../images/fenlei_icon_clock.png"
    },
    ],
    shopLeft:[{
      name:"特价商品1",
      img:"../images/shop1.jpg",
      price:"240",
      id:"258"
    },
    {
      name:"特价商品2",
      img:"../images/shop2.jpg",
      price:"135",
      id:"2"
    },
    {
      name:"特价商品3",
      img:"../images/shop2.jpg",
      price:"180",
      id:"3"
    }],
    alertTF:false,
    acttime:"2018-3-25 13:10:5",
    timedata: {
      day: '',
      time: '',
      hour: '',
      min: '',
      sec: '',
    },
    hotshopdata:{
      title: "热门商品",
      shoplist: [{
        name: "特价商品2",
        img: "../images/hotshop.jpg",
        price: "135",
        id: "2"
      },
        {
          name: "特价商品2",
          img: "../images/hotshop.jpg",
          price: "135",
          id: "2"
        },
            {
      name:"特价商品2",
      img:"../images/hotshop.jpg",
      price:"135",
      id:"2"
    },]
    }
      
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onReady:function(){
    this.Time()
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  //测试事件
  clickM:function(){
    this.setData({ motto: "hello   " + this.data.userInfo.nickName})
  },
  Time:function(){
    var that = this;
    setInterval(function () {
      var enddata = new Date(that.data.acttime);
      var newdata = new Date();
      if(enddata<newdata){
        return
      }
      var data = (enddata - newdata) / 1000;
      if (Math.floor(data / 3600 / 24)<10){
        that.data.timedata.day = "0" + Math.floor(data / 3600 / 24)
      }else{
        that.data.timedata.day = Math.floor(data / 3600 / 24)
      }
      if (Math.floor(data / 3600 % 24)< 10) {
        that.data.timedata.hour = "0" + Math.floor(data / 3600 % 24)
      }else{
        that.data.timedata.hour = Math.floor(data / 3600 % 24)
      }
      if (Math.floor((data % 3600) / 60) < 10) {
        that.data.timedata.min = "0" + Math.floor((data % 3600) / 60)
      }else{
        that.data.timedata.min =Math.floor((data % 3600) / 60)
      }
      if (Math.floor((data % 3600) % 60) < 10) {
        that.data.timedata.sec = "0" + Math.floor((data % 3600) % 60)
      }else{
        that.data.timedata.sec =Math.floor((data % 3600) % 60)
      }
      that.setData({
        'timedata.time': data,
        'timedata.day': that.data.timedata.day,
        'timedata.hour': that.data.timedata.hour,
        'timedata.min': that.data.timedata.min,
        'timedata.sec': that.data.timedata.sec,
      })
      console.log(that.data.timedata.hour);
    }, 1000);    
  },
  Close:function(){
    this.setData({
      alertTF: !this.data.alertTF
    })
    console.log(this.data.alertTF)
  }
})
