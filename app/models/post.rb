class Post < ApplicationRecord
    validates :user_id, presence: true
    validates :page_id, presence: true

    # validates :page_id, uniqueness: { scope: [:user_id, :page_id] }

    belongs_to :user
    belongs_to :page
end
