// pages/my/myadd/myadd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    adddata:[{
      userName:"张三",
      provinceName:"云南省",
      cityName:"昆明市",
      countyName:"盘龙区",
      detailInfo:"饵季路111号",
      telNumber:"15288487865",
      act:"1"
    },
      {
        userName: "张三",
        provinceName: "云南省",
        cityName: "昆明市",
        countyName: "盘龙区",
        detailInfo: "饵季路111号",
        telNumber: "15288487865",
        act:"2"
      },
      {
        userName: "张三",
        provinceName: "云南省",
        cityName: "昆明市",
        countyName: "盘龙区",
        detailInfo: "饵季路111号",
        telNumber: "15288487865",
        act:"2"
      }],
      changeTF:false,
      province:[{
        name:"云南省",
        code:"1005"
      },
      {
        name: "四川省",
        code: "1007"
      },
      {
        name: "贵州省",
        code: "1008"
       }],
      index_p:"0",
      area: [{
        name: "昆明市",
        code: "2345"
      },
      {
        name: "文山市",
        code: "4311"
      },
      {
        name: "玉溪市",
        code: "3241"
      }],
      index_a:"0",
      city: [{
        name: "官渡区",
        code: "5463"
      },
      {
        name: "盘龙区",
        code: "6543"
      },
      {
        name: "北市区",
        code: "7569"
      }],
      index_c:"0",
      showaddTF:false,
      title:"新增地址",
      newadd:{
        userName:'',
        provinceName:'',
        cityName:'',
        countyName:'',
        detailInfo:'',
        telNumber:'',
      }
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
  //地址选中输入事件
  Changeadd:function(e){
    console.log(e.currentTarget.dataset.index)
    for(var i=0;i<this.data.adddata.length;i++){
      if (i==e.currentTarget.dataset.index){
        this.data.adddata[i].act="1";
      }else{
        this.data.adddata[i].act="2"
      }
    }
    this.setData({
      adddata:this.data.adddata,
    })
  },
  Newadd:function(){
    this.setData({
      showaddTF:true
    })
  },
  Closenew:function(){
    this.setData({
      showaddTF: false
    })
  },
  //input输入事件
  Newaddone:function(e){
    if(e.currentTarget.dataset.index==1){
      this.setData({
        'newadd.userName':e.detail.value
      })
    }
    if (e.currentTarget.dataset.index == 2) {
      this.setData({
        'newadd.telNumber': e.detail.value
      })
    }
    if (e.currentTarget.dataset.index == 3) {
      this.setData({
        'newadd.detailInfo': e.detail.value
      })
    }
  },
  //picker选择事件
  Newaddtwo:function(e){
    console.log(e)
    if(e.currentTarget.dataset.index==1){
      this.setData({
        index_p:e.detail.value,
        'newadd.provinceName': this.data.province[e.detail.value].name
      })
    }
    if (e.currentTarget.dataset.index == 2) {
      this.setData({
        index_a: e.detail.value,
        'newadd.cityName': this.data.area[e.detail.value].name
      })
    }
    if (e.currentTarget.dataset.index == 3) {
      this.setData({
        index_c: e.detail.value,
        'newadd.countyName': this.data.city[e.detail.value].name
      })
    }
  },
  //新增或编辑地址确认
  Addtrue:function(){
    console.log(this.data.newadd)
  },
  //获取微信地址事件
  Openwxadd:function(){
    var that=this;
    wx.chooseAddress({
      success:function(e){
        console.log(e)
        that.setData({
          showaddTF: true,
          title: "编辑地址",
          'newadd.userName':e.userName,
          'newadd.provinceName': e.provinceName,
          'newadd.cityName': e.cityName,
          'newadd.countyName': e.countyName,
          'newadd.detailInfo': e.detailInfo,
          'newadd.telNumber': e.telNumber
        })
      },
      fail:function(e){
        wx.showToast({
          title: e.error,
          icon:"none"
        })
      }
    })
  },
  //地址编辑事件
  Editadd:function(e){
    this.setData({
      showaddTF:true,
      title:"编辑地址",
      'newadd.userName': this.data.adddata[e.currentTarget.dataset.index].userName,
      'newadd.provinceName': this.data.adddata[e.currentTarget.dataset.index].provinceName,
      'newadd.cityName': this.data.adddata[e.currentTarget.dataset.index].cityName,
      'newadd.countyName': this.data.adddata[e.currentTarget.dataset.index].countyName,
      'newadd.detailInfo': this.data.adddata[e.currentTarget.dataset.index].detailInfo,
      'newadd.telNumber': this.data.adddata[e.currentTarget.dataset.index].telNumber
    })
    console.log(this.data.newadd)
  }
})