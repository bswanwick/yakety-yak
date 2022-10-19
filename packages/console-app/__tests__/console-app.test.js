'use strict';

const consoleApp = require('..');
const assert = require('assert').strict;

assert.strictEqual(consoleApp(), 'Hello from consoleApp');
console.info("consoleApp tests passed");
