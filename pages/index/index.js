const app = getApp()
Page({
  data:{
    list:{}
  },
  onLoad:function(){
    this.setData({
      list: app.globalData.list
    });
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i in list) {
      if (i == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    app.globalData.list = list
    if (list[id].items.length<1){
      this.searchFood(id)
    } else {
      this.setData({
        list: list
      });
    }
    
  },
  searchFood: function (id) {
    wx.redirectTo({
      url: '/pages/search/search?type=' + id,
    })
  },
  addFood: function (e) {
    var id = '', list = this.data.list;
    for (var i in list) {
      if (list[i].open) {
        id = i
        break
      }
    }
    this.searchFood(id)
  },
});