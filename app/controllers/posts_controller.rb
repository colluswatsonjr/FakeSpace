class PostsController < ApplicationController
    def index
        posts = Post.all
        render json: posts
    end

    def create
        post = Post.create(page_id:params[:page_id], user_id:session[:user_id], text:params[:text])
        if post.valid?
            render json: post, status: :created
        else
            render json: { errors: post.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        return render json: { errors: ["Not authorized" ]}, status: :unauthorized unless session.include? :user_id
        post = Post.find_by(id:params[:id])
        if post
            post.destroy
            render json: {}
        else
            render json: {error:"Post Not Found"}, status: 404
        end
    end
end
