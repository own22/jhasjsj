class Imovel < ActiveRecord::Base
  belongs_to :tipo
  belongs_to :cidade
  belongs_to :bairro

  attr_accessor :novo_tipo
  attr_accessor :nova_cidade
  attr_accessor :novo_bairro

  before_save :criar_assossiations
  after_destroy :cleanup

  def criar_assossiations
    self.tipo_id = Tipo.find_or_create_by(nome: novo_tipo).id unless novo_tipo.blank?
    self.cidade_id = Cidade.find_or_create_by(nome: nova_cidade).id unless nova_cidade.blank?
    self.bairro_id = Bairro.find_or_create_by(nome: novo_bairro, cidade_id: self.cidade_id).id unless novo_bairro.blank?
  end

  def self.pesquisa(cidade, bairro, tipo)
    if ( cidade || bairro || tipo )
      imovels = Imovel.all
      imovels = Imovel.where("cidade_id = ?", cidade["id"]) unless cidade["id"].blank?
      imovels = Imovel.where("bairro_id = ?", bairro["id"]) unless bairro["id"].blank?
      imovels = Imovel.where("tipo_id = ?", tipo["id"]) unless tipo["id"].blank?
      imovels 
    else
      Imovel.all
    end
  end
    
  private

  def cleanup
      
    if !(self.tipo_id.nil?) && Imovel.find_by(tipo_id: self.tipo_id).nil?
      Tipo.find(self.tipo_id).destroy
    end

    if !(self.cidade_id.nil?) && Imovel.find_by(cidade_id: self.cidade_id).nil?
      Cidade.find(self.cidade_id).destroy
    end

    if !(self.bairro_id.nil?) && Imovel.find_by(bairro_id: self.bairro_id).nil?
      Bairro.find(self.bairro_id).destroy
    end

  end
end
