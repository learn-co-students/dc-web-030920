# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

nachos = Snack.find_or_create_by(name: "Nachos", calories: 500, deliciousness: 3)
mozzarella_sticks = Snack.find_or_create_by(name: "Mozzarella Sticks", calories: 600, deliciousness: 7)

cookies = Snack.find_or_create_by(name: "Chocolate Chip Cookies", calories: 300, deliciousness: 8)