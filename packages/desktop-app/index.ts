const world = 'desktop-app';

export function hello(who: string = world): string {
  console.log("[desktop-app/index.ts] End.");
  return `Hello ${who}! `;
}

console.log("[desktop-app/index.ts] End.");