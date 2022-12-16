class PagesController < ApplicationController
    def index
        pages = Page.all
        render json: pages
    end
    def show
        page = Page.find_by(id: params[:id])
        if page.valid?
            render json: page, status: :created
        else
            render json: { errors: page.errors.full_messages }, status: :unprocessable_entity
        end
    end
    def create
        page = Page.create(title:params[:title], bio:params[:bio])
        if page.valid?
            render json: page, status: :created
        else
            render json: { errors: page.errors.full_messages }, status: :unprocessable_entity
        end
    end
end
