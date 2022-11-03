const world = 'web-app';

export function hello(who: string = world): string {
  return `Hello ${who}! `;
}

console.log("[web-app/index.ts] End.");