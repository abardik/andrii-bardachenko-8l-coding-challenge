const { removeDuplicates } = require('../utils');

// Note: See all tests for removeDuplicates in utils.test.js

describe("Test Task 2 (removeDuplicates)", () => {

	test('["a", "b", "c", "a", "b", "d"] should be ["a", "b", "c", "d"]', async () => {
		expect(removeDuplicates(["a", "b", "c", "a", "b", "d"])).toStrictEqual(["a", "b", "c", "d"]);
	});

});
