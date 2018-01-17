class CreateHomePages < ActiveRecord::Migration[5.1]
  def change
    create_table :home_pages do |t|
      t.text :motto

      t.timestamps
    end
  end
end
