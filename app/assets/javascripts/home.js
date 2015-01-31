// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(function() {
  $('.button-collapse').sideNav();
  
  if ($(window).width() <= 1024) {    
        $(".links li").click(function(){
            window.location = $(this).find("a:first").attr("href");
            return false;
        });
  }

 $(".imovel").click(function() {
    var link = $(this).children("a.imovel_link").attr("href");
    window.location.href = link;
 });
  
  cidade_bairro_menus();
  
});


var cidade_bairro_menus = function() {
    var bairros;
    var cidadeDomId = ($("#new_imovel").length) ? "#imovel_cidade_id":"#cidade_id"
    var bairroDomId = ($("#new_imovel").length) ? "#imovel_bairro_id":"#bairro_id"    

    bairros = $(bairroDomId).html();
    $(cidadeDomId).change(function() {
      var cidade, options;
      cidade = $(cidadeDomId + ' :selected').text();
      options = $(bairros).filter("optgroup[label='" + cidade + "']").html();
      if (options) {
        options = "<option value=''>--- Bairro ---</option>" + options;
        return $(bairroDomId).html(options);
      } else if (cidade == "--- Cidade ---") {
        return $(bairroDomId).html(bairros);
      } else {
        return $(bairroDomId).html("<option value=''>--- Bairro ---</option>");
      }
    });

    $(bairroDomId).change(function() {
      var bairro, selecionar;
      cidade = $(this.options[this.selectedIndex]).closest('optgroup').prop('label');
      $(cidadeDomId + ' option').filter(function() {
        return ($(this).text() == cidade);
      }).prop('selected', true);
    });
};