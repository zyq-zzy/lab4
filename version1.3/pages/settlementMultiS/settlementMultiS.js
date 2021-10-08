// pages/settlementMultiS/settlementMultiS.js
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
        id:1,
        allPeople:[]
        
    },
    
    toHome(){
        wx.redirectTo({
            url: '../home/home',
          })
    },
    Again(){
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
    var te="恭喜玩家"+this.data.id+"号获得了"+this.data.text
    this.data.allPeople.push(te)
    this.setData({
        allPeople:this.data.allPeople,
    })
},
    nextpeople(){
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
    var num=this.data.id+1
    this.setData({
        id:num
    })
    var te="恭喜玩家"+this.data.id+"号获得了"+this.data.text
    this.data.allPeople.push(te)
    this.setData({
        allPeople:this.data.allPeople,
    })
    
    },
    newGame(){
        this.setData({
            allPeople:[],
            id:1
        })
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
    
    var te="恭喜玩家"+this.data.id+"号获得了"+this.data.text
    this.data.allPeople.push(te)
    this.setData({
        allPeople:this.data.allPeople,
    })
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
    var te="恭喜玩家"+this.data.id+"号获得了"+this.data.text
    this.data.allPeople.push(te)
    this.setData({
        allPeople:this.data.allPeople,
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