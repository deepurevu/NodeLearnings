 console.log('Starting the Notes app..');
//Exposing something to outer scripts we need module.exports.

module.exports.addNote= function(){   //create an anonymous function
    var res= 'Hi Sharku This call is from notes.js using an anonymous function';
    return res;
}

module.exports.addNote2= ()=>{   //from Es6 to Es7 usag of arrow function//doesnt support this or array
    var res= 'Hi Sharku This call is from notes.js using an arrow function';
    return res;
}