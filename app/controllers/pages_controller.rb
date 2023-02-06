class PagesController < ApplicationController
    before_action :authorize

    def index
        pages = Page.all
        render json: pages
    end

    # def show
    #     page = Page.find_by(id: params[:id])
    #     if page.valid?
    #         render json: page, status: :created
    #     else
    #         render json: { errors: page.errors.full_messages }, status: :unprocessable_entity
    #     end
    # end

    def create
        page = Page.create(page_params)
        if page.valid?
            render json: page, status: :created
        else
            render json: { errors: page.errors.full_messages }, status: :unprocessable_entity
        end
    end


    def search
        pages = Page.where("title LIKE ?", "%#{params[:search]}%")
        if pages
            render json: pages, status: :created
        else
            render json: { errors: page.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def higherPages
        pages = Page.all.map do |page|
            if page.posts.length > params[:size]
                page
            end
        end

        render json: pages
    end

    private


    def page_params
        params.permit(:title, :bio, :size)
    end
    
    def authorize
      return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end

end
