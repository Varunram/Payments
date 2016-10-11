require 'test_helper'

class RodsControllerTest < ActionController::TestCase
  setup do
    @rod = rods(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:rods)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create rod" do
    assert_difference('Rod.count') do
      post :create, rod: { code: @rod.code, dia: @rod.dia, lg: @rod.lg, material: @rod.material, price: @rod.price, quantity: @rod.quantity, size: @rod.size, slno: @rod.slno, tk: @rod.tk, typec: @rod.typec, weight: @rod.weight }
    end

    assert_redirected_to rod_path(assigns(:rod))
  end

  test "should show rod" do
    get :show, id: @rod
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @rod
    assert_response :success
  end

  test "should update rod" do
    patch :update, id: @rod, rod: { code: @rod.code, dia: @rod.dia, lg: @rod.lg, material: @rod.material, price: @rod.price, quantity: @rod.quantity, size: @rod.size, slno: @rod.slno, tk: @rod.tk, typec: @rod.typec, weight: @rod.weight }
    assert_redirected_to rod_path(assigns(:rod))
  end

  test "should destroy rod" do
    assert_difference('Rod.count', -1) do
      delete :destroy, id: @rod
    end

    assert_redirected_to rods_path
  end
end
