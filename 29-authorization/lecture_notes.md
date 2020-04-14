- `rails g migration CreateJoinTableSnacksUser snack user`
- in migration:  `create_join_table :snacks, :users, table_name: :favorites`

- `rails g model Favorite snack_id:integer user_id:integer`

- set up associations on user/snacks/models


- form:

```rb
<h1>Choose Your Favorites</h1>

<%= form_tag favorites_path do %>
    <% Snack.all.each do |s| %>
        <div>
            <%= check_box_tag "snack_ids[]", s.id, current_user.snacks.include?(s) %>
            <%= s.name %>
        </div>
    <% end %>
    <%= submit_tag "Submit" %>
<% end %>

```

`rails g controller Favorites`

```rb
  resources :favorites, only: [:new, :create]
```

- FavoritesController
```rb
def new_favorites
  render :favorite_picker
end

def create_favorites
  snack_ids = params[:snack_ids]
  snack_ids.each do |id|
    new_snack = Snack.find(id)
    if !current_user.snacks.include?(new_snack)
      current_user.snacks << new_snack
    end
  end
  redirect_to snacks_path
end
```

- SnacksController
```rb

  def index
    if session[:user_id]
      @user = User.find(session[:user_id])
      @snacks = @user.snacks
    else
      @snacks = Snack.all # or force a login
    end
  end
```

- Log in code


Works but will be repetitive:
```rb
  def new
    if current_user
      @snack = Snack.new
    else
      redirect_to login_path
    end
  end
  ```

Add to application_controller:
```rb
    def logged_in?
        !!current_user
    end

    def authorized
      redirect_to login_path unless logged_in?
    end
  ```

Add to all controllers that need it:
`before_action :authorized`
(be careful not to include on login page itself)