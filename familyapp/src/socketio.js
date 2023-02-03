import SocketIo from "socket.io-client";
 const socket=SocketIo('http://127.0.0.1:3001',{
     query:{

     },
     transport:['websocket','polling'],

 })
export  default { socket}
