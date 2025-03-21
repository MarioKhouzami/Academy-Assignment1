function firstNonRepeatingChar(str: string): string | null {
  for (let char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) return char;
  }
  return "";
}
console.log(firstNonRepeatingChar("swiss"));
