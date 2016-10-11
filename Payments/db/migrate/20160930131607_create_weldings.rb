class CreateWeldings < ActiveRecord::Migration
  def change
    create_table :weldings do |t|
      t.integer :slno
      t.string :codeno
      t.string :description
      t.string :quantity
      t.string :UOM
      t.float :price

      t.timestamps
    end
  end
end
