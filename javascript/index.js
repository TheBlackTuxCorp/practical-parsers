/**
 * To read inputs, pass the 'parse' npm script the file paths to the input files.
 *
 * Example:
 *
 * $ npm run parse < inputs/fail0.txt
 */

const fs = require('fs');
const inputString = fs.readFileSync(0).toString();

/**
 * Takes in input string and formats output to an event object with the following shape:
 *
 * {
 *   eventDay: Int,
 *   numSmall: Int,
 *   numMedium: Int,
 *   numLarge: Int,
 * }
 *
 * @param {string} input String input containing comma separated event details.
 */
function parseInputToEvents(input) {
  return input
    .split('\n')
    .filter(input => input.length > 0)
    .map(eventStr => {
      const params = eventStr.split(',');
      return {
        eventDay: +params[0],
        numSmall: +params[1],
        numMedium: +params[2],
        numLarge: +params[3],
      };
    });
}

console.log(parseInputToEvents(inputString));
