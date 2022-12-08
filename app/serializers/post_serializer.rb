class PostSerializer < ActiveModel::Serializer
  attributes :id, :username, :pagename, :text
  def username
    "#{self.object.user.username}"
  end
  def pagename
    "#{self.object.page.title}"
  end
  # belongs_to :user
  # belongs_to :page
end
