class AddPriceToLinks < ActiveRecord::Migration
  def change
    add_column :links, :price, :integer
  end
end
