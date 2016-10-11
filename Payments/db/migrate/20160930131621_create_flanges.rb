class CreateFlanges < ActiveRecord::Migration
  def change
    create_table :flanges do |t|
      t.integer :slno
      t.string :codeno
      t.string :materialgrade
      t.string :size
      t.string :classc
      t.string :tk
      t.string :quantity
      t.string :kgs
      t.float :price

      t.timestamps
    end
  end
end
