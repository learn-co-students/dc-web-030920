class PetsController < ApplicationController
  before_action :get_doge, only: [:show, :edit, :destroy, :update]
  def index
    @pets = Pet.where(dog: true)
  end

  def show
  end

  def new
    @pet = Pet.new
  end

  def create
    dog = Pet.new(good_boi_traits)
    if dog.valid?
      dog.save
      redirect_to dog
    else
      @pet = dog
      render :new
    end
  end

  def update
    if @pet.update(good_boi_traits)
      redirect_to @pet
    else
      render :show
    end
  end

  def edit
  end

  def destroy
    @pet.destroy
    redirect_to pets_path
  end

  def not_doges
    @pets = Pet.where(dog: false)
    render :cats
  end

  private

  def get_doge
    @pet = Pet.find(params[:id])
  end

  def good_boi_traits
    params.require(:pet).permit(:name, :phrase, :picture, :bio, :dog)
  end
end
