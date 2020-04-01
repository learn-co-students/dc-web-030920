class AuthorsController < Sinatra::Base

    set :views, "app/views/authors"

    get "/authors" do 
        @authors = Author.all 
        erb :index
    end

    get "/authors/:id" do 
        @author = Author.find(params[:id])
        erb :show

    end

end