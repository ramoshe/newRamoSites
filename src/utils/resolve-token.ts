/**
 * Resolves a design token into a CSS variable reference.
 * Example: "page-0" → "var(--page-0)"
 */

export function resolveToken(
   token?: string,
   fallback?: string
) {
   if (!token) return fallback;

   return `var(--${token})`;
}