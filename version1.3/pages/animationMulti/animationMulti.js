// pages/animationMulti/animationMulti.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        q: Math.ceil(Math.random()*6),
        w: Math.ceil(Math.random()*6),
        e: Math.ceil(Math.random()*6),
        r: Math.ceil(Math.random()*6),
        t: Math.ceil(Math.random()*6),
        y: Math.ceil(Math.random()*6),
        text:'',
        message:[]

    },
    toSettlementMulti(){
      var list=[];
        list.push(this.data.q,this.data.w,this.data.e,this.data.r,this.data.t,this.data.y);
    var count=[0,0,0,0,0,0];
        for(var i=0;i<6;i++){
        count[list[i]]=count[list[i]]+1;
        }
    if(count[4]==4&&count[1]==2){
      this.setData({
        text:"状元（金花）"
    })
    }
    else if(count[4]==6){
      this.setData({
        text:"状元（六杯红））"
    })
    }
    else if(count[1]==6){
      this.setData({
        text:"状元（遍地锦）"
    })
    }
    else if(count[2]==6||count[3]==6||count[5]==6||count[6]==6){
      this.setData({
        text:"状元（六杯黑）"
    })
    }
    else if(count[4]==5){
      this.setData({
        text:"状元（五红）"
    })
    }
    else if(count[1]==5||count[2]==5||count[3]==5||count[5]==5||count[6]==5){
      this.setData({
        text:"状元（五子登科）"
    })
    }
    else if(count[4]==4){
      this.setData({
        text:"状元（四点红）"
    })
    }
    else if(count[1]==1&&count[2]==1&&count[3]==1&&count[4]==1&&count[5]==1&&count[6]==1){
      this.setData({
        text:"榜眼（对堂）"
    })
    }
    else if(count[4]==3){
      this.setData({
        text:"探花（三红）"
    })
    }
    else if(count[1]==4||count[2]==4||count[3]==4||count[5]==4||count[6]==4){
      this.setData({
        text:"进士（四进）"
    })
    }
    else if(count[4]==2){
      this.setData({
        text:"举人（二举）"
    })
    }
    else if(count[4]==1){
      this.setData({
        text:'秀才（一秀）'
    })
    }
    else{
      this.setData({
        text:"谢谢参与"
    })
    }  
    console.log(this.data.text)
    var that=this
        wx.redirectTo({
          url: '/pages/settlementMulti/settlementMulti?qq='+that.data.q+'&ww='+that.data.w+'&ee='+that.data.e+'&rr='+that.data.r+'&tt='+that.data.t+'&yy='+that.data.y+'&textt='+that.data.text
        })
        
        
       
     
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
      
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
      this.setData({
            q: Math.ceil(Math.random()*6),
            w: Math.ceil(Math.random()*6),
            e: Math.ceil(Math.random()*6),
            r: Math.ceil(Math.random()*6),
            t: Math.ceil(Math.random()*6),
            y: Math.ceil(Math.random()*6),
        })
        
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