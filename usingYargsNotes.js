console.log(' ' + 'Starting the YargsNotes Example');
const yargsnotes =require('yargs');
console.log('Process',process.argv);//printing to understand difference from yarg.argv
console.log('Yargs', yargsnotes.argv);
var argv = yargsnotes.argv;
console.log(argv._);
var notess= require('./notes.js');
if (argv._[0]==="Add"){
    //console.log(argv.title);
    notess.addNote(argv.title,argv.author);
}

///call program like node usingYargsNotes.js Add --title="Sharan" --author="Hello"
