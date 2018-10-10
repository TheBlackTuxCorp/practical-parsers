const test = require('tape');

const parser = require('./parser.js');

test('one event', function (t) {
  t.plan(1);
  t.deepEqual(
    parser('1, 2, 3, 4'),
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
    parser('1, 2, 3, 4\n5, 6, 7, 8'),
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
