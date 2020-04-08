class Retailer < ApplicationRecord
    has_many :snacks 
    accepts_nested_attributes_for :snacks

    # def yelled_name
    #     self.name.upcase
    # end

    # def deijah
    #     "Deijah"
    # end
end
