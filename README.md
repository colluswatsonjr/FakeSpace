## Post Creation Project: phase 4

This application allows you to create pages as well as add posts to those pages.

## Purpose

Use a Rails API backend with a React frontend.

## Features

- User
    - SignUp and SignIn with user information
    - Display user information on user page (MySpace)
    - Update user information
    _ Deactivate (delete) user information
    - Stores user in Session hash to stay logged in
- Page
    - Display all pages currently created
    - Create new page with title and bio
- Post
    - Display all posts underneath correlating post
    - Create new post underneath post
    - Delete users personally created posts

## Setup
- Fork and clone this https://github.com/colluswatsonjr/FakeSpace
- Run rails db:migrate db:seed
- Run rails server
- Cd to /client
- Run npm install
- Run npm start