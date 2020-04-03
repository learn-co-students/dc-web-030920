# Intro to Rails 🛤

## Agenda

- What is Rails
- A Blog in 10 Minutes
- Codealong
  - Installing Rails
  - Create a Rails App
  - Generate a Controller
  - Create Views
  - Generate a Model
  - Generate a Migration

## What is Rails

- A framework we can use to build large-scale web applications in the Ruby language
- Many Rails iterations, but three basic concepts
  1. Ruby programming language
  2. Model-View-Controller Architecture
  3. Programmer Happiness
- Created with the goal of increasing the programmer's productivity and happiness
- **Convention over Configuration**: programmers only need to code out the non-standard parts → i.e. the parts that are specific to your application
- Rails makes it easier for beginner programmers to dive into web development
- Popular websites include:
  - Twitter (at some point)
  - Basecamp
  - Github
  - Hulu
  - Shopify
  - Groupon
  - AirBnB

## A Blog in 10 minutes

- Why use Rails if we have Sinatra 🎩?
  - It's MUCH quicker to build out applications in Rails than it is in Sinatra.
  - As a reminder, this is all the setup required to build a simple Sinatra app [video](https://www.youtube.com/watch?v=9ML8PrP3A8E)
  - We can build out an app of similar scale with Rails in as little as 5 minutes
    `rails new blog-app`
    `cd blog-app`
    - Next, we're going to use a Rails **generator** to help us out. Rails is meant to make our programming lives easier, so it has provided some handy generators to help us with some of the more repeatative tasks.
    `rails generate scaffold Post title:string content:text author:string`
    `rake db:migrate`
    `rails server`
- Drawbacks of scaffold
  - It creates views, controllers, models, routes, css for EVERYthing, which may not be what we want
  - We end up having to delete a lot of files since it can cause unneeded bloat in our app
  - You should only code out what you need, when you need it (i.e. Vertical vs. Horizontal building). It will get you to skateboard a lot faster

## Codealong

- Create a Rails app codealong the BETTER way
- Build a petstore app with full CRUD
  - Create new pets for our store
  - Display a list of all pets and show pet details page
  - Update existing pets' attributes
  - Delete the pet from our database

### Installing Rails

- First, make sure that Rails is installed in your computer
  `gem install rails`
  - Note: versions of Rails change quite rapidly, and if you leave off the `-v`, you'll just get the latest version.
  - Be specific if you want a specific version.  `gem install rails -v=INSERT_RAILS_VERSION_HERE`

### Create a Rails App

- Convention over Configuration:
  - There are conventions you need to learn (e.g. naming, folder structures, etc.) to get Rails to work
  - After you learn/implement them, you shouldn't have to do too much setup
  - The setup can look complex, but we can use the RIGHT Rails CLI generators to do some of the heavy lifting for us
    - Rails scaffold will create the entire RESTful resource for us
      `rails g scaffold Pet name:string animal:string`
      - Doing this will generate and update a lot of files including the code in our controllers for making DB calls and updating our routs.rb 
      - We don’t want to create everything with the scaffold, because we want to be able to customize these things as needed for our app. As a general rule, it’s best to not code something out until you actually need it → rails d scaffold Pet

- The DB defaults to SQLite unless otherwise specified
`rails new my_awesome_pet_store --no-test-framework`

- 90% of the web app code will be inside the `app` fraiolder, including all of our model, view, and controller logic.
- The `config` folder contains all the credentials for the DB and other 3rd party services, all the deployment settings, and the specs about how to serve the app over HTTP
- `db` will contain all your migrations

- As you know, a route is a combination of the path that was requested and the HTTP verb that was used to request the path
  - In Sinatra, we managed the routes and the code executed for that route all in the same place.
  - As our app grows, this can get rather messy and unreadable
  - Rails separates the routing logic out of the the controller and into the `congif/routes.rb` file
  - Everthing between the `do` and the `end` is our routing logic

### Generate a Controller

- In Rails, our routes map to controller `actions` --> You can think of these actions as instance methods provided to us by Rails.
- Our controller actions handle the requests and uses the models to interact with the DB
- The `application_controller` acts as the parent controller linking all controllers your app may have
- Ways to create a controller
  - Manually create the file 👎
    - Create Methods in a RESTful controller: as a reminder, a RESTful resource can have 7 methods → Index, Show, New, Edit, Create, Update, Delete
  - Use a generator to create the controller and all the actions we want to include in it
    - If we want our pets resource to have views and actions for index and show we’d type `rails g controller pets index show` in the command line.  
    - Routes generated would be as followed:
      `get '/pets/index', to: 'pets#index'`
      `get '/pets/show', to: 'pets#show'`

### Create Views

- No specific generator for creating the view file only → can manually create the erb and add to the correct view folder.
  - Can also be created with the controller if actions are specified
- If we want to create an about page for the pets, the **about.erb** can be placed in the **app/pets/views** folder

#### Implicit vs. Explicit Rendering

- Thanks to Rails conventions, we do not need to specify the view file to render in our controller actions. This is call **implicit rendering**

``` ruby
  def index
  end
```

- However, if we want to render a different erb, we can use **explicit rendering**

```ruby
  def index
    render 'cats'
    # This will render cats.html.erb
  end
```

### Generate a Model

- Sometimes you will need to model but not the associated controller
  `rails g model MODEL_NAME [fields]`
- Perhaps you need a model for a join table but do not need routes or actions for that model
  `rails g model OwnerPet owner_id:integer pet_id:integer`
  - NOTE: the arguments defaults to string, so if you want a different data type, you need to specify in the command line or manually change it in the migration file before running the `rails db:migrate command`!

### Generate a Migration

- In Sinatra, you had to generate migrations by hand. With Rails, you can use a generator for this.
- You must follow certain naming conventions to get the Rails magic to work!
  `rails g migration AddAgeToPets age:integer`

## Extra

Rails (like Ruby) tries to be helpful! Throughout the files provided by Rails, you will see a LOT of commented out code. If you have time, look into what the comments are saying. You may discover something cool about Rails to blog about 📚
