class Pesquisa < ActiveRecord::Base 
  def self.pesquisa(cidade, bairro, tipo, banheiros, vagas, suites, quartos="", preco_min, preco_max, venda, aluguel)
    if ( cidade || bairro || tipo || banheiros || vagas || suites || (quartos && quartos != "") || preco_min || preco_max )

      imovels = Imovel.all
      imovels = imovels.where("venda = ?", false) if !(venda == "1")
      imovels = imovels.where("aluguel = ?", false) if !(aluguel == "1")
      
      if !(cidade.nil?)
        imovels = imovels.where("cidade_id = ?", cidade["id"]) unless cidade["id"].blank?
      end
      
      if !(bairro.nil?)
        imovels = imovels.where("bairro_id = ?", bairro["id"]) unless bairro["id"].blank?
      end
      
      if !(tipo.nil?)
        imovels = imovels.where("tipo_id = ?", tipo["id"]) unless tipo["id"].blank?
      end
      
      imovels = imovels.where("quartos >= ?", quartos) if quartos.present?
      imovels = imovels.where("banheiros >= ?", banheiros) if banheiros.present?
      imovels = imovels.where("suites >= ?", suites) if suites.present?
      imovels = imovels.where("preco >= ?", preco_min) if preco_min.present?
      imovels = imovels.where("preco <= ?", preco_max) if preco_max.present?
      imovels 
    else
      Imovel.all
    end
  end
end
