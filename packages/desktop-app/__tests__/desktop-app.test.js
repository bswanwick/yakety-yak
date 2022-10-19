'use strict';

const desktopApp = require('..');
const assert = require('assert').strict;

assert.strictEqual(desktopApp(), 'Hello from desktopApp');
console.info("desktopApp tests passed");
