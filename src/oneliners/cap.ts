/**
 * return the first character of the string in upper case and the rest of the string unchanged.
 * @param {string} str - string
 * @returns The first character of the string is capitalized.
 */

export function cap(str: string): string { return str.charAt(0).toUpperCase() + str.slice(1) }