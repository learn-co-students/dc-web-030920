class CatsController < ApplicationController
  def index
    render json: Cat.all.as_json(:include => :hobbies) #Array of only cat data (NO hobbies data ) .as_json
  end

  def show
    cat = Cat.find(params[:id])
    render json: cat.as_json(:include => :hobbies)
  end

  def destroy
    cat = Cat.find(params[:id])
    cat.destroy
    render json: cat
  end

  #post /cat
  def create
    cat = Cat.create(cat_params)
    #create a new cat in the DB
    #respond with the new cat
    render json: cat.as_json(:include => "hobbies")
  end

  private
  def cat_params
    params.require(:cat).permit(:name, :breed, :image, :is_house_trained)
  end
end
