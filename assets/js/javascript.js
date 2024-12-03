console.log("Hello World");
if(jQuery) {
    console.log("jQuery loaded");
}
else {
    console.log("No jQuery");
}

// Christmas Image
var today = new Date();
if(today == "12/25/2024") {
    console.log("It's christmas!");
    $('#christmasPopup').show();
}
else {
    console.log("It's not christmas.");
    $('#christmasPopup').hide();
};


// Portfolio Image Closing
$('.art-folder').click( function() {
    //get this faq question's child that is a paragraph and toggle it's visibility with animation
    $(this).children('div').slideToggle(500);
    $(this).children('h2').toggleClass("open")
    $(this).children('h2').toggleClass("closed")
});