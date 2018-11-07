const test = require('tape');
const path = require('path');

const parser = require('../parser.js');

test('one event', function (t) {
  t.plan(1);
  t.deepEqual(
    parser(path.join(__dirname, 'one_event.txt')),
    [{
      eventDay: 1,
      numSmall: 2,
      numMedium: 3,
      numLarge: 4
    }]
  );
});

test('multiple events', function(t) {
  t.plan(1);
  t.deepEqual(
    parser(path.join(__dirname, 'multiple_events.txt')),
    [{
      eventDay: 1,
      numSmall: 2,
      numMedium: 3,
      numLarge: 4
    },{
      eventDay: 5,
      numSmall: 6,
      numMedium: 7,
      numLarge: 8
    }]
  )
});
