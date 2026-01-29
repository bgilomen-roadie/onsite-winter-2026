module Api
  class BooksController < ApplicationController
    def index
      books = Book.all
      
      # Optional filtering by genre (to demonstrate server-side vs client-side)
      if params[:genre].present?
        books = books.where(genre: params[:genre])
      end
      
      render json: books
    end
    
    def show
      book = Book.find(params[:id])
      render json: book
    end
    
    def genres
      genres = Book.distinct.pluck(:genre)
      render json: genres
    end
  end
end
