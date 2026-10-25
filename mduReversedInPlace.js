function ReverseWords(originalString) {
  var words = originalString.split(" ");
  var newString = "";

  for (let word of words) {
    let spChars = "";
    let reversedWord = "";

    for (let i = word.length - 1; i >= 0; i--) {
      if (
        (word[i].charCodeAt() > 47 && word[i].charCodeAt() < 58) ||
        (word[i].charCodeAt() > 64 && word[i].charCodeAt() < 91) ||
        (word[i].charCodeAt() > 96 && word[i].charCodeAt() < 123)
      ) {
        reversedWord = reversedWord + word[i];
      } else {
        spChars = spChars + word[i];
      }
    }

    let wordResult = "";
    let j = 0;

    for (let i = 0; i < word.length; i++) {
      if (
        (word[i].charCodeAt() > 47 && word[i].charCodeAt() < 58) ||
        (word[i].charCodeAt() > 64 && word[i].charCodeAt() < 91) ||
        (word[i].charCodeAt() > 96 && word[i].charCodeAt() < 123)
      ) {
        wordResult = wordResult + reversedWord[j];
        j++;
      } else {
        wordResult = wordResult + word[i];
      }
    }

    newString = newString + wordResult + " ";
  }

  return newString.trimEnd();
}

console.log(ReverseWords("T!h@ is a test!")); // h!T@ si a tset!
