const { getSpecialties } = require('./utils');

// TODO: get IDs and specialties from stdin

const ids = ["7-623", "8235", "8-235"];

const specialties = [
	[1381, "front-end web development"],
	[8235, "data engineering"],
	[3434, "API design"],
	[7623, "security"],
	[9153, "UX"]
];

console.log(getSpecialties(ids, specialties));
// output: [ 'security', 'data engineering' ]
