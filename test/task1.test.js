const { cleanUpID } = require('../utils');

// Note: See all tests for cleanUpID in utils.test.js

describe("Test Task 1 (cleanUpID)", () => {

	test('"7-623" should be "7623"', async () => {
		expect(cleanUpID('7-623')).toStrictEqual('7623');
	});

});
