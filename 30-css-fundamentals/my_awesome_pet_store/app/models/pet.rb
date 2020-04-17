class Pet < ApplicationRecord
  validate :is_good_boi_or_gurl, on: :create
  validates :name, presence: true
  validates :phrase, presence: true

  def is_good_boi_or_gurl
    if !self.dog
      self.errors[:yikes] << "you hate to see it, but that's not allowed. Please enter a good boi or gurl"
    end
  end

end
