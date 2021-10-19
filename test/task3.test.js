const { getSpecialties } = require('../utils');

describe("Test Task 3 (getSpecialties)", () => {

	test('["7-623", "8235", "8-235"] should be ["security", "data engineering"]', async () => {
		expect(getSpecialties(
			["7-623", "8235", "8-235"],
			[
				[1381, "front-end web development"],
				[8235, "data engineering"],
				[3434, "API design"],
				[7623, "security"],
				[9153, "UX"]
			]
		)).toStrictEqual(["security", "data engineering"]);
	});

});
