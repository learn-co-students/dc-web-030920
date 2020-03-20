User.destroy_all
Tweet.destroy_all
Drink.destroy_all

ann = User.create(username: "ann")
paul = User.create(username: "paul")

tweet1 = Tweet.create(content:"hello I'm Ann", user_id: ann.id)
tweet2 = Tweet.create(content:"hello I'm Paul", user_id: paul.id)

water = Drink.create(name: "water") #both
vodka = Drink.create(name: "vodka") #ann
wine = Drink.create(name: "wine")  #paul

fd1 = FavoriteDrink.create(user_id: ann.id, drink_id: water.id)
fd2 = FavoriteDrink.create(user_id: ann.id, drink_id: vodka.id)
fd3 = FavoriteDrink.create(user_id: paul.id, drink_id: water.id)
fd4 = FavoriteDrink.create(user_id: paul.id, drink_id: wine.id)
