const world = 'ui-library';

export function hello(who: string = world): string {
  return `Hello ${who}! `;
}

console.log("[ui-library/index.ts] End.");