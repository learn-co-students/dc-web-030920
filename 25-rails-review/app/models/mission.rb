class Mission < ApplicationRecord
    belongs_to :scientist
    belongs_to :planet

    validates :name, presence: true, uniqueness: {case_sensitive: false}
    validates :scientist, presence: true
    validates :planet, presence: true
end
