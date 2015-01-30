class PesquisasController < ApplicationController
  
  def index
    @pesquisa = Pesquisa.pesquisa(params[:cidade], params[:bairro], params[:tipo],params[:banheiros], params[:vagas], params[:suites], params[:quartos], params[:preco_min], params[:preco_max], params[:venda], params[:aluguel])
    
    @cidade_select = params[:cidade]
    @bairro_select = params[:bairro]
    @tipo_select = params[:tipo]
    
    if !(@cidade_select.nil?)
      @cidade_select = @cidade_select["id"]
    else
      @cidade_select = {}
    end
    
    if !(@bairro_select.nil?)
      @bairro_select = @bairro_select["id"]
    else
      @bairro_select = {}
    end
    
    if !(@tipo_select.nil?)
      @tipo_select = @tipo_select["id"]
    else
      @tipo_select = {}
    end
      
  end

  def show
  end
  
end
