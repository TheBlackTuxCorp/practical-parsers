const parseFileToEvents = require('./parser.js');

const EVENTS = parseFileToEvents(process.argv[2]);

function solution (events) {
  // Uncomment below to print parsed events to console output
  // Remove when submitting solution
  //
  // console.log(events);

  // Implement solution here
}

solution(EVENTS);
