

hello
you're right above me

# Intro to Active Record

### Review on ORMs
 - Bridge the gap between Ruby World and Database Land

### Introducing ActiveRecord::Base class
 - What happens when I comment out all of the code in User.rb?
 - How does it know which model is mapped to which table?
 - You can have both regular instance/class methods with ActiveRecord methods

### Active Record Set Up (and how that's different)
- new gems in your `Gemfile`
- `environment.rb` is a little different too

#### Is there a need for our tools/console.rb file now??????
 - binding.pry
 - Let's introduce `rake` for that
 - `Rakefile` can create custom tasks,
  - But if we utilize our new gems...
  - We get access to all these new tasks we can see with `rake -T`


### Migration Files and DB Migrations
- Migration files are used to track our database changes over time
  - Tracks the architectural (schema) changes from creation to present snapshot
- With ActiveRecord, to create a migration file
  `rake db:create_migration NAME=create_users_table`
- What's the timestamp in the file name?
- Migrations are "down" or "up" and have a def change method
  - See ActiveRecord::Migration docs
- `db:migrate:status` to see the migration status
- `rake db:migrate` to run the migration
- Check your `schema.rb` to see the current snapshot of your database
- `rake db:rollback` to undo the last migration
- Spelling matters :/

### Seed File/Data
- `rake db:seed` and dummy data
- To set up your project
- Create migration files to make your DB
    `rake db:create_migration NAME=create_users_table`
- `rake db:migrate` to make your DB and its tables
- `rake db:seed` to add in some starter data
- Now you're ready to go!


## We are building twitter
- Want a way to streamline our development process
  - Kill our database at any time
  - Create a new database at any time
  - populate that database with standard data
