class Page < ApplicationRecord
    validates :title, presence: true, uniqueness: true

    has_many :posts, dependent: :destroy
    has_many :users, through: :posts
end
