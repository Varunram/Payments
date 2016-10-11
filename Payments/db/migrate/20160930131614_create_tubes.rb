class CreateTubes < ActiveRecord::Migration
  def change
    create_table :tubes do |t|
      t.integer :slno
      t.string :codeno
      t.string :typec
      t.string :materialgrade
      t.string :od
      t.string :lg
      t.string :weight
      t.string :quantity
      t.float :price

      t.timestamps
    end
  end
end
