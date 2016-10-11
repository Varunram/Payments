class CreateCerts < ActiveRecord::Migration
  def change
    create_table :certs do |t|
      t.string :attachment

      t.timestamps
    end
  end
end
