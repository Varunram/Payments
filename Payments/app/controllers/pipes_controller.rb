class PipesController < ApplicationController
  before_action :set_pipe, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @pipes = Pipe.all
    respond_with(@pipes)
  end

  def show
    respond_with(@pipe)
  end

  def new
    @pipe = Pipe.new
    respond_with(@pipe)
  end

  def edit
  end

  def create
    @pipe = Pipe.new(pipe_params)
    @pipe.save
    respond_with(@pipe)
  end

  def update
    @pipe.update(pipe_params)
    respond_with(@pipe)
  end

  def destroy
    @pipe.destroy
    respond_with(@pipe)
  end

  private
    def set_pipe
      @pipe = Pipe.find(params[:id])
    end

    def pipe_params
      params.require(:pipe).permit(:slno, :codeno, :description, :typec, :materialgrade, :inch, :od, :tk, :lg, :quantity, :price)
    end
end
