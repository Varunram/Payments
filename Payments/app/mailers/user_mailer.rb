class UserMailer < ActionMailer::Base
  default :from => "noreply@kandlar.com"
  def registraion_confirmation(user)
    @user=usermail(:to => "#{user.name} <#{user.email}>", :subject => "Registration Confirmation")
  end
end
