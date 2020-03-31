# application_controller.rb

```rb
def ApplicationController < Sinatra::Base

    get "funtimes/:first_number/:second_number/:third_number" do
        @first = params[:first_number].to_i
        @second = params[:second_number].to_i
        @third = params[:third_number].to_i
        erb :do_now
    end

end
```

# do_now.erb
```rb 
<% @third.times do %>
    <h1><%= @first * 10 %></h1>
    <h2><%= @second * 100 %></h2>
<% end %>

```

# QUESTION
If the user navigates to "mywebsite/funtimes/1/2/3" what will appear on the screen?

10 
10
10 
200 
200 
200

<h1>10
<h2>200
10
200
10
200

10
200


