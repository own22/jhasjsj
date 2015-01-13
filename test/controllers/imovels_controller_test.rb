require 'test_helper'

class ImovelsControllerTest < ActionController::TestCase
  setup do
    @imovel = imovels(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:imovels)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create imovel" do
    assert_difference('Imovel.count') do
      post :create, imovel: { aluguel: @imovel.aluguel, bairro_id: @imovel.bairro_id, banheiros: @imovel.banheiros, cidade_id: @imovel.cidade_id, descricao: @imovel.descricao, descricao_curta: @imovel.descricao_curta, preco: @imovel.preco, quartos: @imovel.quartos, suites: @imovel.suites, tipo_id: @imovel.tipo_id, titulo: @imovel.titulo, vagas: @imovel.vagas, venda: @imovel.venda }
    end

    assert_redirected_to imovel_path(assigns(:imovel))
  end

  test "should show imovel" do
    get :show, id: @imovel
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @imovel
    assert_response :success
  end

  test "should update imovel" do
    patch :update, id: @imovel, imovel: { aluguel: @imovel.aluguel, bairro_id: @imovel.bairro_id, banheiros: @imovel.banheiros, cidade_id: @imovel.cidade_id, descricao: @imovel.descricao, descricao_curta: @imovel.descricao_curta, preco: @imovel.preco, quartos: @imovel.quartos, suites: @imovel.suites, tipo_id: @imovel.tipo_id, titulo: @imovel.titulo, vagas: @imovel.vagas, venda: @imovel.venda }
    assert_redirected_to imovel_path(assigns(:imovel))
  end

  test "should destroy imovel" do
    assert_difference('Imovel.count', -1) do
      delete :destroy, id: @imovel
    end

    assert_redirected_to imovels_path
  end
end
