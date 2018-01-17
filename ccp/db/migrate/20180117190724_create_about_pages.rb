class CreateAboutPages < ActiveRecord::Migration[5.1]
  def change
    create_table :about_pages do |t|
      t.text :about_1
      t.text :about_2
      t.text :about_3
      t.text :about_4

      t.timestamps
    end
  end
end
