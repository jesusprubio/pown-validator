/*
  Copyright Jesús Pérez <jesusprubio@fsf.org>

  This code may only be used under the MIT license found at
  https://opensource.org/licenses/MIT.
*/

'use strict';

const test = require('tap').test; // eslint-disable-line import/no-extraneous-dependencies
const validator = require('../');


// TODO: Improve those.
test('should not throw', (assert) => {
  assert.plan(6);

  // Only one validator.js method.
  assert.ok(validator.isBoolean('true'));
  assert.ok(!validator.isBoolean('5'));

  assert.ok(validator.isPort('888'));
  assert.ok(!validator.isPort('100000000000'));

  assert.ok(validator.isPrivateIp('192.168.0.1'));
  assert.ok(!validator.isPrivateIp('8.8.8.8'));
});
