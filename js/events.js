$(document).ready(function(){
frameIt();
getIt();
pressIt();
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

function sumbitIt() {
  $("form:last").on("submit", function() {
    alert ("Your form will be submitted!")
  })
}