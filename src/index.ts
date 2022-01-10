function tiny(string: string): string {
  if (typeof string !== 'string') throw new TypeError('Tiny wants a string!');
  return string.replace(/\s/g, '');
}
module.exports = tiny;
