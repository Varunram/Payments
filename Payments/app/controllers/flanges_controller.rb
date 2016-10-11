class FlangesController < ApplicationController
  before_action :set_flange, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @flanges = Flange.all
    respond_with(@flanges)
  end

  def show
    respond_with(@flange)
  end

  def new
    @flange = Flange.new
    respond_with(@flange)
  end

  def edit
  end

  def create
    @flange = Flange.new(flange_params)
    @flange.save
    respond_with(@flange)
  end

  def update
    @flange.update(flange_params)
    respond_with(@flange)
  end

  def destroy
    @flange.destroy
    respond_with(@flange)
  end

  private
    def set_flange
      @flange = Flange.find(params[:id])
    end

    def flange_params
      params.require(:flange).permit(:slno, :codeno, :materialgrade, :size, :classc, :tk, :quantity, :kgs, :price)
    end
end
