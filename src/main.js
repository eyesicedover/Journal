import { wordCounter, vowelCounter, consonantCounter, getTeaser } from './journal';

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var title = $('#entry-title').val();
    var body = $('#entry-body').val();

    var wordNum = wordCounter(body);
    var vowelNum = vowelCounter(body);
    var consonantNum = consonantCounter(body);
    var blurb = getTeaser(body);

    $("#title").text(title);
    $("#blurb").text(blurb + "...");
    $("#word-count").text(wordNum);
    $("#consonant-count").text(consonantNum);
    $("#vowel-count").text(vowelNum);
  });
});
