
(function() {
  jQuery(function() {
    var bairros;
    bairros = $('#imovel_bairro_id').html();
    $('#imovel_cidade_id').change(function() {
      var cidade, options;
      cidade = $('#imovel_cidade_id :selected').text();
      options = $(bairros).filter("optgroup[label='" + cidade + "']").html();
      if (options) {
        options = "<option value=''> Selecione Bairro </option>" + options;
        return $('#imovel_bairro_id').html(options);
      } else if (cidade === "Escolha a cidade") {
        return $('#imovel_bairro_id').html(bairros);
      } else {
        return $('#imovel_bairro_id').empty();
      }
    });

    $('#imovel_bairro_id').change(function() {
      var bairro, selecionar;
      cidade = $(this.options[this.selectedIndex]).closest('optgroup').prop('label');
      $('#imovel_cidade_id option').filter(function() {
        return ($(this).text() == cidade);
      }).prop('selected', true);
    });
  });
}).call(this);
