json.array!(@imovels) do |imovel|
  json.extract! imovel, :id, :tipo_id, :cidade_id, :bairro_id, :venda, :aluguel, :quartos, :banheiros, :suites, :vagas, :preco, :titulo, :descricao, :descricao_curta
  json.url imovel_url(imovel, format: :json)
end
