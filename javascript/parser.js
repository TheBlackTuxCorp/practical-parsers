const fs = require('fs');

/**
 * Takes in input string containing rows of events and formats output to an array of event objects.
 *
 * Example Input:
 *    1, 2, 4, 5
 *    6, 7, 9, 9
 *
 * Output:
 *    {
 *      eventDay: Int,
 *      numSmall: Int,
 *      numMedium: Int,
 *      numLarge: Int,
 *    }
 *
 * @param {string} input String input containing comma separated event details.
 * @returns {object[]} Array containing list of events
 */
module.exports = function parseInputToEvents(input) {
  const inputString = input || fs.readFileSync(0).toString();
  return inputString
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
