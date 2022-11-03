const world = 'core-logic';

export function hello(who: string = world): string {
  return `Hello ${who}! `;
}

console.log("[core-logic/index.ts] End.");