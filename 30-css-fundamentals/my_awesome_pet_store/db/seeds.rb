# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Pet.create!(name: Faker::Creature::Dog.name, bio: Faker::Hipster.paragraph(sentence_count: 5), phrase: Faker::Creature::Dog.meme_phrase, picture: 'https://images.unsplash.com/photo-1549291981-56d443d5e2a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')
Pet.create!(name: Faker::Creature::Dog.name, bio: Faker::Hipster.paragraph(sentence_count: 5), phrase: Faker::Creature::Dog.meme_phrase, picture: 'https://images.unsplash.com/photo-1555897209-208b67f652c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80')
Pet.create!(name: Faker::Creature::Dog.name, bio: Faker::Hipster.paragraph(sentence_count: 5), phrase: Faker::Creature::Dog.meme_phrase, picture: 'https://images.unsplash.com/photo-1520087619250-584c0cbd35e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=770&q=80')
Pet.create!(name: Faker::Creature::Dog.name, bio: Faker::Hipster.paragraph(sentence_count: 5), phrase: Faker::Creature::Dog.meme_phrase, picture: 'https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')
Pet.create!(name: Faker::Creature::Dog.name, bio: Faker::Hipster.paragraph(sentence_count: 5), phrase: Faker::Creature::Dog.meme_phrase, picture: 'https://images.unsplash.com/photo-1504826260979-242151ee45b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80')
Pet.create!(name: Faker::Creature::Dog.name, bio: Faker::Hipster.paragraph(sentence_count: 5), phrase: Faker::Creature::Dog.meme_phrase, picture: 'https://images.unsplash.com/photo-1504826260979-242151ee45b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80')
Pet.create!(name: Faker::Creature::Cat.name, bio: Faker::Hipster.paragraph(sentence_count: 5), phrase: Faker::Creature::Dog.meme_phrase, picture: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80', dog: false)
Pet.create!(name: Faker::Creature::Cat.name, bio: Faker::Hipster.paragraph(sentence_count: 5), phrase: Faker::Creature::Dog.meme_phrase, picture: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80', dog: false)