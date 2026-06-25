// Shared animation helpers + easings.

export const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const isMobile = (): boolean =>
  typeof window !== 'undefined' && window.matchMedia('(max-width: 760px)').matches;

/** Linear interpolation. */
export const lerp = (a: number, b: number, t: number): number => a + (b - a) * t;

/** Lerp across a 3-tuple (vec3). */
export const lerpVec3 = (
  a: readonly [number, number, number],
  b: readonly [number, number, number],
  t: number
): [number, number, number] => [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];

/** Clamp to a range. */
export const clamp = (v: number, min = 0, max = 1): number => Math.min(max, Math.max(min, v));

/** Remap value from [inMin,inMax] to [0,1], clamped. */
export const progress = (v: number, inMin: number, inMax: number): number =>
  clamp((v - inMin) / (inMax - inMin));

/** smoothstep easing (used to soften per-part assembly). */
export const smoothstep = (t: number): number => {
  const x = clamp(t);
  return x * x * (3 - 2 * x);
};
