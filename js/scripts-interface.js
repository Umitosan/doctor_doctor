var Querry = require('./../js/scripts.js').querryModule;

$(document).ready(function(){

  var myQuery = new Query();

  $('#search_btn').click(function() {
    var condition = $('.row input').val();
    myQuery.getDoctors(condition);
  });

});
