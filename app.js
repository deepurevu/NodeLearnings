 console.log('Starting the Main app..');
 //usage of require my own file or using another file i created

 const myfile=require('./notes.js');//same heirachy us only 1 dot by /
 var retfromAnonynmous=myfile.addNote();
 var retFromArrow=myfile.addNote2();
 console.log("Here you go from another file"+retfromAnonynmous+''+retFromArrow);



 //Using Lodashs module here

 const lodashs= require('./lodashlearnings.js');
 var results= lodashs.eliminateDuplicates([1,1,2,3,'sharan','sharan','john',1]);
 console.log("The filtered result is"+ " " +results);