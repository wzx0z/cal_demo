App({
  onLaunch: function (options) {
    // Do something initial when launch.
  },
  onShow: function (options) {
    // Do something when show.
  },
  onHide: function () {
    // Do something when hide.
  },
  onError: function (msg) {
    console.log(msg)
  },
  globalData: {
    list: {
      'breakfast':{
        id:'breakfast',
        name: '早餐',
        open: false,
        items: [],
        total: 0.0      
      },
      'lunch':{
        id:'lunch',
        name: '中餐',
        open: false,
        items: [],
        total: 0.0
      },
      'dinner':{
        id:'dinner',
        name: '晚餐',
        open: false,
        items: [],
        total: 0.0
      }
    }
  }
})