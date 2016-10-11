class FittingsController < ApplicationController
  before_action :set_fitting, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @fittings = Fitting.all
    respond_with(@fittings)
  end

  def show
    respond_with(@fitting)
  end

  def new
    @fitting = Fitting.new
    respond_with(@fitting)
  end

  def edit
  end

  def create
    @fitting = Fitting.new(fitting_params)
    @fitting.save
    respond_with(@fitting)
  end

  def update
    @fitting.update(fitting_params)
    respond_with(@fitting)
  end

  def destroy
    @fitting.destroy
    respond_with(@fitting)
  end

  private
    def set_fitting
      @fitting = Fitting.find(params[:id])
    end

    def fitting_params
      params.require(:fitting).permit(:slno, :codeno, :typec, :materialgrade, :itemdescription, :size, :sch, :lr, :quantity, :price)
    end
end
