require 'test_helper'

class GasketsControllerTest < ActionController::TestCase
  setup do
    @gasket = gaskets(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:gaskets)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create gasket" do
    assert_difference('Gasket.count') do
      post :create, gasket: { classc: @gasket.classc, codeno: @gasket.codeno, material: @gasket.material, nb: @gasket.nb, price: @gasket.price, quantity: @gasket.quantity, slno: @gasket.slno, thk: @gasket.thk, typec: @gasket.typec, —-force-plural: @gasket.—-force-plural }
    end

    assert_redirected_to gasket_path(assigns(:gasket))
  end

  test "should show gasket" do
    get :show, id: @gasket
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @gasket
    assert_response :success
  end

  test "should update gasket" do
    patch :update, id: @gasket, gasket: { classc: @gasket.classc, codeno: @gasket.codeno, material: @gasket.material, nb: @gasket.nb, price: @gasket.price, quantity: @gasket.quantity, slno: @gasket.slno, thk: @gasket.thk, typec: @gasket.typec, —-force-plural: @gasket.—-force-plural }
    assert_redirected_to gasket_path(assigns(:gasket))
  end

  test "should destroy gasket" do
    assert_difference('Gasket.count', -1) do
      delete :destroy, id: @gasket
    end

    assert_redirected_to gaskets_path
  end
end
