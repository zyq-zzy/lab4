// pages/settlementMulti/settlementMulti.js
const app = getApp()
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
        text:"",
        message:[]

    },
    toAnimationMulti(){
        this.setData({
            q: Math.ceil(Math.random()*6),
            w: Math.ceil(Math.random()*6),
            e: Math.ceil(Math.random()*6),
            r: Math.ceil(Math.random()*6),
            t: Math.ceil(Math.random()*6),
            y: Math.ceil(Math.random()*6),
        })
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
    app.globalData.io.send({
        data :this.data.text,
        success:()=>{
        
        }
      })
       
  },
    toHome(){
        wx.redirectTo({
            url: '../home/home',
          })
    },
    
   
    onLoad: function (options) {
        console.log(options)
        this.setData({
            q: options.qq,
            w: options.ww,
            e: options.ee,
            r: options.rr,
            t: options.tt,
            y: options.yy,
            text:options.textt,
        })
        app.globalData.handleMessage((msg) => {
            console.log(msg)
            this.data.message.push(msg.data)
            this.setData({
            message:this.data.message
            })
          
        })
        
        
    },

    onShow: function () {
        app.globalData.io.send({
            data :this.data.text,
            success:()=>{
              this.setData({
              
              })
            }
          })
    },
})