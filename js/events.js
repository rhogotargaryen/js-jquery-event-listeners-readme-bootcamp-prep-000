$(document).ready(function(){
frameIt();
getIt();
});

function getIt() {
  $("p").on("click", function() {
    alert("Hey!");
  })
}

function frameIt() {
  $("img").on("load", function() {
    $("img").addClass("tasty");
  })
}

function pressIt() {
  $("#typing").on("keydown", function(e) {
    if (e.location == 71) {
      alert("You have pressed G!");
    }
  })
}
