class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    
    has_many :posts
    has_many :pages, through: :posts
end
