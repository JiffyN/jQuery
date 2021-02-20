//https://www.w3schools.com/jquery/default.asp

// if the jQuery script is in the <head>
$(document).ready(function() {
  $("h1").css("color", "red");
});


// if the jQuery script is in the <body> at the end before js scripts
// setting the value ("color", "red")
$("h1").css("color", "red");

// getting the value ("color")
console.log($("h1").css("color"));

// document.querySelector() === jQuery() === $()
// document.querySelectorAll() === jQuery() === $()

// add the class
$("h1").addClass("big-title");

// remove the class
$("h1").removeClass("big-title");

// add multiple classes
$("h1").addClass("big-title margin-50");

//change the text (instead of "textContent")
$("h1").text("Bye");
$("button").text("Do not click me");

// instead of "innerHTML"
$("button").html("<em>Hey</em>");

//manipulating attributes
console.log($("img").attr("src"));
$("a").attr("href", "http://www.yahoo.com");

//to add event listeners
$("h1").click(function() {
  $("h1").css("color", "purple");
});

// works without "for" loop. it will choose all buttons
$("button").click(function() {
  $("h1").css("color", "purple");
});

// for input
$("input").keydown(function(event) {
  console.log(event.key);
});

//for document
$(document).keydown(function(event) {
  console.log(event.key);
});

$(document).keydown(function(event) {
  $("h1").text(event.key);
});

// method "on"
$("h1").on("mouseover", function() {
  $("h1").css("color", "purple");
});

// adding new element
$("h1").before("<button>New</button>");
$("h1").after("<button>New</button>");
$("h1").prepend("<button>New</button>"); // the button will be added inside "h1" elemet before "h1" text
$("h1").append("<button>New</button>"); // the button will be added inside "h1" elemet after "h1" text

// will remove all buttons
//$("button").remove();

// to hide element
$("button").click(function() {
  $("h1").hide();
});

// to show element
$("h1").show();

// hide/show element
$("button").click(function() {
  $("h1").toggle();
});

//fade out
$("button").click(function() {
  $("h1").fadeOut();
});

// fade in
$("button").click(function() {
  $("h1").fadeIn();
});

// toggle fadeIn/ fade fadeOut
$("button").click(function() {
  $("h1").fadeToggle();
});

// to collapse the element
$("button").click(function() {
  $("h1").slideToggle();
});

// to define custom CSS
// can be used only the attribute that has the numeric value
$("button").click(function() {
  $("h1").animate({opacity: 0.5});
});


$("button").click(function() {
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
});
