 console.log('Starting the Notes app by using from another file..');
//Exposing something to outer scripts we need module.exports.

module.exports.addNote= function(){   //create an anonymous function
    var res= 'Hi Sharku This call is from notes.js using an anonymous function';
    return res;
}

module.exports.addNote2= ()=>{   //from Es6 to Es7 usag of arrow function//doesnt support this or array
    var res= 'Hi Sharku This call is from notes.js using an arrow function';
    return res;
}


var addNote=function(title,author){   //referenceerror: addnote is not defined came here becz forgot to put var in front
    console.log("Title :", title, "Author:", author);
}
module.exports= {
    addNote: addNote  //this is equal to just addnote;
}