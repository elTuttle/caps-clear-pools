class AddHomePageIdToCarouselImages < ActiveRecord::Migration[5.1]
  def change
    add_column :carousel_images, :home_page_id, :integer
  end
end
