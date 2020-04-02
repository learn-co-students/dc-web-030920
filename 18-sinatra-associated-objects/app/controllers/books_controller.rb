class BooksController < Sinatra::Base

    set :views, "app/views/books"
    set :method_override, true

    get "/books" do 
        @books = Book.all
        erb :index
    end

    get "/books/new" do 
        # renders empty form
        @authors = Author.all
        erb :new
    end

    post "/books" do 
        # creates a new book in the database
        # redirects to show page
        title = params[:title]
        author = Author.find(params[:author_id])
        snippet = params[:snippet]
        book = Book.create(
            title: title,
            author_id: author.id,
            snippet: snippet)
        redirect "/authors/#{author.id}"
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
        author = Author.find_or_create_by(name: params[:author])
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