class AddCertificateToUsers < ActiveRecord::Migration
  def change
    add_column :users, :certificate, :string
  end
end
