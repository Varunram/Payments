class AddAuthToLinks < ActiveRecord::Migration
  def change
    add_column :links, :auth, :integer
  end
end
