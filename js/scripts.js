var apiKey = require('./../.env').apiKey;

exports.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=10&user_key=' + apiKey)
   .then(function(results) {
      console.log("result: ", results);
      console.log("result.data.length ", results.data.length);
      results.data.forEach(function(doctor){
        $('#search_results').append("<h4> Name: " + doctor.profile.first_name + doctor.profile.last_name + "</h4>");
      });
    })
   .fail(function(error){
      console.log("fail");
    });
};
