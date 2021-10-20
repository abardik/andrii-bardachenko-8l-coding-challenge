const { cleanUpID, removeDuplicates, getSpecialties } = require('../utils');


describe("Test cleanUpID", () => {

	describe("with valid data", () => {

		test('"7-623" should be "7623"', async () => {
			expect(cleanUpID('7-623')).toStrictEqual('7623');
		});

		test('"..2965a" should be "2965"', async () => {
			expect(cleanUpID('..2965a')).toStrictEqual('2965');
		});

		test('"8235" should be "8235"', async () => {
			expect(cleanUpID('8235')).toStrictEqual('8235');
		});

	});

	describe("with invalid data", () => {

		test('1234 should throw Error "Input should be a string"', async () => {
			expect(() => cleanUpID(1234)).toThrowError(
				Error('Input should be a string')
			);
		});
		
		test('"abcd" should throw Error "Invalid ID"', async () => {
			expect(() => cleanUpID('abcd')).toThrowError(
				Error('Invalid ID')
			);
		});

	});

});


describe("Test removeDuplicates", () => {

	describe("with valid data", () => {

		test('["a", "b", "c", "a", "b", "d"] should be ["a", "b", "c", "d"]', async () => {
			expect(removeDuplicates(["a", "b", "c", "a", "b", "d"])).toStrictEqual(["a", "b", "c", "d"]);
		});

		test('[4, 4, 3, 2, 3, 1] should be [4, 3, 2, 1]', async () => {
			expect(removeDuplicates([4, 4, 3, 2, 3, 1])).toStrictEqual([4, 3, 2, 1]);
		});

		test('[true, false, false, true, true] should be [true, false]', async () => {
			expect(removeDuplicates([true, false, false, true, true])).toStrictEqual([true, false]);
		});

	});

	describe("with invalid data", () => {

		test('["a", "b", 3, "a"] should throw Error "All elements should be the same type"', async () => {
			expect(() => removeDuplicates(["a", "b", 3, "a"])).toThrowError(
				Error('All elements should be the same type')
			);
		});

		test('[1, 2, 3, "a", 4] should throw Error "All elements should be the same type"', async () => {
			expect(() => removeDuplicates([1, 2, 3, "a", 4])).toThrowError(
				Error('All elements should be the same type')
			);
		});

		test('[true, false, true, 5, false] should throw Error "All elements should be the same type"', async () => {
			expect(() => removeDuplicates([true, false, true, 5, false])).toThrowError(
				Error('All elements should be the same type')
			);
		});

	});

});


describe("Test getSpecialties", () => {

	describe("with valid data", () => {

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

		test('["7-623", "1111", "2-222"] should be ["security"]', async () => {
			expect(getSpecialties(
				["7-623", "1111", "2-222"],
				[
					[1381, "front-end web development"],
					[8235, "data engineering"],
					[3434, "API design"],
					[7623, "security"],
					[9153, "UX"]
				]
			)).toStrictEqual(["security"]);
		});

		test('["0-000", "1111", "2-222"] should be []', async () => {
			expect(getSpecialties(
				["0-000", "1111", "2-222"],
				[
					[1381, "front-end web development"],
					[8235, "data engineering"],
					[3434, "API design"],
					[7623, "security"],
					[9153, "UX"]
				]
			)).toStrictEqual([]);
		});

	});

	describe("with invalid data", () => {

		test('["111", "222", 333, 444] should throw Error "Input should be a string"', async () => {
			expect(() => getSpecialties(
				["111", "222", 333, 444],
				[
					[1381, "front-end web development"],
					[8235, "data engineering"],
					[3434, "API design"],
					[7623, "security"],
					[9153, "UX"]
				]
			)).toThrowError(
				Error('Input should be a string')
			);
		});

		test('["aaaa", "b-bbb", "7-623"] should throw Error "Invalid ID"', async () => {
			expect(() => getSpecialties(
				["aaaa", "b-bbb", "7-623"],
				[
					[1381, "front-end web development"],
					[8235, "data engineering"],
					[3434, "API design"],
					[7623, "security"],
					[9153, "UX"]
				]
			)).toThrowError(
				Error('Invalid ID')
			);
		});

	});

});
