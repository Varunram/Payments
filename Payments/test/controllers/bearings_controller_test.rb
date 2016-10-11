require 'test_helper'

class BearingsControllerTest < ActionController::TestCase
  setup do
    @bearing = bearings(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:bearings)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create bearing" do
    assert_difference('Bearing.count') do
      post :create, bearing: { codeno: @bearing.codeno, materialdescription: @bearing.materialdescription, price: @bearing.price, quantity: @bearing.quantity, size: @bearing.size, slno: @bearing.slno, typec: @bearing.typec }
    end

    assert_redirected_to bearing_path(assigns(:bearing))
  end

  test "should show bearing" do
    get :show, id: @bearing
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @bearing
    assert_response :success
  end

  test "should update bearing" do
    patch :update, id: @bearing, bearing: { codeno: @bearing.codeno, materialdescription: @bearing.materialdescription, price: @bearing.price, quantity: @bearing.quantity, size: @bearing.size, slno: @bearing.slno, typec: @bearing.typec }
    assert_redirected_to bearing_path(assigns(:bearing))
  end

  test "should destroy bearing" do
    assert_difference('Bearing.count', -1) do
      delete :destroy, id: @bearing
    end

    assert_redirected_to bearings_path
  end
end
