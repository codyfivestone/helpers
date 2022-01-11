/**
 * Copy the given string to the clipboard.
 * @param {string} str - The string to copy to the clipboard.
 * @returns None
 */

export const copyToClipboard = (str: string) => {  navigator.clipboard.writeText(str)}