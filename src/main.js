import { Journal } from './journal';

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var title = $('#entry-title').val();
    var body = $('#entry-body').val();
    var output = JournalEntry(title, body);
  });
});
