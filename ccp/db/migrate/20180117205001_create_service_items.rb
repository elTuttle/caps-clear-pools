class CreateServiceItems < ActiveRecord::Migration[5.1]
  def change
    create_table :service_items do |t|
      t.string :value
      t.integer :who_int
      

      t.timestamps
    end
  end
end
