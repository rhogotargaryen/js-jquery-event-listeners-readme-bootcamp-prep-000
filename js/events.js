$(document).ready(function(){
frameIt();
getIt();
pressIt();
submitIt();
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
  $("form").on("keydown", function(e) {
    if (e.key == 71) {
      alert("You have pressed G!");
    }
  })
}

function submitIt() {
  $("form:last").on("submit", function() {
    alert ("Your form is going to be submitted now.");
  })
}
