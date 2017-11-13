const app = getApp()
Page({
  data: {
    list: {},
    currentTab: 0,
    winHeight: 0,
    total:0
  },
  onShow: function () {
    if (this.data.currentTab == 0) {
      var list = app.globalData.list;
      var total = 0.0;
      for (var i in list) {
        list[i].open = list[i].open && list[i].items.length
        total+=list[i].total
      }
      this.setData({
        list: list,
        total: total
      });
    }
  },
  onLoad: function () {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winHeight: res.windowHeight
        })
      },
    })
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
    if (list[id].items.length < 1) {
      this.searchFood(id)
    } else {
      this.setData({
        list: list
      });
    }

  },
  searchFood: function (id) {
    wx.navigateTo({
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
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },

  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }
});