class PostSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :page_id, :text
end
