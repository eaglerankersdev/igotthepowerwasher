// Babel's _taggedTemplateLiteral helper, used by the original styled-components calls.
export function _taggedTemplateLiteral(strings: string[], raw?: string[]): TemplateStringsArray {
  if (!raw) raw = strings.slice(0);
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })) as unknown as TemplateStringsArray;
}
