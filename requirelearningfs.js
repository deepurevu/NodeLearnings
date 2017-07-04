 console.log('Starting the app..');
 const fs=require('fs');
 const os=require('os');
 var user=os.userInfo();

 fs.appendFile('greeting.txt','HelloWorld'+user.username); //Will show a warning
 fs.appendFile('sharan.txt',`Using ES6 Templat print ${user.username}${user.userInfo}`,function(err){
    if(err){
     console.log("something bad happend");
    }

 });
