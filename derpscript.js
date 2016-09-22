$(document).ready(function() {
  console.log("test one two");

  var theElement = document.getElementById("morevideos");

  theElement.bind("click", function() {
    $("p").hide();
  });

});

//this is just some placeholder stuff to figure out how to do an onclick event
