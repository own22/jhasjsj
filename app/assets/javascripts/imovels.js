/*

(function() {
  jQuery(function() {
    var bairros;
    var cidadeDomId = ($("#new_imovel").length) ? "#imovel_cidade_id":"#cidade_id"
    var bairroDomId = ($("#new_imovel").length) ? "#imovel_bairro_id":"#bairro_id"
    console.log(cidadeDomId)
    console.log(bairroDomId)

    bairros = $(bairroDomId).html();
    $(cidadeDomId).change(function() {
      var cidade, options;
      cidade = $(cidadeDomId + ' :selected').text();
      options = $(bairros).filter("optgroup[label='" + cidade + "']").html();
      if (options) {
        options = "<option value=''> Selecione Bairro </option>" + options;
        return $(bairroDomId).html(options);
      } else if (cidade === "Escolha a cidade") {
        return $(bairroDomId).html(bairros);
      } else {
        return $(bairroDomId).empty();
      }
    });

    $(bairroDomId).change(function() {
      var bairro, selecionar;
      cidade = $(this.options[this.selectedIndex]).closest('optgroup').prop('label');
      $(cidadeDomId + ' option').filter(function() {
        return ($(this).text() == cidade);
      }).prop('selected', true);
    });
  });
}).call(this);

$(document).ready(function() {
  $('#slider-range').slider({
    range: true,
    min: 10000,
    max: 1000000,
    values: [50000, 700000],
    slide: function(event, ui) {
      $('#preco_min').val(ui.values[0]);
      $('#preco_max').val(ui.values[1]);  

    }  
  });
  $("#amount").val("R$" + $("#slider-range").slider("values", 0) + " - R$" + $("#slider-range").slider("values", 1));
});
*/

$(document).ready(function(){
      $('.slider').slider({full_width: true});
});
