class Snack < ApplicationRecord
    belongs_to :retailer, optional: true
    validates :name, presence: true
    validates :calories, presence: true, numericality: {only_integer: true}
    validates :deliciousness, presence: true

end
