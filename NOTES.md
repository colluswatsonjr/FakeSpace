Use a Rails API backend with a React frontend.

- Created folder to hold project

- Create Server/Client
    - rails new rails-phase-4-project --skip-javascript
        -rails s
    - npx create-react-app client
        - npm install --prefix client
        - npm start --prefix client
    - run both
        - gem install foreman
            - root/Procfile.dev
              web: PORT=4000 npm start --prefix client
              api: PORT=3000 rails s
        - foreman start -f Procfile.dev

---
Have at least three models on the backend, that include the following:
At least two one-to-many relationships.
At least one reciprocal many-to-many relationship (implemented by using 2 has-many-through relationships). Note: in order to accomplish this, your project must include a joins table. This joins table must include a user submittable attribute.

user: :id, :username, :first_name, :last_name, :password_digest
has_many :posts
has_many :pages, through: :posts

post: :id, :page_id, :user_id, :text
belong_to :user
belong_to :page

page: :id, :title, :bio
has_many :posts
has_many :users, through: :posts

---

Full CRUD actions for at least one resource.
Minimum of create and read actions for EACH resource.

    - Create:
        - user (sign in)
        - post (create post)
        - page (comment on post)
    - Read: 
        - user  (look at personal/friends page)
        - posts (read personal/friends post)
        - comments (read personal/friends comments)
    - Update:
        - user (edit user info)
        - post (edit post)
        - page (edit comment)
    - Delete: 
        - user (delete account)
        - post (delte post along with comments)
        - page (delete comment)

GOOD! Have at least three different client-side routes using React Router. Be sure to include a nav bar or other UI element that allows users to navigate between routes.

    GOOD! - User page
        - view user info
        - view self posts
        - view self comments
    GOOD! - World page
        - create post
        - view all posts
        - comment on post
        - view all comments under post
    GOOD! - Account page
        - view account info
        - view account posts

GOOD! - Implement authentication/authorization, including password protection. 
A user must be able to:
    - sign up with a new user account,
    - log in to the site with a secure password and stay logged in via user ID in the session hash
    - log out of the site.

