class CarouselImage < ApplicationRecord
  belongs_to :home_page
  has_attached_file :image

end
