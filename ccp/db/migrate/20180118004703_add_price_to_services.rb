class AddPriceToServices < ActiveRecord::Migration[5.1]
  def change
    add_column :services, :price, :integer
  end
end
