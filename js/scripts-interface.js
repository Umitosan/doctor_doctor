var Querry = require('./../js/scripts.js').querryModule;

$(document).ready(function(){

  var myQuery = new Query();

  $('#search_btn').click(function() {
    var condition = $('.row input').val();
    myQuery.getDoctorsByIssue(condition).then(function(result){
      console.log("stuff: ",result);
      $('#search_results').empty();
      result.data.forEach(function(doctor){
        var docSpecList = [];
        doctor.specialties.forEach(function(speciality) {
          docSpecList.push(speciality.name);
        });
        var docSpecListStr = docSpecList.join(", ");
        $('#search_results').append(
          "<div class='row doctor_row'>" +
            "<div class='col-sm-2'>" +
              "<img src='" + doctor.profile.image_url + "'>" +
            "</div>" +
            "<div class='col-sm-2'>" +
              "<h4> Name: </h4><p>" + doctor.profile.first_name + doctor.profile.last_name + doctor.profile.title + "</p>" +
            "</div>" +
            "<div class='col-sm-2'>" +
              "<h4> Primary Practice: </h4><p>" + doctor.practices[0].name + "</p>" +
            "</div>" +
            "<div class='col-sm-3'>" +
              "<h4> Specialties: </h4><p>" + docSpecListStr + "</p>" +
            "</div>" +
          "</div>" +
          "<hr>"
        );
      }); // end result.data.forEach
    }); // end getDOctorsByIssue
  }); // end button click

});
