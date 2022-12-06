class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :password_digest
  has_many :posts
  has_many :pages, through: :posts
end
