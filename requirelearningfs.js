 console.log('Starting the app..')
 const fs=require('fs');
 fs.appendFile('greeting.txt','HelloWorld'); //Will show a warning
 fs.appendFile('sharan.txt','withcallbackerro',function(err){
    if(err){
     console.log("something bad happend");
    }

 });