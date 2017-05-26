var apiKey = require('./../.env').apiKey;

exports.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=10&user_key=' + apiKey)
   .then(function(results) {
      console.log("result: ", results);
      console.log("result.data.length ", results.data.length);
      $('#search_results').empty();
      results.data.forEach(function(doctor){
        $('#search_results').append(
            "<div class='row doctor_row'>" +
              "<div class='col-sm-4'>" +
                "<h4> Name: </h4><p>" + doctor.profile.first_name + doctor.profile.last_name + doctor.profile.title + "</p>" +
              "</div>" +
              "<div class='col-sm-4'>" +
                "<h4> Primary Practice: </h4><p>" + doctor.practices[0].name + "</p>" +
              "</div>" +
              "<div class='col-sm-4'>" +
                "<img src='" + doctor.profile.image_url + "'>" +
              "</div>" +
            "</div>" + "<hr>"
          );
      });
    })
   .fail(function(error){
      console.log("fail");
    });
};
