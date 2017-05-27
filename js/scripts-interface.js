var Query = require('./../js/scripts.js').queryModule;

$(document).ready(function(){

  var myQuery = new Query();
  var currentQueryData;

  // build speciality dropdown list on page load

  // myQuery.getSpecialities().then(function(result) {
  //   console.log("specialties : " , result);
  //   result.data.forEach(function(spec) {
  //     $('#spec_select').append(
  //        "<option value='"+spec.name+"'>"+spec.name+"</option>"
  //     );
  //   });
  // });

  // serach by keyword
  $('#search_btn_main').click(function() {
    var keyword = $('.row input').val();
    myQuery.getDoctors(keyword).then(function(result){
      console.log("stuff: ",result);
      curentQueryData = result;
      $('.results_group').removeClass("hidden");
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
              "<h4> Name: </h4><p>" + doctor.profile.first_name + " " +  doctor.profile.last_name + ", " + doctor.profile.title + "</p>" +
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

  // search by name and speciality
  // $('#refined_search').submit(function(event) {
  //   event.preventDefault();
  //   var selectedSpec = $('#spec_select :selected').val();
  //   var selectedName = $("input [name='doc_name']]").val();
  // });

});
