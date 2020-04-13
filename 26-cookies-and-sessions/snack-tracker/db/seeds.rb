# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

hostess = Retailer.find_or_create_by(name: "Hostess", year_established: 1900)
girl_scouts = Retailer.find_or_create_by(name: "Girl Scouts", year_established: 1888)

twinkies = Snack.find_or_create_by(name: "Twinkies", 
    calories: 300, deliciousness: 8, retailer: hostess)
tagalongs = Snack.find_or_create_by(name: "Tagalongs",
    calories: 250, deliciousness: 5, retailer: girl_scouts)
samoas = Snack.find_or_create_by(name: "Samoas",
    calories: 200, deliciousness: 1, retailer: hostess)