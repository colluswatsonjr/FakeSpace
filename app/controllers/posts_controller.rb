class PostsController < ApplicationController
    # rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    before_action :authorize

    def index
        posts = Post.all.where(user_id: session[:user_id])
        render json: posts
    end

    def longestPosts
        posts = Post.all.sort { |x,y| y.text.length <=> x.text.length }[0..4]
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
        post = Post.find_by(id:params[:id])
        if post
            if post.user_id === session[:user_id]
                post.destroy
                render json: {}
            else
                render json: {error: "Not Yours To Delete!!!"}
            end
        else
            render json: {error:"Post Not Found"}, status: 404
        end
    end

    private

    # def record_not_found
    #   render json: { error: "Article not found" }, status: :not_found
    # end
    def authorize
      return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
