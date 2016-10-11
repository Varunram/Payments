require 'test_helper'

class WeldingsControllerTest < ActionController::TestCase
  setup do
    @welding = weldings(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:weldings)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create welding" do
    assert_difference('Welding.count') do
      post :create, welding: { UOM: @welding.UOM, codeno: @welding.codeno, description: @welding.description, price: @welding.price, quantity: @welding.quantity, slno: @welding.slno }
    end

    assert_redirected_to welding_path(assigns(:welding))
  end

  test "should show welding" do
    get :show, id: @welding
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @welding
    assert_response :success
  end

  test "should update welding" do
    patch :update, id: @welding, welding: { UOM: @welding.UOM, codeno: @welding.codeno, description: @welding.description, price: @welding.price, quantity: @welding.quantity, slno: @welding.slno }
    assert_redirected_to welding_path(assigns(:welding))
  end

  test "should destroy welding" do
    assert_difference('Welding.count', -1) do
      delete :destroy, id: @welding
    end

    assert_redirected_to weldings_path
  end
end
