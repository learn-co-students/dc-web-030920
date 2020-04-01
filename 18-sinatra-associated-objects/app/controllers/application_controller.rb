class ApplicationController < Sinatra::Base

    set :views, "app/views"
    set :method_override, true

    get "/" do 
        erb :home
    end

    get "/funtimes/:first_number/:second_number/:third_number" do
        @first = params[:first_number].to_i
        @second = params[:second_number].to_i
        @third = params[:third_number].to_i
        erb(:donow)
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

    get "/books/new" do 
        # renders empty form
        erb :new
    end

    post "/books" do 
        # creates a new book in the database
        # redirects to show page
        title = params[:title]
        author = params[:author]
        snippet = params[:snippet]
        book = Book.create(title: title, author: author, snippet: snippet)
        redirect "/books/#{book.id}"
    end

    get "/books/:id" do 
        id = params[:id]
        @book = Book.find(id)
        erb :show
    end

    get "/books/:id/edit" do 
        @book = Book.find(params[:id])
        erb :edit

    end

    put "/books/:id" do 
        book = Book.find(params[:id])
        title = params[:title]
        author = params[:author]
        snippet = params[:snippet]
        book.update(title: title, author: author, snippet: snippet)
        redirect "/books/#{book.id}"
    end

    delete "/books/:id" do 
        book = Book.find(params[:id])
        book.destroy 
        redirect "/books"
    end


end
