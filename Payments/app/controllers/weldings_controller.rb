class WeldingsController < ApplicationController
  before_action :set_welding, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @weldings = Welding.all
    respond_with(@weldings)
  end

  def show
    respond_with(@welding)
  end

  def new
    @welding = Welding.new
    respond_with(@welding)
  end

  def edit
  end

  def create
    @welding = Welding.new(welding_params)
    @welding.save
    respond_with(@welding)
  end

  def update
    @welding.update(welding_params)
    respond_with(@welding)
  end

  def destroy
    @welding.destroy
    respond_with(@welding)
  end

  private
    def set_welding
      @welding = Welding.find(params[:id])
    end

    def welding_params
      params.require(:welding).permit(:slno, :codeno, :description, :quantity, :UOM, :price)
    end
end
