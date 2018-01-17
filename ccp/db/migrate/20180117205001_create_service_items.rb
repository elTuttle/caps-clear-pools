class CreateServiceItems < ActiveRecord::Migration[5.1]
  def change
    create_table :service_items do |t|
      t.string :value
      t.integer :type

      t.timestamps
    end
  end
end
