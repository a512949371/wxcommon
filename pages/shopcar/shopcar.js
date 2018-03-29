// pages/shopcar/shopcar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopdata:[{
      shopname:"天猫一号",
      shopnameId:"1",
      checked:false,
      shoplist:[{
        name:"生命周期函数",
        id:"2",
        price:"111",
        dec:"监听页面加载",
        buynum:"2",
        img:"../images/my-icon.png",
        checked:false,
        znum:"10"
      },
      {
        name: "监听页面初次渲染完成",
        id: "2",
        price: "131",
        dec: "监听页面加载",
        buynum: "2",
        img: "../images/my-icon.png",
        checked: false,
        znum: "99"
      }]
    },
      {
        shopname: "天猫二号",
        shopnameId: "2",
        checked: false,
        shoplist: [{
          name: "生命周期函数",
          id: "2",
          price: "111",
          dec: "监听页面加载",
          buynum: "2",
          img: "../images/my-icon.png",
          checked: false,
          znum: "99"
        },
        {
          name: "监听页面初次渲染完成",
          id: "2",
          price: "131",
          dec: "监听页面加载",
          buynum: "2",
          img: "../images/my-icon.png",
          checked: false,
          znum: "99"
        }]
      },
      {
        shopname: "天猫三号",
        shopnameId: "3",
        checked: false,
        shoplist: [{
          name: "生命周期函数",
          id: "2",
          price: "111",
          dec: "监听页面加载",
          buynum: "2",
          img: "../images/my-icon.png",
          checked: false,
          znum: "99"
        }]
      }],
      buydata:[],
      buynum:0,
      buyprice:0,
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
  //选择某个商家下面所有商品
  Changeall:function(e){
    var length = this.data.shopdata[e.currentTarget.dataset.idx].shoplist;
    if(e.detail.value.length > 0){
      this.data.shopdata[e.currentTarget.dataset.idx].checked = true;
      for(let i=0;i<length.length;i++){
        length[i].checked=true;
        this.data.buynum +=Number(length[i].buynum);
        this.data.buyprice += Number(length[i].buynum*length[i].price)
      }
    }else{
      this.data.shopdata[e.currentTarget.dataset.idx].checked = false;
      for (let i = 0; i < length.length; i++) {
        if (length[i].checked ==true){
          this.data.buynum -=Number(length[i].buynum);
          this.data.buyprice -= Number(length[i].buynum * length[i].price)
        }
        length[i].checked = false;
      }
    }
    this.setData({
      shopdata:this.data.shopdata,
      buynum:this.data.buynum,
      buyprice:this.data.buyprice
    })
  },
  //选择某个商品
  Changeone:function(e){
    console.log(e.currentTarget.dataset.idx)
    if(e.detail.value.length>0){
      this.data.shopdata[e.currentTarget.dataset.idx].checked = true;
      this.data.shopdata[e.currentTarget.dataset.idx].shoplist[e.currentTarget.dataset.index].checked = true;
      this.data.buynum += Number(this.data.shopdata[e.currentTarget.dataset.idx].shoplist[e.currentTarget.dataset.index].buynum);
      this.data.buyprice += Number(this.data.shopdata[e.currentTarget.dataset.idx].shoplist[e.currentTarget.dataset.index].buynum * this.data.shopdata[e.currentTarget.dataset.idx].shoplist[e.currentTarget.dataset.index].price)
    }else{
      var length = this.data.shopdata[e.currentTarget.dataset.idx].shoplist;
      var num=0;
      this.data.shopdata[e.currentTarget.dataset.idx].shoplist[e.currentTarget.dataset.index].checked = false;
      this.data.buynum -= Number(this.data.shopdata[e.currentTarget.dataset.idx].shoplist[e.currentTarget.dataset.index].buynum);
      this.data.buyprice -= Number(this.data.shopdata[e.currentTarget.dataset.idx].shoplist[e.currentTarget.dataset.index].buynum * this.data.shopdata[e.currentTarget.dataset.idx].shoplist[e.currentTarget.dataset.index].price)
      for(let i=0;i<length.length;i++){
        if(length[i].checked==true){
          num++;
        }
      }
      if(num==0){
        this.data.shopdata[e.currentTarget.dataset.idx].checked = false;
      }
    }
    this.setData({
      shopdata: this.data.shopdata,
      buynum:this.data.buynum,
      buyprice:this.data.buyprice
    })
  },
  //购买数量事件
  Reduce:function(e){
    var num = Number(this.data.shopdata[e.currentTarget.dataset.idx].shoplist[e.currentTarget.dataset.index].buynum);
    if(num>0){
      this.data.shopdata[e.currentTarget.dataset.idx].shoplist[e.currentTarget.dataset.index].buynum--;
      if (this.data.shopdata[e.currentTarget.dataset.idx].shoplist[e.currentTarget.dataset.index].checked == true) {
        this.data.buynum--;
        this.data.buyprice -= parseInt(this.data.shopdata[e.currentTarget.dataset.idx].shoplist[e.currentTarget.dataset.index].price)
      }
      this.setData({
        shopdata: this.data.shopdata,
        buynum: this.data.buynum,
        buyprice: this.data.buyprice
      })
    }else{
      wx.showToast({
        title: '购买数量不能小于0',
        icon:"none"
      })
    }
  },
  Add:function(e){
    var num = Number(this.data.shopdata[e.currentTarget.dataset.idx].shoplist[e.currentTarget.dataset.index].buynum);
    var znum = Number(this.data.shopdata[e.currentTarget.dataset.idx].shoplist[e.currentTarget.dataset.index].znum);
    if (znum > num) {
      this.data.shopdata[e.currentTarget.dataset.idx].shoplist[e.currentTarget.dataset.index].buynum++;
      if (this.data.shopdata[e.currentTarget.dataset.idx].shoplist[e.currentTarget.dataset.index].checked == true) {
        this.data.buynum++;
        this.data.buyprice += Number(this.data.shopdata[e.currentTarget.dataset.idx].shoplist[e.currentTarget.dataset.index].price)
      }
      this.setData({
        shopdata: this.data.shopdata,
        buynum: this.data.buynum,
        buyprice: this.data.buyprice
      })
    } else {
      wx.showToast({
        title: '购买数量不能大于可购买数',
        icon:"none"
      })
    }
    console.log(this.data.shopdata[e.currentTarget.dataset.idx].shoplist[e.currentTarget.dataset.index].znum)
    console.log(num)
  },
  Changebuynum:function(e){
    var znum = Number(this.data.shopdata[e.currentTarget.dataset.idx].shoplist[e.currentTarget.dataset.index].znum);
    var bfnum = Number(this.data.shopdata[e.currentTarget.dataset.idx].shoplist[e.currentTarget.dataset.index].buynum);
    if(e.detail.value<0){
      wx.showToast({
        title: '购买数量不能小于0',
        icon:"none"
      })
    }else if (e.detail.value>znum){
      wx.showToast({
        title: '购买数量不能大于可购买数',
        icon:"none"
      })
    }
    else{
      this.data.shopdata[e.currentTarget.dataset.idx].shoplist[e.currentTarget.dataset.index].buynum = e.detail.value;
      if (this.data.shopdata[e.currentTarget.dataset.idx].shoplist[e.currentTarget.dataset.index].checked==true){
        this.data.buynum += Number(e.detail.value - bfnum);
        console.log(this.data.buynum)
        this.data.buyprice += Number((e.detail.value - bfnum) * this.data.shopdata[e.currentTarget.dataset.idx].shoplist[e.currentTarget.dataset.index].price);
        this.setData({
          buynum: this.data.buynum,
          buyprice: this.data.buyprice
        })
      }
    }
  }
})