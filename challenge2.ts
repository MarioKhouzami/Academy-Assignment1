function countVowels(str: string): number {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  return [...str.toLowerCase()].filter((char) => vowels.has(char)).length;
}

console.log(countVowels("typescript")); // the result will be 2 and not 3 because you didn't consider y as a vowel
