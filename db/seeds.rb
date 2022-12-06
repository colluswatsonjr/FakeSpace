# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "📃 Seeding data..."

User.create(username: 'hearLouis', first_name: 'Louis', last_name: 'Watson', password_digest: 'default')
User.create(username: 'seeTre', first_name: 'Tre', last_name: 'Watson', password_digest: 'default')
User.create(username: 'speakCollus', first_name: 'Junior', last_name: 'Watson', password_digest: 'default')

Page.create(title: 'Comedy', bio:'This page is dedicated to Comedy' )
Page.create(title: 'Horror', bio:'This page is dedicated to Horror' )
Page.create(title: 'Action', bio:'This page is dedicated to Action' )

Post.create(user_id: 1, page_id: 1, text:'This is random')
Post.create(user_id: 1, page_id: 3, text:'This is random')
Post.create(user_id: 2, page_id: 1, text:'This is random')
Post.create(user_id: 2, page_id: 2, text:'This is random')
Post.create(user_id: 3, page_id: 2, text:'This is random')
Post.create(user_id: 3, page_id: 3, text:'This is random')

puts "✅ Done seeding"
