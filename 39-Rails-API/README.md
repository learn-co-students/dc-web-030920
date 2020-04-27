# Modern Web apps:
- JS front end and separate backend
- Each application should be responsible for one thing
- Single page application

# Why Rails API????
- Manage large database (update/add rows)
- Use relationship between models
- Instead of a view, request to server will respond with data (json)
   - Different routes will render different data

### Solution:
- MVC
 - View is now the JS Front-end
 - Models and controllers still in Rails

When page loads, make a fetch call to get hobbies, render the hobbies on the DOM
- /hobbies (when a request is made for this route) => return hobbies as JSON

When page loads, make a fetch call to get cats data, render the cats on the DOM

When the form is submitted, make a POST fetch, render that cat onto the DOM 

### Project Planning
- wireframes: UI for your project
- domain (models and relationships)

### Getting Started
`rails new <app_name> --api --database=postgresql`

### Useful Rails Commands
- `rails g model cat`
- `rake db:migrate rake db:seed`
- `rails g controller cats`

### CORS
- Cross Origin Resource Sharing

### Serializers

##### Custom Serializers

### CRUD
 - We can Read
 - Let's now Create
 - How would we do Update or Delete?
