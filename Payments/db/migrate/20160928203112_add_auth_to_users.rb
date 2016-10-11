class AddAuthToUsers < ActiveRecord::Migration
  def change
    add_column :users, :auth, :integer
  end
end
