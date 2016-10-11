require 'test_helper'

class FastenersControllerTest < ActionController::TestCase
  setup do
    @fastener = fasteners(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:fasteners)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create fastener" do
    assert_difference('Fastener.count') do
      post :create, fastener: { codeno: @fastener.codeno, grade: @fastener.grade, item: @fastener.item, price: @fastener.price, quantity: @fastener.quantity, size: @fastener.size, slno: @fastener.slno, typec: @fastener.typec }
    end

    assert_redirected_to fastener_path(assigns(:fastener))
  end

  test "should show fastener" do
    get :show, id: @fastener
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @fastener
    assert_response :success
  end

  test "should update fastener" do
    patch :update, id: @fastener, fastener: { codeno: @fastener.codeno, grade: @fastener.grade, item: @fastener.item, price: @fastener.price, quantity: @fastener.quantity, size: @fastener.size, slno: @fastener.slno, typec: @fastener.typec }
    assert_redirected_to fastener_path(assigns(:fastener))
  end

  test "should destroy fastener" do
    assert_difference('Fastener.count', -1) do
      delete :destroy, id: @fastener
    end

    assert_redirected_to fasteners_path
  end
end
