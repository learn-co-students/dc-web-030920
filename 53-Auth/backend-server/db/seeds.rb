User.destroy_all

15.times do
  User.create(
    username: Faker::TvShows::Friends.character.split(/ /).join(),
    avatar: Faker::Avatar.image,
    password: "hi",
    bio: Faker::TvShows::Friends.quote
  )
end
