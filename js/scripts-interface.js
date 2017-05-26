var getDoctors = require('./../js/scripts.js').getDoctors;

$(document).ready(function(){

  $('#search_btn').click(function() {
    var condition = $('.row input').val();
    getDoctors(condition);
  });

});
