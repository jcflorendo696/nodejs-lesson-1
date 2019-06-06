console.log("Starting App.js...");

const fs = require('fs');
const notes = require('./notes.js');
const _ = require('lodash');

//console.log(process.argv); 

var command = process.argv[2];
console.log('Command: ', command);

if( command === 'add'){
	console.log('adding new note');
}else if(command === 'list'){
	console.log('listing all notes');
}else if(command === 'read'){
	console.log('Reading note');
}else{
	console.log('command not recognized');
}