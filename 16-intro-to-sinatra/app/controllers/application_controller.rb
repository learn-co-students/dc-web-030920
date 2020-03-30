class ApplicationController < Sinatra::Base

    set :views, "app/views"

    get "/" do 
        erb :home
    end

    get "/hello/:greeting/:name" do 
        @numbers = [1, 2, 3]
        @person = params[:name]
        @greeting = params[:greeting]
        erb :hello
    end

    get "/books" do 
        @books = Book.all
        erb :index
    end

    get "/books/:id" do 
        id = params[:id]
        @book = Book.find(id)
        erb :show
    end

end
