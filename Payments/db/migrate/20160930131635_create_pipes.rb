class CreatePipes < ActiveRecord::Migration
  def change
    create_table :pipes do |t|
      t.integer :slno
      t.string :codeno
      t.string :description
      t.string :typec
      t.string :materialgrade
      t.string :inch
      t.string :od
      t.string :tk
      t.string :lg
      t.string :quantity
      t.float :price

      t.timestamps
    end
  end
end
