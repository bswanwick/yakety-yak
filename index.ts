import {hello as helloCore} from '@yakety-yak/core-logic';
import {hello as helloDataLayer} from '@yakety-yak/data-layer';
import {hello as helloDesktopApp} from '@yakety-yak/desktop-app';
import {hello as helloUiLibrary} from '@yakety-yak/ui-library';
import {hello as helloWebApp} from '@yakety-yak/web-app';

console.log(helloCore());
console.log(helloDataLayer());
console.log(helloDesktopApp());
console.log(helloUiLibrary());
console.log(helloWebApp());

console.log(helloCore("Goodbye."));

console.log("[index.ts] End.");