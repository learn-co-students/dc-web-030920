class Retailer < ApplicationRecord
    has_many :snacks 
    accepts_nested_attributes_for :snacks, 
        reject_if: Proc.new {|attributes| attributes[:name].blank?}
    validates :name, presence: true, uniqueness: {case_sensitive: false}
    validates :year_established, presence: true
    validate :custom_validator_method

    def custom_validator_method
       if !(self.year_established >= 1800 && self.year_established <= Date.today.year)
            errors.add(:year_established, "must be between 1800 and #{Date.today.year}")
        end
    end

    # def yelled_name
    #     self.name.upcase
    # end

    # def deijah
    #     "Deijah"
    # end
end
