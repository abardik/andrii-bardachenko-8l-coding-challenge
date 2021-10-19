# andrii-bardachenko-8l-coding-challenge

This is 8th Light coding challenge.

The project includes:
- index.js main script to run all tasks
- task1.js, task2.js, task3.js scripts to run separate tasks
- utils.js module with three functions required by each task
- test/utils.test.js extanded unit tests for utils.js module
- test/task1.test.js, test/task2.test.js, test/task3.test.js with tests for each task
- package.json with project configuration
- README.md (this document)


## Installation

You will need to install dev dependencies to be able to run unit tests. Please run the following command from the root directory of unzipped project:

    npm install
	
	
## Launch

To launch all three tasks use:

    npm start

You can also run a separate task using:

    node task1
	node task2
	node task3


## Tests

To run all unit tests for utils.js module use:

	npm run test:utils

To run tests for separate tasks use:

	npm run test:1
	npm run test:2
	npm run test:3

You can also run all tests using:

	npm test

To see code coverage use:

	npm run coverage

(After running this command, in addition to standard output with coverage info, the coverage folder containing user-friendly coverage report will be created under the root directory of the project).

	
## TODO

- Get input data for each task from stdin (keyboard, file, pipe).
- Write more tests for utils.js to cover more variants of possible input data.


## Answer To Question A

A) How might your design differ if the list of specialties was expected to never change? What if changes frequently?

If the list of specialties was expected to never change I would suggest to cache this list, so to avoid retreiving it from data store every time when it is needed.

For the list of specialties that changes frequently the solution to retreive specialties by IDs would be the same as provided. But if new specialties can be different than old ones for the same IDs (for example, for the ID=1234 the specialty can be different during application life cycle) I would suggest to implement reactive properties (using, for example, the Observer pattern) to update components which use specialties.
