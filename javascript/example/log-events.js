const parser = require('../parser.js');

// Load events from file
console.log('** Logged events from input file **');
console.log(parser());

console.log('\n');

// Load events from input string
console.log('** Logged events from input string **');
console.log(parser('1, 2, 3, 4\n5, 6, 7, 8'));
