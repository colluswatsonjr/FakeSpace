class PostsController < ApplicationController
    def index
        posts = Post.all.where(user_id: session[:user_id])
        render json: posts
    end

    # def show
    #     posts = Post.where(user_id: params[:id])
    #     if posts
    #         render json: posts, status: :created
    #     else
    #         render json: { errors: posts.errors.full_messages }, status: :unprocessable_entity
    #     end
    # end

    def create
        post = Post.create(page_id:params[:page_id], user_id:session[:user_id], text:params[:text])
        if post.valid?
            render json: post, status: :created
        else
            render json: { errors: post.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        post = Post.find_by(id:params[:id])
        if post
            post.destroy
            render json: {}
        else
            render json: {error:"Post Not Found"}, status: 404
        end
    end
end
