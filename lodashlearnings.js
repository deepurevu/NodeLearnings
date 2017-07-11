//We will be using lodash package here.

//first have package.json created using npm init questions and install the npm install(i) --save lodash//save will update package.json and create that dependeices.
//Here we us _ in lodash
const _=require('lodash');

module.exports.eliminateDuplicates=function(array){
    //using lodash _uniq fuhction

    var res= _.uniq(array);
    return res;
}

