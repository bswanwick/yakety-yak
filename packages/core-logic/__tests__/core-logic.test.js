'use strict';

const coreLogic = require('..');
const assert = require('assert').strict;

assert.strictEqual(coreLogic(), 'Hello from coreLogic');
console.info("coreLogic tests passed");
