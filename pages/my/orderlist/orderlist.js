Page({

  /**
   * 页面的初始数据
   */
  data: {
    nav:[{
      name:"全部"
    },
    {
      name:"待收货"
    },
    {
     name:"待付款"
    },
    {
      name:"待评价"
    }],
    navTF:"0",
    orderdata:'',
    orderdatao: [{
      company: "天猫一号店",
      status: "1",
      img: "/pages/images/shop2.jpg",
      price: "135",
      buynum: "7",
      shopname: "生命周期函数，可以为函数",
      des: "一个在methods段中定义的方法名",
      id: "1"
    },
    {
      company: "天猫一号店",
      status: "2",
      img: "/pages/images/my-icon.png",
      price: "105",
      buynum: "3",
      shopname: "生命周期函数，可以为函数",
      des: "一个在methods段中定义的方法名",
      id: "2"
    },
    {
      company: "天猫一号店",
      status: "3",
      img: "/pages/images/my-icon.png",
      price: "235",
      buynum: "1",
      shopname: "生命周期函数，可以为函数",
      des: "一个在methods段中定义的方法名",
      id: "3"
    }],
    orderdatat: [{
      company: "天猫二号店",
      status: "1",
      img: "/pages/images/my-icon.png",
      price: "135",
      buynum: "3",
      shopname: "生命周期函数，可以为函数",
      des: "一个在methods段中定义的方法名",
      id: "4"
    },
    {
      company: "天猫二号店",
      status: "2",
      img: "/pages/images/my-icon.png",
      price: "135",
      buynum: "3",
      shopname: "生命周期函数，可以为函数",
      des: "一个在methods段中定义的方法名",
      id: "5"
    },
    {
      company: "天猫二号店",
      status: "3",
      img: "/pages/images/my-icon.png",
      price: "135",
      buynum: "3",
      shopname: "生命周期函数，可以为函数",
      des: "一个在methods段中定义的方法名",
      id: "6"
    }],
    orderdatah: [{
      company: "天猫三号店",
      status: "1",
      img: "/pages/images/my-icon.png",
      price: "135",
      buynum: "3",
      shopname: "生命周期函数，可以为函数",
      des: "一个在methods段中定义的方法名",
      id: "7"
    },
    {
      company: "天猫三号店",
      status: "2",
      img: "/pages/images/my-icon.png",
      price: "135",
      buynum: "3",
      shopname: "生命周期函数，可以为函数",
      des: "一个在methods段中定义的方法名",
      id: "8"
    },
    {
      company: "天猫三号店",
      status: "3",
      img: "/pages/images/my-icon.png",
      price: "135",
      buynum: "3",
      shopname: "生命周期函数，可以为函数",
      des: "一个在methods段中定义的方法名",
      id: "9"
    }],
    orderdataf: [{
      company: "天猫四号店",
      status: "1",
      img: "/pages/images/my-icon.png",
      price: "135",
      buynum: "3",
      shopname: "生命周期函数，可以为函数",
      des: "一个在methods段中定义的方法名",
      id: "11"
    },
    {
      company: "天猫四号店",
      status: "2",
      img: "/pages/images/my-icon.png",
      price: "135",
      buynum: "3",
      shopname: "生命周期函数，可以为函数",
      des: "一个在methods段中定义的方法名",
      id: "12"
    },
    {
      company: "天猫四号店",
      status: "3",
      img: "/pages/images/my-icon.png",
      price: "135",
      buynum: "3",
      shopname: "生命周期函数，可以为函数",
      des: "一个在methods段中定义的方法名",
      id: "13"
    },],
    zhangsan:[ {
      name: '张三',
      age: 20
    }, {
      name: '张三',
      age: 20
    },]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      orderdata: this.data.orderdatao
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
  //导航切换事件
  Changenav:function(e){
    if(this.data.navTF==e.currentTarget.dataset.num){
      return false
    }else{
      this.setData({
        navTF: e.currentTarget.dataset.num
      })
    }
    if (this.data.navTF == 0) {
      this.setData({
        orderdata: this.data.orderdatao
      })
    }
    if (this.data.navTF == 1) {
      this.setData({
        orderdata: this.data.orderdatat
      })
    }
    if (this.data.navTF == 2) {
      this.setData({
        orderdata: this.data.orderdatah
      })
    }
    if (this.data.navTF == 3) {
      this.setData({
        orderdata: this.data.orderdataf
      })
    }
  },
})