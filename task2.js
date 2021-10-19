const { removeDuplicates } = require('./utils');

// TODO: get IDs from stdin

const ids = ["a", "b", "c", "a", "b", "d"];

console.log(removeDuplicates(ids));
// output: [ 'a', 'b', 'c', 'd' ]
