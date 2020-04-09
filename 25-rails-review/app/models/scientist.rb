class Scientist < ApplicationRecord
    has_many :missions
    has_many :planets, through: :missions

    validates :name, presence: true, uniqueness: {case_sensitive: false}
    validates :field_of_study, presence: true

    def name_with_first_initial
        first_name = self.name.split[0]
        first_initial = first_name[0] + "."
        last_name = self.name.split[1]
        return "#{first_initial} #{last_name}"

    end
end
