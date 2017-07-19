var square =(x)=>{   //same as var square= function(x){}

    var x= x*x;
    return x;
}

console.log(square(10));



//use as expresion


var square =(X)=>X*X;

console.log(square(12));


//use an object literal, illustarte this usage

var person={

name :"Sharan",
SayHi: ()=>{
    console.log('Hi'+ this.name);//Will throw undefined as cant use this in arrow function
},

SayHiAlt(){
     console.log('Hi'+ this.name);  //ES6 provided an alternate way to do this in modified arrow funtion syntax to use this in object literal
}
};


person.SayHi();
person.SayHiAlt();