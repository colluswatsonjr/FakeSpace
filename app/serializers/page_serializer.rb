class PageSerializer < ActiveModel::Serializer
  attributes :id, :title, :bio
  has_many :posts
  has_many :users, through: :posts
end
