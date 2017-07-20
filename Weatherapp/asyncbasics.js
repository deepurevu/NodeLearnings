console.log("Starting App")

  setTimeout(function(){
  console.log("app running using anonymous funtion");
    },3000);

    setTimeout(()=>{
            console.log("app running using arrow function code");
    },2000);

console.log("Stopping App")


//C:\sharu_Date\Learnings\Nodejs\NodeLearnings\Weatherapp>node asyncbasics.js
//Starting App
//Stopping App
//app running using arrow function code
//app running using anonymous funtion
//Here you see app is not waiting for timeout to happen at 2 seconds, instead it executes and waits for the respective callbacks. thats non blocking I/O async operation.