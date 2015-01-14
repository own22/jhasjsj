
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
