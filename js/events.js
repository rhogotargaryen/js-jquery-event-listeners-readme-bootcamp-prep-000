//define functions here

$(document).ready(function(){


frameIt();
});

function getIt() {
  $("p").on("click", function() {
    alert("Hey!");
  })
}

function frameIt() {
  $("img").on("load", function(), {
    $("img").className = "tasty";
  })
}
