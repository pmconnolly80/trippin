define(function(require){
  var firebase = require("firebase");
  var templates = require("get-templates");

  var myFirebaseRef = new Firebase("https://nns-steve-trippin.firebaseio.com");

  // Listen for when anything changes on the "trips" key
  myFirebaseRef.child("trips").on("value", function(snapshot) {
    var trips = snapshot.val();

    console.log("trips", trips);

    // This will hold the complete DOM string of trips
    var populatedTemplate = templates.tripTpl(trips);

    // Insert the DOM string into the appropriate element
    $("#list-of-trips").html(populatedTemplate);
  });

});
