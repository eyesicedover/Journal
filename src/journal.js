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
  var tempArray = [];
  var resultArray = [];
  var regexp = /[bcdfghjklmnpqrstvwxz]|[\!\@\#\$\%\^\&\*\)\(\+\=\_\-]\s/gi;
  var tempArray = body.match(regexp);
  for (var i = 0; i < tempArray.length; i++)
  {
    if(tempArray[i] != ".")
    {
      resultArray.push(tempArray[i]);
    }
  }
  return resultArray.length;
};

export function vowelCounter(body) {
  var resultVowels = [];
  var resultArray = [];
  var re = /[aeiou]/gi;
  var resultVowels = body.match(re)
  return resultVowels.length;
};

export function getTeaser(body) {
  var wordsArray = [];
  wordsArray = body.split(" ");
  var shortBlurb = wordsArray.slice(0, 8);
  return shortBlurb.join(" ");
};
