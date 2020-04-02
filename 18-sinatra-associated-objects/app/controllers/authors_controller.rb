class AuthorsController < Sinatra::Base

    set :views, "app/views/authors"

    get "/authors" do 
        @authors = Author.all 
        erb :index
    end

    get "/authors/new" do 
        # load an empty author form
        erb :new
    end

    get "/authors/:id" do 
        @author = Author.find(params[:id])
        erb :show

    end

    post "/authors" do
        author_name = params[:name]
        author = Author.create(name: author_name)
        params["book"].each do |book_param|
            book_name = book_param[:name]
            book_snippet = book_param[:snippet]
            if !book_name.empty?
                Book.create(title: book_name,
                    snippet: book_snippet,
                    author_id: author.id)
            end
        end
        redirect "/authors/#{author.id}"
    end
end


