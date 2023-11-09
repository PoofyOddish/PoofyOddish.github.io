/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the steps in the TODO 🚧
*/
const btn = document.querySelector("button"); // Get the button from the page
if (btn) { // Detect clicks on the button
  btn.onclick = function () {
    // The 'dipped' class in style.css changes the appearance on click
    btn.classList.toggle("dipped");
  };
}


// ----- GLITCH STARTER PROJECT HELPER CODE -----

// Open file when the link in the preview is clicked
let goto = (file, line) => {
  window.parent.postMessage(
    { type: "glitch/go-to-line", payload: { filePath: file, line: line } }, "*"
  );
};
// Get the file opening button from its class name
const filer = document.querySelectorAll(".fileopener");
filer.forEach((f) => {
  f.onclick = () => { goto(f.dataset.file, f.dataset.line); };
});

var one = "#10e88a",
    two = "#7f3995",
    three = "#0d78e7",
    four = "#f88f18",
    five = "#bb6774";

$(window).on("scroll touchmove", function() {
    if ($(document).scrollTop() > $("#intro").position().top + ($("#quote").position().top-$("#intro").position().top)/4 && $(document).scrollTop() < $("#quote").position().top) {
        $('#quote').css('background', 'white');
        $('#quote').css('transform', 'scale(1.2)');
        $('#quote').css('transition', 'all 0.3s ease-in-out 0.2s');
    } else {
      $('#quote').css('background', '');
      $('#quote').css('transform', 'scale(1)');
      $('#quote').css('transition', 'all 0.3s ease-in-out 0.2s');
    };
      if ($(document).scrollTop() > $("#existentialcrisis").position().top + ($("#coloradoranking").position().top-$("#existentialcrisis").position().top)/4 && $(document).scrollTop() < $("#coloradoranking").position().top) {
        $('#coloradoranking').css('background', 'white');
        $('#coloradoranking').css('transform', 'scale(1.2)');
        $('#coloradoranking').css('transition', 'all 0.3s ease-in-out 0.2s');
    } else {
      $('#coloradoranking').css('background', '');
      $('#coloradoranking').css('transform', 'scale(1)');
      $('#coloradoranking').css('transition', 'all 0.3s ease-in-out 0.2s');
    };
   // if ($(document).scrollTop() > $("#existentialcrisis").position().top) {
     //   $('body').css('background', $("#existentialcrisis").attr("data-color"));
    //};
    //if ($(document).scrollTop() > $("#futuredata").position().top) {

      //  $('body').css('background', $("#futuredata").attr("data-color"));
  //  };
});

//Appear in
$(document).scroll(function () {
    var y = $(this).scrollTop();
    console.log(y);
    // Show element after user scrolls past 
    // the top edge of its parent 
    $('article').each(function () {
        var t = $(this).parent().offset().top;
        if (y > t) {
            $(this).fadeIn();
        } else {
            $(this).fadeOut();
        }
    });
});


