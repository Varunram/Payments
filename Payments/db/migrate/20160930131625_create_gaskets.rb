class CreateGaskets < ActiveRecord::Migration
  def change
    create_table :gaskets do |t|
      t.integer :slno
      t.string :codeno
      t.string :typec
      t.string :material
      t.string :nb
      t.string :thk
      t.string :classc
      t.string :quantity
      t.float :price

      t.timestamps
    end
  end
end
