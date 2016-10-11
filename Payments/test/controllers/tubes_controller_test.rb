require 'test_helper'

class TubesControllerTest < ActionController::TestCase
  setup do
    @tube = tubes(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:tubes)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create tube" do
    assert_difference('Tube.count') do
      post :create, tube: { codeno: @tube.codeno, lg: @tube.lg, materialgrade: @tube.materialgrade, od: @tube.od, price: @tube.price, quantity: @tube.quantity, slno: @tube.slno, typec: @tube.typec, weight: @tube.weight }
    end

    assert_redirected_to tube_path(assigns(:tube))
  end

  test "should show tube" do
    get :show, id: @tube
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @tube
    assert_response :success
  end

  test "should update tube" do
    patch :update, id: @tube, tube: { codeno: @tube.codeno, lg: @tube.lg, materialgrade: @tube.materialgrade, od: @tube.od, price: @tube.price, quantity: @tube.quantity, slno: @tube.slno, typec: @tube.typec, weight: @tube.weight }
    assert_redirected_to tube_path(assigns(:tube))
  end

  test "should destroy tube" do
    assert_difference('Tube.count', -1) do
      delete :destroy, id: @tube
    end

    assert_redirected_to tubes_path
  end
end
