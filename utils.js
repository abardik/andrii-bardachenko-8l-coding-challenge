/**
 * Returns a new "cleaned-up" string with any non-numeric characters removed.
 *
 * @param {string} str The string to "clean-up".
 * @return {string} The new "cleaned-up" string.
 */
 const cleanUpID = (str) => {

	// check if input is a string
	if ( typeof str !== 'string' ) throw Error('Input should be a string');

	// remove non-numeric characters from input
	const id = str.replace(/\D/g, '');

	// check if ID is valid
	if ( ! id.length ) throw Error('Invalid ID');

	return id;
	
}


/**
 * Returns a new list with the same elements in the same order, but removing duplicates.
 * Preserves the original input - does not mutate it.
 *
 * @param {array} arr The list to filter.
 * @return {array} The new filtered list without duplicates.
 */
 const removeDuplicates = (arr) => {

	// check if all elements are of the same type
	if ( ! arr.every(val => typeof val === typeof arr[0]) ) throw Error('All elements should be the same type');

	// create new Set (it will remove duplicates)
	return [...new Set(arr)];

}


/**
 * Returns a list of specialty names, without duplicates, that are represented by the given IDs.
 *
 * @param {array} ids The list of string IDs (possibly with duplicates).
 * @param {array} specialties The list of specialties with IDs (with no duplicates).
 * @return {array} The new list of specialty names.
 */
 const getSpecialties = (ids, specialties) => {

	// "clean-up" IDs
	const clearIds = ids.map(id => cleanUpID(id));

	// remove duplicates and convert IDs to numbers
	const uniqueIds = removeDuplicates(clearIds).map(el => parseInt(el));

	// get array of specialties IDs
	const keys = specialties.map(el => el[0]);

	// return requested specialties
	return uniqueIds.reduce((result, id) => {
		// find ID's index in specialties IDs array
		const i = keys.indexOf(id);
		// if ID is found, add specialty's name to result array
		return i !== -1 ? [...result, specialties[i][1]] : result;
	}, []);

}


module.exports = {
	cleanUpID,
	removeDuplicates,
	getSpecialties
}
