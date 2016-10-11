class FastenersController < ApplicationController
  before_action :set_fastener, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @fasteners = Fastener.all
    respond_with(@fasteners)
  end

  def show
    respond_with(@fastener)
  end

  def new
    @fastener = Fastener.new
    respond_with(@fastener)
  end

  def edit
  end

  def create
    @fastener = Fastener.new(fastener_params)
    @fastener.save
    respond_with(@fastener)
  end

  def update
    @fastener.update(fastener_params)
    respond_with(@fastener)
  end

  def destroy
    @fastener.destroy
    respond_with(@fastener)
  end

  private
    def set_fastener
      @fastener = Fastener.find(params[:id])
    end

    def fastener_params
      params.require(:fastener).permit(:slno, :codeno, :typec, :grade, :item, :size, :quantity, :price)
    end
end
