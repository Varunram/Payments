class TubesController < ApplicationController
  before_action :set_tube, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @tubes = Tube.all
    respond_with(@tubes)
  end

  def show
    respond_with(@tube)
  end

  def new
    @tube = Tube.new
    respond_with(@tube)
  end

  def edit
  end

  def create
    @tube = Tube.new(tube_params)
    @tube.save
    respond_with(@tube)
  end

  def update
    @tube.update(tube_params)
    respond_with(@tube)
  end

  def destroy
    @tube.destroy
    respond_with(@tube)
  end

  private
    def set_tube
      @tube = Tube.find(params[:id])
    end

    def tube_params
      params.require(:tube).permit(:slno, :codeno, :typec, :materialgrade, :od, :lg, :weight, :quantity, :price)
    end
end
