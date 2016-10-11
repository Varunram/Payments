class CreateRods < ActiveRecord::Migration
  def change
    create_table :rods do |t|
      t.integer :slno
      t.string :code
      t.string :typec
      t.string :material
      t.string :size
      t.string :tk
      t.string :dia
      t.string :lg
      t.string :quantity
      t.string :weight
      t.float :price

      t.timestamps
    end
  end
end
