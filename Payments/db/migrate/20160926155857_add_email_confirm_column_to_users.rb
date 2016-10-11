class AddEmailConfirmColumnToUsers < ActiveRecord::Migration
  def change
    add_column :users, :email_confirmed, :boolean, :default=> fals
    add_column :users, :confirm_token, :string
  end
end
