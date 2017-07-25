const app = require('express')();   //Earlier missed to give function (), throws an error TypeError: app.get is not a function
const http  = require('http').Server(app);  //Express initializes app to be a function handler that you can supply to an HTTP server (as seen in line 2).
const io = require('socket.io')(http); //initialize a new instance of socket.io by passing the http (the HTTP server) object. Then I listen on the connection event for incoming sockets, and I log it to the console.
app.get('/', function(req, res){   //We define a route handler / that gets called when we hit our website home.
  //res.send('<h1>Hello world</h1>');   //LOOK FOR COMMENTS BELOW AND THATS WHY WE CHANGED THIS

  res.sendFile(__dirname + '/index.html');  //SEND THIS TO HTML FILE TO SERVER ,WHEN IT ENCOUNTER /, REDIRECT TO INDEX.HTML
});

//io.on('connection', function(socket){
//  console.log('a user connected');
//});


io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
     io.emit('chat message', msg);
  });
});
    

http.listen(3000, function(){  //We make the http server listen on port 3000.
  console.log('listening on *:3000');
});

//Serving HTML
//So far in index.js we’re calling res.send and
 //pass it a HTML string. Our code would look very 
 //confusing if we just placed our entire application’s HTML there. 
 //Instead, we’re going to create a index.html file and serve it.

//  /If you restart the process (by hitting Control+C and running node index again) and refresh the page it should look like this:

//  Integrating Socket.IO
//Socket.IO is composed of two parts:

//A server that integrates with (or mounts on) the Node.JS HTTP Server: socket.io
//A client library that loads on the browser side: socket.io-client

//  Emitting events
//The main idea behind Socket.IO is that you can send and receive any events you want, with any data you want. Any objects that can be encoded as JSON will do, and binary data is supported too.

//Broadcasting
//The next goal is for us to emit the event from the server to the rest of the users.

//
//In order to send an event to everyone, Socket.IO gives us the io.emit: