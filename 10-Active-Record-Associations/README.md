# ActiveRecord Associations

## Review
- Gemfile
- Rakefile
- config/environment.rb
- lib/

## Migrations
- Addition to the database
- "Version Control"
- Set of changes to the shape of our database

#### Domain
- One user can have many tweets
- One a tweet belongs to a user
- A user can have many drinks
- The same drink can be associated with many users

## In coding
- Skateboard: User can post many tweets
  - Scooter: User should be able to get all their favorite drinks
  See which users like a certain drink

  `user#drinks`
  `drink#users` 

## ActiveRecord Modeling Conventions
- File called `user.rb` defines a class `User`
- Table is called `users`
- Migration often called `create_users`
  - File name and class name must match (words, not title case)


### Steps
1. Create migration
2. Run migration
3. Create the model
  * Remember, models MUST be singular, tables plural
4. Create seed data
5. Build macros and custom methods

`belongs_to :user`
`has_many :users`
