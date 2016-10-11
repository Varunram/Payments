class CertsController < ApplicationController
  def index
    @certs= Cert.all
  end

  def new
    @cert=Cert.new
  end

  def create
    @cert=Cert.new(cert_params)

    if @cert.save
      redirect_to links_path, notice: "Resume uploaded successfully"
    else
      render "new"
    end
  end

  def destroy
    @cert=Cert.find(params[:id])
    @cert.destroy
    redirect_to root_path, notice: "The Resume was Deleted"
  end
  private
  def cert_params
    params.require(:cert).oermit(:attachment)
  end

end
