class BearingsController < ApplicationController
  before_action :set_bearing, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @bearings = Bearing.all
    respond_with(@bearings)
  end

  def show
    respond_with(@bearing)
  end

  def new
    @bearing = Bearing.new
    respond_with(@bearing)
  end

  def edit
  end

  def create
    @bearing = Bearing.new(bearing_params)
    @bearing.save
    respond_with(@bearing)
  end

  def update
    @bearing.update(bearing_params)
    respond_with(@bearing)
  end

  def destroy
    @bearing.destroy
    respond_with(@bearing)
  end

  private
    def set_bearing
      @bearing = Bearing.find(params[:id])
    end

    def bearing_params
      params.require(:bearing).permit(:slno, :codeno, :typec, :materialdescription, :size, :quantity, :price)
    end
end
