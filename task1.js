const { cleanUpID } = require('./utils');

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

readline.question('ID: ', id => {
	readline.close();
	console.log(cleanUpID(id));
});
