class TrainersController < ApplicationController

  def index
    render json: Trainer.all.to_json(
      :include => {:pokemons => {:except => [:created_at, :updated_at]}},
      :except => [:created_at, :updated_at]
    )
  end
end
