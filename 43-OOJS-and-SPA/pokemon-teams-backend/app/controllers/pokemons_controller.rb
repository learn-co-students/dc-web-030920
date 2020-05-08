class PokemonsController < ApplicationController

  def create
    trainer = Trainer.find(params[:trainer_id])
    if trainer
      if trainer.pokemons.length < 6
        name = Faker::Name.first_name
        species = Faker::Games::Pokemon.name
        pokemon = Pokemon.create(nickname: name, species: species, trainer_id: trainer.id)
        render json: pokemon.to_json(:except => [:created_at, :update_at])
      else
        render json: {error: "Max pokemon exists for trainer"}, status: :bad_request
      end
    else
      render json: {error: "Trainer id not found"}, status: :not_found
    end
  end

  def destroy
    pokemon = Pokemon.find(params[:id])
    render json: pokemon.destroy.to_json(:except => [:created_at, :update_at])
  end
end
