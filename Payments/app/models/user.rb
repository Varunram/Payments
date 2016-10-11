class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :confirmable
  has_many :links
  before_create :confirmation_token
  mount_uploader :certificate, CertificateUploader
  def admin?
    self.admin
  end
  def update
    user = User.find_by_id(params[:id])
    unless user.blank?
      if user.update_attributes(params[:user])
        flash[:notice] = "User updated successfully."
        redirect_to "root#index"
      else
        render :action => 'edit'
      end
    else
      render :action => 'edit'
    end
  end
end
