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
        user = User.find(session[:user_id])
        post = user.posts.create(post_params)
        if post.valid?
            render json: post, status: :created
        else
            render json: { errors: post.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        user = User.find(session[:user_id])
        post = user.posts.find_by(id:params[:id])
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

    def post_params
        params.permit(:page_id, :text)
    end
    def authorize
      return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
