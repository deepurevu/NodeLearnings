var obj= {  //javascript object
name: "Sharan"

}


var StringObj= JSON.stringify(obj);  //concvert to JSOn and store that as string
console.log(typeof(StringObj));
console.log(StringObj);
var backtoObj =JSON.parse(StringObj) //convert back to object
console.log(typeof(backtoObj));
console.log(backtoObj);

//Write JSON to file and read from file as OBJECT
const fs=require('fs');
var obj={
name :"Sharan",
title: "BA"

};

//convert to JSON

var JSONObj= JSON.stringify(obj);

//Write file as sync to JSON.json file
fs.writeFileSync('jsonnotes.json',JSONObj);

//read from file
var notestring = fs.readFileSync('jsonnotes.json');
//convert back from JSON to javascript object so that JS can access the files.
var objectliteral= JSON.parse(notestring);
console.log(objectliteral.name,objectliteral.title);