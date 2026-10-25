function ReverseWords(originalString) {
  let splitStr = originalString.trim().split(" ");
  let revStr = [];
  for (let word of splitStr) {
    let chars = word.split("");
    let revIndex = chars.length - 1;
    let revWord = [];
    for (let i = 0; i < chars.length; i++) {
      if (/[\W]/.test(chars[i])) {
        revWord.push(chars[i]);
      } else {
        while (/[\W]/.test(chars[revIndex])) {
          revIndex--;
        }
        revWord.push(chars[revIndex]);
        revIndex--;
      }
    }
    revStr.push(revWord.join(""));
  }

  return revStr.join(" ");
}

console.log(ReverseWords("T!h@ is a test!")); // h!T@ si a tset!

//reverse words leaving special characters in place
