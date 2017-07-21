const request = require('request');

request({url:'https://maps.googleapis.com/maps/api/geocode/json?address=4118%20greenleaf%20court%20park%20city',
        //JSON:true

    } ,(err,response,body)=>{

      //  console.log(JSON.stringify(body,undefined,2));
   //    console.log(response);
  // console.log(body.results[0]);//results in json view is an array
  console.log(`Address: ${body.results[0].formatted_address}`);
    });


    request('https://maps.googleapis.com/maps/api/geocode/json?address=1360 S.White Oak drive',function(err,resp,body){   ///in simple form

        
        // console.log(JSON.stringify(body,undefined,2));
     //    console.log(body.results[0].formatted_address);

    // console.log(`Address: ${body.results[0].formatted_address}`);
    });


    //request(url,callbackfunction(){});//request takes two parameters and once url result come back it execites the callback function and that time only call back function gets executed.