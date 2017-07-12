console.log("Starting the Command line read example");
var commandline = process.argv[2];

if (commandline==="Add"){
 var a="Adding Notes";

// return a doesnt work here eventhough you did try ti return this is app.js, you have to expose it using module.exports.
module.exports.a=a;
}
else if (commandline==="Remove"){
   var a=("Removing notes");
  module.exports.a=a;
}else{
      var a=("Invalid command read");
    module.exports.a=a;
}