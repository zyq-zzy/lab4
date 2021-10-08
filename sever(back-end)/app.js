let express=require("express")
let websocket=require("ws")

let app=express()
let wss=new websocket.Server({port : 3001})
let count=0

wss.on('connection', (ws)=> {
  count++
    ws.on('message', (message)=>{
      //Converts the incoming message to a string, ensuring that the data type passed to the user is normal
      let data=Buffer.from(message).toString()
      let s=count.toString()
      data="？号玩家获得了"+data
      //The message is broadcast to all users
      wss.clients.forEach((client)=>{
      client.send(data)
      })
      data=''
    })
  })

 //Listening port 3000
  app.listen(3000, () => {
    console.log("启动")
  })