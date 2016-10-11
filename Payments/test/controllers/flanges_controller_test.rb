require 'test_helper'

class FlangesControllerTest < ActionController::TestCase
  setup do
    @flange = flanges(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:flanges)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create flange" do
    assert_difference('Flange.count') do
      post :create, flange: { classc: @flange.classc, codeno: @flange.codeno, kgs: @flange.kgs, materialgrade: @flange.materialgrade, price: @flange.price, quantity: @flange.quantity, size: @flange.size, slno: @flange.slno, tk: @flange.tk }
    end

    assert_redirected_to flange_path(assigns(:flange))
  end

  test "should show flange" do
    get :show, id: @flange
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @flange
    assert_response :success
  end

  test "should update flange" do
    patch :update, id: @flange, flange: { classc: @flange.classc, codeno: @flange.codeno, kgs: @flange.kgs, materialgrade: @flange.materialgrade, price: @flange.price, quantity: @flange.quantity, size: @flange.size, slno: @flange.slno, tk: @flange.tk }
    assert_redirected_to flange_path(assigns(:flange))
  end

  test "should destroy flange" do
    assert_difference('Flange.count', -1) do
      delete :destroy, id: @flange
    end

    assert_redirected_to flanges_path
  end
end
