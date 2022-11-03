const world = 'data-layer';

export function hello(who: string = world): string {
  return `Hello ${who}! `;
}

console.log("[data-layer/index.ts] End.");