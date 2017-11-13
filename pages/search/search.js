const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searching: false,
    searched: false,
    inputShowed: false,
    inputVal: "",
    foodType:'',
    items: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      foodType: options.type
    })
    //this.search(input_text)
  },

  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },

  search: function(text){
    this.setData({
      searching: true
    })
    var self = this
    console.log('GET '+text)
    wx.request({
      url: 'http://www.jystart.com:8888/query/'+text,
      success(res){
        console.log(res.data)
        self.setData({
          searching: false,
          items: res.data.Items,
          searched: true
        })
      }
    })
  },

  /*textInput: function (e) {
    this.setData({
      input_text: e.detail.value
    })
  },*/

  btnSearch: function () {
    this.search(this.data.inputVal)
  },

  selectFood: function(e) {
    var id = parseInt(e.currentTarget.id), list = app.globalData.list;
    console.log(this.data.items[id])
    list[this.data.foodType].items.push(this.data.items[id])
    list[this.data.foodType].total += parseFloat(this.data.items[id].values[0][1])
    wx.navigateBack()
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
  
  }
})