// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function () {
   if ($(window).width() <= 1024) {
      $(".links li").click(function(){
          window.location = $(this).find("a:first").attr("href");
          return false;
      });
   }
});