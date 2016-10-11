class CreateFasteners < ActiveRecord::Migration
  def change
    create_table :fasteners do |t|
      t.integer :slno
      t.string :codeno
      t.string :typec
      t.string :grade
      t.string :item
      t.string :size
      t.string :quantity
      t.float :price

      t.timestamps
    end
  end
end
