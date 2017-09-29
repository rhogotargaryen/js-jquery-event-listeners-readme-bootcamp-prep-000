//define functions here

$(document).ready(function(){

frameIt();
getIt();
});

function getIt () {
  $("p").on("click", function() {
    alert("Hey!");
  })
}

function frameIt () {
  $("img").on("load", function(), {
    $("img").addClass("tasty");
  })
}
