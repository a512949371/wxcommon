// pages/my/mybank/mybank.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bankdata:[{
      img:'/pages/images/icon-commercial.png',
      bankname:"招商银行",
      banktype:"储蓄卡",
      banknum:"6223587865563665",
      bankid:"2352",
      banksort:"1"
    }, 
    {
      img: '/pages/images/icon-construction.png',
      bankname: "工商银行",
      banktype: "信用卡",
      banknum: "6223587865562164",
      bankid: "2352",
      banksort: "2"
      }, 
      {
        img: '/pages/images/icon-transportation.png',
        bankname: "建设银行",
        banktype: "储蓄卡",
        banknum: "6223587865563175",
        bankid: "2352",
        banksort: "3"
      }],
      newbankTF:false,
      removeTF:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    for(var i=0;i<this.data.bankdata.length;i++){
      var num =this.data.bankdata[i].banknum.slice(12);
      this.data.bankdata[i].banknum=num;
    }
    this.setData({
      bankdata: this.data.bankdata
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
  //打开新增银行卡编辑框
  Newbank:function(){
    this.setData({
      newbankTF:true
    })
  },
  //关闭银行卡编辑框
  Closenew(){
    this.setData({
      newbankTF:false
    })
  },
  Removebank:function(){
    this.setData({
      removeTF:!this.data.removeTF
    })
  }
})