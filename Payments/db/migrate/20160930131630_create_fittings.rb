class CreateFittings < ActiveRecord::Migration
  def change
    create_table :fittings do |t|
      t.integer :slno
      t.string :codeno
      t.string :typec
      t.string :materialgrade
      t.string :itemdescription
      t.string :size
      t.string :sch
      t.string :lr
      t.string :quantity
      t.float :price

      t.timestamps
    end
  end
end
