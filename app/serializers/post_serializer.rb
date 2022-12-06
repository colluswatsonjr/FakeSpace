class PostSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :page_id, :text
  belongs_to :user
  belongs_to :page
end
