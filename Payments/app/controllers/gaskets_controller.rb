class GasketsController < ApplicationController
  before_action :set_gasket, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @gaskets = Gasket.all
    respond_with(@gaskets)
  end

  def show
    respond_with(@gasket)
  end

  def new
    @gasket = Gasket.new
    respond_with(@gasket)
  end

  def edit
  end

  def create
    @gasket = Gasket.new(gasket_params)
    @gasket.save
    respond_with(@gasket)
  end

  def update
    @gasket.update(gasket_params)
    respond_with(@gasket)
  end

  def destroy
    @gasket.destroy
    respond_with(@gasket)
  end

  private
    def set_gasket
      @gasket = Gasket.find(params[:id])
    end

    def gasket_params
      params.require(:gasket).permit(:slno, :codeno, :typec, :material, :nb, :thk, :classc, :quantity, :—-force-plural, :price)
    end
end
