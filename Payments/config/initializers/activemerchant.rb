if Rails.env == "development"
  ActiveMerchant::Billing::FirstdataE4Gateway.wiredump_device = File.open(Rails.root.join("log","active_merchant.log"), "a+")
  ActiveMerchant::Billing::FirstdataE4Gateway.wiredump_device.sync = true
  ActiveMerchant::Billing::Base.mode = :test

  login = "FE5802-41"
  password="09qsg3gyESLE9Dxcxd8kNo7LSced5rMN"
elsif Rails.env == "production"
  login = 'mylogin'
  password='mypassword'
end
GATEWAY = ActiveMerchant::Billing::FirstdataE4Gateway.new({
      login: login,
      password: password
})
