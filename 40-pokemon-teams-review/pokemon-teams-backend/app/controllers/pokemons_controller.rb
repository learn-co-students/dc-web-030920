class PokemonsController < ApplicationController
  def create
    name = Faker::Name.first_name
    species = Faker::Games::Pokemon.name
    pokemon = Pokemon.create(nickname: name, species: species, trainer_id: params[:trainer_id])
    render json: pokemon
  end

  def destroy
    pokemon = Pokemon.destroy(params[:id])
    render json: pokemon
  end
end
