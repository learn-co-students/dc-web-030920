class Drink < ActiveRecord::Base
  has_many :favorite_drinks
  has_many :users, through: :favorite_drinks
end
