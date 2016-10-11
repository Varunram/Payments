require 'test_helper'

class PipesControllerTest < ActionController::TestCase
  setup do
    @pipe = pipes(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:pipes)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create pipe" do
    assert_difference('Pipe.count') do
      post :create, pipe: { codeno: @pipe.codeno, description: @pipe.description, inch: @pipe.inch, lg: @pipe.lg, materialgrade: @pipe.materialgrade, od: @pipe.od, price: @pipe.price, quantity: @pipe.quantity, slno: @pipe.slno, tk: @pipe.tk, typec: @pipe.typec }
    end

    assert_redirected_to pipe_path(assigns(:pipe))
  end

  test "should show pipe" do
    get :show, id: @pipe
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @pipe
    assert_response :success
  end

  test "should update pipe" do
    patch :update, id: @pipe, pipe: { codeno: @pipe.codeno, description: @pipe.description, inch: @pipe.inch, lg: @pipe.lg, materialgrade: @pipe.materialgrade, od: @pipe.od, price: @pipe.price, quantity: @pipe.quantity, slno: @pipe.slno, tk: @pipe.tk, typec: @pipe.typec }
    assert_redirected_to pipe_path(assigns(:pipe))
  end

  test "should destroy pipe" do
    assert_difference('Pipe.count', -1) do
      delete :destroy, id: @pipe
    end

    assert_redirected_to pipes_path
  end
end
