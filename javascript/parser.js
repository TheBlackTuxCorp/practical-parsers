const fs = require('fs');

/**
 * Reads file from standard input and formats output to an array of event objects.
 *
 * Example Input:
 *    1, 2, 4, 5
 *    6, 7, 9, 9
 *
 * Expected Output:
 *    [{
 *      eventDay: 1,
 *      numSmall: 2,
 *      numMedium: 4,
 *      numLarge: 5
 *    }, {
 *      eventDay: 6,
 *      numSmall: 7,
 *      numMedium: 9,
 *      numLarge: 9,
 *    }]
 *
 * @param {string} filePath Path of file to events text file
 * @returns {object[]} Array containing list of events
 */
module.exports = function parseInputToEvents(filePath) {
  return fs.readFileSync(filePath, 'utf-8')
    .split('\n')
    .filter(input => input.length > 0)
    .map(eventStr => {
      const [eventDay, numSmall, numMedium, numLarge] = eventStr.split(',');
      return {
        eventDay: +eventDay,
        numSmall: +numSmall,
        numMedium: +numMedium,
        numLarge: +numLarge,
      };
    });
}
