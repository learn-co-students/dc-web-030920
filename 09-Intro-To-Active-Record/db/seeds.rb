## This is where you can put your seed data
User.destroy_all

User.create(username:"coffee_dad")
User.create(username:"tea_mother", bio: "I love tea")
User.create(username:"soda_uncle", bio: "I like fizzy")
User.create(username:"beer_brother")
