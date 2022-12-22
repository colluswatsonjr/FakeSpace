class Post < ApplicationRecord
    validates :user_id, presence: true
    validates :page_id, presence: true
    validates :text, presence: true

    belongs_to :user
    belongs_to :page
end
