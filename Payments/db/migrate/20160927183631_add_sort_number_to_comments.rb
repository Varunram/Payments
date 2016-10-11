class AddSortNumberToComments < ActiveRecord::Migration
  def change
    add_column :comments, :sort_number, :integer
  end
end
