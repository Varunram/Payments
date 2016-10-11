class RodsController < ApplicationController
  before_action :set_rod, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @rods = Rod.all
    respond_with(@rods)
  end

  def show
    respond_with(@rod)
  end

  def new
    @rod = Rod.new
    respond_with(@rod)
  end

  def edit
  end

  def create
    @rod = Rod.new(rod_params)
    @rod.save
    respond_with(@rod)
  end

  def update
    @rod.update(rod_params)
    respond_with(@rod)
  end

  def destroy
    @rod.destroy
    respond_with(@rod)
  end

  private
    def set_rod
      @rod = Rod.find(params[:id])
    end

    def rod_params
      params.require(:rod).permit(:slno, :code, :typec, :material, :size, :tk, :dia, :lg, :quantity, :weight, :price)
    end
end
