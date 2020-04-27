# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cat.destroy_all
Hobby.destroy_all
CatHobby.destroy_all

Cat.create(name: "Mittens", breed: "Persian", is_house_trained: false, image: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg")
Cat.create(name: "Hunter", breed: "Tabby", is_house_trained: true, image: "https://i.pinimg.com/originals/6f/38/cd/6f38cd7ab303f443f4c1bf0b6fadad71.jpg")
Cat.create(name: "Garfield", breed: "Tabby", is_house_trained: true, image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Garfield_the_Cat.svg/1200px-Garfield_the_Cat.svg.png")
Cat.create(name: "Meowth", breed: "Calico", is_house_trained: true, image: "https://vignette.wikia.nocookie.net/pokemon/images/2/2b/Rocket_Meowth.png")

Hobby.create(name: "Hunting", description:"hunting")
Hobby.create(name: "Sleeping", description:"zzzz")
Hobby.create(name: "Chasing away mice", description:"I'm probably going to eat them...")

CatHobby.create(cat_id: Cat.all.sample.id, hobby_id: Hobby.all.sample.id)
CatHobby.create(cat_id: Cat.all.sample.id, hobby_id: Hobby.all.sample.id)
CatHobby.create(cat_id: Cat.all.sample.id, hobby_id: Hobby.all.sample.id)
CatHobby.create(cat_id: Cat.all.sample.id, hobby_id: Hobby.all.sample.id)
CatHobby.create(cat_id: Cat.all.sample.id, hobby_id: Hobby.all.sample.id)
CatHobby.create(cat_id: Cat.all.sample.id, hobby_id: Hobby.all.sample.id)
