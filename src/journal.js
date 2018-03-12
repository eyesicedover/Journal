// export function journalEntry(title, body) {
//   this.title = title;
//   this.body = body;
// }

export function wordCounter(body) {
  var wordsArray = [];
  wordsArray = body.split(" ");
  return wordsArray.length;
};

export function consonantCounter(body) {
  var charsArray = [];
  var tempArray = [];
  var resultArray = [];
  var vowelsArray = ["a", "e", "i", "o", "u", "y"];
  var specialsArray = [" ", "?", ",", ".", "!", "-"];
  charsArray = body.split("");
  console.log(charsArray);
  for (var i = 0; i < vowelsArray.length; i++) {
    for (var j = 0; j < charsArray.length; j++) {
      if (charsArray[j] != vowelsArray[i]) {
        tempArray.push(charsArray[j]);
      }
    }
  }
  for (var k = 0; k < specialsArray.length; k++) {
    for (var l = 0; l < tempArray.length; l++) {
      if (tempArray[l] != specialsArray[k]) {
        resultArray.push(tempArray[l]);
      }
    }
  }
  return resultArray.length;
};

export function vowelCounter(body) {
  var charsArray = [];
  var resultArray = [];
  var vowelsArray = ["a", "e", "i", "o", "u", "y"];
  charsArray = body.split(" ");
  for (var i = 0; i < vowelsArray.length; i++) {
    for (var j = 0; j < charsArray.length; j++) {
      if (charsArray[j] == vowelsArray[i]) {
        resultArray.push(charsArray[j]);
      }
    }
  }
  return resultArray.length;
};
