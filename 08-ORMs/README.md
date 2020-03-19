## Let's build Twitter app
* Problem: What happens to all of our data when we restart our app?





## Let's build a Twitter Database with a Users table 
Create a USER table using the SQL command:
* `CREATE TABLE users (id INTEGER PRIMARY KEY, username TEXT);`

Create a new user with a username of 'CoffeeDad'
* `INSERT INTO users (username) VALUES ("Coffee_Dad");`

Get all the users
* `SELECT * FROM users;`

Find a user by their id
* `SELECT * FROM users WHERE id = 1;`

Update User #1's name
`UPDATE users SET name = 'CoffeeDude' WHERE id = 1;`

Delete a User from our table
`DELETE FROM users WHERE id = 1;`



## Organizing Big Projects
- Gemfile and Gemfile.lock
- environment.rb has some new code
- twitter.db

## Solution...
- We already know OO Programming
 - We have a User class
 - We can make instances of User
 - And can call instance/class methods 

- Create methods that will SAVE to our DB table!!!
  - CREATE, READ, Update, Delete


* User.create("Coffee_Dad")
# User.create is going to create an instance of us in Ruby World
# going to save this data into Database Land

* User.find(id)
# return an instance of user with that ID

* User.all
# return all the user instances in the DB
















SELECT LAST_INSERT_ROWID()
