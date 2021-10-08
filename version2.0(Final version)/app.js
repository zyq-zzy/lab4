// app.js
let io=wx.connectSocket({
  url: 'ws://127.0.0.1:3001',
})
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    io,
    handleMessage(callback){
      io.onMessage((msg)=>{
        callback(msg)
      })
    }
    
  }
})
