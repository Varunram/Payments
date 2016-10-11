class CreateBearings < ActiveRecord::Migration
  def change
    create_table :bearings do |t|
      t.integer :slno
      t.string :codeno
      t.string :typec
      t.string :materialdescription
      t.string :size
      t.string :quantity
      t.float :price

      t.timestamps
    end
  end
end
