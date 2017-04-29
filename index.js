/*
  Copyright Jesús Pérez <jesusprubio@fsf.org>

  This code may only be used under the MIT license found at
  https://opensource.org/licenses/MIT.
*/

'use strict';

const validator = require('validator');


// TODO: Contribute to the library with those.
validator.isPort = str =>
  (validator.isNumeric(str) && (parseInt(str, 10) > 0) && (parseInt(str, 10) <= 65535));

validator.isPrivateIp = require('is-local-ip');


module.exports = validator;
