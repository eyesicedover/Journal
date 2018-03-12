export function JournalEntry(title, body) {
  this.title = title;
  this.body = body;
  this.vowelsArray = ["a", "e", "i", "o", "u", "y"];
  this.specialsArray = [" ", "?", ",", ".", "!", "-"];
  this.counter = 0;
  this.vowel = 0;
  this.consonant = 0;
  counter();
}

JournalEntry.prototype.counter = function () {
  var wordsArray = [];
  wordsArray = this.body.split(" ");
  this.counter = wordsArray.length();
};

JournalEntry.prototype.consonant = function () {
  var charsArray = [];
  var tempArray = [];
  var resultArray = [];
  charsArray = this.body.split("");
  for (var i = 0; i < vowelsArray.length(); i++) {
    for (var j = 0; j < charsArray.length(); j++) {
      if (charsArray[j] != vowelsArray[i]) {
        tempArray.push(charsArray[j]);
      }
    }
  }
  for (var k = 0; k < specialsArray.length(); k++) {
    for (var l = 0; l < tempArray.length(); l++) {
      if (tempArray[l] != specialsArray[k]) {
        resultArray.push(tempArray[l]);
      }
    }
  }
  this.consonant = resultArray.length();
};

JournalEntry.prototype.vowel = function () {
  var charsArray = [];
  charsArray = this.body.split(" ");

};
