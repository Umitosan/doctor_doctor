var apiKey = require('./../.env').apiKey;

Query = function() {
};

Query.prototype.getDoctors = function(userQuery) {
  return $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ userQuery+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
    .then(function(results) {
      console.log("results success: ", results);
      return results;
    })
    .fail(function(error){
      console.log("fail");
    });
};


exports.queryModule = Query;
